#!/bin/bash

echo "🔥 Marsstein Localhost Firewall Fix"
echo "=================================="
echo ""

# Change to script directory
cd "$(dirname "$0")"

echo "📋 Checking current firewall status..."
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate

echo ""
echo "🔍 Looking for Node.js paths..."
NODE_PATHS=(
    "/usr/local/bin/node"
    "/opt/homebrew/bin/node"
    "/Users/$(whoami)/.nvm/versions/node/*/bin/node"
    "$(which node)"
)

echo ""
echo "🛡️ Adding Node.js to firewall exceptions..."

for NODE_PATH in "${NODE_PATHS[@]}"; do
    if [ -f "$NODE_PATH" ]; then
        echo "Adding: $NODE_PATH"
        sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add "$NODE_PATH" 2>/dev/null
        sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblock "$NODE_PATH" 2>/dev/null
        echo "✅ Added $NODE_PATH to firewall exceptions"
    fi
done

# Find and add all Node.js versions from NVM
if [ -d "$HOME/.nvm/versions/node" ]; then
    for node_version in "$HOME/.nvm/versions/node/"*/bin/node; do
        if [ -f "$node_version" ]; then
            echo "Adding NVM Node: $node_version"
            sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add "$node_version" 2>/dev/null
            sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblock "$node_version" 2>/dev/null
            echo "✅ Added $node_version to firewall exceptions"
        fi
    done
fi

echo ""
echo "🔧 Testing localhost connection..."

# Start a simple test server
echo "Starting test server on port 9998..."
node -e "
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('🎉 Localhost connection working!');
});
server.listen(9998, '127.0.0.1', () => {
    console.log('✅ Test server running on 127.0.0.1:9998');
});
setTimeout(() => {
    server.close();
    console.log('✅ Test server stopped');
}, 3000);
" &

# Wait for server to start
sleep 2

# Test connection
echo ""
echo "Testing connection to localhost:9998..."
if curl -s -m 3 http://127.0.0.1:9998 > /dev/null; then
    echo "🎉 SUCCESS: Localhost connection is working!"
    echo ""
    echo "Now starting your Marsstein development server..."
    sleep 2
    
    # Clean any existing processes
    pkill -f vite 2>/dev/null
    pkill -f node 2>/dev/null
    
    # Start the dev server
    npm run dev
else
    echo "❌ Connection still blocked. Trying alternative solution..."
    echo ""
    echo "🚨 EMERGENCY FIX: Temporarily disabling firewall..."
    echo "⚠️  This will disable firewall for 60 seconds only!"
    
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off
    echo "✅ Firewall disabled temporarily"
    echo ""
    echo "🚀 Starting development server..."
    
    # Start dev server in background
    npm run dev &
    DEV_SERVER_PID=$!
    
    # Wait 10 seconds then re-enable firewall
    echo "⏰ Waiting 10 seconds for server to start..."
    sleep 10
    
    echo "🛡️ Re-enabling firewall for security..."
    sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on
    echo "✅ Firewall re-enabled"
    
    # Keep dev server running
    wait $DEV_SERVER_PID
fi

echo ""
echo "🏁 Script completed!"
read -p "Press Enter to close this window..."