@echo off

REM Check if a commit message was provided
if "%~1"=="" (
    echo Please provide a commit message.
    echo Usage: git_push.bat "Your commit message here"
    exit /b
)

REM Add all changes to the staging area
git add .

REM Commit the changes with the provided message
git commit -m "%~1"

REM Push the changes to the origin's main branch
git push origin main

echo Changes pushed successfully!
