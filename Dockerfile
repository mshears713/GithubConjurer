# Orchard of Branches - Dockerfile
# Multi-stage build for Electron desktop application

# Build stage
FROM node:18-bullseye as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Runtime stage
FROM node:18-bullseye

# Install system dependencies for Electron and X11
RUN apt-get update && apt-get install -y \
    git \
    libgtk-3-0 \
    libnotify4 \
    libnss3 \
    libxss1 \
    libxtst6 \
    xdg-utils \
    libatspi2.0-0 \
    libdrm2 \
    libgbm1 \
    libxshmfence1 \
    x11-apps \
    xauth \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist-electron ./dist-electron
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/assets ./assets

# Create a non-root user for running the app
RUN useradd -m -s /bin/bash orcharduser && \
    chown -R orcharduser:orcharduser /app

USER orcharduser

# Set display environment variable
ENV DISPLAY=:0

# Expose any needed ports (none for this app)
# EXPOSE 5173

# Default command - run in development mode
CMD ["npm", "run", "dev"]
