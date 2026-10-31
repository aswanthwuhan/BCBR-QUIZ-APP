const { app, BrowserWindow, protocol, net, shell } = require("electron");
const path = require("node:path");
const fs = require("node:fs");
const { pathToFileURL } = require("node:url");

const WEB_ROOT = path.resolve(__dirname, "web");
const APP_ORIGIN = "app://bcbr";
const SMOKE = process.env.BCBR_SMOKE_TEST === "1";
const SMOKE_TIMEOUT_MS = 30000;
const EXTERNAL_PROTOCOLS = ["https:", "http:", "mailto:", "upi:"];

// Must run before app is ready so the scheme can use fetch, secure context and standard URL rules.
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { standard: true, secure: true, supportFetchAPI: true } },
]);

function isAppUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === "app:" && u.hostname === "bcbr";
  } catch {
    return false;
  }
}

function openExternalIfAllowed(url) {
  try {
    const u = new URL(url);
    if (EXTERNAL_PROTOCOLS.includes(u.protocol)) {
      shell.openExternal(url);
    }
  } catch {
    // ignore malformed URLs
  }
}

// Map app://bcbr/<path> to a file inside WEB_ROOT. Unknown paths fall back to index.html (SPA routes).
function resolveAppFile(requestUrl) {
  const indexFile = path.join(WEB_ROOT, "index.html");
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(requestUrl).pathname);
  } catch {
    return indexFile;
  }
  if (pathname === "/" || pathname === "") return indexFile;

  const candidate = path.resolve(WEB_ROOT, "." + path.posix.normalize(pathname));
  // Path traversal guard: the resolved file must stay inside WEB_ROOT.
  if (candidate !== WEB_ROOT && !candidate.startsWith(WEB_ROOT + path.sep)) {
    return indexFile;
  }
  try {
    if (fs.statSync(candidate).isFile()) return candidate;
  } catch {
    // not found -> SPA fallback
  }
  return indexFile;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 360,
    title: "BCBR QBank",
    icon: path.join(WEB_ROOT, "icon-512.png"),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  const wc = win.webContents;

  wc.setWindowOpenHandler(({ url }) => {
    openExternalIfAllowed(url);
    return { action: "deny" };
  });

  wc.on("will-navigate", (event, url) => {
    if (isAppUrl(url)) return;
    event.preventDefault();
    openExternalIfAllowed(url);
  });

  if (SMOKE) {
    let done = false;
    const finish = (code, payload) => {
      if (done) return;
      done = true;
      if (payload) console.log("SMOKE_RESULT " + JSON.stringify(payload));
      else console.log("SMOKE_RESULT " + JSON.stringify({ error: "no result" }));
      app.exit(code);
    };
    const timer = setTimeout(() => {
      console.error("SMOKE_TIMEOUT: no result within 30 seconds");
      finish(1, null);
    }, SMOKE_TIMEOUT_MS);

    wc.once("did-fail-load", (_e, code, desc, url) => {
      clearTimeout(timer);
      console.error(`SMOKE_FAIL_LOAD: ${code} ${desc} ${url}`);
      finish(1, null);
    });

    wc.once("did-finish-load", () => {
      setTimeout(async () => {
        try {
          const result = await wc.executeJavaScript(`({
            title: document.title,
            rootChildren: document.getElementById("root")?.childElementCount ?? 0,
            text: document.body.innerText.slice(0, 300)
          })`);
          clearTimeout(timer);
          finish(result.rootChildren > 0 ? 0 : 1, result);
        } catch (err) {
          clearTimeout(timer);
          console.error("SMOKE_EXEC_ERROR: " + (err && err.message));
          finish(1, null);
        }
      }, 2000);
    });
  }

  win.loadURL(`${APP_ORIGIN}/index.html`);
  return win;
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    const win = BrowserWindow.getAllWindows()[0];
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });

  app.whenReady().then(() => {
    protocol.handle("app", (req) => net.fetch(pathToFileURL(resolveAppFile(req.url)).toString()));
    createWindow();
  });

  app.on("window-all-closed", () => {
    app.quit();
  });
}
