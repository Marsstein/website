#!/usr/bin/env node

/**
 * Vercel-kompatibles Prerender Script
 * Nutzt statisches Rendering ohne Puppeteer
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// SEO-kritische Routen
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/dsgvo', priority: 0.9 },
  { path: '/eu-ai-act', priority: 0.9 },
  { path: '/nis2-compliance', priority: 0.8 },
  { path: '/iso-27001-zertifizierung', priority: 0.8 },
  { path: '/soc2-zertifizierung', priority: 0.8 },
  { path: '/tisax-zertifizierung', priority: 0.8 },
  { path: '/branchen', priority: 0.7 },
  { path: '/ueber-uns', priority: 0.6 },
  { path: '/contact', priority: 0.9 },
  { path: '/pricing', priority: 0.8 }
];

// Lese index.html Template
async function getTemplate() {
  const indexPath = path.join(process.cwd(), 'dist', 'index.html');
  return await fs.readFile(indexPath, 'utf-8');
}

// Generiere SEO-optimierte Meta-Tags
function generateMetaTags(route) {
  const baseUrl = 'https://marsstein.ai';
  
  const metadata = {
    '/': {
      title: 'Marsstein - KI-native Compliance Platform | DSGVO, ISO 27001 & EU AI Act',
      description: 'Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.',
      keywords: 'Compliance Software, DSGVO, ISO 27001, EU AI Act, KI Compliance, DACH'
    },
    '/dsgvo': {
      title: 'DSGVO Compliance Software | Automatisierte Datenschutz-Lösung',
      description: 'Automatisierte DSGVO-Compliance mit KI. Datenschutz-Folgenabschätzung, Verarbeitungsverzeichnis und Betroffenenanfragen in einer Lösung.',
      keywords: 'DSGVO, Datenschutz Software, GDPR Compliance, Datenschutz-Folgenabschätzung'
    },
    '/eu-ai-act': {
      title: 'EU AI Act Compliance | KI-Risikobewertung & Compliance Management',
      description: 'Vollständige EU AI Act Compliance. Automatische Risikoklassifizierung, Dokumentation und kontinuierliches Monitoring für KI-Systeme.',
      keywords: 'EU AI Act, KI Compliance, AI Regulation, KI-Risikobewertung'
    }
    // Weitere Metadaten...
  };

  const meta = metadata[route.path] || metadata['/'];
  
  return `
    <!-- Primary Meta Tags -->
    <title>${meta.title}</title>
    <meta name="title" content="${meta.title}">
    <meta name="description" content="${meta.description}">
    <meta name="keywords" content="${meta.keywords}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${baseUrl}${route.path}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:image" content="${baseUrl}/og-image.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${baseUrl}${route.path}">
    <meta property="twitter:title" content="${meta.title}">
    <meta property="twitter:description" content="${meta.description}">
    <meta property="twitter:image" content="${baseUrl}/og-image.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${baseUrl}${route.path}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Marsstein",
      "url": baseUrl + route.path,
      "description": meta.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      }
    }, null, 2)}
    </script>
  `;
}

// Prerender Funktion
async function prerender() {
  console.log('🚀 Starting Vercel-compatible prerendering...');
  
  try {
    const template = await getTemplate();
    
    for (const route of routes) {
      // Ersetze Standard Meta-Tags mit route-spezifischen
      const metaTags = generateMetaTags(route);
      const html = template.replace(
        '<title>Marsstein</title>',
        metaTags
      );
      
      // Bestimme Dateipfad
      const filePath = route.path === '/' 
        ? path.join(process.cwd(), 'dist', 'index.html')
        : path.join(process.cwd(), 'dist', route.path, 'index.html');
      
      // Erstelle Verzeichnis
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      
      // Schreibe Datei
      await fs.writeFile(filePath, html);
      console.log(`✅ Prerendered: ${route.path}`);
    }
    
    // Erstelle Sitemap
    await generateSitemap();
    
    console.log('✨ Prerendering complete!');
  } catch (error) {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
  }
}

// Sitemap Generator
async function generateSitemap() {
  const baseUrl = 'https://marsstein.ai';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  await fs.writeFile(path.join(process.cwd(), 'dist', 'sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml');
}

// Führe Prerendering aus
prerender();