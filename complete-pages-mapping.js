#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// VOLLSTÄNDIGES Mapping aller 63 fehlenden Seiten zu React-Komponenten
// Basierend auf tatsächlicher Verzeichnisstruktur
const COMPLETE_MAPPING = {
  // KRITISCHE HAUPTSEITEN (Priorität 1)
  '/': 'src/pages/Index.tsx',
  '/academy': 'src/pages/AcademyPage.tsx',
  '/contact': 'src/pages/ContactPage.tsx',
  '/dashboard': 'src/pages/DashboardPage.tsx',
  '/pricing': 'src/pages/PricingPage.tsx',
  '/thank-you': 'src/pages/ThankYouPage.tsx',
  
  // BRANCHEN-SEITEN (Priorität 1)
  '/branchen': 'src/pages/industries/IndustriesOverview.tsx',
  '/branchen/automotive': 'src/pages/industries/AutomotivePage.tsx',
  '/branchen/e-commerce': 'src/pages/industries/EcommercePage.tsx',
  '/branchen/energie': 'src/pages/industries/EnergyPage.tsx',
  '/branchen/finanzdienstleister': 'src/pages/industries/FinancePage.tsx',
  '/branchen/gesundheitswesen': 'src/pages/industries/HealthcarePage.tsx',
  '/branchen/lebensmittel': 'src/pages/industries/FoodPage.tsx',
  '/branchen/logistik': 'src/pages/industries/LogisticsPage.tsx',
  '/branchen/produktion': 'src/pages/industries/ManufacturingPage.tsx',
  '/branchen/saas-unternehmen': 'src/pages/industries/SaasPage.tsx',
  
  // COMPLIANCE-SEITEN (bereits gemappt, aber andere Pfade)
  '/compliance/dsgvo': 'src/pages/compliance/DsgvoGuide.tsx',
  '/compliance/iso-27001': 'src/pages/compliance/Iso27001Page.tsx',
  '/compliance/iso-27017': 'src/pages/compliance/Iso27017Page.tsx',
  '/compliance/iso-27018': 'src/pages/compliance/Iso27018Page.tsx',
  '/compliance/soc-2': 'src/pages/compliance/Soc2Page.tsx',
  '/compliance/tisax': 'src/pages/compliance/TisaxPage.tsx',
  '/compliance/nis2': 'src/pages/compliance/Nis2Compliance.tsx',
  '/compliance/eu-ai-act': 'src/pages/compliance/EuAiActCompliance.tsx',
  '/compliance/hinweisgeberschutzgesetz': 'src/pages/compliance/HinweisgeberschutzCompliance.tsx',
  '/compliance/geldwaeschegesetz': 'src/pages/compliance/GeldwaescheCompliance.tsx',
  
  // ZERTIFIZIERUNGS-SEITEN (alte URLs)
  '/iso-27001-zertifizierung': 'src/pages/compliance/Iso27001Page.tsx',
  '/iso-27017-zertifizierung': 'src/pages/compliance/Iso27017Page.tsx',
  '/iso-27018-zertifizierung': 'src/pages/compliance/Iso27018Page.tsx',
  '/soc2-zertifizierung': 'src/pages/compliance/Soc2Page.tsx',
  '/tisax-compliance': 'src/pages/compliance/TisaxPage.tsx',
  
  // ASSESSMENT-CENTER (noch fehlend)
  '/assessment-center/breach-response-checklist': 'src/pages/assessment/BreachResponsePage.tsx',
  '/assessment-center/cookie-compliance-audit': 'src/pages/assessment/CookieAuditPage.tsx',
  '/assessment-center/datenschutz-readiness-assessment': 'src/pages/assessment/ReadinessPage.tsx',
  '/assessment-center/vendor-assessment-template': 'src/pages/assessment/VendorAssessmentPage.tsx',
  
  // TOOLS-SEITEN
  '/tools': 'src/pages/tools/ToolsOverview.tsx',
  
  // WISSEN-BRANCHEN (viele Seiten)
  '/wissen/branchen': 'src/pages/knowledge/industries/IndustriesKnowledge.tsx',
  '/wissen/branchen/automotive-datenschutz': 'src/pages/knowledge/industries/AutomotivePrivacy.tsx',
  '/wissen/branchen/datenschutz-arztpraxis': 'src/pages/knowledge/industries/MedicalPrivacy.tsx',
  '/wissen/branchen/datenschutz-betriebsrat': 'src/pages/knowledge/industries/WorksCouncilPrivacy.tsx',
  '/wissen/branchen/datenschutz-homeoffice': 'src/pages/knowledge/industries/HomeOfficePrivacy.tsx',
  '/wissen/branchen/datenschutz-kindergarten': 'src/pages/knowledge/industries/KindergartenPrivacy.tsx',
  '/wissen/branchen/datenschutz-pflege': 'src/pages/knowledge/industries/CarePrivacy.tsx',
  '/wissen/branchen/dsgvo-vereine': 'src/pages/knowledge/industries/AssociationsGdpr.tsx',
  '/wissen/branchen/dsgvo-vermieter': 'src/pages/knowledge/industries/LandlordGdpr.tsx',
  '/wissen/branchen/ecommerce-privacy': 'src/pages/knowledge/industries/EcommercePrivacy.tsx',
  '/wissen/branchen/fintech-compliance': 'src/pages/knowledge/industries/FintechCompliance.tsx',
  '/wissen/branchen/gesundheitswesen-dsgvo': 'src/pages/knowledge/industries/HealthcareGdpr.tsx',
  '/wissen/branchen/healthcare-dsgvo': 'src/pages/knowledge/industries/HealthcareGdpr.tsx',
  '/wissen/branchen/industrie-4-0-datenschutz': 'src/pages/knowledge/industries/Industry40Privacy.tsx',
  '/wissen/branchen/logistics-compliance': 'src/pages/knowledge/industries/LogisticsCompliance.tsx',
  '/wissen/branchen/pharma-compliance': 'src/pages/knowledge/industries/PharmaCompliance.tsx',
  '/wissen/branchen/produktion-datenschutz': 'src/pages/knowledge/industries/ProductionPrivacy.tsx',
  '/wissen/branchen/proptech-compliance': 'src/pages/knowledge/industries/ProptechCompliance.tsx',
  '/wissen/branchen/saas-privacy-design': 'src/pages/knowledge/industries/SaasPrivacy.tsx',
  '/wissen/branchen/smart-grid-compliance': 'src/pages/knowledge/industries/SmartGridCompliance.tsx',
  
  // RECHTSPRECHUNG
  '/wissen/rechtsprechung': 'src/pages/knowledge/legal/LegalOverview.tsx',
  '/wissen/rechtsprechung/cookie-law': 'src/pages/knowledge/legal/CookieLaw.tsx',
  '/wissen/rechtsprechung/google-fonts-muenchen': 'src/pages/knowledge/legal/GoogleFontsMunich.tsx',
  '/wissen/rechtsprechung/meta-irland-2024': 'src/pages/knowledge/legal/MetaIreland2024.tsx',
  '/wissen/rechtsprechung/planet49-cookie': 'src/pages/knowledge/legal/Planet49Cookie.tsx',
  '/wissen/rechtsprechung/whatsapp-irland-2021': 'src/pages/knowledge/legal/WhatsappIreland2021.tsx',
  
  // WEITERE WISSEN-SEITEN
  '/wissen/dsgvo-leitfaeden': 'src/pages/knowledge/GdprGuides.tsx',
  '/wissen/leitfaden/dsgvo-grundlagen': 'src/pages/knowledge/guides/GdprBasics.tsx'
};

// Funktion zum Finden existierender React-Dateien
function findReactComponent(route) {
  // Probiere verschiedene Pfade
  const possiblePaths = [
    COMPLETE_MAPPING[route],
    `src/pages${route}.tsx`,
    `src/pages${route}/index.tsx`,
    `src/pages${route.replace(/-/g, '')}.tsx`,
    `src/pages${route.replace(/-/g, '').replace(/\//g, '/')}.tsx`
  ];
  
  // Spezielle Mappings für bekannte Muster
  if (route.includes('/branchen/')) {
    possiblePaths.push(
      `src/pages/industries/${route.split('/').pop()}.tsx`,
      `src/pages/industries/${route.split('/').pop().replace(/-/g, '')}.tsx`
    );
  }
  
  if (route.includes('/wissen/')) {
    possiblePaths.push(
      `src/pages/knowledge/${route.replace('/wissen/', '')}.tsx`,
      `src/pages/knowledge/${route.replace('/wissen/', '').replace(/-/g, '')}.tsx`
    );
  }
  
  for (const filePath of possiblePaths.filter(Boolean)) {
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }
  
  return null;
}

// Hauptfunktion
async function mapAllPages() {
  console.log('🔍 Suche nach React-Komponenten für alle fehlenden Seiten...\n');
  
  const found = [];
  const notFound = [];
  
  for (const route of Object.keys(COMPLETE_MAPPING)) {
    const componentPath = findReactComponent(route);
    
    if (componentPath) {
      console.log(`✅ ${route.padEnd(50)} → ${componentPath}`);
      found.push({ route, path: componentPath });
    } else {
      console.log(`❌ ${route.padEnd(50)} → Komponente nicht gefunden`);
      notFound.push(route);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`📊 Ergebnis:`);
  console.log(`   ✅ Gefunden: ${found.length} Komponenten`);
  console.log(`   ❌ Nicht gefunden: ${notFound.length} Routes`);
  
  // Speichere das erfolgreiche Mapping
  if (found.length > 0) {
    const outputFile = 'verified-mapping.json';
    fs.writeFileSync(outputFile, JSON.stringify(found, null, 2));
    console.log(`\n💾 Mapping gespeichert in: ${outputFile}`);
    
    // Generiere Update für extract-react-to-modules.js
    console.log('\n📝 Verwende dieses Mapping im extract-react-to-modules.js:');
    console.log('\nconst MISSING_PAGES = {');
    found.forEach(({ route, path }) => {
      console.log(`  '${route}': '${path}',`);
    });
    console.log('};');
  }
  
  if (notFound.length > 0) {
    console.log('\n⚠️  Für diese Routes müssen Fallback-Module erstellt werden:');
    notFound.forEach(route => console.log(`   - ${route}`));
  }
}

// CLI ausführen
mapAllPages().catch(console.error);