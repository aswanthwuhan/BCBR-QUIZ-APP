import express from "express";
import { createClient } from "@supabase/supabase-js";
import cors from "cors";
import bcrypt from "bcryptjs";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import cookieParser from "cookie-parser";
import { body, validationResult } from "express-validator";

const app = express();
app.set("trust proxy", 1);

// --- Configuration ---
if (!process.env.JWT_SECRET) {
  // Fail closed: a random per-instance secret would make tokens fail randomly across Vercel instances
  throw new Error("CRITICAL: JWT_SECRET must be set in Vercel environment variables!");
}
const JWT_SECRET = process.env.JWT_SECRET;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "https://bcbr-quiz-app.vercel.app").split(",");

// --- Supabase ---
// The server needs Supabase's secret server key (service_role / sb_secret_…), which bypasses
// row level security. The public anon/publishable key only works while RLS is off, which
// leaves every table readable by anyone, so it is accepted only as a deprecated fallback.
const SUPABASE_SERVER_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_ANON_KEY;
if (!process.env.SUPABASE_SERVICE_ROLE_KEY && !process.env.SUPABASE_SECRET_KEY && process.env.SUPABASE_ANON_KEY) {
  console.warn("WARNING: using SUPABASE_ANON_KEY on the server. Set SUPABASE_SERVICE_ROLE_KEY and enable row level security (supabase/enable-rls.sql).");
}

// Escape LIKE/ILIKE wildcards so a username is matched literally (case-insensitively)
function escapeLike(value: string): string {
  return value.replace(/[\\%_]/g, (c) => "\\" + c);
}

let supabase: any = null;
try {
  const supabaseUrl = process.env.SUPABASE_URL;
  if (supabaseUrl && SUPABASE_SERVER_KEY) {
    supabase = createClient(supabaseUrl, SUPABASE_SERVER_KEY);
  } else {
    console.error("CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing!");
  }
} catch (err) {
  console.error("Failed to initialize Supabase client:", err);
}

// --- Helpers ---
function sanitizeError(err: any): string {
  return err?.message || "Internal server error";
}

function generateToken(username: string, tokenVersion: number): string {
  return jwt.sign({ username, tv: tokenVersion }, JWT_SECRET, { expiresIn: "1d" });
}

function setAuthCookie(res: express.Response, token: string) {
  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
  });
}

function clearAuthCookie(res: express.Response) {
  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
}

// --- Auth Middleware ---
async function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
  let token: string | undefined = (req as any).cookies?.auth_token;
  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.slice(7);
    }
  }
  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] }) as { username: string; tv?: number };
    const { data } = await supabase
      .from("users")
      .select("token_version")
      .eq("username", decoded.username)
      .single();
    if (!data || (data.token_version ?? 0) !== (decoded.tv ?? -1)) {
      return res.status(401).json({ error: "Token has been revoked" });
    }
    (req as any).authenticatedUsername = decoded.username;
    (req as any).authToken = token;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// --- CSRF Protection ---
function csrfCheck(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (["GET", "HEAD", "OPTIONS"].includes(req.method)) return next();
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return res.status(403).json({ error: "CSRF validation failed" });
      }
    } catch {
      return res.status(403).json({ error: "CSRF validation failed" });
    }
  }
  next();
}

// --- Timing-Safe Token Comparison ---
function safeTokenCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(Buffer.alloc(bufA.length), bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

// --- Rate Limiters ---
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: "Too many attempts, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
  message: { error: "Too many requests, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});

const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: "Rate limit exceeded" },
  standardHeaders: true,
  legacyHeaders: false,
});

// --- Validation Rules ---
const signupValidation = [
  body("username").trim().isLength({ min: 3, max: 30 }).matches(/^[a-zA-Z0-9_]+$/).withMessage("Username must be 3-30 alphanumeric characters or underscores"),
  body("password")
    .isLength({ min: 8, max: 72 }).withMessage("Password must be 8-72 characters")
    .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/).withMessage("Password must contain at least one lowercase letter")
    .matches(/[0-9]/).withMessage("Password must contain at least one number"),
  body("fullName").trim().isLength({ min: 1, max: 100 }).withMessage("Full name is required"),
  body("college").trim().isLength({ min: 1, max: 200 }).withMessage("College is required"),
  body("place").optional({ values: "falsy" }).isString().trim().isLength({ max: 200 }).withMessage("Place is too long"),
  body("qualification").optional({ values: "falsy" }).isString().trim().isLength({ max: 200 }).withMessage("Qualification is too long"),
  body("email").optional({ values: "falsy" }).isString().trim().isLength({ max: 200 }).isEmail().withMessage("Invalid email address"),
];

const loginValidation = [
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

// --- Security Middleware ---
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net"],
      fontSrc: ["'self'", "data:", "https://fonts.gstatic.com", "https://cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://*.supabase.co", "https://generativelanguage.googleapis.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
  crossOriginEmbedderPolicy: false,
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
}));

// Same-origin requests (the site's own pages and scripts) are always allowed,
// so a missing ALLOWED_ORIGINS entry can't break a self-hosted deployment.
app.use(cors((req, callback) => {
  const origin = req.headers.origin;
  let sameOrigin = false;
  try { sameOrigin = !!origin && new URL(origin).host === req.headers.host; } catch { /* invalid origin */ }
  if (!origin || sameOrigin || ALLOWED_ORIGINS.includes(origin)) {
    callback(null, { origin: true, credentials: true });
  } else {
    // Unknown site: send no CORS headers (the browser blocks the response); csrfCheck answers writes with 403
    callback(null, { origin: false });
  }
}));

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(csrfCheck);

// --- Health Check (before the DB check so it works even if Supabase env is missing) ---
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// DB check
app.use((req, res, next) => {
  if (!supabase) {
    return res.status(500).json({ error: "Server database configuration is missing." });
  }
  next();
});

// --- Request ID ---
app.use((_req, res, next) => {
  const requestId = crypto.randomUUID();
  res.setHeader("X-Request-Id", requestId);
  next();
});

// --- Auth Routes ---
app.post("/api/signup", authLimiter, signupValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const { username: rawUsername, password, fullName, college, place, qualification, email } = req.body;
  const username = rawUsername.trim();

  try {
    const { data: existingUsers } = await supabase
      .from("users")
      .select("id")
      .ilike("username", escapeLike(username))
      .limit(1);

    // Names that differ only in case count as taken, because login is case-insensitive
    if (existingUsers && existingUsers.length > 0) return res.status(400).json({ error: "Username is already taken" });

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const { data: newUser, error: insertError } = await supabase
      .from("users")
      .insert([{
        username,
        password_hash: passwordHash,
        full_name: fullName,
        college,
        place,
        qualification,
        email,
        progress: {},
        score: 0,
      }])
      .select("id, username, full_name, college, place, qualification, email, has_accepted_disclaimer, has_seen_ai_warning, progress, score, token_version")
      .single();

    if (insertError) throw insertError;

    const token = generateToken(username, newUser.token_version);
    setAuthCookie(res, token);
    res.json({
      id: newUser.id,
      username: newUser.username,
      fullName: newUser.full_name,
      college: newUser.college,
      place: newUser.place,
      qualification: newUser.qualification,
      email: newUser.email,
      hasAcceptedDisclaimer: newUser.has_accepted_disclaimer,
      hasSeenAIWarning: newUser.has_seen_ai_warning,
      progress: newUser.progress,
      score: newUser.score,
    });
  } catch (err: any) {
    console.error("Signup error:", sanitizeError(err));
    res.status(500).json({ error: "Failed to create account" });
  }
});

app.post("/api/login", authLimiter, loginValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const { username, password } = req.body;

  try {
    const { data: matches, error: fetchError } = await supabase
      .from("users")
      .select("id, username, password_hash, full_name, college, place, qualification, email, has_accepted_disclaimer, has_seen_ai_warning, progress, score, token_version")
      .ilike("username", escapeLike(username.trim()))
      .limit(10);
    // Prefer the exact-case username; otherwise accept a single case-insensitive match
    const user = matches?.find((u: any) => u.username === username.trim()) ?? (matches?.length === 1 ? matches[0] : null);

    if (!user || fetchError) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (!user.password_hash) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = generateToken(user.username, user.token_version);
    setAuthCookie(res, token);
    res.json({
      id: user.id,
      username: user.username,
      fullName: user.full_name,
      college: user.college,
      place: user.place,
      qualification: user.qualification,
      email: user.email,
      hasAcceptedDisclaimer: user.has_accepted_disclaimer,
      hasSeenAIWarning: user.has_seen_ai_warning,
      progress: typeof user.progress === "string" ? JSON.parse(user.progress) : user.progress,
      score: user.score,
    });
  } catch (err: any) {
    console.error("Login error:", sanitizeError(err));
    res.status(500).json({ error: "Failed to login" });
  }
});

// --- Logout ---
app.post("/api/logout", authenticate, async (req, res) => {
  const username = (req as any).authenticatedUsername;
  try {
    const { data, error: fetchError } = await supabase
      .from("users")
      .select("token_version")
      .eq("username", username)
      .single();
    if (fetchError || !data) throw fetchError || new Error("User not found");

    const { error: updateError } = await supabase
      .from("users")
      .update({ token_version: (data.token_version ?? 0) + 1 })
      .eq("username", username);
    if (updateError) throw updateError;

    clearAuthCookie(res);
    res.json({ success: true });
  } catch (err: any) {
    console.error(`[Logout] Error for ${username}:`, sanitizeError(err));
    res.status(500).json({ error: "Failed to log out" });
  }
});

// --- Protected Routes ---
app.post("/api/progress", authenticate, apiLimiter, async (req, res) => {
  const authenticatedUsername = (req as any).authenticatedUsername;
  const { progress, hasAcceptedDisclaimer, hasSeenAIWarning } = req.body;

  const MAX_SCORE = 1_000_000;
  if (!progress || typeof progress !== "object" || Array.isArray(progress) || JSON.stringify(progress).length > 500_000) {
    return res.status(400).json({ error: "Invalid progress" });
  }
  // Derived from progress on the server (same formula as the leaderboard), never taken from the client
  const score: number = Object.values(progress as Record<string, any>).reduce(
    (acc: number, p: any) => acc + (Array.isArray(p?.completedQuestionIds) ? p.completedQuestionIds.length : 0), 0);
  if (score > MAX_SCORE) {
    return res.status(400).json({ error: "Invalid score" });
  }
  if ((hasAcceptedDisclaimer !== undefined && typeof hasAcceptedDisclaimer !== "boolean") ||
      (hasSeenAIWarning !== undefined && typeof hasSeenAIWarning !== "boolean")) {
    return res.status(400).json({ error: "Invalid flags" });
  }

  try {
    const updateData: any = { progress, score };
    if (hasAcceptedDisclaimer !== undefined) updateData.has_accepted_disclaimer = hasAcceptedDisclaimer;
    if (hasSeenAIWarning !== undefined) updateData.has_seen_ai_warning = hasSeenAIWarning;

    const { data, error } = await supabase
      .from("users")
      .update(updateData)
      .eq("username", authenticatedUsername)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) return res.status(404).json({ error: "User not found" });

    res.json({ success: true });
  } catch (err: any) {
    console.error(`[Sync] Error for ${authenticatedUsername}:`, sanitizeError(err));
    res.status(500).json({ error: "Failed to save progress" });
  }
});

app.get("/api/leaderboard", authenticate, apiLimiter, async (_req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("username, score, progress")
      .order("score", { ascending: false })
      .limit(500);

    if (error) throw error;

    // Only expose username, score and a completed-question count, never the full progress
    const rows = (data || []).map((user: any) => {
      let prog: any = user.progress;
      if (typeof prog === "string") { try { prog = JSON.parse(prog); } catch { prog = {}; } }
      const completed = Object.values(prog || {}).reduce(
        (acc: number, p: any) => acc + (Array.isArray(p?.completedQuestionIds) ? p.completedQuestionIds.length : 0), 0);
      return { username: user.username, score: user.score, completed };
    });

    res.json(rows);
  } catch (err: any) {
    console.error("Leaderboard error:", sanitizeError(err));
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

app.post("/api/reset-scores", strictLimiter, async (req, res) => {
  const token = req.headers["x-admin-token"];
  const expectedToken = process.env.ADMIN_TOKEN;

  if (!expectedToken) {
    return res.status(500).json({ error: "Admin reset actions are currently disabled." });
  }

  if (!token || typeof token !== "string" || !safeTokenCompare(token, expectedToken)) {
    return res.status(401).json({ error: "Unauthorized: Invalid admin token" });
  }

  try {
    const { error } = await supabase
      .from("users")
      .update({ score: 0, progress: {} })
      .gte("score", 0);

    if (error) throw error;
    res.json({ success: true, message: "All scores have been reset to 0" });
  } catch (err: any) {
    console.error("Score reset error:", sanitizeError(err));
    res.status(500).json({ error: "Failed to reset scores" });
  }
});

app.get("/api/explanation/:key", apiLimiter, async (req, res) => {
  try {
    const { key } = req.params;
    const { data, error } = await supabase
      .from("explanations")
      .select("explanation_text")
      .eq("cache_key", key)
      .single();

    if (error || !data) return res.status(404).json({ error: "Explanation not found" });
    res.json({ text: data.explanation_text });
  } catch (err: any) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// The shared explanation cache is read-only: every question is pre-generated, so
// clients can no longer write to it (prevents cache poisoning).
app.post("/api/explanation", apiLimiter, (_req, res) => {
  res.status(403).json({ error: "The explanation cache is read-only" });
});

app.post("/api/report", authenticate, apiLimiter, async (req, res) => {
  try {
    const authenticatedUsername = (req as any).authenticatedUsername;
    const { question_id, assignment_id, report_type, description, contact } = req.body;
    if (!report_type) return res.status(400).json({ error: "Report type is required" });

    const { error } = await supabase
      .from("reports")
      .insert([{
        username: authenticatedUsername,
        question_id: question_id?.toString()?.slice(0, 50),
        assignment_id: assignment_id?.toString()?.slice(0, 50),
        report_type: String(report_type).slice(0, 50),
        description: String(description || "").slice(0, 2000),
        contact: contact ? String(contact).slice(0, 200) : null,
        status: "pending",
      }]);
    if (error) throw error;
    res.json({ success: true });
  } catch (err: any) {
    console.error("[Report] Error:", sanitizeError(err));
    res.status(500).json({ error: "Failed to submit report" });
  }
});

app.post("/api/feedback", authenticate, apiLimiter, async (req, res) => {
  try {
    const authenticatedUsername = (req as any).authenticatedUsername;
    const { type, message, contact } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const { error } = await supabase
      .from("feedback")
      .insert([{
        username: authenticatedUsername,
        type: String(type || "general").slice(0, 50),
        message: String(message).slice(0, 5000),
        contact: contact ? String(contact).slice(0, 200) : null,
        created_at: new Date().toISOString(),
      }]);
    if (error) throw error;
    res.json({ success: true });
  } catch (err: any) {
    console.error("[Feedback] Error:", sanitizeError(err));
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

export default app;
