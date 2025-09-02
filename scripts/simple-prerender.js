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
    
    // Füge ein Pre-Render Flag hinzu
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">
        <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
          <div style="text-align: center;">
            <h1 style="font-size: 3rem; font-weight: bold; margin-bottom: 1rem;">Marsstein</h1>
            <p style="font-size: 1.5rem; color: #666;">DSGVO & EU AI Act Compliance</p>
            <p style="margin-top: 2rem;">Loading application...</p>
          </div>
        </div>
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