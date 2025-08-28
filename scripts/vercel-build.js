#!/usr/bin/env node

/**
 * Vercel Build Script mit SSR/SSG für SEO
 * 
 * Dieses Script ermöglicht das Prerendering auf Vercel ohne Puppeteer
 * durch Verwendung einer alternativen SSR-Lösung
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  console.log('🚀 Starting Vercel SEO build...');
  
  try {
    // 1. Regulärer Vite Build
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // 2. Prüfen ob Puppeteer verfügbar ist (funktioniert nicht auf Vercel)
    const isPuppeteerAvailable = false; // Vercel unterstützt kein Puppeteer
    
    if (isPuppeteerAvailable) {
      // Würde Puppeteer verwenden, aber auf Vercel nicht möglich
      console.log('⚠️ Puppeteer not available on Vercel');
    }
    
    // 3. Alternative: Statische HTML-Dateien für kritische SEO-Seiten erstellen
    console.log('🔨 Creating static HTML for SEO pages...');
    await createStaticSEOPages();
    
    console.log('✅ Build complete!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

async function createStaticSEOPages() {
  const seoRoutes = [
    '/',
    '/dsgvo',
    '/eu-ai-act',
    '/nis2-compliance',
    '/iso-27001-zertifizierung',
    '/soc2-zertifizierung',
    '/tisax-zertifizierung',
    '/branchen',
    '/ueber-uns',
    '/contact'
  ];
  
  // Basis HTML-Template mit SEO-Tags
  const htmlTemplate = (route) => `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${getTitle(route)}</title>
  <meta name="description" content="${getDescription(route)}">
  
  <!-- Open Graph / Social Media -->
  <meta property="og:title" content="${getTitle(route)}">
  <meta property="og:description" content="${getDescription(route)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://marsstein.ai${route}">
  <meta property="og:image" content="https://marsstein.ai/og-image.png">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/JLogoMarsstein.svg">
  <link rel="icon" type="image/png" href="/logomarsstein.png">
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/assets/index.js" as="script">
  <link rel="preload" href="/assets/index.css" as="style">
</head>
<body>
  <div id="root">
    <noscript>
      <div style="padding: 20px; text-align: center;">
        <h1>${getTitle(route)}</h1>
        <p>${getDescription(route)}</p>
        <p>Diese Seite benötigt JavaScript. Bitte aktivieren Sie JavaScript in Ihrem Browser.</p>
      </div>
    </noscript>
  </div>
  
  <!-- React App wird hier geladen -->
  <script type="module" src="/assets/index.js"></script>
  <link rel="stylesheet" href="/assets/index.css">
</body>
</html>`;

  // SEO-Metadaten für verschiedene Routen
  function getTitle(route) {
    const titles = {
      '/': 'Marsstein - KI-native Compliance Platform | DSGVO, ISO 27001 & EU AI Act',
      '/dsgvo': 'DSGVO Compliance Software | Automatisierte Datenschutz-Lösung',
      '/eu-ai-act': 'EU AI Act Compliance | KI-Risikobewertung & Compliance Management',
      '/nis2-compliance': 'NIS2 Compliance Software | Cybersecurity Richtlinie automatisiert',
      '/iso-27001-zertifizierung': 'ISO 27001 Zertifizierung | Compliance Management Software',
      '/soc2-zertifizierung': 'SOC 2 Compliance | Automatisierte Zertifizierung & Audits',
      '/tisax-zertifizierung': 'TISAX Zertifizierung | Automotive Compliance Software',
      '/branchen': 'Compliance-Lösungen nach Branchen | Marsstein Platform',
      '/ueber-uns': 'Über Marsstein | Team & Vision der Compliance Platform',
      '/contact': 'Kontakt | Marsstein Compliance Platform Demo anfragen'
    };
    return titles[route] || 'Marsstein - Compliance made simple';
  }
  
  function getDescription(route) {
    const descriptions = {
      '/': 'Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.',
      '/dsgvo': 'Automatisierte DSGVO-Compliance mit KI. Datenschutz-Folgenabschätzung, Verarbeitungsverzeichnis und Betroffenenanfragen in einer Lösung.',
      '/eu-ai-act': 'Vollständige EU AI Act Compliance. Automatische Risikoklassifizierung, Dokumentation und kontinuierliches Monitoring für KI-Systeme.',
      '/nis2-compliance': 'NIS2-Richtlinie einfach umsetzen. Risikomanagement, Incident Response und Compliance-Reporting automatisiert.',
      '/iso-27001-zertifizierung': 'ISO 27001 Zertifizierung vereinfacht. Gap-Analyse, Dokumentation und Audit-Vorbereitung mit KI-Unterstützung.',
      '/soc2-zertifizierung': 'SOC 2 Type II Compliance automatisiert. Kontinuierliches Monitoring und Audit-Ready Dokumentation.',
      '/tisax-zertifizierung': 'TISAX-Zertifizierung für die Automobilindustrie. VDA ISA konform mit automatisierter Dokumentation.',
      '/branchen': 'Maßgeschneiderte Compliance-Lösungen für Ihre Branche. Von Automotive bis Healthcare.',
      '/ueber-uns': 'Erfahren Sie mehr über Marsstein, unser Team und unsere Mission, Compliance zu revolutionieren.',
      '/contact': 'Kontaktieren Sie uns für eine Demo der Marsstein Compliance Platform. Kostenlos und unverbindlich.'
    };
    return descriptions[route] || 'Marsstein - Die KI-native Compliance Platform für moderne Unternehmen im DACH-Raum.';
  }
  
  // Erstelle statische HTML-Dateien nur für Haupt-SEO-Seiten
  for (const route of seoRoutes) {
    const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
    const filePath = path.join(process.cwd(), 'dist', routePath);
    
    // Erstelle Verzeichnis falls nötig
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    
    // Schreibe HTML-Datei
    await fs.writeFile(filePath, htmlTemplate(route));
    console.log(`✅ Created static HTML for ${route}`);
  }
}

// Führe Build aus
build();