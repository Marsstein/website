#!/usr/bin/env node

import { build } from 'vite';
import { writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync, statSync, readFileSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

// Alle SEO-relevanten Routen
const routes = [
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

console.log('🚀 Starting Complete SSG Build Process...');
console.log(`📊 Total routes to prerender: ${routes.length}`);

async function buildApp() {
  console.log('\n🔨 Building Vite app...');
  await build({
    root: rootDir,
    build: {
      outDir: distDir,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          // Disable code splitting for SSG
          manualChunks: undefined,
          inlineDynamicImports: true
        }
      }
    }
  });
  console.log('✅ Vite build completed');
}

async function startPreviewServer() {
  console.log('\n🌐 Starting preview server...');
  return new Promise((resolve, reject) => {
    const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
      cwd: rootDir,
      stdio: 'pipe',
      shell: true
    });

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('4173')) {
        console.log('✅ Preview server started on port 4173');
        setTimeout(() => resolve(server), 2000);
      }
    });

    server.stderr.on('data', (data) => {
      console.error('Server error:', data.toString());
    });

    server.on('error', reject);
  });
}

async function prerenderRoutes() {
  const server = await startPreviewServer();
  
  console.log('\n🎭 Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const failedRoutes = [];
  
  for (const route of routes) {
    const page = await browser.newPage();
    
    try {
      console.log(`\n📄 Prerendering: ${route}`);
      
      // Disable JavaScript to get pure HTML
      await page.setJavaScriptEnabled(false);
      
      // Navigate to the page
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });
      
      // Re-enable JavaScript to get the full rendered content
      await page.setJavaScriptEnabled(true);
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // Wait for content to be fully rendered
      await page.waitForSelector('#root', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get the fully rendered HTML
      let html = await page.content();
      
      // Remove React hydration warnings and clean up
      html = html.replace(/<!-- -->/g, '');
      html = html.replace(/data-react[^=]*="[^"]*"/g, '');
      
      // Inject a script to prevent hydration on static pages
      const noHydrationScript = `
        <script>
          // Prevent React hydration for prerendered content
          window.__PRERENDERED__ = true;
          if (window.React && window.ReactDOM) {
            window.ReactDOM.hydrate = window.ReactDOM.render = function() {
              console.log('Skipping hydration for prerendered page');
            };
          }
        </script>
      `;
      
      html = html.replace('</body>', `${noHydrationScript}</body>`);
      
      // Create directory structure
      const routePath = route === '/' ? '/index' : route;
      const filePath = join(distDir, `${routePath}.html`);
      const dir = dirname(filePath);
      
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      
      // Write the HTML file
      writeFileSync(filePath, html, 'utf-8');
      
      // Get meta information for logging
      const title = await page.title();
      console.log(`   ✓ Saved: ${filePath}`);
      console.log(`   ✓ Title: ${title}`);
      
    } catch (error) {
      console.error(`   ❌ Failed to prerender ${route}:`, error.message);
      failedRoutes.push(route);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  
  // Kill the server
  server.kill();
  
  if (failedRoutes.length > 0) {
    console.log('\n⚠️  Failed routes:', failedRoutes);
  }
  
  console.log(`\n✅ Prerendering completed! ${routes.length - failedRoutes.length}/${routes.length} routes processed`);
}

async function createFallbackHTML() {
  console.log('\n📝 Creating fallback HTML for client-side routing...');
  
  const indexPath = join(distDir, 'index.html');
  if (existsSync(indexPath)) {
    const indexHTML = readFileSync(indexPath, 'utf-8');
    
    // Create a 404.html for Netlify SPA fallback
    writeFileSync(join(distDir, '404.html'), indexHTML, 'utf-8');
    console.log('✅ Created 404.html fallback');
  }
}

async function createNetlifyConfig() {
  console.log('\n📝 Creating Netlify configuration...');
  
  const redirects = `
# Serve prerendered pages first
${routes.map(route => {
  const htmlPath = route === '/' ? '/index.html' : `${route}.html`;
  return `${route}  ${htmlPath}  200!`;
}).join('\n')}

# Fallback for client-side routing
/*  /index.html  200
`;

  writeFileSync(join(distDir, '_redirects'), redirects, 'utf-8');
  console.log('✅ Created _redirects file');
  
  // Also create netlify.toml for better control
  const netlifyToml = `
[build]
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
`;

  writeFileSync(join(rootDir, 'netlify.toml'), netlifyToml, 'utf-8');
  console.log('✅ Created netlify.toml');
}

// Main execution
async function main() {
  try {
    await buildApp();
    await prerenderRoutes();
    await createFallbackHTML();
    await createNetlifyConfig();
    
    console.log('\n🎉 Complete SSG build finished successfully!');
    console.log('📦 Output directory:', distDir);
    console.log('🚀 Ready for deployment to Netlify');
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

main();