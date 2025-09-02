import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Konfiguration
const ROUTES_TO_PRERENDER = [
  '/',
  '/datenschutz',
  '/tools', 
  '/academy',
  '/contact',
  '/industries',
  '/resources',
  '/about'
];

// Farben für Console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

/**
 * Startet einen lokalen Preview-Server
 */
async function startPreviewServer() {
  console.log(`${colors.blue}🚀 Starte lokalen Preview-Server...${colors.reset}`);
  
  return new Promise((resolve, reject) => {
    const server = spawn('npm', ['run', 'preview'], {
      stdio: 'pipe',
      shell: true
    });

    let serverReady = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') && !serverReady) {
        serverReady = true;
        console.log(`${colors.green}✅ Preview-Server läuft${colors.reset}`);
        setTimeout(() => resolve(server), 2000); // Warte 2s bis Server stabil
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`Server Error: ${data}`);
    });

    setTimeout(() => {
      if (!serverReady) {
        reject(new Error('Server konnte nicht gestartet werden'));
      }
    }, 10000);
  });
}

/**
 * Rendert eine Route mit Puppeteer und extrahiert SEO-relevanten Content
 */
async function renderRoute(browser, route) {
  const page = await browser.newPage();
  
  try {
    console.log(`${colors.blue}  📄 Rendere ${route}...${colors.reset}`);
    
    // Navigiere zur Route
    await page.goto(`http://localhost:4173${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Warte bis React fertig gerendert hat
    await page.waitForSelector('#root', { timeout: 10000 });
    
    // Warte zusätzlich auf spezifische Content-Elemente
    try {
      await page.waitForSelector('h1', { timeout: 5000 });
    } catch (e) {
      console.log(`${colors.yellow}  ⚠️  Kein h1 gefunden für ${route}${colors.reset}`);
    }

    // Extrahiere SEO-relevanten Content
    const seoData = await page.evaluate(() => {
      const extractText = (selector) => {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements).map(el => el.textContent.trim()).filter(t => t);
      };

      // Extrahiere strukturierten Content
      return {
        title: document.title,
        metaDescription: document.querySelector('meta[name="description"]')?.content || '',
        h1: extractText('h1'),
        h2: extractText('h2'),
        h3: extractText('h3'),
        paragraphs: extractText('p').slice(0, 10), // Erste 10 Paragraphen
        links: Array.from(document.querySelectorAll('a')).map(a => ({
          text: a.textContent.trim(),
          href: a.href
        })).filter(l => l.text && l.href),
        // Strukturierte Daten für Schema.org
        mainContent: document.querySelector('main')?.textContent?.trim().substring(0, 1000) || ''
      };
    });

    await page.close();
    return seoData;
    
  } catch (error) {
    console.error(`${colors.red}  ❌ Fehler beim Rendern von ${route}: ${error.message}${colors.reset}`);
    await page.close();
    return null;
  }
}

/**
 * Generiert SEO-optimiertes HTML ohne React zu stören
 */
function generateSEOHtml(seoDataMap) {
  // Erstelle strukturierten SEO-Content
  let seoContent = '<!-- SEO Content for Search Engines -->\n';
  seoContent += '<div id="seo-content" style="position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;" aria-hidden="true">\n';
  
  // Füge Content für jede Route hinzu
  for (const [route, data] of Object.entries(seoDataMap)) {
    if (!data) continue;
    
    seoContent += `  <!-- Route: ${route} -->\n`;
    seoContent += `  <section data-route="${route}">\n`;
    
    if (data.h1.length > 0) {
      seoContent += `    <h1>${data.h1[0]}</h1>\n`;
    }
    
    data.h2.forEach(h2 => {
      seoContent += `    <h2>${h2}</h2>\n`;
    });
    
    data.paragraphs.forEach(p => {
      seoContent += `    <p>${p}</p>\n`;
    });
    
    // Navigation Links für Crawler
    if (data.links.length > 0) {
      seoContent += '    <nav>\n';
      data.links.slice(0, 20).forEach(link => {
        if (link.href.startsWith('http://localhost')) {
          const path = link.href.replace('http://localhost:4173', '');
          seoContent += `      <a href="${path}">${link.text}</a>\n`;
        }
      });
      seoContent += '    </nav>\n';
    }
    
    seoContent += '  </section>\n';
  }
  
  seoContent += '</div>\n';
  
  // Füge Schema.org strukturierte Daten hinzu
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Marsstein - Datenschutz & Compliance",
    "url": "https://www.marsstein.de",
    "description": seoDataMap['/']?.metaDescription || "Datenschutz und Compliance Beratung",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.marsstein.de/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  seoContent += `<script type="application/ld+json">\n${JSON.stringify(schemaData, null, 2)}\n</script>\n`;
  
  return seoContent;
}

/**
 * Hauptfunktion
 */
async function main() {
  console.log(`${colors.green}🎯 Smart SEO Prerendering gestartet${colors.reset}`);
  console.log(`${colors.yellow}📋 Rendere ${ROUTES_TO_PRERENDER.length} Routen für SEO${colors.reset}\n`);

  const isNetlify = process.env.NETLIFY === 'true';
  let server = null;
  let browser = null;

  try {
    // Starte Preview Server nur lokal
    if (!isNetlify) {
      server = await startPreviewServer();
    }

    // Starte Puppeteer
    console.log(`${colors.blue}🌐 Starte Puppeteer...${colors.reset}`);
    
    if (isNetlify) {
      // Netlify Umgebung
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      // Lokale Umgebung - nutze normales Puppeteer
      const normalPuppeteer = await import('puppeteer');
      browser = await normalPuppeteer.default.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    }

    // Rendere alle Routen
    const seoDataMap = {};
    for (const route of ROUTES_TO_PRERENDER) {
      const data = await renderRoute(browser, route);
      if (data) {
        seoDataMap[route] = data;
      }
    }

    // Schließe Browser
    await browser.close();
    browser = null;

    // Lese aktuelle index.html
    const htmlPath = join(__dirname, '..', 'dist', 'index.html');
    let html = readFileSync(htmlPath, 'utf-8');

    // Generiere SEO Content
    const seoHtml = generateSEOHtml(seoDataMap);

    // WICHTIG: Füge SEO-Content VOR dem React-Root ein, ohne es zu verändern!
    // Suche nach dem Body-Tag und füge Content direkt danach ein
    html = html.replace(
      /<body([^>]*)>/,
      `<body$1>\n${seoHtml}`
    );

    // Stelle sicher, dass das root-div LEER bleibt für React
    html = html.replace(
      /<div id="root"[^>]*>.*?<\/div>/s,
      '<div id="root"></div>'
    );

    // Füge einen Kommentar hinzu zur Überprüfung
    html = html.replace(
      '<div id="root"></div>',
      '<!-- React mount point - keep empty! -->\n  <div id="root"></div>'
    );

    // Speichere optimierte HTML
    writeFileSync(htmlPath, html);

    console.log(`\n${colors.green}✅ SEO-Prerendering erfolgreich!${colors.reset}`);
    console.log(`${colors.blue}📊 Statistiken:${colors.reset}`);
    console.log(`   - Routen gerendert: ${Object.keys(seoDataMap).length}/${ROUTES_TO_PRERENDER.length}`);
    console.log(`   - HTML Größe: ${(html.length / 1024).toFixed(2)} KB`);
    console.log(`   - SEO Content: ${(seoHtml.length / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error(`${colors.red}❌ Fehler beim Prerendering: ${error.message}${colors.reset}`);
    process.exit(1);
  } finally {
    // Cleanup
    if (browser) await browser.close();
    if (server) {
      server.kill();
      console.log(`${colors.yellow}🛑 Preview-Server beendet${colors.reset}`);
    }
  }
}

// Quick mode für schnelle Builds
if (process.env.QUICK_BUILD === 'true') {
  console.log(`${colors.yellow}⚡ Quick Mode: Nur Basis-SEO${colors.reset}`);
  
  const htmlPath = join(__dirname, '..', 'dist', 'index.html');
  let html = readFileSync(htmlPath, 'utf-8');
  
  // Füge minimalen SEO-Content hinzu
  const quickSEO = `
<!-- Quick SEO Content -->
<div id="seo-content" style="display:none" aria-hidden="true">
  <h1>Marsstein - Datenschutz & Compliance Experte</h1>
  <p>Professionelle Beratung für DSGVO, EU AI Act, ISO 27001 und NIS-2 Compliance. Automatisierte Compliance-Lösungen für Unternehmen aller Branchen.</p>
  <nav>
    <a href="/dsgvo">DSGVO Compliance</a>
    <a href="/eu-ai-act">EU AI Act</a>
    <a href="/iso-27001-zertifizierung">ISO 27001</a>
    <a href="/tools">Compliance Tools</a>
    <a href="/wissen">Wissen</a>
    <a href="/branchen">Branchen</a>
    <a href="/contact">Kontakt</a>
  </nav>
</div>
`;
  
  html = html.replace(/<body([^>]*)>/, `<body$1>\n${quickSEO}`);
  html = html.replace(/<div id="root"[^>]*>.*?<\/div>/s, '<div id="root"></div>');
  
  writeFileSync(htmlPath, html);
  console.log(`${colors.green}✅ Quick SEO abgeschlossen${colors.reset}`);
} else {
  // Vollständiges Prerendering
  main().catch(console.error);
}