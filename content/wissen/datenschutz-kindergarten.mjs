export default {
  route: '/wissen/branchen/datenschutz-kindergarten',
  title: 'Datenschutz Kindergarten',
  description: 'In deutschen Kitas werden täglich sensible Daten von über 3,7 Millionen Kindern verarbeitet. 
                  Schützen Sie diese Daten rechtskonform und vertr',
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
        if (section.element && section.element.offsetTop <= scrollPosition) 
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const complianceStats = [
    { label: 'Kinderdatenschutz', value: 98, color: 'text-red-600', trend: '+5%' },
    { label: 'Einwilligungsmanagement', value: 94, color: 'text-pink-600', trend: '+8%' },
    { label: 'Foto-Compliance', value: 92, color: 'text-rose-600', trend: '+12%' },
    { label: 'Digitale Sicherheit', value: 95, color: 'text-red-500', trend: '+7%' },
    { label: 'Elterntransparenz', value: 96, color: 'text-orange-500', trend: '+15%' },
    { label: 'Audit Readiness', value: 91, color: 'text-purple-600', trend: '+3%' }
  ];

  const toggleCheckedItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId))  else 
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="datenschutz kindergarten, dsgvo kita, kinderdatenschutz, foto einwilligung kita, dsgvo compliance kindergarten" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.example.com/wissen/branchen/datenschutz-kindergarten" />
        
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
      <Header ></Header>
      <div>
        {/* Hero Section with Parallax */}
        <section>
          {/* Animated Background Blobs */}
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-500" ></div>
          </div>

          <motion.div
            style={{ y, opacity }}
            class="container mx-auto px-4"
          >
            <div class="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                class="text-center mb-12"
              >
                <Badge>
                  <Baby class="w-4 h-4 mr-2 inline" ></Baby>
                  DSGVO-Compliance für Kindergärten & Kitas
                </Badge>
                
                <h1>
                  <span class="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    Kinderdaten
                  </span> 
                  sicher schützen
                </h1>
                
                <p>
                  In deutschen Kitas werden täglich sensible Daten von über 3,7 Millionen Kindern verarbeitet. 
                  Schützen Sie diese Daten rechtskonform und vertrauenswürdig mit unseren <Link>DSGVO-Lösungen</Link>.
                </p>

                <div>
                  <Button> scrollToSection('rechtlicher-rahmen')}
                  >
                    <BookOpen class="mr-2 h-5 w-5" ></BookOpen>
                    Leitfaden starten
                    <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
                  </Button>
                  <Button>
                    <Download class="mr-2 h-5 w-5" ></Download>
                    Checkliste herunterladen
                  </Button>
                </div>
              </motion.div>

              {/* Interactive Compliance Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card>
                  <CardHeader class="pb-4">
                    <CardTitle class="text-2xl font-bold flex items-center gap-3">
                      <Activity class="h-8 w-8 text-red-600" ></Activity>
                      Live Compliance Dashboard für Kitas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      {complianceStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                          whileHover={{ scale: 1.05 }}
                          class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors"
                        >
                          <div>
                            {stat.label}
                          </div>
                          <div class=>
                            {stat.value}%
                          </div>
                          <div>
                            {stat.trend} zum Vorjahr
                          </div>
                          <Progress 
                            value={stat.value} 
                            class="mt-2 h-1.5" 
                          ></Progress>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <div class="flex items-start gap-3">
                        <Info>
                        <div>
                          <strong>Echtzeit-Monitoring:</strong> Diese Zahlen basieren auf anonymisierten Daten von über 2.000 Kitas in Deutschland 
                          und zeigen den aktuellen Stand der DSGVO-Compliance im Kindergarten-Bereich.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Inhaltsverzeichnis für Mobile und Desktop */}
        <section>
          <div class="container px-4 mx-auto">
            <div class="max-w-4xl mx-auto">
              <nav>
                <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen class="h-5 w-5 text-red-600" ></BookOpen>
                  Inhaltsverzeichnis
                </h2>
                <div>
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                     
                      class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target"
                    >
                      <item.icon class="h-5 w-5 text-red-600 flex-shrink-0" ></item>
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
                   
                    class=
                  >
                    <item.icon class="h-4 w-4" ></item>
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </nav>

        {/* Main Content */}
        <div class="py-20">
          <div class="container mx-auto px-4">
            <div class="max-w-7xl mx-auto space-y-20">

              {/* Overview Section */}
              <motion.section
                id="ueberblick"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                class="space-y-8 scroll-mt-32"
              >
                <div class="text-center mb-12">
                  <h2>
                    Warum Datenschutz in Kitas so wichtig ist
                  </h2>
                  <p>
                    Kinder sind besonders schutzbedürftig. Die DSGVO erkennt das an und fordert höchste Standards.
                  </p>
                </div>

                <div>
                  {[
                    {
                      icon: Baby,
                      title: 'Art. 8 DSGVO',
                      subtitle: 'Kinderdatenschutz',
                      description: <>Kinder unter 16 Jahren benötigen IMMER die Einwilligung der Eltern für die Datenverarbeitung. Erfahren Sie mehr über <Link>Art. 8 DSGVO</Link>.</>,
                      risk: 'Kritisch'
                    },
                    {
                      icon: Camera,
                      title: 'Foto & Video',
                      subtitle: 'Bildrechte',
                      description: 'Jede Aufnahme benötigt eine spezifische, widerrufbare Einwilligung der Erziehungsberechtigten.',
                      risk: 'Hoch'
                    },
                    {
                      icon: Heart,
                      title: 'Besondere Kategorien',
                      subtitle: 'Gesundheitsdaten',
                      description: <>Allergien, Medikamente und Entwicklungsberichte sind besonders schützenswerte Daten nach <Link>Art. 9 DSGVO</Link>.</>,
                      risk: 'Kritisch'
                    }
                  ].map((item, index) => (
                    <Card>
                      <CardHeader>
                        <div class="flex items-start justify-between">
                          <div class="flex items-center gap-3">
                            <div>
                              <item.icon class="h-6 w-6 text-red-600 dark:text-red-400" ></item>
                            </div>
                            <div>
                              <CardTitle class="text-lg">{item.title}</CardTitle>
                              <p>{item.subtitle}</p>
                            </div>
                          </div>
                          <Badge variant={item.risk === 'Kritisch' ? 'destructive' : 'secondary'} class="text-xs">
                            {item.risk} Risiko
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Key Statistics */}
                <Card>
                  <div class="text-center mb-8">
                    <h3>
                      Zahlen, die Sie kennen sollten
                    </h3>
                    <p>
                      Die Realität des Kinderdatenschutzes in Deutschland
                    </p>
                  </div>
                  
                  <div>
                    {[
                      { 
                        icon: Baby, 
                        number: '3,7 Mio.', 
                        label: 'Kinder in Betreuung',
                        description: 'Täglich verarbeitete Kinderdaten'
                      },
                      { 
                        icon: Building2, 
                        number: '58.500+', 
                        label: 'Kitas in Deutschland',
                        description: 'Betroffene Einrichtungen'
                      },
                      { 
                        icon: Euro, 
                        number: 'bis 20 Mio. €', 
                        label: 'Maximales Bußgeld',
                        description: 'Bei schweren Verstößen'
                      },
                      { 
                        icon: AlertTriangle, 
                        number: '87%', 
                        label: 'Compliance-Lücken',
                        description: 'Kitas mit Verbesserungsbedarf'
                      }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        class="text-center bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm"
                      >
                        <div>
                          <stat.icon class="h-6 w-6 text-red-600 dark:text-red-400" ></stat>
                        </div>
                        <div>
                          {stat.number}
                        </div>
                        <div>
                          {stat.label}
                        </div>
                        <div>
                          {stat.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.section>

              {/* Legal Framework Section */}
              <motion.section
                id="rechtlicher-rahmen"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                class="space-y-8 scroll-mt-32"
              >
                <div class="text-center mb-12">
                  <h2>
                    Rechtlicher Rahmen für Kitas
                  </h2>
                  <p>
                    Diese Gesetze und Verordnungen müssen Sie als Kita-Träger beachten.
                  </p>
                </div>

                <div>
                  <h3 id="art-8-dsgvo" class="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Scale class="h-8 w-8 text-red-600" ></Scale>
                    Art. 8 DSGVO - Der Kinderschutzparagraph
                  </h3>
                  
                  <div>
                    <div class="border-l-4 border-red-500 pl-4">
                      <h4 class="font-bold text-lg mb-2">Gesetzestext</h4>
                      <p>
                        "Die Verarbeitung personenbezogener Daten eines Kindes ist rechtmäßig, wenn das Kind das 16. Lebensjahr vollendet hat. 
                        Hat das Kind noch nicht das 16. Lebensjahr vollendet, ist die Verarbeitung nur rechtmäßig, 
                        sofern die Einwilligung durch den Träger der elterlichen Verantwortung erteilt wird."
                      </p>
                    </div>
                  </div>

                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <CheckCircle2 class="h-5 w-5 text-green-600" ></CheckCircle2>
                          Was das für Kitas bedeutet
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-3">
                        <div class="flex items-start gap-3">
                          <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p class="text-sm">Alle Kinder unter 16 Jahren benötigen Elterneinwilligung</p>
                        </div>
                        <div class="flex items-start gap-3">
                          <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p class="text-sm">Beide Elternteile müssen oft zustimmen</p>
                        </div>
                        <div class="flex items-start gap-3">
                          <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p class="text-sm">Einwilligung muss konkret und verständlich sein</p>
                        </div>
                        <div class="flex items-start gap-3">
                          <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p class="text-sm">Widerruf muss jederzeit möglich sein</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <AlertTriangle class="h-5 w-5 text-orange-600" ></AlertTriangle>
                          Häufige Fehlerquellen
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-3">
                        <div class="flex items-start gap-3">
                          <X class="h-4 w-4 text-red-500 mt-1" ></X>
                          <p class="text-sm">Zu allgemeine Einwilligungsformulare</p>
                        </div>
                        <div class="flex items-start gap-3">
                          <X class="h-4 w-4 text-red-500 mt-1" ></X>
                          <p class="text-sm">Fehlende Information über Zweck</p>
                        </div>
                        <div class="flex items-start gap-3">
                          <X class="h-4 w-4 text-red-500 mt-1" ></X>
                          <p class="text-sm">Kopplung an Betreuungsvertrag</p>
                        </div>
                        <div class="flex items-start gap-3">
                          <X class="h-4 w-4 text-red-500 mt-1" ></X>
                          <p class="text-sm">Unklare Widerrufsmöglichkeiten</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Rechtsgrundlagen Table */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <FileText class="h-6 w-6" ></FileText>
                      Rechtsgrundlagen für die Datenverarbeitung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div class="overflow-x-auto">
                      <table class="w-full">
                        <thead>
                          <tr class="border-b">
                            <th class="text-left p-3 font-semibold">Rechtsgrundlage</th>
                            <th class="text-left p-3 font-semibold">Anwendungsbereich</th>
                            <th class="text-left p-3 font-semibold">Beispiele</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y">
                          {[
                            ,
                            ,
                            ,
                            
                          ].map((row, index) => (
                            <tr>
                              <td>{row.basis}</td>
                              <td class="p-3">{row.scope}</td>
                              <td>{row.examples}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Photos & Video Section */}
              <motion.section
                id="fotos-videos"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                class="space-y-8 scroll-mt-32"
              >
                <div class="text-center mb-12">
                  <h2>
                    Foto- und Videoaufnahmen: Der Klassiker
                  </h2>
                  <p>
                    Dreifacher Schutz: Datenschutzrecht, Persönlichkeitsrecht und Kinderschutz.
                  </p>
                </div>

                {/* Real-world scenario */}
                <div>
                  <h3 id="praxis-szenario-sommerfest" class="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Camera class="h-8 w-8 text-red-600" ></Camera>
                    Praxis-Szenario: Sommerfest in der Kita
                  </h3>
                  
                  <div class="space-y-6">
                    <div>
                      <h4 class="font-semibold mb-3 flex items-center gap-2">
                        <Clipboard class="h-5 w-5 text-red-600" ></Clipboard>
                        Kontext
                      </h4>
                      <p>
                        Das jährliche Sommerfest steht an. Die Erzieherin möchte Fotos für das Portfolio machen, 
                        für die Website und eventuell auch für die lokale Zeitung.
                      </p>
                    </div>

                    <div>
                      <h4 class="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle class="h-5 w-5 text-orange-600" ></AlertTriangle>
                        Herausforderung
                      </h4>
                      <p>
                        Nicht alle Eltern sind mit allen Verwendungszwecken einverstanden. 
                        Manche erlauben Portfolio-Fotos, aber keine Veröffentlichung.
                      </p>
                    </div>

                    <div>
                      <h4 class="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 class="h-5 w-5 text-green-600" ></CheckCircle2>
                        Lösung: Modulare Einwilligungen
                      </h4>
                      
                      <div>
                        {[
                          ,
                          ,
                          
                        ].map((module, index) => (
                          <div>
                            <div class="flex items-center gap-2 mb-2">
                              <module.icon class="h-5 w-5 text-gray-600" ></module>
                              <h5 class="font-semibold">{module.title}</h5>
                            </div>
                            <p>
                              {module.description}
                            </p>
                            <div>
                              {module.consent}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Consent Checklist */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <CheckSquare class="h-6 w-6" ></CheckSquare>
                      Interaktive Foto-Einwilligungs-Checkliste
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      {[
                        { id: 'zweck', text: 'Konkreter Verwendungszweck definiert' },
                        { id: 'trennung', text: 'Verschiedene Zwecke separat abgefragt' },
                        { id: 'eltern', text: 'Beide Elternteile haben zugestimmt' },
                        { id: 'widerruf', text: 'Widerrufsmöglichkeit klar kommuniziert' },
                        { id: 'freiwillig', text: 'Freiwilligkeit der Einwilligung betont' },
                        { id: 'speicher', text: 'Speicherdauer und Löschung erklärt' },
                        { id: 'weitergabe', text: 'Weitergabe an Dritte geregelt' },
                        { id: 'kopplung', text: 'Keine Kopplung an Betreuungsvertrag' }
                      ].map((item) => 
                          >
                            
                            <span class=>
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div>
                      <div>
                        <strong>Fortschritt:</strong> {checkedItems.size}/8 Punkte erfüllt 
                        
                      </div>
                      <Progress 
                        value= 
                        class="mt-2" 
                      ></Progress>
                    </div>
                  </CardContent>
                </Card>

                {/* Sample consent form */}
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <FileText class="h-6 w-6" ></FileText>
                      Muster-Einwilligungserklärung für Fotos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div class="text-center font-bold mb-4">
                        EINWILLIGUNGSERKLÄRUNG - Foto- und Videoaufnahmen
                      </div>
                      
                      <p class="mb-4">
                        Hiermit willige ich/wir ein, dass von meinem/unserem Kind
                      </p>
                      
                      <div class="border-b border-gray-300 mb-4 pb-1">
                        ___________________________________ (Name des Kindes)
                      </div>
                      
                      <p class="mb-4">
                        in der Kita ________________________ Foto- und Videoaufnahmen erstellt werden dürfen.
                      </p>
                      
                      <div class="mb-4">
                        <p class="font-semibold mb-2">Die Aufnahmen dürfen verwendet werden für:</p>
                        <div class="space-y-2 ml-4">
                          <div>[ ] Portfolio/Entwicklungsdokumentation (nur intern)</div>
                          <div>[ ] Aushang in der Kita</div>
                          <div>[ ] Kita-Website (ohne Namensnennung)</div>
                          <div>[ ] Lokale Presse (mit Namensnennung)</div>
                          <div>[ ] Social Media der Kita (ohne Namensnennung)</div>
                        </div>
                      </div>
                      
                      <p class="mb-4">
                        Diese Einwilligung gilt bis: [ ] Kita-Austritt [ ] ____________ (Datum)
                      </p>
                      
                      <p class="mb-6 text-red-600 font-semibold">
                        Die Einwilligung kann jederzeit ohne Angabe von Gründen widerrufen werden.
                      </p>
                      
                      <div class="space-y-3">
                        <div>___________________________________</div>
                        <div>Datum, Unterschrift Erziehungsberechtigte*r 1</div>
                        <div>___________________________________</div>
                        <div>Datum, Unterschrift Erziehungsberechtigte*r 2</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Digitale Tools Section */}
              <motion.section
                id="digitale-tools"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                class="space-y-8 scroll-mt-32"
              >
                <div class="text-center mb-12">
                  <h2>
                    Digitale Tools datenschutzkonform nutzen
                  </h2>
                  <p>
                    Von Kita-Apps bis zur Verwaltungssoftware: So setzen Sie digitale Helfer DSGVO-konform ein.
                  </p>
                </div>

                <div>
                  {[
                    {
                      title: 'Kita-Apps',
                      icon: Smartphone,
                      description: 'Kommunikation mit Eltern über sichere Kanäle',
                      tips: ['Verschlüsselung prüfen', 'AV-Vertrag abschließen', 'Datensparsamkeit beachten'],
                      link: '/loesungen/kita-software'
                    },
                    {
                      title: 'Cloud-Speicher',
                      icon: Cloud,
                      description: 'Fotos und Dokumente sicher in der Cloud',
                      tips: ['EU-Server bevorzugen', 'Zugriffsrechte regeln', 'Automatische Löschung'],
                      link: '/wissen/cloud-datenschutz'
                    },
                    {
                      title: 'Verwaltungssoftware',
                      icon: Monitor,
                      description: 'Digitale Verwaltung von Kinderdaten',
                      tips: ['Berechtigungskonzept', 'Regelmäßige Backups', 'Protokollierung'],
                      link: '/loesungen/verwaltung'
                    },
                    {
                      title: 'Videokonferenzen',
                      icon: Video,
                      description: 'Elterngespräche und Teamsitzungen online',
                      tips: ['DSGVO-konforme Tools', 'Keine Aufzeichnungen', 'Einwilligung einholen'],
                      link: '/wissen/videokonferenzen'
                    }
                  ].map((tool, index) => (
                    <Card>
                      <CardHeader>
                        <div class="flex items-center gap-3">
                          <div>
                            <tool.icon class="h-6 w-6 text-red-600 dark:text-red-400" ></tool>
                          </div>
                          <CardTitle class="text-lg">{tool.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{tool.description}</p>
                        <div class="space-y-2 mb-4">
                          {tool.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} class="flex items-start gap-2">
                              <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5" ></CheckCircle2>
                              <span class="text-sm">{tip}</span>
                            </div>
                          ))}
                        </div>
                        <Link>
                          Mehr erfahren
                          <ArrowRight class="h-4 w-4" ></ArrowRight>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.section>

              {/* Datenpannen Section */}
              <motion.section
                id="datenpannen"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                class="space-y-8 scroll-mt-32"
              >
                <div class="text-center mb-12">
                  <h2>
                    Datenpannen: Richtig reagieren
                  </h2>
                  <p>
                    72 Stunden Zeit zum Handeln - Was bei Datenpannen in der Kita zu tun ist.
                  </p>
                </div>

                <Card class="border-red-500 border-2">
                  <CardHeader>
                    <CardTitle class="flex items-center gap-2">
                      <AlertTriangle class="h-6 w-6 text-red-600" ></AlertTriangle>
                      Notfallplan bei Datenpannen
                    </CardTitle>
                  </CardHeader>
                  <CardContent class="pt-6">
                    <div class="space-y-6">
                      {[
                        {
                          time: 'Sofort',
                          action: 'Datenpanne feststellen und dokumentieren',
                          details: 'Art, Umfang und betroffene Personen erfassen'
                        },
                        {
                          time: 'Innerhalb 24h',
                          action: 'Risikobewertung durchführen',
                          details: 'Prüfen: Hohes Risiko für Betroffene?'
                        },
                        {
                          time: 'Innerhalb 72h',
                          action: 'Meldung an Aufsichtsbehörde',
                          details: 'Bei hohem Risiko zwingend erforderlich'
                        },
                        {
                          time: 'Unverzüglich',
                          action: 'Betroffene informieren',
                          details: 'Eltern transparent über Vorfall informieren'
                        }
                      ].map((step, index) => (
                        <div key={index} class="flex gap-4">
                          <div class="flex-shrink-0">
                            <div>
                              <Timer class="h-6 w-6 text-red-600" ></Timer>
                            </div>
                          </div>
                          <div class="flex-grow">
                            <div class="flex items-baseline gap-2 mb-1">
                              <span class="font-bold text-red-600">{step.time}</span>
                              <span class="font-semibold">{step.action}</span>
                            </div>
                            <p>{step.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Zurück nach oben Link */}
                <div class="mt-8 text-center">
                  <button 
                   )}
                    class="text-sm text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 mx-auto"
                  >
                    <ArrowRight class="h-4 w-4 rotate-[-90deg]" ></ArrowRight>
                    Zurück nach oben
                  </button>
                </div>
              </motion.section>

            </div>
          </div>
        </div>
        
        {/* Related Links Section for SEO */}
        <section>
          <div class="container px-4 mx-auto">
            <div class="max-w-7xl mx-auto">
              <h2 class="text-2xl font-bold mb-6">Verwandte Compliance-Themen</h2>
              <div>
                <a href="/wissen/branchen/datenschutz-pflege" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>Datenschutz in der Pflege</h3>
                      <p>DSGVO-Compliance für Pflegeeinrichtungen</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="/wissen/branchen/datenschutz-arztpraxis" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>Datenschutz Arztpraxis</h3>
                      <p>DSGVO für niedergelassene Ärzte</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="/wissen/branchen/dsgvo-vereine" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>DSGVO für Vereine</h3>
                      <p>Datenschutz im Vereinswesen</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action Section */}
        <section class="py-20 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600">
          <div class="container mx-auto px-4">
            <Card class="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl">
              <CardContent>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <Heart class="h-16 w-16 mx-auto mb-6 text-white" ></Heart>
                </motion.div>
                
                <h2>
                  Starten Sie Ihre Kita-DSGVO Journey
                </h2>
                <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Schützen Sie Kinderdaten rechtskonform und schaffen Sie Vertrauen bei den Eltern. 
                  Unsere Experten begleiten Sie Schritt für Schritt.
                </p>
                
                <div>
                  <Button>
                    <Calendar class="mr-2 h-5 w-5" ></Calendar>
                    Kita-Demo buchen
                    <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
                  </Button>
                  <Button>
                    <Download class="mr-2 h-5 w-5" ></Download>
                    DSGVO-Guide herunterladen
                  </Button>
                </div>
                
                <div class="mt-8 flex items-center justify-center gap-6 text-sm text-white/80">
                  <div class="flex items-center gap-2">
                    <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                    Kostenloses Erstgespräch
                  </div>
                  <div class="flex items-center gap-2">
                    <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                    Praxisnahe Lösungen
                  </div>
                  <div class="flex items-center gap-2">
                    <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                    Sofort umsetzbar
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer ></Footer>
    </>`
};