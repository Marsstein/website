#!/bin/bash

# Marsstein Development Server Starter
# This script stops existing processes, clears cache, and starts the dev server

echo "🚀 Starting Marsstein Development Server..."
echo "================================================"

# Navigate to the project directory
cd "$(dirname "$0")"

# Function to kill processes on specific ports
kill_port() {
    local port=$1
    echo "🔍 Checking for processes on port $port..."
    
    # Find process IDs on the port
    PIDS=$(lsof -ti:$port 2>/dev/null)
    
    if [ ! -z "$PIDS" ]; then
        echo "⚠️  Found processes on port $port: $PIDS"
        echo "🛑 Stopping processes..."
        kill -9 $PIDS 2>/dev/null
        sleep 2
        echo "✅ Processes stopped"
    else
        echo "✅ No processes found on port $port"
    fi
}

# Kill common development ports and the configured port 8080
kill_port 3000
kill_port 5173
kill_port 4173
kill_port 8080
kill_port 8081

# Also kill any vite processes by name
echo "🔄 Stopping any existing Vite processes..."
pkill -f "vite" 2>/dev/null || echo "✅ No Vite processes found"

echo ""
echo "🧹 Clearing cache and temporary files..."

# Clear npm cache
npm cache clean --force 2>/dev/null || echo "⚠️  NPM cache clean skipped"

# Remove node_modules/.cache if it exists
if [ -d "node_modules/.cache" ]; then
    rm -rf node_modules/.cache
    echo "✅ Cleared node_modules/.cache"
fi

# Remove dist folder if it exists
if [ -d "dist" ]; then
    rm -rf dist
    echo "✅ Cleared dist folder"
fi

# Clear Vite cache
if [ -d "node_modules/.vite" ]; then
    rm -rf node_modules/.vite
    echo "✅ Cleared Vite cache"
fi

echo ""
echo "📦 Installing/updating dependencies..."
npm install

echo ""
echo "🌐 Starting development server..."
echo "✨ Your app will be available at: http://localhost:8080"
echo "🌐 Network access will also be available"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================================"

# Start the development server
npm run dev

echo ""
echo "👋 Development server stopped. You can close this window."
read -p "Press Enter to close..."