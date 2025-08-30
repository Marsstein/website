export default {
  route: '/nis2',
  title: 'Nis2',
  description: 'Umfassender Leitfaden zur Network and Information Security Directive 2 -                Von der Anwendbarkeit bis zur vollständigen Compliance-Implementierung',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CounterAnimation = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(value);
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end)  else 
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isInView, value, duration]);

    return <span ref={elementRef}>{count}</span>;
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(\`[data-section="\${sectionId}"]\`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header ></Header>
      
      {/* Progress Bar */}
      <motion.div
        class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX }}
      ></motion>

      {/* Floating Sidebar Toggle */}
      <Button
       
        class="fixed top-20 left-4 z-40 lg:hidden bg-blue-600 hover:bg-blue-700"
        size="sm"
      >
        <List class="h-4 w-4" ></List>
      </Button>

      {/* Sidebar */}
      <motion.div
        class=fixed left-0 top-16 h-screen w-80 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700 z-30 overflow-y-auto \${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300
      >
        <div class="p-6">
          <h2 class="text-xl font-bold text-white mb-6">NIS2-Leitfaden</h2>
          <div class="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
               }
                class=w-full text-left p-3 rounded-lg transition-all duration-200 group \${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }
              >
                <div class="flex items-center gap-3">
                  <section.icon class="h-4 w-4" ></section>
                  <div class="flex-1">
                    <div class="font-medium">{section.title}</div>
                    <div class="text-xs opacity-70">{section.readTime}</div>
                  </div>
                  
                </div>
              </button>
            ))}
          </div>
          
          {/* Progress */}
          <div class="mt-6 p-4 bg-slate-700 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-300">Lesefortschritt</span>
              <span class="text-sm text-blue-400">%</span>
            </div>
            <Progress value={readingProgress} class="h-2" ></Progress>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div>
        <div class="container mx-auto px-6 py-8" ref={containerRef}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-16"
            data-section="overview"
          >
            <div class="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6">
              <Shield class="h-4 w-4" ></Shield>
              <span class="text-sm font-medium">NIS2-Richtlinie 2022/2555</span>
            </div>
            
            <h1>
              <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                NIS2
              </span>
              <br />
              <span>Compliance Leitfaden</span>
            </h1>
            
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Umfassender Leitfaden zur Network and Information Security Directive 2 - 
              Von der Anwendbarkeit bis zur vollständigen Compliance-Implementierung
            </p>

            <div class="flex flex-wrap justify-center gap-4 mb-12">
              <Badge class="bg-blue-600/20 text-blue-400 px-4 py-2">
                <Calendar class="h-4 w-4 mr-2" ></Calendar>
                Gültig ab 18.10.2024
              </Badge>
              <Badge class="bg-purple-600/20 text-purple-400 px-4 py-2">
                <Building class="h-4 w-4 mr-2" ></Building>
                17 Sektoren
              </Badge>
              <Badge class="bg-green-600/20 text-green-400 px-4 py-2">
                <Euro class="h-4 w-4 mr-2" ></Euro>
                Bis zu 2% des Jahresumsatzes
              </Badge>
            </div>

            {/* Stats */}
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-blue-400 mb-2">
                  <CounterAnimation value="27" ></CounterAnimation>
                </div>
                <div class="text-gray-300">EU-Mitgliedstaaten</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-purple-400 mb-2">
                  <CounterAnimation value="160000" ></CounterAnimation>+
                </div>
                <div class="text-gray-300">Betroffene Unternehmen</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-green-400 mb-2">
                  <CounterAnimation value="24" ></CounterAnimation>h
                </div>
                <div class="text-gray-300">Meldefrist</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-orange-400 mb-2">
                  <CounterAnimation value="10" ></CounterAnimation>M€
                </div>
                <div class="text-gray-300">Max. Geldbuße</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="overview"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-blue-600/20 rounded-lg">
                    <Eye class="h-6 w-6 text-blue-400" ></Eye>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Überblick</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Was ist NIS2?</h3>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      Die NIS2-Richtlinie (Network and Information Security Directive 2) ist eine 
                      EU-Verordnung, die am 16. Januar 2023 in Kraft getreten ist. Sie ersetzt die 
                      ursprüngliche NIS-Richtlinie und erweitert den Anwendungsbereich erheblich.
                    </p>
                    
                    <h4 class="text-lg font-semibold text-white mb-3">Hauptziele:</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Erhöhung der Cybersicherheit in kritischen Sektoren
                      </li>
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Harmonisierung der Cybersicherheitsanforderungen in der EU
                      </li>
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Verbesserung der Incident-Response-Kapazitäten
                      </li>
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Stärkung der grenzüberschreitenden Zusammenarbeit
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Wichtige Änderungen zu NIS1</h3>
                    <div class="space-y-4">
                      <div class="p-4 bg-slate-700/50 rounded-lg">
                        <div class="flex items-center gap-2 mb-2">
                          <TrendingUp class="h-4 w-4 text-green-400" ></TrendingUp>
                          <span class="font-semibold text-green-400">Erweitert</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Anwendungsbereich von 7 auf 17 Sektoren erweitert
                        </p>
                      </div>
                      
                      <div class="p-4 bg-slate-700/50 rounded-lg">
                        <div class="flex items-center gap-2 mb-2">
                          <AlertTriangle class="h-4 w-4 text-orange-400" ></AlertTriangle>
                          <span class="font-semibold text-orange-400">Verschärft</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Härtere Sanktionen: bis zu 10 Mio. € oder 2% des Jahresumsatzes
                        </p>
                      </div>
                      
                      <div class="p-4 bg-slate-700/50 rounded-lg">
                        <div class="flex items-center gap-2 mb-2">
                          <Clock class="h-4 w-4 text-blue-400" ></Clock>
                          <span class="font-semibold text-blue-400">Beschleunigt</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Meldefrist für erhebliche Vorfälle: 24 Stunden (statt 72h)
                        </p>
                      </div>
                      
                      <div class="p-4 bg-slate-700/50 rounded-lg">
                        <div class="flex items-center gap-2 mb-2">
                          <Users class="h-4 w-4 text-purple-400" ></Users>
                          <span class="font-semibold text-purple-400">Konkretisiert</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Persönliche Haftung der Geschäftsführung
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="history"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-purple-600/20 rounded-lg">
                    <Calendar class="h-6 w-6 text-purple-400" ></Calendar>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Geschichte & Entwicklung</h2>
                </div>
                
                <div class="relative">
                  <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                  
                  <div class="space-y-8">
                    <div class="relative flex items-start gap-6">
                      <div class="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                      <div class="ml-16">
                        <div class="text-purple-400 font-semibold mb-2">2016</div>
                        <h3 class="text-xl font-bold text-white mb-2">NIS1-Richtlinie verabschiedet</h3>
                        <p class="text-gray-300">
                          Die ursprüngliche Network and Information Security Directive tritt in Kraft. 
                          Abdeckung von 7 Sektoren mit grundlegenden Cybersicherheitsanforderungen.
                        </p>
                      </div>
                    </div>
                    
                    <div class="relative flex items-start gap-6">
                      <div class="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                      <div class="ml-16">
                        <div class="text-blue-400 font-semibold mb-2">2020</div>
                        <h3 class="text-xl font-bold text-white mb-2">EU Cybersicherheitsstrategie</h3>
                        <p class="text-gray-300">
                          Veröffentlichung der neuen EU-Cybersicherheitsstrategie mit Fokus auf 
                          Resilienz und strategische Autonomie. Ankündigung der NIS2-Revision.
                        </p>
                      </div>
                    </div>
                    
                    <div class="relative flex items-start gap-6">
                      <div class="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900"></div>
                      <div class="ml-16">
                        <div class="text-green-400 font-semibold mb-2">Dezember 2020</div>
                        <h3 class="text-xl font-bold text-white mb-2">NIS2-Vorschlag der Kommission</h3>
                        <p class="text-gray-300">
                          Die Europäische Kommission veröffentlicht den Vorschlag für eine 
                          überarbeitete NIS-Richtlinie mit erweiterten Anforderungen.
                        </p>
                      </div>
                    </div>
                    
                    <div class="relative flex items-start gap-6">
                      <div class="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900"></div>
                      <div class="ml-16">
                        <div class="text-orange-400 font-semibold mb-2">2021-2022</div>
                        <h3 class="text-xl font-bold text-white mb-2">Verhandlungen & Trilog</h3>
                        <p class="text-gray-300">
                          Intensive Verhandlungen zwischen Europäischem Parlament, Rat und Kommission. 
                          Finalisierung der endgültigen Fassung der NIS2-Richtlinie.
                        </p>
                      </div>
                    </div>
                    
                    <div class="relative flex items-start gap-6">
                      <div class="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-slate-900"></div>
                      <div class="ml-16">
                        <div class="text-red-400 font-semibold mb-2">16. Januar 2023</div>
                        <h3 class="text-xl font-bold text-white mb-2">NIS2 tritt in Kraft</h3>
                        <p class="text-gray-300">
                          Offizielle Veröffentlichung im EU-Amtsblatt. Start der 21-monatigen 
                          Umsetzungsfrist für die Mitgliedstaaten.
                        </p>
                      </div>
                    </div>
                    
                    <div class="relative flex items-start gap-6">
                      <div class="absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                      <div class="ml-16">
                        <div class="text-cyan-400 font-semibold mb-2">17. Oktober 2024</div>
                        <h3 class="text-xl font-bold text-white mb-2">Anwendungsbeginn</h3>
                        <p class="text-gray-300">
                          NIS2-Verpflichtungen werden in allen EU-Mitgliedstaaten wirksam. 
                          Beginn der Enforcement-Phase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Scope Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="scope"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-green-600/20 rounded-lg">
                    <Target class="h-6 w-6 text-green-400" ></Target>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Anwendungsbereich</h2>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-4">17 Betroffene Sektoren</h3>
                  <div>
                    {nis2Sectors.map((sector, index) => (
                      <motion.div
                        key={sector.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        class="bg-slate-700/50 rounded-lg p-6 border border-slate-600 hover:border-blue-500/50 transition-colors"
                      >
                        <div class="flex items-center gap-3 mb-4">
                          <div class="p-2 bg-blue-600/20 rounded-lg">
                            <sector.icon class="h-5 w-5 text-blue-400" ></sector>
                          </div>
                          <h4 class="font-semibold text-white">{sector.category}</h4>
                        </div>
                        
                        <div class="space-y-3 mb-4">
                          {sector.sectors.map((subsector) => (
                            <div key={subsector} class="text-sm text-gray-300 bg-slate-800/50 px-3 py-2 rounded">
                              {subsector}
                            </div>
                          ))}
                        </div>
                        
                        <div class="space-y-2">
                          <div class="flex items-center gap-2">
                            <Users class="h-4 w-4 text-gray-400" ></Users>
                            <span class="text-xs text-gray-400">Schwellenwert:</span>
                          </div>
                          <div class="text-sm text-white font-medium">{sector.threshold}</div>
                          
                          <div class="flex items-center gap-2 mt-3">
                            <AlertTriangle class="h-4 w-4 text-orange-400" ></AlertTriangle>
                            <span class="text-xs text-gray-400">Kritikalität:</span>
                            <Badge>
                              {sector.criticality}
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div class="bg-slate-700/30 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Größenschwellen</h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-blue-400 mb-2">Allgemeine Schwelle</h4>
                      <ul class="space-y-1 text-gray-300">
                        <li>• 250+ Mitarbeiter ODER</li>
                        <li>• 50 Mio. € Jahresumsatz</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-purple-400 mb-2">Besondere Regelungen</h4>
                      <ul class="space-y-1 text-gray-300">
                        <li>• Digitale Dienste: 45 Mio. aktive Nutzer/Monat</li>
                        <li>• Öffentliche Verwaltung: Alle Ebenen</li>
                        <li>• Banken: Alle regulierten Institute</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Essential Entities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="essential-entities"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-red-600/20 rounded-lg">
                    <Building class="h-6 w-6 text-red-400" ></Building>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Wesentliche Einrichtungen</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Definition & Kriterien</h3>
                    <p class="text-gray-300 mb-6">
                      Wesentliche Einrichtungen sind Organisationen in kritischen Sektoren, 
                      deren Störung erhebliche Auswirkungen auf die Wirtschaft oder Gesellschaft hätte.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <AlertTriangle class="h-4 w-4 text-red-400" ></AlertTriangle>
                          <span class="font-semibold text-red-400">Hohe Kritikalität</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Störungen können schwerwiegende grenzüberschreitende Auswirkungen haben
                        </p>
                      </div>
                      
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Scale class="h-4 w-4 text-orange-400" ></Scale>
                          <span class="font-semibold text-orange-400">Strengere Aufsicht</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Unterliegen verstärkter behördlicher Überwachung und Kontrolle
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Betroffene Sektoren</h3>
                    <div class="space-y-3">
                      {[
                        { name: 'Energie', icon: Zap, color: 'text-yellow-400' },
                        { name: 'Verkehr', icon: Car, color: 'text-blue-400' },
                        { name: 'Bankwesen', icon: Building, color: 'text-green-400' },
                        { name: 'Finanzmarktinfrastrukturen', icon: TrendingUp, color: 'text-purple-400' },
                        { name: 'Gesundheitswesen', icon: Heart, color: 'text-red-400' },
                        { name: 'Trinkwasser', icon: Waves, color: 'text-cyan-400' },
                        { name: 'Abwasser', icon: Factory, color: 'text-gray-400' },
                        { name: 'Digitale Infrastruktur', icon: Server, color: 'text-indigo-400' },
                        { name: 'Elektronische Kommunikation', icon: Radio, color: 'text-pink-400' },
                        { name: 'Weltraum', icon: Satellite, color: 'text-orange-400' },
                        { name: 'Öffentliche Verwaltung', icon: Building2, color: 'text-emerald-400' }
                      ].map((sector) => (
                        <div key={sector.name} class="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                          <sector.icon class=h-5 w-5 \${sector.color} ></sector>
                          <span class="text-white font-medium">{sector.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div class="bg-slate-700/30 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Zusätzliche Verpflichtungen</h3>
                  <div>
                    <div class="text-center">
                      <div class="p-3 bg-red-600/20 rounded-lg w-fit mx-auto mb-3">
                        <FileText class="h-6 w-6 text-red-400" ></FileText>
                      </div>
                      <h4 class="font-medium text-white mb-2">Erweiterte Berichtspflichten</h4>
                      <p class="text-gray-300 text-sm">
                        Detailliertere Incident-Reports und regelmäßige Compliance-Berichte
                      </p>
                    </div>
                    
                    <div class="text-center">
                      <div class="p-3 bg-orange-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Search class="h-6 w-6 text-orange-400" ></Search>
                      </div>
                      <h4 class="font-medium text-white mb-2">Regelmäßige Audits</h4>
                      <p class="text-gray-300 text-sm">
                        Mindestens alle 2 Jahre umfassende Cybersicherheits-Audits
                      </p>
                    </div>
                    
                    <div class="text-center">
                      <div class="p-3 bg-yellow-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Award class="h-6 w-6 text-yellow-400" ></Award>
                      </div>
                      <h4 class="font-medium text-white mb-2">Zertifizierungen</h4>
                      <p class="text-gray-300 text-sm">
                        Nachweis anerkannter Cybersicherheits-Zertifizierungen empfohlen
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Important Entities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="important-entities"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-orange-600/20 rounded-lg">
                    <Building2 class="h-6 w-6 text-orange-400" ></Building2>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Wichtige Einrichtungen</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Definition & Abgrenzung</h3>
                    <p class="text-gray-300 mb-6">
                      Wichtige Einrichtungen sind Unternehmen, die nicht als wesentlich eingestuft werden, 
                      aber dennoch kritische Dienste erbringen und den Größenschwellen unterliegen.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Info class="h-4 w-4 text-orange-400" ></Info>
                          <span class="font-semibold text-orange-400">Moderate Aufsicht</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Weniger intensive behördliche Überwachung als wesentliche Einrichtungen
                        </p>
                      </div>
                      
                      <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <CheckCircle class="h-4 w-4 text-blue-400" ></CheckCircle>
                          <span class="font-semibold text-blue-400">Selbstdeklaration</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Unternehmen müssen selbst prüfen, ob sie unter NIS2 fallen
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Zusätzliche Sektoren</h3>
                    <div class="space-y-3">
                      {[
                        { name: 'ICT-Dienstmanagement', icon: Network, color: 'text-blue-400' },
                        { name: 'Lebensmittel', icon: Package, color: 'text-green-400' },
                        { name: 'Verarbeitendes Gewerbe', icon: Settings, color: 'text-gray-400' },
                        { name: 'Digitale Anbieter', icon: Globe, color: 'text-purple-400' },
                        { name: 'Postdienste', icon: Mail, color: 'text-yellow-400' },
                        { name: 'Abfallwirtschaft', icon: Trash2, color: 'text-orange-400' }
                      ].map((sector) => (
                        <div key={sector.name} class="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                          <sector.icon class=h-5 w-5 \${sector.color} ></sector>
                          <span class="text-white font-medium">{sector.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-lg p-6 border border-orange-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4">Unterschiede zu wesentlichen Einrichtungen</h3>
                  <div>
                    <div>
                      <div class="flex items-center gap-2 mb-3">
                        <Clock class="h-5 w-5 text-orange-400" ></Clock>
                        <h4 class="font-medium text-white">Aufsichtsfrequenz</h4>
                      </div>
                      <p class="text-gray-300 text-sm">
                        Weniger häufige behördliche Kontrollen und Prüfungen
                      </p>
                    </div>
                    
                    <div>
                      <div class="flex items-center gap-2 mb-3">
                        <Euro class="h-5 w-5 text-orange-400" ></Euro>
                        <h4 class="font-medium text-white">Sanktionen</h4>
                      </div>
                      <p class="text-gray-300 text-sm">
                        Gleiche Höchststrafen, aber geringere Wahrscheinlichkeit von Prüfungen
                      </p>
                    </div>
                    
                    <div>
                      <div class="flex items-center gap-2 mb-3">
                        <FileText class="h-5 w-5 text-orange-400" ></FileText>
                        <h4 class="font-medium text-white">Berichtspflichten</h4>
                      </div>
                      <p class="text-gray-300 text-sm">
                        Gleiche Incident-Reporting-Anforderungen wie wesentliche Einrichtungen
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cybersecurity Measures Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="cybersecurity-measures"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-blue-600/20 rounded-lg">
                    <Shield class="h-6 w-6 text-blue-400" ></Shield>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Cybersicherheitsmaßnahmen</h2>
                </div>
                
                <div class="space-y-8">
                  {cybersecurityMeasures.map((category, categoryIndex) => (
                    <div key={category.category} class="bg-slate-700/30 rounded-lg p-6">
                      <div class="flex items-center gap-3 mb-6">
                        <div class="p-2 bg-blue-600/20 rounded-lg">
                          <category.icon class="h-5 w-5 text-blue-400" ></category>
                        </div>
                        <h3 class="text-xl font-semibold text-white">{category.category}</h3>
                      </div>
                      
                      <div>
                        {category.measures.map((measure, measureIndex) => (
                          <motion.div
                            key={measure.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            class="bg-slate-800/50 rounded-lg p-6 border border-slate-600"
                          >
                            <h4 class="text-lg font-semibold text-white mb-3">{measure.title}</h4>
                            <p class="text-gray-300 mb-4 text-sm">{measure.description}</p>
                            
                            <div class="space-y-3">
                              <div>
                                <span class="text-xs text-blue-400 font-medium">UMSETZUNG:</span>
                                <p class="text-gray-300 text-sm mt-1">{measure.implementation}</p>
                              </div>
                              
                              <div>
                                <span class="text-xs text-green-400 font-medium">NACHWEIS:</span>
                                <p class="text-gray-300 text-sm mt-1">{measure.evidence}</p>
                              </div>
                            </div>
                            
                            <div class="mt-4 pt-4 border-t border-slate-600">
                              <button
                               -\${measure.title}\`)}
                                class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                {completedTasks.has(\`\${category.category}-\${measure.title}\`) ? (
                                  <CheckCircle2 class="h-4 w-4 text-green-400" ></CheckCircle2>
                                ) : (
                                  <Circle class="h-4 w-4" ></Circle>
                                )}
                                Als implementiert markieren
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="risk-management"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-red-600/20 rounded-lg">
                    <AlertTriangle class="h-6 w-6 text-red-400" ></AlertTriangle>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Risikomanagement</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Risikobewertungsansatz</h3>
                    <p class="text-gray-300 mb-6">
                      NIS2 verlangt einen systematischen Ansatz zur Identifikation, Bewertung und 
                      Behandlung von Cybersicherheitsrisiken basierend auf dem aktuellen Bedrohungsumfeld.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-red-400 mb-2">1. Identifikation</h4>
                        <p class="text-gray-300 text-sm">
                          Erkennung aller relevanten Cyber-Bedrohungen und Schwachstellen
                        </p>
                      </div>
                      
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-orange-400 mb-2">2. Bewertung</h4>
                        <p class="text-gray-300 text-sm">
                          Analyse der Eintrittswahrscheinlichkeit und Auswirkungen
                        </p>
                      </div>
                      
                      <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-yellow-400 mb-2">3. Behandlung</h4>
                        <p class="text-gray-300 text-sm">
                          Implementierung angemessener Schutzmaßnahmen
                        </p>
                      </div>
                      
                      <div class="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-green-400 mb-2">4. Überwachung</h4>
                        <p class="text-gray-300 text-sm">
                          Kontinuierliche Überprüfung und Anpassung der Maßnahmen
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Risikokategorien</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Zap class="h-4 w-4 text-yellow-400" ></Zap>
                          <span class="font-semibold text-yellow-400">Operationelle Risiken</span>
                        </div>
                        <ul class="text-gray-300 text-sm space-y-1">
                          <li>• Ausfall kritischer IT-Systeme</li>
                          <li>• Datenverlust oder -korruption</li>
                          <li>• Unterbrechung der Geschäftsprozesse</li>
                        </ul>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Users class="h-4 w-4 text-blue-400" ></Users>
                          <span class="font-semibold text-blue-400">Menschliche Risiken</span>
                        </div>
                        <ul class="text-gray-300 text-sm space-y-1">
                          <li>• Social Engineering</li>
                          <li>• Insider-Bedrohungen</li>
                          <li>• Unbeabsichtigte Fehler</li>
                        </ul>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Network class="h-4 w-4 text-purple-400" ></Network>
                          <span class="font-semibold text-purple-400">Technische Risiken</span>
                        </div>
                        <ul class="text-gray-300 text-sm space-y-1">
                          <li>• Malware und Ransomware</li>
                          <li>• Netzwerkeinbrüche</li>
                          <li>• Zero-Day-Exploits</li>
                        </ul>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Building class="h-4 w-4 text-green-400" ></Building>
                          <span class="font-semibold text-green-400">Lieferkettenrisiken</span>
                        </div>
                        <ul class="text-gray-300 text-sm space-y-1">
                          <li>• Kompromittierte Zulieferer</li>
                          <li>• Software Supply Chain Attacks</li>
                          <li>• Hardware-Manipulation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-slate-700/30 rounded-lg p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Risikomatrix & Bewertung</h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-blue-400 mb-3">Wahrscheinlichkeit</h4>
                      <div class="space-y-2">
                        <div class="flex items-center gap-3 p-2 bg-green-900/20 rounded">
                          <div class="w-4 h-4 bg-green-500 rounded"></div>
                          <span class="text-green-400 font-medium">Niedrig (1-2)</span>
                          <span class="text-gray-400 text-sm">Sehr unwahrscheinlich</span>
                        </div>
                        <div class="flex items-center gap-3 p-2 bg-yellow-900/20 rounded">
                          <div class="w-4 h-4 bg-yellow-500 rounded"></div>
                          <span class="text-yellow-400 font-medium">Mittel (3)</span>
                          <span class="text-gray-400 text-sm">Möglich</span>
                        </div>
                        <div class="flex items-center gap-3 p-2 bg-red-900/20 rounded">
                          <div class="w-4 h-4 bg-red-500 rounded"></div>
                          <span class="text-red-400 font-medium">Hoch (4-5)</span>
                          <span class="text-gray-400 text-sm">Sehr wahrscheinlich</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 class="font-medium text-purple-400 mb-3">Auswirkung</h4>
                      <div class="space-y-2">
                        <div class="flex items-center gap-3 p-2 bg-green-900/20 rounded">
                          <div class="w-4 h-4 bg-green-500 rounded"></div>
                          <span class="text-green-400 font-medium">Gering (1-2)</span>
                          <span class="text-gray-400 text-sm">Minimale Auswirkung</span>
                        </div>
                        <div class="flex items-center gap-3 p-2 bg-yellow-900/20 rounded">
                          <div class="w-4 h-4 bg-yellow-500 rounded"></div>
                          <span class="text-yellow-400 font-medium">Moderat (3)</span>
                          <span class="text-gray-400 text-sm">Erhebliche Auswirkung</span>
                        </div>
                        <div class="flex items-center gap-3 p-2 bg-red-900/20 rounded">
                          <div class="w-4 h-4 bg-red-500 rounded"></div>
                          <span class="text-red-400 font-medium">Schwerwiegend (4-5)</span>
                          <span class="text-gray-400 text-sm">Kritische Auswirkung</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Incident Reporting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="incident-reporting"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-orange-600/20 rounded-lg">
                    <Bell class="h-6 w-6 text-orange-400" ></Bell>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Meldepflichten</h2>
                </div>
                
                <div>
                  {incidentTypes.map((incidentType, index) => (
                    <motion.div
                      key={incidentType.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      class="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div class="flex items-center gap-3 mb-4">
                        <div class=p-2 rounded-lg \${
                          incidentType.urgency === 'Kritisch' ? 'bg-red-600/20' : 'bg-blue-600/20'
                        }>
                          <incidentType.icon class=h-5 w-5 \${
                            incidentType.urgency === 'Kritisch' ? 'text-red-400' : 'text-blue-400'
                          } ></incidentType>
                        </div>
                        <div>
                          <h3 class="text-xl font-semibold text-white">{incidentType.type} Vorfälle</h3>
                          <Badge class=mt-1 \${
                            incidentType.urgency === 'Kritisch' 
                              ? 'bg-red-500/20 text-red-300' 
                              : 'bg-blue-500/20 text-blue-300'
                          }>
                            {incidentType.urgency}
                          </Badge>
                        </div>
                      </div>
                      
                      <p class="text-gray-300 mb-4">{incidentType.description}</p>
                      
                      <div class="space-y-4">
                        <div>
                          <h4 class="font-medium text-white mb-2">Kriterien:</h4>
                          <ul class="space-y-1">
                            {incidentType.criteria.map((criterion, idx) => (
                              <li key={idx} class="flex items-start gap-2 text-gray-300 text-sm">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                {criterion}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 class="font-medium text-white mb-2">Meldeprozess:</h4>
                          <ol class="space-y-2">
                            {incidentType.reportingFlow.map((step, idx) => (
                              <li key={idx} class="flex items-start gap-3 text-gray-300 text-sm">
                                <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5 flex-shrink-0">
                                  {idx + 1}
                                </div>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 border border-orange-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4">24-Stunden-Meldefrist</h3>
                  <div>
                    <div class="text-center">
                      <div class="p-3 bg-red-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Clock class="h-6 w-6 text-red-400" ></Clock>
                      </div>
                      <h4 class="font-medium text-white mb-2">Sofortmeldung</h4>
                      <p class="text-gray-300 text-sm">
                        Erste Meldung binnen 24 Stunden nach Erkennung
                      </p>
                    </div>
                    
                    <div class="text-center">
                      <div class="p-3 bg-orange-600/20 rounded-lg w-fit mx-auto mb-3">
                        <FileText class="h-6 w-6 text-orange-400" ></FileText>
                      </div>
                      <h4 class="font-medium text-white mb-2">Zwischenbericht</h4>
                      <p class="text-gray-300 text-sm">
                        Detaillierter Bericht binnen 72 Stunden
                      </p>
                    </div>
                    
                    <div class="text-center">
                      <div class="p-3 bg-yellow-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Award class="h-6 w-6 text-yellow-400" ></Award>
                      </div>
                      <h4 class="font-medium text-white mb-2">Abschlussbericht</h4>
                      <p class="text-gray-300 text-sm">
                        Finaler Bericht binnen 1 Monat
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Compliance Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="compliance-timeline"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-green-600/20 rounded-lg">
                    <Clock class="h-6 w-6 text-green-400" ></Clock>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Compliance Timeline</h2>
                </div>
                
                <div class="relative">
                  <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-red-500"></div>
                  
                  <div class="space-y-8">
                    {complianceTimeline.map((milestone, index) => (
                      <motion.div
                        key={milestone.date}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        class="relative flex items-start gap-6"
                      >
                        <div></div>
                        
                        <div class="ml-16 bg-slate-700/30 rounded-lg p-6 flex-1">
                          <div class="flex items-center gap-3 mb-3">
                            <milestone.icon class=h-5 w-5 \${
                              milestone.status === 'completed' ? 'text-green-400' :
                              milestone.status === 'current' ? 'text-blue-400' :
                              'text-gray-400'
                            } ></milestone>
                            <Badge>
                              {milestone.date}
                            </Badge>
                          </div>
                          <h3 class="text-xl font-bold text-white mb-2">{milestone.milestone}</h3>
                          <p class="text-gray-300">{milestone.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Implementation Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="implementation"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-purple-600/20 rounded-lg">
                    <Route class="h-6 w-6 text-purple-400" ></Route>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Umsetzungsroadmap</h2>
                </div>
                
                <div>
                  {implementationPhases.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      class=bg-slate-700/30 rounded-lg p-6 border border-slate-600 hover:border-\${phase.color}-500/50 transition-colors
                    >
                      <div class="flex items-center gap-3 mb-4">
                        <div class=p-2 bg-\${phase.color}-600/20 rounded-lg>
                          <phase.icon class=h-5 w-5 text-\${phase.color}-400 ></phase>
                        </div>
                        <div>
                          <Badge class=bg-\${phase.color}-500/20 text-\${phase.color}-300 mb-2>
                            Phase {phase.phase}
                          </Badge>
                          <h3 class="text-lg font-semibold text-white">{phase.title}</h3>
                          <p class="text-gray-400 text-sm">{phase.duration}</p>
                        </div>
                      </div>
                      
                      <div class="space-y-4">
                        <div>
                          <h4 class="font-medium text-white mb-2">Aufgaben:</h4>
                          <ul class="space-y-1">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} class="flex items-start gap-2 text-gray-300 text-sm">
                                <div class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 class="font-medium text-white mb-2">Ergebnisse:</h4>
                          <ul class="space-y-1">
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <li key={delIndex} class="flex items-start gap-2 text-gray-300 text-sm">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Governance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="governance"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-purple-600/20 rounded-lg">
                    <Users class="h-6 w-6 text-purple-400" ></Users>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Governance & Leadership</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Führungsverantwortung</h3>
                    <p class="text-gray-300 mb-6">
                      NIS2 betont die persönliche Verantwortung der Geschäftsführung für 
                      Cybersicherheit und verlangt eine "Tone from the Top"-Kultur.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-red-400 mb-2">Persönliche Haftung</h4>
                        <p class="text-gray-300 text-sm">
                          Geschäftsführer können persönlich für Compliance-Verstöße haftbar gemacht werden
                        </p>
                      </div>
                      
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-orange-400 mb-2">Aufsichtspflicht</h4>
                        <p class="text-gray-300 text-sm">
                          Aktive Überwachung und Steuerung der Cybersicherheitsmaßnahmen
                        </p>
                      </div>
                      
                      <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-blue-400 mb-2">Schulungspflicht</h4>
                        <p class="text-gray-300 text-sm">
                          Regelmäßige Cybersicherheitsschulungen für die Führungsebene
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Organisationsstruktur</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Star class="h-4 w-4 text-yellow-400" ></Star>
                          <span class="font-semibold text-yellow-400">CISO/Chief Security Officer</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Verantwortlich für strategische Cybersicherheit und Compliance
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Shield class="h-4 w-4 text-blue-400" ></Shield>
                          <span class="font-semibold text-blue-400">Security Committee</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Interdisziplinäres Gremium für Cybersicherheitsentscheidungen
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Users class="h-4 w-4 text-green-400" ></Users>
                          <span class="font-semibold text-green-400">Security Champions</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Dezentrale Sicherheitsverantwortliche in allen Geschäftsbereichen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Supply Chain Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="supply-chain"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-green-600/20 rounded-lg">
                    <Network class="h-6 w-6 text-green-400" ></Network>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Lieferkettenmanagement</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Supply Chain Security</h3>
                    <p class="text-gray-300 mb-6">
                      NIS2 verlangt umfassende Bewertung und Überwachung der 
                      Cybersicherheitsrisiken in der gesamten Lieferkette.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-blue-400 mb-2">Vendor Assessment</h4>
                        <p class="text-gray-300 text-sm">
                          Systematische Bewertung der Cybersicherheitsreife aller Zulieferer
                        </p>
                      </div>
                      
                      <div class="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-purple-400 mb-2">Vertragsklauseln</h4>
                        <p class="text-gray-300 text-sm">
                          Cybersicherheitsanforderungen in allen Lieferantenverträgen
                        </p>
                      </div>
                      
                      <div class="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-green-400 mb-2">Kontinuierliches Monitoring</h4>
                        <p class="text-gray-300 text-sm">
                          Laufende Überwachung der Sicherheitslage bei kritischen Lieferanten
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Kritische Lieferanten</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Server class="h-4 w-4 text-blue-400" ></Server>
                          <span class="font-semibold text-blue-400">IT-Dienstleister</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Cloud-Provider, Managed Services, Software-Anbieter
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Shield class="h-4 w-4 text-red-400" ></Shield>
                          <span class="font-semibold text-red-400">Kritische Infrastruktur</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Energieversorger, Telekommunikation, Logistikpartner
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Settings class="h-4 w-4 text-orange-400" ></Settings>
                          <span class="font-semibold text-orange-400">Technologie-Lieferanten</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Hardware-Hersteller, Software-Entwickler, OEM-Partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Business Continuity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="business-continuity"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-cyan-600/20 rounded-lg">
                    <RotateCcw class="h-6 w-6 text-cyan-400" ></RotateCcw>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Business Continuity</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Disaster Recovery</h3>
                    <p class="text-gray-300 mb-6">
                      Strukturierte Pläne zur schnellen Wiederherstellung kritischer 
                      Geschäftsprozesse nach Cybersicherheitsvorfällen.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-red-400 mb-2">RTO (Recovery Time Objective)</h4>
                        <p class="text-gray-300 text-sm">
                          Maximale akzeptable Ausfallzeit für kritische Systeme
                        </p>
                      </div>
                      
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-orange-400 mb-2">RPO (Recovery Point Objective)</h4>
                        <p class="text-gray-300 text-sm">
                          Maximaler akzeptabler Datenverlust bei System-Recovery
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Backup-Strategien</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Database class="h-4 w-4 text-blue-400" ></Database>
                          <span class="font-semibold text-blue-400">3-2-1 Regel</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          3 Kopien, 2 verschiedene Medien, 1 Offsite-Backup
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Cloud class="h-4 w-4 text-purple-400" ></Cloud>
                          <span class="font-semibold text-purple-400">Air-Gapped Backups</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Physisch getrennte Backups gegen Ransomware-Angriffe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Encryption Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="encryption"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-indigo-600/20 rounded-lg">
                    <Lock class="h-6 w-6 text-indigo-400" ></Lock>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Verschlüsselung</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Verschlüsselungsstandards</h3>
                    <p class="text-gray-300 mb-6">
                      NIS2 verlangt starke Verschlüsselung für alle sensiblen Daten 
                      sowohl in Ruhe als auch bei der Übertragung.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-blue-400 mb-2">Data at Rest</h4>
                        <p class="text-gray-300 text-sm">
                          AES-256 Verschlüsselung für gespeicherte Daten und Datenbanken
                        </p>
                      </div>
                      
                      <div class="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-green-400 mb-2">Data in Transit</h4>
                        <p class="text-gray-300 text-sm">
                          TLS 1.3 für alle Datenübertragungen und API-Kommunikation
                        </p>
                      </div>
                      
                      <div class="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-purple-400 mb-2">Key Management</h4>
                        <p class="text-gray-300 text-sm">
                          Hardware Security Modules (HSM) für Schlüsselverwaltung
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Implementierung</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Settings class="h-4 w-4 text-orange-400" ></Settings>
                          <span class="font-semibold text-orange-400">End-to-End Encryption</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Vollständige Verschlüsselung vom Sender zum Empfänger
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Shield class="h-4 w-4 text-red-400" ></Shield>
                          <span class="font-semibold text-red-400">Zero-Knowledge Architecture</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Service-Provider haben keinen Zugriff auf Kundendaten
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Award class="h-4 w-4 text-yellow-400" ></Award>
                          <span class="font-semibold text-yellow-400">Quantum-Safe Cryptography</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Vorbereitung auf Post-Quantum-Kryptographie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vulnerability Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="vulnerability-management"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-yellow-600/20 rounded-lg">
                    <Search class="h-6 w-6 text-yellow-400" ></Search>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Vulnerability Management</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Schwachstellenmanagement</h3>
                    <p class="text-gray-300 mb-6">
                      Systematische Identifikation, Bewertung und Behebung von 
                      Sicherheitslücken in der gesamten IT-Infrastruktur.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-red-400 mb-2">Kritisch (CVSS 9.0-10.0)</h4>
                        <p class="text-gray-300 text-sm">
                          Sofortige Behebung binnen 24 Stunden
                        </p>
                      </div>
                      
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-orange-400 mb-2">Hoch (CVSS 7.0-8.9)</h4>
                        <p class="text-gray-300 text-sm">
                          Patches binnen 72 Stunden implementieren
                        </p>
                      </div>
                      
                      <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-yellow-400 mb-2">Mittel (CVSS 4.0-6.9)</h4>
                        <p class="text-gray-300 text-sm">
                          Reguläre Patch-Zyklen (14 Tage)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Automatisierung</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Zap class="h-4 w-4 text-blue-400" ></Zap>
                          <span class="font-semibold text-blue-400">Automated Scanning</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Kontinuierliche Vulnerability Scans aller Systeme
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <TrendingUp class="h-4 w-4 text-green-400" ></TrendingUp>
                          <span class="font-semibold text-green-400">Risk Scoring</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Automatische Risikobewertung und Priorisierung
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Settings class="h-4 w-4 text-purple-400" ></Settings>
                          <span class="font-semibold text-purple-400">Patch Management</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Automatisierte Patch-Deployment mit Rollback-Funktionen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Penetration Testing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="penetration-testing"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-red-600/20 rounded-lg">
                    <Target class="h-6 w-6 text-red-400" ></Target>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Penetrationstests</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Pentest-Strategie</h3>
                    <p class="text-gray-300 mb-6">
                      Regelmäßige Penetrationstests zur Bewertung der praktischen 
                      Wirksamkeit implementierter Sicherheitsmaßnahmen.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-red-400 mb-2">Black Box Testing</h4>
                        <p class="text-gray-300 text-sm">
                          Externe Sicht ohne Vorwissen über interne Systeme
                        </p>
                      </div>
                      
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-orange-400 mb-2">White Box Testing</h4>
                        <p class="text-gray-300 text-sm">
                          Vollständiger Zugang zu Systemdokumentation und Code
                        </p>
                      </div>
                      
                      <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-yellow-400 mb-2">Red Team Exercises</h4>
                        <p class="text-gray-300 text-sm">
                          Realistische Angriffssimulationen über längere Zeiträume
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Test-Bereiche</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Network class="h-4 w-4 text-blue-400" ></Network>
                          <span class="font-semibold text-blue-400">Netzwerk-Penetration</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Externe und interne Netzwerk-Infrastruktur
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Globe class="h-4 w-4 text-green-400" ></Globe>
                          <span class="font-semibold text-green-400">Web Application Testing</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          OWASP Top 10 und branchenspezifische Schwachstellen
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Users class="h-4 w-4 text-purple-400" ></Users>
                          <span class="font-semibold text-purple-400">Social Engineering</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Phishing-Kampagnen und Mitarbeiter-Awareness-Tests
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enforcement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="enforcement"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-red-600/20 rounded-lg">
                    <Gavel class="h-6 w-6 text-red-400" ></Gavel>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Durchsetzung & Sanktionen</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Sanktionsmöglichkeiten</h3>
                    <p class="text-gray-300 mb-6">
                      NIS2 sieht erheblich härtere Sanktionen vor als die ursprüngliche 
                      NIS-Richtlinie, einschließlich persönlicher Haftung der Führungskräfte.
                    </p>
                    
                    <div class="space-y-4">
                      <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-red-400 mb-2">Geldstrafen</h4>
                        <p class="text-gray-300 text-sm">
                          Bis zu 10 Mio. € oder 2% des weltweiten Jahresumsatzes
                        </p>
                      </div>
                      
                      <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-orange-400 mb-2">Betriebsverbote</h4>
                        <p class="text-gray-300 text-sm">
                          Temporäre oder dauerhafte Untersagung des Geschäftsbetriebs
                        </p>
                      </div>
                      
                      <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 class="font-semibold text-yellow-400 mb-2">Persönliche Haftung</h4>
                        <p class="text-gray-300 text-sm">
                          Führungskräfte können persönlich zur Verantwortung gezogen werden
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Aufsichtsbehörden</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Building class="h-4 w-4 text-blue-400" ></Building>
                          <span class="font-semibold text-blue-400">Nationale Behörden</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          BSI, BNetzA und andere sektorspezifische Aufsichtsbehörden
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Globe class="h-4 w-4 text-green-400" ></Globe>
                          <span class="font-semibold text-green-400">EU-Koordination</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          ENISA koordiniert grenzüberschreitende Durchsetzung
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Search class="h-4 w-4 text-purple-400" ></Search>
                          <span class="font-semibold text-purple-400">Prüfungsbefugnisse</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Umfassende Audit- und Untersuchungsrechte der Behörden
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Best Practices Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="best-practices"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-yellow-600/20 rounded-lg">
                    <Award class="h-6 w-6 text-yellow-400" ></Award>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Best Practices</h2>
                </div>
                
                <div>
                  <div class="space-y-6">
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Shield class="h-5 w-5 text-blue-400" ></Shield>
                        Proaktive Sicherheit
                      </h3>
                      <ul class="space-y-2 text-gray-300">
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Regelmäßige Threat Intelligence Updates
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Automatisierte Vulnerability Scans
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Zero Trust Architecture
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Continuous Security Monitoring
                        </li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Users class="h-5 w-5 text-purple-400" ></Users>
                        Organisatorische Exzellenz
                      </h3>
                      <ul class="space-y-2 text-gray-300">
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Security Champions Programm
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Regelmäßige Tabletop-Übungen
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Cross-funktionale Security Teams
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Kontinuierliche Schulungen
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="space-y-6">
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <TrendingUp class="h-5 w-5 text-green-400" ></TrendingUp>
                        Compliance Excellence
                      </h3>
                      <ul class="space-y-2 text-gray-300">
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Automatisierte Compliance-Berichte
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Dashboard für Führungskräfte
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Proaktive Kommunikation mit Behörden
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Kontinuierliche Verbesserung
                        </li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Network class="h-5 w-5 text-orange-400" ></Network>
                        Technologische Innovation
                      </h3>
                      <ul class="space-y-2 text-gray-300">
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          KI-basierte Bedrohungserkennung
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          Cloud-native Security Tools
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          DevSecOps Integration
                        </li>
                        <li class="flex items-start gap-2">
                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                          API Security Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer ></Footer>
    </div>`
};