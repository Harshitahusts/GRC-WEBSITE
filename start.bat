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

rem The live demo page embeds the real app's demo workspace (port 8001).
rem If the GRC-Ai app sits next to this folder, start its demo too.
set "GRCAI="
if exist "..\GRC-Ai\start-demo.bat" set "GRCAI=..\GRC-Ai"
if exist "..\grc-ai\start-demo.bat" set "GRCAI=..\grc-ai"
if defined GRCAI (
  if exist "%GRCAI%\.venv\Scripts\python.exe" (
    echo Starting the GRC agent demo workspace on port 8001...
    start "GRC agent demo" /min cmd /c "cd /d %GRCAI% && .venv\Scripts\python.exe -m grc_agent.web.cli demo"
  ) else (
    echo Found %GRCAI% but it is not installed yet. Run its start.bat once to enable the real-app demo.
  )
) else (
  echo GRC-Ai folder not found next to this one. /demo will offer the guided tour.
)

echo Starting GRC-Flow at http://localhost:3000 - close this window to stop it.
start "" cmd /c "timeout /t 8 /nobreak >nul && start http://localhost:3000"
call npm run dev
pause
