#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define pages that should be noindex (no SEO needed)
const noindexPages = [
  // Internal/Admin pages
  'Dashboard',
  'DashboardPage',

  // Design showcase pages (not for SEO)
  'designs/AlpineResilience',
  'designs/AppleLifestyle',
  'designs/DesignShowcase',
  'designs/DigitalTrust',
  'designs/FutureLaw',
  'designs/LuxuriousTrust',
  'designs/MarsBlack',
  'designs/MarsLuxe',
  'designs/MarsQuantum',
  'designs/MarsWhite',
  'designs/MarssteinCore',
  'designs/MarssteinMidnight',
  'designs/MarssteinProfessional',
  'designs/MinimalPure',
  'designs/ModernCompliance',
  'designs/NeuralMars',
  'designs/QuantumMars',
  'designs/SwissPrecision',
  'designs/TechInnovation',
  'designs/TechPremium',

  // Thank you / Confirmation pages
  'ThankYou',

  // Error pages
  'NotFound',

  // Test/Development pages
  'FinalChecks',

  // Internal assessment tools (behind forms/login)
  'assessment-center/ISO27001ReadinessCheck',
  'assessment-center/NIS2ComplianceCheck',
  'assessment-center/SecurityControlsAudit',
  'assessment-center/ISMSMaturityAssessment',
  'assessment-center/SOC2ReadinessAssessment',
];

// High-priority SEO pages (should definitely have SEO)
const highPrioritySEOPages = [
  'Index',
  'Home',
  'ContactPage',
  'Contact',
  'PricingPage',
  'Pricing',
  'About',
  'Impressum',
  'Datenschutz',
  'Knowledge',
  'Industries',
  'BranchenWissen',
  'Tools',
  'AcademyPage',
  'Academy',

  // Main compliance pages
  'DsgvoCompliance',
  'Iso27001Compliance',
  'EuAiActCompliance',
  'Soc2Compliance',
  'Nis2Compliance',
  'TisaxCompliance',
  'HinweisgeberschutzCompliance',
  'GeldwaeschegesetzCompliance',

  // Knowledge hub pages
  'DsgvoGuides',
  'ComplianceFrameworks',
  'KiDatenschutz',
  'Rechtsprechung',
  'CrisisManagement',
];

// Read the static SEO config
const staticSeoContent = fs.readFileSync(path.join(__dirname, 'scripts/generate-static-seo.mjs'), 'utf8');
const staticRoutes = [];
const routeRegex = /['"]([^'"]+)['"]\s*:\s*{/g;
let match;
while ((match = routeRegex.exec(staticSeoContent)) !== null) {
  if (match[1].startsWith('/')) {
    staticRoutes.push(match[1]);
  }
}

// Find all page files
const pagesDir = path.join(__dirname, 'src/pages');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath);
    } else if (file.endsWith('.tsx') && !file.includes('.test.')) {
      pageFiles.push(fullPath);
    }
  }
}

findPageFiles(pagesDir);

// Categorize pages
const results = {
  noindexPages: [],
  highPrioritySEO: { withSEO: [], withoutSEO: [] },
  regularPages: { withSEO: [], withoutSEO: [] },
  staticConfigMissing: []
};

for (const file of pageFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relativePath = path.relative(pagesDir, file);
  const pageName = relativePath.replace('.tsx', '');

  // Check for SEOHead or Helmet
  const hasSEOHeadImport = content.includes("import SEOHead") || content.includes("from '../components/SEOHead'");
  const hasSEOHeadUsage = content.includes("<SEOHead");
  const hasHelmet = content.includes("react-helmet");
  const hasNoindex = content.includes('noindex') || content.includes('robots.*noindex');
  const hasSEO = (hasSEOHeadImport && hasSEOHeadUsage) || hasHelmet;

  // Categorize page
  if (noindexPages.includes(pageName) || hasNoindex) {
    results.noindexPages.push(pageName);
  } else if (highPrioritySEOPages.includes(pageName.split('/')[0])) {
    if (hasSEO) {
      results.highPrioritySEO.withSEO.push(pageName);
    } else {
      results.highPrioritySEO.withoutSEO.push(pageName);
    }
  } else {
    if (hasSEO) {
      results.regularPages.withSEO.push(pageName);
    } else {
      results.regularPages.withoutSEO.push(pageName);
    }
  }
}

// Check static config coverage
const allSEOPages = [...results.highPrioritySEO.withSEO, ...results.regularPages.withSEO];
const routeMapping = {
  'Index': '/',
  'ContactPage': '/contact',
  'PricingPage': '/preise',
  'AcademyPage': '/academy',
  'About': '/ueber-uns',
  'Impressum': '/impressum',
  'Datenschutz': '/datenschutz',
  'DsgvoCompliance': '/dsgvo',
  'Iso27001Compliance': '/iso-27001-zertifizierung',
  'EuAiActCompliance': '/eu-ai-act',
  'Soc2Compliance': '/soc2-zertifizierung',
  'Nis2Compliance': '/nis2-compliance',
  'TisaxCompliance': '/tisax-zertifizierung',
  'Tools': '/tools',
  'Knowledge': '/wissen',
  'BranchenWissen': '/wissen/branchen',
  'Industries': '/branchen',
};

for (const page of allSEOPages) {
  const route = routeMapping[page] || `/${page.toLowerCase().replace(/\//g, '/')}`;
  if (!staticRoutes.includes(route)) {
    results.staticConfigMissing.push({ page, route });
  }
}

// Generate Report
console.log('\n📊 Smart SEO Coverage Report\n');
console.log('=' .repeat(60) + '\n');

// Summary
const totalPages = pageFiles.length;
const seoRelevantPages = totalPages - results.noindexPages.length;
const pagesWithSEO = results.highPrioritySEO.withSEO.length + results.regularPages.withSEO.length;
const coverage = Math.round((pagesWithSEO / seoRelevantPages) * 100);

console.log('📈 Summary:');
console.log(`   Total Pages: ${totalPages}`);
console.log(`   Noindex Pages (no SEO needed): ${results.noindexPages.length}`);
console.log(`   SEO-Relevant Pages: ${seoRelevantPages}`);
console.log(`   Pages with SEO: ${pagesWithSEO}`);
console.log(`   SEO Coverage: ${coverage}% (of SEO-relevant pages)\n`);

// Critical Issues
console.log('🔴 CRITICAL: High-Priority Pages WITHOUT SEO:\n');
if (results.highPrioritySEO.withoutSEO.length > 0) {
  results.highPrioritySEO.withoutSEO.forEach(page => {
    console.log(`   ❌ ${page}`);
  });
} else {
  console.log('   ✅ All high-priority pages have SEO!');
}

// Regular pages without SEO
console.log('\n⚠️  Regular Pages without SEO (lower priority):\n');
if (results.regularPages.withoutSEO.length > 0) {
  console.log(`   Found ${results.regularPages.withoutSEO.length} pages - showing first 10:`);
  results.regularPages.withoutSEO.slice(0, 10).forEach(page => {
    console.log(`   ⚠️  ${page}`);
  });
  if (results.regularPages.withoutSEO.length > 10) {
    console.log(`   ... and ${results.regularPages.withoutSEO.length - 10} more`);
  }
} else {
  console.log('   ✅ All regular pages have SEO!');
}

// Static Config Coverage
console.log('\n📝 Static SEO Config Coverage:\n');
console.log(`   Configured Routes: ${staticRoutes.length}`);
console.log(`   Missing from Config: ${results.staticConfigMissing.length}`);
if (results.staticConfigMissing.length > 0) {
  console.log('\n   Top missing routes (showing first 10):');
  results.staticConfigMissing.slice(0, 10).forEach(item => {
    console.log(`   ⚠️  ${item.page} → ${item.route}`);
  });
}

// Noindex pages (informational)
console.log('\n🚫 Noindex Pages (correctly excluded from SEO):\n');
console.log(`   ${results.noindexPages.length} pages marked as noindex`);
console.log('   Examples:', results.noindexPages.slice(0, 5).join(', '));

// Recommendations
console.log('\n💡 Action Items:\n');
if (results.highPrioritySEO.withoutSEO.length > 0) {
  console.log('   1. URGENT: Add SEOHead to high-priority pages listed above');
}
if (results.regularPages.withoutSEO.length > 0) {
  console.log('   2. Consider adding SEO to regular content pages');
}
if (results.staticConfigMissing.length > 0) {
  console.log('   3. Add missing routes to scripts/generate-static-seo.mjs');
  console.log('   4. Ensure route mapping is correct in this script');
}

// Health Check
console.log('\n🏥 SEO Health Status:');
if (coverage >= 90) {
  console.log('   ✅ EXCELLENT - Over 90% coverage');
} else if (coverage >= 70) {
  console.log('   ⚠️  GOOD - But room for improvement');
} else if (coverage >= 50) {
  console.log('   ⚠️  NEEDS WORK - Many pages missing SEO');
} else {
  console.log('   🔴 CRITICAL - Under 50% coverage');
}

process.exit(results.highPrioritySEO.withoutSEO.length > 0 ? 1 : 0);