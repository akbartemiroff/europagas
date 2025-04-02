@echo off
echo Setting up Git repository for EuropeGAS project...

:: Define Git path
set GIT_PATH="C:\Program Files\Git\cmd\git.exe"

:: Check if Git exists at the defined path
if not exist %GIT_PATH% (
    echo Git executable not found at %GIT_PATH%
    echo Please install Git from https://git-scm.com/download/win
    echo After installation, run this script again.
    pause
    exit /b 1
)

:: Initialize Git repository
echo Initializing Git repository...
%GIT_PATH% init

:: Add all files
echo Adding files to repository...
%GIT_PATH% add .

:: Configure user if not already configured
%GIT_PATH% config --global --get user.email > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Setting up Git user configuration...
    %GIT_PATH% config --global user.email "user@example.com"
    %GIT_PATH% config --global user.name "User"
)

:: Make initial commit
echo Creating initial commit...
%GIT_PATH% commit -m "Initial project structure"

echo Git repository setup complete!
pause 