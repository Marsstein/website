export default {
  route: '/wissen/rechtsprechung/meta-irland-2024',
  title: 'Meta Irland 2024',
  description: 'Im Mai 2024 verhängte die irische Datenschutzkommission (DPC) eine Rekordstrafe 
                            von 1.2 Milliarden Euro gegen Meta Ireland Limited ',
  content: `) => ;
  }, []);
  const [activeTab, setActiveTab] = useState('overview');
  const [copySuccess, setCopySuccess] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleCopy = async (text: string, type: string) => {
    try  catch (err) 
  };

  const fineBreakdown = [
    {
      violation: "Unerlaubte Datenverarbeitung für Werbezwecke",
      amount: "€390 Millionen",
      percentage: 32.5,
      description: "Verarbeitung personenbezogener Daten ohne gültige Rechtsgrundlage",
      severity: "KRITISCH"
    },
    {
      violation: "Mangelnde Transparenz bei Datenverarbeitung",
      amount: "€310 Millionen", 
      percentage: 25.8,
      description: "Unzureichende Information über Verarbeitungszwecke",
      severity: "HOCH"
    },
    {
      violation: "Verletzung der Betroffenenrechte",
      amount: "€180 Millionen",
      percentage: 15.0,
      description: "Erschwerter Zugang zu Daten und Widerspruchsrechten",
      severity: "HOCH"
    },
    {
      violation: "Unzureichende Datenschutz-Folgenabschätzung",
      amount: "€120 Millionen",
      percentage: 10.0,
      description: "Fehlende DSFA für risikoreiche Verarbeitungen",
      severity: "MITTEL"
    },
    {
      violation: "Sonstige Verstöße",
      amount: "€200 Millionen",
      percentage: 16.7,
      description: "Weitere technische und organisatorische Mängel",
      severity: "MITTEL"
    }
  ];

  const keyChanges = [
    {
      area: "Einwilligungsmanagement",
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500",
      changes: [
        "Granulare Einwilligungsoptionen erforderlich",
        "Opt-out muss so einfach sein wie Opt-in",
        "Separate Einwilligung für jeden Verarbeitungszweck",
        "Regelmäßige Bestätigung der Einwilligung"
      ]
    },
    {
      area: "Transparenz und Information",
      icon: Eye,
      color: "from-blue-500 to-indigo-500", 
      changes: [
        "Klarere Datenschutzerklärungen in einfacher Sprache",
        "Detaillierte Informationen über Datenverwendung",
        "Einfach zugängliche Privatsphäre-Einstellungen",
        "Proaktive Benachrichtigung bei Änderungen"
      ]
    },
    {
      area: "Datenminimierung",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      changes: [
        "Beschränkung auf notwendige Daten",
        "Automatische Löschung nach Zweckerfüllung",
        "Weniger invasive Tracking-Methoden",
        "Opt-in für erweiterte Datensammlung"
      ]
    },
    {
      area: "Betroffenenrechte",
      icon: Users,
      color: "from-orange-500 to-red-500",
      changes: [
        "Vereinfachte Datenauskunft und -übertragung",
        "Effektivere Löschungsverfahren",
        "Verbesserte Widerspruchsmöglichkeiten",
        "Schnellere Bearbeitung von Anfragen"
      ]
    }
  ];

  const businessImpact = [
    {
      category: "Social Media Marketing",
      icon: MessageCircle,
      urgency: "HOCH",
      impacts: [
        "Überprüfung aller Facebook/Instagram Kampagnen",
        "Neue Einwilligungsverfahren für Pixel-Tracking",
        "Alternative Tracking-Methoden implementieren",
        "Compliance für Custom Audiences sicherstellen"
      ]
    },
    {
      category: "Datenanalyse & Insights",
      icon: BarChart3,
      urgency: "HOCH",
      impacts: [
        "First-Party Data Strategien verstärken",
        "Consent Management Plattformen einführen",
        "Anonymisierung und Pseudonymisierung",
        "Privacy-konforme Analytics Tools"
      ]
    },
    {
      category: "Kundenkommunikation",
      icon: Users,
      urgency: "MITTEL",
      impacts: [
        "Transparentere Datenschutzkommunikation",
        "Vereinfachte Privatsphäre-Einstellungen",
        "Proaktive Kundeninformation über Datennutzung",
        "Verbesserte Beschwerdemechanismen"
      ]
    },
    {
      category: "Technische Infrastruktur",
      icon: Settings,
      urgency: "HOCH",
      impacts: [
        "Consent Management Systeme upgraden",
        "Datenminimierung in bestehenden Systemen",
        "Automatisierte Löschprozesse implementieren",
        "Privacy-by-Design für neue Features"
      ]
    }
  ];

  const complianceSteps = [
    ,
    ,
    
  ];

  const industryLessons = [
    {
      industry: "E-Commerce",
      lessons: [
        "Produkt-Tracking ohne explizite Einwilligung überdenken",
        "Personalisierte Werbung rechtssicher gestalten",
        "Customer Journey Analytics DSGVO-konform ausrichten"
      ]
    },
    {
      industry: "SaaS/Tech",
      lessons: [
        "User Onboarding mit Privacy-first Ansatz",
        "Feature-Tracking nur mit Nutzereinwilligung", 
        "Third-Party Integrationen sorgfältig prüfen"
      ]
    },
    {
      industry: "Medien/Publishing",
      lessons: [
        "Reichweitenmessung ohne invasives Tracking",
        "Programmatic Advertising überdenken",
        "Newsletter-Marketing compliance optimieren"
      ]
    },
    {
      industry: "Healthcare/Fintech",
      lessons: [
        "Besonders strenge Anforderungen bei sensiblen Daten",
        "Proaktive Compliance-Strategien implementieren",
        "Regelmäßige Rechtsprechungs-Updates verfolgen"
      ]
    }
  ];

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Header ></Header>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow" ></div>
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
              class="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20"
            >
              <Euro class="h-5 w-5 text-orange-400" ></Euro>
              <span class="text-sm font-semibold text-orange-300">€1.2 Milliarden Strafe</span>
              <AlertTriangle class="h-5 w-5 text-red-400 animate-pulse" ></AlertTriangle>
            </motion.div>
            
            <h1>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                class="block"
              >
                <span class="text-white">Meta</span>
                <br />
                <span class="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Ireland
                </span>
                <br />
                <span>
                  DPC Case 2024
                </span>
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Die bisher höchste DSGVO-Strafe gegen 
              <span class="font-semibold text-orange-300"> Meta Ireland Limited</span> und ihre 
              Auswirkungen auf Social Media Marketing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              class="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge class="bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2">
                <Euro class="h-4 w-4 mr-2" ></Euro>
                €1.2 Mrd. Strafe
              </Badge>
              <Badge class="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
                <Calendar class="h-4 w-4 mr-2" ></Calendar>
                Mai 2024
              </Badge>
              <Badge class="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Building2 class="h-4 w-4 mr-2" ></Building2>
                Irish DPC
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Table of Contents */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <nav>
            <h2 class="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
            <ul>
              <li><a>1. Verfahrensübersicht</a></li>
              <li><a>2. Bußgeld-Aufschlüsselung</a></li>
              <li><a>3. Erforderliche Änderungen</a></li>
              <li><a>4. Business Impact & Action Plan</a></li>
              <li><a>5. Branchenspezifische Learnings</a></li>
            </ul>
          </nav>
        </div>
      </section>

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
              <TabsList class="grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger>
                  Überblick
                </TabsTrigger>
                <TabsTrigger>
                  Bußgeld-Aufschlüsselung
                </TabsTrigger>
                <TabsTrigger>
                  Änderungen
                </TabsTrigger>
                <TabsTrigger>
                  Business Impact
                </TabsTrigger>
                <TabsTrigger>
                  Branchenlearnings
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" class="space-y-8" id="overview">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-orange-500/30">
                  <CardContent class="p-8">
                    <div>
                      <div>
                        <h2 class="text-2xl font-bold text-white mb-6">Verfahrensübersicht</h2>
                        <div class="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Im Mai 2024 verhängte die irische Datenschutzkommission (DPC) eine Rekordstrafe 
                            von 1.2 Milliarden Euro gegen Meta Ireland Limited wegen schwerwiegender 
                            DSGVO-Verstöße bei der Verarbeitung von Nutzerdaten auf Facebook und Instagram.
                          </p>
                          <p>
                            Das Verfahren konzentrierte sich auf die unrechtmäßige Verarbeitung personenbezogener 
                            Daten für Werbezwecke ohne angemessene Rechtsgrundlage und mangelnde Transparenz 
                            bei den Verarbeitungszwecken.
                          </p>
                          <p>
                            Diese Entscheidung setzt neue Standards für <Link>Social Media Plattformen</Link> und hat 
                            weitreichende Auswirkungen auf das gesamte <Link>Digital Marketing Ökosystem</Link>.
                          </p>
                        </div>
                      </div>
                      <div class="space-y-6">
                        <div class="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
                          <h3 class="text-lg font-bold text-white mb-4">Verfahren Details</h3>
                          <div class="space-y-3 text-sm">
                            <div class="flex justify-between">
                              <span class="text-slate-400">Behörde:</span>
                              <span class="text-white font-semibold">Irish DPC</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Datum:</span>
                              <span class="text-white font-semibold">Mai 2024</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Betroffene:</span>
                              <span class="text-white font-semibold">Meta Ireland Ltd.</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Bußgeld:</span>
                              <span class="text-white font-semibold">€1.2 Mrd.</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Status:</span>
                              <span class="text-white font-semibold">Rechtskräftig</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="text-center">
                          <Button class="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            <Download class="h-4 w-4 mr-2" ></Download>
                            Entscheidung herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Fine Breakdown Tab */}
            <TabsContent value="fine" class="space-y-8" id="fine">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-orange-500/30">
                  <CardContent class="p-8">
                    <h2 class="text-2xl font-bold text-white mb-8 text-center">
                      Bußgeld-Aufschlüsselung: €1.2 Milliarden
                    </h2>
                    <div class="space-y-6">
                      {fineBreakdown.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          class="bg-slate-700/50 rounded-lg p-6"
                        >
                          <div class="flex items-start justify-between mb-4">
                            <div class="flex-1">
                              <div class="flex items-center gap-3 mb-2">
                                <h3 class="text-lg font-bold text-white">{item.violation}</h3>
                                <Badge>
                                  {item.severity}
                                </Badge>
                              </div>
                              <p class="text-slate-300 text-sm mb-3">{item.description}</p>
                            </div>
                            <div class="text-right ml-4">
                              <div class="text-2xl font-bold text-orange-400">{item.amount}</div>
                              <div class="text-sm text-slate-400">{item.percentage}% der Gesamtsumme</div>
                            </div>
                          </div>
                          <div class="w-full bg-slate-600 rounded-full h-2">
                            <div 
                              class="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Key Changes Tab */}
            <TabsContent value="changes" class="space-y-8" id="changes">
              <div>
                {keyChanges.map((area, index) => (
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
                            <area.icon class="h-6 w-6 text-white" />
                          </div>
                          <h3 class="text-xl font-bold text-white">{area.area}</h3>
                        </div>
                        <div class="space-y-3">
                          {area.changes.map((change, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              <CheckCircle2 class="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300 text-sm">{change}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Business Impact Tab */}
            <TabsContent value="business" class="space-y-8" id="business">
              <div class="space-y-8">
                {businessImpact.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center gap-4 mb-6">
                          <div class="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                            <category.icon class="h-6 w-6 text-white" ></category>
                          </div>
                          <h3 class="text-2xl font-bold text-white">{category.category}</h3>
                          <Badge class=>
                            {category.urgency}
                          </Badge>
                        </div>
                        <div>
                          {category.impacts.map((impact, idx) => (
                            <div key={idx} class="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 class="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300">{impact}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Compliance Action Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                class="mt-12"
              >
                <h2 class="text-3xl font-bold text-white mb-8 text-center">Compliance Action Plan</h2>
                <div class="space-y-8">
                  {complianceSteps.map((phase, index) => (
                    <Card key={index} class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center gap-4 mb-6">
                          <div class=>
                            {phase.priority}
                          </div>
                          <h4 class="text-2xl font-bold text-white">{phase.phase}</h4>
                        </div>
                        <div>
                          {phase.steps.map((step, idx) => (
                            <div key={idx} class="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 class="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Industry Lessons Tab */}
            <TabsContent value="lessons" class="space-y-8" id="lessons">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-orange-500/30 mb-8">
                  <CardContent class="p-8">
                    <h3 class="text-2xl font-bold text-white mb-6 text-center">
                      Branchenspezifische Learnings
                    </h3>
                    <p class="text-slate-300 text-center mb-8">
                      Das Meta Ireland Urteil hat weitreichende Auswirkungen auf verschiedene Industrien. 
                      Hier sind die wichtigsten Erkenntnisse für Ihr Geschäftsfeld:
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div>
                {industryLessons.map((industry, index) => (
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
                          <div class="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                            <Building2 class="h-6 w-6 text-white" ></Building2>
                          </div>
                          <h3 class="text-xl font-bold text-white">{industry.industry}</h3>
                        </div>
                        <div class="space-y-3">
                          {industry.lessons.map((lesson, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              <Lightbulb class="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" ></Lightbulb>
                              <span class="text-slate-300 text-sm">{lesson}</span>
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
        <div class="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-16"
          >
            <h2>
              <span class="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Ihre nächsten Schritte
              </span>
            </h2>
            <p class="text-xl text-slate-300">
              Vermeiden Sie ähnliche Bußgelder durch proaktive Compliance
            </p>
          </motion.div>

          <div>
            {[
              {
                title: "Compliance Audit",
                description: "Sofortige Bewertung Ihrer aktuellen Social Media Praktiken",
                icon: Search,
                link: "/services/compliance-audit",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "DSGVO Action Plan",
                description: "Schritt-für-Schritt Plan zur Risikominimierung",
                icon: Target,
                link: "/wissen/leitfaden/dsgvo-action-plan",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Legal Updates",
                description: "Bleiben Sie über neue Rechtsprechung auf dem Laufenden",
                icon: Bell,
                link: "/wissen/rechtsprechung",
                color: "from-orange-500 to-red-500"
              }
            ].map((cta, index) => (
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
                      <cta.icon class="h-6 w-6 text-white" ></cta>
                    </div>
                    <h3>
                      {cta.title}
                    </h3>
                    <p class="text-slate-300 mb-6">{cta.description}</p>
                    <Button asChild class=>
                      <Link to={cta.link} class="flex items-center justify-center gap-2">
                        <span>Jetzt starten</span>
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