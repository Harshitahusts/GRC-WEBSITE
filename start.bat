@echo off
title GRC-Flow website
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install the LTS version from https://nodejs.org and run this file again.
  pause
  exit /b 1
)

rem Keep dependencies in step with package.json after every git pull.
echo Checking dependencies...
call npm install --no-audit --no-fund
if errorlevel 1 (
  echo npm install failed. Check the messages above.
  pause
  exit /b 1
)

rem Clear the build cache. A cache left over from an older version of the
rem site causes errors like "ENOENT ... .next\server\app\page.js".
if exist .next (
  echo Clearing the old build cache...
  rmdir /s /q .next
)

echo Starting GRC-Flow at http://localhost:3000 - close this window to stop it.
start "" cmd /c "timeout /t 8 /nobreak >nul && start http://localhost:3000"
call npm run dev
pause
