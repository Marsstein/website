/**
 * Google Apps Script für Google Indexing API - ERWEITERTE VERSION
 *
 * NEUE FUNKTIONEN:
 * - checkAllIndexingStatus(): Prüft Indexing-Status aller URLs
 * - checkHighPriorityStatus(): Prüft nur High-Priority URLs
 * - generateIndexReport(): Erstellt detaillierten Report
 *
 * Kopiere diesen Code und ersetze deinen bestehenden Code in Apps Script
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
  { url: '/dsgvo-audit', priority: '0.9' },
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
  { url: '/wissen/dsgvo-vs-bdsg', priority: '0.8' },
  { url: '/wissen/branchen/datenschutz-personalwesen', priority: '0.8' },
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

/**
 * NEU: Prüft Indexing-Status aller URLs
 */
function checkAllIndexingStatus() {
  Logger.log('🔍 Checking indexing status for ALL URLs...\n');

  const results = {
    submitted: [],
    neverSubmitted: [],
    errors: []
  };

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fullUrl = BASE_URL + route.url;

    Logger.log('Checking: ' + (i + 1) + '/' + routes.length + ' - ' + route.url);

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
  Logger.log('✅ Submitted via Indexing API: ' + results.submitted.length);
  Logger.log('⚠️  Never submitted: ' + results.neverSubmitted.length);
  Logger.log('❌ Errors: ' + results.errors.length);
  Logger.log('='.repeat(60));

  if (results.submitted.length > 0) {
    Logger.log('\n✅ SUBMITTED URLs:');
    results.submitted.forEach(function(item) {
      Logger.log('   - ' + item.url + ' (Priority: ' + item.priority + ', Last: ' + item.lastUpdate + ')');
    });
  }

  if (results.neverSubmitted.length > 0) {
    Logger.log('\n⚠️  NEVER SUBMITTED URLs:');
    results.neverSubmitted.forEach(function(item) {
      Logger.log('   - ' + item.url + ' (Priority: ' + item.priority + ')');
    });
  }

  if (results.errors.length > 0) {
    Logger.log('\n❌ ERRORS:');
    results.errors.forEach(function(item) {
      Logger.log('   - ' + item.url + ': ' + item.error);
    });
  }

  return results;
}

/**
 * NEU: Prüft nur High-Priority URLs
 */
function checkHighPriorityStatus() {
  Logger.log('🔍 Checking indexing status for HIGH-PRIORITY URLs...\n');

  const highPriorityRoutes = routes.filter(function(r) {
    return parseFloat(r.priority) >= 0.8;
  });

  const results = {
    submitted: [],
    neverSubmitted: [],
    errors: []
  };

  for (let i = 0; i < highPriorityRoutes.length; i++) {
    const route = highPriorityRoutes[i];
    const fullUrl = BASE_URL + route.url;

    Logger.log('Checking: ' + (i + 1) + '/' + highPriorityRoutes.length + ' - ' + route.url);

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
      Logger.log('   - ' + item.url);
    });
  }

  return results;
}

/**
 * NEU: Generiert CSV-Report (kann in Google Sheets importiert werden)
 */
function generateIndexReport() {
  Logger.log('📄 Generating CSV Report...\n');

  let csv = 'URL,Priority,Status,Last Update\n';

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const fullUrl = BASE_URL + route.url;

    const result = checkUrlStatus(fullUrl);

    let status = result.status;
    let lastUpdate = '';

    if (result.status === 'submitted' && result.data && result.data.latestUpdate) {
      lastUpdate = result.data.latestUpdate.notifyTime;
    }

    csv += `"${fullUrl}","${route.priority}","${status}","${lastUpdate}"\n`;

    Utilities.sleep(200);
  }

  Logger.log('\n📄 CSV REPORT:\n');
  Logger.log(csv);
  Logger.log('\n💡 Copy the CSV above and paste into Google Sheets!');

  return csv;
}

function setupScript() {
  Logger.log('🔧 Setting up Google Indexing API Script');
  Logger.log('✅ OAuth token obtained successfully');
  Logger.log('📝 You can now run submitHighPriority() or submitAll()');
  Logger.log('🆕 NEW: Run checkAllIndexingStatus() or checkHighPriorityStatus()');
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
