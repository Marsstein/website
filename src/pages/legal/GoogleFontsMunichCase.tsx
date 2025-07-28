import React, { useState } from 'react';
import { AlertTriangle, Code, Shield, Server, Zap, CheckCircle, XCircle, ExternalLink, Download, Terminal } from 'lucide-react';

const GoogleFontsMunichCase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
        return <OverviewTab />;
      case 'verdict':
        return <VerdictTab />;
      case 'technical':
        return <TechnicalTab />;
      case 'solutions':
        return <SolutionsTab />;
      case 'implementation':
        return <ImplementationTab />;
      case 'webdev':
        return <WebdevGuideTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Google Fonts DSGVO-Urteil
          </h1>
          <p className="text-xl opacity-90">
            LG München I, Urteil vom 20.01.2022 - 3 O 17493/20
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Technische Case Study
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              Webentwickler-Guide
            </span>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 border-b-4 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600 bg-orange-50'
                      : 'border-transparent text-gray-600 hover:text-orange-600 hover:bg-orange-50/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {renderTabContent()}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Benötigen Sie Hilfe bei der DSGVO-konformen Umsetzung?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Wir unterstützen Sie bei der technischen Migration und Compliance-Optimierung
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Kostenlose Beratung
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Das Urteil im Überblick
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Kernaussage des Urteils</h3>
              <p className="text-red-700">
                Die dynamische Einbindung von Google Fonts ohne Einwilligung verstößt gegen die DSGVO, 
                da dabei die IP-Adresse des Nutzers an Google-Server in den USA übertragen wird.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-3">Streitwert & Schadensersatz</h3>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>100 € Schadensersatz zugesprochen</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Unterlassungsanspruch bestätigt</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Präzedenzfall für weitere Klagen</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-3">Technische Verstöße</h3>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-start">
                <XCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>IP-Adresse an US-Server übertragen</span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Keine Rechtsgrundlage nach Art. 6 DSGVO</span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Fehlende Nutzereinwilligung</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Auswirkungen für Webseitenbetreiber</h3>
          <p className="text-gray-700 mb-4">
            Das Urteil hat weitreichende Konsequenzen für alle Webseitenbetreiber, die externe Dienste einbinden:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Sofortiger Handlungsbedarf bei Google Fonts-Nutzung</li>
            <li>• Überprüfung aller externen Ressourcen erforderlich</li>
            <li>• Lokales Hosting als sichere Alternative</li>
            <li>• Dokumentation der technischen Umsetzung notwendig</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Timeline & Entwicklung
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-gray-800">Januar 2022</h4>
              <p className="text-gray-600">LG München I fällt wegweisendes Urteil zu Google Fonts</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-gray-800">Folgemonate</h4>
              <p className="text-gray-600">Massenhafte Abmahnwellen gegen Webseitenbetreiber</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-gray-800">Heute</h4>
              <p className="text-gray-600">Lokales Font-Hosting als Standard etabliert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Verdict Details Tab
const VerdictTab: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Urteilsdetails & Rechtliche Grundlagen
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Aktenzeichen & Gericht</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-mono text-gray-700">LG München I - 3 O 17493/20</p>
              <p className="text-gray-600 mt-1">Urteil vom 20. Januar 2022</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Streitgegenstand</h3>
            <p className="text-gray-700">
              Der Kläger besuchte die Website des Beklagten, wobei beim Seitenaufruf automatisch eine Verbindung 
              zu Google-Servern hergestellt wurde, um die Schriftart "Open Sans" zu laden. Dabei wurde die 
              IP-Adresse des Klägers an Google Inc. in den USA übertragen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Rechtliche Würdigung</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Art. 6 Abs. 1 DSGVO - Rechtsgrundlagen</h4>
                <p className="text-gray-700">
                  Das Gericht stellte fest, dass keine der in Art. 6 Abs. 1 DSGVO genannten Rechtsgrundlagen 
                  für die Datenübertragung vorlag:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Keine Einwilligung (lit. a)</li>
                  <li>• Nicht zur Vertragserfüllung erforderlich (lit. b)</li>
                  <li>• Keine rechtliche Verpflichtung (lit. c)</li>
                  <li>• Keine berechtigten Interessen (lit. f)</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Art. 82 DSGVO - Schadensersatz</h4>
                <p className="text-gray-700">
                  Das Gericht erkannte einen immateriellen Schaden durch den Kontrollverlust über die 
                  personenbezogenen Daten an und sprach 100 € Schadensersatz zu.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Art. 44 ff. DSGVO - Drittlandtransfer</h4>
                <p className="text-gray-700">
                  Die Übertragung personenbezogener Daten in die USA ohne angemessene Garantien 
                  verstößt gegen die Vorschriften zum internationalen Datentransfer.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Urteilstenor</h3>
            <div className="bg-red-50 p-6 rounded-lg">
              <ol className="space-y-3 text-red-800">
                <li>
                  <span className="font-semibold">1.</span> Der Beklagte wird verurteilt, es zu unterlassen, 
                  beim Aufruf der Website personenbezogene Daten des Klägers an Google weiterzugeben.
                </li>
                <li>
                  <span className="font-semibold">2.</span> Der Beklagte wird verurteilt, an den Kläger 
                  100,00 € nebst Zinsen zu zahlen.
                </li>
                <li>
                  <span className="font-semibold">3.</span> Der Beklagte trägt die Kosten des Rechtsstreits.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Bedeutung für die Praxis
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-3">Präzedenzwirkung</h3>
            <ul className="space-y-2 text-orange-700">
              <li>• Erste gerichtliche Entscheidung zu Google Fonts</li>
              <li>• Signalwirkung für andere externe Dienste</li>
              <li>• Grundlage für Massenabmahnungen</li>
              <li>• Klarstellung der DSGVO-Anforderungen</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-3">Haftungsrisiken</h3>
            <ul className="space-y-2 text-red-700">
              <li>• Schadensersatzansprüche möglich</li>
              <li>• Abmahnkosten bei Verstößen</li>
              <li>• Bußgelder durch Aufsichtsbehörden</li>
              <li>• Reputationsschäden</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Technical Analysis Tab
const TechnicalTab: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Technische Analyse der Google Fonts Problematik
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              So funktioniert die Google Fonts Einbindung
            </h3>
            
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`<!-- Problematische Einbindung -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">`}</code>
              </pre>
            </div>

            <div className="mt-4 bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Was passiert technisch?</h4>
              <ol className="space-y-2 text-red-700">
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Übertragene Daten im Detail
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">HTTP Request Headers</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-xs">
                  <code>{`GET /css2?family=Open+Sans:wght@400;700&display=swap HTTP/2
Host: fonts.googleapis.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
Accept: text/css,*/*;q=0.1
Accept-Language: de-DE,de;q=0.9,en;q=0.8
Accept-Encoding: gzip, deflate, br
Referer: https://example.com/
X-Forwarded-For: 192.0.2.1
X-Real-IP: 192.0.2.1`}</code>
                </pre>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Personenbezogene Daten</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• IP-Adresse (Standort-Rückschlüsse)</li>
                  <li>• Browser & OS (User-Agent)</li>
                  <li>• Spracheinstellungen</li>
                  <li>• Referrer (besuchte Seite)</li>
                  <li>• Zeitstempel des Zugriffs</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Tracking-Potential</h4>
                <ul className="space-y-1 text-red-700 text-sm">
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Performance-Analyse
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Ladezeiten-Vergleich</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Google Fonts CDN</span>
                    <span className="text-sm text-gray-600">~150-300ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Lokales Hosting</span>
                    <span className="text-sm text-gray-600">~20-50ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Mit Preload optimiert</span>
                    <span className="text-sm text-gray-600">~10-30ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-4">
                * Durchschnittswerte bei 4G-Verbindung, können je nach Standort und Netzwerk variieren
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Netzwerk-Analyse Tools
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Chrome DevTools Prüfung</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// 1. Chrome DevTools öffnen (F12)
// 2. Network Tab auswählen
// 3. Filter: "fonts" oder "googleapis"
// 4. Seite neu laden
// 5. Prüfen auf externe Font-Requests`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Automatisierte Prüfung</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// Node.js Script zur Font-Prüfung
const puppeteer = require('puppeteer');

async function checkGoogleFonts(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const googleFontRequests = [];
  
  page.on('request', (request) => {
    if (request.url().includes('fonts.googleapis.com') || 
        request.url().includes('fonts.gstatic.com')) {
      googleFontRequests.push(request.url());
    }
  });
  
  await page.goto(url);
  await browser.close();
  
  return googleFontRequests;
}`}</code>
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          DSGVO-konforme Lösungsansätze
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="font-semibold text-green-800">Empfohlen: Lokales Hosting</h3>
            </div>
            <ul className="space-y-2 text-green-700">
              <li>• Fonts auf eigenem Server hosten</li>
              <li>• Keine externe Datenübertragung</li>
              <li>• Volle Kontrolle über Caching</li>
              <li>• Bessere Performance möglich</li>
              <li>• DSGVO-konform ohne Einwilligung</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-400 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 mr-2" />
              <h3 className="font-semibold text-orange-800">Möglich: Mit Consent</h3>
            </div>
            <ul className="space-y-2 text-orange-700">
              <li>• Explizite Einwilligung einholen</li>
              <li>• Consent-Banner implementieren</li>
              <li>• Fonts erst nach Zustimmung laden</li>
              <li>• Fallback-Fonts definieren</li>
              <li>• Komplexere Implementierung</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Option 1: Google Fonts Helper
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Der Google Fonts Helper automatisiert den Download-Prozess:
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4">
                <pre className="text-sm">
                  <code>{`# 1. Besuche: https://google-webfonts-helper.herokuapp.com
# 2. Wähle gewünschte Schriftart
# 3. Wähle Zeichensätze und Stile
# 4. Download als ZIP
# 5. CSS-Code kopieren`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Generiertes CSS-Beispiel:</h4>
                <div className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre className="text-xs">
                    <code>{`@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/open-sans-v29-latin-regular.woff2') format('woff2'),
       url('/fonts/open-sans-v29-latin-regular.woff') format('woff');
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Option 2: NPM Package Installation
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Für moderne Build-Prozesse mit Webpack/Vite:
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`# Installation via NPM
npm install @fontsource/open-sans

# In deiner CSS/JS Datei
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

# Oder in CSS
@import "~@fontsource/open-sans/400.css";
@import "~@fontsource/open-sans/700.css";`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Option 3: Proxy-Lösung (Advanced)
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Server-seitiges Proxying für dynamische Font-Anfragen:
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
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
  } catch (error) {
    res.status(500).send('Error fetching fonts');
  }
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Alternative Font-Lösungen
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">System Fonts</h3>
            <p className="text-gray-600 text-sm mb-3">
              Native Schriften ohne Downloads
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
              <code>{`font-family: -apple-system, 
BlinkMacSystemFont, 
"Segoe UI", Roboto, 
Helvetica, Arial, 
sans-serif;`}</code>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Variable Fonts</h3>
            <p className="text-gray-600 text-sm mb-3">
              Eine Datei, alle Stile
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
              <code>{`@font-face {
  font-family: 'Inter';
  src: url('Inter.var.woff2');
  font-weight: 100 900;
}`}</code>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Font Loading API</h3>
            <p className="text-gray-600 text-sm mb-3">
              Kontrolle über Ladeverhalten
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
              <code>{`const font = new FontFace(
  'CustomFont',
  'url(/fonts/custom.woff2)'
);
await font.load();`}</code>
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Schritt-für-Schritt Migration Guide
        </h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Schritt 1: Aktuelle Fonts identifizieren
            </h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-3">
                Suche in deinem Projekt nach Google Fonts Einbindungen:
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`# Bash/Terminal
grep -r "fonts.googleapis.com" . --include="*.html" --include="*.css" --include="*.js"
grep -r "fonts.gstatic.com" . --include="*.html" --include="*.css" --include="*.js"

# Oder mit ripgrep (schneller)
rg "fonts\.(googleapis|gstatic)\.com" -t html -t css -t js`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Schritt 2: Fonts herunterladen
            </h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-3">
                Methode A: Google Fonts Helper
              </p>
              
              <ol className="space-y-2 text-gray-600 mb-4">
                <li>1. Öffne <a href="https://google-webfonts-helper.herokuapp.com" className="text-orange-600 underline">Google Fonts Helper</a></li>
                <li>2. Suche deine Schriftart (z.B. "Open Sans")</li>
                <li>3. Wähle benötigte Styles (Regular, Bold, etc.)</li>
                <li>4. Wähle "Modern Browsers" für WOFF2</li>
                <li>5. Download ZIP-Datei</li>
              </ol>

              <p className="text-gray-700 mb-3">
                Methode B: Manueller Download
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`# Python Script zum automatischen Download
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
download_font("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700")`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Schritt 3: Fonts in Projekt integrieren
            </h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-3">
                Ordnerstruktur erstellen:
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4">
                <pre className="text-sm">
                  <code>{`project/
├── assets/
│   └── fonts/
│       ├── open-sans-v29-latin-regular.woff2
│       ├── open-sans-v29-latin-regular.woff
│       ├── open-sans-v29-latin-700.woff2
│       └── open-sans-v29-latin-700.woff
├── css/
│   └── fonts.css
└── index.html`}</code>
                </pre>
              </div>

              <p className="text-gray-700 mb-3">
                CSS-Datei erstellen (fonts.css):
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`/* fonts.css */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap; /* Wichtig für Performance */
  src: local('Open Sans Regular'), /* Lokaler Fallback */
       url('/assets/fonts/open-sans-v29-latin-regular.woff2') format('woff2'),
       url('/assets/fonts/open-sans-v29-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Open Sans Bold'),
       url('/assets/fonts/open-sans-v29-latin-700.woff2') format('woff2'),
       url('/assets/fonts/open-sans-v29-latin-700.woff') format('woff');
}

/* Verwendung */
body {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Schritt 4: Google Fonts Links entfernen
            </h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-3">
                Ersetze alle Google Fonts Referenzen:
              </p>
              
              <div className="bg-red-50 p-4 rounded mb-4">
                <h4 className="font-semibold text-red-800 mb-2">Entfernen:</h4>
                <div className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre className="text-xs">
                    <code>{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-2">Ersetzen durch:</h4>
                <div className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre className="text-xs">
                    <code>{`<link rel="preload" href="/assets/fonts/open-sans-v29-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/open-sans-v29-latin-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/fonts.css">`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Schritt 5: Performance optimieren
            </h3>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-3">
                Zusätzliche Optimierungen:
              </p>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto mb-4">
                <pre className="text-sm">
                  <code>{`<!-- Preload kritische Fonts -->
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
<link rel="preconnect" href="/">`}</code>
                </pre>
              </div>

              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Nginx Konfiguration für Caching:</h4>
                <div className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
                  <pre className="text-xs">
                    <code>{`location ~* \.(woff|woff2|ttf|otf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    add_header Access-Control-Allow-Origin "*";
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Testing & Validierung
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Browser DevTools Test</h3>
            <ol className="space-y-2 text-gray-700">
              <li>1. Öffne Chrome DevTools (F12)</li>
              <li>2. Gehe zum Network Tab</li>
              <li>3. Filter nach "Font" oder suche nach "googleapis"</li>
              <li>4. Lade die Seite neu (Ctrl+F5)</li>
              <li>5. Stelle sicher, dass keine Requests zu Google gehen</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Automatisierter Test</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
              <pre className="text-sm">
                <code>{`// Cypress Test
describe('Font Loading Test', () => {
  it('should not load fonts from Google', () => {
    cy.intercept('**/fonts.googleapis.com/**', { statusCode: 500 }).as('googleFonts');
    cy.intercept('**/fonts.gstatic.com/**', { statusCode: 500 }).as('gstaticFonts');
    
    cy.visit('/');
    
    // Test sollte ohne Fehler durchlaufen
    cy.get('body').should('have.css', 'font-family')
      .and('include', 'Open Sans');
  });
});`}</code>
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Webentwickler Best Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">✅ Do's</h3>
            <ul className="space-y-2 text-green-700">
              <li>• Fonts lokal hosten</li>
              <li>• Preload für kritische Fonts</li>
              <li>• Font-display: swap verwenden</li>
              <li>• WOFF2 Format priorisieren</li>
              <li>• Subset für benötigte Zeichen</li>
              <li>• Fallback-Fonts definieren</li>
              <li>• Caching-Header setzen</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-3">❌ Don'ts</h3>
            <ul className="space-y-2 text-red-700">
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

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Framework-spezifische Lösungen
            </h3>

            {/* React/Next.js */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">React / Next.js</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// next.config.js
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
})`}</code>
                </pre>
              </div>
            </div>

            {/* Vue/Nuxt */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Vue / Nuxt.js</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// nuxt.config.js
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
}`}</code>
                </pre>
              </div>
            </div>

            {/* WordPress */}
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">WordPress</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// functions.php
// Google Fonts deaktivieren
add_filter('elementor/frontend/print_google_fonts', '__return_false');

// Lokale Fonts einbinden
function load_local_fonts() {
    wp_enqueue_style(
        'local-fonts',
        get_template_directory_uri() . '/assets/fonts/fonts.css',
        array(),
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'load_local_fonts');

// Preload hinzufügen
function add_font_preload() {
    echo '<link rel="preload" href="' . 
         get_template_directory_uri() . 
         '/assets/fonts/open-sans.woff2" as="font" type="font/woff2" crossorigin>';
}
add_action('wp_head', 'add_font_preload', 1);`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Performance Monitoring
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Web Vitals Tracking</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// Font Loading Performance messen
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name.includes('.woff')) {
      console.log(\`Font \${entry.name} loaded in \${entry.duration}ms\`);
      
      // An Analytics senden
      if (window.gtag) {
        gtag('event', 'font_performance', {
          'font_name': entry.name,
          'load_time': Math.round(entry.duration),
          'transfer_size': entry.transferSize
        });
      }
    }
  }
});

observer.observe({ entryTypes: ['resource'] });

// Font Loading API für bessere Kontrolle
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    console.log('All fonts loaded');
    document.body.classList.add('fonts-loaded');
  });
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Checkliste für Entwickler
        </h2>
        
        <div className="space-y-4">
          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">Alle Google Fonts Links entfernt</span>
              <p className="text-sm text-gray-600 mt-1">Suche nach fonts.googleapis.com und fonts.gstatic.com</p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">Fonts lokal gehostet</span>
              <p className="text-sm text-gray-600 mt-1">WOFF2 und WOFF Formate in /assets/fonts/</p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">@font-face Regeln erstellt</span>
              <p className="text-sm text-gray-600 mt-1">Mit font-display: swap für bessere Performance</p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">Preload für kritische Fonts</span>
              <p className="text-sm text-gray-600 mt-1">link rel="preload" für above-the-fold Fonts</p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">Caching konfiguriert</span>
              <p className="text-sm text-gray-600 mt-1">Cache-Control Header für Font-Dateien</p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">Fallback Fonts definiert</span>
              <p className="text-sm text-gray-600 mt-1">System-Fonts als Fallback in font-family</p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">Browser DevTools Test durchgeführt</span>
              <p className="text-sm text-gray-600 mt-1">Keine externen Font-Requests im Network Tab</p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
            <div>
              <span className="font-medium text-gray-800">Performance getestet</span>
              <p className="text-sm text-gray-600 mt-1">PageSpeed Insights zeigt keine Font-Probleme</p>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          🚀 Pro-Tipp: Automatisierung
        </h3>
        <p className="text-gray-700 mb-4">
          Integriere die Font-Compliance-Prüfung in deine CI/CD Pipeline:
        </p>
        <div className="bg-white p-4 rounded">
          <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
            <pre className="text-sm">
              <code>{`# .github/workflows/font-check.yml
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
          fi`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleFontsMunichCase;