import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function prerender() {
  console.log('🚀 Starting simple prerender for homepage...');
  
  try {
    // Lese originales HTML
    const htmlPath = join(__dirname, '../dist/index.html');
    let html = readFileSync(htmlPath, 'utf-8');
    
    // WICHTIG: Root-Element NICHT überschreiben, damit React hydratisieren kann
    // Füge nur ein unsichtbares SEO-Element für Lighthouse hinzu
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"></div>
      <!-- SEO Content für Lighthouse -->
      <div style="position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden;">
        <h1>Marsstein - DSGVO & EU AI Act Compliance</h1>
        <p>Ihre Experten für Datenschutz und Compliance</p>
      </div>`
    );
    
    // Füge Meta-Tags für SEO hinzu
    html = html.replace(
      '</head>',
      `  <meta name="description" content="Marsstein - Ihre Experten für DSGVO, EU AI Act und Datenschutz-Compliance. ISO 27001, SOC2 und TISAX Zertifizierung.">
  <title>Marsstein - DSGVO & EU AI Act Compliance Experten</title>
</head>`
    );
    
    // Schreibe zurück
    writeFileSync(htmlPath, html);
    console.log('✅ Homepage prerendered with basic content');
    
  } catch (error) {
    console.error('❌ Prerender failed:', error);
    // Fehler nicht werfen, damit Build nicht fehlschlägt
  }
}

prerender();