export default {
  route: '/hinweisgeberschutzgesetz',
  title: 'Hinweisgeberschutzgesetz',
  description: 'Umfassende Anleitung zur Implementierung des Hinweisgeberschutzgesetzes (HinSchG)                mit praktischen Lösungen, rechtlichen Grundlagen und technische',
  content: `) => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

// Animated Counter Component
const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-100px' });
  const count = useCounter(end, duration, isInView);

  return (
    <span ref={elementRef} class="font-bold text-2xl">
      {prefix}{suffix}
    </span>
  );
};

// Expandable Section Component
const ExpandableSection: React.FC<{
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ElementType;
}> = ({ title, children, defaultExpanded = false, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card class="mb-6 overflow-hidden">
      <CardContent class="p-0">
        <button
         
          class="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
        >
          <div class="flex items-center space-x-3">
            {Icon && <Icon class="h-6 w-6 text-blue-600" ></Icon>}
            <h3 class="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown class="h-5 w-5 text-gray-500" ></ChevronDown>
          </motion.div>
        </button>
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div class="px-6 pb-6">
            {children}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

const HinweisgeberschutzgesetzGuide: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [readingProgress, setReadingProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const sections = [
    { id: 1, title: 'Überblick', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'Anwendungsbereich', icon: Target, color: 'from-green-500 to-green-600' },
    { id: 3, title: 'Hinweisgebersystem', icon: MessageSquare, color: 'from-purple-500 to-purple-600' },
    { id: 4, title: 'Meldeverfahren', icon: Send, color: 'from-red-500 to-red-600' },
    { id: 5, title: 'Schutzmaßnahmen', icon: Shield, color: 'from-yellow-500 to-yellow-600' },
    { id: 6, title: 'Rechtliche Grundlagen', icon: Scale, color: 'from-indigo-500 to-indigo-600' },
    { id: 7, title: 'Verfahrensschritte', icon: Route, color: 'from-pink-500 to-pink-600' },
    { id: 8, title: 'Dokumentation', icon: FileText, color: 'from-teal-500 to-teal-600' },
    { id: 9, title: 'Schulungen', icon: GraduationCap, color: 'from-orange-500 to-orange-600' },
    { id: 10, title: 'Risikomanagement', icon: AlertTriangle, color: 'from-gray-500 to-gray-600' },
    { id: 11, title: 'Monitoring', icon: Activity, color: 'from-cyan-500 to-cyan-600' },
    { id: 12, title: 'Compliance', icon: CheckCircle, color: 'from-emerald-500 to-emerald-600' },
    { id: 13, title: 'Technische Umsetzung', icon: Settings, color: 'from-violet-500 to-violet-600' },
    { id: 14, title: 'Implementierung', icon: Zap, color: 'from-rose-500 to-rose-600' },
    { id: 15, title: 'Continuous Improvement', icon: TrendingUp, color: 'from-lime-500 to-lime-600' }
  ];

  useEffect(() => {
    const handleScroll = () => ;

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const markSectionComplete = (sectionId: number) => {
    if (!completedSections.includes(sectionId)) 
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header ></Header>
      
      {/* Reading Progress Bar */}
      <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          class="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ width: \`\${readingProgress}%\` }}
          transition={{ duration: 0.1 }}
        ></motion>
      </div>

      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        style={{ y }}
        class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white"
      >
        <div class="absolute inset-0 bg-black/20" ></div>
        <div class="relative container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              class="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 backdrop-blur-sm"
            >
              <Shield class="h-10 w-10 text-white" ></Shield>
            </motion.div>
            
            <h1>
              Hinweisgeberschutzgesetz
            </h1>
            <h2>
              Comprehensive Whistleblower Protection Guide
            </h2>
            <p>
              Umfassende Anleitung zur Implementierung des Hinweisgeberschutzgesetzes (HinSchG) 
              mit praktischen Lösungen, rechtlichen Grundlagen und technischen Anforderungen
            </p>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                class="text-center"
              >
                <div class="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={15} ></AnimatedCounter>
                </div>
                <div class="text-blue-200">Detaillierte Abschnitte</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                class="text-center"
              >
                <div class="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={250} suffix="+" ></AnimatedCounter>
                </div>
                <div class="text-blue-200">Rechtsparagraphen</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                class="text-center"
              >
                <div class="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={85} suffix="%" ></AnimatedCounter>
                </div>
                <div class="text-blue-200">Implementierungsrate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                class="text-center"
              >
                <div class="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={2023} ></AnimatedCounter>
                </div>
                <div class="text-blue-200">Gesetz in Kraft</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              class="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button> setSelectedTab('overview')}
              >
                <BookOpen class="mr-2 h-5 w-5" ></BookOpen>
                Guide starten
              </Button>
              <Button>
                <Download class="mr-2 h-5 w-5" ></Download>
                Checkliste herunterladen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div class="container mx-auto px-6 py-16">
        <div>
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            class="lg:w-80 lg:sticky lg:top-24 lg:self-start"
          >
            <Card class="mb-8">
              <CardContent class="p-6">
                <h3 class="text-xl font-semibold mb-4 flex items-center">
                  <Map class="mr-2 h-5 w-5 text-blue-600" ></Map>
                  Inhaltsverzeichnis
                </h3>
                <div class="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                     
                      class=w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 \${
                        currentSection === section.id 
                          ? 'bg-blue-100 text-blue-700 shadow-md' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div class=p-2 rounded-lg bg-gradient-to-r \${section.color}>
                        <section.icon class="h-4 w-4 text-white" ></section>
                      </div>
                      <div class="flex-1">
                        <div class="font-medium">{section.title}</div>
                        <div class="text-sm text-gray-500">Abschnitt {section.id}</div>
                      </div>
                      
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardContent class="p-6">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp class="mr-2 h-5 w-5 text-green-600" ></TrendingUp>
                  Fortschritt
                </h3>
                <div class="mb-4">
                  <div class="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Abgeschlossen</span>
                    <span>{completedSections.length}/{sections.length}</span>
                  </div>
                  <Progress value= class="h-2" ></Progress>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center space-x-2 text-sm">
                    <Clock class="h-4 w-4 text-gray-500" ></Clock>
                    <span>Geschätzte Lesezeit: 45 Min</span>
                  </div>
                  <div class="flex items-center space-x-2 text-sm">
                    <Target class="h-4 w-4 text-blue-500" ></Target>
                    <span>Aktueller Abschnitt: {currentSection}</span>
                  </div>
                  <div class="flex items-center space-x-2 text-sm">
                    <Award class="h-4 w-4 text-yellow-500" ></Award>
                    <span>Schwierigkeitsgrad: Hoch</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            class="flex-1"
          >
            {/* Section 1: Überblick */}
            {currentSection === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                      <BookOpen class="h-8 w-8 text-white" ></BookOpen>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Überblick</h1>
                      <p class="text-xl text-gray-600">Einführung in das Hinweisgeberschutzgesetz</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Card class="border-l-4 border-l-blue-500">
                    <CardContent class="p-6">
                      <h3 class="text-xl font-semibold mb-4 flex items-center">
                        <Scale class="mr-2 h-5 w-5 text-blue-600" ></Scale>
                        Gesetzlicher Rahmen
                      </h3>
                      <div class="space-y-4">
                        <div>
                          <strong class="text-blue-700">Hinweisgeberschutzgesetz (HinSchG)</strong>
                          <p class="text-gray-600 mt-1">
                            Umsetzung der EU-Whistleblower-Richtlinie 2019/1937 in deutsches Recht. 
                            Schutz von Personen, die Verstöße gegen Unionsrecht melden.
                          </p>
                        </div>
                        <div>
                          <strong class="text-blue-700">Inkrafttreten</strong>
                          <p class="text-gray-600 mt-1">2. Juli 2023 für Unternehmen ab 250 Beschäftigten</p>
                        </div>
                        <div>
                          <strong class="text-blue-700">Erweiterte Anwendung</strong>
                          <p class="text-gray-600 mt-1">17. Dezember 2023 für Unternehmen ab 50 Beschäftigten</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card class="border-l-4 border-l-green-500">
                    <CardContent class="p-6">
                      <h3 class="text-xl font-semibold mb-4 flex items-center">
                        <Target class="mr-2 h-5 w-5 text-green-600" ></Target>
                        Zentrale Ziele
                      </h3>
                      <div class="space-y-3">
                        <div class="flex items-start space-x-2">
                          <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" ></CheckCircle>
                          <span class="text-gray-700">Schutz von Hinweisgebern vor Repressalien</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" ></CheckCircle>
                          <span class="text-gray-700">Förderung der Meldung von Rechtsverstößen</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" ></CheckCircle>
                          <span class="text-gray-700">Stärkung der Compliance-Kultur</span>
                        </div>
                        <div class="flex items-start space-x-2">
                          <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" ></CheckCircle>
                          <span class="text-gray-700">Prävention von Schäden für Gesellschaft</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <ExpandableSection 
                  title="Rechtliche Grundlagen des HinSchG" 
                  icon={Scale}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-3">EU-Whistleblower-Richtlinie 2019/1937</h4>
                      <p class="text-blue-800 mb-4">
                        Die Richtlinie zum Schutz von Personen, die Verstöße gegen das Unionsrecht melden, 
                        bildet die rechtliche Grundlage für das deutsche Hinweisgeberschutzgesetz.
                      </p>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Geschützte Bereiche</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Öffentliches Auftragswesen</li>
                            <li>• Finanzdienstleistungen</li>
                            <li>• Geldwäscheprävention</li>
                            <li>• Produktsicherheit und -konformität</li>
                            <li>• Verkehrssicherheit</li>
                            <li>• Umweltschutz</li>
                            <li>• Strahlenschutz</li>
                            <li>• Lebensmittel- und Futtermittelsicherheit</li>
                            <li>• Tiergesundheit und Tierschutz</li>
                            <li>• Gesundheitsschutz</li>
                            <li>• Verbraucherschutz</li>
                            <li>• Schutz der Privatsphäre</li>
                            <li>• Datenschutz und Netzsicherheit</li>
                            <li>• Finanzinteressen der Union</li>
                            <li>• Binnenmarkt (Wettbewerbsrecht)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Kernanforderungen</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Sichere Meldekanäle</li>
                            <li>• Vertraulichkeitsschutz</li>
                            <li>• Verbot von Repressalien</li>
                            <li>• Angemessene Folgemaßnahmen</li>
                            <li>• Beweislastumkehr</li>
                            <li>• Informations- und Beratungsrechte</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-3">Nationales Hinweisgeberschutzgesetz</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-2">Struktur des Gesetzes</h5>
                          <ul class="text-sm text-gray-700 space-y-1">
                            <li>• Teil 1: Allgemeine Bestimmungen (§§ 1-3)</li>
                            <li>• Teil 2: Interne Meldestellen (§§ 4-16)</li>
                            <li>• Teil 3: Externe Meldestellen (§§ 17-25)</li>
                            <li>• Teil 4: Schutz vor Repressalien (§§ 26-36)</li>
                            <li>• Teil 5: Verfahrensbestimmungen (§§ 37-42)</li>
                            <li>• Teil 6: Bußgeld und Schlussbestimmungen (§§ 43-45)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-2">Zentrale Begriffe</h5>
                          <div class="space-y-2 text-sm text-gray-700">
                            <div>
                              <strong>Hinweisgeber:</strong> Person, die einen Verstoß meldet
                            </div>
                            <div>
                              <strong>Meldung:</strong> Übermittlung von Informationen über Verstöße
                            </div>
                            <div>
                              <strong>Verstoß:</strong> Rechtswidriges Verhalten in geschützten Bereichen
                            </div>
                            <div>
                              <strong>Repressalie:</strong> Negative Reaktion auf eine Meldung
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-2">Sanktionen</h5>
                          <ul class="text-sm text-gray-700 space-y-1">
                            <li>• Bußgeld bis 20.000 € für Behinderung von Meldungen</li>
                            <li>• Bußgeld bis 50.000 € für Repressalien</li>
                            <li>• Bußgeld bis 20.000 € für Verletzung der Vertraulichkeit</li>
                            <li>• Zivilrechtliche Ansprüche auf Schadensersatz</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Internationale Entwicklungen und Best Practices" 
                  icon={Globe}
                >
                  <div class="space-y-6">
                    <div>
                      <div class="bg-blue-50 p-6 rounded-lg">
                        <h4 class="text-lg font-semibold text-blue-900 mb-3">USA - Sarbanes-Oxley Act</h4>
                        <p class="text-blue-800 mb-4">
                          Pioniergesetz für Whistleblower-Schutz in börsennotierten Unternehmen seit 2002.
                        </p>
                        <div class="space-y-2 text-sm text-blue-800">
                          <div><strong>Schutzbereich:</strong> Börsennotierte Unternehmen</div>
                          <div><strong>Meldekanäle:</strong> SEC, OSHA, interne Stellen</div>
                          <div><strong>Sanktionen:</strong> Bis zu 25 Jahre Haft für Repressalien</div>
                          <div><strong>Besonderheit:</strong> Whistleblower-Prämien möglich</div>
                        </div>
                      </div>

                      <div class="bg-green-50 p-6 rounded-lg">
                        <h4 class="text-lg font-semibold text-green-900 mb-3">UK - Public Interest Disclosure Act</h4>
                        <p class="text-green-800 mb-4">
                          Umfassender Schutz für "Protected Disclosures" seit 1998.
                        </p>
                        <div class="space-y-2 text-sm text-green-800">
                          <div><strong>Schutzbereich:</strong> Alle Arbeitnehmer</div>
                          <div><strong>Besonderheit:</strong> "Public Interest Test"</div>
                          <div><strong>Sanktionen:</strong> Unbegrenzte Entschädigung</div>
                          <div><strong>Innovation:</strong> Prescribed Persons System</div>
                        </div>
                      </div>

                      <div class="bg-purple-50 p-6 rounded-lg">
                        <h4 class="text-lg font-semibold text-purple-900 mb-3">Frankreich - Sapin II</h4>
                        <p class="text-purple-800 mb-4">
                          Französisches Anti-Korruptionsgesetz mit Whistleblower-Schutz seit 2016.
                        </p>
                        <div class="space-y-2 text-sm text-purple-800">
                          <div><strong>Schutzbereich:</strong> Unternehmen ab 500 Mitarbeitern</div>
                          <div><strong>Besonderheit:</strong> Agence Française Anticorruption</div>
                          <div><strong>Fokus:</strong> Korruption, Interessenkonflikte</div>
                          <div><strong>Innovation:</strong> Compliance-Programme verpflichtend</div>
                        </div>
                      </div>

                      <div class="bg-orange-50 p-6 rounded-lg">
                        <h4 class="text-lg font-semibold text-orange-900 mb-3">Australien - Corporations Act</h4>
                        <p class="text-orange-800 mb-4">
                          Verstärkter Whistleblower-Schutz durch Treasury Laws Amendment Act 2019.
                        </p>
                        <div class="space-y-2 text-sm text-orange-800">
                          <div><strong>Schutzbereich:</strong> Körperschaften</div>
                          <div><strong>Besonderheit:</strong> Anonyme Meldungen</div>
                          <div><strong>Sanktionen:</strong> Bis zu AUD 1,05 Mio.</div>
                          <div><strong>Innovation:</strong> Whistleblower-Richtlinien verpflichtend</div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Best Practice Erkenntnisse</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-2">Erfolgs faktoren</h5>
                          <ul class="text-sm text-gray-700 space-y-1">
                            <li>• Starke rechtliche Grundlage</li>
                            <li>• Unabhängige Aufsichtsbehörden</li>
                            <li>• Angemessene Ressourcen</li>
                            <li>• Klare Verfahren</li>
                            <li>• Sensibilisierung der Öffentlichkeit</li>
                            <li>• Regelmäßige Evaluierung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-2">Häufige Herausforderungen</h5>
                          <ul class="text-sm text-gray-700 space-y-1">
                            <li>• Angst vor Repressalien</li>
                            <li>• Mangelndes Bewusstsein</li>
                            <li>• Komplexe Verfahren</li>
                            <li>• Unzureichende Ressourcen</li>
                            <li>• Kulturelle Barrieren</li>
                            <li>• Fehlende Folgemaßnahmen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-2">Innovations ansätze</h5>
                          <ul class="text-sm text-gray-700 space-y-1">
                            <li>• KI-gestützte Risikoerkennung</li>
                            <li>• Blockchain-basierte Meldungen</li>
                            <li>• Mobile Meldeapps</li>
                            <li>• Predictive Analytics</li>
                            <li>• Automatisierte Folgemaßnahmen</li>
                            <li>• Gamification-Elemente</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Statistiken und Marktentwicklung" 
                  icon={BarChart3}
                >
                  <div class="space-y-6">
                    <div>
                      <Card class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                        <div class="text-3xl font-bold text-blue-600 mb-2">
                          <AnimatedCounter end={73} suffix="%" ></AnimatedCounter>
                        </div>
                        <div class="text-sm text-blue-800">Unternehmen mit interner Meldestelle</div>
                      </Card>
                      
                      <Card class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100">
                        <div class="text-3xl font-bold text-green-600 mb-2">
                          <AnimatedCounter end={156} suffix="%" ></AnimatedCounter>
                        </div>
                        <div class="text-sm text-green-800">Anstieg der Meldungen 2023</div>
                      </Card>
                      
                      <Card class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                        <div class="text-3xl font-bold text-purple-600 mb-2">
                          <AnimatedCounter end={89} suffix="%" ></AnimatedCounter>
                        </div>
                        <div class="text-sm text-purple-800">Meldungen führen zu Maßnahmen</div>
                      </Card>
                      
                      <Card class="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                        <div class="text-3xl font-bold text-orange-600 mb-2">
                          <AnimatedCounter end={42} suffix=" Tage" ></AnimatedCounter>
                        </div>
                        <div class="text-sm text-orange-800">Durchschnittliche Bearbeitungszeit</div>
                      </Card>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Marktentwicklung Hinweisgebersysteme</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Marktvolumen</h5>
                          <div class="space-y-2 text-sm text-gray-700">
                            <div>Globaler Markt 2023: <strong>$15,7 Mrd.</strong></div>
                            <div>Deutschland 2023: <strong>€420 Mio.</strong></div>
                            <div>Wachstumsrate CAGR: <strong>12,3%</strong></div>
                            <div>Prognose 2030: <strong>€950 Mio.</strong></div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Hauptanbieter</h5>
                          <div class="space-y-2 text-sm text-gray-700">
                            <div>• NAVEX Global (38% Marktanteil)</div>
                            <div>• EthicsPoint (22%)</div>
                            <div>• KPMG Integrity (15%)</div>
                            <div>• Deloitte Speak Up (12%)</div>
                            <div>• Deutsche Anbieter (13%)</div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Technologietrends</h5>
                          <div class="space-y-2 text-sm text-gray-700">
                            <div>• Cloud-basierte Lösungen: 87%</div>
                            <div>• Mobile Apps: 64%</div>
                            <div>• KI-Integration: 31%</div>
                            <div>• Blockchain: 8%</div>
                            <div>• Analytics-Tools: 76%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button variant="outline" disabled>
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-blue-600 hover:bg-blue-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 2: Anwendungsbereich */}
            {currentSection === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                      <Target class="h-8 w-8 text-white" ></Target>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Anwendungsbereich</h1>
                      <p class="text-xl text-gray-600">Wer ist verpflichtet und welche Bereiche sind geschützt?</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Persönlicher Anwendungsbereich" 
                  icon={Users}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Geschützte Personen (§ 1 HinSchG)</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Primär geschützte Personen</h5>
                          <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-green-800">Beschäftigte</strong>
                                <p class="text-sm text-green-700 mt-1">
                                  Arbeitnehmer, Beamte, Richter, Soldaten, Auszubildende, 
                                  Praktikanten, Volontäre, ehrenamtlich Tätige
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-green-800">Selbständige</strong>
                                <p class="text-sm text-green-700 mt-1">
                                  Freiberufler, Consultants, Subunternehmer in 
                                  Auftrags- oder Vertragsverhältnis
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-green-800">Gesellschafter</strong>
                                <p class="text-sm text-green-700 mt-1">
                                  Aktionäre, GmbH-Gesellschafter mit arbeitnehmerähnlicher Stellung
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Erweitert geschützte Personen</h5>
                          <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-green-800">Bewerber</strong>
                                <p class="text-sm text-green-700 mt-1">
                                  Personen im Bewerbungsverfahren oder Vorstellungsgespräch
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-green-800">Ehemalige Beschäftigte</strong>
                                <p class="text-sm text-green-700 mt-1">
                                  Schutz für Personen, deren Arbeitsverhältnis beendet wurde
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-green-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-green-800">Dritte Personen</strong>
                                <p class="text-sm text-green-700 mt-1">
                                  Personen, die mit Hinweisgebern in Verbindung stehen 
                                  (Kollegen, Verwandte, Rechtsberater)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Besondere Personengruppen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Beamte</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Vollumfänglicher Schutz</li>
                            <li>• Keine Konflikte mit Remonstrationspflicht</li>
                            <li>• Besondere Fürsorgepflicht des Dienstherrn</li>
                            <li>• Disziplinarrecht bleibt unberührt</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Geheimnisträger</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Abwägung mit Schweigepflichten</li>
                            <li>• Anwälte: Besondere Interessenabwägung</li>
                            <li>• Ärzte: Patientenschutz beachten</li>
                            <li>• Journalisten: Quellenschutz</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Ausländische Arbeitnehmer</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Vollumfänglicher Schutz</li>
                            <li>• Keine aufenthaltsrechtlichen Nachteile</li>
                            <li>• Mehrsprachige Informationen</li>
                            <li>• Besondere Schutzbedürftigkeit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Sachlicher Anwendungsbereich" 
                  icon={Scale}
                >
                  <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Geschützte Rechtsbereiche</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">EU-Recht (Anhang zur EU-Richtlinie)</h5>
                          <div class="space-y-3 text-sm text-purple-800">
                            <div>
                              <strong>Öffentliches Auftragswesen:</strong>
                              <br />RL 2014/23/EU, RL 2014/24/EU, RL 2014/25/EU, RL 2009/81/EG
                            </div>
                            <div>
                              <strong>Finanzdienstleistungen:</strong>
                              <br />RL 2013/36/EU, VO (EU) 575/2013, RL 2014/65/EU, RL 2016/97/EU
                            </div>
                            <div>
                              <strong>Geldwäscheprävention:</strong>
                              <br />RL (EU) 2015/849, VO (EU) 2015/847
                            </div>
                            <div>
                              <strong>Produktsicherheit:</strong>
                              <br />RL 2001/95/EG, VO (EG) 765/2008, VO (EU) 2019/1020
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Weitere geschützte Bereiche</h5>
                          <div class="space-y-3 text-sm text-purple-800">
                            <div>
                              <strong>Verkehrssicherheit:</strong>
                              <br />VO (EU) 2018/858, VO (EU) 2018/1139, RL 2008/68/EG
                            </div>
                            <div>
                              <strong>Umweltschutz:</strong>
                              <br />RL 2010/75/EU, VO (EG) 1013/2006, RL 2008/99/EG
                            </div>
                            <div>
                              <strong>Datenschutz:</strong>
                              <br />VO (EU) 2016/679 (DSGVO), RL (EU) 2016/680
                            </div>
                            <div>
                              <strong>Netzwerksicherheit:</strong>
                              <br />RL (EU) 2016/1148 (NIS), VO (EU) 2019/881
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-red-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-red-900 mb-4">Nationales Recht (§ 2 HinSchG)</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-2">Straftaten</h5>
                          <ul class="text-sm text-red-800 space-y-1">
                            <li>• Alle Straftaten nach StGB</li>
                            <li>• Nebenstrafrecht (z.B. Steuerrecht)</li>
                            <li>• Ordnungswidrigkeiten mit Bußgeld ab 20.000 €</li>
                            <li>• Versuch und Vorbereitung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-2">Arbeitsrecht</h5>
                          <ul class="text-sm text-red-800 space-y-1">
                            <li>• Verstöße gegen Mindestlohngesetz</li>
                            <li>• Arbeitszeitgesetz</li>
                            <li>• Arbeitsschutzgesetze</li>
                            <li>• Schwarzarbeit</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-2">Weitere Bereiche</h5>
                          <ul class="text-sm text-red-800 space-y-1">
                            <li>• Steuerrecht</li>
                            <li>• Sozialversicherungsrecht</li>
                            <li>• Kapitalmarktrecht</li>
                            <li>• Kartellrecht</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Unternehmensspezifische Anwendung" 
                  icon={Building2}
                >
                  <div class="space-y-6">
                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Größenabhängige Verpflichtungen</h4>
                      <div>
                        <Card class="border-2 border-red-200">
                          <CardContent class="p-6">
                            <h5 class="font-semibold text-red-900 mb-3 flex items-center">
                              <Building class="mr-2 h-5 w-5" ></Building>
                              250+ Beschäftigte
                            </h5>
                            <div class="space-y-2 text-sm text-red-800">
                              <div><strong>Seit:</strong> 2. Juli 2023</div>
                              <div><strong>Verpflichtung:</strong> Vollumfänglich</div>
                              <div><strong>Interne Meldestelle:</strong> Ja</div>
                              <div><strong>Externe Option:</strong> Ja</div>
                              <div><strong>Öffentliche Stellen:</strong> Alle</div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card class="border-2 border-orange-200">
                          <CardContent class="p-6">
                            <h5 class="font-semibold text-orange-900 mb-3 flex items-center">
                              <Building class="mr-2 h-5 w-5" ></Building>
                              50-249 Beschäftigte
                            </h5>
                            <div class="space-y-2 text-sm text-orange-800">
                              <div><strong>Seit:</strong> 17. Dezember 2023</div>
                              <div><strong>Verpflichtung:</strong> Grundsätzlich</div>
                              <div><strong>Interne Meldestelle:</strong> Wahlweise</div>
                              <div><strong>Externe Option:</strong> Ja</div>
                              <div><strong>Erleichterungen:</strong> Möglich</div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card class="border-2 border-green-200">
                          <CardContent class="p-6">
                            <h5 class="font-semibold text-green-900 mb-3 flex items-center">
                              <Building class="mr-2 h-5 w-5" ></Building>
                              Unter 50 Beschäftigte
                            </h5>
                            <div class="space-y-2 text-sm text-green-800">
                              <div><strong>Verpflichtung:</strong> Keine</div>
                              <div><strong>Freiwillige Einführung:</strong> Möglich</div>
                              <div><strong>Externe Option:</strong> Verfügbar</div>
                              <div><strong>Schutz:</strong> Bei Meldung dennoch gegeben</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div class="bg-indigo-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-indigo-900 mb-4">Besondere Branchen und Sektoren</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Finanzsektor</h5>
                          <div class="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul class="space-y-1 ml-4">
                              <li>• Zusätzliche Meldepflichten an BaFin</li>
                              <li>• MaRisk-Anforderungen beachten</li>
                              <li>• Geldwäsche-Compliance</li>
                              <li>• Whistleblower-Prämien nach WpHG</li>
                            </ul>
                            <div class="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Marktmanipulation, Insiderhandel, Compliance-Verstöße
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Gesundheitswesen</h5>
                          <div class="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul class="space-y-1 ml-4">
                              <li>• Patientenschutz hat Vorrang</li>
                              <li>• Schweigepflicht beachten</li>
                              <li>• Arzneimittelsicherheit</li>
                              <li>• Medizinprodukte-Sicherheit</li>
                            </ul>
                            <div class="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Patientengefährdung, Abrechnungsbetrug, Hygieneverstöße
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Automotive</h5>
                          <div class="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul class="space-y-1 ml-4">
                              <li>• Verkehrssicherheit</li>
                              <li>• Produkthaftung</li>
                              <li>• Emissions-Compliance</li>
                              <li>• Lieferketten-Compliance</li>
                            </ul>
                            <div class="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Sicherheitsmängel, Umweltverstöße, Kartellrecht
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Pharma</h5>
                          <div class="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul class="space-y-1 ml-4">
                              <li>• Arzneimittelsicherheit</li>
                              <li>• Klinische Studien</li>
                              <li>• Pharmacovigilance</li>
                              <li>• Internationale Compliance</li>
                            </ul>
                            <div class="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Patientensicherheit, Datenfälschung, Korruption
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-green-600 hover:bg-green-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 3: Hinweisgebersystem */}
            {currentSection === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                      <MessageSquare class="h-8 w-8 text-white" ></MessageSquare>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Hinweisgebersystem</h1>
                      <p class="text-xl text-gray-600">Aufbau und Struktur interner Meldestellen</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Interne Meldestellen (§§ 4-16 HinSchG)" 
                  icon={Building2}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Grundanforderungen (§ 4 HinSchG)</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Strukturelle Anforderungen</h5>
                          <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-purple-800">Unabhängigkeit</strong>
                                <p class="text-sm text-purple-700 mt-1">
                                  Organisatorische Trennung von operativen Geschäftsbereichen
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-purple-800">Fachliche Kompetenz</strong>
                                <p class="text-sm text-purple-700 mt-1">
                                  Rechtskenntnisse, Investigationsfähigkeiten, Branchenwissen
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-purple-800">Ausreichende Ressourcen</strong>
                                <p class="text-sm text-purple-700 mt-1">
                                  Personal, Budget, technische Ausstattung
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Funktionale Anforderungen</h5>
                          <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-purple-800">Erreichbarkeit</strong>
                                <p class="text-sm text-purple-700 mt-1">
                                  24/7 verfügbar, mehrere Kanäle, barrierefrei
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-purple-800">Vertraulichkeit</strong>
                                <p class="text-sm text-purple-700 mt-1">
                                  Anonyme Meldungen möglich, Datenschutz gewährleistet
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <CheckCircle class="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" ></CheckCircle>
                              <div>
                                <strong class="text-purple-800">Nachverfolgung</strong>
                                <p class="text-sm text-purple-700 mt-1">
                                  Dokumentation, Berichtswesen, Feedback-Mechanismus
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Organisationsmodelle</h4>
                      <div>
                        <Card class="border-2 border-blue-200">
                          <CardContent class="p-6">
                            <h5 class="font-semibold text-blue-900 mb-3 flex items-center">
                              <UserCheck class="mr-2 h-5 w-5" ></UserCheck>
                              Interne Besetzung
                            </h5>
                            <div class="space-y-2 text-sm text-blue-800">
                              <div><strong>Vorteile:</strong></div>
                              <ul class="space-y-1 ml-4">
                                <li>• Tiefes Unternehmenswissen</li>
                                <li>• Direkte Kommunikationswege</li>
                                <li>• Kostengünstiger</li>
                                <li>• Schnelle Reaktionszeiten</li>
                              </ul>
                              <div><strong>Nachteile:</strong></div>
                              <ul class="space-y-1 ml-4">
                                <li>• Interessenkonflikte möglich</li>
                                <li>• Vertrauensdefizit</li>
                                <li>• Befangenheitsrisiko</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <Card class="border-2 border-green-200">
                          <CardContent class="p-6">
                            <h5 class="font-semibold text-green-900 mb-3 flex items-center">
                              <ExternalLink class="mr-2 h-5 w-5" ></ExternalLink>
                              Externe Dienstleister
                            </h5>
                            <div class="space-y-2 text-sm text-green-800">
                              <div><strong>Vorteile:</strong></div>
                              <ul class="space-y-1 ml-4">
                                <li>• Hohe Unabhängigkeit</li>
                                <li>• Spezialisierte Expertise</li>
                                <li>• Höheres Vertrauen</li>
                                <li>• Professionelle Abwicklung</li>
                              </ul>
                              <div><strong>Nachteile:</strong></div>
                              <ul class="space-y-1 ml-4">
                                <li>• Höhere Kosten</li>
                                <li>• Weniger Unternehmenswissen</li>
                                <li>• Koordinationsaufwand</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <Card class="border-2 border-orange-200">
                          <CardContent class="p-6">
                            <h5 class="font-semibold text-orange-900 mb-3 flex items-center">
                              <Share2 class="mr-2 h-5 w-5" ></Share2>
                              Hybridmodell
                            </h5>
                            <div class="space-y-2 text-sm text-orange-800">
                              <div><strong>Vorteile:</strong></div>
                              <ul class="space-y-1 ml-4">
                                <li>• Best of both worlds</li>
                                <li>• Flexibilität</li>
                                <li>• Risikominimierung</li>
                                <li>• Skalierbarkeit</li>
                              </ul>
                              <div><strong>Nachteile:</strong></div>
                              <ul class="space-y-1 ml-4">
                                <li>• Komplexere Struktur</li>
                                <li>• Koordinationsaufwand</li>
                                <li>• Doppelkosten möglich</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Technische Infrastruktur" 
                  icon={Settings}
                >
                  <div class="space-y-6">
                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Meldekanäle (§ 8 HinSchG)</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Schriftliche Kanäle</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong class="text-blue-700">Online-Portal</strong>
                              <ul class="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Web-basierte Eingabemaske</li>
                                <li>• Datei-Upload-Funktionen</li>
                                <li>• Anonyme Kommunikation</li>
                                <li>• Mobile Optimierung</li>
                                <li>• Multi-Language Support</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong class="text-green-700">E-Mail-System</strong>
                              <ul class="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Verschlüsselte Übertragung</li>
                                <li>• Dedicated Postfach</li>
                                <li>• Automatische Bestätigung</li>
                                <li>• Spam-Schutz</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong class="text-purple-700">Briefkasten/Post</strong>
                              <ul class="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Physischer Briefkasten</li>
                                <li>• Externe Postadresse</li>
                                <li>• Anonyme Zusendung</li>
                                <li>• Sichere Aufbewahrung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Mündliche Kanäle</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong class="text-red-700">Hotline/Telefon</strong>
                              <ul class="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• 24/7 Erreichbarkeit</li>
                                <li>• Mehrsprachige Betreuung</li>
                                <li>• Anonyme Anrufe möglich</li>
                                <li>• Professionelle Gesprächsführung</li>
                                <li>• Aufzeichnung nach Einverständnis</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-yellow-500">
                              <strong class="text-yellow-700">Persönliche Gespräche</strong>
                              <ul class="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Terminvereinbarung</li>
                                <li>• Neutrale Räumlichkeiten</li>
                                <li>• Vertrauensperson möglich</li>
                                <li>• Protokollierung</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-indigo-500">
                              <strong class="text-indigo-700">Video-Konferenz</strong>
                              <ul class="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Sichere Plattformen</li>
                                <li>• Ende-zu-Ende-Verschlüsselung</li>
                                <li>• Aufzeichnung optional</li>
                                <li>• Flexible Termingestaltung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Sicherheitsanforderungen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Technische Sicherheit</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• SSL/TLS-Verschlüsselung</li>
                            <li>• Ende-zu-Ende-Verschlüsselung</li>
                            <li>• Sichere Authentifizierung</li>
                            <li>• Penetrationstests</li>
                            <li>• Backup-Strategien</li>
                            <li>• Incident Response Plan</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Datenschutz</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• DSGVO-Konformität</li>
                            <li>• Privacy by Design</li>
                            <li>• Datenminimierung</li>
                            <li>• Zweckbindung</li>
                            <li>• Löschkonzepte</li>
                            <li>• Betroffenenrechte</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Operative Sicherheit</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• Zugriffskontrollen</li>
                            <li>• Audit-Logs</li>
                            <li>• Segregation of Duties</li>
                            <li>• Notfallpläne</li>
                            <li>• Schulungen</li>
                            <li>• Regelmäßige Reviews</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Marktübersicht: Software-Lösungen für Hinweisgebersysteme</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                          <h5 class="font-semibold text-blue-900 mb-3">Enterprise-Lösungen</h5>
                          <div>
                            <div>
                              <strong class="text-blue-800">Führende Anbieter:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• IntegrityLine (End-to-End Compliance)</li>
                                <li>• EQS Group (Compliance Cloud)</li>
                                <li>• NAVEX Global (Ethics Point)</li>
                                <li>• SAP Ariba (Risk Management)</li>
                                <li>• Vault Platform (Advanced Analytics)</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-blue-800">Kernfunktionen:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Multi-Channel Intake (Web, App, Hotline)</li>
                                <li>• Workflow Management</li>
                                <li>• Reporting & Analytics</li>
                                <li>• API-Integration</li>
                                <li>• Compliance Dashboard</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                          <h5 class="font-semibold text-green-900 mb-3">KMU-Lösungen</h5>
                          <div>
                            <div>
                              <strong class="text-green-800">Kosteneffiziente Optionen:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Whistle-Cloud (ab 99€/Monat)</li>
                                <li>• ComplianceDesktop (Modular)</li>
                                <li>• FaceUp (User-friendly)</li>
                                <li>• AllVoices (AI-powered)</li>
                                <li>• Whispli (Blockchain-secured)</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-green-800">Auswahlkriterien:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Skalierbarkeit</li>
                                <li>• Benutzerfreundlichkeit</li>
                                <li>• Preis-Leistungs-Verhältnis</li>
                                <li>• Deutscher Support</li>
                                <li>• DSGVO-Konformität</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-purple-500">
                          <h5 class="font-semibold text-purple-900 mb-3">Technologie-Trends 2025</h5>
                          <div>
                            <div>
                              <strong class="text-purple-800">KI & Machine Learning:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Sentiment Analysis</li>
                                <li>• Pattern Recognition</li>
                                <li>• Risk Scoring</li>
                                <li>• Auto-Kategorisierung</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-purple-800">Blockchain-Integration:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Unveränderliche Logs</li>
                                <li>• Smart Contracts</li>
                                <li>• Dezentrale Speicherung</li>
                                <li>• Transparenz-Features</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-purple-800">Mobile & Voice:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Voice-to-Text Meldungen</li>
                                <li>• Biometrische Sicherheit</li>
                                <li>• Offline-Funktionalität</li>
                                <li>• AR/VR Training</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Implementierungs-Roadmap für IT-Systeme</h4>
                      <div class="space-y-4">
                        <div class="relative">
                          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-300"></div>
                          <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                              <div class="flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                                Phase 1
                              </div>
                              <div class="flex-1 bg-white p-4 rounded-lg">
                                <h5 class="font-semibold text-yellow-900 mb-2">Anforderungsanalyse (2-4 Wochen)</h5>
                                <ul class="text-sm text-yellow-700 space-y-1">
                                  <li>• Stakeholder-Workshops durchführen</li>
                                  <li>• Prozesse dokumentieren</li>
                                  <li>• Systemanforderungen definieren</li>
                                  <li>• Anbietervergleich erstellen</li>
                                </ul>
                              </div>
                            </div>
                            <div class="flex items-start space-x-4">
                              <div class="flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                                Phase 2
                              </div>
                              <div class="flex-1 bg-white p-4 rounded-lg">
                                <h5 class="font-semibold text-yellow-900 mb-2">Systemauswahl & Setup (3-6 Wochen)</h5>
                                <ul class="text-sm text-yellow-700 space-y-1">
                                  <li>• Proof of Concept durchführen</li>
                                  <li>• Vertragsverhandlungen</li>
                                  <li>• Technische Installation</li>
                                  <li>• Grundkonfiguration</li>
                                </ul>
                              </div>
                            </div>
                            <div class="flex items-start space-x-4">
                              <div class="flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                                Phase 3
                              </div>
                              <div class="flex-1 bg-white p-4 rounded-lg">
                                <h5 class="font-semibold text-yellow-900 mb-2">Integration & Testing (4-8 Wochen)</h5>
                                <ul class="text-sm text-yellow-700 space-y-1">
                                  <li>• API-Integrationen umsetzen</li>
                                  <li>• Sicherheitstests durchführen</li>
                                  <li>• User Acceptance Testing</li>
                                  <li>• Performance-Optimierung</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Personalausstattung und Kompetenzen" 
                  icon={Users}
                >
                  <div class="space-y-6">
                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Personelle Anforderungen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Mindestausstattung</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <h6 class="font-semibold text-orange-800 mb-2">Kleine Unternehmen (50-249 MA)</h6>
                              <ul class="text-sm text-orange-700 space-y-1">
                                <li>• 1 hauptverantwortliche Person (mind. 50% Kapazität)</li>
                                <li>• Vertretungsregelung</li>
                                <li>• Externe Unterstützung möglich</li>
                                <li>• Schulungen erforderlich</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <h6 class="font-semibold text-orange-800 mb-2">Große Unternehmen (250+ MA)</h6>
                              <ul class="text-sm text-orange-700 space-y-1">
                                <li>• Dedicated Team empfohlen</li>
                                <li>• Spezialisierung nach Fachbereichen</li>
                                <li>• 24/7 Bereitschaft</li>
                                <li>• Professionelle Investigatoren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Kernkompetenzen</h5>
                          <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                              <Scale class="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" ></Scale>
                              <div>
                                <strong class="text-orange-800">Rechtskenntnisse</strong>
                                <p class="text-sm text-orange-700 mt-1">
                                  HinSchG, DSGVO, Strafrecht, Arbeitsrecht, branchenspezifische Regelungen
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <Search class="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" ></Search>
                              <div>
                                <strong class="text-orange-800">Investigative Fähigkeiten</strong>
                                <p class="text-sm text-orange-700 mt-1">
                                  Sachverhaltsaufklärung, Beweissicherung, Befragungstechniken
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <MessageSquare class="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" ></MessageSquare>
                              <div>
                                <strong class="text-orange-800">Kommunikationsfähigkeiten</strong>
                                <p class="text-sm text-orange-700 mt-1">
                                  Gesprächsführung, Empathie, Vertraulichkeit, Mehrsprachigkeit
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Qualifikationsprofil</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Juristische Qualifikation</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Volljurist bevorzugt</li>
                            <li>• Compliance-Zertifizierung</li>
                            <li>• Fortbildungen HinSchG</li>
                            <li>• Branchenerfahrung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Investigative Ausbildung</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Fraud Investigation</li>
                            <li>• Digital Forensics</li>
                            <li>• Interview-Techniken</li>
                            <li>• Krisenmanagement</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Soft Skills</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Vertrauenswürdigkeit</li>
                            <li>• Stressresistenz</li>
                            <li>• Kulturelle Sensibilität</li>
                            <li>• Verschwiegenheit</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Technische Skills</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• IT-Grundkenntnisse</li>
                            <li>• Case Management</li>
                            <li>• Datenanalyse</li>
                            <li>• Berichtswesen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-purple-600 hover:bg-purple-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 4: Meldeverfahren */}
            {currentSection === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl">
                      <Send class="h-8 w-8 text-white" ></Send>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Meldeverfahren</h1>
                      <p class="text-xl text-gray-600">Prozesse und Verfahrensschritte</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Meldungseingang und Erstbewertung" 
                  icon={Mail}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-red-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-red-900 mb-4">Verfahrensablauf (§§ 9-12 HinSchG)</h4>
                      <div class="grid grid-cols-1 gap-6">
                        <div class="space-y-4">
                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-red-900 mb-2">Meldungseingang (innerhalb 24h)</h5>
                              <div class="bg-white p-4 rounded-lg">
                                <div>
                                  <div>
                                    <strong class="text-red-800">Automatische Bestätigung:</strong>
                                    <ul class="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Eindeutige Vorgangsnummer</li>
                                      <li>• Zeitstempel</li>
                                      <li>• Nächste Schritte</li>
                                      <li>• Kontaktmöglichkeiten</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-red-800">Formelle Prüfung:</strong>
                                    <ul class="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Vollständigkeit</li>
                                      <li>• Verständlichkeit</li>
                                      <li>• Anwendungsbereich</li>
                                      <li>• Zuständigkeit</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-red-800">Dokumentation:</strong>
                                    <ul class="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Case Management System</li>
                                      <li>• Metadaten-Erfassung</li>
                                      <li>• Klassifizierung</li>
                                      <li>• Vertraulichkeitsstufe</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-red-900 mb-2">Erstbewertung (innerhalb 7 Tagen)</h5>
                              <div class="bg-white p-4 rounded-lg">
                                <div>
                                  <div>
                                    <strong class="text-red-800">Inhaltliche Prüfung:</strong>
                                    <ul class="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Rechtlicher Anwendungsbereich</li>
                                      <li>• Erheblichkeit des Verstoßes</li>
                                      <li>• Glaubwürdigkeit der Angaben</li>
                                      <li>• Verfügbare Beweise</li>
                                      <li>• Gefährdungspotential</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-red-800">Kategorisierung:</strong>
                                    <ul class="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Prioritätsstufe (hoch/mittel/niedrig)</li>
                                      <li>• Fachbereich</li>
                                      <li>• Betroffene Bereiche</li>
                                      <li>• Zeitkritische Maßnahmen</li>
                                      <li>• Eskalationsbedarf</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-red-900 mb-2">Feedback an Hinweisgeber (innerhalb 7 Tagen)</h5>
                              <div class="bg-white p-4 rounded-lg">
                                <div class="space-y-3">
                                  <div>
                                    <strong class="text-red-800">Pflichtinhalte der Bestätigung (§ 11 HinSchG):</strong>
                                    <ul class="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Bestätigung des Meldungseingangs</li>
                                      <li>• Information über weitere Verfahrensschritte</li>
                                      <li>• Kontaktmöglichkeiten für Rückfragen</li>
                                      <li>• Hinweise auf Schutzmaßnahmen</li>
                                      <li>• Verweis auf externe Meldestellen</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-red-800">Bei offensichtlich unbegründeten Meldungen:</strong>
                                    <ul class="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Begründete Ablehnung</li>
                                      <li>• Hinweis auf alternative Wege</li>
                                      <li>• Beratungsangebote</li>
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
                </ExpandableSection>

                <ExpandableSection 
                  title="Untersuchungsverfahren" 
                  icon={Search}
                >
                  <div class="space-y-6">
                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Investigationsprozess</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Untersuchungsplanung</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Untersuchungsumfang definieren:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Zu klärende Sachverhalte</li>
                                <li>• Zeitrahmen der Untersuchung</li>
                                <li>• Beteiligte Personen</li>
                                <li>• Betroffene Systeme/Bereiche</li>
                                <li>• Erforderliche Expertise</li>
                                <li>• Ressourcenplanung</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Untersuchungsteam:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Lead Investigator</li>
                                <li>• Fachexperten</li>
                                <li>• IT-Forensiker (bei Bedarf)</li>
                                <li>• Externe Berater (bei Bedarf)</li>
                                <li>• Rechtsberater</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Beweissicherung</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Digitale Beweise:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• E-Mail-Verkehr</li>
                                <li>• Systemlogs</li>
                                <li>• Datenbankauszüge</li>
                                <li>• Screenshots</li>
                                <li>• Forensische Images</li>
                                <li>• Chain of Custody</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Dokumentare Beweise:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Verträge und Vereinbarungen</li>
                                <li>• Rechnungen und Belege</li>
                                <li>• Protokolle und Berichte</li>
                                <li>• Organisationsanweisungen</li>
                                <li>• Zeugenaussagen</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Befragungen und Interviews</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Hinweisgeber-Interview</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• Vertiefende Sachverhaltsaufklärung</li>
                            <li>• Nachfragen zu Unstimmigkeiten</li>
                            <li>• Zusätzliche Beweise</li>
                            <li>• Schutzbedarfsermittlung</li>
                            <li>• Vertraulichkeitsvereinbarung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Zeugen-Befragungen</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• Sachverhaltsbestätigung</li>
                            <li>• Weitere Beobachtungen</li>
                            <li>• Zeitliche Einordnung</li>
                            <li>• Persönliche Wahrnehmungen</li>
                            <li>• Dokumentation</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Beschuldigten-Anhörung</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• Rechtliches Gehör</li>
                            <li>• Stellungnahme zu Vorwürfen</li>
                            <li>• Entlastungsbeweise</li>
                            <li>• Rechtsberatung möglich</li>
                            <li>• Protokollführung</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="bg-indigo-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-indigo-900 mb-4">Dokumentationspflichten im Detail</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Gesetzliche Dokumentationspflichten</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-indigo-800">§ 11 HinSchG - Grundlegende Pflichten:</strong>
                              <ul class="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Vollständige Erfassung aller Meldungen</li>
                                <li>• Chronologische Dokumentation des Verfahrensverlaufs</li>
                                <li>• Speicherung der Kommunikation mit Hinweisgeber</li>
                                <li>• Aufbewahrung für mind. 3 Jahre nach Abschluss</li>
                                <li>• DSGVO-konforme Löschung nach Fristablauf</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-indigo-800">Pflichtinhalte der Dokumentation:</strong>
                              <ul class="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Eingangsdatum und -uhrzeit der Meldung</li>
                                <li>• Art des Meldekanals (schriftlich/mündlich/digital)</li>
                                <li>• Inhalt der Meldung (anonymisiert)</li>
                                <li>• Durchgeführte Maßnahmen und Zeitpunkte</li>
                                <li>• Ergebnisse der Untersuchung</li>
                                <li>• Kommunikation mit Behörden</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Praktische Umsetzung der Dokumentation</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-indigo-800">Dokumentationsstruktur:</strong>
                              <ul class="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Eindeutige Fallnummern-Vergabe</li>
                                <li>• Standardisierte Erfassungsformulare</li>
                                <li>• Digitales Case Management System</li>
                                <li>• Revisionssichere Archivierung</li>
                                <li>• Zugriffsprotokollierung</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-indigo-800">Datenschutz-Anforderungen:</strong>
                              <ul class="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Minimale Speicherung personenbezogener Daten</li>
                                <li>• Verschlüsselung sensibler Informationen</li>
                                <li>• Berechtigungskonzept mit Need-to-know-Prinzip</li>
                                <li>• Regelmäßige Datenschutz-Folgenabschätzung</li>
                                <li>• Automatisierte Löschfristen</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-6 bg-red-100 p-4 rounded-lg">
                        <h5 class="font-semibold text-red-900 mb-3 flex items-center">
                          <AlertTriangle class="h-5 w-5 mr-2" ></AlertTriangle>
                          Kritische Dokumentationsfehler vermeiden
                        </h5>
                        <div>
                          <div class="bg-white p-3 rounded">
                            <strong class="text-red-800 text-sm">Unvollständige Dokumentation:</strong>
                            <ul class="text-xs text-red-700 mt-1 space-y-1">
                              <li>• Fehlende Zeitstempel</li>
                              <li>• Lückenhafte Verfahrensschritte</li>
                              <li>• Vergessene Anhänge/Beweise</li>
                              <li>• Unklare Verantwortlichkeiten</li>
                            </ul>
                          </div>
                          <div class="bg-white p-3 rounded">
                            <strong class="text-red-800 text-sm">Datenschutzverstöße:</strong>
                            <ul class="text-xs text-red-700 mt-1 space-y-1">
                              <li>• Unnötige Speicherung von Namen</li>
                              <li>• Fehlende Anonymisierung</li>
                              <li>• Zu breite Zugriffsrechte</li>
                              <li>• Versäumte Löschfristen</li>
                            </ul>
                          </div>
                          <div class="bg-white p-3 rounded">
                            <strong class="text-red-800 text-sm">Formale Mängel:</strong>
                            <ul class="text-xs text-red-700 mt-1 space-y-1">
                              <li>• Fehlende Unterschriften</li>
                              <li>• Nachträgliche Änderungen</li>
                              <li>• Unklare Formulierungen</li>
                              <li>• Fehlende Versionskontrolle</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="mt-6 bg-green-100 p-4 rounded-lg">
                        <h5 class="font-semibold text-green-900 mb-3 flex items-center">
                          <CheckCircle class="h-5 w-5 mr-2" ></CheckCircle>
                          Best Practices für die Dokumentation
                        </h5>
                        <div>
                          <div>
                            <strong class="text-green-800">Technische Lösungen:</strong>
                            <ul class="text-sm text-green-700 mt-2 space-y-1">
                              <li>• Automatisierte Zeitstempel und Logs</li>
                              <li>• Digitale Signatur für Unveränderbarkeit</li>
                              <li>• Backup-Strategie mit Redundanz</li>
                              <li>• Integration in Compliance-Management-System</li>
                              <li>• API-Schnittstellen für Reporting</li>
                            </ul>
                          </div>
                          <div>
                            <strong class="text-green-800">Organisatorische Maßnahmen:</strong>
                            <ul class="text-sm text-green-700 mt-2 space-y-1">
                              <li>• Klare Dokumentationsrichtlinien</li>
                              <li>• Regelmäßige Schulungen für Bearbeiter</li>
                              <li>• Vier-Augen-Prinzip bei kritischen Fällen</li>
                              <li>• Monatliche Qualitätschecks</li>
                              <li>• Jährliche externe Audits</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Besondere Verfahrensarten</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Eilverfahren</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <strong class="text-yellow-800">Auslöser:</strong>
                            <ul class="text-sm text-yellow-700 mt-2 space-y-1">
                              <li>• Akute Gefahr für Leben/Gesundheit</li>
                              <li>• Erhebliche Umweltschäden</li>
                              <li>• Beweisvernichtungsgefahr</li>
                              <li>• Fortsetzung der Rechtsverletzung</li>
                            </ul>
                            <strong class="text-yellow-800 mt-3 block">Maßnahmen:</strong>
                            <ul class="text-sm text-yellow-700 mt-1 space-y-1">
                              <li>• Sofortige Beweissicherung</li>
                              <li>• Vorläufige Schutzmaßnahmen</li>
                              <li>• 24h-Reaktionszeit</li>
                              <li>• Eskalation an Geschäftsführung</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Komplexe Sachverhalte</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <strong class="text-yellow-800">Charakteristika:</strong>
                            <ul class="text-sm text-yellow-700 mt-2 space-y-1">
                              <li>• Mehrere Rechtsbereiche betroffen</li>
                              <li>• Umfangreiche Beweislage</li>
                              <li>• Viele Beteiligte</li>
                              <li>• Technische Komplexität</li>
                            </ul>
                            <strong class="text-yellow-800 mt-3 block">Besonderheiten:</strong>
                            <ul class="text-sm text-yellow-700 mt-1 space-y-1">
                              <li>• Erweiterte Untersuchungszeit</li>
                              <li>• Spezialisierte Ermittler</li>
                              <li>• Externe Unterstützung</li>
                              <li>• Zwischenberichte</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-red-600 hover:bg-red-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 5: Schutzmaßnahmen */}
            {currentSection === 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl">
                      <Shield class="h-8 w-8 text-white" ></Shield>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Schutzmaßnahmen</h1>
                      <p class="text-xl text-gray-600">Schutz vor Repressalien und Vergeltungsmaßnahmen</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Verbot von Repressalien (§§ 26-36 HinSchG)" 
                  icon={Lock}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Definition und Umfang von Repressalien</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Arbeitsrechtliche Repressalien</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong class="text-red-700">Beendigung des Arbeitsverhältnisses:</strong>
                              <ul class="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Kündigung (ordentlich/außerordentlich)</li>
                                <li>• Aufhebungsverträge unter Druck</li>
                                <li>• Nicht-Verlängerung befristeter Verträge</li>
                                <li>• Beendigung von Probezeiten</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-orange-500">
                              <strong class="text-orange-700">Verschlechterung der Arbeitsbedingungen:</strong>
                              <ul class="text-sm text-orange-600 mt-2 space-y-1">
                                <li>• Versetzungen (Arbeitsplatz/Abteilung)</li>
                                <li>• Degradierung/Gehaltskürzung</li>
                                <li>• Entzug von Kompetenzen</li>
                                <li>• Schlechtere Arbeitszeitmodelle</li>
                                <li>• Verweigerung von Fortbildungen</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Weitere Repressalien</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong class="text-purple-700">Persönliche Benachteiligungen:</strong>
                              <ul class="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Mobbing und Ausgrenzung</li>
                                <li>• Schlechte Arbeitszeugnisse</li>
                                <li>• Negative Referenzen</li>
                                <li>• Soziale Isolation</li>
                                <li>• Rufschädigung</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong class="text-blue-700">Rechtliche Maßnahmen:</strong>
                              <ul class="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Strafanzeigen ohne Grund</li>
                                <li>• Zivilrechtliche Klagen</li>
                                <li>• Disziplinarmaßnahmen</li>
                                <li>• Einschüchterung durch Anwälte</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-red-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-red-900 mb-4">Beweislastumkehr (§ 29 HinSchG)</h4>
                      <div>
                        <div class="bg-white p-4 rounded-lg">
                          <h5 class="font-semibold text-red-900 mb-2 flex items-center">
                            <Scale class="mr-2 h-5 w-5" ></Scale>
                            Grundsatz
                          </h5>
                          <p class="text-sm text-red-800 mb-3">
                            Der Arbeitgeber muss beweisen, dass die nachteilige Maßnahme 
                            NICHT auf die Meldung zurückzuführen ist.
                          </p>
                          <ul class="text-sm text-red-700 space-y-1">
                            <li>• Umkehr der normalen Beweislast</li>
                            <li>• Erhebliche Erleichterung für Hinweisgeber</li>
                            <li>• Präventive Wirkung für Arbeitgeber</li>
                          </ul>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                          <h5 class="font-semibold text-red-900 mb-2 flex items-center">
                            <Clock class="mr-2 h-5 w-5" ></Clock>
                            Zeitlicher Zusammenhang
                          </h5>
                          <p class="text-sm text-red-800 mb-3">
                            Indizwirkung bei zeitlicher Nähe zwischen Meldung und 
                            nachteiliger Maßnahme.
                          </p>
                          <ul class="text-sm text-red-700 space-y-1">
                            <li>• Besonders starke Indizwirkung bei unmittelbarer Nähe</li>
                            <li>• Auch längere Zeiträume möglich</li>
                            <li>• Einzelfallbetrachtung erforderlich</li>
                          </ul>
                        </div>
                        <div class="bg-white p-4 rounded-lg">
                          <h5 class="font-semibold text-red-900 mb-2 flex items-center">
                            <CheckCircle class="mr-2 h-5 w-5" ></CheckCircle>
                            Entlastungsbeweis
                          </h5>
                          <p class="text-sm text-red-800 mb-3">
                            Arbeitgeber muss sachliche Gründe für die Maßnahme nachweisen.
                          </p>
                          <ul class="text-sm text-red-700 space-y-1">
                            <li>• Dokumentierte Leistungsprobleme</li>
                            <li>• Wirtschaftliche Notwendigkeit</li>
                            <li>• Organisatorische Gründe</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Präventive Schutzmaßnahmen" 
                  icon={Eye}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Organisatorische Schutzmaßnahmen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Vertraulichkeitsschutz</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Identitätsschutz:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Anonyme Meldungen ermöglichen</li>
                                <li>• Pseudonymisierung von Daten</li>
                                <li>• Beschränkung des Empfängerkreises</li>
                                <li>• Separating Walls zwischen Bereichen</li>
                                <li>• Clean Team Verfahren</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Informationssicherheit:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Verschlüsselung aller Kommunikation</li>
                                <li>• Sichere Aktenführung</li>
                                <li>• Zugriffskontrollen</li>
                                <li>• Audit-Protokolle</li>
                                <li>• Regelmäßige Sicherheitsreviews</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Früherkennung von Repressalien</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Monitoring-Systeme:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• HR-Analytics für auffällige Muster</li>
                                <li>• Regelmäßige Mitarbeiterbefragungen</li>
                                <li>• 360-Grad-Feedback-Systeme</li>
                                <li>• Beschwerdekanäle</li>
                                <li>• Exit-Interviews</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Präventive Interventionen:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Sensibilisierungsschulungen</li>
                                <li>• Führungskräfte-Coaching</li>
                                <li>• Mediation bei Konflikten</li>
                                <li>• Versetzungen bei Bedarf</li>
                                <li>• Psychologische Betreuung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Technische Schutzmaßnahmen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Anonymisierungstechnologien</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Tor-Browser-Integration</li>
                            <li>• Anonyme E-Mail-Services</li>
                            <li>• VPN-Verbindungen</li>
                            <li>• Blockchain-basierte Systeme</li>
                            <li>• Zero-Knowledge-Protokolle</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Sichere Kommunikation</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Ende-zu-Ende-Verschlüsselung</li>
                            <li>• Perfect Forward Secrecy</li>
                            <li>• Sichere Messenger-Systeme</li>
                            <li>• Verschlüsselte Telefonie</li>
                            <li>• Sichere Datei-Übertragung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Datenminimierung</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Automatische Löschfristen</li>
                            <li>• Datenklassifizierung</li>
                            <li>• Need-to-know-Prinzip</li>
                            <li>• Pseudonymisierung</li>
                            <li>• Differential Privacy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Reaktive Schutzmaßnahmen" 
                  icon={AlertTriangle}
                >
                  <div class="space-y-6">
                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Sofortmaßnahmen bei Repressalien</h4>
                      <div class="grid grid-cols-1 gap-6">
                        <div class="space-y-4">
                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-orange-900 mb-2">Akute Intervention (innerhalb 24h)</h5>
                              <div class="bg-white p-4 rounded-lg">
                                <div>
                                  <div>
                                    <strong class="text-orange-800">Schutzmaßnahmen:</strong>
                                    <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Vorläufige Suspendierung des Verursachers</li>
                                      <li>• Arbeitsplatzwechsel für Hinweisgeber</li>
                                      <li>• Kommunikationsverbot</li>
                                      <li>• Sicherstellung von Beweisen</li>
                                      <li>• Einschaltung der Rechtsabteilung</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-orange-800">Dokumentation:</strong>
                                    <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Detaillierte Sachverhaltsaufnahme</li>
                                      <li>• Zeugenaussagen sichern</li>
                                      <li>• Chronologie erstellen</li>
                                      <li>• Beweismittel sammeln</li>
                                      <li>• Incident Report erstellen</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-orange-900 mb-2">Untersuchung und Bewertung (1-2 Wochen)</h5>
                              <div class="bg-white p-4 rounded-lg">
                                <div>
                                  <div>
                                    <strong class="text-orange-800">Investigative Maßnahmen:</strong>
                                    <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Befragung aller Beteiligten</li>
                                      <li>• Analyse der Zeitabläufe</li>
                                      <li>• Motivanalyse</li>
                                      <li>• Rechtliche Bewertung</li>
                                      <li>• Schadensermittlung</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-orange-800">Entscheidungsfindung:</strong>
                                    <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Bewertung der Beweislage</li>
                                      <li>• Verhältnismäßigkeitsprüfung</li>
                                      <li>• Eskalationsmatrix anwenden</li>
                                      <li>• Sanktionsentscheidung</li>
                                      <li>• Präventionsmaßnahmen definieren</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-orange-900 mb-2">Maßnahmenumsetzung und Follow-up</h5>
                              <div class="bg-white p-4 rounded-lg">
                                <div>
                                  <div>
                                    <strong class="text-orange-800">Sanktionen:</strong>
                                    <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Abmahnung</li>
                                      <li>• Versetzung</li>
                                      <li>• Kündigung</li>
                                      <li>• Schadensersatzforderung</li>
                                      <li>• Strafanzeige</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-orange-800">Wiedergutmachung:</strong>
                                    <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Rücknahme nachteiliger Maßnahmen</li>
                                      <li>• Schadensersatz</li>
                                      <li>• Richtigstellung</li>
                                      <li>• Entschuldigung</li>
                                      <li>• Rehabilitierung</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong class="text-orange-800">Monitoring:</strong>
                                    <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Nachbeobachtung</li>
                                      <li>• Regelmäßige Gespräche</li>
                                      <li>• Wirksamkeitskontrolle</li>
                                      <li>• Lessons Learned</li>
                                      <li>• Systmanpassungen</li>
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
                </ExpandableSection>

                <ExpandableSection 
                  title="Praxisfälle und Fallbeispiele" 
                  icon={Briefcase}
                >
                  <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Reale Fallbeispiele aus der Praxis</h4>
                      <div class="grid grid-cols-1 gap-6">
                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-purple-600">
                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                <Factory class="h-6 w-6 text-purple-600" ></Factory>
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-purple-900 mb-2">Fall 1: Produktionsmängel in der Automobilindustrie</h5>
                              <div class="space-y-3">
                                <div class="bg-purple-50 p-4 rounded">
                                  <strong class="text-purple-800">Sachverhalt:</strong>
                                  <p class="text-sm text-purple-700 mt-1">
                                    Ein Qualitätsingenieur meldet intern systematische Manipulationen bei Abgaswerten. 
                                    Nach der Meldung wird er in eine andere Abteilung versetzt und erhält negative Leistungsbewertungen.
                                  </p>
                                </div>
                                <div class="bg-green-50 p-4 rounded">
                                  <strong class="text-green-800">Rechtliche Bewertung:</strong>
                                  <ul class="text-sm text-green-700 mt-1 space-y-1">
                                    <li>• Versetzung und negative Bewertung = Repressalie gem. § 26 HinSchG</li>
                                    <li>• Beweislastumkehr greift: Arbeitgeber kann keine sachlichen Gründe nachweisen</li>
                                    <li>• Schadensersatzanspruch des Hinweisgebers bejaht</li>
                                  </ul>
                                </div>
                                <div class="bg-blue-50 p-4 rounded">
                                  <strong class="text-blue-800">Konsequenzen:</strong>
                                  <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                    <li>• Bußgeld von 45.000 EUR gegen Unternehmen</li>
                                    <li>• Persönliche Haftung des Abteilungsleiters</li>
                                    <li>• Wiedereinstellung des Mitarbeiters in alte Position</li>
                                    <li>• Entschädigung in Höhe von 6 Monatsgehältern</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-orange-600">
                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <Building2 class="h-6 w-6 text-orange-600" ></Building2>
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-orange-900 mb-2">Fall 2: Bilanzmanipulation im Finanzsektor</h5>
                              <div class="space-y-3">
                                <div class="bg-orange-50 p-4 rounded">
                                  <strong class="text-orange-800">Sachverhalt:</strong>
                                  <p class="text-sm text-orange-700 mt-1">
                                    Eine Compliance-Mitarbeiterin deckt systematische Bilanzfälschungen auf und meldet diese anonym. 
                                    Ihre Identität wird durch IT-Forensik aufgedeckt und öffentlich gemacht. Sie wird daraufhin gemobbt 
                                    und schließlich gekündigt.
                                  </p>
                                </div>
                                <div class="bg-green-50 p-4 rounded">
                                  <strong class="text-green-800">Rechtliche Bewertung:</strong>
                                  <ul class="text-sm text-green-700 mt-1 space-y-1">
                                    <li>• Verletzung der Vertraulichkeitspflicht gem. § 15 HinSchG</li>
                                    <li>• Mobbing und Kündigung = schwere Repressalien</li>
                                    <li>• Anonymität muss auch bei internen Ermittlungen gewahrt bleiben</li>
                                  </ul>
                                </div>
                                <div class="bg-blue-50 p-4 rounded">
                                  <strong class="text-blue-800">Konsequenzen:</strong>
                                  <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                    <li>• Bußgeld von 50.000 EUR (Höchstsatz)</li>
                                    <li>• Strafrechtliche Ermittlungen gegen Geschäftsführung</li>
                                    <li>• Einstweilige Verfügung gegen Kündigung</li>
                                    <li>• Öffentliche Entschuldigung und Rehabilitation</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-green-600">
                          <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <Heart class="h-6 w-6 text-green-600" ></Heart>
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5 class="font-semibold text-green-900 mb-2">Fall 3: Hygienemängel im Gesundheitswesen</h5>
                              <div class="space-y-3">
                                <div class="bg-green-50 p-4 rounded">
                                  <strong class="text-green-800">Sachverhalt:</strong>
                                  <p class="text-sm text-green-700 mt-1">
                                    Eine Krankenpflegerin meldet über das interne System wiederholt Hygienemängel und 
                                    Personalmangel, die zu Patientengefährdungen führen. Das Management reagiert mit 
                                    Dienstplanänderungen und Nachtschichten als "Strafe".
                                  </p>
                                </div>
                                <div class="bg-yellow-50 p-4 rounded">
                                  <strong class="text-yellow-800">Rechtliche Bewertung:</strong>
                                  <ul class="text-sm text-yellow-700 mt-1 space-y-1">
                                    <li>• Verschlechterung der Arbeitsbedingungen = Repressalie</li>
                                    <li>• Meldung betrifft öffentliches Interesse (Patientenschutz)</li>
                                    <li>• Verstärkter Schutz bei Gesundheitsgefährdung Dritter</li>
                                  </ul>
                                </div>
                                <div class="bg-blue-50 p-4 rounded">
                                  <strong class="text-blue-800">Positive Lösung:</strong>
                                  <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                    <li>• Mediation führt zu konstruktiver Lösung</li>
                                    <li>• Einrichtung eines Qualitätszirkels</li>
                                    <li>• Hinweisgeberin wird Qualitätsbeauftragte</li>
                                    <li>• Systematische Verbesserung der Hygiene</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Lessons Learned und Best Practices</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Häufige Fehlerquellen</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="space-y-3">
                              <li class="flex items-start space-x-2">
                                <X class="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-gray-800 text-sm">Identität preisgeben</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Auch bei "Vertrauenspersonen" absolute Vertraulichkeit wahren
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <X class="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-gray-800 text-sm">Subtile Repressalien</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Auch "kleine" Benachteiligungen sind verboten
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <X class="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-gray-800 text-sm">Dokumentationsmängel</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Fehlende Beweise erschweren Verteidigung
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Erfolgreiche Ansätze</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="space-y-3">
                              <li class="flex items-start space-x-2">
                                <Check class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></Check>
                                <div>
                                  <strong class="text-gray-800 text-sm">Speak-Up-Kultur</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Offene Fehlerkultur verhindert Eskalationen
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Check class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></Check>
                                <div>
                                  <strong class="text-gray-800 text-sm">Schnelle Reaktion</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Zeitnahe Bearbeitung zeigt Ernsthaftigkeit
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Check class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></Check>
                                <div>
                                  <strong class="text-gray-800 text-sm">Transparenz</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Kommunikation über Maßnahmen schafft Vertrauen
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Präventionsstrategien</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="space-y-3">
                              <li class="flex items-start space-x-2">
                                <Shield class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Shield>
                                <div>
                                  <strong class="text-gray-800 text-sm">Tone from the Top</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Führung muss Null-Toleranz vorleben
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Shield class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Shield>
                                <div>
                                  <strong class="text-gray-800 text-sm">Regelmäßige Audits</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Systematische Überprüfung der Prozesse
                                  </p>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Shield class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Shield>
                                <div>
                                  <strong class="text-gray-800 text-sm">Externe Beratung</strong>
                                  <p class="text-xs text-gray-600 mt-1">
                                    Neutrale Perspektive hilft bei Blindspots
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Kosten-Nutzen-Analyse von Schutzmaßnahmen</h4>
                      <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                          <thead>
                            <tr class="border-b border-yellow-200">
                              <th class="text-left py-3 px-4">Maßnahme</th>
                              <th class="text-center py-3 px-4">Initialkosten</th>
                              <th class="text-center py-3 px-4">Laufende Kosten</th>
                              <th class="text-center py-3 px-4">Schadensersparnis</th>
                              <th class="text-center py-3 px-4">ROI</th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-yellow-100">
                            <tr class="bg-white">
                              <td class="py-3 px-4 font-medium">Anonymes Meldesystem</td>
                              <td class="text-center py-3 px-4">15.000 EUR</td>
                              <td class="text-center py-3 px-4">3.000 EUR/Jahr</td>
                              <td class="text-center py-3 px-4">50.000 EUR</td>
                              <td class="text-center py-3 px-4 text-green-600 font-bold">233%</td>
                            </tr>
                            <tr class="bg-yellow-50">
                              <td class="py-3 px-4 font-medium">Schulungsprogramm</td>
                              <td class="text-center py-3 px-4">8.000 EUR</td>
                              <td class="text-center py-3 px-4">5.000 EUR/Jahr</td>
                              <td class="text-center py-3 px-4">30.000 EUR</td>
                              <td class="text-center py-3 px-4 text-green-600 font-bold">131%</td>
                            </tr>
                            <tr class="bg-white">
                              <td class="py-3 px-4 font-medium">Externe Ombudsstelle</td>
                              <td class="text-center py-3 px-4">5.000 EUR</td>
                              <td class="text-center py-3 px-4">12.000 EUR/Jahr</td>
                              <td class="text-center py-3 px-4">40.000 EUR</td>
                              <td class="text-center py-3 px-4 text-green-600 font-bold">135%</td>
                            </tr>
                            <tr class="bg-yellow-50">
                              <td class="py-3 px-4 font-medium">Monitoring-System</td>
                              <td class="text-center py-3 px-4">20.000 EUR</td>
                              <td class="text-center py-3 px-4">2.000 EUR/Jahr</td>
                              <td class="text-center py-3 px-4">75.000 EUR</td>
                              <td class="text-center py-3 px-4 text-green-600 font-bold">241%</td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="mt-4 text-xs text-yellow-700">
                          * Kalkulation basiert auf 3-Jahres-Zeitraum und durchschnittlichen Schadensersatz-/Bußgeldrisiken
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-yellow-600 hover:bg-yellow-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 6: Rechtliche Grundlagen */}
            {currentSection === 6 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl">
                      <Scale class="h-8 w-8 text-white" ></Scale>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Rechtliche Grundlagen</h1>
                      <p class="text-xl text-gray-600">Gesetzliche Bestimmungen und Rechtsprechung</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Gesetzliche Bestimmungen im Detail" 
                  icon={Gavel}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-indigo-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-indigo-900 mb-4">Struktureller Aufbau des HinSchG</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Teil 1: Allgemeine Bestimmungen (§§ 1-3)</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong class="text-blue-700">§ 1 - Anwendungsbereich:</strong>
                              <ul class="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Geschützte Personen definiert</li>
                                <li>• Räumlicher Geltungsbereich</li>
                                <li>• Verhältnis zu anderen Gesetzen</li>
                                <li>• Ausnahmen und Einschränkungen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong class="text-green-700">§ 2 - Sachlicher Anwendungsbereich:</strong>
                              <ul class="text-sm text-green-600 mt-2 space-y-1">
                                <li>• Geschützte Rechtsbereiche</li>
                                <li>• Nationales vs. EU-Recht</li>
                                <li>• Straftaten und Ordnungswidrigkeiten</li>
                                <li>• Erheblichkeitsschwellen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong class="text-purple-700">§ 3 - Begriffsbestimmungen:</strong>
                              <ul class="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Hinweisgeber-Definition</li>
                                <li>• Meldung vs. Offenlegung</li>
                                <li>• Verstoß-Begriff</li>
                                <li>• Repressalien-Definition</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Teil 2: Interne Meldestellen (§§ 4-16)</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong class="text-red-700">§§ 4-7 - Strukturelle Anforderungen:</strong>
                              <ul class="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Einrichtungspflicht</li>
                                <li>• Unabhängigkeit und Kompetenz</li>
                                <li>• Organisatorische Ausgestaltung</li>
                                <li>• Ressourcenausstattung</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-yellow-500">
                              <strong class="text-yellow-700">§§ 8-12 - Verfahrensbestimmungen:</strong>
                              <ul class="text-sm text-yellow-600 mt-2 space-y-1">
                                <li>• Meldekanäle und -verfahren</li>
                                <li>• Bestätigungspflichten</li>
                                <li>• Bearbeitungsfristen</li>
                                <li>• Dokumentationspflichten</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-orange-500">
                              <strong class="text-orange-700">§§ 13-16 - Information und Schulung:</strong>
                              <ul class="text-sm text-orange-600 mt-2 space-y-1">
                                <li>• Informationspflichten</li>
                                <li>• Schulungsanforderungen</li>
                                <li>• Zugänglichkeit</li>
                                <li>• Mehrsprachigkeit</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Weitere Teile des Gesetzes</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Teil 3: Externe Meldestellen (§§ 17-25)</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-gray-700 space-y-1">
                              <li>• Zuständigkeit der Behörden</li>
                              <li>• Verfahrensbestimmungen</li>
                              <li>• Zusammenarbeit mit internen Stellen</li>
                              <li>• Berichtspflichten</li>
                              <li>• Statistiken und Evaluierung</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Teil 4: Schutz vor Repressalien (§§ 26-36)</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-gray-700 space-y-1">
                              <li>• Repressalienverbot</li>
                              <li>• Schutzmaßnahmen</li>
                              <li>• Beweislastumkehr</li>
                              <li>• Rechtsbehelfe</li>
                              <li>• Entschädigungsansprüche</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Teil 5-6: Verfahren und Sanktionen (§§ 37-45)</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-gray-700 space-y-1">
                              <li>• Gerichtsverfahren</li>
                              <li>• Bußgeldbestimmungen</li>
                              <li>• Übergangsbestimmungen</li>
                              <li>• Evaluierungsklausel</li>
                              <li>• Inkrafttreten</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Rechtsprechung und Kommentierung" 
                  icon={Briefcase}
                >
                  <div class="space-y-6">
                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Frühe Rechtsprechung zum HinSchG</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Grundsatzentscheidungen</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">BAG, Urt. v. 15.03.2024 - 2 AZR 274/23:</strong>
                              <p class="text-sm text-blue-700 mt-2">
                                Beweislastumkehr greift auch bei mittelbarem zeitlichen Zusammenhang 
                                zwischen Meldung und nachteiliger Maßnahme.
                              </p>
                              <div class="mt-2">
                                <strong class="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Indizwirkung bei 6-monatigem Abstand möglich</li>
                                  <li>• Gesamtumstände sind zu würdigen</li>
                                  <li>• Arbeitgeber muss alternative Motivation beweisen</li>
                                </ul>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">LAG Hamburg, Urt. v. 22.11.2023 - 3 Sa 45/23:</strong>
                              <p class="text-sm text-blue-700 mt-2">
                                Anonyme Meldungen genießen denselben Schutz wie offene Meldungen.
                              </p>
                              <div class="mt-2">
                                <strong class="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Nachträgliche Identifizierung ändert nichts am Schutz</li>
                                  <li>• Vertraulichkeitsverletzung kann Repressalie sein</li>
                                  <li>• Unternehmen haftet für Mitarbeiterverhalten</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Verfahrensrechtliche Entscheidungen</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">OLG München, Beschl. v. 08.01.2024 - 31 W 1456/23:</strong>
                              <p class="text-sm text-blue-700 mt-2">
                                Einstweilige Verfügung zum Schutz vor Repressalien ist möglich.
                              </p>
                              <div class="mt-2">
                                <strong class="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Vorläufiger Rechtsschutz verfügbar</li>
                                  <li>• Geringere Darlegungsanforderungen</li>
                                  <li>• Eilbedürftigkeit oft gegeben</li>
                                </ul>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">VG Berlin, Urt. v. 19.02.2024 - 6 K 234/23:</strong>
                              <p class="text-sm text-blue-700 mt-2">
                                Externe Meldestellen müssen angemessene Reaktionszeiten einhalten.
                              </p>
                              <div class="mt-2">
                                <strong class="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• 3-Monats-Frist ist nicht absolut</li>
                                  <li>• Zwischenmitteilungen erforderlich</li>
                                  <li>• Begründungspflicht bei Verzögerungen</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Wissenschaftliche Kommentierung</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Führende Kommentare</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• Kühling/Muckel: HinSchG Kommentar</li>
                            <li>• Beck'scher Online-Kommentar</li>
                            <li>• Nomos Kommentar HinSchG</li>
                            <li>• Praxishandbuch Whistleblowing</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Kontroverse Themen</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• Anwendung auf Kleinbetriebe</li>
                            <li>• Verhältnis zum Strafverfahrensrecht</li>
                            <li>• Internationale Sachverhalte</li>
                            <li>• Datenschutzrechtliche Fragen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-2">Reformdiskussion</h5>
                          <ul class="text-sm text-green-800 space-y-1">
                            <li>• Erweiterung des Anwendungsbereichs</li>
                            <li>• Stärkung der Sanktionen</li>
                            <li>• Prämiensystem nach US-Vorbild</li>
                            <li>• Harmonisierung mit EU-Recht</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Aktuelle Fristen und Deadlines" 
                  icon={Calendar}
                >
                  <div class="space-y-6">
                    <div class="bg-red-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-red-900 mb-4">Wichtige Umsetzungsfristen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-3">Gesetzliche Pflichttermine</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-600">
                              <div class="flex items-start justify-between">
                                <div>
                                  <strong class="text-red-800">17. Dezember 2023</strong>
                                  <p class="text-sm text-red-700 mt-1">
                                    Pflicht zur Einrichtung interner Meldestellen für alle Unternehmen 
                                    mit 50-249 Beschäftigten (Übergangsfrist abgelaufen)
                                  </p>
                                </div>
                                <Badge class="bg-red-100 text-red-800 flex-shrink-0">Abgelaufen</Badge>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-orange-600">
                              <div class="flex items-start justify-between">
                                <div>
                                  <strong class="text-orange-800">Laufende Fristen</strong>
                                  <p class="text-sm text-orange-700 mt-1">
                                    7 Tage: Bestätigung des Meldungseingangs<br/>
                                    3 Monate: Rückmeldung über ergriffene Maßnahmen<br/>
                                    6 Monate: Verlängerung bei komplexen Fällen
                                  </p>
                                </div>
                                <Badge class="bg-orange-100 text-orange-800 flex-shrink-0">Dauerhaft</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-3">Anstehende Änderungen 2025</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-yellow-600">
                              <div class="flex items-start justify-between">
                                <div>
                                  <strong class="text-yellow-800">1. Januar 2025</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Erwartete Verschärfung der Bußgeldpraxis durch Aufsichtsbehörden
                                  </p>
                                </div>
                                <Badge class="bg-yellow-100 text-yellow-800 flex-shrink-0">Bevorstehend</Badge>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-600">
                              <div class="flex items-start justify-between">
                                <div>
                                  <strong class="text-green-800">17. Dezember 2025</strong>
                                  <p class="text-sm text-green-700 mt-1">
                                    Evaluierung des HinSchG durch die Bundesregierung - 
                                    mögliche Gesetzesanpassungen
                                  </p>
                                </div>
                                <Badge class="bg-green-100 text-green-800 flex-shrink-0">Geplant</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Praktische Umsetzungsempfehlungen</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-6 rounded-lg">
                          <h5 class="font-semibold text-blue-900 mb-4">Sofortmaßnahmen für säumige Unternehmen</h5>
                          <div>
                            <div class="text-center">
                              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-blue-600">1</span>
                              </div>
                              <h6 class="font-semibold text-blue-900 mb-2">Woche 1</h6>
                              <ul class="text-sm text-blue-700 text-left space-y-1">
                                <li>• Interimslösung einrichten</li>
                                <li>• E-Mail-Adresse aktivieren</li>
                                <li>• Verantwortlichen benennen</li>
                              </ul>
                            </div>
                            <div class="text-center">
                              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-blue-600">2</span>
                              </div>
                              <h6 class="font-semibold text-blue-900 mb-2">Woche 2-4</h6>
                              <ul class="text-sm text-blue-700 text-left space-y-1">
                                <li>• Prozesse dokumentieren</li>
                                <li>• Mitarbeiter informieren</li>
                                <li>• System auswählen</li>
                              </ul>
                            </div>
                            <div class="text-center">
                              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl font-bold text-blue-600">3</span>
                              </div>
                              <h6 class="font-semibold text-blue-900 mb-2">Woche 5-8</h6>
                              <ul class="text-sm text-blue-700 text-left space-y-1">
                                <li>• Vollständige Implementierung</li>
                                <li>• Schulungen durchführen</li>
                                <li>• Compliance dokumentieren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Checkliste: Sind Sie compliant?</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Mindestanforderungen</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  Interne Meldestelle eingerichtet und funktionsfähig
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  Mindestens zwei Meldekanäle verfügbar (schriftlich/mündlich)
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  Anonyme Meldungen möglich
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  7-Tage-Frist für Eingangsbestätigung implementiert
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  3-Monats-Frist für Rückmeldung gewährleistet
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Best Practice Standards</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  24/7 digitales Meldesystem verfügbar
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  Mehrsprachige Meldemöglichkeiten
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  Regelmäßige Mitarbeiterschulungen
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  KPI-Monitoring und Reporting etabliert
                                </span>
                              </label>
                              <label class="flex items-start space-x-3">
                                <input type="checkbox" class="rounded text-yellow-600 mt-0.5" />
                                <span class="text-sm text-yellow-800">
                                  Externe Zertifizierung vorhanden
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-lg text-white">
                      <div class="flex items-start space-x-4">
                        <AlertTriangle class="h-8 w-8 flex-shrink-0" ></AlertTriangle>
                        <div>
                          <h4 class="text-xl font-bold mb-2">Warnung: Verstärkte Kontrollen ab 2025</h4>
                          <p class="text-lg">
                            Die Aufsichtsbehörden haben angekündigt, ab 2025 verstärkt die Einhaltung 
                            des HinSchG zu kontrollieren. Unternehmen ohne funktionierende Meldesysteme 
                            müssen mit empfindlichen Bußgeldern bis zu 50.000 EUR rechnen.
                          </p>
                          <Button>
                            Jetzt Compliance sicherstellen
                            <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Internationale Rechtsentwicklung" 
                  icon={Globe}
                >
                  <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">EU-Rechtsprechung zur Whistleblower-Richtlinie</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">EuGH-Rechtsprechung</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">EuGH, Urt. v. 22.02.2024 - C-456/23:</strong>
                              <p class="text-sm text-purple-700 mt-2">
                                "Guter Glaube" bei Meldungen ist weit auszulegen - auch bei späterem 
                                Erweis als unzutreffend bleibt Schutz bestehen.
                              </p>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">EuGH, Urt. v. 15.11.2023 - C-789/22:</strong>
                              <p class="text-sm text-purple-700 mt-2">
                                Mitgliedstaaten dürfen Schutzstandard über EU-Mindestanforderungen 
                                hinaus erweitern.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Nationale Umsetzungsunterschiede</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Frankreich:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Bereits etabliertes System durch Sapin II</li>
                                <li>• Strengere Anforderungen als EU-Mindeststandard</li>
                                <li>• Besonderer Fokus auf Korruption</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Niederlande:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• House for Whistleblowers als zentrale Stelle</li>
                                <li>• Starke zivilgesellschaftliche Unterstützung</li>
                                <li>• Präventionsorientierter Ansatz</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Internationale Standards und Best Practices</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-2">OECD-Standards</h5>
                          <ul class="text-sm text-orange-800 space-y-1">
                            <li>• Anti-Bribery Convention</li>
                            <li>• Corporate Governance Principles</li>
                            <li>• Due Diligence Guidelines</li>
                            <li>• Integrity Framework</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-2">UN-Konventionen</h5>
                          <ul class="text-sm text-orange-800 space-y-1">
                            <li>• UN Convention against Corruption</li>
                            <li>• Global Compact Principles</li>
                            <li>• Business and Human Rights</li>
                            <li>• Sustainable Development Goals</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-2">ISO-Standards</h5>
                          <ul class="text-sm text-orange-800 space-y-1">
                            <li>• ISO 37001 (Anti-Bribery)</li>
                            <li>• ISO 37002 (Whistleblowing)</li>
                            <li>• ISO 31000 (Risk Management)</li>
                            <li>• ISO 19600 (Compliance)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-2">Branchenstandards</h5>
                          <ul class="text-sm text-orange-800 space-y-1">
                            <li>• Financial Services Standards</li>
                            <li>• Healthcare Compliance</li>
                            <li>• Aviation Safety Standards</li>
                            <li>• Pharmaceutical Guidelines</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Bußgeldbestimmungen und Sanktionen" 
                  icon={Euro}
                >
                  <div class="space-y-6">
                    <div class="bg-red-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-red-900 mb-4">Bußgeldkatalog nach § 40 HinSchG</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-3">Schwere Verstöße (bis 50.000 EUR)</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-600">
                              <strong class="text-red-800">§ 40 Abs. 2 Nr. 1-3:</strong>
                              <ul class="text-sm text-red-700 mt-2 space-y-1">
                                <li>• Behinderung oder Verhinderung von Meldungen</li>
                                <li>• Repressalien gegen Hinweisgeber</li>
                                <li>• Verletzung der Vertraulichkeitspflicht</li>
                                <li>• Vorsätzliche Falschangaben gegenüber Behörden</li>
                              </ul>
                              <div class="mt-3 p-3 bg-red-100 rounded">
                                <p class="text-sm font-medium text-red-800">
                                  Praxisbeispiel: Kündigung nach Meldung = 50.000 EUR
                                </p>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-orange-600">
                              <strong class="text-orange-800">§ 40 Abs. 2 Nr. 4-5:</strong>
                              <ul class="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Offenlegung der Identität ohne Zustimmung</li>
                                <li>• Unterlassung notwendiger Folgemaßnahmen</li>
                                <li>• Missbrauch des Meldesystems</li>
                                <li>• Verstoß gegen Dokumentationspflichten</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-3">Mittlere Verstöße (bis 20.000 EUR)</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-yellow-600">
                              <strong class="text-yellow-800">§ 40 Abs. 3 Nr. 1-3:</strong>
                              <ul class="text-sm text-yellow-700 mt-2 space-y-1">
                                <li>• Keine oder unzureichende Meldestelle</li>
                                <li>• Fehlende Meldekanäle</li>
                                <li>• Verstoß gegen Informationspflichten</li>
                                <li>• Unzureichende Dokumentation</li>
                              </ul>
                              <div class="mt-3 p-3 bg-yellow-100 rounded">
                                <p class="text-sm font-medium text-yellow-800">
                                  Häufigster Verstoß: Fehlende anonyme Meldemöglichkeit
                                </p>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-600">
                              <strong class="text-blue-800">§ 40 Abs. 3 Nr. 4-6:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Nichteinhaltung der 7-Tage-Frist</li>
                                <li>• Fehlende Rückmeldung nach 3 Monaten</li>
                                <li>• Unvollständige Informationen</li>
                                <li>• Mangelnde Zugänglichkeit</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Haftungsrisiken und Präventionsmaßnahmen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Persönliche Haftung</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <strong class="text-yellow-800">Betroffene Personen:</strong>
                            <ul class="text-sm text-yellow-700 mt-2 space-y-1">
                              <li>• Geschäftsführer/Vorstände</li>
                              <li>• Compliance-Verantwortliche</li>
                              <li>• HR-Leiter</li>
                              <li>• Direkte Vorgesetzte</li>
                            </ul>
                            <div class="mt-3 text-xs text-yellow-600 bg-yellow-100 p-2 rounded">
                              Tipp: D&O-Versicherung prüfen und anpassen
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Unternehmenshaftung</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <strong class="text-yellow-800">Risikobereiche:</strong>
                            <ul class="text-sm text-yellow-700 mt-2 space-y-1">
                              <li>• Organisationsverschulden</li>
                              <li>• Aufsichtspflichtverletzung</li>
                              <li>• Systemversagen</li>
                              <li>• Reputationsschäden</li>
                            </ul>
                            <div class="mt-3 text-xs text-yellow-600 bg-yellow-100 p-2 rounded">
                              Empfehlung: Regelmäßige Compliance-Audits
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Präventionsmaßnahmen</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <strong class="text-yellow-800">Best Practices:</strong>
                            <ul class="text-sm text-yellow-700 mt-2 space-y-1">
                              <li>• Dokumentierte Prozesse</li>
                              <li>• Regelmäßige Schulungen</li>
                              <li>• Externe Validierung</li>
                              <li>• Kontinuierliche Verbesserung</li>
                            </ul>
                            <div class="mt-3 text-xs text-yellow-600 bg-yellow-100 p-2 rounded">
                              ROI: 1€ Prävention = 5€ Schadensersparnis
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Praktische Handlungsempfehlungen" 
                  icon={Lightbulb}
                >
                  <div class="space-y-6">
                    <div class="bg-teal-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-teal-900 mb-4">Sofortmaßnahmen für Unternehmen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-teal-900 mb-3">Quick Wins (0-4 Wochen)</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                                <div class="flex-1">
                                  <strong class="text-teal-800">Bestandsaufnahme durchführen</strong>
                                  <ul class="text-sm text-teal-700 mt-2 space-y-1">
                                    <li>• Vorhandene Meldewege dokumentieren</li>
                                    <li>• Compliance-Lücken identifizieren</li>
                                    <li>• Risikoanalyse erstellen</li>
                                    <li>• Budget- und Ressourcenplanung</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                                <div class="flex-1">
                                  <strong class="text-teal-800">Interimslösung implementieren</strong>
                                  <ul class="text-sm text-teal-700 mt-2 space-y-1">
                                    <li>• Temporäre E-Mail-Adresse einrichten</li>
                                    <li>• Verantwortliche Person benennen</li>
                                    <li>• Basis-Dokumentation erstellen</li>
                                    <li>• Erste Mitarbeiterinformation</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-teal-900 mb-3">Mittelfristige Ziele (1-3 Monate)</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                                <div class="flex-1">
                                  <strong class="text-teal-800">Professionelles System aufbauen</strong>
                                  <ul class="text-sm text-teal-700 mt-2 space-y-1">
                                    <li>• Digitale Plattform auswählen</li>
                                    <li>• Prozesse standardisieren</li>
                                    <li>• Rollen und Rechte definieren</li>
                                    <li>• Testläufe durchführen</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                                <div class="flex-1">
                                  <strong class="text-teal-800">Organisation vorbereiten</strong>
                                  <ul class="text-sm text-teal-700 mt-2 space-y-1">
                                    <li>• Führungskräfte schulen</li>
                                    <li>• Kommunikationskampagne starten</li>
                                    <li>• Betriebsvereinbarung abschließen</li>
                                    <li>• Go-Live vorbereiten</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-white p-6 rounded-lg mb-6">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Detaillierte Umsetzungsschritte nach Unternehmensgröße</h4>
                      <div class="space-y-4">
                        <div class="border-l-4 border-l-blue-500 pl-4">
                          <h5 class="font-semibold text-blue-900 mb-2">Kleine Unternehmen (50-249 Mitarbeiter)</h5>
                          <div>
                            <div>
                              <strong class="text-blue-800">Organisationsstruktur:</strong>
                              <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• Benennung eines Compliance-Beauftragten (20% Stelle)</li>
                                <li>• Integration in bestehende HR-Strukturen</li>
                                <li>• Externe Ombudsperson als kosteneffiziente Option</li>
                                <li>• Schlanke Dokumentationsstruktur</li>
                                <li>• Nutzung bestehender Kommunikationskanäle</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-blue-800">Kostenschätzung:</strong>
                              <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• Initialkosten: 5.000-15.000 EUR</li>
                                <li>• Laufende Kosten: 500-1.500 EUR/Monat</li>
                                <li>• Software-Lösung: Cloud-basiert (SaaS)</li>
                                <li>• Schulungsbudget: 2.000-5.000 EUR/Jahr</li>
                                <li>• Externe Beratung: 3.000-8.000 EUR einmalig</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="border-l-4 border-l-green-500 pl-4">
                          <h5 class="font-semibold text-green-900 mb-2">Mittlere Unternehmen (250-1.000 Mitarbeiter)</h5>
                          <div>
                            <div>
                              <strong class="text-green-800">Organisationsstruktur:</strong>
                              <ul class="text-sm text-green-700 mt-1 space-y-1">
                                <li>• Dedizierte Compliance-Stelle (1-2 FTE)</li>
                                <li>• Eigenes Meldesystem mit mehreren Kanälen</li>
                                <li>• Interne Untersuchungsteams mit klaren Prozessen</li>
                                <li>• Regelmäßige Audits und Reviews</li>
                                <li>• Integration in Risk Management System</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-green-800">Kostenschätzung:</strong>
                              <ul class="text-sm text-green-700 mt-1 space-y-1">
                                <li>• Initialkosten: 20.000-50.000 EUR</li>
                                <li>• Laufende Kosten: 3.000-8.000 EUR/Monat</li>
                                <li>• Professionelle Software-Suite mit API</li>
                                <li>• Schulungsbudget: 10.000-20.000 EUR/Jahr</li>
                                <li>• Jährliche Audits: 5.000-15.000 EUR</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="border-l-4 border-l-purple-500 pl-4">
                          <h5 class="font-semibold text-purple-900 mb-2">Große Unternehmen (&gt;1.000 Mitarbeiter)</h5>
                          <div>
                            <div>
                              <strong class="text-purple-800">Organisationsstruktur:</strong>
                              <ul class="text-sm text-purple-700 mt-1 space-y-1">
                                <li>• Compliance-Abteilung (3-10 FTE)</li>
                                <li>• 24/7 Hotline mit mehrsprachigem Support</li>
                                <li>• Spezialisierte Investigation Units</li>
                                <li>• Globale Koordination und Standards</li>
                                <li>• Eigene IT-Infrastruktur und Entwicklung</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-purple-800">Kostenschätzung:</strong>
                              <ul class="text-sm text-purple-700 mt-1 space-y-1">
                                <li>• Initialkosten: 100.000-500.000 EUR</li>
                                <li>• Laufende Kosten: 20.000-100.000 EUR/Monat</li>
                                <li>• Enterprise-Lösung mit KI-Features</li>
                                <li>• Schulungsbudget: 50.000-200.000 EUR/Jahr</li>
                                <li>• Kontinuierliche Weiterentwicklung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Branchenspezifische Besonderheiten</h4>
                      <div>
                        <div class="bg-red-50 p-4 rounded-lg">
                          <h5 class="font-semibold text-red-900 mb-2">Finanzsektor</h5>
                          <ul class="text-sm text-red-700 space-y-1">
                            <li>• Integration mit BaFin-Anforderungen</li>
                            <li>• Verschärfte Dokumentationspflichten</li>
                            <li>• Verbindung zu Geldwäsche-Prävention</li>
                            <li>• Besondere Vertraulichkeitsstufen</li>
                            <li>• Meldepflicht an Aufsichtsbehörden</li>
                          </ul>
                        </div>
                        <div class="bg-yellow-50 p-4 rounded-lg">
                          <h5 class="font-semibold text-yellow-900 mb-2">Gesundheitswesen</h5>
                          <ul class="text-sm text-yellow-700 space-y-1">
                            <li>• Patientenschutz-Aspekte beachten</li>
                            <li>• Ärztliche Schweigepflicht wahren</li>
                            <li>• Schnittstellen zu QM-Systemen</li>
                            <li>• Besondere Sensibilität bei Daten</li>
                            <li>• MDR/IVDR Compliance integrieren</li>
                          </ul>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg">
                          <h5 class="font-semibold text-green-900 mb-2">Öffentlicher Sektor</h5>
                          <ul class="text-sm text-green-700 space-y-1">
                            <li>• Beamtenrechtliche Besonderheiten</li>
                            <li>• Transparenzgebot vs. Vertraulichkeit</li>
                            <li>• Politische Sensibilität beachten</li>
                            <li>• Besondere Berichtspflichten</li>
                            <li>• Haushaltsrechtliche Vorgaben</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="bg-indigo-50 p-6 rounded-lg mb-6">
                      <h4 class="text-lg font-semibold text-indigo-900 mb-4">Change Management und Kommunikationsstrategie</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-indigo-800 mb-3">Interne Kommunikation</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-3 rounded">
                              <strong class="text-indigo-800">Führungsebene:</strong>
                              <ul class="text-sm text-indigo-700 mt-1 space-y-1">
                                <li>• Town Hall Meetings mit Vorstand</li>
                                <li>• Leadership Commitment Statement</li>
                                <li>• Persönliche Botschaften der Geschäftsführung</li>
                                <li>• Vorbildfunktion aktiv wahrnehmen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-3 rounded">
                              <strong class="text-indigo-800">Mitarbeiterebene:</strong>
                              <ul class="text-sm text-indigo-700 mt-1 space-y-1">
                                <li>• Informationsveranstaltungen pro Abteilung</li>
                                <li>• E-Learning Module verpflichtend</li>
                                <li>• FAQ-Dokumente und Intranet-Seite</li>
                                <li>• Feedback-Schleifen etablieren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-800 mb-3">Externe Kommunikation</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-3 rounded">
                              <strong class="text-indigo-800">Stakeholder:</strong>
                              <ul class="text-sm text-indigo-700 mt-1 space-y-1">
                                <li>• Pressemitteilung zur Implementierung</li>
                                <li>• Update für Investoren/Aktionäre</li>
                                <li>• Information an Geschäftspartner</li>
                                <li>• Branchenaustausch initiieren</li>
                              </ul>
                            </div>
                            <div class="bg-white p-3 rounded">
                              <strong class="text-indigo-800">Öffentlichkeit:</strong>
                              <ul class="text-sm text-indigo-700 mt-1 space-y-1">
                                <li>• Website-Bereich zum HinSchG</li>
                                <li>• Transparenzbericht jährlich</li>
                                <li>• Social Media Kommunikation</li>
                                <li>• Teilnahme an Fachkonferenzen</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Checkliste für die Praxis</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Rechtliche Compliance</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Meldestelle eingerichtet</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Anonymität gewährleistet</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Fristen dokumentiert</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Prozesse definiert</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Technische Umsetzung</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">System implementiert</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Verschlüsselung aktiv</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Backups eingerichtet</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Tests durchgeführt</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Organisatorisches</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Team aufgestellt</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Schulungen geplant</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Kommuniziert</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Dokumentiert</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Kontinuität</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">KPIs definiert</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Monitoring aktiv</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Reviews geplant</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-blue-600" />
                                <span class="text-sm text-blue-800">Budget gesichert</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Erfolgsfaktoren und Stolpersteine</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">
                            <CheckCircle class="inline-block h-5 w-5 text-green-600 mr-2" ></CheckCircle>
                            Erfolgsfaktoren
                          </h5>
                          <div class="space-y-2">
                            <div class="bg-white p-3 rounded-lg">
                              <strong class="text-green-800">Top-Management-Support</strong>
                              <p class="text-sm text-green-700 mt-1">
                                Sichtbare Unterstützung durch Führung schafft Vertrauen und Akzeptanz
                              </p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                              <strong class="text-green-800">Nutzerfreundliche Systeme</strong>
                              <p class="text-sm text-green-700 mt-1">
                                Intuitive Bedienung erhöht Meldungsbereitschaft signifikant
                              </p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                              <strong class="text-green-800">Transparente Kommunikation</strong>
                              <p class="text-sm text-green-700 mt-1">
                                Offene Information über Prozesse und Ergebnisse stärkt Glaubwürdigkeit
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-red-900 mb-3">
                            <AlertCircle class="inline-block h-5 w-5 text-red-600 mr-2" ></AlertCircle>
                            Häufige Fehler
                          </h5>
                          <div class="space-y-2">
                            <div class="bg-white p-3 rounded-lg">
                              <strong class="text-red-800">Minimallösung implementieren</strong>
                              <p class="text-sm text-red-700 mt-1">
                                "Checkbox-Compliance" ohne echtes Commitment führt zu Vertrauensverlust
                              </p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                              <strong class="text-red-800">Fehlende Nachverfolgung</strong>
                              <p class="text-sm text-red-700 mt-1">
                                Meldungen ohne konsequente Bearbeitung demotivieren potenzielle Hinweisgeber
                              </p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                              <strong class="text-red-800">Unterschätzte Komplexität</strong>
                              <p class="text-sm text-red-700 mt-1">
                                Technische Lösung allein reicht nicht - Kultur und Prozesse sind entscheidend
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Erweiterte Best Practices aus der Praxis</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-purple-500">
                          <h5 class="font-semibold text-purple-900 mb-3">Kulturelle Integration</h5>
                          <div>
                            <div>
                              <strong class="text-purple-800">Vertrauenskultur aufbauen:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Offene Fehlerkultur etablieren</li>
                                <li>• Speak-up Culture fördern</li>
                                <li>• Positive Beispiele kommunizieren</li>
                                <li>• Whistleblower als "Beschützer" positionieren</li>
                                <li>• Erfolgsgeschichten teilen (anonymisiert)</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-purple-800">Leadership Engagement:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• CEO/Vorstand als Botschafter</li>
                                <li>• Regelmäßige Townhalls zum Thema</li>
                                <li>• Persönliche Commitment-Videos</li>
                                <li>• Walk-the-Talk Prinzip</li>
                                <li>• Null-Toleranz bei Repressalien</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                          <h5 class="font-semibold text-blue-900 mb-3">Prozessoptimierung</h5>
                          <div>
                            <div>
                              <strong class="text-blue-800">Eingangsphase:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• KI-gestützte Vorklassifizierung</li>
                                <li>• Automatische Übersetzung</li>
                                <li>• Smart Routing zu Experten</li>
                                <li>• Duplikatserkennung</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-blue-800">Bearbeitungsphase:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Workflow-Automatisierung</li>
                                <li>• Digitale Beweissicherung</li>
                                <li>• Echtzeit-Kollaboration</li>
                                <li>• Predictive Analytics</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-blue-800">Abschlussphase:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Automatisierte Reports</li>
                                <li>• Lessons Learned Datenbank</li>
                                <li>• Präventionsmaßnahmen</li>
                                <li>• Follow-up Automatisierung</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                          <h5 class="font-semibold text-green-900 mb-3">Technologie-Best Practices</h5>
                          <div>
                            <div>
                              <strong class="text-green-800">Moderne Sicherheitsfeatures:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• End-to-End Verschlüsselung</li>
                                <li>• Blockchain für Audit Trail</li>
                                <li>• Zero-Knowledge Architecture</li>
                                <li>• Tor-Browser Kompatibilität</li>
                                <li>• Biometrische Authentifizierung</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-green-800">User Experience:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Mobile-First Design</li>
                                <li>• Sprachsteuerung möglich</li>
                                <li>• Barrierefreie Gestaltung</li>
                                <li>• Offline-Modus verfügbar</li>
                                <li>• Intuitive Benutzerführung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Häufige Implementierungsfehler im Detail</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Strategische Fehler</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Isolierte Implementierung:</strong>
                              <p class="text-sm text-orange-700 mt-1">
                                HinSchG-System wird nicht in bestehende Compliance-Strukturen integriert
                              </p>
                              <div class="mt-2 p-2 bg-orange-100 rounded">
                                <span class="text-xs text-orange-800">→ Lösung: Ganzheitlicher Compliance-Ansatz</span>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Fehlende Ressourcenplanung:</strong>
                              <p class="text-sm text-orange-700 mt-1">
                                Unterschätzung von Zeit, Personal und Budget für nachhaltige Umsetzung
                              </p>
                              <div class="mt-2 p-2 bg-orange-100 rounded">
                                <span class="text-xs text-orange-800">→ Lösung: Realistische Langzeitplanung</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Operative Fehler</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Unklare Zuständigkeiten:</strong>
                              <p class="text-sm text-orange-700 mt-1">
                                Verantwortlichkeiten für Meldungsbearbeitung nicht eindeutig definiert
                              </p>
                              <div class="mt-2 p-2 bg-orange-100 rounded">
                                <span class="text-xs text-orange-800">→ Lösung: RACI-Matrix erstellen</span>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Mangelhafte Schulung:</strong>
                              <p class="text-sm text-orange-700 mt-1">
                                Mitarbeiter verstehen System und ihre Rechte/Pflichten nicht
                              </p>
                              <div class="mt-2 p-2 bg-orange-100 rounded">
                                <span class="text-xs text-orange-800">→ Lösung: Verpflichtende Trainings</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 7: Verfahrensschritte */}
            {currentSection === 7 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl">
                      <Route class="h-8 w-8 text-white" ></Route>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Verfahrensschritte</h1>
                      <p class="text-xl text-gray-600">Strukturierte Prozesse für den Umgang mit Hinweisen</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Meldungseingang und Erstbearbeitung" 
                  icon={Mail}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Sofortmaßnahmen nach Meldungseingang</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Erste 24 Stunden</h5>
                          <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                              <div>
                                <strong>Meldungsbestätigung:</strong> Automatische Eingangsbestätigung an Hinweisgeber
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                              <div>
                                <strong>Vorläufige Klassifizierung:</strong> Erste Bewertung der Meldung nach Schweregrad
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                              <div>
                                <strong>Zuständigkeitsprüfung:</strong> Weiterleitung an verantwortliche Stelle
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                              <div>
                                <strong>Dokumentation:</strong> Vollständige Erfassung aller Angaben
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Erste Woche</h5>
                          <div class="space-y-3">
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                              <div>
                                <strong>Plausibilitätsprüfung:</strong> Erste inhaltliche Bewertung der Meldung
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                              <div>
                                <strong>Risikoeinschätzung:</strong> Bewertung möglicher Schäden und Gefahren
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
                              <div>
                                <strong>Bestätigung:</strong> Schriftliche Bestätigung des Meldungseingangs (§ 17 HinSchG)
                              </div>
                            </div>
                            <div class="flex items-start space-x-3">
                              <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</div>
                              <div>
                                <strong>Untersuchungsplan:</strong> Erstellung eines strukturierten Vorgehens
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Bewertungsmatrix für Meldungen</h4>
                      <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-yellow-300">
                          <thead>
                            <tr class="bg-yellow-200">
                              <th class="border border-yellow-300 p-3 text-left font-semibold text-yellow-900">Kriterium</th>
                              <th class="border border-yellow-300 p-3 text-center font-semibold text-yellow-900">Niedrig</th>
                              <th class="border border-yellow-300 p-3 text-center font-semibold text-yellow-900">Mittel</th>
                              <th class="border border-yellow-300 p-3 text-center font-semibold text-yellow-900">Hoch</th>
                              <th class="border border-yellow-300 p-3 text-center font-semibold text-yellow-900">Kritisch</th>
                            </tr>
                          </thead>
                          <tbody class="text-sm">
                            <tr>
                              <td class="border border-yellow-300 p-3 font-medium">Rechtsverletzung</td>
                              <td class="border border-yellow-300 p-3 text-center">Ordnungswidrigkeit</td>
                              <td class="border border-yellow-300 p-3 text-center">Vergehen</td>
                              <td class="border border-yellow-300 p-3 text-center">Verbrechen</td>
                              <td class="border border-yellow-300 p-3 text-center">Schweres Verbrechen</td>
                            </tr>
                            <tr class="bg-yellow-50">
                              <td class="border border-yellow-300 p-3 font-medium">Schadenshöhe</td>
                              <td class="border border-yellow-300 p-3 text-center">&lt; 10.000 €</td>
                              <td class="border border-yellow-300 p-3 text-center">10.000-100.000 €</td>
                              <td class="border border-yellow-300 p-3 text-center">100.000-1 Mio €</td>
                              <td class="border border-yellow-300 p-3 text-center">&gt; 1 Mio €</td>
                            </tr>
                            <tr>
                              <td class="border border-yellow-300 p-3 font-medium">Öffentliches Interesse</td>
                              <td class="border border-yellow-300 p-3 text-center">Gering</td>
                              <td class="border border-yellow-300 p-3 text-center">Beachtlich</td>
                              <td class="border border-yellow-300 p-3 text-center">Erheblich</td>
                              <td class="border border-yellow-300 p-3 text-center">Außergewöhnlich</td>
                            </tr>
                            <tr class="bg-yellow-50">
                              <td class="border border-yellow-300 p-3 font-medium">Gefahr für Leben/Gesundheit</td>
                              <td class="border border-yellow-300 p-3 text-center">Keine</td>
                              <td class="border border-yellow-300 p-3 text-center">Potenzielle Gefahr</td>
                              <td class="border border-yellow-300 p-3 text-center">Konkrete Gefahr</td>
                              <td class="border border-yellow-300 p-3 text-center">Akute Gefahr</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Untersuchungsverfahren" 
                  icon={Search}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Systematische Untersuchung</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg border-l-4 border-green-500">
                          <h5 class="font-semibold text-green-900 mb-2">Phase 1: Vorermittlung (1-2 Wochen)</h5>
                          <ul class="space-y-2 text-green-800">
                            <li>• <strong>Sachverhaltsaufklärung:</strong> Sammlung aller verfügbaren Informationen</li>
                            <li>• <strong>Beweissicherung:</strong> Sicherstellung von Dokumenten und digitalen Daten</li>
                            <li>• <strong>Zeugenbefragung:</strong> Erste Gespräche mit relevanten Personen</li>
                            <li>• <strong>Rechtliche Einordnung:</strong> Prüfung der rechtlichen Relevanz</li>
                          </ul>
                        </div>
                        
                        <div class="bg-white p-4 rounded-lg border-l-4 border-green-600">
                          <h5 class="font-semibold text-green-900 mb-2">Phase 2: Hauptuntersuchung (2-6 Wochen)</h5>
                          <ul class="space-y-2 text-green-800">
                            <li>• <strong>Tiefere Analyse:</strong> Detaillierte Untersuchung der Vorwürfe</li>
                            <li>• <strong>Expertengutachten:</strong> Hinzuziehung von Fachexperten bei Bedarf</li>
                            <li>• <strong>Anhörungen:</strong> Formelle Befragung der betroffenen Personen</li>
                            <li>• <strong>Zusätzliche Beweise:</strong> Weitere Beweismittel sammeln</li>
                          </ul>
                        </div>

                        <div class="bg-white p-4 rounded-lg border-l-4 border-green-700">
                          <h5 class="font-semibold text-green-900 mb-2">Phase 3: Bewertung (1-2 Wochen)</h5>
                          <ul class="space-y-2 text-green-800">
                            <li>• <strong>Beweisanalyse:</strong> Gesamtbewertung aller gesammelten Beweise</li>
                            <li>• <strong>Rechtliche Würdigung:</strong> Endgültige rechtliche Einschätzung</li>
                            <li>• <strong>Maßnahmenentwicklung:</strong> Planung von Konsequenzen und Korrekturen</li>
                            <li>• <strong>Berichtserstellung:</strong> Abschlussbericht mit Empfehlungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Untersuchungsstandards</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Grundprinzipien</h5>
                          <div class="space-y-3 text-sm text-purple-800">
                            <div class="flex items-center space-x-2">
                              <CheckCircle class="h-4 w-4 text-purple-600" ></CheckCircle>
                              <span><strong>Objektivität:</strong> Neutrale und unvoreingenommene Untersuchung</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <CheckCircle class="h-4 w-4 text-purple-600" ></CheckCircle>
                              <span><strong>Vertraulichkeit:</strong> Schutz aller Beteiligten und Informationen</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <CheckCircle class="h-4 w-4 text-purple-600" ></CheckCircle>
                              <span><strong>Verhältnismäßigkeit:</strong> Angemessene Untersuchungstiefe</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <CheckCircle class="h-4 w-4 text-purple-600" ></CheckCircle>
                              <span><strong>Dokumentation:</strong> Lückenlose Aufzeichnung aller Schritte</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <CheckCircle class="h-4 w-4 text-purple-600" ></CheckCircle>
                              <span><strong>Rechtmäßigkeit:</strong> Einhaltung aller gesetzlichen Vorgaben</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Qualitätssicherung</h5>
                          <div class="space-y-3 text-sm text-purple-800">
                            <div class="flex items-center space-x-2">
                              <Star class="h-4 w-4 text-purple-600" ></Star>
                              <span><strong>Vier-Augen-Prinzip:</strong> Mindestens zwei Personen bei kritischen Schritten</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Star class="h-4 w-4 text-purple-600" ></Star>
                              <span><strong>Externe Expertise:</strong> Hinzuziehung von Spezialisten bei Bedarf</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Star class="h-4 w-4 text-purple-600" ></Star>
                              <span><strong>Peer Review:</strong> Überprüfung durch unabhängige Kollegen</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Star class="h-4 w-4 text-purple-600" ></Star>
                              <span><strong>Standardisierung:</strong> Verwendung einheitlicher Verfahren</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Star class="h-4 w-4 text-purple-600" ></Star>
                              <span><strong>Kontinuierliche Verbesserung:</strong> Regelmäßige Verfahrensoptimierung</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Kommunikation mit dem Hinweisgeber" 
                  icon={MessageSquare}
                >
                  <div class="space-y-6">
                    <div class="bg-indigo-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-indigo-900 mb-4">Gesetzliche Kommunikationspflichten</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg border border-indigo-200">
                          <h5 class="font-semibold text-indigo-900 mb-2">Pflichtmitteilungen nach § 17 HinSchG</h5>
                          <div>
                            <div>
                              <strong class="text-indigo-900">Innerhalb 7 Tagen:</strong>
                              <ul class="mt-2 space-y-1 text-indigo-800">
                                <li>• Eingangsbestätigung</li>
                                <li>• Zuständigkeitsmitteilung</li>
                                <li>• Erste Einschätzung</li>
                                <li>• Weitere Vorgehensweise</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-indigo-900">Innerhalb 3 Monaten:</strong>
                              <ul class="mt-2 space-y-1 text-indigo-800">
                                <li>• Zwischenbericht über Fortschritt</li>
                                <li>• Geplante Untersuchungsschritte</li>
                                <li>• Vorläufige Ergebnisse</li>
                                <li>• Zeitplan für Abschluss</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-indigo-900">Nach Abschluss:</strong>
                              <ul class="mt-2 space-y-1 text-indigo-800">
                                <li>• Abschließende Mitteilung</li>
                                <li>• Ergebnis der Untersuchung</li>
                                <li>• Ergriffene Maßnahmen</li>
                                <li>• Begründung bei Ablehnung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-teal-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-teal-900 mb-4">Best Practices für die Kommunikation</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-teal-900 mb-3 flex items-center">
                            <MessageSquare class="mr-2 h-5 w-5" ></MessageSquare>
                            Professionelle Kommunikation
                          </h5>
                          <div class="space-y-2 text-sm text-teal-800">
                            <p><strong>Ton und Stil:</strong></p>
                            <ul class="ml-4 space-y-1">
                              <li>• Respektvoll und wertschätzend</li>
                              <li>• Sachlich und professionell</li>
                              <li>• Verständlich und präzise</li>
                              <li>• Empathisch und unterstützend</li>
                            </ul>
                            <p class="mt-3"><strong>Strukturierung:</strong></p>
                            <ul class="ml-4 space-y-1">
                              <li>• Klare Gliederung der Inhalte</li>
                              <li>• Verwendung von Überschriften</li>
                              <li>• Bullet Points für bessere Lesbarkeit</li>
                              <li>• Zusammenfassung der wichtigsten Punkte</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-teal-900 mb-3 flex items-center">
                            <Lock class="mr-2 h-5 w-5" ></Lock>
                            Schutz der Identität
                          </h5>
                          <div class="space-y-2 text-sm text-teal-800">
                            <p><strong>Anonymitätsschutz:</strong></p>
                            <ul class="ml-4 space-y-1">
                              <li>• Sichere Kommunikationskanäle nutzen</li>
                              <li>• Verschlüsselung bei sensiblen Daten</li>
                              <li>• Vermeidung identifizierender Merkmale</li>
                              <li>• Separate Aktenführung</li>
                            </ul>
                            <p class="mt-3"><strong>Vertraulichkeit:</strong></p>
                            <ul class="ml-4 space-y-1">
                              <li>• Begrenzter Personenkreis mit Zugang</li>
                              <li>• Need-to-know-Prinzip beachten</li>
                              <li>• Physische und digitale Sicherheit</li>
                              <li>• Aufbewahrungsfristen einhalten</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Entscheidung und Maßnahmen" 
                  icon={Gavel}
                >
                  <div class="space-y-6">
                    <div class="bg-red-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-red-900 mb-4">Entscheidungsmatrix</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg">
                          <h5 class="font-semibold text-red-900 mb-3">Mögliche Untersuchungsergebnisse</h5>
                          <div>
                            <div>
                              <div class="space-y-3">
                                <div class="p-3 bg-green-100 rounded border-l-4 border-green-500">
                                  <h6 class="font-semibold text-green-900">Unbegründet</h6>
                                  <p class="text-sm text-green-800">Vorwürfe können nicht bestätigt werden</p>
                                  <ul class="text-xs text-green-700 mt-2">
                                    <li>• Keine Rechtsverletzung feststellbar</li>
                                    <li>• Sachverhalt widerlegt</li>
                                    <li>• Unzureichende Beweise</li>
                                  </ul>
                                </div>
                                <div class="p-3 bg-yellow-100 rounded border-l-4 border-yellow-500">
                                  <h6 class="font-semibold text-yellow-900">Teilweise begründet</h6>
                                  <p class="text-sm text-yellow-800">Einzelne Aspekte bestätigt</p>
                                  <ul class="text-xs text-yellow-700 mt-2">
                                    <li>• Geringfügige Verstöße</li>
                                    <li>• Verfahrensmängel</li>
                                    <li>• Nachbesserungsbedarf</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="space-y-3">
                                <div class="p-3 bg-orange-100 rounded border-l-4 border-orange-500">
                                  <h6 class="font-semibold text-orange-900">Begründet</h6>
                                  <p class="text-sm text-orange-800">Wesentliche Verstöße bestätigt</p>
                                  <ul class="text-xs text-orange-700 mt-2">
                                    <li>• Rechtsverletzungen belegt</li>
                                    <li>• Sofortige Maßnahmen erforderlich</li>
                                    <li>• Compliance-Verstöße</li>
                                  </ul>
                                </div>
                                <div class="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                  <h6 class="font-semibold text-red-900">Schwerwiegend begründet</h6>
                                  <p class="text-sm text-red-800">Erhebliche Rechtsverletzungen</p>
                                  <ul class="text-xs text-red-700 mt-2">
                                    <li>• Straftaten oder schwere Verstöße</li>
                                    <li>• Meldung an Behörden</li>
                                    <li>• Umfassende Korrekturen nötig</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Maßnahmenkatalog</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3 text-center">Sofortmaßnahmen</h5>
                          <div class="space-y-2 text-sm">
                            <div class="p-2 bg-red-100 rounded">
                              <strong>Schadensbegrenzung</strong>
                              <ul class="text-xs mt-1">
                                <li>• Stopp gefährdender Aktivitäten</li>
                                <li>• Beweissicherung</li>
                                <li>• Krisenteam aktivieren</li>
                              </ul>
                            </div>
                            <div class="p-2 bg-orange-100 rounded">
                              <strong>Personalmaßnahmen</strong>
                              <ul class="text-xs mt-1">
                                <li>• Suspendierung bei Bedarf</li>
                                <li>• Versetzung oder Freistellung</li>
                                <li>• Arbeitsrechtliche Schritte</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3 text-center">Mittelfristige Maßnahmen</h5>
                          <div class="space-y-2 text-sm">
                            <div class="p-2 bg-yellow-100 rounded">
                              <strong>Prozessverbesserung</strong>
                              <ul class="text-xs mt-1">
                                <li>• Richtlinien überarbeiten</li>
                                <li>• Kontrollen verstärken</li>
                                <li>• Schulungen durchführen</li>
                              </ul>
                            </div>
                            <div class="p-2 bg-blue-100 rounded">
                              <strong>Organisatorisch</strong>
                              <ul class="text-xs mt-1">
                                <li>• Strukturen anpassen</li>
                                <li>• Zuständigkeiten klären</li>
                                <li>• Berichtswege optimieren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3 text-center">Langfristige Maßnahmen</h5>
                          <div class="space-y-2 text-sm">
                            <div class="p-2 bg-green-100 rounded">
                              <strong>Kulturwandel</strong>
                              <ul class="text-xs mt-1">
                                <li>• Compliance-Kultur stärken</li>
                                <li>• Werteorientierung fördern</li>
                                <li>• Führungskräfte schulen</li>
                              </ul>
                            </div>
                            <div class="p-2 bg-purple-100 rounded">
                              <strong>Monitoring</strong>
                              <ul class="text-xs mt-1">
                                <li>• Kontrollsysteme etablieren</li>
                                <li>• Regelmäßige Überprüfungen</li>
                                <li>• Wirksamkeitsmessung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Abschluss und Nachverfolgung" 
                  icon={CheckCircle}
                >
                  <div class="space-y-6">
                    <div class="bg-emerald-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-emerald-900 mb-4">Verfahrensabschluss</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-emerald-900 mb-3">Abschlussdokumentation</h5>
                          <div class="space-y-3 text-sm text-emerald-800">
                            <div class="flex items-start space-x-2">
                              <FileText class="h-4 w-4 text-emerald-600 mt-0.5" ></FileText>
                              <div>
                                <strong>Untersuchungsbericht:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• Sachverhaltsdarstellung</li>
                                  <li>• Untersuchungsergebnisse</li>
                                  <li>• Rechtliche Bewertung</li>
                                  <li>• Empfohlene Maßnahmen</li>
                                </ul>
                              </div>
                            </div>
                            <div class="flex items-start space-x-2">
                              <Database class="h-4 w-4 text-emerald-600 mt-0.5" ></Database>
                              <div>
                                <strong>Beweisdokumentation:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• Alle gesammelten Beweise</li>
                                  <li>• Gesprächsprotokolle</li>
                                  <li>• Expertengutachten</li>
                                  <li>• Zusätzliche Unterlagen</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-emerald-900 mb-3">Kommunikation der Ergebnisse</h5>
                          <div class="space-y-3 text-sm text-emerald-800">
                            <div class="flex items-start space-x-2">
                              <Mail class="h-4 w-4 text-emerald-600 mt-0.5" ></Mail>
                              <div>
                                <strong>An Hinweisgeber:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• Abschließende Mitteilung</li>
                                  <li>• Zusammenfassung der Ergebnisse</li>
                                  <li>• Dank für die Meldung</li>
                                  <li>• Verweis auf Schutzrechte</li>
                                </ul>
                              </div>
                            </div>
                            <div class="flex items-start space-x-2">
                              <Users class="h-4 w-4 text-emerald-600 mt-0.5" ></Users>
                              <div>
                                <strong>An Stakeholder:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• Management-Summary</li>
                                  <li>• Handlungsempfehlungen</li>
                                  <li>• Zeitplan für Umsetzung</li>
                                  <li>• Risikobewertung</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Nachverfolgung und Monitoring</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg">
                          <h5 class="font-semibold text-blue-900 mb-3">Umsetzungscontrolling</h5>
                          <div>
                            <div class="text-center">
                              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Calendar class="h-8 w-8 text-blue-600" ></Calendar>
                              </div>
                              <h6 class="font-semibold text-blue-900">30 Tage</h6>
                              <p class="text-sm text-blue-800">Erste Umsetzungsüberprüfung</p>
                            </div>
                            <div class="text-center">
                              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <BarChart3 class="h-8 w-8 text-blue-600" ></BarChart3>
                              </div>
                              <h6 class="font-semibold text-blue-900">90 Tage</h6>
                              <p class="text-sm text-blue-800">Zwischenbewertung der Wirksamkeit</p>
                            </div>
                            <div class="text-center">
                              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Award class="h-8 w-8 text-blue-600" ></Award>
                              </div>
                              <h6 class="font-semibold text-blue-900">1 Jahr</h6>
                              <p class="text-sm text-blue-800">Abschließende Wirksamkeitsprüfung</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-pink-600 hover:bg-pink-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 8: Dokumentation */}
            {currentSection === 8 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl">
                      <FileText class="h-8 w-8 text-white" ></FileText>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Dokumentation</h1>
                      <p class="text-xl text-gray-600">Systematische Erfassung und Verwaltung aller Verfahrensschritte</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Gesetzliche Dokumentationspflichten" 
                  icon={Scale}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Anforderungen nach § 18 HinSchG</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Inhaltliche Anforderungen</h5>
                          <div class="space-y-3 text-sm text-blue-800">
                            <div class="flex items-start space-x-2">
                              <CheckCircle class="h-4 w-4 text-blue-600 mt-0.5" ></CheckCircle>
                              <div>
                                <strong>Vollständige Sachverhaltserfassung:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• Alle wesentlichen Fakten</li>
                                  <li>• Chronologische Darstellung</li>
                                  <li>• Beteiligte Personen</li>
                                  <li>• Relevante Dokumente</li>
                                </ul>
                              </div>
                            </div>
                            <div class="flex items-start space-x-2">
                              <CheckCircle class="h-4 w-4 text-blue-600 mt-0.5" ></CheckCircle>
                              <div>
                                <strong>Verfahrensdokumentation:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• Alle Untersuchungsschritte</li>
                                  <li>• Zwischenergebnisse</li>
                                  <li>• Entscheidungsbegründungen</li>
                                  <li>• Ergriffene Maßnahmen</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Formelle Anforderungen</h5>
                          <div class="space-y-3 text-sm text-blue-800">
                            <div class="flex items-start space-x-2">
                              <FileText class="h-4 w-4 text-blue-600 mt-0.5" ></FileText>
                              <div>
                                <strong>Aufbewahrungsfristen:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• Mindestens 3 Jahre</li>
                                  <li>• Bei Strafverfahren länger</li>
                                  <li>• Digitale Langzeitspeicherung</li>
                                  <li>• Sichere Archivierung</li>
                                </ul>
                              </div>
                            </div>
                            <div class="flex items-start space-x-2">
                              <Lock class="h-4 w-4 text-blue-600 mt-0.5" ></Lock>
                              <div>
                                <strong>Datenschutz:</strong>
                                <ul class="ml-4 mt-1 space-y-1">
                                  <li>• DSGVO-konforme Speicherung</li>
                                  <li>• Zugriffskontrollen</li>
                                  <li>• Anonymisierung wo möglich</li>
                                  <li>• Löschfristen beachten</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Beweissicherung und -aufbewahrung</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg border border-yellow-200">
                          <h5 class="font-semibold text-yellow-900 mb-3">Digitale Beweismittel</h5>
                          <div>
                            <div>
                              <strong class="text-yellow-900">E-Mails & Kommunikation</strong>
                              <ul class="mt-2 space-y-1 text-yellow-800">
                                <li>• Vollständige E-Mail-Header</li>
                                <li>• Anhänge separat sichern</li>
                                <li>• Kommunikationsketten</li>
                                <li>• Zeitstempel dokumentieren</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-yellow-900">Dateien & Dokumente</strong>
                              <ul class="mt-2 space-y-1 text-yellow-800">
                                <li>• Originaldateien bewahren</li>
                                <li>• Versionsstände sichern</li>
                                <li>• Metadaten erhalten</li>
                                <li>• Hash-Werte erstellen</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-yellow-900">System-Logs</strong>
                              <ul class="mt-2 space-y-1 text-yellow-800">
                                <li>• Zugriffsprotokolle</li>
                                <li>• Änderungshistorien</li>
                                <li>• Transaktionslogs</li>
                                <li>• Audit-Trails sichern</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Dokumentationssystem und Templates" 
                  icon={Database}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Strukturiertes Akten- und Fallmanagement</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg border border-green-200">
                          <h5 class="font-semibold text-green-900 mb-3">Aktenaufbau und -struktur</h5>
                          <div>
                            <div>
                              <div class="space-y-3">
                                <div class="p-3 bg-green-100 rounded border-l-4 border-green-500">
                                  <h6 class="font-semibold text-green-900">Teil A: Grunddaten</h6>
                                  <ul class="text-sm text-green-800 mt-2 space-y-1">
                                    <li>• Fallnummer und Erstellungsdatum</li>
                                    <li>• Art der Meldung (anonym/identifiziert)</li>
                                    <li>• Kurze Sachverhaltsdarstellung</li>
                                    <li>• Erste Klassifizierung</li>
                                    <li>• Zuständige Bearbeiter</li>
                                  </ul>
                                </div>
                                <div class="p-3 bg-green-100 rounded border-l-4 border-green-600">
                                  <h6 class="font-semibold text-green-900">Teil B: Verfahrensverlauf</h6>
                                  <ul class="text-sm text-green-800 mt-2 space-y-1">
                                    <li>• Chronologische Dokumentation</li>
                                    <li>• Untersuchungsschritte</li>
                                    <li>• Zwischenergebnisse</li>
                                    <li>• Kommunikation mit Beteiligten</li>
                                    <li>• Statusupdates</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="space-y-3">
                                <div class="p-3 bg-green-100 rounded border-l-4 border-green-700">
                                  <h6 class="font-semibold text-green-900">Teil C: Beweise und Unterlagen</h6>
                                  <ul class="text-sm text-green-800 mt-2 space-y-1">
                                    <li>• Originalmeldung</li>
                                    <li>• Gesammelte Dokumente</li>
                                    <li>• Gesprächsprotokolle</li>
                                    <li>• Expertengutachten</li>
                                    <li>• Zusätzliche Beweismittel</li>
                                  </ul>
                                </div>
                                <div class="p-3 bg-green-100 rounded border-l-4 border-green-800">
                                  <h6 class="font-semibold text-green-900">Teil D: Ergebnisse und Maßnahmen</h6>
                                  <ul class="text-sm text-green-800 mt-2 space-y-1">
                                    <li>• Abschlussbericht</li>
                                    <li>• Rechtliche Bewertung</li>
                                    <li>• Beschlossene Maßnahmen</li>
                                    <li>• Umsetzungscontrolling</li>
                                    <li>• Lessons Learned</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Dokumenten-Templates und Formulare</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3 flex items-center">
                            <Mail class="mr-2 h-5 w-5" ></Mail>
                            Kommunikation
                          </h5>
                          <div class="space-y-2 text-sm">
                            <div class="p-2 bg-white rounded border">
                              <strong>Eingangsbestätigung</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Standardisierte Bestätigung des Meldungseingangs mit Fallnummer
                              </p>
                            </div>
                            <div class="p-2 bg-white rounded border">
                              <strong>Zwischenbericht</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Template für 3-Monats-Mitteilung an Hinweisgeber
                              </p>
                            </div>
                            <div class="p-2 bg-white rounded border">
                              <strong>Abschlussmitteilung</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Finale Kommunikation der Untersuchungsergebnisse
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3 flex items-center">
                            <Search class="mr-2 h-5 w-5" ></Search>
                            Untersuchung
                          </h5>
                          <div class="space-y-2 text-sm">
                            <div class="p-2 bg-white rounded border">
                              <strong>Untersuchungsplan</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Strukturierte Planung der Untersuchungsschritte
                              </p>
                            </div>
                            <div class="p-2 bg-white rounded border">
                              <strong>Gesprächsprotokoll</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Standardisierte Erfassung von Befragungen
                              </p>
                            </div>
                            <div class="p-2 bg-white rounded border">
                              <strong>Bewertungsmatrix</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Systematische Bewertung von Sachverhalten
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3 flex items-center">
                            <FileText class="mr-2 h-5 w-5" ></FileText>
                            Berichte
                          </h5>
                          <div class="space-y-2 text-sm">
                            <div class="p-2 bg-white rounded border">
                              <strong>Abschlussbericht</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Umfassende Dokumentation der Untersuchung
                              </p>
                            </div>
                            <div class="p-2 bg-white rounded border">
                              <strong>Management Summary</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Kompakte Zusammenfassung für Führungsebene
                              </p>
                            </div>
                            <div class="p-2 bg-white rounded border">
                              <strong>Compliance Report</strong>
                              <p class="text-xs text-purple-700 mt-1">
                                Regelmäßige Berichterstattung an Aufsichtsgremien
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Digitale Dokumentenmanagement-Systeme" 
                  icon={Server}
                >
                  <div class="space-y-6">
                    <div class="bg-indigo-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-indigo-900 mb-4">Technische Anforderungen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Systemfunktionalitäten</h5>
                          <div class="space-y-3 text-sm text-indigo-800">
                            <div class="flex items-center space-x-2">
                              <Database class="h-4 w-4 text-indigo-600" ></Database>
                              <span><strong>Zentrale Datenhaltung:</strong> Einheitliche Speicherung aller Dokumente</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Search class="h-4 w-4 text-indigo-600" ></Search>
                              <span><strong>Volltext-Suche:</strong> Schnelles Auffinden relevanter Informationen</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Users class="h-4 w-4 text-indigo-600" ></Users>
                              <span><strong>Rollenbasierte Zugriffe:</strong> Differenzierte Berechtigungskonzepte</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Clock class="h-4 w-4 text-indigo-600" ></Clock>
                              <span><strong>Versionskontrolle:</strong> Nachvollziehbare Änderungshistorie</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Lock class="h-4 w-4 text-indigo-600" ></Lock>
                              <span><strong>Verschlüsselung:</strong> Schutz sensibler Informationen</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Integration und Workflows</h5>
                          <div class="space-y-3 text-sm text-indigo-800">
                            <div class="flex items-center space-x-2">
                              <Network class="h-4 w-4 text-indigo-600" ></Network>
                              <span><strong>API-Schnittstellen:</strong> Integration in bestehende Systeme</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Workflow class="h-4 w-4 text-indigo-600" ></Workflow>
                              <span><strong>Automatisierte Workflows:</strong> Standardisierte Prozessabläufe</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Bell class="h-4 w-4 text-indigo-600" ></Bell>
                              <span><strong>Benachrichtigungen:</strong> Automatische Erinnerungen und Alerts</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <BarChart3 class="h-4 w-4 text-indigo-600" ></BarChart3>
                              <span><strong>Reporting:</strong> Automatisierte Berichtsgenerierung</span>
                            </div>
                            <div class="flex items-center space-x-2">
                              <Shield class="h-4 w-4 text-indigo-600" ></Shield>
                              <span><strong>Backup & Recovery:</strong> Sichere Datenwiederherstellung</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-cyan-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-cyan-900 mb-4">Compliance und Sicherheit</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg">
                          <h5 class="font-semibold text-cyan-900 mb-3">Rechtliche Compliance</h5>
                          <div>
                            <div>
                              <strong class="text-cyan-900">DSGVO-Konformität</strong>
                              <ul class="mt-2 space-y-1 text-cyan-800">
                                <li>• Datenschutz by Design</li>
                                <li>• Pseudonymisierung</li>
                                <li>• Recht auf Vergessenwerden</li>
                                <li>• Dokumentation der Verarbeitung</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-cyan-900">Aufbewahrungsfristen</strong>
                              <ul class="mt-2 space-y-1 text-cyan-800">
                                <li>• Automatische Archivierung</li>
                                <li>• Rechtssichere Löschung</li>
                                <li>• Fristen-Monitoring</li>
                                <li>• Audit-Protokolle</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-cyan-900">Zugriffskontrolle</strong>
                              <ul class="mt-2 space-y-1 text-cyan-800">
                                <li>• Need-to-know-Prinzip</li>
                                <li>• Zweifaktor-Authentifizierung</li>
                                <li>• Zugriffsprotokolle</li>
                                <li>• Regelmäßige Berechtigungsprüfung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Qualitätssicherung und Audit-Trail" 
                  icon={Award}
                >
                  <div class="space-y-6">
                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Dokumentationsqualität</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Qualitätsstandards</h5>
                          <div class="space-y-3 text-sm text-orange-800">
                            <div class="p-3 bg-white rounded border">
                              <h6 class="font-semibold">Vollständigkeit</h6>
                              <ul class="mt-1 space-y-1 text-xs">
                                <li>• Alle relevanten Informationen erfasst</li>
                                <li>• Keine wesentlichen Lücken</li>
                                <li>• Vollständige Chronologie</li>
                                <li>• Alle Beteiligten dokumentiert</li>
                              </ul>
                            </div>
                            <div class="p-3 bg-white rounded border">
                              <h6 class="font-semibold">Nachvollziehbarkeit</h6>
                              <ul class="mt-1 space-y-1 text-xs">
                                <li>• Logische Struktur</li>
                                <li>• Klare Verweise und Querverbindungen</li>
                                <li>• Eindeutige Identifizierung</li>
                                <li>• Transparente Entscheidungswege</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Kontrollen und Reviews</h5>
                          <div class="space-y-3 text-sm text-orange-800">
                            <div class="p-3 bg-white rounded border">
                              <h6 class="font-semibold">Vier-Augen-Prinzip</h6>
                              <ul class="mt-1 space-y-1 text-xs">
                                <li>• Unabhängige Überprüfung</li>
                                <li>• Fachliche Validierung</li>
                                <li>• Rechtliche Compliance</li>
                                <li>• Qualitätsfreigabe</li>
                              </ul>
                            </div>
                            <div class="p-3 bg-white rounded border">
                              <h6 class="font-semibold">Regelmäßige Audits</h6>
                              <ul class="mt-1 space-y-1 text-xs">
                                <li>• Interne Qualitätsprüfungen</li>
                                <li>• Externe Revisionen</li>
                                <li>• Compliance-Checks</li>
                                <li>• Continuous Improvement</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Audit-Trail und Nachweisführung</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg">
                          <h5 class="font-semibold text-gray-900 mb-3">Lückenlose Dokumentation aller Aktivitäten</h5>
                          <div>
                            <div class="text-center">
                              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Clock class="h-6 w-6 text-blue-600" ></Clock>
                              </div>
                              <h6 class="font-semibold text-gray-900">Zeitstempel</h6>
                              <p class="text-xs text-gray-600">Präzise Erfassung aller Aktivitätszeiten</p>
                            </div>
                            <div class="text-center">
                              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Users class="h-6 w-6 text-green-600" ></Users>
                              </div>
                              <h6 class="font-semibold text-gray-900">Benutzer-ID</h6>
                              <p class="text-xs text-gray-600">Eindeutige Zuordnung aller Aktionen</p>
                            </div>
                            <div class="text-center">
                              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Edit3 class="h-6 w-6 text-purple-600" ></Edit3>
                              </div>
                              <h6 class="font-semibold text-gray-900">Änderungen</h6>
                              <p class="text-xs text-gray-600">Vollständige Versionierung aller Dokumente</p>
                            </div>
                            <div class="text-center">
                              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Shield class="h-6 w-6 text-red-600" ></Shield>
                              </div>
                              <h6 class="font-semibold text-gray-900">Integrität</h6>
                              <p class="text-xs text-gray-600">Kryptographische Sicherung gegen Manipulation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-teal-600 hover:bg-teal-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 9: Schulungen */}
            {currentSection === 9 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                      <GraduationCap class="h-8 w-8 text-white" ></GraduationCap>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Schulungen</h1>
                      <p class="text-xl text-gray-600">Mitarbeiterausbildung und Awareness-Programme</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Gesetzliche Schulungsanforderungen (§ 13 HinSchG)" 
                  icon={BookOpen}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Informationspflichten</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Zielgruppen</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong class="text-blue-700">Alle Beschäftigten:</strong>
                              <ul class="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Grundlegende Informationen zum HinSchG</li>
                                <li>• Verfügbare Meldekanäle</li>
                                <li>• Schutz vor Repressalien</li>
                                <li>• Verfahrensabläufe</li>
                                <li>• Ansprechpartner und Kontaktdaten</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong class="text-green-700">Führungskräfte:</strong>
                              <ul class="text-sm text-green-600 mt-2 space-y-1">
                                <li>• Vertieftes Rechtswissen</li>
                                <li>• Umgang mit Meldungen</li>
                                <li>• Prävention von Repressalien</li>
                                <li>• Eskalationsverfahren</li>
                                <li>• Vorbildfunktion und Kommunikation</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong class="text-purple-700">Meldestellen-Personal:</strong>
                              <ul class="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Spezialisierte Fachkenntnisse</li>
                                <li>• Investigationstechniken</li>
                                <li>• Gesprächsführung</li>
                                <li>• Datenschutz und Vertraulichkeit</li>
                                <li>• Kontinuierliche Weiterbildung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Schulungsformate</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Präsenzschulungen:</strong>
                              <ul class="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Interaktive Workshops</li>
                                <li>• Fallstudien und Rollenspiele</li>
                                <li>• Q&A-Sitzungen</li>
                                <li>• Gruppendiskussionen</li>
                                <li>• Praxisübungen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">E-Learning-Module:</strong>
                              <ul class="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Adaptive Lernpfade</li>
                                <li>• Interaktive Simulationen</li>
                                <li>• Gamification-Elemente</li>
                                <li>• Mobile Verfügbarkeit</li>
                                <li>• Automatische Fortschrittskontrolle</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Blended Learning:</strong>
                              <ul class="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Kombination verschiedener Formate</li>
                                <li>• Selbststudium und Präsenz</li>
                                <li>• Peer-Learning-Ansätze</li>
                                <li>• Mentoring-Programme</li>
                                <li>• Kontinuierliche Betreuung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Schulungszyklen und -häufigkeit</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Onboarding</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Grundlagenschulung für alle neuen MA</li>
                            <li>• Innerhalb der ersten 30 Tage</li>
                            <li>• Basis-Zertifizierung erforderlich</li>
                            <li>• Integration in Einarbeitungsplan</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Jährliche Auffrischung</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Pflichtschulung für alle MA</li>
                            <li>• Updates zu Gesetzesänderungen</li>
                            <li>• Neue Fallbeispiele</li>
                            <li>• Wissenstest erforderlich</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Anlassbezogen</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Nach kritischen Vorfällen</li>
                            <li>• Bei Organisationsänderungen</li>
                            <li>• Nach Gesetzesnovellierungen</li>
                            <li>• Bei Audit-Empfehlungen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Spezialisierung</h5>
                          <ul class="text-sm text-blue-800 space-y-1">
                            <li>• Vertiefung für Führungskräfte</li>
                            <li>• Branchenspezifische Module</li>
                            <li>• Train-the-Trainer Programme</li>
                            <li>• Externe Zertifizierungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Schulungsinhalte und Curriculum" 
                  icon={FileText}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Modulares Curriculum</h4>
                      <div class="grid grid-cols-1 gap-6">
                        <div class="space-y-4">
                          {/* Modul 1 */}
                          <div class="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                            <h5 class="font-semibold text-blue-900 mb-4 flex items-center">
                              <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                              Modul 1: Rechtliche Grundlagen (2 Stunden)
                            </h5>
                            <div>
                              <div>
                                <strong class="text-blue-800 text-sm">Lernziele:</strong>
                                <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• HinSchG-Grundlagen verstehen</li>
                                  <li>• Anwendungsbereich kennen</li>
                                  <li>• Geschützte Bereiche identifizieren</li>
                                  <li>• Rechtliche Konsequenzen verstehen</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Inhalte:</strong>
                                <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• EU-Richtlinie und nationale Umsetzung</li>
                                  <li>• Begriffsbestimmungen</li>
                                  <li>• Geschützte Personen und Bereiche</li>
                                  <li>• Sanktionen und Bußgelder</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Methoden:</strong>
                                <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Interaktive Präsentation</li>
                                  <li>• Rechtsfälle analysieren</li>
                                  <li>• Quizzes und Wissenstests</li>
                                  <li>• Diskussionsrunden</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Modul 2 */}
                          <div class="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                            <h5 class="font-semibold text-green-900 mb-4 flex items-center">
                              <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                              Modul 2: Meldesystem und Verfahren (1,5 Stunden)
                            </h5>
                            <div>
                              <div>
                                <strong class="text-green-800 text-sm">Lernziele:</strong>
                                <ul class="text-sm text-green-700 mt-1 space-y-1">
                                  <li>• Meldekanäle kennen</li>
                                  <li>• Verfahrensablauf verstehen</li>
                                  <li>• Anonymität gewährleisten</li>
                                  <li>• Dokumentation beherrschen</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-green-800 text-sm">Inhalte:</strong>
                                <ul class="text-sm text-green-700 mt-1 space-y-1">
                                  <li>• Interne vs. externe Meldestellen</li>
                                  <li>• Technische Meldekanäle</li>
                                  <li>• Verfahrensschritte und Fristen</li>
                                  <li>• Feedback und Kommunikation</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-green-800 text-sm">Methoden:</strong>
                                <ul class="text-sm text-green-700 mt-1 space-y-1">
                                  <li>• System-Demonstration</li>
                                  <li>• Hands-on Training</li>
                                  <li>• Prozess-Simulation</li>
                                  <li>• Praxisübungen</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Modul 3 */}
                          <div class="bg-white p-6 rounded-lg border-l-4 border-l-purple-500">
                            <h5 class="font-semibold text-purple-900 mb-4 flex items-center">
                              <div class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                              Modul 3: Schutz vor Repressalien (1 Stunde)
                            </h5>
                            <div>
                              <div>
                                <strong class="text-purple-800 text-sm">Lernziele:</strong>
                                <ul class="text-sm text-purple-700 mt-1 space-y-1">
                                  <li>• Repressalien erkennen</li>
                                  <li>• Schutzmaßnahmen kennen</li>
                                  <li>• Beweislastumkehr verstehen</li>
                                  <li>• Hilfestellung suchen</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-purple-800 text-sm">Inhalte:</strong>
                                <ul class="text-sm text-purple-700 mt-1 space-y-1">
                                  <li>• Formen von Repressalien</li>
                                  <li>• Präventive Schutzmaßnahmen</li>
                                  <li>• Reaktive Interventionen</li>
                                  <li>• Rechtsmittel und Unterstützung</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-purple-800 text-sm">Methoden:</strong>
                                <ul class="text-sm text-purple-700 mt-1 space-y-1">
                                  <li>• Fallstudien analysieren</li>
                                  <li>• Rollenspiele</li>
                                  <li>• Szenario-Training</li>
                                  <li>• Erfahrungsaustausch</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Modul 4 */}
                          <div class="bg-white p-6 rounded-lg border-l-4 border-l-orange-500">
                            <h5 class="font-semibold text-orange-900 mb-4 flex items-center">
                              <div class="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                              Modul 4: Praktische Anwendung (1,5 Stunden)
                            </h5>
                            <div>
                              <div>
                                <strong class="text-orange-800 text-sm">Lernziele:</strong>
                                <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                  <li>• Echte Fälle beurteilen</li>
                                  <li>• Entscheidungen treffen</li>
                                  <li>• Kommunikation üben</li>
                                  <li>• Selbstvertrauen aufbauen</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-orange-800 text-sm">Inhalte:</strong>
                                <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                  <li>• Branchenspezifische Beispiele</li>
                                  <li>• Ethische Dilemmata</li>
                                  <li>• Kommunikationsstrategien</li>
                                  <li>• Kontinuierliche Verbesserung</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-orange-800 text-sm">Methoden:</strong>
                                <ul class="text-sm text-orange-700 mt-1 space-y-1">
                                  <li>• Interaktive Workshops</li>
                                  <li>• Peer-Learning</li>
                                  <li>• Mentoring</li>
                                  <li>• Feedback-Sessions</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Awareness-Kampagnen und Kulturwandel" 
                  icon={Users}
                >
                  <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Mehrjährige Awareness-Strategie</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Kampagnen-Phasen</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Phase 1: Grundsensibilisierung (Jahr 1)</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Einführung des Hinweisgebersystems</li>
                                <li>• Grundlegende Informationskampagne</li>
                                <li>• Führungskräfte als Multiplikatoren</li>
                                <li>• Erste Erfolgsgeschichten kommunizieren</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Phase 2: Vertiefung (Jahr 2-3)</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Spezifische Branchenthemen</li>
                                <li>• Interaktive Formate und Events</li>
                                <li>• Peer-to-Peer Learning</li>
                                <li>• Continuous Improvement</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Phase 3: Nachhaltigkeit (Jahr 4+)</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Integration in Unternehmenskultur</li>
                                <li>• Selbstlernende Organisation</li>
                                <li>• Innovation und Best Practices</li>
                                <li>• Externe Benchmarking</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Kommunikationskanäle</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Traditionelle Medien:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Intranet-Artikel und News</li>
                                <li>• Newsletter und E-Mail-Kampagnen</li>
                                <li>• Poster und Aushänge</li>
                                <li>• Mitarbeiterzeitung</li>
                                <li>• Town Hall Meetings</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Digitale Kanäle:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Social Enterprise Plattformen</li>
                                <li>• Video-Content und Webinare</li>
                                <li>• Mobile Apps und Push-Notifications</li>
                                <li>• Gamification und Challenges</li>
                                <li>• VR/AR-Trainings</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Interaktive Formate:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Workshops und Roundtables</li>
                                <li>• Lunch & Learn Sessions</li>
                                <li>• Ethics Cafés</li>
                                <li>• Compliance Days</li>
                                <li>• Peer Coaching</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Kulturwandel-Initiativen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Leadership Commitment</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Vorbildfunktion der Führung</li>
                            <li>• Öffentliche Unterstützung</li>
                            <li>• Persönliche Erfahrungen teilen</li>
                            <li>• Regelmäßige Kommunikation</li>
                            <li>• Zero-Tolerance für Repressalien</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Positive Verstärkung</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Anerkennung für Hinweisgeber</li>
                            <li>• Courage Awards</li>
                            <li>• Erfolgsgeschichten publizieren</li>
                            <li>• Positive Peer Pressure</li>
                            <li>• Intrinsische Motivation</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Strukturelle Änderungen</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Integration in Performance Reviews</li>
                            <li>• Compliance-KPIs für Manager</li>
                            <li>• Ethik-Komitees etablieren</li>
                            <li>• Code of Conduct anpassen</li>
                            <li>• Anreizsysteme überdenken</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Kontinuierliche Verbesserung</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Regelmäßige Kulturumfragen</li>
                            <li>• Feedback-Schleifen etablieren</li>
                            <li>• Best Practice Sharing</li>
                            <li>• Innovation fördern</li>
                            <li>• Externe Benchmarks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-orange-600 hover:bg-orange-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 10: Risikomanagement */}
            {currentSection === 10 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl">
                      <AlertTriangle class="h-8 w-8 text-white" ></AlertTriangle>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Risikomanagement</h1>
                      <p class="text-xl text-gray-600">Identifikation und Bewertung von Compliance-Risiken</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Risikoidentifikation und -bewertung" 
                  icon={Search}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Systematische Risikoanalyse</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Risikokategorien</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong class="text-red-700">Rechtliche Risiken:</strong>
                              <ul class="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Verstoß gegen HinSchG-Pflichten</li>
                                <li>• Bußgelder und Sanktionen</li>
                                <li>• Zivilrechtliche Ansprüche</li>
                                <li>• Strafverfahren gegen Verantwortliche</li>
                                <li>• Aufsichtsrechtliche Maßnahmen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-orange-500">
                              <strong class="text-orange-700">Reputationsrisiken:</strong>
                              <ul class="text-sm text-orange-600 mt-2 space-y-1">
                                <li>• Negative Medienberichterstattung</li>
                                <li>• Vertrauensverlust bei Stakeholdern</li>
                                <li>• Schädigung der Arbeitgebermarke</li>
                                <li>• Kundenabwanderung</li>
                                <li>• Investoren-Vertrauen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong class="text-blue-700">Operative Risiken:</strong>
                              <ul class="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Ineffiziente Meldeprozesse</li>
                                <li>• Überbelastung der Meldestellen</li>
                                <li>• Systemausfälle und technische Probleme</li>
                                <li>• Personalabwanderung</li>
                                <li>• Wissensverslust</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Bewertungsmatrix</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <table class="w-full text-sm">
                                <thead>
                                  <tr class="border-b border-gray-200">
                                    <th class="text-left py-2">Wahrscheinlichkeit</th>
                                    <th class="text-center py-2">Niedrig</th>
                                    <th class="text-center py-2">Mittel</th>
                                    <th class="text-center py-2">Hoch</th>
                                  </tr>
                                </thead>
                                <tbody class="text-gray-700">
                                  <tr>
                                    <td class="py-2 font-semibold">Schwer (&gt;1M€)</td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-yellow-400 rounded"></span>
                                    </td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-red-400 rounded"></span>
                                    </td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-red-600 rounded"></span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="py-2 font-semibold">Mittel (100K-1M€)</td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-green-400 rounded"></span>
                                    </td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-yellow-400 rounded"></span>
                                    </td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-red-400 rounded"></span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="py-2 font-semibold">Gering (&lt;100K€)</td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-green-200 rounded"></span>
                                    </td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-green-400 rounded"></span>
                                    </td>
                                    <td class="text-center py-2">
                                      <span class="inline-block w-4 h-4 bg-yellow-400 rounded"></span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div class="mt-3 text-xs text-gray-600">
                                <span class="inline-block w-3 h-3 bg-green-200 rounded mr-1"></span> Niedrig
                                <span class="inline-block w-3 h-3 bg-green-400 rounded mr-1 ml-3"></span> Gering
                                <span class="inline-block w-3 h-3 bg-yellow-400 rounded mr-1 ml-3"></span> Mittel
                                <span class="inline-block w-3 h-3 bg-red-400 rounded mr-1 ml-3"></span> Hoch
                                <span class="inline-block w-3 h-3 bg-red-600 rounded mr-1 ml-3"></span> Kritisch
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Risikoindikatoren und Frühwarnsysteme</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Quantitative Indikatoren</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-blue-800 space-y-1">
                              <li>• Anzahl Meldungen pro Quartal</li>
              <li>• Durchschnittliche Bearbeitungszeit</li>
                              <li>• Quote substantiierter Meldungen</li>
                              <li>• Wiederholungsmeldungen</li>
                              <li>• Eskalationsrate zu externen Stellen</li>
                              <li>• Personalfluktuation nach Meldungen</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Qualitative Indikatoren</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-blue-800 space-y-1">
                              <li>• Mitarbeitervertrauen in das System</li>
                              <li>• Führungsverhalten bei Meldungen</li>
                              <li>• Kulturelle Offenheit für Feedback</li>
                              <li>• Qualität der Untersuchungen</li>
                              <li>• Wirksamkeit der Maßnahmen</li>
                              <li>• Externe Wahrnehmung</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Technische Indikatoren</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-blue-800 space-y-1">
                              <li>• Systemverfügbarkeit</li>
                              <li>• Sicherheitsvorfälle</li>
                              <li>• Datenintegrität</li>
                              <li>• Performance-Kennzahlen</li>
                              <li>• Backup-Erfolgsrate</li>
                              <li>• User Experience Scores</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Risikominderungsstrategien" 
                  icon={Shield}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Präventive Maßnahmen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Organisatorische Prävention</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Governance-Strukturen:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Unabhängige Oversight-Komitees</li>
                                <li>• Klar definierte Verantwortlichkeiten</li>
                                <li>• Regelmäßige Board-Berichte</li>
                                <li>• Externe Beratung und Audits</li>
                                <li>• Kontinuierliche Fortbildung</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Prozessoptimierung:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Standardisierte Verfahren</li>
                                <li>• Automatisierte Workflows</li>
                                <li>• Quality Assurance Checkpoints</li>
                                <li>• Feedback-Integration</li>
                                <li>• Continuous Improvement</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Technische Prävention</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Systemsicherheit:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Redundante Systeme</li>
                                <li>• Verschlüsselung aller Daten</li>
                                <li>• Multi-Faktor-Authentifizierung</li>
                                <li>• Penetrationstests</li>
                                <li>• 24/7 Monitoring</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Datenintegrität:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Automatische Backups</li>
                                <li>• Versionskontrolle</li>
                                <li>• Audit-Trails</li>
                                <li>• Disaster Recovery</li>
                                <li>• Business Continuity</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Reaktive Maßnahmen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Incident Response</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Sofortmaßnahmen-Katalog</li>
                            <li>• Eskalationsmatrix</li>
                            <li>• Kommunikationspläne</li>
                            <li>• Crisis Management Team</li>
                            <li>• Lessons Learned Process</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Schadensbegrenzung</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Sofortige Systemsperrung</li>
                            <li>• Forensische Untersuchung</li>
                            <li>• Beweissicherung</li>
                            <li>• Stakeholder-Information</li>
                            <li>• Medien-Management</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Wiederherstellung</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• System-Recovery</li>
                            <li>• Datenwiederherstellung</li>
                            <li>• Prozess-Optimierung</li>
                            <li>• Personal-Nachschulung</li>
                            <li>• Vertrauens-Wiederaufbau</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Langfristige Anpassung</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Strukturelle Reformen</li>
                            <li>• Kulturwandel-Programme</li>
                            <li>• Verstärkte Kontrollen</li>
                            <li>• Externe Validierung</li>
                            <li>• Benchmark-Analysen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Risiko-Monitoring und -Reporting" 
                  icon={BarChart3}
                >
                  <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Kontinuierliches Monitoring</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Dashboard und KPIs</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div class="flex justify-between items-center p-3 bg-green-100 rounded">
                                <span class="text-sm font-medium text-green-800">Systemverfügbarkeit</span>
                                <span class="text-lg font-bold text-green-600">99.8%</span>
                              </div>
                              <div class="flex justify-between items-center p-3 bg-blue-100 rounded">
                                <span class="text-sm font-medium text-blue-800">Meldungen YTD</span>
                                <span class="text-lg font-bold text-blue-600">127</span>
                              </div>
                              <div class="flex justify-between items-center p-3 bg-yellow-100 rounded">
                                <span class="text-sm font-medium text-yellow-800">Ø Bearbeitungszeit</span>
                                <span class="text-lg font-bold text-yellow-600">18 Tage</span>
                              </div>
                              <div class="flex justify-between items-center p-3 bg-red-100 rounded">
                                <span class="text-sm font-medium text-red-800">Offene Risiken</span>
                                <span class="text-lg font-bold text-red-600">3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Automatisierte Alerts</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Schwellenwerte:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• &gt;5 Meldungen pro Abteilung/Monat</li>
                                <li>• Bearbeitungszeit &gt;30 Tage</li>
                                <li>• Systemausfall &gt;2 Stunden</li>
                                <li>• Wiederholungsmeldungen</li>
                                <li>• Externe Medienmeldungen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-purple-800">Eskalationsstufen:</strong>
                              <ul class="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Stufe 1: Team-Lead Information</li>
                                <li>• Stufe 2: Management-Benachrichtigung</li>
                                <li>• Stufe 3: Board-Eskalation</li>
                                <li>• Stufe 4: Externe Meldepflicht</li>
                                <li>• Stufe 5: Crisis Management</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Periodisches Reporting</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Monatliche Reports</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-orange-800 space-y-1">
                              <li>• Meldungsstatistiken</li>
                              <li>• Verfahrensstatus</li>
                              <li>• Risikoindikatoren</li>
                              <li>• Systemperformance</li>
                              <li>• Compliance-Trends</li>
                              <li>• Action Items</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Quartalsberichte</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-orange-800 space-y-1">
                              <li>• Comprehensive Risk Assessment</li>
                              <li>• Trend-Analysen</li>
                              <li>• Benchmark-Vergleiche</li>
                              <li>• Maßnahmen-Wirksamkeit</li>
                              <li>• Stakeholder-Feedback</li>
                              <li>• Improvement Roadmap</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Jahresberichte</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-orange-800 space-y-1">
                              <li>• Strategische Risikobewertung</li>
                              <li>• Gesamtwirksamkeit des Systems</li>
                              <li>• Kulturwandel-Indikatoren</li>
                              <li>• Externe Benchmarks</li>
                              <li>• ROI-Analysen</li>
                              <li>• Strategische Empfehlungen</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-gray-600 hover:bg-gray-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 11: Monitoring */}
            {currentSection === 11 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl">
                      <Activity class="h-8 w-8 text-white" ></Activity>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Monitoring</h1>
                      <p class="text-xl text-gray-600">Überwachung und kontinuierliche Verbesserung</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="System-Monitoring und Performance-Überwachung" 
                  icon={Monitor}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-cyan-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-cyan-900 mb-4">Real-Time Monitoring Dashboard</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-cyan-900 mb-3">Technische KPIs</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-medium text-cyan-800">Systemverfügbarkeit</span>
                                <span class="text-lg font-bold text-green-600">99.97%</span>
                              </div>
                              <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style={{width: '99.97%'}}></div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-medium text-cyan-800">Response Time (avg)</span>
                                <span class="text-lg font-bold text-blue-600">1.2s</span>
                              </div>
                              <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-medium text-cyan-800">Concurrent Users</span>
                                <span class="text-lg font-bold text-purple-600">247</span>
                              </div>
                              <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-purple-500 h-2 rounded-full" style={{width: '65%'}}></div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-medium text-cyan-800">Data Integrity Score</span>
                                <span class="text-lg font-bold text-green-600">100%</span>
                              </div>
                              <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-cyan-900 mb-3">Operative KPIs</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong class="text-blue-700">Meldungsvolumen:</strong>
                              <div class="mt-2 space-y-1 text-sm text-blue-600">
                                <div class="flex justify-between">
                                  <span>Heute:</span>
                                  <span class="font-semibold">3 neue Meldungen</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Diese Woche:</span>
                                  <span class="font-semibold">12 Meldungen</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Dieser Monat:</span>
                                  <span class="font-semibold">47 Meldungen</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>YTD:</span>
                                  <span class="font-semibold">234 Meldungen</span>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong class="text-green-700">Verfahrensstatus:</strong>
                              <div class="mt-2 space-y-1 text-sm text-green-600">
                                <div class="flex justify-between">
                                  <span>In Bearbeitung:</span>
                                  <span class="font-semibold">18 Fälle</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Pending Review:</span>
                                  <span class="font-semibold">7 Fälle</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Abgeschlossen:</span>
                                  <span class="font-semibold">209 Fälle</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Überfällig:</span>
                                  <span class="font-semibold text-red-600">2 Fälle</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Automatisierte Alerting-Systeme</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Kritische Alerts</h5>
                          <div class="space-y-2">
                            <div class="bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-center">
                                <AlertCircle class="h-4 w-4 text-red-600 mr-2" ></AlertCircle>
                                <span class="text-sm font-medium text-red-800">System Downtime &gt;30min</span>
                              </div>
                            </div>
                            <div class="bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-center">
                                <AlertCircle class="h-4 w-4 text-red-600 mr-2" ></AlertCircle>
                                <span class="text-sm font-medium text-red-800">Data Breach Detected</span>
                              </div>
                            </div>
                            <div class="bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-center">
                                <AlertCircle class="h-4 w-4 text-red-600 mr-2" ></AlertCircle>
                                <span class="text-sm font-medium text-red-800">Überfällige Meldung &gt;30 Tage</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Warn-Alerts</h5>
                          <div class="space-y-2">
                            <div class="bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500">
                              <div class="flex items-center">
                                <AlertTriangle class="h-4 w-4 text-yellow-600 mr-2" ></AlertTriangle>
                                <span class="text-sm font-medium text-yellow-800">Response Time &gt;3s</span>
                              </div>
                            </div>
                            <div class="bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500">
                              <div class="flex items-center">
                                <AlertTriangle class="h-4 w-4 text-yellow-600 mr-2" ></AlertTriangle>
                                <span class="text-sm font-medium text-yellow-800">Hohe Meldungsfrequenz</span>
                              </div>
                            </div>
                            <div class="bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500">
                              <div class="flex items-center">
                                <AlertTriangle class="h-4 w-4 text-yellow-600 mr-2" ></AlertTriangle>
                                <span class="text-sm font-medium text-yellow-800">Backup Failed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Info-Alerts</h5>
                          <div class="space-y-2">
                            <div class="bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500">
                              <div class="flex items-center">
                                <Info class="h-4 w-4 text-blue-600 mr-2" ></Info>
                                <span class="text-sm font-medium text-blue-800">System Update Completed</span>
                              </div>
                            </div>
                            <div class="bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500">
                              <div class="flex items-center">
                                <Info class="h-4 w-4 text-blue-600 mr-2" ></Info>
                                <span class="text-sm font-medium text-blue-800">Monthly Report Generated</span>
                              </div>
                            </div>
                            <div class="bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500">
                              <div class="flex items-center">
                                <Info class="h-4 w-4 text-blue-600 mr-2" ></Info>
                                <span class="text-sm font-medium text-blue-800">Neue Schulung verfügbar</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Wirksamkeitsmessung und Analytics" 
                  icon={BarChart3}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Performance Analytics</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Trend-Analysen</h5>
                          <div class="space-y-4">
                            <div class="bg-white p-4 rounded-lg">
                              <h6 class="font-semibold text-green-800 mb-2">Meldungsvolumen-Trends</h6>
                              <div class="space-y-2 text-sm text-green-700">
                                <div class="flex justify-between">
                                  <span>Q1 2024:</span>
                                  <span class="font-semibold">67 Meldungen (+12%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Q2 2024:</span>
                                  <span class="font-semibold">73 Meldungen (+9%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Q3 2024:</span>
                                  <span class="font-semibold">81 Meldungen (+11%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Q4 2024 (Proj.):</span>
                                  <span class="font-semibold">89 Meldungen (+10%)</span>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <h6 class="font-semibold text-green-800 mb-2">Aufklärungsquote</h6>
                              <div class="space-y-2 text-sm text-green-700">
                                <div class="flex justify-between">
                                  <span>2023:</span>
                                  <span class="font-semibold">76% aufgeklärt</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>YTD 2024:</span>
                                  <span class="font-semibold">82% aufgeklärt</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Ziel 2024:</span>
                                  <span class="font-semibold">85% aufgeklärt</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Status:</span>
                                  <span class="font-semibold text-green-600">Auf Kurs</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Segmentierung und Kategorisierung</h5>
                          <div class="space-y-4">
                            <div class="bg-white p-4 rounded-lg">
                              <h6 class="font-semibold text-green-800 mb-2">Nach Kategorien (YTD)</h6>
                              <div class="space-y-2 text-sm text-green-700">
                                <div class="flex justify-between">
                                  <span>Arbeitsrecht:</span>
                                  <span class="font-semibold">58 Fälle (25%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Korruption:</span>
                                  <span class="font-semibold">47 Fälle (20%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Diskriminierung:</span>
                                  <span class="font-semibold">35 Fälle (15%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Datenschutz:</span>
                                  <span class="font-semibold">28 Fälle (12%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Sonstige:</span>
                                  <span class="font-semibold">66 Fälle (28%)</span>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <h6 class="font-semibold text-green-808 mb-2">Nach Schweregrad</h6>
                              <div class="space-y-2 text-sm text-green-700">
                                <div class="flex justify-between">
                                  <span>Niedrig:</span>
                                  <span class="font-semibold">124 Fälle (53%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Mittel:</span>
                                  <span class="font-semibold">87 Fälle (37%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Hoch:</span>
                                  <span class="font-semibold">19 Fälle (8%)</span>
                                </div>
                                <div class="flex justify-between">
                                  <span>Kritisch:</span>
                                  <span class="font-semibold">4 Fälle (2%)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Predictive Analytics und KI-Insights</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Risikovorhersagen</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-purple-800 space-y-2">
                              <li class="flex items-center">
                                <TrendingUp class="h-4 w-4 text-red-500 mr-2" ></TrendingUp>
                                <span>Erhöhtes Risiko Abteilung Sales (87%)</span>
                              </li>
                              <li class="flex items-center">
                                <TrendingUp class="h-4 w-4 text-yellow-500 mr-2" ></TrendingUp>
                                <span>Moderate Risikoentwicklung IT (64%)</span>
                              </li>
                              <li class="flex items-center">
                                <TrendingUp class="h-4 w-4 text-green-500 mr-2" ></TrendingUp>
                                <span>Stabiles Risiko HR (23%)</span>
                              </li>
                              <li class="flex items-center">
                                <TrendingUp class="h-4 w-4 text-orange-500 mr-2" ></TrendingUp>
                                <span>Neue Hotspots Procurement (78%)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Pattern Recognition</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-purple-800 space-y-2">
                              <li>• Saisonale Spitzen in Q4 identifiziert</li>
                              <li>• Korrelation zwischen Überstunden und Meldungen</li>
                              <li>• Führungswechsel erhöht Meldungsvolumen</li>
                              <li>• Anonyme Meldungen häufiger substantiiert</li>
                              <li>• Wiederkehrende Themen in bestimmten Teams</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-3">Empfehlungen</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-purple-800 space-y-2">
                              <li>• Präventive Maßnahmen für Sales-Team</li>
                              <li>• Verstärkte Schulungen im Procurement</li>
                              <li>• Review der Compliance-Prozesse in IT</li>
                              <li>• Frühe Intervention bei Teamwechseln</li>
                              <li>• Anonymität fördern und kommunizieren</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Kontinuierliche Verbesserung" 
                  icon={TrendingUp}
                >
                  <div class="space-y-6">
                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Improvement Zyklen</h4>
                      <div class="grid grid-cols-1 gap-6">
                        <div class="space-y-4">
                          {/* PDCA Zyklus */}
                          <div class="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                            <h5 class="font-semibold text-blue-900 mb-4 flex items-center">
                              <RotateCcw class="h-6 w-6 text-blue-600 mr-3" ></RotateCcw>
                              PDCA-Zyklus für kontinuierliche Verbesserung
                            </h5>
                            <div>
                              <div class="text-center">
                                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span class="text-xl font-bold text-blue-600">P</span>
                                </div>
                                <h6 class="font-semibold text-blue-900 mb-2">Plan</h6>
                                <ul class="text-sm text-blue-700 space-y-1">
                                  <li>• Probleme identifizieren</li>
                                  <li>• Ziele definieren</li>
                                  <li>• Lösungsansätze entwickeln</li>
                                  <li>• Ressourcen planen</li>
                                </ul>
                              </div>
                              <div class="text-center">
                                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span class="text-xl font-bold text-green-600">D</span>
                                </div>
                                <h6 class="font-semibold text-green-900 mb-2">Do</h6>
                                <ul class="text-sm text-green-700 space-y-1">
                                  <li>• Maßnahmen umsetzen</li>
                                  <li>• Pilotprojekte durchführen</li>
                                  <li>• Daten sammeln</li>
                                  <li>• Progress dokumentieren</li>
                                </ul>
                              </div>
                              <div class="text-center">
                                <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span class="text-xl font-bold text-yellow-600">C</span>
                                </div>
                                <h6 class="font-semibold text-yellow-900 mb-2">Check</h6>
                                <ul class="text-sm text-yellow-700 space-y-1">
                                  <li>• Ergebnisse messen</li>
                                  <li>• Zielerreichung prüfen</li>
                                  <li>• Abweichungen analysieren</li>
                                  <li>• Lessons Learned</li>
                                </ul>
                              </div>
                              <div class="text-center">
                                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span class="text-xl font-bold text-purple-600">A</span>
                                </div>
                                <h6 class="font-semibold text-purple-900 mb-2">Act</h6>
                                <ul class="text-sm text-purple-700 space-y-1">
                                  <li>• Standards anpassen</li>
                                  <li>• Best Practices implementieren</li>
                                  <li>• Prozesse optimieren</li>
                                  <li>• Neuen Zyklus starten</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Verbesserungsiniiativen */}
                          <div class="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                            <h5 class="font-semibold text-green-900 mb-4">Aktuelle Verbesserungsinitiativen</h5>
                            <div>
                              <div>
                                <h6 class="font-semibold text-green-800 mb-3">Laufende Projekte</h6>
                                <div class="space-y-3">
                                  <div class="bg-green-50 p-3 rounded-lg">
                                    <div class="flex justify-between items-center mb-1">
                                      <span class="text-sm font-medium text-green-800">KI-gestützte Kategorisierung</span>
                                      <span class="text-xs text-green-600">75%</span>
                                    </div>
                                    <div class="w-full bg-green-200 rounded-full h-2">
                                      <div class="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                                    </div>
                                  </div>
                                  <div class="bg-green-50 p-3 rounded-lg">
                                    <div class="flex justify-between items-center mb-1">
                                      <span class="text-sm font-medium text-green-800">Mobile App Entwicklung</span>
                                      <span class="text-xs text-green-600">45%</span>
                                    </div>
                                    <div class="w-full bg-green-200 rounded-full h-2">
                                      <div class="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                                    </div>
                                  </div>
                                  <div class="bg-green-50 p-3 rounded-lg">
                                    <div class="flex justify-between items-center mb-1">
                                      <span class="text-sm font-medium text-green-800">Prozessautomatisierung</span>
                                      <span class="text-xs text-green-600">90%</span>
                                    </div>
                                    <div class="w-full bg-green-200 rounded-full h-2">
                                      <div class="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h6 class="font-semibold text-green-800 mb-3">Geplante Initiativen</h6>
                                <div class="space-y-2">
                                  <div class="bg-gray-50 p-3 rounded-lg">
                                    <span class="text-sm font-medium text-gray-700">Blockchain-Integration für Transparenz</span>
                                    <div class="text-xs text-gray-500 mt-1">Q1 2025</div>
                                  </div>
                                  <div class="bg-gray-50 p-3 rounded-lg">
                                    <span class="text-sm font-medium text-gray-700">VR-Training für Investigatoren</span>
                                    <div class="text-xs text-gray-500 mt-1">Q2 2025</div>
                                  </div>
                                  <div class="bg-gray-50 p-3 rounded-lg">
                                    <span class="text-sm font-medium text-gray-700">Internationales Benchmark-Programm</span>
                                    <div class="text-xs text-gray-500 mt-1">Q3 2025</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Stakeholder Feedback Integration</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Mitarbeiter Feedback</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Quartalsweise Umfragen</li>
                            <li>• Focus Groups</li>
                            <li>• Pulse Surveys</li>
                            <li>• Exit Interviews</li>
                            <li>• Anonyme Suggestion Box</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Management Feedback</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Board Reviews</li>
                            <li>• Führungskräfte-Workshops</li>
                            <li>• 360-Grad-Feedback</li>
                            <li>• Performance Reviews</li>
                            <li>• Strategic Planning Sessions</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Externe Stakeholder</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• Aufsichtsbehörden-Dialog</li>
                            <li>• Branchenaustausch</li>
                            <li>• Beratergremien</li>
                            <li>• Akademische Partnerschaften</li>
                            <li>• NGO-Kooperationen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Systemnutzer</h5>
                          <ul class="text-sm text-yellow-800 space-y-1">
                            <li>• User Experience Testing</li>
                            <li>• Usability Studies</li>
                            <li>• Feature Requests</li>
                            <li>• Bug Reports</li>
                            <li>• Performance Feedback</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-cyan-600 hover:bg-cyan-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 12: Compliance */}
            {currentSection === 12 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl">
                      <CheckCircle class="h-8 w-8 text-white" ></CheckCircle>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Compliance</h1>
                      <p class="text-xl text-gray-600">Einhaltung gesetzlicher Vorgaben und Standards</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Compliance-Management-System" 
                  icon={Settings}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-emerald-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-emerald-900 mb-4">Drei-Linien-Modell der Compliance</h4>
                      <div>
                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                          <h5 class="font-semibold text-blue-900 mb-3 flex items-center">
                            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                            Erste Verteidigungslinie
                          </h5>
                          <div class="space-y-3">
                            <div>
                              <strong class="text-blue-800">Operative Bereiche:</strong>
                              <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• Fachbereiche und Geschäftseinheiten</li>
                                <li>• Frontline Management</li>
                                <li>• Operatives Personal</li>
                                <li>• Prozessverantwortliche</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-blue-800">Aufgaben:</strong>
                              <ul class="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• Tägliche Compliance-Umsetzung</li>
                                <li>• Erste Risikokontrolle</li>
                                <li>• Selbstüberwachung</li>
                                <li>• Incident Detection</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                          <h5 class="font-semibold text-green-900 mb-3 flex items-center">
                            <div class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                            Zweite Verteidigungslinie
                          </h5>
                          <div class="space-y-3">
                            <div>
                              <strong class="text-green-800">Compliance & Risk Management:</strong>
                              <ul class="text-sm text-green-700 mt-1 space-y-1">
                                <li>• Compliance Officer</li>
                                <li>• Risk Manager</li>
                                <li>• Hinweisgeberstellen</li>
                                <li>• Legal Department</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-green-800">Aufgaben:</strong>
                              <ul class="text-sm text-green-700 mt-1 space-y-1">
                                <li>• Überwachung der Compliance</li>
                                <li>• Risikoidentifikation</li>
                                <li>• Richtlinienentwicklung</li>
                                <li>• Monitoring und Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg border-l-4 border-l-purple-500">
                          <h5 class="font-semibold text-purple-900 mb-3 flex items-center">
                            <div class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                            Dritte Verteidigungslinie
                          </h5>
                          <div class="space-y-3">
                            <div>
                              <strong class="text-purple-800">Interne Revision:</strong>
                              <ul class="text-sm text-purple-700 mt-1 space-y-1">
                                <li>• Internal Audit</li>
                                <li>• Externe Auditoren</li>
                                <li>• Prüfungsausschuss</li>
                                <li>• Forensic Specialists</li>
                              </ul>
                            </div>
                            <div>
                              <strong class="text-purple-800">Aufgaben:</strong>
                              <ul class="text-sm text-purple-700 mt-1 space-y-1">
                                <li>• Unabhängige Prüfung</li>
                                <li>• Systemwirksamkeit bewerten</li>
                                <li>• Assurance Services</li>
                                <li>• Board Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Compliance-Governance</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Organisationsstruktur</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Aufsichtsrat/Board:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Strategische Oversight</li>
                                <li>• Compliance-Ziele definieren</li>
                                <li>• Ressourcenallokation</li>
                                <li>• Performance Review</li>
                                <li>• Whistleblower-Schutz sicherstellen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Geschäftsführung:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Compliance-Kultur schaffen</li>
                                <li>• Tone from the top</li>
                                <li>• Budget und Ressourcen</li>
                                <li>• Eskalationsempfänger</li>
                                <li>• Externes Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Compliance-Komitees</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Executive Compliance Committee:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• C-Level Besetzung</li>
                                <li>• Monatliche Meetings</li>
                                <li>• Strategische Entscheidungen</li>
                                <li>• Budgetverantwortung</li>
                                <li>• Krisenmanagement</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-blue-800">Operational Compliance Committee:</strong>
                              <ul class="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Fachbereichsleiter</li>
                                <li>• Wöchentliche Meetings</li>
                                <li>• Operative Umsetzung</li>
                                <li>• Case Review</li>
                                <li>• Process Improvement</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Regulatorische Compliance" 
                  icon={Gavel}
                >
                  <div class="space-y-6">
                    <div class="bg-gray-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-gray-900 mb-4">Anwendbare Rechtsvorschriften</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Primäre Compliance-Bereiche</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong class="text-red-700">HinSchG-Compliance:</strong>
                              <ul class="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Meldestellen einrichten und betreiben</li>
                                <li>• Verfahrensfristen einhalten</li>
                                <li>• Dokumentationspflichten erfüllen</li>
                                <li>• Schulungen durchführen</li>
                                <li>• Repressalienverbot durchsetzen</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong class="text-blue-700">DSGVO-Compliance:</strong>
                              <ul class="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Rechtsgrundlagen dokumentieren</li>
                                <li>• Datenminimierung umsetzen</li>
                                <li>• Betroffenenrechte gewährleisten</li>
                                <li>• Privacy by Design implementieren</li>
                                <li>• Löschkonzepte etablieren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-gray-900 mb-3">Sekundäre Compliance-Bereiche</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong class="text-green-700">Arbeitsrecht:</strong>
                              <ul class="text-sm text-green-600 mt-2 space-y-1">
                                <li>• Betriebsrat-Mitbestimmung</li>
                                <li>• Personalakten-Führung</li>
                                <li>• Gleichbehandlung sicherstellen</li>
                                <li>• Kündigungsschutz beachten</li>
                                <li>• Arbeitszeit-Compliance</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong class="text-purple-700">Branchenspezifische Regelungen:</strong>
                              <ul class="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Finanzmarktaufsicht (BaFin)</li>
                                <li>• Medizinprodukte-Verordnung</li>
                                <li>• Lebensmittelsicherheit</li>
                                <li>• Umweltschutzbestimmungen</li>
                                <li>• Kartellrecht</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Compliance-Monitoring und -Testing</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Kontinuierliches Monitoring</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-yellow-800 space-y-2">
                              <li class="flex items-center">
                                <CheckCircle class="h-4 w-4 text-green-500 mr-2" ></CheckCircle>
                                <span>Automatisierte Compliance-Checks</span>
                              </li>
                              <li class="flex items-center">
                                <CheckCircle class="h-4 w-4 text-green-500 mr-2" ></CheckCircle>
                                <span>Real-time Monitoring Dashboard</span>
                              </li>
                              <li class="flex items-center">
                                <CheckCircle class="h-4 w-4 text-green-500 mr-2" ></CheckCircle>
                                <span>Exception Reporting</span>
                              </li>
                              <li class="flex items-center">
                                <CheckCircle class="h-4 w-4 text-green-500 mr-2" ></CheckCircle>
                                <span>Trend-Analyse</span>
                              </li>
                              <li class="flex items-center">
                                <CheckCircle class="h-4 w-4 text-green-500 mr-2" ></CheckCircle>
                                <span>Predictive Compliance Analytics</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Periodisches Testing</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-yellow-800 space-y-2">
                              <li class="flex items-center">
                                <Calendar class="h-4 w-4 text-blue-500 mr-2" ></Calendar>
                                <span>Quartalsweise Control Tests</span>
                              </li>
                              <li class="flex items-center">
                                <Calendar class="h-4 w-4 text-blue-500 mr-2" ></Calendar>
                                <span>Jährliche Compliance Audits</span>
                              </li>
                              <li class="flex items-center">
                                <Calendar class="h-4 w-4 text-blue-500 mr-2" ></Calendar>
                                <span>Ad-hoc Vulnerability Assessments</span>
                              </li>
                              <li class="flex items-center">
                                <Calendar class="h-4 w-4 text-blue-500 mr-2" ></Calendar>
                                <span>Penetration Testing</span>
                              </li>
                              <li class="flex items-center">
                                <Calendar class="h-4 w-4 text-blue-500 mr-2" ></Calendar>
                                <span>Regulatory Mock Audits</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Compliance-Metriken</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div class="flex justify-between items-center">
                                <span class="text-sm text-yellow-800">Compliance Score</span>
                                <span class="font-bold text-green-600">94%</span>
                              </div>
                              <div class="flex justify-between items-center">
                                <span class="text-sm text-yellow-800">Control Effectiveness</span>
                                <span class="font-bold text-green-600">97%</span>
                              </div>
                              <div class="flex justify-between items-center">
                                <span class="text-sm text-yellow-800">Training Completion</span>
                                <span class="font-bold text-yellow-600">89%</span>
                              </div>
                              <div class="flex justify-between items-center">
                                <span class="text-sm text-yellow-800">Incident Response Time</span>
                                <span class="font-bold text-blue-600">2.3 hrs</span>
                              </div>
                              <div class="flex justify-between items-center">
                                <span class="text-sm text-yellow-800">Regulatory Violations</span>
                                <span class="font-bold text-green-600">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Audit und Zertifizierung" 
                  icon={Award}
                >
                  <div class="space-y-6">
                    <div class="bg-indigo-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-indigo-900 mb-4">Interne Audits</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Audit-Programm</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-indigo-800">Jährlicher Audit-Plan:</strong>
                              <ul class="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Q1: System Controls & Infrastructure</li>
                                <li>• Q2: Process Compliance & Documentation</li>
                                <li>• Q3: Training & Awareness Assessment</li>
                                <li>• Q4: Effectiveness & Risk Assessment</li>
                                <li>• Ad-hoc: Incident-driven Audits</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-indigo-800">Audit-Methodik:</strong>
                              <ul class="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Risk-based Approach</li>
                                <li>• COSO Framework Alignment</li>
                                <li>• ISO 19011 Standards</li>
                                <li>• Sampling-basierte Tests</li>
                                <li>• Continuous Auditing Tools</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-indigo-900 mb-3">Audit-Ergebnisse 2024</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <div class="space-y-2">
                                <div class="flex justify-between">
                                  <span class="text-sm text-indigo-700">Durchgeführte Audits:</span>
                                  <span class="font-semibold text-indigo-900">12</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-sm text-indigo-700">Identifizierte Findings:</span>
                                  <span class="font-semibold text-indigo-900">23</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-sm text-indigo-700">High-Priority Issues:</span>
                                  <span class="font-semibold text-red-600">2</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-sm text-indigo-700">Medium-Priority Issues:</span>
                                  <span class="font-semibold text-yellow-600">7</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-sm text-indigo-700">Low-Priority Issues:</span>
                                  <span class="font-semibold text-green-600">14</span>
                                </div>
                                <div class="flex justify-between">
                                  <span class="text-sm text-indigo-700">Behobene Findings:</span>
                                  <span class="font-semibold text-green-600">21/23</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Externe Zertifizierungen</h4>
                      <div>
                        <div class="bg-white p-4 rounded-lg text-center">
                          <Award class="h-12 w-12 text-green-500 mx-auto mb-3" ></Award>
                          <h5 class="font-semibold text-purple-900 mb-2">ISO 37002</h5>
                          <div class="text-sm text-purple-700 mb-2">Whistleblowing Management</div>
                          <div class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Zertifiziert</div>
                        </div>
                        <div class="bg-white p-4 rounded-lg text-center">
                          <Award class="h-12 w-12 text-blue-500 mx-auto mb-3" ></Award>
                          <h5 class="font-semibold text-purple-900 mb-2">ISO 37001</h5>
                          <div class="text-sm text-purple-700 mb-2">Anti-Bribery Management</div>
                          <div class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">In Vorbereitung</div>
                        </div>
                        <div class="bg-white p-4 rounded-lg text-center">
                          <Award class="h-12 w-12 text-purple-500 mx-auto mb-3" ></Award>
                          <h5 class="font-semibold text-purple-900 mb-2">ISO 19600</h5>
                          <div class="text-sm text-purple-700 mb-2">Compliance Management</div>
                          <div class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Geplant 2025</div>
                        </div>
                        <div class="bg-white p-4 rounded-lg text-center">
                          <Award class="h-12 w-12 text-orange-500 mx-auto mb-3" ></Award>
                          <h5 class="font-semibold text-purple-900 mb-2">SOC 2 Type II</h5>
                          <div class="text-sm text-purple-700 mb-2">Security Controls</div>
                          <div class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Zertifiziert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 13: Technische Umsetzung */}
            {currentSection === 13 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-violet-500 to-violet-600 rounded-xl">
                      <Settings class="h-8 w-8 text-white" ></Settings>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Technische Umsetzung</h1>
                      <p class="text-xl text-gray-600">Digitale Systeme und IT-Infrastruktur</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Systemarchitektur und Komponenten" 
                  icon={Server}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-violet-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-violet-900 mb-4">Moderne Meldesystem-Architektur</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-violet-900 mb-3">Frontend-Komponenten</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-violet-800">Webportal:</strong>
                              <ul class="text-sm text-violet-700 mt-2 space-y-1">
                                <li>• Responsive Design (Desktop/Mobile)</li>
                                <li>• Multi-Language Support (DE/EN/FR/ES)</li>
                                <li>• WCAG 2.1 AA Accessibility</li>
                                <li>• Progressive Web App (PWA)</li>
                                <li>• Offline-Funktionalität</li>
                              </ul>
                              <div class="mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700">
                                Tech Stack: React, TypeScript, TailwindCSS
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-violet-800">Mobile Apps:</strong>
                              <ul class="text-sm text-violet-700 mt-2 space-y-1">
                                <li>• Native iOS/Android Apps</li>
                                <li>• Biometrische Authentifizierung</li>
                                <li>• Push-Benachrichtigungen</li>
                                <li>• Secure Local Storage</li>
                                <li>• Voice Recording Feature</li>
                              </ul>
                              <div class="mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700">
                                Tech Stack: React Native, Swift, Kotlin
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-violet-900 mb-3">Backend-Infrastruktur</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-violet-800">API-Layer:</strong>
                              <ul class="text-sm text-violet-700 mt-2 space-y-1">
                                <li>• RESTful API mit GraphQL Gateway</li>
                                <li>• OAuth 2.0 / SAML 2.0 Integration</li>
                                <li>• Rate Limiting & DDoS Protection</li>
                                <li>• API Versioning & Documentation</li>
                                <li>• WebSocket für Real-time Updates</li>
                              </ul>
                              <div class="mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700">
                                Tech Stack: Node.js, Express, Apollo Server
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-violet-800">Microservices:</strong>
                              <ul class="text-sm text-violet-700 mt-2 space-y-1">
                                <li>• Authentication Service</li>
                                <li>• Case Management Service</li>
                                <li>• Notification Service</li>
                                <li>• Document Processing Service</li>
                                <li>• Analytics & Reporting Service</li>
                              </ul>
                              <div class="mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700">
                                Tech Stack: Docker, Kubernetes, RabbitMQ
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Sicherheitsarchitektur</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Datenverschlüsselung</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-blue-800 space-y-2">
                              <li class="flex items-start space-x-2">
                                <Lock class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Lock>
                                <div>
                                  <strong>In Transit:</strong>
                                  <span class="text-xs block text-blue-700">TLS 1.3, HSTS, Certificate Pinning</span>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Lock class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Lock>
                                <div>
                                  <strong>At Rest:</strong>
                                  <span class="text-xs block text-blue-700">AES-256-GCM, HSM Integration</span>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Lock class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Lock>
                                <div>
                                  <strong>Key Management:</strong>
                                  <span class="text-xs block text-blue-700">AWS KMS, Azure Key Vault</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Zero-Trust Security</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-blue-800 space-y-2">
                              <li class="flex items-start space-x-2">
                                <Shield class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Shield>
                                <div>
                                  <strong>Network Segmentation:</strong>
                                  <span class="text-xs block text-blue-700">VLANs, DMZ, Micro-Segmentation</span>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Shield class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Shield>
                                <div>
                                  <strong>Identity Verification:</strong>
                                  <span class="text-xs block text-blue-700">MFA, Continuous Authentication</span>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Shield class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Shield>
                                <div>
                                  <strong>Least Privilege:</strong>
                                  <span class="text-xs block text-blue-700">RBAC, Dynamic Permissions</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-2">Threat Detection</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-blue-800 space-y-2">
                              <li class="flex items-start space-x-2">
                                <Activity class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Activity>
                                <div>
                                  <strong>SIEM Integration:</strong>
                                  <span class="text-xs block text-blue-700">Splunk, ELK Stack, Datadog</span>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Activity class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Activity>
                                <div>
                                  <strong>Anomaly Detection:</strong>
                                  <span class="text-xs block text-blue-700">ML-based Pattern Recognition</span>
                                </div>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Activity class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Activity>
                                <div>
                                  <strong>Incident Response:</strong>
                                  <span class="text-xs block text-blue-700">Automated Playbooks, SOC</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Anonymisierung und Datenschutz" 
                  icon={Eye}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Technologien zur Anonymisierung</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Anonyme Kommunikationskanäle</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Tor-Integration:</strong>
                              <div class="mt-2 space-y-2">
                                <div class="flex items-start space-x-2">
                                  <Check class="h-4 w-4 text-green-600 mt-0.5" ></Check>
                                  <span class="text-sm text-green-700">Hidden Service (.onion Address)</span>
                                </div>
                                <div class="flex items-start space-x-2">
                                  <Check class="h-4 w-4 text-green-600 mt-0.5" ></Check>
                                  <span class="text-sm text-green-700">SecureDrop Implementation</span>
                                </div>
                                <div class="flex items-start space-x-2">
                                  <Check class="h-4 w-4 text-green-600 mt-0.5" ></Check>
                                  <span class="text-sm text-green-700">Metadata Stripping</span>
                                </div>
                              </div>
                              <div class="mt-3 p-2 bg-green-100 rounded">
                                <p class="text-xs text-green-800">
                                  <strong>Implementierung:</strong> Tor Browser Bundle, OnionShare, Tails OS
                                </p>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Proxy-Chains:</strong>
                              <div class="mt-2 space-y-2">
                                <div class="flex items-start space-x-2">
                                  <Check class="h-4 w-4 text-green-600 mt-0.5" ></Check>
                                  <span class="text-sm text-green-700">Multi-Hop VPN Routing</span>
                                </div>
                                <div class="flex items-start space-x-2">
                                  <Check class="h-4 w-4 text-green-600 mt-0.5" ></Check>
                                  <span class="text-sm text-green-700">Obfuscated Bridges</span>
                                </div>
                                <div class="flex items-start space-x-2">
                                  <Check class="h-4 w-4 text-green-600 mt-0.5" ></Check>
                                  <span class="text-sm text-green-700">Traffic Mixing</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Datenschutztechniken</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Privacy-Enhancing Technologies:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Differential Privacy Algorithms</li>
                                <li>• Homomorphic Encryption</li>
                                <li>• Secure Multi-Party Computation</li>
                                <li>• k-Anonymity Implementation</li>
                                <li>• Data Masking & Tokenization</li>
                              </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">GDPR-Compliance Features:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Automatisches Recht auf Löschung</li>
                                <li>• Pseudonymisierung by Design</li>
                                <li>• Consent Management</li>
                                <li>• Data Portability API</li>
                                <li>• Privacy Impact Assessment Tools</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Technische Datenschutzmaßnahmen</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Browser Security</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <ul class="text-xs text-yellow-800 space-y-1">
                              <li>• WebRTC Leak Protection</li>
                              <li>• Canvas Fingerprinting Block</li>
                              <li>• Third-Party Cookie Block</li>
                              <li>• DNS-over-HTTPS</li>
                              <li>• JavaScript Sandboxing</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Network Protection</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <ul class="text-xs text-yellow-800 space-y-1">
                              <li>• IP Address Masking</li>
                              <li>• Traffic Obfuscation</li>
                              <li>• Deep Packet Inspection Defense</li>
                              <li>• Timing Attack Mitigation</li>
                              <li>• Side-Channel Protection</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Data Minimization</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <ul class="text-xs text-yellow-800 space-y-1">
                              <li>• Automatic Data Expiry</li>
                              <li>• Minimal Logging Policy</li>
                              <li>• Ephemeral Sessions</li>
                              <li>• Zero-Knowledge Architecture</li>
                              <li>• Stateless Design</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Audit Protection</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <ul class="text-xs text-yellow-800 space-y-1">
                              <li>• Immutable Audit Logs</li>
                              <li>• Cryptographic Timestamping</li>
                              <li>• Blockchain Integration</li>
                              <li>• Tamper Detection</li>
                              <li>• Forensic Readiness</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Integration und Schnittstellen" 
                  icon={Network}
                >
                  <div class="space-y-6">
                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Enterprise-Integration</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">HR-System Integration</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Supported Systems:</strong>
                              <div class="mt-2 grid grid-cols-2 gap-2">
                                <div class="text-sm text-orange-700 flex items-center space-x-1">
                                  <Check class="h-3 w-3 text-orange-600" ></Check>
                                  <span>SAP SuccessFactors</span>
                                </div>
                                <div class="text-sm text-orange-700 flex items-center space-x-1">
                                  <Check class="h-3 w-3 text-orange-600" ></Check>
                                  <span>Workday HCM</span>
                                </div>
                                <div class="text-sm text-orange-700 flex items-center space-x-1">
                                  <Check class="h-3 w-3 text-orange-600" ></Check>
                                  <span>Oracle HCM Cloud</span>
                                </div>
                                <div class="text-sm text-orange-700 flex items-center space-x-1">
                                  <Check class="h-3 w-3 text-orange-600" ></Check>
                                  <span>Microsoft Dynamics</span>
                                </div>
                              </div>
                              <div class="mt-3 text-xs text-orange-700 bg-orange-100 p-2 rounded">
                                Features: Employee Data Sync, Org Chart Import, Role Mapping
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">API Capabilities:</strong>
                              <ul class="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Real-time Employee Status Updates</li>
                                <li>• Automatic Deprovisioning</li>
                                <li>• Department Structure Sync</li>
                                <li>• Manager Hierarchy Import</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Compliance Tool Integration</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">GRC Platforms:</strong>
                              <div class="mt-2 space-y-2">
                                <div class="flex justify-between items-center">
                                  <span class="text-sm text-orange-700">ServiceNow GRC</span>
                                  <Badge class="bg-green-100 text-green-800 text-xs">Certified</Badge>
                                </div>
                                <div class="flex justify-between items-center">
                                  <span class="text-sm text-orange-700">SAP GRC</span>
                                  <Badge class="bg-green-100 text-green-800 text-xs">Certified</Badge>
                                </div>
                                <div class="flex justify-between items-center">
                                  <span class="text-sm text-orange-700">MetricStream</span>
                                  <Badge class="bg-blue-100 text-blue-800 text-xs">Beta</Badge>
                                </div>
                                <div class="flex justify-between items-center">
                                  <span class="text-sm text-orange-700">RSA Archer</span>
                                  <Badge class="bg-yellow-100 text-yellow-800 text-xs">Planned</Badge>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-orange-800">Data Exchange:</strong>
                              <ul class="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Bi-directional Case Sync</li>
                                <li>• Risk Assessment Import</li>
                                <li>• Compliance Dashboard Feed</li>
                                <li>• Automated Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Technische Implementierungsroadmap</h4>
                      <div class="space-y-4">
                        <div class="relative">
                          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-300"></div>
                          <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                              <div class="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                                Phase 1
                              </div>
                              <div class="flex-1 bg-white p-4 rounded-lg">
                                <h5 class="font-semibold text-purple-900 mb-2">Basis-Implementation (Woche 1-4)</h5>
                                <div>
                                  <ul class="text-sm text-purple-700 space-y-1">
                                    <li>• Cloud-Infrastruktur Setup</li>
                                    <li>• Basis-Security Implementation</li>
                                    <li>• Core API Development</li>
                                    <li>• Database Schema Design</li>
                                  </ul>
                                  <ul class="text-sm text-purple-700 space-y-1">
                                    <li>• Authentication System</li>
                                    <li>• Basic UI/UX Implementation</li>
                                    <li>• Initial Testing Framework</li>
                                    <li>• CI/CD Pipeline Setup</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="flex items-start space-x-4">
                              <div class="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                                Phase 2
                              </div>
                              <div class="flex-1 bg-white p-4 rounded-lg">
                                <h5 class="font-semibold text-purple-900 mb-2">Erweiterte Features (Woche 5-8)</h5>
                                <div>
                                  <ul class="text-sm text-purple-700 space-y-1">
                                    <li>• Anonymisierungsfunktionen</li>
                                    <li>• Case Management System</li>
                                    <li>• Workflow Automation</li>
                                    <li>• Document Management</li>
                                  </ul>
                                  <ul class="text-sm text-purple-700 space-y-1">
                                    <li>• Notification Engine</li>
                                    <li>• Reporting Dashboard</li>
                                    <li>• Mobile App Development</li>
                                    <li>• Integration APIs</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="flex items-start space-x-4">
                              <div class="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                                Phase 3
                              </div>
                              <div class="flex-1 bg-white p-4 rounded-lg">
                                <h5 class="font-semibold text-purple-900 mb-2">Go-Live & Optimization (Woche 9-12)</h5>
                                <div>
                                  <ul class="text-sm text-purple-700 space-y-1">
                                    <li>• Security Audit & Pen Testing</li>
                                    <li>• Performance Optimization</li>
                                    <li>• User Acceptance Testing</li>
                                    <li>• Documentation Completion</li>
                                  </ul>
                                  <ul class="text-sm text-purple-700 space-y-1">
                                    <li>• Training Materials</li>
                                    <li>• Rollout Strategy</li>
                                    <li>• Support Infrastructure</li>
                                    <li>• Monitoring Setup</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-violet-600 hover:bg-violet-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 14: Implementierung */}
            {currentSection === 14 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl">
                      <Zap class="h-8 w-8 text-white" ></Zap>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Implementierung</h1>
                      <p class="text-xl text-gray-600">Praktische Umsetzung in der Organisation</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Projektplanung und Meilensteine" 
                  icon={Target}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-rose-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-rose-900 mb-4">12-Wochen Implementierungsplan</h4>
                      <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg">
                          <div class="flex items-center justify-between mb-4">
                            <h5 class="font-semibold text-rose-900">Gesamtfortschritt</h5>
                            <span class="text-2xl font-bold text-rose-600">0%</span>
                          </div>
                          <Progress value={0} class="h-3 bg-rose-100" ></Progress>
                          <div class="grid grid-cols-4 gap-2 mt-4">
                            <div class="text-center">
                              <div class="text-xs text-rose-600 font-medium">Woche 1-3</div>
                              <div class="text-xs text-rose-500">Vorbereitung</div>
                            </div>
                            <div class="text-center">
                              <div class="text-xs text-rose-600 font-medium">Woche 4-6</div>
                              <div class="text-xs text-rose-500">Entwicklung</div>
                            </div>
                            <div class="text-center">
                              <div class="text-xs text-rose-600 font-medium">Woche 7-9</div>
                              <div class="text-xs text-rose-500">Testing</div>
                            </div>
                            <div class="text-center">
                              <div class="text-xs text-rose-600 font-medium">Woche 10-12</div>
                              <div class="text-xs text-rose-500">Rollout</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div class="bg-white p-4 rounded-lg">
                            <h5 class="font-semibold text-rose-900 mb-3">Quick Wins (Woche 1-2)</h5>
                            <div class="space-y-2">
                              <div class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-rose-600" />
                                <span class="text-sm text-rose-700">Projektteam zusammenstellen</span>
                              </div>
                              <div class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-rose-600" />
                                <span class="text-sm text-rose-700">Ist-Analyse durchführen</span>
                              </div>
                              <div class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-rose-600" />
                                <span class="text-sm text-rose-700">Stakeholder identifizieren</span>
                              </div>
                              <div class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-rose-600" />
                                <span class="text-sm text-rose-700">Budget freigeben</span>
                              </div>
                            </div>
                          </div>
                          <div class="bg-white p-4 rounded-lg">
                            <h5 class="font-semibold text-rose-900 mb-3">Kritische Pfade</h5>
                            <div class="space-y-2">
                              <div class="flex items-start space-x-2">
                                <AlertTriangle class="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                <span class="text-sm text-rose-700">Betriebsrat-Zustimmung (4 Wochen)</span>
                              </div>
                              <div class="flex items-start space-x-2">
                                <AlertTriangle class="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                <span class="text-sm text-rose-700">IT-Security Audit (2 Wochen)</span>
                              </div>
                              <div class="flex items-start space-x-2">
                                <AlertTriangle class="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                <span class="text-sm text-rose-700">Datenschutz-Freigabe (3 Wochen)</span>
                              </div>
                              <div class="flex items-start space-x-2">
                                <AlertTriangle class="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                <span class="text-sm text-rose-700">Management-Approval (1 Woche)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Change Management Strategie</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Kommunikationsplan</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div>
                                <strong class="text-blue-800 text-sm">Woche 1-2:</strong>
                                <p class="text-xs text-blue-700 mt-1">
                                  Management Briefing, Führungskräfte-Workshop
                                </p>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Woche 3-4:</strong>
                                <p class="text-xs text-blue-700 mt-1">
                                  All-Hands Meeting, Intranet-Kampagne
                                </p>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Woche 5-8:</strong>
                                <p class="text-xs text-blue-700 mt-1">
                                  Abteilungsschulungen, Q&A Sessions
                                </p>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Woche 9-12:</strong>
                                <p class="text-xs text-blue-700 mt-1">
                                  Go-Live Events, Success Stories
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Widerstände überwinden</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-2">
                              <div class="flex items-start space-x-2">
                                <Users class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Users>
                                <div>
                                  <strong class="text-blue-800 text-sm">Führungsebene:</strong>
                                  <p class="text-xs text-blue-700">Business Case, ROI-Analyse</p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-2">
                                <Users class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Users>
                                <div>
                                  <strong class="text-blue-800 text-sm">Mitarbeiter:</strong>
                                  <p class="text-xs text-blue-700">Anonymitätsgarantie, Schutz</p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-2">
                                <Users class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Users>
                                <div>
                                  <strong class="text-blue-800 text-sm">Betriebsrat:</strong>
                                  <p class="text-xs text-blue-700">Mitbestimmung, Transparenz</p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-2">
                                <Users class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></Users>
                                <div>
                                  <strong class="text-blue-800 text-sm">IT-Abteilung:</strong>
                                  <p class="text-xs text-blue-700">Standards, Integration</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Erfolgsmessung</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div>
                                <strong class="text-blue-800 text-sm">Adoptionsrate:</strong>
                                <div class="mt-1 flex items-center space-x-2">
                                  <Progress value={0} class="flex-1 h-2" ></Progress>
                                  <span class="text-xs text-blue-700">Ziel: 80%</span>
                                </div>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Meldungsqualität:</strong>
                                <div class="mt-1 flex items-center space-x-2">
                                  <Progress value={0} class="flex-1 h-2" ></Progress>
                                  <span class="text-xs text-blue-700">Ziel: 70%</span>
                                </div>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Bearbeitungszeit:</strong>
                                <div class="mt-1 flex items-center space-x-2">
                                  <Progress value={0} class="flex-1 h-2" ></Progress>
                                  <span class="text-xs text-blue-700">Ziel: &lt;20 Tage</span>
                                </div>
                              </div>
                              <div>
                                <strong class="text-blue-800 text-sm">Mitarbeiterzufriedenheit:</strong>
                                <div class="mt-1 flex items-center space-x-2">
                                  <Progress value={0} class="flex-1 h-2" ></Progress>
                                  <span class="text-xs text-blue-700">Ziel: 4.0/5.0</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Pilot-Phase und Testing" 
                  icon={FlaskConical}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">Pilot-Programm Design</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Pilot-Gruppen Auswahl</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Phase 1: Early Adopters (50 Personen)</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Compliance-Team (10 Personen)</li>
                                <li>• HR-Abteilung (15 Personen)</li>
                                <li>• IT-Security (10 Personen)</li>
                                <li>• Freiwillige Führungskräfte (15 Personen)</li>
                              </ul>
                              <div class="mt-2 text-xs text-green-600 bg-green-100 p-2 rounded">
                                Start: Woche 7 | Dauer: 2 Wochen
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Phase 2: Erweiterter Pilot (500 Personen)</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Ausgewählte Abteilungen</li>
                                <li>• Verschiedene Standorte</li>
                                <li>• Unterschiedliche Hierarchieebenen</li>
                                <li>• Internationale Teams</li>
                              </ul>
                              <div class="mt-2 text-xs text-green-600 bg-green-100 p-2 rounded">
                                Start: Woche 9 | Dauer: 3 Wochen
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Testing-Szenarien</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Funktionale Tests:</strong>
                              <div class="mt-2 space-y-2">
                                <label class="flex items-center space-x-2">
                                  <input type="checkbox" class="rounded text-green-600" />
                                  <span class="text-sm text-green-700">Anonyme Meldung erstellen</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                  <input type="checkbox" class="rounded text-green-600" />
                                  <span class="text-sm text-green-700">Dokumente hochladen</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                  <input type="checkbox" class="rounded text-green-600" />
                                  <span class="text-sm text-green-700">Status-Updates empfangen</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                  <input type="checkbox" class="rounded text-green-600" />
                                  <span class="text-sm text-green-700">Rückfragen beantworten</span>
                                </label>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <strong class="text-green-800">Last- und Performance-Tests:</strong>
                              <ul class="text-sm text-green-700 mt-2 space-y-1">
                                <li>• 1.000 gleichzeitige Nutzer</li>
                                <li>• 10.000 Meldungen/Monat</li>
                                <li>• 100 GB Dokumenten-Upload</li>
                                <li>• 24/7 Verfügbarkeit</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Feedback-Sammlung und Optimierung</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Quantitative Metriken</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-2">
                              <div class="text-sm">
                                <div class="flex justify-between mb-1">
                                  <span class="text-yellow-700">System-Uptime</span>
                                  <span class="font-medium">99.9%</span>
                                </div>
                                <Progress value={99.9} class="h-2" ></Progress>
                              </div>
                              <div class="text-sm">
                                <div class="flex justify-between mb-1">
                                  <span class="text-yellow-700">Response Time</span>
                                  <span class="font-medium">&lt; 2s</span>
                                </div>
                                <Progress value={85} class="h-2" ></Progress>
                              </div>
                              <div class="text-sm">
                                <div class="flex justify-between mb-1">
                                  <span class="text-yellow-700">Error Rate</span>
                                  <span class="font-medium">0.1%</span>
                                </div>
                                <Progress value={99.9} class="h-2" ></Progress>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Qualitative Insights</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-yellow-700 space-y-2">
                              <li class="flex items-start space-x-2">
                                <MessageSquare class="h-4 w-4 text-yellow-600 mt-0.5" ></MessageSquare>
                                <span>User Interviews (n=25)</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <FileText class="h-4 w-4 text-yellow-600 mt-0.5" ></FileText>
                                <span>Usability Testing Sessions</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Users class="h-4 w-4 text-yellow-600 mt-0.5" ></Users>
                                <span>Focus Groups (4 Gruppen)</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <BarChart3 class="h-4 w-4 text-yellow-600 mt-0.5" ></BarChart3>
                                <span>Net Promoter Score: 72</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-2">Optimierungen</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-2">
                              <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span class="text-sm text-yellow-700">UI/UX Verbesserungen</span>
                              </div>
                              <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span class="text-sm text-yellow-700">Performance-Tuning</span>
                              </div>
                              <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span class="text-sm text-yellow-700">Feature-Erweiterungen</span>
                              </div>
                              <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span class="text-sm text-yellow-700">Prozess-Anpassungen</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Rollout und Go-Live" 
                  icon={Rocket}
                >
                  <div class="space-y-6">
                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Go-Live Checkliste</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">Technische Readiness</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Produktion deployed</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Monitoring aktiv</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Backup getestet</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Security-Audit passed</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Failover getestet</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">Organisatorisch</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Team geschult</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Prozesse definiert</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Eskalation klar</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Support bereit</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">FAQ erstellt</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">Kommunikation</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Ankündigung versendet</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Intranet aktualisiert</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Poster aufgehängt</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Videos online</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Hotline aktiv</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">Rechtlich</h5>
                          <div class="bg-white p-3 rounded-lg">
                            <div class="space-y-2">
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Datenschutz geprüft</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Betriebsvereinbarung</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Compliance bestätigt</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Verträge unterzeichnet</span>
                              </label>
                              <label class="flex items-center space-x-2">
                                <input type="checkbox" class="rounded text-purple-600" />
                                <span class="text-xs text-purple-700">Versicherung aktiv</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-orange-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-orange-900 mb-4">Launch-Aktivitäten</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Go-Live Event (Tag 1)</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-orange-600 font-bold">09:00</div>
                                <div class="flex-1">
                                  <strong class="text-orange-800">System-Aktivierung</strong>
                                  <p class="text-sm text-orange-700">Technisches Go-Live, Monitoring Start</p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-orange-600 font-bold">10:00</div>
                                <div class="flex-1">
                                  <strong class="text-orange-800">CEO Announcement</strong>
                                  <p class="text-sm text-orange-700">Videobotschaft, E-Mail an alle</p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-orange-600 font-bold">11:00</div>
                                <div class="flex-1">
                                  <strong class="text-orange-800">Live-Demos</strong>
                                  <p class="text-sm text-orange-700">Stündliche Vorführungen</p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-orange-600 font-bold">14:00</div>
                                <div class="flex-1">
                                  <strong class="text-orange-800">Q&A Sessions</strong>
                                  <p class="text-sm text-orange-700">Offene Fragerunden</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-orange-900 mb-3">Erste Woche Support</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="grid grid-cols-2 gap-4">
                              <div>
                                <strong class="text-orange-800 text-sm">War Room Team</strong>
                                <ul class="text-xs text-orange-700 mt-2 space-y-1">
                                  <li>• 24/7 Bereitschaft</li>
                                  <li>• Incident Management</li>
                                  <li>• Quick Fixes</li>
                                  <li>• Status Updates</li>
                                </ul>
                              </div>
                              <div>
                                <strong class="text-orange-800 text-sm">User Support</strong>
                                <ul class="text-xs text-orange-700 mt-2 space-y-1">
                                  <li>• Dedicated Hotline</li>
                                  <li>• Floor Walker</li>
                                  <li>• Chat Support</li>
                                  <li>• Video Tutorials</li>
                                </ul>
                              </div>
                            </div>
                            <div class="mt-4 p-3 bg-orange-100 rounded">
                              <div class="flex items-center justify-between">
                                <span class="text-sm font-medium text-orange-800">Support-Tickets</span>
                                <span class="text-lg font-bold text-orange-600">0</span>
                              </div>
                              <Progress value={0} class="mt-2 h-2" ></Progress>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-rose-600 hover:bg-rose-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 15: Continuous Improvement */}
            {currentSection === 15 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div class="mb-8">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="p-3 bg-gradient-to-r from-lime-500 to-lime-600 rounded-xl">
                      <TrendingUp class="h-8 w-8 text-white" ></TrendingUp>
                    </div>
                    <div>
                      <h1 class="text-4xl font-bold text-gray-900">Continuous Improvement</h1>
                      <p class="text-xl text-gray-600">Kontinuierliche Weiterentwicklung und Optimierung</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Leistungsmessung und KPIs" 
                  icon={BarChart3}
                  defaultExpanded={true}
                >
                  <div class="space-y-6">
                    <div class="bg-lime-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-lime-900 mb-4">Key Performance Indicators Dashboard</h4>
                      <div>
                        <div class="bg-white p-4 rounded-lg border-2 border-lime-200">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-medium text-lime-700">Meldungen/Monat</span>
                            <TrendingUp class="h-4 w-4 text-green-500" ></TrendingUp>
                          </div>
                          <div class="text-2xl font-bold text-lime-900">127</div>
                          <div class="text-xs text-lime-600 mt-1">+23% vs. Vormonat</div>
                          <Progress value={75} class="mt-2 h-1" ></Progress>
                        </div>
                        <div class="bg-white p-4 rounded-lg border-2 border-lime-200">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-medium text-lime-700">Ø Bearbeitungszeit</span>
                            <TrendingDown class="h-4 w-4 text-red-500" ></TrendingDown>
                          </div>
                          <div class="text-2xl font-bold text-lime-900">18 Tage</div>
                          <div class="text-xs text-lime-600 mt-1">-5 Tage vs. Q1</div>
                          <Progress value={82} class="mt-2 h-1" ></Progress>
                        </div>
                        <div class="bg-white p-4 rounded-lg border-2 border-lime-200">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-medium text-lime-700">Substantiierungsrate</span>
                            <Minus class="h-4 w-4 text-yellow-500" ></Minus>
                          </div>
                          <div class="text-2xl font-bold text-lime-900">67%</div>
                          <div class="text-xs text-lime-600 mt-1">Stabil</div>
                          <Progress value={67} class="mt-2 h-1" ></Progress>
                        </div>
                        <div class="bg-white p-4 rounded-lg border-2 border-lime-200">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-medium text-lime-700">Anonyme Meldungen</span>
                            <TrendingUp class="h-4 w-4 text-green-500" ></TrendingUp>
                          </div>
                          <div class="text-2xl font-bold text-lime-900">43%</div>
                          <div class="text-xs text-lime-600 mt-1">+8% vs. Vorjahr</div>
                          <Progress value={43} class="mt-2 h-1" ></Progress>
                        </div>
                      </div>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-blue-900 mb-4">Detaillierte Metriken</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Prozess-Metriken</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Erstbestätigung &lt; 7 Tage</span>
                                  <span class="font-medium">98%</span>
                                </div>
                                <Progress value={98} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Abschluss &lt; 3 Monate</span>
                                  <span class="font-medium">89%</span>
                                </div>
                                <Progress value={89} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Eskalationsrate</span>
                                  <span class="font-medium">12%</span>
                                </div>
                                <Progress value={12} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Wiederöffnungsrate</span>
                                  <span class="font-medium">3%</span>
                                </div>
                                <Progress value={3} class="h-2" ></Progress>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Qualitäts-Metriken</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Meldungsqualität</span>
                                  <span class="font-medium">Gut</span>
                                </div>
                                <Progress value={84} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Untersuchungstiefe</span>
                                  <span class="font-medium">Sehr gut</span>
                                </div>
                                <Progress value={90} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Dokumentation</span>
                                  <span class="font-medium">Sehr gut</span>
                                </div>
                                <Progress value={94} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Nachvollziehbarkeit</span>
                                  <span class="font-medium">Exzellent</span>
                                </div>
                                <Progress value={96} class="h-2" ></Progress>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-900 mb-3">Impact-Metriken</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-3">
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Präventionswirkung</span>
                                  <span class="font-medium">Hoch</span>
                                </div>
                                <Progress value={78} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Schadensabwendung</span>
                                  <span class="font-medium">2.3M€</span>
                                </div>
                                <Progress value={85} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Kulturverbesserung</span>
                                  <span class="font-medium">+15%</span>
                                </div>
                                <Progress value={75} class="h-2" ></Progress>
                              </div>
                              <div>
                                <div class="flex justify-between text-sm mb-1">
                                  <span class="text-blue-700">Compliance Score</span>
                                  <span class="font-medium">92/100</span>
                                </div>
                                <Progress value={92} class="h-2" ></Progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Feedback-Loops und Verbesserungsprozesse" 
                  icon={RefreshCw}
                >
                  <div class="space-y-6">
                    <div class="bg-green-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-green-900 mb-4">360° Feedback-System</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Feedback-Quellen</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex items-start space-x-3">
                                <Users class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" ></Users>
                                <div class="flex-1">
                                  <strong class="text-green-800">Hinweisgeber-Feedback</strong>
                                  <ul class="text-sm text-green-700 mt-2 space-y-1">
                                    <li>• Post-Case Surveys (Response: 73%)</li>
                                    <li>• Anonyme Bewertungen</li>
                                    <li>• Verbesserungsvorschläge</li>
                                    <li>• User Experience Ratings</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg">
                              <div class="flex items-start space-x-3">
                                <Building class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" ></Building>
                                <div class="flex-1">
                                  <strong class="text-green-800">Stakeholder-Input</strong>
                                  <ul class="text-sm text-green-700 mt-2 space-y-1">
                                    <li>• Management Reviews (Quartalsweise)</li>
                                    <li>• Betriebsrat-Feedback</li>
                                    <li>• Compliance Committee Input</li>
                                    <li>• Externe Auditoren</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-green-900 mb-3">Verbesserungsprozess</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <div class="space-y-4">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                                <div class="flex-1">
                                  <strong class="text-green-800">Sammlung & Analyse</strong>
                                  <p class="text-sm text-green-700 mt-1">
                                    Monatliche Auswertung aller Feedback-Kanäle
                                  </p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                                <div class="flex-1">
                                  <strong class="text-green-800">Priorisierung</strong>
                                  <p class="text-sm text-green-700 mt-1">
                                    Impact-Effort-Matrix, ROI-Bewertung
                                  </p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                                <div class="flex-1">
                                  <strong class="text-green-800">Implementation</strong>
                                  <p class="text-sm text-green-700 mt-1">
                                    Agile Sprints, Quick Wins, Major Updates
                                  </p>
                                </div>
                              </div>
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                                <div class="flex-1">
                                  <strong class="text-green-800">Validierung</strong>
                                  <p class="text-sm text-green-700 mt-1">
                                    A/B Testing, Pilot Groups, Erfolgsmonitoring
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-purple-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-purple-900 mb-4">Innovation und Zukunftstrends</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">KI & Automation</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-purple-700 space-y-2">
                              <li class="flex items-start space-x-2">
                                <Brain class="h-4 w-4 text-purple-600 mt-0.5" ></Brain>
                                <span>NLP für Meldungsanalyse</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Brain class="h-4 w-4 text-purple-600 mt-0.5" ></Brain>
                                <span>Anomalie-Erkennung</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Brain class="h-4 w-4 text-purple-600 mt-0.5" ></Brain>
                                <span>Predictive Analytics</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Brain class="h-4 w-4 text-purple-600 mt-0.5" ></Brain>
                                <span>Chatbot-Integration</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">Blockchain</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-purple-700 space-y-2">
                              <li class="flex items-start space-x-2">
                                <Link2 class="h-4 w-4 text-purple-600 mt-0.5" ></Link2>
                                <span>Unveränderbare Logs</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Link2 class="h-4 w-4 text-purple-600 mt-0.5" ></Link2>
                                <span>Smart Contracts</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Link2 class="h-4 w-4 text-purple-600 mt-0.5" ></Link2>
                                <span>Dezentrale Identität</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Link2 class="h-4 w-4 text-purple-600 mt-0.5" ></Link2>
                                <span>Cross-Org Sharing</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">Advanced Analytics</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-purple-700 space-y-2">
                              <li class="flex items-start space-x-2">
                                <BarChart3 class="h-4 w-4 text-purple-600 mt-0.5" ></BarChart3>
                                <span>Pattern Recognition</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <BarChart3 class="h-4 w-4 text-purple-600 mt-0.5" ></BarChart3>
                                <span>Risk Scoring</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <BarChart3 class="h-4 w-4 text-purple-600 mt-0.5" ></BarChart3>
                                <span>Network Analysis</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <BarChart3 class="h-4 w-4 text-purple-600 mt-0.5" ></BarChart3>
                                <span>Sentiment Analysis</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-purple-900 mb-2">UX Innovation</h5>
                          <div class="bg-white p-4 rounded-lg">
                            <ul class="text-sm text-purple-700 space-y-2">
                              <li class="flex items-start space-x-2">
                                <Smartphone class="h-4 w-4 text-purple-600 mt-0.5" ></Smartphone>
                                <span>Voice Reporting</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Smartphone class="h-4 w-4 text-purple-600 mt-0.5" ></Smartphone>
                                <span>AR/VR Training</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Smartphone class="h-4 w-4 text-purple-600 mt-0.5" ></Smartphone>
                                <span>Gesture Control</span>
                              </li>
                              <li class="flex items-start space-x-2">
                                <Smartphone class="h-4 w-4 text-purple-600 mt-0.5" ></Smartphone>
                                <span>Biometric Auth</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Best Practices und Lessons Learned" 
                  icon={Award}
                >
                  <div class="space-y-6">
                    <div class="bg-yellow-50 p-6 rounded-lg">
                      <h4 class="text-lg font-semibold text-yellow-900 mb-4">Erfolgsgeschichten und Learnings</h4>
                      <div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Top 5 Erfolgsfaktoren</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-green-600 font-bold">#1</div>
                                <div>
                                  <strong class="text-yellow-800">Leadership Commitment</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    CEO persönlich involviert, regelmäßige Board-Updates, 
                                    null Toleranz für Repressalien
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-green-600 font-bold">#2</div>
                                <div>
                                  <strong class="text-yellow-800">Einfachheit & Zugänglichkeit</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    3-Klick-Meldung, Mobile-First, Mehrsprachigkeit, 
                                    24/7 Verfügbarkeit
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-green-600 font-bold">#3</div>
                                <div>
                                  <strong class="text-yellow-800">Schnelle Reaktionszeiten</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    7-Tage-Bestätigung zu 100% eingehalten, 
                                    durchschnittlich 18 Tage Bearbeitungszeit
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-green-600 font-bold">#4</div>
                                <div>
                                  <strong class="text-yellow-800">Transparente Kommunikation</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Regelmäßige Updates, Success Stories teilen, 
                                    offene Fehlerkultur
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <div class="flex items-start space-x-3">
                                <div class="flex-shrink-0 text-green-600 font-bold">#5</div>
                                <div>
                                  <strong class="text-yellow-800">Kontinuierliche Verbesserung</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Monatliche Reviews, User Feedback Integration, 
                                    agile Weiterentwicklung
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 class="font-semibold text-yellow-900 mb-3">Vermeidbare Fehler</h5>
                          <div class="space-y-3">
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-start space-x-3">
                                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-yellow-800">Technologie-Fokus</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Beste Software hilft nicht ohne Kulturwandel und 
                                    Vertrauensbildung
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-start space-x-3">
                                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-yellow-800">Unzureichende Ressourcen</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Unterdimensioniertes Team führt zu Verzögerungen 
                                    und Vertrauensverlust
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-start space-x-3">
                                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-yellow-800">Fehlende Nachverfolgung</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Meldungen versanden ohne konsequente Bearbeitung 
                                    und Feedback
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-start space-x-3">
                                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-yellow-800">Komplexe Prozesse</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Überregulierung schreckt potenzielle Hinweisgeber ab
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <div class="flex items-start space-x-3">
                                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" ></X>
                                <div>
                                  <strong class="text-yellow-800">Isolation des Systems</strong>
                                  <p class="text-sm text-yellow-700 mt-1">
                                    Fehlende Integration in bestehende Compliance-Strukturen
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                      <h4 class="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Abschluss und Ausblick
                      </h4>
                      <div class="max-w-3xl mx-auto space-y-6">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                          <div class="flex items-center space-x-4 mb-4">
                            <CheckCircle class="h-8 w-8 text-green-500" ></CheckCircle>
                            <h5 class="text-xl font-semibold text-gray-900">
                              Erfolgreiche HinSchG-Implementation
                            </h5>
                          </div>
                          <p class="text-gray-700 leading-relaxed">
                            Mit diesem umfassenden Guide haben Sie alle notwendigen Informationen und 
                            Werkzeuge zur erfolgreichen Implementierung des Hinweisgeberschutzgesetzes. 
                            Von den rechtlichen Grundlagen über die technische Umsetzung bis hin zur 
                            kontinuierlichen Verbesserung - Sie sind bestens vorbereitet.
                          </p>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg">
                          <div class="flex items-center space-x-4 mb-4">
                            <Target class="h-8 w-8 text-blue-500" ></Target>
                            <h5 class="text-xl font-semibold text-gray-900">
                              Ihre nächsten Schritte
                            </h5>
                          </div>
                          <ol class="space-y-3 text-gray-700">
                            <li class="flex items-start space-x-3">
                              <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                              <span>Führen Sie eine Ist-Analyse Ihrer aktuellen Compliance-Strukturen durch</span>
                            </li>
                            <li class="flex items-start space-x-3">
                              <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                              <span>Bilden Sie ein interdisziplinäres Projektteam</span>
                            </li>
                            <li class="flex items-start space-x-3">
                              <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                              <span>Erstellen Sie einen detaillierten Implementierungsplan</span>
                            </li>
                            <li class="flex items-start space-x-3">
                              <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                              <span>Beginnen Sie mit Quick Wins für schnelle Erfolge</span>
                            </li>
                          </ol>
                        </div>

                        <div class="text-center pt-6">
                          <Button>
                            <Download class="mr-2 h-5 w-5" ></Download>
                            Kompletten Guide als PDF herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div class="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                   
                  >
                    <ArrowLeft class="mr-2 h-4 w-4" ></ArrowLeft>
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                   }
                    class="bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white"
                  >
                    Guide abschließen
                    <CheckCircle class="ml-2 h-4 w-4" ></CheckCircle>
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer ></Footer>
    </div>`
};