import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Function to find all TypeScript/React files
function findAllComponentFiles(dir, files = []) {
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
      findAllComponentFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to extract route from file path
function extractRoute(filePath) {
  // Common patterns for route detection
  const patterns = [
    // Pages directory structure
    /src\/pages\/(.+)\.(tsx|jsx)$/,
    // Route component pattern
    /src\/routes\/(.+)\.(tsx|jsx)$/,
    // Components that might be routes
    /src\/components\/pages\/(.+)\.(tsx|jsx)$/
  ];
  
  for (const pattern of patterns) {
    const match = filePath.match(pattern);
    if (match) {
      let route = match[1]
        .replace(/([a-z])([A-Z])/g, '$1-$2') // CamelCase to kebab-case
        .toLowerCase()
        .replace(/index$/, '')
        .replace(/\/$/, '');
      
      // Special cases
      if (route === 'home' || route === '') return '/';
      if (route.includes('compliance/')) return `/${route}`;
      if (route.includes('guide')) return `/wissen/${route.replace('guide', '')}`;
      
      return `/${route}`;
    }
  }
  
  return null;
}

// Function to check if file has SEOHead
function checkSEOImplementation(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  
  const hasSEOHeadImport = content.includes('import SEOHead') || 
                          content.includes('import { SEOHead }');
  
  const hasSEOHeadUsage = content.includes('<SEOHead');
  
  // Extract SEO properties if present
  let seoData = null;
  if (hasSEOHeadUsage) {
    const seoMatch = content.match(/<SEOHead([^>]+)>/s);
    if (seoMatch) {
      const propsString = seoMatch[1];
      
      seoData = {
        title: propsString.match(/title=["']([^"']+)["']/)?.[1] || null,
        description: propsString.match(/description=["']([^"']+)["']/)?.[1] || null,
        canonical: propsString.match(/canonical=["']([^"']+)["']/)?.[1] || null,
        keywords: propsString.match(/keywords=["']([^"']+)["']/)?.[1] || null
      };
    }
  }
  
  return {
    hasSEOHeadImport,
    hasSEOHeadUsage,
    seoData,
    fileName: filePath.split('/').pop()
  };
}

// Function to get all routes from router file
function getAllRoutesFromRouter() {
  try {
    const routerPath = join(__dirname, '..', 'src', 'App.tsx');
    const content = readFileSync(routerPath, 'utf-8');
    
    const routes = [];
    
    // Extract Route components
    const routeMatches = content.matchAll(/<Route\s+path=["']([^"']+)["'][^>]*>/g);
    for (const match of routeMatches) {
      routes.push(match[1]);
    }
    
    return routes;
  } catch (error) {
    console.warn('Could not read router file:', error.message);
    return [];
  }
}

// Main validation function
function validateSEO() {
  console.log('🔍 Starting SEO Validation...\n');
  
  const srcDir = join(__dirname, '..', 'src');
  const componentFiles = findAllComponentFiles(srcDir);
  
  const routerRoutes = getAllRoutesFromRouter();
  const results = [];
  
  // Check all component files
  for (const file of componentFiles) {
    const route = extractRoute(file);
    const seoCheck = checkSEOImplementation(file);
    
    // Only include files that look like pages/routes
    if (file.includes('/pages/') || file.includes('/routes/') || 
        (route && routerRoutes.includes(route))) {
      results.push({
        file: file.replace(srcDir, ''),
        route: route || 'Unknown',
        ...seoCheck
      });
    }
  }
  
  // Generate report
  console.log('📊 SEO Implementation Report\n');
  console.log('=' .repeat(80));
  
  const withSEO = results.filter(r => r.hasSEOHeadUsage);
  const withoutSEO = results.filter(r => !r.hasSEOHeadUsage);
  const partialSEO = results.filter(r => r.hasSEOHeadImport && !r.hasSEOHeadUsage);
  
  console.log(`\n✅ Pages with SEO Implementation: ${withSEO.length}`);
  console.log('─'.repeat(80));
  
  for (const page of withSEO) {
    console.log(`\n📄 ${page.file}`);
    console.log(`   Route: ${page.route}`);
    if (page.seoData) {
      console.log(`   Title: ${page.seoData.title || '❌ Missing'}`);
      console.log(`   Description: ${page.seoData.description ? '✅ Present' : '❌ Missing'}`);
      console.log(`   Canonical: ${page.seoData.canonical || '❌ Missing'}`);
    }
  }
  
  console.log(`\n\n❌ Pages WITHOUT SEO Implementation: ${withoutSEO.length}`);
  console.log('─'.repeat(80));
  
  for (const page of withoutSEO) {
    console.log(`\n📄 ${page.file}`);
    console.log(`   Route: ${page.route}`);
    console.log(`   Status: ${page.hasSEOHeadImport ? '⚠️  Imported but not used' : '❌ Not implemented'}`);
  }
  
  // Generate actionable report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: results.length,
      withSEO: withSEO.length,
      withoutSEO: withoutSEO.length,
      partialImplementation: partialSEO.length
    },
    pages: results
  };
  
  // Save report
  const reportPath = join(__dirname, '..', 'seo-audit-report.json');
  writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`\n\n📋 Summary:`);
  console.log(`   Total Pages: ${results.length}`);
  console.log(`   With SEO: ${withSEO.length} (${Math.round(withSEO.length/results.length*100)}%)`);
  console.log(`   Without SEO: ${withoutSEO.length} (${Math.round(withoutSEO.length/results.length*100)}%)`);
  console.log(`   Partial Implementation: ${partialSEO.length}`);
  console.log(`\n✅ Full report saved to: ${reportPath}\n`);
  
  // Return missing SEO pages for automated fixes
  return withoutSEO;
}

// Run validation
validateSEO();