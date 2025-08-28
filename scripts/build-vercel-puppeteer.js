#!/usr/bin/env node

/**
 * Vercel Puppeteer Build Script
 * Generiert vollständige HTML-Dateien mit Browser-Rendering für Vercel
 * Verwendet @sparticuz/chromium für Vercel-Kompatibilität
 */

import puppeteerCore from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import prettier from 'prettier';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Vollständige SEO-Routen-Definitionen
const seoRoutes = [
  '/',
  '/dsgvo',
  '/eu-ai-act',
  '/nis2-compliance',
  '/iso-27001-zertifizierung',
  '/soc2-zertifizierung',
  '/tisax-zertifizierung',
  '/branchen',
  '/branchen/healthcare',
  '/branchen/fintech',
  '/branchen/saas',
  '/ueber-uns',
  '/contact',
  '/pricing',
  '/tools'
];

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
    console.warn('⚠️  Prettier formatting failed, using original HTML:', error.message);
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

/**
 * Generate sitemap.xml
 */
function generateSitemap() {
  const baseUrl = 'https://marsstein.ai';
  const now = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const route of seoRoutes) {
    const priority = route === '/' ? '1.0' : route.includes('/branchen/') ? '0.7' : '0.8';
    sitemap += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }
  
  sitemap += `
</urlset>`;
  
  return sitemap;
}

/**
 * Generate robots.txt
 */
function generateRobotsTxt() {
  return `# Marsstein Robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /assets/*.map

# Sitemaps
Sitemap: https://marsstein.ai/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# German search engines
User-agent: Seekport
Allow: /

User-agent: Semrush
Allow: /
`;
}

/**
 * Launch Puppeteer with Vercel-compatible Chrome
 */
async function launchBrowser() {
  const isVercel = process.env.VERCEL || process.env.CI;
  
  if (isVercel) {
    // Vercel environment
    return puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true
    });
  } else {
    // Local environment - try to use system Chrome
    const possiblePaths = [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable'
    ];
    
    const fs = await import('fs');
    let executablePath = null;
    
    for (const path of possiblePaths) {
      if (fs.existsSync(path)) {
        executablePath = path;
        break;
      }
    }
    
    if (!executablePath) {
      throw new Error('Could not find Chrome. Please install Chrome or Chromium.');
    }
    
    return puppeteerCore.launch({
      executablePath,
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }
}

/**
 * Prerender a single route
 */
async function prerenderRoute(browser, route, baseUrl) {
  const page = await browser.newPage();
  
  try {
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
    
    console.log(`📄 Prerendering: ${route}`);
    
    // Navigate to the route
    await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for React app to fully hydrate
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    }, { timeout: 10000 });
    
    // Wait for React Helmet to update meta tags
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));
    
    // Wait for all React Helmet tags to be present
    try {
      await page.waitForFunction(() => {
        const hasDescription = document.querySelector('meta[name="description"]');
        const hasOgTitle = document.querySelector('meta[property="og:title"]');
        const hasOgDescription = document.querySelector('meta[property="og:description"]');
        const hasCanonical = document.querySelector('link[rel="canonical"]');
        const hasTitle = document.title && document.title !== 'Marsstein';
        
        return hasDescription && hasOgTitle && hasOgDescription && hasCanonical && hasTitle;
      }, { timeout: 5000 });
    } catch (e) {
      console.warn(`⚠️  Some SEO tags may be missing for ${route}`);
    }
    
    // Additional wait to ensure all updates are complete
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
    
    // Get the fully rendered HTML
    let html = await page.content();
    
    // Debug: Check if meta tags are captured
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'No description found');
    
    console.log(`   ✓ Title: ${title}`);
    console.log(`   ✓ Description: ${metaDescription.substring(0, 50)}...`);
    
    // Optimize HTML
    html = optimizeHtml(html, route);
    
    // Format HTML for better readability
    html = await formatHTML(html);
    
    return html;
    
  } catch (error) {
    console.error(`❌ Failed to prerender ${route}:`, error.message);
    throw error;
  } finally {
    await page.close();
  }
}

/**
 * Main build function
 */
async function build() {
  console.log('🚀 Starting Vercel Puppeteer Build...');
  
  let browser;
  let serverProcess;
  
  try {
    // 1. Run normal Vite build
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // 2. Start preview server
    console.log('🌐 Starting preview server...');
    
    const isVercel = process.env.VERCEL || process.env.CI;
    const baseUrl = isVercel ? process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4173' : 'http://localhost:4173';
    
    if (!isVercel || !process.env.VERCEL_URL) {
      // Start local preview server
      const { spawn } = await import('child_process');
      serverProcess = spawn('npm', ['run', 'preview'], {
        stdio: 'pipe',
        shell: true
      });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
    
    // 3. Launch browser
    console.log('🌏 Launching browser...');
    browser = await launchBrowser();
    
    // 4. Prerender all routes
    console.log('🔍 Generating SEO-optimized HTML pages...');
    
    const prerenderPromises = [];
    
    // Process routes in batches to avoid overwhelming Vercel
    const batchSize = isVercel ? 3 : 5;
    for (let i = 0; i < seoRoutes.length; i += batchSize) {
      const batch = seoRoutes.slice(i, i + batchSize);
      
      const batchPromises = batch.map(async (route) => {
        try {
          const html = await prerenderRoute(browser, route, baseUrl);
          
          // Determine output path
          const outputPath = route === '/' 
            ? join(process.cwd(), 'dist')
            : join(process.cwd(), 'dist', route.slice(1));
          
          // Create directory if needed
          mkdirSync(outputPath, { recursive: true });
          
          // Write HTML file
          writeFileSync(join(outputPath, 'index.html'), html, { encoding: 'utf8' });
          console.log(`✅ Generated: ${route}`);
        } catch (error) {
          console.error(`Failed to generate ${route}:`, error.message);
        }
      });
      
      await Promise.all(batchPromises);
    }
    
    // 5. Generate sitemap.xml
    console.log('🗺️  Generating sitemap.xml...');
    writeFileSync(
      join(process.cwd(), 'dist', 'sitemap.xml'), 
      generateSitemap()
    );
    
    // 6. Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    writeFileSync(
      join(process.cwd(), 'dist', 'robots.txt'), 
      generateRobotsTxt()
    );
    
    console.log('✨ SEO Build complete!');
    console.log(`📄 Generated ${seoRoutes.length} SEO-optimized pages with full content`);
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  } finally {
    // Cleanup
    if (browser) await browser.close();
    if (serverProcess) {
      serverProcess.kill('SIGTERM');
      // Force kill after a short delay
      setTimeout(() => serverProcess.kill('SIGKILL'), 1000);
    }
  }
}

// Execute build
build().then(() => {
  console.log('🎉 Build process completed successfully!');
  process.exit(0);
}).catch((error) => {
  console.error('💥 Build process failed:', error);
  process.exit(1);
});