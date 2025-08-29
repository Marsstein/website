#!/usr/bin/env node

/**
 * Enhanced React SSR Prerendering Script
 * Renders full React components to static HTML
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import prettier from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configure Babel for JSX/TSX
require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  ignore: [/node_modules/],
});

// Load routes
const routes = JSON.parse(
  readFileSync(join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Import App component after babel configuration
const App = require('../src/App').default || require('../src/App');

/**
 * Render React component to HTML string
 */
async function renderRoute(route) {
  const helmetContext = {};
  
  try {
    // Render the component
    const html = renderToString(
      React.createElement(HelmetProvider, { context: helmetContext },
        React.createElement(StaticRouter, { location: route },
          React.createElement(App)
        )
      )
    );
    
    // Extract helmet data
    const { helmet } = helmetContext;
    
    return {
      html,
      helmet: helmet ? {
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        link: helmet.link.toString(),
        script: helmet.script.toString(),
      } : null
    };
  } catch (error) {
    console.error(`Error rendering route ${route}:`, error);
    return null;
  }
}

/**
 * Generate complete HTML page
 */
async function generateHTML(route, baseHTML, renderedContent) {
  if (!renderedContent) return null;
  
  const { html, helmet } = renderedContent;
  
  // Clone base HTML
  let fullHTML = baseHTML;
  
  // Insert helmet data
  if (helmet) {
    // Replace title
    if (helmet.title) {
      fullHTML = fullHTML.replace(
        /<title>.*?<\/title>/,
        helmet.title
      );
    }
    
    // Add meta tags
    if (helmet.meta) {
      fullHTML = fullHTML.replace(
        '</head>',
        `${helmet.meta}\n</head>`
      );
    }
    
    // Add link tags
    if (helmet.link) {
      fullHTML = fullHTML.replace(
        '</head>',
        `${helmet.link}\n</head>`
      );
    }
  }
  
  // Insert rendered content
  fullHTML = fullHTML.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );
  
  // Format HTML
  try {
    return await prettier.format(fullHTML, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
    });
  } catch {
    return fullHTML;
  }
}

/**
 * Main build function
 */
async function build() {
  console.log('🚀 Starting Enhanced React SSR Prerendering...\n');
  
  try {
    // Build the app first
    console.log('📦 Building application...');
    const { exec } = await import('child_process');
    const { promisify } = await import('util');
    const execAsync = promisify(exec);
    await execAsync('npm run build');
    
    // Read base HTML
    const baseHTML = readFileSync(
      join(__dirname, '..', 'dist', 'index.html'),
      'utf-8'
    );
    
    console.log('\n📄 Rendering React components to static HTML...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    // Process routes
    for (const route of routes) {
      try {
        console.log(`⏳ Rendering: ${route}`);
        
        // Render the route
        const renderedContent = await renderRoute(route);
        
        if (!renderedContent) {
          throw new Error('Failed to render content');
        }
        
        // Generate complete HTML
        const html = await generateHTML(route, baseHTML, renderedContent);
        
        if (!html) {
          throw new Error('Failed to generate HTML');
        }
        
        // Determine output path
        const outputPath = route === '/'
          ? join(__dirname, '..', 'dist', 'index.html')
          : join(__dirname, '..', 'dist', route.substring(1), 'index.html');
        
        // Create directory
        mkdirSync(dirname(outputPath), { recursive: true });
        
        // Write file
        writeFileSync(outputPath, html, 'utf-8');
        
        console.log(`✅ Generated: ${route}`);
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
${routes.map(route => `  <url>
    <loc>https://marsstein.ai${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
    
    // Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://marsstein.ai/sitemap.xml`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'robots.txt'), robots);
    
    // Summary
    console.log('\n✨ Build complete!');
    console.log(`✅ Successfully rendered: ${successCount} pages`);
    if (errorCount > 0) {
      console.log(`❌ Failed: ${errorCount} pages`);
    }
    console.log('\n📊 All pages now include:');
    console.log('   - Complete React component content');
    console.log('   - SEO meta tags from React Helmet');
    console.log('   - Server-side rendered HTML');
    console.log('   - React hydration on client-side');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Execute
build();