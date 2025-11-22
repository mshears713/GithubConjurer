# 🌳 Mike Start Here - Orchard of Branches Docker Guide

**Quick Start Guide for Running Orchard of Branches in Docker**

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start (Linux)](#quick-start-linux)
3. [Quick Start (macOS)](#quick-start-macos)
4. [Quick Start (Windows)](#quick-start-windows)
5. [Building the Container](#building-the-container)
6. [Running the Application](#running-the-application)
7. [Troubleshooting](#troubleshooting)
8. [Alternative: Run Without Docker](#alternative-run-without-docker)

---

## Prerequisites

### Required Software
- **Docker** (version 20.10 or higher)
- **Docker Compose** (version 1.29 or higher)
- **X11 Server** (for displaying the GUI)
  - Linux: Usually pre-installed
  - macOS: XQuartz
  - Windows: VcXsrv or Xming

### Check if Docker is Installed
```bash
docker --version
docker-compose --version
```

If not installed, visit: https://docs.docker.com/get-docker/

---

## Quick Start (Linux)

### Option 1: One-Command Start

```bash
# Allow Docker to access your display
xhost +local:docker

# Build and run
docker-compose up --build

# When done, revoke access
xhost -local:docker
```

### Option 2: Step-by-Step

```bash
# 1. Allow X11 access
xhost +local:docker

# 2. Build the container
docker-compose build

# 3. Run the application
docker-compose up

# 4. To run in detached mode (background)
docker-compose up -d

# 5. View logs
docker-compose logs -f

# 6. Stop the application
docker-compose down

# 7. Revoke X11 access when done
xhost -local:docker
```

---

## Quick Start (macOS)

### Step 1: Install XQuartz

```bash
# Install XQuartz using Homebrew
brew install --cask xquartz

# Or download from: https://www.xquartz.org/
```

### Step 2: Configure XQuartz

1. Open XQuartz
2. Go to Preferences → Security
3. Check "Allow connections from network clients"
4. Restart XQuartz

### Step 3: Set Up Display

```bash
# Get your IP address
IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')

# Allow connections from localhost
xhost + $IP

# Set DISPLAY variable
export DISPLAY=$IP:0
```

### Step 4: Run the Application

```bash
# Build and run
docker-compose up --build

# When done, revoke access
xhost - $IP
```

---

## Quick Start (Windows)

### Step 1: Install X Server

**Option A: VcXsrv (Recommended)**
1. Download from: https://sourceforge.net/projects/vcxsrv/
2. Install VcXsrv
3. Run XLaunch
4. Configuration:
   - Display settings: Multiple windows, Display 0
   - How to start: Start no client
   - Extra settings: ✅ Disable access control
   - Finish and save configuration

**Option B: Xming**
1. Download from: http://www.straightrunning.com/XmingNotes/
2. Install and run Xming

### Step 2: Configure Docker

Edit `docker-compose.yml`:
```yaml
environment:
  - DISPLAY=host.docker.internal:0
```

### Step 3: Run the Application

```powershell
# In PowerShell or Command Prompt
docker-compose up --build
```

**Note:** Make sure VcXsrv/Xming is running BEFORE starting Docker container.

---

## Building the Container

### Build from Scratch

```bash
# Build the Docker image
docker-compose build

# Or build without cache (clean build)
docker-compose build --no-cache
```

### Build with Docker Only (without docker-compose)

```bash
# Build the image
docker build -t orchard-of-branches .

# Run the container
docker run -it \
  --rm \
  -e DISPLAY=$DISPLAY \
  -v /tmp/.X11-unix:/tmp/.X11-unix:rw \
  --network host \
  --ipc host \
  --security-opt seccomp:unconfined \
  orchard-of-branches
```

---

## Running the Application

### Development Mode (Default)

```bash
# Runs with hot-reload
docker-compose up
```

### Production Mode

```bash
# Edit docker-compose.yml, change CMD to:
# CMD ["npm", "start"]

# Or override the command:
docker-compose run orchard npm start
```

### Interactive Shell Access

```bash
# Access container shell while it's running
docker-compose exec orchard bash

# Or start a new container with shell
docker-compose run --rm orchard bash
```

---

## Container Management

### Common Commands

```bash
# Start the application
docker-compose up

# Start in background (detached mode)
docker-compose up -d

# Stop the application
docker-compose down

# Restart the application
docker-compose restart

# View logs
docker-compose logs -f orchard

# Check container status
docker-compose ps

# Remove everything (including volumes)
docker-compose down -v
```

### Rebuilding After Code Changes

```bash
# Rebuild and restart
docker-compose up --build

# Or force recreation
docker-compose up --force-recreate --build
```

---

## Troubleshooting

### Issue 1: "Cannot open display"

**Problem:** Application can't connect to X11 display

**Solution (Linux):**
```bash
# Allow Docker access to X server
xhost +local:docker

# Verify DISPLAY is set correctly
echo $DISPLAY

# Should show something like :0 or :1
```

**Solution (macOS):**
```bash
# Get your IP
IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')

# Allow access
xhost + $IP

# Export display
export DISPLAY=$IP:0

# Verify XQuartz is running
ps aux | grep X11
```

**Solution (Windows):**
- Ensure VcXsrv/Xming is running
- Check "Disable access control" is enabled
- Use `host.docker.internal:0` for DISPLAY

---

### Issue 2: "Permission denied" on X11 socket

**Solution:**
```bash
# Linux - Grant access to X11 socket
xhost +local:docker

# Or more permissive (less secure)
xhost +
```

---

### Issue 3: Container builds but app won't start

**Check logs:**
```bash
docker-compose logs -f orchard
```

**Common causes:**
- Missing DISPLAY environment variable
- X11 server not running
- Port conflicts

**Solution:**
```bash
# Rebuild from scratch
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

---

### Issue 4: "npm install" fails during build

**Solution:**
```bash
# Clear Docker build cache
docker builder prune -a

# Rebuild
docker-compose build --no-cache
```

---

### Issue 5: Application window is very small or distorted

**Solution:**
```bash
# Set DPI scaling in docker-compose.yml
environment:
  - DISPLAY=$DISPLAY
  - QT_SCALE_FACTOR=1
  - GDK_SCALE=1
```

---

### Issue 6: Git operations don't work

**Problem:** Git commands fail inside container

**Solution:**
```bash
# Mount your .gitconfig into container
# Edit docker-compose.yml:
volumes:
  - ~/.gitconfig:/home/orcharduser/.gitconfig:ro

# Or configure Git in container:
docker-compose exec orchard bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Performance Optimization

### Speed Up Builds

**Use BuildKit:**
```bash
# Enable Docker BuildKit
export DOCKER_BUILDKIT=1
docker-compose build
```

### Reduce Container Size

The current Dockerfile uses multi-stage builds to minimize size:
- Build stage: Compiles the application
- Runtime stage: Only includes necessary dependencies

---

## Security Considerations

### X11 Security

**Current setup (development):**
```bash
xhost +local:docker  # Allows Docker containers to connect
```

**More secure (production):**
```bash
# Create .Xauthority for specific container
xauth nlist $DISPLAY | sed -e 's/^..../ffff/' | xauth -f /tmp/.docker.xauth nmerge -

# Mount in docker-compose.yml:
volumes:
  - /tmp/.docker.xauth:/tmp/.docker.xauth:ro
environment:
  - XAUTHORITY=/tmp/.docker.xauth
```

### Network Security

Current setup uses `network_mode: host` for simplicity. For production:
```yaml
# Remove network_mode: host
# Use bridge network instead
networks:
  orchard_network:
    driver: bridge
```

---

## Advanced Configuration

### Custom Environment Variables

Create `.env` file in project root:
```env
DISPLAY=:0
NODE_ENV=development
LOG_LEVEL=info
```

Docker Compose will automatically load these.

### Volume Mounts for Development

Current `docker-compose.yml` mounts source code for live editing:
```yaml
volumes:
  - ./src:/app/src
```

**To disable (production mode):**
Comment out this line in docker-compose.yml

### Memory and CPU Limits

Add to `docker-compose.yml`:
```yaml
services:
  orchard:
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 512M
```

---

## Alternative: Run Without Docker

If you prefer to run natively (not in Docker):

### Prerequisites
- Node.js 18 or higher
- npm
- Git

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Or build for production
npm run build
npm start

# 4. Package for distribution
npm run package
```

See `docs/DEVELOPER_GUIDE.md` and `docs/PACKAGING_GUIDE.md` for details.

---

## Testing the Container

### Verify Everything Works

```bash
# 1. Build
docker-compose build

# 2. Start
docker-compose up

# 3. You should see:
#    - Electron window opens
#    - Orchard of Branches UI visible
#    - No errors in terminal

# 4. Test features:
#    - Click through tabs (Map, Quests, Scenarios, Repos)
#    - Open Settings (gear icon)
#    - Start a quest
#    - Complete a scenario
```

---

## Cleanup

### Remove All Orchard Containers and Images

```bash
# Stop and remove containers
docker-compose down

# Remove volumes
docker-compose down -v

# Remove images
docker rmi orchard-of-branches
docker rmi $(docker images -q orchardofbranches*)

# Prune unused Docker resources
docker system prune -a
```

---

## Quick Reference

### Essential Commands

| Action | Command |
|--------|---------|
| Build | `docker-compose build` |
| Start | `docker-compose up` |
| Start (background) | `docker-compose up -d` |
| Stop | `docker-compose down` |
| Logs | `docker-compose logs -f` |
| Shell access | `docker-compose exec orchard bash` |
| Rebuild | `docker-compose up --build` |
| Clean restart | `docker-compose down -v && docker-compose up --build` |

### Platform-Specific Display Setup

| Platform | Display Setup |
|----------|---------------|
| **Linux** | `xhost +local:docker` |
| **macOS** | `IP=$(ifconfig en0 \| grep inet \| awk '$1=="inet" {print $2}')` <br> `xhost + $IP` <br> `export DISPLAY=$IP:0` |
| **Windows** | Run VcXsrv/Xming <br> Set `DISPLAY=host.docker.internal:0` |

---

## Getting Help

### Documentation
- `README.md` - Project overview and PRD
- `docs/DEVELOPER_GUIDE.md` - Development documentation
- `docs/PACKAGING_GUIDE.md` - Distribution guide
- `docs/QA_CHECKLIST.md` - Testing guidelines

### Docker Documentation
- [Docker Docs](https://docs.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [Electron Docker Guide](https://www.electronjs.org/docs/latest/tutorial/application-distribution)

### Issues
For project-specific issues, see: https://github.com/anthropics/claude-code/issues

---

## Summary

**The fastest way to get started:**

```bash
# Linux
xhost +local:docker && docker-compose up --build

# macOS (after installing XQuartz)
IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')
xhost + $IP
export DISPLAY=$IP:0
docker-compose up --build

# Windows (after starting VcXsrv/Xming)
docker-compose up --build
```

**That's it!** The Orchard of Branches application should now be running in a container with the GUI displayed on your screen.

---

**Happy Git Learning! 🌳**

---

**Document Version:** 1.0.0
**Last Updated:** 2025-11-22
**Container Image:** orchard-of-branches:latest
