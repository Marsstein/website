#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },

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

  { url: '/resources', priority: '0.6', changefreq: 'weekly' },
  { url: '/resources/dsgvo-compliance-checklist', priority: '0.5', changefreq: 'monthly' },
  { url: '/resources/datenschutz-readiness-assessment', priority: '0.5', changefreq: 'monthly' },
  { url: '/resources/breach-response-checklist', priority: '0.5', changefreq: 'monthly' },
  { url: '/resources/cookie-compliance-audit', priority: '0.5', changefreq: 'monthly' },
  { url: '/resources/vendor-assessment-template', priority: '0.5', changefreq: 'monthly' },

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
  { url: '/tools/dsgvo-bounty-hunter', priority: '0.4', changefreq: 'monthly' },
  { url: '/tools/privacy-token', priority: '0.4', changefreq: 'monthly' },
  { url: '/tools/compliance-ai-assistant', priority: '0.5', changefreq: 'monthly' },

  { url: '/wissen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/dsgvo-leitfaeden', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/compliance-frameworks', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/dsgvo-grundlagen', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/website-dsgvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/dsgvo-30-tage', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/data-breach-notfall', priority: '0.6', changefreq: 'monthly' },

  { url: '/dsgvo-compliance', priority: '0.4', changefreq: 'monthly' },
  { url: '/iso-27001-compliance', priority: '0.4', changefreq: 'monthly' },
  { url: '/eu-ai-act-compliance', priority: '0.4', changefreq: 'monthly' },
  { url: '/soc2-compliance', priority: '0.4', changefreq: 'monthly' },
  { url: '/iso-27017-compliance', priority: '0.4', changefreq: 'monthly' },
  { url: '/iso-27018-compliance', priority: '0.4', changefreq: 'monthly' },
  { url: '/tisax-compliance', priority: '0.4', changefreq: 'monthly' }
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
  const sitemapPath = path.join(distPath, 'sitemap.xml');

  fs.writeFileSync(sitemapPath, sitemapXml);

  console.log(`✅ Sitemap generated: ${routes.length} URLs`);
  console.log(`📍 Location: ${sitemapPath}`);
}

generateSitemap();