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

// Parse routes from App.tsx more accurately
const routeRegex = /<Route\s+path="([^"]+)"\s+element={<([^>]+)\s*\/?>}/g;
const actualRoutes = new Map();
const componentToFile = new Map();
let match;

while ((match = routeRegex.exec(appContent)) !== null) {
    const [, path, component] = match;
    actualRoutes.set(path, component);
}

// Map common route patterns we see in the validator vs App.tsx
const routeMapping = {
    '/academy-page': '/academy',
    '/contact-page': '/contact',
    '/dashboard-page': '/dashboard',
    '/pricing-page': '/pricing',
    '/compliance-aiassistant': '/tools/compliance-ai-assistant',
    '/cookie-management-tool': '/tools/cookie-management',
    '/dsgvo-compliance-scorecard': '/tools/dsgvo-compliance-scorecard',
    '/dsgvo-email-template-generator': '/tools/dsgvo-email-template-generator',
    '/iso27001compliance': '/iso-27001-zertifizierung',
    '/iso27017compliance': '/iso-27017-zertifizierung',
    '/iso27018compliance': '/iso-27018-zertifizierung',
    '/soc2compliance': '/soc2-zertifizierung',
    '/nis2compliance': '/nis2-compliance',
    '/hinweisgeberschutz-compliance': '/hinweisgeberschutzgesetz',
    '/geldwaeschegesetz-compliance': '/geldwaeschegesetz',
    '/industries': '/branchen',
    '/industries/automotive': '/branchen/automotive',
    '/industries/ecommerce': '/branchen/e-commerce',
    '/industries/energy': '/branchen/energie',
    '/industries/financial-services': '/branchen/finanzdienstleister',
    '/industries/food': '/branchen/lebensmittel',
    '/industries/healthcare': '/branchen/gesundheitswesen',
    '/industries/logistics': '/branchen/logistik',
    '/industries/manufacturing': '/branchen/produktion',
    '/industries/saa-s': '/branchen/saas-unternehmen',
    '/assessment-center/aigovernance-check': '/assessment-center/ai-governance-check',
    '/assessment-center/airisk-assessment': '/assessment-center/ai-risk-assessment',
    '/assessment-center/ismsmaturity-assessment': '/assessment-center/isms-maturity-assessment',
    '/assessment-center/soc2readiness-assessment': '/assessment-center/soc2-readiness-assessment',
    '/compliance/dsg-ekd-compliance': '/dsg-ekd',
    '/compliance/kdg-compliance': '/kdg',
    '/compliance/iso27001guide': '/wissen/compliance/iso-27001',
    '/legal/schrems-iicase': '/wissen/rechtsprechung/schrems-ii',
    '/legal/amazon-luxembourg-case': '/wissen/rechtsprechung/amazon-luxemburg-2021',
    '/legal/facebook-fanpage-case': '/wissen/rechtsprechung/facebook-fanpage',
    '/legal/google-analytics-austria-case': '/wissen/rechtsprechung/google-analytics-austria',
    '/resources/breach-response-checklist': '/assessment-center/breach-response-checklist',
    '/resources/cookie-compliance-audit': '/assessment-center/cookie-compliance-audit',
    '/resources/data-privacy-readiness-assessment': '/assessment-center/datenschutz-readiness-assessment',
    '/resources/vendor-assessment-template': '/assessment-center/vendor-assessment-template',
    '/wissen/ki-compliance': '/wissen/ki-datenschutz'
};

// Also check for routes that have trailing dashes
const fixTrailingDash = (route) => route.replace(/-$/, '');

// Filter pages with SEO implementation
const seoPages = auditReport.pages.filter(page => page.hasSEOHeadUsage && page.seoData);

// Test/internal pages regex
const testPagesRegex = /^\/(?:test|approach|diagnostic|ultimate-diagnostic|robust|simple-final|optimized|design-separator-test|simple-test|test-footer|tests|sitemap-seo|final-checks|test-uns)/;

// Collect all valid SEO routes
const validSEORoutes = [];
const unmappedRoutes = [];

seoPages.forEach(page => {
    // Skip test pages
    if (testPagesRegex.test(page.route)) {
        return;
    }
    
    // Skip pages without proper canonical
    if (!page.seoData?.canonical || page.seoData.canonical === '❌ Missing') {
        return;
    }
    
    // Fix trailing dashes
    let route = fixTrailingDash(page.route);
    
    // Check if we need to map the route
    if (routeMapping[route]) {
        route = routeMapping[route];
    }
    
    // Check if route exists in App.tsx
    if (actualRoutes.has(route)) {
        validSEORoutes.push({
            originalRoute: page.route,
            actualRoute: route,
            file: page.file,
            title: page.seoData.title,
            description: page.seoData.description,
            canonical: page.seoData.canonical
        });
    } else {
        // Check if it might be a route with different pattern
        const foundRoute = Array.from(actualRoutes.keys()).find(r => 
            r.includes(path.basename(route)) || 
            route.includes(path.basename(r))
        );
        
        if (foundRoute) {
            validSEORoutes.push({
                originalRoute: page.route,
                actualRoute: foundRoute,
                file: page.file,
                title: page.seoData.title,
                description: page.seoData.description,
                canonical: page.seoData.canonical
            });
        } else {
            unmappedRoutes.push({
                route: page.route,
                file: page.file
            });
        }
    }
});

// Get unique actual routes
const uniqueRoutes = [...new Set(validSEORoutes.map(r => r.actualRoute))].sort();

console.log(`\n📊 SEO Routes Mapping Report`);
console.log(`${'='.repeat(80)}\n`);
console.log(`Total pages with SEO: ${seoPages.length}`);
console.log(`Successfully mapped: ${validSEORoutes.length}`);
console.log(`Unique routes to prerender: ${uniqueRoutes.length}`);
console.log(`Unmapped routes: ${unmappedRoutes.length}`);

// Show routes by category
const categories = {
    'Core Pages': ['/', '/contact', '/academy', '/pricing', '/dashboard', '/thank-you'],
    'Compliance Products': ['/dsgvo', '/eu-ai-act', '/iso-27001', '/soc2', '/nis2', '/hinweis', '/geldwaesche', '/tisax', '/dsg-ekd', '/kdg'],
    'Tools': ['/tools/'],
    'Assessment Center': ['/assessment-center/'],
    'Industries': ['/branchen/'],
    'Knowledge Base': ['/wissen/'],
};

console.log(`\n📁 Routes by Category:`);
console.log(`${'─'.repeat(80)}`);

Object.entries(categories).forEach(([category, patterns]) => {
    const categoryRoutes = uniqueRoutes.filter(route => 
        patterns.some(pattern => route.includes(pattern))
    );
    
    if (categoryRoutes.length > 0) {
        console.log(`\n${category} (${categoryRoutes.length} routes):`);
        categoryRoutes.forEach(route => {
            console.log(`  ✅ ${route}`);
        });
    }
});

// List unmapped routes
if (unmappedRoutes.length > 0) {
    console.log(`\n⚠️  Unmapped routes (${unmappedRoutes.length}):`);
    unmappedRoutes.forEach(item => {
        console.log(`  - ${item.route} (${item.file})`);
    });
}

// Save the final prerender configuration
const prerenderConfig = {
    generatedAt: new Date().toISOString(),
    totalRoutes: uniqueRoutes.length,
    routes: uniqueRoutes,
    mapping: validSEORoutes.map(r => ({
        route: r.actualRoute,
        title: r.title,
        canonical: r.canonical
    }))
};

const outputPath = path.join(__dirname, '..', 'prerender-routes-final.json');
fs.writeFileSync(outputPath, JSON.stringify(prerenderConfig, null, 2));

// Also create a simple array for the prerender script
const simpleRoutesPath = path.join(__dirname, '..', 'prerender-routes-simple.json');
fs.writeFileSync(simpleRoutesPath, JSON.stringify(uniqueRoutes, null, 2));

console.log(`\n📁 Files saved:`);
console.log(`  - Full config: ${outputPath}`);
console.log(`  - Simple list: ${simpleRoutesPath}`);