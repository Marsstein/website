import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { createWriteStream } from 'fs';
import { prerenderConfig, routeCategories } from './prerender-config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Logging Setup
const logStream = createWriteStream(join(__dirname, '..', prerenderConfig.monitoring.logFile));
const log = {
  error: (msg) => {
    console.error(`❌ ${msg}`);
    logStream.write(`[ERROR] ${new Date().toISOString()} - ${msg}\n`);
  },
  warn: (msg) => {
    console.warn(`⚠️  ${msg}`);
    logStream.write(`[WARN] ${new Date().toISOString()} - ${msg}\n`);
  },
  info: (msg) => {
    console.log(`ℹ️  ${msg}`);
    logStream.write(`[INFO] ${new Date().toISOString()} - ${msg}\n`);
  },
  success: (msg) => {
    console.log(`✅ ${msg}`);
    logStream.write(`[SUCCESS] ${new Date().toISOString()} - ${msg}\n`);
  }
};

// Statistiken
const stats = {
  total: 0,
  successful: 0,
  failed: 0,
  skipped: 0,
  startTime: Date.now(),
  errors: []
};

/**
 * Liest alle Routen aus der generierten routes.json
 */
async function getAllRoutes() {
  try {
    // Importiere die Extraktor-Funktion
    const { extractRoutesFromFile } = await import('./extract-routes.js');
    const routes = extractRoutesFromFile();
    return routes;
  } catch (error) {
    log.error(`Failed to load routes: ${error.message}`);
    // Fallback: Manuell definierte kritische Routen
    return [
      '/',
      '/pricing',
      '/contact',
      '/compliance/dsgvo',
      '/wissen/rechtsprechung/amazon-luxemburg-2021'
    ];
  }
}

/**
 * Prüft ob eine Route pregerendert werden soll
 */
function shouldPrerender(route) {
  // Prüfe Excludes
  for (const pattern of prerenderConfig.excludePatterns) {
    if (pattern.endsWith('*')) {
      const prefix = pattern.slice(0, -1);
      if (route.startsWith(prefix)) {
        return false;
      }
    } else if (route === pattern) {
      return false;
    }
  }
  
  // Prüfe Overrides
  return true;
}

/**
 * Rendert eine einzelne Route
 */
async function prerenderRoute(browser, route, retryCount = 0) {
  const startTime = Date.now();
  
  try {
    const page = await browser.newPage();
    
    // Viewport für konsistentes Rendering
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Performance optimierungen
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      // Blockiere unwichtige Ressourcen beim Prerendering
      const blockedResources = ['font', 'media'];
      if (blockedResources.includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });
    
    const url = `http://${prerenderConfig.previewServer.host}:${prerenderConfig.previewServer.port}${route}`;
    
    // Navigiere zur Route
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: prerenderConfig.timeout
    });
    
    // Warte auf wichtigen Content
    try {
      await page.waitForSelector('h1, h2, [role="main"]', { timeout: 5000 });
    } catch (e) {
      log.warn(`No main content found for ${route}`);
    }
    
    // Zusätzliche Wartezeit für dynamischen Content
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1000)));
    
    // Hole das gerenderte HTML
    const html = await page.content();
    
    // Optimiere HTML
    const optimizedHtml = optimizeHtml(html, route);
    
    // Erstelle Verzeichnisstruktur
    const outputPath = join(__dirname, '..', prerenderConfig.output.dir, route.slice(1));
    mkdirSync(outputPath, { recursive: true });
    
    // Schreibe HTML
    writeFileSync(join(outputPath, 'index.html'), optimizedHtml);
    
    await page.close();
    
    const duration = Date.now() - startTime;
    log.success(`Prerendered ${route} (${duration}ms)`);
    
    stats.successful++;
    
    return { success: true, duration };
    
  } catch (error) {
    if (retryCount < prerenderConfig.retries) {
      log.warn(`Retrying ${route} (attempt ${retryCount + 1})`);
      return prerenderRoute(browser, route, retryCount + 1);
    }
    
    log.error(`Failed to prerender ${route}: ${error.message}`);
    stats.failed++;
    stats.errors.push({ route, error: error.message });
    
    return { success: false, error: error.message };
  }
}

/**
 * HTML Optimierungen
 */
function optimizeHtml(html, route) {
  // Entferne Development-spezifische Scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // Füge canonical URL hinzu wenn nicht vorhanden
  if (!html.includes('rel="canonical"')) {
    const canonicalUrl = `https://marsstein.com${route}`;
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
  }
  
  // Entferne inline styles die animations blockieren
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  return html;
}

/**
 * Batch-Verarbeitung mit Parallelisierung
 */
async function processBatch(browser, routes) {
  const batches = [];
  const batchSize = prerenderConfig.parallel;
  
  for (let i = 0; i < routes.length; i += batchSize) {
    batches.push(routes.slice(i, i + batchSize));
  }
  
  for (const batch of batches) {
    await Promise.all(
      batch.map(route => prerenderRoute(browser, route))
    );
  }
}

/**
 * Generiert sitemap.xml
 */
function generateSitemap(routes) {
  const { hostname, changefreq, priority, lastmod } = prerenderConfig.seo.sitemap;
  const lastmodDate = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const route of routes) {
    // Bestimme Priorität basierend auf Route-Kategorie
    let routePriority = priority;
    let routeChangefreq = changefreq;
    
    for (const [category, config] of Object.entries(routeCategories)) {
      for (const pattern of config.routes) {
        if (pattern.endsWith('*') && route.startsWith(pattern.slice(0, -1))) {
          routePriority = config.priority;
          routeChangefreq = config.changefreq;
          break;
        } else if (route === pattern) {
          routePriority = config.priority;
          routeChangefreq = config.changefreq;
          break;
        }
      }
    }
    
    xml += '  <url>\n';
    xml += `    <loc>${hostname}${route}</loc>\n`;
    if (lastmod) {
      xml += `    <lastmod>${lastmodDate}</lastmod>\n`;
    }
    xml += `    <changefreq>${routeChangefreq}</changefreq>\n`;
    xml += `    <priority>${routePriority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  
  writeFileSync(join(__dirname, '..', prerenderConfig.output.dir, 'sitemap.xml'), xml);
  log.success('Generated sitemap.xml');
}

/**
 * Generiert robots.txt
 */
function generateRobotsTxt() {
  const content = `# Marsstein robots.txt
User-agent: *
Allow: /

# Blockiere Dashboard und interaktive Tools
Disallow: /dashboard
Disallow: /dashboard-page
Disallow: /tools/dsgvo-email-generator
Disallow: /tools/compliance-scorecard
Disallow: /tools/compliance-ai-assistant

# Blockiere Test-Seiten
Disallow: /test*

# Sitemap
Sitemap: https://marsstein.com/sitemap.xml
`;
  
  writeFileSync(join(__dirname, '..', prerenderConfig.output.dir, 'robots.txt'), content);
  log.success('Generated robots.txt');
}

/**
 * Hauptfunktion
 */
async function main() {
  log.info('🚀 Starting full site prerendering...');
  
  // Starte Preview Server
  log.info('Starting preview server...');
  const previewProcess = spawn('npm', ['run', 'preview'], {
    stdio: 'pipe',
    shell: true
  });
  
  // Warte auf Server
  await new Promise(resolve => setTimeout(resolve, prerenderConfig.previewServer.startupDelay));
  
  let browser;
  
  try {
    // Starte Puppeteer
    const launchOptions = { ...prerenderConfig.puppeteer };
    
    // Use system Chrome if available (e.g., in GitHub Actions)
    if (process.env.PUPPETEER_EXECUTABLE_PATH) {
      launchOptions.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
    }
    
    browser = await puppeteer.launch(launchOptions);
    
    // Hole alle Routen
    log.info('Loading routes...');
    const allRoutes = await getAllRoutes();
    
    // Filtere Routen
    const routesToPrerender = allRoutes.filter(shouldPrerender);
    
    stats.total = routesToPrerender.length;
    stats.skipped = allRoutes.length - routesToPrerender.length;
    
    log.info(`Found ${allRoutes.length} routes, prerendering ${routesToPrerender.length}`);
    
    // Verarbeite Routen
    await processBatch(browser, routesToPrerender);
    
    // Generiere Sitemap
    if (prerenderConfig.output.sitemap) {
      generateSitemap(routesToPrerender);
    }
    
    // Generiere robots.txt
    if (prerenderConfig.output.robots) {
      generateRobotsTxt();
    }
    
  } catch (error) {
    log.error(`Fatal error: ${error.message}`);
  } finally {
    // Cleanup
    if (browser) await browser.close();
    previewProcess.kill();
    
    // Zeige Statistiken
    const duration = ((Date.now() - stats.startTime) / 1000).toFixed(2);
    
    console.log('\n📊 Prerendering Complete:');
    console.log(`   Total routes: ${stats.total}`);
    console.log(`   ✅ Successful: ${stats.successful}`);
    console.log(`   ❌ Failed: ${stats.failed}`);
    console.log(`   ⏭️  Skipped: ${stats.skipped}`);
    console.log(`   ⏱️  Duration: ${duration}s`);
    
    if (stats.errors.length > 0) {
      console.log('\n❌ Errors:');
      stats.errors.forEach(({ route, error }) => {
        console.log(`   ${route}: ${error}`);
      });
    }
    
    logStream.end();
  }
}

// Führe aus
main().catch(console.error);