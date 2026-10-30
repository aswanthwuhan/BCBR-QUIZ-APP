import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

const explanationCache = new Map<string, string>();
// Offline builds (local run, Android) have no server, so skip the shared /api explanation cache
const HAS_SERVER = import.meta.env.VITE_OFFLINE_ONLY !== 'true';

function generateHash(str: string): string {
  if (!str || typeof str !== 'string') return '0';
  if (str.length > 10000) return '0'; // Limit input size to prevent DoS
  
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & 0x7FFFFFFF; // Convert to positive 32-bit integer
  }
  return Math.abs(hash).toString(16);
}

export function generateCacheKey(question: string, isDetailed: boolean): string {
  // A compact cache key based on the hashed question to fit safely in URLs
  return `${isDetailed ? 'detailed' : 'concise'}_${generateHash(question)}`;
}

export function sanitizeLaTeX(text: string): string {
  if (!text || typeof text !== 'string') return text;
  
  // Remove cite tags like [cite: 2875] or [cite: 414, 415]
  let cleaned = text.replace(/\s*\[cite:[^\]]+\]/gi, '');

  // Convert standalone unescaped bracket math blocks: \n[\n ... \n]\n or [\n ... \n] to $$ ... $$
  cleaned = cleaned.replace(/(?:^|\n)\s*\[\s*\n?([\s\S]*?)\n?\s*\]\s*(?=\n|$)/g, (match, p1) => {
    if (p1.includes('\\') || p1.includes('=') || p1.includes('_') || p1.includes('^') || p1.includes('+') || p1.includes('/') || p1.includes('\\frac') || p1.includes('\\text')) {
      return `\n\n$$\n${p1.trim()}\n$$\n\n`;
    }
    return match;
  });

  // Convert \[ ... \] to $$ ... $$
  cleaned = cleaned.replace(/\\\[([\s\S]*?)\\\]/g, '\n$$\n$1\n$$\n');

  // Convert \( ... \) to $ ... $
  cleaned = cleaned.replace(/\\\(([\s\S]*?)\\\)/g, '$$1$');

  return cleaned;
}

export async function checkExistingExplanation(question: string, isDetailed: boolean = false): Promise<string | null> {
  const cacheKey = generateCacheKey(question, isDetailed);
  
  // 1. Check local in-memory cache first (instant)
  if (explanationCache.has(cacheKey)) {
    return sanitizeLaTeX(explanationCache.get(cacheKey)!);
  }

  // 2. Check global database cache (free, very fast)
  if (!HAS_SERVER) return null;
  try {
    const dbRes = await fetch(`/api/explanation/${cacheKey}`);
    if (dbRes.ok) {
      const dbData = await dbRes.json();
      if (dbData.text) {
        const sanitized = sanitizeLaTeX(dbData.text);
        explanationCache.set(cacheKey, sanitized); // Save to local memory for next time
        return sanitized;
      }
    }
  } catch (err) {
    console.error("[Cache Check] Failed to check global cache:", err);
  }
  
  return null;
}

const MODELS = [
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-preview",
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite"
];

async function callGemini(ai: any, params: any) {
  let lastError: any = null;
  
  for (const modelName of MODELS) {
    let retries = 0;
    while (retries < 2) {
      try {
        console.log(`Attempting Gemini with model: ${modelName} (Retry: ${retries})`);
        return await ai.models.generateContent({
          ...params,
          model: modelName
        });
      } catch (error: any) {
        const errMsg = error?.message || error?.toString() || "Unknown error";
        console.warn(`Model ${modelName} attempt ${retries + 1} failed:`, errMsg);
        lastError = error;
        
        // If it's a 401/403 (Auth), don't bother retrying models
        if (error?.status === 401 || error?.status === 403 || errMsg.includes("API_KEY_INVALID")) {
          throw error;
        }

        // If model is not found / deprecated (404), immediately try next model
        if (error?.status === 404 || errMsg.includes("NOT_FOUND") || errMsg.includes("no longer available")) {
          console.log(`Model ${modelName} unavailable/deprecated, falling back to next model...`);
          break; // Skip retry, go to next model
        }

        // If it's a 429 (Quota) with limit: 0, skip retries and try next model
        if (error?.status === 429) {
          if (errMsg.includes("limit: 0")) {
            console.log(`Model ${modelName} has zero quota, trying next model...`);
            break; // Skip retry, go to next model
          }
          if (retries < 1) {
            console.log("Quota hit, waiting 2 seconds before retry...");
            await new Promise(resolve => setTimeout(resolve, 2000));
            retries++;
            continue;
          }
        }
        
        break; // Move to next model for other errors
      }
    }
  }
  throw lastError;
}

export async function generateAIQuestions(
  assignmentTitle: string,
  apiKey: string
): Promise<Question[]> {
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Generate 10 multiple choice questions for a medical student studying for the BCBR (Basic Course in Biomedical Research) exam.
The topic of the assignment is: "${assignmentTitle}".
The questions should be challenging, high-yield, and test conceptual understanding.
Each question must have exactly 4 options.
Provide a clear explanation for the correct answer.`;

  try {
    const response = await callGemini(ai, {
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              text: {
                type: Type.STRING,
                description: "The question text.",
              },
              options: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: "Exactly 4 options for the multiple choice question.",
              },
              correctAnswer: {
                type: Type.INTEGER,
                description: "The 0-based index of the correct option (0, 1, 2, or 3).",
              },
              explanation: {
                type: Type.STRING,
                description: "A clear explanation of why the correct answer is correct and why others are wrong.",
              },
            },
            required: ["text", "options", "correctAnswer", "explanation"],
          },
        },
      },
    });

    const text = response.text?.trim();
    if (!text) {
      throw new Error("Empty response from AI");
    }

    const questionsData = JSON.parse(text);
    
    // Map to Question interface and generate unique IDs
    return questionsData.map((q: any, index: number) => ({
      id: `ai_${Date.now()}_${index}`,
      text: q.text,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    }));
  } catch (error: any) {
    console.error("AI Generation Error Detailed:", {
      status: error?.status,
      message: error?.message,
      reason: error?.reason,
      details: error?.details
    });

    if (error?.status === 401 || error?.status === 403 || error?.message?.includes("API_KEY_INVALID") || error?.message?.toLowerCase().includes("key")) {
      throw new Error("AUTH_ERROR: Invalid or restricted API key. Please check your settings.");
    }
    if (error?.status === 429) {
      throw new Error("QUOTA_ERROR: Too many requests. Please wait a minute.");
    }
    throw new Error(`CONNECTION_ERROR: ${error?.message || "Check internet connection."}`);
  }
}

export async function getAIExplanation(
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  apiKey: string,
  isDetailed: boolean = false
) {
  // 1 & 2. Check local and global cache
  const cached = await checkExistingExplanation(question, isDetailed);
  if (cached) return cached;

  // 3. Generate from Gemini API (slowest, costs tokens)
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = isDetailed 
    ? `Provide a LONG, SIMPLE, and HIGHLY DETAILED explanation for this BCBR (Basic Course in Biomedical Research) question. 
       Do NOT include introductory phrases like "As an expert medical researcher" or "As a doctor". Jump straight into the content.
       Include MULTIPLE memory hacks, mnemonics, and study aids to help an MD doctor remember this concept forever.
       
       Question: ${question}
       Options: ${options.join(', ')}
       Correct Answer: ${correctAnswer}
       Basic Explanation: ${explanation}
       
       Format the response in clear Markdown with sections for:
       1. Detailed Concept Breakdown
       2. Why other options are wrong
       3. Memory Hacks & Mnemonics
       4. Clinical Correlation`
    : `Provide a concise but high-yield explanation for this BCBR question. 
       Do NOT include introductory phrases like "As an expert medical researcher" or "As a doctor". Jump straight into the content.
       Include a clever memory hack or study aid to remember the answer.
       
       Question: ${question}
       Options: ${options.join(', ')}
       Correct Answer: ${correctAnswer}
       Basic Explanation: ${explanation}
       
       Format the response in clear Markdown with a "Memory Hack" section.`;

  try {
    const response = await callGemini(ai, {
      contents: prompt,
    });
    const rawText = response.text || "Could not generate explanation.";
    const text = sanitizeLaTeX(rawText);
    
    if (text !== "Could not generate explanation.") {
      const cacheKey = generateCacheKey(question, isDetailed);
      // Save to local memory cache
      explanationCache.set(cacheKey, text);
      
      // Save to global database cache asynchronously
      if (HAS_SERVER) fetch('/api/explanation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: cacheKey, text })
      }).then(res => {
        if (!res.ok) {
          console.error("Server returned error when saving to global cache:", res.status);
        }
      }).catch(err => console.error("Failed to save to global cache:", err));
    }
    return text;
  } catch (error: any) {
    console.error("AI Explanation Error Detailed:", {
      status: error?.status,
      message: error?.message,
      reason: error?.reason
    });
    
    if (error?.status === 401 || error?.status === 403 || error?.message?.includes("API_KEY_INVALID") || error?.message?.toLowerCase().includes("key")) {
      return "Error: Invalid API Key. Please check your credentials in Settings.";
    }
    if (error?.status === 429) {
      const detail = error?.message?.includes("limit: 0") 
        ? "Your API key has zero free-tier quota. Try a different key or enable billing in Google AI Studio."
        : "AI Quota exceeded. Please wait a minute and try again.";
      return `Error: ${detail}`;
    }
    return `Error: ${error?.message || "Check your internet connection."}`;
  }
}
