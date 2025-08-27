import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Extract all routes from App.tsx
function extractRoutes() {
  const appPath = join(__dirname, '..', 'src', 'App.tsx');
  const content = readFileSync(appPath, 'utf-8');
  
  // Extract all Route components
  const routeMatches = content.matchAll(/<Route\s+path="([^"]+)"\s+element={<([^/>]+)/g);
  const routes = [];
  
  for (const match of routeMatches) {
    const path = match[1];
    const component = match[2];
    
    // Filter out test routes and internal pages
    if (!path.includes('test') && 
        !path.includes('design') && 
        !path.includes('diagnostic') &&
        !path.includes('404') &&
        !path.includes('dashboard') && // Protected
        !component.includes('Test')) {
      
      routes.push({
        path,
        component,
        hasCompliance: component.includes('Compliance'),
        hasGuide: component.includes('Guide'),
        hasCase: component.includes('Case')
      });
    }
  }
  
  // Sort by path
  routes.sort((a, b) => a.path.localeCompare(b.path));
  
  return routes;
}

// Generate prerender routes
function generatePrerenderRoutes() {
  const routes = extractRoutes();
  
  console.log('// Extracted routes from App.tsx - Auto-generated\n');
  console.log('const routes = [');
  
  // Group by category
  const categories = {
    homepage: routes.filter(r => r.path === '/'),
    compliance: routes.filter(r => r.hasCompliance && !r.path.includes('/wissen')),
    guides: routes.filter(r => r.hasGuide),
    legal: routes.filter(r => r.path.includes('rechtsprechung')),
    knowledge: routes.filter(r => r.path.includes('/wissen') && !r.hasGuide && !r.path.includes('rechtsprechung')),
    industries: routes.filter(r => r.path.includes('branchen')),
    tools: routes.filter(r => r.path.includes('tool') || r.path.includes('assessment')),
    other: routes.filter(r => !r.hasCompliance && !r.hasGuide && !r.path.includes('/wissen') && 
                             !r.path.includes('branchen') && !r.path.includes('tool') && 
                             !r.path.includes('assessment') && r.path !== '/')
  };
  
  // Print each category
  if (categories.homepage.length > 0) {
    console.log('  // Homepage');
    categories.homepage.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' },`);
    });
    console.log('');
  }
  
  if (categories.compliance.length > 0) {
    console.log('  // Main compliance pages (with SEO)');
    categories.compliance.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' }, // ${r.component}`);
    });
    console.log('');
  }
  
  if (categories.knowledge.length > 0) {
    console.log('  // Knowledge base pages');
    categories.knowledge.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' }, // ${r.component}`);
    });
    console.log('');
  }
  
  if (categories.guides.length > 0) {
    console.log('  // Guide pages (may need SEO implementation)');
    categories.guides.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' }, // ${r.component}`);
    });
    console.log('');
  }
  
  if (categories.legal.length > 0) {
    console.log('  // Legal case pages');
    categories.legal.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' }, // ${r.component}`);
    });
    console.log('');
  }
  
  if (categories.industries.length > 0) {
    console.log('  // Industry pages');
    categories.industries.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' }, // ${r.component}`);
    });
    console.log('');
  }
  
  if (categories.tools.length > 0) {
    console.log('  // Tools & Assessment pages');
    categories.tools.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' }, // ${r.component}`);
    });
    console.log('');
  }
  
  if (categories.other.length > 0) {
    console.log('  // Other pages');
    categories.other.forEach(r => {
      console.log(`  { path: '${r.path}', waitForSelector: 'h1' }, // ${r.component}`);
    });
  }
  
  console.log('];');
  
  // Summary
  console.log(`\n// Total routes: ${routes.length}`);
  console.log(`// Compliance pages: ${categories.compliance.length}`);
  console.log(`// Guide pages: ${categories.guides.length}`);
  console.log(`// Knowledge pages: ${categories.knowledge.length}`);
}

// Run extraction
generatePrerenderRoutes();