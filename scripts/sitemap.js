#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/preise', priority: '0.9', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter', priority: '0.9', changefreq: 'weekly' },

  { url: '/dsgvo', priority: '0.9', changefreq: 'weekly' },
  { url: '/eu-ai-act', priority: '0.9', changefreq: 'weekly' },
  { url: '/nis2-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/hinweisgeberschutzgesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/geldwaeschegesetz', priority: '0.8', changefreq: 'weekly' },

  { url: '/iso-27001-zertifizierung', priority: '0.8', changefreq: 'weekly' },
  { url: '/soc2-zertifizierung', priority: '0.8', changefreq: 'weekly' },
  { url: '/iso-27017-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/iso-27018-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/tisax-zertifizierung', priority: '0.7', changefreq: 'weekly' },

  { url: '/compliance/iso-27001', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance/soc-2', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance/eu-ai-act', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance/nis2', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/iso-27017', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/iso-27018', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/hinweisgeberschutzgesetz', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/geldwaeschegesetz', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/tisax', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/dsgvo', priority: '0.7', changefreq: 'monthly' },

  { url: '/assessment-center', priority: '0.6', changefreq: 'weekly' },
  { url: '/assessment-center/dsgvo-compliance-checklist', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/datenschutz-readiness-assessment', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/breach-response-checklist', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/cookie-compliance-audit', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/vendor-assessment-template', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/ai-risk-assessment', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/algorithmic-impact-assessment', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/ai-governance-check', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/datenschutz-test', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/dsgvo-kosten-rechner', priority: '0.7', changefreq: 'weekly' },

  { url: '/ratgeber/datenschutzbeauftragter-auswahl', priority: '0.7', changefreq: 'monthly' },
  { url: '/ratgeber/sicherheitszertifizierung-auswahl', priority: '0.7', changefreq: 'monthly' },
  { url: '/ratgeber/dsgvo-software-auswahlkriterien', priority: '0.7', changefreq: 'monthly' },

  { url: '/branchen', priority: '0.7', changefreq: 'weekly' },
  { url: '/branchen/gesundheitswesen', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/finanzdienstleister', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/e-commerce', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/saas-unternehmen', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/produktion', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/automotive', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/energie', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/lebensmittel', priority: '0.5', changefreq: 'monthly' },
  { url: '/branchen/logistik', priority: '0.5', changefreq: 'monthly' },

  { url: '/tools', priority: '0.7', changefreq: 'weekly' },
  { url: '/tools/cookie-management', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/whistleblower-system', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/cookie-management-tool', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/whistleblower-system-tool', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/dsgvo-email-template-generator', priority: '0.5', changefreq: 'monthly' },
  { url: '/tools/dsgvo-compliance-scorecard', priority: '0.5', changefreq: 'monthly' },
  { url: '/tools/compliance-ai-assistant', priority: '0.5', changefreq: 'monthly' },

  { url: '/wissen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/dsgvo-leitfaeden', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/compliance-frameworks', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/dsgvo-grundlagen', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/website-dsgvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/dsgvo-30-tage', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/data-breach-notfall', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/verarbeitungsverzeichnis', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/betroffenenrechte', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/tom-massnahmen', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/dsfa-durchfuehrung', priority: '0.6', changefreq: 'monthly' },

  { url: '/wissen/kosten/dsgvo-compliance-kosten', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten/externer-datenschutzbeauftragter-kosten', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten/iso-27001-zertifizierung-kosten', priority: '0.7', changefreq: 'monthly' },

  { url: '/wissen/dsgvo-compliance-luecken', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/interner-dsb-scheitert', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/dsgvo-software-vs-manuell', priority: '0.6', changefreq: 'monthly' }
];

function generateSitemap() {
  console.log('🗺️ Generating XML sitemap for SEO...');

  const baseUrl = 'https://marsstein.ai';
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemapXml += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemapXml += `
</urlset>`;

  const distPath = path.join(__dirname, '..', 'dist');
  const publicPath = path.join(__dirname, '..', 'public');
  const distSitemapPath = path.join(distPath, 'sitemap.xml');
  const publicSitemapPath = path.join(publicPath, 'sitemap.xml');

  fs.writeFileSync(distSitemapPath, sitemapXml);
  fs.writeFileSync(publicSitemapPath, sitemapXml);

  console.log(`✅ Sitemap generated: ${routes.length} URLs`);
  console.log(`📍 Locations: ${distSitemapPath} & ${publicSitemapPath}`);
}

generateSitemap();