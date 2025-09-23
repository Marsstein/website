#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/academy', priority: '0.8', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: '/dashboard', priority: '0.7', changefreq: 'weekly' },
  { url: '/ueber-uns', priority: '0.6', changefreq: 'monthly' },
  { url: '/thank-you', priority: '0.3', changefreq: 'yearly' },
  { url: '/sitemap-seo', priority: '0.5', changefreq: 'monthly' },
  { url: '/final-checks', priority: '0.7', changefreq: 'weekly' },
  { url: '/impressum', priority: '0.3', changefreq: 'yearly' },
  { url: '/datenschutz', priority: '0.4', changefreq: 'yearly' },
  { url: '/dsgvo-compliance', priority: '0.9', changefreq: 'weekly' },
  { url: '/iso-27001-compliance', priority: '0.9', changefreq: 'weekly' },
  { url: '/eu-ai-act-compliance', priority: '0.9', changefreq: 'weekly' },
  { url: '/soc2-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/iso-27017-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/iso-27018-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/tisax-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/dsgvo', priority: '0.9', changefreq: 'weekly' },
  { url: '/eu-ai-act', priority: '0.9', changefreq: 'weekly' },
  { url: '/nis2-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/hinweisgeberschutzgesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/geldwaeschegesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/regulierung/dsgvo', priority: '0.8', changefreq: 'weekly' },
  { url: '/regulierung/eu-ai-act', priority: '0.8', changefreq: 'weekly' },
  { url: '/regulierung/nis2', priority: '0.7', changefreq: 'weekly' },
  { url: '/regulierung/hinweisgeberschutzgesetz', priority: '0.7', changefreq: 'weekly' },
  { url: '/regulierung/geldwaeschegesetz', priority: '0.7', changefreq: 'weekly' },
  { url: '/iso-27001-zertifizierung', priority: '0.8', changefreq: 'weekly' },
  { url: '/soc2-zertifizierung', priority: '0.8', changefreq: 'weekly' },
  { url: '/iso-27017-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/iso-27018-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/tisax-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/zertifizierung/iso-27001', priority: '0.8', changefreq: 'weekly' },
  { url: '/zertifizierung/soc2', priority: '0.8', changefreq: 'weekly' },
  { url: '/zertifizierung/iso-27017', priority: '0.7', changefreq: 'weekly' },
  { url: '/zertifizierung/iso-27018', priority: '0.7', changefreq: 'weekly' },
  { url: '/zertifizierung/tisax', priority: '0.7', changefreq: 'weekly' },
  { url: '/assessment-center', priority: '0.8', changefreq: 'weekly' },
  { url: '/assessment-center/dsgvo-compliance-checklist', priority: '0.8', changefreq: 'weekly' },
  { url: '/assessment-center/datenschutz-readiness-assessment', priority: '0.8', changefreq: 'weekly' },
  { url: '/assessment-center/breach-response-checklist', priority: '0.8', changefreq: 'weekly' },
  { url: '/assessment-center/cookie-compliance-audit', priority: '0.8', changefreq: 'weekly' },
  { url: '/assessment-center/vendor-assessment-template', priority: '0.8', changefreq: 'weekly' },
  { url: '/assessment-center/ai-risk-assessment', priority: '0.9', changefreq: 'weekly' },
  { url: '/assessment-center/algorithmic-impact-assessment', priority: '0.9', changefreq: 'weekly' },
  { url: '/assessment-center/ai-governance-check', priority: '0.9', changefreq: 'weekly' },
  { url: '/branchen', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/gesundheitswesen', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/finanzdienstleister', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/e-commerce', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/saas-unternehmen', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/produktion', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/automotive', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/energie', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/lebensmittel', priority: '0.8', changefreq: 'weekly' },
  { url: '/branchen/logistik', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/cookie-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/whistleblower-system', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/cookie-management-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/whistleblower-system-tool', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/dsgvo-email-template-generator', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/dsgvo-compliance-scorecard', priority: '0.8', changefreq: 'weekly' },
  { url: '/tools/compliance-ai-assistant', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/dsgvo', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/cybersecurity', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/zertifizierungen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/dsgvo-leitfaeden', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/risk-management', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/compliance-frameworks', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance/iso-27001', priority: '0.9', changefreq: 'weekly' },
  { url: '/compliance/soc-2', priority: '0.9', changefreq: 'weekly' },
  { url: '/compliance/eu-ai-act', priority: '0.9', changefreq: 'weekly' },
  { url: '/compliance/nis2', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance/iso-27017', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance/iso-27018', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance/hinweisgeberschutzgesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance/tisax', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance/geldwaeschegesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/compliance/dsgvo', priority: '0.9', changefreq: 'weekly' },
  { url: '/dsg-ekd', priority: '0.7', changefreq: 'weekly' },
  { url: '/compliance/dsg-ekd', priority: '0.7', changefreq: 'weekly' },
  { url: '/kdg', priority: '0.7', changefreq: 'weekly' },
  { url: '/compliance/kdg', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/dsgvo-grundlagen', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/website-dsgvo', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/dsgvo-30-tage', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/data-breach-notfall', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/verarbeitungsverzeichnis', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/betroffenenrechte', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/tom-massnahmen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/dsfa-durchfuehrung', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/data-breach-72h', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/security-incident', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/communication-templates', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/compliance-audit-emergency', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/media-crisis', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/vendor-data-breach', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/gdpr-fine-response', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement/business-continuity', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/rechtsprechung', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/rechtsprechung/schrems-ii', priority: '0.8', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/meta-irland-2024', priority: '0.8', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/cookie-law', priority: '0.8', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/facebook-fanpage', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/google-analytics-austria', priority: '0.8', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/amazon-luxemburg-2021', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/whatsapp-irland-2021', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/planet49-cookie', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/google-fonts-muenchen', priority: '0.8', changefreq: 'monthly' },
  { url: '/wissen/branchen/gesundheitswesen-dsgvo', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/healthcare-ai-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/edtech-privacy', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/fintech-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/ecommerce-privacy', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/saas-privacy-design', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/industrie-40-datenschutz', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/automotive-datenschutz', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/smart-grid-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/pharma-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/produktion', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/travel-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/insurtech-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/proptech-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/logistics-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/datenschutz-pflege', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/datenschutz-arztpraxis', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/datenschutz-kindergarten', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/dsgvo-vermieter', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/dsgvo-vereine', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/datenschutz-betriebsrat', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/datenschutz-homeoffice', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/risikoklassifizierung', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/algorithmic-impact-assessment', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/privacy-preserving-ai', priority: '0.9', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/federated-learning', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/financial-ai-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/hr-ai-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/model-privacy-attacks', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/data-minimization', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/explainable-ai', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/privacy-by-design-ai', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/ki-einwilligungsmanagement', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz/automated-decision-making', priority: '0.8', changefreq: 'weekly' }
];

function generateSitemap() {
  console.log('🗺️ Generating XML sitemap for SEO dominance...');
  
  const baseUrl = 'https://marsstein.ai';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  routes.forEach(route => {
    sitemapXml += `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  sitemapXml += '</urlset>';

  const distPath = path.join(__dirname, '..', 'dist');
  const sitemapPath = path.join(distPath, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemapXml);
  
  console.log(`✅ Sitemap generated: ${routes.length} URLs`);
  console.log(`📍 Location: ${sitemapPath}`);
  
  // Also generate robots.txt with sitemap reference
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Optimized for maximum crawling efficiency
Crawl-delay: 1
`;

  const robotsPath = path.join(distPath, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  
  console.log(`🤖 Updated robots.txt with sitemap reference`);
}

generateSitemap();