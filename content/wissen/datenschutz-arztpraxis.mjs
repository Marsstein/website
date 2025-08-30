export default {
  route: '/wissen/branchen/datenschutz-arztpraxis',
  title: 'Datenschutz Arztpraxis',
  description: 'Kompletter DSGVO-Leitfaden für niedergelassene Ärzte. Von der Patientenaufnahme bis zur                      sicheren Archivierung – alle Datenschutzaspekte pra',
  content: `) => ;
  }, []);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'patientendaten', label: 'Patientendatenverarbeitung', icon: Heart },
    { id: 'praxisorganisation', label: 'Praxisorganisation', icon: Settings },
    { id: 'tom-praxis', label: 'TOM für Arztpraxen', icon: Lock },
    { id: 'notfallsituationen', label: 'Notfallsituationen', icon: AlertTriangle },
    { id: 'implementation', label: 'Praxis-Leitfaden', icon: CheckSquare }
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
    { label: 'DSGVO Art. 9 Compliance', value: 96, color: 'text-red-600', trend: '+4%' },
    { label: 'Patientendokumentation', value: 98, color: 'text-pink-600', trend: '+2%' },
    { label: 'Einverständniserklärungen', value: 94, color: 'text-rose-600', trend: '+8%' },
    { label: 'TOM Implementierung', value: 92, color: 'text-red-500', trend: '+6%' },
    { label: 'Mitarbeiterschulungen', value: 89, color: 'text-orange-500', trend: '+12%' },
    { label: 'Audit Readiness', value: 95, color: 'text-purple-600', trend: '+3%' }
  ];

  const patientDataProcessing = [
    {
      title: 'Erstaufnahme & Anamnese',
      description: 'Strukturierte Erfassung der Patientenstammdaten und Krankengeschichte gemäß DSGVO',
      icon: UserPlus,
      legalBasis: 'Art. 9 Abs. 2 lit. h DSGVO - Gesundheitsvorsorge',
      dataTypes: ['Personalien', 'Kontaktdaten', 'Versicherungsdaten', 'Anamnese', 'Beschwerden'],
      retentionPeriod: '10 Jahre nach letztem Behandlungskontakt',
      specialMeasures: [
        'Doppelte Einverständniserklärung für besondere Gesundheitsdaten',
        'Separate Speicherung von Stammdaten und medizinischen Daten',
        'Verschlüsselte Übertragung zwischen Praxissystemen',
        'Revisionssichere Archivierung'
      ],
      practicalScenario: {
        title: '🏥 Szenario: Neue Patientin mit chronischer Erkrankung',
        context: 'Eine 45-jährige Patientin kommt zur Erstuntersuchung mit einer Autoimmunerkrankung.',
        challenge: 'Wie erfassen wir alle relevanten Daten DSGVO-konform ohne den Behandlungsablauf zu behindern?',
        solution: {
          step1: {
            title: '📋 Modulare Datenerfassung',
            description: 'Gestufter Ansatz für verschiedene Datenkategorien',
            modules: [
              ,
              ,
              
            ]
          },
          step2: {
            title: '🔒 Datenschutz by Design',
            description: 'Technische Umsetzung der Datensparsamkeit',
            implementation: [
              'Automatische Verschlüsselung aller Gesundheitsdaten',
              'Rollenbasierte Zugriffsbeschränkung nach Behandlungsnotwendigkeit',
              'Automatisches Logging aller Datenzugriffe',
              'Separate Speicherung verschiedener Datenkategorien'
            ]
          },
          step3: {
            title: '📱 Digitaler Einverständnisprozess',
            description: 'Transparente und benutzerfreundliche Einwilligung',
            features: [
              'Tablet-basiertes System mit visueller Erklärung',
              'Getrennte Einwilligungen für verschiedene Datentypen',
              'Jederzeit widerrufbare Zustimmungen',
              'Automatische Dokumentation aller Einverständnisse'
            ]
          }
        },
        outcome: {
          efficiency: 'Erstaufnahme in 15 Minuten statt 30 Minuten',
          compliance: '100% DSGVO-konforme Einverständnisse',
          patientSatisfaction: '92% Zufriedenheit mit Transparenz'
        }
      }
    },
    {
      title: 'Behandlungsdokumentation',
      description: 'Revisionssichere Erfassung aller Behandlungsmaßnahmen und Befunde',
      icon: FileText,
      legalBasis: 'Art. 9 Abs. 2 lit. h DSGVO + Berufsordnung',
      dataTypes: ['Diagnosen', 'Therapiemaßnahmen', 'Verlaufsdokumentation', 'Befunde', 'Medikation'],
      retentionPeriod: '10 Jahre, bei Minderjährigen bis zur Volljährigkeit + 10 Jahre',
      specialMeasures: [
        'Elektronische Signatur für alle Einträge',
        'Unveränderbarkeit durch Blockchain-basierte Integrität',
        'Automatische Backup-Erstellung nach jeder Sitzung',
        'Vollständige Audit-Trail-Dokumentation'
      ],
      practicalScenario: {
        title: '🩺 Szenario: Langzeittherapie mit mehreren Fachärzten',
        context: 'Ein Patient wird über 6 Monate von verschiedenen Ärzten der Praxis behandelt.',
        challenge: 'Wie gewährleisten wir einheitliche, vollständige Dokumentation bei mehreren Behandlern?',
        solution: {
          step1: ,
          step2: {
            title: '🔄 Automatisierte Qualitätskontrolle',
            description: 'System-unterstützte Vollständigkeitsprüfung',
            controls: [
              'Warnung bei unvollständiger Dokumentation vor Sitzungsende',
              'Automatische Erinnerung an Folgeuntersuchungen',
              'Plausibilitätsprüfung bei Medikamentenverschreibungen',
              'Integration mit Laborsystem für automatischen Befund-Import'
            ]
          }
        }
      }
    },
    
  ];

  const practiceOrganization = [
    {
      title: 'Terminmanagement & Patientenkommunikation',
      icon: Calendar,
      measures: [
        'Verschlüsselte Online-Terminbuchung mit minimaler Datenerfassung',
        'SMS-Erinnerungen nur mit Pseudonymen ("Ihr Termin morgen")',
        'E-Mail-Kommunikation ausschließlich über sichere Kanäle',
        'Wartezimmer-Organisation ohne Namensaufrufe'
      ],
      implementation: \`
// Datenschutzkonformes Terminmanagement
const appointmentSystem = {
  booking: {
    requiredData: ['initials', 'phone_last_digits', 'appointment_type'],
    optionalData: ['email', 'preferred_time'],
    retention: '6_months_after_appointment',
    encryption: 'AES-256'
  },
  
  reminders: {
    sms: {
      content: 'Erinnerung: Termin morgen um [TIME] - Dr. [INITIALS]',
      personalization: 'minimal',
      opt_out: 'always_available'
    },
    email: {
      encryption: 'S/MIME_required',
      content: 'appointment_details_encrypted',
      fallback: 'phone_call'
    }
  },
  
  waiting_room: {
    call_system: 'number_based',
    privacy: 'no_names_in_public',
    seating: 'privacy_optimized'
  }
};
      \`
    },
    {
      title: 'Abrechnung & Kostenträger',
      icon: CreditCard,
      measures: [
        'Getrennte Systeme für medizinische Daten und Abrechnungsdaten',
        'Pseudonymisierte Übermittlung an Abrechnungsdienstleister',
        'Verschlüsselte Kommunikation mit Krankenkassen',
        'Sichere Aufbewahrung der Belege nach GoB'
      ],
      implementation: \`
// Datenschutzkonforme Abrechnung
const billingSystem = {
  data_separation: {
    medical_data: {
      storage: 'practice_internal_only',
      encryption: 'field_level_AES-256',
      access: 'medical_staff_only'
    },
    billing_data: {
      storage: 'separate_database',
      pseudonymization: 'automatic',
      external_sharing: 'encrypted_only'
    }
  },
  
  kostenträger_communication: {
    data_minimization: 'diagnosis_codes_only',
    encryption: 'TLS_1.3_minimum',
    audit_trail: 'complete_documentation',
    retention: 'legal_minimum_only'
  }
};
      \`
    },
    {
      title: 'Personalmanagement',
      icon: Users,
      measures: [
        'Verschwiegenheitserklärungen für alle Mitarbeiter',
        'Rollenbasierte Zugriffskontrolle auf Patientendaten',
        'Regelmäßige Datenschutzschulungen',
        'Sichere Löschung bei Personalwechsel'
      ]
    }
  ];

  const tomMeasuresPractice = [
    ,
    ,
    {
      category: 'Zugriffskontrolle',
      icon: Key,
      description: 'Kontrolle über den Zugang zu Patientendaten',
      measures: [
        'Individuelle Benutzerkonten für jeden Mitarbeiter',
        'Zwei-Faktor-Authentifizierung für kritische Systeme',
        'Automatische Sperrung bei Fehlversuchen',
        'Regelmäßige Überprüfung der Zugriffsrechte'
      ],
      practicalTips: [
        'Passwort-Manager für alle Mitarbeiter bereitstellen',
        'Notfallzugänge nur für Praxisinhaber',
        'Zeitbasierte Zugriffsbeschränkungen',
        'Sofortige Deaktivierung bei Personalwechsel'
      ]
    }
  ];

  const emergencyScenarios = [
    {
      scenario: 'Notfallbehandlung bewusstloser Patient',
      urgency: 'Kritisch',
      legalBasis: 'Art. 9 Abs. 2 lit. c DSGVO - Lebenswichtige Interessen',
      immediateActions: [
        'Behandlung ohne Einverständnis bei vitaler Indikation',
        'Minimale erforderliche Datenverarbeitung',
        'Notfalldokumentation für später Nachvollziehbarkeit',
        'Angehörige informieren sobald möglich'
      ],
      followUpActions: [
        'Patienteninformation innerhalb 72h nach Stabilisation',
        'Nachträgliche Einverständniserklärung einholen',
        'Überschüssige Daten löschen nach Stabilisation',
        'Vollständige Dokumentation des Notfalls'
      ],
      documentation: \`
// Notfall-Datenverarbeitung Protokoll
const emergencyProtocol = {
  patient_id: generateEmergencyId(),
  timestamp: new Date().toISOString(),
  legal_basis: 'Art. 9 Abs. 2 lit. c DSGVO',
  
  emergency_situation: {
    type: 'vital_threat',
    consciousness: 'unconscious',
    witnesses: ['dr_smith', 'nurse_jane'],
    vitals: recordedVitals
  },
  
  data_processing: {
    immediate_necessary: {
      vital_signs: true,
      allergies: 'life_threatening_only',
      medications: 'interaction_critical_only',
      medical_history: 'emergency_relevant_only'
    },
    
    not_processed: {
      social_history: false,
      family_history: false,
      financial_data: false,
      non_critical_conditions: false
    }
  },
  
  post_emergency: {
    patient_information: {
      deadline: '72_hours_max',
      method: 'written_and_verbal',
      required: true
    },
    consent_regularization: 'as_soon_as_stable',
    data_review: 'unnecessary_deletion_within_7_days'
  }
};
      \`
    },
    {
      scenario: 'IT-Systemausfall während Sprechstunde',
      urgency: 'Hoch',
      legalBasis: 'Behandlungsvertrag - Notfall-Dokumentation',
      immediateActions: [
        'Umstellung auf Papier-Dokumentation',
        'Sichere Aufbewahrung der handschriftlichen Notizen',
        'Information der Patienten über temporäre Maßnahmen',
        'Priorisierung dringender Behandlungen'
      ],
      followUpActions: [
        'Digitale Nacherfassung binnen 24h nach Systemwiederherstellung',
        'Abgleich zwischen Papier- und digitaler Dokumentation',
        'Sichere Vernichtung der Papiernotizen nach Übertragung',
        'Analyse der Ausfallursache und Präventionsmaßnahmen'
      ]
    }
  ];

  const implementationGuide = [
    ,
    ,
    {
      phase: 'Technische Umsetzung',
      duration: '3-4 Wochen',
      color: 'orange',
      tasks: [
        'Praxissoftware auf DSGVO-Compliance prüfen',
        'Verschlüsselung für alle Patientendaten aktivieren',
        'Backup-System einrichten und testen',
        'Zugriffskontrolle implementieren',
        'Sichere Kommunikationswege etablieren'
      ],
      deliverables: [
        'DSGVO-konforme IT-Infrastruktur',
        'Backup-Konzept mit Wiederherstellungstest',
        'Sichere Kommunikationskanäle'
      ]
    },
    {
      phase: 'Organisatorische Maßnahmen',
      duration: '2-3 Wochen',
      color: 'purple',
      tasks: [
        'Mitarbeiterschulungen durchführen',
        'Arbeitsanweisungen für Datenschutz erstellen',
        'Incident-Response-Plan entwickeln',
        'Regelmäßige Compliance-Checks etablieren',
        'Dokumentation aller Maßnahmen'
      ],
      deliverables: [
        'Geschulte Mitarbeiter mit Nachweisen',
        'Datenschutz-Arbeitsanweisungen',
        'Incident-Response-Plan'
      ]
    }
  ];

  const toggleChecklistItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId))  else 
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => ;

  return (
    <>
      <Helmet>
        <title>Datenschutz Arztpraxis DSGVO – Praxis-Guide für Ärzte 2024</title>
        <meta name="description" content="DSGVO für Arztpraxen: ✓ Patientendaten sicher verwalten ✓ Einwilligungen korrekt ✓ TOM-Checklisten ✓ Schweigepflicht digital. Jetzt Praxis-Guide lesen!" />
        <meta name="keywords" content="datenschutz arztpraxis, dsgvo arzt, patientendatenschutz, einwilligung patient, tom arztpraxis, schweigepflicht dsgvo" />
        <link rel="canonical" href="https://marsstein.com/wissen/branchen/datenschutz-arztpraxis" />
        <meta>
        <meta>
        <meta>
        <meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          
        </script>
      </Helmet>
      
    <div>
      <Header ></Header>
      
      <main class="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section>
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
          </div>

          <motion.div 
            style={{ y, opacity }}
            class="container px-4"
          >
            <div class="max-w-7xl mx-auto">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  class="space-y-6"
                >
                  <div>
                    <Stethoscope class="h-4 w-4" ></Stethoscope>
                    <span class="text-sm font-medium">Datenschutz für Arztpraxen</span>
                  </div>
                  
                  <h1>
                    Datenschutz in der
                    <span class="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                      Arztpraxis
                    </span>
                  </h1>
                  
                  <p>
                    Kompletter DSGVO-Leitfaden für niedergelassene Ärzte. Von der Patientenaufnahme bis zur 
                    sicheren Archivierung – alle Datenschutzaspekte praxisnah erklärt.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>DSGVO-konforme Patientendatenverarbeitung</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Sichere Praxisorganisation und IT-Systeme</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Notfallsituationen rechtssicher bewältigen</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&industry=healthcare">
                      <Button>
                        <Heart class="mr-2 h-5 w-5" ></Heart>
                        Praxis-Beratung buchen
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group tap-target min-h-[48px]">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      Arztpraxis DSGVO-Checkliste
                    </Button>
                  </div>
                </motion.div>

                {/* Interactive Compliance Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  class="relative"
                >
                  <Card>
                    <div class="space-y-4">
                      <div class="flex items-center justify-between">
                        <h3 class="font-bold text-lg">Praxis Compliance Status</h3>
                        <Badge class="bg-green-100 text-green-700">
                          % Implementiert
                        </Badge>
                      </div>

                      <div>
                        {complianceStats.slice(0, 6).map((stat, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            class="p-3 bg-white dark:bg-gray-900 rounded-lg border text-center cursor-pointer"
                          >
                            <div>
                              
                            </div>
                            <div class=>
                              {stat.value}%
                            </div>
                            <div class="text-xs text-green-600">
                              {stat.trend}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div class="space-y-3">
                        {complianceStats.slice(0, 3).map((stat, index) => (
                          <div key={index} class="space-y-2">
                            <div class="flex items-center justify-between text-sm">
                              <span>{stat.label}</span>
                              <span class="font-semibold">{stat.value}%</span>
                            </div>
                            <Progress value={stat.value} class="h-2" ></Progress>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    class="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500"
                  >
                    <div class="flex items-center gap-2">
                      <Stethoscope class="h-4 w-4 text-red-500 animate-pulse" ></Stethoscope>
                      <span class="text-sm font-medium">Praxis Ready</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
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
              </nav>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <nav>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <div>
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                   }
                    aria-label=Zu \${item.label} springen
                    class=
                  >
                    <item.icon class= ></item>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Sections */}
        <div class="py-20">
          <div class="container px-4">
            <div class="max-w-7xl mx-auto space-y-20">

              {/* Overview Section */}
              <section id="overview" class="space-y-8 scroll-mt-32" aria-label="Überblick Datenschutz Arztpraxis">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Datenschutz in der Arztpraxis - Überblick
                </motion.h2>
                <div>
                  <Card class="p-6">
                    <CardHeader>
                      <CardTitle class="flex items-center gap-2">
                        <Shield class="h-6 w-6 text-red-600" ></Shield>
                        DSGVO für niedergelassene Ärzte
                      </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <p>
                        Arztpraxen verarbeiten täglich hochsensible Gesundheitsdaten, die unter die besonderen 
                        Kategorien personenbezogener Daten (Art. 9 DSGVO) fallen und höchste Schutzanforderungen haben.
                      </p>
                      
                      <div class="space-y-3">
                        {[
                          'Ärztliche Schweigepflicht trifft auf DSGVO-Anforderungen',
                          'Besondere Rechtsgrundlagen für Gesundheitsdaten erforderlich',
                          'Erhöhte technische und organisatorische Maßnahmen (TOM)',
                          'Spezielle Einverständniserklärungen für Patienten'
                        ].map((item, i) => (
                          <div key={i} class="flex items-start gap-3">
                            <Stethoscope class="h-4 w-4 text-red-600 flex-shrink-0 mt-1" ></Stethoscope>
                            <span class="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div class="flex items-center gap-2 mb-2">
                          <AlertTriangle class="h-4 w-4 text-red-600" ></AlertTriangle>
                          <span>
                            Besondere Risiken
                          </span>
                        </div>
                        <p>
                          Bußgelder bis zu 20 Mio. € oder 4% des Jahresumsatzes bei Verstößen gegen 
                          Art. 9 DSGVO (Besondere Kategorien personenbezogener Daten)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card class="p-6">
                    <CardHeader>
                      <CardTitle class="flex items-center gap-2">
                        <Heart class="h-6 w-6 text-pink-600" ></Heart>
                        Praxis-spezifische Herausforderungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <p>
                        Kleine und mittlere Arztpraxen stehen vor besonderen Herausforderungen bei der 
                        DSGVO-Umsetzung, die praktikable Lösungen erfordern.
                      </p>
                      
                      <div class="space-y-3">
                        {[
                          'Begrenzte Ressourcen für IT und Datenschutz',
                          'Verschiedene Praxissoftware-Systeme mit unterschiedlicher DSGVO-Reife',
                          'Mitarbeiterschulungen in kleinen Teams organisieren',
                          'Balance zwischen Datenschutz und Behandlungsqualität'
                        ].map((item, i) => (
                          <div key={i} class="flex items-start gap-3">
                            <AlertCircle class="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" ></AlertCircle>
                            <span class="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div class="flex items-center gap-2 mb-2">
                          <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                          <span>
                            Praxistaugliche Lösungen
                          </span>
                        </div>
                        <p>
                          Dieser Leitfaden bietet konkrete, umsetzbare Lösungen speziell für den 
                          Praxisalltag ohne übermäßigen Verwaltungsaufwand.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Divider */}
              <div>

              {/* Patient Data Processing Section */}
              <section id="patientendaten" class="space-y-8 scroll-mt-32" aria-label="Patientendatenverarbeitung">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Patientendatenverarbeitung in der Praxis
                </motion.h2>
                <div class="space-y-8">
                  {patientDataProcessing.map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card class="border-l-4 border-pink-500">
                        <CardHeader>
                          <div class="flex items-start justify-between">
                            <CardTitle class="text-xl pr-4 flex items-center gap-2">
                              <process.icon class="h-6 w-6 text-pink-600" ></process>
                              {process.title}
                            </CardTitle>
                            <Badge class="flex-shrink-0">
                              {process.retentionPeriod}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <p>
                            {process.description}
                          </p>
                          
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 flex items-center gap-2">
                                <Scale class="h-4 w-4 text-blue-600" ></Scale>
                                Rechtsgrundlage
                              </h4>
                              <div>
                                <p>
                                  {process.legalBasis}
                                </p>
                              </div>
                            </div>

                            <div>
                              <h4 class="font-semibold mb-3 flex items-center gap-2">
                                <Database class="h-4 w-4 text-purple-600" ></Database>
                                Datenarten
                              </h4>
                              <div class="space-y-1">
                                {process.dataTypes.map((dataType, i) => (
                                  <div>
                                    {dataType}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 class="font-semibold mb-3 flex items-center gap-2">
                              <Shield class="h-4 w-4 text-green-600" ></Shield>
                              Besondere Schutzmaßnahmen
                            </h4>
                            <div class="space-y-2">
                              {process.specialMeasures.map((measure, i) => (
                                <div key={i} class="flex items-start gap-2">
                                  <CheckCircle2 class="h-3 w-3 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                                  <span class="text-sm">{measure}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {process.practicalScenario && (
                            <div class="space-y-6">
                              <button
                               \` ? null : \`patient-\${index}\`)}
                                class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Lightbulb class="h-4 w-4" ></Lightbulb>
                                Praxis-Szenario anzeigen
                                <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                  expandedSection === \`patient-\${index}\` && "rotate-180")} ></ChevronDown>
                              </button>
                              
                              {expandedSection === \`patient-\${index}\` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  class="mt-4"
                                >
                                  <div>
                                    <h3>
                                      {process.practicalScenario.title}
                                    </h3>
                                    <div class="space-y-4">
                                      <div>
                                        <h4 class="font-semibold mb-2 flex items-center gap-2">
                                          <FileText class="h-4 w-4" ></FileText>
                                          Kontext
                                        </h4>
                                        <p class="text-sm">{process.practicalScenario.context}</p>
                                      </div>
                                      
                                      <div>
                                        <h4>
                                          <AlertTriangle class="h-4 w-4" ></AlertTriangle>
                                          Herausforderung
                                        </h4>
                                        <p>
                                          {process.practicalScenario.challenge}
                                        </p>
                                      </div>
                                      
                                      <div class="space-y-4">
                                        <h4>
                                          <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                                          Lösungsansatz
                                        </h4>
                                        {Object.values(process.practicalScenario.solution).map((step: any, stepIndex) => (
                                          <div>
                                            <h5>
                                              {step.title}
                                            </h5>
                                            <p>
                                              {step.description}
                                            </p>
                                            {step.modules && (
                                              <div>
                                                {step.modules.map((module: any, moduleIndex: number) => (
                                                  <div>
                                                    <div>
                                                      {module.name}
                                                    </div>
                                                    <div>
                                                      {module.purpose}
                                                    </div>
                                                    <div>
                                                      {module.dataTypes}
                                                    </div>
                                                    <div>
                                                      ⚖️ {module.legal}
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.implementation && (
                                              <div class="space-y-2">
                                                {step.implementation.map((impl: string, implIndex: number) => (
                                                  <div key={implIndex} class="flex items-start gap-2 text-sm">
                                                    <Settings class="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" ></Settings>
                                                    <span>{impl}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div class="space-y-2">
                                                {step.features.map((feature: string, featureIndex: number) => (
                                                  <div key={featureIndex} class="flex items-start gap-2 text-sm">
                                                    <Smartphone class="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" ></Smartphone>
                                                    <span>{feature}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                      
                                      <div>
                                        <h4>
                                          <Target class="h-4 w-4" ></Target>
                                          Ergebnis
                                        </h4>
                                        <div class="space-y-2 text-sm">
                                          {Object.entries(process.practicalScenario.outcome).map(([key, value]) => (
                                            <div key={key}>
                                              <span>
                                                :
                                              </span> 
                                              <span>{value as string}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div>

              {/* Practice Organization Section */}
              <section id="praxisorganisation" class="space-y-8 scroll-mt-32" aria-label="Praxisorganisation">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Praxisorganisation & Verwaltung
                </motion.h2>
                <div class="space-y-8">
                  {practiceOrganization.map((org, index) => (
                    <Card key={index} class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <org.icon class="h-6 w-6 text-blue-600" ></org>
                          {org.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-6">
                        <div>
                          <h4 class="font-semibold mb-3">Datenschutzmaßnahmen</h4>
                          <div class="space-y-2">
                            {org.measures.map((measure, i) => (
                              <div key={i} class="flex items-start gap-2">
                                <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                <span class="text-sm">{measure}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {org.implementation && (
                          <div>
                            <button
                             \` ? null : \`org-\${index}\`)}
                              class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code class="h-4 w-4" ></Code>
                              Technische Umsetzung anzeigen
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === \`org-\${index}\` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === \`org-\${index}\` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
                                    {org.implementation}
                                  </pre>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div>

              {/* TOM for Medical Practices Section */}
              <section id="tom-praxis" class="space-y-8 scroll-mt-32" aria-label="Technische und Organisatorische Maßnahmen für Arztpraxen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  TOM-Maßnahmen für Arztpraxen
                </motion.h2>
                <div class="space-y-8">
                  {tomMeasuresPractice.map((tom, index) => (
                    <Card key={index} class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <tom.icon class="h-6 w-6 text-red-600" ></tom>
                          {tom.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-6">
                        <p>
                          {tom.description}
                        </p>

                        <div>
                          <div>
                            <h4 class="font-semibold mb-3">Technische Maßnahmen</h4>
                            <div class="space-y-2">
                              {tom.measures.map((measure, i) => (
                                <div>
                                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                  <span class="text-sm">{measure}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 class="font-semibold mb-3">Praktische Tipps</h4>
                            <div class="space-y-2">
                              {tom.practicalTips.map((tip, i) => (
                                <div>
                                  <Lightbulb class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Lightbulb>
                                  <span class="text-sm">{tip}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div>

              {/* Emergency Situations Section */}
              <section id="notfallsituationen" class="space-y-8 scroll-mt-32" aria-label="Notfallsituationen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Notfallsituationen & Datenschutz
                </motion.h2>
                <div class="space-y-8">
                  {emergencyScenarios.map((emergency, index) => (
                    <Card key={index} class="p-6 border-l-4 border-orange-500">
                      <CardHeader>
                        <div class="flex items-center justify-between">
                          <CardTitle class="flex items-center gap-2">
                            <AlertTriangle class="h-6 w-6 text-orange-600" ></AlertTriangle>
                            {emergency.scenario}
                          </CardTitle>
                          <div class="flex items-center gap-2">
                            <Badge variant="destructive">
                              {emergency.urgency}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent class="space-y-6">
                        <div>
                          <div>
                            Rechtsgrundlage
                          </div>
                          <div>
                            {emergency.legalBasis}
                          </div>
                        </div>

                        <div>
                          <div>
                            <h4 class="font-semibold mb-3 flex items-center gap-2">
                              <Zap class="h-4 w-4 text-red-600" ></Zap>
                              Sofortmaßnahmen
                            </h4>
                            <div class="space-y-2">
                              {emergency.immediateActions.map((action, i) => (
                                <div>
                                  <Clock class="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" ></Clock>
                                  <span class="text-sm">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 class="font-semibold mb-3 flex items-center gap-2">
                              <Calendar class="h-4 w-4 text-green-600" ></Calendar>
                              Nachfolgende Maßnahmen
                            </h4>
                            <div class="space-y-2">
                              {emergency.followUpActions.map((action, i) => (
                                <div>
                                  <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                  <span class="text-sm">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {emergency.documentation && (
                          <div>
                            <button
                             \` ? null : \`emergency-\${index}\`)}
                              class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code class="h-4 w-4" ></Code>
                              Dokumentationsvorlage anzeigen
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === \`emergency-\${index}\` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === \`emergency-\${index}\` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
                                    {emergency.documentation}
                                  </pre>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div>

              {/* Implementation Guide Section */}
              <section id="implementation" class="space-y-8 scroll-mt-32" aria-label="Praxis-Leitfaden">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Schritt-für-Schritt Implementierungsguide
                </motion.h2>
                
                <div>
                  {implementationGuide.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card class="h-full">
                        <CardHeader>
                          <div class=>
                            Phase {index + 1}
                          </div>
                          <CardTitle class="text-lg">{phase.phase}</CardTitle>
                          <div class="flex items-center gap-2 text-sm text-gray-600">
                            <Clock class="w-4 h-4" ></Clock>
                            <span>{phase.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent class="space-y-4">
                          <div>
                            <h4 class="font-semibold mb-3">Aufgaben</h4>
                            <div class="space-y-2">
                              {phase.tasks.map((task, i) => (
                                <div key={i} class="flex items-start gap-2">
                                  <CheckCircle2 class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                  <span class="text-sm">{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 class="font-semibold mb-3">Deliverables</h4>
                            <div class="space-y-1">
                              {phase.deliverables.map((deliverable, i) => (
                                <div>
                                  {deliverable}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Compliance Checklist */}
                <Card class="p-6">
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <CheckSquare class="h-6 w-6 text-green-600" ></CheckSquare>
                      Praxis Compliance-Checkliste
                    </CardTitle>
                    <div class="text-sm text-gray-600">
                      Implementierungsfortschritt: % abgeschlossen
                    </div>
                    <Progress value= class="h-2" ></Progress>
                  </CardHeader>
                  <CardContent class="space-y-6">
                    {[
                      ,
                      {
                        category: 'Technische Maßnahmen', 
                        items: [
                          'Praxissoftware auf DSGVO-Compliance geprüft',
                          'Verschlüsselung für alle Patientendaten aktiviert',
                          'Backup-System eingerichtet und getestet',
                          'Firewall und Antivirensoftware installiert',
                          'Zugriffskontrolle mit individuellen Benutzerkonten',
                          'Zwei-Faktor-Authentifizierung implementiert',
                          'Sichere E-Mail-Kommunikation eingerichtet'
                        ]
                      },
                      {
                        category: 'Organisatorische Maßnahmen',
                        items: [
                          'Mitarbeiterschulungen durchgeführt',
                          'Arbeitsanweisungen für Datenschutz erstellt',
                          'Incident-Response-Plan entwickelt',
                          'Physische Sicherheitsmaßnahmen umgesetzt',
                          'Regelmäßige Compliance-Checks etabliert',
                          'Sichere Vernichtung von Papierdokumenten organisiert',
                          'Notfallprozeduren dokumentiert'
                        ]
                      },
                      {
                        category: 'Praxisorganisation',
                        items: [
                          'Wartezimmer-Organisation ohne Namensaufrufe',
                          'Sichere Terminvergabe implementiert',
                          'Datenschutzkonforme Abrechnung sichergestellt',
                          'Praxisräume sichtschutzoptimiert',
                          'Patientenakte-Aufbewahrung reorganisiert',
                          'Kommunikation mit Kostenträgern verschlüsselt',
                          'Überweisung und Arztbriefe sicher übertragen'
                        ]
                      }
                    ].map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 class="font-semibold mb-3">{section.category}</h4>
                        <div>
                          {section.items.map((item, itemIndex) => {
                            const itemId = \`\${sectionIndex}-\${itemIndex}\`;
                            const isChecked = checkedItems.has(itemId);
                            return (
                              <div> toggleChecklistItem(itemId)}
                              >
                                
                                <span class=>
                                  {item}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <section>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card class="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white overflow-hidden relative">
                  <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" ></div>
                  <CardContent>
                    <div class="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Stethoscope class="h-16 w-16 mx-auto mb-6 text-white" ></Stethoscope>
                      </motion.div>
                      
                      <h2>
                        Machen Sie Ihre Arztpraxis DSGVO-konform
                      </h2>
                      <p class="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer langjährigen Expertise im Healthcare-Datenschutz. 
                        Wir begleiten Sie sicher durch alle Compliance-Anforderungen.
                      </p>
                      
                      <div>
                        <a href="/contact?demo=true&industry=healthcare">
                          <Button>
                            <Stethoscope class="mr-2 h-5 w-5" ></Stethoscope>
                            Kostenlose Praxis-Beratung
                            <ArrowRight>
                          </Button>
                        </a>
                        <Button>
                          <Download class="mr-2 h-5 w-5" ></Download>
                          Arztpraxis DSGVO-Handbuch (PDF)
                        </Button>
                      </div>

                      <div>
                        {[
                          { icon: Heart, title: 'Praxis-Expertise', subtitle: 'Spezialisiert auf niedergelassene Ärzte' },
                          { icon: Shield, title: 'DSGVO Art. 9 Ready', subtitle: 'Besondere Kategorien-Compliance' },
                          { icon: CheckCircle2, title: 'Praxistaugliche Lösungen', subtitle: 'Ohne übermäßigen Aufwand' }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            class="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                          >
                            <div class="bg-white/20 p-3 rounded-lg">
                              <item.icon class="h-6 w-6" ></item>
                            </div>
                            <div class="text-left">
                              <div class="font-semibold">{item.title}</div>
                              <div class="text-sm text-white/80">{item.subtitle}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section class="py-20">
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle class="flex items-center gap-2">
                    <ExternalLink class="h-5 w-5 text-red-600" ></ExternalLink>
                    Weiterführende Healthcare-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <a href="/wissen/branchen/gesundheitswesen-dsgvo" class="block group">
                      <div>
                        <Heart class="h-5 w-5 text-red-600 mb-2" ></Heart>
                        <div class="font-medium">Healthcare DSGVO Guide</div>
                        <div class="text-sm text-gray-600">Umfassender Compliance-Guide</div>
                      </div>
                    </a>
                    <a href="/wissen/branchen/datenschutz-pflege" class="block group">
                      <div>
                        <Users class="h-5 w-5 text-pink-600 mb-2" ></Users>
                        <div class="font-medium">Datenschutz Pflege</div>
                        <div class="text-sm text-gray-600">Speziell für Pflegeeinrichtungen</div>
                      </div>
                    </a>
                    <a href="/wissen/krisenmanagement/data-breach-72h" class="block group">
                      <div>
                        <Timer class="h-5 w-5 text-orange-600 mb-2" ></Timer>
                        <div class="font-medium">Data Breach Response</div>
                        <div class="text-sm text-gray-600">72h Notfall-Leitfaden</div>
                      </div>
                    </a>
                    <a href="/branchen/gesundheitswesen" class="block group">
                      <div>
                        <Building2 class="h-5 w-5 text-blue-600 mb-2" ></Building2>
                        <div class="font-medium">Healthcare Solutions</div>
                        <div class="text-sm text-gray-600">Unsere Produkte für Praxen</div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Related Links Section for SEO */}
        <section>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <h2 class="text-2xl font-bold mb-6">Verwandte Compliance-Themen</h2>
              <div>
                <a href="/wissen/branchen/datenschutz-pflege" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>Datenschutz in der Pflege</h3>
                      <p>DSGVO-Compliance für Pflegeeinrichtungen</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="/wissen/branchen/logistics-compliance" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>Logistics Compliance</h3>
                      <p>DSGVO im Supply Chain Management</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="/wissen/dsgvo-compliance" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>DSGVO Grundlagen</h3>
                      <p>Basiswissen zur EU-Datenschutzverordnung</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer ></Footer>
    </div>
    </>`
};