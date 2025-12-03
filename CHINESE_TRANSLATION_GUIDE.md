# Chinese Translation Implementation Guide

This guide outlines the step-by-step process for translating each page to Chinese and implementing the `/zh` route structure.

## Architecture Overview

### Route Structure
- All Chinese pages will be under `/zh/*` routes
- Each Chinese page will have its own lazy-loaded component
- Example: `/dsgvo` → `/zh/gdpr`

### Component Organization
```
src/
├── pages/
│   ├── DsgvoCompliance.tsx    # 🇩🇪 German original
│   ├── Index.tsx              # 🇩🇪 German homepage
│   └── zh/                    # 🇨🇳 Chinese translations
│       ├── Home.tsx           # Copy of Index.tsx with inline Chinese
│       ├── GDPR.tsx           # Copy of DsgvoCompliance.tsx with inline Chinese
│       ├── AIAct.tsx          # Copy of EuAiActCompliance.tsx with inline Chinese
│       └── ...                # All pages copied & translated inline
├── components/
│   └── layouts/
│       └── ChineseLayout.tsx  # Layout wrapper for Chinese pages
```

### ⚠️ IMPORTANT: Translation Approach - INLINE ONLY

**❌ OLD APPROACH (Too Complex - DO NOT USE):**
```typescript
// Don't create separate translation files!
// src/i18n/zh/gdpr.ts ❌
export const zhGdpr = {
  hero: { title: "标题" }
};

// src/pages/zh/GDPR.tsx ❌
const t = zhGdpr;
<h1>{t.hero.title}</h1>  // Extra abstraction = more complexity
```

**✅ NEW APPROACH (Simple & Direct - USE THIS):**
```typescript
// src/pages/zh/GDPR.tsx ✅
// Translate directly in the component - no external files!
<h1>GDPR合规</h1>
<p>保护您的企业免受GDPR罚款</p>
```

**Why inline translations are better:**
1. ✅ **Simpler**: One file per page (no switching between files)
2. ✅ **Faster**: Direct translation without abstraction layer
3. ✅ **Fewer Errors**: No key mismatches between translation files
4. ✅ **Easier Maintenance**: See complete page structure in one place
5. ✅ **1:1 Fidelity**: Perfect copy of German structure

## Step-by-Step Process for Each Page (UPDATED - INLINE APPROACH)

### 1. Identify Source Page
- [ ] Find the German source page (e.g., `/src/pages/DsgvoCompliance.tsx`)
- [ ] Check the page structure and complexity
- [ ] Note the file name for the Chinese version (e.g., `GDPR.tsx`)

### 2. Copy German File
```bash
# Example: Copy DSGVO page
cp src/pages/DsgvoCompliance.tsx src/pages/zh/GDPR.tsx
```

### 3. Update Imports (if needed)
```typescript
// Change relative imports to use correct paths
// Before:
import SEOHead from '../components/SEOHead';

// After (if needed):
import SEOHead from '../../components/SEOHead';
```

### 4. Update SEO Meta Tags
```typescript
// Change SEOHead to Helmet for Chinese version
import { Helmet } from 'react-helmet-async';

// Add Chinese meta tags
<Helmet>
  <title>GDPR合规解决方案 | Marsstein</title>
  <meta name="description" content="保护您的企业免受GDPR罚款..." />
  <html lang="zh-CN" />
  <meta property="og:locale" content="zh_CN" />
  <link rel="alternate" hreflang="zh-CN" href="https://marsstein.ai/zh/gdpr" />
  <link rel="alternate" hreflang="de" href="https://marsstein.ai/dsgvo" />
  <link rel="canonical" href="https://marsstein.ai/zh/gdpr" />
</Helmet>
```

### 5. Translate All Text INLINE (No External Files!)
Go through the entire file and replace German text with Chinese:

```typescript
// BEFORE (German):
<h1>DSGVO-Compliance</h1>
<p>Schützen Sie Ihr Unternehmen vor DSGVO-Bußgeldern</p>
<Button>Jetzt DSB beauftragen</Button>

// AFTER (Chinese):
<h1>GDPR合规</h1>
<p>保护您的企业免受GDPR罚款</p>
<Button>立即委托数据保护官</Button>
```

**Translation Tips:**
- Use Find & Replace for common terms (DSGVO → GDPR, etc.)
- Keep HTML structure identical
- Keep className, icons, and layout unchanged
- Only translate visible text content
- Adapt German-specific examples to international ones

### 6. Update Internal Links
```typescript
// Change German routes to Chinese routes
// BEFORE:
<Link to="/externer-datenschutzbeauftragter">

// AFTER:
<Link to="/zh/waibao-shuju-baohu-guanyuan">
```

### 7. Add Route to App.tsx
```typescript
// In App.tsx - Add at top with other imports
const ZhGDPR = lazy(() => import("./pages/zh/GDPR"));

// Inside ChineseLayout <Route> block
<Route path="/zh" element={<ChineseLayout />}>
  <Route index element={<ZhHome />} />
  <Route path="gdpr" element={<ZhGDPR />} />  {/* NEW */}
</Route>
```

### 8. Testing Checklist
- [ ] Dev server starts without errors (`npm run dev`)
- [ ] Page loads at correct URL (e.g., `http://localhost:8080/zh/gdpr`)
- [ ] Visual check: All text displays correctly in Chinese
- [ ] Font rendering: Chinese characters render properly
- [ ] Layout: No text overflow or breaking layouts
- [ ] Links: All internal links point to `/zh/*` versions
- [ ] SEO: Meta tags are in Chinese (`lang="zh-CN"`)
- [ ] Mobile: Responsive design works with Chinese text
- [ ] Performance: Page loads efficiently

### 9. Quality Assurance
- [ ] Native Chinese speaker review (if available)
- [ ] Check for proper use of Simplified Chinese (简体中文)
- [ ] Verify technical terminology accuracy
- [ ] Ensure cultural appropriateness
- [ ] Test in Chinese browsers (if targeting China market)

## Common Pitfalls to Avoid

### Typography
- Use proper Chinese fonts (ensure font-family includes Chinese-safe fonts)
- Chinese text often needs more vertical space
- Avoid all-caps styling (doesn't work with Chinese)

### Layout
- Chinese text can be more compact horizontally but needs more vertical space
- Buttons and CTAs may need wider dimensions
- Line-height should be adjusted for Chinese characters

### SEO
- Use `lang="zh-CN"` for Simplified Chinese
- Add proper hreflang tags for all language versions
- Consider Baidu SEO best practices (different from Google)

### Cultural Considerations
- Colors: Red is lucky, white can mean death in some contexts
- Numbers: Avoid 4 (四, sounds like death), prefer 8 (发, prosperity)
- Imagery: Ensure images are culturally appropriate
- Tone: Business communication in Chinese tends to be more formal

## Technical Requirements

### Fonts
Add to `index.html` or CSS:
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Noto Sans SC", "Noto Sans TC", "Microsoft YaHei",
             sans-serif;
```

### Language Detection
```typescript
// Optional: Auto-detect browser language
const browserLang = navigator.language; // Returns 'zh-CN', 'zh-TW', etc.
```

### Meta Tags Template
```html
<html lang="zh-CN">
<meta charset="UTF-8">
<meta property="og:locale" content="zh_CN">
<meta name="language" content="Chinese">
```

## Resources

### Translation Tools
- DeepL (supports Chinese)
- Google Translate (for quick drafts)
- Human translators for final review

### Chinese SEO
- Baidu Webmaster Tools
- Sogou Webmaster Platform
- Chinese keyword research tools

### Fonts
- Noto Sans SC (Google Fonts, Simplified Chinese)
- Source Han Sans (Adobe, comprehensive CJK support)

## Example: Complete Page Translation

See [DSGVO page example](./CHINESE_TRANSLATION_EXAMPLE.md) for a full implementation example.

## Project Decisions

**Confirmed decisions:**
1. ✅ **Target**: Simplified Chinese (简体中文) for Mainland China market
2. ✅ **Language Code**: `zh-CN` (China Mainland)
3. ✅ **Route Structure**: `/zh/*` for all Chinese pages
4. ⏳ **Tone**: TBD - Formal business or approachable startup?
5. ⏳ **Brand Name**: TBD - Keep "Marsstein" or create Chinese brand name (马斯坦)?
6. ⏳ **Legal Review**: TBD - Do compliance pages need legal review for China market?
7. ⏳ **Hosting**: TBD - China-based CDN/server for performance?

## Questions Still to Resolve

- [ ] Business tone: Formal (正式商务) or approachable (亲切友好)?
- [ ] Brand localization: "Marsstein" vs "马斯坦" (Mǎsītǎn)
- [ ] Legal content review needed for Chinese market compliance pages?
- [ ] CDN strategy for China (Great Firewall considerations)?
- [ ] Translation workflow: In-house, vendor, or hybrid approach?
- [ ] Native speaker availability for quality assurance?

---

**Last Updated**: 2025-10-21
**Version**: 1.1
**Language**: Simplified Chinese (简体中文) - zh-CN
