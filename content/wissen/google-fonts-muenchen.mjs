export default {
  route: '/wissen/rechtsprechung/google-fonts-muenchen',
  title: 'Google Fonts DSGVO-Urteil München',
  description: 'LG München I, Urteil vom 20.01.2022 - 3 O 17493/20 • €100 Schadensersatz',
  content: `) => document.head.removeChild(style);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: AlertTriangle },
    { id: 'verdict', label: 'Urteil-Details', icon: Shield },
    { id: 'technical', label: 'Technische Analyse', icon: Code },
    { id: 'solutions', label: 'Lösungsansätze', icon: Server },
    { id: 'implementation', label: 'Implementation', icon: Terminal },
    { id: 'webdev', label: 'Webdev-Guide', icon: Zap }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab ></OverviewTab>;
      case 'verdict':
        return <VerdictTab ></VerdictTab>;
      case 'technical':
        return <TechnicalTab ></TechnicalTab>;
      case 'solutions':
        return <SolutionsTab ></SolutionsTab>;
      case 'implementation':
        return <ImplementationTab ></ImplementationTab>;
      case 'webdev':
        return <WebdevGuideTab ></WebdevGuideTab>;
      default:
        return <OverviewTab ></OverviewTab>;
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Helmet>
        <title>Google Fonts DSGVO Urteil München €100 – Lokales Font Hosting</title>
        <meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta>
        <meta>
        <meta>
        <link rel="canonical" href="https://marsjonas.de/wissen/rechtsprechung/google-fonts-muenchen" />
      </Helmet>
      {/* Header */}
      <header class="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div class="container mx-auto px-4">
          <h1>
            Google Fonts DSGVO-Urteil München
          </h1>
          <p class="text-xl opacity-90">
            LG München I, Urteil vom 20.01.2022 - 3 O 17493/20 • €100 Schadensersatz
          </p>
          <div class="mt-6 flex items-center space-x-4">
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm">
              Technische Case Study
            </span>
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm">
              Webentwickler-Guide
            </span>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div class="sticky top-0 bg-white shadow-md z-10">
        <div class="container mx-auto px-4">
          <div class="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                 
                  class=flex items-center space-x-2 px-6 py-4 border-b-4 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600 bg-orange-50'
                      : 'border-transparent text-gray-600 hover:text-orange-600 hover:bg-orange-50/50'
                  }
                >
                  <Icon class="w-5 h-5" ></Icon>
                  <span class="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div class="container mx-auto px-4 py-8">
        
      </div>

      {/* CTA Section */}
      <section class="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 mt-12">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">
            Benötigen Sie Hilfe bei der DSGVO-konformen Umsetzung?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Wir unterstützen Sie bei der technischen Migration und Compliance-Optimierung
          </p>
          <div>
            <button>
              Kostenlose Beratung
            </button>
            <button>
              Compliance-Check
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Overview Tab Component
const OverviewTab: React.FC = () => {
  return (
    <div class="max-w-4xl mx-auto space-y-8">
      {/* Table of Contents */}
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <nav aria-label="Inhaltsverzeichnis">
          <h2 id="inhaltsverzeichnis" class="text-xl font-bold text-gray-800 mb-4">Inhaltsverzeichnis</h2>
          <ul class="space-y-2 text-gray-600">
            <li><a>1. Das Urteil im Überblick</a></li>
            <li><a>2. Timeline & Entwicklung</a></li>
            <li><a>3. Urteilsdetails & Rechtliche Grundlagen</a></li>
            <li><a>4. Technische Analyse</a></li>
            <li><a>5. DSGVO-konforme Lösungsansätze</a></li>
            <li><a>6. Migration Guide</a></li>
          </ul>
        </nav>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 id="urteil-ueberblick" class="text-2xl font-bold text-gray-800 mb-6">
          Das Urteil im Überblick
        </h2>
        
        <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <div class="flex items-start">
            <AlertTriangle class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" ></AlertTriangle>
            <div>
              <h3 class="font-semibold text-red-800 mb-2">Kernaussage des Urteils</h3>
              <p class="text-red-700">
                Die dynamische Einbindung von Google Fonts ohne Einwilligung verstößt gegen die DSGVO, 
                da dabei die IP-Adresse des Nutzers an Google-Server in den USA übertragen wird.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-orange-50 p-6 rounded-lg">
            <h3 class="font-semibold text-orange-800 mb-3">Streitwert & Schadensersatz</h3>
            <ul class="space-y-2 text-orange-700">
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" ></CheckCircle>
                <span>100 € Schadensersatz zugesprochen</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" ></CheckCircle>
                <span>Unterlassungsanspruch bestätigt</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" ></CheckCircle>
                <span>Präzedenzfall für weitere Klagen</span>
              </li>
            </ul>
          </div>

          <div class="bg-red-50 p-6 rounded-lg">
            <h3 class="font-semibold text-red-800 mb-3">Technische Verstöße</h3>
            <ul class="space-y-2 text-red-700">
              <li class="flex items-start">
                <XCircle class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" ></XCircle>
                <span>IP-Adresse an US-Server übertragen</span>
              </li>
              <li class="flex items-start">
                <XCircle class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" ></XCircle>
                <span>Keine Rechtsgrundlage nach Art. 6 DSGVO</span>
              </li>
              <li class="flex items-start">
                <XCircle class="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" ></XCircle>
                <span>Fehlende Nutzereinwilligung</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="font-semibold text-gray-800 mb-3">Auswirkungen für Webseitenbetreiber</h3>
          <p class="text-gray-700 mb-4">
            Das Urteil hat weitreichende Konsequenzen für alle Webseitenbetreiber, die externe Dienste einbinden. 
            Ähnlich wie bei <Link>Cookie-Consent Verstößen</Link> 
            zeigt sich auch hier die Notwendigkeit DSGVO-konformer Datenverarbeitung:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>• Sofortiger Handlungsbedarf bei Google Fonts-Nutzung</li>
            <li>• Überprüfung aller externen Ressourcen erforderlich</li>
            <li>• Lokales Hosting als sichere Alternative</li>
            <li>• Dokumentation der technischen Umsetzung notwendig</li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 id="timeline" class="text-2xl font-bold text-gray-800 mb-6">
          Timeline & Entwicklung
        </h2>
        
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
            <div>
              <h4 class="font-semibold text-gray-800">Januar 2022</h4>
              <p class="text-gray-600">LG München I fällt wegweisendes Urteil zu Google Fonts</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
            <div>
              <h4 class="font-semibold text-gray-800">Folgemonate</h4>
              <p class="text-gray-600">Massenhafte Abmahnwellen gegen Webseitenbetreiber</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
            <div>
              <h4 class="font-semibold text-gray-800">Heute</h4>
              <p class="text-gray-600">Lokales Font-Hosting als Standard etabliert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Verdict Details Tab
const VerdictTab: React.FC = () => ;

// Technical Analysis Tab
const TechnicalTab: React.FC = () => {
  return (
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 id="technische-analyse" class="text-2xl font-bold text-gray-800 mb-6">
          Technische Analyse der Google Fonts Problematik
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              So funktioniert die Google Fonts Einbindung
            </h3>
            
            <div class="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <pre class="text-sm">
                <code><!-- Problematische Einbindung -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link></code>
              </pre>
            </div>

            <div class="mt-4 bg-red-50 p-4 rounded-lg">
              <h4 class="font-semibold text-red-800 mb-2">Was passiert technisch?</h4>
              <ol class="space-y-2 text-red-700">
                <li>1. Browser lädt HTML und findet Google Fonts Link</li>
                <li>2. DNS-Anfrage an fonts.googleapis.com</li>
                <li>3. HTTPS-Verbindung zu Google-Server aufgebaut</li>
                <li>4. <strong>IP-Adresse des Nutzers wird übertragen</strong></li>
                <li>5. User-Agent und Referrer werden gesendet</li>
                <li>6. Google kann Nutzerprofile erstellen</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Übertragene Daten im Detail
            </h3>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-3">HTTP Request Headers</h4>
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-xs">
                  <code>GET /css2?family=Open+Sans:wght@400;700&display=swap HTTP/2
Host: fonts.googleapis.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
Accept: text/css,*/*;q=0.1
Accept-Language: de-DE,de;q=0.9,en;q=0.8
Accept-Encoding: gzip, deflate, br
Referer: https://example.com/
X-Forwarded-For: 192.0.2.1
X-Real-IP: 192.0.2.1</code>
                </pre>
              </div>
            </div>

            <div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold text-orange-800 mb-2">Personenbezogene Daten</h4>
                <ul class="space-y-1 text-orange-700 text-sm">
                  <li>• IP-Adresse (Standort-Rückschlüsse)</li>
                  <li>• Browser & OS (User-Agent)</li>
                  <li>• Spracheinstellungen</li>
                  <li>• Referrer (besuchte Seite)</li>
                  <li>• Zeitstempel des Zugriffs</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-semibold text-red-800 mb-2">Tracking-Potential</h4>
                <ul class="space-y-1 text-red-700 text-sm">
                  <li>• Cross-Site Tracking möglich</li>
                  <li>• Nutzerprofile über Websites</li>
                  <li>• Verknüpfung mit Google-Account</li>
                  <li>• Langzeit-Tracking via Cache</li>
                  <li>• Browser-Fingerprinting</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Performance-Analyse
            </h3>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-3">Ladezeiten-Vergleich</h4>
              
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700">Google Fonts CDN</span>
                    <span class="text-sm text-gray-600">~150-300ms</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-red-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700">Lokales Hosting</span>
                    <span class="text-sm text-gray-600">~20-50ms</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-500 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-gray-700">Mit Preload optimiert</span>
                    <span class="text-sm text-gray-600">~10-30ms</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
              </div>
              
              <p class="text-sm text-gray-600 mt-4">
                * Durchschnittswerte bei 4G-Verbindung, können je nach Standort und Netzwerk variieren
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          Netzwerk-Analyse Tools
        </h2>
        
        <div class="space-y-4">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Chrome DevTools Prüfung</h3>
            <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              <pre class="text-sm">
                <code>// 1. Chrome DevTools öffnen (F12)
// 2. Network Tab auswählen
// 3. Filter: "fonts" oder "googleapis"
// 4. Seite neu laden
// 5. Prüfen auf externe Font-Requests</code>
              </pre>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Automatisierte Prüfung</h3>
            <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              <pre class="text-sm">
                <code>// Node.js Script zur Font-Prüfung
const puppeteer = require('puppeteer');

async function checkGoogleFonts(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const googleFontRequests = [];
  
  page.on('request', (request) => {
    if (request.url().includes('fonts.googleapis.com') || 
        request.url().includes('fonts.gstatic.com')) 
  });
  
  await page.goto(url);
  await browser.close();
  
  return googleFontRequests;
}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Solutions Tab
const SolutionsTab: React.FC = () => {
  return (
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 id="loesungsansaetze" class="text-2xl font-bold text-gray-800 mb-6">
          DSGVO-konforme Lösungsansätze
        </h2>

        <div>
          <div class="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
            <div class="flex items-center mb-3">
              <CheckCircle class="w-6 h-6 text-green-600 mr-2" ></CheckCircle>
              <h3 class="font-semibold text-green-800">Empfohlen: Lokales Hosting</h3>
            </div>
            <ul class="space-y-2 text-green-700">
              <li>• Fonts auf eigenem Server hosten</li>
              <li>• Keine externe Datenübertragung</li>
              <li>• Volle Kontrolle über Caching</li>
              <li>• Bessere Performance möglich</li>
              <li>• DSGVO-konform ohne Einwilligung</li>
            </ul>
          </div>

          <div class="bg-orange-50 border-2 border-orange-400 p-6 rounded-lg">
            <div class="flex items-center mb-3">
              <AlertTriangle class="w-6 h-6 text-orange-600 mr-2" ></AlertTriangle>
              <h3 class="font-semibold text-orange-800">Möglich: Mit Consent</h3>
            </div>
            <ul class="space-y-2 text-orange-700">
              <li>• Explizite Einwilligung einholen</li>
              <li>• Consent-Banner implementieren</li>
              <li>• Fonts erst nach Zustimmung laden</li>
              <li>• Fallback-Fonts definieren</li>
              <li>• Komplexere Implementierung</li>
            </ul>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Option 1: Google Fonts Helper
            </h3>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-700 mb-4">
                Der Google Fonts Helper automatisiert den Download-Prozess:
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4">
                <pre class="text-sm">
                  <code># 1. Besuche: https://google-webfonts-helper.herokuapp.com
# 2. Wähle gewünschte Schriftart
# 3. Wähle Zeichensätze und Stile
# 4. Download als ZIP
# 5. CSS-Code kopieren</code>
                </pre>
              </div>

              <div class="bg-blue-50 p-4 rounded">
                <h4 class="font-semibold text-blue-800 mb-2">Generiertes CSS-Beispiel:</h4>
                <div class="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre class="text-xs">
                    <code>@font-face </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Option 2: NPM Package Installation
            </h3>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-700 mb-4">
                Für moderne Build-Prozesse mit Webpack/Vite:
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code># Installation via NPM
npm install @fontsource/open-sans

# In deiner CSS/JS Datei
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

# Oder in CSS
@import "~@fontsource/open-sans/400.css";
@import "~@fontsource/open-sans/700.css";</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Option 3: Proxy-Lösung (Advanced)
            </h3>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-700 mb-4">
                Server-seitiges Proxying für dynamische Font-Anfragen:
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code>{`// Node.js Express Proxy
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/fonts/css2', async (req, res) => {
  try {
    // Entferne sensible Header
    const { data } = await axios.get(\`https://fonts.googleapis.com/css2?\${req.query}\`, {
      headers: {
        'User-Agent': 'Mozilla/5.0' // Generic UA
      }
    });
    
    // Ersetze Google URLs mit lokalen
    const localizedCSS = data
      .replace(/https:\\/\\/fonts\\.gstatic\\.com/g, '/fonts/files');
    
    res.setHeader('Content-Type', 'text/css');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.send(localizedCSS);
  } catch (error) 
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          Alternative Font-Lösungen
        </h2>
        
        <div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">System Fonts</h3>
            <p class="text-gray-600 text-sm mb-3">
              Native Schriften ohne Downloads
            </p>
            <div class="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
              <code>font-family: -apple-system, 
BlinkMacSystemFont, 
"Segoe UI", Roboto, 
Helvetica, Arial, 
sans-serif;</code>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Variable Fonts</h3>
            <p class="text-gray-600 text-sm mb-3">
              Eine Datei, alle Stile
            </p>
            <div class="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
              <code>@font-face </code>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Font Loading API</h3>
            <p class="text-gray-600 text-sm mb-3">
              Kontrolle über Ladeverhalten
            </p>
            <div class="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
              <code>const font = new FontFace(
  'CustomFont',
  'url(/fonts/custom.woff2)'
);
await font.load();</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Implementation Tab
const ImplementationTab: React.FC = () => {
  return (
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 id="migration-guide" class="text-2xl font-bold text-gray-800 mb-6">
          Schritt-für-Schritt Migration Guide
        </h2>

        <div class="space-y-8">
          {/* Step 1 */}
          <div class="border-l-4 border-orange-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Schritt 1: Aktuelle Fonts identifizieren
            </h3>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <p class="text-gray-700 mb-3">
                Suche in deinem Projekt nach Google Fonts Einbindungen:
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code># Bash/Terminal
grep -r "fonts.googleapis.com" . --include="*.html" --include="*.css" --include="*.js"
grep -r "fonts.gstatic.com" . --include="*.html" --include="*.css" --include="*.js"

# Oder mit ripgrep (schneller)
rg "fonts\.(googleapis|gstatic)\.com" -t html -t css -t js</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div class="border-l-4 border-orange-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Schritt 2: Fonts herunterladen
            </h3>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <p class="text-gray-700 mb-3">
                Methode A: Google Fonts Helper
              </p>
              
              <ol class="space-y-2 text-gray-600 mb-4">
                <li>1. Öffne <a href="https://google-webfonts-helper.herokuapp.com" class="text-orange-600 underline">Google Fonts Helper</a></li>
                <li>2. Suche deine Schriftart (z.B. "Open Sans")</li>
                <li>3. Wähle benötigte Styles (Regular, Bold, etc.)</li>
                <li>4. Wähle "Modern Browsers" für WOFF2</li>
                <li>5. Download ZIP-Datei</li>
              </ol>

              <p class="text-gray-700 mb-3">
                Methode B: Manueller Download
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code># Python Script zum automatischen Download
import requests
import os

def download_font(font_url, output_dir="./fonts"):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Google Fonts CSS abrufen
    css_response = requests.get(font_url)
    css_content = css_response.text
    
    # Font URLs extrahieren und downloaden
    import re
    font_urls = re.findall(r'url\((https://[^)]+)\)', css_content)
    
    for url in font_urls:
        filename = url.split('/')[-1]
        font_response = requests.get(url)
        
        with open(f"{output_dir}/{filename}", 'wb') as f:
            f.write(font_response.content)
        
        print(f"Downloaded: {filename}")

# Verwendung
download_font("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700")</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div class="border-l-4 border-orange-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Schritt 3: Fonts in Projekt integrieren
            </h3>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <p class="text-gray-700 mb-3">
                Ordnerstruktur erstellen:
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4">
                <pre class="text-sm">
                  <code>project/
├── assets/
│   └── fonts/
│       ├── open-sans-v29-latin-regular.woff2
│       ├── open-sans-v29-latin-regular.woff
│       ├── open-sans-v29-latin-700.woff2
│       └── open-sans-v29-latin-700.woff
├── css/
│   └── fonts.css
└── index.html</code>
                </pre>
              </div>

              <p class="text-gray-700 mb-3">
                CSS-Datei erstellen (fonts.css):
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code>/* fonts.css */
@font-face 

@font-face 

/* Verwendung */
body {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div class="border-l-4 border-orange-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Schritt 4: Google Fonts Links entfernen
            </h3>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
              <p class="text-gray-700 mb-3">
                Ersetze alle Google Fonts Referenzen:
              </p>
              
              <div class="bg-red-50 p-4 rounded mb-4">
                <h4 class="font-semibold text-red-800 mb-2">Entfernen:</h4>
                <div class="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre class="text-xs">
                    <code><link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link></code>
                  </pre>
                </div>
              </div>

              <div class="bg-green-50 p-4 rounded">
                <h4 class="font-semibold text-green-800 mb-2">Ersetzen durch:</h4>
                <div class="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre class="text-xs">
                    <code><link rel="preload" href="/assets/fonts/open-sans-v29-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/open-sans-v29-latin-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/fonts.css"></code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div class="border-l-4 border-orange-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Schritt 5: Performance optimieren
            </h3>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-gray-700 mb-3">
                Zusätzliche Optimierungen:
              </p>
              
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4">
                <pre class="text-sm">
                  <code><!-- Preload kritische Fonts -->
<link rel="preload" 
      href="/assets/fonts/open-sans-v29-latin-regular.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin>

<!-- Font-Display Strategy -->
<style>
  @font-face {
    font-family: 'Open Sans';
    font-display: swap; /* oder 'optional' für noch bessere Performance */
  }
</style>

<!-- Resource Hints für schnelleres Laden -->
<link rel="dns-prefetch" href="/">
<link rel="preconnect" href="/"></code>
                </pre>
              </div>

              <div class="bg-blue-50 p-4 rounded">
                <h4 class="font-semibold text-blue-800 mb-2">Nginx Konfiguration für Caching:</h4>
                <div class="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre class="text-xs">
                    <code>location ~* \.(woff|woff2|ttf|otf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Access-Control-Allow-Origin "*";
}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          Testing & Validierung
        </h2>
        
        <div class="space-y-4">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Browser DevTools Test</h3>
            <ol class="space-y-2 text-gray-700">
              <li>1. Öffne Chrome DevTools (F12)</li>
              <li>2. Gehe zum Network Tab</li>
              <li>3. Filter nach "Font" oder suche nach "googleapis"</li>
              <li>4. Lade die Seite neu (Ctrl+F5)</li>
              <li>5. Stelle sicher, dass keine Requests zu Google gehen</li>
            </ol>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Automatisierter Test</h3>
            <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              <pre class="text-sm">
                <code>// Cypress Test
describe('Font Loading Test', () => {
  it('should not load fonts from Google', () => {
    cy.intercept('**/fonts.googleapis.com/**', { statusCode: 500 }).as('googleFonts');
    cy.intercept('**/fonts.gstatic.com/**', { statusCode: 500 }).as('gstaticFonts');
    
    cy.visit('/');
    
    // Test sollte ohne Fehler durchlaufen
    cy.get('body').should('have.css', 'font-family')
      .and('include', 'Open Sans');
  });
});</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Webdev Guide Tab
const WebdevGuideTab: React.FC = () => {
  return (
    <div class="max-w-4xl mx-auto space-y-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          Webentwickler Best Practices
        </h2>

        <div>
          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-3">✅ Do's</h3>
            <ul class="space-y-2 text-green-700">
              <li>• Fonts lokal hosten</li>
              <li>• Preload für kritische Fonts</li>
              <li>• Font-display: swap verwenden</li>
              <li>• WOFF2 Format priorisieren</li>
              <li>• Subset für benötigte Zeichen</li>
              <li>• Fallback-Fonts definieren</li>
              <li>• Caching-Header setzen</li>
            </ul>
          </div>

          <div class="bg-red-50 p-6 rounded-lg">
            <h3 class="font-semibold text-red-800 mb-3">❌ Don'ts</h3>
            <ul class="space-y-2 text-red-700">
              <li>• Keine externen Font-CDNs</li>
              <li>• Keine ungecachten Fonts</li>
              <li>• Kein font-display: block</li>
              <li>• Keine überdimensionierten Fonts</li>
              <li>• Keine unnötigen Font-Varianten</li>
              <li>• Kein synchrones Laden</li>
              <li>• Keine fehlenden Fallbacks</li>
            </ul>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Framework-spezifische Lösungen
            </h3>

            {/* React/Next.js */}
            <div class="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 class="font-semibold text-gray-800 mb-3">React / Next.js</h4>
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code>// next.config.js
module.exports = {
  optimizeFonts: false, // Disable Google Fonts optimization
}

// pages/_app.js
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

// oder mit next/font (Next.js 13+)
import localFont from 'next/font/local'

const openSans = localFont({
  src: [
    {
      path: './fonts/OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/OpenSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-open-sans',
})</code>
                </pre>
              </div>
            </div>

            {/* Vue/Nuxt */}
            <div class="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 class="font-semibold text-gray-800 mb-3">Vue / Nuxt.js</h4>
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code>// nuxt.config.js
export default {
  css: [
    '@/assets/fonts/fonts.css'
  ],
  
  head: {
    link: [
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/open-sans-regular.woff2',
        crossorigin: 'anonymous'
      }
    ]
  },
  
  // Disable Google Fonts module if installed
  googleFonts: false
}</code>
                </pre>
              </div>
            </div>

            {/* WordPress */}
            <div class="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 class="font-semibold text-gray-800 mb-3">WordPress</h4>
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code>// functions.php
// Google Fonts deaktivieren
add_filter('elementor/frontend/print_google_fonts', '__return_false');

// Lokale Fonts einbinden
function load_local_fonts() 
add_action('wp_enqueue_scripts', 'load_local_fonts');

// Preload hinzufügen
function add_font_preload() 
add_action('wp_head', 'add_font_preload', 1);</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Performance Monitoring
            </h3>
            
            <div class="bg-gray-50 p-6 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-3">Web Vitals Tracking</h4>
              <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre class="text-sm">
                  <code>{`// Font Loading Performance messen
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name.includes('.woff')) {
      console.log(\`Font \${entry.name} loaded in \${entry.duration}ms\`);
      
      // An Analytics senden
      if (window.gtag) {
        gtag('event', 'font_performance', );
      }
    }
  }
});

observer.observe({ entryTypes: ['resource'] });

// Font Loading API für bessere Kontrolle
if ('fonts' in document) {
  document.fonts.ready.then(() => );
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">
          Checkliste für Entwickler
        </h2>
        
        <div class="space-y-4">
          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">Alle Google Fonts Links entfernt</span>
              <p class="text-sm text-gray-600 mt-1">Suche nach fonts.googleapis.com und fonts.gstatic.com</p>
            </div>
          </label>

          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">Fonts lokal gehostet</span>
              <p class="text-sm text-gray-600 mt-1">WOFF2 und WOFF Formate in /assets/fonts/</p>
            </div>
          </label>

          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">@font-face Regeln erstellt</span>
              <p class="text-sm text-gray-600 mt-1">Mit font-display: swap für bessere Performance</p>
            </div>
          </label>

          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">Preload für kritische Fonts</span>
              <p class="text-sm text-gray-600 mt-1">link rel="preload" für above-the-fold Fonts</p>
            </div>
          </label>

          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">Caching konfiguriert</span>
              <p class="text-sm text-gray-600 mt-1">Cache-Control Header für Font-Dateien</p>
            </div>
          </label>

          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">Fallback Fonts definiert</span>
              <p class="text-sm text-gray-600 mt-1">System-Fonts als Fallback in font-family</p>
            </div>
          </label>

          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">Browser DevTools Test durchgeführt</span>
              <p class="text-sm text-gray-600 mt-1">Keine externen Font-Requests im Network Tab</p>
            </div>
          </label>

          <label>
            <input>
            <div>
              <span class="font-medium text-gray-800">Performance getestet</span>
              <p class="text-sm text-gray-600 mt-1">PageSpeed Insights zeigt keine Font-Probleme</p>
            </div>
          </label>
        </div>
      </div>

      <div class="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg mt-8">
        <h3 class="text-xl font-bold text-gray-800 mb-4">
          🚀 Pro-Tipp: Automatisierung
        </h3>
        <p class="text-gray-700 mb-4">
          Integriere die Font-Compliance-Prüfung in deine CI/CD Pipeline:
        </p>
        <div class="bg-white p-4 rounded">
          <div class="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
            <pre class="text-sm">
              <code># .github/workflows/font-check.yml
name: Font Compliance Check

on: [push, pull_request]

jobs:
  check-fonts:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Check for Google Fonts
        run: |
          if grep -r "fonts.googleapis.com\|fonts.gstatic.com" . \
             --include="*.html" --include="*.css" --include="*.js" \
             --include="*.jsx" --include="*.tsx" --include="*.vue"; then
            echo "❌ Google Fonts found! Please use local hosting."
            exit 1
          else
            echo "✅ No Google Fonts detected"
          fi</code>
            </pre>
          </div>
        </div>
      </div>
    </div>`
};