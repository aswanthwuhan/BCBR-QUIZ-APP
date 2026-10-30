@echo off
REM Double-click to install (or update) BCBR QBank on Windows.
REM Runs the same installer as:  irm https://raw.githubusercontent.com/aswanthwuhan/BCBR-QUIZ-APP/main/install.ps1 ^| iex
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/aswanthwuhan/BCBR-QUIZ-APP/main/install.ps1 | iex"
echo.
pause
