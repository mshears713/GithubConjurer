#!/bin/bash
# Quick start script for Orchard of Branches in Docker
# Works on Linux and macOS

set -e

echo "🌳 Orchard of Branches - Docker Quick Start"
echo "==========================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first:"
    echo "   https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first:"
    echo "   https://docs.docker.com/compose/install/"
    exit 1
fi

# Detect platform
PLATFORM="$(uname -s)"

case "${PLATFORM}" in
    Linux*)
        echo "📍 Platform: Linux"
        echo ""
        echo "Setting up X11 access..."
        xhost +local:docker
        export DISPLAY=${DISPLAY:-:0}
        ;;
    Darwin*)
        echo "📍 Platform: macOS"
        echo ""

        # Check if XQuartz is running
        if ! pgrep -x "XQuartz" > /dev/null; then
            echo "⚠️  XQuartz is not running!"
            echo "   Please install and start XQuartz:"
            echo "   brew install --cask xquartz"
            echo "   Then restart this script."
            exit 1
        fi

        echo "Setting up X11 access for macOS..."
        IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')
        if [ -z "$IP" ]; then
            IP=$(ifconfig en1 | grep inet | awk '$1=="inet" {print $2}')
        fi

        if [ -z "$IP" ]; then
            echo "❌ Could not determine IP address"
            exit 1
        fi

        echo "   Your IP: $IP"
        xhost + $IP
        export DISPLAY=$IP:0
        ;;
    *)
        echo "❌ Unsupported platform: ${PLATFORM}"
        echo "   This script works on Linux and macOS only."
        echo "   For Windows, see Mikestarthere.md"
        exit 1
        ;;
esac

echo "   DISPLAY=$DISPLAY"
echo ""

# Check if we need to build
if ! docker images | grep -q "orchardofbranches"; then
    echo "📦 Building Docker image (first time setup)..."
    echo "   This may take a few minutes..."
    docker-compose build
else
    echo "✅ Docker image already built"
    echo "   Run './start.sh --rebuild' to rebuild"
fi

# Check for rebuild flag
if [ "$1" = "--rebuild" ] || [ "$1" = "-r" ]; then
    echo ""
    echo "📦 Rebuilding Docker image..."
    docker-compose build --no-cache
fi

echo ""
echo "🚀 Starting Orchard of Branches..."
echo "   Press Ctrl+C to stop"
echo ""

# Trap cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping Orchard of Branches..."
    docker-compose down

    case "${PLATFORM}" in
        Linux*)
            echo "Revoking X11 access..."
            xhost -local:docker
            ;;
        Darwin*)
            echo "Revoking X11 access..."
            xhost - $IP
            ;;
    esac

    echo "✅ Cleanup complete"
}

trap cleanup EXIT INT TERM

# Start the application
docker-compose up

# Cleanup will run automatically due to trap
