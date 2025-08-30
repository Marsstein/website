export default {
  route: '/compliance/iso-27001',
  title: 'ISO 27001',
  description: 'Der internationale Standard für Informationssicherheits-Managementsysteme (ISMS).                  Lernen Sie, wie Sie systematisch die Informationssicherheit i',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'ueberblick', title: 'Überblick', icon: Eye, readTime: '8 Min' },
    { id: 'geschichte', title: 'Geschichte & Evolution', icon: Calendar, readTime: '12 Min' },
    { id: 'grundlagen', title: 'ISMS-Grundlagen', icon: BookOpen, readTime: '15 Min' },
    { id: 'rechtlicher-rahmen', title: 'Rechtlicher Rahmen', icon: Scale, readTime: '10 Min' },
    ,
    { id: 'sicherheitskontrollen', title: 'Sicherheitskontrollen', icon: Shield, readTime: '45 Min' },
    { id: 'risikomanagement', title: 'Risikomanagement', icon: AlertTriangle, readTime: '20 Min' },
    { id: 'implementierung', title: 'Implementierung', icon: Settings, readTime: '30 Min' },
    { id: 'dokumentation', title: 'Dokumentation', icon: FileText, readTime: '18 Min' },
    { id: 'audit-assessment', title: 'Audit & Assessment', icon: Search, readTime: '22 Min' },
    { id: 'zertifizierung', title: 'Zertifizierung', icon: Award, readTime: '15 Min' },
    { id: 'aufrechterhaltung', title: 'Aufrechterhaltung', icon: RotateCcw, readTime: '12 Min' },
    { id: 'integration-standards', title: 'Integration & Standards', icon: Network, readTime: '14 Min' },
    { id: 'branchenspezifika', title: 'Branchenspezifika', icon: Building2, readTime: '16 Min' },
    { id: 'vorteile-roi', title: 'Vorteile & ROI', icon: TrendingUp, readTime: '12 Min' },
    { id: 'fallstudien', title: 'Fallstudien', icon: BookOpen, readTime: '20 Min' },
    { id: 'tools-software', title: 'Tools & Software', icon: Code, readTime: '10 Min' },
    { id: 'ressourcen', title: 'Ressourcen', icon: Download, readTime: '8 Min' }
  ];

  const controls = [
    {
      domain: 'A.5 - Informationssicherheitspolitiken',
      icon: FileText,
      color: 'from-blue-500 to-indigo-600',
      description: 'Bereitstellung von Managementrichtlinien und -unterstützung für die Informationssicherheit',
      controls: [
        { 
          id: 'A.5.1', 
          title: 'Policys für Informationssicherheit', 
          description: 'Eine Informationssicherheitspolitik soll definiert, durch das Management genehmigt, veröffentlicht und an alle Mitarbeiter und relevanten externen Parteien kommuniziert werden.',
          purpose: 'Bereitstellung von Managementrichtlinien und -unterstützung für die Informationssicherheit in Übereinstimmung mit Geschäftsanforderungen und relevanten Gesetzen und Vorschriften.',
          guidance: 'Die Informationssicherheitspolitik sollte: a) in Übereinstimmung mit der Geschäftsstrategie sein; b) einen Rahmen für die Festlegung von Zielen und Grundsätzen für Maßnahmen bezüglich der Informationssicherheit enthalten; c) die strategische Geschäftsrichtung und -ziele berücksichtigen; d) das regulatorische Umfeld berücksichtigen; e) den Kontext für das Risikomanagement festlegen; f) eine Verpflichtung zur kontinuierlichen Verbesserung des ISMS enthalten.',
          implementation: [
            'Management-Genehmigung der Politik',
            'Regelmäßige Überprüfung und Aktualisierung',
            'Kommunikation an alle relevanten Parteien',
            'Integration in Einstellungs- und Schulungsprozesse',
            'Überwachung der Compliance'
          ],
          evidence: [
            'Genehmigte Informationssicherheitspolitik',
            'Nachweis der Kommunikation',
            'Schulungsunterlagen',
            'Überprüfungsprotokolle'
          ]
        }
      ]
    },
    {
      domain: 'A.6 - Organisation der Informationssicherheit',
      icon: Building2,
      color: 'from-emerald-500 to-teal-600',
      description: 'Etablierung eines Managementframeworks zur Initiierung und Kontrolle der Implementierung von Informationssicherheit',
      controls: [
        ,
        
      ]
    },
    {
      domain: 'A.7 - Personalwesen',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      description: 'Sicherstellung, dass Mitarbeiter die Verantwortlichkeiten verstehen und für ihre Rollen geeignet sind',
      controls: [
        ,
        { 
          id: 'A.7.2', 
          title: 'Während der Beschäftigung', 
          description: 'Management-Verantwortlichkeiten während der Beschäftigung zur Gewährleistung der Informationssicherheit',
          purpose: 'Gewährleistung, dass Mitarbeiter und Auftragnehmer sich ihrer Informationssicherheitsverantwortlichkeiten bewusst sind und diese erfüllen.',
          guidance: 'Das Management sollte: a) von allen Mitarbeitern und Auftragnehmern verlangen, Informationssicherheit in Übereinstimmung mit den etablierten Politiken und Verfahren der Organisation anzuwenden; b) sicherstellen, dass sie über ihre Informationssicherheitsverantwortlichkeiten informiert sind; c) einen formalen Disziplinarprozess für Mitarbeiter implementieren, die Sicherheitsverletzungen begangen haben.',
          implementation: [
            'Umfassendes Onboarding-Programm mit Sicherheitsschulung',
            'Jährliche obligatorische Sicherheitsschulungen',
            'Regelmäßige Phishing-Simulationen',
            'Sicherheitsbewusstsein-Kampagnen',
            'Klare Disziplinarverfahren bei Sicherheitsverstößen',
            'Performance-Reviews mit Sicherheitszielen',
            'Kontinuierliche Weiterbildung in Sicherheitstrends',
            'Melde- und Escalation-Verfahren'
          ],
          evidence: [
            'Schulungsaufzeichnungen und Zertifikate',
            'Onboarding-Checklisten',
            'Phishing-Simulation-Ergebnisse',
            'Disziplinarverfahren-Dokumentation',
            'Performance-Review-Formulare',
            'Sicherheitsbewusstsein-Materialien',
            'Incident-Meldungen'
          ]
        },
        
      ]
    },
    {
      domain: 'A.8 - Vermögenswerte-Management',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      description: 'Identifikation von Organisationsvermögen und Definition angemessener Schutzverantwortlichkeiten',
      controls: [
        { id: 'A.8.1', title: 'Verantwortung für Vermögenswerte', description: 'Inventarisierung und Eigentumsverantwortung für Informationsvermögen' },
        { id: 'A.8.2', title: 'Informationsklassifizierung', description: 'Klassifizierung von Informationen nach Schutzbedarf' },
        { id: 'A.8.3', title: 'Medienhandhabung', description: 'Handhabung von Wechselmedien gemäß Klassifizierungsschema' }
      ]
    },
    {
      domain: 'A.9 - Zugangskontrollen',
      icon: Lock,
      color: 'from-red-500 to-pink-600',
      description: 'Begrenzung des Zugangs zu Informationen und informationsverarbeitenden Einrichtungen',
      controls: [
        { id: 'A.9.1', title: 'Geschäftsanforderungen für Zugangskontrolle', description: 'Zugangskontrollpolicy und Benutzerzugriffsverwaltung' },
        { id: 'A.9.2', title: 'Benutzerzugriffsverwaltung', description: 'Registrierung, Bereitstellung und Widerruf von Benutzerzugriffen' },
        { id: 'A.9.3', title: 'Benutzerverantwortlichkeiten', description: 'Verwendung von geheimen Authentifizierungsinformationen' },
        { id: 'A.9.4', title: 'Systemzugriffskontrolle', description: 'Autorisierte Nutzung und sichere Anmeldeverfahren' }
      ]
    },
    {
      domain: 'A.10 - Kryptographie',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      description: 'Gewährleistung einer ordnungsgemäßen und wirksamen Verwendung der Kryptographie',
      controls: [
        { id: 'A.10.1', title: 'Kryptographische Kontrollen', description: 'Policy für die Verwendung kryptographischer Kontrollen und Schlüsselverwaltung' }
      ]
    },
    {
      domain: 'A.11 - Physische und umgebende Sicherheit',
      icon: Building,
      color: 'from-yellow-500 to-orange-600',
      description: 'Verhinderung von unbefugtem physischem Zugang, Schäden und Beeinträchtigungen',
      controls: [
        { id: 'A.11.1', title: 'Sichere Bereiche', description: 'Physischer Schutz und Zugangskontrollen für sichere Bereiche' },
        { id: 'A.11.2', title: 'Ausrüstung', description: 'Schutz von Ausrüstung vor Verlust, Beschädigung, Diebstahl oder Kompromittierung' }
      ]
    },
    {
      domain: 'A.12 - Betriebssicherheit',
      icon: Settings,
      color: 'from-green-500 to-emerald-600',
      description: 'Gewährleistung eines korrekten und sicheren Betriebs der informationsverarbeitenden Einrichtungen',
      controls: [
        { id: 'A.12.1', title: 'Betriebsverfahren und -verantwortlichkeiten', description: 'Dokumentierte Betriebsverfahren und Änderungsmanagement' },
        { id: 'A.12.2', title: 'Schutz vor Malware', description: 'Erkennung und Prävention von Malware' },
        { id: 'A.12.3', title: 'Datensicherung', description: 'Regelmäßige Sicherungskopien von Informationen und Software' },
        { id: 'A.12.4', title: 'Protokollierung und Überwachung', description: 'Aufzeichnung von Ereignissen und Schutz von Protokollinformationen' },
        { id: 'A.12.5', title: 'Kontrolle von Betriebssoftware', description: 'Kontrolle der Installation von Software auf Betriebssystemen' },
        { id: 'A.12.6', title: 'Management technischer Schwachstellen', description: 'Rechtzeitige Informationen über und Management von technischen Schwachstellen' },
        { id: 'A.12.7', title: 'Überlegungen zum Informationssystem-Audit', description: 'Minimierung der Auswirkungen von Audit-Aktivitäten auf Betriebssysteme' }
      ]
    },
    {
      domain: 'A.13 - Kommunikationssicherheit',
      icon: Network,
      color: 'from-indigo-500 to-purple-600',
      description: 'Gewährleistung des Schutzes von Informationen in Netzwerken und unterstützenden informationsverarbeitenden Einrichtungen',
      controls: [
        { id: 'A.13.1', title: 'Netzwerksicherheitsmanagement', description: 'Management und Kontrolle von Netzwerken zum Schutz von Informationen' },
        { id: 'A.13.2', title: 'Informationsübertragung', description: 'Wahrung der Sicherheit übertragener Informationen innerhalb und außerhalb der Organisation' }
      ]
    },
    {
      domain: 'A.14 - Systemakquisition, -entwicklung und -wartung',
      icon: Code,
      color: 'from-pink-500 to-rose-600',
      description: 'Gewährleistung, dass Informationssicherheit ein integraler Bestandteil von Informationssystemen ist',
      controls: [
        { id: 'A.14.1', title: 'Sicherheitsanforderungen für Informationssysteme', description: 'Spezifikation und Tests von Sicherheitsanforderungen' },
        { id: 'A.14.2', title: 'Sicherheit in Entwicklungs- und Unterstützungsprozessen', description: 'Sichere Entwicklungsrichtlinien und -kontrollen' },
        { id: 'A.14.3', title: 'Testdaten', description: 'Schutz von Testdaten' }
      ]
    },
    {
      domain: 'A.15 - Lieferantenbeziehungen',
      icon: Building2,
      color: 'from-teal-500 to-cyan-600',
      description: 'Gewährleistung des Schutzes der Organisationsvermögen, die für Lieferanten zugänglich sind',
      controls: [
        { id: 'A.15.1', title: 'Informationssicherheit in Lieferantenbeziehungen', description: 'Sicherheitsanforderungen für Lieferantenverträge' },
        { id: 'A.15.2', title: 'Lieferanten-Service-Bereitstellungsmanagement', description: 'Überwachung und Überprüfung von Lieferanten-Services' }
      ]
    },
    {
      domain: 'A.16 - Behandlung von Informationssicherheitsvorfällen',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-600',
      description: 'Gewährleistung eines konsistenten und wirksamen Ansatzes für das Management von Informationssicherheitsvorfällen',
      controls: [
        { id: 'A.16.1', title: 'Management von Informationssicherheitsvorfällen und Verbesserungen', description: 'Verantwortlichkeiten, Verfahren und kontinuierliche Verbesserung der Vorfallbehandlung' }
      ]
    },
    {
      domain: 'A.17 - Informationssicherheitsaspekte des Business Continuity Management',
      icon: Activity,
      color: 'from-violet-500 to-purple-600',
      description: 'Kontinuität des Informationssicherheitsmanagements unter widrigen Bedingungen',
      controls: [
        { id: 'A.17.1', title: 'Kontinuität der Informationssicherheit', description: 'Planung und Implementierung von Informationssicherheitskontinuität' },
        { id: 'A.17.2', title: 'Redundanz', description: 'Verfügbarkeit von informationsverarbeitenden Einrichtungen' }
      ]
    },
    {
      domain: 'A.18 - Compliance',
      icon: Scale,
      color: 'from-amber-500 to-yellow-600',
      description: 'Vermeidung von Verstößen gegen gesetzliche, regulatorische oder vertragliche Verpflichtungen',
      controls: [
        { id: 'A.18.1', title: 'Compliance mit gesetzlichen und vertraglichen Anforderungen', description: 'Identifikation und Erfüllung rechtlicher Anforderungen' },
        { id: 'A.18.2', title: 'Informationssicherheitsreviews', description: 'Regelmäßige Überprüfung der Informationssicherheit' }
      ]
    }
  ];

  const certificationSteps = [
    ,
    {
      phase: 'Phase 2: Implementierung',
      duration: '6-12 Monate',
      icon: Settings,
      color: 'from-emerald-500 to-teal-600',
      steps: [
        'Sicherheitskontrollen implementieren',
        'Mitarbeiter schulen',
        'Prozesse etablieren',
        'Interne Audits durchführen',
        'Management Review abhalten'
      ]
    },
    ,
    
  ];

  const benefits = [
    {
      category: 'Geschäftliche Vorteile',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      items: [
        { title: 'Risikoreduktion', description: 'Systematische Identifikation und Behandlung von Informationssicherheitsrisiken', impact: '70% weniger Sicherheitsvorfälle' },
        { title: 'Wettbewerbsvorteil', description: 'Differenzierung im Markt durch nachgewiesene Sicherheitsstandards', impact: '25% höhere Kundenakquisition' },
        { title: 'Kostenersparnis', description: 'Reduzierung von Kosten durch Sicherheitsvorfälle und Ausfallzeiten', impact: 'ROI von 300-400%' },
        
      ]
    },
    {
      category: 'Operative Vorteile',
      icon: Settings,
      color: 'from-blue-500 to-indigo-600',
      items: [
        { title: 'Prozessoptimierung', description: 'Standardisierung und Verbesserung von Sicherheitsprozessen', impact: '40% effizientere Prozesse' },
        { title: 'Mitarbeitersensibilisierung', description: 'Erhöhtes Bewusstsein für Informationssicherheit', impact: '60% weniger menschliche Fehler' },
        { title: 'Incident Response', description: 'Strukturierte Behandlung von Sicherheitsvorfällen', impact: '50% schnellere Reaktionszeiten' },
        { title: 'Kontinuierliche Verbesserung', description: 'Systematischer Ansatz zur kontinuierlichen Verbesserung', impact: 'Jährliche Steigerung um 15%' }
      ]
    },
    {
      category: 'Strategische Vorteile',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      items: [
        { title: 'Kundenvertrauen', description: 'Stärkung des Vertrauens durch nachgewiesene Sicherheit', impact: '85% höhere Kundenzufriedenheit' },
        { title: 'Internationale Anerkennung', description: 'Weltweite Anerkennung des ISO 27001 Standards', impact: 'Zugang zu globalen Märkten' },
        { title: 'Lieferantenstatus', description: 'Voraussetzung für Geschäfte mit sicherheitsbewussten Unternehmen', impact: '45% mehr Geschäftschancen' },
        { title: 'Investorenschutz', description: 'Schutz vor reputationsbedingten Wertverlusten', impact: 'Stabilere Unternehmensbewertung' }
      ]
    }
  ];

  const handleSectionComplete = (sectionId: string) => ;

  const toggleControlExpansion = (controlId: string) => {
    setExpandedControls(prev => ({
      ...prev,
      [controlId]: !prev[controlId]
    }));
  };

  const handleItemCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

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
    <>
      <SEOHead>
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" style={{
        wordWrap: 'break-word',
        overflowWrap: 'break-word'
      }}>
        <Header ></Header>
      
      {/* Fixed Progress Bar */}
      <div class="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div class="container mx-auto max-w-7xl px-4 py-3">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-4">
              <Badge class="bg-blue-500/20 text-blue-300 border-blue-500/30">
                <Shield class="h-3 w-3 mr-1" ></Shield>
                ISO 27001 Guide
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
                  <h1>ISO 27001</h1>
                  <p class="text-xl text-blue-400">Information Security Management</p>
                </div>
              </div>
              
              <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                Der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). 
                Lernen Sie, wie Sie systematisch die Informationssicherheit in Ihrem Unternehmen managen und zertifizieren lassen.
              </p>
              
              <div class="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" class="bg-blue-500/10 border-blue-500/20 text-blue-300">
                  <Award class="h-4 w-4 mr-2" ></Award>
                  Zertifizierbar
                </Badge>
                <Badge variant="outline" class="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  <Globe class="h-4 w-4 mr-2" ></Globe>
                  International anerkannt
                </Badge>
                <Badge variant="outline" class="bg-purple-500/10 border-purple-500/20 text-purple-300">
                  <Clock class="h-4 w-4 mr-2" ></Clock>
                  6-12 Monate Implementierung
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
                      <CounterAnimation value={27000} suffix="+" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Zertifizierte Unternehmen</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-emerald-400 mb-2">
                      <CounterAnimation value={170} suffix="+" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Länder</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-purple-400 mb-2">
                      <CounterAnimation value={114} ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Kontrollen</div>
                  </CardContent>
                </Card>
                <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent class="p-6 text-center">
                    <div class="text-3xl font-bold text-orange-400 mb-2">
                      <CounterAnimation value={94} suffix="%" ></CounterAnimation>
                    </div>
                    <div class="text-sm text-slate-400">Kundenzufriedenheit</div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Overview */}
              <Card class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <CardContent class="p-6">
                  <h3 class="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                  <div class="space-y-3">
                    {[
                      'ISMS-Grundlagen und Anforderungen',
                      'Alle 114 Sicherheitskontrollen im Detail',
                      'Schritt-für-Schritt Implementierungsplan',
                      'Zertifizierungsprozess und Vorbereitung',
                      'ROI-Berechnung und Business Case'
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
      <div class="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg">
        <div class="container px-4 mx-auto max-w-7xl">
          <nav>
            {sections.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                 }
                  class=
                >
                  <IconComponent class= ></IconComponent>
                  <span class=>{item.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div class="container mx-auto max-w-7xl px-4 py-8">
        <div>
          {/* Sidebar - Progress und Quick Actions */}
          <div>
            <div>
              <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                <CardContent class="p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Fortschritt</h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between text-sm mb-2">
                        <span class="text-slate-400">Gesamtfortschritt</span>
                        <span class="text-blue-400">%</span>
                      </div>
                      <Progress value={readingProgress} class="h-2" ></Progress>
                    </div>
                    <div class="text-sm text-slate-400">
                      {completedSections.length} von {sections.length} Abschnitten gelesen
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                <CardContent class="p-6">
                  <h3 class="text-lg font-semibold text-white mb-4">Schnellaktionen</h3>
                  <div class="space-y-3">
                    <Button variant="outline" size="sm" class="w-full justify-start">
                      <Download class="h-4 w-4 mr-2" ></Download>
                      Checkliste herunterladen
                    </Button>
                    <Button variant="outline" size="sm" class="w-full justify-start">
                      <FileText class="h-4 w-4 mr-2" ></FileText>
                      Template-Sammlung
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
              
              {/* Overview Section */}
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
                            ISO 27001 ist der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). 
                            Er bietet einen systematischen Ansatz zur Verwaltung sensibler Unternehmensinformationen und hilft dabei, 
                            diese sicher zu halten.
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
                                  <span>Schutz der Vertraulichkeit, Integrität und Verfügbarkeit von Informationen</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Systematisches Risikomanagement</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Kontinuierliche Verbesserung der Informationssicherheit</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Nachweisbare Compliance gegenüber Stakeholdern</span>
                                </li>
                              </ul>
                            </div>

                            <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                              <h3 class="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                                <Building2 class="h-5 w-5" ></Building2>
                                Anwendungsbereiche
                              </h3>
                              <ul class="space-y-2 text-slate-300">
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Alle Organisationsgrößen und -typen</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Besonders relevant für IT-Dienstleister</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Finanzdienstleister und Healthcare</span>
                                </li>
                                <li class="flex items-start gap-2">
                                  <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                  <span>Kritische Infrastrukturen</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-4">Warum ISO 27001?</h3>
                            <div>
                              <div class="text-center">
                                <div class="p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3">
                                  <Shield class="h-6 w-6 text-white" ></Shield>
                                </div>
                                <h4 class="font-semibold text-white mb-2">Risikominimierung</h4>
                                <p class="text-sm text-slate-400">Systematische Identifikation und Behandlung von Sicherheitsrisiken</p>
                              </div>
                              <div class="text-center">
                                <div class="p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3">
                                  <Award class="h-6 w-6 text-white" ></Award>
                                </div>
                                <h4 class="font-semibold text-white mb-2">Wettbewerbsvorteil</h4>
                                <p class="text-sm text-slate-400">Differenzierung durch nachgewiesene Sicherheitsstandards</p>
                              </div>
                              <div class="text-center">
                                <div class="p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3">
                                  <Scale class="h-6 w-6 text-white" ></Scale>
                                </div>
                                <h4 class="font-semibold text-white mb-2">Compliance</h4>
                                <p class="text-sm text-slate-400">Erfüllung regulatorischer und vertraglicher Anforderungen</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
              </section>
              
              {/* Divider */}
              <div class="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" ></div>
              
              {/* History Section */}
              <section id="geschichte" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Geschichte & Evolution von ISO 27001</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Timeline */}
                          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-white mb-6 text-center">Entwicklungstimeline</h3>
                            <div class="space-y-6">
                              {[
                                {
                                  year: '1995',
                                  title: 'BS 7799-1',
                                  description: 'British Standard 7799-1 "Code of Practice for Information Security Management" wird von BSI veröffentlicht',
                                  milestone: 'Erster Standard',
                                  color: 'bg-blue-500'
                                },
                                {
                                  year: '1998',
                                  title: 'BS 7799-2',
                                  description: 'British Standard 7799-2 "Specification for Information Security Management Systems" für Zertifizierung',
                                  milestone: 'Zertifizierungsstandard',
                                  color: 'bg-emerald-500'
                                },
                                {
                                  year: '2000',
                                  title: 'ISO/IEC 17799',
                                  description: 'BS 7799-1 wird als internationaler Standard ISO/IEC 17799 übernommen',
                                  milestone: 'Internationalisierung',
                                  color: 'bg-purple-500'
                                },
                                {
                                  year: '2005',
                                  title: 'ISO/IEC 27001:2005',
                                  description: 'Erste Version von ISO 27001 basierend auf BS 7799-2, Einführung des ISMS-Konzepts',
                                  milestone: 'ISO 27001 geboren',
                                  color: 'bg-orange-500'
                                },
                                {
                                  year: '2013',
                                  title: 'ISO/IEC 27001:2013',
                                  description: 'Große Überarbeitung mit Annex SL High Level Structure, PDCA-Zyklus verbessert',
                                  milestone: 'Modernisierung',
                                  color: 'bg-red-500'
                                },
                                {
                                  year: '2022',
                                  title: 'ISO/IEC 27001:2022',
                                  description: 'Aktuelle Version mit 11 neuen Kontrollen, Cloud- und Remote-Work-Fokus',
                                  milestone: 'Digitale Transformation',
                                  color: 'bg-cyan-500'
                                }
                              ].map((item, index) => (
                                <motion.div
                                  key={item.year}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="flex items-start gap-4"
                                >
                                  <div class="flex-shrink-0">
                                    <div class=>
                                      
                                    </div>
                                    {index < 5 && <div class="w-0.5 h-16 bg-slate-600 ml-6 mt-2"></div>}
                                  </div>
                                  <div class="flex-1 bg-slate-800/50 rounded-lg p-4">
                                    <div class="flex items-center gap-3 mb-2">
                                      <h4 class="text-lg font-bold text-white">{item.title}</h4>
                                      <Badge variant="outline" class="text-xs">
                                        {item.milestone}
                                      </Badge>
                                    </div>
                                    <p class="text-slate-300">{item.description}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Key Changes */}
                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <TrendingUp class="h-5 w-5 text-emerald-400" ></TrendingUp>
                                Wichtige Verbesserungen 2022
                              </h3>
                              <ul class="space-y-3">
                                {[
                                  'Neue Kontrollen für Cloud Computing',
                                  'Remote Working Sicherheit',
                                  'Data Loss Prevention (DLP)',
                                  'Web Filtering',
                                  'Application Security',
                                  'Configuration Management',
                                  'Information Deletion',
                                  'Data Masking',
                                  'Data Leakage Prevention',
                                  'Network Monitoring',
                                  'Privileged Access Management'
                                ].map((item, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span class="text-slate-300">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Globe class="h-5 w-5 text-blue-400" ></Globe>
                                Globale Adoption
                              </h3>
                              <div class="space-y-4">
                                <div class="bg-slate-900/50 rounded-lg p-4">
                                  <div class="text-2xl font-bold text-blue-400 mb-1">27.000+</div>
                                  <div class="text-sm text-slate-400">Zertifizierte Organisationen weltweit</div>
                                </div>
                                <div class="bg-slate-900/50 rounded-lg p-4">
                                  <div class="text-2xl font-bold text-emerald-400 mb-1">170+</div>
                                  <div class="text-sm text-slate-400">Länder mit ISO 27001 Zertifizierungen</div>
                                </div>
                                <div class="bg-slate-900/50 rounded-lg p-4">
                                  <div class="text-2xl font-bold text-purple-400 mb-1">15%</div>
                                  <div class="text-sm text-slate-400">Jährliches Wachstum der Zertifizierungen</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Industry Impact */}
                          <div class="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600">
                            <h3 class="text-xl font-bold text-white mb-6">Branchenauswirkungen</h3>
                            <div>
                              {[
                                ,
                                ,
                                {
                                  sector: 'Cloud-Provider',
                                  impact: 'Vertrauensnachweis für Enterprise-Kunden',
                                  adoption: '91%',
                                  color: 'text-purple-400'
                                }
                              ].map((sector) => (
                                <div key={sector.sector} class="bg-slate-800/30 rounded-lg p-4">
                                  <h4 class="font-semibold text-white mb-2">{sector.sector}</h4>
                                  <p class="text-sm text-slate-400 mb-3">{sector.impact}</p>
                                  <div class="flex items-center gap-2">
                                    <span class="text-sm text-slate-400">Adoption:</span>
                                    <span class=>{sector.adoption}</span>
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

                {/* Fundamentals Section */}
                <section id="grundlagen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">ISMS-Grundlagen</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* PDCA Cycle */}
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-white mb-6 text-center">PDCA-Zyklus in ISO 27001</h3>
                            <div>
                              {[
                                {
                                  phase: 'Plan',
                                  icon: Target,
                                  color: 'from-blue-500 to-indigo-600',
                                  description: 'ISMS etablieren',
                                  activities: ['Kontext bestimmen', 'Leadership', 'Planung', 'Unterstützung']
                                },
                                {
                                  phase: 'Do',
                                  icon: Settings,
                                  color: 'from-emerald-500 to-teal-600',
                                  description: 'ISMS implementieren',
                                  activities: ['Betrieb', 'Risikobewertung', 'Kontrollen umsetzen', 'Training']
                                },
                                {
                                  phase: 'Check',
                                  icon: Eye,
                                  color: 'from-orange-500 to-red-600',
                                  description: 'ISMS überwachen',
                                  activities: ['Leistungsbewertung', 'Interne Audits', 'Management Review', 'Überwachung']
                                },
                                {
                                  phase: 'Act',
                                  icon: TrendingUp,
                                  color: 'from-purple-500 to-pink-600',
                                  description: 'ISMS verbessern',
                                  activities: ['Verbesserung', 'Nicht-Konformitäten', 'Korrekturmaßnahmen', 'Innovation']
                                }
                              ].map((phase, index) => {
                                const IconComponent = phase.icon;
                                return (
                                  <motion.div
                                    key={phase.phase}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    class="text-center"
                                  >
                                    <div class=>
                                      <IconComponent class="h-8 w-8 text-white" ></IconComponent>
                                    </div>
                                    <h4 class="text-xl font-bold text-white mb-2">{phase.phase}</h4>
                                    <p class="text-slate-400 mb-4">{phase.description}</p>
                                    <ul class="space-y-1 text-sm text-slate-300">
                                      {phase.activities.map((activity, idx) => (
                                        <li key={idx} class="flex items-center gap-2 justify-center">
                                          <CircleDot class="h-3 w-3 text-slate-500" ></CircleDot>
                                          {activity}
                                        </li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Key Concepts */}
                          <div>
                            {[
                              {
                                title: 'Informationssicherheit',
                                icon: Shield,
                                color: 'from-blue-500 to-indigo-600',
                                concepts: [
                                  { term: 'Vertraulichkeit', definition: 'Information ist nur für autorisierte Personen zugänglich' },
                                  { term: 'Integrität', definition: 'Information ist vollständig, genau und unverändert' },
                                  { term: 'Verfügbarkeit', definition: 'Information ist zugänglich, wenn sie benötigt wird' }
                                ]
                              },
                              {
                                title: 'Risikomanagement',
                                icon: AlertTriangle,
                                color: 'from-red-500 to-orange-600',
                                concepts: [
                                  { term: 'Risikoidentifikation', definition: 'Systematische Ermittlung von Sicherheitsrisiken' },
                                  { term: 'Risikobewertung', definition: 'Analyse der Eintrittswahrscheinlichkeit und Auswirkungen' },
                                  { term: 'Risikobehandlung', definition: 'Auswahl und Implementierung von Kontrollmaßnahmen' }
                                ]
                              }
                            ].map((section) => {
                              const IconComponent = section.icon;
                              return (
                                <div key={section.title} class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                  <div class="flex items-center gap-3 mb-4">
                                    <div class=>
                                      <IconComponent class="h-5 w-5 text-white" ></IconComponent>
                                    </div>
                                    <h3 class="text-lg font-bold text-white">{section.title}</h3>
                                  </div>
                                  <div class="space-y-3">
                                    {section.concepts.map((concept) => (
                                      <div key={concept.term}>
                                        <h4 class="font-semibold text-slate-200 mb-1">{concept.term}</h4>
                                        <p class="text-sm text-slate-400">{concept.definition}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Requirements Section */}
                <section id="anforderungen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Anforderungen (Clauses 4-10)</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-6">
                          {[
                            {
                              clause: '4. Kontext der Organisation',
                              icon: Building2,
                              color: 'from-blue-500 to-indigo-600',
                              requirements: [
                                'Verstehen der Organisation und ihres Kontexts',
                                'Verstehen der Erfordernisse und Erwartungen interessierter Parteien',
                                'Bestimmung des Anwendungsbereichs des ISMS',
                                'Informationssicherheits-Managementsystem'
                              ]
                            },
                            {
                              clause: '5. Führung',
                              icon: Users,
                              color: 'from-emerald-500 to-teal-600',
                              requirements: [
                                'Führung und Verpflichtung',
                                'Informationssicherheitspolitik',
                                'Rollen, Verantwortlichkeiten und Befugnisse in der Organisation'
                              ]
                            },
                            {
                              clause: '6. Planung',
                              icon: Target,
                              color: 'from-purple-500 to-pink-600',
                              requirements: [
                                'Maßnahmen zum Umgang mit Risiken und Chancen',
                                'Informationssicherheitsziele und Planung zu deren Erreichung'
                              ]
                            },
                            {
                              clause: '7. Unterstützung',
                              icon: Heart,
                              color: 'from-orange-500 to-red-600',
                              requirements: [
                                'Ressourcen',
                                'Kompetenz',
                                'Bewusstsein',
                                'Kommunikation',
                                'Dokumentierte Information'
                              ]
                            },
                            {
                              clause: '8. Betrieb',
                              icon: Settings,
                              color: 'from-cyan-500 to-blue-600',
                              requirements: [
                                'Betriebsplanung und -steuerung',
                                'Informationssicherheits-Risikobewertung',
                                'Informationssicherheits-Risikobehandlung'
                              ]
                            },
                            {
                              clause: '9. Bewertung der Leistung',
                              icon: BarChart3,
                              color: 'from-yellow-500 to-orange-600',
                              requirements: [
                                'Überwachung, Messung, Analyse und Bewertung',
                                'Internes Audit',
                                'Managementbewertung'
                              ]
                            },
                            {
                              clause: '10. Verbesserung',
                              icon: TrendingUp,
                              color: 'from-green-500 to-emerald-600',
                              requirements: [
                                'Nichtkonformität und Korrekturmaßnahmen',
                                'Fortlaufende Verbesserung'
                              ]
                            }
                          ].map((section, index) => {
                            const IconComponent = section.icon;
                            return (
                              <motion.div
                                key={section.clause}
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
                                    <h3 class="text-lg font-bold text-white mb-3">{section.clause}</h3>
                                    <ul class="space-y-2">
                                      {section.requirements.map((requirement, idx) => (
                                        <li key={idx} class="flex items-start gap-3">
                                          <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                          <span class="text-slate-300">{requirement}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Controls Section */}
                <section id="sicherheitskontrollen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Sicherheitskontrollen (Annex A)</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 class="text-lg font-bold text-blue-300 mb-3">Über Annex A</h3>
                          <p class="text-slate-300 mb-4">
                            Annex A enthält 114 Sicherheitskontrollen in 14 Kategorien. Diese sind als Referenzkatalog zu verstehen - 
                            nicht alle Kontrollen müssen implementiert werden. Die Auswahl erfolgt basierend auf der Risikobewertung.
                          </p>
                          <div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <div class="text-2xl font-bold text-blue-400">14</div>
                              <div class="text-slate-400">Kategorien</div>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <div class="text-2xl font-bold text-emerald-400">114</div>
                              <div class="text-slate-400">Kontrollen</div>
                            </div>
                            <div class="bg-slate-800/50 rounded-lg p-3 text-center">
                              <div class="text-2xl font-bold text-purple-400">100%</div>
                              <div class="text-slate-400">Abgedeckt</div>
                            </div>
                          </div>
                        </div>

                        <div class="space-y-4">
                          {controls.map((domain, index) => {
                            const IconComponent = domain.icon;
                            const isExpanded = expandedControls[domain.domain];
                            
                            return (
                              <motion.div
                                key={domain.domain}
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
                                      <h3 class="text-lg font-bold text-white">{domain.domain}</h3>
                                      <p class="text-slate-400 text-sm">{domain.description}</p>
                                    </div>
                                  </div>
                                  <div class="flex items-center gap-3">
                                    <Badge variant="outline" class="text-xs">
                                      {domain.controls.length} Kontrollen
                                    </Badge>
                                    <ChevronDown class= ></ChevronDown>
                                  </div>
                                </button>
                                
                                {isExpanded && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    class="bg-slate-800/30 border-t border-slate-700"
                                  >
                                    <div class="p-6 space-y-4">
                                      {domain.controls.map((control) => (
                                        <div key={control.id} class="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg">
                                          <input
                                            type="checkbox"
                                            id={control.id}
                                            checked={checkedItems[control.id] || false}
                                           
                                            class="mt-1 rounded border-slate-600 text-blue-500 focus:ring-blue-500"
                                          />
                                          <div class="flex-1">
                                            <h4 class="font-semibold text-white mb-1">{control.id} - {control.title}</h4>
                                            <p class="text-sm text-slate-400">{control.description}</p>
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
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

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
                          <h2 class="text-3xl font-bold text-white">Implementierungsplan</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Timeline Overview */}
                          <div class="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600">
                            <h3 class="text-xl font-bold text-white mb-4 text-center">Typische Implementierungszeit: 12-18 Monate</h3>
                            <div>
                              {[
                                { phase: 'Vorbereitung', duration: '3-6 Monate', color: 'bg-blue-500' },
                                { phase: 'Implementierung', duration: '6-12 Monate', color: 'bg-emerald-500' },
                                { phase: 'Zertifizierung', duration: '2-3 Monate', color: 'bg-purple-500' },
                                { phase: 'Aufrechterhaltung', duration: 'Kontinuierlich', color: 'bg-orange-500' }
                              ].map((phase) => (
                                <div key={phase.phase} class="text-center">
                                  <div class=></div>
                                  <h4 class="font-semibold text-white">{phase.phase}</h4>
                                  <p class="text-sm text-slate-400">{phase.duration}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Detailed Implementation Steps */}
                          <div class="space-y-6">
                            {certificationSteps.map((step, index) => {
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
                                      <div class="flex items-center justify-between mb-3">
                                        <h3 class="text-xl font-bold text-white">{step.phase}</h3>
                                        <Badge variant="outline" class="text-xs">
                                          {step.duration}
                                        </Badge>
                                      </div>
                                      <div>
                                        {step.steps.map((stepItem, idx) => (
                                          <div key={idx} class="flex items-start gap-3">
                                            <input
                                              type="checkbox"
                                              id=\${step.phase}-\${idx}
                                              checked={checkedItems[\`\${step.phase}-\${idx}\`] || false}
                                             -\${idx}\`)}
                                              class="mt-1 rounded border-slate-600 text-blue-500 focus:ring-blue-500"
                                            />
                                            <label>
                                              {stepItem}
                                            </label>
                                          </div>
                                        ))}
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
                </section>

                {/* Certification Section */}
                <section id="zertifizierung" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Zertifizierungsprozess</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Audit Process */}
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-white mb-6 text-center">Zwei-Stufen-Audit-Prozess</h3>
                            <div>
                              <div class="bg-slate-800/50 rounded-lg p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-2 bg-blue-500 rounded-lg">
                                    <FileText class="h-5 w-5 text-white" ></FileText>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Stage 1: Dokumenten-Audit</h4>
                                </div>
                                <ul class="space-y-2 text-slate-300">
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Überprüfung der ISMS-Dokumentation</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Bewertung der Anwendbarkeitserklärung</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Vorbereitung auf Stage 2</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Dauer: 1-2 Tage</span>
                                  </li>
                                </ul>
                              </div>
                              
                              <div class="bg-slate-800/50 rounded-lg p-6">
                                <div class="flex items-center gap-3 mb-4">
                                  <div class="p-2 bg-emerald-500 rounded-lg">
                                    <Settings class="h-5 w-5 text-white" ></Settings>
                                  </div>
                                  <h4 class="text-lg font-bold text-white">Stage 2: Implementierungs-Audit</h4>
                                </div>
                                <ul class="space-y-2 text-slate-300">
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Bewertung der ISMS-Implementierung</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Überprüfung der Wirksamkeit</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Interviews mit Mitarbeitern</span>
                                  </li>
                                  <li class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span>Dauer: 2-5 Tage</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Certification Bodies */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-4">Akkreditierte Zertifizierungsstellen</h3>
                            <div>
                              {[
                                { name: 'TÜV SÜD', speciality: 'Automotive, Healthcare', market: 'DACH-Region' },
                                { name: 'BSI Group', speciality: 'IT, Finance', market: 'International' },
                                { name: 'SGS', speciality: 'Manufacturing, Energy', market: 'Global' },
                                { name: 'DQS', speciality: 'Public Sector', market: 'Deutschland' },
                                { name: 'DEKRA', speciality: 'Critical Infrastructure', market: 'Europa' },
                                { name: 'Bureau Veritas', speciality: 'Maritime, Oil & Gas', market: 'International' }
                              ].map((body) => (
                                <div key={body.name} class="bg-slate-900/50 rounded-lg p-4">
                                  <h4 class="font-semibold text-white mb-2">{body.name}</h4>
                                  <p class="text-sm text-slate-400 mb-1">Spezialisierung: {body.speciality}</p>
                                  <p class="text-sm text-slate-400">Markt: {body.market}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Costs */}
                          <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-emerald-300 mb-4">Zertifizierungskosten</h3>
                            <div>
                              <div>
                                <h4 class="font-semibold text-white mb-3">Initiale Zertifizierung</h4>
                                <div class="space-y-2 text-slate-300">
                                  <div class="flex justify-between">
                                    <span>Kleine Unternehmen (&lt;50 MA)</span>
                                    <span class="font-semibold">€8.000 - €15.000</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span>Mittlere Unternehmen (50-250 MA)</span>
                                    <span class="font-semibold">€15.000 - €30.000</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span>Große Unternehmen (&gt;250 MA)</span>
                                    <span class="font-semibold">€30.000 - €60.000</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 class="font-semibold text-white mb-3">Jährliche Kosten</h4>
                                <div class="space-y-2 text-slate-300">
                                  <div class="flex justify-between">
                                    <span>Überwachungsaudits</span>
                                    <span class="font-semibold">€3.000 - €8.000</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span>Rezertifizierung (alle 3 Jahre)</span>
                                    <span class="font-semibold">60-80% der Erstkosten</span>
                                  </div>
                                  <div class="flex justify-between">
                                    <span>Interne Ressourcen</span>
                                    <span class="font-semibold">0.5-2 FTE</span>
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

                {/* Benefits Section */}
                <section id="vorteile-roi" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Vorteile & ROI</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* ROI Overview */}
                          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 class="text-xl font-bold text-green-300 mb-6 text-center">Typischer ROI von ISO 27001</h3>
                            <div>
                              <div class="text-center">
                                <div class="text-4xl font-bold text-green-400 mb-2">
                                  <CounterAnimation value={300} suffix="%" ></CounterAnimation>
                                </div>
                                <div class="text-sm text-slate-400">ROI nach 3 Jahren</div>
                              </div>
                              <div class="text-center">
                                <div class="text-4xl font-bold text-blue-400 mb-2">
                                  <CounterAnimation value={70} suffix="%" ></CounterAnimation>
                                </div>
                                <div class="text-sm text-slate-400">Weniger Sicherheitsvorfälle</div>
                              </div>
                              <div class="text-center">
                                <div class="text-4xl font-bold text-purple-400 mb-2">
                                  <CounterAnimation value={25} suffix="%" ></CounterAnimation>
                                </div>
                                <div class="text-sm text-slate-400">Höhere Kundenakquisition</div>
                              </div>
                              <div class="text-center">
                                <div class="text-4xl font-bold text-orange-400 mb-2">
                                  <CounterAnimation value={15} suffix="%" ></CounterAnimation>
                                </div>
                                <div class="text-sm text-slate-400">Jährliche Verbesserung</div>
                              </div>
                            </div>
                          </div>

                          {/* Detailed Benefits */}
                          <div class="space-y-6">
                            {benefits.map((category, index) => {
                              const IconComponent = category.icon;
                              return (
                                <motion.div
                                  key={category.category}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                                >
                                  <div class="flex items-center gap-3 mb-6">
                                    <div class=>
                                      <IconComponent class="h-6 w-6 text-white" ></IconComponent>
                                    </div>
                                    <h3 class="text-xl font-bold text-white">{category.category}</h3>
                                  </div>
                                  
                                  <div>
                                    {category.items.map((item) => (
                                      <div key={item.title} class="bg-slate-900/50 rounded-lg p-4">
                                        <h4 class="font-semibold text-white mb-2">{item.title}</h4>
                                        <p class="text-sm text-slate-400 mb-3">{item.description}</p>
                                        <div class="flex items-center gap-2">
                                          <TrendingUp class="h-4 w-4 text-green-400" ></TrendingUp>
                                          <span class="text-sm font-medium text-green-400">{item.impact}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Legal Section */}
                <section id="rechtlicher-rahmen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Rechtlicher Rahmen & Compliance</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* EU Regulations */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6">EU-Regulierungen & ISO 27001</h3>
                            <div>
                              <div class="space-y-4">
                                <h4 class="text-lg font-bold text-white flex items-center gap-2">
                                  <Shield class="h-5 w-5 text-blue-400" ></Shield>
                                  DSGVO/GDPR Kompatibilität
                                </h4>
                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <p class="text-slate-300 mb-4">
                                    ISO 27001 unterstützt DSGVO-Compliance durch strukturierte Sicherheitskontrollen:
                                  </p>
                                  <ul class="space-y-2">
                                    {[
                                      'A.8.2 - Informationsklassifizierung (Art. 25 DSGVO)',
                                      'A.9 - Zugangskontrollen (Art. 32 DSGVO)',
                                      'A.16 - Incident Management (Art. 33/34 DSGVO)',
                                      'A.12.3 - Backup-Systeme (Art. 32 DSGVO)',
                                      'A.10.1 - Verschlüsselung (Art. 32 DSGVO)'
                                    ].map((item, idx) => (
                                      <li key={idx} class="flex items-start gap-2">
                                        <CheckCircle class="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                        <span class="text-sm text-slate-300">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              
                              <div class="space-y-4">
                                <h4 class="text-lg font-bold text-white flex items-center gap-2">
                                  <Network class="h-5 w-5 text-emerald-400" ></Network>
                                  NIS2-Direktive
                                </h4>
                                <div class="bg-slate-800/50 rounded-lg p-4">
                                  <p class="text-slate-300 mb-4">
                                    NIS2 verlangt angemessene Cybersicherheitsmaßnahmen, die ISO 27001 abdeckt:
                                  </p>
                                  <ul class="space-y-2">
                                    {[
                                      'Risikomanagement und Governance',
                                      'Business Continuity Management',
                                      'Lieferantensicherheit',
                                      'Incident Response und Meldung',
                                      'Vulnerability Management'
                                    ].map((item, idx) => (
                                      <li key={idx} class="flex items-start gap-2">
                                        <CheckCircle class="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                        <span class="text-sm text-slate-300">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Branchenstandards */}
                          <div>
                            {[
                              {
                                title: 'Finanzsektor',
                                icon: Euro,
                                color: 'text-green-400',
                                regulations: ['PCI DSS', 'Basel III', 'MiFID II', 'BAIT', 'VAIT'],
                                mapping: 'ISO 27001 ergänzt regulatorische Anforderungen durch systematisches ISMS'
                              },
                              {
                                title: 'Gesundheitswesen',
                                icon: Heart,
                                color: 'text-red-400',
                                regulations: ['HIPAA', 'MDR', 'IVDR', 'DiGA-V', 'TI-Richtlinie'],
                                mapping: 'Schutz von Patientendaten durch technische und organisatorische Maßnahmen'
                              },
                              {
                                title: 'Kritische Infrastrukturen',
                                icon: Activity,
                                color: 'text-orange-400',
                                regulations: ['KRITIS-V', 'IT-SiG 2.0', 'BSI-KritisV', 'UP KRITIS'],
                                mapping: 'Erfüllung besonderer Sicherheitsanforderungen für systemrelevante Betreiber'
                              }
                            ].map((sector) => (
                              <div key={sector.title} class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <div class="flex items-center gap-3 mb-4">
                                  <sector.icon class= ></sector>
                                  <h4 class="text-lg font-bold text-white">{sector.title}</h4>
                                </div>
                                <div class="space-y-3">
                                  <div>
                                    <h5 class="text-sm font-semibold text-slate-300 mb-2">Relevante Regulierungen:</h5>
                                    <div class="flex flex-wrap gap-1">
                                      {sector.regulations.map((reg) => (
                                        <Badge key={reg} variant="outline" class="text-xs">
                                          {reg}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  <p class="text-sm text-slate-400">{sector.mapping}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Zertifizierungslandschaft */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Deutsche Zertifizierungslandschaft</h3>
                            <div>
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Akkreditierte Zertifizierungsstellen</h4>
                                <div class="space-y-3">
                                  {[
                                    { name: 'TÜV SÜD', scope: 'Vollumfang, internationale Präsenz' },
                                    { name: 'TÜV NORD', scope: 'Fokus auf Industrie 4.0' },
                                    { name: 'DQS', scope: 'Managementsysteme, KMU-Fokus' },
                                    { name: 'DEKRA', scope: 'Automotive, kritische Infrastrukturen' },
                                    { name: 'Bureau Veritas', scope: 'International, Multi-Standard' }
                                  ].map((cert) => (
                                    <div key={cert.name} class="bg-slate-900/50 rounded-lg p-3">
                                      <div class="font-semibold text-blue-300">{cert.name}</div>
                                      <div class="text-sm text-slate-400">{cert.scope}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 class="text-lg font-semibold text-white mb-4">Rechtliche Grundlagen</h4>
                                <div class="space-y-3">
                                  <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                    <h5 class="font-semibold text-blue-300 mb-2">Akkreditierung nach DIN EN ISO/IEC 17021</h5>
                                    <p class="text-sm text-slate-300">
                                      Deutsche Akkreditierungsstelle (DAkkS) überwacht Zertifizierungsstellen
                                    </p>
                                  </div>
                                  <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                                    <h5 class="font-semibold text-emerald-300 mb-2">Internationale Anerkennung</h5>
                                    <p class="text-sm text-slate-300">
                                      IAF MLA (International Accreditation Forum Mutual Recognition Arrangement)
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
                </section>

                {/* Risk Management Section */}
                <section id="risikomanagement" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Risikomanagement-Methodologie</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Risk Management Process */}
                          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-red-300 mb-6 text-center">ISO 27001 Risikomanagement-Prozess</h3>
                            <div>
                              {[
                                {
                                  phase: 'Identifikation',
                                  icon: Search,
                                  color: 'from-blue-500 to-indigo-600',
                                  description: 'Assets, Bedrohungen & Schwachstellen',
                                  activities: [
                                    'Asset-Inventarisierung',
                                    'Threat Modeling',
                                    'Vulnerability Assessment',
                                    'Dependency Mapping'
                                  ]
                                },
                                {
                                  phase: 'Analyse',
                                  icon: BarChart3,
                                  color: 'from-emerald-500 to-teal-600',
                                  description: 'Wahrscheinlichkeit & Auswirkung',
                                  activities: [
                                    'Likelihood Assessment',
                                    'Impact Analysis',
                                    'Risk Scoring',
                                    'Scenario Development'
                                  ]
                                },
                                {
                                  phase: 'Bewertung',
                                  icon: Scale,
                                  color: 'from-orange-500 to-red-600',
                                  description: 'Risk Appetite & Toleranz',
                                  activities: [
                                    'Risk Matrix Mapping',
                                    'Tolerance Definition',
                                    'Priority Ranking',
                                    'Accept/Treat Decision'
                                  ]
                                },
                                {
                                  phase: 'Behandlung',
                                  icon: Shield,
                                  color: 'from-purple-500 to-pink-600',
                                  description: 'Avoid, Mitigate, Transfer, Accept',
                                  activities: [
                                    'Control Selection',
                                    'Implementation Planning',
                                    'Residual Risk Assessment',
                                    'Treatment Verification'
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
                                    class="text-center"
                                  >
                                    <div class=>
                                      <IconComponent class="h-8 w-8 text-white" ></IconComponent>
                                    </div>
                                    <h4 class="text-lg font-bold text-white mb-2">{phase.phase}</h4>
                                    <p class="text-sm text-slate-400 mb-4">{phase.description}</p>
                                    <div class="bg-slate-800/50 rounded-lg p-3">
                                      <ul class="text-xs text-slate-300 space-y-1">
                                        {phase.activities.map((activity, idx) => (
                                          <li key={idx} class="flex items-center gap-1">
                                            <Circle class="h-2 w-2 fill-current" ></Circle>
                                            {activity}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                );
                              })
                            }
                            </div>
                          </div>

                          {/* Risk Assessment Methods */}
                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Target class="h-5 w-5 text-blue-400" ></Target>
                                Quantitative Methoden
                              </h3>
                              <div class="space-y-4">
                                <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-blue-300 mb-2">FAIR (Factor Analysis of Information Risk)</h4>
                                  <p class="text-sm text-slate-300 mb-3">
                                    Standardisiertes Framework für quantitative Risikoanalyse mit Monte-Carlo-Simulationen.
                                  </p>
                                  <div class="text-xs text-slate-400">
                                    Risk = Loss Event Frequency × Loss Magnitude
                                  </div>
                                </div>
                                
                                <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-emerald-300 mb-2">ALE (Annual Loss Expectancy)</h4>
                                  <p class="text-sm text-slate-300 mb-3">
                                    Berechnung jährlicher Verlusterwartung für ROI-Analysen von Sicherheitsmaßnahmen.
                                  </p>
                                  <div class="text-xs text-slate-400">
                                    ALE = ARO (Annual Rate of Occurrence) × SLE (Single Loss Expectancy)
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Award class="h-5 w-5 text-purple-400" ></Award>
                                Qualitative Methoden
                              </h3>
                              <div class="space-y-4">
                                <div class="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-purple-300 mb-2">OCTAVE (Operationally Critical Threat, Asset & Vulnerability Evaluation)</h4>
                                  <p class="text-sm text-slate-300 mb-3">
                                    Self-directed Risikobewertung fokussiert auf organisationale Risiken.
                                  </p>
                                </div>
                                
                                <div class="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-orange-300 mb-2">CRAMM (CCTA Risk Analysis & Management Method)</h4>
                                  <p class="text-sm text-slate-300 mb-3">
                                    Strukturierte Methodik mit Asset-basiertem Ansatz für Regierungsorganisationen.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Risk Matrix */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">ISO 27001 Risk Matrix (Beispiel)</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr>
                                    <td class="p-3 text-center font-semibold text-slate-300 border border-slate-600">Auswirkung →</td>
                                    <td class="p-3 text-center font-semibold text-green-400 border border-slate-600 bg-green-500/10">Gering (1)</td>
                                    <td class="p-3 text-center font-semibold text-yellow-400 border border-slate-600 bg-yellow-500/10">Mittel (2)</td>
                                    <td class="p-3 text-center font-semibold text-orange-400 border border-slate-600 bg-orange-500/10">Hoch (3)</td>
                                    <td class="p-3 text-center font-semibold text-red-400 border border-slate-600 bg-red-500/10">Kritisch (4)</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    ,
                                    ,
                                    ,
                                    
                                  ].map((row) => (
                                    <tr key={row.level}>
                                      <td class=>{row.level}</td>
                                      {row.risks.map((risk, idx) => {
                                        const riskColor = {
                                          'Gering': 'bg-green-500/20 text-green-300',
                                          'Mittel': 'bg-yellow-500/20 text-yellow-300',
                                          'Hoch': 'bg-orange-500/20 text-orange-300',
                                          'Kritisch': 'bg-red-500/20 text-red-300'
                                        }[risk];
                                        return (
                                          <td key={idx} class=>
                                            {risk}
                                          </td>
                                        );
                                      })}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div class="mt-4 text-sm text-slate-400">
                              Wahrscheinlichkeit ↓ | Risikobewertung basiert auf: Risiko = Wahrscheinlichkeit × Auswirkung
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

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

                        <div class="space-y-8">
                          {/* Implementation Timeline */}
                          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-indigo-300 mb-6 text-center">12-Monats Implementation Timeline</h3>
                            <div class="space-y-6">
                              {[
                                {
                                  phase: 'Monate 1-2: Vorbereitung & Planung',
                                  color: 'bg-blue-500',
                                  tasks: [
                                    'Management Commitment sicherstellen',
                                    'Projektteam aufstellen und CISO ernennen',
                                    'Scope Definition und Asset-Inventarisierung',
                                    'Gap-Analyse gegen ISO 27001 durchführen',
                                    'Business Case und Budget erstellen',
                                    'Externe Beratung evaluieren'
                                  ],
                                  deliverables: ['Projektcharter', 'Asset-Register', 'Gap-Analyse-Report']
                                },
                                ,
                                {
                                  phase: 'Monate 5-7: Kontrollen-Implementation',
                                  color: 'bg-orange-500',
                                  tasks: [
                                    'Sicherheitspolicies entwickeln und genehmigen',
                                    'Technische Kontrollen implementieren',
                                    'Organisatorische Prozesse etablieren',
                                    'Personalschulungen durchführen',
                                    'Incident Response Team aufbauen',
                                    'Business Continuity Pläne erstellen'
                                  ],
                                  deliverables: ['Policy-Set', 'Implementierte Kontrollen', 'Schulungspläne']
                                },
                                {
                                  phase: 'Monate 8-9: Überwachung & Messung',
                                  color: 'bg-purple-500',
                                  tasks: [
                                    'KPIs und Metriken definieren',
                                    'Monitoring-Systeme einrichten',
                                    'Interne Audit-Programme etablieren',
                                    'Management Review Prozesse definieren',
                                    'Continuous Monitoring implementieren',
                                    'Erstes internes Audit durchführen'
                                  ],
                                  deliverables: ['KPI-Dashboard', 'Audit-Programm', 'Monitoring-Berichte']
                                },
                                {
                                  phase: 'Monate 10-11: Optimierung',
                                  color: 'bg-red-500',
                                  tasks: [
                                    'Non-Konformitäten behandeln',
                                    'Korrekturmaßnahmen implementieren',
                                    'Prozesse optimieren und dokumentieren',
                                    'Mitarbeiter-Feedback einarbeiten',
                                    'Pre-Audit mit externer Beratung',
                                    'Management Review durchführen'
                                  ],
                                  deliverables: ['Optimierte Prozesse', 'Pre-Audit-Report', 'Management Review']
                                },
                                
                              ].map((phase, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                                >
                                  <div class="flex items-start gap-4">
                                    <div class=></div>
                                    <div class="flex-1">
                                      <h4 class="text-lg font-bold text-white mb-4">{phase.phase}</h4>
                                      
                                      <div>
                                        <div>
                                          <h5 class="text-sm font-semibold text-slate-300 mb-2">Aufgaben:</h5>
                                          <ul class="space-y-1">
                                            {phase.tasks.map((task, idx) => (
                                              <li key={idx} class="flex items-start gap-2 text-sm">
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
                                                    "text-slate-300 cursor-pointer",
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
                                          <h5 class="text-sm font-semibold text-slate-300 mb-2">Deliverables:</h5>
                                          <div class="space-y-1">
                                            {phase.deliverables.map((deliverable, idx) => (
                                              <Badge key={idx} variant="outline" class="text-xs mr-1 mb-1">
                                                {deliverable}
                                              </Badge>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Success Factors */}
                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <CheckCircle class="h-5 w-5 text-green-400" ></CheckCircle>
                                Erfolgsfaktoren
                              </h3>
                              <ul class="space-y-3">
                                {[
                                  'Top-Management Commitment und sichtbare Unterstützung',
                                  'Klare Kommunikation der Vorteile an alle Stakeholder',
                                  'Ausreichende Ressourcen (Budget, Personal, Zeit)',
                                  'Change Management und Mitarbeiter-Buy-in',
                                  'Regelmäßige Progress Reviews und Milestone Tracking',
                                  'Pragmatischer Ansatz - nicht über-engineeren',
                                  'Integration in bestehende Prozesse',
                                  'Kontinuierliche Schulung und Awareness'
                                ].map((factor, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <CheckCircle class="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle>
                                    <span class="text-sm text-slate-300">{factor}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <AlertTriangle class="h-5 w-5 text-red-400" ></AlertTriangle>
                                Häufige Stolpersteine
                              </h3>
                              <ul class="space-y-3">
                                {[
                                  'Zu großer Scope in der ersten Implementation',
                                  'Unterschätzung des Dokumentationsaufwands',
                                  'Fehlende Priorisierung von Risiken',
                                  'Technologie-fokussiert statt prozess-orientiert',
                                  'Unzureichende Schulung der Mitarbeiter',
                                  'Mangelnde Integration in tägliche Abläufe',
                                  'Zu späte Einbindung der Zertifizierungsstelle',
                                  'Verzögerungen durch parallele Projekte'
                                ].map((pitfall, idx) => (
                                  <li key={idx} class="flex items-start gap-2">
                                    <AlertTriangle class="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                    <span class="text-sm text-slate-300">{pitfall}</span>
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

                {/* Documentation Section */}
                <section id="dokumentation" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Dokumentations-Framework</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Document Hierarchy */}
                          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-blue-300 mb-6 text-center">Dokumentenhierarchie</h3>
                            <div class="space-y-4">
                              {[
                                {
                                  level: 'Level 1: Policies',
                                  description: 'Strategische Richtlinien und Grundsätze',
                                  color: 'from-red-500 to-pink-600',
                                  icon: Gavel,
                                  examples: ['Informationssicherheitspolitik', 'Zugangsrichtlinie', 'Incident Response Policy'],
                                  audience: 'Management & alle Mitarbeiter',
                                  approval: 'CEO/Geschäftsführung',
                                  review: '1-2 Jahre'
                                },
                                {
                                  level: 'Level 2: Standards',
                                  description: 'Technische und organisatorische Standards',
                                  color: 'from-orange-500 to-red-600',
                                  icon: Award,
                                  examples: ['Cryptographic Standards', 'Password Standards', 'Backup Standards'],
                                  audience: 'IT-Teams & Sicherheitsverantwortliche',
                                  approval: 'CISO',
                                  review: '1 Jahr'
                                },
                                {
                                  level: 'Level 3: Procedures',
                                  description: 'Detaillierte Verfahrensanweisungen',
                                  color: 'from-yellow-500 to-orange-600',
                                  icon: Settings,
                                  examples: ['User Provisioning Procedure', 'Patch Management Process', 'Backup Procedures'],
                                  audience: 'Operative Teams',
                                  approval: 'Abteilungsleiter',
                                  review: '6 Monate'
                                },
                                {
                                  level: 'Level 4: Work Instructions',
                                  description: 'Schritt-für-Schritt Arbeitsanweisungen',
                                  color: 'from-green-500 to-emerald-600',
                                  icon: FileText,
                                  examples: ['Firewall Configuration Guide', 'Incident Handling Checklist', 'Audit Checklists'],
                                  audience: 'Techniker & Operatoren',
                                  approval: 'Team Lead',
                                  review: '3 Monate'
                                }
                              ].map((level, index) => {
                                const IconComponent = level.icon;
                                return (
                                  <motion.div
                                    key={level.level}
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
                                        <h4 class="text-lg font-bold text-white mb-2">{level.level}</h4>
                                        <p class="text-slate-300 mb-4">{level.description}</p>
                                        
                                        <div>
                                          <div>
                                            <h5 class="text-sm font-semibold text-slate-300 mb-2">Beispiele:</h5>
                                            <ul class="space-y-1">
                                              {level.examples.map((example, idx) => (
                                                <li key={idx} class="text-sm text-slate-400 flex items-center gap-2">
                                                  <Circle class="h-2 w-2 fill-current" ></Circle>
                                                  {example}
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                          
                                          <div class="space-y-2">
                                            <div class="flex justify-between text-sm">
                                              <span class="text-slate-400">Zielgruppe:</span>
                                              <span class="text-slate-300">{level.audience}</span>
                                            </div>
                                            <div class="flex justify-between text-sm">
                                              <span class="text-slate-400">Genehmigung:</span>
                                              <span class="text-slate-300">{level.approval}</span>
                                            </div>
                                            <div class="flex justify-between text-sm">
                                              <span class="text-slate-400">Review-Zyklus:</span>
                                              <span class="text-slate-300">{level.review}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Mandatory Documents */}
                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FileText class="h-5 w-5 text-blue-400" ></FileText>
                                Mandatory Documents (ISO 27001)
                              </h3>
                              <div class="space-y-3">
                                {[
                                  {
                                    doc: 'Information Security Policy',
                                    clause: '5.2',
                                    description: 'High-level commitment to information security'
                                  },
                                  {
                                    doc: 'Scope of ISMS',
                                    clause: '4.3',
                                    description: 'Boundaries and applicability of ISMS'
                                  },
                                  {
                                    doc: 'Risk Assessment Procedure',
                                    clause: '6.1.2',
                                    description: 'Methodology for identifying and assessing risks'
                                  },
                                  {
                                    doc: 'Risk Treatment Plan',
                                    clause: '6.1.3',
                                    description: 'Plan for treating identified risks'
                                  },
                                  {
                                    doc: 'Statement of Applicability',
                                    clause: '6.1.3',
                                    description: 'Control objectives and controls selection'
                                  },
                                  {
                                    doc: 'Internal Audit Programme',
                                    clause: '9.2',
                                    description: 'Systematic audit approach and schedule'
                                  },
                                  {
                                    doc: 'Management Review Records',
                                    clause: '9.3',
                                    description: 'Evidence of management review activities'
                                  }
                                ].map((item) => (
                                  <div key={item.doc} class="bg-slate-900/50 rounded-lg p-3">
                                    <div class="flex justify-between items-start mb-1">
                                      <span class="font-semibold text-blue-300 text-sm">{item.doc}</span>
                                      <Badge variant="outline" class="text-xs">{item.clause}</Badge>
                                    </div>
                                    <p class="text-xs text-slate-400">{item.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Lightbulb class="h-5 w-5 text-yellow-400" ></Lightbulb>
                                Best Practices
                              </h3>
                              <div class="space-y-4">
                                <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-yellow-300 mb-2">Document Control</h4>
                                  <ul class="text-sm text-slate-300 space-y-1">
                                    <li>• Versionskontrolle mit klarer Nummerierung</li>
                                    <li>• Automatische Benachrichtigung bei Änderungen</li>
                                    <li>• Zugriffsrechte basierend auf Rolle</li>
                                    <li>• Archivierung veralteter Versionen</li>
                                  </ul>
                                </div>
                                
                                <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-emerald-300 mb-2">Content Guidelines</h4>
                                  <ul class="text-sm text-slate-300 space-y-1">
                                    <li>• Klare, verständliche Sprache verwenden</li>
                                    <li>• Prozessdiagramme für komplexe Abläufe</li>
                                    <li>• Checklisten für operative Tätigkeiten</li>
                                    <li>• Hyperlinks für Querverweise</li>
                                  </ul>
                                </div>
                                
                                <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-blue-300 mb-2">Tools & Platforms</h4>
                                  <ul class="text-sm text-slate-300 space-y-1">
                                    <li>• SharePoint / Confluence für Collaboration</li>
                                    <li>• GRC-Tools für Policy Management</li>
                                    <li>• Workflow-Engines für Approval Processes</li>
                                    <li>• Automatisierte Compliance-Checks</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Audit Section */}
                <section id="audit-assessment" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Audit & Assessment Framework</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Internal Audit Program */}
                          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-green-300 mb-6 text-center">Internes Audit-Programm</h3>
                            <div>
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Calendar class="h-5 w-5 text-green-400" ></Calendar>
                                  Audit-Planung
                                </h4>
                                <ul class="space-y-2 text-sm text-slate-300">
                                  <li>• Jährlicher Audit-Plan mit allen ISMS-Bereichen</li>
                                  <li>• Risiko-basierte Priorisierung</li>
                                  <li>• Rotationsprinzip für Auditoren</li>
                                  <li>• Integration mit Compliance-Kalender</li>
                                  <li>• Ad-hoc Audits bei Incidents</li>
                                </ul>
                              </div>
                              
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Users class="h-5 w-5 text-blue-400" ></Users>
                                  Auditor-Qualifikation
                                </h4>
                                <ul class="space-y-2 text-sm text-slate-300">
                                  <li>• ISO 19011 Audit-Standards</li>
                                  <li>• ISO 27001 Lead Auditor Zertifizierung</li>
                                  <li>• Technische Fachkompetenz</li>
                                  <li>• Unabhängigkeit vom auditierten Bereich</li>
                                  <li>• Kontinuierliche Weiterbildung</li>
                                </ul>
                              </div>
                              
                              <div class="bg-slate-800/50 rounded-xl p-6">
                                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <FileText class="h-5 w-5 text-purple-400" ></FileText>
                                  Audit-Durchführung
                                </h4>
                                <ul class="space-y-2 text-sm text-slate-300">
                                  <li>• Standardisierte Checklisten</li>
                                  <li>• Stichproben-basierte Tests</li>
                                  <li>• Interviews mit Prozessverantwortlichen</li>
                                  <li>• Dokumentenprüfung</li>
                                  <li>• Vor-Ort-Begehungen</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* External Certification Audit */}
                          <div>
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Award class="h-5 w-5 text-blue-400" ></Award>
                                Zertifizierungsaudit (Stage 1)
                              </h3>
                              <div class="space-y-4">
                                <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-blue-300 mb-2">Dokumentenprüfung</h4>
                                  <ul class="text-sm text-slate-300 space-y-1">
                                    <li>• ISMS-Dokumentation vollständig?</li>
                                    <li>• Policies und Prozesse definiert?</li>
                                    <li>• Risk Assessment durchgeführt?</li>
                                    <li>• Statement of Applicability erstellt?</li>
                                    <li>• Interne Audits dokumentiert?</li>
                                  </ul>
                                </div>
                                
                                <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-emerald-300 mb-2">Audit-Vorbereitung</h4>
                                  <ul class="text-sm text-slate-300 space-y-1">
                                    <li>• Audit-Plan finalisieren</li>
                                    <li>• Scope-Abgrenzung bestätigen</li>
                                    <li>• Auditoren-Team zusammenstellen</li>
                                    <li>• Termine für Stage 2 festlegen</li>
                                    <li>• Non-Konformitäten identifizieren</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            
                            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <CheckCircle class="h-5 w-5 text-green-400" ></CheckCircle>
                                Zertifizierungsaudit (Stage 2)
                              </h3>
                              <div class="space-y-4">
                                <div class="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-orange-300 mb-2">Implementation Assessment</h4>
                                  <ul class="text-sm text-slate-300 space-y-1">
                                    <li>• Kontrollen tatsächlich implementiert?</li>
                                    <li>• PDCA-Zyklus funktionsfähig?</li>
                                    <li>• Kontinuierliche Verbesserung?</li>
                                    <li>• Management Commitment evident?</li>
                                    <li>• Effectiveness der Kontrollen?</li>
                                  </ul>
                                </div>
                                
                                <div class="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                                  <h4 class="font-semibold text-purple-300 mb-2">Certification Decision</h4>
                                  <ul class="text-sm text-slate-300 space-y-1">
                                    <li>• No non-conformities: Zertifikat</li>
                                    <li>• Minor NCs: Korrektur binnen 90 Tagen</li>
                                    <li>• Major NCs: Wiederholung Stage 2</li>
                                    <li>• Critical NCs: Vollständige Wiederholung</li>
                                    <li>• Zertifikatsgültigkeit: 3 Jahre</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Surveillance Audits */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Überwachungsaudits & Maintenance</h3>
                            <div>
                              <div class="text-center">
                                <div class="text-4xl font-bold text-blue-400 mb-2">Jahr 1</div>
                                <div class="text-sm text-slate-400 mb-3">Surveillance Audit 1</div>
                                <ul class="text-xs text-slate-300 space-y-1">
                                  <li>• Management Review</li>
                                  <li>• Internes Audit-Programm</li>
                                  <li>• Incident Management</li>
                                  <li>• Stichproben Kontrollen</li>
                                </ul>
                              </div>
                              <div class="text-center">
                                <div class="text-4xl font-bold text-emerald-400 mb-2">Jahr 2</div>
                                <div class="text-sm text-slate-400 mb-3">Surveillance Audit 2</div>
                                <ul class="text-xs text-slate-300 space-y-1">
                                  <li>• Risk Assessment Update</li>
                                  <li>• Kontinuierliche Verbesserung</li>
                                  <li>• Compliance Monitoring</li>
                                  <li>• Change Management</li>
                                </ul>
                              </div>
                              <div class="text-center">
                                <div class="text-4xl font-bold text-purple-400 mb-2">Jahr 3</div>
                                <div class="text-sm text-slate-400 mb-3">Recertification Audit</div>
                                <ul class="text-xs text-slate-300 space-y-1">
                                  <li>• Vollständiges Re-Assessment</li>
                                  <li>• Strategische Überprüfung</li>
                                  <li>• Effectiveness Review</li>
                                  <li>• Zertifikatserneuerung</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Certification Section */}
                <section id="zertifizierung" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Zertifizierungsprozess</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div class="space-y-8">
                          {/* Certification Path */}
                          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 class="text-2xl font-bold text-purple-300 mb-6 text-center">Zertifizierungs-Journey</h3>
                            <div class="space-y-4">
                              {[
                                ,
                                {
                                  step: '2. Stage 1 Audit',
                                  duration: '1-2 Tage',
                                  tasks: [
                                    'Dokumentenprüfung durch Zertifizierungsstelle',
                                    'ISMS-Reifegrad-Assessment',
                                    'Scope-Verifikation',
                                    'Audit-Plan für Stage 2 finalisieren',
                                    'Identifizierte Gaps adressieren',
                                    'Stage 2 Vorbereitung'
                                  ],
                                  costs: '3.000 - 8.000 €'
                                },
                                {
                                  step: '3. Stage 2 Audit',
                                  duration: '2-5 Tage',
                                  tasks: [
                                    'On-site Implementation Assessment',
                                    'Interviews mit Management und Mitarbeitern',
                                    'Stichproben-Tests der Kontrollen',
                                    'Evidence-Sammlung und -Bewertung',
                                    'Non-Konformitäten-Behandlung',
                                    'Zertifizierungsentscheidung'
                                  ],
                                  costs: '8.000 - 20.000 €'
                                },
                                
                              ].map((phase, index) => (
                                <motion.div
                                  key={phase.step}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  class="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                                >
                                  <div class="flex items-start gap-4">
                                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                      {index + 1}
                                    </div>
                                    <div class="flex-1">
                                      <div class="flex items-center gap-4 mb-4">
                                        <h4 class="text-lg font-bold text-white">{phase.step}</h4>
                                        <Badge variant="outline" class="text-xs">{phase.duration}</Badge>
                                        <Badge class="bg-green-500/20 text-green-300 text-xs">{phase.costs}</Badge>
                                      </div>
                                      
                                      <div>
                                        <div>
                                          <h5 class="text-sm font-semibold text-slate-300 mb-2">Aktivitäten:</h5>
                                          <ul class="space-y-1">
                                            {phase.tasks.map((task, idx) => (
                                              <li key={idx} class="flex items-start gap-2 text-sm">
                                                <CheckCircle class="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" ></CheckCircle>
                                                <span class="text-slate-300">{task}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Certification Bodies Comparison */}
                          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 class="text-xl font-bold text-white mb-6">Zertifizierungsstellen-Vergleich</h3>
                            <div class="overflow-x-auto">
                              <table class="w-full border-collapse">
                                <thead>
                                  <tr class="border-b border-slate-600">
                                    <td class="p-3 font-semibold text-white">Zertifizierungsstelle</td>
                                    <td class="p-3 font-semibold text-white text-center">Preis-Level</td>
                                    <td class="p-3 font-semibold text-white text-center">Internationale Anerkennung</td>
                                    <td class="p-3 font-semibold text-white text-center">Audit-Qualität</td>
                                    <td class="p-3 font-semibold text-white text-center">Spezialisierung</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    {
                                      name: 'TÜV SÜD',
                                      price: 'Hoch',
                                      recognition: '★★★★★',
                                      quality: '★★★★★',
                                      specialization: 'Automotive, Manufacturing'
                                    },
                                    {
                                      name: 'DQS',
                                      price: 'Mittel',
                                      recognition: '★★★★',
                                      quality: '★★★★',
                                      specialization: 'KMU, Dienstleistung'
                                    },
                                    {
                                      name: 'Bureau Veritas',
                                      price: 'Mittel-Hoch',
                                      recognition: '★★★★★',
                                      quality: '★★★★',
                                      specialization: 'Oil & Gas, Maritime'
                                    },
                                    {
                                      name: 'BSI Group',
                                      price: 'Hoch',
                                      recognition: '★★★★★',
                                      quality: '★★★★★',
                                      specialization: 'IT, Cybersecurity'
                                    }
                                  ].map((cb) => (
                                    <tr key={cb.name} class="border-b border-slate-700">
                                      <td class="p-3 font-medium text-blue-300">{cb.name}</td>
                                      <td class="p-3 text-center text-slate-300">{cb.price}</td>
                                      <td class="p-3 text-center text-yellow-400">{cb.recognition}</td>
                                      <td class="p-3 text-center text-green-400">{cb.quality}</td>
                                      <td class="p-3 text-center text-slate-300 text-sm">{cb.specialization}</td>
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

                {/* Resources Section */}
                <section id="ressourcen" class="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card class="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent class="p-8">
                        <div class="flex items-center justify-between mb-6">
                          <h2 class="text-3xl font-bold text-white">Ressourcen & Downloads</h2>
                          <Button
                           
                            variant=
                            size="sm"
                          >
                            
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div>
                          {[
                            {
                              title: 'Templates & Checklisten',
                              icon: FileText,
                              color: 'from-blue-500 to-indigo-600',
                              items: [
                                'ISMS-Policy-Template',
                                'Risikobewertungs-Matrix',
                                'Audit-Checkliste',
                                'Incident-Response-Plan',
                                'Statement of Applicability'
                              ]
                            },
                            {
                              title: 'Implementierungs-Tools',
                              icon: Settings,
                              color: 'from-emerald-500 to-teal-600',
                              items: [
                                'Gap-Analysis-Tool',
                                'Projekt-Roadmap',
                                'ROI-Calculator',
                                'Kosten-Nutzen-Analyse',
                                'Schulungsplan-Vorlage'
                              ]
                            },
                            ,
                            
                          ].map((section) => {
                            const IconComponent = section.icon;
                            return (
                              <Card key={section.title} class="bg-slate-800/50 border-slate-700">
                                <CardContent class="p-6">
                                  <div class="flex items-center gap-3 mb-4">
                                    <div class=>
                                      <IconComponent class="h-5 w-5 text-white" ></IconComponent>
                                    </div>
                                    <h3 class="text-lg font-bold text-white">{section.title}</h3>
                                  </div>
                                  <div class="space-y-3">
                                    {section.items.map((item, idx) => (
                                      <Button>
                                        <Download class="h-4 w-4 mr-2" ></Download>
                                        {item}
                                      </Button>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>
            </div>

            {/* Navigation */}
            <div>
              <Button
               
                }}
                disabled={activeNavSection === sections[0].id}
                variant="outline"
                class="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <ArrowLeft class="h-4 w-4 mr-2" ></ArrowLeft>
                Vorheriger Abschnitt
              </Button>

              <div>
                <Badge variant="outline" class="text-xs">
                   / {sections.length}
                </Badge>
                <Button
                 
                  variant="ghost"
                  size="sm"
                  class="text-slate-400 hover:text-yellow-400"
                >
                  <Bookmark class= ></Bookmark>
                </Button>
              </div>

              <Button
               
                }}
                disabled={activeNavSection === sections[sections.length - 1].id}
                class="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
              >
                Nächster Abschnitt
                <ArrowRight class="h-4 w-4 ml-2" ></ArrowRight>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer ></Footer>
      </div>
    </>`
};