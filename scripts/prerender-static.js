#!/usr/bin/env node

/**
 * Static Prerendering without Puppeteer
 * Generates complete HTML pages with inline content
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load routes
const routes = JSON.parse(
  readFileSync(join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Critical content for each route
const routeContent = {
  '/': {
    title: 'Marsstein - KI-native Compliance Platform',
    description: 'Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.',
    h1: 'KI-native Compliance Platform',
    content: `
      <section class="hero-section">
        <h1>KI-native Compliance Platform</h1>
        <p>Revolutionäre Compliance-Automatisierung für den DACH-Raum</p>
        <div class="cta-buttons">
          <a href="/contact" class="btn-primary">Demo vereinbaren</a>
          <a href="/pricing" class="btn-secondary">Preise ansehen</a>
        </div>
      </section>
    `
  },
  '/eu-ai-act': {
    title: 'EU AI Act Compliance - Marsstein',
    description: 'Erfüllen Sie alle Anforderungen des EU AI Acts mit unserer KI-gestützten Compliance-Lösung. Automatisierte Risikoanalyse und Dokumentation.',
    h1: 'EU AI Act Compliance',
    content: `
      <section class="compliance-section">
        <h1>EU AI Act Compliance</h1>
        <p>Navigieren Sie sicher durch die Anforderungen der KI-Verordnung</p>
        <ul>
          <li>Automatisierte Risikoklassifizierung</li>
          <li>Konformitätsbewertung</li>
          <li>Technische Dokumentation</li>
          <li>Kontinuierliche Überwachung</li>
        </ul>
      </section>
    `
  },
  '/dsgvo': {
    title: 'DSGVO Compliance Software - Marsstein',
    description: 'DSGVO-konforme Datenverarbeitung leicht gemacht. Automatisierte Verfahrensverzeichnisse, TOMs und Datenschutz-Folgenabschätzungen.',
    h1: 'DSGVO Compliance',
    content: `
      <section class="compliance-section">
        <h1>DSGVO Compliance Software</h1>
        <p>Vollständige DSGVO-Konformität auf Knopfdruck</p>
        <ul>
          <li>Verfahrensverzeichnisse</li>
          <li>Technische und organisatorische Maßnahmen (TOMs)</li>
          <li>Datenschutz-Folgenabschätzung (DSFA)</li>
          <li>Betroffenenrechte-Management</li>
        </ul>
      </section>
    `
  }
};

/**
 * Generate HTML with content
 */
function generateHTML(route, baseHTML) {
  const content = routeContent[route] || {
    title: 'Marsstein - Compliance Platform',
    description: 'KI-gestützte Compliance-Automatisierung',
    h1: 'Compliance Platform',
    content: '<section><h1>Compliance Platform</h1></section>'
  };

  // Update title
  let html = baseHTML.replace(
    /<title>.*?<\/title>/,
    `<title>${content.title}</title>`
  );

  // Update meta description
  html = html.replace(
    /<meta name="description" content=".*?">/,
    `<meta name="description" content="${content.description}">`
  );

  // Update OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?">/,
    `<meta property="og:title" content="${content.title}">`
  );
  
  html = html.replace(
    /<meta property="og:description" content=".*?">/,
    `<meta property="og:description" content="${content.description}">`
  );

  // Update canonical URL
  html = html.replace(
    /<link rel="canonical" href=".*?">/,
    `<link rel="canonical" href="https://marsstein.ai${route}">`
  );

  // Add content to root div
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${content.content}</div>`
  );

  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": content.title,
    "description": content.description,
    "url": `https://marsstein.ai${route}`,
    "provider": {
      "@type": "Organization",
      "name": "Marsstein",
      "url": "https://marsstein.ai"
    }
  };

  html = html.replace(
    '</head>',
    `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>\n</head>`
  );

  return html;
}

/**
 * Main build function
 */
async function build() {
  console.log('🚀 Starting static prerendering...\n');

  try {
    // Build the app first
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // Read base HTML
    const baseHTML = readFileSync(join(__dirname, '..', 'dist', 'index.html'), 'utf-8');
    
    // Generate pages
    console.log('\n📄 Generating static pages with content...\n');
    
    for (const route of routes) {
      try {
        const html = generateHTML(route, baseHTML);
        
        // Determine output path
        const outputPath = route === '/'
          ? join(__dirname, '..', 'dist', 'index.html')
          : join(__dirname, '..', 'dist', route.substring(1), 'index.html');
        
        // Create directory if needed
        mkdirSync(dirname(outputPath), { recursive: true });
        
        // Write file
        writeFileSync(outputPath, html, 'utf-8');
        
        console.log(`✅ Generated: ${route}`);
      } catch (error) {
        console.error(`❌ Failed to generate ${route}:`, error.message);
      }
    }
    
    // Generate sitemap
    console.log('\n🗺️ Generating sitemap...');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://marsstein.ai${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
    
    // Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    const robots = `User-agent: *
Allow: /
Sitemap: https://marsstein.ai/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'robots.txt'), robots);
    
    console.log('\n✨ Static prerendering complete!');
    console.log(`📊 Generated ${routes.length} pages with inline content`);
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Execute
build();