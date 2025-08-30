export default {
  route: '/wissen/rechtsprechung/planet49-cookie',
  title: 'Planet49 Cookie',
  description: 'Wir verwenden Cookies um Ihnen die bestmögliche Nutzung zu ermöglichen.',
  content: `) => document.head.removeChild(style);
  }, []);

  const handleCopy = async (text: string, type: string) => {
    try  catch (err) 
  };

  const keyRulings = [
    {
      title: "Aktive Einwilligung erforderlich",
      description: "Voreingestellte Checkboxen sind nicht DSGVO-konform",
      impact: "KRITISCH",
      details: "Nutzer müssen aktiv zustimmen - keine Opt-Out Systeme oder vorausgewählte Häkchen"
    },
    {
      title: "Klare und verständliche Information",
      description: "Vollständige Aufklärung über alle Cookie-Zwecke vor Einwilligung",
      impact: "HOCH", 
      details: "Zweck, Speicherdauer und verantwortliche Stellen müssen vor Consent benannt werden"
    },
    {
      title: "Granulare Einwilligungsmöglichkeit",
      description: "Separate Einwilligung für verschiedene Cookie-Kategorien",
      impact: "HOCH",
      details: "Nutzer müssen zwischen essentiellen und nicht-essentiellen Cookies unterscheiden können"
    },
    {
      title: "Widerruf muss möglich sein",
      description: "Einwilligung muss jederzeit widerrufbar sein",
      impact: "MITTEL",
      details: "Gleich einfacher Zugang zum Widerruf wie zur ursprünglichen Einwilligung"
    }
  ];

  const cookieCategories = [
    ,
    ,
    ,
    
  ];

  const consentMechanisms = [
    ,
    
  ];

  const industryStrategies = [
    {
      industry: "E-Commerce",
      icon: Building2,
      color: "from-cyan-500 to-blue-500",
      challenges: [
        "Warenkorb-Funktionalität sicherstellen",
        "Personalisierte Produktempfehlungen",
        "Retargeting-Campaigns",
        "Affiliate-Tracking"
      ],
      solutions: [
        "Session-Cookies als essential klassifizieren",
        "Personalisierung opt-in basiert implementieren",
        "Transparente Zweckbindung für Marketing-Cookies",
        "Cookie-lose Alternativen evaluieren"
      ]
    },
    {
      industry: "Medien & Publishing",
      icon: FileText,
      color: "from-blue-500 to-indigo-500",
      challenges: [
        "Paywall-Funktionalität",
        "Lesefortschritt tracking",
        "Werbeeinnahmen sichern",
        "Content-Personalisierung"
      ],
      solutions: [
        "Login-basierte Paywalls bevorzugen",
        "Lokale Storage für Lesefortschritt",
        "Consent-basierte Werbung implementieren",
        "First-Party Data Strategien"
      ]
    },
    {
      industry: "SaaS & Tech",
      icon: Monitor,
      color: "from-indigo-500 to-purple-500",
      challenges: [
        "Produkt-Analytics",
        "A/B Testing",
        "Performance Monitoring",
        "User Onboarding Tracking"
      ],
      solutions: [
        "Anonymisierte Analytics priorisieren",
        "Einwilligungsbasierte Detailtracking",
        "Server-side Analytics implementieren",
        "Privacy-by-Design Architektur"
      ]
    },
    {
      industry: "Healthcare & Finance",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      challenges: [
        "Höchste Compliance-Anforderungen",
        "Sensible Datenverarbeitung",
        "Regulatorische Oversight",
        "Patient/Kunden-Vertrauen"
      ],
      solutions: [
        "Minimaler Cookie-Einsatz",
        "Strenge Zweckbindung",
        "Regelmäßige Compliance-Audits",
        "Zero-Party Data Konzepte"
      ]
    }
  ];

  const bestPractices = [
    {
      category: "Design & UX",
      icon: Eye,
      practices: [
        "Banner nicht die gesamte Seite blockieren",
        "Klare, verständliche Sprache verwenden",
        "Gleich prominente Akzeptieren/Ablehnen Buttons",
        "Mobile-optimierte Darstellung sicherstellen"
      ]
    },
    ,
    {
      category: "Rechtliche Absicherung",
      icon: Scale,
      practices: [
        "Detaillierte Cookie-Policy bereitstellen",
        "Regelmäßige Rechtskonformitätsprüfung",
        "Dokumentation aller Cookie-Zwecke",
        "Widerrufsmöglichkeiten prominent platzieren"
      ]
    },
    {
      category: "Performance & Analytics",
      icon: TrendingUp,
      practices: [
        "Consent-Raten kontinuierlich monitoren",
        "A/B Testing für Banner-Varianten",
        "First-Party Data Strategien entwickeln",
        "Cookie-lose Alternativen implementieren"
      ]
    }
  ];

  const implementationGuide = [
    {
      step: "1. Audit & Kategorisierung",
      description: "Alle vorhandenen Cookies identifizieren und kategorisieren",
      icon: Search,
      tasks: [
        "Cookie-Inventory erstellen",
        "Zwecke und Rechtsgrundlagen dokumentieren",
        "Drittanbieter-Cookies identifizieren",
        "Speicherdauer und Übertragung bewerten"
      ]
    },
    {
      step: "2. Consent Management",
      description: "Planet49-konforme Einwilligungsmechanismen implementieren",
      icon: SquareCheck,
      tasks: [
        "CMP auswählen und konfigurieren",
        "Granulare Consent-Optionen einrichten",
        "Banner-Design und -Text optimieren",
        "Widerrufsmöglichkeiten implementieren"
      ]
    },
    {
      step: "3. Cookie-Policy & Dokumentation",
      description: "Rechtssichere Dokumentation und Information",
      icon: FileText,
      tasks: [
        "Detaillierte Cookie-Policy erstellen",
        "Datenschutzerklärung aktualisieren",
        "Zweckbindung transparent kommunizieren",
        "Kontaktmöglichkeiten bereitstellen"
      ]
    },
    {
      step: "4. Testing & Monitoring",
      description: "Funktionalität testen und kontinuierlich überwachen",
      icon: Activity,
      tasks: [
        "Cross-Browser und Mobile Testing",
        "Consent-Flow Usability testen",
        "Cookie-Setzung nach Einwilligung verifizieren",
        "Compliance-Monitoring einrichten"
      ]
    }
  ];

  const codeExamples = {
    compliant: {
      title: "Planet49-konformer Cookie Banner",
      description: "Rechtssichere Implementierung mit granularer Kontrolle",
      code: \`// Planet49-konforme Cookie Banner Implementierung
class CookieConsentManager {
  constructor() 

  // Banner nur anzeigen wenn noch keine Einwilligung vorliegt
  initializeBanner() {
    if (!this.consentData.timestamp)  else 
  }

  showConsentBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-consent-banner';
    banner.innerHTML = \\\`
      <div class="consent-content">
        <h3>Cookie-Einstellungen</h3>
        <p>Wir verwenden Cookies um Ihnen die bestmögliche Nutzung zu ermöglichen.</p>
        
        <div class="cookie-categories">
          \\$
        </div>
        
        <div class="consent-actions">
          <button onclick="cookieManager.savePreferences()" class="btn-primary">
            Auswahl speichern
          </button>
          <button onclick="cookieManager.acceptAll()" class="btn-secondary">
            Alle akzeptieren
          </button>
          <button onclick="cookieManager.rejectOptional()" class="btn-tertiary">
            Nur erforderliche
          </button>
        </div>
        
        <a href="/datenschutz" class="privacy-link">Mehr Informationen</a>
      </div>
    \\\`;
    
    document.body.appendChild(banner);
  }

  renderCookieCategories() {
    const categories = [
      {
        id: 'essential',
        name: 'Erforderlich',
        description: 'Für die Grundfunktionen der Website',
        required: true
      },
      {
        id: 'functional', 
        name: 'Funktional',
        description: 'Verbessern die Nutzererfahrung',
        required: false
      },
      {
        id: 'analytics',
        name: 'Analyse',
        description: 'Helfen uns die Website zu verbessern',
        required: false
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description: 'Für personalisierte Werbung',
        required: false
      }
    ];

    return categories.map(cat => \\\`
      <div class="cookie-category">
        <label class="category-toggle">
          <input 
            type="checkbox" 
            id="\\\${cat.id}"
            \\\${cat.required ? 'checked disabled' : ''}
            data-category="\\\${cat.id}"
          >
          <span class="category-name">\\\${cat.name}</span>
          \\\${cat.required ? '<span class="required-badge">Erforderlich</span>' : ''}
        </label>
        <p class="category-description">\\\${cat.description}</p>
      </div>
    \\\`).join('');
  }

  savePreferences() {
    const preferences = {};
    document.querySelectorAll('[data-category]').forEach(checkbox => {
      preferences[checkbox.dataset.category] = checkbox.checked;
    });
    
    this.saveConsent(preferences);
    this.loadConsentedCookies();
    this.hideBanner();
  }

  acceptAll() {
    const allCategories = ['essential', 'functional', 'analytics', 'marketing'];
    const preferences = {};
    allCategories.forEach(cat => preferences[cat] = true);
    
    this.saveConsent(preferences);
    this.loadConsentedCookies();
    this.hideBanner();
  }

  rejectOptional() {
    const preferences = {
      essential: true,
      functional: false,
      analytics: false, 
      marketing: false
    };
    
    this.saveConsent(preferences);
    this.loadConsentedCookies();
    this.hideBanner();
  }

  saveConsent(preferences) {
    const consentData = ;
    
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    this.consentData = consentData;
  }

  loadConsent() {
    const stored = localStorage.getItem('cookie-consent');
    return stored ? JSON.parse(stored) : {};
  }

  loadConsentedCookies() {
    const { preferences } = this.consentData;
    
    if (preferences.functional) 
    
    if (preferences.analytics) 
    
    if (preferences.marketing) 
  }

  // Widerruf-Funktionalität
  revokeConsent() 

  clearOptionalCookies() {
    // Implementation zum Löschen nicht-essentieller Cookies
    const nonEssentialCookies = [
      '_ga', '_gid', '_gat', '_gtag', 
      'fbp', '_fbp', 'fr', 'tr',
      // Weitere nicht-essentielle Cookies...
    ];
    
    nonEssentialCookies.forEach(name => {
      document.cookie = \\\`\\\${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/\\\`;
    });
  }
}

// Initialisierung
const cookieManager = new CookieConsentManager();

// Globale Funktionen für Widerruf
window.showCookieSettings = () => cookieManager.showConsentBanner();
window.revokeCookieConsent = () => cookieManager.revokeConsent();\`
    },
    nonCompliant: {
      title: "Nicht-konforme Implementierung (VERMEIDEN!)",
      description: "Typische Fehler die gegen Planet49 verstoßen",
      code: \`// ❌ NICHT Planet49-konform - NICHT verwenden!

// FEHLER 1: Vorausgewählte Checkboxen
function showBadCookieBanner() 

// FEHLER 2: Implied Consent / Fortsetzung der Nutzung
function impliedConsentApproach() 

// FEHLER 3: Alle-oder-nichts Ansatz
function binaryChoice() 

// FEHLER 4: Vorab-Laden von Tracking-Skripten
// ❌ FALSCH: Lädt Tracking vor Einwilligung
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(),i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// FEHLER 5: Schwer zu findender Widerruf
function hideWithdrawalOption() {
  // ❌ FALSCH: Widerruf versteckt oder erschwert
  const link = '<a>Einstellungen</a>';
}

// FEHLER 6: Unklare Zweckbindung
function vagueDescription() {
  return \\\`
    <p>Wir verwenden Cookies zur Verbesserung der Nutzererfahrung.</p>
    <!-- ❌ FALSCH: Zu unspezifisch, keine klare Zweckbindung -->
  \\\`;
}\`
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Planet49 EuGH Cookie Urteil C-673/17 – Consent Banner DSGVO-konform</title>
        <meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta>
        <meta>
        <meta>
        <link rel="canonical" href="https://marsjonas.de/wissen/rechtsprechung/planet49-cookie" />
      </Helmet>
      <Header ></Header>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow" ></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div class="container mx-auto max-w-7xl relative z-10">
          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            class="mb-8"
          >
            <Button>
              <a href="/wissen/rechtsprechung" class="flex items-center gap-2">
                <ArrowLeft class="h-4 w-4" ></ArrowLeft>
                Zurück zur Rechtsprechung
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-20"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              class="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 backdrop-blur-sm rounded-full mb-8 border border-cyan-500/20"
            >
              <Cookie class="h-5 w-5 text-cyan-400" ></Cookie>
              <span class="text-sm font-semibold text-cyan-300">Cookie Consent Urteil</span>
              <Star class="h-5 w-5 text-blue-400 animate-pulse" ></Star>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span class="text-white">Planet49</span>
              <br />
              <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Cookie Urteil
              </span>
              <br />
              <span>
                EuGH C-673/17
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Das wegweisende Urteil zu Cookie-Consent und 
              <span class="font-semibold text-cyan-300"> voreingestellten Checkboxen</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              class="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge class="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
                <Cookie class="h-4 w-4 mr-2" ></Cookie>
                Cookie-Consent Revolution
              </Badge>
              <Badge class="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Calendar class="h-4 w-4 mr-2" ></Calendar>
                1. Oktober 2019
              </Badge>
              <Badge class="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-4 py-2">
                <Globe class="h-4 w-4 mr-2" ></Globe>
                EU-weit bindend
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Tabs */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <Tabs value={activeTab} class="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              class="mb-12"
            >
              <TabsList class="grid w-full grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger>
                  Überblick
                </TabsTrigger>
                <TabsTrigger>
                  Urteil-Details
                </TabsTrigger>
                <TabsTrigger>
                  Cookie-Kategorien
                </TabsTrigger>
                <TabsTrigger>
                  Consent-Mechanismen
                </TabsTrigger>
                <TabsTrigger>
                  Implementation
                </TabsTrigger>
                <TabsTrigger>
                  Best Practices
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" class="space-y-8">
              {/* Table of Contents */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-cyan-500/30 mb-8">
                  <CardContent class="p-6">
                    <nav aria-label="Inhaltsverzeichnis">
                      <h2 id="inhaltsverzeichnis" class="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
                      <ul class="space-y-2 text-slate-300">
                        <li><a>1. Urteilsübersicht</a></li>
                        <li><a>2. Urteil-Details</a></li>
                        <li><a>3. Cookie-Kategorien</a></li>
                        <li><a>4. Consent-Mechanismen</a></li>
                        <li><a>5. Implementation</a></li>
                        <li><a>6. Best Practices</a></li>
                      </ul>
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-cyan-500/30">
                  <CardContent class="p-8">
                    <div>
                      <div>
                        <h2 id="urteilsuebersicht" class="text-2xl font-bold text-white mb-6">Urteilsübersicht</h2>
                        <div class="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Am 1. Oktober 2019 fällte der Europäische Gerichtshof (EuGH) ein bahnbrechendes Urteil 
                            in der Rechtssache C-673/17 (Planet49 GmbH gegen Bundesverband der Verbraucherzentralen), 
                            das die Landschaft für Cookie-Consent grundlegend veränderte.
                          </p>
                          <p>
                            Das Gericht entschied eindeutig, dass <strong>voreingestellte Checkboxen</strong> für 
                            die Einwilligung in Cookie-Setzung nicht DSGVO-konform sind. Nutzer müssen aktiv und 
                            bewusst zustimmen - ein passives Verhalten reicht nicht aus.
                          </p>
                          <p>
                            Diese Entscheidung revolutionierte Cookie-Banner weltweit und zwang Unternehmen zur 
                            vollständigen Überarbeitung ihrer Consent-Mechanismen. Der Fokus liegt auf 
                            <strong> aktiver, informierter und granularer Einwilligung</strong>. Ähnlich wie bei 
                            <Link>Transparenz-Verstößen bei Messaging-Apps</Link> 
                            zeigt sich die Bedeutung klarer Nutzerinformation.
                          </p>
                        </div>
                      </div>
                      <div class="space-y-6">
                        <div class="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6">
                          <h4 class="text-lg font-bold text-white mb-4">Urteilsfakten</h4>
                          <div class="space-y-3 text-sm">
                            <div class="flex justify-between">
                              <span class="text-slate-400">Aktenzeichen:</span>
                              <span class="text-white font-semibold">C-673/17</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Datum:</span>
                              <span class="text-white font-semibold">01.10.2019</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Gericht:</span>
                              <span class="text-white font-semibold">EuGH</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Kläger:</span>
                              <span class="text-white font-semibold">Verbraucherzentrale</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Beklagte:</span>
                              <span class="text-white font-semibold">Planet49 GmbH</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="text-center">
                          <Button class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                            <Download class="h-4 w-4 mr-2" ></Download>
                            Volltext herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Key Rulings Tab */}
            <TabsContent value="ruling" class="space-y-8">
              <h2 id="urteil-details" class="text-3xl font-bold text-white mb-8 text-center">
                Planet49 Urteil-Details
              </h2>
              <div class="grid gap-6">
                {keyRulings.map((ruling, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card>
                      <CardContent class="p-6">
                        <div class="flex items-start gap-4">
                          <div>
                            {ruling.impact}
                          </div>
                          <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-2">{ruling.title}</h3>
                            <p class="text-slate-300 mb-3">{ruling.description}</p>
                            <p class="text-sm text-slate-400">{ruling.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Cookie Categories Tab */}
            <TabsContent value="categories" class="space-y-8">
              <h2 id="cookie-kategorien" class="text-3xl font-bold text-white mb-8 text-center">
                Cookie-Kategorien nach Planet49
              </h2>
              <div>
                {cookieCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    class="group"
                  >
                    <Card>
                      <CardContent class="p-6">
                        <div class="flex items-center gap-3 mb-6">
                          <div class=>
                            <category.icon class="h-6 w-6 text-white" ></category>
                          </div>
                          <div>
                            <h3 class="text-xl font-bold text-white">{category.name}</h3>
                            <p class="text-sm text-slate-400">{category.description}</p>
                          </div>
                        </div>
                        
                        <div class="space-y-4">
                          <div class="p-3 bg-slate-700/30 rounded-lg">
                            <div class="text-sm text-slate-400 mb-1">Einwilligung:</div>
                            <div class="text-white font-semibold">{category.consent}</div>
                          </div>
                          
                          <div class="p-3 bg-slate-700/30 rounded-lg">
                            <div class="text-sm text-slate-400 mb-1">Rechtsgrundlage:</div>
                            <div class="text-white text-sm">{category.legalBasis}</div>
                          </div>

                          <div class="p-3 bg-slate-700/30 rounded-lg">
                            <div class="text-sm text-slate-400 mb-2">Beispiele:</div>
                            <div class="space-y-1">
                              {category.examples.map((example, idx) => (
                                <div key={idx} class="flex items-center gap-2">
                                  <CheckCircle2 class="h-3 w-3 text-cyan-400" ></CheckCircle2>
                                  <span class="text-slate-300 text-sm">{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div class="p-3 bg-slate-700/30 rounded-lg">
                            <div class="text-sm text-slate-400 mb-1">Implementation:</div>
                            <div class="text-white text-sm">{category.implementation}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Consent Mechanisms Tab */}
            <TabsContent value="consent" class="space-y-8">
              <h2 id="consent-mechanismen" class="text-3xl font-bold text-white mb-8 text-center">
                DSGVO-konforme Consent-Mechanismen
              </h2>
              <div>
                {consentMechanisms.map((mechanism, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card class="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-6">
                        <div class="flex items-center gap-3 mb-6">
                          <div class=>
                            <mechanism.icon class="h-6 w-6 text-white" ></mechanism>
                          </div>
                          <div>
                            <h3 class="text-xl font-bold text-white">{mechanism.type}</h3>
                            <p class="text-sm text-slate-400">{mechanism.description}</p>
                          </div>
                        </div>

                        <div class="space-y-4 mb-6">
                          {mechanism.features.map((feature, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              
                              <span class="text-slate-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div class="relative">
                          <div class="bg-slate-900/50 rounded-lg p-4 overflow-auto">
                            <div class="flex items-center gap-2 mb-3">
                              <Code class="h-4 w-4 text-cyan-400" ></Code>
                              <span class="text-sm font-semibold text-cyan-300">Code Beispiel</span>
                              <Button
                                size="sm"
                                variant="outline"
                               
                                class="ml-auto"
                              >
                                
                              </Button>
                            </div>
                            <pre class="text-xs text-slate-300 overflow-x-auto">
                              <code>{mechanism.code}</code>
                            </pre>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Code Examples */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                class="mt-12"
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-cyan-500/30">
                  <CardContent class="p-8">
                    <h3 class="text-2xl font-bold text-white mb-6 text-center">
                      Interactive Cookie Banner Examples
                    </h3>
                    
                    <div class="flex justify-center mb-8">
                      <div class="bg-slate-700/50 rounded-lg p-1">
                        <Button
                          variant={bannerExample === 'compliant' ? 'default' : 'ghost'}
                         
                          class={bannerExample === 'compliant' ? 'bg-cyan-500' : ''}
                        >
                          Planet49-konform
                        </Button>
                        <Button
                          variant={bannerExample === 'nonCompliant' ? 'default' : 'ghost'}
                         
                          class={bannerExample === 'nonCompliant' ? 'bg-red-500' : ''}
                        >
                          Nicht-konform
                        </Button>
                      </div>
                    </div>

                    <div class="space-y-6">
                      <div class="bg-slate-900/50 rounded-lg p-6">
                        <div class="flex items-center gap-3 mb-4">
                          <Code class="h-5 w-5 text-cyan-400" ></Code>
                          <h4 class="text-lg font-bold text-white">
                            {codeExamples[bannerExample].title}
                          </h4>
                          <Button
                            size="sm"
                            variant="outline"
                           
                            class="ml-auto"
                          >
                            
                          </Button>
                        </div>
                        <p class="text-slate-400 mb-4">{codeExamples[bannerExample].description}</p>
                        <div class="bg-slate-800 rounded-lg p-4 overflow-auto">
                          <pre class="text-xs text-slate-300">
                            <code>{codeExamples[bannerExample].code}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" class="space-y-8">
              <h2 id="implementation-guide" class="text-3xl font-bold text-white mb-8 text-center">
                Planet49-konforme Cookie Implementation
              </h2>
              <div class="space-y-8">
                {implementationGuide.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center gap-4 mb-6">
                          <div class="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                            <step.icon class="h-6 w-6 text-white" ></step>
                          </div>
                          <div>
                            <h3 class="text-2xl font-bold text-white">{step.step}</h3>
                            <p class="text-slate-400">{step.description}</p>
                          </div>
                        </div>
                        <div>
                          {step.tasks.map((task, idx) => (
                            <div key={idx} class="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 class="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Industry-Specific Strategies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                class="mt-16"
              >
                <h3 class="text-3xl font-bold text-white mb-8 text-center">
                  Branchenspezifische Cookie-Strategien
                </h3>
                <div>
                  {industryStrategies.map((industry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Card class="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                        <CardContent class="p-6">
                          <div class="flex items-center gap-3 mb-6">
                            <div class=>
                              <industry.icon class="h-6 w-6 text-white" ></industry>
                            </div>
                            <h4 class="text-xl font-bold text-white">{industry.industry}</h4>
                          </div>

                          <div class="space-y-6">
                            <div>
                              <h5 class="text-sm font-semibold text-cyan-300 mb-3">Herausforderungen:</h5>
                              <div class="space-y-2">
                                {industry.challenges.map((challenge, idx) => (
                                  <div key={idx} class="flex items-start gap-2">
                                    <AlertTriangle class="h-3 w-3 text-orange-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                    <span class="text-slate-300 text-sm">{challenge}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 class="text-sm font-semibold text-green-300 mb-3">Lösungsansätze:</h5>
                              <div class="space-y-2">
                                {industry.solutions.map((solution, idx) => (
                                  <div key={idx} class="flex items-start gap-2">
                                    <CheckCircle2 class="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                    <span class="text-slate-300 text-sm">{solution}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Best Practices Tab */}
            <TabsContent value="practices" class="space-y-8">
              <h2 id="best-practices" class="text-3xl font-bold text-white mb-8 text-center">
                Cookie-Compliance Best Practices
              </h2>
              <div>
                {bestPractices.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card class="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-6">
                        <div class="flex items-center gap-3 mb-6">
                          <div class="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                            <category.icon class="h-6 w-6 text-white" ></category>
                          </div>
                          <h4 class="text-xl font-bold text-white">{category.category}</h4>
                        </div>

                        <div class="space-y-3">
                          {category.practices.map((practice, idx) => (
                            <div key={idx} class="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 class="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300 text-sm">{practice}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div class="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Planet49-konforme Cookie-Compliance
              </span>
            </h2>
            <p class="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Implementieren Sie rechtssichere Cookie-Banner und vermeiden Sie kostspielige Abmahnungen. 
              Unsere Experten helfen bei der vollständigen DSGVO-Compliance.
            </p>
            
            <div>
              <Button size="lg" class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3">
                <Shield class="h-5 w-5 mr-2" ></Shield>
                Cookie-Compliance Audit
              </Button>
              <Button>
                <MessageCircle class="h-5 w-5 mr-2" ></MessageCircle>
                Kostenlose Beratung
              </Button>
            </div>

            <div>
              <div class="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6">
                <div class="text-3xl font-bold text-cyan-400 mb-2">24h</div>
                <div class="text-slate-300">Schnelle Umsetzung</div>
              </div>
              <div class="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6">
                <div class="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div class="text-slate-300">Planet49-konform</div>
              </div>
              <div class="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6">
                <div class="text-3xl font-bold text-indigo-400 mb-2">€0</div>
                <div class="text-slate-300">Erstberatung kostenfrei</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-16"
          >
            <h2>
              <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Verwandte Ressourcen
              </span>
            </h2>
            <p class="text-xl text-slate-300">
              Weitere wichtige Urteile und praktische Cookie-Leitfäden
            </p>
          </motion.div>

          <div>
            {[
              {
                title: "Cookie-Law Guide",
                description: "Vollständiger Leitfaden zur DSGVO-konformen Cookie-Nutzung",
                icon: Cookie,
                link: "/wissen/leitfaden/cookie-law",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Google Analytics Austria",
                description: "Österreichisches Urteil zu Analytics ohne Einwilligung",
                icon: BarChart3,
                link: "/wissen/rechtsprechung/google-analytics-austria",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Meta Ireland 2024",
                description: "Aktuelles Urteil zu Social Media Tracking",
                icon: Scale,
                link: "/wissen/rechtsprechung/meta-irland-2024",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                class="group"
              >
                <Card>
                  <CardContent class="p-6">
                    <div class=>
                      <resource.icon class="h-6 w-6 text-white" ></resource>
                    </div>
                    <h3>
                      {resource.title}
                    </h3>
                    <p class="text-slate-300 mb-6">{resource.description}</p>
                    <Button asChild class=>
                      <Link to={resource.link} class="flex items-center justify-center gap-2">
                        <span>Mehr erfahren</span>
                        <ArrowRight class="h-4 w-4" ></ArrowRight>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer ></Footer>
    </div>`
};