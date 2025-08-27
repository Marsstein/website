#!/bin/bash

echo "🔨 Building the project..."
npm run build

echo ""
echo "📄 Running SEO prerendering with Prettier formatting..."
node scripts/full-prerender.js

echo ""
echo "🚀 Starting SEO-optimized server..."
node scripts/static-server.js