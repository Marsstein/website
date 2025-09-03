import { chromium } from 'playwright';
import { createServer } from 'vite';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = dirname(__dirname);

// Marsstein Route-Manifest - Top SEO-kritische Seiten
const CRITICAL_ROUTES = [
  // Hauptseiten
  '/',
  '/contact',
  '/pricing',
  '/academy',
  
  // Top Compliance Frameworks (höchster Traffic)
  '/dsgvo',
  '/iso-27001-zertifizierung',
  '/iso-27017-zertifizierung',
  '/iso-27018-zertifizierung',
  '/soc2-zertifizierung',
  '/tisax-compliance',
  '/nis2',
  '/eu-ai-act',
  '/hinweisgeberschutzgesetz',
  '/geldwaeschegesetz',
  
  // Wichtigste Branchen
  '/branchen/gesundheitswesen',
  '/branchen/finanzdienstleister',
  '/branchen/saas-unternehmen',
  '/branchen/e-commerce',
  '/branchen/automotive',
  
  // Hauptwissensseiten
  '/wissen/dsgvo',
  '/wissen/compliance-frameworks',
  
  // Wichtige Tools
  '/tools/compliance-ai-assistant',
  '/tools/cookie-management',
  
  // Assessment Center Hauptseiten
  '/assessment-center/dsgvo-compliance-checklist',
  '/assessment-center/ai-risk-assessment'
];

// Erweiterte Route-Liste für Phase 2
const EXTENDED_ROUTES = [
  // Weitere Leitfäden
  '/wissen/leitfaden/dsgvo-grundlagen',
  '/wissen/leitfaden/dsgvo-30-tage',
  '/wissen/leitfaden/betroffenenrechte',
  '/wissen/leitfaden/iso-27001-audit-vorbereitung',
  
  // Weitere Branchen
  '/branchen/bildung',
  '/branchen/behorden',
  '/branchen/kanzleien',
  
  // Weitere Assessment Tools
  '/assessment-center/iso-27001-readiness',
  '/assessment-center/nis2-compliance-check',
  
  // Rechtsprechung Hauptseiten
  '/wissen/rechtsprechung/dsgvo-urteile',
  '/wissen/rechtsprechung/bussgelder'
];

// Konfiguration
const CONFIG = {
  BATCH_SIZE: 5, // Parallelisierung
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  PORT: 5173,
  BUILD_MARKER: 'data-ssg="true"',
  ENABLE_EXTENDED: process.env.SSG_EXTENDED === 'true'
};

async function prerenderRoute(browser, route, baseUrl, attemptNum = 1) {
  const startTime = Date.now();
  const page = await browser.newPage();
  
  try {
    // Navigate to route
    await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'domcontentloaded', // Schneller als networkidle
      timeout: CONFIG.TIMEOUT
    });
    
    // WICHTIG: Warte auf React Helmet Meta Tags
    await page.waitForFunction(() => {
      const metaDesc = document.querySelector('meta[name="description"]');
      const title = document.title;
      const root = document.getElementById('root');
      const hasContent = root && root.children.length > 0;
      
      // Prüfe ob nicht Default-Title
      return metaDesc && 
             title && 
             !title.includes('Vite + React') && 
             !title.includes('Loading') &&
             hasContent;
    }, { timeout: 5000 }).catch(() => {
      console.warn(`  ⚠️  Timeout waiting for meta tags on ${route}`);
    });
    
    // Zusätzliche Stabilisierung
    await page.waitForTimeout(500);
    
    // Hole HTML Content
    const html = await page.content();
    
    // Validiere HTML
    if (!html.includes('<title>') || html.includes('Vite + React')) {
      throw new Error('Invalid HTML - missing proper title');
    }
    
    // Optimiere HTML für SSG
    const optimizedHtml = optimizeHtml(html, route);
    
    // Speichere HTML
    const outputPath = getOutputPath(route);
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, optimizedHtml);
    
    const duration = Date.now() - startTime;
    console.log(`  ✅ ${route} (${duration}ms)`);
    
    return { success: true, route, duration };
    
  } catch (error) {
    console.error(`  ❌ ${route} (Attempt ${attemptNum}): ${error.message}`);
    
    // Retry logic
    if (attemptNum < CONFIG.RETRY_ATTEMPTS) {
      console.log(`  🔄 Retrying ${route}...`);
      await page.close();
      return prerenderRoute(browser, route, baseUrl, attemptNum + 1);
    }
    
    return { success: false, route, error: error.message };
    
  } finally {
    await page.close();
  }
}

async function prerenderBatch(browser, routes, baseUrl) {
  const results = await Promise.all(
    routes.map(route => prerenderRoute(browser, route, baseUrl))
  );
  return results;
}

function optimizeHtml(html, route) {
  // 1. Füge SSG-Marker hinzu
  html = html.replace(
    '<html',
    `<html ${CONFIG.BUILD_MARKER} data-build-time="${new Date().toISOString()}" data-route="${route}"`
  );
  
  // 2. Injiziere Hydration-Safety Script
  const hydrationScript = `
    <script>
      // SSG Hydration Safety
      window.__SSG__ = true;
      window.__ROUTE__ = '${route}';
      window.__BUILD_TIME__ = '${new Date().toISOString()}';
      
      // Verzögere Hydration bis React bereit
      document.addEventListener('DOMContentLoaded', () => {
        if (window.React && window.ReactDOM) {
          console.log('🔄 Hydrating SSG content for ${route}');
        }
      });
      
      // Fallback für fehlgeschlagene Hydration
      window.addEventListener('error', (e) => {
        if (e.message && e.message.includes('hydration')) {
          console.warn('Hydration error detected, falling back to client render');
          window.location.reload();
        }
      });
    </script>
  `;
  
  html = html.replace('</head>', hydrationScript + '</head>');
  
  // 3. Preload kritische Assets
  const preloads = `
    <link rel="preload" href="/assets/index.js" as="script">
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  `;
  
  html = html.replace('</head>', preloads + '</head>');
  
  // 4. Entferne Development-Artefakte
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  html = html.replace(/data-v-[\w]+=""/g, '');
  
  return html;
}

function getOutputPath(route) {
  const distDir = join(rootDir, 'dist');
  
  if (route === '/') {
    return join(distDir, 'index.html');
  }
  
  // Erstelle Ordnerstruktur für Clean URLs
  return join(distDir, route, 'index.html');
}

function createSitemap(routes) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>https://marsstein.com${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.includes('/wissen/') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  writeFileSync(join(rootDir, 'dist', 'sitemap.xml'), sitemap);
  console.log('  ✅ sitemap.xml created');
}

function createRedirects() {
  const redirects = `
# Dashboard und App bleiben SPA
/dashboard/*    /index.html    200
/app/*          /index.html    200
/auth/*         /index.html    200

# API Routes
/api/*          /index.html    200

# Legacy URLs zu neuen Routes
/compliance/dsgvo              /dsgvo                   301
/compliance/iso-27001          /iso-27001-zertifizierung 301
/industries/*                  /branchen/:splat         301

# 404 Fallback
/*              /404.html                404
`;
  
  writeFileSync(join(rootDir, 'dist', '_redirects'), redirects.trim());
  console.log('  ✅ _redirects created');
}

function createHeaders() {
  const headers = `
# HTML - kurzer Cache für Updates
/*.html
  Cache-Control: public, max-age=0, must-revalidate
  X-Robots-Tag: index, follow
  
# Prerendered pages - moderater Cache
/
  Cache-Control: public, max-age=3600, stale-while-revalidate=86400
  
/dsgvo
  Cache-Control: public, max-age=3600, stale-while-revalidate=86400
  
/iso-27001-zertifizierung
  Cache-Control: public, max-age=3600, stale-while-revalidate=86400
  
# Assets - aggressives Caching
/assets/*
  Cache-Control: public, max-age=31536000, immutable
  
# Fonts
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
  Access-Control-Allow-Origin: *
  
# Images
/images/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400
  
# Security Headers
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
`;
  
  writeFileSync(join(rootDir, 'dist', '_headers'), headers.trim());
  console.log('  ✅ _headers created');
}

function createRobotsTxt(routes) {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /app/
Disallow: /auth/
Disallow: /api/
Disallow: /*.json$
Disallow: /*?*

# Sitemap
Sitemap: https://marsstein.com/sitemap.xml

# Crawl-delay für höfliches Crawling
Crawl-delay: 1
`;
  
  writeFileSync(join(rootDir, 'dist', 'robots.txt'), robotsTxt.trim());
  console.log('  ✅ robots.txt created');
}

async function prerenderWithPlaywright() {
  console.log('🚀 Starting Playwright SSG for Marsstein\n');
  console.log(`📋 Mode: ${CONFIG.ENABLE_EXTENDED ? 'Extended' : 'Critical only'}`);
  console.log(`🔧 Config: Batch size=${CONFIG.BATCH_SIZE}, Timeout=${CONFIG.TIMEOUT}ms\n`);
  
  let server;
  let browser;
  const stats = {
    successful: 0,
    failed: 0,
    totalTime: 0
  };
  
  try {
    // 1. Vite Preview Server starten
    console.log('🚀 Starting Vite preview server...');
    server = await createServer({
      root: rootDir,
      server: { 
        port: CONFIG.PORT,
        host: 'localhost'
      },
      mode: 'production'
    });
    
    await server.listen();
    const baseUrl = `http://localhost:${CONFIG.PORT}`;
    console.log(`✅ Server running on ${baseUrl}\n`);
    
    // 2. Browser starten
    console.log('🌐 Launching Playwright browser...');
    browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });
    
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: 'Mozilla/5.0 (Marsstein-SSG-Bot) Chrome/120.0.0.0',
      locale: 'de-DE'
    });
    
    // 3. Routes für Prerendering auswählen
    const routesToPrerender = CONFIG.ENABLE_EXTENDED 
      ? [...CRITICAL_ROUTES, ...EXTENDED_ROUTES]
      : CRITICAL_ROUTES;
    
    console.log(`📄 Prerendering ${routesToPrerender.length} routes...\n`);
    
    // 4. Batch-Processing
    const startTotal = Date.now();
    
    for (let i = 0; i < routesToPrerender.length; i += CONFIG.BATCH_SIZE) {
      const batch = routesToPrerender.slice(i, i + CONFIG.BATCH_SIZE);
      console.log(`\n🔄 Processing batch ${Math.floor(i/CONFIG.BATCH_SIZE) + 1}/${Math.ceil(routesToPrerender.length/CONFIG.BATCH_SIZE)}...`);
      
      const results = await prerenderBatch(context, batch, baseUrl);
      
      results.forEach(result => {
        if (result.success) {
          stats.successful++;
        } else {
          stats.failed++;
        }
      });
    }
    
    stats.totalTime = Date.now() - startTotal;
    
    // 5. Statistiken
    console.log('\n' + '='.repeat(50));
    console.log('📊 SSG Statistics:');
    console.log(`  ✅ Successful: ${stats.successful}/${routesToPrerender.length}`);
    console.log(`  ❌ Failed: ${stats.failed}/${routesToPrerender.length}`);
    console.log(`  ⏱️  Total time: ${(stats.totalTime / 1000).toFixed(1)}s`);
    console.log(`  ⚡ Avg per route: ${(stats.totalTime / routesToPrerender.length).toFixed(0)}ms`);
    console.log('='.repeat(50) + '\n');
    
    // 6. Erstelle zusätzliche Dateien
    console.log('📝 Creating additional files...');
    createSitemap(routesToPrerender);
    createRedirects();
    createHeaders();
    createRobotsTxt(routesToPrerender);
    
    // 7. Erstelle Fallback 404 Seite
    const notFoundHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Seite nicht gefunden | Marsstein</title>
  <meta name="robots" content="noindex, follow">
  <style>
    body { font-family: system-ui; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .container { text-align: center; padding: 2rem; }
    h1 { color: #1a1a1a; }
    a { color: #0066cc; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>404 - Seite nicht gefunden</h1>
    <p>Die angeforderte Seite existiert nicht.</p>
    <a href="/">Zurück zur Startseite</a>
  </div>
</body>
</html>`;
    
    writeFileSync(join(rootDir, 'dist', '404.html'), notFoundHtml);
    console.log('  ✅ 404.html created');
    
    console.log('\n✅ SSG completed successfully!\n');
    
    // Erfolg nur wenn mindestens 80% erfolgreich
    if (stats.failed > routesToPrerender.length * 0.2) {
      console.error('⚠️  Warning: More than 20% of routes failed!');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('\n❌ SSG failed:', error);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
    if (server) await server.close();
  }
}

// Execute nur wenn direkt aufgerufen
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  prerenderWithPlaywright();
}

export { prerenderWithPlaywright, CRITICAL_ROUTES, EXTENDED_ROUTES };