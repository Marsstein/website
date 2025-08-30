export default {
  route: '/assessment-center',
  title: 'Assessment Center',
  description: 'Professionelle Compliance- und Risikobewertungen für',
  content: `
    <>
      
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header ></Header>
        
        {/* Animated Background Elements */}
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" ></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        </div>

        {/* Hero Section */}
        <section>
          <div class="container mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              class="text-center mb-16"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                class="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
              >
                <Target class="h-5 w-5 text-purple-400" ></Target>
                <span class="text-sm font-semibold text-purple-300">Professional Assessment Tools</span>
              </motion.div>
              
              <h1>
                <span class="text-white">Assessment Center</span>
              </h1>
              
              <p>
                Professionelle Compliance- und Risikobewertungen für <span class="font-semibold text-purple-300">DSGVO, ISO 27001, SOC 2</span> und 
                <span class="font-semibold text-pink-300"> KI-Systeme</span>. Wissenschaftlich fundiert, praxisnah und sofort umsetzbar.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                class="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button>
                  <Trophy class="mr-2 h-5 w-5" ></Trophy>
                  Assessment starten
                </Button>
                <Button>
                  Überblick ansehen
                  <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              class="grid grid-cols-2 gap-6 max-w-2xl mx-auto"
            >
              {[
                { value: '5', label: 'Assessment Tools', sublabel: 'Verschiedene Bereiche', icon: Target, color: 'from-blue-500 to-cyan-500' },
                { value: '100+', label: 'Kriterien geprüft', sublabel: 'Umfassende Analyse', icon: CheckCircle2, color: 'from-emerald-500 to-teal-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
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
        </section>

        {/* Assessments Grid */}
        <section>
          <div class="container mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              class="text-center mb-16"
            >
              <h2>
                <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  Verfügbare Compliance-Assessments
                </span>
              </h2>
              <p>
                Wählen Sie das passende Assessment für Ihren Compliance-Bereich
              </p>
            </motion.div>

            <div>
              {assessments.map((assessment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  class="group"
                >
                  <Card>
                    <CardHeader class="pb-4">
                      <div class="flex items-center justify-between mb-4">
                        <div class=inline-flex p-3 rounded-xl bg-gradient-to-r \${assessment.color}>
                          <assessment.icon class="h-6 w-6 text-white" ></assessment>
                        </div>
                        <div class="text-right">
                          <Badge class=bg-gradient-to-r \${assessment.color} text-white>
                            {assessment.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle>
                        {assessment.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent class="pt-0">
                      <p class="text-slate-300 mb-6 leading-relaxed">
                        {assessment.description}
                      </p>
                      
                      <div class="flex flex-wrap gap-2 mb-6">
                        {assessment.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" class="bg-slate-700 text-slate-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Link to={assessment.url}>
                        <Button>
                          Assessment starten
                          <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                  Warum unser Assessment Center?
                </span>
              </h2>
              <p>
                Professionelle Tools für präzise Compliance-Bewertungen
              </p>
            </motion.div>

            <div>
              {[
                {
                  icon: Brain,
                  title: "Wissenschaftlich fundiert",
                  description: "Alle Assessments basieren auf aktuellen Standards und Best Practices aus der Compliance-Forschung",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: BarChart3,
                  title: "Detaillierte Analysen",
                  description: "Erhalten Sie umfassende Reports mit Gap-Analysen, Risikobewertungen und priorisierten Handlungsempfehlungen",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Zap,
                  title: "Sofort umsetzbar",
                  description: "Konkrete, praxisnahe Empfehlungen die Sie direkt in Ihrem Unternehmen implementieren können",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  class="group"
                >
                  <Card>
                    <div class=inline-flex p-4 rounded-2xl bg-gradient-to-r \${feature.color} mb-6>
                      <feature.icon class="h-8 w-8 text-white" ></feature>
                    </div>
                    <h3>
                      {feature.title}
                    </h3>
                    <p class="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer ></Footer>
      </div>
    </>`
};