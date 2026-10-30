@echo off
REM Double-click to run BCBR Quiz App on this PC (no account or internet needed).
REM Phones on the same Wi-Fi can open the "Network" address shown below.
cd /d "%~dp0"
where node >nul 2>nul || (echo Node.js is not installed. Get it from https://nodejs.org & pause & exit /b 1)
if not exist node_modules (
  echo Installing dependencies, first run only...
  call npm install || (pause & exit /b 1)
)
start "" http://localhost:3000
call npm run local
pause
