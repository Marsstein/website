export default {
  route: '/wissen/rechtsprechung/cookie-law',
  title: 'Cookie Law',
  description: 'Die Cookie-Rechtsprechung hat sich in den letzten Jahren dramatisch entwickelt. 
                            Von der ursprünglich lockeren Handhabung hin zu str',
  content: `) => {
      // Cleanup
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) 
    };
  }, []);

  const handleCopy = async (text: string, type: string) => {
    try  catch (err) 
  };

  const cookieCategories = [
    ,
    ,
    ,
    
  ];

  const recentRulings = [
    {
      date: '2024',
      court: 'EuGH',
      case: 'Real Cookie Banner',
      ruling: 'Voreingestellte Häkchen bei nicht-essentiellen Cookies sind unzulässig',
      impact: 'HOCH',
      fineAmount: null,
      implications: [
        'Opt-in muss aktiv erfolgen',
        'Keine vorausgewählten Checkboxen',
        'Ablehnung muss so einfach sein wie Zustimmung',
        'Granulare Auswahl erforderlich'
      ]
    },
    {
      date: '2023',
      court: 'BGH',
      case: 'Cookie-Banner Urteil',
      ruling: 'Cookie-Banner müssen alle Optionen gleichwertig darstellen',
      impact: 'HOCH',
      fineAmount: null,
      implications: [
        'Gleiche Sichtbarkeit für Akzeptieren/Ablehnen',
        'Keine irreführenden Designs',
        'Klare Kategorisierung erforderlich',
        'Einfache Widerrufsmöglichkeit'
      ]
    },
    {
      date: '2023',
      court: 'DSK',
      case: 'E-Privacy Orientierungshilfe',
      ruling: 'Neue Leitlinien für Cookie-Einwilligungen',
      impact: 'MITTEL',
      fineAmount: null,
      implications: [
        'Spezifische Anforderungen an Consent Manager',
        'Dokumentationspflichten verschärft',
        'Cookie-Scanning obligatorisch',
        'Regelmäßige Aktualisierung erforderlich'
      ]
    },
    {
      date: '2022',
      court: 'CNIL',
      case: 'Google/Facebook Strafe',
      ruling: '€210 Mio. Strafe wegen Cookie-Verstößen',
      impact: 'KRITISCH',
      fineAmount: '€210 Millionen',
      implications: [
        'Massive Strafen für Cookie-Verstöße möglich',
        'Internationale Verfolgung von Verstößen',
        'Consent-Management wird prioritär geprüft',
        'Dark Patterns führen zu hohen Strafen'
      ]
    }
  ];

  const implementationSteps = [
    {
      phase: 'Vorbereitung & Analyse',
      duration: '1-2 Wochen',
      priority: 'HOCH',
      color: 'from-blue-500 to-indigo-500',
      tasks: [
        'Cookie-Audit der bestehenden Website durchführen',
        'Kategorisierung aller eingesetzten Cookies',
        'Rechtliche Grundlagen für jeden Cookie prüfen',
        'Drittanbieter-Services und deren Cookies identifizieren',
        'Datenflüsse dokumentieren'
      ]
    },
    ,
    {
      phase: 'Technische Implementierung',
      duration: '1-2 Wochen',
      priority: 'HOCH',
      color: 'from-emerald-500 to-teal-500',
      tasks: [
        'Cookie-Scripts in CMP integrieren',
        'Tracking nur nach Einwilligung aktivieren',
        'Fallback-Lösungen für abgelehnte Cookies',
        'Performance-Optimierung durchführen',
        'Cross-Browser Kompatibilität testen'
      ]
    },
    {
      phase: 'Dokumentation & Compliance',
      duration: '1 Woche',
      priority: 'MITTEL',
      color: 'from-orange-500 to-red-500',
      tasks: [
        'Cookie-Policy aktualisieren',
        'Datenschutzerklärung anpassen',
        'Verarbeitungsverzeichnis erweitern',
        'Schulungsunterlagen für Teams erstellen',
        'Compliance-Monitoring einrichten'
      ]
    },
    {
      phase: 'Testing & Launch',
      duration: '1 Woche',
      priority: 'KRITISCH',
      color: 'from-red-500 to-pink-500',
      tasks: [
        'Umfassendes Testing auf allen Devices',
        'User Experience Optimierung',
        'Legal Review der finalen Implementierung',
        'Soft Launch mit ausgewählten Nutzern',
        'Full Rollout nach erfolgreichen Tests'
      ]
    }
  ];

  const codeExamples = {
    essential: {
      title: 'Erforderliche Cookies - Implementierung',
      code: `<!-- Session Cookie (Server-side) -->
<?php
// Sichere Session-Konfiguration
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);
ini_set('session.cookie_samesite', 'Strict');
session_start();
?>

<!-- JavaScript für lokale Einstellungen -->
<script>
// Sichere localStorage Alternative
function setSecureSetting(key, value) {
  if (typeof(Storage) !== "undefined") 
}

// CSRF Token handling
function getCSRFToken() 
</script>`
    },
    functional: {
      title: 'Funktionale Cookies - Mit Einwilligung',
      code: `<!-- Consent-abhängige Funktionen -->
<script>
function initFunctionalFeatures() {
  // Prüfe Einwilligung
  if (hasConsent('functional')) 
}

function hasConsent(category) 

// Event Listener für Consent Changes
document.addEventListener('cookie_consent_update', function(e) {
  if (e.detail.functional)  else 
});
</script>`
    },
    analytics: {
      title: 'Analytics Cookies - Google Analytics 4',
      code: `<!-- GA4 mit Consent Management -->
<script>
function initAnalytics() {
  if (hasConsent('analytics')) {
    // GA4 Configuration
    gtag('config', 'GA_MEASUREMENT_ID', {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=Strict;Secure',
      'cookie_expires': 63072000, // 2 Jahre
    });
    
    // Consent Mode V2
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  } else {
    // Analytics ohne Cookies
    gtag('config', 'GA_MEASUREMENT_ID', {
      'client_storage': 'none',
      'anonymize_ip': true
    });
  }
}

// Consent Default
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
});
</script>`
    },
    marketing: {
      title: 'Marketing Cookies - Facebook Pixel',
      code: `<!-- Facebook Pixel mit Consent -->
<script>
function initMarketingPixels() {
  if (hasConsent('marketing')) {
    // Facebook Pixel Standard
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function();
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
    
    // Retargeting Pixel
    initRetargetingPixel();
  }
}

function removeMarketingCookies() {
  // Alle Marketing Cookies löschen
  document.cookie.split(";").forEach(function(c) { 
    if (c.trim().startsWith('_fb') || 
        c.trim().startsWith('_gcl')) 
  });
}
</script>`
    }
  };

  const bestPractices = [
    {
      category: 'Banner Design',
      icon: Monitor,
      practices: [
        'Akzeptieren und Ablehnen gleich prominent darstellen',
        'Keine irreführenden Farben oder Buttons',
        'Mobile-first Design für alle Geräte',
        'Barrierefreie Bedienung sicherstellen',
        'Layer-by-layer Information bereitstellen'
      ]
    },
    {
      category: 'Consent Management',
      icon: Settings,
      practices: [
        'Granulare Kontrolle über Cookie-Kategorien',
        'Einfache Widerrufsmöglichkeit',
        'Consent-Historie dokumentieren',
        'Regelmäßige Re-Consent Mechanismen',
        'Cross-Device Consent Synchronisation'
      ]
    },
    {
      category: 'Performance',
      icon: Zap,
      practices: [
        'Asynchrones Laden von Tracking-Scripts',
        'Minimale Auswirkung auf Page Speed',
        'Fallback für geblockte Cookies',
        'Efficient Cookie Storage Management',
        'Reduced Third-Party Dependencies'
      ]
    },
    {
      category: 'Dokumentation',
      icon: FileText,
      practices: [
        'Vollständige Cookie-Dokumentation',
        'Regelmäßige Cookie-Audits',
        'Versionierung der Cookie-Policy',
        'Compliance Monitoring Dashboard',
        'Audit Trail für alle Änderungen'
      ]
    }
  ];

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header ></Header>
      
      {/* Breadcrumb Navigation */}
      <nav>
        <div class="container mx-auto max-w-7xl">
          <ol class="flex items-center py-3 text-sm">
            <li>
              <Link>
                <Home class="h-4 w-4 mr-1" ></Home>
                Home
              </Link>
            </li>
            <ChevronRight class="h-4 w-4 mx-2 text-slate-600" ></ChevronRight>
            <li>
              <Link>
                Wissen
              </Link>
            </li>
            <ChevronRight class="h-4 w-4 mx-2 text-slate-600" ></ChevronRight>
            <li>
              <Link>
                Rechtsprechung
              </Link>
            </li>
            <ChevronRight class="h-4 w-4 mx-2 text-slate-600" ></ChevronRight>
            <li class="text-blue-400 font-semibold">Cookie Law Guide</li>
          </ol>
        </div>
      </nav>
      
      {/* Table of Contents */}
      <div>
        <Card class="bg-slate-800/60 backdrop-blur-sm border-slate-700/50">
          <CardContent class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <List class="h-5 w-5 text-blue-400" ></List>
              <h2 class="text-lg font-semibold text-white">Inhaltsverzeichnis</h2>
            </div>
            <nav aria-label="Inhaltsverzeichnis">
              <ul class="space-y-2 text-sm">
                <li>
                  <a>
                    <Cookie class="h-4 w-4" ></Cookie>
                    Cookie Kategorien Überblick
                  </a>
                </li>
                <li>
                  <a>
                    <Scale class="h-4 w-4" ></Scale>
                    Rechtliche Anforderungen
                  </a>
                </li>
                <li>
                  <a>
                    <Settings class="h-4 w-4" ></Settings>
                    Implementierungs-Leitfaden
                  </a>
                </li>
                <li>
                  <a>
                    <Building2 class="h-4 w-4" ></Building2>
                    Wichtige Urteile
                  </a>
                </li>
                <li>
                  <a>
                    <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                    Best Practices
                  </a>
                </li>
              </ul>
            </nav>
          </CardContent>
        </Card>
      </div>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" ></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        id="cookie-overview"
        ref={heroRef}
        style={{ y, opacity }}
        class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
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
              class="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Cookie class="h-5 w-5 text-blue-400 animate-bounce" ></Cookie>
              <span class="text-sm font-semibold text-blue-300">Cookie Law Guide</span>
              <Shield class="h-5 w-5 text-green-400" ></Shield>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span class="text-white">Cookie</span>
              <br />
              <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Rechtsprechung
              </span>
              <br />
              <span>
                & Compliance
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Umfassender Leitfaden zur aktuellen Cookie-Rechtsprechung und 
              <span class="font-semibold text-blue-300"> rechtssicheren Implementierung</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              class="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge class="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                <CheckCircle2 class="h-4 w-4 mr-2" ></CheckCircle2>
                Aktuelle Rechtsprechung
              </Badge>
              <Badge class="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Code class="h-4 w-4 mr-2" ></Code>
                Code-Beispiele
              </Badge>
              <Badge class="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                <Target class="h-4 w-4 mr-2" ></Target>
                Best Practices
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
                  Cookie-Arten
                </TabsTrigger>
                <TabsTrigger>
                  Rechtsprechung
                </TabsTrigger>
                <TabsTrigger>
                  Umsetzung
                </TabsTrigger>
                <TabsTrigger>
                  Code-Beispiele
                </TabsTrigger>
                <TabsTrigger>
                  Best Practices
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" class="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent class="p-8">
                    <div>
                      <div>
                        <h3 class="text-2xl font-bold text-white mb-6">Cookie-Rechtsprechung Überblick</h3>
                        <div class="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Die Cookie-Rechtsprechung hat sich in den letzten Jahren dramatisch entwickelt. 
                            Von der ursprünglich lockeren Handhabung hin zu strengen Einwilligungsanforderungen 
                            und hohen Bußgeldern für Verstöße.
                          </p>
                          <p>
                            Aktuelle Urteile vom EuGH, BGH und nationalen Datenschutzbehörden haben klare 
                            Standards gesetzt: Echte Einwilligung, granulare Kontrolle und transparente 
                            Information sind nicht mehr optional.
                          </p>
                          <p>
                            Dieser Leitfaden bietet Ihnen eine umfassende Übersicht über die aktuelle 
                            Rechtslage, praktische Implementierungshilfen und bewährte Methoden für 
                            Cookie-Compliance.
                          </p>
                        </div>
                      </div>
                      <div class="space-y-6">
                        <div class="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6">
                          <h4 class="text-lg font-bold text-white mb-4">Wichtige Fakten</h4>
                          <div class="space-y-3 text-sm">
                            <div class="flex justify-between">
                              <span class="text-slate-400">Letzte Updates:</span>
                              <span class="text-white font-semibold">2024</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Höchste Strafe:</span>
                              <span class="text-white font-semibold">€210 Mio.</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Betroffene Sites:</span>
                              <span class="text-white font-semibold">95%+</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Compliance Rate:</span>
                              <span class="text-white font-semibold">~30%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="text-center">
                          <Button class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                            <Download class="h-4 w-4 mr-2" ></Download>
                            Compliance Checkliste
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Cookie Categories Tab */}
            <TabsContent value="categories" class="space-y-8">
              <div class="grid gap-8">
                {cookieCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    class="group"
                  >
                    <Card>
                      <CardContent class="p-8">
                        <div class="flex items-start gap-6">
                          <div class=>
                            <category.icon class="h-8 w-8 text-white" ></category>
                          </div>
                          <div class="flex-1">
                            <div class="flex items-center gap-3 mb-4">
                              <h3 class="text-2xl font-bold text-white">{category.name}</h3>
                              <Badge class=>
                                {category.consent}
                              </Badge>
                            </div>
                            <p class="text-slate-300 mb-6">{category.description}</p>
                            
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-3">Beispiele:</h4>
                                <div class="space-y-2">
                                  {category.examples.map((example, idx) => (
                                    <div key={idx} class="flex items-center gap-2">
                                      <CheckCircle2 class="h-4 w-4 text-blue-400 flex-shrink-0" ></CheckCircle2>
                                      <span class="text-slate-300 text-sm">{example}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div class="space-y-4">
                                <div>
                                  <span class="text-slate-400 text-sm">Rechtsgrundlage:</span>
                                  <p class="text-white font-semibold">{category.legalBasis}</p>
                                </div>
                                <div>
                                  <span class="text-slate-400 text-sm">Speicherdauer:</span>
                                  <p class="text-white font-semibold">{category.retention}</p>
                                </div>
                                <div>
                                  <span class="text-slate-400 text-sm">Drittanbieter:</span>
                                  <p class=>
                                    {category.thirdParty ? 'Ja' : 'Nein'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Recent Rulings Tab */}
            <TabsContent value="rulings" class="space-y-8">
              <div id="case-law" class="scroll-mt-24">
              <div class="space-y-6">
                {recentRulings.map((ruling, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-start justify-between mb-6">
                          <div class="flex items-center gap-4">
                            <Badge class="bg-blue-500/20 text-blue-300">{ruling.date}</Badge>
                            <Badge class="bg-purple-500/20 text-purple-300">{ruling.court}</Badge>
                            <Badge>
                              {ruling.impact}
                            </Badge>
                          </div>
                          {ruling.fineAmount && (
                            <div class="text-right">
                              <div class="text-sm text-slate-400">Strafe</div>
                              <div class="text-xl font-bold text-red-400">{ruling.fineAmount}</div>
                            </div>
                          )}
                        </div>
                        
                        <h3 class="text-xl font-bold text-white mb-2">{ruling.case}</h3>
                        <p class="text-slate-300 mb-6">{ruling.ruling}</p>
                        
                        <div>
                          <h4 class="text-lg font-semibold text-white mb-3">Praktische Auswirkungen:</h4>
                          <div>
                            {ruling.implications.map((implication, idx) => (
                              <div key={idx} class="flex items-start gap-3">
                                <ArrowRight class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                                <span class="text-slate-300 text-sm">{implication}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              </div>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" class="space-y-8">
              <div id="implementation-guide" class="scroll-mt-24">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                class="mb-8"
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent class="p-8">
                    <h3 class="text-2xl font-bold text-white mb-6 text-center">
                      Cookie Compliance Roadmap
                    </h3>
                    <p class="text-slate-300 text-center">
                      Schritt-für-Schritt Plan zur rechtssicheren Cookie-Implementierung
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div class="space-y-8">
                {implementationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center gap-4 mb-6">
                          <div class="text-2xl font-bold text-blue-400">
                            
                          </div>
                          <div class=>
                            {step.priority}
                          </div>
                          <h3 class="text-2xl font-bold text-white">{step.phase}</h3>
                          <Badge class="bg-slate-600 text-slate-200 ml-auto">
                            {step.duration}
                          </Badge>
                        </div>
                        
                        <div>
                          {step.tasks.map((task, idx) => (
                            <div key={idx} class="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 class="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              </div>
            </TabsContent>

            {/* Code Examples Tab */}
            <TabsContent value="code" class="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                class="mb-8"
              >
                <div class="flex justify-center">
                  <div class="flex bg-slate-800/60 backdrop-blur-sm rounded-xl p-2">
                    {Object.entries(codeExamples).map(([key, example]) => (
                      <button
                        key={key}
                       
                        class=
                      >
                        
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent class="p-0">
                    <div class="p-6 border-b border-slate-700">
                      <div class="flex items-center justify-between">
                        <h3 class="text-xl font-bold text-white">
                          {codeExamples[cookieExample as keyof typeof codeExamples].title}
                        </h3>
                        <Button
                          size="sm"
                         
                          class="bg-blue-500 hover:bg-blue-600"
                        >
                          <Copy class="h-4 w-4 mr-2" ></Copy>
                          {copySuccess === cookieExample ? 'Kopiert!' : 'Kopieren'}
                        </Button>
                      </div>
                    </div>
                    <div class="p-6">
                      <pre class="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                        <code class="text-slate-300 text-sm">
                          {codeExamples[cookieExample as keyof typeof codeExamples].code}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Best Practices Tab */}
            <TabsContent value="best-practices" class="space-y-8">
              <div>
                {bestPractices.map((practice, index) => (
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
                          <div class="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                            <practice.icon class="h-6 w-6 text-white" ></practice>
                          </div>
                          <h3 class="text-xl font-bold text-white">{practice.category}</h3>
                        </div>
                        <div class="space-y-3">
                          {practice.practices.map((item, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              <CheckCircle2 class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300 text-sm">{item}</span>
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

      {/* Tools and Resources */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-16"
          >
            <h2>
              <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Tools & Ressourcen
              </span>
            </h2>
            <p class="text-xl text-slate-300">
              Praktische Hilfsmittel für Ihre Cookie-Compliance
            </p>
          </motion.div>

          <div>
            {[
              {
                title: "Cookie Scanner",
                description: "Automatische Analyse aller Cookies auf Ihrer Website",
                icon: Search,
                link: "/tools/cookie-scanner",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "CMP Vergleich", 
                description: "Detaillierter Vergleich von Consent Management Plattformen",
                icon: BarChart3,
                link: "/tools/cmp-comparison",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Compliance Checker",
                description: "Prüfung Ihrer Cookie-Implementierung auf Rechtssicherheit",
                icon: Shield,
                link: "/tools/compliance-checker",
                color: "from-orange-500 to-red-500"
              }
            ].map((tool, index) => (
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
                      <tool.icon class="h-6 w-6 text-white" ></tool>
                    </div>
                    <h3>
                      {tool.title}
                    </h3>
                    <p class="text-slate-300 mb-6">{tool.description}</p>
                    <Button asChild class=>
                      <Link to={tool.link} class="flex items-center justify-center gap-2">
                        <span>Tool öffnen</span>
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

      {/* Related Resources Section */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            class="text-center mb-12"
          >
            <h2>
              <span class="text-white">Verwandte</span> 
              <span class="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Themen
              </span>
            </h2>
            <p class="text-lg text-slate-300">
              Weitere wichtige Datenschutz-Themen für Ihre Website
            </p>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card>
                <CardContent class="p-6">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                    <Building2 class="h-6 w-6 text-white" ></Building2>
                  </div>
                  <h3 class="text-xl font-bold mb-2 text-white">Planet49 Cookie-Urteil</h3>
                  <p class="text-slate-300 mb-4">
                    Wegweisendes EuGH-Urteil zu Cookie-Einwilligungen und Pre-Ticked Checkboxen.
                  </p>
                  <Button asChild variant="outline" class="w-full">
                    <a href="/wissen/rechtsprechung/planet49-cookie-case">
                      Mehr erfahren
                      <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card>
                <CardContent class="p-6">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
                    <Shield class="h-6 w-6 text-white" ></Shield>
                  </div>
                  <h3 class="text-xl font-bold mb-2 text-white">DSGVO Grundlagen</h3>
                  <p class="text-slate-300 mb-4">
                    Umfassender Leitfaden zu den wichtigsten DSGVO-Anforderungen und Pflichten.
                  </p>
                  <Button asChild variant="outline" class="w-full">
                    <a href="/wissen/dsgvo-grundlagen">
                      Mehr erfahren
                      <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card>
                <CardContent class="p-6">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                    <Cookie class="h-6 w-6 text-white" ></Cookie>
                  </div>
                  <h3 class="text-xl font-bold mb-2 text-white">Cookie Management Tool</h3>
                  <p class="text-slate-300 mb-4">
                    Professionelle Lösung für rechtskonforme Cookie-Einwilligung auf Ihrer Website.
                  </p>
                  <Button asChild variant="outline" class="w-full">
                    <a href="/cookie-management-tool">
                      Mehr erfahren
                      <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer ></Footer>
    </div>`
};