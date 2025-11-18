/**
 * Google Apps Script für Google Indexing API - AKTUALISIERTE VERSION 2025
 *
 * 196 URLs aus der marsstein.ai Sitemap (Stand: 2025-11-18)
 *
 * SETUP:
 * 1. Kopiere diesen GESAMTEN Code
 * 2. Öffne dein Google Apps Script: https://script.google.com
 * 3. Ersetze den bestehenden Code komplett
 * 4. Klicke "Speichern"
 * 5. Führe "setupScript" aus zur Autorisierung
 *
 * WORKFLOW (EMPFOHLEN):
 * 1. checkHighPriorityStatus() -> Sehe welche High-Priority URLs fehlen
 * 2. submitHighPriority() -> Submitte nur die wichtigsten URLs (Tag 1)
 * 3. checkAllIndexingStatus() -> Vollständiger Status-Check (Tag 2)
 * 4. submitMissingUrls() -> Submitte nur URLs die noch nie submitted wurden
 *
 * FUNKTIONEN:
 * - setupScript(): Erste Autorisierung
 * - checkHighPriorityStatus(): Prüft Status der wichtigsten URLs
 * - checkAllIndexingStatus(): Prüft Status ALLER URLs
 * - submitHighPriority(): Submitted High-Priority URLs (Priorität >= 0.8)
 * - submitAll(): Submitted ALLE URLs (sortiert nach Priorität)
 * - submitMissingUrls(): Submitted nur URLs die noch nie via API submitted wurden
 * - generateIndexReport(): Erstellt CSV-Report
 * - showStats(): Zeigt Statistiken
 */

const BASE_URL = 'https://marsstein.ai';
const RATE_LIMIT_PER_DAY = 200;
const BATCH_SIZE = 100;

// 196 URLs aus scripts/sitemap.js (Stand: 2025-11-18)
const routes = [
  { url: '/', priority: '1.0' },
  { url: '/contact', priority: '0.8' },
  { url: '/preise', priority: '0.9' },
  { url: '/externer-datenschutzbeauftragter', priority: '0.9' },
  { url: '/externer-datenschutzbeauftragter-oldenburg', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-hannover', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-bremen', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-duesseldorf', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-hamburg', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-hildesheim', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-stuttgart', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-muenchen', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-nuernberg', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-koeln', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-wedemark', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-osnabrueck', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-lueneburg', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-dresden', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-dortmund', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-nrw', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-braunschweig', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-karlsruhe', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-celle', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-magdeburg', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-frankfurt', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-ulm', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-heidelberg', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-leipzig', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-bremerhaven', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-mannheim', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-wolfsburg', priority: '0.7' },
  { url: '/externer-datenschutzbeauftragter-bayern', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-niedersachsen', priority: '0.8' },
  { url: '/externer-datenschutzbeauftragter-muenster', priority: '0.7' },
  { url: '/features', priority: '0.9' },
  { url: '/beta', priority: '0.8' },
  { url: '/ueber-uns', priority: '0.8' },
  { url: '/dsgvo', priority: '0.9' },
  { url: '/dsgvo-audit', priority: '0.9' },
  { url: '/dsgvo-audit/verified/demo-unternehmen', priority: '0.5' },
  { url: '/dsgvo-audit/certified/demo-mittelstand', priority: '0.5' },
  { url: '/dsgvo-audit/excellence/demo-enterprise', priority: '0.5' },
  { url: '/eu-ai-act', priority: '0.9' },
  { url: '/eu-data-act', priority: '0.8' },
  { url: '/nis2-compliance', priority: '0.8' },
  { url: '/hinweisgeberschutzgesetz', priority: '0.8' },
  { url: '/geldwaeschegesetz', priority: '0.8' },
  { url: '/dsg-ekd', priority: '0.7' },
  { url: '/kdg', priority: '0.7' },
  { url: '/iso-27001-zertifizierung', priority: '0.8' },
  { url: '/soc2-zertifizierung', priority: '0.8' },
  { url: '/iso-27017-zertifizierung', priority: '0.7' },
  { url: '/iso-27018-zertifizierung', priority: '0.7' },
  { url: '/tisax-zertifizierung', priority: '0.7' },
  { url: '/compliance/iso-27001', priority: '0.7' },
  { url: '/compliance/soc-2', priority: '0.7' },
  { url: '/compliance/eu-ai-act', priority: '0.7' },
  { url: '/compliance/nis2', priority: '0.6' },
  { url: '/compliance/iso-27017', priority: '0.6' },
  { url: '/compliance/iso-27018', priority: '0.6' },
  { url: '/compliance/hinweisgeberschutzgesetz', priority: '0.6' },
  { url: '/compliance/geldwaeschegesetz', priority: '0.6' },
  { url: '/compliance/tisax', priority: '0.6' },
  { url: '/compliance/dsgvo', priority: '0.7' },
  { url: '/compliance/dsg-ekd', priority: '0.6' },
  { url: '/compliance/kdg', priority: '0.6' },
  { url: '/dsgvo-china', priority: '0.8' },
  { url: '/dsgvo-amazon-sellers-china', priority: '0.7' },
  { url: '/dsgvo-tiktok-shop-china', priority: '0.7' },
  { url: '/deepseek-dsgvo', priority: '0.7' },
  { url: '/eu-vertreter-china', priority: '0.7' },
  { url: '/artikel-15-dsgvo-auskunftsrecht-china', priority: '0.6' },
  { url: '/joint-venture-china-datenschutz', priority: '0.6' },
  { url: '/china-investitionen-dsgvo-screening', priority: '0.6' },
  { url: '/china-scc-vs-eu-scc', priority: '0.6' },
  { url: '/dsgvo-wechat-alipay-china', priority: '0.6' },
  { url: '/dsgvo-douyin-china', priority: '0.6' },
  { url: '/dsgvo-b2b-hersteller-china', priority: '0.6' },
  { url: '/pipl-gdpr-china', priority: '0.7' },
  { url: '/assessment-center', priority: '0.6' },
  { url: '/assessment-center/dsgvo-compliance-checklist', priority: '0.5' },
  { url: '/assessment-center/datenschutz-readiness-assessment', priority: '0.5' },
  { url: '/assessment-center/breach-response-checklist', priority: '0.5' },
  { url: '/assessment-center/cookie-compliance-audit', priority: '0.5' },
  { url: '/assessment-center/vendor-assessment-template', priority: '0.5' },
  { url: '/assessment-center/ai-risk-assessment', priority: '0.6' },
  { url: '/assessment-center/algorithmic-impact-assessment', priority: '0.6' },
  { url: '/assessment-center/ai-governance-check', priority: '0.6' },
  { url: '/assessment-center/datenschutz-test', priority: '0.5' },
  { url: '/assessment-center/dsgvo-kosten-rechner', priority: '0.7' },
  { url: '/assessment-center/isms-maturity-assessment', priority: '0.5' },
  { url: '/assessment-center/iso-27001-readiness-check', priority: '0.6' },
  { url: '/assessment-center/nis2-compliance-check', priority: '0.6' },
  { url: '/assessment-center/security-controls-audit', priority: '0.5' },
  { url: '/assessment-center/soc2-readiness-assessment', priority: '0.6' },
  { url: '/ratgeber/datenschutzbeauftragter-auswahl', priority: '0.7' },
  { url: '/ratgeber/sicherheitszertifizierung-auswahl', priority: '0.7' },
  { url: '/ratgeber/dsgvo-software-auswahlkriterien', priority: '0.7' },
  { url: '/branchen', priority: '0.7' },
  { url: '/branchen/gesundheitswesen', priority: '0.6' },
  { url: '/branchen/finanzdienstleister', priority: '0.6' },
  { url: '/branchen/e-commerce', priority: '0.6' },
  { url: '/branchen/saas-unternehmen', priority: '0.6' },
  { url: '/branchen/produktion', priority: '0.6' },
  { url: '/branchen/automotive', priority: '0.6' },
  { url: '/branchen/energie', priority: '0.6' },
  { url: '/branchen/lebensmittel', priority: '0.5' },
  { url: '/branchen/logistik', priority: '0.5' },
  { url: '/tools', priority: '0.7' },
  { url: '/tools/cookie-management', priority: '0.6' },
  { url: '/tools/whistleblower-system', priority: '0.6' },
  { url: '/tools/dsgvo-email-template-generator', priority: '0.5' },
  { url: '/tools/dsgvo-compliance-scorecard', priority: '0.5' },
  { url: '/tools/compliance-ai-assistant', priority: '0.5' },
  { url: '/wissen', priority: '0.8' },
  { url: '/wissen/branchen', priority: '0.7' },
  { url: '/wissen/china', priority: '0.7' },
  { url: '/wissen/cybersecurity', priority: '0.7' },
  { url: '/wissen/dsgvo', priority: '0.7' },
  { url: '/wissen/ki-datenschutz', priority: '0.7' },
  { url: '/wissen/krisenmanagement', priority: '0.7' },
  { url: '/wissen/rechtsprechung', priority: '0.7' },
  { url: '/wissen/risk-management', priority: '0.7' },
  { url: '/wissen/zertifizierungen', priority: '0.7' },
  { url: '/wissen/dsgvo-leitfaeden', priority: '0.7' },
  { url: '/wissen/kosten', priority: '0.7' },
  { url: '/wissen/compliance-frameworks', priority: '0.6' },
  { url: '/wissen/leitfaden/dsgvo-grundlagen', priority: '0.6' },
  { url: '/wissen/leitfaden/website-dsgvo', priority: '0.6' },
  { url: '/wissen/leitfaden/dsgvo-30-tage', priority: '0.6' },
  { url: '/wissen/leitfaden/data-breach-notfall', priority: '0.6' },
  { url: '/wissen/leitfaden/verarbeitungsverzeichnis', priority: '0.6' },
  { url: '/wissen/leitfaden/betroffenenrechte', priority: '0.6' },
  { url: '/wissen/leitfaden/tom-massnahmen', priority: '0.6' },
  { url: '/wissen/leitfaden/dsfa-durchfuehrung', priority: '0.6' },
  { url: '/wissen/leitfaden/datenschutzbeauftragter', priority: '0.8' },
  { url: '/wissen/leitfaden/datenschutzbeauftragter-ausbildung', priority: '0.7' },
  { url: '/wissen/kosten/dsgvo-compliance-kosten', priority: '0.7' },
  { url: '/wissen/kosten/externer-datenschutzbeauftragter-kosten', priority: '0.7' },
  { url: '/wissen/kosten/iso-27001-zertifizierung-kosten', priority: '0.7' },
  { url: '/wissen/dsgvo-compliance-luecken', priority: '0.6' },
  { url: '/wissen/interner-dsb-scheitert', priority: '0.6' },
  { url: '/wissen/dsgvo-software-vs-manuell', priority: '0.6' },
  { url: '/wissen/dsgvo-vs-bdsg', priority: '0.8' },
  { url: '/wissen/branchen/automotive-datenschutz', priority: '0.6' },
  { url: '/wissen/branchen/datenschutz-arztpraxis', priority: '0.6' },
  { url: '/wissen/branchen/datenschutz-betriebsrat', priority: '0.6' },
  { url: '/wissen/branchen/datenschutz-homeoffice', priority: '0.6' },
  { url: '/wissen/branchen/datenschutz-kindergarten', priority: '0.6' },
  { url: '/wissen/branchen/datenschutz-personalwesen', priority: '0.8' },
  { url: '/wissen/branchen/datenschutz-pflege', priority: '0.6' },
  { url: '/wissen/branchen/dsgvo-vereine', priority: '0.6' },
  { url: '/wissen/branchen/dsgvo-vermieter', priority: '0.6' },
  { url: '/wissen/branchen/ecommerce-privacy', priority: '0.6' },
  { url: '/wissen/branchen/edtech-privacy', priority: '0.6' },
  { url: '/wissen/branchen/fintech-compliance', priority: '0.6' },
  { url: '/wissen/branchen/gesundheitswesen-dsgvo', priority: '0.6' },
  { url: '/wissen/branchen/healthcare-ai-compliance', priority: '0.6' },
  { url: '/wissen/branchen/industrie-40-datenschutz', priority: '0.6' },
  { url: '/wissen/branchen/insurtech-compliance', priority: '0.6' },
  { url: '/wissen/branchen/logistics-compliance', priority: '0.6' },
  { url: '/wissen/branchen/pharma-compliance', priority: '0.6' },
  { url: '/wissen/branchen/produktion', priority: '0.6' },
  { url: '/wissen/branchen/proptech-compliance', priority: '0.6' },
  { url: '/wissen/branchen/saas-privacy-design', priority: '0.6' },
  { url: '/wissen/branchen/smart-grid-compliance', priority: '0.6' },
  { url: '/wissen/branchen/travel-compliance', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/algorithmic-impact-assessment', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/automated-decision-making', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/data-minimization', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/explainable-ai', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/federated-learning', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/financial-ai-compliance', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/hr-ai-compliance', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/ki-einwilligungsmanagement', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/model-privacy-attacks', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/privacy-by-design-ai', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/privacy-preserving-ai', priority: '0.6' },
  { url: '/wissen/ki-datenschutz/risikoklassifizierung', priority: '0.6' },
  { url: '/wissen/krisenmanagement/business-continuity', priority: '0.6' },
  { url: '/wissen/krisenmanagement/communication-templates', priority: '0.6' },
  { url: '/wissen/krisenmanagement/compliance-audit-emergency', priority: '0.6' },
  { url: '/wissen/krisenmanagement/data-breach-72h', priority: '0.6' },
  { url: '/wissen/krisenmanagement/gdpr-fine-response', priority: '0.6' },
  { url: '/wissen/krisenmanagement/media-crisis', priority: '0.6' },
  { url: '/wissen/krisenmanagement/security-incident', priority: '0.6' },
  { url: '/wissen/krisenmanagement/vendor-data-breach', priority: '0.6' },
  { url: '/wissen/rechtsprechung/amazon-luxemburg-2021', priority: '0.6' },
  { url: '/wissen/rechtsprechung/cookie-law', priority: '0.6' },
  { url: '/wissen/rechtsprechung/facebook-fanpage', priority: '0.6' },
  { url: '/wissen/rechtsprechung/google-analytics-austria', priority: '0.6' },
  { url: '/wissen/rechtsprechung/google-fonts-muenchen', priority: '0.6' },
  { url: '/wissen/rechtsprechung/meta-irland-2024', priority: '0.6' },
  { url: '/wissen/rechtsprechung/planet49-cookie', priority: '0.6' },
  { url: '/wissen/rechtsprechung/schrems-ii', priority: '0.6' },
  { url: '/wissen/rechtsprechung/whatsapp-irland-2021', priority: '0.6' }
];

function getProperties() {
  return PropertiesService.getScriptProperties();
}

function loadStatus() {
  const props = getProperties();
  const statusJson = props.getProperty('indexing_status');

  if (statusJson) {
    return JSON.parse(statusJson);
  }

  return {
    lastRun: null,
    submitted: [],
    failed: [],
    totalSubmitted: 0
  };
}

function saveStatus(status) {
  const props = getProperties();
  props.setProperty('indexing_status', JSON.stringify(status));
}

function submitUrl(url, type = 'URL_UPDATED') {
  const endpoint = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

  const payload = {
    url: url,
    type: type
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    },
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(endpoint, options);
    const responseCode = response.getResponseCode();

    if (responseCode === 200) {
      return { success: true, url: url };
    } else {
      return {
        success: false,
        url: url,
        error: `HTTP ${responseCode}: ${response.getContentText()}`
      };
    }
  } catch (error) {
    return {
      success: false,
      url: url,
      error: error.toString()
    };
  }
}

function checkUrlStatus(url) {
  const endpoint = `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`;

  const options = {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken()
    },
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(endpoint, options);
    const responseCode = response.getResponseCode();

    if (responseCode === 200) {
      return {
        success: true,
        url: url,
        data: JSON.parse(response.getContentText()),
        status: 'submitted'
      };
    } else if (responseCode === 404) {
      return {
        success: true,
        url: url,
        status: 'never_submitted',
        message: 'URL was never submitted via Indexing API'
      };
    } else {
      return {
        success: false,
        url: url,
        status: 'error',
        error: `HTTP ${responseCode}`
      };
    }
  } catch (error) {
    return {
      success: false,
      url: url,
      status: 'error',
      error: error.toString()
    };
  }
}

function submitBatch(urlsToSubmit, action = 'update') {
  Logger.log('🚀 Starting Google Indexing API batch ' + action);
  Logger.log('📊 Total URLs to process: ' + urlsToSubmit.length);

  const status = loadStatus();
  const today = new Date().toISOString().split('T')[0];

  if (status.lastRun === today && status.totalSubmitted >= RATE_LIMIT_PER_DAY) {
    Logger.log('⚠️ Daily rate limit reached (' + RATE_LIMIT_PER_DAY + ' URLs/day)');
    Logger.log('📅 Please try again tomorrow');
    return;
  }

  const remainingQuota = status.lastRun === today
    ? RATE_LIMIT_PER_DAY - status.totalSubmitted
    : RATE_LIMIT_PER_DAY;

  const urlsToProcess = urlsToSubmit.slice(0, Math.min(remainingQuota, BATCH_SIZE));

  Logger.log('📋 Processing ' + urlsToProcess.length + ' URLs (Quota: ' + remainingQuota + '/' + RATE_LIMIT_PER_DAY + ')');

  const results = {
    success: [],
    failed: []
  };

  const type = action === 'delete' ? 'URL_DELETED' : 'URL_UPDATED';

  for (let i = 0; i < urlsToProcess.length; i++) {
    const route = urlsToProcess[i];
    const fullUrl = BASE_URL + route.url;

    Logger.log('⏳ Processing: ' + (i + 1) + '/' + urlsToProcess.length + ' - ' + route.url);

    const result = submitUrl(fullUrl, type);

    if (result.success) {
      results.success.push(fullUrl);
    } else {
      results.failed.push({ url: fullUrl, error: result.error });
    }

    Utilities.sleep(100);
  }

  Logger.log('✅ Successfully submitted: ' + results.success.length);
  if (results.failed.length > 0) {
    Logger.log('❌ Failed: ' + results.failed.length);
    results.failed.forEach(function(f) {
      Logger.log('   - ' + f.url + ': ' + f.error);
    });
  }

  if (status.lastRun !== today) {
    status.submitted = [];
    status.totalSubmitted = 0;
  }

  status.lastRun = today;
  status.submitted = status.submitted.concat(results.success);
  status.failed = results.failed;
  status.totalSubmitted += results.success.length;

  saveStatus(status);

  Logger.log('📊 Status saved. Total today: ' + status.totalSubmitted + '/' + RATE_LIMIT_PER_DAY);

  if (urlsToProcess.length < urlsToSubmit.length) {
    Logger.log('⏭️ Remaining URLs: ' + (urlsToSubmit.length - urlsToProcess.length));
    Logger.log('💡 Run again to continue processing');
  }
}

function checkAllIndexingStatus() {
  Logger.log('🔍 Checking indexing status for ALL URLs...\n');
  Logger.log('⏰ This will take ~' + Math.ceil(routes.length * 0.2 / 60) + ' minutes (200ms per URL)\n');

  const results = {
    submitted: [],
    neverSubmitted: [],
    errors: []
  };

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fullUrl = BASE_URL + route.url;

    if (i % 10 === 0) {
      Logger.log('Progress: ' + i + '/' + routes.length + ' URLs checked...');
    }

    const result = checkUrlStatus(fullUrl);

    if (result.status === 'submitted') {
      results.submitted.push({
        url: fullUrl,
        priority: route.priority,
        lastUpdate: result.data.latestUpdate ? result.data.latestUpdate.notifyTime : 'Unknown'
      });
    } else if (result.status === 'never_submitted') {
      results.neverSubmitted.push({
        url: fullUrl,
        priority: route.priority
      });
    } else {
      results.errors.push({
        url: fullUrl,
        error: result.error
      });
    }

    Utilities.sleep(200);
  }

  Logger.log('\n\n📊 INDEXING STATUS REPORT\n');
  Logger.log('='.repeat(60));
  Logger.log('Total URLs: ' + routes.length);
  Logger.log('✅ Submitted via Indexing API: ' + results.submitted.length);
  Logger.log('⚠️  Never submitted: ' + results.neverSubmitted.length);
  Logger.log('❌ Errors: ' + results.errors.length);
  Logger.log('='.repeat(60));

  if (results.neverSubmitted.length > 0) {
    Logger.log('\n⚠️  NEVER SUBMITTED URLs (sorted by priority):');
    results.neverSubmitted.sort(function(a, b) {
      return parseFloat(b.priority) - parseFloat(a.priority);
    });
    results.neverSubmitted.slice(0, 20).forEach(function(item) {
      Logger.log('   [' + item.priority + '] ' + item.url);
    });
    if (results.neverSubmitted.length > 20) {
      Logger.log('   ... and ' + (results.neverSubmitted.length - 20) + ' more');
    }
  }

  if (results.submitted.length > 0) {
    Logger.log('\n✅ SUBMITTED URLs (showing first 10):');
    results.submitted.slice(0, 10).forEach(function(item) {
      Logger.log('   [' + item.priority + '] ' + item.url);
    });
    if (results.submitted.length > 10) {
      Logger.log('   ... and ' + (results.submitted.length - 10) + ' more');
    }
  }

  return results;
}

function checkHighPriorityStatus() {
  Logger.log('🔍 Checking indexing status for HIGH-PRIORITY URLs...\n');

  const highPriorityRoutes = routes.filter(function(r) {
    return parseFloat(r.priority) >= 0.8;
  });

  Logger.log('Total High-Priority URLs (>= 0.8): ' + highPriorityRoutes.length);
  Logger.log('⏰ This will take ~' + Math.ceil(highPriorityRoutes.length * 0.2 / 60) + ' minutes\n');

  const results = {
    submitted: [],
    neverSubmitted: [],
    errors: []
  };

  for (let i = 0; i < highPriorityRoutes.length; i++) {
    const route = highPriorityRoutes[i];
    const fullUrl = BASE_URL + route.url;

    Logger.log('Checking ' + (i + 1) + '/' + highPriorityRoutes.length + ': ' + route.url);

    const result = checkUrlStatus(fullUrl);

    if (result.status === 'submitted') {
      results.submitted.push({
        url: fullUrl,
        priority: route.priority,
        lastUpdate: result.data.latestUpdate ? result.data.latestUpdate.notifyTime : 'Unknown'
      });
    } else if (result.status === 'never_submitted') {
      results.neverSubmitted.push({
        url: fullUrl,
        priority: route.priority
      });
    } else {
      results.errors.push({
        url: fullUrl,
        error: result.error
      });
    }

    Utilities.sleep(200);
  }

  Logger.log('\n\n📊 HIGH-PRIORITY INDEXING STATUS\n');
  Logger.log('='.repeat(60));
  Logger.log('Total High-Priority URLs: ' + highPriorityRoutes.length);
  Logger.log('✅ Submitted: ' + results.submitted.length);
  Logger.log('⚠️  Never submitted: ' + results.neverSubmitted.length);
  Logger.log('❌ Errors: ' + results.errors.length);
  Logger.log('='.repeat(60));

  if (results.neverSubmitted.length > 0) {
    Logger.log('\n⚠️  THESE HIGH-PRIORITY URLs NEED SUBMISSION:');
    results.neverSubmitted.forEach(function(item) {
      Logger.log('   [' + item.priority + '] ' + item.url);
    });
  } else {
    Logger.log('\n✅ All high-priority URLs have been submitted!');
  }

  return results;
}

function submitMissingUrls() {
  Logger.log('🔍 Step 1: Checking which URLs have never been submitted...\n');

  const neverSubmitted = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fullUrl = BASE_URL + route.url;

    if (i % 10 === 0) {
      Logger.log('Checking: ' + i + '/' + routes.length + ' URLs...');
    }

    const result = checkUrlStatus(fullUrl);

    if (result.status === 'never_submitted') {
      neverSubmitted.push(route);
    }

    Utilities.sleep(200);
  }

  Logger.log('\n✅ Check complete!');
  Logger.log('Found ' + neverSubmitted.length + ' URLs that were never submitted\n');

  if (neverSubmitted.length === 0) {
    Logger.log('🎉 All URLs have already been submitted!');
    return;
  }

  Logger.log('🚀 Step 2: Submitting missing URLs (sorted by priority)...\n');

  neverSubmitted.sort(function(a, b) {
    return parseFloat(b.priority) - parseFloat(a.priority);
  });

  submitBatch(neverSubmitted);
}

function generateIndexReport() {
  Logger.log('📄 Generating CSV Report...\n');
  Logger.log('⏰ This will take ~' + Math.ceil(routes.length * 0.2 / 60) + ' minutes\n');

  let csv = 'URL,Priority,Status,Last Update\n';

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fullUrl = BASE_URL + route.url;

    if (i % 10 === 0) {
      Logger.log('Processing: ' + i + '/' + routes.length + ' URLs...');
    }

    const result = checkUrlStatus(fullUrl);

    let status = result.status;
    let lastUpdate = '';

    if (result.status === 'submitted' && result.data && result.data.latestUpdate) {
      lastUpdate = result.data.latestUpdate.notifyTime;
    }

    csv += `"${fullUrl}","${route.priority}","${status}","${lastUpdate}"\n`;

    Utilities.sleep(200);
  }

  Logger.log('\n\n📄 CSV REPORT:\n');
  Logger.log(csv);
  Logger.log('\n💡 Copy the CSV above and paste into Google Sheets!');

  return csv;
}

function setupScript() {
  Logger.log('🔧 Setting up Google Indexing API Script');
  Logger.log('✅ OAuth token obtained successfully');
  Logger.log('');
  Logger.log('📊 Total URLs in sitemap: ' + routes.length);
  Logger.log('');
  Logger.log('🎯 RECOMMENDED WORKFLOW:');
  Logger.log('1. checkHighPriorityStatus() -> See which important URLs need submission');
  Logger.log('2. submitHighPriority() -> Submit high-priority URLs first');
  Logger.log('3. checkAllIndexingStatus() -> Full status check (takes ~' + Math.ceil(routes.length * 0.2 / 60) + ' min)');
  Logger.log('4. submitMissingUrls() -> Submit only missing URLs');
  Logger.log('');
  Logger.log('✨ You can now run any function from the dropdown!');
}

function submitHighPriority() {
  const highPriorityRoutes = routes
    .filter(function(r) { return parseFloat(r.priority) >= 0.8; })
    .sort(function(a, b) { return parseFloat(b.priority) - parseFloat(a.priority); });

  Logger.log('⭐ Submitting ' + highPriorityRoutes.length + ' high-priority URLs (priority >= 0.8)');
  submitBatch(highPriorityRoutes);
}

function submitAll() {
  const sortedRoutes = routes.sort(function(a, b) {
    return parseFloat(b.priority) - parseFloat(a.priority);
  });

  Logger.log('📊 Submitting ALL ' + routes.length + ' URLs (sorted by priority)');
  submitBatch(sortedRoutes);
}

function deleteUrl(url) {
  submitBatch([{ url: url }], 'delete');
}

function showStats() {
  const status = loadStatus();

  Logger.log('\n📊 Google Indexing API Statistics\n');
  Logger.log('Last run: ' + (status.lastRun || 'Never'));
  Logger.log('Total submitted today: ' + status.totalSubmitted + '/' + RATE_LIMIT_PER_DAY);
  Logger.log('Successfully submitted (lifetime): ' + status.submitted.length);
  Logger.log('Failed (last run): ' + status.failed.length);
  Logger.log('');
  Logger.log('📊 Sitemap Info:');
  Logger.log('Total URLs in sitemap: ' + routes.length);
  Logger.log('High-priority URLs (>= 0.8): ' + routes.filter(function(r) { return parseFloat(r.priority) >= 0.8; }).length);

  if (status.failed.length > 0) {
    Logger.log('\n❌ Failed URLs:');
    status.failed.forEach(function(f) {
      Logger.log('   - ' + f.url);
    });
  }
}

function checkHomepage() {
  const result = checkUrlStatus(BASE_URL + '/');

  if (result.status === 'submitted') {
    Logger.log('✅ Homepage was submitted via Indexing API');
    Logger.log('Last update: ' + result.data.latestUpdate.notifyTime);
  } else if (result.status === 'never_submitted') {
    Logger.log('⚠️  Homepage was never submitted');
  } else {
    Logger.log('❌ Error checking homepage: ' + result.error);
  }
}
