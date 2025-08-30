export default {
  route: '/wissen/branchen/logistics-compliance',
  title: 'Logistics Compliance',
  description: 'Überblick über Ihre Supply Chain Datenschutz-Performance',
  content: `) => ;
  }, []);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'supply-chain', label: 'Supply Chain Compliance', icon: Network },
    { id: 'tracking', label: 'Tracking & Transparenz', icon: MapPin },
    { id: 'tom', label: 'TOM für Logistik', icon: Settings },
    { id: 'international', label: 'Internationale Transfers', icon: Globe },
    { id: 'implementation', label: 'Praxis-Implementation', icon: Code }
  ];
  
  const scrollToSection = (sectionId: string) => {
    window.history.pushState(null, '', \`#\${sectionId}\`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => , 100);
    }
  }, []);
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ());
      
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) 
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const complianceStats = [
    { label: 'Supply Chain Transparenz', value: 94, color: 'text-red-600', trend: '+12%' },
    { label: 'DSGVO Compliance', value: 96, color: 'text-pink-600', trend: '+8%' },
    { label: 'Tracking Datenschutz', value: 91, color: 'text-rose-600', trend: '+15%' },
    { label: 'Internationale Transfers', value: 89, color: 'text-red-500', trend: '+7%' },
    { label: 'TOM Implementierung', value: 93, color: 'text-orange-500', trend: '+10%' },
    { label: 'Audit Readiness', value: 95, color: 'text-purple-600', trend: '+5%' }
  ];

  const supplyChainChallenges = [
    {
      title: 'Multi-Stakeholder Datenaustausch',
      description: 'Komplexe Datenflüsse zwischen Verladern, Spediteuren, Lagerbetreibern und Empfängern',
      challenges: ['Unterschiedliche IT-Systeme', 'Variierende Datenschutzstandards', 'Grenzüberschreitende Transfers', 'Subunternehmer-Management'],
      risk: 'Kritisch',
      fineExample: 'Bis zu 20 Mio. € oder 4% des Jahresumsatzes',
      solution: {
        title: '📦 Praxis-Lösung: Unified Data Governance',
        approach: 'Implementierung eines zentralen Daten-Governance-Frameworks für die gesamte Lieferkette',
        keyElements: [
          {
            element: 'Standardisierte Datenverarbeitung',
            description: 'Einheitliche APIs und Datenformate für alle Partner',
            implementation: 'REST APIs mit OAuth 2.0 Authentifizierung'
          },
          ,
          {
            element: 'Zugriffskontrollen',
            description: 'Rollenbasierte Zugriffskontrolle über alle Systeme',
            implementation: 'Zero-Trust Security Model'
          }
        ]
      }
    },
    {
      title: 'Real-Time Tracking & Datenschutz',
      description: 'Balance zwischen Transparenzanforderungen und Datenschutz bei Live-Tracking',
      challenges: ['GPS-Daten von Fahrern', 'Kundendaten in Tracking-Systemen', 'Öffentliche Tracking-Links', 'IoT-Sensordaten'],
      risk: 'Hoch',
      fineExample: 'Bußgelder von 100.000 € bis 5 Mio. €',
      solution: {
        title: '🚚 Praxis-Lösung: Privacy-by-Design Tracking',
        approach: 'Datenschutzfreundliches Tracking-System mit mehrstufiger Datentrennung',
        keyElements: [
          {
            element: 'Datentrennung',
            description: 'Trennung von Personen- und Sendungsdaten',
            implementation: 'Separate Datenbanken mit Token-Verknüpfung'
          },
          {
            element: 'Anonymisierung',
            description: 'Automatische Anonymisierung nach Zustellung',
            implementation: '30-Tage Retention, dann Pseudonymisierung'
          },
          {
            element: 'Granulare Rechte',
            description: 'Unterschiedliche Detailgrade je nach Nutzerrolle',
            implementation: 'API-basierte Rechteverwaltung'
          }
        ]
      }
    },
    {
      title: 'Internationale Datentransfers',
      description: 'Rechtskonforme Datenübertragung in Drittländer ohne Angemessenheitsbeschluss',
      challenges: ['USA-Transfers nach Schrems II', 'Asien-Pazifik Routen', 'Brexit-Auswirkungen', 'Schweiz als Transitland'],
      risk: 'Sehr hoch',
      fineExample: 'Bis zu 20 Mio. € plus Transferverbot',
      solution: {
        title: '🌍 Praxis-Lösung: Compliant Global Logistics',
        approach: 'Mehrstufiges System für internationale Datentransfers',
        keyElements: [
          {
            element: 'Transfer Impact Assessment',
            description: 'Bewertung jeder internationalen Route',
            implementation: 'Automatisierte TIA-Generierung'
          },
          {
            element: 'Standardvertragsklauseln',
            description: 'SCC-Implementierung mit zusätzlichen Garantien',
            implementation: 'Digitale SCC-Verwaltung'
          },
          {
            element: 'Lokale Datenhaltung',
            description: 'Edge Computing in kritischen Regionen',
            implementation: 'Regional Data Centers'
          }
        ]
      }
    }
  ];

  const transportModes = {
    road: ,
    air: ,
    sea: {
      icon: Ship,
      name: 'Seefracht',
      specificRequirements: [
        'Maritime Single Window Daten',
        'Container-Tracking',
        'Crew-Listen',
        'Hafenstaatkontrolle'
      ]
    },
    rail: {
      icon: Train,
      name: 'Schienentransport',
      specificRequirements: [
        'Grenzüberschreitende Frachtbriefe',
        'Gefahrgut-Dokumentation',
        'Intermodale Übergabepunkte',
        'Bahnhofs-CCTV Integration'
      ]
    }
  };

  const toggleCheckItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId))  else 
    setCheckedItems(newCheckedItems);
  };

  const trackingTechnologies = [
    {
      name: 'GPS/GNSS Tracking',
      privacy: 'Hoch',
      description: 'Echtzeitortung von Fahrzeugen und Sendungen',
      measures: ['Fahrer-Einwilligung', 'Privatsphäre-Modi', 'Datenminimierung']
    },
    {
      name: 'RFID/NFC Tags',
      privacy: 'Mittel',
      description: 'Kontaktlose Identifikation in Lagern',
      measures: ['Reichweitenbegrenzung', 'Verschlüsselung', 'Zugriffskontrolle']
    },
    {
      name: 'IoT Sensoren',
      privacy: 'Mittel-Hoch',
      description: 'Temperatur, Erschütterung, Feuchtigkeit',
      measures: ['Edge Processing', 'Aggregierte Daten', 'Need-to-know Prinzip']
    },
    {
      name: 'Blockchain',
      privacy: 'Niedrig',
      description: 'Unveränderliche Supply Chain Historie',
      measures: ['Pseudonymisierung', 'Private Chains', 'Selective Disclosure']
    }
  ];

  const implementationPhases = [
    { phase: 'Analyse & Assessment', completion: 100, duration: '2-3 Wochen' },
    { phase: 'Konzeptentwicklung', completion: 85, duration: '3-4 Wochen' },
    { phase: 'Pilotimplementierung', completion: 60, duration: '6-8 Wochen' },
    { phase: 'Rollout & Schulung', completion: 35, duration: '4-6 Wochen' },
    { phase: 'Monitoring & Optimierung', completion: 15, duration: 'Kontinuierlich' }
  ];

  return (
    <div>
      <Header ></Header>
      
      {/* Hero Section mit Parallax-Effekt */}
      <section>
        {/* Animated Background */}
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" ></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-rose-500/5 rounded-full blur-3xl animate-pulse delay-500" ></div>
        </div>
        
        {/* Hero Content */}
        <motion.div 
          style={{ y, opacity }}
          class="container px-4 mx-auto relative z-10"
        >
          <div class="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              class="mb-6"
            >
              <Badge>
                Supply Chain Excellence meets Data Privacy
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Logistics & Supply Chain
              <span class="block mt-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                DSGVO Compliance Guide
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              class="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Der umfassende Leitfaden für datenschutzkonforme Logistikprozesse.
              Von Real-Time Tracking bis zu internationalen Datentransfers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              class="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button> scrollToSection('overview')}
              >
                Compliance-Guide starten
                <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
              </Button>
              <Button>
                <Download class="mr-2 h-4 w-4" ></Download>
                Logistics Checklist
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          class="absolute bottom-10 left-10 hidden lg:block"
        >
          <div>
            <Truck class="h-8 w-8 text-red-600 mb-2" ></Truck>
            <p class="text-sm font-semibold">Real-Time Tracking</p>
            <p class="text-xs text-gray-600">DSGVO-konform</p>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          class="absolute top-32 right-10 hidden lg:block"
        >
          <div>
            <Globe class="h-8 w-8 text-pink-600 mb-2" ></Globe>
            <p class="text-sm font-semibold">Global Compliance</p>
            <p class="text-xs text-gray-600">100+ Länder</p>
          </div>
        </motion.div>
      </section>

      {/* Inhaltsverzeichnis für Mobile und Desktop */}
      <section>
        <div class="container px-4 mx-auto">
          <div class="max-w-4xl mx-auto">
            <nav>
              <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <BookOpen class="h-5 w-5 text-red-600" ></BookOpen>
                Inhaltsverzeichnis
              </h2>
              <div>
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                   
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target"
                  >
                    <item.icon class="h-5 w-5 text-red-600 flex-shrink-0" ></item>
                    <span class="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Unterabschnitte */}
              <div>
                <h3>Weitere Themen</h3>
                <div>
                  <button class="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Transportmodus-spezifische Anforderungen
                  </button>
                  <button class="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Tracking-Technologien & Datenschutz
                  </button>
                  <button class="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Länderspezifische Anforderungen
                  </button>
                  <button class="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Implementation Roadmap
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div>
        <div class="container mx-auto px-4">
          <nav>
            {navigationItems.map((item) => (
              <button
                key={item.id}
               
                class=
              >
                <item.icon class="h-4 w-4" ></item>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div class="py-20">
        <div class="container px-4">
          <div class="max-w-7xl mx-auto space-y-20">
            
            {/* Overview Section */}
            <section id="overview" class="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  <Shield class="inline-block mr-3 h-8 w-8 text-red-600" ></Shield>
                  Logistics Compliance Dashboard
                </h2>
                <p>
                  Überblick über Ihre Supply Chain Datenschutz-Performance
                </p>
              </motion.div>

              {/* Interactive Compliance Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div>
                    {complianceStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        class="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
                      >
                        <div>
                          {stat.label}
                        </div>
                        <div class=text-2xl font-bold \${stat.color} mb-1>
                          {stat.value}%
                        </div>
                        <div>
                          {stat.trend} vs. letztes Quartal
                        </div>
                        <Progress 
                          value={stat.value} 
                          class="mt-2 h-2"
                        ></Progress>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div>
                    <div class="flex items-start gap-3">
                      <AlertTriangle class="h-5 w-5 text-yellow-600 mt-0.5" ></AlertTriangle>
                      <div>
                        <p>
                          Aktuelle Herausforderung: Schrems II Compliance
                        </p>
                        <p>
                          89% Ihrer internationalen Routen benötigen zusätzliche Schutzmaßnahmen für USA-Transfers.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                class="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Package,
                    title: 'End-to-End Transparenz',
                    description: 'Lückenlose Nachverfolgung bei voller DSGVO-Compliance',
                    color: 'text-red-600'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Multi-Partner Security',
                    description: 'Sichere Datenverarbeitung über alle Lieferketten-Partner',
                    color: 'text-pink-600'
                  },
                  {
                    icon: Globe,
                    title: 'Global Compliant',
                    description: 'Internationale Standards und lokale Anforderungen vereint',
                    color: 'text-rose-600'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardContent class="p-6">
                        <benefit.icon class=h-10 w-10 \${benefit.color} mb-4 ></benefit>
                        <h3 class="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Supply Chain Compliance Section */}
            <section id="supply-chain" class="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  <Network class="inline-block mr-3 h-8 w-8 text-red-600" ></Network>
                  Supply Chain Compliance Herausforderungen
                </h2>
                <p>
                  Die größten Datenschutz-Herausforderungen in der modernen Logistik
                </p>
              </motion.div>

              {supplyChainChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div class="flex items-start justify-between">
                        <CardTitle class="text-xl">{challenge.title}</CardTitle>
                        <Badge>
                          {challenge.risk} Risiko
                        </Badge>
                      </div>
                      <p>
                        {challenge.description}
                      </p>
                    </CardHeader>
                    <CardContent class="space-y-6">
                      {/* Challenges List */}
                      <div>
                        <h4 class="font-semibold mb-3 flex items-center gap-2">
                          <AlertTriangle class="h-4 w-4 text-orange-500" ></AlertTriangle>
                          Hauptherausforderungen
                        </h4>
                        <div>
                          {challenge.challenges.map((item, idx) => (
                            <div key={idx} class="flex items-center gap-2">
                              <ChevronDown class="h-3 w-3 text-red-500" ></ChevronDown>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fine Warning */}
                      <div>
                        <div>
                          <Euro class="h-4 w-4" ></Euro>
                          <span class="font-semibold text-sm">Mögliches Bußgeld: {challenge.fineExample}</span>
                        </div>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 class="text-xl font-bold mb-4">
                          {challenge.solution.title}
                        </h3>
                        <p>
                          {challenge.solution.approach}
                        </p>
                        
                        <div class="space-y-4">
                          {challenge.solution.keyElements.map((element, idx) => (
                            <div>
                              <h4 class="font-semibold mb-2">{element.element}</h4>
                              <p>
                                {element.description}
                              </p>
                              <div class="flex items-center gap-2 text-sm">
                                <Code class="h-4 w-4 text-green-600" ></Code>
                                <span>
                                  {element.implementation}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </section>

            {/* Tracking & Transparency Section */}
            <section id="tracking" class="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  <MapPin class="inline-block mr-3 h-8 w-8 text-red-600" ></MapPin>
                  Tracking & Transparenz
                </h2>
                <p>
                  Datenschutzkonforme Implementierung von Tracking-Technologien
                </p>
              </motion.div>

              {/* Transport Mode Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card class="p-6">
                  <h3 class="text-xl font-bold mb-4">Transportmodus-spezifische Anforderungen</h3>
                  <div>
                    {Object.entries(transportModes).map(([key, mode]) => (
                      <button
                        key={key}
                       
                        class=
                      >
                        <mode.icon class= ></mode>
                        <p class="text-sm font-medium">{mode.name}</p>
                      </button>
                    ))}
                  </div>
                  
                  <div>
                    <h4 class="font-semibold mb-3">
                      Spezifische Datenschutzanforderungen für {transportModes[selectedTransportMode].name}
                    </h4>
                    <div class="space-y-2">
                      {transportModes[selectedTransportMode].specificRequirements.map((req, idx) => (
                        <div key={idx} class="flex items-start gap-2">
                          <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                          <span class="text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Tracking Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 class="text-2xl font-bold mb-6">Tracking-Technologien & Datenschutz</h3>
                <div>
                  {trackingTechnologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card>
                        <CardHeader>
                          <div class="flex items-center justify-between">
                            <CardTitle class="text-lg">{tech.name}</CardTitle>
                            <Badge>
                              Datenschutz: {tech.privacy}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>
                            {tech.description}
                          </p>
                          <div class="space-y-2">
                            <p class="text-sm font-semibold">Schutzmaßnahmen:</p>
                            {tech.measures.map((measure, idx) => (
                              <div key={idx} class="flex items-center gap-2 text-sm">
                                <Shield class="h-3 w-3 text-green-600" ></Shield>
                                <span>{measure}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Real-Time Tracking Scenario */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 class="text-xl font-bold mb-4">
                    📍 Praxis-Szenario: DSGVO-konformes Sendungstracking
                  </h3>
                  <div class="space-y-4">
                    <div>
                      <h4 class="font-semibold mb-2">📋 Ausgangslage</h4>
                      <p class="text-sm">
                        Ein E-Commerce-Kunde möchte seine Bestellung in Echtzeit verfolgen. 
                        Die Sendung wird von einem Subunternehmer transportiert, der GPS-Tracking nutzt.
                      </p>
                    </div>
                    
                    <div>
                      <h4 class="font-semibold mb-2">🔐 Datenschutz-Lösung</h4>
                      <div class="space-y-2 text-sm">
                        <div class="flex items-start gap-2">
                          <span class="font-semibold text-red-600">1.</span>
                          <div>
                            <p class="font-medium">Token-basiertes Tracking</p>
                            <p>
                              Eindeutiger Tracking-Link ohne Personenbezug, zeitlich begrenzte Gültigkeit
                            </p>
                          </div>
                        </div>
                        <div class="flex items-start gap-2">
                          <span class="font-semibold text-red-600">2.</span>
                          <div>
                            <p class="font-medium">Granulare Positionsdaten</p>
                            <p>
                              Nur Stadtbezirk statt exakte GPS-Position für Endkunden
                            </p>
                          </div>
                        </div>
                        <div class="flex items-start gap-2">
                          <span class="font-semibold text-red-600">3.</span>
                          <div>
                            <p class="font-medium">Automatische Löschung</p>
                            <p>
                              Tracking-Daten werden 30 Tage nach Zustellung automatisch gelöscht
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div class="flex items-start gap-2">
                        <CheckCircle2 class="h-5 w-5 text-green-600 mt-0.5" ></CheckCircle2>
                        <div>
                          <p>Ergebnis</p>
                          <p>
                            Volle Transparenz für Kunden bei gleichzeitigem Schutz der Fahrerdaten
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* TOM für Logistik Section */}
            <section id="tom" class="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  <Settings class="inline-block mr-3 h-8 w-8 text-red-600" ></Settings>
                  Technische und Organisatorische Maßnahmen
                </h2>
                <p>
                  Spezifische TOM für die Logistikbranche
                </p>
              </motion.div>

              {/* TOM Categories */}
              <div>
                {[
                  {
                    title: 'Zutrittskontrolle',
                    icon: Lock,
                    measures: [
                      'Biometrische Zugangssysteme für Lager',
                      'Elektronische Fahrzeugschlüssel mit Logging',
                      'Visitor Management System',
                      'Geofencing für sensible Bereiche'
                    ]
                  },
                  ,
                  {
                    title: 'Zugriffskontrolle',
                    icon: UserCheck,
                    measures: [
                      'Granulare Berechtigungskonzepte',
                      'Audit-Logging aller Datenzugriffe',
                      'Automatische Rechtevergabe nach Jobrolle',
                      'Regelmäßige Berechtigungsreviews'
                    ]
                  },
                  {
                    title: 'Weitergabekontrolle',
                    icon: Share,
                    measures: [
                      'Ende-zu-Ende Verschlüsselung',
                      'Sichere EDI-Verbindungen',
                      'Verschlüsselte Container für Dokumente',
                      'Blockchain für Audit Trail'
                    ]
                  }
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <category.icon class="h-5 w-5 text-red-600" ></category>
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div class="space-y-2">
                          {category.measures.map((measure, idx) => (
                            <div key={idx} class="flex items-start gap-2">
                              <CheckSquare class="h-4 w-4 text-green-600 mt-0.5" ></CheckSquare>
                              <span class="text-sm">{measure}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Special Logistics TOM */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <Truck class="h-6 w-6 text-red-600" ></Truck>
                      Logistik-spezifische Sicherheitsmaßnahmen
                    </CardTitle>
                  </CardHeader>
                  <CardContent class="pt-6">
                    <div>
                      <div>
                        <h4 class="font-semibold mb-3 flex items-center gap-2">
                          <Package class="h-4 w-4 text-orange-600" ></Package>
                          Warensicherheit
                        </h4>
                        <ul class="space-y-2 text-sm">
                          <li class="flex items-start gap-2">
                            <span class="text-red-600">•</span>
                            Tamper-evident Packaging mit QR-Codes
                          </li>
                          <li class="flex items-start gap-2">
                            <span class="text-red-600">•</span>
                            IoT-Sensoren für Temperatur & Erschütterung
                          </li>
                          <li class="flex items-start gap-2">
                            <span class="text-red-600">•</span>
                            Blockchain-basierte Chain of Custody
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-semibold mb-3 flex items-center gap-2">
                          <Radio class="h-4 w-4 text-blue-600" ></Radio>
                          Kommunikationssicherheit
                        </h4>
                        <ul class="space-y-2 text-sm">
                          <li class="flex items-start gap-2">
                            <span class="text-red-600">•</span>
                            Verschlüsselte Funk-Kommunikation
                          </li>
                          <li class="flex items-start gap-2">
                            <span class="text-red-600">•</span>
                            Secure Messaging für Fahrer
                          </li>
                          <li class="flex items-start gap-2">
                            <span class="text-red-600">•</span>
                            Anonymisierte Hotline-Systeme
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* International Transfers Section */}
            <section id="international" class="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  <Globe class="inline-block mr-3 h-8 w-8 text-red-600" ></Globe>
                  Internationale Datentransfers
                </h2>
                <p>
                  Rechtskonforme Datenübermittlung in der globalen Lieferkette
                </p>
              </motion.div>

              {/* Transfer Impact Assessment Tool */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <h3 class="text-xl font-bold mb-4">
                    🌍 Transfer Impact Assessment (TIA) Checkliste
                  </h3>
                  <div class="space-y-3">
                    {[
                      'Identifikation aller Drittländer in der Lieferkette',
                      'Prüfung von Angemessenheitsbeschlüssen',
                      'Bewertung der Rechtslage im Zielland',
                      'Implementierung von Standardvertragsklauseln (SCC)',
                      'Zusätzliche technische Schutzmaßnahmen',
                      'Dokumentation der Risikobewertung',
                      'Regelmäßige Überprüfung (mind. jährlich)'
                    ].map((item, index) => (
                      <div> toggleCheckItem(\`tia-\${index}\`)}
                      >
                        {checkedItems.has(\`tia-\${index}\`) ? (
                          <CheckSquare class="h-5 w-5 text-green-600" ></CheckSquare>
                        ) : (
                          <Square class="h-5 w-5 text-gray-400" ></Square>
                        )}
                        <span class={cn(
                          "text-sm",
                          checkedItems.has(\`tia-\${index}\`) && "line-through text-gray-500"
                        )}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div class="mt-4 text-center">
                    <p>
                      {checkedItems.size}/7 Schritte abgeschlossen
                    </p>
                    <Progress value= class="mt-2" ></Progress>
                  </div>
                </Card>
              </motion.div>

              {/* Country-specific Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 class="text-2xl font-bold mb-6">Länderspezifische Anforderungen</h3>
                <div>
                  {[
                    {
                      country: 'USA',
                      flag: '🇺🇸',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'Zusätzliche Garantien', 'CLOUD Act Risiko'],
                      risk: 'Hoch'
                    },
                    {
                      country: 'China',
                      flag: '🇨🇳',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'Lokale Datenspeicherung', 'Cybersecurity Law'],
                      risk: 'Sehr hoch'
                    },
                    {
                      country: 'UK',
                      flag: '🇬🇧',
                      status: 'Angemessenheitsbeschluss',
                      requirements: ['Direkte Übertragung möglich', 'UK GDPR beachten', 'Brexit-Klauseln'],
                      risk: 'Niedrig'
                    },
                    {
                      country: 'Schweiz',
                      flag: '🇨🇭',
                      status: 'Angemessenheitsbeschluss',
                      requirements: ['Direkte Übertragung möglich', 'nDSG Compliance', 'Transit-Regelungen'],
                      risk: 'Niedrig'
                    },
                    {
                      country: 'Indien',
                      flag: '🇮🇳',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'DPDP Act 2023', 'Lokalisierung prüfen'],
                      risk: 'Mittel'
                    },
                    {
                      country: 'Brasilien',
                      flag: '🇧🇷',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'LGPD Alignment', 'DPO erforderlich'],
                      risk: 'Mittel'
                    }
                  ].map((country, index) => (
                    <motion.div
                      key={country.country}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card>
                        <CardHeader class="pb-3">
                          <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                              <span class="text-2xl">{country.flag}</span>
                              <h4 class="font-semibold">{country.country}</h4>
                            </div>
                            <Badge>
                              {country.risk}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>
                            {country.status}
                          </p>
                          <div class="space-y-1">
                            {country.requirements.map((req, idx) => (
                              <div key={idx} class="flex items-center gap-2 text-xs">
                                <ChevronDown class="h-3 w-3 text-red-500" ></ChevronDown>
                                <span>{req}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Implementation Section */}
            <section id="implementation" class="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  <Code class="inline-block mr-3 h-8 w-8 text-red-600" ></Code>
                  Praxis-Implementation
                </h2>
                <p>
                  Schritt-für-Schritt zur DSGVO-konformen Logistik
                </p>
              </motion.div>

              {/* Implementation Roadmap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card class="p-6">
                  <h3 class="text-xl font-bold mb-6">Implementation Roadmap</h3>
                  <div class="space-y-4">
                    {implementationPhases.map((phase, index) => (
                      <div key={phase.phase} class="space-y-2">
                        <div class="flex justify-between items-center">
                          <div class="flex items-center gap-3">
                            <div>= 50 ? "bg-orange-500" : "bg-gray-400"
                            )}>
                              {index + 1}
                            </div>
                            <div>
                              <p class="font-semibold">{phase.phase}</p>
                              <p>{phase.duration}</p>
                            </div>
                          </div>
                          <span class="text-sm font-medium">{phase.completion}%</span>
                        </div>
                        <Progress value={phase.completion} class="h-2" ></Progress>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Code Examples */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Beispiel: DSGVO-konformes Tracking API</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                      <pre class="text-sm">
                        <code>{\`// DSGVO-konformes Tracking Endpoint
app.post('/api/tracking/create', async (req, res) => {
  const { shipmentId, customerId } = req.body;
  
  // Generiere anonymen Tracking-Token
  const trackingToken = crypto.randomBytes(32).toString('hex');
  
  // Speichere Verknüpfung mit Ablaufdatum
  await redis.setex(
    \\\`tracking:\\\${trackingToken}\\\`,
    30 * 24 * 60 * 60, // 30 Tage
    JSON.stringify()
  );
  
  // Audit Log
  await auditLog.create();
  
  return res.json({
    trackingUrl: \\\`https://track.example.com/\\\${trackingToken}\\\`,
    expiresIn: '30 days',
    dataProcessed: ['Standort (Stadt-Ebene)', 'Sendungsstatus'],
    privacyPolicy: 'https://example.com/privacy'
  });
});\`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Best Practices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <CheckCircle2 class="h-5 w-5" ></CheckCircle2>
                        Do's
                      </CardTitle>
                    </CardHeader>
                    <CardContent class="pt-4">
                      <ul class="space-y-2 text-sm">
                        <li class="flex items-start gap-2">
                          <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                          <span>Privacy by Design in allen Systemen</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                          <span>Automatisierte Löschkonzepte implementieren</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                          <span>Granulare Berechtigungskonzepte</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                          <span>Regelmäßige Datenschutz-Audits</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                          <span>Transparente Kundeninformation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <X class="h-5 w-5" ></X>
                        Don'ts
                      </CardTitle>
                    </CardHeader>
                    <CardContent class="pt-4">
                      <ul class="space-y-2 text-sm">
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-600 mt-0.5" ></X>
                          <span>Unbegrenzte Datenspeicherung</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-600 mt-0.5" ></X>
                          <span>Klartext-Speicherung von Kundendaten</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-600 mt-0.5" ></X>
                          <span>Fehlende Auftragsverarbeitung mit Partnern</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-600 mt-0.5" ></X>
                          <span>Intransparente Datenflüsse</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-600 mt-0.5" ></X>
                          <span>Ignorieren von Betroffenenrechten</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              
              {/* Related Links Section for SEO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                class="mt-8"
              >
                <Card>
                  <h3 class="text-lg font-semibold mb-4">Verwandte Compliance-Themen</h3>
                  <div>
                    <a href="/wissen/branchen/datenschutz-pflege" class="group">
                      <div>
                        <h4>Datenschutz in der Pflege</h4>
                        <p>DSGVO-Compliance für Pflegeeinrichtungen</p>
                      </div>
                    </a>
                    <a href="/wissen/branchen/datenschutz-arztpraxis" class="group">
                      <div>
                        <h4>Datenschutz Arztpraxis</h4>
                        <p>Patientendatenschutz nach DSGVO</p>
                      </div>
                    </a>
                    <a href="/wissen/dsgvo-compliance" class="group">
                      <div>
                        <h4>DSGVO Grundlagen</h4>
                        <p>Basiswissen zur EU-Datenschutzverordnung</p>
                      </div>
                    </a>
                  </div>
                </Card>
              </motion.div>
            </section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              class="mt-20"
            >
              <Card class="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white border-0">
                <CardContent>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Truck class="h-16 w-16 mx-auto mb-6" ></Truck>
                  </motion.div>
                  <h2>
                    Starten Sie Ihre Logistics Compliance Journey
                  </h2>
                  <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Machen Sie Ihre Supply Chain DSGVO-konform. 
                    Wir begleiten Sie von der Analyse bis zur Implementation.
                  </p>
                  <div>
                    <Button>
                      <Package class="mr-2 h-5 w-5" ></Package>
                      Logistics Demo buchen
                    </Button>
                    <Button>
                      <Download class="mr-2 h-5 w-5" ></Download>
                      Compliance Guide herunterladen
                    </Button>
                  </div>
                  
                  <div class="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div>
                      <p class="text-3xl font-bold">500+</p>
                      <p class="text-sm opacity-80">Logistik-Partner compliant</p>
                    </div>
                    <div>
                      <p class="text-3xl font-bold">50M+</p>
                      <p class="text-sm opacity-80">Sendungen DSGVO-konform</p>
                    </div>
                    <div>
                      <p class="text-3xl font-bold">99.9%</p>
                      <p class="text-sm opacity-80">Audit Success Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

          </div>
        </div>
      </div>
      
      <Footer ></Footer>
    </div>`
};