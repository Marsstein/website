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

// Test/internal pages to exclude
const testPagesRegex = /^\/(?:test|approach|diagnostic|ultimate-diagnostic|robust|simple-final|optimized|design-separator-test|simple-test|test-footer|tests|sitemap-seo|final-checks|test-uns)/;

// Cross-reference and create final list
const finalSEORoutes = [];

seoPages.forEach(page => {
    // Check if route exists in App.tsx
    const routeExists = actualRoutes.has(page.route);
    
    // Skip test/internal pages
    if (testPagesRegex.test(page.route)) {
        return;
    }
    
    // Skip pages without proper canonical URL
    if (!page.seoData?.canonical || page.seoData.canonical === '❌ Missing') {
        return;
    }
    
    if (routeExists) {
        finalSEORoutes.push({
            route: page.route,
            file: page.file,
            component: actualRoutes.get(page.route),
            title: page.seoData.title,
            description: page.seoData.description,
            canonical: page.seoData.canonical
        });
    }
});

// Sort routes by path for better organization
finalSEORoutes.sort((a, b) => a.route.localeCompare(b.route));

// Generate report
const report = {
    generatedAt: new Date().toISOString(),
    totalRoutesInApp: actualRoutes.size,
    totalSEOPages: seoPages.length,
    finalSEORoutes: finalSEORoutes.length,
    routes: finalSEORoutes
};

// Save the report
const outputPath = path.join(__dirname, '..', 'seo-routes-final.json');
fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

// Generate a simple list for the prerender script
const prerenderRoutes = finalSEORoutes.map(r => r.route);
const prerenderPath = path.join(__dirname, '..', 'prerender-routes.json');
fs.writeFileSync(prerenderPath, JSON.stringify(prerenderRoutes, null, 2));

// Console output
console.log(`\n📊 SEO Routes Final Report`);
console.log(`${'='.repeat(80)}\n`);
console.log(`Total routes in App.tsx: ${actualRoutes.size}`);
console.log(`Total pages with SEO implementation: ${seoPages.length}`);
console.log(`Final SEO routes (excluding tests): ${finalSEORoutes.length}`);
console.log(`\nRoutes saved to:`);
console.log(`  - Full report: ${outputPath}`);
console.log(`  - Prerender list: ${prerenderPath}`);

// Display routes by category
const categories = {
    'Home & Core': ['/'],
    'Main Pages': ['/contact', '/academy', '/pricing', '/dashboard', '/thank-you'],
    'Compliance Products': ['/compliance/', '/dsgvo', '/eu-ai-act', '/iso-', '/soc2', '/nis2', '/hinweis', '/geldwaesche', '/tisax', '/dsg-ekd', '/kdg'],
    'Tools': ['/tools/'],
    'Assessment Center': ['/assessment-center/'],
    'Industries': ['/branchen/'],
    'Knowledge Base': ['/wissen/'],
};

console.log(`\n📁 Routes by Category:`);
console.log(`${'─'.repeat(80)}`);

Object.entries(categories).forEach(([category, patterns]) => {
    const categoryRoutes = finalSEORoutes.filter(route => 
        patterns.some(pattern => route.route.includes(pattern))
    );
    
    if (categoryRoutes.length > 0) {
        console.log(`\n${category} (${categoryRoutes.length} routes):`);
        categoryRoutes.forEach(route => {
            console.log(`  ✅ ${route.route}`);
        });
    }
});

// List any routes that don't fit categories
const uncategorized = finalSEORoutes.filter(route => 
    !Object.values(categories).flat().some(pattern => route.route.includes(pattern))
);

if (uncategorized.length > 0) {
    console.log(`\nOther Routes (${uncategorized.length}):`);
    uncategorized.forEach(route => {
        console.log(`  ✅ ${route.route}`);
    });
}