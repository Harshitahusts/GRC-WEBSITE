@echo off
title GRC-Flow website
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install the LTS version from https://nodejs.org and run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies, this takes a minute the first time...
  call npm install
  if errorlevel 1 (
    echo npm install failed. Check the messages above.
    pause
    exit /b 1
  )
)

echo Starting GRC-Flow at http://localhost:3000 - close this window to stop it.
start "" cmd /c "timeout /t 6 /nobreak >nul && start http://localhost:3000"
call npm run dev
pause
