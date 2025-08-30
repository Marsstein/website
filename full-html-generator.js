#!/usr/bin/env node

/**
 * Full HTML Generator - Generates complete HTML with header, footer, and all sections
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Complete Header Template
const generateHeader = () => `
<header class="bg-white shadow-sm sticky top-0 z-50">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <a href="/" class="text-2xl font-bold text-gray-900">Marsstein</a>
        <div class="hidden md:flex space-x-6">
          <div class="relative group">
            <button class="text-gray-700 hover:text-blue-600 font-medium py-2">
              Compliance
              <svg class="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl hidden group-hover:block">
              <a href="/compliance/dsgvo" class="block px-4 py-3 hover:bg-gray-50">DSGVO Compliance</a>
              <a href="/compliance/eu-ai-act" class="block px-4 py-3 hover:bg-gray-50">EU AI Act</a>
              <a href="/compliance/nis2" class="block px-4 py-3 hover:bg-gray-50">NIS2 Richtlinie</a>
              <a href="/compliance/hinweisgeberschutzgesetz" class="block px-4 py-3 hover:bg-gray-50">Hinweisgeberschutzgesetz</a>
              <a href="/compliance/lieferkettensorgfaltspflicht" class="block px-4 py-3 hover:bg-gray-50">Lieferkettensorgfaltspflicht</a>
            </div>
          </div>
          <div class="relative group">
            <button class="text-gray-700 hover:text-blue-600 font-medium py-2">
              Zertifizierungen
              <svg class="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl hidden group-hover:block">
              <a href="/zertifizierungen/iso-27001" class="block px-4 py-3 hover:bg-gray-50">ISO 27001</a>
              <a href="/zertifizierungen/iso-27701" class="block px-4 py-3 hover:bg-gray-50">ISO 27701</a>
              <a href="/zertifizierungen/iso-9001" class="block px-4 py-3 hover:bg-gray-50">ISO 9001</a>
              <a href="/zertifizierungen/soc-2" class="block px-4 py-3 hover:bg-gray-50">SOC 2</a>
              <a href="/zertifizierungen/tisax" class="block px-4 py-3 hover:bg-gray-50">TISAX</a>
            </div>
          </div>
          <a href="/tools" class="text-gray-700 hover:text-blue-600 font-medium">Tools</a>
          <a href="/wissen" class="text-gray-700 hover:text-blue-600 font-medium">Wissen</a>
          <a href="/pricing" class="text-gray-700 hover:text-blue-600 font-medium">Preise</a>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <a href="/contact" class="text-gray-700 hover:text-blue-600 font-medium">Kontakt</a>
        <a href="/dashboard" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Dashboard</a>
      </div>
    </div>
  </nav>
</header>`;

// Complete Footer Template
const generateFooter = () => `
<footer class="bg-gray-900 text-white mt-20">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4">Marsstein</h3>
        <p class="text-gray-400">KI-gestützte Compliance-Automatisierung für moderne Unternehmen</p>
        <div class="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/company/marsstein/" class="text-gray-400 hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/marsstein.ai/" class="text-gray-400 hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162s6.162 2.759 6.162 6.162-2.759 6.162-6.162 6.162-6.162-2.759-6.162-6.162zm12 0a4 4 0 11-8 0 4 4 0 018 0zm1.606-6.4a1.44 1.44 0 100-2.881 1.44 1.44 0 000 2.881z"/>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Compliance</h4>
        <ul class="space-y-2">
          <li><a href="/compliance/dsgvo" class="text-gray-400 hover:text-white">DSGVO</a></li>
          <li><a href="/compliance/eu-ai-act" class="text-gray-400 hover:text-white">EU AI Act</a></li>
          <li><a href="/compliance/nis2" class="text-gray-400 hover:text-white">NIS2</a></li>
          <li><a href="/compliance/hinweisgeberschutzgesetz" class="text-gray-400 hover:text-white">Hinweisgeberschutz</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Zertifizierungen</h4>
        <ul class="space-y-2">
          <li><a href="/zertifizierungen/iso-27001" class="text-gray-400 hover:text-white">ISO 27001</a></li>
          <li><a href="/zertifizierungen/iso-27701" class="text-gray-400 hover:text-white">ISO 27701</a></li>
          <li><a href="/zertifizierungen/soc-2" class="text-gray-400 hover:text-white">SOC 2</a></li>
          <li><a href="/zertifizierungen/tisax" class="text-gray-400 hover:text-white">TISAX</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Kontakt</h4>
        <p class="text-gray-400">Marsstein GmbH</p>
        <p class="text-gray-400">Bücklestraße 3</p>
        <p class="text-gray-400">78467 Konstanz</p>
        <p class="text-gray-400 mt-2">
          <a href="tel:+4917670560292" class="hover:text-white">+49 176 70560292</a>
        </p>
        <p class="text-gray-400">
          <a href="mailto:info@marsstein.ai" class="hover:text-white">info@marsstein.ai</a>
        </p>
      </div>
    </div>
    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; 2024 Marsstein GmbH. Alle Rechte vorbehalten.</p>
      <div class="mt-2 space-x-4">
        <a href="/impressum" class="hover:text-white">Impressum</a>
        <a href="/datenschutz" class="hover:text-white">Datenschutz</a>
        <a href="/agb" class="hover:text-white">AGB</a>
      </div>
    </div>
  </div>
</footer>`;

// CTA Section Template
const generateCTA = (title = "Bereit für smarte Compliance?", subtitle = "Machen Sie den ersten Schritt in eine effiziente Compliance-Zukunft") => `
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20 mt-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-bold text-white mb-4">${title}</h2>
    <p class="text-xl text-white/90 mb-8">${subtitle}</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
        Jetzt Beratung anfordern
      </a>
      <a href="/demo" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
        Demo ansehen
      </a>
    </div>
  </div>
</section>`;

// Load content modules
const loadContentModules = async () => {
  const contentModules = {};
  
  try {
    console.log('   🔍 Versuche Content-Module zu laden von ./content/index.mjs ...');
    const contentRegistry = await import('./content/index.mjs');
    console.log('   ✅ Module importiert');
    const allContent = contentRegistry.default;
    console.log('   📂 Gefundene Kategorien:', Object.keys(allContent || {}));
    
    for (const [categoryName, category] of Object.entries(allContent)) {
      if (typeof category === 'function') continue;
      
      for (const [moduleName, module] of Object.entries(category)) {
        if (module.route) {
          contentModules[module.route] = module;
        }
      }
    }
    
    console.log(`   ✅ ${Object.keys(contentModules).length} Content-Module geladen`);
  } catch (error) {
    console.log('⚠️  Fehler beim Laden der Module:', error.message);
  }

  return contentModules;
};

// Generate complete HTML page
function generateCompleteHTML(route, module, assetPaths) {
  const title = module?.title || `${route.split('/').pop()?.replace(/-/g, ' ') || 'Marsstein'} - Compliance Platform`;
  const description = module?.description || 'KI-gestützte Compliance-Automatisierung für Ihr Unternehmen';
  
  // Get main content or use placeholder
  let mainContent = module?.content || `
    <main class="min-h-screen pt-20">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-8">Seite in Bearbeitung</h1>
        <p class="text-lg text-gray-600">Diese Seite wird derzeit überarbeitet und ist bald verfügbar.</p>
      </div>
    </main>`;
  
  // Clean any React components from content
  mainContent = mainContent
    .replace(/<Link/g, '<a')
    .replace(/<\/Link>/g, '</a>')
    .replace(/to="/g, 'href="')
    .replace(/className=/g, 'class=')
    .replace(/<Footer[^>]*\/>/g, '')
    .replace(/<SEOHead[^>]*\/>/g, '')
    .replace(/<Button/g, '<button')
    .replace(/<\/Button>/g, '</button>')
    .replace(/<Card/g, '<div class="card"')
    .replace(/<\/Card>/g, '</div>');

  // Determine if we should add CTA based on route
  const needsCTA = route.includes('/tools') || route.includes('/compliance') || route.includes('/zertifizierungen');
  
  // Customize CTA based on page type
  let ctaTitle = "Bereit für smarte Compliance?";
  let ctaSubtitle = "Machen Sie den ersten Schritt in eine effiziente Compliance-Zukunft";
  
  if (route.includes('/tools')) {
    ctaTitle = "Bereit für smarte Tools?";
    ctaSubtitle = "Machen Sie den ersten Schritt in eine Zukunft, in der Tools Ihre Probleme lösen statt neue zu schaffen.";
  } else if (route.includes('/compliance')) {
    ctaTitle = "Compliance automatisiert meistern";
    ctaSubtitle = "Lassen Sie uns gemeinsam Ihre Compliance-Prozesse optimieren";
  } else if (route.includes('/zertifizierungen')) {
    ctaTitle = "Zertifizierung leicht gemacht";
    ctaSubtitle = "Wir begleiten Sie auf dem Weg zur erfolgreichen Zertifizierung";
  }

  const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Marsstein</title>
    <meta name="description" content="${description}">
    <meta name="robots" content="index, follow">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://marsstein.com${route}">
    
    <!-- Open Graph Tags -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="https://marsstein.com${route}">
    <meta property="og:image" content="https://marsstein.com/og-image-marsstein.jpg">
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
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Marsstein GmbH",
      "url": "https://marsstein.com",
      "logo": "https://marsstein.com/marsstein-logo.png",
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
    }
    </script>
    
    <!-- Preload wichtiger Ressourcen -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- CSS Bundle -->
    <link rel="stylesheet" href="${assetPaths.cssPath}">
</head>
<body>
    <div id="root">
        ${generateHeader()}
        ${mainContent}
        ${needsCTA ? generateCTA(ctaTitle, ctaSubtitle) : ''}
        ${generateFooter()}
    </div>
    
    <!-- JavaScript Bundle -->
    <script type="module" src="${assetPaths.jsPath}"></script>
    
    <!-- Plausible Analytics -->
    <script defer data-domain="marsstein.com" src="https://plausible.io/js/script.js"></script>
</body>
</html>`;

  return html;
}

// Extract asset paths
const extractAssetPaths = () => {
  const indexPath = join(__dirname, 'dist', 'index.html');
  const indexHtml = readFileSync(indexPath, 'utf-8');
  
  const cssMatch = indexHtml.match(/href="(\/assets\/index-[^"]+\.css)"/);
  const cssPath = cssMatch ? cssMatch[1] : '/assets/index.css';
  
  const jsMatch = indexHtml.match(/src="(\/assets\/index-[^"]+\.js)"/);
  const jsPath = jsMatch ? jsMatch[1] : '/assets/index.js';
  
  return { cssPath, jsPath };
};

// Main build function
async function build() {
  console.log('🚀 Starte Full HTML Build mit kompletter Seitenstruktur...\n');
  
  try {
    // Load content modules
    console.log('📚 Lade Content-Module...');
    const contentModules = await loadContentModules();
    
    // Extract asset paths
    console.log('🔍 Extrahiere Asset-Pfade...');
    const assetPaths = extractAssetPaths();
    console.log(`   ✅ CSS: ${assetPaths.cssPath}`);
    console.log(`   ✅ JS: ${assetPaths.jsPath}`);
    
    // Load routes
    const routesPath = join(__dirname, 'prerender-routes-complete.json');
    const routes = JSON.parse(readFileSync(routesPath, 'utf-8'));
    
    // Generate HTML for each route
    console.log('\n🎨 Generiere vollständiges HTML für alle Routen...');
    let fullContentCount = 0;
    let placeholderCount = 0;
    
    for (const route of routes) {
      const module = contentModules[route];
      const html = generateCompleteHTML(route, module, assetPaths);
      
      // Determine file path
      const filePath = route === '/' 
        ? join(__dirname, 'dist', 'index.html')
        : join(__dirname, 'dist', route.slice(1), 'index.html');
      
      // Create directory if needed
      const dir = dirname(filePath);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      
      // Write file
      writeFileSync(filePath, html);
      
      if (module) {
        console.log(`   ✅ ${route} (mit Content + Header/Footer/CTA)`);
        fullContentCount++;
      } else {
        console.log(`   ⚠️  ${route} (Platzhalter + Header/Footer/CTA)`);
        placeholderCount++;
      }
    }
    
    console.log(`\n✅ Build erfolgreich abgeschlossen!`);
    console.log(`   - ${routes.length} Seiten generiert`);
    console.log(`   - ${fullContentCount} mit vollem Content`);
    console.log(`   - ${placeholderCount} mit Platzhalter`);
    console.log(`   - Alle Seiten haben Header, Footer und CTA Sections`);
    console.log('\n📁 Output: dist/\n');
    
  } catch (error) {
    console.error('❌ Build fehlgeschlagen:', error);
    process.exit(1);
  }
}

// Run build
build();