# Pricing & Reviews Audit - Marsstein

## Overview
This document contains all occurrences of pricing, reviews, ratings, and related structured data found in the Marsstein codebase as of August 2025.

## 1. Pricing Information

### Product Pricing

#### PricingPage.tsx (`/src/pages/PricingPage.tsx`)
- **Structured Data Schema:**
  - Line 15-19: Starter Plan - "99" EUR
  - Line 27-31: Professional Plan - "299" EUR  
  - Line 39: Enterprise Plan - "Auf Anfrage"
- **UI Display:**
  - Line 48: Starter - '99€'
  - Line 63: Professional - '299€'
- **Meta Description:**
  - Line 100-101: "ab 99€/Monat", "Starter ab 99€, Professional 299€"

#### FinalChecks.tsx (`/src/pages/FinalChecks.tsx`)
- Line 67-68: Meta tags - "ab 149€/Monat", "Starter ab 149€, Professional ab 499€"

#### Build Scripts
- **prerender-react-content-full.js** (Line 1172): 
  - ISO 27001 page hardcoded price: "499" EUR
  - Automatically added to `/iso-27001-zertifizierung` route

### Compliance Fines & Legal References

#### DSGVO Maximum Fines
Referenced in multiple files as "20 Mio. €" or "4% des Jahresumsatzes":
- ComplianceFrameworks.tsx (line 311)
- CookieManagementTool.tsx (lines 95-96)
- ComplianceAIAssistant.tsx (line 269)
- Multiple compliance guide pages

#### Specific Case Fines
- **WhatsApp Ireland Case**: €225 Mio fine
  - WhatsAppIrelandCase.tsx: lines 399, 402, 405-406, 467, 494, 621
- **Google Fonts Munich Case**: €100 damages
  - GoogleFontsMunichCase.tsx: lines 177, 308
- **NIS2 Compliance**: €7 Millionen oder 1,4% des Jahresumsatzes
- **Other**: €420 Mio (HinweisgeberschutzgesetzGuide.tsx line 806)

#### Third-Party Service Reference
- HinweisgeberschutzgesetzGuide.tsx (line 1552): "Whistle-Cloud ab 99€/Monat"

## 2. Reviews & Ratings

### AssessmentCenter.tsx (`/src/pages/AssessmentCenter.tsx`)
- **Structured Data Schema (Lines 37-40):**
  ```json
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
  ```
- **Price**: "0" (free)

### Build Scripts
- **build-vercel-seo.js** (Lines 298-302):
  - Identical rating schema: 4.8 rating, 127 reviews
  - Price: "0"

### Other Rating References
- DsgvoGuides.tsx: rating 4.8 (lines 128, 288)
- VendorAssessmentTemplate.tsx: 4.8 (1.678 Downloads) (line 398)

## 3. Performance & Satisfaction Metrics

### Percentage-based Metrics
- ComplianceFrameworks.tsx: satisfaction: '94%' (line 167)
- CookieManagementToolProduct.tsx: '94% B2B Consent' (line 373)
- Various design pages: "97.4%", "98.4%", "99.4%" performance metrics
- EuAiActCompliance.tsx: "94% der deutschen Unternehmen nutzen generative KI"

### Other Metrics
- InteractiveShowcase.tsx: value: '127h' (line 52)
- AiActDashboard.tsx: "127" (line 228)

## 4. Schema.org Implementation Summary

### Current Implementations
1. **SEOHead Component**: Default organization schema (no pricing/ratings)
2. **PricingPage**: Product schema with offer prices
3. **AssessmentCenter**: WebApplication schema with ratings
4. **Build Scripts**: Additional hardcoded schemas for specific pages

### Social Media Links
- Current: LinkedIn, Twitter (Twitter account doesn't exist)
- To be updated: LinkedIn, Instagram

## 5. Inconsistencies Found

1. **Price Variations**: 
   - Starter: 99€ vs 149€
   - Professional: 299€ vs 499€
   - ISO 27001: 499€ (only in build script)

2. **Rating Data**:
   - Always 4.8/5 with 127 reviews
   - No actual reviews exist

3. **Hardcoded Values**:
   - Build scripts contain hardcoded structured data
   - Prices in prerender scripts don't match component prices

## 6. Recommendations

### Immediate Actions
1. Remove all pricing from structured data (prices not finalized)
2. Remove all review/rating data (no actual reviews exist)
3. Update social media links (remove Twitter, add Instagram)
4. Ensure consistency between component data and build scripts

### Future Considerations
1. Implement dynamic structured data generation
2. Create centralized pricing configuration
3. Add review collection mechanism before adding review schema
4. Consider using environment variables for pricing

## 7. Files to Update

### High Priority
1. `/src/pages/PricingPage.tsx`
2. `/src/pages/AssessmentCenter.tsx`
3. `/scripts/prerender-react-content-full.js`
4. `/scripts/build-vercel-seo.js`
5. `/src/components/SEOHead.tsx` (already updated)

### Medium Priority
- All compliance pages with DSGVO fine references (keep as legal information)
- Case study pages (keep fine amounts as factual information)
- Meta descriptions in various pages

## 8. Implementation Notes

- DSGVO fines and legal case amounts should remain as they are factual/educational content
- Only remove pricing/ratings from structured data and marketing content
- Keep performance metrics that represent actual system performance
- Update build scripts to use component data rather than hardcoded values