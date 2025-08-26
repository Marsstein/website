#!/bin/bash

echo "📦 Installing http-server if not already installed..."
npm list http-server || npm install -g http-server

echo ""
echo "🔨 Building the project with SEO optimization..."
npm run build

echo ""
echo "🚀 Starting static file server..."
echo "===================================="
echo ""
echo "📍 Server will run at: http://localhost:8080"
echo ""
echo "✅ This server properly serves prerendered HTML files"
echo "📄 Each route will show its specific SEO meta tags"
echo ""
echo "===================================="
echo ""

cd dist && http-server -p 8080 -c-1 --gzip