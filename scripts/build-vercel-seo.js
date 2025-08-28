#!/usr/bin/env node

/**
 * Vercel SEO Build Script
 * Generiert vollständige HTML-Dateien mit SEO-Informationen ohne Puppeteer
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Globale Variablen für Asset-Pfade
let cssPath = '/assets/index.css';
let jsPath = '/assets/index.js';
let additionalModules = [];

// Vollständige SEO-Routen-Definitionen
const seoRoutes = {
  '/': {
    title: 'Marsstein - KI-native Compliance Platform | DSGVO, ISO 27001 & EU AI Act',
    description: 'Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.',
    keywords: 'Compliance Software, DSGVO, ISO 27001, EU AI Act, KI Compliance, DACH, Compliance Management, Datenschutz',
    ogImage: 'https://marsstein.ai/og-marsstein-home.png'
  },
  '/dsgvo': {
    title: 'DSGVO Compliance Software | Automatisierte Datenschutz-Lösung | Marsstein',
    description: 'Automatisierte DSGVO-Compliance mit KI. Datenschutz-Folgenabschätzung, Verarbeitungsverzeichnis und Betroffenenanfragen in einer Lösung.',
    keywords: 'DSGVO, Datenschutz Software, GDPR Compliance, Datenschutz-Folgenabschätzung, Verarbeitungsverzeichnis',
    ogImage: 'https://marsstein.ai/og-dsgvo.png'
  },
  '/eu-ai-act': {
    title: 'EU AI Act Compliance | KI-Risikobewertung & Compliance Management',
    description: 'Vollständige EU AI Act Compliance. Automatische Risikoklassifizierung, Dokumentation und kontinuierliches Monitoring für KI-Systeme.',
    keywords: 'EU AI Act, KI Compliance, AI Regulation, KI-Risikobewertung, Künstliche Intelligenz Regulierung',
    ogImage: 'https://marsstein.ai/og-ai-act.png'
  },
  '/nis2-compliance': {
    title: 'NIS2 Compliance Software | Cybersecurity Richtlinie automatisiert | Marsstein',
    description: 'NIS2-Richtlinie einfach umsetzen. Risikomanagement, Incident Response und Compliance-Reporting automatisiert.',
    keywords: 'NIS2, Cybersecurity, NIS2 Compliance, Incident Response, Risikomanagement',
    ogImage: 'https://marsstein.ai/og-nis2.png'
  },
  '/iso-27001-zertifizierung': {
    title: 'ISO 27001 Zertifizierung | Compliance Management Software | Marsstein',
    description: 'ISO 27001 Zertifizierung vereinfacht. Gap-Analyse, Dokumentation und Audit-Vorbereitung mit KI-Unterstützung.',
    keywords: 'ISO 27001, Zertifizierung, ISMS, Informationssicherheit, Compliance Management',
    ogImage: 'https://marsstein.ai/og-iso27001.png'
  },
  '/soc2-zertifizierung': {
    title: 'SOC 2 Compliance | Automatisierte Zertifizierung & Audits | Marsstein',
    description: 'SOC 2 Type II Compliance automatisiert. Kontinuierliches Monitoring und Audit-Ready Dokumentation.',
    keywords: 'SOC 2, SOC 2 Type II, Compliance Audit, Trust Services, Security Compliance',
    ogImage: 'https://marsstein.ai/og-soc2.png'
  },
  '/tisax-zertifizierung': {
    title: 'TISAX Zertifizierung | Automotive Compliance Software | Marsstein',
    description: 'TISAX-Zertifizierung für die Automobilindustrie. VDA ISA konform mit automatisierter Dokumentation.',
    keywords: 'TISAX, Automotive Security, VDA ISA, Informationssicherheit Automotive',
    ogImage: 'https://marsstein.ai/og-tisax.png'
  },
  '/branchen': {
    title: 'Compliance-Lösungen nach Branchen | Marsstein Platform',
    description: 'Maßgeschneiderte Compliance-Lösungen für Ihre Branche. Von Automotive bis Healthcare - DACH-optimiert.',
    keywords: 'Branchen Compliance, Healthcare Compliance, Automotive Compliance, Fintech Compliance',
    ogImage: 'https://marsstein.ai/og-branchen.png'
  },
  '/branchen/healthcare': {
    title: 'Healthcare Compliance | Medizintechnik & Pharma | Marsstein',
    description: 'Compliance-Lösungen für Healthcare, Medizintechnik und Pharma. MDR, IVDR und Datenschutz automatisiert.',
    keywords: 'Healthcare Compliance, MDR, IVDR, Medizintechnik Compliance, Pharma Compliance',
    ogImage: 'https://marsstein.ai/og-healthcare.png'
  },
  '/branchen/fintech': {
    title: 'FinTech Compliance | Banken & Versicherungen | Marsstein',
    description: 'Compliance für Finanzdienstleister. BAIT, MaRisk, VAIT und DSGVO in einer integrierten Lösung.',
    keywords: 'FinTech Compliance, BAIT, MaRisk, VAIT, Banking Compliance',
    ogImage: 'https://marsstein.ai/og-fintech.png'
  },
  '/branchen/saas': {
    title: 'SaaS Compliance | Software & Cloud Services | Marsstein',
    description: 'Compliance für SaaS-Unternehmen. SOC 2, ISO 27001 und DSGVO automatisiert managen.',
    keywords: 'SaaS Compliance, Cloud Compliance, Software Compliance, SOC 2 SaaS',
    ogImage: 'https://marsstein.ai/og-saas.png'
  },
  '/ueber-uns': {
    title: 'Über Marsstein | Team & Vision der Compliance Platform',
    description: 'Erfahren Sie mehr über Marsstein, unser Team und unsere Mission, Compliance zu revolutionieren.',
    keywords: 'Marsstein Team, Compliance Innovation, Über uns, Company, Vision',
    ogImage: 'https://marsstein.ai/og-about.png'
  },
  '/contact': {
    title: 'Kontakt | Marsstein Compliance Platform Demo anfragen',
    description: 'Kontaktieren Sie uns für eine Demo der Marsstein Compliance Platform. Kostenlos und unverbindlich.',
    keywords: 'Kontakt, Demo, Marsstein Kontakt, Compliance Demo',
    ogImage: 'https://marsstein.ai/og-contact.png'
  },
  '/pricing': {
    title: 'Preise | Marsstein Compliance Platform Pakete',
    description: 'Transparente Preise für die Marsstein Compliance Platform. Starter, Professional und Enterprise Pakete.',
    keywords: 'Marsstein Preise, Compliance Software Kosten, Pricing, Pakete',
    ogImage: 'https://marsstein.ai/og-pricing.png'
  },
  '/tools': {
    title: 'Compliance Tools | Kostenlose Compliance-Werkzeuge | Marsstein',
    description: 'Kostenlose Compliance-Tools für DSGVO, ISO 27001 und mehr. Risk Assessment, Cookie Management und Compliance Checks.',
    keywords: 'Compliance Tools, DSGVO Tools, ISO 27001 Tools, Risk Assessment',
    ogImage: 'https://marsstein.ai/og-tools.png'
  }
};

// HTML Template Generator
function generateHTML(route, routeData) {
  const baseUrl = 'https://marsstein.ai';
  const fullUrl = baseUrl + route;
  
  return `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${routeData.title}</title>
    <meta name="description" content="${routeData.description}">
    <meta name="keywords" content="${routeData.keywords}">
    <meta name="author" content="Marsstein">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/JLogoMarsstein.svg">
    <link rel="icon" type="image/png" href="/logomarsstein.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${fullUrl}">
    <meta property="og:title" content="${routeData.title}">
    <meta property="og:description" content="${routeData.description}">
    <meta property="og:image" content="${routeData.ogImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Marsstein">
    <meta property="og:locale" content="de_DE">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${fullUrl}">
    <meta property="twitter:title" content="${routeData.title}">
    <meta property="twitter:description" content="${routeData.description}">
    <meta property="twitter:image" content="${routeData.ogImage}">
    <meta property="twitter:site" content="@marsstein">
    
    <!-- Additional Meta Tags -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="language" content="German">
    <meta name="revisit-after" content="7 days">
    <meta name="distribution" content="web">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Marsstein",
      "url": fullUrl,
      "description": routeData.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      },
      "creator": {
        "@type": "Organization",
        "name": "Marsstein GmbH",
        "url": "https://marsstein.ai"
      }
    }, null, 2)}
    </script>
    
    <!-- Preload critical assets -->
    <link rel="preload" href="${cssPath}" as="style">
    <link rel="preload" href="${jsPath}" as="script" type="module" crossorigin>
    ${additionalModules.map(module => `<link rel="modulepreload" href="${module}" crossorigin>`).join('\n    ')}
    
    <!-- Styles -->
    <link rel="stylesheet" href="${cssPath}" crossorigin>
</head>
<body>
    <div id="root"></div>
    
    <!-- Main content for SEO (hidden by CSS) -->
    <div style="position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden;">
        <h1>${routeData.title}</h1>
        <p>${routeData.description}</p>
        <nav>
            <a href="/">Startseite</a>
            <a href="/dsgvo">DSGVO Compliance</a>
            <a href="/eu-ai-act">EU AI Act</a>
            <a href="/iso-27001-zertifizierung">ISO 27001</a>
            <a href="/branchen">Branchen</a>
            <a href="/contact">Kontakt</a>
        </nav>
    </div>
    
    <!-- Scripts -->
    <script type="module" src="${jsPath}"></script>
    
    <!-- Fallback for no JS -->
    <noscript>
        <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>${routeData.title}</h1>
            <p>${routeData.description}</p>
            <p>Diese Seite benötigt JavaScript. Bitte aktivieren Sie JavaScript in Ihrem Browser.</p>
            <a href="/">Zur Startseite</a>
        </div>
    </noscript>
</body>
</html>`;
}

// Sitemap Generator
function generateSitemap() {
  const baseUrl = 'https://marsstein.ai';
  const now = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const [route, data] of Object.entries(seoRoutes)) {
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

// Robots.txt Generator
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

// Function to extract asset paths from Vite's generated HTML
function extractAssetPaths(html) {
  const paths = {
    css: [],
    js: [],
    modulePreloads: []
  };
  
  // Extract CSS files
  const cssMatches = html.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g) || [];
  cssMatches.forEach(match => {
    const href = match.match(/href="([^"]+)"/)?.[1];
    if (href) paths.css.push(href);
  });
  
  // Extract main JS module
  const jsMatch = html.match(/<script[^>]+type="module"[^>]+src="([^"]+)"/)?.[1];
  if (jsMatch) paths.js.push(jsMatch);
  
  // Extract module preloads
  const modulePreloadMatches = html.match(/<link[^>]+rel="modulepreload"[^>]+href="([^"]+)"/g) || [];
  modulePreloadMatches.forEach(match => {
    const href = match.match(/href="([^"]+)"/)?.[1];
    if (href) paths.modulePreloads.push(href);
  });
  
  return paths;
}

// Main Build Function
async function build() {
  console.log('🚀 Starting Vercel SEO Build...');
  
  try {
    // 1. Run normal Vite build
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // 2. Read the base index.html
    const indexPath = path.join(process.cwd(), 'dist', 'index.html');
    const baseHTML = await fs.readFile(indexPath, 'utf-8');
    
    // 3. Extract asset paths from Vite's output
    const assetPaths = extractAssetPaths(baseHTML);
    
    // Update global variables with actual paths
    if (assetPaths.css.length > 0) {
      cssPath = assetPaths.css[0]; // Primary CSS file
    }
    if (assetPaths.js.length > 0) {
      jsPath = assetPaths.js[0]; // Primary JS file
    }
    additionalModules = assetPaths.modulePreloads;
    
    console.log('📁 Asset paths extracted:');
    console.log('  CSS:', cssPath);
    console.log('  JS:', jsPath);
    console.log('  Module preloads:', additionalModules.length, 'files');
    
    // 4. Generate HTML for each route
    console.log('🔍 Generating SEO-optimized HTML pages...');
    
    for (const [route, routeData] of Object.entries(seoRoutes)) {
      const html = generateHTML(route, routeData);
      
      // Determine file path
      const filePath = route === '/' 
        ? indexPath 
        : path.join(process.cwd(), 'dist', route, 'index.html');
      
      // Create directory if needed
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      
      // Write HTML file
      await fs.writeFile(filePath, html);
      console.log(`✅ Generated: ${route}`);
    }
    
    // 5. Generate sitemap.xml
    console.log('🗺️  Generating sitemap.xml...');
    await fs.writeFile(
      path.join(process.cwd(), 'dist', 'sitemap.xml'), 
      generateSitemap()
    );
    
    // 6. Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    await fs.writeFile(
      path.join(process.cwd(), 'dist', 'robots.txt'), 
      generateRobotsTxt()
    );
    
    console.log('✨ SEO Build complete!');
    console.log(`📄 Generated ${Object.keys(seoRoutes).length} SEO-optimized pages`);
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Execute build
build();