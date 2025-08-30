export default {
  route: '/compliance/soc-2',
  title: 'SOC 2 Type II',
  description: 'Der Goldstandard für SaaS-Unternehmen und Service Provider.                  Demonstrieren Sie die Wirksamkeit Ihrer Sicherheitskontrollen über einen Zeitraum v',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CounterAnimation = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
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

    return <span ref={ref}>{count}{suffix}</span>;
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
                <Shield class="h-3 w-3 mr-1" ></Shield>
                SOC 2 Type II Guide
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
                  <Shield class="h-8 w-8 text-white" ></Shield>
                </div>
                <div>
                  <h1>SOC 2 Type II</h1>
                  <p class="text-xl text-blue-400">Trust Services Criteria</p>
                </div>
              </div>
              
              <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                Der Goldstandard für SaaS-Unternehmen und Service Provider. 
                Demonstrieren Sie die Wirksamkeit Ihrer Sicherheitskontrollen über einen Zeitraum von mindestens 6 Monaten.
              </p>
              
              <div class="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" class="bg-blue-500/10 border-blue-500/20 text-blue-300">
                  <Award class="h-4 w-4 mr-2" ></Award>
                  AICPA Standard
                </Badge>
                <Badge variant="outline" class="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  <Globe class="h-4 w-4 mr-2" ></Globe>
                  USA & International
                </Badge>
                <Badge variant="outline" class="bg-purple-500/10 border-purple-500/20 text-purple-300">
                  <Clock class="h-4 w-4 mr-2" ></Clock>
                  6-12 Monate Audit
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
                <Button>
                  <a href="/zertifizierung/soc2">
                    <ExternalLink class="h-4 w-4 mr-2" ></ExternalLink>
                    SOC 2 Produktseite
                  </a>
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
                      <CounterAnimation value={5} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Trust Services Criteria</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-emerald-400 mb-2">
                      <CounterAnimation value={64} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Control Points</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-purple-400 mb-2">
                      <CounterAnimation value={6} suffix="+" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Monate Audit</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-orange-400 mb-2">
                      <CounterAnimation value={90} suffix="%" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Enterprise Adoption</div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Overview */}
              <Card class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <CardContent class="p-6">
                  <h3 class="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                  <div class="space-y-3">
                    {[
                      'Trust Services Criteria im Detail',
                      'Type I vs Type II Unterschiede',
                      'Common Controls (CC) Implementation',
                      'Evidence Collection Best Practices',
                      'Audit-Prozess und Timeline',
                      'Continuous Monitoring Setup'
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
              {sections.map((item, index) => (
                <button
                  key={item.id}
                 }
                  class=
                >
                  <item.icon class= ></item>
                  <span>{item.title}</span>
                </button>
              ))}
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
                      Control Matrix Template
                    </Button>
                    <Button variant="outline" size="sm" class="w-full justify-start">
                      <FileText class="h-4 w-4 mr-2" ></FileText>
                      Evidence Checklist
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
                            SOC 2 (Service Organization Control 2) ist ein Prüfungsstandard, der vom American Institute 
                            of CPAs (AICPA) entwickelt wurde. Er bewertet, wie gut ein Service Provider personenbezogene 
                            Daten verwaltet und schützt, basierend auf fünf Trust Services Criteria.
                          </p>

                          <div>
                            <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                              <h3 class="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                                <Target class="h-5 w-5" ></Target>
                                Was ist SOC 2?
                              </h3>
                              <ul class="space-y-2 text-slate-300">
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Unabhängige Prüfung von Sicherheitskontrollen</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Fokus auf Cloud- und SaaS-Anbieter</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Kundenvertrauen durch externe Validierung</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Jährliche Wiederholung erforderlich</span>
                                </li>
                              </ul>
                            </div>

                            <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                              <h3 class="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                                <Building2 class="h-5 w-5" ></Building2>
                                Für wen relevant?
                              </h3>
                              <ul class="space-y-2 text-slate-300">
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>SaaS-Unternehmen</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Cloud Service Provider</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Managed Service Provider</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Data Processing Services</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-4">SOC 2 vs. andere Standards</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr class="border-b border-slate-600">
                                    <td class="p-3 font-semibold text-white">Aspekt</td>
                                    <td class="p-3 font-semibold text-blue-300 text-center">SOC 2</td>
                                    <td class="p-3 font-semibold text-emerald-300 text-center">ISO 27001</td>
                                    <td class="p-3 font-semibold text-purple-300 text-center">PCI DSS</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Fokus</td>
                                    <td class="p-3 text-center">Service Provider</td>
                                    <td class="p-3 text-center">Alle Organisationen</td>
                                    <td class="p-3 text-center">Zahlungskarten</td>
                                  </tr>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Flexibilität</td>
                                    <td class="p-3 text-center">Hoch (Custom)</td>
                                    <td class="p-3 text-center">Mittel (Framework)</td>
                                    <td class="p-3 text-center">Niedrig (Prescriptive)</td>
                                  </tr>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Audit-Periode</td>
                                    <td class="p-3 text-center">6-12 Monate</td>
                                    <td class="p-3 text-center">Punkt-in-Zeit</td>
                                    <td class="p-3 text-center">Jährlich</td>
                                  </tr>
                                  <tr class="border-b border-slate-700">
                                    <td class="p-3 text-slate-300">Kosten</td>
                                    <td class="p-3 text-center">$30k-100k</td>
                                    <td class="p-3 text-center">$50k-150k</td>
                                    <td class="p-3 text-center">$20k-80k</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Trust Prinzipien Section */}
                <section id="trust-prinzipien" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Trust Services Criteria</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 class="text-lg font-bold text-blue-300 mb-3">Die 5 Trust Services Criteria</h3>
                          <p class="text-slate-300 mb-4">
                            SOC 2 basiert auf fünf Trust Services Criteria (TSC), die vom AICPA definiert wurden. 
                            Security ist immer erforderlich, die anderen vier sind optional je nach Service.
                          </p>
                          <div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Shield class="h-6 w-6 text-blue-400 mx-auto mb-2" ></Shield>
                              <div class="font-semibold text-blue-300">Security</div>
                              <Badge class="bg-blue-500/20 text-blue-300 text-xs mt-1">Required</Badge>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Activity class="h-6 w-6 text-green-400 mx-auto mb-2" ></Activity>
                              <div class="font-semibold text-green-300">Availability</div>
                              <Badge variant="outline" class="text-xs mt-1">Optional</Badge>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Cpu class="h-6 w-6 text-purple-400 mx-auto mb-2" ></Cpu>
                              <div class="font-semibold text-purple-300">Processing</div>
                              <Badge variant="outline" class="text-xs mt-1">Optional</Badge>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Lock class="h-6 w-6 text-orange-400 mx-auto mb-2" ></Lock>
                              <div class="font-semibold text-orange-300">Confidentiality</div>
                              <Badge variant="outline" class="text-xs mt-1">Optional</Badge>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <UserCheck class="h-6 w-6 text-cyan-400 mx-auto mb-2" ></UserCheck>
                              <div class="font-semibold text-cyan-300">Privacy</div>
                              <Badge variant="outline" class="text-xs mt-1">Optional</Badge>
                            </div>
                          </div>
                        </div>

                        <div class="space-y-4">
                          {trustServicesCriteria.map((criteria, index) => {
                            const IconComponent = criteria.icon;
                            const isExpanded = expandedCriteria[criteria.code];
                            
                            return (
                              <motion.div
                                key={criteria.code}
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
                                      <h3 class="text-lg font-bold text-white">{criteria.category}</h3>
                                      <p class="text-slate-400 text-sm">{criteria.description}</p>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-3">
                                    
                                    <Badge variant="outline" class="text-xs">
                                       Controls
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
                                      {criteria.controlCategories.map((category) => (
                                        <div key={category.name} class="space-y-3">
                                          <h4 class="text-md font-semibold text-white flex items-center gap-2">
                                            <CircleDot class="h-4 w-4 text-blue-400" ></CircleDot>
                                            {category.name}
                                          </h4>
                                          <ul class="space-y-2 ml-6">
                                            {category.controls.map((control, idx) => (
                                              <li key={idx} class="flex items-start gap-3 text-sm">
                                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                                <span class="text-slate-300">{control}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
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

                {/* Typen Section */}
                <section id="typen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Type I vs Type II</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div>
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                              <Clock class="h-5 w-5" ></Clock>
                              SOC 2 Type I
                            </h3>
                            <div class="space-y-4">
                              <p class="text-slate-300">
                                Punkt-in-Zeit-Bewertung der Kontrollengestaltung
                              </p>
                              <div class="space-y-2">
                                <div class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5" ></CheckCircle>
                                  <span class="text-sm text-slate-300">Design der Kontrollen zu einem Stichtag</span>
                                </div>
                                <div class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5" ></CheckCircle>
                                  <span class="text-sm text-slate-300">Schnellere Durchführung (1-2 Monate)</span>
                                </div>
                                <div class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5" ></CheckCircle>
                                  <span class="text-sm text-slate-300">Kostengünstiger (~$20k-40k)</span>
                                </div>
                                <div class="flex items-start gap-2">
                                  <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5" ></AlertCircle>
                                  <span class="text-sm text-slate-300">Keine Aussage über Wirksamkeit</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                              <Activity class="h-5 w-5" ></Activity>
                              SOC 2 Type II
                            </h3>
                            <div class="space-y-4">
                              <p class="text-slate-300">
                                Bewertung der Kontrollenwirksamkeit über einen Zeitraum
                              </p>
                              <div class="space-y-2">
                                <div class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5" ></CheckCircle>
                                  <span class="text-sm text-slate-300">Operating Effectiveness über 6-12 Monate</span>
                                </div>
                                <div class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5" ></CheckCircle>
                                  <span class="text-sm text-slate-300">Höheres Kundenvertrauen</span>
                                </div>
                                <div class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5" ></CheckCircle>
                                  <span class="text-sm text-slate-300">Detaillierte Testergebnisse</span>
                                </div>
                                <div class="flex items-start gap-2">
                                  <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5" ></AlertCircle>
                                  <span class="text-sm text-slate-300">Höhere Kosten (~$40k-100k)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                          <h3 class="text-xl font-bold text-white mb-6">Entscheidungshilfe: Type I oder Type II?</h3>
                          <div>
                            <div class="text-center">
                              <div class="p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3">
                                <Rocket class="h-6 w-6 text-white" ></Rocket>
                              </div>
                              <h4 class="font-semibold text-white mb-2">Startups</h4>
                              <p class="text-sm text-slate-400 mb-3">
                                Oft Type I als erster Schritt, dann Upgrade zu Type II
                              </p>
                              <Badge class="bg-blue-500/20 text-blue-300">Type I → Type II</Badge>
                            </div>
                            <div class="text-center">
                              <div class="p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3">
                                <Building2 class="h-6 w-6 text-white" ></Building2>
                              </div>
                              <h4 class="font-semibold text-white mb-2">Etablierte SaaS</h4>
                              <p class="text-sm text-slate-400 mb-3">
                                Direkt Type II für maximales Kundenvertrauen
                              </p>
                              <Badge class="bg-emerald-500/20 text-emerald-300">Type II</Badge>
                            </div>
                            <div class="text-center">
                              <div class="p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3">
                                <Target class="h-6 w-6 text-white" ></Target>
                              </div>
                              <h4 class="font-semibold text-white mb-2">Enterprise Vendors</h4>
                              <p class="text-sm text-slate-400 mb-3">
                                Type II ist oft Mindestanforderung für RFPs
                              </p>
                              <Badge class="bg-purple-500/20 text-purple-300">Type II Required</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div>

                {/* Implementierung Section */}
                <section id="implementierung" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Implementation Guide</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="mb-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                          <h3 class="text-xl font-bold text-indigo-300 mb-4">SOC 2 Implementation Roadmap</h3>
                          <p class="text-slate-300 mb-4">
                            Eine erfolgreiche SOC 2 Type II Implementierung dauert typischerweise 9-12 Monate vom Start bis zum finalen Report.
                          </p>
                          <div>
                            <div class="bg-slate-800/50 rounded-lg p-4">
                              <div class="text-2xl font-bold text-indigo-400">3-4 Monate</div>
                              <div class="text-sm text-slate-400">Preparation & Design</div>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-4">
                              <div class="text-2xl font-bold text-purple-400">6-12 Monate</div>
                              <div class="text-sm text-slate-400">Audit Period</div>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-4">
                              <div class="text-2xl font-bold text-pink-400">2-3 Monate</div>
                              <div class="text-sm text-slate-400">Report Finalization</div>
                            </div>
                          </div>
                        </div>

                        <div class="space-y-6">
                          {implementationPhases.map((phase, index) => {
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
                                        <h5 class="text-sm font-semibold text-slate-300 mb-3">Hauptaufgaben:</h5>
                                        <ul class="space-y-2">
                                          {phase.tasks.map((task, idx) => (
                                            <li key={idx} class="flex items-start gap-2">
                                              <input 
                                                type="checkbox" 
                                                id=task-\${index}-\${idx}
                                                checked={checkedItems[\`task-\${index}-\${idx}\`] || false}
                                               -\${idx}\`)}
                                                class="mt-1 text-blue-500"
                                              />
                                              <label 
                                                for=task-\${index}-\${idx}
                                                class={cn(
                                                  "text-sm text-slate-300 cursor-pointer",
                                                  checkedItems[\`task-\${index}-\${idx}\`] && "line-through opacity-60"
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
                                          {phase.deliverables.map((deliverable) => (
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
                              <Lightbulb class="h-5 w-5 text-yellow-400" ></Lightbulb>
                              Best Practices
                            </h3>
                            <ul class="space-y-3">
                              {[
                                'Early Auditor Engagement - Wählen Sie Ihren Auditor 2-3 Monate vor dem Audit-Start',
                                'Automation First - Automatisieren Sie Evidence Collection wo möglich',
                                'Continuous Monitoring - Implementieren Sie Monitoring vom ersten Tag',
                                'Documentation Culture - Dokumentieren Sie alles von Anfang an',
                                'Regular Internal Reviews - Monatliche interne Control Reviews',
                                'Stakeholder Buy-in - Involvieren Sie alle Teams frühzeitig'
                              ].map((practice, idx) => (
                                <li key={idx} class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span class="text-sm text-slate-300">{practice}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                              <AlertTriangle class="h-5 w-5 text-red-400" ></AlertTriangle>
                              Common Pitfalls
                            </h3>
                            <ul class="space-y-3">
                              {[
                                'Zu später Start - Unterschätzen der Vorbereitungszeit',
                                'Scope Creep - Unkontrollierte Scope-Erweiterung',
                                'Manual Evidence - Zu viel manuelle Evidence Collection',
                                'Fehlende Ownership - Keine klaren Verantwortlichkeiten',
                                'Audit Fatigue - Teams werden müde von ständigen Requests',
                                'Budget-Überschreitung - Versteckte Kosten nicht eingeplant'
                              ].map((pitfall, idx) => (
                                <li key={idx} class="flex items-start gap-2">
                                  <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                  <span class="text-sm text-slate-300">{pitfall}</span>
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

                {/* Umfang Section */}
                <section id="umfang" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Scope Definition</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Scope Framework */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6 text-center">SOC 2 Scope Considerations</h3>
                            <div>
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Target class="h-5 w-5 text-blue-400" ></Target>
                                  System Boundary Definition
                                </h4>
                                <ul class="space-y-3">
                                  {[
                                    'Applications in scope (SaaS platform, APIs, mobile apps)',
                                    'Infrastructure components (cloud services, databases, networks)',
                                    'Third-party services und integrations',
                                    'Data flows und processing activities',
                                    'Geographic locations und data centers',
                                    'Organizational boundaries (subsidiaries, divisions)',
                                    'Time periods für Type II audits (minimum 6 months)'
                                  ].map((item, idx) => (
                                    <li key={idx} class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      <span class="text-sm text-slate-300">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Building2 class="h-5 w-5 text-emerald-400" ></Building2>
                                  Service Organization Types
                                </h4>
                                <div class="space-y-4">
                                  {[
                                    {
                                      type: 'Type A: Direct Services',
                                      description: 'Services die direkt an User Entities bereitgestellt werden',
                                      examples: ['SaaS Applications', 'Cloud Infrastructure', 'Managed IT Services']
                                    },
                                    {
                                      type: 'Type B: Subservice Organizations',
                                      description: 'Services für andere Service Organizations',
                                      examples: ['Cloud Hosting Provider', 'Payment Processors', 'Identity Providers']
                                    }
                                  ].map((serviceType) => (
                                    <div key={serviceType.type} class="bg-slate-900/50 rounded-lg p-4">
                                      <h5 class="font-semibold text-white mb-2">{serviceType.type}</h5>
                                      <p class="text-sm text-slate-300 mb-2">{serviceType.description}</p>
                                      <div class="flex flex-wrap gap-1">
                                        {serviceType.examples.map((example) => (
                                          <Badge key={example} variant="outline" class="text-xs">
                                            {example}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Scoping Workshop Framework */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Scoping Workshop Methodology</h3>
                            <div>
                              {[
                                {
                                  phase: 'Discovery Phase',
                                  duration: '2-4 Wochen',
                                  icon: Search,
                                  activities: [
                                    'Current State Assessment',
                                    'Technology Stack Mapping',
                                    'Data Flow Analysis',
                                    'Risk Assessment',
                                    'Stakeholder Interviews',
                                    'Compliance Gap Analysis'
                                  ]
                                },
                                {
                                  phase: 'Analysis Phase',
                                  duration: '1-2 Wochen',
                                  icon: BarChart3,
                                  activities: [
                                    'Trust Services Criteria Mapping',
                                    'Control Objectives Identification',
                                    'Materiality Assessment',
                                    'Complementary User Entity Controls',
                                    'Subservice Organization Analysis',
                                    'Cost-Benefit Analysis'
                                  ]
                                },
                                {
                                  phase: 'Definition Phase',
                                  duration: '1 Woche',
                                  icon: FileText,
                                  activities: [
                                    'Scope Statement Drafting',
                                    'System Description Creation',
                                    'Control Matrix Development',
                                    'Stakeholder Review',
                                    'Auditor Pre-engagement',
                                    'Final Scope Approval'
                                  ]
                                }
                              ].map((phase) => {
                                const IconComponent = phase.icon;
                                return (
                                  <div key={phase.phase} class="bg-slate-900/50 rounded-lg p-4">
                                    <div class="flex items-center gap-3 mb-4">
                                      <IconComponent class="h-5 w-5 text-blue-400" ></IconComponent>
                                      <div>
                                        <h4 class="font-semibold text-white">{phase.phase}</h4>
                                        <div class="text-xs text-slate-400">{phase.duration}</div>
                                      </div>
                                    </div>
                                    <ul class="space-y-1">
                                      {phase.activities.map((activity, idx) => (
                                        <li key={idx} class="text-xs text-slate-300 flex items-center gap-2">
                                          <Circle class="h-2 w-2 fill-current" ></Circle>
                                          {activity}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })
                            }
                            </div>
                          </div>

                          {/* Scoping Decision Matrix */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Scoping Decision Matrix</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr class="border-b border-slate-600">
                                    <td class="p-3 font-semibold text-white">Component</td>
                                    <td class="p-3 font-semibold text-center text-green-400">Include</td>
                                    <td class="p-3 font-semibold text-center text-yellow-400">Consider</td>
                                    <td class="p-3 font-semibold text-center text-red-400">Exclude</td>
                                    <td class="p-3 font-semibold text-white">Rationale</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    {
                                      component: 'Production Applications',
                                      include: '✓',
                                      consider: '',
                                      exclude: '',
                                      rationale: 'Core service delivery'
                                    },
                                    {
                                      component: 'Development Environment',
                                      include: '',
                                      consider: '△',
                                      exclude: '',
                                      rationale: 'If contains production data'
                                    },
                                    {
                                      component: 'Third-party APIs',
                                      include: '✓',
                                      consider: '',
                                      exclude: '',
                                      rationale: 'Material to service delivery'
                                    },
                                    {
                                      component: 'Internal HR Systems',
                                      include: '',
                                      consider: '',
                                      exclude: '✗',
                                      rationale: 'Not part of customer service'
                                    },
                                    {
                                      component: 'Backup Systems',
                                      include: '✓',
                                      consider: '',
                                      exclude: '',
                                      rationale: 'Critical for availability'
                                    },
                                    {
                                      component: 'Legacy Systems',
                                      include: '',
                                      consider: '△',
                                      exclude: '',
                                      rationale: 'Depends on usage and data'
                                    }
                                  ].map((row) => (
                                    <tr key={row.component} class="border-b border-slate-700">
                                      <td class="p-3 text-slate-300">{row.component}</td>
                                      <td class="p-3 text-center text-green-400">{row.include}</td>
                                      <td class="p-3 text-center text-yellow-400">{row.consider}</td>
                                      <td class="p-3 text-center text-red-400">{row.exclude}</td>
                                      <td class="p-3 text-sm text-slate-400">{row.rationale}</td>
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
                </section>

                {/* Divider */}
                <div>

                {/* Sicherheit Section */}
                <section id="sicherheit" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Security Criteria - Detailed Implementation</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* CC6 Detailed Implementation */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">CC6 - Logical and Physical Access Controls</h3>
                            <div class="space-y-6">
                              {[
                                ,
                                ,
                                
                              ].map((controlDetail) => (
                                <div key={controlDetail.control} class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                  <div class="flex items-center gap-3 mb-4">
                                    <Badge class="bg-blue-500/20 text-blue-300">{controlDetail.control}</Badge>
                                    <h4 class="text-lg font-bold text-white">{controlDetail.title}</h4>
                                  </div>
                                  
                                  <p class="text-slate-300 mb-6 text-sm italic">{controlDetail.description}</p>
                                  
                                  <div>
                                    <div>
                                      <h5 class="text-sm font-semibold text-blue-300 mb-3">Implementation Examples:</h5>
                                      <ul class="space-y-2">
                                        {controlDetail.implementations.map((impl, idx) => (
                                          <li key={idx} class="flex items-start gap-2">
                                            <CheckCircle class="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" ></CheckCircle>
                                            <span class="text-xs text-slate-300">{impl}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 class="text-sm font-semibold text-emerald-300 mb-3">Evidence Requirements:</h5>
                                      <ul class="space-y-2">
                                        {controlDetail.evidence.map((evidence, idx) => (
                                          <li key={idx} class="flex items-start gap-2">
                                            <FileText class="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" ></FileText>
                                            <span class="text-xs text-slate-300">{evidence}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 class="text-sm font-semibold text-purple-300 mb-3">Testing Procedures:</h5>
                                      <ul class="space-y-2">
                                        {controlDetail.testingProcedures.map((test, idx) => (
                                          <li key={idx} class="flex items-start gap-2">
                                            <Search class="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" ></Search>
                                            <span class="text-xs text-slate-300">{test}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CC7 System Operations */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">CC7 - System Operations Detailed Controls</h3>
                            <div>
                              {[
                                {
                                  control: 'CC7.1 - Capacity Management',
                                  implementations: [
                                    'Auto-scaling policies in cloud environments',
                                    'Performance monitoring und capacity planning',
                                    'Load testing und stress testing',
                                    'Resource utilization dashboards',
                                    'Capacity thresholds und alerting'
                                  ],
                                  tools: ['CloudWatch', 'Datadog', 'New Relic', 'Kubernetes HPA', 'Terraform']
                                },
                                ,
                                ,
                                {
                                  control: 'CC7.4 - Incident Response',
                                  implementations: [
                                    'Incident response playbooks',
                                    'On-call escalation procedures',
                                    'Communication templates',
                                    'Post-incident reviews',
                                    'Lessons learned documentation'
                                  ],
                                  tools: ['PagerDuty', 'ServiceNow', 'Slack', 'JIRA', 'Confluence']
                                }
                              ].map((controlArea) => (
                                <div key={controlArea.control} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-white mb-3">{controlArea.control}</h4>
                                  <div class="space-y-3">
                                    <div>
                                      <h5 class="text-xs font-semibold text-slate-300 mb-2">Implementations:</h5>
                                      <ul class="space-y-1">
                                        {controlArea.implementations.map((impl, idx) => (
                                          <li key={idx} class="text-xs text-slate-400 flex items-center gap-2">
                                            <Circle class="h-2 w-2 fill-current" ></Circle>
                                            {impl}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 class="text-xs font-semibold text-slate-300 mb-2">Common Tools:</h5>
                                      <div class="flex flex-wrap gap-1">
                                        {controlArea.tools.map((tool) => (
                                          <Badge key={tool} variant="outline" class="text-xs">
                                            {tool}
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

                {/* Beweise Section */}
                <section id="beweise" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Evidence Collection Framework</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Evidence Types Matrix */}
                          <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-emerald-300 mb-6">Evidence Types & Collection Methods</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr class="border-b border-slate-600">
                                    <td class="p-3 font-semibold text-white">Evidence Type</td>
                                    <td class="p-3 font-semibold text-white">Collection Method</td>
                                    <td class="p-3 font-semibold text-white">Frequency</td>
                                    <td class="p-3 font-semibold text-white">Automation Level</td>
                                    <td class="p-3 font-semibold text-white">Sample Controls</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    {
                                      type: 'System Screenshots',
                                      method: 'Manual capture with metadata',
                                      frequency: 'Quarterly',
                                      automation: 'Low',
                                      controls: 'CC6.1, CC6.2, CC8.1'
                                    },
                                    {
                                      type: 'Configuration Exports',
                                      method: 'API/CLI automation',
                                      frequency: 'Monthly',
                                      automation: 'High',
                                      controls: 'CC6.3, CC8.4, CC7.1'
                                    },
                                    {
                                      type: 'Log Files',
                                      method: 'SIEM/Log aggregation',
                                      frequency: 'Continuous',
                                      automation: 'High',
                                      controls: 'CC7.2, CC7.3, CC6.6'
                                    },
                                    {
                                      type: 'Policy Documents',
                                      method: 'Document management system',
                                      frequency: 'Annual/As changed',
                                      automation: 'Medium',
                                      controls: 'CC1.1, CC2.1, CC5.3'
                                    },
                                    {
                                      type: 'Training Records',
                                      method: 'LMS reporting',
                                      frequency: 'Quarterly',
                                      automation: 'Medium',
                                      controls: 'CC1.4, CC2.2'
                                    },
                                    {
                                      type: 'Vulnerability Scans',
                                      method: 'Automated scanning tools',
                                      frequency: 'Weekly/Monthly',
                                      automation: 'High',
                                      controls: 'CC7.5, CC6.8'
                                    },
                                    {
                                      type: 'Access Reviews',
                                      method: 'IAM system reports',
                                      frequency: 'Quarterly',
                                      automation: 'Medium',
                                      controls: 'CC6.2, CC6.4'
                                    },
                                    {
                                      type: 'Change Tickets',
                                      method: 'ITSM system exports',
                                      frequency: 'Continuous',
                                      automation: 'High',
                                      controls: 'CC8.1, CC8.2'
                                    }
                                  ].map((row) => (
                                    <tr key={row.type} class="border-b border-slate-700">
                                      <td class="p-3 text-slate-300">{row.type}</td>
                                      <td class="p-3 text-slate-300">{row.method}</td>
                                      <td class="p-3 text-slate-300">{row.frequency}</td>
                                      <td class="p-3">
                                        <Badge 
                                          class=
                                        >
                                          {row.automation}
                                        </Badge>
                                      </td>
                                      <td class="p-3 text-slate-300 text-sm">{row.controls}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Evidence Collection Automation */}
                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Code class="h-5 w-5 text-blue-400" ></Code>
                                Automation Tools & Scripts
                              </h3>
                              <div class="space-y-4">
                                {[
                                  {
                                    tool: 'AWS Config',
                                    purpose: 'Infrastructure compliance monitoring',
                                    evidence: 'Configuration snapshots, compliance reports'
                                  },
                                  {
                                    tool: 'Terraform Cloud',
                                    purpose: 'Infrastructure as Code audit trail',
                                    evidence: 'Plan/apply logs, state file changes'
                                  },
                                  {
                                    tool: 'GitHub Actions',
                                    purpose: 'CI/CD pipeline evidence',
                                    evidence: 'Build logs, deployment approvals'
                                  },
                                  {
                                    tool: 'Okta API',
                                    purpose: 'User access und authentication logs',
                                    evidence: 'Login events, MFA usage, access reviews'
                                  },
                                  {
                                    tool: 'Splunk/ELK',
                                    purpose: 'Centralized logging und monitoring',
                                    evidence: 'Security events, system logs, alerts'
                                  }
                                ].map((automation) => (
                                  <div key={automation.tool} class="bg-slate-900/50 rounded-lg p-4">
                                    <h4 class="font-semibold text-blue-300 mb-2">{automation.tool}</h4>
                                    <p class="text-sm text-slate-300 mb-2">{automation.purpose}</p>
                                    <p class="text-xs text-slate-400">Evidence: {automation.evidence}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <FileText class="h-5 w-5 text-emerald-400" ></FileText>
                                Evidence Management Best Practices
                              </h3>
                              <ul class="space-y-3">
                                {[
                                  'Implement centralized evidence repository with version control',
                                  'Establish automated evidence collection workflows',
                                  'Maintain audit trail für alle evidence modifications',
                                  'Use immutable storage für critical evidence',
                                  'Implement role-based access controls für evidence',
                                  'Create standardized naming conventions',
                                  'Establish retention policies aligned with audit requirements',
                                  'Implement evidence integrity verification (checksums)',
                                  'Maintain metadata für searchability und context',
                                  'Regular backup und disaster recovery testing'
                                ].map((practice, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span class="text-sm text-slate-300">{practice}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Sample Evidence Templates */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Evidence Templates & Checklists</h3>
                            <div>
                              {[
                                {
                                  template: 'Access Review Template',
                                  purpose: 'Quarterly user access reviews',
                                  fields: [
                                    'User ID und Name',
                                    'Role assignments',
                                    'Last login date',
                                    'Manager approval',
                                    'Review date',
                                    'Actions taken'
                                  ]
                                },
                                {
                                  template: 'Change Management Record',
                                  purpose: 'System change documentation',
                                  fields: [
                                    'Change ID',
                                    'Requestor und approver',
                                    'Change description',
                                    'Risk assessment',
                                    'Test results',
                                    'Rollback plan'
                                  ]
                                },
                                {
                                  template: 'Incident Response Log',
                                  purpose: 'Security incident tracking',
                                  fields: [
                                    'Incident ID',
                                    'Discovery method',
                                    'Impact assessment',
                                    'Response actions',
                                    'Resolution time',
                                    'Lessons learned'
                                  ]
                                }
                              ].map((template) => (
                                <div key={template.template} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-white mb-2">{template.template}</h4>
                                  <p class="text-sm text-slate-300 mb-3">{template.purpose}</p>
                                  <ul class="space-y-1">
                                    {template.fields.map((field, idx) => (
                                      <li key={idx} class="text-xs text-slate-400 flex items-center gap-2">
                                        <Circle class="h-2 w-2 fill-current" ></Circle>
                                        {field}
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

                {/* Verfügbarkeit Section */}
                <section id="verfuegbarkeit" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Availability Criteria (A1)</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-green-300 mb-4">Verfügbarkeits-Anforderungen</h3>
                            <p class="text-slate-300 mb-6">
                              Das System ist für den Betrieb und die Nutzung verfügbar, wie zugesagt oder vereinbart.
                            </p>
                            
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-3">A1.1 - Availability Commitments</h4>
                                <ul class="space-y-2 text-sm text-slate-300">
                                  <li>• System availability commitments dokumentieren</li>
                                  <li>• Service Level Agreements (SLAs) definieren</li>
                                  <li>• Uptime monitoring implementieren</li>
                                  <li>• Performance benchmarks etablieren</li>
                                </ul>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-3">A1.2 - System Monitoring</h4>
                                <ul class="space-y-2 text-sm text-slate-300">
                                  <li>• Kontinuierliche Verfügbarkeitsüberwachung</li>
                                  <li>• Automatische Alerting-Systeme</li>
                                  <li>• Incident Response Procedures</li>
                                  <li>• Capacity Management</li>
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

                {/* Verarbeitung Section */}
                <section id="verarbeitung" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Processing Integrity (PI1)</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-purple-300 mb-4">Verarbeitungsintegrität</h3>
                            <p class="text-slate-300 mb-6">
                              Die Systemverarbeitung ist vollständig, gültig, genau, zeitgerecht und autorisiert.
                            </p>
                            
                            <div class="space-y-4">
                              {['PI1.1 - Processing Criteria', 'PI1.2 - Error Detection', 'PI1.3 - Input Validation', 'PI1.4 - Processing Monitoring'].map((control, index) => (
                                <div key={index} class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-white mb-2">{control}</h4>
                                  <p class="text-sm text-slate-300">
                                    
                                    
                                    
                                    
                                  </p>
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

                {/* Vertraulichkeit Section */}
                <section id="vertraulichkeit" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Confidentiality (C1)</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-cyan-300 mb-4">Vertraulichkeitsanforderungen</h3>
                            <p class="text-slate-300 mb-6">
                              Als vertraulich bezeichnete Informationen werden wie vereinbart oder zugesagt geschützt.
                            </p>
                            
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-3">C1.1 - Information Classification</h4>
                                <ul class="space-y-2 text-sm text-slate-300">
                                  <li>• Datenklassifizierungsrichtlinien</li>
                                  <li>• Vertraulichkeitskennzeichnung</li>
                                  <li>• Handling Instructions</li>
                                  <li>• Retention Policies</li>
                                </ul>
                              </div>
                              <div class="bg-slate-800/50 rounded-lg p-4">
                                <h4 class="font-semibold text-white mb-3">C1.2 - Access Controls</h4>
                                <ul class="space-y-2 text-sm text-slate-300">
                                  <li>• Role-based Access Control</li>
                                  <li>• Need-to-know Principle</li>
                                  <li>• Encryption at Rest</li>
                                  <li>• Encryption in Transit</li>
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

                {/* Datenschutz Section */}
                <section id="datenschutz" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Privacy Criteria (P1-P8)</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-indigo-300 mb-4">Datenschutz-Framework</h3>
                            <p class="text-slate-300 mb-6">
                              Personenbezogene Daten werden im Einklang mit den Datenschutzbestimmungen gesammelt, verwendet, aufbewahrt, offengelegt und entsorgt.
                            </p>
                            
                            <div>
                              {[
                                { code: 'P1', title: 'Notice & Communication', desc: 'Transparente Datenschutzerklärungen' },
                                { code: 'P2', title: 'Choice & Consent', desc: 'Einwilligung und Wahlmöglichkeiten' },
                                { code: 'P3', title: 'Collection', desc: 'Rechtmäßige Datenerhebung' },
                                { code: 'P4', title: 'Use & Retention', desc: 'Zweckgebundene Nutzung' },
                                { code: 'P5', title: 'Access', desc: 'Betroffenenrechte' },
                                { code: 'P6', title: 'Disclosure', desc: 'Kontrollierte Weitergabe' },
                                { code: 'P7', title: 'Quality', desc: 'Datenqualität & Richtigkeit' },
                                { code: 'P8', title: 'Monitoring', desc: 'Compliance-Überwachung' }
                              ].map((criterion, index) => (
                                <div key={index} class="bg-slate-800/50 rounded-lg p-3">
                                  <h4 class="font-semibold text-white text-sm mb-1">{criterion.code} - {criterion.title}</h4>
                                  <p class="text-xs text-slate-300">{criterion.desc}</p>
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

                {/* Kontrollen Section */}
                <section id="kontrollen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Common Controls Framework</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-orange-300 mb-4">Gemeinsame Kontrollen (CC1-CC9)</h3>
                            <p class="text-slate-300 mb-6">
                              Diese Kontrollen sind für alle SOC 2 Audits erforderlich und bilden das Fundament der Sicherheitsarchitektur.
                            </p>
                            
                            <div class="space-y-4">
                              {[
                                { id: 'CC1', title: 'Control Environment', desc: 'Governance, Integrität und ethische Werte' },
                                { id: 'CC2', title: 'Communication', desc: 'Interne und externe Kommunikation' },
                                { id: 'CC3', title: 'Risk Assessment', desc: 'Risikobewertung und -management' },
                                { id: 'CC4', title: 'Monitoring', desc: 'Überwachung der Kontrollaktivitäten' },
                                { id: 'CC5', title: 'Control Activities', desc: 'Implementierung von Kontrollen' },
                                { id: 'CC6', title: 'Logical Access', desc: 'Zugriffskontrolle und Authentifizierung' },
                                { id: 'CC7', title: 'System Operations', desc: 'Systembetrieb und Monitoring' },
                                { id: 'CC8', title: 'Change Management', desc: 'Änderungsmanagement' },
                                { id: 'CC9', title: 'Risk Mitigation', desc: 'Risikominderung und Vendor Management' }
                              ].map((control, index) => (
                                <div>
                                  <div class="flex items-center justify-between">
                                    <div>
                                      <h4 class="font-semibold text-white">{control.id} - {control.title}</h4>
                                      <p class="text-sm text-slate-300 mt-1">{control.desc}</p>
                                    </div>
                                    <ChevronRight class="h-5 w-5 text-slate-400" ></ChevronRight>
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

                {/* Audit-Prozess Section */}
                <section id="audit-prozess" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">SOC 2 Audit Process</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-yellow-300 mb-6">Audit-Phasen Übersicht</h3>
                            
                            <div class="space-y-6">
                              {[
                                { phase: '1. Pre-Audit Phase', duration: '2-4 Wochen', tasks: ['Auditor Selection', 'Scope Definition', 'Timeline Planning', 'Contract Negotiation'] },
                                { phase: '2. Planning Phase', duration: '1-2 Wochen', tasks: ['System Understanding', 'Risk Assessment', 'Control Testing Plan', 'Sample Selection'] },
                                { phase: '3. Fieldwork Phase', duration: '3-6 Wochen', tasks: ['Control Testing', 'Evidence Review', 'Interviews', 'Walkthroughs'] },
                                { phase: '4. Reporting Phase', duration: '2-3 Wochen', tasks: ['Draft Report', 'Management Response', 'Final Report', 'Report Distribution'] }
                              ].map((phase, index) => (
                                <div key={index} class="bg-slate-800/50 rounded-lg p-4">
                                  <div class="flex items-center justify-between mb-3">
                                    <h4 class="font-semibold text-white">{phase.phase}</h4>
                                    <Badge variant="outline" class="text-yellow-300 border-yellow-500/30">
                                      {phase.duration}
                                    </Badge>
                                  </div>
                                  <div>
                                    {phase.tasks.map((task, taskIndex) => (
                                      <div key={taskIndex} class="flex items-center text-sm text-slate-300">
                                        <CheckCircle class="h-3 w-3 text-green-400 mr-2 flex-shrink-0" ></CheckCircle>
                                        {task}
                                      </div>
                                    ))}
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

                {/* Überwachung Section */}
                <section id="ueberwachung" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Continuous Monitoring</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-teal-300 mb-4">Kontinuierliche Überwachung</h3>
                            <p class="text-slate-300 mb-6">
                              Implementierung von kontinuierlichen Monitoring-Prozessen zur Aufrechterhaltung der SOC 2 Compliance.
                            </p>
                            
                            <div>
                              <div class="space-y-4">
                                <h4 class="font-semibold text-white">Monitoring-Bereiche</h4>
                                {['Security Controls', 'Access Management', 'Change Management', 'Incident Response', 'Vendor Management'].map((area, index) => (
                                  <div key={index} class="bg-slate-800/50 rounded-lg p-3">
                                    <div class="flex items-center text-sm text-slate-300">
                                      <Activity class="h-4 w-4 text-teal-400 mr-2" ></Activity>
                                      {area}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div class="space-y-4">
                                <h4 class="font-semibold text-white">Automation Tools</h4>
                                {['SIEM Systems', 'GRC Platforms', 'Identity Management', 'Vulnerability Scanners', 'Log Analytics'].map((tool, index) => (
                                  <div key={index} class="bg-slate-800/50 rounded-lg p-3">
                                    <div class="flex items-center text-sm text-slate-300">
                                      <Settings class="h-4 w-4 text-teal-400 mr-2" ></Settings>
                                      {tool}
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
                </section>

                {/* Divider */}
                <div>

                {/* Tools Section */}
                <section id="tools" class="space-y-8 scroll-mt-32">
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

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-violet-300 mb-6">SOC 2 Automation Stack</h3>
                            
                            <div>
                              {[
                                {
                                  category: 'GRC Platforms',
                                  tools: ['Vanta', 'Drata', 'Strike Graph', 'A-LIGN'],
                                  icon: Shield
                                },
                                {
                                  category: 'Security Tools',
                                  tools: ['Okta', 'AWS CloudTrail', 'Splunk', 'CrowdStrike'],
                                  icon: Lock
                                },
                                {
                                  category: 'Monitoring',
                                  tools: ['DataDog', 'New Relic', 'PagerDuty', 'Prometheus'],
                                  icon: Monitor
                                }
                              ].map((stack, index) => (
                                <div key={index} class="bg-slate-800/50 rounded-lg p-4">
                                  <div class="flex items-center mb-3">
                                    <stack.icon class="h-5 w-5 text-violet-400 mr-2" ></stack>
                                    <h4 class="font-semibold text-white">{stack.category}</h4>
                                  </div>
                                  <div class="space-y-2">
                                    {stack.tools.map((tool, toolIndex) => (
                                      <div key={toolIndex} class="text-sm text-slate-300 flex items-center">
                                        <Zap class="h-3 w-3 text-violet-400 mr-2" ></Zap>
                                        {tool}
                                      </div>
                                    ))}
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
                          <h2 class="text-3xl font-bold text-white">Certification Path</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-amber-300 mb-6">Zertifizierungsweg</h3>
                            
                            <div class="space-y-6">
                              {[
                                { step: 'Type I Readiness', timeline: '3-6 Monate', desc: 'Kontroll-Design und Implementierung' },
                                { step: 'Type I Audit', timeline: '4-6 Wochen', desc: 'Design-Effektivitäts-Assessment' },
                                { step: 'Operating Period', timeline: '6-12 Monate', desc: 'Kontinuierlicher Betrieb der Kontrollen' },
                                { step: 'Type II Audit', timeline: '6-8 Wochen', desc: 'Betriebs-Effektivitäts-Prüfung' },
                                { step: 'Certification', timeline: '2-3 Wochen', desc: 'Finale Berichtserstellung' }
                              ].map((step, index) => (
                                <div key={index} class="flex items-center gap-4">
                                  <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {index + 1}
                                  </div>
                                  <div class="flex-1 bg-slate-800/50 rounded-lg p-4">
                                    <div class="flex items-center justify-between">
                                      <h4 class="font-semibold text-white">{step.step}</h4>
                                      <Badge variant="outline" class="text-amber-300 border-amber-500/30">
                                        {step.timeline}
                                      </Badge>
                                    </div>
                                    <p class="text-sm text-slate-300 mt-1">{step.desc}</p>
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

                {/* Vorteile Section */}
                <section id="vorteile" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Business Benefits</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-emerald-300 mb-6">ROI und Business Value</h3>
                            
                            <div>
                              {[
                                { benefit: 'Sales Enablement', impact: '+40% Deal Velocity', desc: 'Schnellere Sales-Zyklen durch vertrauen' },
                                { benefit: 'Risk Reduction', impact: '-75% Security Incidents', desc: 'Proaktive Risikominimierung' },
                                { benefit: 'Competitive Advantage', impact: '95% RFP Requirements', desc: 'Marktvorteile bei Ausschreibungen' },
                                { benefit: 'Operational Excellence', impact: '+60% Process Efficiency', desc: 'Verbesserte interne Prozesse' },
                                { benefit: 'Customer Trust', impact: '+85% Retention Rate', desc: 'Erhöhte Kundenbindung' },
                                { benefit: 'Insurance Benefits', impact: '-30% Premium Costs', desc: 'Reduzierte Versicherungskosten' }
                              ].map((item, index) => (
                                <div key={index} class="bg-slate-800/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-white mb-2">{item.benefit}</h4>
                                  <div class="text-2xl font-bold text-emerald-400 mb-2">{item.impact}</div>
                                  <p class="text-sm text-slate-300">{item.desc}</p>
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
                          <h2 class="text-3xl font-bold text-white">Resources & Templates</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">Download-Center</h3>
                            
                            <div>
                              {[
                                { title: 'SOC 2 Readiness Checklist', type: 'PDF', desc: 'Vollständige Checkliste für SOC 2 Vorbereitung' },
                                { title: 'Control Matrix Template', type: 'Excel', desc: 'Vorkonfigurierte Kontroll-Matrix' },
                                { title: 'Evidence Collection Guide', type: 'PDF', desc: 'Leitfaden für Evidence-Sammlung' },
                                { title: 'System Description Template', type: 'Word', desc: 'Vorlage für System-Beschreibung' },
                                { title: 'Risk Assessment Framework', type: 'Excel', desc: 'Framework für Risikobewertung' },
                                { title: 'Incident Response Playbook', type: 'PDF', desc: 'Vordefinierte Incident-Prozesse' }
                              ].map((resource, index) => (
                                <div>
                                  <div class="flex items-center justify-between">
                                    <div>
                                      <h4>{resource.title}</h4>
                                      <p class="text-sm text-slate-300 mt-1">{resource.desc}</p>
                                      <Badge variant="outline" class="text-blue-300 border-blue-500/30 mt-2">
                                        {resource.type}
                                      </Badge>
                                    </div>
                                    <Download>
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
            </div>
          </div>
        </div>
      </div>

      <Footer ></Footer>
    </div>`
};