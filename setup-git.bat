@echo off
echo Setting up Git repository for EuropeGAS project...

:: Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Git is not installed or not in PATH.
    echo Please install Git from https://git-scm.com/download/win
    echo After installation, run this script again.
    pause
    exit /b 1
)

:: Initialize Git repository
echo Initializing Git repository...
git init

:: Add all files
echo Adding files to repository...
git add .

:: Make initial commit
echo Creating initial commit...
git commit -m "Initial project structure"

echo Git repository setup complete!
pause 