export default {
  route: '/compliance/iso-27017',
  title: 'Iso 27017',
  description: 'Umfassender Leitfaden zu ISO 27017 - Informationssicherheitskontrollen für 
              Cloud-Computing-Services basierend auf ISO 27002',
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
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
      <Header ></Header>
      
      {/* Progress Bar */}
      <motion.div
        class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-500 z-50"
        style={{ scaleX }}
      ></motion>

      {/* Floating Sidebar Toggle */}
      <Button
       
        class="fixed top-20 left-4 z-40 lg:hidden bg-sky-600 hover:bg-sky-700"
        size="sm"
      >
        <List class="h-4 w-4" ></List>
      </Button>

      {/* Sidebar */}
      <motion.div
        class=fixed left-0 top-16 h-screen w-80 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700 z-30 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300
      >
        <div class="p-6">
          <h2 class="text-xl font-bold text-white mb-6">ISO 27017 Leitfaden</h2>
          <div class="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
               }
                class=w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                  activeSection === section.id
                    ? 'bg-sky-600 text-white'
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
              <span class="text-sm text-sky-400">%</span>
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
            <div class="inline-flex items-center gap-2 bg-sky-600/20 text-sky-400 px-4 py-2 rounded-full mb-6">
              <Cloud class="h-4 w-4" ></Cloud>
              <span class="text-sm font-medium">ISO/IEC 27017:2015</span>
            </div>
            
            <h1>
              <span class="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                ISO 27017
              </span>
              <br />
              <span>Cloud Security Guide</span>
            </h1>
            
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Umfassender Leitfaden zu ISO 27017 - Informationssicherheitskontrollen für 
              Cloud-Computing-Services basierend auf ISO 27002
            </p>

            <div class="flex flex-wrap justify-center gap-4 mb-12">
              <Badge class="bg-sky-600/20 text-sky-400 px-4 py-2">
                <Cloud class="h-4 w-4 mr-2" ></Cloud>
                Cloud Security Controls
              </Badge>
              <Badge class="bg-blue-600/20 text-blue-400 px-4 py-2">
                <Shield class="h-4 w-4 mr-2" ></Shield>
                37 Zusätzliche Controls
              </Badge>
              <Badge class="bg-purple-600/20 text-purple-400 px-4 py-2">
                <Award class="h-4 w-4 mr-2" ></Award>
                International Standard
              </Badge>
            </div>

            {/* Stats */}
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-sky-400 mb-2">
                  <CounterAnimation value="37" ></CounterAnimation>
                </div>
                <div class="text-gray-300">Cloud-spezifische Controls</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-blue-400 mb-2">
                  <CounterAnimation value="7" ></CounterAnimation>
                </div>
                <div class="text-gray-300">Neue Control-Familien</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-purple-400 mb-2">
                  <CounterAnimation value="3" ></CounterAnimation>
                </div>
                <div class="text-gray-300">Service-Modelle</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                class="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div class="text-3xl font-bold text-green-400 mb-2">
                  <CounterAnimation value="4" ></CounterAnimation>
                </div>
                <div class="text-gray-300">Deployment-Modelle</div>
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
                  <div class="p-2 bg-sky-600/20 rounded-lg">
                    <Eye class="h-6 w-6 text-sky-400" ></Eye>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Überblick</h2>
                </div>
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Was ist ISO 27017?</h3>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                      ISO/IEC 27017:2015 ist ein internationaler Standard, der Leitlinien für 
                      Informationssicherheitskontrollen speziell für Cloud-Computing-Services bereitstellt. 
                      Er erweitert ISO 27002 um cloud-spezifische Kontrollen.
                    </p>
                    
                    <h4 class="text-lg font-semibold text-white mb-3">Hauptziele:</h4>
                    <ul class="space-y-2 text-gray-300">
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Cloud-spezifische Sicherheitskontrollen definieren
                      </li>
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Shared Responsibility Model klären
                      </li>
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Vertrauen in Cloud-Services stärken
                      </li>
                      <li class="flex items-start gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                        Compliance in Cloud-Umgebungen ermöglichen
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Beziehung zu anderen Standards</h3>
                    <div class="space-y-4">
                      <div class="p-4 bg-slate-700/50 rounded-lg">
                        <div class="flex items-center gap-2 mb-2">
                          <Shield class="h-4 w-4 text-blue-400" ></Shield>
                          <span class="font-semibold text-blue-400">ISO 27001/27002</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Baut auf den Grundlagen auf und erweitert diese um Cloud-Kontrollen
                        </p>
                      </div>
                      
                      <div class="p-4 bg-slate-700/50 rounded-lg">
                        <div class="flex items-center gap-2 mb-2">
                          <Lock class="h-4 w-4 text-purple-400" ></Lock>
                          <span class="font-semibold text-purple-400">ISO 27018</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Komplementär für Datenschutz in öffentlichen Cloud-Services
                        </p>
                      </div>
                      
                      <div class="p-4 bg-slate-700/50 rounded-lg">
                        <div class="flex items-center gap-2 mb-2">
                          <Globe class="h-4 w-4 text-green-400" ></Globe>
                          <span class="font-semibold text-green-400">NIST Cybersecurity Framework</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Harmoniert mit US-amerikanischen Cloud-Sicherheitsstandards
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
                
                <div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Zielgruppen</h3>
                    <div class="space-y-4">
                      <div class="bg-slate-700/30 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Cloud class="h-4 w-4 text-blue-400" ></Cloud>
                          <span class="font-semibold text-blue-400">Cloud Service Provider</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          IaaS-, PaaS- und SaaS-Anbieter, die ihre Sicherheitskontrollen implementieren
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/30 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Users class="h-4 w-4 text-green-400" ></Users>
                          <span class="font-semibold text-green-400">Cloud Service Customer</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Unternehmen, die Cloud-Services nutzen und ihre Verantwortlichkeiten verstehen müssen
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/30 rounded-lg p-4">
                        <div class="flex items-center gap-2 mb-2">
                          <Shield class="h-4 w-4 text-purple-400" ></Shield>
                          <span class="font-semibold text-purple-400">Auditoren & Assessoren</span>
                        </div>
                        <p class="text-gray-300 text-sm">
                          Prüfer, die Cloud-Sicherheitskontrollen bewerten und zertifizieren
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-4">Nicht im Scope</h3>
                    <div class="space-y-3">
                      <div class="flex items-start gap-2 text-gray-300">
                        <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                        <span class="text-sm">Technische Implementierungsdetails</span>
                      </div>
                      <div class="flex items-start gap-2 text-gray-300">
                        <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                        <span class="text-sm">Produkt- oder anbieterspezifische Lösungen</span>
                      </div>
                      <div class="flex items-start gap-2 text-gray-300">
                        <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                        <span class="text-sm">Business Continuity Management (separate Standards)</span>
                      </div>
                      <div class="flex items-start gap-2 text-gray-300">
                        <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                        <span class="text-sm">Rechtliche und regulatorische Anforderungen</span>
                      </div>
                    </div>
                    
                    <div class="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                      <h4 class="font-semibold text-blue-400 mb-2">Wichtiger Hinweis</h4>
                      <p class="text-gray-300 text-sm">
                        ISO 27017 ist ein Leitfaden und keine zertifizierbare Norm. 
                        Zertifizierungen erfolgen gegen ISO 27001 mit ISO 27017 als Referenz.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cloud Models Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="cloud-models"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-blue-600/20 rounded-lg">
                    <Cloud class="h-6 w-6 text-blue-400" ></Cloud>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Cloud-Modelle</h2>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-4">Service-Modelle</h3>
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      class="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 bg-red-600/20 rounded-lg">
                          <Server class="h-5 w-5 text-red-400" ></Server>
                        </div>
                        <h4 class="font-semibold text-white">Infrastructure as a Service (IaaS)</h4>
                      </div>
                      
                      <p class="text-gray-300 text-sm mb-4">
                        Bereitstellung von IT-Infrastruktur wie VMs, Storage, Netzwerke
                      </p>
                      
                      <div class="space-y-3">
                        <div>
                          <span class="text-xs text-red-400 font-medium">ANBIETER-VERANTWORTUNG:</span>
                          <ul class="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Physische Infrastruktur</li>
                            <li>• Hypervisor-Sicherheit</li>
                            <li>• Netzwerk-Isolierung</li>
                            <li>• Storage-Verschlüsselung</li>
                          </ul>
                        </div>
                        
                        <div>
                          <span class="text-xs text-blue-400 font-medium">KUNDEN-VERANTWORTUNG:</span>
                          <ul class="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Betriebssystem-Security</li>
                            <li>• Anwendungssicherheit</li>
                            <li>• Daten-Klassifizierung</li>
                            <li>• Access Management</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="mt-4 pt-4 border-t border-slate-600">
                        <div class="flex items-center gap-2">
                          <span class="text-xs text-gray-400">Beispiele:</span>
                          <div class="flex gap-1">
                            <Badge class="bg-red-500/20 text-red-300 text-xs">AWS EC2</Badge>
                            <Badge class="bg-red-500/20 text-red-300 text-xs">Azure VMs</Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      class="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 bg-orange-600/20 rounded-lg">
                          <Settings class="h-5 w-5 text-orange-400" ></Settings>
                        </div>
                        <h4 class="font-semibold text-white">Platform as a Service (PaaS)</h4>
                      </div>
                      
                      <p class="text-gray-300 text-sm mb-4">
                        Entwicklungsplattformen und Runtime-Umgebungen
                      </p>
                      
                      <div class="space-y-3">
                        <div>
                          <span class="text-xs text-orange-400 font-medium">ANBIETER-VERANTWORTUNG:</span>
                          <ul class="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Runtime-Umgebung</li>
                            <li>• Middleware-Sicherheit</li>
                            <li>• Entwicklungstools</li>
                            <li>• Plattform-Updates</li>
                          </ul>
                        </div>
                        
                        <div>
                          <span class="text-xs text-blue-400 font-medium">KUNDEN-VERANTWORTUNG:</span>
                          <ul class="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Anwendungscode</li>
                            <li>• Daten-Management</li>
                            <li>• User Access Controls</li>
                            <li>• Konfigurationssicherheit</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="mt-4 pt-4 border-t border-slate-600">
                        <div class="flex items-center gap-2">
                          <span class="text-xs text-gray-400">Beispiele:</span>
                          <div class="flex gap-1">
                            <Badge class="bg-orange-500/20 text-orange-300 text-xs">Heroku</Badge>
                            <Badge class="bg-orange-500/20 text-orange-300 text-xs">Google App Engine</Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      class="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 bg-green-600/20 rounded-lg">
                          <Globe class="h-5 w-5 text-green-400" ></Globe>
                        </div>
                        <h4 class="font-semibold text-white">Software as a Service (SaaS)</h4>
                      </div>
                      
                      <p class="text-gray-300 text-sm mb-4">
                        Vollständige Anwendungen als Service
                      </p>
                      
                      <div class="space-y-3">
                        <div>
                          <span class="text-xs text-green-400 font-medium">ANBIETER-VERANTWORTUNG:</span>
                          <ul class="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Gesamte Anwendung</li>
                            <li>• Daten-Residency</li>
                            <li>• Backup & Recovery</li>
                            <li>• Patch-Management</li>
                          </ul>
                        </div>
                        
                        <div>
                          <span class="text-xs text-blue-400 font-medium">KUNDEN-VERANTWORTUNG:</span>
                          <ul class="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• User Account Management</li>
                            <li>• Zugriffskontrollen</li>
                            <li>• Daten-Eingabe</li>
                            <li>• Compliance-Konfiguration</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="mt-4 pt-4 border-t border-slate-600">
                        <div class="flex items-center gap-2">
                          <span class="text-xs text-gray-400">Beispiele:</span>
                          <div class="flex gap-1">
                            <Badge class="bg-green-500/20 text-green-300 text-xs">Office 365</Badge>
                            <Badge class="bg-green-500/20 text-green-300 text-xs">Salesforce</Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-semibold text-white mb-4">Deployment-Modelle</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <div class="flex items-center gap-2 mb-3">
                        <Globe class="h-5 w-5 text-blue-400" ></Globe>
                        <h4 class="font-semibold text-white">Public Cloud</h4>
                      </div>
                      <p class="text-gray-300 text-sm mb-3">
                        Öffentlich verfügbare Cloud-Services
                      </p>
                      <div class="space-y-2">
                        <div class="text-xs">
                          <span class="text-green-400">Vorteile:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Kosteneffizient</li>
                            <li>• Hohe Skalierbarkeit</li>
                            <li>• Schnelle Bereitstellung</li>
                          </ul>
                        </div>
                        <div class="text-xs">
                          <span class="text-red-400">Risiken:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Geteilte Ressourcen</li>
                            <li>• Compliance-Herausforderungen</li>
                            <li>• Vendor Lock-in</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <div class="flex items-center gap-2 mb-3">
                        <Lock class="h-5 w-5 text-purple-400" ></Lock>
                        <h4 class="font-semibold text-white">Private Cloud</h4>
                      </div>
                      <p class="text-gray-300 text-sm mb-3">
                        Dedizierte Cloud-Infrastruktur
                      </p>
                      <div class="space-y-2">
                        <div class="text-xs">
                          <span class="text-green-400">Vorteile:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Vollständige Kontrolle</li>
                            <li>• Höhere Sicherheit</li>
                            <li>• Compliance-konform</li>
                          </ul>
                        </div>
                        <div class="text-xs">
                          <span class="text-red-400">Nachteile:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Höhere Kosten</li>
                            <li>• Begrenzte Skalierbarkeit</li>
                            <li>• Wartungsaufwand</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <div class="flex items-center gap-2 mb-3">
                        <Network class="h-5 w-5 text-orange-400" ></Network>
                        <h4 class="font-semibold text-white">Hybrid Cloud</h4>
                      </div>
                      <p class="text-gray-300 text-sm mb-3">
                        Kombination aus Public und Private
                      </p>
                      <div class="space-y-2">
                        <div class="text-xs">
                          <span class="text-green-400">Vorteile:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Flexibilität</li>
                            <li>• Optimierte Kosten</li>
                            <li>• Risiko-Diversifizierung</li>
                          </ul>
                        </div>
                        <div class="text-xs">
                          <span class="text-red-400">Herausforderungen:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Komplexe Integration</li>
                            <li>• Einheitliche Governance</li>
                            <li>• Daten-Synchronisation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <div class="flex items-center gap-2 mb-3">
                        <Users class="h-5 w-5 text-green-400" ></Users>
                        <h4 class="font-semibold text-white">Community Cloud</h4>
                      </div>
                      <p class="text-gray-300 text-sm mb-3">
                        Geteilte Infrastruktur für spezifische Gruppen
                      </p>
                      <div class="space-y-2">
                        <div class="text-xs">
                          <span class="text-green-400">Anwendung:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Behörden-Clouds</li>
                            <li>• Branchen-Clouds</li>
                            <li>• Forschungs-Clouds</li>
                          </ul>
                        </div>
                        <div class="text-xs">
                          <span class="text-blue-400">Charakteristika:</span>
                          <ul class="text-gray-300 mt-1">
                            <li>• Gemeinsame Compliance</li>
                            <li>• Ähnliche Sicherheitsanforderungen</li>
                            <li>• Kostenteilung</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Shared Responsibility Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="shared-responsibility"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-purple-600/20 rounded-lg">
                    <Users class="h-6 w-6 text-purple-400" ></Users>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Shared Responsibility Model</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Das Shared Responsibility Model ist ein fundamentales Konzept in ISO 27017, das klar definiert, 
                    welche Sicherheitsverantwortlichkeiten beim Cloud-Anbieter liegen und welche beim Kunden verbleiben.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Cloud class="h-5 w-5 text-blue-400" ></Cloud>
                        Cloud Service Provider (CSP)
                      </h3>
                      <div class="space-y-4">
                        <div>
                          <h4 class="font-medium text-blue-400 mb-2">Kernverantwortlichkeiten:</h4>
                          <ul class="space-y-1 text-gray-300 text-sm">
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Sicherheit der Cloud-Infrastruktur
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Physische Sicherheit der Rechenzentren
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Netzwerk- und Host-Level-Schutz
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Service-Verfügbarkeit und -Resilienz
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Compliance mit relevanten Standards
                            </li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h5 class="font-medium text-blue-400 mb-2">Transparenzpflicht:</h5>
                          <p class="text-gray-300 text-sm">
                            CSPs müssen ihre Sicherheitsmaßnahmen dokumentieren und dem Kunden 
                            zugänglich machen (Audit-Berichte, Zertifizierungen, SLAs).
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Users class="h-5 w-5 text-green-400" ></Users>
                        Cloud Service Customer (CSC)
                      </h3>
                      <div class="space-y-4">
                        <div>
                          <h4 class="font-medium text-green-400 mb-2">Kernverantwortlichkeiten:</h4>
                          <ul class="space-y-1 text-gray-300 text-sm">
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Sicherheit in der Cloud (Daten, Anwendungen)
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Identity & Access Management
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Konfigurationssicherheit
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Datenklassifizierung und -schutz
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Incident Response und Business Continuity
                            </li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h5 class="font-medium text-green-400 mb-2">Due Diligence:</h5>
                          <p class="text-gray-300 text-sm">
                            Kunden müssen CSP-Sicherheitsmaßnahmen bewerten und ihre eigenen 
                            Schutzmaßnahmen entsprechend anpassen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-4">Verantwortungsmatrix nach Service-Modell</h3>
                  <div class="overflow-x-auto">
                    <table class="w-full border border-slate-600 rounded-lg overflow-hidden">
                      <thead class="bg-slate-700">
                        <tr>
                          <th class="p-4 text-left text-white font-medium border-b border-slate-600">Sicherheitsbereich</th>
                          <th class="p-4 text-center text-white font-medium border-b border-l border-slate-600">IaaS</th>
                          <th class="p-4 text-center text-white font-medium border-b border-l border-slate-600">PaaS</th>
                          <th class="p-4 text-center text-white font-medium border-b border-l border-slate-600">SaaS</th>
                        </tr>
                      </thead>
                      <tbody class="bg-slate-800/50">
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Physische Sicherheit</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Netzwerk-Infrastruktur</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Host-Betriebssystem</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Hypervisor</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Gast-Betriebssystem</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Runtime-Umgebung</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Anwendungen</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Daten</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300 border-b border-slate-600">Identity & Access Management</td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td class="p-4 text-center border-b border-l border-slate-600">
                            <Badge class="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-4 text-gray-300">Compliance & Governance</td>
                          <td class="p-4 text-center border-l border-slate-600">
                            <Badge class="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td class="p-4 text-center border-l border-slate-600">
                            <Badge class="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td class="p-4 text-center border-l border-slate-600">
                            <Badge class="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div class="mt-4 flex gap-4 text-sm">
                    <div class="flex items-center gap-2">
                      <Badge class="bg-blue-500/20 text-blue-300">CSP</Badge>
                      <span class="text-gray-300">Cloud Service Provider</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Badge class="bg-green-500/20 text-green-300">CSC</Badge>
                      <span class="text-gray-300">Cloud Service Customer</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Badge class="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                      <span class="text-gray-300">Geteilte Verantwortung</span>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-4">Praktische Umsetzung</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
                        <FileText class="h-5 w-5 text-blue-400" ></FileText>
                        Dokumentation & Kommunikation
                      </h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          Klare RACI-Matrix für alle Sicherheitsbereiche
                        </li>
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          Regelmäßige Reviews der Verantwortlichkeiten
                        </li>
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          Schnittstellen-Dokumentation für geteilte Bereiche
                        </li>
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          Incident-Eskalationsverfahren
                        </li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="font-semibold text-white mb-3 flex items-center gap-2">
                        <CheckCircle class="h-5 w-5 text-green-400" ></CheckCircle>
                        Kontrolle & Überwachung
                      </h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          Kontinuierliches Monitoring der Schnittstellen
                        </li>
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          Regelmäßige Audits und Assessments
                        </li>
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          SLA-Monitoring und -Reporting
                        </li>
                        <li class="flex items-start gap-2">
                          <ArrowRight class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></ArrowRight>
                          Third-Party Risk Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 border border-orange-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle class="h-5 w-5 text-orange-400" ></AlertTriangle>
                    Häufige Missverständnisse
                  </h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-red-400 mb-2">❌ Falsche Annahmen:</h4>
                      <ul class="space-y-1 text-gray-300 text-sm">
                        <li>• "Der CSP ist für alles verantwortlich"</li>
                        <li>• "Compliance wird automatisch übertragen"</li>
                        <li>• "Sicherheit ist nur CSP-Sache"</li>
                        <li>• "Geteilte Bereiche sind CSP-Verantwortung"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium text-green-400 mb-2">✅ Korrekte Sichtweise:</h4>
                      <ul class="space-y-1 text-gray-300 text-sm">
                        <li>• Sicherheit ist eine gemeinsame Verantwortung</li>
                        <li>• Kunden müssen Due Diligence ausüben</li>
                        <li>• Klare Abgrenzung ist essentiell</li>
                        <li>• Kontinuierliche Kommunikation erforderlich</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cloud Controls Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="cloud-controls"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-orange-600/20 rounded-lg">
                    <Settings class="h-6 w-6 text-orange-400" ></Settings>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Cloud-Controls</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    ISO 27017 definiert 37 zusätzliche Sicherheitskontrollen, die spezifisch für Cloud-Computing-Umgebungen entwickelt wurden. 
                    Diese ergänzen die bestehenden ISO 27002 Controls um cloud-spezifische Anforderungen.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="text-3xl font-bold text-orange-400 mb-2">37</div>
                      <div class="text-gray-300">Zusätzliche Controls</div>
                    </div>
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="text-3xl font-bold text-blue-400 mb-2">7</div>
                      <div class="text-gray-300">Neue Control-Familien</div>
                    </div>
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="text-3xl font-bold text-green-400 mb-2">14</div>
                      <div class="text-gray-300">Erweiterte Controls</div>
                    </div>
                  </div>
                </div>
                
                <div class="space-y-8">
                  {/* Control Family 1: Information Security Policies */}
                  <div class="bg-slate-700/30 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <FileText class="h-5 w-5 text-blue-400" ></FileText>
                      A.5 - Informationssicherheitsrichtlinien
                    </h3>
                    
                    <div>
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.5.1.1 - Richtlinien für Cloud-Services</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Spezielle Sicherheitsrichtlinien für die Nutzung von Cloud-Computing-Services.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-blue-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Cloud-spezifische Sicherheitsrichtlinie entwickeln</li>
                              <li>• Rollenbasierte Zuständigkeiten definieren</li>
                              <li>• Regelmäßige Überprüfung und Aktualisierung</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Dokumentierte Cloud-Sicherheitsrichtlinie</li>
                              <li>• Genehmigungsprotokoll der Geschäftsleitung</li>
                              <li>• Schulungsnachweise für Mitarbeiter</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.5.1.2 - Review Cloud-Service-Vereinbarungen</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Regelmäßige Überprüfung von Cloud-Service-Vereinbarungen auf Sicherheitsaspekte.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-blue-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• SLA-Review-Prozess etablieren</li>
                              <li>• Sicherheitsanforderungen validieren</li>
                              <li>• Vertragsänderungen bewerten</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Review-Protokolle</li>
                              <li>• Sicherheitsbewertungen</li>
                              <li>• Vertragsänderungsdokumentation</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Control Family 2: Access Control */}
                  <div class="bg-slate-700/30 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Lock class="h-5 w-5 text-purple-400" ></Lock>
                      A.9 - Zugangssteuerung
                    </h3>
                    
                    <div>
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.9.5.1 - Cloud-Service-Zugang</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Kontrolle und Überwachung des Zugangs zu Cloud-Services.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-purple-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Multi-Faktor-Authentifizierung implementieren</li>
                              <li>• Rollenbasierte Zugriffskontrollen einrichten</li>
                              <li>• Privileged Access Management (PAM)</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• IAM-Konfigurationsdokumentation</li>
                              <li>• MFA-Implementierungsnachweis</li>
                              <li>• Zugriffsprotokolle und Audits</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.9.5.2 - Administrative Zugriffsrechte</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Verwaltung administrativer Zugriffsrechte in Cloud-Umgebungen.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-purple-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Prinzip der minimalen Berechtigung</li>
                              <li>• Just-in-Time Access Controls</li>
                              <li>• Regelmäßige Berechtigunsreviews</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Berechtigungsmatrix</li>
                              <li>• Review-Berichte</li>
                              <li>• Admin-Aktivitätsprotokolle</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Control Family 3: Cryptography */}
                  <div class="bg-slate-700/30 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield class="h-5 w-5 text-green-400" ></Shield>
                      A.10 - Kryptographie
                    </h3>
                    
                    <div>
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.10.1.1 - Kryptographische Controls</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Cloud-spezifische kryptographische Kontrollen und Schlüsselverwaltung.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-green-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• End-to-End-Verschlüsselung implementieren</li>
                              <li>• Cloud HSM für Schlüsselverwaltung</li>
                              <li>• Bring Your Own Key (BYOK) Strategien</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Verschlüsselungsrichtlinie</li>
                              <li>• Schlüsselverwaltungsdokumentation</li>
                              <li>• Encryption-at-Rest/in-Transit Nachweis</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.10.1.2 - Schlüssel-Lebenszyklus</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Verwaltung des gesamten Lebenszyklus kryptographischer Schlüssel in der Cloud.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-green-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Automatisierte Schlüsselrotation</li>
                              <li>• Sichere Schlüsselverteilung</li>
                              <li>• Schlüssel-Backup und -Recovery</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Schlüssel-Lifecycle-Policy</li>
                              <li>• Rotationsprotokolle</li>
                              <li>• Backup-/Recovery-Tests</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Control Family 4: Operations Security */}
                  <div class="bg-slate-700/30 rounded-lg p-6">
                    <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Server class="h-5 w-5 text-red-400" ></Server>
                      A.12 - Betriebssicherheit
                    </h3>
                    
                    <div>
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.12.1.1 - Cloud-Service-Management</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Operative Verwaltung und Überwachung von Cloud-Services.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-red-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• 24/7 Monitoring implementieren</li>
                              <li>• Automatisierte Alerting-Systeme</li>
                              <li>• Performance-Monitoring</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Monitoring-Dashboard</li>
                              <li>• Alert-Konfigurationsdokumentation</li>
                              <li>• Performance-Reports</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div class="bg-slate-800/50 rounded-lg p-4">
                        <h4 class="font-medium text-white mb-2">A.12.6.1 - Virtualisierungssicherheit</h4>
                        <p class="text-gray-300 text-sm mb-3">
                          Sicherheitsmaßnahmen für virtualisierte Umgebungen und Container.
                        </p>
                        <div class="space-y-2">
                          <div>
                            <span class="text-xs text-red-400 font-medium">IMPLEMENTATION:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• VM-Isolierung sicherstellen</li>
                              <li>• Container-Security implementieren</li>
                              <li>• Hypervisor-Härtung</li>
                            </ul>
                          </div>
                          <div>
                            <span class="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul class="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Virtualisierungs-Sicherheitsrichtlinie</li>
                              <li>• Hypervisor-Konfiguration</li>
                              <li>• Container-Scanning-Berichte</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-slate-600">
                          <button
                           
                            class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Info class="h-5 w-5 text-blue-400" ></Info>
                    Vollständige Control-Liste
                  </h3>
                  <p class="text-gray-300 mb-4">
                    Die obigen Beispiele zeigen einen Auszug der wichtigsten ISO 27017 Controls. 
                    Der vollständige Standard umfasst 37 spezifische Cloud-Controls in 14 Kategorien.
                  </p>
                  <div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.5 - Policies</div>
                      <div>2 Controls</div>
                    </div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.6 - Organization</div>
                      <div>3 Controls</div>
                    </div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.8 - Asset Management</div>
                      <div>4 Controls</div>
                    </div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.9 - Access Control</div>
                      <div>6 Controls</div>
                    </div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.10 - Cryptography</div>
                      <div>3 Controls</div>
                    </div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.11 - Physical Security</div>
                      <div>2 Controls</div>
                    </div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.12 - Operations</div>
                      <div>8 Controls</div>
                    </div>
                    <div class="text-gray-300">
                      <div class="font-medium text-white mb-1">A.13-18 - Weitere</div>
                      <div>9 Controls</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Protection Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="data-protection"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-green-600/20 rounded-lg">
                    <Lock class="h-6 w-6 text-green-400" ></Lock>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Data Protection in der Cloud</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Datenschutz in Cloud-Umgebungen erfordert spezielle Schutzmaßnahmen, die über traditionelle 
                    Sicherheitskonzepte hinausgehen. ISO 27017 definiert umfassende Anforderungen für den Schutz 
                    von Daten während des gesamten Cloud-Lebenszyklus.
                  </p>
                  
                  <div>
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Database class="h-5 w-5 text-blue-400" ></Database>
                          Datenklassifizierung
                        </h3>
                        <div class="space-y-4">
                          <div class="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h4 class="font-medium text-red-400 mb-2">Streng Vertraulich</h4>
                            <ul class="text-gray-300 text-sm space-y-1">
                              <li class="flex items-start gap-2">
                                <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                Personenbezogene Daten besonderer Kategorien
                              </li>
                              <li class="flex items-start gap-2">
                                <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                Geschäftsgeheimnisse und IP
                              </li>
                              <li class="flex items-start gap-2">
                                <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                Regulierte Finanzdaten
                              </li>
                            </ul>
                          </div>
                          
                          <div class="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                            <h4 class="font-medium text-yellow-400 mb-2">Vertraulich</h4>
                            <ul class="text-gray-300 text-sm space-y-1">
                              <li class="flex items-start gap-2">
                                <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></AlertCircle>
                                Interne Unternehmensdaten
                              </li>
                              <li class="flex items-start gap-2">
                                <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></AlertCircle>
                                Kundendaten ohne PII
                              </li>
                              <li class="flex items-start gap-2">
                                <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></AlertCircle>
                                Projektdokumentation
                              </li>
                            </ul>
                          </div>
                          
                          <div class="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h4 class="font-medium text-green-400 mb-2">Öffentlich</h4>
                            <ul class="text-gray-300 text-sm space-y-1">
                              <li class="flex items-start gap-2">
                                <Info class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></Info>
                                Marketing-Materialien
                              </li>
                              <li class="flex items-start gap-2">
                                <Info class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></Info>
                                Öffentliche Dokumentation
                              </li>
                              <li class="flex items-start gap-2">
                                <Info class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></Info>
                                Anonymisierte Statistiken
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Shield class="h-5 w-5 text-purple-400" ></Shield>
                          Schutzmaßnahmen nach Klassifizierung
                        </h3>
                        <div class="space-y-4">
                          <div>
                            <h4 class="font-medium text-red-400 mb-2">Höchste Schutzklasse:</h4>
                            <div class="space-y-2">
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">End-to-End-Verschlüsselung</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Hardware Security Modules</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Multi-Faktor-Authentifizierung</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Zero-Trust-Zugriff</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 class="font-medium text-yellow-400 mb-2">Mittlere Schutzklasse:</h4>
                            <div class="space-y-2">
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Standard-Verschlüsselung</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Rollenbasierte Zugriffskontrolle</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Audit-Logging</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 class="font-medium text-green-400 mb-2">Basis-Schutzklasse:</h4>
                            <div class="space-y-2">
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Basis-Authentifizierung</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400" ></CheckCircle>
                                <span class="text-gray-300 text-sm">Standard-Backups</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Data Protection Lifecycle</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload class="h-6 w-6 text-blue-400" ></Upload>
                      </div>
                      <h4 class="font-medium text-white mb-2">Erstellung/Import</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Datenklassifizierung</li>
                        <li>• Verschlüsselung at Rest</li>
                        <li>• Metadaten-Tagging</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database class="h-6 w-6 text-green-400" ></Database>
                      </div>
                      <h4 class="font-medium text-white mb-2">Speicherung</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Geo-Redundanz</li>
                        <li>• Backup-Strategien</li>
                        <li>• Data Loss Prevention</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Share2 class="h-6 w-6 text-purple-400" ></Share2>
                      </div>
                      <h4 class="font-medium text-white mb-2">Übertragung</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Verschlüsselung in Transit</li>
                        <li>• VPN/Private Links</li>
                        <li>• Integritätsprüfung</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trash2 class="h-6 w-6 text-red-400" ></Trash2>
                      </div>
                      <h4 class="font-medium text-white mb-2">Löschung</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Sichere Löschung</li>
                        <li>• Kryptographische Löschung</li>
                        <li>• Retention Policies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Spezielle Datenschutzanforderungen</h3>
                  <div class="space-y-6">
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Scale class="h-5 w-5 text-blue-400" ></Scale>
                        DSGVO-Compliance in der Cloud
                      </h4>
                      <div>
                        <div>
                          <h5 class="font-medium text-blue-400 mb-3">Rechtmäßigkeit der Verarbeitung:</h5>
                          <ul class="space-y-2 text-gray-300 text-sm">
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Einwilligung dokumentieren
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Vertragserfüllung nachweisen
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Berechtigte Interessen bewerten
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Gesetzliche Verpflichtungen beachten
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 class="font-medium text-green-400 mb-3">Betroffenenrechte gewährleisten:</h5>
                          <ul class="space-y-2 text-gray-300 text-sm">
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Auskunftsrecht (Art. 15)
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Berichtigungsrecht (Art. 16)
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Löschungsrecht (Art. 17)
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              Datenübertragbarkeit (Art. 20)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Globe class="h-5 w-5 text-purple-400" ></Globe>
                        Internationale Datentransfers
                      </h4>
                      <div>
                        <div>
                          <h5 class="font-medium text-blue-400 mb-3">Angemessenheitsbeschlüsse:</h5>
                          <ul class="space-y-1 text-gray-300 text-sm">
                            <li>• EU-US Data Privacy Framework</li>
                            <li>• UK Extension to Adequacy</li>
                            <li>• Schweiz</li>
                            <li>• Kanada (kommerzielle Org.)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 class="font-medium text-green-400 mb-3">Standardvertragsklauseln:</h5>
                          <ul class="space-y-1 text-gray-300 text-sm">
                            <li>• EU SCCs 2021/914</li>
                            <li>• UK International Data Transfer Agreement</li>
                            <li>• Transfer Impact Assessment</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 class="font-medium text-purple-400 mb-3">Zusätzliche Schutzmaßnahmen:</h5>
                          <ul class="space-y-1 text-gray-300 text-sm">
                            <li>• Ende-zu-Ende-Verschlüsselung</li>
                            <li>• Pseudonymisierung</li>
                            <li>• Data Residency Controls</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb class="h-5 w-5 text-yellow-400" ></Lightbulb>
                    Best Practices für Cloud Data Protection
                  </h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-green-400 mb-3">Technische Maßnahmen:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Zero-Knowledge-Architektur implementieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Client-seitige Verschlüsselung nutzen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Data Loss Prevention (DLP) implementieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Continuous Data Discovery betreiben
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 class="font-medium text-blue-400 mb-3">Organisatorische Maßnahmen:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Data Governance Framework etablieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Privacy by Design umsetzen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Regelmäßige Privacy Impact Assessments
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Vendor Risk Management betreiben
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Incident Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="incident-management"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-red-600/20 rounded-lg">
                    <AlertTriangle class="h-6 w-6 text-red-400" ></AlertTriangle>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Incident Management in der Cloud</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Incident-Management erfordert spezielle Verfahren und Koordination zwischen Cloud Service Provider 
                    und Kunde. ISO 27017 definiert klare Rollen, Verantwortlichkeiten und Prozesse für die effektive 
                    Behandlung von Sicherheitsvorfällen in Cloud-Umgebungen.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <AlertCircle class="h-5 w-5 text-orange-400" ></AlertCircle>
                        Incident-Kategorien
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 class="font-medium text-red-400 mb-2 flex items-center gap-2">
                            <AlertTriangle class="h-4 w-4" ></AlertTriangle>
                            Kritische Sicherheitsvorfälle
                          </h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Datenverletzungen mit PII-Exposition</li>
                            <li>• Kompromittierung von Produktionssystemen</li>
                            <li>• Ransomware-Angriffe</li>
                            <li>• DDoS-Angriffe auf kritische Services</li>
                            <li>• Unbefugter Zugriff auf Kundendaten</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 class="font-medium text-yellow-400 mb-2 flex items-center gap-2">
                            <AlertCircle class="h-4 w-4" ></AlertCircle>
                            Mittlere Sicherheitsvorfälle
                          </h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Malware-Infektionen ohne Datenexposition</li>
                            <li>• Fehlkonfigurationen mit Sicherheitsrisiko</li>
                            <li>• Verdächtige Netzwerkaktivitäten</li>
                            <li>• Accounts mit kompromittierten Credentials</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 class="font-medium text-blue-400 mb-2 flex items-center gap-2">
                            <Info class="h-4 w-4" ></Info>
                            Niedrige Sicherheitsvorfälle
                          </h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Policy-Verletzungen ohne Sicherheitsimpact</li>
                            <li>• Fehlgeschlagene Login-Versuche</li>
                            <li>• Spam oder Phishing-Versuche</li>
                            <li>• Nicht-kritische Compliance-Abweichungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Clock class="h-5 w-5 text-green-400" ></Clock>
                        Response Time Objectives
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 class="font-medium text-red-400 mb-2">Kritisch (P1)</h4>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between text-gray-300">
                              <span>Erstreaktion:</span>
                              <span class="text-red-400 font-medium">15 Minuten</span>
                            </div>
                            <div class="flex justify-between text-gray-300">
                              <span>Status-Update:</span>
                              <span class="text-red-400 font-medium">1 Stunde</span>
                            </div>
                            <div class="flex justify-between text-gray-300">
                              <span>Eskalation:</span>
                              <span class="text-red-400 font-medium">30 Minuten</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 class="font-medium text-yellow-400 mb-2">Hoch (P2)</h4>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between text-gray-300">
                              <span>Erstreaktion:</span>
                              <span class="text-yellow-400 font-medium">1 Stunde</span>
                            </div>
                            <div class="flex justify-between text-gray-300">
                              <span>Status-Update:</span>
                              <span class="text-yellow-400 font-medium">4 Stunden</span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 class="font-medium text-blue-400 mb-2">Mittel/Niedrig (P3/P4)</h4>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between text-gray-300">
                              <span>Erstreaktion:</span>
                              <span class="text-blue-400 font-medium">8 Stunden</span>
                            </div>
                            <div class="flex justify-between text-gray-300">
                              <span>Status-Update:</span>
                              <span class="text-blue-400 font-medium">24 Stunden</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Incident Response Lifecycle</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search class="h-6 w-6 text-blue-400" ></Search>
                      </div>
                      <h4 class="font-medium text-white mb-2">Detection</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• SIEM Alerts</li>
                        <li>• User Reports</li>
                        <li>• Automated Monitoring</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Eye class="h-6 w-6 text-yellow-400" ></Eye>
                      </div>
                      <h4 class="font-medium text-white mb-2">Analysis</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Impact Assessment</li>
                        <li>• Root Cause Analysis</li>
                        <li>• Evidence Collection</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield class="h-6 w-6 text-red-400" ></Shield>
                      </div>
                      <h4 class="font-medium text-white mb-2">Containment</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Isolate Systems</li>
                        <li>• Prevent Spread</li>
                        <li>• Preserve Evidence</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <RotateCcw class="h-6 w-6 text-green-400" ></RotateCcw>
                      </div>
                      <h4 class="font-medium text-white mb-2">Recovery</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• System Restoration</li>
                        <li>• Security Hardening</li>
                        <li>• Service Validation</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText class="h-6 w-6 text-purple-400" ></FileText>
                      </div>
                      <h4 class="font-medium text-white mb-2">Lessons Learned</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Post-Incident Review</li>
                        <li>• Process Improvement</li>
                        <li>• Documentation Update</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Rollen und Verantwortlichkeiten</h3>
                  <div>
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Cloud class="h-5 w-5 text-blue-400" ></Cloud>
                          Cloud Service Provider Verantwortlichkeiten
                        </h4>
                        <div class="space-y-4">
                          <div>
                            <h5 class="font-medium text-blue-400 mb-2">Infrastruktur-Incidents:</h5>
                            <ul class="space-y-1 text-gray-300 text-sm">
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                Physische Sicherheitsvorfälle
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                Netzwerk-Infrastruktur-Angriffe
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                Hypervisor-Kompromittierungen
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                Platform-Service-Ausfälle
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 class="font-medium text-green-400 mb-2">Kommunikationspflichten:</h5>
                            <ul class="space-y-1 text-gray-300 text-sm">
                              <li class="flex items-start gap-2">
                                <Bell class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Bell>
                                Sofortige Benachrichtigung bei kritischen Incidents
                              </li>
                              <li class="flex items-start gap-2">
                                <Bell class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Bell>
                                Regelmäßige Status-Updates
                              </li>
                              <li class="flex items-start gap-2">
                                <Bell class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Bell>
                                Incident-Abschlussbericht
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Users class="h-5 w-5 text-green-400" ></Users>
                          Customer Verantwortlichkeiten
                        </h4>
                        <div class="space-y-4">
                          <div>
                            <h5 class="font-medium text-green-400 mb-2">Anwendungs-Incidents:</h5>
                            <ul class="space-y-1 text-gray-300 text-sm">
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                Applikationssicherheitsvorfälle
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                Datenbank-Kompromittierungen
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                IAM-Policy-Verletzungen
                              </li>
                              <li class="flex items-start gap-2">
                                <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                Data Loss Prevention
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 class="font-medium text-blue-400 mb-2">Kooperationspflichten:</h5>
                            <ul class="space-y-1 text-gray-300 text-sm">
                              <li class="flex items-start gap-2">
                                <Share2 class="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" ></Share2>
                                Logs und Forensic Data bereitstellen
                              </li>
                              <li class="flex items-start gap-2">
                                <Share2 class="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" ></Share2>
                                Koordinierte Response-Maßnahmen
                              </li>
                              <li class="flex items-start gap-2">
                                <Share2 class="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" ></Share2>
                                Joint Post-Incident Analysis
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Cloud-spezifische Herausforderungen</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <AlertTriangle class="h-5 w-5 text-red-400" ></AlertTriangle>
                        Technische Herausforderungen
                      </h4>
                      <ul class="space-y-3 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                          <div>
                            <span class="font-medium">Eingeschränkte Forensik:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              Begrenzter Zugriff auf Low-Level-Systemlogs und Netzwerk-Traffic
                            </span>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                          <div>
                            <span class="font-medium">Multi-Tenancy-Komplexität:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              Isolierung von Incidents zwischen verschiedenen Mandanten
                            </span>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                          <div>
                            <span class="font-medium">Ephemere Infrastruktur:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              Container und VMs können automatisch gelöscht werden
                            </span>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <X class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></X>
                          <div>
                            <span class="font-medium">Geografische Verteilung:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              Koordination über mehrere Regionen und Rechenzentren
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Scale class="h-5 w-5 text-blue-400" ></Scale>
                        Rechtliche Herausforderungen
                      </h4>
                      <ul class="space-y-3 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></AlertCircle>
                          <div>
                            <span class="font-medium">Meldepflichten:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              DSGVO Art. 33 - 72h-Frist für Aufsichtsbehörden
                            </span>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></AlertCircle>
                          <div>
                            <span class="font-medium">Jurisdiktionale Konflikte:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              Unterschiedliche Gesetze in verschiedenen Ländern
                            </span>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></AlertCircle>
                          <div>
                            <span class="font-medium">Vertragliche Klarheit:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              Eindeutige SLA-Definition für Incident Response
                            </span>
                          </div>
                        </li>
                        <li class="flex items-start gap-2">
                          <AlertCircle class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></AlertCircle>
                          <div>
                            <span class="font-medium">Dokumentationspflichten:</span>
                            <span class="block text-xs text-gray-400 mt-1">
                              Auditierbare Incident-Response-Dokumentation
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg border border-red-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb class="h-5 w-5 text-yellow-400" ></Lightbulb>
                    Best Practices für Cloud Incident Management
                  </h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-red-400 mb-3">Vorbereitung & Prevention:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Automatisierte Threat Detection implementieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Incident Response Playbooks entwickeln
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Regelmäßige Tabletop-Exercises durchführen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Forensic Readiness sicherstellen
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 class="font-medium text-orange-400 mb-3">Koordination & Kommunikation:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Joint Incident Response Team etablieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Gemeinsame Kommunikationskanäle einrichten
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Eskalationsprozeduren definieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Post-Incident Review Process etablieren
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Assessment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="risk-assessment"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-yellow-600/20 rounded-lg">
                    <BarChart3 class="h-6 w-6 text-yellow-400" ></BarChart3>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Cloud Risk Assessment</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Risikobewertung erfordert spezielle Methoden zur Identifikation, Analyse und Bewertung 
                    von Risiken in virtualisierten und geteilten Umgebungen. ISO 27017 definiert systematische 
                    Ansätze für umfassende Cloud-Risikoanalysen.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Target class="h-5 w-5 text-red-400" ></Target>
                        Cloud-spezifische Risikokategorien
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 class="font-medium text-red-400 mb-2">Technische Risiken</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Multi-Tenancy-Isolation-Failures</li>
                            <li>• Hypervisor-Vulnerabilities</li>
                            <li>• API-Security-Schwachstellen</li>
                            <li>• Container-Escape-Szenarien</li>
                            <li>• Shared-Infrastructure-Angriffe</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 class="font-medium text-yellow-400 mb-2">Compliance-Risiken</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Jurisdiktionale Datenschutzverletzungen</li>
                            <li>• Audit-Trail-Inkonsistenzen</li>
                            <li>• Regulatory-Reporting-Gaps</li>
                            <li>• Certification-Scope-Mismatches</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 class="font-medium text-blue-400 mb-2">Betriebsrisiken</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Service-Provider-Lock-in</li>
                            <li>• Data-Portability-Limitations</li>
                            <li>• SLA-Performance-Degradation</li>
                            <li>• Disaster-Recovery-Failures</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <PieChart class="h-5 w-5 text-green-400" ></PieChart>
                        Risikobewertungsmatrix
                      </h3>
                      <div class="space-y-4">
                        <div class="overflow-hidden rounded-lg border border-slate-600">
                          <table class="w-full">
                            <thead class="bg-slate-700/50">
                              <tr>
                                <th class="p-3 text-left text-white text-sm font-medium">Wahrscheinlichkeit</th>
                                <th class="p-3 text-center text-white text-sm font-medium">Niedrig</th>
                                <th class="p-3 text-center text-white text-sm font-medium">Mittel</th>
                                <th class="p-3 text-center text-white text-sm font-medium">Hoch</th>
                              </tr>
                            </thead>
                            <tbody class="bg-slate-800/30">
                              <tr>
                                <td class="p-3 text-gray-300 text-sm font-medium">Hoch</td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                </td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-red-500/20 text-red-300">Hoch</Badge>
                                </td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-red-500/30 text-red-200">Kritisch</Badge>
                                </td>
                              </tr>
                              <tr>
                                <td class="p-3 text-gray-300 text-sm font-medium">Mittel</td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-green-500/20 text-green-300">Niedrig</Badge>
                                </td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                </td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-red-500/20 text-red-300">Hoch</Badge>
                                </td>
                              </tr>
                              <tr>
                                <td class="p-3 text-gray-300 text-sm font-medium">Niedrig</td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-green-500/20 text-green-300">Niedrig</Badge>
                                </td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-green-500/20 text-green-300">Niedrig</Badge>
                                </td>
                                <td class="p-3 text-center">
                                  <Badge class="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <h5 class="font-medium text-green-400 mb-2">Akzeptabel (Niedrig):</h5>
                            <p class="text-gray-300 text-xs">Standardkontrollmaßnahmen ausreichend</p>
                          </div>
                          <div>
                            <h5 class="font-medium text-yellow-400 mb-2">Überwacht (Mittel):</h5>
                            <p class="text-gray-300 text-xs">Zusätzliche Schutzmaßnahmen erforderlich</p>
                          </div>
                          <div>
                            <h5 class="font-medium text-red-400 mb-2">Kritisch (Hoch):</h5>
                            <p class="text-gray-300 text-xs">Sofortige Risikominderung notwendig</p>
                          </div>
                          <div>
                            <h5 class="font-medium text-red-300 mb-2">Inakzeptabel:</h5>
                            <p class="text-gray-300 text-xs">Service-Nutzung überdenken</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Risk Assessment Methodology</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search class="h-6 w-6 text-blue-400" ></Search>
                      </div>
                      <h4 class="font-medium text-white mb-2">Identifikation</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Asset Discovery</li>
                        <li>• Threat Modeling</li>
                        <li>• Vulnerability Scanning</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 class="h-6 w-6 text-yellow-400" ></BarChart3>
                      </div>
                      <h4 class="font-medium text-white mb-2">Analyse</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Impact Assessment</li>
                        <li>• Likelihood Evaluation</li>
                        <li>• Risk Scoring</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scale class="h-6 w-6 text-purple-400" ></Scale>
                      </div>
                      <h4 class="font-medium text-white mb-2">Bewertung</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Risk Prioritization</li>
                        <li>• Tolerance Mapping</li>
                        <li>• Treatment Planning</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield class="h-6 w-6 text-green-400" ></Shield>
                      </div>
                      <h4 class="font-medium text-white mb-2">Treatment</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Control Implementation</li>
                        <li>• Risk Transfer</li>
                        <li>• Acceptance Decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Compliance Monitoring Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="compliance-monitoring"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-purple-600/20 rounded-lg">
                    <Activity class="h-6 w-6 text-purple-400" ></Activity>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Compliance Monitoring</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Kontinuierliches Compliance-Monitoring in Cloud-Umgebungen erfordert automatisierte 
                    Überwachungssysteme und regelmäßige Bewertungen. ISO 27017 definiert Frameworks für 
                    die laufende Überwachung der Einhaltung von Sicherheitsstandards.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Monitor class="h-5 w-5 text-blue-400" ></Monitor>
                        Automatisierte Überwachung
                      </h3>
                      <div class="space-y-3">
                        <div class="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 class="font-medium text-blue-400 mb-1">Configuration Drift Detection</h4>
                          <p class="text-gray-300 text-xs">Erkennung von Abweichungen von Security Baselines</p>
                        </div>
                        <div class="p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <h4 class="font-medium text-green-400 mb-1">Policy Compliance Scanning</h4>
                          <p class="text-gray-300 text-xs">Kontinuierliche Überprüfung von Compliance-Regeln</p>
                        </div>
                        <div class="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                          <h4 class="font-medium text-purple-400 mb-1">Access Pattern Analysis</h4>
                          <p class="text-gray-300 text-xs">Überwachung von Zugriffmustern und Anomalien</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <FileText class="h-5 w-5 text-green-400" ></FileText>
                        Audit und Reporting
                      </h3>
                      <div class="space-y-3">
                        <div class="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded">
                          <h4 class="font-medium text-yellow-400 mb-1">Compliance Dashboards</h4>
                          <p class="text-gray-300 text-xs">Real-time Compliance-Status-Visualisierung</p>
                        </div>
                        <div class="p-3 bg-red-900/20 border border-red-700/50 rounded">
                          <h4 class="font-medium text-red-400 mb-1">Exception Reporting</h4>
                          <p class="text-gray-300 text-xs">Automatische Benachrichtigung bei Verstößen</p>
                        </div>
                        <div class="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 class="font-medium text-blue-400 mb-1">Regulatory Reports</h4>
                          <p class="text-gray-300 text-xs">Automatisierte Compliance-Berichte für Auditoren</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <TrendingUp class="h-5 w-5 text-purple-400" ></TrendingUp>
                        KPIs und Metriken
                      </h3>
                      <div class="space-y-3">
                        <div class="text-center p-3 bg-slate-600/30 rounded">
                          <div class="text-2xl font-bold text-green-400">98.7%</div>
                          <div class="text-xs text-gray-300">Control Effectiveness</div>
                        </div>
                        <div class="text-center p-3 bg-slate-600/30 rounded">
                          <div class="text-2xl font-bold text-yellow-400">4.2h</div>
                          <div class="text-xs text-gray-300">MTTR Compliance Issues</div>
                        </div>
                        <div class="text-center p-3 bg-slate-600/30 rounded">
                          <div class="text-2xl font-bold text-blue-400">15</div>
                          <div class="text-xs text-gray-300">Open Findings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Monitoring Framework</h3>
                  <div>
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4">Technische Controls</h4>
                        <div class="space-y-3">
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Encryption at Rest</span>
                            <Badge class="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Network Segmentation</span>
                            <Badge class="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Multi-Factor Auth</span>
                            <Badge class="bg-yellow-500/20 text-yellow-300">⚠ Partial</Badge>
                          </div>
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Logging & Monitoring</span>
                            <Badge class="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4">Organisational Controls</h4>
                        <div class="space-y-3">
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Security Policies</span>
                            <Badge class="bg-green-500/20 text-green-300">✓ Current</Badge>
                          </div>
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Staff Training</span>
                            <Badge class="bg-green-500/20 text-green-300">✓ Complete</Badge>
                          </div>
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Incident Response</span>
                            <Badge class="bg-yellow-500/20 text-yellow-300">⚠ Review Due</Badge>
                          </div>
                          <div class="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span class="text-gray-300 text-sm">Vendor Management</span>
                            <Badge class="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vendor Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="vendor-management"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-blue-600/20 rounded-lg">
                    <Building2 class="h-6 w-6 text-blue-400" ></Building2>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Cloud Vendor Management</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Effektives Cloud-Vendor-Management ist entscheidend für die Aufrechterhaltung der Sicherheit 
                    und Compliance. ISO 27017 definiert umfassende Anforderungen für die Bewertung, Auswahl 
                    und laufende Überwachung von Cloud Service Providern.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Search class="h-5 w-5 text-blue-400" ></Search>
                        Vendor Assessment Kriterien
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 class="font-medium text-blue-400 mb-2">Sicherheitszertifizierungen</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• ISO 27001/27017/27018 Zertifizierung</li>
                            <li>• SOC 2 Type II Reports</li>
                            <li>• Cloud Security Alliance (CSA) STAR</li>
                            <li>• FedRAMP Authorization (für US-Dienste)</li>
                            <li>• Branchenspezifische Zertifizierungen</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 class="font-medium text-green-400 mb-2">Datenschutz & Compliance</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• DSGVO-Compliance und Data Processing Agreements</li>
                            <li>• Data Residency und Transfer Mechanisms</li>
                            <li>• Privacy Impact Assessments</li>
                            <li>• Right to Audit Clauses</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 class="font-medium text-purple-400 mb-2">Technische Sicherheit</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Encryption Standards (at rest/in transit)</li>
                            <li>• Identity & Access Management</li>
                            <li>• Network Security Architecture</li>
                            <li>• Vulnerability Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Scale class="h-5 w-5 text-purple-400" ></Scale>
                        Vendor Risk Scoring
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <div class="flex items-center justify-between mb-2">
                            <h4 class="font-medium text-green-400">Low Risk (1-3)</h4>
                            <Badge class="bg-green-500/20 text-green-300">Approved</Badge>
                          </div>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Vollständige Zertifizierungen</li>
                            <li>• Transparente Security Controls</li>
                            <li>• Etablierte Marktposition</li>
                            <li>• Umfassende SLAs</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <div class="flex items-center justify-between mb-2">
                            <h4 class="font-medium text-yellow-400">Medium Risk (4-6)</h4>
                            <Badge class="bg-yellow-500/20 text-yellow-300">Conditional</Badge>
                          </div>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Teilweise Zertifizierungen</li>
                            <li>• Zusätzliche Controls erforderlich</li>
                            <li>• Enhanced Monitoring notwendig</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <div class="flex items-center justify-between mb-2">
                            <h4 class="font-medium text-red-400">High Risk (7-10)</h4>
                            <Badge class="bg-red-500/20 text-red-300">Restricted</Badge>
                          </div>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Fehlende Zertifizierungen</li>
                            <li>• Unklare Security Practices</li>
                            <li>• Nur für nicht-kritische Workloads</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Vendor Lifecycle Management</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search class="h-6 w-6 text-blue-400" ></Search>
                      </div>
                      <h4 class="font-medium text-white mb-2">Due Diligence</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Security Assessment</li>
                        <li>• Financial Stability</li>
                        <li>• Reference Checks</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText class="h-6 w-6 text-green-400" ></FileText>
                      </div>
                      <h4 class="font-medium text-white mb-2">Contracting</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• SLA Definition</li>
                        <li>• Data Processing Agreements</li>
                        <li>• Right to Audit</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Activity class="h-6 w-6 text-purple-400" ></Activity>
                      </div>
                      <h4 class="font-medium text-white mb-2">Monitoring</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Performance Tracking</li>
                        <li>• Security Incidents</li>
                        <li>• Compliance Status</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 class="h-6 w-6 text-yellow-400" ></BarChart3>
                      </div>
                      <h4 class="font-medium text-white mb-2">Review</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Annual Assessments</li>
                        <li>• Risk Re-evaluation</li>
                        <li>• Contract Renewals</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <X class="h-6 w-6 text-red-400" ></X>
                      </div>
                      <h4 class="font-medium text-white mb-2">Termination</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Data Retrieval</li>
                        <li>• Secure Deletion</li>
                        <li>• Knowledge Transfer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb class="h-5 w-5 text-yellow-400" ></Lightbulb>
                    Best Practices für Cloud Vendor Management
                  </h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-blue-400 mb-3">Strategische Aspekte:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Multi-Vendor-Strategie zur Risikominimierung
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Regelmäßige Vendor Risk Assessments
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Exit-Strategien und Data Portability
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Continuous Security Monitoring
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 class="font-medium text-purple-400 mb-3">Operative Umsetzung:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Automated Compliance Monitoring
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Vendor Performance Dashboards
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Incident Response Coordination
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Vendor Relationship Management
                        </li>
                      </ul>
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
                  <div class="p-2 bg-green-600/20 rounded-lg">
                    <RotateCcw class="h-6 w-6 text-green-400" ></RotateCcw>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Business Continuity in der Cloud</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Business-Continuity erfordert spezielle Strategien für Disaster Recovery, Backup-Management 
                    und Service-Resilienz. ISO 27017 definiert umfassende Anforderungen für die Aufrechterhaltung 
                    kritischer Geschäftsprozesse in Cloud-Umgebungen.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Clock class="h-5 w-5 text-blue-400" ></Clock>
                        Recovery Time Objectives (RTO)
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <div class="flex items-center justify-between mb-2">
                            <h4 class="font-medium text-red-400">Kritische Services</h4>
                            <Badge class="bg-red-500/20 text-red-300">Tier 1</Badge>
                          </div>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between text-gray-300">
                              <span>RTO:</span>
                              <span class="text-red-400 font-medium">&lt; 1 Stunde</span>
                            </div>
                            <div class="flex justify-between text-gray-300">
                              <span>RPO:</span>
                              <span class="text-red-400 font-medium">&lt; 15 Minuten</span>
                            </div>
                            <p class="text-gray-400 text-xs mt-2">
                              Mission-kritische Systeme, die sofortige Wiederherstellung erfordern
                            </p>
                          </div>
                        </div>
                        
                        <div class="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <div class="flex items-center justify-between mb-2">
                            <h4 class="font-medium text-yellow-400">Wichtige Services</h4>
                            <Badge class="bg-yellow-500/20 text-yellow-300">Tier 2</Badge>
                          </div>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between text-gray-300">
                              <span>RTO:</span>
                              <span class="text-yellow-400 font-medium">&lt; 4 Stunden</span>
                            </div>
                            <div class="flex justify-between text-gray-300">
                              <span>RPO:</span>
                              <span class="text-yellow-400 font-medium">&lt; 1 Stunde</span>
                            </div>
                            <p class="text-gray-400 text-xs mt-2">
                              Geschäftskritische Systeme mit moderater Toleranz
                            </p>
                          </div>
                        </div>
                        
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <div class="flex items-center justify-between mb-2">
                            <h4 class="font-medium text-blue-400">Standard Services</h4>
                            <Badge class="bg-blue-500/20 text-blue-300">Tier 3</Badge>
                          </div>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between text-gray-300">
                              <span>RTO:</span>
                              <span class="text-blue-400 font-medium">&lt; 24 Stunden</span>
                            </div>
                            <div class="flex justify-between text-gray-300">
                              <span>RPO:</span>
                              <span class="text-blue-400 font-medium">&lt; 8 Stunden</span>
                            </div>
                            <p class="text-gray-400 text-xs mt-2">
                              Unterstützende Systeme mit höherer Toleranz
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Database class="h-5 w-5 text-green-400" ></Database>
                        Cloud-Backup-Strategien
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 class="font-medium text-green-400 mb-2">3-2-1 Backup Rule</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              3 Kopien der Daten (Original + 2 Backups)
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              2 verschiedene Speichermedien
                            </li>
                            <li class="flex items-start gap-2">
                              <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                              1 Offsite/Cloud-Backup
                            </li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 class="font-medium text-blue-400 mb-2">Multi-Region Replication</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Cross-Region Disaster Recovery</li>
                            <li>• Automated Failover Mechanisms</li>
                            <li>• Data Consistency Validation</li>
                            <li>• Network Latency Optimization</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 class="font-medium text-purple-400 mb-2">Immutable Backups</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Ransomware-Protection</li>
                            <li>• Legal Hold Capabilities</li>
                            <li>• Compliance Retention Periods</li>
                            <li>• Write-Once-Read-Many (WORM)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Disaster Recovery Planning</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle class="h-6 w-6 text-red-400" ></AlertTriangle>
                      </div>
                      <h4 class="font-medium text-white mb-2">Risk Assessment</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Threat Identification</li>
                        <li>• Impact Analysis</li>
                        <li>• Vulnerability Mapping</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText class="h-6 w-6 text-blue-400" ></FileText>
                      </div>
                      <h4 class="font-medium text-white mb-2">DR Strategy</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Recovery Procedures</li>
                        <li>• Failover Automation</li>
                        <li>• Resource Allocation</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play class="h-6 w-6 text-green-400" ></Play>
                      </div>
                      <h4 class="font-medium text-white mb-2">Testing</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• DR Simulations</li>
                        <li>• Failover Tests</li>
                        <li>• Recovery Validation</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <RotateCcw class="h-6 w-6 text-purple-400" ></RotateCcw>
                      </div>
                      <h4 class="font-medium text-white mb-2">Improvement</h4>
                      <ul class="text-gray-300 text-sm space-y-1">
                        <li>• Lessons Learned</li>
                        <li>• Process Updates</li>
                        <li>• Continuous Enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Cloud-spezifische BC/DR Herausforderungen</h3>
                  <div>
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <AlertTriangle class="h-5 w-5 text-red-400" ></AlertTriangle>
                          Technische Herausforderungen
                        </h4>
                        <div class="space-y-3">
                          <div class="p-3 bg-red-900/20 border border-red-700/50 rounded">
                            <h5 class="font-medium text-red-400 mb-1">Service Dependencies</h5>
                            <p class="text-gray-300 text-xs">
                              Komplexe Abhängigkeiten zwischen Cloud-Services erschweren koordinierte Recovery
                            </p>
                          </div>
                          <div class="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded">
                            <h5 class="font-medium text-yellow-400 mb-1">Data Consistency</h5>
                            <p class="text-gray-300 text-xs">
                              Gewährleistung der Datenkonsistenz bei Multi-Region-Deployments
                            </p>
                          </div>
                          <div class="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                            <h5 class="font-medium text-blue-400 mb-1">Network Connectivity</h5>
                            <p class="text-gray-300 text-xs">
                              Abhängigkeit von Internet-Konnektivität für Cloud-Zugriff
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Scale class="h-5 w-5 text-blue-400" ></Scale>
                          Organisatorische Herausforderungen
                        </h4>
                        <div class="space-y-3">
                          <div class="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                            <h5 class="font-medium text-purple-400 mb-1">Shared Responsibility</h5>
                            <p class="text-gray-300 text-xs">
                              Klare Abgrenzung der BC/DR-Verantwortlichkeiten zwischen CSP und Kunde
                            </p>
                          </div>
                          <div class="p-3 bg-green-900/20 border border-green-700/50 rounded">
                            <h5 class="font-medium text-green-400 mb-1">SLA Coordination</h5>
                            <p class="text-gray-300 text-xs">
                              Abstimmung eigener RTO/RPO mit CSP-Service-Level-Agreements
                            </p>
                          </div>
                          <div class="p-3 bg-orange-900/20 border border-orange-700/50 rounded">
                            <h5 class="font-medium text-orange-400 mb-1">Testing Limitations</h5>
                            <p class="text-gray-300 text-xs">
                              Eingeschränkte Möglichkeiten für realistische DR-Tests in Cloud-Umgebungen
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Training & Awareness Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="training-awareness"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-orange-600/20 rounded-lg">
                    <GraduationCap class="h-6 w-6 text-orange-400" ></GraduationCap>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Cloud Security Training & Awareness</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Effektive Cloud-Sicherheit erfordert umfassende Schulungs- und Awareness-Programme für alle 
                    Stakeholder. ISO 27017 definiert strukturierte Ansätze für die Entwicklung von Cloud-Security-Kompetenzen 
                    und die Förderung des Sicherheitsbewusstseins.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Users class="h-5 w-5 text-blue-400" ></Users>
                        Zielgruppen-spezifische Programme
                      </h3>
                      <div class="space-y-3">
                        <div class="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 class="font-medium text-blue-400 mb-1">IT-Administratoren</h4>
                          <ul class="text-gray-300 text-xs space-y-1">
                            <li>• Cloud-Architektur-Sicherheit</li>
                            <li>• Identity & Access Management</li>
                            <li>• Security Monitoring Tools</li>
                            <li>• Incident Response Procedures</li>
                          </ul>
                        </div>
                        
                        <div class="p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <h4 class="font-medium text-green-400 mb-1">Entwickler</h4>
                          <ul class="text-gray-300 text-xs space-y-1">
                            <li>• Secure Coding Practices</li>
                            <li>• API Security</li>
                            <li>• Container Security</li>
                            <li>• DevSecOps Integration</li>
                          </ul>
                        </div>
                        
                        <div class="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                          <h4 class="font-medium text-purple-400 mb-1">Management</h4>
                          <ul class="text-gray-300 text-xs space-y-1">
                            <li>• Cloud Risk Management</li>
                            <li>• Compliance Requirements</li>
                            <li>• Vendor Management</li>
                            <li>• Business Continuity</li>
                          </ul>
                        </div>
                        
                        <div class="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded">
                          <h4 class="font-medium text-yellow-400 mb-1">End Users</h4>
                          <ul class="text-gray-300 text-xs space-y-1">
                            <li>• Cloud Service Usage</li>
                            <li>• Data Classification</li>
                            <li>• Phishing Awareness</li>
                            <li>• Incident Reporting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <BookOpen class="h-5 w-5 text-green-400" ></BookOpen>
                        Trainingsmodule
                      </h3>
                      <div class="space-y-3">
                        <div class="p-3 bg-slate-600/30 rounded">
                          <div class="flex items-center justify-between mb-1">
                            <h4 class="font-medium text-white text-sm">Cloud Fundamentals</h4>
                            <Badge class="bg-green-500/20 text-green-300 text-xs">8h</Badge>
                          </div>
                          <p class="text-gray-300 text-xs">Grundlagen der Cloud-Sicherheit und Shared Responsibility</p>
                        </div>
                        
                        <div class="p-3 bg-slate-600/30 rounded">
                          <div class="flex items-center justify-between mb-1">
                            <h4 class="font-medium text-white text-sm">Data Protection</h4>
                            <Badge class="bg-blue-500/20 text-blue-300 text-xs">6h</Badge>
                          </div>
                          <p class="text-gray-300 text-xs">Verschlüsselung, Klassifizierung und Datenschutz</p>
                        </div>
                        
                        <div class="p-3 bg-slate-600/30 rounded">
                          <div class="flex items-center justify-between mb-1">
                            <h4 class="font-medium text-white text-sm">Threat Landscape</h4>
                            <Badge class="bg-yellow-500/20 text-yellow-300 text-xs">4h</Badge>
                          </div>
                          <p class="text-gray-300 text-xs">Cloud-spezifische Bedrohungen und Angriffsvektoren</p>
                        </div>
                        
                        <div class="p-3 bg-slate-600/30 rounded">
                          <div class="flex items-center justify-between mb-1">
                            <h4 class="font-medium text-white text-sm">Compliance & Audit</h4>
                            <Badge class="bg-purple-500/20 text-purple-300 text-xs">5h</Badge>
                          </div>
                          <p class="text-gray-300 text-xs">Regulatory Requirements und Audit-Vorbereitung</p>
                        </div>
                        
                        <div class="p-3 bg-slate-600/30 rounded">
                          <div class="flex items-center justify-between mb-1">
                            <h4 class="font-medium text-white text-sm">Incident Response</h4>
                            <Badge class="bg-red-500/20 text-red-300 text-xs">6h</Badge>
                          </div>
                          <p class="text-gray-300 text-xs">Cloud-Incident-Management und Forensik</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Award class="h-5 w-5 text-purple-400" ></Award>
                        Zertifizierungen & Skills
                      </h3>
                      <div class="space-y-3">
                        <div class="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 class="font-medium text-blue-400 mb-1">Cloud Security</h4>
                          <ul class="text-gray-300 text-xs space-y-1">
                            <li>• CCSP (Certified Cloud Security Professional)</li>
                            <li>• AWS Certified Security - Specialty</li>
                            <li>• Azure Security Engineer Associate</li>
                          </ul>
                        </div>
                        
                        <div class="p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <h4 class="font-medium text-green-400 mb-1">Compliance & Risk</h4>
                          <ul class="text-gray-300 text-xs space-y-1">
                            <li>• CISA (Certified Information Systems Auditor)</li>
                            <li>• CRISC (Certified in Risk and Information Systems Control)</li>
                            <li>• ISO 27001 Lead Auditor</li>
                          </ul>
                        </div>
                        
                        <div class="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                          <h4 class="font-medium text-purple-400 mb-1">Technical Skills</h4>
                          <ul class="text-gray-300 text-xs space-y-1">
                            <li>• Container Security (CKS)</li>
                            <li>• DevSecOps Foundations</li>
                            <li>• Cloud Penetration Testing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Continuous Awareness Programme</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail class="h-6 w-6 text-blue-400" ></Mail>
                      </div>
                      <h4 class="font-medium text-white mb-2">Security Updates</h4>
                      <p class="text-gray-300 text-sm">Monatliche Newsletter mit aktuellen Cloud-Security-Trends</p>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle class="h-6 w-6 text-red-400" ></AlertTriangle>
                      </div>
                      <h4 class="font-medium text-white mb-2">Phishing Simulations</h4>
                      <p class="text-gray-300 text-sm">Quartalweise Cloud-fokussierte Phishing-Tests</p>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users class="h-6 w-6 text-green-400" ></Users>
                      </div>
                      <h4 class="font-medium text-white mb-2">Lunch & Learn</h4>
                      <p class="text-gray-300 text-sm">Wöchentliche kurze Sessions zu Cloud-Security-Topics</p>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play class="h-6 w-6 text-purple-400" ></Play>
                      </div>
                      <h4 class="font-medium text-white mb-2">Tabletop Exercises</h4>
                      <p class="text-gray-300 text-sm">Jährliche Cloud-Incident-Response-Simulationen</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Audit & Assessment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="audit-assessment"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-indigo-600/20 rounded-lg">
                    <Search class="h-6 w-6 text-indigo-400" ></Search>
                  </div>
                  <h2 class="text-3xl font-bold text-white">Cloud Security Audit & Assessment</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Security-Audits erfordern spezialisierte Methoden und Tools für die Bewertung von 
                    virtualisierten Umgebungen. ISO 27017 definiert umfassende Audit-Frameworks für die 
                    systematische Evaluation von Cloud-Sicherheitskontrollen.
                  </p>
                  
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <FileText class="h-5 w-5 text-blue-400" ></FileText>
                        Audit-Kategorien
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 class="font-medium text-blue-400 mb-2">Compliance Audits</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• ISO 27001/27017 Zertifizierungsaudits</li>
                            <li>• SOC 2 Type II Assessments</li>
                            <li>• DSGVO-Compliance-Bewertungen</li>
                            <li>• Branchenspezifische Audits (PCI DSS, HIPAA)</li>
                            <li>• Cloud Security Alliance (CSA) CAIQ</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 class="font-medium text-green-400 mb-2">Technical Security Assessments</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Cloud Infrastructure Penetration Testing</li>
                            <li>• API Security Assessments</li>
                            <li>• Container Security Audits</li>
                            <li>• Identity & Access Management Reviews</li>
                            <li>• Data Encryption Validation</li>
                          </ul>
                        </div>
                        
                        <div class="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 class="font-medium text-purple-400 mb-2">Operational Audits</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Change Management Processes</li>
                            <li>• Incident Response Capabilities</li>
                            <li>• Backup & Recovery Procedures</li>
                            <li>• Vendor Management Practices</li>
                            <li>• Security Monitoring Effectiveness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings class="h-5 w-5 text-green-400" ></Settings>
                        Cloud-spezifische Audit-Tools
                      </h3>
                      <div class="space-y-4">
                        <div class="p-4 bg-slate-600/30 rounded-lg">
                          <h4 class="font-medium text-white mb-2">Automated Assessment Tools</h4>
                          <div class="grid grid-cols-2 gap-2 text-sm">
                            <div class="p-2 bg-blue-900/20 rounded text-center">
                              <div class="font-medium text-blue-400">AWS Config</div>
                              <div class="text-gray-400 text-xs">Compliance Monitoring</div>
                            </div>
                            <div class="p-2 bg-blue-900/20 rounded text-center">
                              <div class="font-medium text-blue-400">Azure Policy</div>
                              <div class="text-gray-400 text-xs">Governance & Compliance</div>
                            </div>
                            <div class="p-2 bg-green-900/20 rounded text-center">
                              <div class="font-medium text-green-400">Cloud Custodian</div>
                              <div class="text-gray-400 text-xs">Policy Engine</div>
                            </div>
                            <div class="p-2 bg-purple-900/20 rounded text-center">
                              <div class="font-medium text-purple-400">Prowler</div>
                              <div class="text-gray-400 text-xs">Security Assessment</div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="p-4 bg-slate-600/30 rounded-lg">
                          <h4 class="font-medium text-white mb-2">Cloud Security Posture Management</h4>
                          <div class="grid grid-cols-2 gap-2 text-sm">
                            <div class="p-2 bg-yellow-900/20 rounded text-center">
                              <div class="font-medium text-yellow-400">Prisma Cloud</div>
                              <div class="text-gray-400 text-xs">Multi-Cloud Security</div>
                            </div>
                            <div class="p-2 bg-red-900/20 rounded text-center">
                              <div class="font-medium text-red-400">Dome9</div>
                              <div class="text-gray-400 text-xs">Compliance Automation</div>
                            </div>
                            <div class="p-2 bg-indigo-900/20 rounded text-center">
                              <div class="font-medium text-indigo-400">CloudSploit</div>
                              <div class="text-gray-400 text-xs">Security Scanning</div>
                            </div>
                            <div class="p-2 bg-pink-900/20 rounded text-center">
                              <div class="font-medium text-pink-400">Lacework</div>
                              <div class="text-gray-400 text-xs">Cloud Workload Protection</div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="p-4 bg-slate-600/30 rounded-lg">
                          <h4 class="font-medium text-white mb-2">Evidence Collection & Management</h4>
                          <ul class="text-gray-300 text-sm space-y-1">
                            <li>• Automated Screenshot & Log Collection</li>
                            <li>• Configuration Snapshots</li>
                            <li>• Audit Trail Preservation</li>
                            <li>• Chain of Custody Documentation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Audit Lifecycle Management</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target class="h-6 w-6 text-blue-400" ></Target>
                      </div>
                      <h4 class="font-medium text-white mb-2">Planning</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Scope Definition</li>
                        <li>• Risk Assessment</li>
                        <li>• Resource Planning</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Database class="h-6 w-6 text-green-400" ></Database>
                      </div>
                      <h4 class="font-medium text-white mb-2">Execution</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Evidence Collection</li>
                        <li>• Control Testing</li>
                        <li>• Gap Analysis</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 class="h-6 w-6 text-yellow-400" ></BarChart3>
                      </div>
                      <h4 class="font-medium text-white mb-2">Analysis</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Finding Assessment</li>
                        <li>• Risk Evaluation</li>
                        <li>• Impact Analysis</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText class="h-6 w-6 text-purple-400" ></FileText>
                      </div>
                      <h4 class="font-medium text-white mb-2">Reporting</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Executive Summary</li>
                        <li>• Detailed Findings</li>
                        <li>• Recommendations</li>
                      </ul>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle class="h-6 w-6 text-red-400" ></CheckCircle>
                      </div>
                      <h4 class="font-medium text-white mb-2">Follow-up</h4>
                      <ul class="text-gray-300 text-xs space-y-1">
                        <li>• Remediation Tracking</li>
                        <li>• Re-testing</li>
                        <li>• Closure Validation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb class="h-5 w-5 text-yellow-400" ></Lightbulb>
                    Best Practices für Cloud Security Audits
                  </h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-indigo-400 mb-3">Audit Vorbereitung:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Kontinuierliche Audit-Readiness sicherstellen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Automated Evidence Collection implementieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Clear Audit Trails etablieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Documentation Standards definieren
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 class="font-medium text-purple-400 mb-3">Audit Durchführung:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Risk-basierte Audit-Ansätze nutzen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Cloud-native Tools einsetzen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Shared Responsibility Model berücksichtigen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Continuous Monitoring etablieren
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Implementation Section */}
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
                  <div class="p-2 bg-green-600/20 rounded-lg">
                    <Route class="h-6 w-6 text-green-400" ></Route>
                  </div>
                  <h2 class="text-3xl font-bold text-white">ISO 27017 Implementierungsroadmap</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Die systematische Implementierung von ISO 27017 erfordert eine strukturierte Herangehensweise 
                    mit klaren Phasen, Meilensteinen und Erfolgsmessungen. Diese Roadmap bietet einen praktischen 
                    Leitfaden für die erfolgreiche Umsetzung.
                  </p>
                  
                  <div class="mb-8">
                    <h3 class="text-xl font-semibold text-white mb-6">Implementierungsphasen</h3>
                    <div class="space-y-6">
                      <div class="relative">
                        <div class="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
                        
                        <div class="flex items-start gap-4 mb-8">
                          <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-blue-400 font-bold">1</span>
                          </div>
                          <div class="flex-1">
                            <div class="bg-slate-700/30 rounded-lg p-6">
                              <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Target class="h-5 w-5 text-blue-400" ></Target>
                                Vorbereitung und Planung (4-6 Wochen)
                              </h4>
                              <div>
                                <div>
                                  <h5 class="font-medium text-blue-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Management-Commitment sicherstellen
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Project Team und Steering Committee bilden
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Cloud-Infrastruktur-Inventar erstellen
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Gap-Analysis durchführen
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 class="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li>• Project Charter</li>
                                    <li>• Cloud Asset Inventory</li>
                                    <li>• Current State Assessment</li>
                                    <li>• Implementation Roadmap</li>
                                    <li>• Budget und Ressourcenplan</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="flex items-start gap-4 mb-8">
                          <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-purple-400 font-bold">2</span>
                          </div>
                          <div class="flex-1">
                            <div class="bg-slate-700/30 rounded-lg p-6">
                              <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <FileText class="h-5 w-5 text-purple-400" ></FileText>
                                Policy und Governance (6-8 Wochen)
                              </h4>
                              <div>
                                <div>
                                  <h5 class="font-medium text-purple-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Cloud Security Policy entwickeln
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Shared Responsibility Matrix definieren
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Vendor Management Framework
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Risk Management Prozesse
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 class="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li>• Cloud Security Policy</li>
                                    <li>• Governance Framework</li>
                                    <li>• Risk Assessment Methodology</li>
                                    <li>• Vendor Assessment Criteria</li>
                                    <li>• Incident Response Plan</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="flex items-start gap-4 mb-8">
                          <div class="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-yellow-400 font-bold">3</span>
                          </div>
                          <div class="flex-1">
                            <div class="bg-slate-700/30 rounded-lg p-6">
                              <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Settings class="h-5 w-5 text-yellow-400" ></Settings>
                                Technische Implementierung (12-16 Wochen)
                              </h4>
                              <div>
                                <div>
                                  <h5 class="font-medium text-yellow-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Cloud Controls implementieren
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Security Monitoring aufbauen
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Identity & Access Management
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Data Protection Maßnahmen
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 class="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li>• Implemented Security Controls</li>
                                    <li>• Monitoring & Logging System</li>
                                    <li>• IAM Configuration</li>
                                    <li>• Encryption Implementation</li>
                                    <li>• Backup & Recovery System</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="flex items-start gap-4 mb-8">
                          <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-green-400 font-bold">4</span>
                          </div>
                          <div class="flex-1">
                            <div class="bg-slate-700/30 rounded-lg p-6">
                              <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <GraduationCap class="h-5 w-5 text-green-400" ></GraduationCap>
                                Training und Awareness (4-6 Wochen)
                              </h4>
                              <div>
                                <div>
                                  <h5 class="font-medium text-green-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Schulungsprogramme entwickeln
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Team-spezifische Trainings
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Awareness-Kampagnen starten
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Tabletop Exercises durchführen
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 class="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li>• Training Materials</li>
                                    <li>• Awareness Programme</li>
                                    <li>• Competency Assessments</li>
                                    <li>• Exercise Documentation</li>
                                    <li>• Knowledge Base</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                          <div class="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-red-400 font-bold">5</span>
                          </div>
                          <div class="flex-1">
                            <div class="bg-slate-700/30 rounded-lg p-6">
                              <h4 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Award class="h-5 w-5 text-red-400" ></Award>
                                Testing und Zertifizierung (8-12 Wochen)
                              </h4>
                              <div>
                                <div>
                                  <h5 class="font-medium text-red-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Internal Audit durchführen
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Gap-Remediation
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Certification Audit vorbereiten
                                    </li>
                                    <li class="flex items-start gap-2">
                                      <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                      Continuous Improvement etablieren
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 class="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul class="text-gray-300 text-sm space-y-1">
                                    <li>• Internal Audit Report</li>
                                    <li>• Corrective Action Plans</li>
                                    <li>• Evidence Documentation</li>
                                    <li>• Certification Readiness</li>
                                    <li>• Improvement Roadmap</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Kritische Erfolgsfaktoren</h3>
                  <div>
                    <div class="space-y-4">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Star class="h-5 w-5 text-yellow-400" ></Star>
                          Organisatorische Faktoren
                        </h4>
                        <ul class="space-y-3 text-gray-300 text-sm">
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Executive Sponsorship:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Sichtbare Unterstützung und ausreichende Ressourcen vom Management
                              </span>
                            </div>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Cross-functional Team:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Einbeziehung aller relevanten Stakeholder und Fachbereiche
                              </span>
                            </div>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Change Management:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Strukturierte Begleitung der organisatorischen Veränderungen
                              </span>
                            </div>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Kompetenzaufbau:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Kontinuierliche Weiterbildung und Skill-Entwicklung
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Settings class="h-5 w-5 text-blue-400" ></Settings>
                          Technische Faktoren
                        </h4>
                        <ul class="space-y-3 text-gray-300 text-sm">
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Automation-First Ansatz:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Maximale Automatisierung von Security Controls und Monitoring
                              </span>
                            </div>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Scalable Architecture:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Skalierbare und zukunftsfähige Sicherheitsarchitektur
                              </span>
                            </div>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Integration Strategy:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Nahtlose Integration in bestehende IT-Landschaft
                              </span>
                            </div>
                          </li>
                          <li class="flex items-start gap-2">
                            <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                            <div>
                              <span class="font-medium">Performance Monitoring:</span>
                              <span class="block text-xs text-gray-400 mt-1">
                                Kontinuierliche Überwachung und Optimierung der Performance
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certification Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            class="mb-16"
            data-section="certification"
          >
            <Card class="bg-slate-800/50 border-slate-700">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-2 bg-gold-600/20 rounded-lg">
                    <Award class="h-6 w-6 text-yellow-400" ></Award>
                  </div>
                  <h2 class="text-3xl font-bold text-white">ISO 27017 Zertifizierungsprozess</h2>
                </div>
                
                <div class="mb-8">
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Die ISO 27017 Zertifizierung ist ein strukturierter Prozess, der die Compliance mit Cloud-Security-Standards 
                    formal bestätigt. Diese Sektion führt durch den gesamten Zertifizierungsprozess von der Vorbereitung 
                    bis zur Aufrechterhaltung des Zertifikats.
                  </p>
                  
                  <div class="mb-8">
                    <h3 class="text-xl font-semibold text-white mb-6">Zertifizierungsphasen</h3>
                    <div>
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <div class="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText class="h-6 w-6 text-blue-400" ></FileText>
                        </div>
                        <h4 class="font-medium text-white text-center mb-3">Stage 1 Audit</h4>
                        <div class="space-y-2 text-sm">
                          <div class="flex justify-between text-gray-300">
                            <span>Dauer:</span>
                            <span class="text-blue-400">1-2 Tage</span>
                          </div>
                          <div class="flex justify-between text-gray-300">
                            <span>Typ:</span>
                            <span class="text-blue-400">Remote/Onsite</span>
                          </div>
                          <p class="text-gray-400 text-xs mt-3">
                            Dokumentenprüfung und Bewertung der Audit-Bereitschaft
                          </p>
                        </div>
                      </div>
                      
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <div class="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Search class="h-6 w-6 text-green-400" ></Search>
                        </div>
                        <h4 class="font-medium text-white text-center mb-3">Stage 2 Audit</h4>
                        <div class="space-y-2 text-sm">
                          <div class="flex justify-between text-gray-300">
                            <span>Dauer:</span>
                            <span class="text-green-400">3-5 Tage</span>
                          </div>
                          <div class="flex justify-between text-gray-300">
                            <span>Typ:</span>
                            <span class="text-green-400">Onsite</span>
                          </div>
                          <p class="text-gray-400 text-xs mt-3">
                            Detaillierte Implementierungsprüfung und Control-Testing
                          </p>
                        </div>
                      </div>
                      
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <div class="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award class="h-6 w-6 text-purple-400" ></Award>
                        </div>
                        <h4 class="font-medium text-white text-center mb-3">Zertifikat</h4>
                        <div class="space-y-2 text-sm">
                          <div class="flex justify-between text-gray-300">
                            <span>Gültigkeit:</span>
                            <span class="text-purple-400">3 Jahre</span>
                          </div>
                          <div class="flex justify-between text-gray-300">
                            <span>Surveillance:</span>
                            <span class="text-purple-400">Jährlich</span>
                          </div>
                          <p class="text-gray-400 text-xs mt-3">
                            Zertifikat-Ausstellung und jährliche Überwachungsaudits
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Audit-Vorbereitung Checkliste</h3>
                  <div>
                    <div class="space-y-4">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <FileText class="h-5 w-5 text-blue-400" ></FileText>
                          Dokumentation
                        </h4>
                        <div class="space-y-3">
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Information Security Policy aktualisiert</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Cloud Security Procedures dokumentiert</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Risk Assessment Reports vollständig</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Vendor Management Documentation</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Incident Response Plans aktuell</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Business Continuity Plans getestet</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="bg-slate-700/30 rounded-lg p-6">
                        <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Settings class="h-5 w-5 text-green-400" ></Settings>
                          Technische Evidenz
                        </h4>
                        <div class="space-y-3">
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Cloud Configuration Screenshots</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Monitoring und Logging Berichte</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Vulnerability Scan Results</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Backup und Recovery Tests</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Access Control Matrices</span>
                          </label>
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span class="text-gray-300 text-sm">Encryption Implementation Proof</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h3 class="text-xl font-semibold text-white mb-6">Zertifizierungskosten und Timeline</h3>
                  <div>
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Euro class="h-5 w-5 text-green-400" ></Euro>
                        Kostenübersicht
                      </h4>
                      <div class="space-y-4">
                        <div class="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span class="text-gray-300">Stage 1 Audit</span>
                          <span class="text-green-400 font-medium">€5,000 - €8,000</span>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span class="text-gray-300">Stage 2 Audit</span>
                          <span class="text-green-400 font-medium">€12,000 - €18,000</span>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span class="text-gray-300">Jährliche Surveillance</span>
                          <span class="text-green-400 font-medium">€4,000 - €6,000</span>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <span class="text-white font-medium">Gesamtkosten (3 Jahre)</span>
                          <span class="text-blue-400 font-bold">€29,000 - €44,000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-slate-700/30 rounded-lg p-6">
                      <h4 class="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Calendar class="h-5 w-5 text-blue-400" ></Calendar>
                        Timeline
                      </h4>
                      <div class="space-y-4">
                        <div class="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span class="text-gray-300">Vorbereitung</span>
                          <span class="text-blue-400 font-medium">6-12 Monate</span>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span class="text-gray-300">Stage 1 Audit</span>
                          <span class="text-blue-400 font-medium">2-4 Wochen</span>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span class="text-gray-300">Gap Remediation</span>
                          <span class="text-blue-400 font-medium">4-8 Wochen</span>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span class="text-gray-300">Stage 2 Audit</span>
                          <span class="text-blue-400 font-medium">2-3 Wochen</span>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <span class="text-white font-medium">Zertifikat-Ausstellung</span>
                          <span class="text-green-400 font-bold">4-6 Wochen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-green-900/20 rounded-lg border border-yellow-700/50">
                  <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb class="h-5 w-5 text-yellow-400" ></Lightbulb>
                    Erfolgreiche Zertifizierung: Best Practices
                  </h3>
                  <div>
                    <div>
                      <h4 class="font-medium text-yellow-400 mb-3">Vor dem Audit:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Mock-Audits mit internen oder externen Auditoren durchführen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Alle Evidenzen zentral sammeln und organisieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Key Personnel für Interviews vorbereiten
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Audit-Timeline und Logistik detailliert planen
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 class="font-medium text-green-400 mb-3">Nach der Zertifizierung:</h4>
                      <ul class="space-y-2 text-gray-300 text-sm">
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Continuous Monitoring System etablieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Regelmäßige interne Audits durchführen
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Management Review Meetings etablieren
                        </li>
                        <li class="flex items-start gap-2">
                          <Star class="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" ></Star>
                          Kontinuierliche Verbesserungen umsetzen
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