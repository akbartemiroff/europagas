@echo off
echo Pushing changes to GitHub repository...

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

:: Add all files
echo Adding files to repository...
%GIT_PATH% add .

:: Commit changes
set /p COMMIT_MSG="Enter commit message: "
echo Creating commit...
%GIT_PATH% commit -m "%COMMIT_MSG%"

:: Push to GitHub
echo Pushing to GitHub...
%GIT_PATH% push origin master

echo GitHub push complete!
pause 