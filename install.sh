#!/usr/bin/env sh
# BCBR QBank one-command installer for macOS / Linux.
# Run:
#   curl -fsSL https://raw.githubusercontent.com/aswanthwuhan/BCBR-QUIZ-APP/main/install.sh | sh
#
# Downloads the app to ~/BCBR-QBank, installs it and starts it.
# Works offline after install; no account needed.
# Options (environment variables): BCBR_INSTALL_DIR, BCBR_NO_LAUNCH=1
set -e

REPO="aswanthwuhan/BCBR-QUIZ-APP"
DIR="${BCBR_INSTALL_DIR:-$HOME/BCBR-QBank}"

echo ""
echo "BCBR QBank installer"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Install it from https://nodejs.org (or: brew install node), then run this command again."
  exit 1
fi
echo "Node.js $(node -v) found."

echo "Downloading BCBR QBank..."
TMP="$(mktemp -d)"
curl -fsSL "https://github.com/$REPO/archive/refs/heads/main.tar.gz" | tar -xz -C "$TMP"
SRC="$(find "$TMP" -mindepth 1 -maxdepth 1 -type d | head -n 1)"

# Update in place: replace the code but keep already-installed node_modules.
# Refuse to clear a folder that isn't empty and isn't an existing BCBR QBank install.
mkdir -p "$DIR"
if [ -n "$(ls -A "$DIR")" ] && ! grep -q '"name": *"bcbr-quiz-app"' "$DIR/package.json" 2>/dev/null; then
  echo "$DIR already exists and is not a BCBR QBank install. Set BCBR_INSTALL_DIR to an empty folder and try again."
  rm -rf "$TMP"
  exit 1
fi
find "$DIR" -mindepth 1 -maxdepth 1 ! -name node_modules -exec rm -rf {} +
cp -R "$SRC"/. "$DIR"/
rm -rf "$TMP"

echo "Installing (this takes a minute the first time)..."
cd "$DIR"
npm install --no-audit --no-fund --loglevel=error
chmod +x start-local.sh

echo ""
echo "Installed to $DIR"
echo "Start it any time with: $DIR/start-local.sh"
if [ -z "$BCBR_NO_LAUNCH" ]; then
  echo "Starting BCBR QBank at http://localhost:3000 ... (Ctrl+C to stop)"
  exec ./start-local.sh
fi
