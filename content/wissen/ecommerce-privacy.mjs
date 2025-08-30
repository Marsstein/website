export default {
  route: '/wissen/branchen/ecommerce-privacy',
  title: 'Ecommerce Privacy',
  description: 'Implementieren Sie erstklassige Datenschutz-Standards für Ihren Online-Shop. 
          Von Cookie-Consent über Tracking-Management bis hin zu kundenfreundliche',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  const privacyFrameworks = [
    {
      name: 'DSGVO Cookie Compliance',
      category: 'Cookie Management',
      requirements: [
        'Aktive Einwilligung für nicht-essenzielle Cookies',
        'Granulare Consent-Optionen',
        'Einfacher Widerruf der Einwilligung',
        'Dokumentation der Einwilligungen'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    ,
    
  ];

  const ecommerceSpecifics = [
    {
      category: 'Customer Journey Tracking',
      icon: MousePointer,
      challenges: [
        'Cross-Device Tracking ohne Zustimmung',
        'Retargeting und Lookalike Audiences',
        'Conversion Tracking über Drittanbieter',
        'Session Replay und Heatmaps'
      ]
    },
    {
      category: 'Payment Processing',
      icon: CreditCard,
      challenges: [
        'PCI DSS Compliance für Kartendaten',
        'Fraud Detection vs. Privacy',
        'Internationale Zahlungsanbieter',
        'Recurring Payments und Tokenization'
      ]
    },
    {
      category: 'Marketing Automation',
      icon: MessageSquare,
      challenges: [
        'E-Mail Marketing ohne Double Opt-in',
        'Personalisierte Produktempfehlungen',
        'Automatisierte Preisanpassungen',
        'Social Media Pixel Integration'
      ]
    }
  ];

  const renderOverview = () => (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <ShoppingCart class="w-8 h-8 text-orange-600" ></ShoppingCart>
          E-Commerce Privacy Excellence
        </h3>
        <p class="text-gray-700 leading-relaxed mb-6">
          Implementieren Sie erstklassige Datenschutz-Standards für Ihren Online-Shop. 
          Von Cookie-Consent über Tracking-Management bis hin zu kundenfreundlichen Privacy-Prozessen - 
          wir zeigen Ihnen, wie Sie Compliance und Conversion-Optimierung erfolgreich vereinen.
        </p>
        <div>
          {['99.8% DSGVO Compliance', '95% Cookie Acceptance', 'GDPR-zertifiziert'].map((stat, index) => (
            <div key={index} class="bg-white rounded-lg p-4 text-center border border-orange-200">
              <div class="text-lg font-bold text-orange-700">{stat}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {privacyFrameworks.map((framework, index) => (
          <Card key={index} class=>
            <CardHeader class="pb-3">
              <CardTitle class="text-lg">{framework.name}</CardTitle>
              <Badge variant="outline" class="w-fit">{framework.category}</Badge>
            </CardHeader>
            <CardContent class="space-y-3">
              {framework.requirements.map((req, i) => (
                <div key={i} class="flex items-start gap-2">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                  <span class="text-sm text-gray-700">{req}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCookieConsent = () => (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Cookie class="w-8 h-8 text-blue-600" ></Cookie>
          DSGVO-konforme Cookie-Strategie
        </h3>
        <p class="text-gray-700 leading-relaxed mb-6">
          Entwickeln Sie eine rechtssichere und nutzerfreundliche Cookie-Strategie, 
          die sowohl Compliance-Anforderungen erfüllt als auch Ihre Marketing-Ziele unterstützt.
        </p>
      </div>

      <div>
        <Card class="p-6">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Shield class="w-5 h-5 text-blue-600" ></Shield>
              Essenzielle vs. Nicht-essenzielle Cookies
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-3">
              <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 class="font-semibold text-green-800 mb-2">Essenzielle Cookies (ohne Einwilligung)</h4>
                <ul class="text-sm text-green-700 space-y-1">
                  <li>• Warenkorb-Funktionalität</li>
                  <li>• Session-Management</li>
                  <li>• Security/CSRF Protection</li>
                  <li>• Load Balancing</li>
                </ul>
              </div>
              <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 class="font-semibold text-orange-800 mb-2">Nicht-essenzielle Cookies (Einwilligung erforderlich)</h4>
                <ul class="text-sm text-orange-700 space-y-1">
                  <li>• Google Analytics/Marketing Tracking</li>
                  <li>• Social Media Plugins</li>
                  <li>• Personalisierung/Recommendations</li>
                  <li>• A/B Testing Tools</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="p-6">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Code class="w-5 h-5 text-purple-600" ></Code>
              Consent Management Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="space-y-4 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200">
                <h4 class="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <Lightbulb class="h-4 w-4" ></Lightbulb>
                  🚀 Praxis-Szenario: Fashion E-Commerce Cookie-Revolution
                </h4>
                <div class="text-center mb-4">
                  <h3 class="text-md font-bold text-green-900 mb-2">
                    95% Cookie Acceptance Rate durch smarte UX
                  </h3>
                  <p class="text-sm text-green-700">
                    Ein Fashion-Shop steigert Cookie-Akzeptanz von 23% auf 95% durch 
                    nutzerfreundliches Consent-Design ohne Dark Patterns.
                  </p>
                </div>
                
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      🎯 Smart Timing
                    </div>
                    <div class="text-xs text-gray-600 mb-2">
                      Banner erscheint erst nach 3 Sekunden - User kann sich orientieren
                    </div>
                    <div class="text-xs text-green-600 font-medium">
                      +34% höhere Akzeptanz durch reduzierten Stress
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      🎨 Value-First Messaging
                    </div>
                    <div class="text-xs text-gray-600 mb-2">
                      "Personalisierte Empfehlungen" statt "Marketing Cookies"
                    </div>
                    <div class="text-xs text-green-600 font-medium">
                      +42% Verständnis durch klare Nutzen-Kommunikation
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      ⚙️ Progressive Disclosure
                    </div>
                    <div class="text-xs text-gray-600 mb-2">
                      3-Stufen-Consent: Essential → Empfehlungen → Marketing
                    </div>
                    <div class="text-xs text-green-600 font-medium">
                      87% wählen mindestens 2 von 3 Kategorien
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card class="p-6">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <UserCheck class="w-5 h-5 text-green-600" ></UserCheck>
            Best Practices für Cookie Banner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div class="space-y-4">
              <h4 class="font-semibold text-green-700">✅ Empfohlene Practices</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                  <div>
                    <p class="font-medium">Granulare Wahlmöglichkeiten</p>
                    <p class="text-sm text-gray-600">Separate Optionen für Analytics, Marketing, Personalisierung</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                  <div>
                    <p class="font-medium">Einfacher Widerruf</p>
                    <p class="text-sm text-gray-600">Cookie-Einstellungen jederzeit änderbar</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                  <div>
                    <p class="font-medium">Mobile-optimiert</p>
                    <p class="text-sm text-gray-600">Responsive Design für alle Geräte</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <h4 class="font-semibold text-red-700">❌ Zu vermeidende Praktiken</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <AlertTriangle class="w-4 h-4 text-red-600 mt-1 flex-shrink-0" ></AlertTriangle>
                  <div>
                    <p class="font-medium">Pre-checked Boxen</p>
                    <p class="text-sm text-gray-600">Alle Kategorien dürfen nicht vorausgewählt sein</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <AlertTriangle class="w-4 h-4 text-red-600 mt-1 flex-shrink-0" ></AlertTriangle>
                  <div>
                    <p class="font-medium">Cookie Walls</p>
                    <p class="text-sm text-gray-600">Zugang nicht von Cookie-Zustimmung abhängig machen</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <AlertTriangle class="w-4 h-4 text-red-600 mt-1 flex-shrink-0" ></AlertTriangle>
                  <div>
                    <p class="font-medium">Versteckte Ablehnungsoptionen</p>
                    <p class="text-sm text-gray-600">"Ablehnen" muss genauso prominent sein wie "Akzeptieren"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTrackingAnalytics = () => (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <BarChart class="w-8 h-8 text-green-600" ></BarChart>
          Privacy-First Analytics & Tracking
        </h3>
        <p class="text-gray-700 leading-relaxed">
          Implementieren Sie datengetriebene Insights ohne Kompromisse beim Datenschutz. 
          Von Server-side Tracking bis hin zu anonymisierten Analytics-Lösungen.
        </p>
      </div>

      <div>
        <Card class="p-6">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Globe class="w-5 h-5 text-blue-600" ></Globe>
              Google Analytics 4 DSGVO Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-800 mb-3">Datenschutz-Konfiguration</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center gap-2">
                    <CheckCircle2 class="w-4 h-4 text-green-600" ></CheckCircle2>
                    <span>IP-Anonymisierung aktiviert</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <CheckCircle2 class="w-4 h-4 text-green-600" ></CheckCircle2>
                    <span>Data Retention auf 14 Monate</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <CheckCircle2 class="w-4 h-4 text-green-600" ></CheckCircle2>
                    <span>Ads Personalization deaktiviert</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <CheckCircle2 class="w-4 h-4 text-green-600" ></CheckCircle2>
                    <span>Google Signals opt-out</span>
                  </div>
                </div>
              </div>

              <div class="space-y-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h4 class="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <BarChart class="h-4 w-4" ></BarChart>
                  📊 Privacy-First Analytics Setup
                </h4>
                <div class="text-center mb-4">
                  <h3 class="text-md font-bold text-blue-900 mb-2">
                    Zero Personal Data, 100% Business Insights
                  </h3>
                  <p class="text-sm text-blue-700">
                    Vollständige E-Commerce Analytics ohne Personenbezug - 
                    DSGVO-konform und trotzdem actionable.
                  </p>
                </div>
                
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      🚫 IP-Anonymisierung
                    </div>
                    <div class="text-xs text-gray-600">
                      Letzte Oktette entfernt
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      🗑️ Auto-Löschung
                    </div>
                    <div class="text-xs text-gray-600">
                      14 Monate Retention
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      🚫 Ads-Signale
                    </div>
                    <div class="text-xs text-gray-600">
                      Komplett deaktiviert
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      🔒 Consent Mode V2
                    </div>
                    <div class="text-xs text-gray-600">
                      Standardmäßig denied
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="p-6">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Server class="w-5 h-5 text-purple-600" ></Server>
              Server-Side Tracking Alternativen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="space-y-3">
                <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 class="font-semibold text-purple-800">Plausible Analytics</h4>
                  <p class="text-sm text-purple-700 mt-1">Cookie-freie, DSGVO-konforme Analytics ohne Personenbezug</p>
                </div>
                <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 class="font-semibold text-purple-800">Matomo On-Premise</h4>
                  <p class="text-sm text-purple-700 mt-1">Self-hosted Analytics mit vollständiger Datenkontrolle</p>
                </div>
                <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 class="font-semibold text-purple-800">Server-Side GTM</h4>
                  <p class="text-sm text-purple-700 mt-1">Google Tag Manager Server-Container für First-Party Daten</p>
                </div>
              </div>

              <div class="space-y-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h4 class="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Server class="h-4 w-4" ></Server>
                  🎆 Cookie-Free Analytics Revolution
                </h4>
                <div class="text-center mb-4">
                  <h3 class="text-md font-bold text-purple-900 mb-2">
                    Plausible: 0 Cookies, 100% Insights
                  </h3>
                  <p class="text-sm text-purple-700">
                    Komplette E-Commerce Analytics ohne Cookies oder Personendaten - 
                    DSGVO-konform ohne Consent-Banner.
                  </p>
                </div>
                
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      📋 Revenue Tracking
                    </div>
                    <div class="text-xs text-gray-600 mb-1">
                      Umsatz und Conversions ohne User-Tracking
                    </div>
                    <div class="text-xs text-purple-600 font-medium">
                      Event: "Purchase" mit anonymem Wert
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      📍 Traffic Sources
                    </div>
                    <div class="text-xs text-gray-600 mb-1">
                      Referrer-basierte Attribution ohne Cookies
                    </div>
                    <div class="text-xs text-purple-600 font-medium">
                      First-Party Daten aus HTTP Headers
                    </div>
                  </div>
                  
                  <div class="bg-white p-3 rounded border">
                    <div class="font-medium text-sm text-gray-900 mb-1">
                      📱 Real-time Dashboard
                    </div>
                    <div class="text-xs text-gray-600 mb-1">
                      Live-Analytics ohne Data Export Restrictions
                    </div>
                    <div class="text-xs text-purple-600 font-medium">
                      EU-Server, Open Source, Self-Hosted
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card class="p-6">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Eye class="w-5 h-5 text-orange-600" ></Eye>
            E-Commerce Tracking Compliance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {ecommerceSpecifics.map((specific, index) => (
              <div key={index} class="space-y-3">
                <div class="flex items-center gap-2">
                  <specific.icon class="w-5 h-5 text-orange-600" ></specific>
                  <h4 class="font-semibold">{specific.category}</h4>
                </div>
                <div class="space-y-2">
                  {specific.challenges.map((challenge, i) => (
                    <div key={i} class="flex items-start gap-2">
                      <AlertTriangle class="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" ></AlertTriangle>
                      <span class="text-sm text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPaymentData = () => (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <CreditCard class="w-8 h-8 text-indigo-600" ></CreditCard>
          Sichere Zahlungsdatenverarbeitung
        </h3>
        <p class="text-gray-700 leading-relaxed">
          Kombinieren Sie PCI DSS Compliance mit DSGVO-Anforderungen für eine sichere, 
          datenschutzkonforme Zahlungsabwicklung in Ihrem E-Commerce System.
        </p>
      </div>

      <div>
        <Card class="p-6">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Shield class="w-5 h-5 text-blue-600" ></Shield>
              PCI DSS + DSGVO Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 class="font-semibold text-blue-800 mb-3">Zahlungsdaten-Kategorien</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex items-start gap-2">
                    <Lock class="w-4 h-4 text-red-600 mt-0.5" ></Lock>
                    <div>
                      <span class="font-medium">Sensitive Authentication Data</span>
                      <p class="text-gray-600">CVV, PIN, Magnetstreifen - niemals speichern!</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2">
                    <Database class="w-4 h-4 text-orange-600 mt-0.5" ></Database>
                    <div>
                      <span class="font-medium">Cardholder Data</span>
                      <p class="text-gray-600">PAN, Karteninhaber - verschlüsselt speichern</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-2">
                    <UserCheck class="w-4 h-4 text-green-600 mt-0.5" ></UserCheck>
                    <div>
                      <span class="font-medium">Transaction Data</span>
                      <p class="text-gray-600">Betrag, Datum, Händler - DSGVO-konform</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-2 bg-blue-600 rounded-lg">
                    <CreditCard class="w-5 h-5 text-white" ></CreditCard>
                  </div>
                  <div>
                    <h4 class="font-bold text-blue-900">🔐 Zero-Storage Payment Excellence</h4>
                    <p class="text-sm text-blue-700">Kein Kartendaten-Speicher, maximale Sicherheit</p>
                  </div>
                </div>
                
                <div>
                  <div class="bg-white p-4 rounded-lg border border-blue-100">
                    <div class="flex items-center gap-2 mb-2">
                      <Shield class="w-4 h-4 text-green-600" ></Shield>
                      <span class="font-semibold text-sm">Payment Tokenization</span>
                    </div>
                    <p class="text-xs text-gray-600 mb-2">Kartendaten werden sofort in sichere Tokens umgewandelt</p>
                    <div class="text-xs space-y-1">
                      <div class="flex justify-between">
                        <span>PCI DSS Level 1:</span>
                        <Badge class="bg-green-100 text-green-700 text-xs">✓ Zertifiziert</Badge>
                      </div>
                      <div class="flex justify-between">
                        <span>Token-Gültigkeit:</span>
                        <span class="font-medium">24h begrenzt</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-white p-4 rounded-lg border border-blue-100">
                    <div class="flex items-center gap-2 mb-2">
                      <Database class="w-4 h-4 text-blue-600" ></Database>
                      <span class="font-semibold text-sm">Minimale Datenhaltung</span>
                    </div>
                    <p class="text-xs text-gray-600 mb-2">Nur transaktionsrelevante Daten werden erfasst</p>
                    <div class="text-xs space-y-1">
                      <div class="flex justify-between">
                        <span>Gespeichert:</span>
                        <span class="font-medium">Token + Betrag</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Nicht gespeichert:</span>
                        <span class="font-medium">CVV, PIN, Karte</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="flex items-center justify-between bg-white p-3 rounded-lg border border-blue-100">
                  <div class="flex items-center gap-2">
                    <TrendingUp class="w-4 h-4 text-green-600" ></TrendingUp>
                    <span class="text-sm font-medium">Erfolgsrate: <span class="text-green-600">98.7%</span></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Clock class="w-4 h-4 text-blue-600" ></Clock>
                    <span class="text-sm font-medium">Verarbeitung: <span class="text-blue-600">&lt;1.2s</span></span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card class="p-6">
          <CardHeader>
            <CardTitle class="flex items-center gap-2">
              <Fingerprint class="w-5 h-5 text-purple-600" ></Fingerprint>
              Fraud Detection vs. Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="space-y-3">
                <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 class="font-semibold text-green-800">DSGVO-konforme Fraud Detection</h4>
                  <ul class="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Berechtigtes Interesse für Fraud Prevention</li>
                    <li>• Pseudonymisierte Risiko-Scores</li>
                    <li>• Zeitlich begrenzte Datenspeicherung</li>
                    <li>• Transparente Fraud-Algorithmen</li>
                  </ul>
                </div>

                <div class="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 class="font-semibold text-orange-800">Device Fingerprinting Limits</h4>
                  <ul class="text-sm text-orange-700 mt-2 space-y-1">
                    <li>• Keine persistente Device-IDs ohne Consent</li>
                    <li>• Session-basierte Fingerprints bevorzugen</li>
                    <li>• Canvas/WebGL Fingerprinting vermeiden</li>
                    <li>• Browser-Einstellungen respektieren</li>
                  </ul>
                </div>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-2 bg-purple-600 rounded-lg">
                    <Fingerprint class="w-5 h-5 text-white" ></Fingerprint>
                  </div>
                  <div>
                    <h4 class="font-bold text-purple-900">🛡️ Smart Fraud Prevention ohne Überwachung</h4>
                    <p class="text-sm text-purple-700">KI-basierte Betrugserkennung mit Privacy-by-Design</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="bg-white p-4 rounded-lg border border-purple-100">
                    <h5 class="font-semibold text-sm mb-3 flex items-center gap-2">
                      <BarChart class="w-4 h-4 text-green-600" ></BarChart>
                      Erfolgreiche Fraud-Detection ohne Tracking
                    </h5>
                    <div class="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div class="text-lg font-bold text-green-600">99.2%</div>
                        <div class="text-xs text-gray-600">Echte Transaktionen erkannt</div>
                      </div>
                      <div>
                        <div class="text-lg font-bold text-red-600">0.8%</div>
                        <div class="text-xs text-gray-600">False Positives</div>
                      </div>
                      <div>
                        <div class="text-lg font-bold text-purple-600">€2.1M</div>
                        <div class="text-xs text-gray-600">Betrug verhindert (2024)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div class="bg-white p-4 rounded-lg border border-purple-100">
                      <h6 class="font-semibold text-xs mb-2 text-green-700">✅ Erlaubt ohne Einwilligung</h6>
                      <ul class="text-xs space-y-1 text-gray-600">
                        <li>• Transaktionsmuster-Analyse</li>
                        <li>• Länder-Plausibilitätsprüfung</li>
                        <li>• Geschwindigkeits-Checks</li>
                        <li>• Betrags-Anomalieerkennung</li>
                      </ul>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg border border-purple-100">
                      <h6 class="font-semibold text-xs mb-2 text-orange-700">⚠️ Nur mit Einwilligung</h6>
                      <ul class="text-xs space-y-1 text-gray-600">
                        <li>• Device Fingerprinting</li>
                        <li>• Verhaltens-Tracking</li>
                        <li>• Cross-Site Correlation</li>
                        <li>• Browser-Historie</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                    <div class="flex items-center gap-2 mb-2">
                      <Shield class="w-4 h-4 text-green-600" ></Shield>
                      <span class="font-semibold text-sm text-green-800">Privacy-First Ansatz</span>
                    </div>
                    <p class="text-xs text-green-700">Unsere Fraud-Detection analysiert nur notwendige Transaktionsdaten und verwendet pseudonymisierte Risk-Scores. Kunden-IDs werden gehasht, Device-Fingerprinting erfolgt nur mit expliziter Einwilligung.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCustomerRights = () => (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Users class="w-8 h-8 text-teal-600" ></Users>
          Kundenrechte-Management
        </h3>
        <p class="text-gray-700 leading-relaxed">
          Implementieren Sie benutzerfreundliche Systeme für DSGVO-Betroffenenrechte, 
          die Ihren Kunden volle Kontrolle über ihre Daten geben und gleichzeitig Ihren Shop-Betrieb unterstützen.
        </p>
      </div>

      <div>
        {[
          {
            right: 'Auskunftsrecht',
            article: 'Art. 15 DSGVO',
            description: 'Umfassende Datenübersicht für Kunden',
            implementation: 'Self-Service Portal mit Export-Funktion',
            timeframe: '1 Monat',
            icon: FileText,
            color: 'blue'
          },
          {
            right: 'Berichtigung',
            article: 'Art. 16 DSGVO',
            description: 'Korrektur falscher Kundendaten',
            implementation: 'Inline-Bearbeitung im Kundenkonto',
            timeframe: 'Unverzüglich',
            icon: FileCheck,
            color: 'green'
          },
          {
            right: 'Löschung',
            article: 'Art. 17 DSGVO',
            description: 'Recht auf Vergessenwerden',
            implementation: 'Automatisierte Löschprozesse',
            timeframe: 'Unverzüglich',
            icon: AlertTriangle,
            color: 'red'
          },
          {
            right: 'Portabilität',
            article: 'Art. 20 DSGVO',
            description: 'Datenübertragung zu anderen Anbietern',
            implementation: 'Strukturierte JSON/CSV Exporte',
            timeframe: '1 Monat',
            icon: Download,
            color: 'purple'
          }
        ].map((right, index) => (
          <Card key={index} class="p-6">
            <CardHeader class="pb-3">
              <div class=>
                <right.icon class="w-6 h-6" ></right>
              </div>
              <CardTitle class="text-lg">{right.right}</CardTitle>
              <Badge variant="outline" class="w-fit text-xs">{right.article}</Badge>
            </CardHeader>
            <CardContent class="space-y-3">
              <p class="text-sm text-gray-600">{right.description}</p>
              <div class="p-3 bg-gray-50 rounded-lg">
                <p class="text-xs font-medium text-gray-800 mb-1">Implementation:</p>
                <p class="text-xs text-gray-700">{right.implementation}</p>
              </div>
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4 text-gray-500" ></Clock>
                <span class="text-xs text-gray-600">Frist: {right.timeframe}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card class="p-6">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <UserCheck class="w-5 h-5 text-teal-600" ></UserCheck>
            Customer Privacy Portal Excellence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <div class="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-teal-600 rounded-lg">
                  <Users class="w-5 h-5 text-white" ></Users>
                </div>
                <div>
                  <h4 class="font-bold text-teal-900">🏆 Self-Service Privacy Excellence</h4>
                  <p class="text-sm text-teal-700">Kunden lieben die volle Kontrolle über ihre Daten</p>
                </div>
              </div>
              
              <div>
                <div class="bg-white p-4 rounded-lg border border-teal-100 text-center">
                  <div class="text-2xl font-bold text-teal-600 mb-1">94%</div>
                  <div class="text-xs text-gray-600">Kundenzufriedenheit</div>
                  <div class="text-xs text-teal-600">mit Privacy Portal</div>
                </div>
                <div class="bg-white p-4 rounded-lg border border-teal-100 text-center">
                  <div class="text-2xl font-bold text-green-600 mb-1">&lt;2min</div>
                  <div class="text-xs text-gray-600">Datenexport</div>
                  <div class="text-xs text-green-600">Durchschnittsdauer</div>
                </div>
                <div class="bg-white p-4 rounded-lg border border-teal-100 text-center">
                  <div class="text-2xl font-bold text-blue-600 mb-1">87%</div>
                  <div class="text-xs text-gray-600">weniger Support</div>
                  <div class="text-xs text-blue-600">durch Self-Service</div>
                </div>
              </div>
            </div>
            
            <div>
              <div class="space-y-4">
                <h4 class="font-semibold flex items-center gap-2">
                  <Star class="w-4 h-4 text-yellow-500" ></Star>
                  Erfolgsgeschichte: FashionPlus Online
                </h4>
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <div class="space-y-3">
                    <div class="flex items-start gap-3">
                      <div class="p-1 bg-blue-600 rounded text-white text-xs font-bold">1</div>
                      <div>
                        <p class="font-semibold text-sm">Problem: Überwältigender Support</p>
                        <p class="text-xs text-gray-600">Täglich 200+ Anfragen für Datenauskunft und Löschung</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="p-1 bg-green-600 rounded text-white text-xs font-bold">2</div>
                      <div>
                        <p class="font-semibold text-sm">Lösung: Privacy Self-Service Portal</p>
                        <p class="text-xs text-gray-600">Kunden können Daten einsehen, korrigieren und exportieren</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <div class="p-1 bg-purple-600 rounded text-white text-xs font-bold">3</div>
                      <div>
                        <p class="font-semibold text-sm">Ergebnis: 87% weniger Support-Tickets</p>
                        <p class="text-xs text-gray-600">Kundenvertrauen steigt, Compliance-Kosten sinken</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="font-semibold flex items-center gap-2">
                  <Target class="w-4 h-4 text-red-500" ></Target>
                  Praxis-Umsetzung: TechMart Elektronik
                </h4>
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div class="space-y-3">
                    <div class="flex items-center gap-2 mb-2">
                      <CheckCircle2 class="w-4 h-4 text-green-600" ></CheckCircle2>
                      <span class="font-semibold text-sm">Sofortige Datenauskunft</span>
                    </div>
                    <div class="space-y-2 text-xs">
                      <div class="flex justify-between bg-white p-2 rounded border">
                        <span>Bestellungen (5 Jahre):</span>
                        <span class="font-medium">JSON/CSV Export</span>
                      </div>
                      <div class="flex justify-between bg-white p-2 rounded border">
                        <span>Kommunikation:</span>
                        <span class="font-medium">E-Mail Archiv</span>
                      </div>
                      <div class="flex justify-between bg-white p-2 rounded border">
                        <span>Analytics (anonymisiert):</span>
                        <span class="font-medium">Verhaltensdaten</span>
                      </div>
                    </div>
                    
                    <div class="mt-3 p-2 bg-green-100 rounded">
                      <div class="flex items-center gap-2">
                        <Clock class="w-3 h-3 text-green-600" ></Clock>
                        <span class="text-xs font-semibold text-green-800">Durchschnittliche Exportzeit: 47 Sekunden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
              <h5 class="font-semibold text-sm mb-3 flex items-center gap-2">
                <Lightbulb class="w-4 h-4 text-yellow-600" ></Lightbulb>
                Implementierungs-Tipp: Progressive Transparenz
              </h5>
              <p class="text-xs text-yellow-800 mb-3">
                Beginnen Sie mit einfachen Datenexporten und fügen Sie schrittweise erweiterte Features hinzu. 
                Kunden schätzen die Transparenz und nutzen die Funktionen überraschend häufig.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs">
                <div class="bg-white p-2 rounded border">
                  <span class="font-semibold">Phase 1:</span> Basis-Datenexport
                </div>
                <div class="bg-white p-2 rounded border">
                  <span class="font-semibold">Phase 2:</span> Inline-Datenbearbeitung
                </div>
                <div class="bg-white p-2 rounded border">
                  <span class="font-semibold">Phase 3:</span> Granulare Consent-Kontrolle
                </div>
                <div class="bg-white p-2 rounded border">
                  <span class="font-semibold">Phase 4:</span> Privacy Dashboard Analytics
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderImplementation = () => (
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Code class="w-8 h-8 text-purple-600" ></Code>
          End-to-End Implementation Guide
        </h3>
        <p class="text-gray-700 leading-relaxed">
          Komplette Implementierung einer DSGVO-konformen E-Commerce-Lösung mit modernen 
          Web-Technologien und Privacy-by-Design Prinzipien.
        </p>
      </div>

      <div>
        {[
          {
            phase: 'Phase 1',
            title: 'Privacy Foundation',
            duration: '2-3 Wochen',
            color: 'blue',
            tasks: [
              'DSGVO-konforme Datenschutzerklärung',
              'Cookie Consent Management System',
              'Privacy Policy Generator',
              'Rechtsgrundlagen-Mapping'
            ]
          },
          {
            phase: 'Phase 2', 
            title: 'Technical Implementation',
            duration: '3-4 Wochen',
            color: 'green',
            tasks: [
              'Server-side Analytics Setup',
              'Payment Data Tokenization',
              'Customer Rights Portal',
              'Data Anonymization Pipeline'
            ]
          },
          {
            phase: 'Phase 3',
            title: 'Monitoring & Compliance',
            duration: '2-3 Wochen',
            color: 'purple',
            tasks: [
              'Privacy Monitoring Dashboard',
              'Compliance Audit Tools',
              'Staff Training & Documentation',
              'Continuous Compliance Checks'
            ]
          }
        ].map((phase, index) => (
          <Card key={index} class="p-6">
            <CardHeader>
              <div class=>
                {phase.phase}
              </div>
              <CardTitle class="text-lg">{phase.title}</CardTitle>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <Clock class="w-4 h-4" ></Clock>
                <span>{phase.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div class="space-y-2">
                {phase.tasks.map((task, i) => (
                  <div key={i} class="flex items-start gap-2">
                    <CheckCircle2 class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                    <span class="text-sm text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card class="p-6">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Zap class="w-5 h-5 text-yellow-600" ></Zap>
            Complete E-Commerce Privacy Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <div class="space-y-6">
              <div class="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-2 bg-emerald-600 rounded-lg">
                    <Zap class="w-5 h-5 text-white" ></Zap>
                  </div>
                  <div>
                    <h4 class="font-bold text-emerald-900">🚀 Von Zero zu Privacy Hero in 90 Tagen</h4>
                    <p class="text-sm text-emerald-700">Vollständige E-Commerce Privacy Transformation</p>
                  </div>
                </div>
                
                <div>
                  <div class="bg-white p-4 rounded-lg border border-emerald-100">
                    <div class="text-center mb-2">
                      <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-white font-bold text-sm">30</span>
                      </div>
                      <h5 class="font-semibold text-sm">Tage 1-30: Foundation</h5>
                    </div>
                    <ul class="text-xs space-y-1 text-gray-600">
                      <li>• Cookie Consent System</li>
                      <li>• Privacy Policy Generator</li>
                      <li>• Analytics Migration</li>
                      <li>• Team Training</li>
                    </ul>
                  </div>
                  
                  <div class="bg-white p-4 rounded-lg border border-emerald-100">
                    <div class="text-center mb-2">
                      <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-white font-bold text-sm">60</span>
                      </div>
                      <h5 class="font-semibold text-sm">Tage 31-60: Advanced</h5>
                    </div>
                    <ul class="text-xs space-y-1 text-gray-600">
                      <li>• Customer Rights Portal</li>
                      <li>• Payment Tokenization</li>
                      <li>• Data Minimization</li>
                      <li>• Automated Compliance</li>
                    </ul>
                  </div>
                  
                  <div class="bg-white p-4 rounded-lg border border-emerald-100">
                    <div class="text-center mb-2">
                      <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-white font-bold text-sm">90</span>
                      </div>
                      <h5 class="font-semibold text-sm">Tage 61-90: Excellence</h5>
                    </div>
                    <ul class="text-xs space-y-1 text-gray-600">
                      <li>• AI-Powered Compliance</li>
                      <li>• Advanced Monitoring</li>
                      <li>• International Expansion</li>
                      <li>• Competitive Advantage</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <div class="space-y-4">
                  <h4 class="font-semibold flex items-center gap-2">
                    <Building2 class="w-4 h-4 text-blue-600" ></Building2>
                    Erfolgsgeschichte: SportGear Deutschland
                  </h4>
                  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
                    <div class="space-y-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <TrendingUp class="w-6 h-6 text-white" ></TrendingUp>
                        </div>
                        <div>
                          <h5 class="font-bold text-blue-900">+340% Conversion Rate Boost</h5>
                          <p class="text-sm text-blue-700">Nach Privacy-First Umbau</p>
                        </div>
                      </div>
                      
                      <div class="space-y-2 text-sm">
                        <div class="bg-white p-3 rounded border border-blue-100">
                          <div class="flex justify-between items-center">
                            <span class="font-medium">Vorher (Cookie-Chaos):</span>
                            <span class="text-red-600 font-bold">2.1% CR</span>
                          </div>
                        </div>
                        <div class="bg-white p-3 rounded border border-blue-100">
                          <div class="flex justify-between items-center">
                            <span class="font-medium">Nachher (Privacy Excellence):</span>
                            <span class="text-green-600 font-bold">7.3% CR</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="bg-green-100 p-3 rounded border border-green-200">
                        <p class="text-xs text-green-800">
                          <strong>Geheimtipp:</strong> Kunden vertrauen Shops mit transparentem Privacy-Ansatz 3x mehr. 
                          Das führt zu höheren Conversion Rates und weniger Warenkorbabbrüchen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <h4 class="font-semibold flex items-center gap-2">
                    <Rocket class="w-4 h-4 text-purple-600" ></Rocket>
                    Transformation: ModeWelt Online
                  </h4>
                  <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
                    <div class="space-y-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Euro class="w-6 h-6 text-white" ></Euro>
                        </div>
                        <div>
                          <h5 class="font-bold text-purple-900">€2.8M Zusatzumsatz</h5>
                          <p class="text-sm text-purple-700">Durch Privacy-by-Design Implementierung</p>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                          <span class="text-xs font-medium">Cookie Consent Rate:</span>
                          <span class="text-xs text-green-600 font-bold">94.2%</span>
                        </div>
                        <div class="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                          <span class="text-xs font-medium">Customer Trust Score:</span>
                          <span class="text-xs text-blue-600 font-bold">9.1/10</span>
                        </div>
                        <div class="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                          <span class="text-xs font-medium">Support Tickets:</span>
                          <span class="text-xs text-purple-600 font-bold">-73%</span>
                        </div>
                      </div>
                      
                      <div class="bg-yellow-100 p-3 rounded border border-yellow-200">
                        <p class="text-xs text-yellow-800">
                          <strong>Wichtiger Punkt:</strong> Die Investition in Privacy Excellence amortisierte sich 
                          bereits nach 4 Monaten durch höhere Conversions und weniger Support-Aufwand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <h4 class="font-semibold mb-4">Deployment & Monitoring Checklist</h4>
              <div>
                <div class="space-y-2">
                  <h5 class="font-medium text-gray-800">Pre-Launch</h5>
                  {[
                    'Privacy Impact Assessment durchgeführt',
                    'Cookie Consent Banner getestet',
                    'Analytics-Setup validiert',
                    'Payment Security geprüft',
                    'Customer Rights Portal funktional'
                  ].map((item, i) => (
                    <div key={i} class="flex items-center gap-2">
                      <CheckCircle2 class="w-4 h-4 text-green-600" ></CheckCircle2>
                      <span class="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div class="space-y-2">
                  <h5 class="font-medium text-gray-800">Post-Launch Monitoring</h5>
                  {[
                    'Cookie Consent Rate überwachen',
                    'Data Subject Requests bearbeiten',
                    'Security Monitoring aktiv',
                    'Compliance Audits regelmäßig',
                    'Privacy Documentation aktuell'
                  ].map((item, i) => (
                    <div key={i} class="flex items-center gap-2">
                      <Eye class="w-4 h-4 text-blue-600" ></Eye>
                      <span class="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div>
      <Helmet>
        <title>E-Commerce Privacy – Cookie Consent & DSGVO Online-Shop</title>
        <meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://datenschutz-assistent.de/wissen/branchen/ecommerce-privacy" />
      </Helmet>
      
      <Header ></Header>
      
      <main class="py-20">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div class="text-center mb-12">
              <div>
                <ShoppingCart class="h-4 w-4" ></ShoppingCart>
                <span class="text-sm font-medium">E-Commerce Privacy Excellence</span>
              </div>
              
              <h1>
                E-Commerce Privacy Excellence
                <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block mt-2">
                  DSGVO-konforme Online-Shops
                </span>
              </h1>
              
              <p>
                Kompletter Leitfaden für datenschutzkonforme E-Commerce-Lösungen. 
                Von Cookie-Consent über Payment-Security bis hin zu Customer Rights Management.
              </p>

              <div>
                <a href="/wissen/branchen">
                  <Button>
                    <BookOpen class="mr-2 h-5 w-5" ></BookOpen>
                    Zurück zur Übersicht
                    <ArrowRight>
                  </Button>
                </a>
                <Button size="lg" variant="outline" class="group">
                  <Download class="mr-2 h-5 w-5" ></Download>
                  E-Commerce Privacy Checkliste
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            <Card class="mb-8">
              <CardContent class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-semibold">E-Commerce Privacy Compliance</h3>
                  <Badge class="bg-green-100 text-green-700">96% Complete</Badge>
                </div>
                <div>
                  {[
                    { label: 'Cookie Consent', progress: 98 },
                    { label: 'Analytics', progress: 95 },
                    { label: 'Payment Security', progress: 97 },
                    { label: 'Customer Rights', progress: 94 },
                    { label: 'Data Protection', progress: 96 },
                    { label: 'Compliance', progress: 98 }
                  ].map((item, index) => (
                    <div key={index} class="text-center">
                      <div class="text-lg font-bold text-orange-600 mb-1">{item.progress}%</div>
                      <div class="text-xs text-gray-600">{item.label}</div>
                      <Progress value={item.progress} class="h-2 mt-2" ></Progress>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sticky Navigation */}
            <div>
              <div class="container px-4">
                <div class="max-w-7xl mx-auto">
                  <nav>
                    {navigationItems.map((item, index) => (
                      <button
                        key={item.id}
                       }
                        class=
                      >
                        <item.icon class= ></item>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText class="w-5 h-5 text-gray-600" ></FileText>
                Inhaltsverzeichnis
              </h2>
              <nav aria-label="Inhaltsverzeichnis">
                <ul>
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                       
                        class="text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-3 group"
                      >
                        <item.icon class="h-4 w-4 text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400" ></item>
                        <span>
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Content Sections */}
            <div class="space-y-20">
              {/* Overview Section */}
              <section id="ueberblick" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  E-Commerce Datenschutz Überblick
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Cookie Consent Section */}
              <section id="cookie-consent" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Cookie Consent Management
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Tracking & Analytics Section */}
              <section id="tracking-analytics" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Tracking & Analytics
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Payment Data Section */}
              <section id="zahlungsdaten" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Zahlungsdaten & Sicherheit
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Customer Rights Section */}
              <section id="kundenrechte" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Kundenrechte nach DSGVO
                </motion.h2>
                
              </section>

              {/* Divider */}
              <div>

              {/* Implementation Section */}
              <section id="implementation" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Praktische Implementation
                </motion.h2>
                
              </section>
              </div>
            </div>

            {/* Quick Links */}
            <Card class="mt-12">
              <CardHeader>
                <CardTitle class="flex items-center gap-2">
                  <ExternalLink class="h-5 w-5 text-orange-600" ></ExternalLink>
                  Weiterführende Ressourcen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <a href="/wissen/rechtsprechung/cookie-law" class="block">
                    <div>
                      <Gavel class="h-5 w-5 text-orange-600 mb-2" ></Gavel>
                      <div class="font-medium">Cookie Law Updates</div>
                      <div class="text-sm text-gray-600">Aktuelle Rechtsprechung zu Cookies</div>
                    </div>
                  </a>
                  <a href="/wissen/compliance/dsgvo" class="block">
                    <div>
                      <Shield class="h-5 w-5 text-blue-600 mb-2" ></Shield>
                      <div class="font-medium">DSGVO Guide</div>
                      <div class="text-sm text-gray-600">Umfassender DSGVO-Leitfaden</div>
                    </div>
                  </a>
                  <a href="/wissen/branchen/fintech-compliance" class="block">
                    <div>
                      <CreditCard class="h-5 w-5 text-purple-600 mb-2" ></CreditCard>
                      <div class="font-medium">FinTech Compliance</div>
                      <div class="text-sm text-gray-600">Payment & Banking Compliance</div>
                    </div>
                  </a>
                  <a href="/wissen/krisenmanagement" class="block">
                    <div>
                      <AlertOctagon class="h-5 w-5 text-red-600 mb-2" ></AlertOctagon>
                      <div class="font-medium">Krisenmanagement</div>
                      <div class="text-sm text-gray-600">Data Breach Response</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
      </main>

      <Footer ></Footer>
      
      {/* Back to Top Button */}
      <button
       )}
        class="fixed bottom-8 right-8 z-50 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all opacity-90 hover:opacity-100"
        aria-label="Zurück nach oben"
      >
        <ArrowRight class="h-5 w-5 rotate-[-90deg]" ></ArrowRight>
      </button>
    </div>`
};