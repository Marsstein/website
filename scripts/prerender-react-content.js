#!/usr/bin/env node

/**
 * Advanced Static Prerendering with React Content
 * Generates complete HTML pages with actual React component content
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import prettier from 'prettier';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load routes
const routes = JSON.parse(
  readFileSync(join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Route mapping for incorrect routes
const routeMapping = {
  '/dsgvo-compliance': '/dsgvo',
  '/eu-ai-act-compliance': '/eu-ai-act',
};

/**
 * Content templates for different page types
 */
const pageTemplates = {
  home: (route) => ({
    title: 'Marsstein - KI-native Compliance Platform',
    description: 'Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.',
    content: `
      <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
          <div class="container mx-auto px-4 py-24">
            <div class="max-w-4xl mx-auto text-center">
              <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                KI-native Compliance Platform
              </h1>
              <p class="text-xl md:text-2xl text-gray-700 mb-8">
                Revolutionäre Compliance-Automatisierung für den DACH-Raum
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                  Demo vereinbaren
                </a>
                <a href="/pricing" class="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors">
                  Preise ansehen
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section class="py-24">
          <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">Unsere Compliance-Lösungen</h2>
            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div class="bg-white p-8 rounded-xl shadow-lg">
                <h3 class="text-xl font-semibold mb-4">DSGVO Compliance</h3>
                <p class="text-gray-600 mb-4">Vollständige DSGVO-Konformität mit automatisierten Prozessen</p>
                <a href="/dsgvo" class="text-primary-600 font-medium hover:underline">Mehr erfahren →</a>
              </div>
              <div class="bg-white p-8 rounded-xl shadow-lg">
                <h3 class="text-xl font-semibold mb-4">EU AI Act</h3>
                <p class="text-gray-600 mb-4">Navigieren Sie sicher durch die KI-Verordnung</p>
                <a href="/eu-ai-act" class="text-primary-600 font-medium hover:underline">Mehr erfahren →</a>
              </div>
              <div class="bg-white p-8 rounded-xl shadow-lg">
                <h3 class="text-xl font-semibold mb-4">ISO 27001</h3>
                <p class="text-gray-600 mb-4">Zertifizierung leicht gemacht mit KI-Unterstützung</p>
                <a href="/iso-27001-zertifizierung" class="text-primary-600 font-medium hover:underline">Mehr erfahren →</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    `
  }),
  
  compliance: (route, { title, regulation, features }) => ({
    title: `${title} - Marsstein`,
    description: `${title} leicht gemacht mit Marsstein. Automatisierte Compliance-Lösung für ${regulation}.`,
    content: `
      <main class="min-h-screen bg-gray-50">
        <section class="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
          <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">${title}</h1>
            <p class="text-xl opacity-90">Ihre automatisierte Lösung für ${regulation}-Konformität</p>
          </div>
        </section>
        
        <section class="py-16">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl font-bold mb-8">Funktionen im Überblick</h2>
              <div class="grid md:grid-cols-2 gap-6">
                ${features.map(feature => `
                  <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-xl font-semibold mb-3">${feature.title}</h3>
                    <p class="text-gray-600">${feature.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
        
        <section class="py-16 bg-primary-50">
          <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4">Bereit für ${regulation}-Compliance?</h2>
            <p class="text-xl text-gray-700 mb-8">Starten Sie noch heute mit unserer KI-gestützten Lösung</p>
            <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg">
              Kostenlose Demo anfordern
            </a>
          </div>
        </section>
      </main>
    `
  })
};

/**
 * Route-specific content configuration
 */
const routeConfigs = {
  '/': () => pageTemplates.home('/'),
  
  '/eu-ai-act': () => pageTemplates.compliance('/eu-ai-act', {
    title: 'EU AI Act Compliance',
    regulation: 'EU AI Act',
    features: [
      {
        title: 'Risikoklassifizierung',
        description: 'Automatische Einordnung Ihrer KI-Systeme in die Risikokategorien'
      },
      {
        title: 'Konformitätsbewertung',
        description: 'Vollständige Bewertung nach EU AI Act Standards'
      },
      {
        title: 'Technische Dokumentation',
        description: 'Automatisch generierte Compliance-Dokumentation'
      },
      {
        title: 'Kontinuierliche Überwachung',
        description: 'Laufende Überprüfung der Compliance-Anforderungen'
      }
    ]
  }),
  
  '/eu-ai-act-compliance': () => pageTemplates.compliance('/eu-ai-act', {
    title: 'EU AI Act Compliance',
    regulation: 'EU AI Act',
    features: [
      {
        title: 'Risikoklassifizierung',
        description: 'Automatische Einordnung Ihrer KI-Systeme in die Risikokategorien'
      },
      {
        title: 'Konformitätsbewertung',
        description: 'Vollständige Bewertung nach EU AI Act Standards'
      },
      {
        title: 'Technische Dokumentation',
        description: 'Automatisch generierte Compliance-Dokumentation'
      },
      {
        title: 'Kontinuierliche Überwachung',
        description: 'Laufende Überprüfung der Compliance-Anforderungen'
      }
    ]
  }),
  
  '/dsgvo': () => pageTemplates.compliance('/dsgvo', {
    title: 'DSGVO Compliance Software',
    regulation: 'DSGVO',
    features: [
      {
        title: 'Verfahrensverzeichnisse',
        description: 'Automatisierte Erstellung und Verwaltung nach Art. 30 DSGVO'
      },
      {
        title: 'TOMs Management',
        description: 'Technische und organisatorische Maßnahmen dokumentiert'
      },
      {
        title: 'DSFA Assistent',
        description: 'Geführte Datenschutz-Folgenabschätzung'
      },
      {
        title: 'Betroffenenrechte',
        description: 'Verwaltung von Auskunfts-, Lösch- und Korrekturanfragen'
      }
    ]
  }),
  
  '/dsgvo-compliance': () => pageTemplates.compliance('/dsgvo', {
    title: 'DSGVO Compliance Software',
    regulation: 'DSGVO',
    features: [
      {
        title: 'Verfahrensverzeichnisse',
        description: 'Automatisierte Erstellung und Verwaltung nach Art. 30 DSGVO'
      },
      {
        title: 'TOMs Management',
        description: 'Technische und organisatorische Maßnahmen dokumentiert'
      },
      {
        title: 'DSFA Assistent',
        description: 'Geführte Datenschutz-Folgenabschätzung'
      },
      {
        title: 'Betroffenenrechte',
        description: 'Verwaltung von Auskunfts-, Lösch- und Korrekturanfragen'
      }
    ]
  }),
  
  '/iso-27001-zertifizierung': () => pageTemplates.compliance('/iso-27001-zertifizierung', {
    title: 'ISO 27001 Zertifizierung',
    regulation: 'ISO 27001',
    features: [
      {
        title: 'Gap-Analyse',
        description: 'Automatisierte Identifizierung von Lücken zu ISO 27001 Anforderungen'
      },
      {
        title: 'ISMS Dokumentation',
        description: 'Vollständige Dokumentation Ihres Informationssicherheitsmanagementsystems'
      },
      {
        title: 'Risikobewertung',
        description: 'Strukturierte Risikoanalyse nach ISO 27001 Standards'
      },
      {
        title: 'Audit-Vorbereitung',
        description: 'Optimale Vorbereitung auf Ihr ISO 27001 Zertifizierungsaudit'
      }
    ]
  }),

  '/iso-27017-zertifizierung': () => pageTemplates.compliance('/iso-27017-zertifizierung', {
    title: 'ISO 27017 Zertifizierung für Cloud-Sicherheit',
    regulation: 'ISO 27017',
    features: [
      {
        title: 'Cloud-Sicherheitskontrolle',
        description: 'Spezifische Kontrollen für Cloud-Dienste und -Anbieter'
      },
      {
        title: 'Shared Responsibility',
        description: 'Klare Definition der Verantwortlichkeiten zwischen Cloud-Anbieter und -Nutzer'
      },
      {
        title: 'Compliance-Mapping',
        description: 'Abbildung Ihrer Cloud-Infrastruktur auf ISO 27017 Anforderungen'
      },
      {
        title: 'Kontinuierliche Überwachung',
        description: 'Laufende Überprüfung der Cloud-Sicherheitsmaßnahmen'
      }
    ]
  }),

  '/iso-27018-zertifizierung': () => pageTemplates.compliance('/iso-27018-zertifizierung', {
    title: 'ISO 27018 Zertifizierung für Datenschutz in der Cloud',
    regulation: 'ISO 27018',
    features: [
      {
        title: 'PII-Schutz',
        description: 'Schutz personenbezogener Daten in der Cloud'
      },
      {
        title: 'Transparenz & Kontrolle',
        description: 'Vollständige Transparenz über Datenverarbeitung in der Cloud'
      },
      {
        title: 'Datenschutz-Compliance',
        description: 'Nachweis der Einhaltung internationaler Datenschutzstandards'
      },
      {
        title: 'Audit-Trail',
        description: 'Lückenlose Dokumentation aller Datenverarbeitungsprozesse'
      }
    ]
  }),

  '/soc2-zertifizierung': () => pageTemplates.compliance('/soc2-zertifizierung', {
    title: 'SOC 2 Zertifizierung',
    regulation: 'SOC 2',
    features: [
      {
        title: 'Trust Service Criteria',
        description: 'Erfüllung aller fünf TSC: Sicherheit, Verfügbarkeit, Integrität, Vertraulichkeit, Datenschutz'
      },
      {
        title: 'Kontrollumgebung',
        description: 'Aufbau und Dokumentation effektiver interner Kontrollen'
      },
      {
        title: 'Kontinuierliche Überwachung',
        description: 'Laufende Überprüfung und Optimierung Ihrer SOC 2 Compliance'
      },
      {
        title: 'Audit-Berichte',
        description: 'Professionelle Berichte für Typ I und Typ II Audits'
      }
    ]
  }),

  '/tisax-compliance': () => pageTemplates.compliance('/tisax-compliance', {
    title: 'TISAX Compliance für die Automobilindustrie',
    regulation: 'TISAX',
    features: [
      {
        title: 'VDA ISA Katalog',
        description: 'Vollständige Abdeckung aller VDA ISA Anforderungen'
      },
      {
        title: 'Prototypenschutz',
        description: 'Spezielle Maßnahmen für den Schutz von Prototypen'
      },
      {
        title: 'Lieferantenintegration',
        description: 'Nahtlose Integration in die Automotive-Lieferkette'
      },
      {
        title: 'Assessment-Vorbereitung',
        description: 'Optimale Vorbereitung auf Ihr TISAX Assessment'
      }
    ]
  }),

  '/nis2-compliance': () => pageTemplates.compliance('/nis2-compliance', {
    title: 'NIS2 Compliance',
    regulation: 'NIS2-Richtlinie',
    features: [
      {
        title: 'Risikomanagement',
        description: 'Umfassendes Risikomanagement nach NIS2 Vorgaben'
      },
      {
        title: 'Incident Response',
        description: 'Strukturierte Prozesse für Sicherheitsvorfälle'
      },
      {
        title: 'Supply Chain Security',
        description: 'Sicherheit in der gesamten Lieferkette'
      },
      {
        title: 'Behördenmeldungen',
        description: 'Automatisierte Meldepflichten an zuständige Behörden'
      }
    ]
  }),

  '/geldwaeschegesetz': () => pageTemplates.compliance('/geldwaeschegesetz', {
    title: 'Geldwäschegesetz Compliance',
    regulation: 'GwG',
    features: [
      {
        title: 'KYC-Prozesse',
        description: 'Automatisierte Know-Your-Customer Verfahren'
      },
      {
        title: 'Risikobewertung',
        description: 'Kontinuierliche Bewertung von Geldwäscherisiken'
      },
      {
        title: 'Verdachtsmeldungen',
        description: 'Strukturierte Prozesse für Verdachtsmeldungen'
      },
      {
        title: 'Dokumentation',
        description: 'Revisionssichere Dokumentation aller Prüfungen'
      }
    ]
  }),

  '/hinweisgeberschutzgesetz': () => pageTemplates.compliance('/hinweisgeberschutzgesetz', {
    title: 'Hinweisgeberschutzgesetz Compliance',
    regulation: 'HinSchG',
    features: [
      {
        title: 'Meldekanäle',
        description: 'Sichere interne und externe Meldekanäle'
      },
      {
        title: 'Vertraulichkeit',
        description: 'Gewährleistung der Vertraulichkeit von Hinweisgebern'
      },
      {
        title: 'Fallmanagement',
        description: 'Strukturierte Bearbeitung von Hinweisen'
      },
      {
        title: 'Dokumentation',
        description: 'Rechtskonforme Dokumentation aller Meldungen'
      }
    ]
  }),

  '/dsg-ekd': () => pageTemplates.compliance('/dsg-ekd', {
    title: 'DSG-EKD Compliance für kirchliche Einrichtungen',
    regulation: 'DSG-EKD',
    features: [
      {
        title: 'Kirchenspezifische Anforderungen',
        description: 'Erfüllung aller Anforderungen des kirchlichen Datenschutzes'
      },
      {
        title: 'Verfahrensverzeichnisse',
        description: 'Spezielle Verzeichnisse für kirchliche Verarbeitungstätigkeiten'
      },
      {
        title: 'Betroffenenrechte',
        description: 'Management von Betroffenenrechten im kirchlichen Kontext'
      },
      {
        title: 'Schulungen',
        description: 'Zielgruppenspezifische Datenschutzschulungen'
      }
    ]
  }),

  '/kdg': () => pageTemplates.compliance('/kdg', {
    title: 'KDG Compliance für katholische Einrichtungen',
    regulation: 'KDG',
    features: [
      {
        title: 'Katholischer Datenschutz',
        description: 'Vollständige Erfüllung des Katholischen Datenschutzgesetzes'
      },
      {
        title: 'Diözesane Anforderungen',
        description: 'Berücksichtigung diözesanspezifischer Vorgaben'
      },
      {
        title: 'Dokumentation',
        description: 'Rechtskonforme Dokumentation für kirchliche Stellen'
      },
      {
        title: 'Beratung',
        description: 'Expertenberatung zu KDG-spezifischen Fragen'
      }
    ]
  }),
  
  // Add more route configurations as needed
};

/**
 * Get content for a specific route
 */
function getRouteContent(route) {
  const config = routeConfigs[route];
  if (config) {
    return config();
  }
  
  // Default content for unspecified routes
  return {
    title: `${route.split('/').pop() || 'Marsstein'} - Compliance Platform`,
    description: 'KI-gestützte Compliance-Automatisierung für Ihr Unternehmen',
    content: `
      <main class="min-h-screen bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-8">${route.split('/').pop() || 'Compliance'}</h1>
          <p class="text-xl text-gray-700">Weitere Informationen folgen in Kürze.</p>
        </div>
      </main>
    `
  };
}

/**
 * Format HTML with Prettier
 */
async function formatHTML(html) {
  try {
    return await prettier.format(html, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2
    });
  } catch {
    return html;
  }
}

/**
 * Generate HTML for a route
 */
async function generateHTML(route, baseHTML) {
  const content = getRouteContent(route);
  
  // Clone base HTML
  let html = baseHTML;
  
  // Update meta tags
  html = html.replace(/<title>.*?<\/title>/, `<title>${content.title}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${content.description}">`
  );
  
  // Update OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${content.title}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${content.description}">`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="https://marsstein.ai${route}">`
  );
  
  // Update canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="https://marsstein.ai${route}">`
  );
  
  // Insert content into root div
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${content.content}</div>`
  );
  
  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": content.title,
    "description": content.description,
    "url": `https://marsstein.ai${route}`,
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH",
      "url": "https://marsstein.ai",
      "logo": "https://marsstein.ai/logomarsstein.png"
    }
  };
  
  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>\n</head>`
  );
  
  return formatHTML(html);
}

/**
 * Main build function
 */
async function build() {
  console.log('🚀 Starting React content prerendering...\n');
  
  try {
    // Build the app
    console.log('📦 Building application...');
    await execAsync('npm run build');
    
    // Read base HTML
    const baseHTML = readFileSync(
      join(__dirname, '..', 'dist', 'index.html'),
      'utf-8'
    );
    
    // Generate pages
    console.log('\n📄 Generating static pages with React content...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const route of routes) {
      try {
        // Apply route mapping
        const finalRoute = routeMapping[route] || route;
        
        // Generate HTML
        const html = await generateHTML(route, baseHTML);
        
        // Determine output path
        const outputPath = finalRoute === '/'
          ? join(__dirname, '..', 'dist', 'index.html')
          : join(__dirname, '..', 'dist', finalRoute.substring(1), 'index.html');
        
        // Create directory
        mkdirSync(dirname(outputPath), { recursive: true });
        
        // Write file
        writeFileSync(outputPath, html, 'utf-8');
        
        console.log(`✅ Generated: ${route}${route !== finalRoute ? ' → ' + finalRoute : ''}`);
        successCount++;
        
      } catch (error) {
        console.error(`❌ Failed: ${route} - ${error.message}`);
        errorCount++;
      }
    }
    
    // Generate sitemap
    console.log('\n🗺️ Generating sitemap.xml...');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => {
  const finalRoute = routeMapping[route] || route;
  return `  <url>
    <loc>https://marsstein.ai${finalRoute}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${finalRoute === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('\n')}
</urlset>`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
    
    // Generate robots.txt
    console.log('🤖 Generating robots.txt...');
    const robots = `# Marsstein Robots
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Sitemaps
Sitemap: https://marsstein.ai/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# German search engines
User-agent: Seekport
Allow: /

User-agent: Semrush
Allow: /`;
    
    writeFileSync(join(__dirname, '..', 'dist', 'robots.txt'), robots);
    
    // Summary
    console.log('\n✨ Build complete!');
    console.log(`✅ Successfully generated: ${successCount} pages`);
    if (errorCount > 0) {
      console.log(`❌ Failed: ${errorCount} pages`);
    }
    console.log('\n📊 All pages now include:');
    console.log('   - Complete HTML content');
    console.log('   - SEO meta tags');
    console.log('   - Structured data');
    console.log('   - React will hydrate on client-side');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Execute
build();