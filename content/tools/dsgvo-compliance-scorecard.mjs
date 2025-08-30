export default {
  route: '/tools/dsgvo-compliance-scorecard',
  title: 'Dsgvo Compliance Scorecard',
  description: 'Erleben Sie unser interaktives DSGVO-Assessment',
  content: `
    <>
      <SEOHead>
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header ></Header>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" ></div>
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div class="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-20"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              class="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <Trophy class="h-5 w-5 text-purple-400 animate-spin-slow" ></Trophy>
              <span class="text-sm font-semibold text-purple-300">Gamified DSGVO Assessment</span>
              <Gamepad2 class="h-5 w-5 text-pink-400 animate-bounce" ></Gamepad2>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span class="text-white">Ihr</span>
              <br />
              <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                DSGVO Score
              </span>
              <br />
              <span class="text-white">in</span> 
              <span class="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                15 Minuten
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Interaktives Assessment mit <span class="font-semibold text-purple-300">Gamification-Elementen</span>. 
              Sammeln Sie Badges, vergleichen Sie sich mit der Branche und erhalten Sie konkrete Handlungsempfehlungen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <Timer class="mr-2 h-5 w-5" ></Timer>
                  Assessment starten (15 Min)
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <PlayCircle class="mr-2 h-5 w-5" ></PlayCircle>
                  Demo ansehen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '15 Min', label: 'Assessment-Dauer', sublabel: 'Schnell & effizient', icon: Clock, color: 'from-blue-500 to-cyan-500' },
              { value: '36', label: 'Compliance-Fragen', sublabel: 'Wissenschaftlich fundiert', icon: FileCheck, color: 'from-purple-500 to-pink-500' },
              { value: '5', label: 'Compliance-Level', sublabel: 'Mit Badges & Rewards', icon: Trophy, color: 'from-emerald-500 to-teal-500' },
              { value: '6', label: 'Branchen-Vergleich', sublabel: 'Industry Benchmarks', icon: BarChart3, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                class="relative group"
              >
                <div>
                <div>
                  <div class=inline-flex p-3 rounded-xl bg-gradient-to-r \${stat.color} mb-4>
                    <stat.icon class="h-6 w-6 text-white" ></stat>
                  </div>
                  <div>{stat.value}</div>
                  <div class="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                  <div class="text-xs text-slate-400">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Assessment Demo */}
      {isAssessing && (
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          class="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div class="container mx-auto max-w-4xl">
            <Card class="border-2 border-purple-500/30 bg-slate-800/90 backdrop-blur-sm">
              <CardHeader class="text-center pb-8">
                <CardTitle class="text-2xl font-bold mb-4 text-white">
                  Live Assessment Demo
                </CardTitle>
                <p class="text-slate-300">
                  Erleben Sie unser interaktives DSGVO-Assessment
                </p>
                <Progress value= class="mt-4" ></Progress>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    class="space-y-6"
                  >
                    <div class="text-center mb-8">
                      <Badge class="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                        Frage {currentQuestion + 1} von {assessmentQuestions.length}
                      </Badge>
                      <h3 class="text-xl font-semibold mb-2 text-white">
                        {assessmentQuestions[currentQuestion]?.category}
                      </h3>
                      <p class="text-lg text-slate-300">
                        {assessmentQuestions[currentQuestion]?.question}
                      </p>
                    </div>
                    
                    <div class="space-y-3">
                      {assessmentQuestions[currentQuestion]?.options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                         
                          class="w-full p-4 text-left border-2 border-slate-600 rounded-xl hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200 text-white"
                        >
                          <div class="flex items-center justify-between">
                            <span class="font-medium">{option.text}</span>
                            <Badge variant="secondary" class="bg-slate-700 text-slate-200">{option.points} Punkte</Badge>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    class="text-center"
                  >
                    <div class="mb-8">
                      <div class="text-6xl mb-4">
                        
                      </div>
                      <h3 class="text-2xl font-bold mb-2 text-white">
                        
                      </h3>
                      <p class="text-lg text-slate-300 mb-4">
                        Score: {demoScore}/30 Punkte (%)
                      </p>
                      <Badge class=bg-gradient-to-r $ text-white>
                        Level 
                      </Badge>
                    </div>
                    
                    <div class="space-y-4 text-left max-w-md mx-auto">
                      <div>
                        <h4 class="font-semibold mb-2 text-white">Empfohlene Maßnahmen:</h4>
                        <ul class="space-y-1">
                          {getComplianceLevel(demoScore).actions.map((action, idx) => (
                            <li key={idx} class="flex items-start gap-2">
                              <CheckCircle2 class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                              <span class="text-sm text-slate-300">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button 
                     
                      class="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                    >
                      Vollständiges Assessment starten
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Key Features */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-16"
          >
            <h2>
              <span class="text-white">Ihre Vorteile</span>
              <br />
              <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                auf einen Blick
              </span>
            </h2>
            <p>
              Warum unser Compliance Scorecard einzigartig ist
            </p>
          </motion.div>

          <div>
            {[
              {
                icon: Target,
                title: "Präzise Bewertung",
                description: "Detaillierte Analyse aller DSGVO-Anforderungen mit klaren Handlungsempfehlungen",
                subtitle: "Wissenschaftlich fundiert",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-slate-800/60"
              },
              {
                icon: Gamepad2,
                title: "Gamified Experience",
                description: "Spielerische Compliance-Bewertung mit Badges, Level und Fortschritts-Tracking",
                subtitle: "Motivierend & interaktiv",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-slate-800/60"
              },
              {
                icon: BarChart3,
                title: "Benchmarking",
                description: "Vergleichen Sie Ihre Compliance mit Branchenstandards und Best Practices",
                subtitle: "Marktvergleich inklusive",
                color: "from-emerald-500 to-teal-500",
                bgColor: "bg-slate-800/60"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
               
               
                class="group relative"
              >
                {/* Glow Effect */}
                <div class={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  \`bg-gradient-to-r \${feature.color}\`,
                  hoveredFeature === feature.title ? "opacity-30" : "opacity-0"
                )} ></div>
                
                <Card>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    class=
                  >
                    <feature.icon class="h-8 w-8 text-white" ></feature>
                  </motion.div>
                  
                  <h3>{feature.title}</h3>
                  <p class="text-slate-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Badge class=>
                    {feature.subtitle}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section>
        <div class="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" ></div>
        
        <div class="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-16"
          >
            <h2>
              <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                Branchenvergleich
              </span>
            </h2>
            <p>
              Sehen Sie, wie Ihre Branche bei der DSGVO-Compliance abschneidet
            </p>
          </motion.div>

          <div>
            {industryBenchmarks.map((benchmark, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                class="group"
              >
                <Card>
                  <div class="flex items-center justify-between mb-4">
                    <div class=>
                      <benchmark.icon class="h-6 w-6 text-white" ></benchmark>
                    </div>
                    {benchmark.trend === 'up' && <TrendingUp class="h-5 w-5 text-green-400" ></TrendingUp>}
                    {benchmark.trend === 'down' && <TrendingDown class="h-5 w-5 text-red-400" ></TrendingDown>}
                    {benchmark.trend === 'stable' && <ArrowRight class="h-5 w-5 text-slate-400" ></ArrowRight>}
                  </div>
                  
                  <h3 class="text-lg font-semibold mb-2 text-white">{benchmark.industry}</h3>
                  <div class="text-2xl font-bold text-white mb-1">{benchmark.averageScore}</div>
                  <div class="text-sm text-slate-400">Durchschnittlicher Compliance-Score</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Levels */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center mb-16"
          >
            <h2>
              <span class="text-white">Compliance Level &</span>
              <br />
              <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                Badges
              </span>
            </h2>
            <p>
              Erreichen Sie das nächste Level und sammeln Sie Achievements
            </p>
          </motion.div>

          <div class="space-y-6">
            {complianceLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                class="group"
              >
                <Card>
                  <div>
                    <div class="flex items-center gap-4">
                      <div class="text-4xl">{level.badge}</div>
                      <div>
                        <h3 class="text-2xl font-bold mb-1 text-white">
                          Level {level.level}
                        </h3>
                        <p class="text-lg font-semibold text-slate-200">{level.name}</p>
                        <Badge class="mt-2 bg-slate-700 text-slate-200">{level.range}</Badge>
                      </div>
                    </div>
                    
                    <div class="flex-grow">
                      <p class="text-slate-300 mb-4">{level.description}</p>
                      
                      <div>
                        <div>
                          <h4 class="font-semibold text-red-400 mb-2">Hauptrisiken:</h4>
                          <ul class="space-y-1">
                            {level.risks.map((risk, idx) => (
                              <li key={idx} class="flex items-start gap-2">
                                <AlertTriangle class="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" ></AlertTriangle>
                                <span class="text-sm text-slate-300">{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 class="font-semibold text-green-400 mb-2">Empfohlene Maßnahmen:</h4>
                          <ul class="space-y-1">
                            {level.actions.map((action, idx) => (
                              <li key={idx} class="flex items-start gap-2">
                                <CheckCircle2 class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                <span class="text-sm text-slate-300">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        {/* Animated Background */}
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20" ></div>
        <div class="absolute inset-0">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" ></div>
          <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} ></div>
        </div>
        
        <div class="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            class="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              class="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <Trophy class="h-5 w-5 text-purple-400" ></Trophy>
              <span class="font-semibold text-purple-300">Bereit für Ihr DSGVO-Assessment?</span>
            </motion.div>
            
            <h2>
              <span class="text-white">Bereit für Ihr</span>
              <br />
              <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                DSGVO-Assessment?
              </span>
            </h2>
            
            <p>
              Ermitteln Sie Ihren Compliance-Score, sammeln Sie Badges und erhalten Sie 
              <span class="font-semibold text-purple-300"> konkrete Handlungsempfehlungen</span> für bessere DSGVO-Compliance.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              class="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <Timer class="mr-3 h-6 w-6" ></Timer>
                  Assessment starten (15 Min)
                  <ArrowRight class="ml-3 h-6 w-6" ></ArrowRight>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <Calendar class="mr-3 h-6 w-6" ></Calendar>
                  Demo vereinbaren
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              class="mt-12 flex justify-center items-center gap-8 text-sm text-slate-400"
            >
              <div class="flex items-center gap-2">
                <Gamepad2 class="h-5 w-5 text-purple-400" ></Gamepad2>
                <span>Gamified Experience</span>
              </div>
              <div class="flex items-center gap-2">
                <BarChart3 class="h-5 w-5 text-pink-400" ></BarChart3>
                <span>Branchenvergleich</span>
              </div>
              <div class="flex items-center gap-2">
                <Target class="h-5 w-5 text-indigo-400" ></Target>
                <span>Wissenschaftlich fundiert</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer ></Footer>
    </div>
    </>`
};