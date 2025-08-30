export default {
  route: '/compliance/tisax',
  title: 'TISAX',
  description: 'Der Standard für Informationssicherheit in der Automobilindustrie. 
                Basierend auf VDA ISM und ISO 27001 - entwickelt für die spezifischen 
     ',
  content: `) => window.removeEventListener('scroll', handleScroll);
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
                <Car class="h-3 w-3 mr-1" ></Car>
                TISAX Guide
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
                  <Car class="h-8 w-8 text-white" ></Car>
                </div>
                <div>
                  <h1>TISAX</h1>
                  <p class="text-xl text-blue-400">Trusted Information Security Assessment eXchange</p>
                </div>
              </div>
              
              <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                Der Standard für Informationssicherheit in der Automobilindustrie. 
                Basierend auf VDA ISM und ISO 27001 - entwickelt für die spezifischen 
                Anforderungen der automotive supply chain.
              </p>
              
              <div class="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" class="bg-blue-500/10 border-blue-500/20 text-blue-300">
                  <Factory class="h-4 w-4 mr-2" ></Factory>
                  VDA Standard
                </Badge>
                <Badge variant="outline" class="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  <Globe class="h-4 w-4 mr-2" ></Globe>
                  Global anerkannt
                </Badge>
                <Badge variant="outline" class="bg-purple-500/10 border-purple-500/20 text-purple-300">
                  <Truck class="h-4 w-4 mr-2" ></Truck>
                  Supply Chain fokussiert
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
                  VDA ISM Framework
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
                      <CounterAnimation value={3} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Assessment Level</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-emerald-400 mb-2">
                      <CounterAnimation value={103} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Control Objectives</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-purple-400 mb-2">
                      <CounterAnimation value={2500} suffix="+" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Teilnehmer</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-orange-400 mb-2">
                      <CounterAnimation value={3} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Jahre Gültigkeit</div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Overview */}
              <Card class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <CardContent class="p-6">
                  <h3 class="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                  <div class="space-y-3">
                    {[
                      'VDA ISM Standard und Assessment Level',
                      'Automotive-spezifische Control Objectives',
                      'TISAX Assessment Prozess im Detail',
                      'Supply Chain Security Requirements',
                      'Exchange Portal und Teilnehmertypen',
                      'Implementation Roadmap für automotive industry'
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
                      VDA ISM Catalogue
                    </Button>
                    <Button variant="outline" size="sm" class="w-full justify-start">
                      <FileText class="h-4 w-4 mr-2" ></FileText>
                      TISAX Handbook
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
            <div ref={contentRef}>
              <Tabs value={activeSection}>
                <TabsList class="hidden" ></TabsList>
                
                {/* Overview Section */}
                <TabsContent value="overview" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">TISAX Überblick</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>
                        
                        <div class="prose prose-invert prose-slate max-w-none">
                          <p class="text-lg text-slate-300 leading-relaxed mb-6">
                            TISAX (Trusted Information Security Assessment eXchange) ist der führende Standard 
                            für Informationssicherheit in der Automobilindustrie. Entwickelt vom VDA 
                            (Verband der Automobilindustrie) zur Harmonisierung von Sicherheitsanforderungen 
                            in der automotive supply chain.
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
                                  <span>Harmonisierung der Sicherheitsanforderungen</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Reduktion von Assessment-Redundanzen</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Vertrauen in der automotive supply chain</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Schutz kritischer Fahrzeugdaten</span>
                                </li>
                              </ul>
                            </div>

                            <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                              <h3 class="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                                <Building2 class="h-5 w-5" ></Building2>
                                Teilnehmer
                              </h3>
                              <ul class="space-y-2 text-slate-300">
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>OEMs (BMW, Mercedes, Audi, VW, etc.)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Tier-1, Tier-2, Tier-3 Suppliers</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Engineering Service Provider</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>IT Service Provider</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-4">TISAX vs. andere Standards</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr class="border-b border-slate-600">
                                    <td class="p-3 font-semibold text-white">Aspekt</td>
                                    <td class="p-3 font-semibold text-blue-300 text-center">TISAX</td>
                                    <td class="p-3 font-semibold text-emerald-300 text-center">ISO 27001</td>
                                    <td class="p-3 font-semibold text-purple-300 text-center">SOC 2</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Branchenfokus</td>
                                    <td class="p-3 text-center">Automotive</td>
                                    <td class="p-3 text-center">Universal</td>
                                    <td class="p-3 text-center">SaaS/Cloud</td>
                                  </tr>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Assessment Level</td>
                                    <td class="p-3 text-center">3 Level (AL1-AL3)</td>
                                    <td class="p-3 text-center">Binary</td>
                                    <td class="p-3 text-center">Type I/II</td>
                                  </tr>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Gültigkeit</td>
                                    <td class="p-3 text-center">3 Jahre</td>
                                    <td class="p-3 text-center">3 Jahre</td>
                                    <td class="p-3 text-center">1 Jahr</td>
                                  </tr>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Exchange Portal</td>
                                    <td class="p-3 text-center">✓</td>
                                    <td class="p-3 text-center">✗</td>
                                    <td class="p-3 text-center">✗</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Assessment Levels Section */}
                <TabsContent value="assessment-levels" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Assessment Level</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 class="text-lg font-bold text-blue-300 mb-3">TISAX Assessment Level Konzept</h3>
                          <p class="text-slate-300 mb-4">
                            TISAX verwendet drei Assessment Level (AL1, AL2, AL3), die unterschiedliche 
                            Schutzbedarfe und Sicherheitsanforderungen abbilden. Jedes Level baut auf dem 
                            vorherigen auf und erhöht die Anforderungen entsprechend dem Schutzbedarf der Daten.
                          </p>
                          <div class="relative h-48 flex items-end justify-center">
                            <svg class="w-full h-full" viewBox="0 0 400 150">
                              {/* Pyramid for AL levels */}
                              <path d="M200 30 L300 130 L100 130 Z" fill="url(#alPyramidGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"></path>
                              
                              {/* Level separators */}
                              <line x1="133" y1="90" x2="267" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></line>
                              <line x1="166" y1="110" x2="234" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></line>
                              
                              {/* Labels */}
                              <text x="200" y="70" textAnchor="middle" fill="#ef4444" class="text-sm font-semibold">AL3</text>
                              <text x="200" y="105" textAnchor="middle" fill="#f97316" class="text-sm font-semibold">AL2</text>
                              <text x="200" y="125" textAnchor="middle" fill="#22c55e" class="text-sm font-semibold">AL1</text>
                              
                              {/* Control count labels */}
                              <text x="320" y="70" fill="#ef4444" class="text-xs">103 Controls</text>
                              <text x="320" y="105" fill="#f97316" class="text-xs">67 Controls</text>
                              <text x="320" y="125" fill="#22c55e" class="text-xs">45 Controls</text>
                              
                              {/* Gradient Definition */}
                              <defs>
                                <linearGradient id="alPyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6"></stop>
                                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.4"></stop>
                                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>

                        <div class="space-y-6">
                          {assessmentLevels.map((level, index) => {
                            const IconComponent = level.icon;
                            const isExpanded = expandedLevel[level.level];
                            
                            return (
                              <motion.div
                                key={level.level}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                      <div class="flex items-center gap-3 mb-1">
                                        <h3 class="text-lg font-bold text-white">{level.level}</h3>
                                        <Badge variant="outline" class="text-xs">
                                          {level.controlObjectives} Controls
                                        </Badge>
                                      </div>
                                      <h4 class="text-md font-semibold text-blue-300">{level.title}</h4>
                                      <p class="text-slate-400 text-sm">{level.description}</p>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-3">
                                    <Badge class="bg-emerald-500/20 text-emerald-300 text-xs">
                                      {level.costs}
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
                                          <h5 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <CheckCircle class="h-4 w-4 text-blue-400" ></CheckCircle>
                                            Charakteristika
                                          </h5>
                                          <ul class="space-y-2">
                                            {level.characteristics.map((char, idx) => (
                                              <li key={idx} class="flex items-start gap-2">
                                                <Circle class="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" ></Circle>
                                                <span class="text-xs text-slate-300">{char}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h5 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <Car class="h-4 w-4 text-emerald-400" ></Car>
                                            Typische Use Cases
                                          </h5>
                                          <ul class="space-y-2">
                                            {level.typicalUseCase.map((useCase, idx) => (
                                              <li key={idx} class="flex items-start gap-2">
                                                <Circle class="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" ></Circle>
                                                <span class="text-xs text-slate-300">{useCase}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h5 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <Clock class="h-4 w-4 text-purple-400" ></Clock>
                                            Implementation
                                          </h5>
                                          <div class="space-y-2 text-xs">
                                            <div class="bg-slate-800/50 rounded p-2">
                                              <div class="text-white font-medium">Aufwand:</div>
                                              <div class="text-slate-300">{level.implementationEffort}</div>
                                            </div>
                                            <div class="bg-slate-800/50 rounded p-2">
                                              <div class="text-white font-medium">Kosten:</div>
                                              <div class="text-slate-300">{level.costs}</div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div>
                                          <h5 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <Target class="h-4 w-4 text-orange-400" ></Target>
                                            Controls
                                          </h5>
                                          <div class="bg-slate-800/50 rounded p-3">
                                            <div class="text-center">
                                              <div class="text-2xl font-bold text-orange-400">{level.controlObjectives}</div>
                                              <div class="text-xs text-slate-400">Control Objectives</div>
                                            </div>
                                          </div>
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
                </TabsContent>

                {/* Control Objectives Section */}
                <TabsContent value="control-objectives" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Control Objectives - VDA ISM Framework</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Control Framework Overview */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">VDA ISM Control Framework Structure</h3>
                            <div>
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4">Basiert auf bewährten Standards</h4>
                                <ul class="space-y-3">
                                  {[
                                    'ISO/IEC 27001:2013 als Grundlage',
                                    'Automotive-spezifische Erweiterungen',
                                    'VDA-spezifische Anforderungen',
                                    'Supply Chain Security Focus',
                                    'OEM-Supplier Relationship Management'
                                  ].map((item, idx) => (
                                    <li key={idx} class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      <span class="text-sm text-slate-300">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4">Control-Gruppen Übersicht</h4>
                                <div class="space-y-3">
                                  {[
                                    { name: 'Information Security Management', count: '12 Controls' },
                                    { name: 'Human Resource Security', count: '8 Controls' },
                                    { name: 'Asset Management', count: '9 Controls' },
                                    { name: 'Access Control', count: '18 Controls' },
                                    { name: 'Cryptography', count: '2 Controls' },
                                    { name: 'Physical Security', count: '15 Controls' },
                                    { name: 'Operations Security', count: '21 Controls' },
                                    { name: 'Communications Security', count: '7 Controls' },
                                    { name: 'Acquisition & Development', count: '11 Controls' }
                                  ].map((group) => (
                                    <div key={group.name} class="flex justify-between items-center bg-slate-900/50 rounded p-2">
                                      <span class="text-sm text-slate-300">{group.name}</span>
                                      <Badge variant="outline" class="text-xs">{group.count}</Badge>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Detailed Control Groups */}
                          <div class="space-y-6">
                            {controlObjectiveGroups.map((group, index) => {
                              const IconComponent = group.icon;
                              const isExpanded = expandedLevel[group.code];
                              
                              return (
                                <motion.div
                                  key={group.code}
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
                                        <h3 class="text-lg font-bold text-white">{group.group}</h3>
                                        <p class="text-slate-400 text-sm">{group.description}</p>
                                      </div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                      <Badge variant="outline" class="text-xs">
                                        {group.objectives.length} Objectives
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
                                        {group.objectives.map((objective) => (
                                          <div key={objective.id} class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                            <div class="flex items-center gap-3 mb-4">
                                              <Badge class="bg-blue-500/20 text-blue-300">{objective.id}</Badge>
                                              <h4 class="text-lg font-bold text-white">{objective.title}</h4>
                                            </div>
                                            
                                            <p class="text-slate-300 mb-6 text-sm italic">{objective.description}</p>
                                            
                                            <div>
                                              <div>
                                                <h5 class="text-sm font-semibold text-blue-300 mb-3">Requirements:</h5>
                                                <ul class="space-y-2">
                                                  {objective.requirements.map((req, idx) => (
                                                    <li key={idx} class="flex items-start gap-2">
                                                      <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                                      <span class="text-xs text-slate-300">{req}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                              
                                              <div>
                                                <h5 class="text-sm font-semibold text-emerald-300 mb-3">Evidence:</h5>
                                                <ul class="space-y-2">
                                                  {objective.evidence.map((evidence, idx) => (
                                                    <li key={idx} class="flex items-start gap-2">
                                                      <FileText class="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" ></FileText>
                                                      <span class="text-xs text-slate-300">{evidence}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                              
                                              <div>
                                                <h5 class="text-sm font-semibold text-orange-300 mb-3">Automotive Specific:</h5>
                                                <ul class="space-y-2">
                                                  {objective.automotiveSpecific.map((specific, idx) => (
                                                    <li key={idx} class="flex items-start gap-2">
                                                      <Car class="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" ></Car>
                                                      <span class="text-xs text-slate-300">{specific}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Implementation Section */}
                <TabsContent value="implementation" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">TISAX Implementation Roadmap</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Implementation Overview */}
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-purple-300 mb-4">Automotive-Specific Implementation Approach</h3>
                            <p class="text-slate-300 mb-4">
                              TISAX Implementation erfordert ein tiefes Verständnis der automotive supply chain, 
                              OEM-spezifischer Anforderungen und der besonderen Herausforderungen der Fahrzeugentwicklung.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-purple-400">6-18 Monate</div>
                                <div class="text-sm text-slate-400">Typische Implementierungsdauer</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-pink-400">6 Phasen</div>
                                <div class="text-sm text-slate-400">Strukturierter Ansatz</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-indigo-400">€15k-200k</div>
                                <div class="text-sm text-slate-400">Investment je nach AL</div>
                              </div>
                            </div>
                          </div>

                          {/* Implementation Phases */}
                          <div class="space-y-6">
                            {implementationFramework.map((phase, index) => {
                              const IconComponent = phase.icon;
                              return (
                                <motion.div
                                  key={phase.phase}
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
                                        <h4 class="text-lg font-bold text-white">{phase.phase}</h4>
                                        <Badge variant="outline" class="text-xs">{phase.duration}</Badge>
                                      </div>
                                      
                                      <div>
                                        <div>
                                          <h5 class="text-sm font-semibold text-slate-300 mb-3">Objectives:</h5>
                                          <ul class="space-y-2">
                                            {phase.objectives.map((objective, idx) => (
                                              <li key={idx} class="flex items-start gap-2">
                                                <input 
                                                  type="checkbox" 
                                                  id=objective-${index}-${idx}
                                                  checked={checkedItems[`objective-${index}-${idx}`] || false}
                                                 -${idx}`)}
                                                  class="mt-1 text-blue-500"
                                                />
                                                <label 
                                                  for=objective-${index}-${idx}
                                                  class={cn(
                                                    "text-sm text-slate-300 cursor-pointer",
                                                    checkedItems[`objective-${index}-${idx}`] && "line-through opacity-60"
                                                  )}
                                                >
                                                  {objective}
                                                </label>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h5 class="text-sm font-semibold text-slate-300 mb-3">Deliverables:</h5>
                                          <div class="flex flex-wrap gap-2">
                                            {phase.deliverables.map((deliverable) => (
                                              <Badge key={deliverable} variant="outline" class="text-xs">
                                                {deliverable}
                                              </Badge>
                                            ))}
                                          </div>
                                        </div>
                                        
                                        <div>
                                          <h5 class="text-sm font-semibold text-slate-300 mb-3">Automotive Considerations:</h5>
                                          <ul class="space-y-1">
                                            {phase.automotiveConsiderations.map((consideration, idx) => (
                                              <li key={idx} class="text-xs text-slate-400 flex items-center gap-2">
                                                <Car class="h-3 w-3 text-blue-400" ></Car>
                                                {consideration}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* VDA ISM Standard Section */}
                <TabsContent value="vda-ism" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">VDA ISM Standard</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Was ist VDA ISM?</h3>
                            <p class="text-slate-300 mb-4">
                              Der VDA Information Security Management (ISM) Standard ist das Fundament von TISAX. 
                              Entwickelt vom Verband der Automobilindustrie (VDA) in Zusammenarbeit mit der 
                              ENX Association, definiert er spezifische Sicherheitsanforderungen für die 
                              Automobilindustrie.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-2">Basiert auf</h4>
                                <ul class="space-y-1 text-sm text-slate-300">
                                  <li>• ISO/IEC 27001:2013</li>
                                  <li>• ISO/IEC 27002:2013</li>
                                  <li>• Automotive-spezifische Anforderungen</li>
                                </ul>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-2">Erweitert um</h4>
                                <ul class="space-y-1 text-sm text-slate-300">
                                  <li>• Supply Chain Requirements</li>
                                  <li>• OEM-Supplier Relationships</li>
                                  <li>• Automotive Data Classification</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-2 bg-blue-500/20 rounded-lg">
                                    <FileText class="h-5 w-5 text-blue-400" ></FileText>
                                  </div>
                                  <h4 class="font-bold text-white">VDA ISM Catalogue</h4>
                                </div>
                                <p class="text-sm text-slate-300 mb-4">
                                  Der vollständige Katalog aller Control Objectives mit detaillierten 
                                  Anforderungen und Implementierungshinweisen.
                                </p>
                                <div class="space-y-2 text-xs">
                                  <div class="flex justify-between">
                                    <span class="text-slate-400">Version:</span>
                                    <span class="text-white">5.0.1</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-400">Seiten:</span>
                                    <span class="text-white">200+</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-400">Sprachen:</span>
                                    <span class="text-white">DE, EN</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-2 bg-emerald-500/20 rounded-lg">
                                    <Building2 class="h-5 w-5 text-emerald-400" ></Building2>
                                  </div>
                                  <h4 class="font-bold text-white">Governance Model</h4>
                                </div>
                                <p class="text-sm text-slate-300 mb-4">
                                  Strukturierte Governance mit klaren Rollen und Verantwortlichkeiten 
                                  für alle Stakeholder in der automotive supply chain.
                                </p>
                                <div class="space-y-2">
                                  <div class="text-xs">
                                    <div class="text-slate-400">VDA Working Group ISM</div>
                                    <div class="text-slate-400">ENX Association</div>
                                    <div class="text-slate-400">OEM Security Officers</div>
                                    <div class="text-slate-400">Supplier Representatives</div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-2 bg-purple-500/20 rounded-lg">
                                    <Target class="h-5 w-5 text-purple-400" ></Target>
                                  </div>
                                  <h4 class="font-bold text-white">Assessment Scope</h4>
                                </div>
                                <p class="text-sm text-slate-300 mb-4">
                                  Flexible Scope-Definition je nach Geschäftsanforderungen und 
                                  Datenklassifizierung der automotive partner.
                                </p>
                                <div class="space-y-1 text-xs text-slate-400">
                                  <div>• Information Processing</div>
                                  <div>• Physical Locations</div>
                                  <div>• Service Delivery</div>
                                  <div>• Third-Party Management</div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">VDA ISM Control Categories</h3>
                            <div>
                              {[
                                { code: 'A.5', name: 'Information Security Policies', controls: 2, color: 'blue' },
                                { code: 'A.6', name: 'Organization of Information Security', controls: 7, color: 'emerald' },
                                { code: 'A.7', name: 'Human Resource Security', controls: 6, color: 'purple' },
                                { code: 'A.8', name: 'Asset Management', controls: 10, color: 'orange' },
                                { code: 'A.9', name: 'Access Control', controls: 14, color: 'red' },
                                { code: 'A.10', name: 'Cryptography', controls: 2, color: 'cyan' },
                                { code: 'A.11', name: 'Physical and Environmental Security', controls: 15, color: 'yellow' },
                                { code: 'A.12', name: 'Operations Security', controls: 21, color: 'green' },
                                { code: 'A.13', name: 'Communications Security', controls: 7, color: 'pink' },
                                { code: 'A.14', name: 'System Acquisition, Development, Maintenance', controls: 13, color: 'indigo' },
                                { code: 'A.15', name: 'Supplier Relationships', controls: 2, color: 'teal' },
                                { code: 'A.16', name: 'Information Security Incident Management', controls: 7, color: 'rose' },
                                { code: 'A.17', name: 'Business Continuity Management', controls: 4, color: 'violet' },
                                { code: 'A.18', name: 'Compliance', controls: 3, color: 'amber' }
                              ].map((category) => (
                                <div key={category.code} class="bg-slate-900/50 rounded-lg p-3 border border-slate-700">
                                  <div class="flex items-center justify-between mb-2">
                                    <Badge class=bg-${category.color}-500/20 text-${category.color}-300 text-xs>
                                      {category.code}
                                    </Badge>
                                    <span class="text-xs text-slate-400">{category.controls} Controls</span>
                                  </div>
                                  <div class="text-sm font-medium text-white">{category.name}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Protection Needs Section */}
                <TabsContent value="protection-needs" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Protection Needs</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-shield-500/10 to-lock-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Datenklassifizierung in der Automotive Industry</h3>
                            <p class="text-slate-300 mb-4">
                              Protection Needs definieren den erforderlichen Schutzbedarf für verschiedene 
                              Kategorien von automotive data. Diese Klassifizierung bestimmt das notwendige 
                              Assessment Level und die Sicherheitsmaßnahmen.
                            </p>
                          </div>

                          <div class="grid gap-6">
                            {[
                              ,
                              ,
                              
                            ].map((protectionLevel, index) => {
                              const IconComponent = protectionLevel.icon;
                              return (
                                <motion.div
                                  key={protectionLevel.level}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
                                >
                                  <div class="p-6">
                                    <div class="flex items-center gap-4 mb-4">
                                      <div class=>
                                        <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                      </div>
                                      <div>
                                        <h4 class="text-lg font-bold text-white">{protectionLevel.level}</h4>
                                        <p class="text-slate-400 text-sm">{protectionLevel.description}</p>
                                      </div>
                                    </div>

                                    <div>
                                      <div>
                                        <h5 class="text-sm font-semibold text-blue-300 mb-3">Typische Beispiele:</h5>
                                        <ul class="space-y-2">
                                          {protectionLevel.examples.map((example, idx) => (
                                            <li key={idx} class="flex items-start gap-2">
                                              <Circle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></Circle>
                                              <span class="text-xs text-slate-300">{example}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h5 class="text-sm font-semibold text-emerald-300 mb-3">Security Requirements:</h5>
                                        <ul class="space-y-2">
                                          {protectionLevel.requirements.map((requirement, idx) => (
                                            <li key={idx} class="flex items-start gap-2">
                                              <CheckCircle class="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" ></CheckCircle>
                                              <span class="text-xs text-slate-300">{requirement}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h5 class="text-sm font-semibold text-orange-300 mb-3">Business Impact:</h5>
                                        <ul class="space-y-2">
                                          {protectionLevel.businessImpact.map((impact, idx) => (
                                            <li key={idx} class="flex items-start gap-2">
                                              <AlertTriangle class="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" ></AlertTriangle>
                                              <span class="text-xs text-slate-300">{impact}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Automotive Data Classification Matrix</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr class="border-b border-slate-600">
                                    <td class="p-3 font-semibold text-white">Data Category</td>
                                    <td class="p-3 font-semibold text-blue-300 text-center">Protection Level</td>
                                    <td class="p-3 font-semibold text-emerald-300 text-center">TISAX AL</td>
                                    <td class="p-3 font-semibold text-purple-300 text-center">Retention</td>
                                    <td class="p-3 font-semibold text-orange-300 text-center">Access Control</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    { category: 'Vehicle Concepts', protection: 'High', al: 'AL3', retention: '10+ years', access: 'Need-to-know' },
                                    { category: 'CAD/CAM Data', protection: 'Normal/High', al: 'AL2/AL3', retention: '7-10 years', access: 'Project-based' },
                                    { category: 'Test Results', protection: 'Normal', al: 'AL2', retention: '5-7 years', access: 'Role-based' },
                                    { category: 'Supplier Data', protection: 'Normal', al: 'AL2', retention: '3-5 years', access: 'Department' },
                                    { category: 'Marketing Materials', protection: 'Low', al: 'AL1', retention: '1-3 years', access: 'General' },
                                    { category: 'Financial Data', protection: 'High', al: 'AL3', retention: '10+ years', access: 'Restricted' }
                                  ].map((row, index) => (
                                    <tr key={index} class="border-b border-slate-700">
                                      <td class="p-3 text-slate-300">{row.category}</td>
                                      <td class="p-3 text-center">
                                        <Badge>
                                          {row.protection}
                                        </Badge>
                                      </td>
                                      <td class="p-3 text-center">
                                        <Badge variant="outline" class="text-xs">{row.al}</Badge>
                                      </td>
                                      <td class="p-3 text-center text-slate-300 text-sm">{row.retention}</td>
                                      <td class="p-3 text-center text-slate-300 text-sm">{row.access}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Assessment Process Section */}
                <TabsContent value="assessment-process" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">TISAX Assessment Prozess</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-purple-300 mb-4">Der strukturierte Weg zur TISAX Zertifizierung</h3>
                            <p class="text-slate-300 mb-4">
                              Der TISAX Assessment Prozess folgt einem standardisierten Ablauf, der sicherstellt, 
                              dass alle automotive-spezifischen Anforderungen erfüllt und nachgewiesen werden. 
                              Der Prozess ist darauf ausgelegt, transparent, effizient und branchenweit vergleichbar zu sein.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <ClipboardCheck class="h-8 w-8 text-purple-400 mx-auto mb-2" ></ClipboardCheck>
                                <div class="text-sm font-semibold text-white">Preparation</div>
                                <div class="text-xs text-slate-400">2-6 Monate</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Search class="h-8 w-8 text-blue-400 mx-auto mb-2" ></Search>
                                <div class="text-sm font-semibold text-white">Assessment</div>
                                <div class="text-xs text-slate-400">1-2 Wochen</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <FileText class="h-8 w-8 text-emerald-400 mx-auto mb-2" ></FileText>
                                <div class="text-sm font-semibold text-white">Report</div>
                                <div class="text-xs text-slate-400">2-4 Wochen</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <BadgeCheck class="h-8 w-8 text-orange-400 mx-auto mb-2" ></BadgeCheck>
                                <div class="text-sm font-semibold text-white">Label</div>
                                <div class="text-xs text-slate-400">3 Jahre gültig</div>
                              </div>
                            </div>
                          </div>

                          <div class="space-y-6">
                            {[
                              ,
                              {
                                phase: 'Phase 2: Pre-Assessment',
                                icon: Search,
                                color: 'from-emerald-500 to-teal-600',
                                duration: '4-8 Wochen',
                                description: 'Vorbereitung und interne Überprüfung vor dem eigentlichen Assessment',
                                activities: [
                                  'Gap Analysis gegen VDA ISM Requirements',
                                  'Evidence Collection und Dokumentation',
                                  'Internal Controls Testing',
                                  'Mock Assessment Sessions',
                                  'Team Training und Preparation'
                                ],
                                deliverables: [
                                  'Gap Analysis Report',
                                  'Evidence Portfolio',
                                  'Pre-Assessment Results',
                                  'Action Plan for Gaps'
                                ],
                                automotiveSpecific: [
                                  'Automotive-specific evidence preparation',
                                  'OEM validation requirements check',
                                  'Supply chain documentation review',
                                  'Vehicle project security validation'
                                ]
                              },
                              {
                                phase: 'Phase 3: Onsite Assessment',
                                icon: Eye,
                                color: 'from-purple-500 to-pink-600',
                                duration: '3-10 Tage',
                                description: 'Durchführung des eigentlichen TISAX Assessments vor Ort',
                                activities: [
                                  'Opening Meeting und Scope Confirmation',
                                  'Documentation Review',
                                  'Interviews mit Key Personnel',
                                  'Technical Controls Testing',
                                  'Physical Security Inspection',
                                  'Closing Meeting mit ersten Findings'
                                ],
                                deliverables: [
                                  'Assessment Findings',
                                  'Control Test Results',
                                  'Interview Protocols',
                                  'Preliminary Report'
                                ],
                                automotiveSpecific: [
                                  'Automotive-qualified assessors',
                                  'OEM-specific requirements validation',
                                  'Vehicle development process review',
                                  'Supply chain security assessment'
                                ]
                              },
                              ,
                              {
                                phase: 'Phase 5: TISAX Label Issuance',
                                icon: BadgeCheck,
                                color: 'from-cyan-500 to-blue-600',
                                duration: '1-2 Wochen',
                                description: 'Ausstellung des TISAX Labels und Registration im Exchange Portal',
                                activities: [
                                  'Assessment Completion Verification',
                                  'TISAX Label Generation',
                                  'Exchange Portal Registration',
                                  'Label Publication',
                                  'Stakeholder Notification'
                                ],
                                deliverables: [
                                  'TISAX Label Certificate',
                                  'Exchange Portal Profile',
                                  'Label Validity Documentation',
                                  'Communication Package'
                                ],
                                automotiveSpecific: [
                                  'OEM notification and validation',
                                  'Automotive industry visibility',
                                  'Supply chain integration enablement',
                                  'Customer communication support'
                                ]
                              }
                            ].map((phase, index) => {
                              const IconComponent = phase.icon;
                              return (
                                <motion.div
                                  key={phase.phase}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
                                >
                                  <div class="p-6">
                                    <div class="flex items-start gap-4">
                                      <div class=>
                                        <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                      </div>
                                      <div class="flex-1">
                                        <div class="flex items-center gap-4 mb-3">
                                          <h4 class="text-lg font-bold text-white">{phase.phase}</h4>
                                          <Badge variant="outline" class="text-xs">{phase.duration}</Badge>
                                        </div>
                                        <p class="text-slate-300 text-sm mb-4">{phase.description}</p>
                                        
                                        <div>
                                          <div>
                                            <h5 class="text-sm font-semibold text-blue-300 mb-2">Activities:</h5>
                                            <ul class="space-y-1">
                                              {phase.activities.slice(0, 3).map((activity, idx) => (
                                                <li key={idx} class="text-xs text-slate-300 flex items-start gap-1">
                                                  <Circle class="h-2 w-2 text-blue-400 mt-1 flex-shrink-0" ></Circle>
                                                  {activity}
                                                </li>
                                              ))}
                                              {phase.activities.length > 3 && (
                                                <li class="text-xs text-slate-400">+{phase.activities.length - 3} weitere</li>
                                              )}
                                            </ul>
                                          </div>
                                          
                                          <div>
                                            <h5 class="text-sm font-semibold text-emerald-300 mb-2">Deliverables:</h5>
                                            <div class="flex flex-wrap gap-1">
                                              {phase.deliverables.map((deliverable) => (
                                                <Badge key={deliverable} variant="outline" class="text-xs">
                                                  {deliverable}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                          
                                          <div>
                                            <h5 class="text-sm font-semibold text-orange-300 mb-2">Automotive Considerations:</h5>
                                            <div class="grid grid-cols-2 gap-1">
                                              {phase.automotiveSpecific.map((consideration, idx) => (
                                                <div key={idx} class="text-xs text-slate-400 flex items-center gap-1">
                                                  <Car class="h-2 w-2 text-orange-400" ></Car>
                                                  {consideration}
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Assessment Success Factors</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-bold text-emerald-300 mb-4">Critical Success Factors</h4>
                                <ul class="space-y-3">
                                  {[
                                    'Management Commitment und Leadership Support',
                                    'Dedicated Project Team mit automotive expertise',
                                    'Comprehensive Gap Analysis und Preparation',
                                    'Stakeholder Engagement across all levels',
                                    'Documentation Quality und Evidence Management',
                                    'Change Management und Communication Strategy'
                                  ].map((factor, idx) => (
                                    <li key={idx} class="flex items-start gap-3">
                                      <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      <span class="text-sm text-slate-300">{factor}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 class="text-lg font-bold text-red-300 mb-4">Common Pitfalls</h4>
                                <ul class="space-y-3">
                                  {[
                                    'Insufficient preparation time und resource allocation',
                                    'Inadequate automotive industry knowledge',
                                    'Poor documentation und evidence quality',
                                    'Lack of stakeholder alignment',
                                    'Underestimating scope complexity',
                                    'Insufficient post-assessment follow-up'
                                  ].map((pitfall, idx) => (
                                    <li key={idx} class="flex items-start gap-3">
                                      <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                      <span class="text-sm text-slate-300">{pitfall}</span>
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
                </TabsContent>

                {/* Participant Types Section */}
                <TabsContent value="participant-types" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">TISAX Teilnehmertypen</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Rollen im TISAX Ecosystem</h3>
                            <p class="text-slate-300 mb-4">
                              Das TISAX Framework definiert verschiedene Teilnehmertypen mit spezifischen 
                              Rollen, Verantwortlichkeiten und Rechten. Diese Struktur ermöglicht eine 
                              effiziente und vertrauensvolle Zusammenarbeit in der automotive supply chain.
                            </p>
                          </div>

                          <div class="space-y-6">
                            {participantTypes.map((participant, index) => {
                              const IconComponent = participant.icon;
                              return (
                                <motion.div
                                  key={participant.type}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
                                >
                                  <div class="p-6">
                                    <div class="flex items-start gap-4 mb-6">
                                      <div class=>
                                        <IconComponent class="h-8 w-8 text-white" ></IconComponent>
                                      </div>
                                      <div class="flex-1">
                                        <h4 class="text-2xl font-bold text-white mb-2">{participant.type}</h4>
                                        <p class="text-slate-300 text-lg">{participant.description}</p>
                                      </div>
                                    </div>

                                    <div>
                                      <div>
                                        <h5 class="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                                          <Settings class="h-4 w-4" ></Settings>
                                          Verantwortlichkeiten
                                        </h5>
                                        <ul class="space-y-2">
                                          {participant.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} class="flex items-start gap-2">
                                              <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                              <span class="text-xs text-slate-300">{responsibility}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h5 class="text-sm font-semibold text-emerald-300 mb-3 flex items-center gap-2">
                                          <Building2 class="h-4 w-4" ></Building2>
                                          Typische Beispiele
                                        </h5>
                                        <ul class="space-y-2">
                                          {participant.examples.map((example, idx) => (
                                            <li key={idx} class="flex items-start gap-2">
                                              <Circle class="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" ></Circle>
                                              <span class="text-xs text-slate-300">{example}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h5 class="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                                          <BadgeCheck class="h-4 w-4" ></BadgeCheck>
                                          TISAX Anforderungen
                                        </h5>
                                        <div>
                                          {participant.tisaxRequirements.map((requirement, idx) => (
                                            <div key={idx} class="flex items-start gap-2">
                                              <Star class="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" ></Star>
                                              <span class="text-xs text-slate-300">{requirement}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Participant Interaction Matrix</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr class="border-b border-slate-600">
                                    <td class="p-3 font-semibold text-white">Relationship</td>
                                    <td class="p-3 font-semibold text-blue-300 text-center">Information Flow</td>
                                    <td class="p-3 font-semibold text-emerald-300 text-center">Assessment Requirement</td>
                                    <td class="p-3 font-semibold text-purple-300 text-center">Mutual Recognition</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    { 
                                      relationship: 'OEM → Tier 1 Supplier',
                                      flow: 'Vehicle concepts, specifications',
                                      assessment: 'AL2/AL3 required',
                                      recognition: 'Full mutual recognition'
                                    },
                                    { 
                                      relationship: 'Tier 1 → Tier 2 Supplier',
                                      flow: 'Component specifications',
                                      assessment: 'AL1/AL2 required',
                                      recognition: 'Conditional recognition'
                                    },
                                    { 
                                      relationship: 'OEM → Service Provider',
                                      flow: 'Business processes',
                                      assessment: 'AL2/AL3 required',
                                      recognition: 'Service-specific'
                                    },
                                    { 
                                      relationship: 'Supplier → Service Provider',
                                      flow: 'Technical services',
                                      assessment: 'AL1/AL2 required',
                                      recognition: 'Limited scope'
                                    }
                                  ].map((row, index) => (
                                    <tr key={index} class="border-b border-slate-700">
                                      <td class="p-3 text-slate-300 font-medium">{row.relationship}</td>
                                      <td class="p-3 text-center text-slate-300 text-sm">{row.flow}</td>
                                      <td class="p-3 text-center">
                                        <Badge variant="outline" class="text-xs">{row.assessment}</Badge>
                                      </td>
                                      <td class="p-3 text-center text-slate-300 text-sm">{row.recognition}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Exchange Portal Section */}
                <TabsContent value="exchange-portal" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">TISAX Exchange Portal</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-network-500/10 to-globe-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Das zentrale TISAX Ecosystem</h3>
                            <p class="text-slate-300 mb-4">
                              Das TISAX Exchange Portal ist die zentrale Plattform für die Verwaltung, 
                              den Austausch und die Validierung von TISAX Assessment-Ergebnissen. 
                              Es ermöglicht eine effiziente und vertrauensvolle Zusammenarbeit zwischen 
                              allen Teilnehmern der automotive supply chain.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-blue-400">2500+</div>
                                <div class="text-sm text-slate-400">Registered Participants</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-emerald-400">99.8%</div>
                                <div class="text-sm text-slate-400">Platform Availability</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-purple-400">24/7</div>
                                <div class="text-sm text-slate-400">Global Access</div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-blue-500/20 rounded-lg">
                                    <Users class="h-6 w-6 text-blue-400" ></Users>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Portal Features</h4>
                                </div>
                                <ul class="space-y-3">
                                  {[
                                    'Assessment Results Sharing',
                                    'Participant Search & Discovery',
                                    'Label Verification & Validation',
                                    'Scope & Requirements Management',
                                    'Audit Trail & Documentation',
                                    'Integration APIs für enterprise systems'
                                  ].map((feature, idx) => (
                                    <li key={idx} class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      <span class="text-sm text-slate-300">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-emerald-500/20 rounded-lg">
                                    <Shield class="h-6 w-6 text-emerald-400" ></Shield>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Security & Privacy</h4>
                                </div>
                                <ul class="space-y-3">
                                  {[
                                    'End-to-end encryption',
                                    'Multi-factor authentication',
                                    'Role-based access controls',
                                    'GDPR compliance',
                                    'Audit logging & monitoring',
                                    'Data residency compliance'
                                  ].map((security, idx) => (
                                    <li key={idx} class="flex items-start gap-2">
                                      <Lock class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></Lock>
                                      <span class="text-sm text-slate-300">{security}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Portal Workflow</h3>
                            <div>
                              {[
                                {
                                  step: '1. Registration',
                                  icon: UserPlus,
                                  color: 'blue',
                                  description: 'Account creation and company verification',
                                  actions: ['Company registration', 'Contact verification', 'Role assignment']
                                },
                                {
                                  step: '2. Assessment Upload',
                                  icon: Upload,
                                  color: 'emerald',
                                  description: 'Upload and validation of TISAX assessment results',
                                  actions: ['Result upload', 'Document validation', 'Label generation']
                                },
                                {
                                  step: '3. Sharing & Discovery',
                                  icon: Search,
                                  color: 'purple',
                                  description: 'Share results with partners and discover certified suppliers',
                                  actions: ['Partner search', 'Result sharing', 'Requirement matching']
                                },
                                {
                                  step: '4. Collaboration',
                                  icon: Network,
                                  color: 'orange',
                                  description: 'Ongoing collaboration and relationship management',
                                  actions: ['Project collaboration', 'Status monitoring', 'Renewal tracking']
                                }
                              ].map((workflow, index) => {
                                const IconComponent = workflow.icon;
                                return (
                                  <motion.div
                                    key={workflow.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    class="bg-slate-900/50 rounded-lg p-4 border border-slate-700"
                                  >
                                    <div class="text-center mb-4">
                                      <div>
                                        <IconComponent>
                                      </div>
                                      <h4 class="font-bold text-white text-sm">{workflow.step}</h4>
                                      <p class="text-xs text-slate-400 mt-1">{workflow.description}</p>
                                    </div>
                                    <div class="space-y-1">
                                      {workflow.actions.map((action, idx) => (
                                        <div key={idx} class="text-xs text-slate-300 flex items-center gap-1">
                                          <Circle class="h-2 w-2 text-slate-500" ></Circle>
                                          {action}
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4">Portal Benefits</h4>
                              <ul class="space-y-3">
                                {[
                                  'Reduction of redundant assessments',
                                  'Faster supplier onboarding processes',
                                  'Increased transparency in supply chain',
                                  'Standardized security validation',
                                  'Cost optimization through sharing',
                                  'Enhanced automotive industry collaboration'
                                ].map((benefit, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <TrendingUp class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></TrendingUp>
                                    <span class="text-sm text-slate-300">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4">Access Requirements</h4>
                              <ul class="space-y-3">
                                {[
                                  'Valid TISAX assessment (any level)',
                                  'Automotive industry participation',
                                  'Signed TISAX participation agreement',
                                  'Verified company and contact information',
                                  'Compliance with portal terms of use',
                                  'Regular assessment renewal'
                                ].map((requirement, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span class="text-sm text-slate-300">{requirement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Automotive Specifics Section */}
                <TabsContent value="automotive-specifics" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Automotive-spezifische Aspekte</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-car-500/10 to-truck-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Warum TISAX in der Automotive Industry?</h3>
                            <p class="text-slate-300 mb-4">
                              Die Automobilindustrie hat einzigartige Sicherheitsanforderungen, die durch 
                              Standardframeworks wie ISO 27001 nicht vollständig abgedeckt werden. TISAX 
                              addressiert diese branchenspezifischen Herausforderungen systematisch.
                            </p>
                          </div>

                          <div>
                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-red-500/20 rounded-lg">
                                    <AlertTriangle class="h-6 w-6 text-red-400" ></AlertTriangle>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Unique Industry Challenges</h4>
                                </div>
                                <ul class="space-y-3">
                                  {[
                                    'Long development cycles (5-7 years)',
                                    'Highly competitive market environment',
                                    'Complex multi-tier supply chains',
                                    'Massive investment in R&D projects',
                                    'Regulatory and safety requirements',
                                    'Global collaboration networks'
                                  ].map((challenge, idx) => (
                                    <li key={idx} class="flex items-start gap-2">
                                      <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                      <span class="text-sm text-slate-300">{challenge}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-emerald-500/20 rounded-lg">
                                    <Car class="h-6 w-6 text-emerald-400" ></Car>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">TISAX Solutions</h4>
                                </div>
                                <ul class="space-y-3">
                                  {[
                                    'Automotive-specific data classification',
                                    'Supply chain security framework',
                                    'OEM-validated assessment methodology',
                                    'Industry-recognized certification',
                                    'Exchange portal for collaboration',
                                    'Cost-effective mutual recognition'
                                  ].map((solution, idx) => (
                                    <li key={idx} class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      <span class="text-sm text-slate-300">{solution}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Automotive Data Types & Protection Requirements</h3>
                            <div>
                              {[
                                {
                                  category: 'Vehicle Development Data',
                                  icon: Cpu,
                                  color: 'from-blue-500 to-indigo-600',
                                  types: [
                                    'CAD/CAM files and designs',
                                    'Engine and powertrain specs',
                                    'Safety and crash test data',
                                    'Aerodynamics and styling',
                                    'Electronic control unit code',
                                    'Performance benchmarks'
                                  ],
                                  protection: 'Typically AL2/AL3',
                                  impact: 'Competitive advantage loss, delayed market entry'
                                },
                                {
                                  category: 'Supply Chain Data',
                                  icon: Truck,
                                  color: 'from-emerald-500 to-teal-600',
                                  types: [
                                    'Supplier contracts and pricing',
                                    'Manufacturing processes',
                                    'Quality management data',
                                    'Logistics and delivery schedules',
                                    'Supplier financial information',
                                    'Production planning data'
                                  ],
                                  protection: 'Typically AL1/AL2',
                                  impact: 'Supply chain disruption, cost increases'
                                },
                                {
                                  category: 'Strategic Business Data',
                                  icon: Target,
                                  color: 'from-purple-500 to-pink-600',
                                  types: [
                                    'Market research and analysis',
                                    'M&A information',
                                    'Partnership agreements',
                                    'Financial performance data',
                                    'Strategic roadmaps',
                                    'Regulatory submissions'
                                  ],
                                  protection: 'Typically AL2/AL3',
                                  impact: 'Financial losses, regulatory issues'
                                }
                              ].map((dataType, index) => {
                                const IconComponent = dataType.icon;
                                return (
                                  <motion.div
                                    key={dataType.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    class="bg-slate-900/50 rounded-lg p-4 border border-slate-700"
                                  >
                                    <div class="flex items-center gap-3 mb-4">
                                      <div class=>
                                        <IconComponent class="h-5 w-5 text-white" ></IconComponent>
                                      </div>
                                      <h4 class="font-bold text-white text-sm">{dataType.category}</h4>
                                    </div>
                                    
                                    <div class="space-y-3">
                                      <div>
                                        <h5 class="text-xs font-semibold text-slate-400 mb-2">Data Types:</h5>
                                        <ul class="space-y-1">
                                          {dataType.types.slice(0, 3).map((type, idx) => (
                                            <li key={idx} class="text-xs text-slate-300 flex items-center gap-1">
                                              <Circle class="h-1.5 w-1.5 text-slate-500" ></Circle>
                                              {type}
                                            </li>
                                          ))}
                                          <li class="text-xs text-slate-400">+{dataType.types.length - 3} weitere</li>
                                        </ul>
                                      </div>
                                      
                                      <div class="pt-2 border-t border-slate-700">
                                        <Badge variant="outline" class="text-xs mb-2">{dataType.protection}</Badge>
                                        <p class="text-xs text-slate-400">{dataType.impact}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Building2 class="h-5 w-5 text-blue-400" ></Building2>
                                OEM-Specific Requirements
                              </h4>
                              <div class="space-y-4">
                                {[
                                  {
                                    oem: 'BMW Group',
                                    requirements: ['TISAX AL2+ for all Tier-1', 'Specific network security standards', 'Incident reporting within 4h']
                                  },
                                  {
                                    oem: 'Mercedes-Benz',
                                    requirements: ['AL3 for strategic projects', 'Enhanced physical security', 'Regular penetration testing']
                                  },
                                  {
                                    oem: 'Volkswagen Group',
                                    requirements: ['Multi-brand compliance', 'Data localization requirements', 'Supplier security training']
                                  },
                                  {
                                    oem: 'Audi AG',
                                    requirements: ['Premium vehicle data protection', 'Luxury segment specific controls', 'Advanced threat monitoring']
                                  }
                                ].map((oem, idx) => (
                                  <div key={idx} class="bg-slate-900/50 rounded p-3">
                                    <h5 class="font-semibold text-emerald-300 text-sm mb-2">{oem.oem}</h5>
                                    <ul class="space-y-1">
                                      {oem.requirements.map((req, reqIdx) => (
                                        <li key={reqIdx} class="text-xs text-slate-300 flex items-center gap-1">
                                          <CheckCircle class="h-2 w-2 text-emerald-400" ></CheckCircle>
                                          {req}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Network class="h-5 w-5 text-purple-400" ></Network>
                                Supply Chain Integration
                              </h4>
                              <div class="space-y-4">
                                <div class="bg-slate-900/50 rounded p-4">
                                  <h5 class="font-semibold text-purple-300 text-sm mb-2">Multi-Tier Structure</h5>
                                  <div class="space-y-2">
                                    <div class="flex justify-between items-center">
                                      <span class="text-xs text-slate-300">OEM → Tier 1</span>
                                      <Badge class="bg-red-500/20 text-red-300 text-xs">AL3</Badge>
                                    </div>
                                    <div class="flex justify-between items-center">
                                      <span class="text-xs text-slate-300">Tier 1 → Tier 2</span>
                                      <Badge class="bg-orange-500/20 text-orange-300 text-xs">AL2</Badge>
                                    </div>
                                    <div class="flex justify-between items-center">
                                      <span class="text-xs text-slate-300">Tier 2 → Tier 3</span>
                                      <Badge class="bg-green-500/20 text-green-300 text-xs">AL1</Badge>
                                    </div>
                                  </div>
                                </div>
                                
                                <div class="bg-slate-900/50 rounded p-4">
                                  <h5 class="font-semibold text-purple-300 text-sm mb-2">Integration Challenges</h5>
                                  <ul class="space-y-1">
                                    {[
                                      'Cascading security requirements',
                                      'Multiple OEM relationships',
                                      'Cross-border data transfers',
                                      'Legacy system integration'
                                    ].map((challenge, idx) => (
                                      <li key={idx} class="text-xs text-slate-300 flex items-center gap-1">
                                        <AlertCircle class="h-2 w-2 text-orange-400" ></AlertCircle>
                                        {challenge}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Evidence Collection Section */}
                <TabsContent value="evidence-collection" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Evidence Collection</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-filesearch-500/10 to-document-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Systematische Nachweisführung</h3>
                            <p class="text-slate-300 mb-4">
                              Eine erfolgreiche TISAX Zertifizierung steht und fällt mit der Qualität der 
                              Evidence Collection. Automotive-spezifische Nachweise erfordern besondere 
                              Aufmerksamkeit für technische Details und Branchenstandards.
                            </p>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Evidence Portfolio Structure</h3>
                            <div>
                              {[
                                {
                                  category: 'Policy & Governance',
                                  icon: FileText,
                                  count: '15-20 Documents',
                                  color: 'blue',
                                  examples: [
                                    'Information Security Policy',
                                    'ISMS Manual',
                                    'Risk Management Procedures',
                                    'Incident Response Plans',
                                    'Business Continuity Plans'
                                  ]
                                },
                                {
                                  category: 'Technical Controls',
                                  icon: Settings,
                                  count: '25-35 Evidence',
                                  color: 'emerald',
                                  examples: [
                                    'Network architecture diagrams',
                                    'Access control configurations',
                                    'Encryption implementations',
                                    'System monitoring setup',
                                    'Backup and recovery procedures'
                                  ]
                                },
                                {
                                  category: 'Process Evidence',
                                  icon: Workflow,
                                  count: '20-30 Records',
                                  color: 'purple',
                                  examples: [
                                    'Security awareness training records',
                                    'Audit and review reports',
                                    'Supplier assessment results',
                                    'Change management logs',
                                    'Performance monitoring data'
                                  ]
                                },
                                {
                                  category: 'Automotive Specific',
                                  icon: Car,
                                  count: '10-15 Items',
                                  color: 'orange',
                                  examples: [
                                    'Vehicle data classification',
                                    'OEM integration procedures',
                                    'Supply chain security measures',
                                    'Automotive testing protocols',
                                    'Industry compliance certificates'
                                  ]
                                }
                              ].map((portfolio, index) => {
                                const IconComponent = portfolio.icon;
                                return (
                                  <motion.div
                                    key={portfolio.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    class="bg-slate-900/50 rounded-lg p-4 border border-slate-700"
                                  >
                                    <div class="text-center mb-4">
                                      <div>
                                        <IconComponent>
                                      </div>
                                      <h4 class="font-bold text-white text-sm">{portfolio.category}</h4>
                                      <p class="text-xs text-slate-400 mt-1">{portfolio.count}</p>
                                    </div>
                                    <div class="space-y-1">
                                      {portfolio.examples.slice(0, 3).map((example, idx) => (
                                        <div key={idx} class="text-xs text-slate-300 flex items-center gap-1">
                                          <Circle class="h-1.5 w-1.5 text-slate-500" ></Circle>
                                          {example}
                                        </div>
                                      ))}
                                      <div class="text-xs text-slate-400 text-center pt-1">
                                        +{portfolio.examples.length - 3} weitere
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <CheckCircle class="h-5 w-5 text-emerald-400" ></CheckCircle>
                                Evidence Quality Criteria
                              </h4>
                              <ul class="space-y-3">
                                {[
                                  {
                                    criteria: 'Completeness',
                                    description: 'All required evidence for each control objective'
                                  },
                                  {
                                    criteria: 'Currency',
                                    description: 'Documents dated within assessment period'
                                  },
                                  {
                                    criteria: 'Authenticity',
                                    description: 'Verifiable and attributable to responsible parties'
                                  },
                                  {
                                    criteria: 'Relevance',
                                    description: 'Directly supports the control implementation'
                                  },
                                  {
                                    criteria: 'Clarity',
                                    description: 'Clearly documented and understandable'
                                  }
                                ].map((quality, idx) => (
                                  <li key={idx} class="space-y-1">
                                    <div class="flex items-center gap-2">
                                      <Star class="h-3 w-3 text-emerald-400" ></Star>
                                      <span class="text-sm font-medium text-white">{quality.criteria}</span>
                                    </div>
                                    <p class="text-xs text-slate-400 ml-5">{quality.description}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <AlertTriangle class="h-5 w-5 text-orange-400" ></AlertTriangle>
                                Common Evidence Gaps
                              </h4>
                              <ul class="space-y-3">
                                {[
                                  {
                                    gap: 'Inadequate Documentation',
                                    solution: 'Implement systematic documentation processes'
                                  },
                                  {
                                    gap: 'Missing Automotive Context',
                                    solution: 'Include industry-specific references and standards'
                                  },
                                  {
                                    gap: 'Outdated Evidence',
                                    solution: 'Establish regular review and update cycles'
                                  },
                                  {
                                    gap: 'Incomplete Process Coverage',
                                    solution: 'Map all business processes to controls'
                                  },
                                  {
                                    gap: 'Poor Evidence Organization',
                                    solution: 'Create structured evidence management system'
                                  }
                                ].map((gap, idx) => (
                                  <li key={idx} class="space-y-1">
                                    <div class="flex items-center gap-2">
                                      <AlertTriangle class="h-3 w-3 text-orange-400" ></AlertTriangle>
                                      <span class="text-sm font-medium text-white">{gap.gap}</span>
                                    </div>
                                    <p class="text-xs text-slate-400 ml-5">{gap.solution}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Evidence Collection Timeline</h3>
                            <div class="relative">
                              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-600"></div>
                              <div class="space-y-6">
                                {[
                                  {
                                    phase: 'Preparation Phase',
                                    duration: '8-12 weeks before assessment',
                                    activities: [
                                      'Evidence gap analysis',
                                      'Documentation template creation',
                                      'Evidence collection team assignment'
                                    ]
                                  },
                                  {
                                    phase: 'Collection Phase',
                                    duration: '4-8 weeks before assessment',
                                    activities: [
                                      'Document gathering and review',
                                      'Technical evidence compilation',
                                      'Automotive-specific documentation'
                                    ]
                                  },
                                  {
                                    phase: 'Review Phase',
                                    duration: '2-4 weeks before assessment',
                                    activities: [
                                      'Evidence quality review',
                                      'Gap remediation',
                                      'Final evidence portfolio assembly'
                                    ]
                                  },
                                  {
                                    phase: 'Validation Phase',
                                    duration: '1 week before assessment',
                                    activities: [
                                      'Internal evidence validation',
                                      'Cross-reference verification',
                                      'Assessment readiness confirmation'
                                    ]
                                  }
                                ].map((timeline, index) => (
                                  <div key={index} class="relative pl-10">
                                    <div class="absolute left-2 top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-800"></div>
                                    <div class="bg-slate-900/50 rounded-lg p-4">
                                      <div class="flex items-center gap-3 mb-2">
                                        <h4 class="font-bold text-white">{timeline.phase}</h4>
                                        <Badge variant="outline" class="text-xs">{timeline.duration}</Badge>
                                      </div>
                                      <ul class="space-y-1">
                                        {timeline.activities.map((activity, idx) => (
                                          <li key={idx} class="text-sm text-slate-300 flex items-center gap-2">
                                            <CheckCircle class="h-3 w-3 text-blue-400" ></CheckCircle>
                                            {activity}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Certification Section */}
                <TabsContent value="certification" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">TISAX Zertifizierung</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-badgecheck-500/10 to-award-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Der Weg zum TISAX Label</h3>
                            <p class="text-slate-300 mb-4">
                              Das TISAX Label ist mehr als nur eine Zertifizierung - es ist der Schlüssel 
                              zur Teilnahme an der automotive supply chain und ein Nachweis für 
                              vertrauensvolle Geschäftsbeziehungen in der Branche.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <BadgeCheck class="h-8 w-8 text-blue-400 mx-auto mb-2" ></BadgeCheck>
                                <div class="text-sm font-semibold text-white">Assessment</div>
                                <div class="text-xs text-slate-400">VDA ISM based</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Award class="h-8 w-8 text-emerald-400 mx-auto mb-2" ></Award>
                                <div class="text-sm font-semibold text-white">Label</div>
                                <div class="text-xs text-slate-400">Industry recognized</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Network class="h-8 w-8 text-purple-400 mx-auto mb-2" ></Network>
                                <div class="text-sm font-semibold text-white">Exchange</div>
                                <div class="text-xs text-slate-400">Portal access</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <TrendingUp class="h-8 w-8 text-orange-400 mx-auto mb-2" ></TrendingUp>
                                <div class="text-sm font-semibold text-white">Business</div>
                                <div class="text-xs text-slate-400">Growth opportunities</div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-blue-500/20 rounded-lg">
                                    <Calendar class="h-6 w-6 text-blue-400" ></Calendar>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Label Validity</h4>
                                </div>
                                <div class="space-y-3">
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-2xl font-bold text-blue-400 text-center">3 Jahre</div>
                                    <div class="text-sm text-slate-400 text-center">Gültigkeit</div>
                                  </div>
                                  <ul class="space-y-2 text-sm">
                                    <li class="flex items-center gap-2">
                                      <CheckCircle class="h-3 w-3 text-blue-400" ></CheckCircle>
                                      <span class="text-slate-300">Automatic renewal available</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                      <CheckCircle class="h-3 w-3 text-blue-400" ></CheckCircle>
                                      <span class="text-slate-300">Surveillance assessments possible</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                      <CheckCircle class="h-3 w-3 text-blue-400" ></CheckCircle>
                                      <span class="text-slate-300">Exchange portal registration included</span>
                                    </li>
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-emerald-500/20 rounded-lg">
                                    <Globe class="h-6 w-6 text-emerald-400" ></Globe>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Global Recognition</h4>
                                </div>
                                <div class="space-y-3">
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-2xl font-bold text-emerald-400 text-center">50+</div>
                                    <div class="text-sm text-slate-400 text-center">Countries</div>
                                  </div>
                                  <ul class="space-y-2 text-sm">
                                    <li class="flex items-center gap-2">
                                      <CheckCircle class="h-3 w-3 text-emerald-400" ></CheckCircle>
                                      <span class="text-slate-300">Worldwide OEM acceptance</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                      <CheckCircle class="h-3 w-3 text-emerald-400" ></CheckCircle>
                                      <span class="text-slate-300">Cross-border collaboration enabled</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                      <CheckCircle class="h-3 w-3 text-emerald-400" ></CheckCircle>
                                      <span class="text-slate-300">Industry standard compliance</span>
                                    </li>
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-purple-500/20 rounded-lg">
                                    <DollarSign class="h-6 w-6 text-purple-400" ></DollarSign>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Investment & ROI</h4>
                                </div>
                                <div class="space-y-3">
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-2xl font-bold text-purple-400 text-center">€15k-200k</div>
                                    <div class="text-sm text-slate-400 text-center">Investment Range</div>
                                  </div>
                                  <ul class="space-y-2 text-sm">
                                    <li class="flex items-center gap-2">
                                      <TrendingUp class="h-3 w-3 text-purple-400" ></TrendingUp>
                                      <span class="text-slate-300">Faster supplier onboarding</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                      <TrendingUp class="h-3 w-3 text-purple-400" ></TrendingUp>
                                      <span class="text-slate-300">Reduced audit costs</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                      <TrendingUp class="h-3 w-3 text-purple-400" ></TrendingUp>
                                      <span class="text-slate-300">Competitive advantage</span>
                                    </li>
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Post-Certification Management</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-bold text-emerald-300 mb-4">Maintenance Activities</h4>
                                <ul class="space-y-3">
                                  {[
                                    {
                                      activity: 'Continuous Monitoring',
                                      frequency: 'Ongoing',
                                      description: 'Regular monitoring of security controls effectiveness'
                                    },
                                    {
                                      activity: 'Annual Self-Assessment',
                                      frequency: 'Yearly',
                                      description: 'Internal review of control implementation status'
                                    },
                                    {
                                      activity: 'Incident Management',
                                      frequency: 'As needed',
                                      description: 'Security incident response and reporting'
                                    },
                                    {
                                      activity: 'Exchange Portal Updates',
                                      frequency: 'Quarterly',
                                      description: 'Profile and scope updates in the portal'
                                    }
                                  ].map((maintenance, idx) => (
                                    <li key={idx} class="bg-slate-900/50 rounded p-3">
                                      <div class="flex items-center justify-between mb-1">
                                        <span class="font-medium text-white text-sm">{maintenance.activity}</span>
                                        <Badge variant="outline" class="text-xs">{maintenance.frequency}</Badge>
                                      </div>
                                      <p class="text-xs text-slate-400">{maintenance.description}</p>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 class="text-lg font-bold text-orange-300 mb-4">Renewal Process</h4>
                                <div class="space-y-4">
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <h5 class="font-semibold text-orange-300 text-sm mb-2">Renewal Timeline</h5>
                                    <div class="space-y-2">
                                      <div class="flex justify-between items-center">
                                        <span class="text-xs text-slate-300">Planning starts</span>
                                        <span class="text-xs text-slate-400">12 months before expiry</span>
                                      </div>
                                      <div class="flex justify-between items-center">
                                        <span class="text-xs text-slate-300">Assessment scheduling</span>
                                        <span class="text-xs text-slate-400">6 months before expiry</span>
                                      </div>
                                      <div class="flex justify-between items-center">
                                        <span class="text-xs text-slate-300">Renewal assessment</span>
                                        <span class="text-xs text-slate-400">3 months before expiry</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <h5 class="font-semibold text-orange-300 text-sm mb-2">Renewal Options</h5>
                                    <ul class="space-y-1">
                                      <li class="text-xs text-slate-300 flex items-center gap-1">
                                        <Circle class="h-2 w-2 text-orange-400" ></Circle>
                                        Full re-assessment
                                      </li>
                                      <li class="text-xs text-slate-300 flex items-center gap-1">
                                        <Circle class="h-2 w-2 text-orange-400" ></Circle>
                                        Surveillance assessment
                                      </li>
                                      <li class="text-xs text-slate-300 flex items-center gap-1">
                                        <Circle class="h-2 w-2 text-orange-400" ></Circle>
                                        Scope changes
                                      </li>
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
                </TabsContent>

                {/* Supply Chain Security Section */}
                <TabsContent value="supply-chain" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Supply Chain Security</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-truck-500/10 to-network-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Automotive Supply Chain Complexity</h3>
                            <p class="text-slate-300 mb-4">
                              Die automotive supply chain ist eine der komplexesten in der modernen Industrie. 
                              TISAX bietet einen strukturierten Ansatz für End-to-End Security Management 
                              über alle Ebenen der Lieferanten- und Partnerbeziehungen.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-blue-400">5-7</div>
                                <div class="text-sm text-slate-400">Tier Levels</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-emerald-400">10,000+</div>
                                <div class="text-sm text-slate-400">Parts per Vehicle</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-purple-400">50+</div>
                                <div class="text-sm text-slate-400">Countries</div>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <div class="text-2xl font-bold text-orange-400">€200B+</div>
                                <div class="text-sm text-slate-400">Annual Volume</div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-red-500/20 rounded-lg">
                                    <AlertTriangle class="h-6 w-6 text-red-400" ></AlertTriangle>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Supply Chain Risks</h4>
                                </div>
                                <ul class="space-y-3">
                                  {[
                                    {
                                      risk: 'IP Theft',
                                      impact: 'Loss of competitive advantage'
                                    },
                                    {
                                      risk: 'Data Breaches',
                                      impact: 'Customer trust and legal issues'
                                    },
                                    {
                                      risk: 'Supplier Incidents',
                                      impact: 'Production delays and quality issues'
                                    },
                                    {
                                      risk: 'Cyber Attacks',
                                      impact: 'Operational disruption'
                                    },
                                    {
                                      risk: 'Compliance Failures',
                                      impact: 'Regulatory penalties'
                                    }
                                  ].map((risk, idx) => (
                                    <li key={idx} class="space-y-1">
                                      <div class="flex items-center gap-2">
                                        <AlertTriangle class="h-3 w-3 text-red-400" ></AlertTriangle>
                                        <span class="text-sm font-medium text-white">{risk.risk}</span>
                                      </div>
                                      <p class="text-xs text-slate-400 ml-5">{risk.impact}</p>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-800/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-3 bg-emerald-500/20 rounded-lg">
                                    <Shield class="h-6 w-6 text-emerald-400" ></Shield>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">TISAX Controls</h4>
                                </div>
                                <ul class="space-y-3">
                                  {[
                                    {
                                      control: 'Supplier Assessment',
                                      benefit: 'Verified security posture'
                                    },
                                    {
                                      control: 'Mutual Recognition',
                                      benefit: 'Reduced assessment overhead'
                                    },
                                    {
                                      control: 'Exchange Portal',
                                      benefit: 'Centralized trust network'
                                    },
                                    {
                                      control: 'Incident Sharing',
                                      benefit: 'Industry-wide threat intelligence'
                                    },
                                    {
                                      control: 'Continuous Monitoring',
                                      benefit: 'Real-time risk visibility'
                                    }
                                  ].map((control, idx) => (
                                    <li key={idx} class="space-y-1">
                                      <div class="flex items-center gap-2">
                                        <Shield class="h-3 w-3 text-emerald-400" ></Shield>
                                        <span class="text-sm font-medium text-white">{control.control}</span>
                                      </div>
                                      <p class="text-xs text-slate-400 ml-5">{control.benefit}</p>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Multi-Tier Supply Chain Model</h3>
                            <div class="relative overflow-x-auto">
                              <div class="min-w-full">
                                <div class="grid grid-cols-6 gap-4 text-center">
                                  <div class="font-semibold text-slate-400">Tier</div>
                                  <div class="font-semibold text-slate-400">Role</div>
                                  <div class="font-semibold text-slate-400">Examples</div>
                                  <div class="font-semibold text-slate-400">TISAX AL</div>
                                  <div class="font-semibold text-slate-400">Data Types</div>
                                  <div class="font-semibold text-slate-400">Security Focus</div>
                                  
                                  <div class="bg-blue-500/20 rounded p-3">
                                    <div class="font-bold text-blue-300">OEM</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-sm text-slate-300">Vehicle Manufacturer</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">BMW, Mercedes, Audi, VW</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <Badge class="bg-red-500/20 text-red-300 text-xs">AL3</Badge>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Vehicle concepts, strategic data</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">IP protection, strategic security</div>
                                  </div>

                                  <div class="bg-emerald-500/20 rounded p-3">
                                    <div class="font-bold text-emerald-300">Tier 1</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-sm text-slate-300">System Suppliers</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Bosch, Continental, ZF</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <Badge class="bg-orange-500/20 text-orange-300 text-xs">AL2/AL3</Badge>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">System designs, integration specs</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">System security, integration</div>
                                  </div>

                                  <div class="bg-purple-500/20 rounded p-3">
                                    <div class="font-bold text-purple-300">Tier 2</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-sm text-slate-300">Component Suppliers</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Specialized manufacturers</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <Badge class="bg-yellow-500/20 text-yellow-300 text-xs">AL1/AL2</Badge>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Component specs, processes</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Manufacturing security</div>
                                  </div>

                                  <div class="bg-orange-500/20 rounded p-3">
                                    <div class="font-bold text-orange-300">Tier 3+</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-sm text-slate-300">Raw Materials</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Material suppliers</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <Badge class="bg-green-500/20 text-green-300 text-xs">AL1</Badge>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Material specs, logistics</div>
                                  </div>
                                  <div class="bg-slate-900/50 rounded p-3">
                                    <div class="text-xs text-slate-300">Basic compliance</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Supply Chain Security Implementation</h3>
                            <div>
                              {[
                                {
                                  phase: 'Assessment Phase',
                                  icon: Search,
                                  color: 'from-blue-500 to-indigo-600',
                                  activities: [
                                    'Supplier risk assessment',
                                    'TISAX label verification',
                                    'Security capability evaluation',
                                    'Gap analysis and remediation planning'
                                  ]
                                },
                                {
                                  phase: 'Integration Phase',
                                  icon: Network,
                                  color: 'from-emerald-500 to-teal-600',
                                  activities: [
                                    'Contract security clauses',
                                    'Information sharing agreements',
                                    'Technical integration requirements',
                                    'Incident response coordination'
                                  ]
                                },
                                {
                                  phase: 'Monitoring Phase',
                                  icon: Activity,
                                  color: 'from-purple-500 to-pink-600',
                                  activities: [
                                    'Continuous risk monitoring',
                                    'Label validity tracking',
                                    'Performance metrics collection',
                                    'Regular compliance reviews'
                                  ]
                                }
                              ].map((phase, index) => {
                                const IconComponent = phase.icon;
                                return (
                                  <motion.div
                                    key={phase.phase}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    class="bg-slate-900/50 rounded-lg p-4 border border-slate-700"
                                  >
                                    <div class="text-center mb-4">
                                      <div class=>
                                        <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                      </div>
                                      <h4 class="font-bold text-white">{phase.phase}</h4>
                                    </div>
                                    <div class="space-y-2">
                                      {phase.activities.map((activity, idx) => (
                                        <div key={idx} class="text-sm text-slate-300 flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          {activity}
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Continuous Improvement Section */}
                <TabsContent value="continuous-improvement" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Kontinuierliche Verbesserung</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-green-300 mb-4">Kontinuierliche Verbesserung in TISAX</h3>
                            <p class="text-slate-300 mb-4">
                              TISAX ist kein einmaliger Zertifizierungsprozess, sondern ein kontinuierlicher Verbesserungsansatz 
                              für die Informationssicherheit in der Automobilindustrie. Die kontinuierliche Verbesserung gewährleistet, 
                              dass Sicherheitsmaßnahmen mit den sich entwickelnden Bedrohungen und technologischen Fortschritten Schritt halten.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <TrendingUp class="h-6 w-6 text-green-400 mb-2" ></TrendingUp>
                                <h4 class="font-semibold text-white mb-2">Fortlaufende Optimierung</h4>
                                <p class="text-sm text-slate-300">
                                  Regelmäßige Bewertung und Anpassung der Sicherheitsmaßnahmen basierend auf 
                                  neuen Erkenntnissen und sich ändernden Anforderungen.
                                </p>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Activity class="h-6 w-6 text-blue-400 mb-2" ></Activity>
                                <h4 class="font-semibold text-white mb-2">Proaktive Anpassung</h4>
                                <p class="text-sm text-slate-300">
                                  Vorausschauende Identifikation von Verbesserungsmöglichkeiten und 
                                  zeitnahe Implementierung von Sicherheitsupdates.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <BarChart3 class="h-6 w-6 text-purple-400 mr-3" ></BarChart3>
                                  <h3 class="text-xl font-bold text-white">Monitoring & Messung</h3>
                                </div>
                                <div class="space-y-4">
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-purple-300 mb-2">Key Performance Indicators (KPIs)</h4>
                                    <ul class="space-y-2 text-sm text-slate-300">
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Anzahl der entdeckten Sicherheitsvorfälle
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Durchschnittliche Reaktionszeit bei Incidents
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Compliance-Rate der implementierten Controls
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Mitarbeiterschulungsabschlussrate
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-purple-300 mb-2">Monitoring-Tools</h4>
                                    <ul class="space-y-2 text-sm text-slate-300">
                                      <li class="flex items-start gap-2">
                                        <Monitor class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></Monitor>
                                        Security Information and Event Management (SIEM)
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <Monitor class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></Monitor>
                                        Vulnerability Assessment Tools
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <Monitor class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></Monitor>
                                        Compliance Dashboard und Reporting
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <RotateCcw class="h-6 w-6 text-orange-400 mr-3" ></RotateCcw>
                                  <h3 class="text-xl font-bold text-white">Verbesserungszyklus</h3>
                                </div>
                                <div class="space-y-4">
                                  {[
                                    {
                                      phase: "Plan",
                                      description: "Identifikation von Verbesserungsmöglichkeiten",
                                      color: "text-blue-300",
                                      icon: Target
                                    },
                                    {
                                      phase: "Do",
                                      description: "Implementierung der geplanten Maßnahmen",
                                      color: "text-green-300",
                                      icon: Zap
                                    },
                                    {
                                      phase: "Check",
                                      description: "Überprüfung der Wirksamkeit",
                                      color: "text-yellow-300",
                                      icon: Eye
                                    },
                                    {
                                      phase: "Act",
                                      description: "Standardisierung erfolgreicher Änderungen",
                                      color: "text-purple-300",
                                      icon: CheckCircle
                                    }
                                  ].map((step, index) => {
                                    const IconComponent = step.icon;
                                    return (
                                      <div key={step.phase} class="bg-slate-800/50 rounded-lg p-3">
                                        <div class="flex items-center gap-3 mb-2">
                                          <div class="flex items-center justify-center w-8 h-8 bg-slate-700 rounded-full">
                                            <IconComponent class="h-4 w-4 text-white" ></IconComponent>
                                          </div>
                                          <div>
                                            <h4 class=font-semibold ${step.color}>{step.phase}</h4>
                                            <p class="text-sm text-slate-300">{step.description}</p>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <Card class="bg-slate-900/50 border-slate-700">
                            <CardContent class="p-6">
                              <div class="flex items-center mb-4">
                                <Brain class="h-6 w-6 text-cyan-400 mr-3" ></Brain>
                                <h3 class="text-xl font-bold text-white">Lessons Learned & Best Practices</h3>
                              </div>
                              <div class="space-y-4">
                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-cyan-300 mb-3">Dokumentation von Erkenntnissen</h4>
                                  <p class="text-sm text-slate-300 mb-3">
                                    Systematische Erfassung und Analyse von Erfahrungen aus Sicherheitsvorfällen, 
                                    Assessments und täglichen Betriebsabläufen.
                                  </p>
                                  <div>
                                    <div class="bg-slate-700/50 rounded p-3">
                                      <AlertTriangle class="h-5 w-5 text-red-400 mb-2" ></AlertTriangle>
                                      <h5 class="font-semibold text-red-300 text-sm">Incident Analysis</h5>
                                      <p class="text-xs text-slate-400">Detaillierte Untersuchung von Sicherheitsvorfällen</p>
                                    </div>
                                    <div class="bg-slate-700/50 rounded p-3">
                                      <Lightbulb class="h-5 w-5 text-yellow-400 mb-2" ></Lightbulb>
                                      <h5 class="font-semibold text-yellow-300 text-sm">Process Optimization</h5>
                                      <p class="text-xs text-slate-400">Verbesserung bestehender Sicherheitsprozesse</p>
                                    </div>
                                    <div class="bg-slate-700/50 rounded p-3">
                                      <Award class="h-5 w-5 text-green-400 mb-2" ></Award>
                                      <h5 class="font-semibold text-green-300 text-sm">Success Stories</h5>
                                      <p class="text-xs text-slate-400">Erfolgreiche Implementierungsansätze</p>
                                    </div>
                                  </div>
                                </div>

                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-cyan-300 mb-3">Knowledge Management</h4>
                                  <div>
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Wissensverteilung</h5>
                                      <ul class="space-y-1 text-sm text-slate-300">
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Regelmäßige Team-Workshops
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Interne Wissensdatenbank
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Cross-funktionale Zusammenarbeit
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Externe Vernetzung</h5>
                                      <ul class="space-y-1 text-sm text-slate-300">
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          TISAX Community Teilnahme
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Branchenveranstaltungen
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Peer-Austausch Programme
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card class="bg-slate-900/50 border-slate-700">
                            <CardContent class="p-6">
                              <div class="flex items-center mb-4">
                                <Calendar class="h-6 w-6 text-emerald-400 mr-3" ></Calendar>
                                <h3 class="text-xl font-bold text-white">Implementierungsroadmap</h3>
                              </div>
                              <div class="space-y-4">
                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-emerald-300 mb-3">Quartalweise Verbesserungsplanung</h4>
                                  <div>
                                    {[
                                      {
                                        quarter: "Q1",
                                        focus: "Assessment & Gap Analysis",
                                        activities: ["Baseline Assessment", "Risk Review", "Priority Setting"],
                                        color: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
                                      },
                                      {
                                        quarter: "Q2",
                                        focus: "Process Optimization",
                                        activities: ["Process Redesign", "Tool Integration", "Training Updates"],
                                        color: "from-green-500/20 to-green-600/20 border-green-500/30"
                                      },
                                      {
                                        quarter: "Q3",
                                        focus: "Technology Enhancement",
                                        activities: ["System Upgrades", "Automation Implementation", "Security Tooling"],
                                        color: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
                                      },
                                      {
                                        quarter: "Q4",
                                        focus: "Review & Planning",
                                        activities: ["Annual Review", "Compliance Check", "Next Year Planning"],
                                        color: "from-orange-500/20 to-orange-600/20 border-orange-500/30"
                                      }
                                    ].map((quarter, index) => (
                                      <motion.div
                                        key={quarter.quarter}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        class=bg-gradient-to-br ${quarter.color} rounded-lg p-4 border
                                      >
                                        <div class="text-center mb-3">
                                          <div class="inline-flex items-center justify-center w-8 h-8 bg-slate-700 rounded-full mb-2">
                                            <span class="text-sm font-bold text-white">{quarter.quarter}</span>
                                          </div>
                                          <h5 class="font-bold text-white text-sm">{quarter.focus}</h5>
                                        </div>
                                        <div class="space-y-1">
                                          {quarter.activities.map((activity, idx) => (
                                            <div key={idx} class="text-xs text-slate-300 flex items-start gap-1">
                                              <CheckCircle class="h-2 w-2 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                              {activity}
                                            </div>
                                          ))}
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Integration Standards Section */}
                <TabsContent value="integration" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Integration Standards</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-purple-300 mb-4">TISAX Integration in bestehende Standards</h3>
                            <p class="text-slate-300 mb-4">
                              TISAX wurde entwickelt, um nahtlos mit anderen Sicherheits- und Qualitätsstandards der 
                              Automobilindustrie zu harmonieren. Diese Integration gewährleistet Effizienz bei der 
                              Compliance-Verwaltung und vermeidet Redundanzen bei mehrfachen Zertifizierungen.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <GitMerge class="h-6 w-6 text-purple-400 mb-2" ></GitMerge>
                                <h4 class="font-semibold text-white mb-2">Standard-Harmonisierung</h4>
                                <p class="text-sm text-slate-300">
                                  Systematische Abstimmung von TISAX-Anforderungen mit ISO/IEC 27001, 
                                  IATF 16949 und anderen relevanten Standards.
                                </p>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Layers class="h-6 w-6 text-pink-400 mb-2" ></Layers>
                                <h4 class="font-semibold text-white mb-2">Integrierte Governance</h4>
                                <p class="text-sm text-slate-300">
                                  Gemeinsame Governance-Strukturen für überlappende Anforderungen 
                                  verschiedener Standards und Frameworks.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <Scale class="h-6 w-6 text-blue-400 mr-3" ></Scale>
                                  <h3 class="text-xl font-bold text-white">ISO/IEC 27001 Mapping</h3>
                                </div>
                                <div class="space-y-4">
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-blue-300 mb-2">Control-Überschneidungen</h4>
                                    <p class="text-sm text-slate-300 mb-3">
                                      Detaillierte Zuordnung von TISAX-Controls zu ISO 27001-Anhang A Controls 
                                      für effiziente Compliance-Verwaltung.
                                    </p>
                                    <div class="space-y-2">
                                      {[
                                        { tisax: "VDA ISM 1.1.1", iso: "A.5.1.1", overlap: "95%" },
                                        { tisax: "VDA ISM 2.3.1", iso: "A.8.1.1", overlap: "88%" },
                                        { tisax: "VDA ISM 3.2.4", iso: "A.12.6.1", overlap: "92%" },
                                        { tisax: "VDA ISM 4.1.2", iso: "A.16.1.2", overlap: "85%" }
                                      ].map((mapping, idx) => (
                                        <div key={idx} class="flex items-center justify-between text-xs">
                                          <span class="text-slate-300">{mapping.tisax} ↔ {mapping.iso}</span>
                                          <Badge variant="outline" class="text-xs">{mapping.overlap}</Badge>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-blue-300 mb-2">Gap-Analysis</h4>
                                    <ul class="space-y-1 text-sm text-slate-300">
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Automotive-spezifische Erweiterungen
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Supply Chain Security Fokus
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Prototype Protection Requirements
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <Building2 class="h-6 w-6 text-green-400 mr-3" ></Building2>
                                  <h3 class="text-xl font-bold text-white">IATF 16949 Integration</h3>
                                </div>
                                <div class="space-y-4">
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-green-300 mb-2">Qualitätsmanagement-Synergien</h4>
                                    <p class="text-sm text-slate-300 mb-3">
                                      Integration von TISAX-Informationssicherheitsanforderungen in bestehende 
                                      IATF 16949-Qualitätsmanagementsysteme.
                                    </p>
                                    <div class="space-y-2">
                                      <div class="bg-slate-700/50 rounded p-3">
                                        <h5 class="font-semibold text-white text-sm mb-1">Dokumentenmanagement</h5>
                                        <p class="text-xs text-slate-400">
                                          Gemeinsame Dokumentenlenkung für Qualitäts- und Sicherheitsdokumentation
                                        </p>
                                      </div>
                                      <div class="bg-slate-700/50 rounded p-3">
                                        <h5 class="font-semibold text-white text-sm mb-1">Risikomanagement</h5>
                                        <p class="text-xs text-slate-400">
                                          Integrierte Betrachtung von Qualitäts- und Informationssicherheitsrisiken
                                        </p>
                                      </div>
                                      <div class="bg-slate-700/50 rounded p-3">
                                        <h5 class="font-semibold text-white text-sm mb-1">Lieferantenbewertung</h5>
                                        <p class="text-xs text-slate-400">
                                          Kombinierte Qualitäts- und Sicherheitsbewertung von Zulieferern
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <Card class="bg-slate-900/50 border-slate-700">
                            <CardContent class="p-6">
                              <div class="flex items-center mb-4">
                                <Network class="h-6 w-6 text-cyan-400 mr-3" ></Network>
                                <h3 class="text-xl font-bold text-white">Framework-Integration Strategien</h3>
                              </div>
                              <div class="space-y-4">
                                <div>
                                  {[
                                    {
                                      framework: "NIST Cybersecurity Framework",
                                      integration: "Core Functions Mapping",
                                      benefits: ["Identify", "Protect", "Detect", "Respond", "Recover"],
                                      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
                                      icon: Shield
                                    },
                                    {
                                      framework: "COBIT 2019",
                                      integration: "Governance Alignment",
                                      benefits: ["IT Governance", "Enterprise Risk", "Resource Optimization"],
                                      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
                                      icon: Settings
                                    },
                                    {
                                      framework: "ISO 31000",
                                      integration: "Risk Management",
                                      benefits: ["Risk Assessment", "Risk Treatment", "Risk Monitoring"],
                                      color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
                                      icon: AlertTriangle
                                    }
                                  ].map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                      <motion.div
                                        key={item.framework}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        class=bg-gradient-to-br ${item.color} rounded-lg p-4 border
                                      >
                                        <div class="text-center mb-4">
                                          <div class="inline-flex p-3 rounded-full bg-slate-700 mb-3">
                                            <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                          </div>
                                          <h4 class="font-bold text-white text-sm">{item.framework}</h4>
                                          <p class="text-xs text-slate-400 mt-1">{item.integration}</p>
                                        </div>
                                        <div class="space-y-2">
                                          {item.benefits.map((benefit, idx) => (
                                            <div key={idx} class="text-xs text-slate-300 flex items-start gap-2">
                                              <CheckCircle class="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                              {benefit}
                                            </div>
                                          ))}
                                        </div>
                                      </motion.div>
                                    );
                                  })}
                                </div>

                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-cyan-300 mb-3">Integration Best Practices</h4>
                                  <div>
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Technische Integration</h5>
                                      <ul class="space-y-1 text-sm text-slate-300">
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Einheitliche GRC-Plattform
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Automatisierte Compliance-Checks
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Integriertes Dashboard
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Cross-Standard Reporting
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Organisatorische Integration</h5>
                                      <ul class="space-y-1 text-sm text-slate-300">
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Gemeinsame Governance-Gremien
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Integrierte Auditplanung
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Cross-funktionale Teams
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <ChevronRight class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></ChevronRight>
                                          Einheitliche Schulungsprogramme
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Industry Best Practices Section */}
                <TabsContent value="industry-practices" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Industry Best Practices</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-amber-300 mb-4">Bewährte Praktiken der Automobilindustrie</h3>
                            <p class="text-slate-300 mb-4">
                              Die Automobilindustrie hat über Jahre hinweg bewährte Praktiken für die TISAX-Implementierung 
                              entwickelt. Diese Erkenntnisse basieren auf den Erfahrungen führender OEMs und Tier-1-Zulieferer 
                              und bieten praxiserprobte Lösungsansätze für typische Herausforderungen.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Factory class="h-6 w-6 text-amber-400 mb-2" ></Factory>
                                <h4 class="font-semibold text-white mb-2">OEM-Anforderungen</h4>
                                <p class="text-sm text-slate-300">
                                  Spezifische Sicherheitsanforderungen und Erwartungen der großen 
                                  Automobilhersteller an ihre Zulieferkette.
                                </p>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Briefcase class="h-6 w-6 text-orange-400 mb-2" ></Briefcase>
                                <h4 class="font-semibold text-white mb-2">Tier-1 Strategien</h4>
                                <p class="text-sm text-slate-300">
                                  Erprobte Implementierungsstrategien von führenden Tier-1-Zulieferern 
                                  für effiziente TISAX-Compliance.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <Building class="h-6 w-6 text-blue-400 mr-3" ></Building>
                                  <h3 class="text-xl font-bold text-white">OEM Best Practices</h3>
                                </div>
                                <div class="space-y-4">
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-blue-300 mb-2">Supplier Requirements</h4>
                                    <div class="space-y-3">
                                      {[
                                        {
                                          oem: "Volkswagen Group",
                                          requirement: "AL3 für alle strategischen Zulieferer",
                                          timeline: "24 Monate Umsetzungsfrist",
                                          support: "Dedicated Support Team"
                                        },
                                        {
                                          oem: "BMW Group",
                                          requirement: "AL2 minimum, AL3 für Premium-Projekte",
                                          timeline: "18 Monate Standard",
                                          support: "Supplier Development Program"
                                        },
                                        {
                                          oem: "Mercedes-Benz",
                                          requirement: "Risiko-basierte AL-Zuordnung",
                                          timeline: "Projektspezifisch",
                                          support: "Joint Implementation Workshops"
                                        }
                                      ].map((item, idx) => (
                                        <div key={idx} class="bg-slate-700/50 rounded p-3">
                                          <div class="flex items-center justify-between mb-2">
                                            <h5 class="font-semibold text-white text-sm">{item.oem}</h5>
                                            <Badge variant="outline" class="text-xs">{item.timeline}</Badge>
                                          </div>
                                          <p class="text-xs text-slate-300 mb-1">{item.requirement}</p>
                                          <p class="text-xs text-slate-400">{item.support}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-blue-300 mb-2">Compliance Monitoring</h4>
                                    <ul class="space-y-1 text-sm text-slate-300">
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Quartalsweise Supplier-Assessments
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Automatisierte Compliance-Dashboards
                                      </li>
                                      <li class="flex items-start gap-2">
                                        <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                        Risk-based Audit-Programme
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <Truck class="h-6 w-6 text-green-400 mr-3" ></Truck>
                                  <h3 class="text-xl font-bold text-white">Tier-1 Supplier Strategien</h3>
                                </div>
                                <div class="space-y-4">
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-green-300 mb-2">Implementierungsansätze</h4>
                                    <div class="space-y-3">
                                      <div class="bg-slate-700/50 rounded p-3">
                                        <h5 class="font-semibold text-white text-sm mb-1">Phased Implementation</h5>
                                        <p class="text-xs text-slate-300 mb-2">
                                          Stufenweise Einführung beginnend mit kritischen Geschäftsbereichen
                                        </p>
                                        <div class="flex flex-wrap gap-1">
                                          <Badge variant="outline" class="text-xs">Phase 1: Core IT</Badge>
                                          <Badge variant="outline" class="text-xs">Phase 2: R&D</Badge>
                                          <Badge variant="outline" class="text-xs">Phase 3: Production</Badge>
                                        </div>
                                      </div>
                                      <div class="bg-slate-700/50 rounded p-3">
                                        <h5 class="font-semibold text-white text-sm mb-1">Center of Excellence</h5>
                                        <p class="text-xs text-slate-300 mb-2">
                                          Zentrale Expertise-Teams für konzernweite TISAX-Implementierung
                                        </p>
                                        <ul class="space-y-1 text-xs text-slate-400">
                                          <li>• Security Architecture Team</li>
                                          <li>• Compliance Management Office</li>
                                          <li>• Training & Awareness Center</li>
                                        </ul>
                                      </div>
                                      <div class="bg-slate-700/50 rounded p-3">
                                        <h5 class="font-semibold text-white text-sm mb-1">Cross-Site Harmonization</h5>
                                        <p class="text-xs text-slate-300">
                                          Einheitliche Sicherheitsstandards über alle Produktionsstandorte hinweg
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <Card class="bg-slate-900/50 border-slate-700">
                            <CardContent class="p-6">
                              <div class="flex items-center mb-4">
                                <Award class="h-6 w-6 text-purple-400 mr-3" ></Award>
                                <h3 class="text-xl font-bold text-white">Success Stories & Lessons Learned</h3>
                              </div>
                              <div class="space-y-4">
                                <div>
                                  {[
                                    {
                                      company: "Continental AG",
                                      challenge: "Global rollout across 200+ sites",
                                      solution: "Standardized security architecture with local adaptations",
                                      result: "98% compliance rate within 18 months",
                                      key_learnings: [
                                        "Early stakeholder engagement critical",
                                        "Local champions accelerate adoption",
                                        "Automation reduces compliance costs"
                                      ],
                                      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30"
                                    },
                                    {
                                      company: "Bosch Group",
                                      challenge: "Integration with existing ISO 27001",
                                      solution: "Unified security management system",
                                      result: "25% reduction in audit overhead",
                                      key_learnings: [
                                        "Leverage existing ISO controls",
                                        "Focus on automotive-specific gaps",
                                        "Integrated training programs effective"
                                      ],
                                      color: "from-green-500/20 to-teal-500/20 border-green-500/30"
                                    }
                                  ].map((story, index) => (
                                    <motion.div
                                      key={story.company}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.5, delay: index * 0.1 }}
                                      class=bg-gradient-to-br ${story.color} rounded-lg p-4 border
                                    >
                                      <div class="mb-4">
                                        <h4 class="font-bold text-white mb-1">{story.company}</h4>
                                        <p class="text-sm text-slate-300 mb-2">
                                          <span class="font-semibold">Challenge:</span> {story.challenge}
                                        </p>
                                        <p class="text-sm text-slate-300 mb-2">
                                          <span class="font-semibold">Solution:</span> {story.solution}
                                        </p>
                                        <p class="text-sm text-green-300 mb-3">
                                          <span class="font-semibold">Result:</span> {story.result}
                                        </p>
                                      </div>
                                      <div>
                                        <h5 class="font-semibold text-white text-sm mb-2">Key Learnings:</h5>
                                        <ul class="space-y-1">
                                          {story.key_learnings.map((learning, idx) => (
                                            <li key={idx} class="text-xs text-slate-300 flex items-start gap-2">
                                              <Lightbulb class="h-3 w-3 text-yellow-400 mt-0.5 flex-shrink-0" ></Lightbulb>
                                              {learning}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>

                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-purple-300 mb-3">Common Pitfalls & Mitigation Strategies</h4>
                                  <div>
                                    {[
                                      {
                                        pitfall: "Underestimating Implementation Effort",
                                        impact: "Project delays and budget overruns",
                                        mitigation: "Comprehensive gap analysis and realistic timeline planning",
                                        icon: Clock
                                      },
                                      {
                                        pitfall: "Insufficient Change Management",
                                        impact: "Employee resistance and poor adoption",
                                        mitigation: "Early stakeholder engagement and comprehensive training",
                                        icon: Users
                                      },
                                      {
                                        pitfall: "Overcomplicating Technical Solutions",
                                        impact: "High costs and maintenance overhead",
                                        mitigation: "Focus on business needs and leverage existing infrastructure",
                                        icon: Settings
                                      }
                                    ].map((item, idx) => {
                                      const IconComponent = item.icon;
                                      return (
                                        <div key={idx} class="bg-slate-700/50 rounded p-3">
                                          <div class="flex items-center mb-2">
                                            <IconComponent class="h-4 w-4 text-red-400 mr-2" ></IconComponent>
                                            <h5 class="font-semibold text-red-300 text-sm">{item.pitfall}</h5>
                                          </div>
                                          <p class="text-xs text-slate-400 mb-2">{item.impact}</p>
                                          <p class="text-xs text-green-300">
                                            <span class="font-semibold">Mitigation:</span> {item.mitigation}
                                          </p>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Tools & Automation Section */}
                <TabsContent value="tools-automation" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Tools & Automation</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-cyan-300 mb-4">TISAX Automation & Tooling</h3>
                            <p class="text-slate-300 mb-4">
                              Moderne TISAX-Implementierungen nutzen umfassende Automatisierung und spezialisierte 
                              Tools zur Effizienzsteigerung, Kostenreduzierung und Verbesserung der Compliance-Qualität. 
                              Diese technologiegestützte Herangehensweise ermöglicht kontinuierliche Überwachung und 
                              proaktive Sicherheitsmaßnahmen.
                            </p>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Zap class="h-6 w-6 text-cyan-400 mb-2" ></Zap>
                                <h4 class="font-semibold text-white mb-2">Automatisierte Compliance</h4>
                                <p class="text-sm text-slate-300">
                                  Kontinuierliche Überwachung und automatische Bewertung der 
                                  TISAX-Kontrollanforderungen in Echtzeit.
                                </p>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <Server class="h-6 w-6 text-blue-400 mb-2" ></Server>
                                <h4 class="font-semibold text-white mb-2">Integrierte Toolchain</h4>
                                <p class="text-sm text-slate-300">
                                  Nahtlose Integration von Sicherheitstools in bestehende 
                                  IT-Landschaften und Entwicklungsprozesse.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <Database class="h-6 w-6 text-emerald-400 mr-3" ></Database>
                                  <h3 class="text-xl font-bold text-white">GRC-Plattformen</h3>
                                </div>
                                <div class="space-y-4">
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-emerald-300 mb-2">Enterprise GRC Solutions</h4>
                                    <div class="space-y-3">
                                      {[
                                        {
                                          platform: "ServiceNow GRC",
                                          features: ["Integrated Risk Management", "Automated Assessments", "Policy Management"],
                                          tisax_support: "Dedicated TISAX modules available",
                                          rating: "5/5"
                                        },
                                        {
                                          platform: "RSA Archer",
                                          features: ["Risk Register", "Control Testing", "Vendor Risk Management"],
                                          tisax_support: "Custom TISAX frameworks",
                                          rating: "4/5"
                                        },
                                        {
                                          platform: "MetricStream",
                                          features: ["Compliance Management", "Audit Management", "Document Control"],
                                          tisax_support: "VDA ISM integration",
                                          rating: "4/5"
                                        }
                                      ].map((platform, idx) => (
                                        <div key={idx} class="bg-slate-700/50 rounded p-3">
                                          <div class="flex items-center justify-between mb-2">
                                            <h5 class="font-semibold text-white text-sm">{platform.platform}</h5>
                                            <div class="flex items-center gap-1">
                                              {[...Array(5)].map((_, i) => (
                                                <Star 
                                                  key={i} 
                                                  class=h-3 w-3 $ 
                                                ></Star>
                                              ))}
                                            </div>
                                          </div>
                                          <div class="space-y-1 mb-2">
                                            {platform.features.map((feature, fidx) => (
                                              <div key={fidx} class="text-xs text-slate-300 flex items-start gap-1">
                                                <CheckCircle class="h-2 w-2 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                                {feature}
                                              </div>
                                            ))}
                                          </div>
                                          <p class="text-xs text-cyan-300">{platform.tisax_support}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card class="bg-slate-900/50 border-slate-700">
                              <CardContent class="p-6">
                                <div class="flex items-center mb-4">
                                  <Shield class="h-6 w-6 text-orange-400 mr-3" ></Shield>
                                  <h3 class="text-xl font-bold text-white">Security Automation Tools</h3>
                                </div>
                                <div class="space-y-4">
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-orange-300 mb-2">Vulnerability Management</h4>
                                    <div class="space-y-2">
                                      {[
                                        { tool: "Nessus Professional", category: "Vulnerability Scanning", automation: "Scheduled scans, auto-remediation" },
                                        { tool: "Qualys VMDR", category: "Threat Detection", automation: "Continuous monitoring, risk scoring" },
                                        { tool: "Rapid7 InsightVM", category: "Asset Discovery", automation: "Real-time asset tracking" }
                                      ].map((tool, idx) => (
                                        <div key={idx} class="bg-slate-700/50 rounded p-2">
                                          <div class="flex items-center justify-between mb-1">
                                            <h5 class="font-semibold text-white text-xs">{tool.tool}</h5>
                                            <Badge variant="outline" class="text-xs">{tool.category}</Badge>
                                          </div>
                                          <p class="text-xs text-slate-400">{tool.automation}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div class="bg-slate-800/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-orange-300 mb-2">SIEM & Security Analytics</h4>
                                    <div class="space-y-2">
                                      {[
                                        { tool: "Splunk Enterprise Security", use_case: "Log analysis, incident correlation" },
                                        { tool: "IBM QRadar", use_case: "Threat intelligence, behavioral analytics" },
                                        { tool: "Microsoft Sentinel", use_case: "Cloud-native SIEM, automation workflows" }
                                      ].map((tool, idx) => (
                                        <div key={idx} class="bg-slate-700/50 rounded p-2">
                                          <h5 class="font-semibold text-white text-xs mb-1">{tool.tool}</h5>
                                          <p class="text-xs text-slate-400">{tool.use_case}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          <Card class="bg-slate-900/50 border-slate-700">
                            <CardContent class="p-6">
                              <div class="flex items-center mb-4">
                                <Code class="h-6 w-6 text-purple-400 mr-3" ></Code>
                                <h3 class="text-xl font-bold text-white">DevSecOps Integration</h3>
                              </div>
                              <div class="space-y-4">
                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-purple-300 mb-3">CI/CD Security Pipeline</h4>
                                  <div>
                                    {[
                                      {
                                        stage: "Code Analysis",
                                        tools: ["SonarQube", "Checkmarx", "Veracode"],
                                        automation: "Pre-commit hooks, automated scanning",
                                        icon: Code,
                                        color: "text-blue-400"
                                      },
                                      {
                                        stage: "Container Security",
                                        tools: ["Twistlock", "Aqua Security", "Clair"],
                                        automation: "Image scanning, compliance checks",
                                        icon: Package,
                                        color: "text-green-400"
                                      },
                                      {
                                        stage: "Infrastructure Security",
                                        tools: ["Terraform Compliance", "Chef InSpec", "AWS Config"],
                                        automation: "Infrastructure as Code validation",
                                        icon: Cloud,
                                        color: "text-orange-400"
                                      }
                                    ].map((stage, index) => {
                                      const IconComponent = stage.icon;
                                      return (
                                        <motion.div
                                          key={stage.stage}
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: index * 0.1 }}
                                          class="bg-slate-700/50 rounded-lg p-3"
                                        >
                                          <div class="text-center mb-3">
                                            <IconComponent class=h-6 w-6 ${stage.color} mx-auto mb-2 ></IconComponent>
                                            <h5 class="font-bold text-white text-sm">{stage.stage}</h5>
                                          </div>
                                          <div class="space-y-2">
                                            <div>
                                              <h6 class="font-semibold text-slate-300 text-xs mb-1">Tools:</h6>
                                              <div class="flex flex-wrap gap-1">
                                                {stage.tools.map((tool, idx) => (
                                                  <Badge key={idx} variant="outline" class="text-xs">{tool}</Badge>
                                                ))}
                                              </div>
                                            </div>
                                            <div>
                                              <h6 class="font-semibold text-slate-300 text-xs mb-1">Automation:</h6>
                                              <p class="text-xs text-slate-400">{stage.automation}</p>
                                            </div>
                                          </div>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </div>

                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-purple-300 mb-3">Compliance as Code</h4>
                                  <div>
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Policy Automation</h5>
                                      <ul class="space-y-1 text-sm text-slate-300">
                                        <li class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          TISAX control validation scripts
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          Automated evidence collection
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-green-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          Configuration drift detection
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 class="font-semibold text-white text-sm mb-2">Reporting Automation</h5>
                                      <ul class="space-y-1 text-sm text-slate-300">
                                        <li class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          Automated compliance dashboards
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          Real-time violation alerts
                                        </li>
                                        <li class="flex items-start gap-2">
                                          <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                          Audit-ready documentation
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          <Card class="bg-slate-900/50 border-slate-700">
                            <CardContent class="p-6">
                              <div class="flex items-center mb-4">
                                <BarChart3 class="h-6 w-6 text-cyan-400 mr-3" ></BarChart3>
                                <h3 class="text-xl font-bold text-white">ROI & Efficiency Metrics</h3>
                              </div>
                              <div class="space-y-4">
                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-cyan-300 mb-3">Automation Benefits</h4>
                                  <div>
                                    <div class="bg-slate-700/50 rounded p-3 text-center">
                                      <div class="text-2xl font-bold text-green-400 mb-1">75%</div>
                                      <div class="text-sm text-slate-300">Reduzierung manueller Arbeit</div>
                                    </div>
                                    <div class="bg-slate-700/50 rounded p-3 text-center">
                                      <div class="text-2xl font-bold text-blue-400 mb-1">60%</div>
                                      <div class="text-sm text-slate-300">Schnellere Incident Response</div>
                                    </div>
                                    <div class="bg-slate-700/50 rounded p-3 text-center">
                                      <div class="text-2xl font-bold text-purple-400 mb-1">45%</div>
                                      <div class="text-sm text-slate-300">Kostenreduktion bei Audits</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-cyan-300 mb-3">Implementation Timeline</h4>
                                  <div class="space-y-2">
                                    {[
                                      { phase: "Tool Evaluation & Selection", duration: "4-6 Wochen", effort: "Low" },
                                      { phase: "Pilot Implementation", duration: "8-12 Wochen", effort: "Medium" },
                                      { phase: "Enterprise Rollout", duration: "16-24 Wochen", effort: "High" },
                                      { phase: "Optimization & Tuning", duration: "Ongoing", effort: "Low" }
                                    ].map((phase, idx) => (
                                      <div key={idx} class="flex items-center justify-between bg-slate-700/50 rounded p-3">
                                        <div>
                                          <h5 class="font-semibold text-white text-sm">{phase.phase}</h5>
                                          <p class="text-xs text-slate-400">{phase.duration}</p>
                                        </div>
                                        <Badge>
                                          {phase.effort}
                                        </Badge>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Resources Section */}
                <TabsContent value="resources" class="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">TISAX Ressourcen</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          <div class="bg-gradient-to-r from-download-500/10 to-book-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4">Umfassende TISAX Ressourcen</h3>
                            <p class="text-slate-300 mb-4">
                              Nutzen Sie diese kuratierte Sammlung von offiziellen Dokumenten, Tools und 
                              Ressourcen für eine erfolgreiche TISAX Implementation und Zertifizierung.
                            </p>
                          </div>

                          <div>
                            {[
                              {
                                category: 'Official Documents',
                                icon: FileText,
                                color: 'from-blue-500 to-indigo-600',
                                resources: [
                                  {
                                    title: 'VDA ISM Catalogue',
                                    type: 'PDF',
                                    version: '5.0.1',
                                    size: '200+ pages',
                                    description: 'Complete control objectives catalog'
                                  },
                                  {
                                    title: 'TISAX Handbook',
                                    type: 'PDF',
                                    version: '2.3',
                                    size: '150 pages',
                                    description: 'Assessment methodology guide'
                                  },
                                  {
                                    title: 'ENX Association Guidelines',
                                    type: 'PDF',
                                    version: 'Current',
                                    size: '80 pages',
                                    description: 'Participant guidelines and procedures'
                                  }
                                ]
                              },
                              {
                                category: 'Implementation Tools',
                                icon: Wrench,
                                color: 'from-emerald-500 to-teal-600',
                                resources: [
                                  {
                                    title: 'Assessment Readiness Tool',
                                    type: 'Excel',
                                    version: '3.1',
                                    size: '5 MB',
                                    description: 'Self-assessment and gap analysis'
                                  },
                                  {
                                    title: 'Evidence Collection Template',
                                    type: 'Word',
                                    version: '2.0',
                                    size: '2 MB',
                                    description: 'Structured evidence documentation'
                                  },
                                  {
                                    title: 'Risk Assessment Framework',
                                    type: 'Excel',
                                    version: '4.2',
                                    size: '8 MB',
                                    description: 'Automotive risk evaluation tool'
                                  }
                                ]
                              },
                              {
                                category: 'Training Materials',
                                icon: GraduationCap,
                                color: 'from-purple-500 to-pink-600',
                                resources: [
                                  {
                                    title: 'TISAX Foundation Course',
                                    type: 'Online',
                                    version: 'Current',
                                    size: '8 hours',
                                    description: 'Comprehensive introduction to TISAX'
                                  },
                                  {
                                    title: 'VDA ISM Training Slides',
                                    type: 'PowerPoint',
                                    version: '5.0',
                                    size: '120 slides',
                                    description: 'Technical training materials'
                                  },
                                  {
                                    title: 'Automotive Security Awareness',
                                    type: 'Video',
                                    version: '2024',
                                    size: '45 min',
                                    description: 'Industry-specific security training'
                                  }
                                ]
                              }
                            ].map((category, index) => {
                              const IconComponent = category.icon;
                              return (
                                <motion.div
                                  key={category.category}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
                                >
                                  <div class="p-6">
                                    <div class="flex items-center gap-3 mb-4">
                                      <div class=>
                                        <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                      </div>
                                      <h4 class="text-lg font-bold text-white">{category.category}</h4>
                                    </div>
                                    
                                    <div class="space-y-4">
                                      {category.resources.map((resource, idx) => (
                                        <div key={idx} class="bg-slate-900/50 rounded-lg p-3">
                                          <div class="flex items-center justify-between mb-2">
                                            <h5 class="font-semibold text-white text-sm">{resource.title}</h5>
                                            <div class="flex gap-1">
                                              <Badge variant="outline" class="text-xs">{resource.type}</Badge>
                                              <Badge variant="outline" class="text-xs">{resource.version}</Badge>
                                            </div>
                                          </div>
                                          <p class="text-xs text-slate-400 mb-2">{resource.description}</p>
                                          <div class="flex items-center justify-between">
                                            <span class="text-xs text-slate-500">{resource.size}</span>
                                            <Button size="sm" variant="ghost" class="h-6 px-2 text-xs">
                                              <Download class="h-3 w-3 mr-1" ></Download>
                                              Download
                                            </Button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <ExternalLink class="h-5 w-5 text-blue-400" ></ExternalLink>
                                Important Links
                              </h4>
                              <div class="space-y-3">
                                {[
                                  {
                                    title: 'VDA QMC Website',
                                    url: 'https://www.vda-qmc.de',
                                    description: 'Official VDA Quality Management Center'
                                  },
                                  {
                                    title: 'ENX Association',
                                    url: 'https://www.enx.com',
                                    description: 'TISAX operator and portal provider'
                                  },
                                  {
                                    title: 'TISAX Exchange Portal',
                                    url: 'https://portal.enx.com',
                                    description: 'Participant registration and management'
                                  },
                                  {
                                    title: 'Accredited Assessment Providers',
                                    url: 'https://www.enx.com/assessors',
                                    description: 'List of qualified TISAX assessors'
                                  }
                                ].map((link, idx) => (
                                  <div key={idx} class="bg-slate-900/50 rounded p-3">
                                    <div class="flex items-center justify-between mb-1">
                                      <h5 class="font-semibold text-blue-300 text-sm">{link.title}</h5>
                                      <ExternalLink class="h-3 w-3 text-slate-400" ></ExternalLink>
                                    </div>
                                    <p class="text-xs text-slate-400 mb-2">{link.description}</p>
                                    <code class="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{link.url}</code>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Users class="h-5 w-5 text-emerald-400" ></Users>
                                Community & Support
                              </h4>
                              <div class="space-y-3">
                                {[
                                  {
                                    resource: 'VDA Working Group ISM',
                                    type: 'Industry Forum',
                                    access: 'Member companies only'
                                  },
                                  {
                                    resource: 'TISAX User Conference',
                                    type: 'Annual Event',
                                    access: 'Registration required'
                                  },
                                  {
                                    resource: 'Automotive Security Forum',
                                    type: 'Professional Network',
                                    access: 'Industry professionals'
                                  },
                                  {
                                    resource: 'ENX Support Portal',
                                    type: 'Technical Support',
                                    access: 'Registered participants'
                                  }
                                ].map((support, idx) => (
                                  <div key={idx} class="bg-slate-900/50 rounded p-3">
                                    <div class="flex items-center justify-between mb-1">
                                      <h5 class="font-semibold text-emerald-300 text-sm">{support.resource}</h5>
                                      <Badge variant="outline" class="text-xs">{support.type}</Badge>
                                    </div>
                                    <p class="text-xs text-slate-400">{support.access}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Quick Reference</h3>
                            <div>
                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-bold text-blue-300 mb-3">Assessment Levels</h4>
                                <div class="space-y-2 text-sm">
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL1 (Prototype)</span>
                                    <span class="text-slate-400">45 Controls</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL2 (Development)</span>
                                    <span class="text-slate-400">67 Controls</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL3 (High Protection)</span>
                                    <span class="text-slate-400">103 Controls</span>
                                  </div>
                                </div>
                              </div>

                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-bold text-emerald-300 mb-3">Implementation Timeline</h4>
                                <div class="space-y-2 text-sm">
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL1 Implementation</span>
                                    <span class="text-slate-400">2-4 Monate</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL2 Implementation</span>
                                    <span class="text-slate-400">4-8 Monate</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL3 Implementation</span>
                                    <span class="text-slate-400">8-18 Monate</span>
                                  </div>
                                </div>
                              </div>

                              <div class="bg-slate-900/50 rounded-lg p-4">
                                <h4 class="font-bold text-purple-300 mb-3">Investment Range</h4>
                                <div class="space-y-2 text-sm">
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL1 Costs</span>
                                    <span class="text-slate-400">€15k - €30k</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL2 Costs</span>
                                    <span class="text-slate-400">€30k - €75k</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span class="text-slate-300">AL3 Costs</span>
                                    <span class="text-slate-400">€75k - €200k</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Footer ></Footer>
    </div>`
};