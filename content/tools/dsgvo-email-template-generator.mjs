export default {
  route: '/tools/dsgvo-email-template-generator',
  title: 'Dsgvo Email Template Generator',
  description: 'Für jeden DSGVO-Anwendungsfall die perfekte Vorlage',
  content: `
    <>
      <SEOHead>
      <div class="min-h-screen bg-background">
        <Header ></Header>
      
      {/* Hero Section - Dark themed like the three new pages */}
      <motion.section
        ref={heroRef}
        class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20" ></div>
          <motion.div
            class="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion>
          <motion.div
            class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion>
        </div>

        <div class="container mx-auto max-w-6xl relative z-10">
          <motion.div
            class="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles class="h-4 w-4 text-blue-400" ></Sparkles>
              <span class="text-sm font-medium text-blue-300">KI-gestützte DSGVO Templates</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              class="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span class="text-white">Rechtssichere</span>
              <br />
              <span class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Email-Templates
              </span>
              <br />
              <span class="text-white">in Sekunden</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              KI-generierte, anwaltlich geprüfte Email-Vorlagen für jeden DSGVO-Anwendungsfall. 
              Sparen Sie 90% Zeit und 100% Rechtsrisiko.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              class="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button>
                <Rocket class="mr-2 h-5 w-5" ></Rocket>
                Template Generator starten
              </Button>
              <Button>
                <PlayCircle class="mr-2 h-5 w-5" ></PlayCircle>
                Live Demo ansehen
              </Button>
            </motion.div>

            {/* Key Features */}
            <motion.div
              class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div class="text-3xl font-bold text-white mb-2">
                  180+
                </div>
                <div class="text-sm text-gray-400">Template-Varianten</div>
                <div class="mt-2 flex items-center text-green-400 text-xs">
                  <FileText class="h-3 w-3 mr-1" ></FileText>
                  Alle DSGVO-Szenarien
                </div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div class="text-3xl font-bold text-white mb-2">
                  5 Min
                </div>
                <div class="text-sm text-gray-400">Setup-Zeit</div>
                <div class="mt-2 flex items-center text-blue-400 text-xs">
                  <Zap class="h-3 w-3 mr-1" ></Zap>
                  Sofort einsatzbereit
                </div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div class="text-3xl font-bold text-white mb-2">
                  KI
                </div>
                <div class="text-sm text-gray-400">Powered</div>
                <div class="mt-2 flex items-center text-purple-400 text-xs">
                  <Brain class="h-3 w-3 mr-1" ></Brain>
                  Smart Generation
                </div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div class="text-3xl font-bold text-white mb-2">
                  24/7
                </div>
                <div class="text-sm text-gray-400">Updates</div>
                <div class="mt-2 flex items-center text-yellow-400 text-xs">
                  <RefreshCw class="h-3 w-3 mr-1" ></RefreshCw>
                  Immer aktuell
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Template Showcase Ticker */}
        <motion.div
          class="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div class="flex items-center gap-12 animate-scroll-x">
            {[...tickerTemplates, ...tickerTemplates].map((template, index) => (
              <div key={index} class="flex items-center gap-3 text-sm whitespace-nowrap">
                <template.icon class="h-4 w-4 text-blue-400" ></template>
                <span class="font-medium text-white">{template.type}</span>
                <Badge variant="outline" class="text-xs border-gray-600 text-gray-300">
                  {template.category}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Template Categories Grid */}
      <section>
        <div class="container mx-auto max-w-6xl">
          <motion.div
            class="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              180+ rechtssichere Templates
            </h2>
            <p class="text-xl text-muted-foreground">
              Für jeden DSGVO-Anwendungsfall die perfekte Vorlage
            </p>
          </motion.div>

          <div>
            {templateCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card> setSelectedCategory(category.id)}
                >
                  <CardHeader class="pb-4">
                    <div class="flex items-start justify-between mb-4">
                      <div class=>
                        <category.icon class="h-6 w-6 text-white" ></category>
                      </div>
                      <Badge variant="secondary">
                        {category.templates} Templates
                      </Badge>
                    </div>
                    <CardTitle class="text-xl">{category.name}</CardTitle>
                    <p class="text-sm text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div class="space-y-4">
                      {/* Popular Templates */}
                      <div>
                        <h4 class="text-sm font-semibold mb-2">Beliebte Templates:</h4>
                        <div class="space-y-1">
                          {category.popular.map((template, idx) => (
                            <div key={idx} class="flex items-center gap-2 text-sm">
                              <CheckCircle2 class="h-3 w-3 text-green-600" ></CheckCircle2>
                              <span>{template}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Compliance */}
                      <div>
                        <h4 class="text-sm font-semibold mb-2">Rechtsgrundlagen:</h4>
                        <div class="flex flex-wrap gap-2">
                          {category.compliance.map((law, idx) => (
                            <Badge key={idx} variant="outline" class="text-xs">
                              {law}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 class="text-sm font-semibold mb-2">Zeiteinsparung:</h4>
                        <div class="grid grid-cols-2 gap-2">
                          {category.useCases.map((useCase, idx) => (
                            <div key={idx} class="flex items-center justify-between text-xs">
                              <span class="text-muted-foreground">{useCase.name}</span>
                              <span class="font-medium text-green-600">{useCase.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                      <span class="text-sm font-medium text-primary">
                        Templates erkunden
                      </span>
                      <ArrowRight>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Template Generator Demo */}
      <section>
        <div class="container mx-auto max-w-6xl">
          <motion.div
            class="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Live Template Generator
            </h2>
            <p class="text-xl text-gray-300">
              Sehen Sie, wie schnell Sie rechtssichere Templates erstellen
            </p>
          </motion.div>

          <div>
            {/* Generator Form */}
            <motion.div
              class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 class="text-2xl font-bold text-white mb-6">Template konfigurieren</h3>
              
              <div class="space-y-6">
                <div>
                  <label class="text-sm font-medium text-gray-300 mb-2 block">
                    Unternehmensname
                  </label>
                  <input
                    type="text"
                    value={demoFormData.company}
                   )}
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="text-sm font-medium text-gray-300 mb-2 block">
                    Verarbeitungszweck
                  </label>
                  <select
                    value={demoFormData.purpose}
                   )}
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Newsletter-Versand">Newsletter-Versand</option>
                    <option value="Kundenkommunikation">Kundenkommunikation</option>
                    <option value="Marketing-Kampagnen">Marketing-Kampagnen</option>
                    <option value="Vertragserfüllung">Vertragserfüllung</option>
                  </select>
                </div>

                <div>
                  <label class="text-sm font-medium text-gray-300 mb-2 block">
                    Verarbeitete Daten
                  </label>
                  <div class="grid grid-cols-2 gap-3">
                    {['E-Mail', 'Name', 'Telefon', 'Adresse', 'Präferenzen', 'Kaufhistorie'].map((dataType) => (
                      <label key={dataType} class="flex items-center gap-2 text-sm text-gray-300">
                        <input
                          type="checkbox"
                          checked=
                         );
                            } else {
                              setDemoFormData();
                            }
                          }}
                          class="rounded border-gray-600 bg-white/10"
                        />
                        {dataType}
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                 
                  disabled={isGenerating}
                  class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                >
                  
                </Button>
              </div>
            </motion.div>

            {/* Generated Template Preview */}
            <motion.div
              class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-white">Generiertes Template</h3>
                <div class="flex gap-2">
                  <Button size="sm" variant="outline" class="text-gray-300 border-gray-600">
                    <Copy class="h-4 w-4" ></Copy>
                  </Button>
                  <Button size="sm" variant="outline" class="text-gray-300 border-gray-600">
                    <Download class="h-4 w-4" ></Download>
                  </Button>
                </div>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-lg p-6 font-mono text-sm text-gray-300 leading-relaxed">
                <AnimatePresence mode="wait">
                  {isGenerating ? (
                    <motion.div
                      key="generating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      class="space-y-3"
                    >
                      {[...Array(8)].map((_, i) => (
                        <div key={i} class="flex gap-2">
                          <div class=h-4 bg-gray-700 rounded animate-pulse style={{ width: \`$%\` }} ></div>
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="template"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      class="whitespace-pre-wrap"
                    >
{\`Betreff: Ihre Einwilligung für \${demoFormData.purpose} bei \${demoFormData.company}

Sehr geehrte/r Dateninhaber/in,

hiermit bitten wir Sie um Ihre Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten für \${demoFormData.purpose}.

Verarbeitete Daten:
\${demoFormData.dataTypes.map(type => \`• \${type}\`).join('\\n')}

Rechtsgrundlage: \${demoFormData.legalBasis}
Speicherdauer: \${demoFormData.retention}

Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen...

[Einwilligung erteilen] [Ablehnen]

Mit freundlichen Grüßen
\${demoFormData.company}\`}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div class="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-blue-400">100%</div>
                  <div class="text-xs text-gray-400">DSGVO-konform</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-green-400">2.3s</div>
                  <div class="text-xs text-gray-400">Generierungszeit</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-purple-400">A+</div>
                  <div class="text-xs text-gray-400">Compliance Score</div>
                </div>
              </div>
            </motion.div>
          </div>

          {useEffect(() => {
            if (isGenerating) 
          }, [isGenerating])}
        </div>
      </section>

      {/* Key Benefits */}
      <section>
        <div class="container mx-auto max-w-6xl">
          <motion.div
            class="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Ihre Vorteile auf einen Blick
            </h2>
            <p class="text-xl text-muted-foreground">
              So profitiert Ihr Unternehmen von automatisierten Templates
            </p>
          </motion.div>

          <div>
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                class="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div class= ></div>
                
                <div class="relative z-10">
                  <div class=>
                    <benefit.icon class="h-8 w-8 text-white" ></benefit>
                  </div>

                  <h3 class="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p>
                    {benefit.description}
                  </p>

                  <div class="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 class="h-5 w-5 text-green-600" ></CheckCircle2>
                    <span class=>
                      {benefit.benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section>
        <div class="container mx-auto max-w-6xl">
          <motion.div
            class="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Immer auf dem neuesten Stand
            </h2>
            <p class="text-xl text-muted-foreground">
              Automatische Updates bei Rechtsänderungen
            </p>
          </motion.div>

          <div>
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div class="flex items-center gap-4 mb-6">
                  <div class="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                    <feature.icon class="h-6 w-6 text-white" ></feature>
                  </div>
                  <h3 class="text-xl font-bold">{feature.title}</h3>
                </div>

                <p>
                  {feature.description}
                </p>

                <div class="space-y-3">
                  {feature.updates.map((update, idx) => (
                    <div>
                      <CheckCircle2 class="h-4 w-4 text-green-600" ></CheckCircle2>
                      <span class="text-sm font-medium">{update}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div class="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Nie wieder unsichere Email-Texte
            </h2>
            <p class="text-xl text-blue-100 mb-12">
              Starten Sie jetzt mit rechtssicheren Templates und sparen Sie Zeit, Geld und Nerven.
              14 Tage kostenlos testen - keine Kreditkarte erforderlich.
            </p>

            <div>
              <Button>
                <Rocket class="mr-2 h-5 w-5" ></Rocket>
                Kostenlos starten
              </Button>
              <Button>
                <Calendar class="mr-2 h-5 w-5" ></Calendar>
                Demo vereinbaren
              </Button>
            </div>

            <div>
              <div class="flex items-center justify-center gap-2">
                <Shield class="h-5 w-5" ></Shield>
                <span>100% DSGVO-konform</span>
              </div>
              <div class="flex items-center justify-center gap-2">
                <Clock class="h-5 w-5" ></Clock>
                <span>Setup in 5 Minuten</span>
              </div>
              <div class="flex items-center justify-center gap-2">
                <Award class="h-5 w-5" ></Award>
                <span>Anwaltlich geprüft</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer ></Footer>
    </div>
    </>`
};