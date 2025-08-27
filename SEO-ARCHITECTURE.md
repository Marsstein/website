# SEO Architecture Documentation - Marsstein

## Overview
Marsstein uses React Helmet Async for managing SEO meta tags across the application. This document explains the architecture and implementation patterns.

## Core Components

### 1. SEOHead Component (`/src/components/SEOHead.tsx`)
The centralized component that manages all SEO-related meta tags:

```typescript
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  structuredData?: any;
}
```

**Key Features:**
- Automatically appends " | Marsstein" to all page titles
- Default Open Graph image: `/og-image-marsstein.jpg`
- Comprehensive meta tags including Open Graph and Twitter Cards
- Support for JSON-LD structured data
- Theme color, robots directives, and favicon management

### 2. React Helmet Setup

**Package:** `react-helmet-async` (v2.0.5)

**App.tsx Configuration:**
```typescript
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        {/* Routes */}
      </Routes>
    </HelmetProvider>
  );
}
```

## Implementation Pattern

Every page follows this structure:

```typescript
const PageComponent = () => {
  return (
    <>
      <SEOHead
        title="Your Page Title"
        description="Your meta description for search engines"
        canonical="/your-page-url"
        structuredData={optionalStructuredData}
      />
      <div className="min-h-screen">
        <Header />
        {/* Page Content */}
        <Footer />
      </div>
    </>
  );
};
```

## URL Structure

```
/                                    # Homepage
├── /compliance/
│   ├── /dsgvo                      # DSGVO compliance
│   ├── /iso-27001                  # ISO 27001 compliance
│   └── /nis2                       # NIS2 compliance
├── /wissen/                        # Knowledge base
│   ├── /compliance/
│   │   └── /iso-27001             # ISO 27001 guides
│   ├── /dsgvo/
│   │   └── /grundlagen            # DSGVO basics
│   └── /rechtsprechung/           # Legal cases
├── /tools/                         # Interactive tools
│   ├── /dsgvo-rechner
│   └── /iso-27001-rechner
└── /assessment-center/             # Assessment tools
```

## SEO Data Patterns by Page Type

### Compliance Pages
- **Title Format:** `[Framework] Zertifizierung – [Key Benefit] | Marsstein`
- **Description:** Action-oriented with benefits and CTAs
- **Example:** src/pages/compliance/DSGVO.tsx:33

### Knowledge Pages
- **Title Format:** `[Topic] – [Specific Focus] | Marsstein`
- **Description:** Problem-solution focused
- **Structured Data:** Article schema with author info
- **Example:** src/pages/wissen/compliance/ISO27001Guide.tsx:63

### Tool Pages
- **Title Format:** `[Tool Name] – Kostenlos & DSGVO-konform | Marsstein`
- **Description:** Feature highlights with compliance assurance
- **Structured Data:** Often includes HowTo schema
- **Example:** src/pages/tools/DSGVORechner.tsx:63

## Structured Data Implementation

Common schema.org types used:

### Organization (Homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marsstein",
  "url": "https://marsstein.com",
  "logo": "https://marsstein.com/marsstein-logo.png"
}
```

### Article (Knowledge Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Organization",
    "name": "Marsstein"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marsstein",
    "logo": {
      "@type": "ImageObject",
      "url": "https://marsstein.com/marsstein-logo.png"
    }
  }
}
```

## Pre-rendering and Build Process

### Static Generation (`scripts/full-prerender.js`)
The build process includes SEO optimizations:

1. **Duplicate Meta Tag Removal:** Fixes React Helmet's duplicate tag issue
2. **Title Tag Validation:** Ensures proper title tag format
3. **Canonical URL Injection:** Adds missing canonical URLs
4. **Performance Optimization:** Injects preload tags for fonts and critical CSS
5. **Image Optimization:** Adds width/height to prevent layout shifts
6. **Script Cleanup:** Removes development-specific scripts

### Build Commands
```bash
# Development
npm run dev

# Production build with pre-rendering
npm run build
```

## Best Practices

### 1. Title Tags
- Keep under 60 characters (including " | Marsstein")
- Front-load important keywords
- Make each title unique and descriptive

### 2. Meta Descriptions
- Keep between 150-160 characters
- Include a call-to-action
- Use relevant keywords naturally
- Make each description unique

### 3. Canonical URLs
- Always use absolute URLs
- Ensure consistency with actual page URLs
- Handle trailing slashes consistently

### 4. Structured Data
- Validate with Google's Rich Results Test
- Keep data accurate and up-to-date
- Use appropriate schema types for content

### 5. Open Graph Tags
- Use high-quality images (1200x630px recommended)
- Write compelling titles for social sharing
- Test with Facebook's Sharing Debugger

## Common Issues and Solutions

### Issue: Duplicate Meta Tags
**Cause:** React Helmet sometimes creates duplicate tags during SSR
**Solution:** Pre-render script automatically removes duplicates

### Issue: Missing Canonical URLs
**Cause:** Developer forgets to add canonical prop
**Solution:** Pre-render script adds them based on page URL

### Issue: Title Tag Too Long
**Prevention:** Count characters including " | Marsstein" suffix

## Adding SEO to New Pages

1. Import SEOHead component
2. Add SEOHead as first element in return statement
3. Provide required title and description
4. Add canonical URL (relative path)
5. Include structured data if applicable
6. Test with build process

## Example Implementation

```typescript
import SEOHead from '../components/SEOHead';

const NewCompliancePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Your New Compliance Guide",
    // ... other properties
  };

  return (
    <>
      <SEOHead
        title="New Compliance Framework – Expert Guide"
        description="Learn how to implement the new compliance framework with our step-by-step guide. Get certified faster with Marsstein."
        canonical="/compliance/new-framework"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Header />
        {/* Page content */}
        <Footer />
      </div>
    </>
  );
};
```

## Monitoring and Optimization

### Tools for Testing
- Google Search Console
- Google Rich Results Test
- Facebook Sharing Debugger
- Twitter Card Validator
- Lighthouse (for Core Web Vitals)

### Key Metrics to Track
- Click-through rate (CTR) from search
- Average position in search results
- Core Web Vitals scores
- Social media engagement rates

## Future Improvements

1. **Dynamic Sitemap Generation:** Automate sitemap.xml updates
2. **Schema Markup Expansion:** Add more detailed product/service schemas
3. **International SEO:** Implement hreflang tags for multi-language support
4. **Advanced Monitoring:** Integrate with analytics for SEO performance tracking