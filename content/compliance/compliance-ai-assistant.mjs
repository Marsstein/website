export default {
  route: '/tools/compliance-ai-assistant',
  title: 'Compliance Ai Assistant',
  description: 'Unser AI-System wurde mit 50.000+ DSGVO-Fällen und aktueller Rechtsprechung trainiert',
  content: `) => clearTimeout(timer);
    }
  }, [isHeroInView]);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // AI Capabilities
  const aiCapabilities = [
    {
      icon: MessageCircle,
      title: "Natural Language Understanding",
      description: "Verstehe komplexe DSGVO-Fragen in natürlicher Sprache",
      accuracy: "97.8%",
      examples: [
        "Darf ich Kundendaten nach USA übertragen?",
        "Wie lange darf ich Bewerberdaten speichern?",
        "Benötige ich ein Verarbeitungsverzeichnis?"
      ]
    },
    {
      icon: Brain,
      title: "Contextual Analysis",
      description: "Analysiert Kontext und Branche für präzise Antworten",
      accuracy: "94.2%",
      examples: [
        "Branchenspezifische Compliance-Anforderungen",
        "Risikobewertung basierend auf Unternehmensgröße",
        "Relevante Rechtsgrundlagen identifizieren"
      ]
    },
    {
      icon: FileCheck,
      title: "Document Processing",
      description: "Scannt und analysiert Dokumente auf DSGVO-Compliance",
      accuracy: "96.1%",
      examples: [
        "Datenschutzerklärungen prüfen",
        "Verträge auf AVV-Klauseln scannen",
        "Cookie-Banner Compliance checken"
      ]
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Immer aktuell mit neuesten Gesetzen und Urteilen",
      accuracy: "99.9%",
      examples: [
        "EuGH Urteile automatisch einarbeiten",
        "Neue Aufsichtsbehörden-Leitlinien",
        "Aktuelle Bußgeld-Entwicklungen"
      ]
    }
  ];

  // Conversation Examples
  const conversationExamples = [
    {
      user: "Alexa, darf ich Kundendaten für Marketing nutzen?",
      ai: "Das hängt von der Rechtsgrundlage ab. Für Marketing benötigen Sie in der Regel eine ausdrückliche Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Bei bestehenden Kunden können Sie auch das berechtigte Interesse nach Art. 6 Abs. 1 lit. f DSGVO prüfen, müssen dann aber eine Interessenabwägung durchführen.",
      followUp: "Möchten Sie eine Vorlage für die Interessenabwägung?"
    },
    {
      user: "Hey Google, wie lange Bewerberdaten aufbewahren?",
      ai: "Nach einer Absage sollten Bewerberdaten grundsätzlich nach 6 Monaten gelöscht werden, es sei denn der Bewerber stimmt einer längeren Speicherung zu. Bei erfolgreichen Bewerbern beginnt die reguläre Aufbewahrungsfrist als Personaldaten.",
      followUp: "Soll ich Ihnen ein Löschkonzept für Bewerberdaten erstellen?"
    },
    {
      user: "Siri, ist unser Cookie-Banner DSGVO-konform?",
      ai: "Ich kann Ihren Cookie-Banner analysieren. Dafür benötige ich die URL oder einen Screenshot. Wichtige Punkte: Opt-in vor Tracking, granulare Auswahl, einfacher Widerruf und keine Benachteiligung bei Ablehnung.",
      followUp: "Möchten Sie mir die URL Ihrer Website mitteilen?"
    }
  ];

  // Voice Platforms
  const voicePlatforms = [
    { name: "Amazon Alexa", icon: "🔊", users: "45.2M", feature: "DSGVO Skill verfügbar" },
    { name: "Google Assistant", icon: "🎤", users: "38.7M", feature: "Compliance Action" },
    { name: "Apple Siri", icon: "📱", users: "28.3M", feature: "Shortcuts Integration" },
    { name: "Microsoft Cortana", icon: "💻", users: "12.1M", feature: "Business Integration" }
  ];


  // Demo Chat Messages
  const [chatMessages, setChatMessages] = useState([
    
  ]);

  const demoQuestions = [
    "Darf ich Newsletter ohne Opt-in versenden?",
    "Wie erstelle ich ein Verarbeitungsverzeichnis?",
    "Welche Bußgelder drohen bei Verstößen?",
    "Brauche ich einen Datenschutzbeauftragten?"
  ];

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setChatMessages(prev => [...prev, ]);

    // Simulate AI response
    setTimeout(() => {
      const responses = ;

      setChatMessages(prev => [...prev, ]);
    }, 1500);

    setCurrentMessage('');
  };

  return (
    <>
      <SEOHead>
      <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <Header ></Header>
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        class="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40" ></div>
          <motion.div
            class="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion>
          {/* AI Circuit Pattern */}
          <div class="absolute inset-0 opacity-10">
            <div>
          </div>
        </div>
        
        <div class="container mx-auto relative z-10">
          <motion.div 
            class="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              class="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Bot class="w-6 h-6 text-blue-400" ></Bot>
              <span class="text-blue-100 font-medium">AI-Powered Legal Assistant</span>
              <Badge class="bg-blue-500/20 text-blue-200 border-blue-400/30">
                VOICE
              </Badge>
            </motion.div>
            
            <motion.h1 
              class="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Compliance
              <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                AI Assistant
              </span>
            </motion.h1>
            
            <motion.p 
              class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "Alexa, darf ich diese Kundendaten nach USA senden?" 
              <br>
              Instant Compliance-Beratung durch Voice AI. 24/7 verfügbar.
            </motion.p>
            
            <motion.div 
              class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button> setIsListening(!isListening)}
              >
                {isListening ? <MicOff class="w-6 h-6 mr-3" ></MicOff> : <Mic class="w-6 h-6 mr-3" ></Mic>}
                {isListening ? 'Stop Listening' : 'Try Voice Demo'}
              </Button>
              
              <Button>
                <Download class="w-6 h-6 mr-3" ></Download>
                Alexa Skill installieren
              </Button>
            </motion.div>
            
            {/* Live AI Stats */}
            <motion.div 
              class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <MessageCircle class="w-8 h-8 text-green-400 mx-auto mb-2" ></MessageCircle>
                <div class="text-3xl font-bold text-white"></div>
                <div class="text-sm text-gray-400">Fragen beantwortet</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Target class="w-8 h-8 text-blue-400 mx-auto mb-2" ></Target>
                <div class="text-3xl font-bold text-white">{accuracy}%</div>
                <div class="text-sm text-gray-400">Genauigkeit</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Zap class="w-8 h-8 text-yellow-400 mx-auto mb-2" ></Zap>
                <div class="text-3xl font-bold text-white">{responseTime}s</div>
                <div class="text-sm text-gray-400">Antwortzeit</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Users class="w-8 h-8 text-purple-400 mx-auto mb-2" ></Users>
                <div class="text-3xl font-bold text-white"></div>
                <div class="text-sm text-gray-400">Active Users</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* AI Capabilities */}
      <section class="py-20 px-6 bg-black/30">
        <div class="container mx-auto max-w-7xl">
          <motion.div
            class="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge class="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
              <Brain class="w-4 h-4 mr-2" ></Brain>
              AI Capabilities
            </Badge>
            <h2>
              Künstliche Intelligenz trifft Rechtsexpertise
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto">
              Unser AI-System wurde mit 50.000+ DSGVO-Fällen und aktueller Rechtsprechung trainiert
            </p>
          </motion.div>

          <div>
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                class="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div class="flex items-start justify-between mb-6">
                  <div class="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl">
                    <capability.icon class="w-8 h-8 text-blue-400" ></capability>
                  </div>
                  <Badge class="bg-green-500/20 text-green-400 border-green-500/30">
                    {capability.accuracy} Accuracy
                  </Badge>
                </div>
                
                <h3 class="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p class="text-gray-400 mb-6">{capability.description}</p>
                
                <div class="space-y-2">
                  <h4 class="text-sm font-medium text-gray-300 mb-3">Beispiele:</h4>
                  {capability.examples.map((example, idx) => (
                    <div key={idx} lass="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Chat */}
      <section class="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900/30">
        <div class="container mx-auto max-w-7xl">
          <motion.div
            class="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge class="mb-4 bg-green-100 text-green-700 px-4 py-2">
              <PlayCircle class="w-4 h-4 mr-2" ></PlayCircle>
              Live Demo
            </Badge>
            <h2>
              Testen Sie den AI Assistant
            </h2>
            <p class="text-xl text-gray-400 max-w-3xl mx-auto">
              Probieren Sie echte DSGVO-Fragen aus und erleben Sie die Antwort-Qualität
            </p>
          </motion.div>

          <div>
            {/* Chat Interface */}
            <motion.div
              class="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div class="flex items-center gap-3 mb-6">
                <div class="p-2 bg-blue-500 rounded-full">
                  <Bot class="w-6 h-6 text-white" ></Bot>
                </div>
                <h3 class="text-xl font-bold text-white">DSGVO AI Assistant</h3>
                <div class="flex items-center gap-1 ml-auto">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse" ></div>
                  <span class="text-xs text-gray-400">Online</span>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div class="h-96 overflow-y-auto mb-4 space-y-4 bg-gray-900/30 rounded-xl p-4">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    class=
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div>
                      <p class="text-sm">{msg.message}</p>
                      <div class="text-xs opacity-70 mt-1">{msg.timestamp}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Questions */}
              <div class="mb-4">
                <div class="text-sm text-gray-400 mb-2">Häufige Fragen:</div>
                <div class="flex flex-wrap gap-2">
                  
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Input */}
              <div class="flex gap-2">
                <input
                  type="text"
                  placeholder="Stellen Sie Ihre DSGVO-Frage..."
                  value={currentMessage}
                 
                 
                  class="flex-1 px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <Button 
                 
                  class=
                >
                  {isListening ? <MicOff class="w-5 h-5" ></MicOff> : <Mic class="w-5 h-5" ></Mic>}
                </Button>
                <Button 
                 
                  class="px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl"
                >
                  <Send class="w-5 h-5" ></Send>
                </Button>
              </div>
            </motion.div>

            {/* Voice Platforms */}
            <motion.div
              class="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card class="bg-gray-800/50 border-gray-700 p-8">
                <CardHeader class="pb-6">
                  <CardTitle class="text-2xl text-white flex items-center gap-3">
                    <Volume2 class="w-8 h-8 text-green-400" ></Volume2>
                    Voice Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                  {voicePlatforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      class="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div class="flex items-center gap-3">
                        <div class="text-2xl">{platform.icon}</div>
                        <div>
                          <div class="font-bold text-white">{platform.name}</div>
                          <div class="text-sm text-gray-400">{platform.users} Users</div>
                        </div>
                      </div>
                      <Badge class="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {platform.feature}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Conversation Examples */}
              <Card class="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/30 p-8">
                <CardHeader class="pb-6">
                  <CardTitle class="text-2xl text-white flex items-center gap-3">
                    <MessageCircle class="w-8 h-8 text-blue-400" ></MessageCircle>
                    Conversation Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="space-y-6">
                    {conversationExamples.slice(0, 1).map((conv, index) => (
                      <div key={index} class="space-y-3">
                        <div class="flex items-start gap-3">
                          <div class="p-2 bg-white/10 rounded-full">
                            <Users class="w-4 h-4 text-white" ></Users>
                          </div>
                          <div class="flex-1 p-3 bg-white/10 rounded-xl">
                            <p class="text-white text-sm">{conv.user}</p>
                          </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                          <div class="p-2 bg-blue-500 rounded-full">
                            <Bot class="w-4 h-4 text-white" ></Bot>
                          </div>
                          <div class="flex-1 p-3 bg-blue-900/30 rounded-xl border border-blue-500/30">
                            <p class="text-gray-200 text-sm mb-2">{conv.ai}</p>
                            <p class="text-blue-300 text-xs italic">{conv.followUp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class="py-20 px-6 bg-black/40">
        <div class="container mx-auto max-w-7xl">
          <motion.div
            class="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge class="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              <Settings class="w-4 h-4 mr-2" ></Settings>
              Features
            </Badge>
            <h2>
              Mehr als nur Fragen & Antworten
            </h2>
          </motion.div>

          {/* Features Grid */}
          <div>
            {[
              { icon: Smartphone, title: "Multi-Platform", desc: "Verfügbar auf allen Geräten und Plattformen" },
              { icon: Shield, title: "Datenschutz by Design", desc: "Ihre Fragen werden nicht gespeichert oder analysiert" },
              { icon: Globe, title: "Mehrsprachig", desc: "Deutsch, Englisch, Französisch und weitere Sprachen" },
              { icon: Clock, title: "24/7 Verfügbar", desc: "Rund um die Uhr verfügbar, keine Wartezeiten" },
              { icon: FileCheck, title: "Document Review", desc: "Automatische Analyse von Verträgen und Dokumenten" },
              { icon: Users, title: "Team Integration", desc: "Für ganze Teams und Abteilungen verfügbar" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                class="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon class="w-10 h-10 text-blue-400 mb-4" ></feature>
                <h3 class="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p class="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section class="py-20 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div class="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Starten Sie noch heute
            </h2>
            <p class="text-xl text-blue-100 mb-12">
              "Alexa, installiere DSGVO Assistant" - In 2 Minuten einsatzbereit. 
              Keine Verträge, keine Verpflichtungen, 14 Tage kostenlos.
            </p>
            
            <div>
              <Button>
                <Bot class="w-6 h-6 mr-3" ></Bot>
                14 Tage kostenlos testen
              </Button>
              
              <Button>
                <Phone class="w-6 h-6 mr-3" ></Phone>
                Demo Call buchen
              </Button>
            </div>
            
          </motion.div>
        </div>
      </section>

      <Footer ></Footer>
    </div>
    </>`
};