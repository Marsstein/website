#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Check each page file for SEOHead
const results = {
  hasSEOHead: [],
  missingSEOHead: [],
  hasStaticConfig: [],
  missingStaticConfig: []
};

for (const file of pageFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relativePath = path.relative(pagesDir, file);
  const pageName = relativePath.replace('.tsx', '');

  // Check for SEOHead import and usage
  const hasSEOHeadImport = content.includes("import SEOHead") || content.includes("from '../components/SEOHead'");
  const hasSEOHeadUsage = content.includes("<SEOHead");
  const hasHelmet = content.includes("react-helmet");

  if (hasSEOHeadImport && hasSEOHeadUsage) {
    results.hasSEOHead.push({ file: pageName, type: 'SEOHead' });
  } else if (hasHelmet) {
    results.hasSEOHead.push({ file: pageName, type: 'Helmet (legacy)' });
  } else {
    results.missingSEOHead.push(pageName);
  }
}

// Map common routes
const routeMapping = {
  'Index': '/',
  'Home': '/home',
  'ContactPage': '/contact',
  'AcademyPage': '/academy',
  'PricingPage': '/pricing',
  'DashboardPage': '/dashboard',
  'About': '/ueber-uns',
  'ThankYou': '/thank-you',
  'SitemapSEO': '/sitemap-seo',
  'FinalChecks': '/final-checks',
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
  'DsgvoGuides': '/wissen/dsgvo-leitfaeden',
  'ComplianceFrameworks': '/wissen/compliance-frameworks',
  'CrisisManagement': '/wissen/krisenmanagement',
  'Rechtsprechung': '/wissen/rechtsprechung',
  'Industries': '/branchen',
  'BranchenWissen': '/wissen/branchen',
  'KiDatenschutz': '/wissen/ki-datenschutz',
  'AssessmentCenter': '/assessment-center'
};

// Check static config coverage
for (const page of results.hasSEOHead) {
  const route = routeMapping[page.file] || `/${page.file.toLowerCase().replace(/\//g, '/')}`;
  if (staticRoutes.includes(route)) {
    results.hasStaticConfig.push({ page: page.file, route });
  } else {
    results.missingStaticConfig.push({ page: page.file, estimatedRoute: route });
  }
}

// Generate report
console.log('\n📊 SEO Implementation Coverage Report\n');
console.log('=====================================\n');

console.log(`✅ Pages with SEOHead: ${results.hasSEOHead.length}`);
console.log(`❌ Pages missing SEOHead: ${results.missingSEOHead.length}`);
console.log(`✅ Routes in static config: ${staticRoutes.length}`);
console.log(`⚠️  Pages without static config: ${results.missingStaticConfig.length}`);

console.log('\n🔴 CRITICAL: Pages without SEOHead component:\n');
if (results.missingSEOHead.length > 0) {
  results.missingSEOHead.forEach(page => {
    console.log(`   ❌ ${page}`);
  });
} else {
  console.log('   ✅ All pages have SEO implementation!');
}

console.log('\n⚠️  Pages missing from static SEO config:\n');
if (results.missingStaticConfig.length > 0) {
  results.missingStaticConfig.forEach(item => {
    console.log(`   ⚠️  ${item.page} → ${item.estimatedRoute}`);
  });
} else {
  console.log('   ✅ All pages have static config!');
}

console.log('\n📋 Static SEO Routes configured:\n');
staticRoutes.slice(0, 20).forEach(route => {
  console.log(`   ✓ ${route}`);
});
if (staticRoutes.length > 20) {
  console.log(`   ... and ${staticRoutes.length - 20} more routes`);
}

// Summary
console.log('\n📈 Summary:');
console.log(`   Total Page Files: ${pageFiles.length}`);
console.log(`   SEO Coverage: ${Math.round((results.hasSEOHead.length / pageFiles.length) * 100)}%`);
console.log(`   Static Config Coverage: ${Math.round((results.hasStaticConfig.length / results.hasSEOHead.length) * 100)}%`);

// Recommendations
console.log('\n💡 Recommendations:');
if (results.missingSEOHead.length > 0) {
  console.log('   1. Add SEOHead component to all missing pages');
  console.log('   2. Import: import SEOHead from "../components/SEOHead"');
  console.log('   3. Use: <SEOHead title="..." description="..." canonical="..." />');
}
if (results.missingStaticConfig.length > 0) {
  console.log('   4. Add missing routes to scripts/generate-static-seo.mjs');
}

process.exit(results.missingSEOHead.length > 0 ? 1 : 0);