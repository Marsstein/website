#!/usr/bin/env node

/**
 * Enhanced Static Prerendering with Full React Content
 * Uses Puppeteer to render complete React applications
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import puppeteer from 'puppeteer';
import prettier from 'prettier';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load routes
const routes = JSON.parse(
  readFileSync(join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Route mapping
const routeMapping = {
  '/dsgvo-compliance': '/dsgvo',
  '/eu-ai-act-compliance': '/eu-ai-act',
};

/**
 * Render page using Puppeteer
 */
async function renderWithPuppeteer(url, browser) {
  const page = await browser.newPage();
  
  try {
    // Navigate to page
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    
    // Wait for React to render
    await page.waitForSelector('#root > *', { timeout: 10000 });
    
    // Additional wait for dynamic content
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    
    // Get the complete HTML
    const html = await page.content();
    
    return html;
  } catch (error) {
    console.error(`Error rendering ${url}:`, error.message);
    return null;
  } finally {
    await page.close();
  }
}

/**
 * Format and optimize HTML
 */
async function formatHTML(html) {
  try {
    // Remove development scripts
    html = html.replace(/<script[^>]*vercel\.live[^>]*>.*?<\/script>/gi, '');
    html = html.replace(/<script[^>]*data-explicit-opt-in[^>]*>.*?<\/script>/gi, '');
    
    // Format with Prettier
    return await prettier.format(html, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
    });
  } catch {
    return html;
  }
}

/**
 * Start local server
 */
async function startServer() {
  console.log('🚀 Starting local server...');
  const server = exec('npm run preview', { 
    cwd: join(__dirname, '..'),
    env: { ...process.env, PORT: '4173' }
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  return server;
}

/**
 * Main prerender function
 */
async function prerender() {
  console.log('🚀 Starting Enhanced Prerendering with Puppeteer...\n');
  
  let server = null;
  let browser = null;
  
  try {
    // Build the app first
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // Start preview server
    server = await startServer();
    
    // Launch Puppeteer
    console.log('\n🌐 Launching browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    console.log('\n📄 Rendering pages with full React content...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    // Process each route
    for (const route of routes) {
      try {
        // Apply route mapping
        const finalRoute = routeMapping[route] || route;
        const url = `http://localhost:4173${route}`;
        
        console.log(`⏳ Rendering: ${route}`);
        
        // Render with Puppeteer
        const html = await renderWithPuppeteer(url, browser);
        
        if (!html) {
          throw new Error('Failed to render page');
        }
        
        // Format HTML
        const formattedHTML = await formatHTML(html);
        
        // Determine output path
        const outputPath = finalRoute === '/'
          ? join(__dirname, '..', 'dist', 'index.html')
          : join(__dirname, '..', 'dist', finalRoute.substring(1), 'index.html');
        
        // Create directory
        mkdirSync(dirname(outputPath), { recursive: true });
        
        // Write file
        writeFileSync(outputPath, formattedHTML, 'utf-8');
        
        console.log(`✅ Generated: ${route}${route !== finalRoute ? ' → ' + finalRoute : ''}`);
        successCount++;
        
      } catch (error) {
        console.error(`❌ Failed: ${route} - ${error.message}`);
        errorCount++;
      }
    }
    
    // Generate sitemap
    console.log('\n🗺️ Generating sitemap.xml...');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const finalRoute = routeMapping[route] || route;
  return `  <url>
    <loc>https://marsstein.ai${finalRoute}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${finalRoute === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('\n')}
</urlset>`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
    
    // Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    const robots = `# Marsstein Robots
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Sitemaps
Sitemap: https://marsstein.ai/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# German search engines
User-agent: Seekport
Allow: /

User-agent: Semrush
Allow: /`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'robots.txt'), robots);
    
    // Summary
    console.log('\n✨ Build complete!');
    console.log(`✅ Successfully generated: ${successCount} pages with full React content`);
    if (errorCount > 0) {
      console.log(`❌ Failed: ${errorCount} pages`);
    }
    console.log('\n📊 All pages now include:');
    console.log('   - Complete React-rendered HTML');
    console.log('   - All interactive components pre-rendered');
    console.log('   - SEO-optimized content');
    console.log('   - Client-side hydration ready');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  } finally {
    // Cleanup
    if (browser) {
      await browser.close();
    }
    if (server) {
      server.kill();
    }
  }
}

// Execute
prerender();