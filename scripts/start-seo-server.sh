#!/bin/bash

echo "🔨 Building the project with SEO optimization..."
npm run build

echo ""
echo "🚀 Starting SEO-optimized server..."
node scripts/static-server.js