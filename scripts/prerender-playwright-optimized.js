import { chromium } from 'playwright';
import { createServer } from 'vite';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { performance } from 'perf_hooks';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = dirname(__dirname);

// =====================================
// Route Konfiguration mit Priorisierung
// =====================================
const ROUTES_CONFIG = {
  // SEO-Kritische Seiten (Prio 1 - MUSS gerendert werden)
  critical: [
    '/',
    '/contact',
    '/pricing',
    '/academy',
  ],
  
  // Top Compliance Pages (Prio 2 - Hoher Traffic)
  compliance: [
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
  ],
  
  // Hauptbranchen (Prio 3)
  industries: [
    '/branchen/gesundheitswesen',
    '/branchen/finanzdienstleister',
    '/branchen/saas-unternehmen',
    '/branchen/e-commerce',
    '/branchen/automotive',
  ],
  
  // Wissensbasis & Tools (Prio 4)
  knowledge: [
    '/wissen/dsgvo',
    '/wissen/compliance-frameworks',
    '/wissen/leitfaden/dsgvo-grundlagen',
    '/wissen/leitfaden/dsgvo-30-tage',
    '/wissen/leitfaden/betroffenenrechte',
  ],
  
  // Tools & Assessment (Prio 5)
  tools: [
    '/tools/compliance-ai-assistant',
    '/tools/cookie-management',
    '/assessment-center/dsgvo-compliance-checklist',
    '/assessment-center/ai-risk-assessment',
  ],
  
  // Erweiterte Seiten (Prio 6 - Optional)
  extended: [
    '/wissen/leitfaden/iso-27001-audit-vorbereitung',
    '/branchen/bildung',
    '/branchen/behorden',
    '/branchen/kanzleien',
    '/assessment-center/iso-27001-readiness',
    '/assessment-center/nis2-compliance-check',
    '/wissen/rechtsprechung/dsgvo-urteile',
    '/wissen/rechtsprechung/bussgelder',
  ],
  
  // Diese Routes NICHT prerendern (Client-Side only)
  exclude: [
    '/dashboard',
    '/app',
    '/auth',
    '/api',
    '/admin'
  ]
};

// Optimierte Konfiguration
const CONFIG = {
  // Performance Einstellungen
  BATCH_SIZE: process.env.SSG_BATCH_SIZE ? parseInt(process.env.SSG_BATCH_SIZE) : 5,
  MAX_WORKERS: process.env.SSG_MAX_WORKERS ? parseInt(process.env.SSG_MAX_WORKERS) : 3,
  TIMEOUT: 20000, // Reduziert von 30000
  RETRY_ATTEMPTS: 2, // Reduziert von 3
  RETRY_DELAY: 1000,
  
  // Server Einstellungen  
  PORT: process.env.SSG_PORT ? parseInt(process.env.SSG_PORT) : 5173,
  WARMUP_TIME: 2000, // Server warm-up Zeit
  
  // Build Modus
  MODE: process.env.SSG_MODE || 'critical', // critical | full | extended
  FAIL_THRESHOLD: 0.2, // Max 20% Fehlerrate
  
  // Optimization
  WAIT_FOR_IDLE: process.env.SSG_WAIT_IDLE === 'true',
  REMOVE_SCRIPTS: process.env.SSG_REMOVE_SCRIPTS === 'true',
  
  // Output
  VERBOSE: process.env.SSG_VERBOSE === 'true',
  BUILD_MARKER: 'data-ssg="true"'
};

// Performance Tracking
class PerformanceTracker {
  constructor() {
    this.metrics = {
      routes: [],
      totalStart: performance.now(),
      memoryUsage: []
    };
  }
  
  recordRoute(route, success, duration, attemptNum = 1) {
    this.metrics.routes.push({
      route,
      success,
      duration,
      attemptNum,
      timestamp: new Date().toISOString()
    });
  }
  
  recordMemory() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage.push({
      rss: Math.round(usage.rss / 1024 / 1024),
      heapUsed: Math.round(usage.heapUsed / 1024 / 1024),
      timestamp: new Date().toISOString()
    });
  }
  
  getReport() {
    const totalEnd = performance.now();
    const successful = this.metrics.routes.filter(r => r.success).length;
    const failed = this.metrics.routes.filter(r => !r.success).length;
    const avgDuration = this.metrics.routes.reduce((sum, r) => sum + r.duration, 0) / this.metrics.routes.length;
    const maxMemory = Math.max(...this.metrics.memoryUsage.map(m => m.heapUsed));
    
    return {
      summary: {
        totalRoutes: this.metrics.routes.length,
        successful,
        failed,
        successRate: (successful / this.metrics.routes.length * 100).toFixed(1) + '%',
        totalDuration: ((totalEnd - this.metrics.totalStart) / 1000).toFixed(1) + 's',
        avgRouteTime: avgDuration.toFixed(0) + 'ms',
        peakMemory: maxMemory + 'MB'
      },
      failedRoutes: this.metrics.routes.filter(r => !r.success).map(r => r.route),
      slowRoutes: this.metrics.routes
        .filter(r => r.duration > 5000)
        .sort((a, b) => b.duration - a.duration)
        .slice(0, 5)
        .map(r => ({ route: r.route, time: r.duration + 'ms' }))
    };
  }
}

// Intelligentes Prerendering mit Fehlerbehandlung
async function prerenderRoute(page, route, baseUrl, attemptNum = 1) {
  const startTime = performance.now();
  
  try {
    // Navigate mit optimierten Einstellungen - warte auf vollständiges Laden
    const response = await page.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle0', // Warte bis keine Netzwerkaktivität mehr
      timeout: CONFIG.TIMEOUT
    });
    
    // Check Response Status
    if (!response.ok() && response.status() !== 304) {
      throw new Error(`HTTP ${response.status()}`);
    }
    
    // Warte auf kritische Elemente und React Helmet
    try {
      // Warte explizit auf React Helmet Meta Tags
      await page.waitForFunction(() => {
        // Prüfe ob React Helmet seine Tags gesetzt hat
        const helmet = document.querySelector('[data-react-helmet="true"]');
        const hasValidMeta = document.querySelector('meta[name="description"]')?.content?.length > 0;
        const hasOgMeta = document.querySelector('meta[property="og:title"]')?.content?.length > 0;
        const hasValidTitle = document.title && 
                              document.title !== 'Vite + React' && 
                              !document.title.includes('Loading');
        const hasContent = document.querySelector('#root')?.children.length > 0;
        const hasMainContent = document.querySelector('main') || document.querySelector('[role="main"]');
        
        // Alle Bedingungen müssen erfüllt sein
        return (helmet || hasValidMeta) && hasOgMeta && hasValidTitle && hasContent && hasMainContent;
      }, { timeout: 8000 });
      
      // Extra Zeit für lazy-loaded Komponenten
      await page.waitForTimeout(500);
      
    } catch (waitError) {
      if (CONFIG.VERBOSE) {
        console.warn(`  ⚠️  Timeout waiting for complete render on ${route}`);
      }
      // Fallback: Warte mindestens auf Basis-Content
      await page.waitForSelector('#root > *', { timeout: 3000 }).catch(() => {});
      await page.waitForTimeout(1500);
    }
    
    // Screenshot für Debug (optional)
    if (CONFIG.VERBOSE && attemptNum > 1) {
      const screenshotPath = join(rootDir, 'dist', '_debug', `${route.replace(/\//g, '_')}.png`);
      mkdirSync(dirname(screenshotPath), { recursive: true });
      await page.screenshot({ path: screenshotPath, fullPage: true });
    }
    
    // Hole optimierten HTML Content
    let html = await page.content();
    
    // Validierung
    if (!validateHtml(html, route)) {
      throw new Error('HTML validation failed');
    }
    
    // Optimiere HTML für Production
    html = await optimizeHtml(html, route, page);
    
    // Speichere HTML
    const outputPath = getOutputPath(route);
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html);
    
    const duration = performance.now() - startTime;
    
    if (CONFIG.VERBOSE) {
      console.log(`  ✅ ${route} (${duration.toFixed(0)}ms, ${(html.length / 1024).toFixed(1)}kb)`);
    }
    
    return { success: true, route, duration };
    
  } catch (error) {
    const duration = performance.now() - startTime;
    
    if (attemptNum < CONFIG.RETRY_ATTEMPTS) {
      if (CONFIG.VERBOSE) {
        console.log(`  🔄 Retry ${attemptNum}/${CONFIG.RETRY_ATTEMPTS} for ${route}: ${error.message}`);
      }
      
      await page.waitForTimeout(CONFIG.RETRY_DELAY * attemptNum);
      return prerenderRoute(page, route, baseUrl, attemptNum + 1);
    }
    
    console.error(`  ❌ ${route} failed after ${attemptNum} attempts: ${error.message}`);
    return { success: false, route, duration, error: error.message };
  }
}

// HTML Validierung
function validateHtml(html, route) {
  // Basis-Checks
  if (!html || html.length < 1000) return false;
  if (!html.includes('<!DOCTYPE html>')) return false;
  if (!html.includes('<title>')) return false;
  if (html.includes('Vite + React')) return false;
  if (html.includes('Loading...') && !html.includes('data-ssg')) return false;
  
  // React Helmet / SEO Checks
  if (!html.includes('meta name="description"')) {
    console.warn(`  ⚠️  Missing meta description on ${route}`);
    return false;
  }
  
  // Route-spezifische Checks
  if (route === '/' && !html.includes('Marsstein')) return false;
  if (route === '/dsgvo' && !html.includes('DSGVO')) return false;
  
  return true;
}

// Erweiterte HTML Optimierung
async function optimizeHtml(html, route, page) {
  // 1. SSG Markierungen
  const buildInfo = {
    timestamp: new Date().toISOString(),
    route: route,
    version: process.env.BUILD_VERSION || 'unknown'
  };
  
  html = html.replace(
    '<html',
    `<html ${CONFIG.BUILD_MARKER} data-build='${JSON.stringify(buildInfo)}'`
  );
  
  // 2. Injiziere optimiertes Hydration Script
  const hydrationScript = `
    <script id="ssr-hydration">
      (function() {
        // SSG Metadata
        window.__SSG__ = {
          route: '${route}',
          buildTime: '${buildInfo.timestamp}',
          version: '${buildInfo.version}',
          hydrated: false
        };
        
        // Hydration Error Recovery
        const originalError = window.onerror;
        window.onerror = function(msg, source, lineno, colno, error) {
          if (msg && msg.toString().includes('hydration')) {
            console.warn('[SSG] Hydration mismatch detected, recovering...');
            window.__SSG__.hydrationError = true;
            
            // Attempt recovery
            setTimeout(() => {
              if (!window.__SSG__.hydrated && window.React && window.ReactDOM) {
                const root = document.getElementById('root');
                if (root) {
                  window.ReactDOM.createRoot(root).render(window.React.createElement(window.App));
                  console.log('[SSG] Recovered via client-side render');
                }
              }
            }, 100);
            
            return true; // Suppress error
          }
          return originalError ? originalError(msg, source, lineno, colno, error) : false;
        };
        
        // Mark hydration complete
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            window.__SSG__.hydrated = true;
            console.log('[SSG] Hydration complete for ${route}');
          }, 500);
        });
      })();
    </script>
  `;
  
  html = html.replace('</head>', hydrationScript + '</head>');
  
  // 3. Preload Optimierungen
  const preloads = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://cdn.marsstein.com">
    <link rel="preload" href="/assets/index.css" as="style">
    <link rel="modulepreload" href="/assets/index.js">
  `;
  
  html = html.replace('</head>', preloads + '</head>');
  
  // 4. Inline Critical CSS (optional)
  if (process.env.SSG_INLINE_CSS === 'true') {
    try {
      const criticalCSS = await page.evaluate(() => {
        const sheets = Array.from(document.styleSheets);
        let css = '';
        sheets.forEach(sheet => {
          try {
            const rules = Array.from(sheet.cssRules || []);
            rules.forEach(rule => {
              // Nur above-the-fold CSS
              if (rule.selectorText && !rule.selectorText.includes(':hover')) {
                css += rule.cssText + ' ';
              }
            });
          } catch (e) {}
        });
        return css.substring(0, 50000); // Limit 50kb
      });
      
      if (criticalCSS) {
        html = html.replace('</head>', `<style id="critical-css">${criticalCSS}</style></head>`);
      }
    } catch (e) {
      console.warn('Could not extract critical CSS:', e.message);
    }
  }
  
  // 5. Cleanup - Behalte Formatierung für bessere Lesbarkeit
  // Entferne nur HTML-Kommentare, aber behalte Whitespace/Formatierung
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  
  // DEAKTIVIERT: Minifizierung für bessere Lesbarkeit und SEO-Debugging
  // html = html.replace(/\s+/g, ' '); // Normalize whitespace
  // html = html.replace(/> </g, '><'); // Remove space between tags
  
  // 6. Optional: Remove React DevTools
  if (CONFIG.REMOVE_SCRIPTS) {
    html = html.replace(/<script[^>]*__REACT_DEVTOOLS[^>]*>[\s\S]*?<\/script>/gi, '');
  }
  
  return html;
}

// Output Path Helper
function getOutputPath(route) {
  const distDir = join(rootDir, 'dist');
  
  if (route === '/') {
    return join(distDir, 'index.html');
  }
  
  // Clean URLs (Netlify-konform)
  const cleanPath = route.replace(/\/$/, '');
  return join(distDir, cleanPath, 'index.html');
}

// SEO & Netlify Files
function createSeoFiles(routes, stats) {
  const distDir = join(rootDir, 'dist');
  
  // 1. Sitemap mit Prioritäten
  const sitemapEntries = routes.map(route => {
    let priority = 0.5;
    let changefreq = 'monthly';
    
    if (route === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (ROUTES_CONFIG.critical.includes(route)) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (ROUTES_CONFIG.compliance.includes(route)) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (ROUTES_CONFIG.industries.includes(route)) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    
    return `  <url>
    <loc>https://marsstein.com${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;
  
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap);
  console.log('  ✅ sitemap.xml created');
  
  // 2. Netlify _redirects
  const redirects = `
# SPA Routes (Client-side routing)
/dashboard/*    /index.html    200
/app/*          /index.html    200
/auth/*         /index.html    200
/api/*          /index.html    200

# Legacy URL Redirects
/compliance/dsgvo              /dsgvo                          301
/compliance/iso-27001          /iso-27001-zertifizierung       301
/compliance/iso-27017          /iso-27017-zertifizierung       301
/compliance/iso-27018          /iso-27018-zertifizierung       301
/industries/*                  /branchen/:splat                301
/knowledge/*                   /wissen/:splat                  301

# Wildcard for 404
/*              /404.html      404
`;
  
  writeFileSync(join(distDir, '_redirects'), redirects.trim());
  console.log('  ✅ _redirects created');
  
  // 3. Netlify _headers mit Cache-Control
  const headers = `
# Prerendered HTML - Cache with revalidation
/*.html
  Cache-Control: public, max-age=0, must-revalidate
  X-Robots-Tag: all

# Homepage - Moderate caching
/
  Cache-Control: public, max-age=3600, stale-while-revalidate=86400

# Compliance pages - Moderate caching  
/dsgvo
  Cache-Control: public, max-age=7200, stale-while-revalidate=86400
/iso-27001-zertifizierung
  Cache-Control: public, max-age=7200, stale-while-revalidate=86400
/nis2
  Cache-Control: public, max-age=7200, stale-while-revalidate=86400

# Static Assets - Aggressive caching
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400

# Security Headers (all routes)
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.marsstein.com
`;
  
  writeFileSync(join(distDir, '_headers'), headers.trim());
  console.log('  ✅ _headers created');
  
  // 4. robots.txt
  const robots = `
User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /app/
Disallow: /auth/
Disallow: /api/
Disallow: /_debug/
Disallow: /*.json$

# Crawl-delay
Crawl-delay: 1

# Sitemap
Sitemap: https://marsstein.com/sitemap.xml

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0
`;
  
  writeFileSync(join(distDir, 'robots.txt'), robots.trim());
  console.log('  ✅ robots.txt created');
  
  // 5. 404.html
  const html404 = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Seite nicht gefunden | Marsstein</title>
  <meta name="robots" content="noindex, follow">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 500px;
    }
    h1 {
      font-size: 6rem;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    p {
      margin-bottom: 2rem;
      opacity: 0.8;
      line-height: 1.6;
    }
    .buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: white;
      color: #764ba2;
      text-decoration: none;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    a:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <h2>Seite nicht gefunden</h2>
    <p>Die angeforderte Seite existiert leider nicht. Sie wurde möglicherweise verschoben oder gelöscht.</p>
    <div class="buttons">
      <a href="/">Zur Startseite</a>
      <a href="/contact">Kontakt</a>
    </div>
  </div>
</body>
</html>`;
  
  writeFileSync(join(distDir, '404.html'), html404);
  console.log('  ✅ 404.html created');
  
  // 6. Build Report
  const buildReport = {
    timestamp: new Date().toISOString(),
    mode: CONFIG.MODE,
    stats: stats.getReport(),
    config: {
      batchSize: CONFIG.BATCH_SIZE,
      timeout: CONFIG.TIMEOUT,
      retryAttempts: CONFIG.RETRY_ATTEMPTS
    }
  };
  
  writeFileSync(
    join(distDir, '_build-report.json'),
    JSON.stringify(buildReport, null, 2)
  );
  console.log('  ✅ _build-report.json created');
}

// Haupt-Prerender-Funktion
async function prerenderWithPlaywright() {
  console.log('🚀 Starting Optimized Playwright SSG for Marsstein\n');
  console.log('📋 Configuration:');
  console.log(`  • Mode: ${CONFIG.MODE}`);
  console.log(`  • Batch Size: ${CONFIG.BATCH_SIZE}`);
  console.log(`  • Max Workers: ${CONFIG.MAX_WORKERS}`);
  console.log(`  • Timeout: ${CONFIG.TIMEOUT}ms`);
  console.log(`  • Retry Attempts: ${CONFIG.RETRY_ATTEMPTS}\n`);
  
  const tracker = new PerformanceTracker();
  let server;
  let browser;
  
  try {
    // 1. Route-Auswahl basierend auf Modus
    let routes = [];
    switch (CONFIG.MODE) {
      case 'critical':
        routes = [...ROUTES_CONFIG.critical, ...ROUTES_CONFIG.compliance];
        break;
      case 'full':
        routes = [
          ...ROUTES_CONFIG.critical,
          ...ROUTES_CONFIG.compliance,
          ...ROUTES_CONFIG.industries,
          ...ROUTES_CONFIG.knowledge,
          ...ROUTES_CONFIG.tools
        ];
        break;
      case 'extended':
        routes = Object.values(ROUTES_CONFIG)
          .filter(group => Array.isArray(group))
          .flat()
          .filter(route => !ROUTES_CONFIG.exclude.some(ex => route.startsWith(ex)));
        break;
    }
    
    // Deduplizieren
    routes = [...new Set(routes)];
    console.log(`📄 Prerendering ${routes.length} routes in ${CONFIG.MODE} mode\n`);
    
    // 2. Vite Server starten
    console.log('🚀 Starting Vite preview server...');
    server = await createServer({
      root: rootDir,
      server: { 
        port: CONFIG.PORT,
        host: 'localhost',
        strictPort: true
      },
      mode: 'production',
      logLevel: 'error'
    });
    
    await server.listen();
    const baseUrl = `http://localhost:${CONFIG.PORT}`;
    console.log(`✅ Server running on ${baseUrl}`);
    
    // Server Warm-up
    console.log(`⏳ Warming up server (${CONFIG.WARMUP_TIME}ms)...`);
    await new Promise(resolve => setTimeout(resolve, CONFIG.WARMUP_TIME));
    
    // 3. Browser starten mit optimierten Settings
    console.log('🌐 Launching Playwright browser...\n');
    
    const launchOptions = {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    };
    
    browser = await chromium.launch(launchOptions);
    
    // Context Pool für Parallelisierung
    const contexts = [];
    for (let i = 0; i < CONFIG.MAX_WORKERS; i++) {
      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        userAgent: 'Mozilla/5.0 (Marsstein-SSG-Bot) Chrome/120.0.0.0',
        locale: 'de-DE',
        timezoneId: 'Europe/Berlin',
        ignoreHTTPSErrors: true,
        bypassCSP: true
      });
      contexts.push(context);
    }
    
    // 4. Batch Processing mit Worker Pool
    console.log('🔄 Starting batch processing...\n');
    const results = [];
    
    for (let i = 0; i < routes.length; i += CONFIG.BATCH_SIZE) {
      const batch = routes.slice(i, i + CONFIG.BATCH_SIZE);
      const batchNum = Math.floor(i / CONFIG.BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(routes.length / CONFIG.BATCH_SIZE);
      
      if (!CONFIG.VERBOSE) {
        process.stdout.write(`\r  Processing batch ${batchNum}/${totalBatches} (${Math.round(i/routes.length*100)}%)`);
      } else {
        console.log(`\n📦 Batch ${batchNum}/${totalBatches}:`);
      }
      
      // Parallele Verarbeitung mit Worker-Verteilung
      const batchPromises = batch.map(async (route, index) => {
        const context = contexts[index % contexts.length];
        const page = await context.newPage();
        
        try {
          const result = await prerenderRoute(page, route, baseUrl);
          tracker.recordRoute(route, result.success, result.duration);
          return result;
        } finally {
          await page.close();
        }
      });
      
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      // Memory Management
      tracker.recordMemory();
      if (tracker.metrics.memoryUsage.length > 0) {
        const lastMemory = tracker.metrics.memoryUsage[tracker.metrics.memoryUsage.length - 1];
        if (lastMemory.heapUsed > 500) { // > 500MB
          if (CONFIG.VERBOSE) {
            console.log('  ⚠️  High memory usage detected, forcing garbage collection...');
          }
          if (global.gc) global.gc();
        }
      }
    }
    
    if (!CONFIG.VERBOSE) {
      process.stdout.write('\r' + ' '.repeat(50) + '\r'); // Clear progress line
    }
    
    // 5. Ergebnisse auswerten
    const report = tracker.getReport();
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 SSG Build Report:');
    console.log('='.repeat(60));
    console.log(`  ✅ Successful: ${report.summary.successful}/${report.summary.totalRoutes}`);
    console.log(`  ❌ Failed: ${report.summary.failed}/${report.summary.totalRoutes}`);
    console.log(`  📈 Success Rate: ${report.summary.successRate}`);
    console.log(`  ⏱️  Total Time: ${report.summary.totalDuration}`);
    console.log(`  ⚡ Avg per Route: ${report.summary.avgRouteTime}`);
    console.log(`  💾 Peak Memory: ${report.summary.peakMemory}`);
    
    if (report.failedRoutes.length > 0) {
      console.log('\n❌ Failed Routes:');
      report.failedRoutes.forEach(route => console.log(`  • ${route}`));
    }
    
    if (report.slowRoutes.length > 0 && CONFIG.VERBOSE) {
      console.log('\n⏱️  Slowest Routes:');
      report.slowRoutes.forEach(({ route, time }) => console.log(`  • ${route}: ${time}`));
    }
    
    console.log('='.repeat(60) + '\n');
    
    // 6. SEO Files erstellen
    console.log('📝 Creating SEO & Netlify files...');
    const successfulRoutes = results.filter(r => r.success).map(r => r.route);
    createSeoFiles(successfulRoutes, tracker);
    
    // 7. Build-Validierung
    const failureRate = report.summary.failed / report.summary.totalRoutes;
    
    if (failureRate > CONFIG.FAIL_THRESHOLD) {
      console.error(`\n⚠️  Build quality check failed!`);
      console.error(`   Failure rate ${(failureRate * 100).toFixed(1)}% exceeds threshold of ${CONFIG.FAIL_THRESHOLD * 100}%`);
      process.exit(1);
    }
    
    console.log('\n✅ SSG completed successfully!');
    console.log('   Build artifacts available in ./dist\n');
    
    // 8. Optional: Netlify Plugin Check
    if (process.env.NETLIFY) {
      console.log('📦 Netlify environment detected');
      console.log('   Ensure netlify-plugin-chromium is installed');
      console.log('   Check _redirects and _headers files\n');
    }
    
  } catch (error) {
    console.error('\n❌ SSG Build failed:', error);
    console.error(error.stack);
    process.exit(1);
  } finally {
    // Cleanup
    if (browser) {
      await browser.close();
      console.log('🧹 Browser closed');
    }
    if (server) {
      await server.close();
      console.log('🧹 Server closed');
    }
  }
}

// CLI Execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // Parse CLI arguments
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log(`
Marsstein SSG Prerender Tool

Usage: node scripts/prerender-playwright-optimized.js [options]

Options:
  --mode <critical|full|extended>  Prerender mode (default: critical)
  --batch-size <number>            Parallel batch size (default: 5)  
  --verbose                        Verbose output
  --help                          Show this help

Environment Variables:
  SSG_MODE              Prerender mode
  SSG_BATCH_SIZE        Batch size for parallel processing
  SSG_MAX_WORKERS       Maximum browser contexts
  SSG_PORT              Dev server port
  SSG_VERBOSE           Enable verbose logging
  SSG_WAIT_IDLE         Wait for network idle
  SSG_REMOVE_SCRIPTS    Remove React DevTools
  SSG_INLINE_CSS        Inline critical CSS
  BUILD_VERSION         Build version for tracking

Examples:
  # Quick critical pages only
  node scripts/prerender-playwright-optimized.js --mode critical
  
  # Full build with all main pages
  node scripts/prerender-playwright-optimized.js --mode full --verbose
  
  # CI/CD optimized
  SSG_BATCH_SIZE=10 SSG_MAX_WORKERS=5 npm run build:ssg
    `);
    process.exit(0);
  }
  
  // Set mode from CLI
  const modeIndex = args.indexOf('--mode');
  if (modeIndex !== -1 && args[modeIndex + 1]) {
    CONFIG.MODE = args[modeIndex + 1];
  }
  
  const batchIndex = args.indexOf('--batch-size');
  if (batchIndex !== -1 && args[batchIndex + 1]) {
    CONFIG.BATCH_SIZE = parseInt(args[batchIndex + 1]);
  }
  
  if (args.includes('--verbose')) {
    CONFIG.VERBOSE = true;
  }
  
  // Run
  prerenderWithPlaywright();
}

export { prerenderWithPlaywright, ROUTES_CONFIG };