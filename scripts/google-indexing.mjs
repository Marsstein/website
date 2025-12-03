#!/usr/bin/env node

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://marsstein.ai';
const BATCH_SIZE = 100;
const RATE_LIMIT_PER_DAY = 200;
const STATUS_FILE = path.join(__dirname, '.indexing-status.json');

const routes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/preise', priority: '0.9', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter', priority: '0.9', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-oldenburg', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-hannover', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-bremen', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-duesseldorf', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-hamburg', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-hildesheim', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-stuttgart', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-muenchen', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-nuernberg', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-koeln', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-wedemark', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-osnabrueck', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-lueneburg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-dresden', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-dortmund', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-nrw', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-braunschweig', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-karlsruhe', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-celle', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-magdeburg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-frankfurt', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-ulm', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-heidelberg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-leipzig', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-bremerhaven', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-mannheim', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-wolfsburg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-bayern', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-niedersachsen', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-muenster', priority: '0.7', changefreq: 'weekly' },
  { url: '/features', priority: '0.9', changefreq: 'weekly' },
  { url: '/beta', priority: '0.8', changefreq: 'weekly' },
  { url: '/ueber-uns', priority: '0.8', changefreq: 'monthly' },

  { url: '/dsgvo', priority: '0.9', changefreq: 'weekly' },
  { url: '/eu-ai-act', priority: '0.9', changefreq: 'weekly' },
  { url: '/eu-data-act', priority: '0.8', changefreq: 'weekly' },
  { url: '/nis2-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/hinweisgeberschutzgesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/geldwaeschegesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/dsg-ekd', priority: '0.7', changefreq: 'monthly' },
  { url: '/kdg', priority: '0.7', changefreq: 'monthly' },

  { url: '/dsgvo-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/eu-ai-act-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/iso-27001-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/iso-27017-compliance', priority: '0.7', changefreq: 'weekly' },
  { url: '/iso-27018-compliance', priority: '0.7', changefreq: 'weekly' },
  { url: '/soc2-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/tisax-compliance', priority: '0.7', changefreq: 'weekly' },

  { url: '/regulierung/dsgvo', priority: '0.8', changefreq: 'weekly' },
  { url: '/regulierung/eu-ai-act', priority: '0.8', changefreq: 'weekly' },
  { url: '/regulierung/nis2', priority: '0.7', changefreq: 'weekly' },
  { url: '/regulierung/hinweisgeberschutzgesetz', priority: '0.7', changefreq: 'weekly' },
  { url: '/regulierung/geldwaeschegesetz', priority: '0.7', changefreq: 'weekly' },

  { url: '/zertifizierung/iso-27001', priority: '0.8', changefreq: 'weekly' },
  { url: '/zertifizierung/iso-27017', priority: '0.7', changefreq: 'weekly' },
  { url: '/zertifizierung/iso-27018', priority: '0.7', changefreq: 'weekly' },
  { url: '/zertifizierung/soc2', priority: '0.8', changefreq: 'weekly' },
  { url: '/zertifizierung/tisax', priority: '0.7', changefreq: 'weekly' },

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
  { url: '/compliance/dsg-ekd', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/kdg', priority: '0.6', changefreq: 'monthly' },

  { url: '/dsgvo-china', priority: '0.8', changefreq: 'weekly' },
  { url: '/dsgvo-amazon-sellers-china', priority: '0.7', changefreq: 'monthly' },
  { url: '/dsgvo-tiktok-shop-china', priority: '0.7', changefreq: 'monthly' },
  { url: '/deepseek-dsgvo', priority: '0.7', changefreq: 'weekly' },
  { url: '/eu-vertreter-china', priority: '0.7', changefreq: 'monthly' },
  { url: '/artikel-15-dsgvo-auskunftsrecht-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/joint-venture-china-datenschutz', priority: '0.6', changefreq: 'monthly' },
  { url: '/china-investitionen-dsgvo-screening', priority: '0.6', changefreq: 'monthly' },
  { url: '/china-scc-vs-eu-scc', priority: '0.6', changefreq: 'monthly' },
  { url: '/dsgvo-wechat-alipay-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/dsgvo-douyin-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/dsgvo-b2b-hersteller-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/pipl-gdpr-china', priority: '0.7', changefreq: 'monthly' },

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
  { url: '/assessment-center/isms-maturity-assessment', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/iso-27001-readiness-check', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/nis2-compliance-check', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/security-controls-audit', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/soc2-readiness-assessment', priority: '0.6', changefreq: 'monthly' },

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
  { url: '/wissen/china', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/cybersecurity', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/dsgvo', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/rechtsprechung', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/risk-management', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/zertifizierungen', priority: '0.7', changefreq: 'weekly' },
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
  { url: '/wissen/leitfaden/datenschutzbeauftragter', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/datenschutzbeauftragter-ausbildung', priority: '0.7', changefreq: 'monthly' },

  { url: '/wissen/kosten/dsgvo-compliance-kosten', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten/externer-datenschutzbeauftragter-kosten', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten/iso-27001-zertifizierung-kosten', priority: '0.7', changefreq: 'monthly' },

  { url: '/wissen/dsgvo-compliance-luecken', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/interner-dsb-scheitert', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/dsgvo-software-vs-manuell', priority: '0.6', changefreq: 'monthly' },

  { url: '/wissen/branchen/automotive-datenschutz', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-arztpraxis', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-betriebsrat', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-homeoffice', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-kindergarten', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-pflege', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/dsgvo-vereine', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/dsgvo-vermieter', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/ecommerce-privacy', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/edtech-privacy', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/fintech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/gesundheitswesen-dsgvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/healthcare-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/industrie-40-datenschutz', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/insurtech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/logistics-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/pharma-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/produktion', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/proptech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/saas-privacy-design', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/smart-grid-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/travel-compliance', priority: '0.6', changefreq: 'monthly' },

  { url: '/wissen/ki-datenschutz/algorithmic-impact-assessment', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/automated-decision-making', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/data-minimization', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/explainable-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/federated-learning', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/financial-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/hr-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/ki-einwilligungsmanagement', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/model-privacy-attacks', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/privacy-by-design-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/privacy-preserving-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/risikoklassifizierung', priority: '0.6', changefreq: 'monthly' },

  { url: '/wissen/krisenmanagement/business-continuity', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/communication-templates', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/compliance-audit-emergency', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/data-breach-72h', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/gdpr-fine-response', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/media-crisis', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/security-incident', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/vendor-data-breach', priority: '0.6', changefreq: 'monthly' },

  { url: '/wissen/rechtsprechung/amazon-luxemburg-2021', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/cookie-law', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/facebook-fanpage', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/google-analytics-austria', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/google-fonts-muenchen', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/meta-irland-2024', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/planet49-cookie', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/schrems-ii', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/whatsapp-irland-2021', priority: '0.6', changefreq: 'monthly' }
];

function loadStatus() {
  if (fs.existsSync(STATUS_FILE)) {
    return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
  }
  return {
    lastRun: null,
    submitted: [],
    failed: [],
    totalSubmitted: 0
  };
}

function saveStatus(status) {
  fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2));
}

async function getAuthClient() {
  const keyFilePath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;

  if (!keyFilePath) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY_PATH environment variable is not set');
  }

  if (!fs.existsSync(keyFilePath)) {
    throw new Error(`Service account key file not found: ${keyFilePath}`);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  return auth.getClient();
}

async function submitUrl(authClient, url, type = 'URL_UPDATED') {
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  try {
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type,
      },
    });
    return { success: true, url, response: response.data };
  } catch (error) {
    return { success: false, url, error: error.message };
  }
}

async function getUrlStatus(authClient, url) {
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  try {
    const response = await indexing.urlNotifications.getMetadata({
      url: url,
    });
    return { success: true, url, data: response.data };
  } catch (error) {
    return { success: false, url, error: error.message };
  }
}

async function submitBatch(urls, action = 'update') {
  console.log(`\n🚀 Starting Google Indexing API batch ${action}...`);
  console.log(`📊 Total URLs to process: ${urls.length}`);

  const authClient = await getAuthClient();
  const status = loadStatus();
  const today = new Date().toISOString().split('T')[0];

  if (status.lastRun === today && status.totalSubmitted >= RATE_LIMIT_PER_DAY) {
    console.log(`⚠️  Daily rate limit reached (${RATE_LIMIT_PER_DAY} URLs/day)`);
    console.log(`📅 Please try again tomorrow`);
    return;
  }

  const remainingQuota = status.lastRun === today
    ? RATE_LIMIT_PER_DAY - status.totalSubmitted
    : RATE_LIMIT_PER_DAY;

  const urlsToProcess = urls.slice(0, Math.min(remainingQuota, BATCH_SIZE));

  console.log(`\n📋 Processing ${urlsToProcess.length} URLs (Quota: ${remainingQuota}/${RATE_LIMIT_PER_DAY})`);

  const results = {
    success: [],
    failed: [],
  };

  const type = action === 'delete' ? 'URL_DELETED' : 'URL_UPDATED';

  for (let i = 0; i < urlsToProcess.length; i++) {
    const route = urlsToProcess[i];
    const fullUrl = `${BASE_URL}${route.url}`;

    process.stdout.write(`\r⏳ Processing: ${i + 1}/${urlsToProcess.length} - ${route.url}`.padEnd(80));

    const result = await submitUrl(authClient, fullUrl, type);

    if (result.success) {
      results.success.push(fullUrl);
    } else {
      results.failed.push({ url: fullUrl, error: result.error });
    }

    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log(`\n\n✅ Successfully submitted: ${results.success.length}`);
  if (results.failed.length > 0) {
    console.log(`❌ Failed: ${results.failed.length}`);
    results.failed.forEach(f => console.log(`   - ${f.url}: ${f.error}`));
  }

  if (status.lastRun !== today) {
    status.submitted = [];
    status.totalSubmitted = 0;
  }

  status.lastRun = today;
  status.submitted = [...status.submitted, ...results.success];
  status.failed = results.failed;
  status.totalSubmitted += results.success.length;

  saveStatus(status);

  console.log(`\n📊 Status saved. Total today: ${status.totalSubmitted}/${RATE_LIMIT_PER_DAY}`);

  if (urlsToProcess.length < urls.length) {
    console.log(`\n⏭️  Remaining URLs: ${urls.length - urlsToProcess.length}`);
    console.log(`💡 Run again to continue processing`);
  }
}

async function checkStatus(url) {
  console.log(`\n🔍 Checking indexing status for: ${url}`);

  const authClient = await getAuthClient();
  const result = await getUrlStatus(authClient, url);

  if (result.success) {
    console.log(`\n✅ Status retrieved successfully:`);
    console.log(JSON.stringify(result.data, null, 2));
  } else {
    console.log(`\n❌ Failed to get status: ${result.error}`);
  }
}

async function submitHighPriority() {
  const highPriorityRoutes = routes
    .filter(r => parseFloat(r.priority) >= 0.8)
    .sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));

  console.log(`\n⭐ Submitting ${highPriorityRoutes.length} high-priority URLs (priority >= 0.8)`);
  await submitBatch(highPriorityRoutes);
}

async function submitAll() {
  const sortedRoutes = routes.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
  await submitBatch(sortedRoutes);
}

async function deleteUrl(url) {
  await submitBatch([{ url }], 'delete');
}

async function showStats() {
  const status = loadStatus();

  console.log('\n📊 Google Indexing API Statistics\n');
  console.log(`Last run: ${status.lastRun || 'Never'}`);
  console.log(`Total submitted today: ${status.totalSubmitted}/${RATE_LIMIT_PER_DAY}`);
  console.log(`Successfully submitted (lifetime): ${status.submitted.length}`);
  console.log(`Failed (last run): ${status.failed.length}`);

  if (status.failed.length > 0) {
    console.log('\n❌ Failed URLs:');
    status.failed.forEach(f => console.log(`   - ${f.url}`));
  }
}

const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
  case 'all':
    await submitAll();
    break;
  case 'high-priority':
    await submitHighPriority();
    break;
  case 'check':
    if (!arg) {
      console.log('Usage: npm run indexing:check <url>');
      process.exit(1);
    }
    await checkStatus(arg);
    break;
  case 'delete':
    if (!arg) {
      console.log('Usage: npm run indexing:delete <url>');
      process.exit(1);
    }
    await deleteUrl(arg);
    break;
  case 'stats':
    await showStats();
    break;
  default:
    console.log(`
Google Indexing API Tool

Usage:
  npm run indexing:all            Submit all URLs (sorted by priority)
  npm run indexing:high-priority  Submit only high-priority URLs (>= 0.8)
  npm run indexing:check <url>    Check indexing status for a URL
  npm run indexing:delete <url>   Delete URL from Google index
  npm run indexing:stats          Show statistics

Limits:
  - 200 URLs per day
  - 100 URLs per batch
  - Automatic rate limiting

Note: Requires GOOGLE_SERVICE_ACCOUNT_KEY_PATH environment variable
    `);
}
