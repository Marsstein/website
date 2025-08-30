export default {
  route: '/wissen/branchen/dsgvo-vermieter',
  title: 'Dsgvo Vermieter',
  description: 'Die Datenschutz-Grundverordnung hat die Immobilienbranche fundamental verändert.                Ein Verstoß kann bis zu 20 Millionen Euro oder 4% des Jahresumsa',
  content: `) => ;
  }, []);

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
      
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          // Update URL hash automatically when scrolling
          if (window.location.hash.slice(1) !== section.id) {
            window.history.replaceState(null, '', \`#\${section.id}\`);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="dsgvo vermieter, datenschutz vermieter, dsgvo immobilien, dsgvo hausverwaltung, dsgvo compliance vermieter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.example.com/wissen/branchen/dsgvo-vermieter" />
        
        {/* Open Graph Meta Tags */}
        <meta>
        <meta>
        <meta>
        <meta>
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": pageTitle,
            "description": pageDescription,
            "author": {
              "@type": "Organization",
              "name": "DSGVO Compliance Team"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString()
          })}
        </script>
      </Helmet>
      <div ref={containerRef} class="min-h-screen bg-background">
        <Header ></Header>
      
      <main class="relative overflow-hidden">
        {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        class="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background to-purple-900/20" ></div>
        
        <div class="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge class="mb-4 px-4 py-1" variant="secondary">
              DSGVO für Vermieter & Hausverwaltungen
            </Badge>
            
            <h1>
              <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DSGVO für Vermieter
              </span>
              <br />
              <span>
                Der komplette Praxisleitfaden 2025
              </span>
            </h1>
            
            <p>
              Die Datenschutz-Grundverordnung hat die Immobilienbranche fundamental verändert. 
              Ein Verstoß kann bis zu 20 Millionen Euro oder 4% des Jahresumsatzes kosten. Erfahren Sie mehr über <Link>DSGVO-Regelungen</Link>.
            </p>

            <Button 
              size="lg" 
              class="bg-gradient-to-r from-indigo-600 to-purple-600 mb-12 min-h-[48px] min-w-[48px]"
             
            >
              Leitfaden starten
              <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
            </Button>

            {/* Stats */}
            <div>
              {[
                { icon: AlertOctagon, label: 'Compliance', value: '87%', desc: 'nicht konform 2024' },
                { icon: Euro, label: 'Bußgeld Ø', value: '42.000€', desc: 'in Immobilienbranche' },
                { icon: Clock, label: 'Auskunft', value: '15 Min', desc: 'Bearbeitungszeit' },
                { icon: TrendingUp, label: 'Beschwerden', value: '+300%', desc: 'seit 2018' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  class="bg-card/50 backdrop-blur-sm rounded-lg p-4 border"
                >
                  <stat.icon class="h-8 w-8 text-indigo-500 mb-2 mx-auto" ></stat>
                  <div class="text-2xl font-bold">{stat.value}</div>
                  <div class="text-sm text-muted-foreground">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Inhaltsverzeichnis für Mobile und Desktop */}
      <section>
        <div class="container px-4 mx-auto">
          <div class="max-w-5xl mx-auto">
            <nav>
              <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <BookOpen class="h-5 w-5 text-indigo-600" ></BookOpen>
                Inhaltsverzeichnis
              </h2>
              <div>
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                   
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target"
                  >
                    <item.icon class="h-5 w-5 text-indigo-600 flex-shrink-0" ></item>
                    <span class="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Sticky Navigation mit scroll-margin-top */}
      <style>
        
          h2[id], h3[id], section[id] {
            scroll-margin-top: 96px;
          }
        
      </style>
      <nav>
        <div class="container mx-auto px-4">
          <nav>
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                 }
                  class=
                >
                  <item.icon class= ></item>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </nav>

      {/* Content */}
      <div class="container mx-auto px-4 py-12 space-y-24">
        {/* Mobile-optimierte Inhaltsverzeichnis-Box */}
        <div>
          <Card>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-4 flex items-center justify-between">
                <span>Schnellnavigation</span>
                <ChevronRight class="h-5 w-5 rotate-90" ></ChevronRight>
              </h3>
              <nav aria-label="Inhaltsverzeichnis Mobil">
                <ul class="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                       
                        class="w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30 flex items-center gap-2 text-sm"
                      >
                        <item.icon class="h-4 w-4 text-indigo-600 dark:text-indigo-400" ></item>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Card>
        </div>
        {/* Warum ist Datenschutz kritisch Section */}
        <section id="ueberblick" class="scroll-mt-32">
          <div class="max-w-4xl mx-auto">
            <h2 id="warum-datenschutz-kritisch" class="text-4xl font-bold mb-8 text-center">
              <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Warum ist Datenschutz für Vermieter so kritisch?
              </span>
            </h2>
            
            <Card>
              <h3 id="besonderheiten-branche" class="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertOctagon class="h-6 w-6 text-amber-600" ></AlertOctagon>
                Die Besonderheiten Ihrer Branche
              </h3>
              <div>
                {[
                  {
                    icon: Database,
                    title: 'Hochsensible Daten',
                    items: ['Einkommensnachweise', 'Schufa-Auskünfte', 'Bankdaten', 'Gesundheitsdaten']
                  },
                  {
                    icon: Calendar,
                    title: 'Lange Speicherfristen',
                    items: ['Mietverträge', 'Nebenkostenabrechnungen', 'Zahlungsbelege', 'Korrespondenz']
                  },
                  {
                    icon: Users,
                    title: 'Viele Beteiligte',
                    items: ['Mieter', 'Interessenten', 'Handwerker', 'Behörden']
                  },
                  {
                    icon: Smartphone,
                    title: 'Digitale Transformation',
                    items: ['Online-Bewerbungen', 'Cloud-Speicher', 'Verwaltungssoftware', 'Smart Home']
                  }
                ].map((item, index) => (
                  <div key={index} class="space-y-3">
                    <div class="flex items-center gap-2">
                      <item.icon class="h-5 w-5 text-amber-600" ></item>
                      <div class="font-semibold text-lg">{item.title}</div>
                    </div>
                    <ul class="space-y-1 ml-7">
                      {item.items.map((point, idx) => (
                        <li key={idx} class="text-sm flex items-start gap-2">
                          <ChevronRight class="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" ></ChevronRight>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Rechtlicher Rahmen Section */}
        <section id="rechtlicher-rahmen" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Rechtlicher Rahmen: Was Sie wissen müssen</h2>
          
          {/* DSGVO Artikel Tabelle */}
          <Card class="p-6 mb-8 overflow-x-auto">
            <h3 class="text-2xl font-semibold mb-6">Relevante DSGVO-Artikel für Vermieter</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b">
                    <th class="text-left p-3">Artikel</th>
                    <th class="text-left p-3">Inhalt</th>
                    <th class="text-left p-3">Bedeutung für Sie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { artikel: 'Art. 6', inhalt: 'Rechtmäßigkeit der Verarbeitung', bedeutung: <>Basis für jede Datenverarbeitung. Mehr zu <Link>Art. 6 DSGVO</Link></> },
                    { artikel: 'Art. 9', inhalt: 'Besondere Datenkategorien', bedeutung: <>Gesundheitsdaten bei barrierefreiem Wohnen. Siehe <Link>Art. 9 DSGVO</Link></> },
                    { artikel: 'Art. 13/14', inhalt: 'Informationspflichten', bedeutung: 'Transparenz bei Datenerhebung' },
                    { artikel: 'Art. 17', inhalt: 'Recht auf Löschung', bedeutung: 'Löschkonzept erforderlich' },
                    { artikel: 'Art. 32', inhalt: 'Sicherheit der Verarbeitung', bedeutung: 'Technische Schutzmaßnahmen' }
                  ].map((row, index) => (
                    <tr>
                      <td class="p-3 font-medium">{row.artikel}</td>
                      <td class="p-3">{row.inhalt}</td>
                      <td class="p-3">{row.bedeutung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Rechtliche Grundlagen */}
          <Card class="p-6 mb-8">
            <h3 id="rechtliche-grundlagen-daten" class="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale class="h-6 w-6 text-indigo-600" ></Scale>
              Rechtliche Grundlagen für Datenverarbeitung
            </h3>
            <div>
              {[
                {
                  title: 'Vertragserfüllung',
                  artikel: 'Art. 6 Abs. 1 lit. b DSGVO',
                  desc: 'Hauptgrundlage für Mietvertragsdaten',
                  icon: FileText
                },
                {
                  title: 'Berechtigtes Interesse',
                  artikel: 'Art. 6 Abs. 1 lit. f DSGVO',
                  desc: 'Bonitätsprüfung, Videoüberwachung',
                  icon: Shield
                },
                {
                  title: 'Rechtliche Verpflichtung',
                  artikel: 'Art. 6 Abs. 1 lit. c DSGVO',
                  desc: 'Aufbewahrung für Finanzbehörden',
                  icon: Building
                },
                {
                  title: 'Einwilligung',
                  artikel: 'Art. 6 Abs. 1 lit. a DSGVO',
                  desc: 'Zusätzliche Services, Newsletter',
                  icon: UserCheck
                }
              ].map((item, index) => (
                <Card key={index} class="p-4 border bg-muted/20">
                  <div class="flex items-start gap-3">
                    <item.icon class="h-5 w-5 text-indigo-600 mt-1" ></item>
                    <div>
                      <h4 class="font-semibold mb-1">{item.title}</h4>
                      <p class="text-sm text-muted-foreground mb-2">{item.artikel}</p>
                      <p class="text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* Datenverarbeitung im Vermietungsalltag */}
        <section id="datenverarbeitung" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Typische Datenverarbeitungen im Vermietungsalltag</h2>
          
          {/* Bewerbungsphase */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-6">1. Bewerbungsphase</h3>
            <div>
              <div>
                <h4 class="font-semibold mb-4 flex items-center gap-2 text-green-600">
                  <CheckCircle2 class="h-5 w-5" ></CheckCircle2>
                  Erlaubte Daten
                </h4>
                <ul class="space-y-2">
                  {[
                    'Name, Anschrift, Geburtsdatum',
                    'Beruf und Arbeitgeber',
                    'Einkommensnachweise (letzte 3 Monate)',
                    'Schufa-Auskunft (Mieter-Bonitätsauskunft)',
                    'Mietschuldenfreiheitsbescheinigung'
                  ].map((item, idx) => (
                    <li key={idx} class="flex items-start gap-2">
                      <CheckCircle2 class="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" ></CheckCircle2>
                      <span class="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-4 flex items-center gap-2 text-red-600">
                  <XCircle class="h-5 w-5" ></XCircle>
                  Verbotene Daten
                </h4>
                <ul class="space-y-2">
                  {[
                    'Religionszugehörigkeit',
                    'Sexuelle Orientierung',
                    'Parteizugehörigkeit',
                    'Gesundheitsdaten (Ausnahme: barrierefreies Wohnen)',
                    'Schwangerschaft'
                  ].map((item, idx) => (
                    <li key={idx} class="flex items-start gap-2">
                      <XCircle class="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" ></XCircle>
                      <span class="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Mietverhältnis */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-6">2. Mietverhältnis</h3>
            <div class="bg-muted/30 rounded-lg p-4 mb-4">
              <h4 class="font-semibold mb-3">Notwendige Dokumentation:</h4>
              <div>
                {[
                  'Mietvertrag und Zusatzvereinbarungen',
                  'Übergabeprotokolle',
                  'Nebenkostenabrechnungen',
                  'Korrespondenz zu Mängeln',
                  'Zahlungseingänge',
                  'Mahnungen (falls vorhanden)'
                ].map((item, idx) => (
                  <div key={idx} class="flex items-center gap-2">
                    <FileText class="h-4 w-4 text-indigo-500" ></FileText>
                    <span class="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Aufbewahrungsfristen */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-6">3. Nach Vertragsende - Aufbewahrungsfristen</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b bg-muted/50">
                    <th class="text-left p-3">Dokument</th>
                    <th class="text-left p-3">Aufbewahrungsfrist</th>
                    <th class="text-left p-3">Rechtsgrundlage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dok: 'Mietvertrag', frist: '3 Jahre nach Ende', grund: 'BGB Verjährung' },
                    { dok: 'Nebenkostenabrechnungen', frist: '10 Jahre', grund: 'Steuerrecht' },
                    { dok: 'Zahlungsbelege', frist: '10 Jahre', grund: 'AO, HGB' },
                    
                  ].map((row, index) => (
                    <tr>
                      <td class="p-3">{row.dok}</td>
                      <td class="p-3 font-medium">{row.frist}</td>
                      <td class="p-3 text-muted-foreground">{row.grund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Technische und organisatorische Maßnahmen */}
        <section id="technische-massnahmen" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Technische und organisatorische Maßnahmen (TOMs)</h2>
          
          <div>
            {/* Technische Sicherheit */}
            <Card class="p-6">
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lock class="h-5 w-5 text-indigo-600" ></Lock>
                Technische Sicherheit
              </h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-medium mb-2">Zugangskontrolle:</h4>
                  <ul class="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Sichere Passwörter (min. 12 Zeichen)</li>
                    <li>• 2-Faktor-Authentifizierung</li>
                    <li>• Regelmäßige Passwortänderungen</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">Zugriffskontrolle:</h4>
                  <ul class="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Berechtigungskonzept</li>
                    <li>• Rollenbasierte Zugriffe</li>
                    <li>• Protokollierung von Zugriffen</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium mb-2">Verschlüsselung:</h4>
                  <ul class="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• E-Mail-Verschlüsselung für sensible Daten</li>
                    <li>• Verschlüsselte Datenbanken</li>
                    <li>• Sichere Cloud-Speicher</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Organisatorische Maßnahmen */}
            <Card class="p-6">
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <Settings class="h-5 w-5 text-indigo-600" ></Settings>
                Organisatorische Maßnahmen
              </h3>
              <div class="space-y-3">
                {[
                  ,
                  { text: 'Verarbeitungsverzeichnis führen', done: false },
                  ,
                  { text: 'Datenschutz-Folgenabschätzung', done: false },
                  { text: 'Auftragsverarbeitungsverträge', done: false },
                  { text: 'Löschkonzept implementiert', done: false }
                ].map((item, idx) => (
                  <label>
                    <input type="checkbox" class="h-4 w-4 text-indigo-600" />
                    <span class="text-sm">{item.text}</span>
                  </label>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Digitale Tools und Datenschutz */}
        <section id="digitale-tools" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Digitale Tools und Datenschutz</h2>
          
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Laptop class="h-6 w-6 text-indigo-600" ></Laptop>
              Immobilienverwaltungssoftware
            </h3>
            <div>
              <h4 class="font-semibold mb-3">Anforderungen an DSGVO-konforme Software:</h4>
              <div>
                {[
                  { label: 'Serverstandort', value: 'Idealerweise in Deutschland/EU' },
                  { label: 'Zertifizierungen', value: 'ISO 27001, BSI-Grundschutz' },
                  { label: 'Auftragsverarbeitungsvertrag', value: 'Muss vorhanden sein' },
                  { label: 'Datentrennung', value: 'Mandantenfähigkeit' },
                  { label: 'Exportfunktion', value: 'Für Datenportabilität' }
                ].map((item, idx) => (
                  <div key={idx} class="flex items-start gap-2">
                    <ChevronRight class="h-4 w-4 text-indigo-600 mt-0.5" ></ChevronRight>
                    <div>
                      <span class="font-medium text-sm">{item.label}:</span>
                      <span class="text-sm text-muted-foreground ml-1">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold mb-3 flex items-center gap-2 text-red-600">
                <AlertOctagon class="h-5 w-5" ></AlertOctagon>
                Vorsicht bei:
              </h4>
              <ul class="space-y-2">
                {[
                  'WhatsApp für Mieterkommunikation',
                  'Private E-Mail-Accounts',
                  'Unverschlüsselte Cloud-Speicher',
                  'Automatische Backups auf US-Server'
                ].map((item, idx) => (
                  <li key={idx} class="flex items-center gap-2 text-sm">
                    <XCircle class="h-4 w-4 text-red-500" ></XCircle>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Besondere Herausforderungen */}
        <section id="herausforderungen" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Besondere Herausforderungen</h2>
          
          {/* Videoüberwachung */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Video class="h-6 w-6 text-indigo-600" ></Video>
              Videoüberwachung
            </h3>
            <div>
              <div>
                <h4>Zulässig wenn:</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                    <span>Berechtigtes Interesse überwiegt</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                    <span>Kennzeichnung vorhanden</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                    <span>Nur öffentlich zugängliche Bereiche</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                    <span>Löschung nach 72 Stunden</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Verboten:</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <XCircle class="h-4 w-4 text-red-600 mt-0.5" ></XCircle>
                    <span>Überwachung von Mietwohnungen</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <XCircle class="h-4 w-4 text-red-600 mt-0.5" ></XCircle>
                    <span>Dauerhafte Speicherung</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <XCircle class="h-4 w-4 text-red-600 mt-0.5" ></XCircle>
                    <span>Verdeckte Kameras</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <XCircle class="h-4 w-4 text-red-600 mt-0.5" ></XCircle>
                    <span>Tonaufzeichnungen</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Wohnungsbesichtigungen */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Home class="h-6 w-6 text-indigo-600" ></Home>
              Wohnungsbesichtigungen
            </h3>
            <div>
              <h4 class="font-semibold mb-3">Best Practices:</h4>
              <ul class="space-y-2">
                {[
                  'Interessentenbogen mit Datenschutzhinweis',
                  'Keine Kopien von Ausweisen anfertigen',
                  'Gruppentermine anonymisiert durchführen',
                  'Daten nach 6 Monaten löschen'
                ].map((item, idx) => (
                  <li key={idx} class="flex items-center gap-2 text-sm">
                    <CheckCircle2 class="h-4 w-4 text-blue-600" ></CheckCircle2>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>
        {/* Muster und Vorlagen */}
        <section id="vorlagen" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Muster und Vorlagen</h2>
          
          {/* Datenschutzerklärung */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText class="h-6 w-6 text-indigo-600" ></FileText>
              Datenschutzerklärung für Mietinteressenten
            </h3>
            <div>
              <pre class="whitespace-pre-wrap">Information zur Datenverarbeitung gemäß Art. 13 DSGVO

1. Verantwortlicher:
   [Ihr Name/Firma]
   [Adresse]
   [Kontaktdaten]

2. Zweck der Datenverarbeitung:
   - Prüfung Ihrer Bewerbung
   - Bonitätsprüfung
   - Vertragsanbahnung

3. Rechtsgrundlage:
   Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)

4. Speicherdauer:
   - Bei Vertragsabschluss: Dauer des Mietverhältnisses + gesetzliche Fristen
   - Bei Ablehnung: 6 Monate (AGG)

5. Ihre Rechte:
   - Auskunft (Art. 15 DSGVO)
   - Berichtigung (Art. 16 DSGVO)
   - Löschung (Art. 17 DSGVO)
   - Beschwerderecht bei Aufsichtsbehörde</pre>
            </div>
            <div class="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                <Download class="h-4 w-4 mr-2" ></Download>
                Als Word herunterladen
              </Button>
              <Button variant="outline" size="sm">
                <FileCode class="h-4 w-4 mr-2" ></FileCode>
                Als PDF speichern
              </Button>
            </div>
          </Card>

          {/* Einwilligung Schufa */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <ClipboardCheck class="h-6 w-6 text-indigo-600" ></ClipboardCheck>
              Einwilligung Schufa-Auskunft
            </h3>
            <div>
              <pre class="whitespace-pre-wrap">Einwilligungserklärung Bonitätsprüfung

Hiermit willige ich ein, dass [Vermieter] zum Zweck der Bonitätsprüfung
eine Schufa-Auskunft über mich einholt.

Diese Einwilligung erfolgt freiwillig und kann jederzeit widerrufen werden.
Ein Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten
Verarbeitung.

_______________________     _______________________
Ort, Datum                  Unterschrift</pre>
            </div>
          </Card>
        </section>

        {/* Datenpannen */}
        <section id="datenpannen" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Datenpannen richtig handhaben</h2>
          
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle class="h-6 w-6 text-amber-600" ></AlertTriangle>
              Sofortmaßnahmen bei Datenverlust
            </h3>
            
            {/* Prozessdiagramm */}
            <div>
              <div class="space-y-4">
                {[
                  { step: '1', title: 'Datenpanne erkannt', action: 'Dokumentieren Sie den Vorfall sofort' },
                  { step: '2', title: 'Risikobewertung', action: 'Prüfen Sie das Risiko für Betroffene' },
                  { step: '3', title: 'Bei hohem Risiko', action: 'Binnen 72h an Behörde melden' },
                  { step: '4', title: 'Betroffene informieren', action: 'Unverzüglich bei hohem Risiko' },
                  { step: '5', title: 'Maßnahmen ergreifen', action: 'Schaden begrenzen und Wiederholung verhindern' }
                ].map((item, idx) => (
                  <div key={idx} class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold">{item.title}</h4>
                      <p class="text-sm text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 class="font-semibold mb-3">Meldepflichtige Vorfälle:</h4>
              <ul class="space-y-2">
                {[
                  'Einbruch mit Aktendiebstahl',
                  'Hack der Verwaltungssoftware',
                  'Versehentlicher E-Mail-Verteiler',
                  'Verlust von USB-Stick mit Mieterdaten',
                  'Unrechtmäßige Datenweitergabe'
                ].map((item, idx) => (
                  <li key={idx} class="flex items-center gap-2 text-sm">
                    <AlertOctagon class="h-4 w-4 text-amber-600" ></AlertOctagon>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Bußgeldrisiken */}
        <section id="bussgeld" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Bußgeldrisiken und Vermeidung</h2>
          
          {/* Bußgeldtabelle */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-6">Häufige Bußgeldgründe</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b bg-muted/50">
                    <th class="text-left p-3">Verstoß</th>
                    <th class="text-left p-3">Bußgeldrahmen</th>
                    <th class="text-left p-3">Prävention</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { verstoss: 'Fehlende Datenschutzerklärung', rahmen: '5.000-50.000€', praevention: 'Vorlagen nutzen' },
                    { verstoss: 'Unrechtmäßige Videoüberwachung', rahmen: '10.000-100.000€', praevention: 'Rechtsberatung' },
                    { verstoss: 'Keine Löschung nach Fristende', rahmen: '5.000-30.000€', praevention: 'Löschkonzept' },
                    { verstoss: 'Auskunft verweigert', rahmen: '5.000-20.000€', praevention: 'Prozess etablieren' },
                    { verstoss: 'Datenpanne nicht gemeldet', rahmen: '10.000-200.000€', praevention: 'Notfallplan' }
                  ].map((row, index) => (
                    <tr>
                      <td class="p-3">{row.verstoss}</td>
                      <td class="p-3 font-medium text-red-600">{row.rahmen}</td>
                      <td class="p-3 text-muted-foreground">{row.praevention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Reale Bußgeldfälle */}
          <Card class="p-6 mb-6">
            <h3 class="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle class="h-6 w-6 text-red-600" ></AlertTriangle>
              Reale Bußgeldfälle aus der Immobilienbranche
            </h3>
            <div>
              {[
                ,
                ,
                ,
                
              ].map((fall, idx) => (
                <Card>
                  <h4 class="font-semibold mb-2">{fall.title}</h4>
                  <div class="space-y-2 text-sm">
                    <p><strong>Verstoß:</strong> {fall.verstoss}</p>
                    <p class="text-red-600 font-semibold">Bußgeld: {fall.bussgeld}</p>
                    <p><strong>Details:</strong> {fall.details}</p>
                    <p class="text-green-600"><strong>Lösung:</strong> {fall.loesung}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* 10-Punkte-Aktionsplan */}
        <section id="aktionsplan" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">10-Punkte-Aktionsplan für Vermieter</h2>
          
          <div>
            {/* Sofort umsetzen */}
            <Card>
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
                <Target class="h-5 w-5" ></Target>
                Sofort umsetzen
              </h3>
              <div class="space-y-3">
                {[
                  '1. Bestandsaufnahme: Welche Daten verarbeiten Sie?',
                  '2. Rechtsgrundlagen prüfen: Für jede Verarbeitung',
                  '3. Datenschutzerklärung: Erstellen und aushändigen',
                  '4. Verarbeitungsverzeichnis: Anlegen und pflegen',
                  '5. Technische Sicherheit: Passwörter, Verschlüsselung'
                ].map((item, idx) => (
                  <label key={idx} class="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" class="h-4 w-4 text-green-600 mt-0.5" />
                    <span class="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </Card>

            {/* Binnen 30 Tagen */}
            <Card>
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-amber-600">
                <Calendar class="h-5 w-5" ></Calendar>
                Binnen 30 Tagen
              </h3>
              <div class="space-y-3">
                {[
                  '6. Auftragsverarbeiter: Verträge prüfen/abschließen',
                  '7. Löschkonzept: Fristen definieren und umsetzen',
                  '8. Mitarbeiterschulung: Sensibilisierung durchführen'
                ].map((item, idx) => (
                  <label key={idx} class="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" class="h-4 w-4 text-amber-600 mt-0.5" />
                    <span class="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </Card>

            {/* Binnen 90 Tagen */}
            <Card>
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
                <Clock class="h-5 w-5" ></Clock>
                Binnen 90 Tagen
              </h3>
              <div class="space-y-3">
                {[
                  '9. Prozesse dokumentieren: Handbuch erstellen',
                  '10. Notfallplan: Für Datenpannen vorbereiten'
                ].map((item, idx) => (
                  <label key={idx} class="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" class="h-4 w-4 text-blue-600 mt-0.5" />
                    <span class="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 class="text-4xl font-bold mb-8">Best Practices erfolgreicher Vermieter</h2>
          
          <div>
            {[
              {
                icon: Brain,
                title: 'Automatisierung mit Datenschutz',
                items: [
                  'Digitale Selbstauskunft mit integrierter Einwilligung',
                  'Automatische Löschung nach Fristen',
                  'Verschlüsselte Kommunikationsportale'
                ]
              },
              ,
              {
                icon: Rocket,
                title: 'Effizienz durch Standardisierung',
                items: [
                  'Einheitliche Formulare',
                  'Checklisten für Mitarbeiter',
                  'Digitale Unterschriften'
                ]
              }
            ].map((practice, idx) => (
              <Card key={idx} class="p-6">
                <practice.icon class="h-8 w-8 text-indigo-600 mb-3" ></practice>
                <div class="text-lg font-semibold mb-3">{practice.title}</div>
                <ul class="space-y-2">
                  {practice.items.map((item, itemIdx) => (
                    <li key={itemIdx} class="flex items-start gap-2 text-sm">
                      <CheckCircle2 class="h-4 w-4 text-green-500 mt-0.5" ></CheckCircle2>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Zukunftstrends */}
        <section id="zukunft" class="max-w-6xl mx-auto scroll-mt-32">
          <h2 id="zukunftstrends-vorbereitung" class="text-4xl font-bold mb-8">Zukunftstrends und Vorbereitung</h2>
          
          <Card class="p-6 mb-6">
            <h3 id="was-kommt-auf-vermieter" class="text-2xl font-semibold mb-4">Was kommt auf Vermieter zu?</h3>
            <div>
              <div>
                <div class="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp class="h-5 w-5 text-indigo-600" ></TrendingUp>
                  Neue Technologien
                </div>
                <ul class="space-y-2">
                  {[
                    'KI-basierte Mieterauswahl: Neue Datenschutzanforderungen',
                    'Smart Home Daten: Klare Regelungen erforderlich',
                    'Blockchain-Mietverträge: Unveränderbarkeit vs. Löschpflicht',
                    'Automatisierte Bonitätsprüfung: Transparenzpflichten'
                  ].map((item, idx) => (
                    <li key={idx} class="flex items-start gap-2 text-sm">
                      <ChevronRight class="h-4 w-4 text-indigo-500 mt-0.5" ></ChevronRight>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div class="font-semibold mb-3 flex items-center gap-2">
                  <Calendar class="h-5 w-5 text-indigo-600" ></Calendar>
                  Zeitplan
                </div>
                <div class="space-y-3">
                  <div>
                    <p class="font-semibold text-sm">2025:</p>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• ePrivacy-Verordnung beachten</li>
                      <li>• KI-Verordnung implementieren</li>
                      <li>• Digitale Identitäten integrieren</li>
                    </ul>
                  </div>
                  <div>
                    <p class="font-semibold text-sm">2026:</p>
                    <ul class="text-sm mt-1 space-y-1">
                      <li>• Volldigitale Mietprozesse</li>
                      <li>• Automatisierte Compliance</li>
                      <li>• Predictive Analytics (datenschutzkonform)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Links Section for SEO */}
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Verwandte Compliance-Themen</h2>
          <div>
            <a href="/wissen/branchen/datenschutz-kindergarten" class="group">
              <Card>
                <div class="p-6">
                  <h3>Datenschutz Kindergarten</h3>
                  <p class="text-sm text-muted-foreground">DSGVO-Compliance für Kitas</p>
                </div>
              </Card>
            </a>
            <a href="/wissen/branchen/dsgvo-vereine" class="group">
              <Card>
                <div class="p-6">
                  <h3>DSGVO für Vereine</h3>
                  <p class="text-sm text-muted-foreground">Datenschutz im Vereinswesen</p>
                </div>
              </Card>
            </a>
            <a href="/wissen/branchen/datenschutz-pflege" class="group">
              <Card>
                <div class="p-6">
                  <h3>Datenschutz in der Pflege</h3>
                  <p class="text-sm text-muted-foreground">DSGVO für Pflegeeinrichtungen</p>
                </div>
              </Card>
            </a>
          </div>
        </section>

        {/* CTA */}
        <Card class="p-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <h3 id="ihr-weg-compliance" class="text-3xl font-bold mb-4">
            Ihr Weg zur DSGVO-Compliance
          </h3>
          <p class="text-xl mb-6 max-w-2xl mx-auto">
            Die DSGVO ist kein Hindernis, sondern eine Chance für professionelles Immobilienmanagement. 
            Mit den richtigen Prozessen und Tools wird Datenschutz zum Wettbewerbsvorteil.
          </p>
          <div>
            <Button size="lg" variant="secondary" class="min-h-[48px] min-w-[48px]">
              Kostenlose Vermieter-Beratung
              <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
            </Button>
            <Button>
              DSGVO-Audit anfordern
            </Button>
          </div>
        </Card>

        {/* Weiterführende Informationen */}
        <section class="max-w-6xl mx-auto mt-12">
          <h2 id="weiterfuehrende-ressourcen" class="text-4xl font-bold mb-8 text-center">Weiterführende Ressourcen</h2>
          
          <div>
            <Card class="p-6">
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building class="h-5 w-5 text-indigo-600" ></Building>
                Aufsichtsbehörden
              </h3>
              <ul class="space-y-2">
                {[
                  { name: 'Bayern', behorde: 'BayLDA', website: 'datenschutz-bayern.de' },
                  { name: 'NRW', behorde: 'LDI NRW', website: 'ldi.nrw.de' },
                  { name: 'Baden-Württemberg', behorde: 'LfDI BW', website: 'baden-wuerttemberg.datenschutz.de' }
                ].map((item, idx) => (
                  <li key={idx} class="flex items-center justify-between text-sm">
                    <span><strong>{item.name}:</strong> {item.behorde}</span>
                    <a>
                      <ExternalLink class="h-3 w-3" ></ExternalLink>
                      Website
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card class="p-6">
              <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen class="h-5 w-5 text-indigo-600" ></BookOpen>
                Empfohlene Tools
              </h3>
              <div class="space-y-3">
                <div>
                  <div class="font-medium text-sm mb-1">Immobilienverwaltung:</div>
                  <p class="text-sm text-muted-foreground">Haufe Axera, DOMUS, objego</p>
                </div>
                <div>
                  <div class="font-medium text-sm mb-1">Kommunikation:</div>
                  <p class="text-sm text-muted-foreground">Element/Matrix, Threema Work</p>
                </div>
                <div>
                  <div class="font-medium text-sm mb-1">E-Mail-Verschlüsselung:</div>
                  <p class="text-sm text-muted-foreground">ProtonMail, Tutanota, GPG4Win</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
      </main>
      
      <Footer ></Footer>
    </div>
    </>`
};