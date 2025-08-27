import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, readFileSync, readdirSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import prettier from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Find all component files with SEOHead implementation
 */
function findRoutesWithSEO(dir, routes = []) {
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
      findRoutesWithSEO(fullPath, routes);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      const content = readFileSync(fullPath, 'utf-8');
      
      // Check if file uses SEOHead
      if (content.includes('<SEOHead')) {
        // Extract route from file
        const route = extractRouteFromFile(fullPath, content);
        if (route) {
          // Extract canonical URL if present
          const canonicalMatch = content.match(/canonical=["']([^"']+)["']/);
          const canonical = canonicalMatch ? canonicalMatch[1] : route;
          
          routes.push({
            path: canonical,
            file: fullPath.replace(join(__dirname, '..'), ''),
            hasWaitSelector: content.includes('motion') || content.includes('framer-motion')
          });
        }
      }
    }
  }
  
  return routes;
}

/**
 * Extract route from file path and content
 */
function extractRouteFromFile(filePath, content) {
  // Try to extract from canonical prop first
  const canonicalMatch = content.match(/canonical=["']([^"']+)["']/);
  if (canonicalMatch) {
    return canonicalMatch[1];
  }
  
  // Common route patterns based on file location
  const patterns = [
    { regex: /pages\/Index\.tsx$/, route: '/' },
    { regex: /pages\/Home\.tsx$/, route: '/' },
    { regex: /pages\/(.+)\.tsx$/, transform: (match) => {
      const name = match[1]
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()
        .replace(/^index$/, '');
      return `/${name}`;
    }},
    { regex: /pages\/compliance\/(.+)\.tsx$/, transform: (match) => {
      const name = match[1]
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
      return `/compliance/${name}`;
    }},
    { regex: /pages\/wissen\/(.+)\.tsx$/, transform: (match) => {
      const name = match[1]
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
      return `/wissen/${name}`;
    }}
  ];
  
  for (const pattern of patterns) {
    const match = filePath.match(pattern.regex);
    if (match) {
      if (pattern.route) return pattern.route;
      if (pattern.transform) return pattern.transform(match);
    }
  }
  
  return null;
}

/**
 * Format HTML with Prettier
 */
async function formatHTML(html) {
  try {
    const formatted = await prettier.format(html, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      singleQuote: false,
      bracketSpacing: true,
      htmlWhitespaceSensitivity: 'css',
      endOfLine: 'lf'
    });
    return formatted;
  } catch (error) {
    console.warn('⚠️  Prettier formatting failed:', error.message);
    return html;
  }
}

/**
 * Optimize HTML
 */
function optimizeHtml(html, route) {
  // Remove development scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // Remove inline styles that block animations
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  // Fix encoding issues
  html = html
    .replace(/Ã¤/g, 'ä')
    .replace(/Ã¶/g, 'ö')
    .replace(/Ã¼/g, 'ü')
    .replace(/ÃŸ/g, 'ß');
    
  return html;
}

/**
 * Prerender a single route
 */
async function prerenderRoute(route, previewUrl) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set German locale
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', {
        get: function() { return 'de-DE'; }
      });
    });
    
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log(`📄 Prerendering: ${route.path}`);
    
    // Navigate to route
    await page.goto(`${previewUrl}${route.path}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for React to hydrate
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    }, { timeout: 10000 });
    
    // Wait for React Helmet to update meta tags
    await page.waitForFunction(() => {
      const hasTitle = document.title && document.title !== 'Marsstein';
      const hasDescription = document.querySelector('meta[name="description"][data-rh="true"]');
      return hasTitle && hasDescription;
    }, { timeout: 10000 }).catch(() => {
      console.warn(`   ⚠️  Some SEO tags may be missing for ${route.path}`);
    });
    
    // Additional wait for animations
    if (route.hasWaitSelector) {
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    }
    
    // Get the rendered HTML
    let html = await page.content();
    
    // Optimize and format
    html = optimizeHtml(html, route.path);
    html = await formatHTML(html);
    
    // Create directory structure
    const outputPath = join(__dirname, '..', 'dist', route.path.slice(1));
    mkdirSync(outputPath, { recursive: true });
    
    // Write the HTML file
    writeFileSync(join(outputPath, 'index.html'), html, { encoding: 'utf8' });
    
    console.log(`✅ Prerendered: ${route.path}`);
    
  } catch (error) {
    console.error(`❌ Failed to prerender ${route.path}:`, error.message);
  } finally {
    await browser.close();
  }
}

/**
 * Main prerender function
 */
async function prerenderAll() {
  console.log('🔍 Finding all routes with SEO implementation...\n');
  
  // Find all routes with SEO
  const srcDir = join(__dirname, '..', 'src', 'pages');
  const routes = findRoutesWithSEO(srcDir);
  
  // Remove duplicates
  const uniqueRoutes = routes.filter((route, index, self) => 
    index === self.findIndex(r => r.path === route.path)
  );
  
  console.log(`Found ${uniqueRoutes.length} routes with SEO implementation\n`);
  
  // Start preview server
  console.log('🚀 Starting preview server...');
  const previewProcess = spawn('npm', ['run', 'preview'], {
    stdio: 'pipe',
    shell: true
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Prerender all routes
  console.log('🎯 Starting prerendering process...\n');
  
  for (const route of uniqueRoutes) {
    await prerenderRoute(route, 'http://localhost:4173');
  }
  
  // Kill preview server
  previewProcess.kill('SIGTERM');
  
  console.log(`\n✨ Prerendered ${uniqueRoutes.length} routes successfully!`);
  console.log('📦 Build complete with full HTML content for SEO.\n');
  
  // Save route list for reference
  const routeListPath = join(__dirname, '..', 'prerendered-routes.json');
  writeFileSync(routeListPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    count: uniqueRoutes.length,
    routes: uniqueRoutes.map(r => ({
      path: r.path,
      file: r.file
    }))
  }, null, 2));
  
  console.log(`📋 Route list saved to: ${routeListPath}`);
}

// Run the prerender
prerenderAll().then(() => {
  setTimeout(() => process.exit(0), 1000);
}).catch(error => {
  console.error('Prerendering failed:', error);
  process.exit(1);
});