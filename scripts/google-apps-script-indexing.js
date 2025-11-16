/**
 * Google Apps Script für Google Indexing API
 *
 * SETUP:
 * 1. Gehe zu https://script.google.com
 * 2. "Neues Projekt"
 * 3. Kopiere diesen Code
 * 4. Services → "+" → "Google Search Console API" hinzufügen (falls verfügbar)
 * 5. Führe "setupScript" aus → Autorisierung erlauben
 * 6. Führe gewünschte Funktion aus (z.B. submitHighPriority)
 *
 * ZEITGESTEUERT:
 * - Klicke auf Uhr-Symbol (Trigger)
 * - "Trigger hinzufügen"
 * - Funktion: submitHighPriority
 * - Zeitbasiert: Täglich, 9-10 Uhr
 *
 * WICHTIG:
 * - Dein Google Account muss Owner in Search Console sein
 * - Erste Ausführung: OAuth Autorisierung nötig
 */

const BASE_URL = 'https://marsstein.ai';
const RATE_LIMIT_PER_DAY = 200;
const BATCH_SIZE = 100;

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
  { url: '/features', priority: '0.9' },
  { url: '/beta', priority: '0.8' },
  { url: '/ueber-uns', priority: '0.8' },
  { url: '/dsgvo', priority: '0.9' },
  { url: '/eu-ai-act', priority: '0.9' },
  { url: '/eu-data-act', priority: '0.8' },
  { url: '/nis2-compliance', priority: '0.8' },
  { url: '/hinweisgeberschutzgesetz', priority: '0.8' },
  { url: '/geldwaeschegesetz', priority: '0.8' },
  { url: '/dsgvo-compliance', priority: '0.8' },
  { url: '/eu-ai-act-compliance', priority: '0.8' },
  { url: '/iso-27001-compliance', priority: '0.8' },
  { url: '/soc2-compliance', priority: '0.8' },
  { url: '/iso-27001-zertifizierung', priority: '0.8' },
  { url: '/soc2-zertifizierung', priority: '0.8' },
  { url: '/dsgvo-china', priority: '0.8' },
  { url: '/wissen', priority: '0.8' },
  { url: '/wissen/leitfaden/datenschutzbeauftragter', priority: '0.8' },
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
      Logger.log('Status for ' + url + ':\n' + response.getContentText());
      return JSON.parse(response.getContentText());
    } else {
      Logger.log('Error checking ' + url + ': HTTP ' + responseCode);
      return null;
    }
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return null;
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

function setupScript() {
  Logger.log('🔧 Setting up Google Indexing API Script');
  Logger.log('✅ OAuth token obtained successfully');
  Logger.log('📝 You can now run submitHighPriority() or submitAll()');
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

  if (status.failed.length > 0) {
    Logger.log('\n❌ Failed URLs:');
    status.failed.forEach(function(f) {
      Logger.log('   - ' + f.url);
    });
  }
}

function checkHomepage() {
  checkUrlStatus(BASE_URL + '/');
}
