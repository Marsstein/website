#!/bin/bash

# Marsstein Vercel Deployment Script
echo "🚀 Starting Marsstein deployment to Vercel..."

# Build the project first
echo "📦 Building the project..."
npm run build

# Deploy to Vercel with all required settings
echo "🌐 Deploying to Vercel..."
npx vercel --prod \
  --name "marsstein" \
  --build-env VITE_EMAILJS_SERVICE_ID="service_placeholder" \
  --build-env VITE_EMAILJS_TEMPLATE_ID="template_placeholder" \
  --build-env VITE_EMAILJS_PUBLIC_KEY="public_key_placeholder" \
  --yes

echo "✅ Deployment complete!"
echo "🌍 Your site will be available at: https://marsstein.vercel.app"
echo ""
echo "📝 Next steps:"
echo "1. Go to vercel.com and find your project"
echo "2. Add your custom domain: marsstein.com"
echo "3. Update environment variables with real EmailJS values"
echo "4. Configure DNS records in Google Domains"
