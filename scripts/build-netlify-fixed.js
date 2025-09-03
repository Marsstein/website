#!/usr/bin/env node

import { build } from 'vite';
import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, existsSync, readFileSync, copyFileSync, readdirSync, statSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

// Alle SEO-Routen für Prerendering
const seoRoutes = [
  '/',
  '/contact',
  '/branchen',
  '/compliance/dsgvo',
  '/compliance/iso-27001',
  '/compliance/iso-27017',
  '/compliance/iso-27018',
  '/compliance/soc2',
  '/compliance/tisax',
  '/compliance/eu-ai-act',
  '/compliance/nis2',
  '/compliance/hinweisgeberschutzgesetz',
  '/compliance/lieferkettensorgfaltspflicht',
  '/compliance/geldwaeschegesetz',
  '/compliance/dsg-ekd',
  '/compliance/kdg',
  '/wissen',
  '/wissen/dsgvo-leitfaeden',
  '/wissen/compliance-frameworks',
  '/wissen/cybersecurity',
  '/wissen/risk-management',
  '/wissen/ki-datenschutz',
  '/wissen/rechtsprechung/schrems-ii',
  '/wissen/rechtsprechung/amazon-luxemburg-2021',
  '/wissen/rechtsprechung/google-analytics-austria',
  '/wissen/rechtsprechung/facebook-fanpage',
  '/wissen/leitfaden/dsgvo-grundlagen',
  '/wissen/leitfaden/dsgvo-30-tage',
  '/wissen/leitfaden/tom-massnahmen',
  '/wissen/leitfaden/verarbeitungsverzeichnis',
  '/wissen/leitfaden/website-dsgvo',
  '/wissen/leitfaden/dsfa-durchfuehrung',
  '/wissen/leitfaden/betroffenenrechte',
  '/wissen/leitfaden/data-breach-notfall',
  '/wissen/branchen/edtech-privacy',
  '/wissen/branchen/healthcare-ai-compliance',
  '/wissen/branchen/insurtech-compliance',
  '/wissen/branchen/travel-compliance',
  '/branchen/finanzdienstleister',
  '/branchen/gesundheitswesen',
  '/branchen/saas-unternehmen',
  '/branchen/e-commerce',
  '/branchen/produktion',
  '/branchen/logistik',
  '/branchen/energie',
  '/branchen/automotive',
  '/branchen/lebensmittel',
  '/tools',
  '/tools/dsgvo-compliance-scorecard',
  '/tools/dsgvo-email-template-generator',
  '/tools/compliance-ai-assistant',
  '/tools/cookie-management',
  '/assessment-center',
  '/assessment-center/dsgvo-compliance-checklist',
  '/assessment-center/nis2-compliance-assessment',
  '/assessment-center/iso27001-readiness-assessment',
  '/assessment-center/ai-risk-assessment',
  '/assessment-center/ai-governance-check',
  '/assessment-center/algorithmic-impact-assessment',
  '/assessment-center/soc2-readiness-assessment',
  '/assessment-center/isms-maturity-assessment',
  '/assessment-center/security-controls-evaluation',
  '/assessment-center/datenschutz-readiness-assessment',
  '/assessment-center/breach-response-checklist',
  '/assessment-center/cookie-compliance-audit',
  '/assessment-center/vendor-assessment-template',
  '/iso-27001-zertifizierung',
  '/dsgvo-compliance',
  '/eu-ai-act-compliance'
];

console.log('🚀 Starting Netlify-optimized Build Process...');
console.log(`📊 SEO Routes to prerender: ${seoRoutes.length}`);

// Step 1: Build the application
async function buildViteApp() {
  console.log('\n📦 Building Vite application...');
  
  try {
    await build({
      root: rootDir,
      mode: 'production',
      build: {
        outDir: distDir,
        emptyOutDir: true
      }
    });
    console.log('✅ Vite build completed successfully');
  } catch (error) {
    console.error('❌ Vite build failed:', error);
    throw error;
  }
}

// Step 2: Start preview server
function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('\n🌐 Starting preview server for prerendering...');
    
    const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
      cwd: rootDir,
      stdio: 'pipe',
      shell: true
    });

    let serverReady = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (!serverReady && output.includes('4173')) {
        console.log('✅ Preview server ready on port 4173');
        serverReady = true;
        setTimeout(() => resolve(server), 2000); // Wait a bit more for stability
      }
    });

    server.stderr.on('data', (data) => {
      const error = data.toString();
      if (error && !error.includes('warning')) {
        console.error('Server error:', error);
      }
    });

    server.on('error', reject);

    // Timeout fallback
    setTimeout(() => {
      if (!serverReady) {
        console.log('⚠️  Server start timeout, proceeding anyway...');
        resolve(server);
      }
    }, 10000);
  });
}

// Step 3: Prerender routes
async function prerenderRoutes() {
  const server = await startPreviewServer();
  
  console.log('\n🎭 Launching headless browser for prerendering...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  });

  const successfulRoutes = [];
  const failedRoutes = [];

  for (const route of seoRoutes) {
    const page = await browser.newPage();
    
    try {
      console.log(`\n📄 Prerendering: ${route}`);
      
      // Set viewport for consistent rendering
      await page.setViewport({ width: 1920, height: 1080 });
      
      // Navigate to the page
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // Wait for React to render
      await page.waitForSelector('#root', { timeout: 10000 });
      
      // Additional wait for dynamic content
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.children.length > 0 && 
                 (document.querySelector('h1') || document.querySelector('h2'));
        },
        { timeout: 10000 }
      );
      
      // Extra wait for any lazy-loaded content
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get the rendered HTML
      let html = await page.content();
      
      // Clean up React artifacts but keep the app functional
      html = html.replace(/<!-- -->/g, '');
      
      // Ensure the hydration-safe script is present
      if (!html.includes('Safe hydration starting')) {
        // The Vite plugin should have added it, but double-check
        console.log('   ⚠️  Hydration script not found, page may have issues');
      }
      
      // Create directory structure
      const routePath = route === '/' ? '/index' : route;
      const filePath = join(distDir, `${routePath}.html`);
      const dir = dirname(filePath);
      
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      
      // Write the prerendered HTML
      writeFileSync(filePath, html, 'utf-8');
      
      // Get page metadata for verification
      const title = await page.title();
      const metaDescription = await page.$eval(
        'meta[name="description"]',
        el => el.content
      ).catch(() => 'No description');
      
      console.log(`   ✓ Title: ${title}`);
      console.log(`   ✓ Description: ${metaDescription.substring(0, 60)}...`);
      console.log(`   ✓ Saved to: ${filePath}`);
      
      successfulRoutes.push(route);
      
    } catch (error) {
      console.error(`   ❌ Failed to prerender ${route}:`, error.message);
      failedRoutes.push({ route, error: error.message });
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  
  // Kill the preview server
  server.kill('SIGTERM');
  
  // Report results
  console.log('\n📊 Prerendering Summary:');
  console.log(`   ✅ Successful: ${successfulRoutes.length}/${seoRoutes.length}`);
  
  if (failedRoutes.length > 0) {
    console.log(`   ⚠️  Failed: ${failedRoutes.length}`);
    failedRoutes.forEach(({ route, error }) => {
      console.log(`      - ${route}: ${error}`);
    });
  }
}

// Step 4: Create fallback for client-side routing
function createFallbackFiles() {
  console.log('\n📝 Creating fallback files...');
  
  const indexPath = join(distDir, 'index.html');
  
  if (existsSync(indexPath)) {
    const indexContent = readFileSync(indexPath, 'utf-8');
    
    // Create 404.html for Netlify SPA fallback
    writeFileSync(join(distDir, '404.html'), indexContent, 'utf-8');
    console.log('   ✓ Created 404.html for client-side routing fallback');
  }
}

// Step 5: Copy static assets
function copyStaticAssets() {
  console.log('\n📁 Verifying static assets...');
  
  const publicDir = join(rootDir, 'public');
  const staticFiles = ['favicon.ico', 'robots.txt'];
  
  staticFiles.forEach(file => {
    const srcPath = join(publicDir, file);
    const destPath = join(distDir, file);
    
    if (existsSync(srcPath) && !existsSync(destPath)) {
      copyFileSync(srcPath, destPath);
      console.log(`   ✓ Copied ${file}`);
    }
  });
}

// Step 6: Create Netlify configuration files
function createNetlifyConfig() {
  console.log('\n⚙️  Creating Netlify configuration...');
  
  // Create _redirects file
  const redirectsContent = `
# Serve prerendered pages with higher priority
${seoRoutes.map(route => {
  if (route === '/') {
    return '/ /index.html 200!';
  }
  return `${route} ${route}.html 200!`;
}).join('\n')}

# API routes (if any)
/api/* https://api.marsstein.ai/:splat 200

# Fallback for client-side routing
/* /index.html 200
`;

  writeFileSync(join(distDir, '_redirects'), redirectsContent.trim(), 'utf-8');
  console.log('   ✓ Created _redirects file');
  
  // Create _headers file
  const headersContent = `
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable
`;

  writeFileSync(join(distDir, '_headers'), headersContent.trim(), 'utf-8');
  console.log('   ✓ Created _headers file');
}

// Main execution
async function main() {
  const startTime = Date.now();
  
  try {
    // Execute build steps
    await buildViteApp();
    await prerenderRoutes();
    createFallbackFiles();
    copyStaticAssets();
    createNetlifyConfig();
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log('\n' + '='.repeat(50));
    console.log('🎉 Build completed successfully!');
    console.log('='.repeat(50));
    console.log(`⏱️  Total time: ${duration}s`);
    console.log(`📦 Output directory: ${distDir}`);
    console.log(`📄 Prerendered pages: ${seoRoutes.length}`);
    console.log('🚀 Ready for Netlify deployment!');
    console.log('\nNext steps:');
    console.log('1. Test locally: npx serve dist');
    console.log('2. Deploy to Netlify: git add . && git commit -m "Fixed hydration" && git push');
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build process failed:', error);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Run the build
main();