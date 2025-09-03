import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { performance } from 'perf_hooks';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// =====================================
// Intelligente Pfad-Erkennung
// =====================================
function detectProjectRoot() {
  // Mögliche Szenarien:
  // 1. Script läuft aus /MarsJonas/scripts/ (Netlify)
  // 2. Script läuft aus /MarsJonas/jonasmars/scripts/ (lokal)
  
  const possiblePaths = [
    // Netlify: dist ist direkt im root
    { 
      root: dirname(__dirname), 
      dist: join(dirname(__dirname), 'dist'),
      context: 'netlify'
    },
    // Lokal aus jonasmars
    {
      root: process.cwd(),
      dist: join(process.cwd(), 'dist'),
      context: 'local-jonasmars'
    },
    // Lokal aus root
    {
      root: dirname(dirname(__dirname)),
      dist: join(dirname(dirname(__dirname)), 'jonasmars', 'dist'),
      context: 'local-root'
    }
  ];
  
  // Prüfe welcher Pfad existiert
  for (const path of possiblePaths) {
    console.log(`🔍 Checking ${path.context}: ${path.dist}`);
    if (existsSync(path.dist)) {
      console.log(`✅ Found dist directory in ${path.context} mode`);
      return path;
    }
  }
  
  // Fallback: Erstelle dist im aktuellen Verzeichnis
  const fallback = {
    root: process.cwd(),
    dist: join(process.cwd(), 'dist'),
    context: 'fallback'
  };
  
  console.warn(`⚠️  No existing dist found, using fallback: ${fallback.dist}`);
  mkdirSync(fallback.dist, { recursive: true });
  return fallback;
}

// Ermittle Pfade
const paths = detectProjectRoot();
const rootDir = paths.root;
const distDir = paths.dist;

console.log(`
📂 Path Configuration:
   Root: ${rootDir}
   Dist: ${distDir}
   Context: ${paths.context}
   CWD: ${process.cwd()}
`);

// =====================================
// Route Konfiguration
// =====================================
const ROUTES_CONFIG = {
  critical: [
    '/',
    '/contact', 
    '/pricing',
    '/academy',
  ],
  
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
  
  industries: [
    '/branchen/gesundheitswesen',
    '/branchen/finanzdienstleister',
    '/branchen/saas-unternehmen',
    '/branchen/e-commerce',
    '/branchen/automotive',
  ],
  
  knowledge: [
    '/wissen/dsgvo',
    '/wissen/compliance-frameworks',
    '/wissen/leitfaden/dsgvo-grundlagen',
    '/wissen/leitfaden/dsgvo-30-tage',
    '/wissen/leitfaden/betroffenenrechte',
  ],
  
  tools: [
    '/tools/compliance-ai-assistant',
    '/tools/cookie-management',
    '/assessment-center/dsgvo-compliance-checklist',
    '/assessment-center/ai-risk-assessment',
  ],
  
  exclude: [
    '/dashboard',
    '/app',
    '/auth',
    '/api',
    '/admin'
  ]
};

// =====================================
// Konfiguration
// =====================================
const CONFIG = {
  BATCH_SIZE: process.env.SSG_BATCH_SIZE ? parseInt(process.env.SSG_BATCH_SIZE) : 5,
  MAX_WORKERS: process.env.SSG_MAX_WORKERS ? parseInt(process.env.SSG_MAX_WORKERS) : 3,
  TIMEOUT: 15000,
  RETRY_ATTEMPTS: 2,
  RETRY_DELAY: 1000,
  // Vite Preview läuft standardmäßig auf 4173
  PORT: process.env.SSG_PORT ? parseInt(process.env.SSG_PORT) : 4173,
  WARMUP_TIME: 2000,
  MODE: process.env.SSG_MODE || 'critical',
  VERBOSE: process.env.SSG_VERBOSE === 'true',
  BUILD_MARKER: 'data-ssg-build="true"',
  WAIT_STRATEGY: 'domcontentloaded'
};

// =====================================
// Haupt-Prerender-Funktion
// =====================================
async function prerenderRoute(page, route, baseUrl, attemptNum = 1) {
  const startTime = performance.now();
  
  try {
    const url = `${baseUrl}${route}`;
    
    if (CONFIG.VERBOSE) {
      console.log(`  📄 Processing ${url} (attempt ${attemptNum})`);
    }
    
    // Navigiere zur Seite
    const response = await page.goto(url, {
      waitUntil: CONFIG.WAIT_STRATEGY,
      timeout: CONFIG.TIMEOUT
    });
    
    // Prüfe Response
    if (!response || (!response.ok() && response.status() !== 304)) {
      throw new Error(`HTTP ${response?.status() || 'unknown'}`);
    }
    
    // Warte NICHT auf visibility, da root hidden sein kann
    // Warte nur darauf dass Content geladen ist
    try {
      await page.waitForFunction(() => {
        const root = document.querySelector('#root');
        // Check ob Content vorhanden ist (egal ob hidden oder visible)
        return root && (root.children.length > 0 || root.textContent.length > 10);
      }, { timeout: 3000 });
    } catch (e) {
      console.warn(`  ⚠️  Timeout waiting for content on ${route}, continuing anyway`);
    }
    
    // Extra Zeit für Lazy Loading
    await page.waitForTimeout(1000);
    
    // Hole HTML
    let html = await page.content();
    
    // Validierung
    if (!validateHtml(html, route)) {
      throw new Error('HTML validation failed');
    }
    
    // Optimiere HTML
    html = await optimizeHtml(html, route, page);
    
    // Speichere HTML
    const outputPath = getOutputPath(route);
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html);
    
    const duration = performance.now() - startTime;
    console.log(`  ✅ ${route} (${duration.toFixed(0)}ms, ${(html.length / 1024).toFixed(1)}kb)`);
    
    return { success: true, route, duration };
    
  } catch (error) {
    const duration = performance.now() - startTime;
    
    if (attemptNum < CONFIG.RETRY_ATTEMPTS) {
      if (CONFIG.VERBOSE) {
        console.log(`  🔄 Retry ${attemptNum}/${CONFIG.RETRY_ATTEMPTS} for ${route}`);
      }
      await page.waitForTimeout(CONFIG.RETRY_DELAY * attemptNum);
      return prerenderRoute(page, route, baseUrl, attemptNum + 1);
    }
    
    console.error(`  ❌ ${route} failed: ${error.message}`);
    return { success: false, route, duration, error: error.message };
  }
}

// =====================================
// HTML Validierung
// =====================================
function validateHtml(html, route) {
  if (!html || html.length < 500) {
    console.warn(`  ⚠️  HTML too short on ${route}: ${html?.length || 0} bytes`);
    return false;
  }
  
  if (!html.includes('<!DOCTYPE html>') && !html.includes('<!doctype html>')) {
    console.warn(`  ⚠️  Missing DOCTYPE on ${route}`);
    return false;
  }
  
  if (!html.includes('<title>') && !html.includes('<title ')) {
    console.warn(`  ⚠️  Missing title tag on ${route}`);
    return false;
  }
  
  // Prüfe ob React Root existiert
  if (!html.includes('id="root"')) {
    console.warn(`  ⚠️  Missing root element on ${route}`);
    return false;
  }
  
  return true;
}

// =====================================
// HTML Optimierung mit SEO
// =====================================
async function optimizeHtml(html, route, page) {
  const buildInfo = {
    timestamp: new Date().toISOString(),
    route: route,
    version: process.env.BUILD_VERSION || '1.0.0'
  };
  
  // Markiere als SSG-generiert
  html = html.replace(
    '<html',
    `<html ${CONFIG.BUILD_MARKER} data-build='${JSON.stringify(buildInfo)}'`
  );
  
  // Füge Hydration-Script hinzu
  const hydrationScript = `
    <script id="ssr-hydration">
      window.__SSG__ = {
        route: '${route}',
        buildTime: '${buildInfo.timestamp}',
        hydrated: false
      };
      
      // Hydration Error Handler
      const originalError = window.onerror;
      window.onerror = function(msg, source, lineno, colno, error) {
        if (msg && msg.toString().includes('hydration')) {
          console.warn('[SSG] Hydration mismatch, recovering...');
          window.__SSG__.hydrationError = true;
          return true;
        }
        return originalError ? originalError(msg, source, lineno, colno, error) : false;
      };
    </script>
  `;
  
  html = html.replace('</head>', hydrationScript + '</head>');
  
  // SEO-Optimierungen
  const preloads = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://marsstein.com">
  `;
  
  html = html.replace('</head>', preloads + '</head>');
  
  return html;
}

// =====================================
// Output Path Helper
// =====================================
function getOutputPath(route) {
  if (route === '/') {
    return join(distDir, 'index.html');
  }
  
  const cleanPath = route.replace(/^\//, '').replace(/\/$/, '');
  return join(distDir, cleanPath, 'index.html');
}

// =====================================
// SEO Files generieren
// =====================================
function generateSEOFiles(results) {
  // 1. Sitemap
  const sitemapEntries = results
    .filter(r => r.success)
    .map(r => {
      const priority = r.route === '/' ? '1.0' : 
                      r.route.includes('/dsgvo') || r.route.includes('/iso') ? '0.9' : '0.8';
      const changefreq = r.route === '/' ? 'daily' : 'weekly';
      
      return `  <url>
    <loc>https://marsstein.com${r.route}</loc>
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
# SPA Routes
/dashboard/*    /index.html    200
/app/*          /index.html    200
/auth/*         /index.html    200

# Legacy Redirects
/compliance/dsgvo    /dsgvo    301

# Default fallback
/*    /index.html    200
`;
  
  writeFileSync(join(distDir, '_redirects'), redirects.trim());
  console.log('  ✅ _redirects created');
  
  // 3. robots.txt
  const robots = `
User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /app/
Disallow: /auth/
Disallow: /api/

Sitemap: https://marsstein.com/sitemap.xml
`;
  
  writeFileSync(join(distDir, 'robots.txt'), robots.trim());
  console.log('  ✅ robots.txt created');
}

// =====================================
// Server Management
// =====================================
async function startPreviewServer() {
  console.log('🚀 Starting Vite preview server...');
  
  // Auf Netlify startet der Build-Prozess bereits einen Server
  // Wir müssen nur den richtigen Port finden
  const ports = [CONFIG.PORT, 4173, 5173];
  
  for (const port of ports) {
    try {
      const response = await fetch(`http://localhost:${port}`);
      if (response.ok || response.status === 404) {
        console.log(`✅ Server found on port ${port}`);
        CONFIG.PORT = port; // Update config mit richtigem Port
        return `http://localhost:${port}`;
      }
    } catch (e) {
      // Versuche nächsten Port
    }
  }
  
  // Fallback: Starte eigenen Server
  try {
    console.log(`Starting new server on port ${CONFIG.PORT}...`);
    execSync(`npx vite preview --port ${CONFIG.PORT} --host > /dev/null 2>&1 &`, {
      cwd: process.cwd(),
      stdio: 'ignore'
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(`✅ Server started on http://localhost:${CONFIG.PORT}`);
    return `http://localhost:${CONFIG.PORT}`;
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    throw error;
  }
}

// =====================================
// Main Execution
// =====================================
async function main() {
  console.log('🚀 Starting Optimized Playwright SSG for Marsstein\n');
  console.log('📋 Configuration:');
  console.log(`  • Mode: ${CONFIG.MODE}`);
  console.log(`  • Batch Size: ${CONFIG.BATCH_SIZE}`);
  console.log(`  • Max Workers: ${CONFIG.MAX_WORKERS}`);
  console.log(`  • Timeout: ${CONFIG.TIMEOUT}ms`);
  console.log(`  • Retry Attempts: ${CONFIG.RETRY_ATTEMPTS}\n`);
  
  // Sammle alle Routes basierend auf Modus
  let routes = [];
  switch (CONFIG.MODE) {
    case 'critical':
      routes = [...ROUTES_CONFIG.critical, ...ROUTES_CONFIG.compliance];
      break;
    case 'extended':
      routes = [
        ...ROUTES_CONFIG.critical,
        ...ROUTES_CONFIG.compliance,
        ...ROUTES_CONFIG.industries,
        ...ROUTES_CONFIG.knowledge
      ];
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
    default:
      routes = ROUTES_CONFIG.critical;
  }
  
  console.log(`📄 Prerendering ${routes.length} routes in ${CONFIG.MODE} mode\n`);
  
  // Starte Server
  const baseUrl = await startPreviewServer();
  
  // Warte kurz
  console.log(`⏳ Warming up server (${CONFIG.WARMUP_TIME}ms)...`);
  await new Promise(resolve => setTimeout(resolve, CONFIG.WARMUP_TIME));
  
  // Starte Browser
  console.log('🌐 Launching Playwright browser...\n');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (compatible; Marsstein-SSG-Bot/1.0)'
  });
  
  // Prerender alle Routes
  console.log('🔄 Starting batch processing...\n');
  const results = [];
  const startTime = performance.now();
  
  // Batch Processing
  for (let i = 0; i < routes.length; i += CONFIG.BATCH_SIZE) {
    const batch = routes.slice(i, i + CONFIG.BATCH_SIZE);
    const batchNum = Math.floor(i / CONFIG.BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(routes.length / CONFIG.BATCH_SIZE);
    
    console.log(`\n📦 Batch ${batchNum}/${totalBatches}:`);
    
    // Parallel processing innerhalb des Batches
    const batchPromises = batch.map(async route => {
      const page = await context.newPage();
      const result = await prerenderRoute(page, route, baseUrl);
      await page.close();
      return result;
    });
    
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
  }
  
  // Cleanup
  await browser.close();
  
  // Generiere SEO Files
  console.log('\n📝 Generating SEO files...');
  generateSEOFiles(results);
  
  // Report
  const totalTime = performance.now() - startTime;
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log('\n' + '='.repeat(50));
  console.log('✨ Prerendering Complete!');
  console.log('='.repeat(50));
  console.log(`Total Time: ${(totalTime / 1000).toFixed(1)}s`);
  console.log(`Successful: ${successful}/${routes.length}`);
  
  if (failed > 0) {
    console.log(`Failed: ${failed}`);
    const failedRoutes = results.filter(r => !r.success);
    failedRoutes.forEach(r => {
      console.log(`  ❌ ${r.route}: ${r.error}`);
    });
  }
  
  // Build Report
  const report = {
    timestamp: new Date().toISOString(),
    mode: CONFIG.MODE,
    duration: totalTime,
    routes: {
      total: routes.length,
      successful,
      failed
    },
    details: results
  };
  
  writeFileSync(
    join(distDir, '_build-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  // Exit Code basierend auf Fehlerrate
  const errorRate = failed / routes.length;
  if (errorRate > 0.2) {
    console.error('\n❌ Build failed: Too many errors (>20%)');
    process.exit(1);
  }
  
  process.exit(0);
}

// Error Handler
process.on('unhandledRejection', (error) => {
  console.error('💥 Unhandled error:', error);
  process.exit(1);
});

// Führe aus
main().catch(error => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});