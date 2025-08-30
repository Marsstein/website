export default {
  route: '/eu-ai-act',
  title: 'EU AI Act',
  description: 'Die weltweit erste umfassende KI-Regulierung. Risikobasierter Ansatz zum Schutz 
                von Grundrechten bei gleichzeitiger Förderung von Innovation un',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => , 100);
    }
  }, []);

  const CounterAnimation = ({ value, suffix = '', prefix = '', duration = 2000 }: { value: number; suffix?: string; prefix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const startValue = 0;
        const endValue = value;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
          setCount(currentValue);

          if (progress < 1) 
        };

        requestAnimationFrame(animate);
      }
    }, [isInView, value, duration]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header ></Header>
      
      {/* Fixed Progress Bar */}
      <div class="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div class="container mx-auto max-w-7xl px-4 py-3">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-4">
              <Badge class="bg-blue-500/20 text-blue-300 border-blue-500/30">
                <BrainCircuit class="h-3 w-3 mr-1" ></BrainCircuit>
                EU AI Act Guide
              </Badge>
              <div class="text-sm text-slate-400">
                Abschnitt  von {sections.length}
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-slate-400">% gelesen</span>
              <Button
               
                variant="ghost"
                size="sm"
                class="text-slate-400 hover:text-yellow-400"
              >
                <Bookmark class= ></Bookmark>
              </Button>
            </div>
          </div>
          <Progress value={readingProgress} class="h-1" ></Progress>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        class="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div class="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div class="relative container mx-auto max-w-7xl">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div class="flex items-center gap-3 mb-6">
                <div class="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                  <BrainCircuit class="h-8 w-8 text-white" ></BrainCircuit>
                </div>
                <div>
                  <h1>EU AI Act</h1>
                  <p class="text-xl text-blue-400">Regulation (EU) 2024/1689</p>
                </div>
              </div>
              
              <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                Die weltweit erste umfassende KI-Regulierung. Risikobasierter Ansatz zum Schutz 
                von Grundrechten bei gleichzeitiger Förderung von Innovation und Vertrauen in KI-Systeme.
              </p>
              
              <div class="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" class="bg-blue-500/10 border-blue-500/20 text-blue-300">
                  <Flag class="h-4 w-4 mr-2" ></Flag>
                  EU-Verordnung
                </Badge>
                <Badge variant="outline" class="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  <Calendar class="h-4 w-4 mr-2" ></Calendar>
                  In Kraft seit 2.8.2024
                </Badge>
                <Badge variant="outline" class="bg-purple-500/10 border-purple-500/20 text-purple-300">
                  <Building2 class="h-4 w-4 mr-2" ></Building2>
                  Alle KI-Anbieter & -Nutzer
                </Badge>
              </div>

              <div class="flex gap-4">
                <Button 
                 
                  class="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  <Play class="h-4 w-4 mr-2" ></Play>
                  Guide starten
                </Button>
                <Button>
                  <Download class="h-4 w-4 mr-2" ></Download>
                  PDF herunterladen
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              class="space-y-6"
            >
              {/* Stats Cards */}
              <div class="grid grid-cols-2 gap-4">
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-blue-400 mb-2">
                      <CounterAnimation value={4} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Risikostufen</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-emerald-400 mb-2">
                      <CounterAnimation value={113} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Artikel</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-purple-400 mb-2">
                      <CounterAnimation value={35} prefix="€" suffix="M" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Max. Bußgeld</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-orange-400 mb-2">
                      <CounterAnimation value={7} suffix="%" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">vom Jahresumsatz</div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Overview */}
              <Card class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <CardContent class="p-6">
                  <h3 class="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                  <div class="space-y-3">
                    {[
                      'Risikobasierter Ansatz und Klassifizierung',
                      'Verbotene KI-Praktiken verstehen',
                      'Anforderungen für Hochrisiko-KI',
                      'General Purpose AI Regelungen',
                      'Konformitätsbewertung und CE-Kennzeichnung',
                      'Implementierungs-Roadmap und Timeline'
                    ].map((item, index) => (
                      <div key={index} class="flex items-center gap-3">
                        <CheckCircle class="h-4 w-4 text-blue-400" ></CheckCircle>
                        <span class="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sticky Navigation */}
      <div>
        <div class="container px-4">
          <div class="max-w-7xl mx-auto">
            <nav>
              {sections.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                   }
                    class=
                  >
                    <IconComponent>
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div class="container mx-auto max-w-7xl px-4 py-8">
        <div>
          {/* Sidebar Navigation */}
          <div>
            <div>
              <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                <CardContent class="p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Inhaltsverzeichnis</h3>
                  <div class="space-y-2">
                    {sections.map((section, index) => {
                      const IconComponent = section.icon;
                      return (
                        <button
                          key={section.id}
                         }
                          class=
                        >
                          <div class="flex items-center gap-3">
                            <IconComponent class="h-4 w-4" ></IconComponent>
                            <div class="text-left">
                              <div class="text-sm font-medium">{section.title}</div>
                              <div class="text-xs opacity-70">{section.readTime}</div>
                            </div>
                          </div>
                          
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                <CardContent class="p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Schnellaktionen</h3>
                  <div class="space-y-3">
                    <Button variant="outline" size="sm" class="w-full justify-start">
                      <Download class="h-4 w-4 mr-2" ></Download>
                      Risk Assessment Template
                    </Button>
                    <Button variant="outline" size="sm" class="w-full justify-start">
                      <FileText class="h-4 w-4 mr-2" ></FileText>
                      Compliance Checklist
                    </Button>
                    <Button variant="outline" size="sm" class="w-full justify-start">
                      <Share2 class="h-4 w-4 mr-2" ></Share2>
                      Guide teilen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Area */}
          <div>
            <div ref={contentRef} class="space-y-20">
                
                {/* Überblick Section */}
                <section id="ueberblick" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Überblick</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>
                        
                        <div class="prose prose-invert prose-slate max-w-none">
                          <p class="text-lg text-slate-300 leading-relaxed mb-6">
                            Die Verordnung (EU) 2024/1689 über künstliche Intelligenz (AI Act) ist die weltweit 
                            erste umfassende horizontale Regulierung für KI-Systeme. Sie verfolgt einen risikobasierten 
                            Ansatz und zielt darauf ab, ein Gleichgewicht zwischen dem Schutz der Grundrechte und der 
                            Förderung von Innovation zu schaffen.
                          </p>

                          <div>
                            <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                              <h3 class="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                                <Target class="h-5 w-5" ></Target>
                                Hauptziele
                              </h3>
                              <ul class="space-y-2 text-slate-300">
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Schutz von Grundrechten und Sicherheit</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Rechtssicherheit für KI-Entwickler</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Förderung von vertrauenswürdiger KI</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Harmonisierung des EU-Binnenmarkts</span>
                                </li>
                              </ul>
                            </div>

                            <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                              <h3 class="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                                <Building2 class="h-5 w-5" ></Building2>
                                Geltungsbereich
                              </h3>
                              <ul class="space-y-2 text-slate-300">
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Anbieter von KI-Systemen</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Betreiber/Nutzer von KI</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Importeure und Händler</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Drittländer mit EU-Auswirkung</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-4">Kernprinzipien des AI Act</h3>
                            <div>
                              <div class="text-center">
                                <div class="p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3">
                                  <Gauge class="h-6 w-6 text-white" ></Gauge>
                                </div>
                                <h4 class="font-semibold text-white mb-2">Risikobasiert</h4>
                                <p class="text-sm text-slate-400">Anforderungen proportional zum Risiko</p>
                              </div>
                              <div class="text-center">
                                <div class="p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3">
                                  <Users class="h-6 w-6 text-white" ></Users>
                                </div>
                                <h4 class="font-semibold text-white mb-2">Human-Centric</h4>
                                <p class="text-sm text-slate-400">Mensch im Mittelpunkt der KI-Nutzung</p>
                              </div>
                              <div class="text-center">
                                <div class="p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3">
                                  <Globe class="h-6 w-6 text-white" ></Globe>
                                </div>
                                <h4 class="font-semibold text-white mb-2">Technologieneutral</h4>
                                <p class="text-sm text-slate-400">Anwendbar auf alle KI-Technologien</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Risikostufen Section */}
                <section id="risikostufen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Risikostufen</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 class="text-lg font-bold text-blue-300 mb-3">Risikobasierter Ansatz</h3>
                          <p class="text-slate-300 mb-4">
                            Der EU AI Act klassifiziert KI-Systeme in vier Risikostufen. Je höher das Risiko 
                            für Grundrechte und Sicherheit, desto strenger die Anforderungen. Diese Pyramide 
                            zeigt die Verteilung und jeweiligen Compliance-Anforderungen.
                          </p>
                          <div class="relative h-64 flex items-end justify-center">
                            <svg class="w-full h-full" viewBox="0 0 400 200">
                              {/* Pyramid */}
                              <path d="M200 20 L320 180 L80 180 Z" fill="url(#pyramidGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"></path>
                              
                              {/* Risk Levels */}
                              <line x1="120" y1="60" x2="280" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></line>
                              <line x1="140" y1="100" x2="260" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></line>
                              <line x1="160" y1="140" x2="240" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></line>
                              
                              {/* Labels */}
                              <text x="200" y="45" textAnchor="middle" fill="#ef4444" class="text-xs font-semibold">Verboten</text>
                              <text x="200" y="85" textAnchor="middle" fill="#f97316" class="text-xs font-semibold">Hochrisiko</text>
                              <text x="200" y="125" textAnchor="middle" fill="#eab308" class="text-xs font-semibold">Begrenzt</text>
                              <text x="200" y="165" textAnchor="middle" fill="#22c55e" class="text-xs font-semibold">Minimal</text>
                              
                              {/* Gradient Definition */}
                              <defs>
                                <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"></stop>
                                  <stop offset="33%" stopColor="#f97316" stopOpacity="0.6"></stop>
                                  <stop offset="66%" stopColor="#eab308" stopOpacity="0.4"></stop>
                                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>

                        <div class="space-y-4">
                          {riskCategories.map((category, index) => {
                            const IconComponent = category.icon;
                            const isExpanded = expandedRiskLevel[category.level];
                            
                            return (
                              <motion.div
                                key={category.level}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                class="border border-slate-700 rounded-xl overflow-hidden"
                              >
                                <button
                                 
                                  class="w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between"
                                >
                                  <div class="flex items-center gap-4">
                                    <div class=>
                                      <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                    </div>
                                    <div class="text-left">
                                      <h3 class="text-lg font-bold text-white">{category.level}</h3>
                                      <p class="text-slate-400 text-sm">{category.description}</p>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-3">
                                    <Badge variant="outline" class="text-xs">
                                      {category.requirements}
                                    </Badge>
                                    <ChevronDown class= ></ChevronDown>
                                  </div>
                                </button>
                                
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    class="border-t border-slate-700 bg-slate-900/50"
                                  >
                                    <div class="p-6 space-y-6">
                                      <div>
                                        <div>
                                          <h4 class="text-md font-semibold text-white mb-3 flex items-center gap-2">
                                            <Package class="h-4 w-4 text-blue-400" ></Package>
                                            Beispiele
                                          </h4>
                                          <ul class="space-y-2">
                                            {category.examples.map((example, idx) => (
                                              <li key={idx} class="flex items-start gap-2 text-sm">
                                                <CircleDot class="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" ></CircleDot>
                                                <span class="text-slate-300">{example}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h4 class="text-md font-semibold text-white mb-3 flex items-center gap-2">
                                            <ClipboardCheck class="h-4 w-4 text-emerald-400" ></ClipboardCheck>
                                            Anforderungen
                                          </h4>
                                          <ul class="space-y-2">
                                            {category.obligations.map((obligation, idx) => (
                                              <li key={idx} class="flex items-start gap-2 text-sm">
                                                <CheckCircle class="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" ></CheckCircle>
                                                <span class="text-slate-300">{obligation}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* High Risk Section */}
                <section id="hochrisiko-ki" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Hochrisiko-KI-Systeme</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* High Risk Categories */}
                          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-orange-300 mb-6">Annex III - Hochrisiko-Bereiche</h3>
                            <div>
                              {[
                                {
                                  category: 'Biometrische Systeme',
                                  icon: Fingerprint,
                                  examples: [
                                    'Fernbiometrische Identifikation',
                                    'Emotionserkennung am Arbeitsplatz',
                                    'Biometrische Kategorisierung'
                                  ]
                                },
                                {
                                  category: 'Kritische Infrastruktur',
                                  icon: Server,
                                  examples: [
                                    'Verkehrssteuerung',
                                    'Wasser- und Stromversorgung',
                                    'Digitale Infrastruktur'
                                  ]
                                },
                                {
                                  category: 'Bildung & Ausbildung',
                                  icon: GraduationCap,
                                  examples: [
                                    'Zulassung zu Bildungseinrichtungen',
                                    'Bewertung von Prüfungen',
                                    'Lernfortschrittsüberwachung'
                                  ]
                                },
                                {
                                  category: 'Beschäftigung',
                                  icon: Briefcase,
                                  examples: [
                                    'Recruiting und Auswahl',
                                    'Leistungsbewertung',
                                    'Kündigungsentscheidungen'
                                  ]
                                },
                                {
                                  category: 'Wesentliche Dienste',
                                  icon: Heart,
                                  examples: [
                                    'Sozialleistungen',
                                    'Notfalldienste',
                                    'Kreditwürdigkeit'
                                  ]
                                },
                                {
                                  category: 'Rechtsdurchsetzung',
                                  icon: Gavel,
                                  examples: [
                                    'Risikoanalyse Straftaten',
                                    'Polygraph-ähnliche Tools',
                                    'Beweisbewertung'
                                  ]
                                }
                              ].map((area) => {
                                const IconComponent = area.icon;
                                return (
                                  <div key={area.category} class="bg-slate-800/50 rounded-xl p-6">
                                    <div class="flex items-center gap-3 mb-4">
                                      <div class="p-2 bg-orange-500 rounded-lg">
                                        <IconComponent class="h-5 w-5 text-white" ></IconComponent>
                                      </div>
                                      <h4 class="font-semibold text-white">{area.category}</h4>
                                    </div>
                                    <ul class="space-y-2">
                                      {area.examples.map((example, idx) => (
                                        <li key={idx} class="flex items-start gap-2 text-sm">
                                          <AlertTriangle class="h-3 w-3 text-orange-400 mt-1" ></AlertTriangle>
                                          <span class="text-slate-300">{example}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Requirements for High Risk */}
                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Shield class="h-5 w-5 text-blue-400" ></Shield>
                                Technische Anforderungen
                              </h3>
                              <ul class="space-y-3">
                                {[
                                  'Risikomanagementsystem etablieren',
                                  'Datenqualität und -governance sicherstellen',
                                  'Technische Dokumentation erstellen',
                                  'Automatische Aufzeichnung (Logging)',
                                  'Transparenz für Nutzer gewährleisten',
                                  'Menschliche Aufsicht ermöglichen',
                                  'Genauigkeit, Robustheit, Cybersicherheit'
                                ].map((req, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5" ></CheckCircle>
                                    <span class="text-sm text-slate-300">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <FileText class="h-5 w-5 text-emerald-400" ></FileText>
                                Compliance-Prozess
                              </h3>
                              <ul class="space-y-3">
                                {[
                                  'Konformitätsbewertung durchführen',
                                  'EU-Konformitätserklärung erstellen',
                                  'CE-Kennzeichnung anbringen',
                                  'Registrierung in EU-Datenbank',
                                  'Post-Market Monitoring',
                                  'Schwerwiegende Vorfälle melden',
                                  'Dokumentation 10 Jahre aufbewahren'
                                ].map((proc, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5" ></CheckCircle>
                                    <span class="text-sm text-slate-300">{proc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Compliance Timeline Section */}
                <section id="zeitplan" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Compliance Timeline</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 class="text-lg font-bold text-blue-300 mb-3">Stufenweise Einführung</h3>
                          <p class="text-slate-300">
                            Der EU AI Act wird schrittweise über mehrere Jahre eingeführt. Die Timeline zeigt die wichtigsten 
                            Meilensteine und wann welche Anforderungen in Kraft treten.
                          </p>
                        </div>

                        <div class="space-y-6">
                          {complianceTimeline.map((milestone, index) => (
                            <motion.div
                              key={milestone.date}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              class=
                            >
                              <div class="flex items-start gap-4">
                                <div class= ></div>
                                
                                <div class="flex-1">
                                  <div class="flex items-center gap-4 mb-3">
                                    <h4 class="text-lg font-bold text-white">{milestone.milestone}</h4>
                                    <Badge variant={milestone.status === 'completed' ? 'default' : 'outline'} class="text-xs">
                                      {milestone.date}
                                    </Badge>
                                  </div>
                                  
                                  <p class="text-slate-300 mb-4">{milestone.description}</p>
                                  
                                  {milestone.requirements.length > 0 && (
                                    <div class="bg-slate-900/50 rounded-lg p-4">
                                      <h5 class="text-sm font-semibold text-slate-300 mb-2">Wichtige Anforderungen:</h5>
                                      <ul class="space-y-1">
                                        {milestone.requirements.map((req, idx) => (
                                          <li key={idx} class="flex items-start gap-2 text-sm">
                                            <CheckCircle class="h-3 w-3 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                            <span class="text-slate-400">{req}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Implementation Section */}
                <section id="implementierung" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Implementierungs-Roadmap</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                          <h3 class="text-xl font-bold text-purple-300 mb-4">EU AI Act Compliance Journey</h3>
                          <p class="text-slate-300 mb-4">
                            Eine strukturierte Herangehensweise ist entscheidend für erfolgreiche AI Act Compliance. 
                            Diese Roadmap führt Sie durch alle notwendigen Schritte von der ersten Bestandsaufnahme bis zur Zertifizierung.
                          </p>
                          <div>
                            <div class="bg-slate-800/50 rounded-lg p-4">
                              <div class="text-2xl font-bold text-purple-400">12-18 Monate</div>
                              <div class="text-sm text-slate-400">Typische Implementierungsdauer</div>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-4">
                              <div class="text-2xl font-bold text-pink-400">5 Phasen</div>
                              <div class="text-sm text-slate-400">Strukturierter Ansatz</div>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-4">
                              <div class="text-2xl font-bold text-indigo-400">€200k-500k</div>
                              <div class="text-sm text-slate-400">Typische Kosten (High-Risk)</div>
                            </div>
                          </div>
                        </div>

                        <div class="space-y-6">
                          {implementationSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                              <motion.div
                                key={step.phase}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                              >
                                <div class="flex items-start gap-4">
                                  <div class=>
                                    <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                  </div>
                                  <div class="flex-1">
                                    <div class="flex items-center gap-4 mb-4">
                                      <h4 class="text-lg font-bold text-white">{step.phase}</h4>
                                      <Badge variant="outline" class="text-xs">{step.duration}</Badge>
                                    </div>
                                    
                                    <div>
                                      <div>
                                        <h5 class="text-sm font-semibold text-slate-300 mb-3">Hauptaufgaben:</h5>
                                        <ul class="space-y-2">
                                          {step.tasks.map((task, idx) => (
                                            <li key={idx} class="flex items-start gap-2">
                                              <input 
                                                type="checkbox" 
                                                id=impl-task-${index}-${idx}
                                                checked={checkedItems[`impl-task-${index}-${idx}`] || false}
                                               -${idx}`)}
                                                class="mt-1 text-blue-500"
                                              />
                                              <label 
                                                for=impl-task-${index}-${idx}
                                                class={cn(
                                                  "text-sm text-slate-300 cursor-pointer",
                                                  checkedItems[`impl-task-${index}-${idx}`] && "line-through opacity-60"
                                                )}
                                              >
                                                {task}
                                              </label>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <h5 class="text-sm font-semibold text-slate-300 mb-3">Deliverables:</h5>
                                        <div class="flex flex-wrap gap-2">
                                          {step.deliverables.map((deliverable) => (
                                            <Badge key={deliverable} variant="outline" class="text-xs">
                                              {deliverable}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        <div>
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                              <Sparkles class="h-5 w-5 text-yellow-400" ></Sparkles>
                              Success Factors
                            </h3>
                            <ul class="space-y-3">
                              {[
                                'Executive Sponsorship und Budget-Commitment',
                                'Cross-funktionales AI Governance Board',
                                'Frühzeitige Einbindung von Legal & Compliance',
                                'Pragmatischer, risikobasierter Ansatz',
                                'Automatisierung wo möglich',
                                'Kontinuierliche Schulung aller Stakeholder',
                                'Enge Zusammenarbeit mit Notified Bodies'
                              ].map((factor, idx) => (
                                <li key={idx} class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span class="text-sm text-slate-300">{factor}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                              <AlertOctagon class="h-5 w-5 text-red-400" ></AlertOctagon>
                              Typische Herausforderungen
                            </h3>
                            <ul class="space-y-3">
                              {[
                                'Unklarheit bei Risiko-Klassifizierung',
                                'Fehlende harmonisierte Standards',
                                'Begrenzte Verfügbarkeit von Notified Bodies',
                                'Komplexität bei GPAI-Modellen',
                                'Dokumentationsaufwand unterschätzt',
                                'Supply Chain Transparency',
                                'Technische Schulden in Legacy-Systemen'
                              ].map((challenge, idx) => (
                                <li key={idx} class="flex items-start gap-2">
                                  <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                  <span class="text-sm text-slate-300">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Verbotene Praktiken Section */}
                <section id="verbotene-praktiken" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Verbotene KI-Praktiken</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Article 5 Prohibited Practices */}
                          <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-red-300 mb-6 text-center">Artikel 5 - Verbotene KI-Praktiken</h3>
                            <div class="space-y-6">
                              {[
                                ,
                                ,
                                ,
                                
                              ].map((prohibition) => (
                                <div key={prohibition.article} class="bg-slate-800/50 rounded-xl p-6 border-2 border-red-500/30">
                                  <div class="flex items-center gap-3 mb-4">
                                    <Badge class="bg-red-500/20 text-red-300 border-red-500/50">Art. {prohibition.article}</Badge>
                                    <h4 class="text-lg font-bold text-white">{prohibition.title}</h4>
                                  </div>
                                  
                                  <div class="mb-4">
                                    <p class="text-slate-300 mb-2 text-sm italic">"{prohibition.description} {prohibition.purpose}"</p>
                                  </div>
                                  
                                  <div>
                                    <div>
                                      <h5 class="text-sm font-semibold text-red-300 mb-3 flex items-center gap-2">
                                        <AlertOctagon class="h-4 w-4" ></AlertOctagon>
                                        Beispiele
                                      </h5>
                                      <ul class="space-y-2">
                                        {prohibition.examples.map((example, idx) => (
                                          <li key={idx} class="flex items-start gap-2">
                                            <ShieldOff class="h-3 w-3 text-red-400 mt-1 flex-shrink-0" ></ShieldOff>
                                            <span class="text-xs text-slate-300">{example}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 class="text-sm font-semibold text-orange-300 mb-3 flex items-center gap-2">
                                        <Gavel class="h-4 w-4" ></Gavel>
                                        Rechtliche Konsequenzen
                                      </h5>
                                      <ul class="space-y-2">
                                        {prohibition.legalConsequences.map((consequence, idx) => (
                                          <li key={idx} class="flex items-start gap-2">
                                            <AlertTriangle class="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" ></AlertTriangle>
                                            <span class="text-xs text-slate-300">{consequence}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 class="text-sm font-semibold text-green-300 mb-3 flex items-center gap-2">
                                        <CheckCircle class="h-4 w-4" ></CheckCircle>
                                        Compliance Maßnahmen
                                      </h5>
                                      <ul class="space-y-2">
                                        {prohibition.complianceActions.map((action, idx) => (
                                          <li key={idx} class="flex items-start gap-2">
                                            <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                            <span class="text-xs text-slate-300">{action}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Enforcement Mechanisms */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Durchsetzungsmechanismen</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
                                  <Building2 class="h-5 w-5 text-blue-400" ></Building2>
                                  Aufsichtsbehörden
                                </h4>
                                <ul class="space-y-2 text-sm">
                                  <li class="text-slate-300">• Nationale AI-Behörden</li>
                                  <li class="text-slate-300">• Marktüberwachungsbehörden</li>
                                  <li class="text-slate-300">• Datenschutzbehörden</li>
                                  <li class="text-slate-300">• Europäisches AI Board</li>
                                </ul>
                              </div>
                              
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
                                  <Search class="h-5 w-5 text-emerald-400" ></Search>
                                  Überwachungsmaßnahmen
                                </h4>
                                <ul class="space-y-2 text-sm">
                                  <li class="text-slate-300">• Regelmäßige Inspektionen</li>
                                  <li class="text-slate-300">• Technische Tests</li>
                                  <li class="text-slate-300">• Dokumentenprüfungen</li>
                                  <li class="text-slate-300">• Whistleblower-Programme</li>
                                </ul>
                              </div>
                              
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
                                  <Gavel class="h-5 w-5 text-purple-400" ></Gavel>
                                  Sanktionsmaßnahmen
                                </h4>
                                <ul class="space-y-2 text-sm">
                                  <li class="text-slate-300">• Verwarnungen</li>
                                  <li class="text-slate-300">• Anordnungen zur Einstellung</li>
                                  <li class="text-slate-300">• Marktverbot</li>
                                  <li class="text-slate-300">• Bußgelder bis 35 Mio. €</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* General Purpose AI Section */}
                <section id="general-purpose" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">General Purpose AI Models (GPAI)</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* GPAI Definition and Scope */}
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-purple-300 mb-6">GPAI Model Definition & Kategorien</h3>
                            <div>
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <BrainCircuit class="h-5 w-5 text-purple-400" ></BrainCircuit>
                                  Standard GPAI Models
                                </h4>
                                <div class="space-y-4">
                                  <div class="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                                    <h5 class="font-semibold text-purple-300 mb-2">Definition (Art. 3 Nr. 44a)</h5>
                                    <p class="text-sm text-slate-300 mb-3">
                                      KI-Modell, das mit einer erheblichen Menge von Multimodal-Daten mittels 
                                      selbstüberwachten, unüberwachten oder verstärkenden Lernverfahren trainiert wurde 
                                      und eine Vielzahl charakteristischer Aufgaben erfüllen kann.
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h5 class="font-semibold text-white mb-2">Anforderungen:</h5>
                                    <ul class="space-y-2">
                                      {[
                                        'Technische Dokumentation bereitstellen',
                                        'Informationen über Training und Testing',
                                        'Urheberrechts-Compliance dokumentieren',
                                        'Öffentliche Zusammenfassung verfügbar machen',
                                        'Policy gegen missbräuchliche Nutzung',
                                        'Robustheit und Cybersicherheit gewährleisten'
                                      ].map((req, idx) => (
                                        <li key={idx} class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          <span class="text-xs text-slate-300">{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Zap class="h-5 w-5 text-orange-400" ></Zap>
                                  Systemic Risk GPAI (&gt;10²⁵ FLOPS)
                                </h4>
                                <div class="space-y-4">
                                  <div class="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                                    <h5 class="font-semibold text-orange-300 mb-2">Schwellenwert</h5>
                                    <p class="text-sm text-slate-300 mb-3">
                                      Modelle mit mehr als 10²⁵ FLOPS (Floating Point Operations) für das Training 
                                      gelten als systemische Risiko-Modelle.
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h5 class="font-semibold text-white mb-2">Zusätzliche Anforderungen:</h5>
                                    <ul class="space-y-2">
                                      {[
                                        'Model evaluation gemäß EU Codes of Practice',
                                        'Adversarial testing durchführen',
                                        'Systemic risk assessment',
                                        'Red teaming exercises',
                                        'Incident reporting an AI Office',
                                        'Cybersecurity measures dokumentieren',
                                        'Access restrictions implementieren',
                                        'Energy consumption reporting'
                                      ].map((req, idx) => (
                                        <li key={idx} class="flex items-start gap-2">
                                          <AlertTriangle class="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" ></AlertTriangle>
                                          <span class="text-xs text-slate-300">{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* FLOPS Calculation Framework */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">FLOPS Calculation & Model Assessment</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">FLOPS Berechnung</h4>
                                <div class="bg-slate-900/50 rounded-lg p-4 mb-4">
                                  <div class="text-sm text-slate-300 mb-2">Formel:</div>
                                  <div class="bg-slate-800 rounded p-3 font-mono text-blue-300 text-sm">
                                    FLOPS = 6 × N × D
                                  </div>
                                  <div class="text-xs text-slate-400 mt-2">
                                    N = Anzahl Parameter<br/>
                                    D = Anzahl Training Tokens
                                  </div>
                                </div>
                                
                                <div class="space-y-3">
                                  <h5 class="font-semibold text-slate-300">Beispiele bekannter Modelle:</h5>
                                  {[
                                    { model: 'GPT-3', params: '175B', flops: '~3.1 × 10²³', risk: 'Standard' },
                                    { model: 'GPT-4', params: '~1.7T', flops: '~2.4 × 10²⁵', risk: 'Systemic' },
                                    { model: 'PaLM', params: '540B', flops: '~2.5 × 10²⁴', risk: 'Standard' },
                                    { model: 'Claude-3', params: 'Unknown', flops: 'Estimated >10²⁵', risk: 'Likely Systemic' }
                                  ].map((example) => (
                                    <div key={example.model} class="bg-slate-800/30 rounded p-3">
                                      <div class="flex justify-between items-center">
                                        <span class="font-medium text-white">{example.model}</span>
                                        <Badge class=>
                                          {example.risk}
                                        </Badge>
                                      </div>
                                      <div class="text-xs text-slate-400">
                                        {example.params} params • {example.flops} FLOPS
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Assessment Framework</h4>
                                <div class="space-y-4">
                                  {[
                                    {
                                      category: 'Technical Documentation',
                                      items: [
                                        'Model architecture details',
                                        'Training methodologies',
                                        'Dataset information',
                                        'Performance benchmarks',
                                        'Limitation documentation'
                                      ]
                                    },
                                    {
                                      category: 'Risk Assessment',
                                      items: [
                                        'Systemic risk evaluation',
                                        'Dual-use potential analysis',
                                        'Societal impact assessment',
                                        'Bias und fairness testing',
                                        'Environmental impact'
                                      ]
                                    },
                                    {
                                      category: 'Governance Measures',
                                      items: [
                                        'Access control mechanisms',
                                        'Usage monitoring systems',
                                        'Incident response procedures',
                                        'Model update protocols',
                                        'Stakeholder engagement'
                                      ]
                                    }
                                  ].map((framework) => (
                                    <div key={framework.category} class="bg-slate-900/50 rounded-lg p-4">
                                      <h5 class="font-semibold text-white mb-3">{framework.category}</h5>
                                      <ul class="space-y-1">
                                        {framework.items.map((item, idx) => (
                                          <li key={idx} class="text-xs text-slate-300 flex items-center gap-2">
                                            <Circle class="h-2 w-2 fill-current" ></Circle>
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Downstream Provider Obligations */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Downstream Provider Verpflichtungen</h3>
                            <div>
                              {[
                                {
                                  role: 'Model Provider',
                                  icon: BrainCircuit,
                                  responsibilities: [
                                    'Technical documentation maintenance',
                                    'Copyright compliance verification',
                                    'Model evaluation und testing',
                                    'Incident reporting to authorities',
                                    'Cybersecurity measures implementation'
                                  ]
                                },
                                {
                                  role: 'Application Developer',
                                  icon: Code,
                                  responsibilities: [
                                    'GPAI model capabilities assessment',
                                    'Application-specific risk evaluation',
                                    'User safety measures implementation',
                                    'Misuse prevention mechanisms',
                                    'Transparency und user information'
                                  ]
                                },
                                {
                                  role: 'Deployer/User',
                                  icon: Users,
                                  responsibilities: [
                                    'Use case appropriateness evaluation',
                                    'Human oversight implementation',
                                    'Output monitoring und quality control',
                                    'Incident detection und response',
                                    'End-user protection measures'
                                  ]
                                }
                              ].map((stakeholder) => {
                                const IconComponent = stakeholder.icon;
                                return (
                                  <div key={stakeholder.role} class="bg-slate-900/50 rounded-lg p-4">
                                    <div class="flex items-center gap-3 mb-4">
                                      <IconComponent class="h-5 w-5 text-blue-400" ></IconComponent>
                                      <h4 class="font-semibold text-white">{stakeholder.role}</h4>
                                    </div>
                                    <ul class="space-y-2">
                                      {stakeholder.responsibilities.map((resp, idx) => (
                                        <li key={idx} class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          <span class="text-xs text-slate-300">{resp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })
                            }
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Anwendungsbereich Section */}
                <section id="anwendungsbereich" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Anwendungsbereich</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Materieller Anwendungsbereich */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">Materieller Anwendungsbereich</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">KI-Systeme (Art. 3 Nr. 1)</h4>
                                <div class="space-y-3">
                                  <div class="bg-slate-900/50 rounded-lg p-4">
                                    <p class="text-slate-300 text-sm">
                                      "Ein maschinenbasiertes System, das für explizite oder implizite Ziele 
                                      entwickelt wurde und das aus den erhaltenen Eingaben ableitet, wie es Ausgaben 
                                      wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen generiert, die 
                                      physische oder virtuelle Umgebungen beeinflussen können."
                                    </p>
                                  </div>
                                  <ul class="space-y-2">
                                    {[
                                      'Machine Learning Systeme',
                                      'Logic- und knowledge-based Ansätze',
                                      'Statistische Ansätze',
                                      'Bayesian estimation',
                                      'Search und optimization Methoden'
                                    ].map((item, idx) => (
                                      <li key={idx} class="flex items-center gap-2 text-sm text-slate-300">
                                        <CheckCircle class="h-3 w-3 text-blue-400" ></CheckCircle>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Ausnahmen</h4>
                                <div class="space-y-3">
                                  <ul class="space-y-2">
                                    {[
                                      'KI für ausschließlich militärische Zwecke',
                                      'KI für nationale Sicherheit',
                                      'KI nur für Forschung und Entwicklung',
                                      'KI nur für persönliche, nicht-berufliche Zwecke',
                                      'Open Source Software (mit Einschränkungen)'
                                    ].map((item, idx) => (
                                      <li key={idx} class="flex items-center gap-2 text-sm text-slate-300">
                                        <X class="h-3 w-3 text-red-400" ></X>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Räumlicher Anwendungsbereich */}
                          <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-emerald-300 mb-6">Räumlicher Anwendungsbereich</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-emerald-300 mb-3">Anbieter in der EU</h4>
                                <p class="text-sm text-slate-300">
                                  Alle Anbieter mit Sitz in der EU, unabhängig davon, 
                                  wo das KI-System eingesetzt wird.
                                </p>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-emerald-300 mb-3">Verwendung in der EU</h4>
                                <p class="text-sm text-slate-300">
                                  KI-Systeme von Drittlandanbietern, die in der EU 
                                  verwendet werden.
                                </p>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-emerald-300 mb-3">Output in der EU</h4>
                                <p class="text-sm text-slate-300">
                                  KI-Systeme, deren Output in der EU verwendet wird, 
                                  auch wenn das System selbst außerhalb betrieben wird.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Akteure im AI Act */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Betroffene Akteure</h3>
                            <div>
                              {[
                                ,
                                ,
                                {
                                  role: 'Importeur',
                                  definition: 'Person mit Sitz in der EU, die KI-System aus Drittland in Verkehr bringt',
                                  responsibilities: [
                                    'Konformitätsprüfung',
                                    'CE-Kennzeichnung verifizieren',
                                    'Technische Dokumentation prüfen',
                                    'Marktüberwachung unterstützen'
                                  ]
                                },
                                
                              ].map((actor, idx) => (
                                <div key={idx} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-blue-300 mb-2">{actor.role}</h4>
                                  <p class="text-sm text-slate-300 mb-3">{actor.definition}</p>
                                  <ul class="space-y-1">
                                    {actor.responsibilities.map((resp, ridx) => (
                                      <li key={ridx} class="text-xs text-slate-400 flex items-center gap-2">
                                        <CheckCircle class="h-2 w-2 text-emerald-400" ></CheckCircle>
                                        {resp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Anforderungen Section */}
                <section id="anforderungen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Anforderungen</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Hochrisiko-Anforderungen */}
                          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-red-300 mb-6">Anforderungen für Hochrisiko-KI-Systeme</h3>
                            <div>
                              {[
                                {
                                  requirement: 'Risikomanagementsystem',
                                  article: 'Art. 9',
                                  description: 'Kontinuierlicher Prozess zur Identifikation, Analyse und Bewertung von Risiken',
                                  details: [
                                    'Risiko-Identifikation und -Analyse',
                                    'Risikobewertung und -bewältigung',
                                    'Dokumentation aller Risikomanagement-Aktivitäten',
                                    'Regelmäßige Überprüfung und Aktualisierung'
                                  ]
                                },
                                {
                                  requirement: 'Datenqualität und -governance',
                                  article: 'Art. 10',
                                  description: 'Sicherstellung hoher Datenqualität für Training, Validierung und Test',
                                  details: [
                                    'Relevante, repräsentative und fehlerfrei Daten',
                                    'Angemessene statistische Eigenschaften',
                                    'Bias-Minimierung',
                                    'Datenqualitätskontrolle'
                                  ]
                                },
                                {
                                  requirement: 'Technische Dokumentation',
                                  article: 'Art. 11',
                                  description: 'Umfassende Dokumentation des KI-Systems und seiner Eigenschaften',
                                  details: [
                                    'Allgemeine Beschreibung des KI-Systems',
                                    'Detaillierte Entwicklungsdokumentation',
                                    'Risikomanagement-Dokumentation',
                                    'Konformitätsbewertungsverfahren'
                                  ]
                                },
                                {
                                  requirement: 'Automatische Protokollierung',
                                  article: 'Art. 12',
                                  description: 'Automatische Aufzeichnung von Ereignissen während des Betriebs',
                                  details: [
                                    'Funktionsdauer und -häufigkeit',
                                    'Eingabedaten und deren Referenz',
                                    'Zeitstempel aller Aktivitäten',
                                    'Systemleistung und -verhalten'
                                  ]
                                },
                                {
                                  requirement: 'Transparenz und Information',
                                  article: 'Art. 13',
                                  description: 'Klare und verständliche Informationen für Betreiber',
                                  details: [
                                    'Zweckbestimmung und Verwendungszweck',
                                    'Genauigkeitsgrad und Robustheit',
                                    'Bekannte Einschränkungen',
                                    'Erwartete Systemlebensdauer'
                                  ]
                                },
                                {
                                  requirement: 'Menschliche Aufsicht',
                                  article: 'Art. 14',
                                  description: 'Sicherstellung angemessener menschlicher Kontrolle',
                                  details: [
                                    'Human-in-the-loop Design',
                                    'Human-on-the-loop Überwachung',
                                    'Human-in-command Kontrolle',
                                    'Interpretierbare Outputs'
                                  ]
                                }
                              ].map((req, idx) => (
                                <div key={idx} class="bg-slate-900/50 rounded-lg p-4">
                                  <div class="flex items-center gap-2 mb-3">
                                    <Badge variant="outline" class="text-xs">{req.article}</Badge>
                                    <h4 class="font-semibold text-white">{req.requirement}</h4>
                                  </div>
                                  <p class="text-sm text-slate-300 mb-3">{req.description}</p>
                                  <ul class="space-y-1">
                                    {req.details.map((detail, didx) => (
                                      <li key={didx} class="text-xs text-slate-400 flex items-start gap-2">
                                        <CheckCircle class="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        {detail}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Genauigkeits- und Robustheitsanforderungen */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">Genauigkeit, Robustheit und Cybersicherheit</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-blue-300 mb-3">Genauigkeit</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Angemessenes Genauigkeitsniveau',
                                    'Konsistente Leistung',
                                    'Messbare Metriken',
                                    'Benchmark-Vergleiche'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Target class="h-3 w-3 text-blue-400" ></Target>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-emerald-300 mb-3">Robustheit</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Resilienz gegen Fehler',
                                    'Umgang mit Anomalien',
                                    'Stabile Performance',
                                    'Graceful Degradation'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Shield class="h-3 w-3 text-emerald-400" ></Shield>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-red-300 mb-3">Cybersicherheit</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Schutz vor Angriffen',
                                    'Sichere Datenübertragung',
                                    'Zugriffskontrollen',
                                    'Incident Response'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Lock class="h-3 w-3 text-red-400" ></Lock>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Konformitätsbewertung Section */}
                <section id="konformitaet" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Konformitätsbewertung</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Konformitätsbewertungsverfahren Übersicht */}
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-purple-300 mb-6">Konformitätsbewertungsverfahren</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-purple-300 mb-3">Internes Qualitätsmanagement (Anhang VI)</h4>
                                <div class="space-y-3">
                                  <div class="text-sm text-slate-300">
                                    <p class="mb-2"><strong>Anwendbar für:</strong> Die meisten Hochrisiko-KI-Systeme</p>
                                    <p class="mb-3"><strong>Ausnahmen:</strong> Biometrische Identifikationssysteme</p>
                                  </div>
                                  <ul class="space-y-2">
                                    {[
                                      'Qualitätsmanagementsystem implementieren',
                                      'Technische Dokumentation erstellen',
                                      'Automatische Protokollierung einrichten',
                                      'EU-Konformitätserklärung ausstellen',
                                      'CE-Kennzeichnung anbringen',
                                      'Post-Market-Monitoring durchführen'
                                    ].map((item, idx) => (
                                      <li key={idx} class="text-xs text-slate-400 flex items-start gap-2">
                                        <CheckCircle class="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-pink-300 mb-3">Beteiligung Notifizierter Stellen (Anhang VII)</h4>
                                <div class="space-y-3">
                                  <div class="text-sm text-slate-300">
                                    <p class="mb-2"><strong>Anwendbar für:</strong> Biometrische Identifikationssysteme</p>
                                    <p class="mb-3"><strong>Zusätzlich zu:</strong> Internem Qualitätsmanagement</p>
                                  </div>
                                  <ul class="space-y-2">
                                    {[
                                      'Technische Dokumentation prüfen lassen',
                                      'Qualitätsmanagementsystem bewerten',
                                      'Konformitätszertifikat erhalten',
                                      'Jährliche Überwachung durchführen',
                                      'Änderungen melden und bewerten lassen'
                                    ].map((item, idx) => (
                                      <li key={idx} class="text-xs text-slate-400 flex items-start gap-2">
                                        <CheckCircle class="h-2 w-2 text-pink-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* CE-Kennzeichnung */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">CE-Kennzeichnung</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-blue-300 mb-3">Anbringung</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Sichtbar, lesbar und dauerhaft',
                                    'Auf dem KI-System oder Verpackung',
                                    'Mindesthöhe 5 mm',
                                    'Bei digitalen Systemen: elektronisch'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <CheckCircle class="h-3 w-3 text-blue-400" ></CheckCircle>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-cyan-300 mb-3">Bedeutung</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Konformität mit AI Act',
                                    'Freier Verkehr in der EU',
                                    'Herstellerverantwortung',
                                    'Marktüberwachung ermöglichen'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Award class="h-3 w-3 text-cyan-400" ></Award>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-emerald-300 mb-3">Dokumentation</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'EU-Konformitätserklärung',
                                    'Technische Dokumentation',
                                    'Qualitätsmanagement-Unterlagen',
                                    '10 Jahre aufbewahren'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <FileText class="h-3 w-3 text-emerald-400" ></FileText>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Notifizierte Stellen */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Notifizierte Stellen</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Rolle und Aufgaben</h4>
                                <div class="space-y-3">
                                  <div class="bg-slate-900/50 rounded-lg p-3">
                                    <h5 class="font-semibold text-blue-300 mb-2">Bewertungsaufgaben</h5>
                                    <ul class="space-y-1 text-sm">
                                      {[
                                        'Technische Dokumentation prüfen',
                                        'Qualitätsmanagementsystem bewerten',
                                        'Konformitätszertifikate ausstellen',
                                        'Überwachungsaudits durchführen'
                                      ].map((task, idx) => (
                                        <li key={idx} class="text-slate-300 flex items-center gap-2">
                                          <CheckCircle class="h-2 w-2 text-blue-400" ></CheckCircle>
                                          {task}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div class="bg-slate-900/50 rounded-lg p-3">
                                    <h5 class="font-semibold text-emerald-300 mb-2">Qualifikationen</h5>
                                    <ul class="space-y-1 text-sm">
                                      {[
                                        'Fachkompetenz in KI-Technologien',
                                        'Unabhängigkeit und Unparteilichkeit',
                                        'Akkreditierung nach ISO/IEC 17065',
                                        'Regelmäßige Schulungen'
                                      ].map((qual, idx) => (
                                        <li key={idx} class="text-slate-300 flex items-center gap-2">
                                          <Award class="h-2 w-2 text-emerald-400" ></Award>
                                          {qual}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Verfahren</h4>
                                <div class="space-y-3">
                                  <div class="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                    <div>
                                      <p class="font-semibold text-white text-sm">Antragstellung</p>
                                      <p class="text-xs text-slate-400">Vollständige Unterlagen einreichen</p>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                                    <div>
                                      <p class="font-semibold text-white text-sm">Bewertung</p>
                                      <p class="text-xs text-slate-400">Technische Prüfung und Audit</p>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                                    <div>
                                      <p class="font-semibold text-white text-sm">Zertifizierung</p>
                                      <p class="text-xs text-slate-400">Konformitätszertifikat ausstellen</p>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                                    <div>
                                      <p class="font-semibold text-white text-sm">Überwachung</p>
                                      <p class="text-xs text-slate-400">Jährliche Surveillance-Audits</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Transparenzpflichten Section */}
                <section id="transparenz" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Transparenzpflichten</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* KI-Systeme mit begrenztem Risiko */}
                          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-yellow-300 mb-6">Limited Risk AI-Systeme (Art. 50)</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-yellow-300 mb-3">Betroffene Systeme</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Chatbots und virtuelle Assistenten',
                                    'Emotionserkennungssysteme',
                                    'Biometrische Kategorisierungssysteme',
                                    'KI-Systeme zur Inhaltsgenerierung (Deepfakes)',
                                    'KI-Systeme zur Bilderkennung'
                                  ].map((system, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Eye class="h-3 w-3 text-yellow-400" ></Eye>
                                      {system}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-orange-300 mb-3">Transparenzpflichten</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Nutzer über KI-Interaktion informieren',
                                    'Klare und verständliche Informationen',
                                    'Rechtzeitige Information vor Nutzung',
                                    'KI-generierte Inhalte kennzeichnen',
                                    'Opt-out Möglichkeiten bereitstellen'
                                  ].map((obligation, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Info class="h-3 w-3 text-orange-400" ></Info>
                                      {obligation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Deepfakes und synthetische Inhalte */}
                          <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-red-300 mb-6">Deepfakes & Synthetische Inhalte</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-red-300 mb-3">Audio-Deepfakes</h4>
                                <div class="space-y-2">
                                  <p class="text-sm text-slate-300 mb-3">
                                    KI-generierte oder manipulierte Audioinhalte müssen eindeutig als solche gekennzeichnet werden.
                                  </p>
                                  <ul class="space-y-1 text-xs">
                                    {[
                                      'Maschinenlesbare Kennzeichnung',
                                      'Menschenlesbare Warnung',
                                      'Metadaten-Einbettung',
                                      'Watermarking-Technologien'
                                    ].map((req, idx) => (
                                      <li key={idx} class="text-slate-400 flex items-center gap-2">
                                        <CheckCircle class="h-2 w-2 text-red-400" ></CheckCircle>
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-pink-300 mb-3">Video-Deepfakes</h4>
                                <div class="space-y-2">
                                  <p class="text-sm text-slate-300 mb-3">
                                    Manipulierte oder synthetische Videoinhalte erfordern besondere Kennzeichnung.
                                  </p>
                                  <ul class="space-y-1 text-xs">
                                    {[
                                      'Visuelle Kennzeichnung im Video',
                                      'Blockchain-basierte Verifikation',
                                      'Digitale Signaturen',
                                      'Provenance-Tracking'
                                    ].map((req, idx) => (
                                      <li key={idx} class="text-slate-400 flex items-center gap-2">
                                        <CheckCircle class="h-2 w-2 text-pink-400" ></CheckCircle>
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-purple-300 mb-3">Text-Generierung</h4>
                                <div class="space-y-2">
                                  <p class="text-sm text-slate-300 mb-3">
                                    KI-generierte Texte und Artikel müssen als maschinell erstellt erkennbar sein.
                                  </p>
                                  <ul class="space-y-1 text-xs">
                                    {[
                                      'Disclaimer am Textanfang',
                                      'Strukturierte Daten-Markup',
                                      'API-Header für KI-Inhalte',
                                      'Publishing-Standards einhalten'
                                    ].map((req, idx) => (
                                      <li key={idx} class="text-slate-400 flex items-center gap-2">
                                        <CheckCircle class="h-2 w-2 text-purple-400" ></CheckCircle>
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Best Practices für Transparenz */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Best Practices für Transparenz</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Nutzerinformation</h4>
                                <div class="space-y-3">
                                  {[
                                    {
                                      practice: 'Proaktive Offenlegung',
                                      description: 'Nutzer vor der ersten Interaktion über KI-Einsatz informieren',
                                      implementation: 'Pop-up, Banner oder Disclaimer verwenden'
                                    },
                                    {
                                      practice: 'Verständliche Sprache',
                                      description: 'Technische Details in einfache Sprache übersetzen',
                                      implementation: 'Laienverständliche Erklärungen und Beispiele'
                                    },
                                    {
                                      practice: 'Granulare Kontrolle',
                                      description: 'Nutzer können spezifische KI-Features deaktivieren',
                                      implementation: 'Detaillierte Einstellungsoptionen anbieten'
                                    }
                                  ].map((practice, idx) => (
                                    <div key={idx} class="bg-slate-900/50 rounded-lg p-3">
                                      <h5 class="font-semibold text-blue-300 text-sm mb-1">{practice.practice}</h5>
                                      <p class="text-xs text-slate-300 mb-2">{practice.description}</p>
                                      <p class="text-xs text-slate-400 italic">{practice.implementation}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Technische Umsetzung</h4>
                                <div class="space-y-3">
                                  {[
                                    {
                                      tech: 'Maschinenlesbare Labels',
                                      description: 'Strukturierte Metadaten für automatische Erkennung',
                                      examples: 'JSON-LD, RDFa, Dublin Core'
                                    },
                                    {
                                      tech: 'Digital Watermarking',
                                      description: 'Unsichtbare Kennzeichnung in Medieninhalten',
                                      examples: 'C2PA, Project Origin, Content Authenticity'
                                    },
                                    {
                                      tech: 'Provenance Tracking',
                                      description: 'Nachverfolgung der Entstehungsgeschichte',
                                      examples: 'Blockchain, Hash-Chains, Digital Certificates'
                                    }
                                  ].map((tech, idx) => (
                                    <div key={idx} class="bg-slate-900/50 rounded-lg p-3">
                                      <h5 class="font-semibold text-emerald-300 text-sm mb-1">{tech.tech}</h5>
                                      <p class="text-xs text-slate-300 mb-2">{tech.description}</p>
                                      <p class="text-xs text-slate-400 italic">{tech.examples}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Technical Standards Section */}
                <section id="technische-standards" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Technische Standards & Normen</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* ISO/IEC Standards */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">Harmonisierte Normen für AI Act</h3>
                            <div>
                              {[
                                {
                                  standard: 'ISO/IEC 23053:2022',
                                  title: 'Framework for AI systems using ML',
                                  scope: 'Allgemeiner Rahmen für KI-Systeme',
                                  relevance: 'Grundlage für alle AI Act Compliance',
                                  status: 'Published',
                                  keyAspects: [
                                    'AI system lifecycle management',
                                    'Risk management frameworks',
                                    'Quality assurance processes',
                                    'Documentation requirements',
                                    'Stakeholder identification'
                                  ]
                                },
                                {
                                  standard: 'ISO/IEC 23894:2023',
                                  title: 'AI risk management',
                                  scope: 'Spezifische Risikomanagement-Prozesse',
                                  relevance: 'Hochrisiko-KI Compliance',
                                  status: 'Published',
                                  keyAspects: [
                                    'Risk identification methodologies',
                                    'Risk assessment procedures',
                                    'Risk mitigation strategies',
                                    'Continuous monitoring',
                                    'Risk communication'
                                  ]
                                },
                                {
                                  standard: 'ISO/IEC 25059:2023',
                                  title: 'AI system quality measurement',
                                  scope: 'Qualitätsmessung und -bewertung',
                                  relevance: 'Performance und Robustheit',
                                  status: 'Published',
                                  keyAspects: [
                                    'Quality characteristics definition',
                                    'Measurement frameworks',
                                    'Evaluation methodologies',
                                    'Performance benchmarking',
                                    'Quality reporting'
                                  ]
                                },
                                {
                                  standard: 'ISO/IEC 23090-24:2024',
                                  title: 'AI fairness and bias assessment',
                                  scope: 'Fairness und Bias-Bewertung',
                                  relevance: 'Non-discrimination requirements',
                                  status: 'Draft',
                                  keyAspects: [
                                    'Bias detection methods',
                                    'Fairness metrics definition',
                                    'Assessment procedures',
                                    'Mitigation strategies',
                                    'Monitoring frameworks'
                                  ]
                                }
                              ].map((standard) => (
                                <div key={standard.standard} class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                  <div class="flex items-center justify-between mb-4">
                                    <h4 class="text-lg font-bold text-white">{standard.standard}</h4>
                                    <Badge class=>
                                      {standard.status}
                                    </Badge>
                                  </div>
                                  
                                  <h5 class="font-semibold text-blue-300 mb-2">{standard.title}</h5>
                                  <p class="text-sm text-slate-300 mb-3">{standard.scope}</p>
                                  <p class="text-xs text-slate-400 mb-4">Relevanz: {standard.relevance}</p>
                                  
                                  <div>
                                    <h6 class="text-sm font-semibold text-slate-300 mb-2">Kernaspekte:</h6>
                                    <ul class="space-y-1">
                                      {standard.keyAspects.map((aspect, idx) => (
                                        <li key={idx} class="text-xs text-slate-300 flex items-center gap-2">
                                          <Circle class="h-2 w-2 fill-current" ></Circle>
                                          {aspect}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technical Implementation Guidelines */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Technical Implementation Guidelines</h3>
                            <div>
                              {[
                                {
                                  category: 'Data Governance',
                                  icon: Database,
                                  standards: ['ISO/IEC 25012', 'ISO 8000', 'FAIR Principles'],
                                  requirements: [
                                    'Data quality management systems',
                                    'Data lineage and provenance tracking',
                                    'Bias detection in training data',
                                    'Data minimization principles',
                                    'Privacy-preserving techniques'
                                  ]
                                },
                                {
                                  category: 'Model Development',
                                  icon: BrainCog,
                                  standards: ['MLOps Standards', 'IEEE 2857', 'ISO/IEC 25010'],
                                  requirements: [
                                    'Reproducible training processes',
                                    'Version control for models',
                                    'Automated testing pipelines',
                                    'Performance monitoring',
                                    'Model validation frameworks'
                                  ]
                                },
                                {
                                  category: 'Deployment & Operations',
                                  icon: Server,
                                  standards: ['ISO/IEC 27001', 'NIST AI RMF', 'ISO 9001'],
                                  requirements: [
                                    'Secure deployment practices',
                                    'Runtime monitoring systems',
                                    'Incident response procedures',
                                    'Change management processes',
                                    'Business continuity planning'
                                  ]
                                }
                              ].map((guideline) => {
                                const IconComponent = guideline.icon;
                                return (
                                  <div key={guideline.category} class="bg-slate-900/50 rounded-lg p-4">
                                    <div class="flex items-center gap-3 mb-4">
                                      <IconComponent class="h-5 w-5 text-blue-400" ></IconComponent>
                                      <h4 class="font-semibold text-white">{guideline.category}</h4>
                                    </div>
                                    
                                    <div class="mb-4">
                                      <h5 class="text-sm font-semibold text-slate-300 mb-2">Applicable Standards:</h5>
                                      <div class="flex flex-wrap gap-1">
                                        {guideline.standards.map((standard) => (
                                          <Badge key={standard} variant="outline" class="text-xs">
                                            {standard}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h5 class="text-sm font-semibold text-slate-300 mb-2">Key Requirements:</h5>
                                      <ul class="space-y-1">
                                        {guideline.requirements.map((req, idx) => (
                                          <li key={idx} class="text-xs text-slate-300 flex items-center gap-2">
                                            <Circle class="h-2 w-2 fill-current" ></Circle>
                                            {req}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                );
                              })
                            }
                            </div>
                          </div>

                          {/* Conformity Assessment Procedures */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Konformitätsbewertungsverfahren</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Internal Quality Management (Annex VI)</h4>
                                <div class="space-y-4">
                                  <div class="bg-slate-900/50 rounded-lg p-4">
                                    <h5 class="font-semibold text-emerald-300 mb-2">Applicability</h5>
                                    <p class="text-sm text-slate-300">For high-risk AI systems listed in Annex III, except biometric systems</p>
                                  </div>
                                  
                                  <div class="bg-slate-900/50 rounded-lg p-4">
                                    <h5 class="font-semibold text-blue-300 mb-2">Requirements</h5>
                                    <ul class="space-y-1 text-sm">
                                      {[
                                        'Quality management system implementation',
                                        'Technical documentation preparation',
                                        'Automatic logging system setup',
                                        'EU conformity declaration',
                                        'CE marking application',
                                        'Post-market monitoring system'
                                      ].map((req, idx) => (
                                        <li key={idx} class="text-slate-300 flex items-center gap-2">
                                          <CheckCircle class="h-3 w-3 text-emerald-400" ></CheckCircle>
                                          {req}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Notified Body Assessment (Annex VII)</h4>
                                <div class="space-y-4">
                                  <div class="bg-slate-900/50 rounded-lg p-4">
                                    <h5 class="font-semibold text-orange-300 mb-2">Applicability</h5>
                                    <p class="text-sm text-slate-300">For biometric identification and categorization systems</p>
                                  </div>
                                  
                                  <div class="bg-slate-900/50 rounded-lg p-4">
                                    <h5 class="font-semibold text-purple-300 mb-2">Process</h5>
                                    <ul class="space-y-1 text-sm">
                                      {[
                                        'Technical documentation submission',
                                        'Quality management system audit',
                                        'Design examination by notified body',
                                        'Testing and validation procedures',
                                        'EU type examination certificate',
                                        'Annual surveillance audits'
                                      ].map((step, idx) => (
                                        <li key={idx} class="text-slate-300 flex items-center gap-2">
                                          <AlertTriangle class="h-3 w-3 text-purple-400" ></AlertTriangle>
                                          {step}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* AI Governance Section */}
                <section id="governance" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">AI Governance</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Governance Framework */}
                          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-indigo-300 mb-6">AI Governance Framework</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-indigo-300 mb-3">Strategische Ebene</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'AI-Strategie und -Vision',
                                    'Board-Level Oversight',
                                    'Risikotoleranz definieren',
                                    'Ethische Leitlinien',
                                    'Business Impact Assessment'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Target class="h-3 w-3 text-indigo-400" ></Target>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-purple-300 mb-3">Operative Ebene</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'AI-Governance-Komitee',
                                    'Cross-funktionale Teams',
                                    'Prozesse und Verfahren',
                                    'KPI-Monitoring',
                                    'Incident Management'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Settings class="h-3 w-3 text-purple-400" ></Settings>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-pink-300 mb-3">Technische Ebene</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'MLOps und DevOps',
                                    'Model Lifecycle Management',
                                    'Continuous Monitoring',
                                    'Automated Testing',
                                    'Version Control'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <Code class="h-3 w-3 text-pink-400" ></Code>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Rollen und Verantwortlichkeiten */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Rollen und Verantwortlichkeiten</h3>
                            <div>
                              {[
                                ,
                                {
                                  role: 'AI Ethics Officer',
                                  responsibilities: [
                                    'Ethische Richtlinien entwickeln',
                                    'Bias Detection und Mitigation',
                                    'Fairness Assessments',
                                    'Stakeholder Engagement'
                                  ],
                                  skills: ['Ethik und Philosophie', 'AI Fairness', 'Kommunikation']
                                },
                                {
                                  role: 'AI Risk Manager',
                                  responsibilities: [
                                    'Risikoidentifikation und -bewertung',
                                    'Mitigation Strategies',
                                    'Incident Response',
                                    'Regulatory Reporting'
                                  ],
                                  skills: ['Risk Management', 'Regulatory Compliance', 'Data Analysis']
                                },
                                {
                                  role: 'AI Compliance Manager',
                                  responsibilities: [
                                    'Regulatory Mapping',
                                    'Audit Coordination',
                                    'Documentation Management',
                                    'Training und Awareness'
                                  ],
                                  skills: ['Legal Expertise', 'Process Management', 'Audit Skills']
                                }
                              ].map((role, idx) => (
                                <div key={idx} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-blue-300 mb-3">{role.role}</h4>
                                  <div class="space-y-3">
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Verantwortlichkeiten</h5>
                                      <ul class="space-y-1">
                                        {role.responsibilities.map((resp, ridx) => (
                                          <li key={ridx} class="text-xs text-slate-300 flex items-start gap-2">
                                            <CheckCircle class="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" ></CheckCircle>
                                            {resp}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Schlüssel-Skills</h5>
                                      <div class="flex flex-wrap gap-1">
                                        {role.skills.map((skill, sidx) => (
                                          <Badge key={sidx} variant="outline" class="text-xs px-2 py-1">
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Dokumentation Section */}
                <section id="dokumentation" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Dokumentation</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Technische Dokumentation nach Anhang IV */}
                          <div class="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-green-300 mb-6">Technische Dokumentation (Anhang IV)</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-green-300 mb-3">Allgemeine Informationen</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Name und Kontaktdaten des Anbieters',
                                    'Name und Kontaktdaten des Bevollmächtigten',
                                    'Beschreibung des KI-Systems',
                                    'Zweckbestimmung des Systems',
                                    'EU-Konformitätserklärung'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-start gap-2">
                                      <FileText class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></FileText>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-teal-300 mb-3">Technische Spezifikationen</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Detaillierte Beschreibung der Systemarchitektur',
                                    'Entwicklungsmethodik und -verfahren',
                                    'Verwendete Algorithmen und Techniken',
                                    'Datenquellen und Trainingsverfahren',
                                    'Systemintegration und Schnittstellen'
                                  ].map((item, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-start gap-2">
                                      <Database class="h-3 w-3 text-teal-400 mt-1 flex-shrink-0" ></Database>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Dokumentations-Templates */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Dokumentations-Templates</h3>
                            <div>
                              {[
                                {
                                  template: 'System Overview Document',
                                  description: 'Comprehensive overview of the AI system',
                                  sections: [
                                    'Executive Summary',
                                    'System Architecture',
                                    'Key Components',
                                    'Performance Metrics',
                                    'Risk Assessment'
                                  ]
                                },
                                {
                                  template: 'Data Management Plan',
                                  description: 'Documentation of data handling procedures',
                                  sections: [
                                    'Data Sources',
                                    'Data Quality Measures',
                                    'Privacy Protection',
                                    'Bias Mitigation',
                                    'Data Lifecycle'
                                  ]
                                },
                                {
                                  template: 'Risk Management Report',
                                  description: 'Comprehensive risk analysis and mitigation',
                                  sections: [
                                    'Risk Identification',
                                    'Risk Assessment',
                                    'Mitigation Strategies',
                                    'Monitoring Plan',
                                    'Incident Response'
                                  ]
                                }
                              ].map((template, idx) => (
                                <div key={idx} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-blue-300 mb-2">{template.template}</h4>
                                  <p class="text-sm text-slate-300 mb-3">{template.description}</p>
                                  <ul class="space-y-1">
                                    {template.sections.map((section, sidx) => (
                                      <li key={sidx} class="text-xs text-slate-400 flex items-center gap-2">
                                        <CheckCircle class="h-2 w-2 text-emerald-400" ></CheckCircle>
                                        {section}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Bußgelder Section */}
                <section id="bussgelder" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Bußgelder</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Bußgeld-Kategorien */}
                          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-red-300 mb-6">Bußgeld-Kategorien nach Art. 99</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-red-300 mb-3">Höchste Stufe</h4>
                                <div class="text-center mb-4">
                                  <div class="text-2xl font-bold text-red-400">€35 Mio</div>
                                  <div class="text-sm text-slate-300">oder 7% des Jahresumsatzes</div>
                                </div>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Verbotene KI-Praktiken (Art. 5)',
                                    'Nichteinhaltung Datenqualität',
                                    'Mangelhafte menschliche Aufsicht'
                                  ].map((violation, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-start gap-2">
                                      <AlertTriangle class="h-3 w-3 text-red-400 mt-1 flex-shrink-0" ></AlertTriangle>
                                      {violation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-orange-300 mb-3">Mittlere Stufe</h4>
                                <div class="text-center mb-4">
                                  <div class="text-2xl font-bold text-orange-400">€15 Mio</div>
                                  <div class="text-sm text-slate-300">oder 3% des Jahresumsatzes</div>
                                </div>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Verstöße gegen Hochrisiko-Anforderungen',
                                    'Mangelhafte CE-Kennzeichnung',
                                    'Unzureichende Dokumentation'
                                  ].map((violation, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-start gap-2">
                                      <AlertCircle class="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" ></AlertCircle>
                                      {violation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-yellow-300 mb-3">Niedrigste Stufe</h4>
                                <div class="text-center mb-4">
                                  <div class="text-2xl font-bold text-yellow-400">€7,5 Mio</div>
                                  <div class="text-sm text-slate-300">oder 1,5% des Jahresumsatzes</div>
                                </div>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Verstöße gegen Transparenzpflichten',
                                    'Unzureichende Kennzeichnung',
                                    'Mangelhafte Kooperation'
                                  ].map((violation, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-start gap-2">
                                      <Info class="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" ></Info>
                                      {violation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Enforcement und Marktüberwachung */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Enforcement und Marktüberwachung</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Zuständige Behörden</h4>
                                <div class="space-y-3">
                                  {[
                                    {
                                      authority: 'Nationale Marktüberwachungsbehörden',
                                      responsibilities: [
                                        'Marktüberwachung und Kontrollen',
                                        'Bußgeldverfahren einleiten',
                                        'Produktrückrufe anordnen',
                                        'Verkaufsverbote verhängen'
                                      ]
                                    },
                                    {
                                      authority: 'Europäisches AI Office',
                                      responsibilities: [
                                        'Koordination zwischen Mitgliedstaaten',
                                        'Harmonisierte Standards',
                                        'Guidance Documents',
                                        'Internationale Kooperation'
                                      ]
                                    }
                                  ].map((auth, idx) => (
                                    <div key={idx} class="bg-slate-900/50 rounded-lg p-3">
                                      <h5 class="font-semibold text-blue-300 text-sm mb-2">{auth.authority}</h5>
                                      <ul class="space-y-1">
                                        {auth.responsibilities.map((resp, ridx) => (
                                          <li key={ridx} class="text-xs text-slate-400 flex items-start gap-2">
                                            <CheckCircle class="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" ></CheckCircle>
                                            {resp}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Compliance-Maßnahmen</h4>
                                <div class="space-y-3">
                                  {[
                                    {
                                      measure: 'Proaktive Compliance',
                                      description: 'Vorbeugende Maßnahmen implementieren',
                                      actions: ['Regular Compliance Audits', 'Staff Training', 'Process Documentation']
                                    },
                                    {
                                      measure: 'Incident Response',
                                      description: 'Schnelle Reaktion auf Compliance-Verstöße',
                                      actions: ['Sofortige Korrekturmaßnahmen', 'Behörden informieren', 'Root Cause Analysis']
                                    },
                                    {
                                      measure: 'Legal Defense',
                                      description: 'Vorbereitung auf Enforcement-Verfahren',
                                      actions: ['Legal Counsel', 'Evidence Preservation', 'Mitigation Strategies']
                                    }
                                  ].map((measure, idx) => (
                                    <div key={idx} class="bg-slate-900/50 rounded-lg p-3">
                                      <h5 class="font-semibold text-emerald-300 text-sm mb-1">{measure.measure}</h5>
                                      <p class="text-xs text-slate-300 mb-2">{measure.description}</p>
                                      <ul class="space-y-1">
                                        {measure.actions.map((action, aidx) => (
                                          <li key={aidx} class="text-xs text-slate-400 flex items-center gap-2">
                                            <CheckCircle class="h-2 w-2 text-emerald-400" ></CheckCircle>
                                            {action}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Innovation & Sandboxes Section */}
                <section id="innovation" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Innovation & Sandboxes</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* AI Regulatory Sandboxes */}
                          <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-cyan-300 mb-6">AI Regulatory Sandboxes (Art. 57)</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-cyan-300 mb-3">Zweck und Vorteile</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Kontrollierte Testumgebung für innovative KI',
                                    'Reduzierte regulatorische Unsicherheit',
                                    'Enge Zusammenarbeit mit Aufsichtsbehörden',
                                    'Proof-of-Concept für neue KI-Anwendungen',
                                    'Learning und Best Practice Development'
                                  ].map((benefit, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-start gap-2">
                                      <Lightbulb class="h-3 w-3 text-cyan-400 mt-1 flex-shrink-0" ></Lightbulb>
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-blue-300 mb-3">Teilnahme-Voraussetzungen</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'Innovative KI-Systeme entwickeln',
                                    'Hohe Komplexität oder Neuartigkeit',
                                    'Potenzial für Marktreife',
                                    'Bereitschaft zur Kooperation',
                                    'Ausreichende Ressourcen für Tests'
                                  ].map((requirement, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-start gap-2">
                                      <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                      {requirement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Innovation Support Measures */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Unterstützungsmaßnahmen für Innovation</h3>
                            <div>
                              {[
                                {
                                  measure: 'Codes of Practice',
                                  description: 'Freiwillige Verhaltenskodizes für innovative Ansätze',
                                  features: [
                                    'Industry-led Standards',
                                    'Best Practice Sharing',
                                    'Continuous Improvement',
                                    'Market Recognition'
                                  ]
                                },
                                {
                                  measure: 'Testing Framework',
                                  description: 'Strukturierte Testverfahren für neue KI-Systeme',
                                  features: [
                                    'Standardized Benchmarks',
                                    'Safety Testing Protocols',
                                    'Performance Metrics',
                                    'Risk Assessment Tools'
                                  ]
                                },
                                {
                                  measure: 'Innovation Hubs',
                                  description: 'Zentren für KI-Innovation und Compliance',
                                  features: [
                                    'Expert Consultation',
                                    'Regulatory Guidance',
                                    'Technology Transfer',
                                    'Startup Support'
                                  ]
                                }
                              ].map((measure, idx) => (
                                <div key={idx} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-emerald-300 mb-2">{measure.measure}</h4>
                                  <p class="text-sm text-slate-300 mb-3">{measure.description}</p>
                                  <ul class="space-y-1">
                                    {measure.features.map((feature, fidx) => (
                                      <li key={fidx} class="text-xs text-slate-400 flex items-center gap-2">
                                        <Sparkles class="h-2 w-2 text-emerald-400" ></Sparkles>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Zertifizierung Section */}
                <section id="zertifizierung" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Zertifizierung</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Zertifizierungsprozess */}
                          <div class="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-purple-300 mb-6">Zertifizierungsprozess</h3>
                            <div class="space-y-4">
                              {[
                                {
                                  step: 1,
                                  title: 'Vorbereitung',
                                  description: 'Vollständige Dokumentation und interne Audits',
                                  duration: '2-4 Wochen',
                                  activities: ['Gap Analysis', 'Dokumentation vervollständigen', 'Interne Reviews', 'Team Training']
                                },
                                {
                                  step: 2,
                                  title: 'Antragstellung',
                                  description: 'Formale Einreichung bei notifizierter Stelle',
                                  duration: '1-2 Wochen',
                                  activities: ['Notified Body auswählen', 'Antragsformulare', 'Unterlagen einreichen', 'Erstbewertung']
                                },
                                {
                                  step: 3,
                                  title: 'Assessment',
                                  description: 'Technische Prüfung und Audit vor Ort',
                                  duration: '4-8 Wochen',
                                  activities: ['Dokumentenprüfung', 'Site Audit', 'Technical Testing', 'Compliance Verification']
                                },
                                {
                                  step: 4,
                                  title: 'Zertifikat',
                                  description: 'Ausstellung des Konformitätszertifikats',
                                  duration: '1-2 Wochen',
                                  activities: ['Final Report', 'Certificate Issuance', 'CE Marking', 'Market Entry']
                                }
                              ].map((step, idx) => (
                                <div key={idx} class="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                                    {step.step}
                                  </div>
                                  <div class="flex-1">
                                    <div class="flex items-center justify-between mb-2">
                                      <h4 class="font-semibold text-white">{step.title}</h4>
                                      <Badge variant="outline" class="text-xs">{step.duration}</Badge>
                                    </div>
                                    <p class="text-sm text-slate-300 mb-3">{step.description}</p>
                                    <div class="flex flex-wrap gap-1">
                                      {step.activities.map((activity, aidx) => (
                                        <Badge key={aidx} variant="secondary" class="text-xs px-2 py-1">
                                          {activity}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Zertifizierungs-Optionen */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Zertifizierungs-Optionen</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">AI Act Compliance Zertifizierung</h4>
                                <div class="space-y-3">
                                  {[
                                    {
                                      type: 'Hochrisiko-System Zertifizierung',
                                      scope: 'Vollständige AI Act Compliance für Hochrisiko-KI',
                                      standards: ['AI Act Art. 8-15', 'Anhang III/IV', 'ISO/IEC 23053'],
                                      validity: '3 Jahre'
                                    },
                                    {
                                      type: 'General Purpose AI Zertifizierung',
                                      scope: 'Spezielle Anforderungen für Foundation Models',
                                      standards: ['AI Act Art. 51', 'Systemic Risk Assessment', 'Safety Measures'],
                                      validity: '2 Jahre'
                                    }
                                  ].map((cert, idx) => (
                                    <div key={idx} class="bg-slate-900/50 rounded-lg p-3">
                                      <div class="flex items-center justify-between mb-2">
                                        <h5 class="font-semibold text-blue-300 text-sm">{cert.type}</h5>
                                        <span class="text-xs text-slate-400">{cert.validity}</span>
                                      </div>
                                      <p class="text-xs text-slate-300 mb-2">{cert.scope}</p>
                                      <div class="flex flex-wrap gap-1">
                                        {cert.standards.map((standard, sidx) => (
                                          <Badge key={sidx} variant="outline" class="text-xs">
                                            {standard}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Zusätzliche Zertifizierungen</h4>
                                <div class="space-y-3">
                                  {[
                                    {
                                      cert: 'ISO/IEC 27001',
                                      purpose: 'Information Security Management',
                                      benefit: 'Credibility für Cybersecurity-Maßnahmen'
                                    },
                                    {
                                      cert: 'ISO/IEC 23053',
                                      purpose: 'AI Systems Framework',
                                      benefit: 'Internationale AI-Standards Compliance'
                                    },
                                    {
                                      cert: 'SOC 2 Type II',
                                      purpose: 'Service Organization Controls',
                                      benefit: 'Vertrauen bei B2B-Kunden'
                                    },
                                    {
                                      cert: 'GDPR Compliance',
                                      purpose: 'Data Protection Compliance',
                                      benefit: 'EU-weite Datenschutz-Compliance'
                                    }
                                  ].map((cert, idx) => (
                                    <div key={idx} class="bg-slate-900/50 rounded-lg p-3">
                                      <h5 class="font-semibold text-emerald-300 text-sm mb-1">{cert.cert}</h5>
                                      <p class="text-xs text-slate-300 mb-1">{cert.purpose}</p>
                                      <p class="text-xs text-slate-400 italic">{cert.benefit}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Ressourcen Section */}
                <section id="ressourcen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Ressourcen</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Offizielle Ressourcen */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">Offizielle Ressourcen</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-blue-300 mb-3">EU-Quellen</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'EU AI Act (Regulation 2024/1689)',
                                    'AI Office (European Commission)',
                                    'ENISA AI Guidelines',
                                    'European AI Alliance',
                                    'AI Standardization Roadmap'
                                  ].map((resource, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <ExternalLink class="h-3 w-3 text-blue-400" ></ExternalLink>
                                      {resource}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-semibold text-indigo-300 mb-3">Standards & Guidelines</h4>
                                <ul class="space-y-2 text-sm">
                                  {[
                                    'ISO/IEC 23053:2022 (AI Framework)',
                                    'ISO/IEC 23894:2023 (Risk Management)',
                                    'CEN-CENELEC Standards',
                                    'IEEE AI Ethics Standards',
                                    'NIST AI Risk Management Framework'
                                  ].map((standard, idx) => (
                                    <li key={idx} class="text-slate-300 flex items-center gap-2">
                                      <FileText class="h-3 w-3 text-indigo-400" ></FileText>
                                      {standard}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Tools & Templates */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Tools & Templates</h3>
                            <div>
                              {[
                                {
                                  category: 'Assessment Tools',
                                  tools: [
                                    'AI Act Self-Assessment',
                                    'Risk Classification Tool',
                                    'Compliance Checklist',
                                    'Gap Analysis Template'
                                  ]
                                },
                                {
                                  category: 'Documentation Templates',
                                  tools: [
                                    'Technical Documentation',
                                    'Risk Management Plan',
                                    'Data Management Plan',
                                    'EU Declaration of Conformity'
                                  ]
                                },
                                {
                                  category: 'Implementation Guides',
                                  tools: [
                                    'Hochrisiko Implementation',
                                    'Transparency Requirements',
                                    'CE Marking Guide',
                                    'Audit Preparation Checklist'
                                  ]
                                }
                              ].map((category, idx) => (
                                <div key={idx} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-emerald-300 mb-3">{category.category}</h4>
                                  <ul class="space-y-2">
                                    {category.tools.map((tool, tidx) => (
                                      <li key={tidx} class="text-sm text-slate-300 flex items-center gap-2">
                                        <Download class="h-3 w-3 text-emerald-400" ></Download>
                                        {tool}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>
            </div>
          </div>
        </div>
      </div>

      <Footer ></Footer>
    </div>`
};