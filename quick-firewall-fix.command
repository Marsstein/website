#!/bin/bash

echo "🚀 Quick Marsstein Firewall Fix"
echo "=============================="
echo ""
echo "This script will:"
echo "1. Add Node.js to firewall exceptions"
echo "2. Test localhost connection" 
echo "3. Start your development server"
echo ""

# Change to script directory
cd "$(dirname "$0")"

# Get current Node.js path
NODE_PATH=$(which node)
echo "🔍 Found Node.js at: $NODE_PATH"

echo ""
echo "🛡️ Adding Node.js to firewall..."
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add "$NODE_PATH"
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblock "$NODE_PATH"

echo "✅ Node.js added to firewall exceptions"
echo ""

# Kill any existing servers
pkill -f vite 2>/dev/null
pkill -f node 2>/dev/null

echo "🚀 Starting development server..."
echo "Your website will be available at: http://localhost:8080"
echo ""

npm run dev

read -p "Press Enter to close..."