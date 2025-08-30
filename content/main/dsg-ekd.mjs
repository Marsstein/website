export default {
  route: '/dsg-ekd',
  title: 'Dsg Ekd',
  description: 'Datenschutzgesetz der Evangelischen Kirche rechtssicher umsetzen.                      Schützen Sie Gemeindedaten, wahren Sie das Seelsorgegeheimnis.',
  content: `) => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DSG-EKD Kirchlicher Datenschutz",
    "description": "DSG-EKD Compliance: Datenschutzgesetz der Evangelischen Kirche in Deutschland für kirchliche Einrichtungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Church Data Protection Certification",
    "areaServed": "DE"
  };

  const painPoints = [
    {
      icon: Church,
      title: 'Kirchliche Besonderheiten im Datenschutz',
      description: 'Spezifische Anforderungen für Gemeindedaten, Seelsorgegeheimnisse und kirchliche Amtshandlungen unter Berücksichtigung des kirchlichen Selbstbestimmungsrechts.',
      impact: 'Kritisch',
      example: 'Taufregister, Mitgliederdaten, Seelsorgeunterlagen, Gemeindebriefe'
    },
    {
      icon: HandHeart,
      title: 'Sensible Daten in der Seelsorge',
      description: 'Besonders schützenswerte Daten aus Seelsorge, Beratung und diakonischen Diensten erfordern höchste Vertraulichkeit und spezielle Schutzmaßnahmen.',
      impact: 'Kritisch',
      example: 'Beichtgeheimnisse, Beratungsprotokolle, Gesundheitsdaten in kirchlichen Einrichtungen'
    },
    {
      icon: Building2,
      title: 'Komplexe Kirchenstrukturen',
      description: 'Vielschichtige Organisationsstrukturen von Landeskirchen über Gemeinden bis zu diakonischen Werken erschweren einheitliche Datenschutzprozesse.',
      impact: 'Hoch',
      example: 'Landeskirchen, Kirchengemeinden, Diakonie, kirchliche Stiftungen'
    },
    {
      icon: Scale,
      title: 'Balance zwischen Transparenz und Schutz',
      description: 'Spannungsfeld zwischen kirchlicher Öffentlichkeitsarbeit, Gemeindearbeit und dem Schutz personenbezogener Daten der Gemeindemitglieder.',
      impact: 'Hoch',
      example: 'Gemeindebriefe, Jubiläumslisten, Fotorechte bei Veranstaltungen, Online-Gottesdienste'
    }
  ];

  const solutions = [
    {
      title: 'Kirchliches Datenschutz-Management',
      description: 'Maßgeschneiderte Datenschutzkonzepte für kirchliche Einrichtungen nach DSG-EKD',
      features: [
        'Kirchenspezifische Verfahrensverzeichnisse',
        'Seelsorge-Datenschutzkonzepte',
        'Gemeindedaten-Management',
        'Digitale Kirchenbuch-Sicherheit'
      ],
      icon: Church,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Schulung & Sensibilisierung',
      description: 'Praxisorientierte Schulungen für Haupt- und Ehrenamtliche in kirchlichen Einrichtungen',
      features: [
        'DSG-EKD Grundlagenschulungen',
        'Seelsorge & Datenschutz Workshops',
        'Ehrenamtlichen-Sensibilisierung',
        'Kirchenvorstands-Briefings'
      ],
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Technische & Organisatorische Maßnahmen',
      description: 'Kirchengerechte TOM für den Schutz sensibler Gemeinde- und Seelsorgedaten',
      features: [
        'Sichere Gemeinde-Software',
        'Verschlüsselte Seelsorge-Kommunikation',
        'Kirchenbuch-Digitalisierung',
        'Backup-Konzepte für Gemeindedaten'
      ],
      icon: ShieldCheck,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const useCases = [
    {
      title: 'Landeskirche implementiert DSG-EKD',
      challenge: 'Evangelische Landeskirche mit 500+ Gemeinden benötigt einheitliche DSG-EKD Umsetzung',
      solution: 'Zentrales Datenschutzmanagement + Gemeinde-Templates + Schulungsprogramm',
      outcome: 'Flächendeckende DSG-EKD Compliance in 18 Monaten, 95% Zufriedenheit',
      timeline: '18 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Diakonisches Werk digitalisiert Datenschutz',
      challenge: 'Großes diakonisches Werk mit Gesundheits- und Sozialdaten benötigt moderne Datenschutzlösung',
      solution: 'Integriertes DSG-EKD System + Gesundheitsdaten-Schutz + Mitarbeiterschulung',
      outcome: 'Rechtssichere Digitalisierung, 60% Effizienzsteigerung bei Datenschutzprozessen',
      timeline: '12 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Kirchengemeinde meistert Online-Präsenz',
      challenge: 'Mittelgroße Gemeinde möchte digitale Angebote DSG-EKD-konform gestalten',
      solution: 'Website-Audit + Streaming-Konzept + Datenschutzerklärung + Cookie-Management',
      outcome: 'Rechtssichere Online-Präsenz mit Live-Gottesdiensten und digitalem Gemeindeleben',
      timeline: '3 Monate',
      complexity: 'Mittel'
    }
  ];

  const privacyControls = [
    {
      name: 'Kirchliche Datenverarbeitung',
      description: 'Spezifische Regelungen für Sakramente, Amtshandlungen und Gemeindeleben',
      coverage: 98,
      controls: ['Taufdaten', 'Konfirmation', 'Trauung', 'Bestattung', 'Mitgliederverwaltung'],
      icon: Church,
      detail: 'Besondere Verfahren für kirchliche Amtshandlungen und deren lebenslange Dokumentation'
    },
    {
      name: 'Seelsorgegeheimnis',
      description: 'Absoluter Schutz seelsorgerlicher Kommunikation und Beratung',
      coverage: 100,
      controls: ['Beichtgeheimnis', 'Seelsorgegespräche', 'Vertrauliche Beratung'],
      icon: Heart,
      detail: 'Höchste Vertraulichkeitsstufe für alle seelsorgerlichen Tätigkeiten'
    },
    {
      name: 'Ehrenamtlichen-Datenschutz',
      description: 'Datenschutz-Compliance für ehrenamtlich Tätige in der Kirche',
      coverage: 94,
      controls: ['Verpflichtungserklärungen', 'Schulungen', 'Zugriffskontrollen'],
      icon: UserPlus,
      detail: 'Strukturierte Einbindung Ehrenamtlicher in kirchliche Datenschutzprozesse'
    },
    {
      name: 'Gemeindekommunikation',
      description: 'Datenschutzkonforme interne und externe Kommunikation',
      coverage: 92,
      controls: ['Gemeindebriefe', 'Newsletter', 'Soziale Medien', 'Aushänge'],
      icon: MessageSquare,
      detail: 'Balance zwischen lebendiger Gemeindekommunikation und Datenschutz'
    },
    {
      name: 'Kirchenbuchführung',
      description: 'Sichere Verwaltung historischer und aktueller Kirchenbücher',
      coverage: 96,
      controls: ['Digitalisierung', 'Archivierung', 'Zugriffskontrolle', 'Langzeitspeicherung'],
      icon: Book,
      detail: 'Jahrhundertealte Kirchenbücher sicher in die digitale Zukunft führen'
    }
  ];

  const benefits = [
    {
      title: 'Kirchliche Autonomie',
      description: 'Wahrung des kirchlichen Selbstbestimmungsrechts',
      metric: '100%',
      detail: 'DSG-EKD-konform unter Beachtung kirchlicher Besonderheiten'
    },
    {
      title: 'Vertrauensschutz',
      description: 'Stärkung des Vertrauens in kirchliche Einrichtungen',
      metric: '95%',
      detail: 'der Gemeindemitglieder vertrauen auf sicheren Datenschutz'
    },
    {
      title: 'Prozesseffizienz',
      description: 'Optimierte Verwaltungsabläufe durch klare Datenschutzregeln',
      metric: '40%',
      detail: 'Zeitersparnis durch standardisierte Datenschutzprozesse'
    },
    {
      title: 'Rechtssicherheit',
      description: 'Schutz vor Bußgeldern und Reputationsschäden',
      metric: '€0',
      detail: 'Bußgelder durch proaktive DSG-EKD Compliance'
    }
  ];

  const complianceAreas = [
    { name: 'Seelsorgedaten-Schutz', coverage: 100, area: 'Kernbereich' },
    { name: 'Mitgliederverwaltung', coverage: 98, area: 'Administration' },
    { name: 'Ehrenamtlichen-Compliance', coverage: 94, area: 'Personal' },
    { name: 'Digitale Kirchendienste', coverage: 92, area: 'Innovation' }
  ];

  return (
    <>
      <SEOHead>
      <div>
        <Header ></Header>
      
      <main class="overflow-hidden">
        {/* Hero Section */}
        <section>
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
          </div>

          <div class="container px-4">
            <div class="max-w-5xl mx-auto">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  class="space-y-6"
                >
                  <div>
                    <Church class="h-4 w-4" ></Church>
                    <span class="text-sm font-medium">Kirchlicher Datenschutz</span>
                  </div>
                  
                  <h1>
                    DSG-EKD Compliance
                    <span class="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent block mt-2">
                      für Ihre Kirche
                    </span>
                  </h1>
                  
                  <p>
                    Datenschutzgesetz der Evangelischen Kirche rechtssicher umsetzen. 
                    Schützen Sie Gemeindedaten, wahren Sie das Seelsorgegeheimnis.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-purple-600 flex-shrink-0" ></CheckCircle2>
                      <span>Kirchenspezifische Datenschutzlösungen</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-purple-600 flex-shrink-0" ></CheckCircle2>
                      <span>Seelsorgegeheimnis & Vertraulichkeit</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-purple-600 flex-shrink-0" ></CheckCircle2>
                      <span>Beratung durch kirchenerfahrene Experten</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&framework=dsg-ekd">
                      <Button>
                        <PlayCircle class="mr-2 h-5 w-5" ></PlayCircle>
                        DSG-EKD Beratung
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      DSG-EKD Leitfaden
                    </Button>
                  </div>
                </motion.div>

                {/* DSG-EKD Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  class="relative"
                >
                  <Card>
                    <div class="space-y-4">
                      <div class="flex items-center justify-between">
                        <h3 class="font-bold text-lg">Kirchlicher Datenschutz-Status</h3>
                        <Badge class="bg-purple-100 text-purple-700">DSG-EKD konform</Badge>
                      </div>

                      <div class="grid grid-cols-2 gap-4">
                        <Card>
                          <div class="flex items-center justify-between mb-2">
                            <Church class="h-5 w-5 text-purple-600" ></Church>
                            <span class="text-2xl font-bold text-purple-700">{complianceScore}%</span>
                          </div>
                          <p class="text-sm font-medium">Compliance Score</p>
                          <div class="w-full bg-purple-200 rounded-full h-2 mt-2">
                            <motion.div 
                              class="bg-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? \`\${complianceScore}%\` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            ></motion>
                          </div>
                        </Card>

                        <Card>
                          <div class="flex items-center justify-between mb-2">
                            <Users class="h-5 w-5 text-violet-600" ></Users>
                            <span class="text-2xl font-bold text-violet-700">15k+</span>
                          </div>
                          <p class="text-sm font-medium">Geschützte Mitglieder</p>
                          <div class="flex items-center gap-1 mt-2">
                            <CheckCircle2 class="h-3 w-3 text-green-600" ></CheckCircle2>
                            <span class="text-xs text-violet-600">Seelsorgegeheimnis</span>
                          </div>
                        </Card>
                      </div>

                      <div class="space-y-3">
                        {complianceAreas.map((area, index) => (
                          <div key={index} class="space-y-2">
                            <div class="flex items-center justify-between text-sm">
                              <span>{area.name}</span>
                              <div class="flex items-center gap-2">
                                <Badge variant="outline" class="text-xs">{area.area}</Badge>
                                <span class="font-semibold">{area.coverage}%</span>
                              </div>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                              <motion.div 
                                class="bg-purple-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: isVisible ? \`\${area.coverage}%\` : 0 }}
                                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                              ></motion>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div>
                    <div class="flex items-center gap-2">
                      <Heart class="h-4 w-4 text-purple-500" ></Heart>
                      <span class="text-sm font-medium">Vertrauensvoll</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section>
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  Herausforderungen im kirchlichen Datenschutz
                </h2>
                <p>
                  Besondere Anforderungen für Kirchen und kirchliche Einrichtungen
                </p>
              </div>

              <div>
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <div class="space-y-4">
                        <div class="flex items-start justify-between">
                          <div class="flex items-center gap-3">
                            <point.icon class="h-6 w-6 text-purple-600" ></point>
                            <div>
                              <h3 class="font-bold">{point.title}</h3>
                              <Badge>
                                {point.impact}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p>
                          {point.description}
                        </p>
                        
                        <div>
                          <p>
                            <span class="font-medium">Beispiele:</span> {point.example}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Controls Section */}
        <section class="py-20">
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  DSG-EKD Datenschutz-Kontrollen
                </h2>
                <p>
                  Spezifische Schutzmaßnahmen für kirchliche Datenverarbeitung
                </p>
              </div>

              <div class="space-y-8">
                {privacyControls.map((control, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <div>
                        <div>
                          <div class="flex items-center gap-4 mb-4">
                            <div>
                              <control.icon class="h-6 w-6 text-purple-600" ></control>
                            </div>
                            <div>
                              <h3 class="text-xl font-bold">{control.name}</h3>
                              <p>
                                {control.description}
                              </p>
                            </div>
                          </div>
                          <p>
                            {control.detail}
                          </p>
                        </div>
                        
                        <div class="flex flex-wrap gap-2">
                          {control.controls.map((controlItem, i) => (
                            <Badge key={i} variant="outline" class="text-xs">
                              {controlItem}
                            </Badge>
                          ))}
                        </div>
                        
                        <div class="space-y-3">
                          <div class="flex items-center justify-between text-sm">
                            <span class="font-medium">Umsetzung</span>
                            <span class="font-semibold text-purple-600">{control.coverage}%</span>
                          </div>
                          <div class="w-full bg-gray-200 rounded-full h-3">
                            <motion.div 
                              class="bg-gradient-to-r from-purple-500 to-violet-600 h-3 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: \`\${control.coverage}%\` }}
                              transition={{ duration: 1.2, delay: 0.3 }}
                              viewport={{ once: true }}
                            ></motion>
                          </div>
                        </div>
                        
                        <div class="text-center">
                          <Badge class="bg-purple-100 text-purple-700 text-sm px-4 py-2">
                            <CheckCircle2 class="h-4 w-4 mr-2" ></CheckCircle2>
                            Aktiv
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section>
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  DSG-EKD Lösungsansätze
                </h2>
                <p>
                  Maßgeschneiderte Datenschutzkonzepte für Ihre kirchliche Einrichtung
                </p>
              </div>

              <div>
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <div class="space-y-4">
                        <div class=>
                          <solution.icon class="h-6 w-6" ></solution>
                        </div>

                        <h3 class="text-xl font-bold">{solution.title}</h3>
                        <p>
                          {solution.description}
                        </p>

                        <div class="space-y-3 pt-2">
                          {solution.features.map((feature, i) => (
                            <div key={i} class="flex items-start gap-3 text-sm">
                              <CheckCircle2 class="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" ></CheckCircle2>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section class="py-20">
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  DSG-EKD in der Praxis
                </h2>
                <p>
                  Erfolgreiche Umsetzungen in kirchlichen Einrichtungen
                </p>
              </div>

              <div class="space-y-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <div>
                        <div>
                          <h3 class="text-lg font-bold mb-2 text-purple-700">{useCase.title}</h3>
                          <p>
                            <span class="font-medium">Herausforderung:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p class="text-sm">
                            <span class="font-medium text-purple-700">Lösung:</span> {useCase.solution}
                          </p>
                        </div>
                        
                        <div>
                          <p class="text-sm font-medium text-green-700">
                            {useCase.outcome}
                          </p>
                        </div>
                        
                        <div class="flex flex-col gap-2">
                          <Badge variant="outline" class="text-xs">
                            {useCase.timeline}
                          </Badge>
                          <Badge>
                            {useCase.complexity}
                          </Badge>
                        </div>
                        
                        <div class="text-center">
                          <CheckCircle2 class="h-8 w-8 text-purple-600 mx-auto" ></CheckCircle2>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <div class="container px-4">
            <div class="max-w-6xl mx-auto">
              <div class="text-center mb-12">
                <h2>
                  Vorteile der DSG-EKD Compliance
                </h2>
                <p>
                  Messbare Erfolge für Ihre kirchliche Einrichtung
                </p>
              </div>

              <div>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <div>
                        {benefit.metric}
                      </div>
                      <div class="font-semibold mb-2">{benefit.title}</div>
                      <div>
                        {benefit.description}
                      </div>
                      <div class="text-xs text-purple-600 font-medium">
                        {benefit.detail}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
          <div class="container px-4">
            <div class="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  Kirchlicher Datenschutz mit Expertise
                </h2>
                <p class="text-xl mb-8 text-white/90">
                  Setzen Sie das DSG-EKD rechtssicher um. Schützen Sie Gemeindedaten und 
                  wahren Sie das Vertrauen Ihrer Mitglieder mit professioneller Unterstützung.
                </p>

                <div>
                  <a href="/contact?demo=true&framework=dsg-ekd">
                    <Button>
                      <Calendar class="mr-2 h-5 w-5" ></Calendar>
                      DSG-EKD Beratungstermin
                      <ArrowRight>
                    </Button>
                  </a>
                  <Button>
                    <Phone class="mr-2 h-5 w-5" ></Phone>
                    Kostenlose Erstberatung
                  </Button>
                </div>

                <div class="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles class="h-4 w-4" ></Sparkles>
                  <span class="text-sm">
                    Spezialisiert auf kirchliche Datenschutzanforderungen seit 2018
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer ></Footer>
    </div>
    </>`
};