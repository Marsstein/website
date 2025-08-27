import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import prettier from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Format HTML for better readability using Prettier
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
      endOfLine: 'lf',
      semi: true,
      arrowParens: 'avoid'
    });
    return formatted;
  } catch (error) {
    console.warn('⚠️  Prettier formatting failed, using fallback formatter:', error.message);
    return html;
  }
}

/**
 * HTML Optimizations
 */
function optimizeHtml(html, route) {
  // Remove development-specific scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // Remove inline styles that block animations
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  // Fix encoding issues
  html = html
    .replace(/Ã¤/g, 'ä')
    .replace(/Ã¶/g, 'ö')
    .replace(/Ã¼/g, 'ü')
    .replace(/Ã„/g, 'Ä')
    .replace(/Ã–/g, 'Ö')
    .replace(/Ãœ/g, 'Ü')
    .replace(/ÃŸ/g, 'ß');

  return html;
}

// Handle SIGTERM gracefully
process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, cleaning up...');
  process.exit(0);
});

// Load routes from the generated JSON file with SEO-enabled pages only
const routesData = JSON.parse(
  readFileSync(join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Convert to the format expected by the prerender function
const routes = routesData.map(path => ({
  path,
  waitForSelector: 'h1'
}));

// Start preview server
console.log('🚀 Starting preview server...');
const previewProcess = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe',
  shell: true
});

// Wait for server to start
await new Promise(resolve => setTimeout(resolve, 5000));

// Function to prerender a single route
async function prerenderRoute(route) {
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
      Object.defineProperty(navigator, 'languages', {
        get: function() { return ['de-DE', 'de']; }
      });
    });
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log(`📄 Prerendering: ${route.path}`);
    
    // Navigate to the route
    await page.goto(`http://localhost:4173${route.path}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    if (route.waitForSelector) {
      await page.waitForSelector(route.waitForSelector, { timeout: 10000 });
    }
    
    // Wait for React app to fully hydrate
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    }, { timeout: 10000 });
    
    // Wait for React Helmet to update meta tags
    console.log('   Waiting for meta tags to update...');
    
    // Give React Helmet plenty of time to update all tags
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));
    
    // Wait for all React Helmet tags to be present
    try {
      await page.waitForFunction(() => {
        // Check for essential SEO tags
        const hasDescription = document.querySelector('meta[name="description"][data-rh="true"]');
        const hasOgTitle = document.querySelector('meta[property="og:title"][data-rh="true"]');
        const hasOgDescription = document.querySelector('meta[property="og:description"][data-rh="true"]');
        const hasCanonical = document.querySelector('link[rel="canonical"][data-rh="true"]');
        const hasTitle = document.title && document.title !== 'Marsstein';
        
        return hasDescription && hasOgTitle && hasOgDescription && hasCanonical && hasTitle;
      }, { timeout: 10000 });
      
    } catch (e) {
      console.warn(`⚠️  Some SEO tags may be missing for ${route.path}`);
    }
    
    // Additional wait to ensure all updates are complete
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    
    // Get the fully rendered HTML
    let html = await page.content();
    
    // Debug: Check if meta tags are captured
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'No description found');
    const ogTitle = await page.$eval('meta[property="og:title"]', el => el.content).catch(() => 'No og:title found');
    const canonicalUrl = await page.$eval('link[rel="canonical"]', el => el.href).catch(() => 'No canonical found');
    
    console.log(`   ✓ Title: ${title}`);
    console.log(`   ✓ Description: ${metaDescription.substring(0, 50)}...`);
    console.log(`   ✓ Canonical: ${canonicalUrl}`);
    
    // Only save if we have proper SEO tags
    if (title === 'Marsstein' || metaDescription === 'No description found') {
      console.warn(`⚠️  Skipping ${route.path} - missing SEO implementation`);
      return;
    }
    
    // Optimize HTML first
    html = optimizeHtml(html, route.path);
    
    // Then format HTML for better readability with Prettier
    html = await formatHTML(html);
    
    // Create directory structure
    const outputPath = join(__dirname, '..', 'dist', route.path.slice(1));
    mkdirSync(outputPath, { recursive: true });
    
    // Write the HTML file with proper UTF-8 encoding
    writeFileSync(join(outputPath, 'index.html'), html, { encoding: 'utf8' });
    
    console.log(`✅ Successfully prerendered: ${route.path}`);
    
  } catch (error) {
    console.error(`❌ Failed to prerender ${route.path}:`, error.message);
  } finally {
    await browser.close();
  }
}

// Prerender all routes
console.log('🎯 Starting SEO prerendering process...\n');
console.log(`📊 Total routes to prerender: ${routes.length}`);
console.log(`ℹ️  Only processing pages with confirmed SEO implementation\n`);

let successCount = 0;
let skipCount = 0;

for (const route of routes) {
  const result = await prerenderRoute(route);
  if (result === 'skipped') {
    skipCount++;
  } else {
    successCount++;
  }
}

// Kill the preview server
previewProcess.kill('SIGTERM');

// Force kill after a short delay to ensure cleanup
setTimeout(() => {
  process.exit(0);
}, 1000);

console.log(`\n✨ SEO Prerendering complete!`);
console.log(`✅ Successfully prerendered: ${successCount} pages`);
console.log(`⚠️  Skipped (no SEO): ${skipCount} pages`);
console.log('📦 Build complete with proper SEO meta tags.');