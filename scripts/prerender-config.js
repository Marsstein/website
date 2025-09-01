/**
 * Prerender Configuration
 * Definiert welche Routen pregerendert werden sollen
 */

export const prerenderConfig = {
  // Routen die NICHT pregerendert werden sollen
  excludePatterns: [
    '/dashboard',
    '/dashboard-page',
    '/thank-you',
    '/test*', // Alle Test-Routen
    '/tools/dsgvo-email-generator',
    '/tools/compliance-scorecard', 
    '/tools/compliance-ai-assistant',
    '/assessment-center/*'
  ],

  // Spezielle Routen die trotz exclude pattern pregerendert werden sollen
  includeOverrides: [],

  // Performance Einstellungen
  parallel: 5, // Anzahl paralleler Puppeteer Instanzen
  timeout: 30000, // Timeout pro Seite in ms
  retries: 2, // Anzahl Wiederholungen bei Fehler

  // Puppeteer Einstellungen
  puppeteer: {
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  },

  // Preview Server Einstellungen
  previewServer: {
    port: 4173,
    host: 'localhost',
    startupDelay: 5000 // Wartezeit bis Server bereit ist
  },

  // Output Einstellungen
  output: {
    dir: 'dist',
    cleanUrls: true, // /about statt /about.html
    sitemap: true, // Generiere sitemap.xml
    robots: true // Generiere robots.txt
  },

  // SEO Einstellungen
  seo: {
    defaultMeta: {
      viewport: 'width=device-width, initial-scale=1',
      author: 'Marsstein',
      robots: 'index, follow'
    },
    sitemap: {
      hostname: 'https://marsstein.ai',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: true
    }
  },

  // Monitoring & Logging
  monitoring: {
    logLevel: 'info', // error, warn, info, debug
    logFile: 'prerender.log',
    metrics: true, // Zeitmessungen
    errorReport: true // Fehler-Zusammenfassung am Ende
  }
};

// Route Kategorien für unterschiedliche Prioritäten
export const routeCategories = {
  critical: {
    priority: 1.0,
    changefreq: 'weekly',
    routes: [
      '/',
      '/pricing',
      '/contact',
      '/compliance/dsgvo',
      '/wissen'
    ]
  },
  important: {
    priority: 0.8,
    changefreq: 'weekly',
    routes: [
      '/wissen/rechtsprechung/*',
      '/compliance/*',
      '/wissen/dsgvo/*',
      '/industries/*'
    ]
  },
  standard: {
    priority: 0.6,
    changefreq: 'monthly',
    routes: [
      '/wissen/branchen/*',
      '/ki-datenschutz/*',
      '/tools/*',
      '/resources/*'
    ]
  },
  low: {
    priority: 0.4,
    changefreq: 'monthly',
    routes: [
      '/impressum',
      '/datenschutz',
      '/about'
    ]
  }
};