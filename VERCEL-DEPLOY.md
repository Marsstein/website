# Vercel Deployment Configuration - Marsstein

## Overview
This document explains the Vercel deployment setup and build process for Marsstein.

## Build Command

Based on the deployment logs, Vercel uses:
```bash
npm run build:react-content-full
```

This command is defined in `package.json` as:
```json
"build:react-content-full": "node scripts/prerender-react-content-full.js"
```

## Deployment Process

### 1. Environment
- **Region**: Washington, D.C., USA (East) – iad1
- **Build Machine**: 2 cores, 8 GB RAM
- **Node Version**: Determined by Vercel (check vercel.json)

### 2. Build Steps
1. **Clone Repository**: From GitHub (main branch)
2. **Apply .vercelignore**: Removes sensitive files
3. **Restore Cache**: From previous deployments
4. **Install Dependencies**: `npm install --legacy-peer-deps`
5. **Run Build**: `npm run build:react-content-full`
6. **Deploy Outputs**: Upload to Vercel CDN
7. **Create Cache**: For faster subsequent builds

### 3. Build Script Details

The `prerender-react-content-full.js` script:
- Builds the application with Vite
- Generates static HTML for all routes
- Includes full React component content
- Adds SEO meta tags
- Creates sitemap.xml and robots.txt
- Applies route mapping (e.g., `/dsgvo-compliance` → `/dsgvo`)

### 4. Generated Pages (64 total)
- Homepage and main sections
- Compliance pages (DSGVO, ISO 27001, NIS2, etc.)
- Industry-specific pages (/branchen/*)
- Knowledge base (/wissen/*)
- Tools and assessments
- Legal and contact pages

## Important Files

### vercel.json
```json
{
  "buildCommand": "npm run build:react-content-full",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps"
}
```

### .vercelignore
Excludes sensitive files from deployment:
- `.env.development`
- `.env.production`
- `.git/*`
- Other development files

## Recent Updates (August 2025)

### SEO Changes
1. **Removed Twitter Tags**: Twitter card meta tags have been removed from:
   - `src/components/SEOHead.tsx`
   - `scripts/prerender-react-content-full.js`
   - `scripts/build-vercel-seo.js`
   - `scripts/build-simple.js`

2. **Updated Social Media Links**:
   - Removed: Twitter (@marsstein)
   - Added: Instagram (https://www.instagram.com/marsstein.ai/)
   - Kept: LinkedIn (https://www.linkedin.com/company/marsstein/)

3. **Removed Pricing/Reviews**:
   - Removed hardcoded prices from structured data
   - Removed fake review ratings (4.8/5, 127 reviews)
   - Updated to use `isAccessibleForFree: true` where applicable

### Organization Data
Default organization structured data now includes:
- Company name: Marsstein GmbH
- Address: Bücklestraße 3, 78467 Konstanz
- Phone: +4917670560292
- Email: info@marsstein.ai
- Social profiles: LinkedIn, Instagram

## Build Performance

Typical build metrics:
- **Clone Time**: ~2s
- **Install Time**: ~2s
- **Build Time**: ~17s
- **Total Deploy Time**: ~28s
- **Cache Size**: ~94 MB

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node version compatibility
   - Verify all dependencies are installed
   - Review build logs for specific errors

2. **Missing SEO Tags**
   - Ensure `prerender-react-content-full.js` is updated
   - Clear build cache on Vercel
   - Verify changes are committed to main branch

3. **Routing Issues**
   - Check route mapping in build script
   - Verify redirects in vercel.json
   - Test locally with `npm run build:react-content-full`

## Local Testing

To test the Vercel build locally:
```bash
# Install dependencies
npm install --legacy-peer-deps

# Run the build
npm run build:react-content-full

# Serve the built files
npx serve dist
```

## Deployment Checklist

Before deploying:
- [ ] Test build locally
- [ ] Verify all routes generate correctly
- [ ] Check SEO meta tags in generated HTML
- [ ] Ensure no hardcoded prices/reviews
- [ ] Validate structured data
- [ ] Commit all changes to main branch

## Contact

For deployment issues:
- Check Vercel dashboard for detailed logs
- Review GitHub Actions (if configured)
- Contact DevOps team