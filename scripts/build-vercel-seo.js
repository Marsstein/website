#!/usr/bin/env node

/**
 * Vercel SEO Build Script
 * Uses local Puppeteer rendering during build time
 */

import fs from 'fs/promises';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec, spawn } from 'child_process';
import { promisify } from 'util';
import prettier from 'prettier';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Globale Variablen für Asset-Pfade
let cssPath = '/assets/index.css';
let jsPath = '/assets/index.js';
let additionalModules = [];

// Load all routes from prerender-routes-simple.json
const allRoutes = JSON.parse(
  readFileSync(path.join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Route mapping - nur für falsche Routen die korrigiert werden müssen
const routeMapping = {
  // Diese Routen existieren in prerender-routes-simple.json, aber nicht in der React App
  // Sie müssen auf existierende Routen gemappt werden
  '/dsgvo-compliance': '/dsgvo',
  '/eu-ai-act-compliance': '/eu-ai-act',
  // Alle anderen URLs bleiben unverändert!
};

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
  '/branchen/gesundheitswesen': {
    title: 'Healthcare Compliance | Medizintechnik & Pharma | Marsstein',
    description: 'Compliance-Lösungen für Healthcare, Medizintechnik und Pharma. MDR, IVDR und Datenschutz automatisiert.',
    keywords: 'Healthcare Compliance, MDR, IVDR, Medizintechnik Compliance, Pharma Compliance',
    ogImage: 'https://marsstein.ai/og-healthcare.png'
  },
  '/branchen/finanzdienstleister': {
    title: 'FinTech Compliance | Banken & Versicherungen | Marsstein',
    description: 'Compliance für Finanzdienstleister. BAIT, MaRisk, VAIT und DSGVO in einer integrierten Lösung.',
    keywords: 'FinTech Compliance, BAIT, MaRisk, VAIT, Banking Compliance',
    ogImage: 'https://marsstein.ai/og-fintech.png'
  },
  '/branchen/saas-unternehmen': {
    title: 'SaaS Compliance | Software & Cloud Services | Marsstein',
    description: 'Compliance für SaaS-Unternehmen. SOC 2, ISO 27001 und DSGVO automatisiert managen.',
    keywords: 'SaaS Compliance, Cloud Compliance, Software Compliance, SOC 2 SaaS',
    ogImage: 'https://marsstein.ai/og-saas.png'
  },
  '/branchen/automotive': {
    title: 'Automotive Compliance | TISAX & ISO 27001 | Marsstein',
    description: 'Compliance-Lösungen für die Automobilindustrie. TISAX-Zertifizierung und Datenschutz.',
    keywords: 'Automotive Compliance, TISAX, ISO 27001, VDA ISA',
    ogImage: 'https://marsstein.ai/og-automotive.png'
  },
  '/branchen/e-commerce': {
    title: 'E-Commerce Compliance | Online-Handel DSGVO | Marsstein',
    description: 'Compliance für E-Commerce und Online-Handel. DSGVO, Cookie-Compliance und Datenschutz.',
    keywords: 'E-Commerce Compliance, DSGVO, Cookie Compliance, Online-Shop',
    ogImage: 'https://marsstein.ai/og-ecommerce.png'
  },
  '/branchen/energie': {
    title: 'Energie Compliance | Kritische Infrastruktur | Marsstein',
    description: 'Compliance für Energieversorger. NIS2, IT-Sicherheitskatalog und ISO 27001.',
    keywords: 'Energie Compliance, NIS2, KRITIS, IT-Sicherheit',
    ogImage: 'https://marsstein.ai/og-energie.png'
  },
  '/branchen/lebensmittel': {
    title: 'Lebensmittel Compliance | Food & Beverage | Marsstein',
    description: 'Compliance für die Lebensmittelindustrie. DSGVO, IFS und BRC Standards.',
    keywords: 'Lebensmittel Compliance, IFS, BRC, Food Safety',
    ogImage: 'https://marsstein.ai/og-lebensmittel.png'
  },
  '/branchen/logistik': {
    title: 'Logistik Compliance | Transport & Supply Chain | Marsstein',
    description: 'Compliance für Logistik und Transport. DSGVO, NIS2 und Lieferketten-Compliance.',
    keywords: 'Logistik Compliance, Supply Chain, Transport, DSGVO',
    ogImage: 'https://marsstein.ai/og-logistik.png'
  },
  '/branchen/produktion': {
    title: 'Produktion Compliance | Industrie 4.0 | Marsstein',
    description: 'Compliance für produzierende Unternehmen. ISO 27001, NIS2 und Industrie 4.0.',
    keywords: 'Produktion Compliance, Industrie 4.0, ISO 27001, Fertigungs-IT',
    ogImage: 'https://marsstein.ai/og-produktion.png'
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
  },
  '/academy': {
    title: 'Compliance Academy | Schulungen & Zertifizierungen | Marsstein',
    description: 'Compliance-Schulungen und Zertifizierungen. DSGVO, ISO 27001 und EU AI Act Trainings für Ihr Team.',
    keywords: 'Compliance Academy, Schulungen, Zertifizierungen, DSGVO Training',
    ogImage: 'https://marsstein.ai/og-academy.png'
  },
  '/assessment-center': {
    title: 'Assessment Center | Compliance-Checks & Audits | Marsstein',
    description: 'Kostenlose Compliance-Assessments und Audits. Prüfen Sie Ihren DSGVO, ISO 27001 und NIS2 Status.',
    keywords: 'Assessment Center, Compliance Audit, DSGVO Check, ISO 27001 Assessment',
    ogImage: 'https://marsstein.ai/og-assessment.png'
  },
  '/wissen': {
    title: 'Compliance Wissen | Wissensdatenbank & Guides | Marsstein',
    description: 'Umfassende Compliance-Wissensdatenbank. Leitfäden, Best Practices und Rechtsprechung zu DSGVO, ISO 27001 und mehr.',
    keywords: 'Compliance Wissen, DSGVO Guide, ISO 27001 Leitfaden, Compliance Knowledge',
    ogImage: 'https://marsstein.ai/og-wissen.png'
  },
  '/compliance/dsg-ekd': {
    title: 'DSG-EKD Compliance | Kirchlicher Datenschutz | Marsstein',
    description: 'Datenschutz nach DSG-EKD für kirchliche Einrichtungen. Automatisierte Compliance für das Kirchengesetz.',
    keywords: 'DSG-EKD, Kirchlicher Datenschutz, KDG, Kirchengesetz',
    ogImage: 'https://marsstein.ai/og-dsg-ekd.png'
  },
  '/compliance/kdg': {
    title: 'KDG Compliance | Katholisches Datenschutzgesetz | Marsstein',
    description: 'Compliance mit dem Katholischen Datenschutzgesetz (KDG). Automatisierte Lösungen für kirchliche Träger.',
    keywords: 'KDG, Katholisches Datenschutzgesetz, Kirchlicher Datenschutz',
    ogImage: 'https://marsstein.ai/og-kdg.png'
  }
};

// Function to generate SEO data for routes not explicitly defined
function generateSeoData(route) {
  const routeParts = route.split('/');
  const lastPart = routeParts[routeParts.length - 1];
  const category = routeParts[1] || '';
  
  // Generate title based on route
  let title = lastPart
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Add category context
  if (category) {
    const categoryTitle = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    title = `${title} | ${categoryTitle}`;
  }
  
  title += ' | Marsstein';
  
  // Generate description
  const description = `${title.replace(' | Marsstein', '')} - Compliance-Lösungen und Automatisierung mit Marsstein.`;
  
  // Generate keywords
  const keywords = `${lastPart.replace(/-/g, ' ')}, Compliance, Marsstein, ${category.replace(/-/g, ' ')}`;
  
  return {
    title,
    description,
    keywords,
    ogImage: 'https://marsstein.ai/og-default.png'
  };
}

// HTML Template Generator with proper assets
function generateHTMLWithAssets(route, routeData, cssPath, jsPath) {
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
      "isAccessibleForFree": true,
      "creator": {
        "@type": "Organization",
        "name": "Marsstein GmbH",
        "url": "https://marsstein.ai"
      }
    }, null, 2)}
    </script>
    
    <!-- Styles -->
    <link rel="stylesheet" href="${cssPath}">
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
    <script type="module" crossorigin src="${jsPath}"></script>
    
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

  for (const route of allRoutes) {
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

/**
 * Format HTML for better readability
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
      endOfLine: 'lf'
    });
    return formatted;
  } catch (error) {
    console.warn('⚠️  Prettier formatting failed:', error.message);
    return html;
  }
}

/**
 * Clean up HTML
 */
function optimizeHtml(html) {
  // Remove development-specific scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // Remove inline styles that block animations
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  // Fix encoding
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
    
    // 2. Check if we should use prerendering
    const prerenderScript = path.join(__dirname, 'prerender-seo-final.js');
    if (existsSync(prerenderScript) && process.env.VERCEL !== '1') {
      // Use existing prerender script locally
      console.log('🎯 Using Puppeteer prerendering (local build)...');
      await execAsync('node scripts/prerender-seo-final.js');
      console.log('✅ Prerendering completed!');
      return;
    }
    
    // 3. On Vercel, use static generation
    console.log('📄 Generating static SEO pages (Vercel build)...');
    console.log(`🔍 Processing ${allRoutes.length} routes...`);
    
    // Read the base HTML template
    const baseHtmlPath = path.join(process.cwd(), 'dist', 'index.html');
    const baseHtml = await fs.readFile(baseHtmlPath, 'utf-8');
    
    // Extract assets from base HTML
    const cssMatch = baseHtml.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/)?.[1] || '/assets/index.css';
    const jsMatch = baseHtml.match(/<script[^>]+type="module"[^>]+src="([^"]+)"/)?.[1] || '/assets/index.js';
    
    for (const route of allRoutes) {
      // Apply route mapping if exists
      const finalPath = routeMapping[route] || route;
      
      // Get SEO data - check both original and mapped route
      const routeData = seoRoutes[finalPath] || seoRoutes[route] || generateSeoData(finalPath);
      
      // Generate full HTML with SEO tags
      let html = generateHTMLWithAssets(finalPath, routeData, cssMatch, jsMatch);
      
      // Format HTML
      html = await formatHTML(html);
      
      // Write file to the mapped path
      const filePath = finalPath === '/' 
        ? baseHtmlPath
        : path.join(process.cwd(), 'dist', finalPath.slice(1), 'index.html');
      
      mkdirSync(path.dirname(filePath), { recursive: true });
      writeFileSync(filePath, html, 'utf-8');
      
      console.log(`✅ Generated: ${route} → ${finalPath}`);
    }
    
    // 5. Generate sitemap.xml
    // Generate sitemap and robots.txt
    console.log('🗺️  Generating sitemap.xml...');
    writeFileSync(
      path.join(process.cwd(), 'dist', 'sitemap.xml'), 
      generateSitemap()
    );
    
    console.log('🤖 Generating robots.txt...');
    writeFileSync(
      path.join(process.cwd(), 'dist', 'robots.txt'), 
      generateRobotsTxt()
    );
    
    console.log('✨ SEO Build complete!');
    console.log(`📄 Generated ${allRoutes.length} SEO-optimized pages`);
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Execute build
build();