#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO configurations for each route
const routeConfigs = {
  '/': {
    title: 'Marsstein | DSGVO Compliance & Datenschutz Automatisierung',
    description: 'Revolutionieren Sie Ihr Compliance-Management mit Marsstein. Automatisierte DSGVO-, EU AI Act- und ISO 27001-Lösungen für deutsche Unternehmen.',
    keywords: 'DSGVO, Compliance, Datenschutz, EU AI Act, ISO 27001, Automatisierung, Deutschland, DACH',
    canonical: 'https://marsstein.ai'
  },
  '/dsgvo': {
    title: 'DSGVO Compliance Software | Automatisierte Datenschutz-Lösungen | Marsstein',
    description: 'DSGVO-konforme Datenschutz-Automatisierung für deutsche Unternehmen. Vollautomatische Compliance-Überwachung, Dokumentation und Audit-Vorbereitung.',
    keywords: 'DSGVO Software, Datenschutz Automatisierung, GDPR Compliance, Datenschutz-Folgenabschätzung, DSB Tools, Deutschland',
    canonical: 'https://marsstein.ai/dsgvo'
  },
  '/eu-ai-act': {
    title: 'EU AI Act Compliance | KI-Gesetz Implementierung | Marsstein',
    description: 'EU AI Act Compliance für KI-Systeme. Automatisierte Risikoklassifizierung, Dokumentation und Audit-Trails. Jetzt EU AI Act konform werden.',
    keywords: 'EU AI Act, KI Gesetz, AI Compliance, Künstliche Intelligenz, Risikoklassifizierung, Deutschland',
    canonical: 'https://marsstein.ai/eu-ai-act'
  },
  '/iso-27001-zertifizierung': {
    title: 'ISO 27001 Zertifizierung | Informationssicherheit Management | Marsstein',
    description: 'ISO 27001 Zertifizierung für deutsche Unternehmen. Automatisierte ISMS-Implementierung, Gap-Analyse und Audit-Vorbereitung.',
    keywords: 'ISO 27001 Zertifizierung, ISMS, Informationssicherheit, Management System, Deutschland, Audit',
    canonical: 'https://marsstein.ai/iso-27001-zertifizierung'
  },
  '/soc2-zertifizierung': {
    title: 'SOC 2 Zertifizierung | Type I & II Audit Vorbereitung | Marsstein',
    description: 'SOC 2 Zertifizierung für SaaS & Cloud-Anbieter. Automatisierte Kontrollen, Gap-Analyse und Audit-Trail Management.',
    keywords: 'SOC 2 Zertifizierung, Type II Audit, Trust Services, Cloud Compliance, SaaS Sicherheit',
    canonical: 'https://marsstein.ai/soc2-zertifizierung'
  },
  '/preise': {
    title: 'Preise & Pakete | DSGVO Compliance Software | Marsstein',
    description: 'Transparente Preise für DSGVO Compliance Software. Vom Starter-Paket bis Enterprise - passende Lösung für Ihr Unternehmen.',
    keywords: 'DSGVO Software Preise, Compliance Kosten, Datenschutz Software Pakete, Enterprise Compliance, Deutschland',
    canonical: 'https://marsstein.ai/preise'
  },
  '/contact': {
    title: 'Kontakt & Demo | DSGVO Compliance Beratung | Marsstein',
    description: 'Vereinbaren Sie eine kostenlose Demo der Marsstein DSGVO Compliance Software. Persönliche Beratung für deutsche Unternehmen.',
    keywords: 'DSGVO Beratung, Compliance Demo, Datenschutz Kontakt, Marsstein Kontakt, Deutschland, Konstanz',
    canonical: 'https://marsstein.ai/contact'
  },
  '/wissen': {
    title: 'Compliance Wissen | Leitfäden & Best Practices | Marsstein',
    description: 'Umfangreiches Compliance-Wissen. Leitfäden, Best Practices und aktuelle Entwicklungen im Datenschutz.',
    keywords: 'Compliance Wissen, Datenschutz Leitfaden, Best Practices, DSGVO Guide, Knowledge Base',
    canonical: 'https://marsstein.ai/wissen'
  },
  '/wissen/branchen': {
    title: 'Branchen-Compliance Guides | DSGVO für Healthcare, FinTech, E-Commerce | Marsstein',
    description: 'Branchenspezifische DSGVO & Compliance-Leitfäden für Healthcare, FinTech, E-Commerce, Industrie 4.0, EdTech & mehr. ✓ Praxiserprobte Lösungen ✓ Expert Guides',
    keywords: 'Branchen Compliance, Healthcare DSGVO, FinTech Compliance, E-Commerce Datenschutz, Industrie 4.0, EdTech Privacy',
    canonical: 'https://marsstein.ai/wissen/branchen'
  },
  '/branchen': {
    title: 'Branchenlösungen | Compliance für Ihre Industrie | Marsstein',
    description: 'Maßgeschneiderte Compliance-Lösungen für verschiedene Branchen. Gesundheitswesen, Finanz, E-Commerce, SaaS und mehr.',
    keywords: 'Branchenlösungen, Industry Compliance, Sektorspezifisch, Gesundheit, Finanz, E-Commerce',
    canonical: 'https://marsstein.ai/branchen'
  },
  '/tools': {
    title: 'DSGVO Tools & Ressourcen | Kostenlose Compliance Tools | Marsstein',
    description: 'Kostenlose DSGVO Tools und Compliance-Ressourcen. Checklisten, Templates, Datenschutz-Generatoren für deutsche Unternehmen.',
    keywords: 'DSGVO Tools, Compliance Checkliste, Datenschutz Generator, GDPR Tools, kostenlose Tools, Deutschland',
    canonical: 'https://marsstein.ai/tools'
  },
  '/academy': {
    title: 'DSGVO Academy | Compliance Training & Schulungen | Marsstein',
    description: 'Professionelle DSGVO-Schulungen und Compliance-Training für Ihr Team. Online-Kurse, Zertifizierungen und Schulungsmaterialien.',
    keywords: 'DSGVO Schulung, Compliance Training, Datenschutz Kurs, GDPR Academy, Online Schulung, Deutschland',
    canonical: 'https://marsstein.ai/academy'
  },
  '/resources': {
    title: 'Compliance Ressourcen | Vorlagen & Checklisten | Marsstein',
    description: 'Kostenlose Compliance-Ressourcen, Vorlagen und Checklisten. DSGVO-Templates, Audit-Checklisten und Best Practices.',
    keywords: 'Compliance Ressourcen, DSGVO Vorlagen, Checklisten, Templates, Best Practices, Kostenlos',
    canonical: 'https://marsstein.ai/resources'
  }
};

// Read the base HTML template
const baseHtmlPath = path.join(__dirname, '../dist/index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('Error: dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

// Function to update meta tags in HTML
function updateMetaTags(html, config) {
  let updatedHtml = html;
  
  // Update title
  updatedHtml = updatedHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${config.title}</title>`
  );
  
  // Update meta description
  updatedHtml = updatedHtml.replace(
    /<meta name="description" content=".*?".*?\/>/,
    `<meta name="description" content="${config.description}" />`
  );
  
  // Update keywords
  updatedHtml = updatedHtml.replace(
    /<meta name="keywords" content=".*?".*?\/>/,
    `<meta name="keywords" content="${config.keywords}" />`
  );
  
  // Update canonical
  updatedHtml = updatedHtml.replace(
    /<link rel="canonical" href=".*?".*?\/>/,
    `<link rel="canonical" href="${config.canonical}" />`
  );
  
  // Update Open Graph title
  updatedHtml = updatedHtml.replace(
    /<meta property="og:title" content=".*?".*?\/>/,
    `<meta property="og:title" content="${config.title}" />`
  );
  
  // Update Open Graph description
  updatedHtml = updatedHtml.replace(
    /<meta property="og:description" content=".*?".*?\/>/,
    `<meta property="og:description" content="${config.description}" />`
  );
  
  // Update Open Graph URL
  updatedHtml = updatedHtml.replace(
    /<meta property="og:url" content=".*?".*?\/>/,
    `<meta property="og:url" content="${config.canonical}" />`
  );
  
  // Update Twitter title
  updatedHtml = updatedHtml.replace(
    /<meta name="twitter:title" content=".*?".*?\/>/,
    `<meta name="twitter:title" content="${config.title}" />`
  );
  
  // Update Twitter description
  updatedHtml = updatedHtml.replace(
    /<meta name="twitter:description" content=".*?".*?\/>/,
    `<meta name="twitter:description" content="${config.description}" />`
  );
  
  return updatedHtml;
}

// Generate static HTML for each route
console.log('Generating static HTML files with proper SEO tags...\n');

Object.entries(routeConfigs).forEach(([route, config]) => {
  const updatedHtml = updateMetaTags(baseHtml, config);
  
  // Determine output path
  let outputPath;
  if (route === '/') {
    // Homepage stays as index.html
    outputPath = path.join(__dirname, '../dist/index.html');
  } else {
    // Create directory for route and add index.html
    const routePath = route.replace(/^\//, '');
    const dirPath = path.join(__dirname, '../dist', routePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    outputPath = path.join(dirPath, 'index.html');
  }
  
  // Write the file
  fs.writeFileSync(outputPath, updatedHtml);
  console.log(`✅ Generated: ${route} -> ${outputPath.replace(path.join(__dirname, '..'), '')}`);
});

console.log('\n✨ Static HTML generation complete!');
console.log('Deploy the dist folder to see proper SEO tags on all routes.');