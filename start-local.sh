#!/usr/bin/env sh
# Run BCBR Quiz App on this computer (no account or internet needed).
# Phones on the same Wi-Fi can open the "Network" address shown below.
set -e
cd "$(dirname "$0")"
command -v node >/dev/null 2>&1 || { echo "Node.js is not installed. Get it from https://nodejs.org"; exit 1; }
[ -d node_modules ] || npm install
npm run local
