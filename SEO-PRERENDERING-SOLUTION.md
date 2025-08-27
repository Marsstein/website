# SEO Prerendering Solution Documentation

## Problem Statement

The Vite preview server (`npm run preview`) operates in SPA mode by default, always serving the root `index.html` file regardless of the requested route. This caused all pages to show the same generic meta tags instead of page-specific SEO data, even though the prerendering process was correctly generating individual HTML files with proper meta tags.

## Root Cause

- **Vite Preview Behavior**: Designed for Single Page Applications where client-side routing handles navigation
- **File Structure**: Prerendered files are saved as `/dist/[route]/index.html`
- **Mismatch**: The preview server doesn't map routes to their corresponding prerendered HTML files

## Solution Implemented

### 1. Custom Static Server

Created a custom HTTP server that correctly serves prerendered HTML files:

**File**: `scripts/static-server.js`
```javascript
import http from 'http';
import fs from 'fs';
import path from 'path';
// ... server implementation
```

**Key Features**:
- Maps routes to their prerendered HTML files
- Handles multiple file path patterns
- Falls back to root index.html for client-side routes
- Serves static assets with correct MIME types

### 2. NPM Scripts

Added new scripts to `package.json`:
```json
"preview:seo": "node scripts/static-server.js",
"serve:seo": "./scripts/start-seo-server.sh",
"serve:static": "./scripts/serve-static.sh"
```

### 3. Usage

```bash
# Build with prerendering
npm run build

# Start SEO-optimized server
npm run preview:seo
```

## Implementation Plan for All Pages

### Phase 1: Audit Current Pages
1. **Identify all routes** that need SEO optimization
2. **Check existing SEO implementation** in each component
3. **Create a route map** with required meta tags

### Phase 2: Ensure SEO Coverage
```javascript
// Template for each page component
import SEOHead from '../components/SEOHead';

const PageComponent = () => {
  return (
    <>
      <SEOHead
        title="Page Specific Title"
        description="Page specific description (150-160 chars)"
        canonical="/page-route"
        structuredData={pageSpecificSchema}
      />
      {/* Page content */}
    </>
  );
};
```

### Phase 3: Automated Validation

Create a validation script to ensure all pages have proper SEO:

**File**: `scripts/validate-seo.js`
```javascript
import { routes } from '../src/routes';
import fs from 'fs';
import path from 'path';

// Check each route for:
// 1. SEOHead component usage
// 2. Unique title and description
// 3. Correct canonical URL
// 4. Prerendered HTML exists
```

### Phase 4: Build Process Enhancement

Update `scripts/full-prerender.js` to:
1. Format HTML output for readability
2. Validate SEO tags during build
3. Generate SEO report

## HTML Formatting Solution

### Current Issue
The prerendered HTML is minified and appears in a single line, making it difficult to read and debug.

### Solution 1: Pretty Print HTML (Recommended)

Add HTML formatting to the prerendering script:

```javascript
// In scripts/full-prerender.js, add:
import prettier from 'prettier';

async function formatHTML(html) {
  return await prettier.format(html, {
    parser: 'html',
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    singleQuote: false,
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'css'
  });
}

// After generating HTML:
const formattedHtml = await formatHTML(finalHtml);
fs.writeFileSync(outputPath, formattedHtml, 'utf-8');
```

### Solution 2: Use Built-in Formatting

```javascript
// Simple formatting function
function formatHTML(html) {
  // Add newlines after specific tags
  return html
    .replace(/></g, '>\n<')
    .replace(/(<meta[^>]*>)/g, '  $1')
    .replace(/(<link[^>]*>)/g, '  $1')
    .replace(/(<script[^>]*>)/g, '  $1')
    .replace(/(<\/head>)/g, '\n$1')
    .replace(/(<body[^>]*>)/g, '\n$1')
    .replace(/(<\/body>)/g, '\n$1')
    .replace(/(<\/html>)/g, '\n$1');
}
```

### Solution 3: Development vs Production

```javascript
// In build configuration
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  html = formatHTML(html); // Pretty print for development
} else {
  html = minifyHTML(html); // Minify for production
}
```

## Complete Implementation Checklist

### Immediate Actions
- [x] Create custom static server for prerendered files
- [x] Add npm scripts for SEO preview
- [ ] Install prettier for HTML formatting
- [ ] Update full-prerender.js with formatting

### Short Term (1-2 days)
- [ ] Audit all existing pages for SEO coverage
- [ ] Create validation script
- [ ] Add formatting to prerender process
- [ ] Test all routes with new server

### Medium Term (1 week)
- [ ] Implement automated SEO testing
- [ ] Add SEO score reporting
- [ ] Create GitHub Action for SEO validation
- [ ] Document SEO guidelines for new pages

### Long Term
- [ ] Implement dynamic sitemap generation
- [ ] Add hreflang for internationalization
- [ ] Integrate with Google Search Console API
- [ ] Create SEO dashboard

## Testing Procedure

### Manual Testing
1. Build the project: `npm run build`
2. Start SEO server: `npm run preview:seo`
3. For each route:
   - Open in browser
   - View source (not inspect element)
   - Verify correct meta tags
   - Check structured data

### Automated Testing
```bash
# Create test script
npm run test:seo

# Should check:
# - All routes return 200 status
# - Each route has unique title/description
# - No duplicate meta tags
# - Structured data validates
```

## Common Issues & Solutions

### Issue 1: Route Not Found
**Symptom**: 404 error for prerendered page
**Solution**: Check if HTML file exists in `dist/[route]/index.html`

### Issue 2: Generic Meta Tags
**Symptom**: Page shows homepage meta tags
**Solution**: Ensure SEOHead component is properly implemented

### Issue 3: Slow Build Times
**Symptom**: Prerendering takes too long
**Solution**: Parallelize rendering process, cache unchanged pages

### Issue 4: Memory Issues
**Symptom**: Build crashes on large sites
**Solution**: Batch process routes, increase Node memory limit

## Monitoring & Maintenance

### Weekly Tasks
- Review Google Search Console for errors
- Check Core Web Vitals scores
- Monitor social sharing appearance

### Monthly Tasks
- Update structured data schemas
- Review and optimize meta descriptions
- Audit new pages for SEO compliance

### Quarterly Tasks
- Full SEO audit
- Competitor analysis
- Update SEO strategy documentation

## Resources

### Internal Documentation
- `/SEO-ARCHITECTURE.md` - SEO implementation patterns
- `/src/components/SEOHead.tsx` - Core SEO component
- `/scripts/full-prerender.js` - Prerendering implementation

### External Tools
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org Validator](https://validator.schema.org/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Next Steps

1. **Immediate**: Update `full-prerender.js` with HTML formatting
2. **Today**: Test all critical pages with new server
3. **This Week**: Implement automated validation
4. **This Month**: Roll out to production with monitoring