#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

# Clear the terminal
clear

echo "🚀 Starting Marsstein Development Server..."
echo "=========================================="
echo ""

# Kill any existing processes on ports 8080-8082
echo "📦 Checking for existing processes..."
lsof -ti:8080 | xargs kill -9 2>/dev/null
lsof -ti:8081 | xargs kill -9 2>/dev/null
lsof -ti:8082 | xargs kill -9 2>/dev/null

echo "✅ Ports cleared"
echo ""

# Start the development server
echo "🔧 Starting development server on port 8080..."
echo ""
npm run dev

# Keep the terminal open if the server stops
echo ""
echo "Server stopped. Press any key to exit..."
read -n 1