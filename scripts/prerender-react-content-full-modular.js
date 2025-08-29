#!/usr/bin/env node

/**
 * Full React Content Prerendering - Modulare Version
 * Verwendet modulare Content-Dateien statt monolithischer Struktur
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import prettier from 'prettier';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Lade alle Content-Module dynamisch
const loadContentModules = async () => {
  const contentModules = {};
  
  try {
    // Importiere die ES6 Module
    const contentRegistry = await import('./content/index.mjs');
    const allContent = contentRegistry.default;
    
    // Iteriere über alle Kategorien
    for (const [categoryName, category] of Object.entries(allContent)) {
      if (typeof category === 'function') continue;
      
      // Iteriere über alle Module in der Kategorie
      for (const [moduleName, module] of Object.entries(category)) {
        if (module.route) {
          contentModules[module.route] = () => ({
            title: module.title,
            description: module.description,
            content: module.content
          });
        }
      }
    }
    
    console.log(`   ✅ ${Object.keys(contentModules).length} Content-Module geladen`);
  } catch (error) {
    console.log('⚠️  Fehler beim Laden der Module:', error.message);
  }

  return contentModules;
};

// Route-Mapping für fehlerhafte Routen (für SEO-optimierte URLs)
const routeMapping = {
  '/dsgvo-compliance': '/dsgvo',
  '/eu-ai-act-compliance': '/eu-ai-act',
  '/nis2-compliance': '/nis2',
  '/lieferkettensorgfaltspflicht-compliance': '/lieferkettensorgfaltspflicht',
  '/hinweisgeberschutzgesetz-compliance': '/hinweisgeberschutzgesetz',
};

/**
 * Generiert vollständigen HTML-Code mit SEO-Tags
 */
function generateHTML(route, pageContent) {
  const { title, description, content } = pageContent;
  const baseUrl = 'https://marsstein.com';
  
  // Verwende gemappte URL falls vorhanden
  const canonicalPath = routeMapping[route] || route;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  
  // Generiere strukturierte Daten basierend auf der Route
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marsstein GmbH",
    "url": baseUrl,
    "logo": `${baseUrl}/marsstein-logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bücklestraße 3",
      "addressLocality": "Konstanz",
      "postalCode": "78467",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+4917670560292",
      "contactType": "sales",
      "email": "info@marsstein.ai",
      "availableLanguage": ["German", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/marsstein/",
      "https://www.instagram.com/marsstein.ai/"
    ]
  };

  // Spezifische strukturierte Daten für verschiedene Seitentypen
  if (route.includes('iso-') || route.includes('soc') || route.includes('compliance')) {
    structuredData = {
      ...structuredData,
      "@type": ["Organization", "EducationalOrganization"],
      "offers": {
        "@type": "Offer",
        "name": title,
        "description": description,
        "url": canonicalUrl,
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Auf Anfrage",
          "priceCurrency": "EUR"
        }
      }
    };
  }

  // HTML Template
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Marsstein</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="index, follow">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph Tags -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="${baseUrl}/og-image-marsstein.jpg">
    <meta property="og:image:alt" content="Marsstein - KI-gestützte Compliance-Automatisierung">
    <meta property="og:site_name" content="Marsstein">
    <meta property="og:locale" content="de_DE">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#1e40af">
    
    <!-- Strukturierte Daten -->
    <script type="application/ld+json">
    ${JSON.stringify(structuredData, null, 2)}
    </script>
    
    <!-- Preload wichtiger Ressourcen -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- CSS Bundle -->
    <link rel="stylesheet" href="/assets/index.css">
</head>
<body>
    <div id="root">${content}</div>
    
    <!-- JavaScript Bundle -->
    <script type="module" src="/assets/index.js"></script>
    
    <!-- Plausible Analytics -->
    <script defer data-domain="marsstein.com" src="https://plausible.io/js/script.js"></script>
</body>
</html>`;

  return html;
}

/**
 * Abrufen des Inhalts für eine bestimmte Route
 */
function getRouteContent(route, contentModules) {
  // Prüfe ob vollständiger Content für diese Route existiert
  const fullContentGenerator = contentModules[route];
  if (fullContentGenerator) {
    return fullContentGenerator();
  }
  
  // Default minimaler Content
  return {
    title: `${route.split('/').pop()?.replace(/-/g, ' ') || 'Marsstein'} - Compliance Platform`,
    description: 'KI-gestützte Compliance-Automatisierung für Ihr Unternehmen',
    content: `<main class="min-h-screen">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-8">Seite in Bearbeitung</h1>
        <p class="text-lg text-gray-600">Diese Seite wird derzeit überarbeitet und ist bald verfügbar.</p>
      </div>
    </main>`
  };
}

/**
 * Build-Prozess
 */
async function build() {
  console.log('🚀 Starte modularen Full-Content Build...\n');
  
  try {
    // 1. Führe normalen Vite Build aus
    console.log('📦 Führe Vite Build aus...');
    await execAsync('npm run build:vite', { cwd: join(__dirname, '..') });
    
    // 2. Lade Content-Module
    console.log('📚 Lade Content-Module...');
    const contentModules = await loadContentModules();
    
    // 3. Lade Routen
    const routesPath = join(__dirname, '..', 'prerender-routes-simple.json');
    const routes = JSON.parse(readFileSync(routesPath, 'utf-8'));
    
    // 4. Generiere HTML für jede Route
    console.log('\n🎨 Generiere HTML für Routen...');
    let processedCount = 0;
    
    for (const route of routes) {
      const content = getRouteContent(route, contentModules);
      const html = generateHTML(route, content);
      
      // Bestimme Dateipfad
      const mappedRoute = routeMapping[route] || route;
      const filePath = mappedRoute === '/' 
        ? join(__dirname, '..', 'dist', 'index.html')
        : join(__dirname, '..', 'dist', mappedRoute.slice(1), 'index.html');
      
      // Erstelle Verzeichnis falls nötig
      const dir = dirname(filePath);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      
      // Formatiere HTML mit Prettier
      const formattedHtml = await prettier.format(html, {
        parser: 'html',
        printWidth: 120,
        tabWidth: 2,
      });
      
      // Schreibe Datei
      writeFileSync(filePath, formattedHtml);
      
      processedCount++;
      if (contentModules[route]) {
        console.log(`   ✅ ${route} → ${mappedRoute} (mit vollem Content)`);
      } else {
        console.log(`   ⚠️  ${route} → ${mappedRoute} (Platzhalter)`);
      }
    }
    
    // 5. Generiere Sitemap
    console.log('\n🗺️  Generiere Sitemap...');
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const mappedRoute = routeMapping[route] || route;
  const priority = route === '/' ? '1.0' : route.includes('/wissen/') ? '0.6' : '0.8';
  return `  <url>
    <loc>https://marsstein.com${mappedRoute}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'sitemap.xml'), sitemapContent);
    
    // 6. Generiere robots.txt
    console.log('🤖 Generiere robots.txt...');
    const robotsContent = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_app/

Sitemap: https://marsstein.com/sitemap.xml`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'robots.txt'), robotsContent);
    
    console.log(`\n✅ Build erfolgreich abgeschlossen!`);
    console.log(`   - ${processedCount} Seiten generiert`);
    console.log(`   - ${Object.keys(contentModules).length} mit vollem Content`);
    console.log(`   - ${processedCount - Object.keys(contentModules).length} mit Platzhalter`);
    console.log('\n📁 Output: dist/\n');
    
  } catch (error) {
    console.error('❌ Build fehlgeschlagen:', error);
    process.exit(1);
  }
}

// Führe Build aus
build();