#!/usr/bin/env node

import { build } from 'vite';
import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, existsSync, readFileSync, copyFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist-static');

const routes = [
  '/',
  '/contact',
  '/branchen',
  '/compliance/dsgvo',
  '/compliance/iso-27001',
  '/compliance/eu-ai-act',
  '/compliance/nis2',
  '/wissen',
  '/wissen/dsgvo-leitfaeden',
  '/wissen/rechtsprechung/schrems-ii', 
  '/wissen/rechtsprechung/amazon-luxemburg-2021',
  '/tools',
  '/iso-27001-zertifizierung',
  '/dsgvo-compliance',
  '/eu-ai-act-compliance'
];

console.log('🚀 Starting Pure Static HTML Export...');
console.log('📌 This will create static HTML without React hydration');

async function buildApp() {
  console.log('\n🔨 Building Vite app...');
  await build({
    root: rootDir,
    build: {
      outDir: distDir,
      emptyOutDir: true
    }
  });
  console.log('✅ Build completed');
}

function startServer() {
  return new Promise((resolve, reject) => {
    console.log('\n🌐 Starting preview server...');
    const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--outDir', distDir], {
      cwd: rootDir,
      stdio: 'pipe',
      shell: true
    });

    server.stdout.on('data', (data) => {
      if (data.toString().includes('4173')) {
        console.log('✅ Server started on port 4173');
        setTimeout(() => resolve(server), 3000);
      }
    });

    server.on('error', reject);
  });
}

async function captureStaticHTML() {
  const server = await startServer();
  
  console.log('\n🎭 Launching Puppeteer for static capture...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    const page = await browser.newPage();
    
    try {
      console.log(`\n📸 Capturing: ${route}`);
      
      // Navigate and wait for full render
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // Wait for React to fully render
      await page.waitForSelector('#root', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Get the rendered HTML
      let html = await page.content();
      
      // Remove all React/JavaScript for pure static HTML
      html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
      html = html.replace(/data-react[^=]*="[^"]*"/g, '');
      html = html.replace(/<!-- -->/g, '');
      
      // Remove script tags but keep essential styles
      const styleRegex = /<link[^>]*rel="stylesheet"[^>]*>/gi;
      const styles = html.match(styleRegex) || [];
      
      // Add minimal JavaScript for navigation only
      const minimalJS = `
        <script>
          // Basic navigation handler for static site
          document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href && link.href.startsWith(window.location.origin)) {
              const path = link.href.replace(window.location.origin, '');
              if (path && path !== window.location.pathname) {
                e.preventDefault();
                // For static HTML, just navigate normally
                window.location.href = link.href;
              }
            }
          });
        </script>
      `;
      
      // Inject before closing body
      html = html.replace('</body>', `${minimalJS}</body>`);
      
      // Add canonical URL
      const canonicalUrl = `https://marsstein.ai${route}`;
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
      
      // Ensure meta tags are present
      if (!html.includes('meta name="description"')) {
        const defaultDesc = 'Marsstein - Ihre Experten für DSGVO-Compliance, EU AI Act und Datenschutz. ISO 27001 Zertifizierung und umfassende Compliance-Beratung.';
        html = html.replace('</head>', `  <meta name="description" content="${defaultDesc}" />\n</head>`);
      }
      
      // Save the static HTML
      const routePath = route === '/' ? '/index' : route;
      const filePath = join(distDir, `${routePath}.html`);
      const dir = dirname(filePath);
      
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      
      writeFileSync(filePath, html, 'utf-8');
      
      const title = await page.title();
      console.log(`   ✓ Title: ${title}`);
      console.log(`   ✓ Saved: ${filePath}`);
      
    } catch (error) {
      console.error(`   ❌ Failed: ${route} - ${error.message}`);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  server.kill();
  
  console.log('\n✅ Static HTML generation completed');
}

async function copyAssets() {
  console.log('\n📁 Copying static assets...');
  
  // Copy CSS files
  const assetsDir = join(distDir, 'assets');
  if (existsSync(assetsDir)) {
    console.log('   ✓ Assets directory found');
  }
  
  // Ensure favicon and other static files are copied
  const staticFiles = ['favicon.ico', 'robots.txt', 'sitemap.xml'];
  for (const file of staticFiles) {
    const srcPath = join(rootDir, 'public', file);
    const destPath = join(distDir, file);
    if (existsSync(srcPath)) {
      copyFileSync(srcPath, destPath);
      console.log(`   ✓ Copied ${file}`);
    }
  }
}

async function createNetlifyConfig() {
  console.log('\n📝 Creating Netlify configuration...');
  
  // Simple redirects for static site
  const redirects = `
# Static HTML pages
${routes.map(route => {
  if (route === '/') return '';
  return `${route}  ${route}.html  200!`;
}).filter(Boolean).join('\n')}

# 404 fallback
/*  /404.html  404
`;

  writeFileSync(join(distDir, '_redirects'), redirects.trim(), 'utf-8');
  console.log('✅ Created _redirects');
  
  // Headers for performance
  const headers = `
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;

  writeFileSync(join(distDir, '_headers'), headers.trim(), 'utf-8');
  console.log('✅ Created _headers');
  
  // Create 404 page
  const notFoundHTML = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Seite nicht gefunden | Marsstein</title>
  <style>
    body { font-family: system-ui; text-align: center; padding: 50px; }
    h1 { color: #333; }
    a { color: #0066cc; text-decoration: none; }
  </style>
</head>
<body>
  <h1>404 - Seite nicht gefunden</h1>
  <p>Die angeforderte Seite existiert nicht.</p>
  <p><a href="/">Zurück zur Startseite</a></p>
</body>
</html>
`;

  writeFileSync(join(distDir, '404.html'), notFoundHTML, 'utf-8');
  console.log('✅ Created 404.html');
}

async function main() {
  try {
    await buildApp();
    await captureStaticHTML();
    await copyAssets();
    await createNetlifyConfig();
    
    console.log('\n🎉 Pure static build completed successfully!');
    console.log('📦 Output directory:', distDir);
    console.log('✨ No React hydration - Pure HTML + CSS');
    console.log('🚀 Ready for Netlify deployment');
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

main();