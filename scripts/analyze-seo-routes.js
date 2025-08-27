import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the SEO audit report
const auditReport = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'seo-audit-report.json'), 'utf8'));

// Extract routes from App.tsx
const appTsxPath = path.join(__dirname, '..', 'src', 'App.tsx');
const appContent = fs.readFileSync(appTsxPath, 'utf8');

// Parse routes from App.tsx using regex
const routeRegex = /<Route\s+path="([^"]+)"\s+element={<([^>]+)\s*\/?>}/g;
const actualRoutes = new Map();
let match;

while ((match = routeRegex.exec(appContent)) !== null) {
    const [, path, component] = match;
    actualRoutes.set(path, component);
}

// Filter pages with SEO implementation
const seoPages = auditReport.pages.filter(page => page.hasSEOHeadUsage && page.seoData);

console.log(`\n📊 SEO Routes Analysis`);
console.log(`${'='.repeat(80)}\n`);
console.log(`Total pages analyzed: ${auditReport.pages.length}`);
console.log(`Pages with SEO implementation: ${seoPages.length}`);
console.log(`Total routes in App.tsx: ${actualRoutes.size}`);

// Test/internal pages regex
const testPagesRegex = /^\/(?:test|approach|diagnostic|ultimate-diagnostic|robust|simple-final|optimized|design-separator-test|simple-test|test-footer|tests|sitemap-seo|final-checks|test-uns)/;

// Analyze exclusions
const exclusionReasons = {
    testPage: [],
    notInApp: [],
    missingCanonical: [],
    included: []
};

seoPages.forEach(page => {
    const routeExists = actualRoutes.has(page.route);
    
    if (testPagesRegex.test(page.route)) {
        exclusionReasons.testPage.push(page.route);
    } else if (!page.seoData?.canonical || page.seoData.canonical === '❌ Missing') {
        exclusionReasons.missingCanonical.push({
            route: page.route,
            canonical: page.seoData?.canonical || 'undefined'
        });
    } else if (!routeExists) {
        exclusionReasons.notInApp.push(page.route);
    } else {
        exclusionReasons.included.push({
            route: page.route,
            title: page.seoData.title,
            canonical: page.seoData.canonical
        });
    }
});

console.log(`\n🔍 Exclusion Analysis:`);
console.log(`${'─'.repeat(80)}`);
console.log(`✅ Included: ${exclusionReasons.included.length}`);
console.log(`❌ Test pages: ${exclusionReasons.testPage.length}`);
console.log(`❌ Not in App.tsx: ${exclusionReasons.notInApp.length}`);
console.log(`❌ Missing canonical: ${exclusionReasons.missingCanonical.length}`);

// Show details for each category
if (exclusionReasons.testPage.length > 0) {
    console.log(`\n🧪 Test Pages (${exclusionReasons.testPage.length}):`);
    exclusionReasons.testPage.forEach(route => console.log(`  - ${route}`));
}

if (exclusionReasons.notInApp.length > 0) {
    console.log(`\n⚠️  Pages with SEO but not in App.tsx (${exclusionReasons.notInApp.length}):`);
    exclusionReasons.notInApp.forEach(route => console.log(`  - ${route}`));
}

if (exclusionReasons.missingCanonical.length > 0) {
    console.log(`\n🔗 Pages with missing canonical (${exclusionReasons.missingCanonical.length}):`);
    exclusionReasons.missingCanonical.forEach(item => 
        console.log(`  - ${item.route} (canonical: ${item.canonical})`)
    );
}

// Generate final list of routes to prerender
const finalRoutes = exclusionReasons.included.map(item => item.route);

// Remove duplicates and sort
const uniqueRoutes = [...new Set(finalRoutes)].sort();

console.log(`\n✅ Final routes to prerender (${uniqueRoutes.length}):`);
console.log(`${'─'.repeat(80)}`);
uniqueRoutes.forEach(route => console.log(`  ${route}`));

// Save the final list
const outputPath = path.join(__dirname, '..', 'seo-prerender-routes.json');
fs.writeFileSync(outputPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    totalRoutes: uniqueRoutes.length,
    routes: uniqueRoutes
}, null, 2));

console.log(`\n📁 Routes saved to: ${outputPath}`);