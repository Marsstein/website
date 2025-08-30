#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping der fehlenden Seiten zu ihren React-Komponenten
// Erweitert um 14 zusätzliche gefundene Komponenten
const MISSING_PAGES = {
  // HOMEPAGE UND HAUPTSEITEN (NEU!)
  '/': 'src/pages/Index.tsx',
  '/academy': 'src/pages/AcademyPage.tsx',
  '/contact': 'src/pages/ContactPage.tsx',
  '/dashboard': 'src/pages/DashboardPage.tsx',
  '/pricing': 'src/pages/PricingPage.tsx',
  '/thank-you': 'src/pages/thankyou.tsx',
  
  // BRANCHEN (NEU!)
  '/branchen/automotive': 'src/pages/industries/automotive.tsx',
  '/branchen/e-commerce': 'src/pages/industries/ecommerce.tsx',
  
  // TOOLS (NEU!)
  '/tools': 'src/pages/tools.tsx',
  '/tools/cookie-management': 'src/pages/cookiemanagement.tsx',
  '/tools/dsgvo-compliance-scorecard': 'src/pages/DsgvoComplianceScorecard.tsx',
  '/tools/dsgvo-email-template-generator': 'src/pages/DsgvoEmailTemplateGenerator.tsx',
  
  // WISSEN (NEU!)
  '/wissen/dsgvo-leitfaeden': 'src/pages/dsgvoleitfaeden.tsx',
  
  // Compliance Seiten (mit korrigierten Pfaden)
  '/dsgvo': 'src/pages/compliance/DsgvoGuide.tsx',
  '/nis2': 'src/pages/compliance/Nis2Guide.tsx', 
  '/eu-ai-act': 'src/pages/compliance/EuAiActGuide.tsx',
  '/hinweisgeberschutzgesetz': 'src/pages/compliance/HinweisgeberschutzgesetzGuide.tsx',
  '/geldwaeschegesetz': 'src/pages/compliance/GeldwaeschegesetzGuide.tsx',
  '/dsg-ekd': 'src/pages/compliance/DsgEkdCompliance.tsx',
  '/kdg': 'src/pages/compliance/KdgCompliance.tsx',
  '/lieferkettensorgfaltspflicht': 'src/pages/compliance/LieferketteCompliance.tsx',
  
  // ISO Seiten (mit korrigierten Pfaden)
  '/compliance/iso-27001': 'src/pages/compliance/Iso27001Guide.tsx',
  '/compliance/iso-27017': 'src/pages/compliance/Iso27017Guide.tsx',
  '/compliance/iso-27018': 'src/pages/compliance/Iso27018Guide.tsx',
  '/compliance/soc-2': 'src/pages/compliance/Soc2Guide.tsx',
  '/compliance/tisax': 'src/pages/compliance/TisaxGuide.tsx',
  
  // Assessment Center (mit korrigierten Pfaden aus resources/)
  '/assessment-center/breach-response-checklist': 'src/pages/resources/BreachResponseChecklist.tsx',
  '/assessment-center/cookie-compliance-audit': 'src/pages/resources/CookieComplianceAudit.tsx',
  '/assessment-center/datenschutz-readiness-assessment': 'src/pages/resources/DatenschutzReadinessAssessment.tsx',
  '/assessment-center/vendor-assessment-template': 'src/pages/resources/VendorAssessmentTemplate.tsx',
  
  // Weitere Wissen-Seiten (mit korrigierten Pfaden)
  '/wissen/dsgvo-leitfaeden': 'src/pages/wissen/dsgvo-leitfaeden.tsx',
  '/wissen/leitfaden/dsgvo-grundlagen': 'src/pages/guides/DsgvoGrundlagenGuide.tsx',
  '/wissen/rechtsprechung': 'src/pages/RechtsprechungOverview.tsx',
  '/wissen/rechtsprechung/cookie-law': 'src/pages/legal/CookieLawGuide.tsx',
  '/wissen/rechtsprechung/google-fonts-muenchen': 'src/pages/legal/GoogleFontsMunichCase.tsx',
  '/wissen/rechtsprechung/meta-irland-2024': 'src/pages/legal/MetaIrlandCase.tsx',
  '/wissen/rechtsprechung/planet49-cookie': 'src/pages/legal/Planet49CookieCase.tsx',
  '/wissen/rechtsprechung/whatsapp-irland-2021': 'src/pages/legal/WhatsAppIrelandCase.tsx',
  
  // Branchen Seiten (mit korrigierten Pfaden)
  '/wissen/branchen': 'src/pages/BranchenWissen.tsx',
  '/wissen/branchen/automotive-datenschutz': 'src/pages/branchen/AutomotiveDatenschutz.tsx',
  '/wissen/branchen/datenschutz-arztpraxis': 'src/pages/branchen/DatenschutzArztpraxis.tsx',
  '/wissen/branchen/datenschutz-betriebsrat': 'src/pages/branchen/DatenschutzBetriebsrat.tsx',
  '/wissen/branchen/datenschutz-homeoffice': 'src/pages/branchen/DatenschutzHomeoffice.tsx',
  '/wissen/branchen/datenschutz-kindergarten': 'src/pages/branchen/DatenschutzKindergarten.tsx',
  '/wissen/branchen/datenschutz-pflege': 'src/pages/branchen/DatenschutzPflege.tsx',
  '/wissen/branchen/dsgvo-vereine': 'src/pages/branchen/DsgvoVereine.tsx',
  '/wissen/branchen/dsgvo-vermieter': 'src/pages/branchen/DsgvoVermieter.tsx',
  '/wissen/branchen/ecommerce-privacy': 'src/pages/branchen/EcommercePrivacyGuide.tsx',
  '/wissen/branchen/fintech-compliance': 'src/pages/branchen/FintechComplianceGuide.tsx',
  '/wissen/branchen/gesundheitswesen-dsgvo': 'src/pages/branchen/HealthcareDsgvoGuide.tsx',
  '/wissen/branchen/healthcare-dsgvo': 'src/pages/branchen/HealthcareDsgvoGuide.tsx',
  '/wissen/branchen/industrie-4-0-datenschutz': 'src/pages/branchen/Industrie40DatenschutzGuide.tsx',
  '/wissen/branchen/logistics-compliance': 'src/pages/branchen/LogisticsCompliance.tsx',
  '/wissen/branchen/pharma-compliance': 'src/pages/branchen/PharmaComplianceGuide.tsx',
  '/wissen/branchen/produktion-datenschutz': 'src/pages/industries/Manufacturing.tsx',
  '/wissen/branchen/proptech-compliance': 'src/pages/branchen/ProptechCompliance.tsx',
  '/wissen/branchen/saas-privacy-design': 'src/pages/branchen/SaasPrivacyDesignGuide.tsx',
  '/wissen/branchen/smart-grid-compliance': 'src/pages/branchen/SmartGridComplianceGuide.tsx'
};

/**
 * Extrahiert HTML-Content aus React-Komponente
 */
function extractContentFromReact(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️  Datei nicht gefunden: ${filePath}`);
    return null;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Strategie 1: Finde return statement mit JSX
  const returnMatch = content.match(/return\s*\(([\s\S]*?)\s*\);?\s*}(?:\s*;)?\s*(?:export|$)/);
  if (!returnMatch) {
    // Strategie 2: Finde JSX direkt nach return
    const directReturnMatch = content.match(/return\s+([\s\S]*?);\s*}/);
    if (directReturnMatch) {
      return convertJSXToHTML(directReturnMatch[1]);
    }
    return null;
  }
  
  return convertJSXToHTML(returnMatch[1]);
}

/**
 * Konvertiert JSX zu HTML
 */
function convertJSXToHTML(jsx) {
  let html = jsx;
  
  // Entferne TypeScript Types
  html = html.replace(/<(\w+)(?:\s+[^>]*)?:\s*\w+[^>]*>/g, '<$1>');
  
  // Konvertiere className zu class
  html = html.replace(/className=/g, 'class=');
  
  // Konvertiere andere React-Attribute
  html = html.replace(/htmlFor=/g, 'for=');
  html = html.replace(/tabIndex=/g, 'tabindex=');
  html = html.replace(/autoComplete=/g, 'autocomplete=');
  
  // Entferne Event Handler
  html = html.replace(/\son[A-Z]\w*=\{[^}]*\}/g, '');
  html = html.replace(/\son[A-Z]\w*="[^"]*"/g, '');
  
  // Entferne React Komponenten (SEOHead, etc.)
  html = html.replace(/<SEOHead[^>]*\/>/g, '');
  html = html.replace(/<SEOHead[^>]*>[\s\S]*?<\/SEOHead>/g, '');
  
  // Konvertiere selbstschließende Tags
  html = html.replace(/<(\w+)([^>]*?)\/>/g, (match, tag, attrs) => {
    const selfClosing = ['img', 'input', 'br', 'hr', 'meta', 'link', 'area'];
    if (selfClosing.includes(tag.toLowerCase())) {
      return match;
    }
    return `<${tag}${attrs}></${tag}>`;
  });
  
  // Ersetze einfache Variablen in {}
  html = html.replace(/\{`([^`]*)`\}/g, '$1');
  html = html.replace(/\{"([^"]*)"\}/g, '$1');
  html = html.replace(/\{'([^']*)'\}/g, '$1');
  
  // Entferne komplexe JavaScript Expressions
  html = html.replace(/\{[^{}]*\([^{}]*\)[^{}]*\}/g, '');
  
  // Ersetze Link/Next Link mit normalen Links
  html = html.replace(/<Link\s+(?:href|to)="([^"]*)"([^>]*)>([\s\S]*?)<\/Link>/g, 
    '<a href="$1"$2>$3</a>');
  
  // Clean up leere Attribute
  html = html.replace(/\s+[a-zA-Z-]+=(?:""|\{\})/g, '');
  
  return html;
}

/**
 * Erstellt ein Content-Modul
 */
function createContentModule(route, content) {
  // Extrahiere Title aus h1 oder verwende Route
  const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const title = titleMatch ? 
    titleMatch[1].trim() : 
    route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Generiere Description aus erstem Paragraph oder Standard
  const descMatch = content.match(/<p[^>]*>([^<]{50,200})/);
  const description = descMatch ? 
    descMatch[1].trim().substring(0, 160) : 
    `${title} - Compliance-Automatisierung mit KI. Marsstein GmbH.`;
  
  // Escape single quotes and remove line breaks in title and description
  const safeTitle = title.replace(/'/g, "\\'").replace(/\n/g, ' ');
  const safeDescription = description.replace(/'/g, "\\'").replace(/\n/g, ' ').trim();
  
  // Escape backticks and dollar signs in content to avoid breaking template literals
  const safeContent = content
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/`/g, '\\`')    // Escape backticks
    .replace(/\${/g, '\\${'); // Escape template literal expressions
  
  return `export default {
  route: '${route}',
  title: '${safeTitle}',
  description: '${safeDescription}',
  content: \`${safeContent}\`
};`;
}

/**
 * Hauptfunktion
 */
async function generateAllModules() {
  console.log('🚀 Starte Extraktion aller React-Komponenten zu Content-Modulen\n');
  
  let successCount = 0;
  let failCount = 0;
  const modulesByCategory = {};
  
  for (const [route, reactFile] of Object.entries(MISSING_PAGES)) {
    process.stdout.write(`📄 ${route.padEnd(50)} ... `);
    
    const fullPath = path.join(process.cwd(), reactFile);
    const content = extractContentFromReact(fullPath);
    
    if (content) {
      // Bestimme Kategorie aus Route
      let category = 'main';
      if (route.includes('/compliance')) category = 'compliance';
      else if (route.includes('/assessment-center')) category = 'assessment-center';
      else if (route.includes('/wissen')) category = 'wissen';
      else if (route.includes('/branchen')) category = 'branchen';
      else if (route.includes('/tools')) category = 'tools';
      else if (route.includes('/rechtsprechung')) category = 'rechtsprechung';
      
      // Erstelle Verzeichnis falls nötig
      const categoryDir = path.join(__dirname, 'content', category);
      if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
      }
      
      // Generiere Dateiname (Homepage wird zu 'home' statt 'index')
      let fileName = route.split('/').pop() || 'home';
      if (fileName === '' || route === '/') fileName = 'home';
      const outputFile = path.join(categoryDir, `${fileName}.mjs`);
      
      // Erstelle und speichere Modul
      const moduleContent = createContentModule(route, content);
      fs.writeFileSync(outputFile, moduleContent);
      
      // Sammle für Index
      if (!modulesByCategory[category]) {
        modulesByCategory[category] = [];
      }
      modulesByCategory[category].push(fileName);
      
      console.log('✅');
      successCount++;
    } else {
      console.log('❌ (React-Komponente nicht gefunden oder leer)');
      failCount++;
    }
  }
  
  // Erstelle Index-Dateien für jede Kategorie
  console.log('\n📚 Erstelle Index-Dateien...');
  for (const [category, modules] of Object.entries(modulesByCategory)) {
    const indexPath = path.join(__dirname, 'content', category, 'index.mjs');
    
    const imports = modules.map(m => {
      const varName = m.replace(/-/g, '_').replace(/\./g, '_');
      return `import ${varName} from './${m}.mjs';`;
    }).join('\n');
    
    const exports = modules.map(m => {
      const varName = m.replace(/-/g, '_').replace(/\./g, '_');
      return `  '${m}': ${varName}`;
    }).join(',\n');
    
    const indexContent = `${imports}

export default {
${exports}
};`;
    
    fs.writeFileSync(indexPath, indexContent);
    console.log(`  ✅ ${category}/index.mjs`);
  }
  
  // Zusammenfassung
  console.log('\n' + '='.repeat(60));
  console.log('✨ Extraktion abgeschlossen!\n');
  console.log(`📊 Ergebnis:`);
  console.log(`   ✅ Erfolgreich: ${successCount} Module`);
  console.log(`   ❌ Fehlgeschlagen: ${failCount} Module`);
  
  if (successCount > 0) {
    console.log('\n🔨 Führe Build aus...');
    console.log('   npm run build:modular\n');
  }
}

// Starte Generierung
generateAllModules().catch(console.error);