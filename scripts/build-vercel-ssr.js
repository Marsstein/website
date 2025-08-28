#!/usr/bin/env node

/**
 * Vercel Build mit Server-Side Rendering
 * Nutzt React Helmet SSR für perfekte SEO-Tags
 */

import fs from 'fs/promises';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import { startPreviewServer, renderPageWithHelmet, cleanup, helmetDataToHtml } from './render-seo-page-simple.js';
import prettier from 'prettier';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load all routes
const allRoutes = JSON.parse(
  readFileSync(path.join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Route mapping für falsche Routen
const routeMapping = {
  '/dsgvo-compliance': '/dsgvo',
  '/eu-ai-act-compliance': '/eu-ai-act',
};

/**
 * Main build function with SSR
 */
async function buildWithSSR() {
  console.log('🚀 Starting Vercel SSR Build...\n');
  
  try {
    // 1. Build the application
    console.log('📦 Building application...');
    await execAsync('npm run build');
    console.log('✅ Build completed!\n');
    
    // 2. Extract asset paths from generated HTML
    const indexPath = path.join(process.cwd(), 'dist', 'index.html');
    const baseHtml = await fs.readFile(indexPath, 'utf-8');
    
    // Extract CSS and JS paths
    const cssMatch = baseHtml.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/)?.[1] || '/assets/index.css';
    const jsMatch = baseHtml.match(/<script[^>]+type="module"[^>]+src="([^"]+)"/)?.[1] || '/assets/index.js';
    
    const assets = { css: cssMatch, js: jsMatch };
    
    console.log('📁 Asset paths:');
    console.log('  CSS:', assets.css);
    console.log('  JS:', assets.js);
    console.log('');
    
    // 3. Check if we should use SSR or fallback
    const useSSR = process.env.VERCEL_SSR !== 'false' && process.env.NODE_ENV !== 'production';
    
    if (!useSSR) {
      console.log('ℹ️  SSR disabled, using static generation fallback');
      // Fallback auf das existierende statische Build-Script
      await import('./build-vercel-seo.js');
      return;
    }
    
    // 4. Server-Side Rendering mit Puppeteer
    console.log('🎨 Starting React Helmet extraction...');
    console.log(`📄 Processing ${allRoutes.length} routes\n`);
    
    // Start preview server
    await startPreviewServer();
    
    // 5. Render all pages and extract Helmet data
    let successCount = 0;
    let errorCount = 0;
    
    for (const route of allRoutes) {
      try {
        // Render page with Puppeteer
        const helmetData = await renderPageWithHelmet(route);
        
        // Convert to HTML strings
        const { title, meta, link, bodyHtml } = helmetDataToHtml(helmetData);
        
        // Apply route mapping
        const finalPath = routeMapping[route] || route;
        
        // Build complete HTML
        const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${title}
    ${meta}
    ${link}
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/JLogoMarsstein.svg">
    <link rel="icon" type="image/png" href="/logomarsstein.png">
    
    <!-- Styles -->
    <link rel="stylesheet" href="${assets.css}">
    
    <!-- Additional meta tags -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="language" content="German">
</head>
<body>
    <div id="root">${bodyHtml}</div>
    <script type="module" crossorigin src="${assets.js}"></script>
</body>
</html>`;
        
        // Format with Prettier
        const formatted = await prettier.format(html, {
          parser: 'html',
          printWidth: 120,
          tabWidth: 2
        }).catch(() => html);
        
        // Determine output path
        const filePath = finalPath === '/' 
          ? indexPath
          : path.join(process.cwd(), 'dist', finalPath.slice(1), 'index.html');
        
        // Create directory if needed
        mkdirSync(path.dirname(filePath), { recursive: true });
        
        // Write HTML file
        writeFileSync(filePath, formatted, 'utf-8');
        
        console.log(`✅ Helmet extracted: ${route}${route !== finalPath ? ' → ' + finalPath : ''}`);
        successCount++;
        
      } catch (error) {
        console.error(`❌ Failed to generate ${route}:`, error.message);
        errorCount++;
      }
    }
    
    // Cleanup
    await cleanup();
    
    // 6. Generate sitemap and robots.txt
    console.log('\n🗺️  Generating sitemap.xml...');
    await generateSitemap();
    
    console.log('🤖 Generating robots.txt...');
    await generateRobotsTxt();
    
    // 7. Summary
    console.log('\n✨ SSR Build complete!');
    console.log(`✅ Successfully generated: ${successCount} pages`);
    if (errorCount > 0) {
      console.log(`❌ Failed: ${errorCount} pages`);
    }
    console.log('\n📊 Build includes full React Helmet SEO tags from actual components!');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

/**
 * Generate sitemap.xml
 */
async function generateSitemap() {
  const baseUrl = 'https://marsstein.ai';
  const now = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  for (const route of allRoutes) {
    // Apply mapping for sitemap
    const finalPath = routeMapping[route] || route;
    const priority = finalPath === '/' ? '1.0' : finalPath.includes('/wissen/') ? '0.7' : '0.8';
    
    sitemap += `
  <url>
    <loc>${baseUrl}${finalPath}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }
  
  sitemap += `
</urlset>`;
  
  writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), sitemap);
}

/**
 * Generate robots.txt
 */
async function generateRobotsTxt() {
  const robotsTxt = `# Marsstein Robots.txt
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
  
  writeFileSync(path.join(process.cwd(), 'dist', 'robots.txt'), robotsTxt);
}

// Execute build
buildWithSSR().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});