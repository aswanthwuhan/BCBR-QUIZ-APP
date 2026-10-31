const { spawnSync } = require("node:child_process");
const electron = require("electron");

// CI-only test workaround: Ubuntu 24.04 runners cannot run the Electron dev binary's
// sandbox (chrome-sandbox is not SUID root). Shipped builds keep the sandbox.
const extraArgs = process.platform === "linux" && process.env.CI ? ["--no-sandbox"] : [];

const result = spawnSync(electron, [...extraArgs, "."], {
  cwd: __dirname,
  env: { ...process.env, BCBR_SMOKE_TEST: "1" },
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}
process.exit(result.status ?? 1);
