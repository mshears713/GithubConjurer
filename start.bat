@echo off
REM Quick start script for Orchard of Branches in Docker (Windows)

echo.
echo 🌳 Orchard of Branches - Docker Quick Start (Windows)
echo ==================================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed. Please install Docker Desktop first:
    echo    https://docs.docker.com/desktop/windows/install/
    pause
    exit /b 1
)

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker Compose is not installed. Please install Docker Compose first:
    echo    https://docs.docker.com/compose/install/
    pause
    exit /b 1
)

echo ⚠️  IMPORTANT: Make sure VcXsrv or Xming is running!
echo.
echo If not installed:
echo    VcXsrv: https://sourceforge.net/projects/vcxsrv/
echo    Xming: http://www.straightrunning.com/XmingNotes/
echo.
echo VcXsrv Configuration:
echo    - Display: 0
echo    - Start no client
echo    - Disable access control: ✓
echo.
pause

REM Set DISPLAY for Windows
set DISPLAY=host.docker.internal:0

echo 📍 Platform: Windows
echo    DISPLAY=%DISPLAY%
echo.

REM Check if we need to build
docker images | findstr /C:"orchardofbranches" >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Building Docker image first time setup...
    echo    This may take a few minutes...
    docker-compose build
) else (
    echo ✅ Docker image already built
)

REM Check for rebuild flag
if "%1"=="--rebuild" (
    echo.
    echo 📦 Rebuilding Docker image...
    docker-compose build --no-cache
)
if "%1"=="-r" (
    echo.
    echo 📦 Rebuilding Docker image...
    docker-compose build --no-cache
)

echo.
echo 🚀 Starting Orchard of Branches...
echo    Press Ctrl+C to stop
echo.

REM Start the application
docker-compose up

echo.
echo 🛑 Stopping Orchard of Branches...
docker-compose down

echo ✅ Cleanup complete
pause
