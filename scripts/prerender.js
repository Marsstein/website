#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/contact',
  '/academy',
  '/preise',
  '/dashboard',
  '/ueber-uns',
  '/thank-you',
  '/sitemap-seo',
  '/final-checks',
  '/impressum',
  '/datenschutz',
  '/features',
  '/beta',
  '/dsgvo-compliance',
  '/iso-27001-compliance',
  '/eu-ai-act-compliance',
  '/soc2-compliance',
  '/iso-27017-compliance',
  '/iso-27018-compliance',
  '/tisax-compliance',
  '/dsgvo',
  '/dsgvo-audit',
  '/dsgvo-audit/verified/demo-unternehmen',
  '/dsgvo-audit/certified/demo-mittelstand',
  '/dsgvo-audit/excellence/demo-enterprise',
  '/eu-ai-act',
  '/eu-data-act',
  '/nis2-compliance',
  '/hinweisgeberschutzgesetz',
  '/geldwaeschegesetz',
  '/regulierung/dsgvo',
  '/regulierung/eu-ai-act',
  '/regulierung/nis2',
  '/regulierung/hinweisgeberschutzgesetz',
  '/regulierung/geldwaeschegesetz',
  '/iso-27001-zertifizierung',
  '/soc2-zertifizierung',
  '/iso-27017-zertifizierung',
  '/iso-27018-zertifizierung',
  '/tisax-zertifizierung',
  '/zertifizierung/iso-27001',
  '/zertifizierung/soc2',
  '/zertifizierung/iso-27017',
  '/zertifizierung/iso-27018',
  '/zertifizierung/tisax',
  '/assessment-center',
  '/assessment-center/dsgvo-compliance-checklist',
  '/assessment-center/datenschutz-readiness-assessment',
  '/assessment-center/breach-response-checklist',
  '/assessment-center/cookie-compliance-audit',
  '/assessment-center/vendor-assessment-template',
  '/assessment-center/ai-risk-assessment',
  '/assessment-center/algorithmic-impact-assessment',
  '/assessment-center/ai-governance-check',
  '/assessment-center/datenschutz-test',
  '/assessment-center/dsgvo-kosten-rechner',
  '/assessment-center/isms-maturity-assessment',
  '/assessment-center/iso-27001-readiness-check',
  '/assessment-center/nis2-compliance-check',
  '/assessment-center/security-controls-audit',
  '/assessment-center/soc2-readiness-assessment',
  '/branchen',
  '/branchen/gesundheitswesen',
  '/branchen/finanzdienstleister',
  '/branchen/e-commerce',
  '/branchen/saas-unternehmen',
  '/branchen/produktion',
  '/branchen/automotive',
  '/branchen/energie',
  '/branchen/lebensmittel',
  '/branchen/logistik',
  '/externer-datenschutzbeauftragter',
  '/externer-datenschutzbeauftragter-oldenburg',
  '/externer-datenschutzbeauftragter-hannover',
  '/externer-datenschutzbeauftragter-bremen',
  '/externer-datenschutzbeauftragter-duesseldorf',
  '/externer-datenschutzbeauftragter-hamburg',
  '/externer-datenschutzbeauftragter-hildesheim',
  '/externer-datenschutzbeauftragter-stuttgart',
  '/externer-datenschutzbeauftragter-muenchen',
  '/externer-datenschutzbeauftragter-nuernberg',
  '/externer-datenschutzbeauftragter-koeln',
  '/externer-datenschutzbeauftragter-wedemark',
  '/externer-datenschutzbeauftragter-osnabrueck',
  '/externer-datenschutzbeauftragter-lueneburg',
  '/externer-datenschutzbeauftragter-dresden',
  '/externer-datenschutzbeauftragter-dortmund',
  '/externer-datenschutzbeauftragter-nrw',
  '/externer-datenschutzbeauftragter-braunschweig',
  '/externer-datenschutzbeauftragter-karlsruhe',
  '/externer-datenschutzbeauftragter-celle',
  '/externer-datenschutzbeauftragter-magdeburg',
  '/externer-datenschutzbeauftragter-frankfurt',
  '/externer-datenschutzbeauftragter-ulm',
  '/externer-datenschutzbeauftragter-heidelberg',
  '/externer-datenschutzbeauftragter-leipzig',
  '/externer-datenschutzbeauftragter-bremerhaven',
  '/externer-datenschutzbeauftragter-mannheim',
  '/externer-datenschutzbeauftragter-wolfsburg',
  '/externer-datenschutzbeauftragter-bayern',
  '/externer-datenschutzbeauftragter-niedersachsen',
  '/externer-datenschutzbeauftragter-muenster',
  '/ratgeber/datenschutzbeauftragter-auswahl',
  '/ratgeber/sicherheitszertifizierung-auswahl',
  '/ratgeber/dsgvo-software-auswahlkriterien',
  '/tools',
  '/tools/cookie-management',
  '/tools/whistleblower-system',
  '/tools/cookie-management-tool',
  '/tools/whistleblower-system-tool',
  '/tools/dsgvo-email-template-generator',
  '/tools/dsgvo-compliance-scorecard',
  '/tools/compliance-ai-assistant',
  '/wissen',
  '/wissen/dsgvo',
  '/wissen/ki-datenschutz',
  '/wissen/cybersecurity',
  '/wissen/zertifizierungen',
  '/wissen/branchen',
  '/wissen/china',
  '/wissen/dsgvo-leitfaeden',
  '/wissen/kosten',
  '/wissen/risk-management',
  '/wissen/compliance-frameworks',
  '/dsgvo-china',
  '/dsgvo-amazon-sellers-china',
  '/dsgvo-tiktok-shop-china',
  '/deepseek-dsgvo',
  '/eu-vertreter-china',
  '/artikel-15-dsgvo-auskunftsrecht-china',
  '/joint-venture-china-datenschutz',
  '/china-investitionen-dsgvo-screening',
  '/china-scc-vs-eu-scc',
  '/dsgvo-wechat-alipay-china',
  '/dsgvo-douyin-china',
  '/dsgvo-b2b-hersteller-china',
  '/pipl-gdpr-china',
  '/compliance/iso-27001',
  '/compliance/soc-2',
  '/compliance/eu-ai-act',
  '/compliance/nis2',
  '/compliance/iso-27017',
  '/compliance/iso-27018',
  '/compliance/hinweisgeberschutzgesetz',
  '/compliance/tisax',
  '/compliance/geldwaeschegesetz',
  '/compliance/dsgvo',
  '/dsg-ekd',
  '/compliance/dsg-ekd',
  '/kdg',
  '/compliance/kdg',
  '/wissen/leitfaden/dsgvo-grundlagen',
  '/wissen/leitfaden/website-dsgvo',
  '/wissen/leitfaden/dsgvo-30-tage',
  '/wissen/leitfaden/data-breach-notfall',
  '/wissen/leitfaden/verarbeitungsverzeichnis',
  '/wissen/leitfaden/betroffenenrechte',
  '/wissen/leitfaden/tom-massnahmen',
  '/wissen/leitfaden/dsfa-durchfuehrung',
  '/wissen/leitfaden/datenschutzbeauftragter',
  '/wissen/leitfaden/datenschutzbeauftragter-ausbildung',
  '/wissen/krisenmanagement',
  '/wissen/krisenmanagement/data-breach-72h',
  '/wissen/krisenmanagement/security-incident',
  '/wissen/krisenmanagement/communication-templates',
  '/wissen/krisenmanagement/compliance-audit-emergency',
  '/wissen/krisenmanagement/media-crisis',
  '/wissen/krisenmanagement/vendor-data-breach',
  '/wissen/krisenmanagement/gdpr-fine-response',
  '/wissen/krisenmanagement/business-continuity',
  '/wissen/rechtsprechung',
  '/wissen/rechtsprechung/schrems-ii',
  '/wissen/rechtsprechung/meta-irland-2024',
  '/wissen/rechtsprechung/cookie-law',
  '/wissen/rechtsprechung/facebook-fanpage',
  '/wissen/rechtsprechung/google-analytics-austria',
  '/wissen/rechtsprechung/amazon-luxemburg-2021',
  '/wissen/rechtsprechung/whatsapp-irland-2021',
  '/wissen/rechtsprechung/planet49-cookie',
  '/wissen/rechtsprechung/google-fonts-muenchen',
  '/wissen/branchen/gesundheitswesen-dsgvo',
  '/wissen/branchen/healthcare-ai-compliance',
  '/wissen/branchen/edtech-privacy',
  '/wissen/branchen/fintech-compliance',
  '/wissen/branchen/ecommerce-privacy',
  '/wissen/branchen/saas-privacy-design',
  '/wissen/branchen/industrie-40-datenschutz',
  '/wissen/branchen/automotive-datenschutz',
  '/wissen/branchen/smart-grid-compliance',
  '/wissen/branchen/pharma-compliance',
  '/wissen/branchen/produktion',
  '/wissen/branchen/travel-compliance',
  '/wissen/branchen/insurtech-compliance',
  '/wissen/branchen/proptech-compliance',
  '/wissen/branchen/logistics-compliance',
  '/wissen/branchen/datenschutz-pflege',
  '/wissen/branchen/datenschutz-arztpraxis',
  '/wissen/branchen/datenschutz-kindergarten',
  '/wissen/branchen/dsgvo-vermieter',
  '/wissen/branchen/dsgvo-vereine',
  '/wissen/branchen/datenschutz-betriebsrat',
  '/wissen/branchen/datenschutz-homeoffice',
  '/wissen/branchen/datenschutz-personalwesen',
  '/wissen/ki-datenschutz/risikoklassifizierung',
  '/wissen/ki-datenschutz/algorithmic-impact-assessment',
  '/wissen/ki-datenschutz/privacy-preserving-ai',
  '/wissen/ki-datenschutz/federated-learning',
  '/wissen/ki-datenschutz/financial-ai-compliance',
  '/wissen/ki-datenschutz/hr-ai-compliance',
  '/wissen/ki-datenschutz/model-privacy-attacks',
  '/wissen/ki-datenschutz/data-minimization',
  '/wissen/ki-datenschutz/explainable-ai',
  '/wissen/ki-datenschutz/privacy-by-design-ai',
  '/wissen/ki-datenschutz/ki-einwilligungsmanagement',
  '/wissen/ki-datenschutz/automated-decision-making',
  '/wissen/kosten/dsgvo-compliance-kosten',
  '/wissen/kosten/externer-datenschutzbeauftragter-kosten',
  '/wissen/kosten/iso-27001-zertifizierung-kosten',
  '/wissen/dsgvo-compliance-luecken',
  '/wissen/interner-dsb-scheitert',
  '/wissen/dsgvo-software-vs-manuell',
  '/wissen/dsgvo-vs-bdsg'
];

console.log('🚀 Starting SEO EXPLOSION prerendering...');
console.log(`📄 Prerendering ${routes.length} routes for maximum ranking power!`);

async function prerenderRoutes() {
  const distPath = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('❌ Dist folder not found. Run npm run build first.');
    process.exit(1);
  }

  // Start local server
  console.log('🔥 Starting preview server...');
  const serverProcess = execSync('npm run preview &', { stdio: 'inherit' });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      console.log(`📡 Prerendering: ${route}`);
      
      // Create directory structure
      const routePath = route === '/' ? '/index' : route;
      const fullPath = path.join(distPath, routePath);
      const dirPath = path.dirname(fullPath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // Fetch rendered HTML from preview server using curl
      const url = `http://localhost:4173${route}`;
      const html = execSync(`curl -s "${url}"`, { encoding: 'utf8' });
      
      // Write HTML file
      const htmlPath = route === '/' ? 
        path.join(distPath, 'index.html') : 
        path.join(distPath, route, 'index.html');
      
      fs.writeFileSync(htmlPath, html);
      success++;
      
    } catch (error) {
      console.error(`❌ Failed to prerender ${route}:`, error.message);
      failed++;
    }
  }
  
  // Kill preview server
  execSync('pkill -f "vite preview"', { stdio: 'ignore' });
  
  console.log(`✅ SEO EXPLOSION complete!`);
  console.log(`📈 Successfully prerendered: ${success} pages`);
  console.log(`⚠️ Failed: ${failed} pages`);
  console.log(`🎯 Your site is now optimized to DOMINATE search rankings!`);
}

prerenderRoutes().catch(console.error);