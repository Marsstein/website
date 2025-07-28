# Route Structure Analysis

## Current Route Structure

### Main Pages
- `/` - Homepage
- `/contact` - Contact page
- `/academy` - Academy page
- `/pricing` - Pricing page
- `/dashboard/*` - Dashboard (protected)
- `/thank-you` - Thank you page

### Compliance Product Pages (Main Marketing Pages)

#### Regulations (`/regulierung/`)
- `/regulierung/dsgvo` - DSGVO Product Page
- `/regulierung/eu-ai-act` - EU AI Act Product Page
- `/regulierung/nis2` - NIS2 Product Page
- `/regulierung/hinweisgeberschutzgesetz` - Hinweisgeberschutzgesetz Product Page
- `/regulierung/geldwaeschegesetz` - Geldwäschegesetz Product Page

#### Certifications (`/zertifizierung/`)
- `/zertifizierung/iso-27001` - ISO 27001 Product Page
- `/zertifizierung/soc2` - SOC 2 Product Page
- `/zertifizierung/iso-27017` - ISO 27017 Product Page
- `/zertifizierung/iso-27018` - ISO 27018 Product Page
- `/zertifizierung/tisax` - TISAX Product Page

### Compliance Guide Pages (Knowledge Center)
These are educational/guide pages under `/compliance/`:

#### Currently Implemented:
- `/compliance/iso-27001` - ISO 27001 Guide ✅
- `/compliance/soc-2` - SOC 2 Guide ✅
- `/compliance/eu-ai-act` - EU AI Act Guide ✅
- `/compliance/nis2` - NIS2 Guide ✅
- `/compliance/iso-27017` - ISO 27017 Guide ✅

#### Missing Routes (Components exist but routes not defined):
- `/compliance/iso-27018` - ISO 27018 Guide ❌
- `/compliance/hinweisgeberschutzgesetz` - Hinweisgeberschutzgesetz Guide ❌
- `/compliance/geldwaeschegesetz` - Geldwäschegesetz Guide ❌
- `/compliance/tisax` - TISAX Guide ❌
- `/compliance/dsgvo` - DSGVO Guide ❌

### Industries (`/branchen/`)
- `/branchen` - Industries overview
- `/branchen/gesundheitswesen` - Healthcare
- `/branchen/finanzdienstleister` - Financial Services
- `/branchen/e-commerce` - E-Commerce
- `/branchen/saas-unternehmen` - SaaS
- `/branchen/produktion` - Manufacturing
- `/branchen/automotive` - Automotive
- `/branchen/energie` - Energy
- `/branchen/lebensmittel` - Food
- `/branchen/logistik` - Logistics

### Tools (`/tools/`)
- `/tools` - Tools overview
- `/tools/cookie-management` - Cookie Management
- `/tools/whistleblower-system` - Whistleblower System
- `/tools/cookie-management-tool` - Cookie Management Tool Product
- `/tools/whistleblower-system-tool` - Whistleblower System Tool Product
- `/tools/dsgvo-email-template-generator` - DSGVO Email Template Generator
- `/tools/dsgvo-compliance-scorecard` - DSGVO Compliance Scorecard
- `/tools/dsgvo-bounty-hunter` - DSGVO Bounty Hunter
- `/tools/privacy-token` - Privacy Token
- `/tools/compliance-ai-assistant` - Compliance AI Assistant

### Knowledge Center (`/wissen/`)
- `/wissen` - Knowledge overview
- `/wissen/dsgvo-leitfaeden` - DSGVO Guides
- `/wissen/compliance-frameworks` - Compliance Frameworks Overview
- `/wissen/leitfaden/dsgvo-grundlagen` - DSGVO Basics Guide
- `/wissen/leitfaden/website-dsgvo` - Website DSGVO Guide
- `/wissen/leitfaden/dsgvo-30-tage` - DSGVO 30 Days Guide
- `/wissen/leitfaden/data-breach-notfall` - Data Breach Emergency Guide

### Resources (`/resources/`)
- `/resources` - Resources overview
- `/resources/dsgvo-compliance-checklist` - DSGVO Compliance Checklist
- `/resources/datenschutz-readiness-assessment` - Data Privacy Readiness Assessment
- `/resources/breach-response-checklist` - Breach Response Checklist
- `/resources/cookie-compliance-audit` - Cookie Compliance Audit
- `/resources/vendor-assessment-template` - Vendor Assessment Template

### Legacy Routes (for backwards compatibility)
- `/dsgvo-compliance`
- `/iso-27001-compliance`
- `/eu-ai-act-compliance`
- `/soc2-compliance`
- `/iso-27017-compliance`
- `/iso-27018-compliance`
- `/tisax-compliance`

## Issues Found

### 1. Missing Compliance Guide Routes
The following guide pages have components but no routes defined in App.tsx:
- `Iso27018Guide.tsx` → `/compliance/iso-27018`
- `HinweisgeberschutzgesetzGuide.tsx` → `/compliance/hinweisgeberschutzgesetz`
- `GeldwaeschegesetzGuide.tsx` → `/compliance/geldwaeschegesetz`
- `TisaxGuide.tsx` → `/compliance/tisax`
- `DsgvoGuide.tsx` → `/compliance/dsgvo`

### 2. Link Inconsistencies
On `/wissen/compliance-frameworks` page, the links were pointing to:
- `/regulierung/hinweisgeberschutzgesetz` instead of `/compliance/hinweisgeberschutzgesetz`
- `/regulierung/geldwaeschegesetz` instead of `/compliance/geldwaeschegesetz`
- `/zertifizierung/iso-27018` instead of `/compliance/iso-27018`

These have been fixed to point to `/compliance/` paths.

### 3. Navigation Structure
There are two types of pages for each compliance framework:
1. **Product/Marketing Pages**: Under `/regulierung/` or `/zertifizierung/`
2. **Guide/Educational Pages**: Under `/compliance/`

This dual structure needs to be clear in navigation and linking.