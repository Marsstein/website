export default {
  route: '/wissen/rechtsprechung/whatsapp-irland-2021',
  title: 'Whatsapp Irland 2021',
  description: 'Am 2. September 2021 verhängte die irische Datenschutzkommission (DPC) eine 
                            Geldbuße von 225 Millionen Euro gegen WhatsApp Ireland ',
  content: `) => document.head.removeChild(style);
  }, []);

  const handleCopy = async (text: string, type: string) => {
    try  catch (err) 
  };

  const violationBreakdown = [
    {
      violation: "Mangelnde Transparenz bei Datenverarbeitung",
      amount: "€90 Millionen",
      percentage: 40,
      description: "Unklare Informationen über Verarbeitungszwecke und Datennutzung",
      severity: "KRITISCH",
      articles: ["Art. 12 DSGVO", "Art. 13 DSGVO"]
    },
    {
      violation: "Unzureichende Datenschutzerklärung",
      amount: "€67.5 Millionen", 
      percentage: 30,
      description: "Fehlende und unverständliche Informationen für Betroffene",
      severity: "HOCH",
      articles: ["Art. 14 DSGVO", "Art. 12 DSGVO"]
    },
    {
      violation: "Verletzung der Informationspflichten",
      amount: "€45 Millionen",
      percentage: 20,
      description: "Mangelhafte Aufklärung über Betroffenenrechte",
      severity: "HOCH",
      articles: ["Art. 13 DSGVO", "Art. 14 DSGVO"]
    },
    {
      violation: "Unklare Rechtsgrundlagen-Kommunikation",
      amount: "€22.5 Millionen",
      percentage: 10,
      description: "Fehlende Klarstellung der rechtlichen Basis für Datenverarbeitung",
      severity: "MITTEL",
      articles: ["Art. 6 DSGVO", "Art. 12 DSGVO"]
    }
  ];

  const transparencyRequirements = [
    ,
    ,
    ,
    {
      area: "Messaging-spezifische Anforderungen",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-500",
      requirements: [
        "Aufklärung über End-to-End-Verschlüsselung",
        "Transparenz bei Metadaten-Verarbeitung",
        "Klarstellung zu Backup- und Sync-Funktionen",
        "Information über Gruppenchat-Datenverarbeitung"
      ]
    }
  ];

  const messagingCompliance = [
    {
      category: "Messaging Apps",
      icon: Smartphone,
      urgency: "KRITISCH",
      impacts: [
        "Transparenz-Dashboard für Nutzer implementieren",
        "Klare Aufklärung über Metadaten-Sammlung",
        "Granulare Einstellungen für Datenverarbeitung",
        "Verständliche Erklärung der Verschlüsselung"
      ]
    },
    {
      category: "Kommunikationsplattformen",
      icon: MessageCircle,
      urgency: "HOCH",
      impacts: [
        "Detaillierte Datenschutzerklärungen erstellen",
        "Benutzerfreundliche Privacy Center einrichten",
        "Proaktive Kommunikation bei Änderungen",
        "Einfache Opt-out Mechanismen implementieren"
      ]
    },
    {
      category: "Business Communications",
      icon: Building2,
      urgency: "HOCH",
      impacts: [
        "B2B Messaging DSGVO-konform gestalten",
        "Kundenkommunikation rechtssicher aufsetzen",
        "CRM-Integration datenschutzkonform konfigurieren",
        "Marketing-Nachrichten compliance-konform senden"
      ]
    },
    {
      category: "Video & Voice Calls",
      icon: Video,
      urgency: "MITTEL",
      impacts: [
        "Aufzeichnungs-Features transparent kommunizieren",
        "Teilnehmer-Daten minimieren und schützen",
        "Anruf-Metadaten DSGVO-konform verarbeiten",
        "Cloud-Speicherung rechtssicher gestalten"
      ]
    }
  ];

  const implementationSteps = [
    ,
    ,
    
  ];

  const codeExamples = [
    {
      title: "DSGVO-konforme Einwilligungsabfrage",
      language: "TypeScript",
      code: `// Granulare Einwilligung für Messaging-Features
interface ConsentRequest {
  messageData: boolean;
  metadata: boolean;
  analytics: boolean;
  backup: boolean;
}

const requestMessagingConsent = async (): Promise<ConsentRequest> => {
  return await showConsentDialog({
    title: "Messaging-Datenverarbeitung",
    sections: [
      ,
      
    ]
  });
};`
    },
    {
      title: "Transparenz-Dashboard Component",
      language: "React",
      code: `const PrivacyDashboard: React.FC = () => ;`
    },
    {
      title: "DSGVO-konforme Datenminimierung",
      language: "TypeScript", 
      code: `class MessagingDataProcessor {
  // Automatische Löschung nach DSGVO-Prinzipien
  async processMessage(message: Message) {
    // Nur notwendige Metadaten speichern
    const minimalMetadata = {
      timestamp: message.timestamp,
      messageId: message.id,
      // Sender/Empfänger nur wenn rechtlich erforderlich
      ...(this.isGroupChat(message) && { 
        participants: message.participants 
      })
    };
    
    // Automatische Löschung nach Zweckerfüllung
    this.scheduleDataDeletion(minimalMetadata, {
      retention: "30_DAYS",
      reason: "MESSAGE_DELIVERY_COMPLETED"
    });
  }
  
  // Transparente Datenverarbeitung
  async getDataProcessingInfo(userId: string) {
    return ;
  }
}`
    }
  ];

  const industryGuidelines = [
    {
      industry: "Messaging Apps",
      guidelines: [
        "End-to-End-Verschlüsselung transparent kommunizieren",
        "Metadaten-Verarbeitung detailliert erklären",
        "Backup- und Sync-Funktionen klar beschreiben",
        "Gruppenchat-Datenschutz verständlich darstellen"
      ]
    },
    {
      industry: "Business Communication",
      guidelines: [
        "B2B-Messaging rechtssicher implementieren",
        "Kundenkommunikation DSGVO-konform gestalten", 
        "CRM-Integration datenschutzkonform konfigurieren",
        "Marketing-Automation compliance-ready aufsetzen"
      ]
    },
    {
      industry: "Social Platforms",
      guidelines: [
        "Direct Messages transparent verarbeiten",
        "Story/Status-Features datenschutzkonform entwickeln",
        "Freundschafts-/Kontakt-Daten minimieren",
        "Content-Moderation rechtssicher gestalten"
      ]
    },
    {
      industry: "Enterprise Solutions",
      guidelines: [
        "Workplace-Kommunikation DSGVO-ready implementieren",
        "Team-Messaging rechtssicher aufsetzen",
        "File-Sharing datenschutzkonform gestalten",
        "Admin-Controls für Compliance bereitstellen"
      ]
    }
  ];

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Helmet>
        <title>WhatsApp Irland DSGVO Bußgeld €225 Mio – Messaging Compliance</title>
        <meta 
          name="description" 
          content="WhatsApp Ireland €225 Mio Bußgeld wegen Transparenz-Verstößen. Messaging-Apps DSGVO-konform gestalten & Compliance umsetzen." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta>
        <meta>
        <meta>
        <link rel="canonical" href="https://marsjonas.de/wissen/rechtsprechung/whatsapp-irland-2021" />
      </Helmet>
      <Header ></Header>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-spin-slow" ></div>
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
              class="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
            >
              <Euro class="h-5 w-5 text-emerald-400" ></Euro>
              <span class="text-sm font-semibold text-emerald-300">€225 Millionen Bußgeld</span>
              <MessageSquare class="h-5 w-5 text-teal-400 animate-pulse" ></MessageSquare>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span class="text-white">WhatsApp Ireland</span>
              <br />
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                €225 Mio Bußgeld
              </span>
              <br />
              <span>
                Messaging Compliance
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              €225 Millionen Bußgeld gegen 
              <span class="font-semibold text-emerald-300"> WhatsApp Ireland</span> wegen 
              Transparenz-Verstößen und ihre Auswirkungen auf Messaging-Compliance
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              class="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge class="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2">
                <Euro class="h-4 w-4 mr-2" ></Euro>
                €225 Mio. Strafe
              </Badge>
              <Badge class="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2">
                <Calendar class="h-4 w-4 mr-2" ></Calendar>
                2. September 2021
              </Badge>
              <Badge class="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
                <Building2 class="h-4 w-4 mr-2" ></Building2>
                Irish DPC
              </Badge>
              <Badge class="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Eye class="h-4 w-4 mr-2" ></Eye>
                Transparenz-Verstöße
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
              <TabsList class="grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger>
                  Überblick
                </TabsTrigger>
                <TabsTrigger>
                  Verstöße
                </TabsTrigger>
                <TabsTrigger>
                  Transparenz
                </TabsTrigger>
                <TabsTrigger>
                  Messaging-Compliance
                </TabsTrigger>
                <TabsTrigger>
                  Implementation
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
                <Card class="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30 mb-8">
                  <CardContent class="p-6">
                    <nav aria-label="Inhaltsverzeichnis">
                      <h2 id="inhaltsverzeichnis" class="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
                      <ul class="space-y-2 text-slate-300">
                        <li><a>1. Das WhatsApp Ireland Verfahren</a></li>
                        <li><a>2. Zentrale Erkenntnisse</a></li>
                        <li><a>3. Verstöße-Details</a></li>
                        <li><a>4. Transparenz-Anforderungen</a></li>
                        <li><a>5. Messaging-Compliance</a></li>
                        <li><a>6. Implementation</a></li>
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
                <Card class="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30">
                  <CardContent class="p-8">
                    <div>
                      <div>
                        <h2 id="whatsapp-verfahren" class="text-2xl font-bold text-white mb-6">Das WhatsApp Ireland Verfahren</h2>
                        <div class="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Am 2. September 2021 verhängte die irische Datenschutzkommission (DPC) eine 
                            Geldbuße von 225 Millionen Euro gegen WhatsApp Ireland Limited wegen 
                            schwerwiegender Verstöße gegen die Transparenz-Anforderungen der DSGVO.
                          </p>
                          <p>
                            Das Verfahren konzentrierte sich auf die mangelnde Transparenz bei der 
                            Datenverarbeitung, insbesondere auf die unzureichende Information der Nutzer 
                            über die Verarbeitungszwecke, Rechtsgrundlagen und Betroffenenrechte gemäß 
                            den Artikeln 12-14 DSGVO. Ähnlich wie bei <Link>Cookie-Consent-Verstößen</Link> 
                            zeigt sich auch hier die Bedeutung klarer Nutzerinformation.
                          </p>
                          <p>
                            Diese Entscheidung markiert einen Wendepunkt für Messaging-Apps und 
                            Kommunikationsplattformen und etabliert neue Standards für die 
                            Transparenz-Kommunikation in der Branche. Weitere relevante Urteile finden Sie in unserer 
                            <Link>Rechtsprechungs-Übersicht</Link>.
                          </p>
                          <p>
                            Die DPC bemängelte insbesondere die Komplexität und Unverständlichkeit 
                            der Datenschutzerklärung sowie die fehlende Klarheit über die verschiedenen 
                            Verarbeitungszwecke und deren rechtliche Grundlagen.
                          </p>
                        </div>
                      </div>
                      <div class="space-y-6">
                        <div class="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-6">
                          <h4 class="text-lg font-bold text-white mb-4">Verfahren Details</h4>
                          <div class="space-y-3 text-sm">
                            <div class="flex justify-between">
                              <span class="text-slate-400">Behörde:</span>
                              <span class="text-white font-semibold">Irish DPC</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Datum:</span>
                              <span class="text-white font-semibold">2. September 2021</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Betroffene:</span>
                              <span class="text-white font-semibold">WhatsApp Ireland Ltd.</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Bußgeld:</span>
                              <span class="text-white font-semibold">€225 Mio.</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Schwerpunkt:</span>
                              <span class="text-white font-semibold">Transparenz</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-slate-400">Status:</span>
                              <span class="text-white font-semibold">Rechtskräftig</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl p-6">
                          <h4 class="text-lg font-bold text-white mb-4">Betroffene DSGVO-Artikel</h4>
                          <div class="space-y-2 text-sm">
                            <div class="flex items-center gap-2">
                              <CheckCircle2 class="h-4 w-4 text-emerald-400" ></CheckCircle2>
                              <span class="text-slate-300">Art. 12 - Transparente Information</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <CheckCircle2 class="h-4 w-4 text-emerald-400" ></CheckCircle2>
                              <span class="text-slate-300">Art. 13 - Informationspflichten</span>
                            </div>
                            <div class="flex items-center gap-2">
                              <CheckCircle2 class="h-4 w-4 text-emerald-400" ></CheckCircle2>
                              <span class="text-slate-300">Art. 14 - Informationen bei Dritterhebung</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="text-center">
                          <Button class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                            <Download class="h-4 w-4 mr-2" ></Download>
                            Entscheidung herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Insights */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-8">
                    <h2 id="zentrale-erkenntnisse" class="text-2xl font-bold text-white mb-8 text-center">
                      Zentrale Erkenntnisse des Falls
                    </h2>
                    <div>
                      {[
                        {
                          icon: Eye,
                          title: "Transparenz-Revolution",
                          description: "Neue Standards für verständliche Datenschutzkommunikation in Messaging-Apps",
                          color: "from-emerald-500 to-teal-500"
                        },
                        {
                          icon: Users,
                          title: "Nutzer-Empowerment",
                          description: "Stärkung der Betroffenenrechte durch bessere Information und Kontrolle",
                          color: "from-teal-500 to-cyan-500"
                        },
                        {
                          icon: Shield,
                          title: "Industry Impact",
                          description: "Weitreichende Auswirkungen auf das gesamte Messaging- und Communication-Ökosystem",
                          color: "from-cyan-500 to-blue-500"
                        }
                      ].map((insight, index) => (
                        <div key={index} class="text-center">
                          <div class=>
                            <insight.icon class="h-8 w-8 text-white" ></insight>
                          </div>
                          <h4 class="text-lg font-bold text-white mb-3">{insight.title}</h4>
                          <p class="text-slate-300 text-sm">{insight.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Violations Tab */}
            <TabsContent value="violations" class="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30">
                  <CardContent class="p-8">
                    <h2 id="verstoesse-details" class="text-2xl font-bold text-white mb-8 text-center">
                      Verstöße-Aufschlüsselung: €225 Millionen
                    </h2>
                    <div class="space-y-6">
                      {violationBreakdown.map((item, index) => (
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
                                <h4 class="text-lg font-bold text-white">{item.violation}</h4>
                                <Badge>
                                  {item.severity}
                                </Badge>
                              </div>
                              <p class="text-slate-300 text-sm mb-3">{item.description}</p>
                              <div class="flex gap-2">
                                {item.articles.map((article, idx) => (
                                  <Badge key={idx} class="bg-emerald-500/20 text-emerald-300 text-xs">
                                    {article}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div class="text-right ml-4">
                              <div class="text-2xl font-bold text-emerald-400">{item.amount}</div>
                              <div class="text-sm text-slate-400">{item.percentage}% der Gesamtsumme</div>
                            </div>
                          </div>
                          <div class="w-full bg-slate-600 rounded-full h-2">
                            <div 
                              class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What went wrong */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-8">
                    <h3 class="text-2xl font-bold text-white mb-6">Was ist schiefgelaufen?</h3>
                    <div>
                      <div>
                        <h4 class="text-lg font-semibold text-emerald-400 mb-4">Hauptkritikpunkte der DPC:</h4>
                        <div class="space-y-3">
                          {[
                            "Unklare und komplexe Datenschutzerklärung",
                            "Fehlende Transparenz über Verarbeitungszwecke",
                            "Unzureichende Information über Betroffenenrechte",
                            "Mangelnde Klarheit bei Rechtsgrundlagen",
                            "Schwer verständliche Sprache für Durchschnittsnutzer"
                          ].map((point, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                              <span class="text-slate-300 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-emerald-400 mb-4">Besondere Messaging-Probleme:</h4>
                        <div class="space-y-3">
                          {[
                            "Unklare Kommunikation über Metadaten-Sammlung",
                            "Fehlende Transparenz bei Business-Features",
                            "Unverständliche Erklärung der Verschlüsselung",
                            "Mangelnde Information über Gruppenchat-Datenverarbeitung",
                            "Komplizierte Opt-out Mechanismen"
                          ].map((point, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              <MessageSquare class="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" ></MessageSquare>
                              <span class="text-slate-300 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Transparency Requirements Tab */}
            <TabsContent value="transparency" class="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30 mb-8">
                  <CardContent class="p-8">
                    <h2 id="transparenz-anforderungen" class="text-2xl font-bold text-white mb-6 text-center">
                      DSGVO Transparenz-Anforderungen für Messaging-Apps
                    </h2>
                    <p class="text-slate-300 text-center mb-8">
                      Die Artikel 12-14 DSGVO definieren klare Anforderungen an die Transparenz der Datenverarbeitung. 
                      Hier sind die wichtigsten Compliance-Bereiche für Messaging-Plattformen:
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div>
                {transparencyRequirements.map((area, index) => (
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
                          {area.requirements.map((requirement, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              <CheckCircle2 class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300 text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Code Examples */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                class="mt-12"
              >
                <h3 class="text-3xl font-bold text-white mb-8 text-center">DSGVO-konforme Code-Beispiele</h3>
                <div class="space-y-8">
                  {codeExamples.map((example, index) => (
                    <Card key={index} class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h4 class="text-xl font-bold text-white">{example.title}</h4>
                          <div class="flex items-center gap-3">
                            <Badge class="bg-emerald-500/20 text-emerald-300">
                              {example.language}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                             
                              class="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                            >
                              <Copy class="h-4 w-4" ></Copy>
                              {copySuccess === example.title ? 'Kopiert!' : 'Kopieren'}
                            </Button>
                          </div>
                        </div>
                        <pre class="bg-slate-900/80 rounded-lg p-6 overflow-x-auto text-sm">
                          <code class="text-slate-300">{example.code}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Messaging Compliance Tab */}
            <TabsContent value="messaging" class="space-y-8">
              <h2 id="messaging-compliance" class="text-3xl font-bold text-white mb-8 text-center">
                Messaging-Compliance nach WhatsApp Ireland
              </h2>
              <div class="space-y-8">
                {messagingCompliance.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center gap-4 mb-6">
                          <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                            <category.icon class="h-6 w-6 text-white" ></category>
                          </div>
                          <h3 class="text-2xl font-bold text-white">{category.category}</h3>
                          <Badge>
                            {category.urgency}
                          </Badge>
                        </div>
                        <div>
                          {category.impacts.map((impact, idx) => (
                            <div key={idx} class="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 class="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300">{impact}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Industry Guidelines */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                class="mt-12"
              >
                <h3 class="text-3xl font-bold text-white mb-8 text-center">Branchenspezifische Compliance-Leitfäden</h3>
                <div>
                  {industryGuidelines.map((industry, index) => (
                    <Card key={index} class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-6">
                        <div class="flex items-center gap-3 mb-6">
                          <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                            <Building2 class="h-6 w-6 text-white" ></Building2>
                          </div>
                          <h3 class="text-xl font-bold text-white">{industry.industry}</h3>
                        </div>
                        <div class="space-y-3">
                          {industry.guidelines.map((guideline, idx) => (
                            <div key={idx} class="flex items-start gap-3">
                              <Lightbulb class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></Lightbulb>
                              <span class="text-slate-300 text-sm">{guideline}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" class="space-y-8">
              {/* Implementation Steps */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                class="mb-12"
              >
                <h2 id="implementation" class="text-3xl font-bold text-white mb-8 text-center">Messaging-Compliance Implementation Roadmap</h2>
                <div class="space-y-8">
                  {implementationSteps.map((phase, index) => (
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
                              <CheckCircle2 class="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-slate-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Best Practices */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card class="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30">
                  <CardContent class="p-8">
                    <h3 class="text-2xl font-bold text-white mb-6 text-center">
                      Best Practices für Messaging-Transparenz
                    </h3>
                    <div>
                      {[
                        {
                          icon: Eye,
                          title: "Privacy by Design",
                          practices: [
                            "Transparenz von Anfang an mitdenken",
                            "Nutzer-zentrierte Datenschutz-UX",
                            "Proaktive Kommunikation implementieren"
                          ]
                        },
                        {
                          icon: Users,
                          title: "User Empowerment",
                          practices: [
                            "Granulare Privatsphäre-Einstellungen",
                            "Einfache Datenexport-Funktionen",
                            "Verständliche Recht-Ausübung"
                          ]
                        },
                        {
                          icon: Shield,
                          title: "Continuous Compliance",
                          practices: [
                            "Regelmäßige Transparenz-Audits",
                            "Nutzer-Feedback Integration",
                            "Rechtsprechungs-Monitoring"
                          ]
                        }
                      ].map((practice, index) => (
                        <div key={index} class="text-center">
                          <div class="inline-flex p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4">
                            <practice.icon class="h-6 w-6 text-white" ></practice>
                          </div>
                          <h4 class="text-lg font-bold text-white mb-4">{practice.title}</h4>
                          <div class="space-y-2">
                            {practice.practices.map((item, idx) => (
                              <div key={idx} class="flex items-start gap-2">
                                <CheckCircle2 class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                <span class="text-slate-300 text-sm text-left">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Messaging-Compliance Services
              </span>
            </h2>
            <p class="text-xl text-slate-300">
              Vermeiden Sie teure Transparenz-Verstöße mit unseren spezialisierten Services
            </p>
          </motion.div>

          <div>
            {[
              {
                title: "Messaging Audit",
                description: "Umfassende Prüfung Ihrer Messaging-App auf Transparenz-Compliance",
                icon: Search,
                link: "/services/messaging-audit",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Transparenz-Optimierung",
                description: "Entwicklung DSGVO-konformer Datenschutzkommunikation für Messaging-Plattformen",
                icon: Eye,
                link: "/services/transparency-optimization",
                color: "from-teal-500 to-cyan-500"
              },
              {
                title: "Compliance Monitoring",
                description: "Kontinuierliche Überwachung und Updates für Messaging-Compliance",
                icon: Monitor,
                link: "/services/compliance-monitoring",
                color: "from-cyan-500 to-blue-500"
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
                        <span>Mehr erfahren</span>
                        <ArrowRight class="h-4 w-4" ></ArrowRight>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            class="text-center mt-16"
          >
            <Card class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30">
              <CardContent class="p-8">
                <h3 class="text-2xl font-bold text-white mb-4">
                  Brauchen Sie sofortige Hilfe bei Messaging-Compliance?
                </h3>
                <p class="text-slate-300 mb-6">
                  Unsere Experten unterstützen Sie bei der DSGVO-konformen Gestaltung Ihrer Messaging-Plattform
                </p>
                <Button class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3">
                  <MessageSquare class="h-5 w-5 mr-2" ></MessageSquare>
                  Kostenlose Beratung anfordern
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer ></Footer>
    </div>`
};