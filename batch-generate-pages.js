#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguration aller zu erstellenden Seiten
const PAGES_CONFIG = {
  compliance: [
    {
      route: '/dsgvo',
      sourceFile: 'src/pages/compliance/DSGVO.tsx',
      title: 'DSGVO-Compliance für Ihr Unternehmen',
      description: 'DSGVO/GDPR konforme Datenschutzlösungen. KI-gestützte Compliance in 30 Tagen. Rechtssicher und automatisiert.',
    },
    {
      route: '/nis2',
      sourceFile: 'src/pages/compliance/NIS2.tsx',
      title: 'NIS2-Richtlinie Compliance & Cybersecurity',
      description: 'NIS2 Directive Compliance für kritische Infrastrukturen. Cybersecurity-Anforderungen erfüllen. Jetzt vorbereiten!',
    },
    {
      route: '/eu-ai-act',
      sourceFile: 'src/pages/compliance/EUAIAct.tsx',
      title: 'EU AI Act Compliance für KI-Systeme',
      description: 'EU AI Act konforme KI-Entwicklung. Risikobewertung, Compliance-Strategien und Zertifizierung. Expertenberatung.',
    },
    {
      route: '/hinweisgeberschutzgesetz',
      sourceFile: 'src/pages/compliance/Hinweisgeberschutz.tsx',
      title: 'Hinweisgeberschutzgesetz umsetzen',
      description: 'Whistleblower-System nach HinSchG einrichten. Compliance-konform in 14 Tagen. Rechtssicher und anonym.',
    },
    {
      route: '/geldwaeschegesetz',
      sourceFile: 'src/pages/compliance/Geldwaesche.tsx',
      title: 'Geldwäschegesetz (GwG) Compliance',
      description: 'Anti-Money-Laundering Compliance nach GwG. KYC-Prozesse, Risikomanagement und Verdachtsmeldungen automatisiert.',
    },
    {
      route: '/dsg-ekd',
      sourceFile: 'src/pages/compliance/DSGEKD.tsx',
      title: 'DSG-EKD Datenschutz für kirchliche Einrichtungen',
      description: 'Datenschutzgesetz der Evangelischen Kirche umsetzen. DSG-EKD konforme Lösungen für kirchliche Träger.',
    },
    {
      route: '/kdg',
      sourceFile: 'src/pages/compliance/KDG.tsx',
      title: 'KDG - Kirchliches Datenschutzgesetz',
      description: 'Katholisches Datenschutzgesetz (KDG) umsetzen. Compliance für katholische Einrichtungen. Jetzt beraten lassen.',
    },
    {
      route: '/lieferkettensorgfaltspflicht',
      sourceFile: 'src/pages/compliance/Lieferkette.tsx',
      title: 'Lieferkettensorgfaltspflichtengesetz (LkSG)',
      description: 'Supply Chain Due Diligence nach LkSG. Risikomanagement und Berichterstattung für Ihre Lieferkette.',
    }
  ],
  
  main: [
    {
      route: '/',
      sourceFile: 'src/pages/index.tsx',
      title: 'Marsstein - KI-gestützte Compliance Automatisierung',
      description: 'Compliance-Automatisierung mit KI. ISO 27001, DSGVO, NIS2 und mehr in Rekordzeit. Kostenlose Beratung starten.',
    },
    {
      route: '/academy',
      sourceFile: 'src/pages/academy/index.tsx',
      title: 'Marsstein Academy - Compliance Schulungen',
      description: 'Compliance-Schulungen und Zertifizierungskurse. DSGVO, ISO 27001, NIS2. Online und praxisnah. Jetzt anmelden!',
    },
    {
      route: '/contact',
      sourceFile: 'src/pages/contact.tsx',
      title: 'Kontakt - Marsstein GmbH',
      description: 'Kontaktieren Sie Marsstein für Compliance-Beratung. Kostenlose Erstberatung. Experten für DSGVO, ISO 27001 und mehr.',
    },
    {
      route: '/dashboard',
      sourceFile: 'src/pages/dashboard/index.tsx',
      title: 'Compliance Dashboard - Marsstein',
      description: 'Ihr zentrales Compliance-Dashboard. Alle Zertifizierungen, Audits und Maßnahmen im Überblick. Jetzt einloggen.',
    },
    {
      route: '/pricing',
      sourceFile: 'src/pages/pricing.tsx',
      title: 'Preise - Transparente Compliance-Pakete',
      description: 'Faire Preise für Compliance-Automatisierung. ISO 27001 ab 999€/Monat. Keine versteckten Kosten. Jetzt Angebot anfordern.',
    },
    {
      route: '/thank-you',
      sourceFile: 'src/pages/thank-you.tsx',
      title: 'Vielen Dank - Marsstein',
      description: 'Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    }
  ],
  
  'assessment-center': [
    {
      route: '/assessment-center',
      sourceFile: 'src/pages/assessment-center/index.tsx',
      title: 'Compliance Assessment Center',
      description: 'Kostenlose Compliance-Assessments. DSGVO, ISO 27001, NIS2 Readiness prüfen. In 15 Minuten zum Ergebnis.',
    },
    {
      route: '/assessment-center/ai-governance-check',
      sourceFile: 'src/pages/assessment-center/AIGovernance.tsx',
      title: 'AI Governance Check - KI-Compliance prüfen',
      description: 'KI-Governance Assessment. EU AI Act Readiness prüfen. Risiken identifizieren. Kostenlos in 10 Minuten.',
    },
    // ... weitere Assessment-Center Seiten
  ],
  
  tools: [
    {
      route: '/tools',
      sourceFile: 'src/pages/tools/index.tsx',
      title: 'Compliance Tools & Automatisierung',
      description: 'KI-gestützte Compliance-Tools. DSGVO-Generator, Cookie-Management und mehr. Kostenlos testen.',
    },
    {
      route: '/tools/compliance-ai-assistant',
      sourceFile: 'src/pages/tools/ComplianceAI.tsx',
      title: 'Compliance AI Assistant - Ihr KI-Berater',
      description: 'KI-gestützter Compliance-Assistent. Fragen zu DSGVO, ISO 27001 und mehr. 24/7 verfügbar. Jetzt fragen!',
    },
    // ... weitere Tools
  ],
  
  wissen: [
    {
      route: '/wissen',
      sourceFile: 'src/pages/wissen/index.tsx',
      title: 'Compliance Wissensdatenbank',
      description: 'Umfassende Compliance-Wissensdatenbank. Leitfäden, Checklisten und Best Practices. Kostenlos zugänglich.',
    },
    {
      route: '/wissen/dsgvo',
      sourceFile: 'src/pages/wissen/DSGVO.tsx',
      title: 'DSGVO Grundlagen und Leitfäden',
      description: 'DSGVO/GDPR Grundlagen verständlich erklärt. Artikel 1-99, Bußgelder, Checklisten. Kostenlose Ressourcen.',
    },
    // ... weitere Wissensseiten
  ]
};

// Utility: React/JSX zu HTML konvertieren
function convertJSXToHTML(jsxContent) {
  let html = jsxContent;
  
  // Entferne TypeScript/React imports
  html = html.replace(/^import\s+.*?;?\s*$/gm, '');
  html = html.replace(/^export\s+.*?;?\s*$/gm, '');
  
  // Konvertiere JSX zu HTML
  html = html.replace(/className=/g, 'class=');
  html = html.replace(/htmlFor=/g, 'for=');
  html = html.replace(/\{\/\*.*?\*\/\}/gs, ''); // Remove JSX comments
  html = html.replace(/\{\s*\/\/.*?\}/g, ''); // Remove inline comments
  
  // Entferne React-spezifische Attribute
  html = html.replace(/\s+onClick=\{[^}]+\}/g, '');
  html = html.replace(/\s+onChange=\{[^}]+\}/g, '');
  html = html.replace(/\s+onSubmit=\{[^}]+\}/g, '');
  
  // Ersetze {variablen} mit Platzhaltern oder entferne sie
  html = html.replace(/\{[^{}]+\}/g, (match) => {
    // Behalte wichtige Texte
    if (match.includes('"') || match.includes("'")) {
      return match.replace(/[{}]/g, '');
    }
    return '';
  });
  
  // Entferne selbstschließende Tags die in HTML nicht erlaubt sind
  html = html.replace(/<(\w+)([^>]*?)\/>/g, '<$1$2></$1>');
  
  // Clean up whitespace
  html = html.replace(/\n\s*\n/g, '\n');
  
  return html;
}

// React-Komponente lesen und extrahieren
async function extractReactContent(sourceFile) {
  const fullPath = path.join(process.cwd(), sourceFile);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠️  Datei nicht gefunden: ${sourceFile}`);
    return null;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  
  // Extrahiere den JSX-Content aus der return-Anweisung
  const returnMatch = content.match(/return\s*\(([\s\S]*?)\);?\s*}\s*$/m);
  if (returnMatch) {
    return convertJSXToHTML(returnMatch[1]);
  }
  
  // Alternative: Suche nach export default function
  const functionMatch = content.match(/export\s+default\s+function.*?\{([\s\S]*?)^}/m);
  if (functionMatch) {
    const returnInFunction = functionMatch[1].match(/return\s*\(([\s\S]*?)\);?/);
    if (returnInFunction) {
      return convertJSXToHTML(returnInFunction[1]);
    }
  }
  
  return null;
}

// Generiere ein Modul für eine Seite
async function generatePageModule(pageConfig, category) {
  const { route, sourceFile, title, description } = pageConfig;
  
  console.log(`📄 Generiere: ${route}`);
  
  // Versuche Content aus React-Komponente zu extrahieren
  let content = await extractReactContent(sourceFile);
  
  // Fallback zu Template wenn keine Quelle gefunden
  if (!content) {
    console.log(`   ⚠️  Verwende Template für ${route}`);
    content = generateTemplateContent(title, description);
  }
  
  const moduleContent = `export default {
  route: '${route}',
  title: '${title}',
  description: '${description}',
  content: \`${content}\`
};`;
  
  // Bestimme Dateinamen
  const fileName = route.split('/').pop() || 'index';
  const outputDir = path.join(__dirname, 'content', category);
  const outputFile = path.join(outputDir, `${fileName}.mjs`);
  
  // Erstelle Verzeichnis falls nicht vorhanden
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Schreibe Datei
  fs.writeFileSync(outputFile, moduleContent);
  console.log(`   ✅ Erstellt: ${outputFile}`);
  
  return fileName;
}

// Template-Content für Seiten ohne React-Quelle
function generateTemplateContent(title, description) {
  return `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
                Jetzt starten
              </a>
              <a href="/demo" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A5FF] bg-white rounded-lg hover:bg-gray-100 transition-all">
                Demo ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-[#0B1D2A] mb-6">
              Ihre Compliance-Lösung
            </h2>
            <p class="text-gray-600 mb-8">
              Marsstein bietet Ihnen eine umfassende Lösung für ${title}. 
              Mit unserer KI-gestützten Plattform erreichen Sie Compliance in Rekordzeit.
            </p>
            
            <!-- Features Grid -->
            <div class="grid md:grid-cols-3 gap-8 mt-12">
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="w-12 h-12 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">KI-gestützt</h3>
                <p class="text-gray-600">Automatisierte Compliance-Prozesse mit künstlicher Intelligenz</p>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="w-12 h-12 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Schnell</h3>
                <p class="text-gray-600">Erreichen Sie Compliance in Rekordzeit</p>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="w-12 h-12 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Sicher</h3>
                <p class="text-gray-600">Höchste Sicherheitsstandards und Datenschutz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-[#0B1D2A]">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für ${title}?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit Ihrer Compliance-Transformation
          </p>
          <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0B1D2A] bg-white rounded-lg hover:bg-gray-100 transition-all">
            Kostenlose Beratung
          </a>
        </div>
      </section>
    </main>
  `;
}

// Generiere Index-Datei für eine Kategorie
async function generateCategoryIndex(category, moduleNames) {
  const imports = moduleNames.map(name => 
    `import ${name.replace(/-/g, '_')} from './${name}.mjs';`
  ).join('\n');
  
  const exports = moduleNames.map(name => 
    `  '${name}': ${name.replace(/-/g, '_')}`
  ).join(',\n');
  
  const indexContent = `${imports}

export default {
${exports}
};`;
  
  const indexFile = path.join(__dirname, 'content', category, 'index.mjs');
  fs.writeFileSync(indexFile, indexContent);
  console.log(`📚 Index erstellt: ${indexFile}`);
}

// Hauptfunktion
async function generateAllPages() {
  console.log('🚀 Starte Batch-Generierung aller Seiten...\n');
  
  const stats = {
    total: 0,
    success: 0,
    failed: 0
  };
  
  // Verarbeite jede Kategorie
  for (const [category, pages] of Object.entries(PAGES_CONFIG)) {
    console.log(`\n📁 Kategorie: ${category}`);
    console.log('='.repeat(50));
    
    const moduleNames = [];
    
    for (const pageConfig of pages) {
      try {
        const moduleName = await generatePageModule(pageConfig, category);
        moduleNames.push(moduleName);
        stats.success++;
      } catch (error) {
        console.error(`   ❌ Fehler bei ${pageConfig.route}: ${error.message}`);
        stats.failed++;
      }
      stats.total++;
    }
    
    // Erstelle Index für Kategorie
    if (moduleNames.length > 0) {
      await generateCategoryIndex(category, moduleNames);
    }
  }
  
  // Zusammenfassung
  console.log('\n' + '='.repeat(50));
  console.log('✨ Generierung abgeschlossen!\n');
  console.log(`📊 Statistik:`);
  console.log(`   Gesamt: ${stats.total} Seiten`);
  console.log(`   ✅ Erfolgreich: ${stats.success} Seiten`);
  console.log(`   ❌ Fehlgeschlagen: ${stats.failed} Seiten`);
  
  // Build ausführen
  console.log('\n🔨 Führe Build aus...');
  try {
    execSync('npm run build:modular', { stdio: 'inherit' });
    console.log('✅ Build erfolgreich!');
  } catch (error) {
    console.error('❌ Build fehlgeschlagen:', error.message);
  }
}

// CLI-Optionen
const args = process.argv.slice(2);
if (args.includes('--help')) {
  console.log(`
Batch-Generator für Marsstein Seiten

Verwendung:
  node batch-generate-pages.js [optionen]

Optionen:
  --help        Diese Hilfe anzeigen
  --category    Nur eine bestimmte Kategorie generieren
  --dry-run     Simulation ohne Dateien zu schreiben
  
Beispiele:
  node batch-generate-pages.js
  node batch-generate-pages.js --category compliance
  node batch-generate-pages.js --dry-run
  `);
  process.exit(0);
}

// Starte Generierung
generateAllPages().catch(console.error);