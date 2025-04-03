@echo off
echo Building project for deployment...

:: Create build directory if it doesn't exist
if not exist build mkdir build

:: Copy HTML files
echo Copying HTML files...
copy *.html build\

:: Copy CSS directory
echo Copying CSS files...
if not exist build\css mkdir build\css
xcopy /E /Y css build\css\

:: Copy JS directory
echo Copying JS files...
if not exist build\js mkdir build\js
xcopy /E /Y js build\js\

:: Copy images directory
echo Copying image files...
if not exist build\images mkdir build\images
xcopy /E /Y images build\images\

echo Build completed successfully! 