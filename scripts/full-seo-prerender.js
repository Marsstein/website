import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Wichtige SEO-Routen die gerendert werden sollen
const routes = [
  '/',
  '/dsgvo',
  '/iso-27001-zertifizierung',
  '/eu-ai-act',
  '/branchen',
  '/wissen',
  '/tools',
  '/contact',
  '/pricing',
  '/impressum',
  '/datenschutz'
];

async function prerender() {
  console.log('🚀 Starting full SEO prerendering...');
  
  // Starte Preview Server
  console.log('📦 Starting preview server...');
  const serverProcess = spawn('npm', ['run', 'preview'], {
    stdio: 'pipe',
    shell: true,
    cwd: join(__dirname, '..')
  });

  // Warte auf Server
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log('✅ Server started');

  // Starte Puppeteer
  let browser;
  try {
    // Nutze lokales Puppeteer für Entwicklung, Chromium für Netlify
    const isNetlify = process.env.NETLIFY === 'true';
    
    if (isNetlify) {
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      // Lokale Entwicklung - nutze normales Puppeteer
      const normalPuppeteer = await import('puppeteer');
      browser = await normalPuppeteer.default.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    }

    for (const route of routes) {
      const page = await browser.newPage();
      
      try {
        console.log(`📄 Prerendering ${route}...`);
        
        // Navigiere zur Seite
        await page.goto(`http://localhost:4173${route}`, {
          waitUntil: 'networkidle0',
          timeout: 30000
        });
        
        // Warte auf React Hydration
        await page.waitForFunction(() => {
          const root = document.getElementById('root');
          return root && root.children.length > 0;
        }, { timeout: 10000 });
        
        // Warte zusätzlich für dynamische Inhalte
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Hole den gerenderten HTML-Code
        const html = await page.content();
        
        // Bestimme Output-Pfad
        const outputPath = route === '/' 
          ? join(__dirname, '../dist/index.html')
          : join(__dirname, `../dist${route}/index.html`);
        
        // Erstelle Verzeichnis falls nötig
        if (route !== '/') {
          const dir = dirname(outputPath);
          if (!existsSync(dir)) {
            mkdirSync(dir, { recursive: true });
          }
        }
        
        // WICHTIG: Füge Script hinzu, das React-Hydration ermöglicht
        const finalHtml = html.replace(
          '</body>',
          `<script>
            // Markiere dass die Seite vorgerendert wurde
            window.__PRERENDERED__ = true;
          </script>
          </body>`
        );
        
        // Speichere HTML
        writeFileSync(outputPath, finalHtml);
        console.log(`   ✓ Saved: ${outputPath}`);
        
      } catch (error) {
        console.error(`   ❌ Error prerendering ${route}:`, error.message);
      } finally {
        await page.close();
      }
    }
    
  } catch (error) {
    console.error('❌ Prerender failed:', error);
  } finally {
    if (browser) await browser.close();
    serverProcess.kill();
  }
  
  console.log('\n✅ SEO Prerendering complete!');
  console.log('📊 Google can now see all content on prerendered pages');
  process.exit(0);
}

// Nur die Hauptseite für Netlify (schneller Build)
async function prerenderMainOnly() {
  console.log('🚀 Quick prerender for main page...');
  
  try {
    const htmlPath = join(__dirname, '../dist/index.html');
    const html = readFileSync(htmlPath, 'utf-8');
    
    // Füge Meta-Tags hinzu falls sie fehlen
    let updatedHtml = html;
    if (!html.includes('meta name="description"')) {
      updatedHtml = updatedHtml.replace(
        '</head>',
        `  <meta name="description" content="Marsstein - Ihre Experten für DSGVO, EU AI Act und Datenschutz-Compliance. ISO 27001, SOC2 und TISAX Zertifizierung.">
  <title>Marsstein - DSGVO & EU AI Act Compliance Experten</title>
</head>`
      );
    }
    
    writeFileSync(htmlPath, updatedHtml);
    console.log('✅ Main page optimized for SEO');
    
  } catch (error) {
    console.error('❌ Quick prerender failed:', error);
  }
}

// Entscheide basierend auf Umgebung
if (process.env.FULL_PRERENDER === 'true') {
  prerender();
} else {
  // Für Netlify nur die Hauptseite (schneller)
  prerenderMainOnly();
}