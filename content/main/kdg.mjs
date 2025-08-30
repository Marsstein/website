export default {
  route: '/kdg',
  title: 'Kdg',
  description: 'Kirchliches Datenschutzgesetz der katholischen Kirche rechtssicher umsetzen.                      Schützen Sie sakramentale Daten und wahren Sie das Beichtgehei',
  content: `) => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "KDG Katholischer Datenschutz",
    "description": "KDG Compliance: Gesetz über den Kirchlichen Datenschutz der Katholischen Kirche für kirchliche Einrichtungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Catholic Church Data Protection Certification",
    "areaServed": "DE"
  };

  const painPoints = [
    {
      icon: Landmark,
      title: 'Diözesane Strukturen und Datenschutz',
      description: 'Komplexe Hierarchien von Bistümern, Pfarreien und kirchlichen Einrichtungen erfordern differenzierte Datenschutzkonzepte mit klaren Verantwortlichkeiten.',
      impact: 'Kritisch',
      example: 'Bistumsverwaltung, Pfarreien, Caritas, Ordensgemeinschaften, katholische Schulen'
    },
    {
      icon: Cross,
      title: 'Sakramentale Daten und Beichtgeheimnis',
      description: 'Absoluter Schutz des Beichtgeheimnisses und besondere Sensibilität bei sakramentalen Daten wie Taufe, Firmung, Ehe und Krankensalbung.',
      impact: 'Kritisch',
      example: 'Matrikelbücher, Beichtgeheimnis, Eheakten, Firmungsregister, Krankensakramente'
    },
    {
      icon: Crown,
      title: 'Kirchliches Eigenrecht und DSGVO',
      description: 'Balance zwischen kirchlichem Selbstbestimmungsrecht, kanonischem Recht und staatlichen Datenschutzanforderungen bei gleichzeitiger DSGVO-Konformität.',
      impact: 'Hoch',
      example: 'Kanonisches Recht, Konkordate, Kirchensteuer, staatskirchenrechtliche Besonderheiten'
    },
    {
      icon: HandHeart,
      title: 'Caritative und soziale Dienste',
      description: 'Besondere Datenschutzanforderungen in caritativen Einrichtungen mit sensiblen Gesundheits- und Sozialdaten von Hilfsbedürftigen.',
      impact: 'Hoch',
      example: 'Caritas-Beratungsstellen, Krankenhäuser, Pflegeheime, Sozialstationen, Flüchtlingshilfe'
    }
  ];

  const solutions = [
    {
      title: 'KDG-Datenschutzmanagement',
      description: 'Spezialisierte Datenschutzlösungen für katholische Einrichtungen nach KDG',
      features: [
        'Diözesane Datenschutzkonzepte',
        'Matrikelbuch-Digitalisierung',
        'Beichtgeheimnis-Schutz',
        'Caritas-Datenschutz'
      ],
      icon: Landmark,
      color: 'from-amber-500 to-yellow-600'
    },
    {
      title: 'Schulung für kirchliche Mitarbeiter',
      description: 'KDG-konforme Schulungen für Haupt- und Ehrenamtliche in der katholischen Kirche',
      features: [
        'KDG-Grundlagenschulungen',
        'Sakramentendaten-Schutz',
        'Pfarrbüro-Datenschutz',
        'Caritas-Mitarbeiterschulung'
      ],
      icon: BookOpen,
      color: 'from-red-500 to-rose-600'
    },
    {
      title: 'Technische Schutzmaßnahmen',
      description: 'Kirchenspezifische IT-Sicherheit für sensible Gemeinde- und Sakramentendaten',
      features: [
        'Sichere Pfarrverwaltung',
        'Matrikelbuch-Sicherheit',
        'Verschlüsselte Kommunikation',
        'Diözesane IT-Standards'
      ],
      icon: ShieldCheck,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const useCases = [
    {
      title: 'Bistum führt KDG flächendeckend ein',
      challenge: 'Großes Bistum mit 300+ Pfarreien und diversen kirchlichen Einrichtungen benötigt einheitliche KDG-Umsetzung',
      solution: 'Diözesanes Datenschutzkonzept + Pfarrei-Templates + Multiplikatorenschulung',
      outcome: 'Vollständige KDG-Compliance in 24 Monaten, zentrale Unterstützungsstruktur etabliert',
      timeline: '24 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Caritas digitalisiert Klientenverwaltung',
      challenge: 'Caritasverband möchte Beratungsdokumentation digitalisieren unter Wahrung höchster Datenschutzstandards',
      solution: 'KDG-konforme Digitalisierung + Verschlüsselung + Zugriffskonzepte + Schulungen',
      outcome: 'Sichere digitale Klientenverwaltung mit 50% Effizienzsteigerung bei voller KDG-Compliance',
      timeline: '9 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Pfarrgemeinde modernisiert Datenverwaltung',
      challenge: 'Große Stadtpfarrei will Mitgliederverwaltung und Sakramentendokumentation KDG-konform modernisieren',
      solution: 'Pfarrverwaltungssoftware + Matrikelbuch-Digitalisierung + Datenschutzkonzept',
      outcome: 'Moderne, rechtssichere Verwaltung mit geschützten sakramentalen Daten',
      timeline: '6 Monate',
      complexity: 'Mittel'
    }
  ];

  const privacyControls = [
    {
      name: 'Sakramentale Datenverarbeitung',
      description: 'Besonderer Schutz für Taufe, Firmung, Ehe, Weihe und Krankensalbung',
      coverage: 99,
      controls: ['Matrikelbücher', 'Taufregister', 'Eheakten', 'Firmungsunterlagen', 'Weihedaten'],
      icon: Cross,
      detail: 'Unveränderliche Dokumentation sakramentaler Handlungen mit höchsten Schutzstandards'
    },
    {
      name: 'Beichtgeheimnis und Forum Internum',
      description: 'Absoluter Schutz des Beichtgeheimnisses und innerer Angelegenheiten',
      coverage: 100,
      controls: ['Beichtgeheimnis', 'Gewissensforum', 'Geistliche Begleitung'],
      icon: Lock,
      detail: 'Unverbrüchlicher Schutz des sakramentalen Bekenntnisses nach kanonischem Recht'
    },
    {
      name: 'Caritative Datenverwaltung',
      description: 'Datenschutz in karitativen und sozialen Diensten der Kirche',
      coverage: 95,
      controls: ['Klientendaten', 'Gesundheitsdaten', 'Sozialberatung', 'Hilfeleistungen'],
      icon: HandHeart,
      detail: 'Sensibler Umgang mit Daten Hilfsbedürftiger in caritativen Einrichtungen'
    },
    {
      name: 'Diözesane Verwaltung',
      description: 'Datenschutzkonforme Verwaltung auf Bistums- und Pfarreiebene',
      coverage: 93,
      controls: ['Personalakten', 'Kirchensteuer', 'Vermögensverwaltung', 'Gremienarbeit'],
      icon: Landmark,
      detail: 'Strukturierte Datenverwaltung in der komplexen katholischen Hierarchie'
    },
    {
      name: 'Digitale Seelsorge',
      description: 'Datenschutz bei digitalen Angeboten und Online-Seelsorge',
      coverage: 91,
      controls: ['Online-Beratung', 'Streaming', 'Apps', 'Soziale Medien'],
      icon: Monitor,
      detail: 'Moderne Seelsorge unter Wahrung traditioneller Vertraulichkeitsstandards'
    }
  ];

  const benefits = [
    {
      title: 'Kirchenrechtliche Konformität',
      description: 'Einhaltung von KDG und kanonischem Recht',
      metric: '100%',
      detail: 'Vollständige Übereinstimmung mit kirchlichen Vorgaben'
    },
    {
      title: 'Gläubigenvertrauen',
      description: 'Stärkung des Vertrauens durch transparenten Datenschutz',
      metric: '94%',
      detail: 'der Gläubigen vertrauen auf sicheren Umgang mit ihren Daten'
    },
    {
      title: 'Verwaltungseffizienz',
      description: 'Optimierte Prozesse in Bistümern und Pfarreien',
      metric: '45%',
      detail: 'Zeitersparnis durch standardisierte KDG-Prozesse'
    },
    {
      title: 'Risikominimierung',
      description: 'Schutz vor Datenschutzverletzungen und Imageschäden',
      metric: '€0',
      detail: 'Bußgelder durch proaktive KDG-Umsetzung'
    }
  ];

  const complianceAreas = [
    { name: 'Sakramentenschutz', coverage: 99, area: 'Kernbereich' },
    { name: 'Diözesanverwaltung', coverage: 96, area: 'Administration' },
    { name: 'Caritas-Datenschutz', coverage: 95, area: 'Soziale Dienste' },
    { name: 'Digitale Pastoral', coverage: 91, area: 'Moderne Seelsorge' }
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
            <div class="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
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
                    <Cross class="h-4 w-4" ></Cross>
                    <span class="text-sm font-medium">Katholischer Datenschutz</span>
                  </div>
                  
                  <h1>
                    KDG Compliance
                    <span class="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block mt-2">
                      für Ihre Diözese
                    </span>
                  </h1>
                  
                  <p>
                    Kirchliches Datenschutzgesetz der katholischen Kirche rechtssicher umsetzen. 
                    Schützen Sie sakramentale Daten und wahren Sie das Beichtgeheimnis.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-amber-600 flex-shrink-0" ></CheckCircle2>
                      <span>Diözesane Datenschutzkonzepte</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-amber-600 flex-shrink-0" ></CheckCircle2>
                      <span>Schutz sakramentaler Daten</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-amber-600 flex-shrink-0" ></CheckCircle2>
                      <span>Expertise im kanonischen Recht</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&framework=kdg">
                      <Button>
                        <PlayCircle class="mr-2 h-5 w-5" ></PlayCircle>
                        KDG Beratung
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      KDG Leitfaden
                    </Button>
                  </div>
                </motion.div>

                {/* KDG Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  class="relative"
                >
                  <Card>
                    <div class="space-y-4">
                      <div class="flex items-center justify-between">
                        <h3 class="font-bold text-lg">Katholischer Datenschutz-Status</h3>
                        <Badge class="bg-amber-100 text-amber-700">KDG konform</Badge>
                      </div>

                      <div class="grid grid-cols-2 gap-4">
                        <Card>
                          <div class="flex items-center justify-between mb-2">
                            <Cross class="h-5 w-5 text-amber-600" ></Cross>
                            <span class="text-2xl font-bold text-amber-700">{complianceScore}%</span>
                          </div>
                          <p class="text-sm font-medium">Compliance Score</p>
                          <div class="w-full bg-amber-200 rounded-full h-2 mt-2">
                            <motion.div 
                              class="bg-amber-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? \`\${complianceScore}%\` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            ></motion>
                          </div>
                        </Card>

                        <Card>
                          <div class="flex items-center justify-between mb-2">
                            <Users class="h-5 w-5 text-yellow-600" ></Users>
                            <span class="text-2xl font-bold text-yellow-700">12.1M</span>
                          </div>
                          <p class="text-sm font-medium">Katholiken geschützt</p>
                          <div class="flex items-center gap-1 mt-2">
                            <CheckCircle2 class="h-3 w-3 text-green-600" ></CheckCircle2>
                            <span class="text-xs text-yellow-600">27 Bistümer</span>
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
                                class="bg-amber-600 h-2 rounded-full"
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
                      <Landmark class="h-4 w-4 text-amber-500" ></Landmark>
                      <span class="text-sm font-medium">Bistums-Ready</span>
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
                  Herausforderungen im katholischen Datenschutz
                </h2>
                <p>
                  Spezifische Anforderungen für Bistümer, Pfarreien und kirchliche Einrichtungen
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
                            <point.icon class="h-6 w-6 text-amber-600" ></point>
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
                  KDG Datenschutz-Kontrollen
                </h2>
                <p>
                  Spezifische Schutzmaßnahmen für katholische Datenverarbeitung
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
                              <control.icon class="h-6 w-6 text-amber-600" ></control>
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
                            <span class="font-semibold text-amber-600">{control.coverage}%</span>
                          </div>
                          <div class="w-full bg-gray-200 rounded-full h-3">
                            <motion.div 
                              class="bg-gradient-to-r from-amber-500 to-yellow-600 h-3 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: \`\${control.coverage}%\` }}
                              transition={{ duration: 1.2, delay: 0.3 }}
                              viewport={{ once: true }}
                            ></motion>
                          </div>
                        </div>
                        
                        <div class="text-center">
                          <Badge class="bg-amber-100 text-amber-700 text-sm px-4 py-2">
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
                  KDG Lösungsansätze
                </h2>
                <p>
                  Maßgeschneiderte Datenschutzkonzepte für katholische Einrichtungen
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
                              <CheckCircle2 class="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" ></CheckCircle2>
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
                  KDG in der Praxis
                </h2>
                <p>
                  Erfolgreiche Umsetzungen in katholischen Einrichtungen
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
                          <h3 class="text-lg font-bold mb-2 text-amber-700">{useCase.title}</h3>
                          <p>
                            <span class="font-medium">Herausforderung:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p class="text-sm">
                            <span class="font-medium text-amber-700">Lösung:</span> {useCase.solution}
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
                          <CheckCircle2 class="h-8 w-8 text-amber-600 mx-auto" ></CheckCircle2>
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
                  Vorteile der KDG Compliance
                </h2>
                <p>
                  Messbare Erfolge für Ihre katholische Einrichtung
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
                      <div class="text-xs text-amber-600 font-medium">
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
        <section class="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
          <div class="container px-4">
            <div class="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>
                  Katholischer Datenschutz mit Expertise
                </h2>
                <p class="text-xl mb-8 text-white/90">
                  Setzen Sie das KDG rechtssicher um. Schützen Sie sakramentale Daten und 
                  wahren Sie das Beichtgeheimnis mit professioneller Unterstützung.
                </p>

                <div>
                  <a href="/contact?demo=true&framework=kdg">
                    <Button>
                      <Calendar class="mr-2 h-5 w-5" ></Calendar>
                      KDG Beratungstermin
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
                    Spezialisiert auf katholische Datenschutzanforderungen seit 2018
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