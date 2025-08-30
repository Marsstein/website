#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Erweiterte Mapping-Liste für die 63 fehlenden Seiten
const ADDITIONAL_PAGES = {
  // Homepage und Hauptseiten
  '/': 'src/pages/Index.tsx',
  '/academy': 'src/pages/AcademyPage.tsx',
  '/contact': 'src/pages/Contact.tsx',
  '/dashboard': 'src/pages/Dashboard.tsx',
  '/pricing': 'src/pages/PricingPage.tsx',
  '/thank-you': 'src/pages/ThankYou.tsx',
  
  // Assessment Center
  '/assessment-center': 'src/pages/AssessmentCenter.tsx',
  '/assessment-center/ai-governance-check': 'src/pages/assessment-center/AIGovernanceCheck.tsx',
  '/assessment-center/ai-risk-assessment': 'src/pages/assessment-center/AIRiskAssessment.tsx',
  '/assessment-center/algorithmic-impact-assessment': 'src/pages/assessment-center/AlgorithmicImpactAssessment.tsx',
  '/assessment-center/datenschutz-readiness-assessment': 'src/pages/assessment-center/DatenschutzReadiness.tsx',
  '/assessment-center/dsgvo-compliance-checklist': 'src/pages/assessment-center/DsgvoComplianceChecklist.tsx',
  
  // Branchen (Industries)
  '/branchen': 'src/pages/Industries.tsx',
  '/branchen/automotive': 'src/pages/industries/Automotive.tsx',
  '/branchen/e-commerce': 'src/pages/industries/ECommerce.tsx',
  '/branchen/energie': 'src/pages/industries/Energy.tsx',
  '/branchen/finanzdienstleister': 'src/pages/industries/FinancialServices.tsx',
  '/branchen/gesundheitswesen': 'src/pages/industries/Healthcare.tsx',
  '/branchen/lebensmittel': 'src/pages/industries/Food.tsx',
  '/branchen/logistik': 'src/pages/industries/Logistics.tsx',
  '/branchen/produktion': 'src/pages/industries/Manufacturing.tsx',
  '/branchen/saas-unternehmen': 'src/pages/industries/SaaS.tsx',
  
  // Compliance (Duplikate mit anderen Routes)
  '/compliance/dsgvo': 'src/pages/compliance/DsgvoGuide.tsx',
  '/compliance/eu-ai-act': 'src/pages/compliance/EuAiActGuide.tsx',
  '/compliance/hinweisgeberschutzgesetz': 'src/pages/compliance/HinweisgeberschutzgesetzGuide.tsx',
  '/compliance/geldwaeschegesetz': 'src/pages/compliance/GeldwaeschegesetzGuide.tsx',
  
  // Alternative Compliance-Routen
  '/dsgvo-compliance': 'src/pages/DsgvoCompliance.tsx',
  '/eu-ai-act-compliance': 'src/pages/EuAiActCompliance.tsx',
  '/iso-27001-zertifizierung': 'src/pages/Iso27001Compliance.tsx',
  '/iso-27017-zertifizierung': 'src/pages/Iso27017Compliance.tsx',
  '/iso-27018-zertifizierung': 'src/pages/Iso27018Compliance.tsx',
  '/nis2-compliance': 'src/pages/Nis2Compliance.tsx',
  '/soc2-zertifizierung': 'src/pages/Soc2Compliance.tsx',
  '/tisax-compliance': 'src/pages/TisaxCompliance.tsx',
  
  // Tools
  '/tools': 'src/pages/Tools.tsx',
  '/tools/compliance-ai-assistant': 'src/pages/ComplianceAIAssistant.tsx',
  '/tools/cookie-management': 'src/pages/CookieManagement.tsx',
  '/tools/dsgvo-compliance-scorecard': 'src/pages/DsgvoComplianceScorecard.tsx',
  '/tools/dsgvo-email-template-generator': 'src/pages/DsgvoEmailTemplateGenerator.tsx',
  
  // Wissen
  '/wissen': 'src/pages/Knowledge.tsx',
  '/wissen/compliance-frameworks': 'src/pages/ComplianceFrameworks.tsx',
  '/wissen/cybersecurity': 'src/pages/Cybersecurity.tsx',
  '/wissen/dsgvo': 'src/pages/DsgvoGuides.tsx',
  '/wissen/ki-datenschutz': 'src/pages/KiCompliance.tsx',
  '/wissen/risk-management': 'src/pages/RiskManagement.tsx',
  
  // Leitfäden
  '/wissen/leitfaden/betroffenenrechte': 'src/pages/guides/BetroffenenrechteGuide.tsx',
  '/wissen/leitfaden/data-breach-notfall': 'src/pages/guides/DataBreachNotfallGuide.tsx',
  '/wissen/leitfaden/dsfa-durchfuehrung': 'src/pages/guides/DsfaDurchfuehrungGuide.tsx',
  '/wissen/leitfaden/dsgvo-30-tage': 'src/pages/guides/Dsgvo30TageGuide.tsx',
  '/wissen/leitfaden/tom-massnahmen': 'src/pages/guides/TomMassnahmenGuide.tsx',
  '/wissen/leitfaden/verarbeitungsverzeichnis': 'src/pages/guides/VerarbeitungsverzeichnisGuide.tsx',
  '/wissen/leitfaden/website-dsgvo': 'src/pages/guides/WebsiteDsgvoGuide.tsx',
  
  // Rechtsprechung
  '/wissen/rechtsprechung/amazon-luxemburg-2021': 'src/pages/legal/AmazonLuxemburgCase.tsx',
  '/wissen/rechtsprechung/facebook-fanpage': 'src/pages/legal/FacebookFanpageCase.tsx',
  '/wissen/rechtsprechung/google-analytics-austria': 'src/pages/legal/GoogleAnalyticsAustriaCase.tsx',
  '/wissen/rechtsprechung/schrems-ii': 'src/pages/legal/SchremsIICase.tsx'
};

// Verwende das existierende extract-react-to-modules.js Script
import('./extract-react-to-modules.js').then(module => {
  console.log('Verwende existierendes Extraktions-Script...');
}).catch(err => {
  // Fallback: Eigene Implementierung
  console.log('🚀 Starte Extraktion zusätzlicher Seiten...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [route, componentPath] of Object.entries(ADDITIONAL_PAGES)) {
    const fullPath = path.join(process.cwd(), componentPath);
    
    if (fs.existsSync(fullPath)) {
      console.log(`✅ ${route} -> ${componentPath}`);
      successCount++;
    } else {
      console.log(`❌ ${route} -> Datei nicht gefunden: ${componentPath}`);
      failCount++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`📊 Zusammenfassung:`);
  console.log(`   ✅ ${successCount} Komponenten gefunden`);
  console.log(`   ❌ ${failCount} Komponenten fehlen`);
  console.log('\nNächster Schritt: extract-react-to-modules.js mit diesen Mappings erweitern');
});