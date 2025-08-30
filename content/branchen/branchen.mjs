export default {
  route: '/branchen',
  title: 'Branchen',
  description: '{industry.description}',
  content: `
    <>
      <SEOHead>
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <Header ></Header>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-spin-slow" ></div>
      </div>

      <main class="overflow-hidden">
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
                class="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
              >
                <Building2 class="h-5 w-5 text-emerald-400 animate-pulse" ></Building2>
                <span class="text-sm font-semibold text-emerald-300">Branchenlösungen</span>
                <Shield class="h-5 w-5 text-teal-400 animate-spin-slow" ></Shield>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
              >
                <span class="text-white">Branchenspezifische</span>
                <br />
                <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Compliance
                </span>
                <br />
                <span class="text-white">für</span> 
                <span class="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Profis
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
              >
                Spezialisierte <span class="font-semibold text-emerald-300">Compliance-Strategien</span> für 9 Kernbranchen. 
                Von der Implementierung bis zur Zertifizierung – <span class="font-semibold text-teal-300">branchenspezifisch optimiert</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                class="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button>
                    <Building2 class="mr-2 h-5 w-5" ></Building2>
                    Branchen entdecken
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button>
                    <Search class="mr-2 h-5 w-5" ></Search>
                    Case Studies
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
              {stats.map((stat, index) => (
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

        {/* Category Filter */}
        <section>
          <div class="container mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              class="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 
                  class=
                >
                  <category.icon class="h-5 w-5" ></category>
                  <span>{category.name}</span>
                  <Badge class="bg-slate-700 text-slate-200 border-0 text-xs">
                    {category.count}
                  </Badge>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section>
          <div class="container mx-auto max-w-7xl">
            <div>
              {filteredIndustries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  class="group relative"
                >
                  {/* Glow Effect */}
                  <div>
                  
                  <Card>
                    {/* Background Gradient */}
                    <div class= ></div>
                    
                    <CardContent class="relative p-8 h-full flex flex-col">
                      {/* Header */}
                      <div class="flex items-start justify-between mb-6">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          class=
                        >
                          <industry.icon class="h-8 w-8 text-white" ></industry>
                        </motion.div>
                        <div class="flex flex-col gap-2 items-end">
                          
                          
                          
                        </div>
                      </div>

                      {/* Content */}
                      <div class="mb-6 flex-grow">
                        <h3>{industry.title}</h3>
                        <p class="text-slate-300 mb-6 leading-relaxed">
                          {industry.description}
                        </p>
                        
                        {/* Stats */}
                        <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                          <div class="text-center">
                            <div class="text-lg font-bold text-emerald-400">{industry.caseStudies}</div>
                            <div class="text-xs text-slate-400">Cases</div>
                          </div>
                          <div class="text-center">
                            <div class="text-lg font-bold text-teal-400">{industry.readTime}</div>
                            <div class="text-xs text-slate-400">Lesezeit</div>
                          </div>
                          <div class="text-center">
                            <Badge class=>
                              {industry.difficulty}
                            </Badge>
                          </div>
                        </div>

                        {/* Compliance Score */}
                        <div class="mb-6">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-sm font-semibold text-slate-300">Compliance Score</span>
                            <span class="text-sm font-bold text-emerald-400">{industry.complianceScore}%</span>
                          </div>
                          <div class="w-full bg-slate-700 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: \`\${industry.complianceScore}%\` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                            ></motion>
                          </div>
                        </div>

                        {/* Frameworks */}
                        <div class="mb-6">
                          <h4 class="text-sm font-semibold text-slate-300 mb-3">Frameworks:</h4>
                          <div class="flex flex-wrap gap-2">
                            {industry.frameworks.map((framework, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                              >
                                <Badge class="bg-slate-700/50 text-slate-200 border-slate-600">
                                  {framework}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Key Challenges Preview */}
                        <div class="mb-6">
                          <h4 class="text-sm font-semibold text-slate-300 mb-3">Key Challenges:</h4>
                          <div class="space-y-2">
                            {industry.challenges.slice(0, 3).map((challenge, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                class="flex items-center gap-2"
                              >
                                <AlertTriangle class="w-4 h-4 text-orange-400 flex-shrink-0" ></AlertTriangle>
                                <span class="text-sm text-slate-300">{challenge}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        class="mt-auto"
                      >
                        <Button>
                          <Link to={industry.link} class="flex items-center justify-center gap-2">
                            <span>Branche erkunden</span>
                            <ArrowRight>
                            <ExternalLink class="h-4 w-4 opacity-60" ></ExternalLink>
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section>
          <div class="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-emerald-900/30 to-slate-800/50" ></div>
          
          <div class="container mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              class="text-center mb-16"
            >
              <h2>
                <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Top-Prioritäten
                </span>
              </h2>
              <p>
                Die kritischsten Compliance-Bereiche für den sofortigen Start
              </p>
            </motion.div>

            <div>
              {[
                {
                  title: "Healthcare DSGVO",
                  description: "Art. 9 Compliance für sensible Gesundheitsdaten",
                  icon: Heart,
                  link: "/branchen/gesundheitswesen",
                  color: "from-red-500 to-pink-500",
                  urgency: "Kritisch",
                  framework: "DSGVO Art. 9"
                },
                {
                  title: "Financial AI Act",
                  description: "Hochrisiko-KI-Systeme in Finanzdienstleistungen",
                  icon: Building2,
                  link: "/branchen/finanzdienstleister",
                  color: "from-blue-500 to-indigo-500",
                  urgency: "Hoch",
                  framework: "EU AI Act"
                },
                {
                  title: "Energy NIS2",
                  description: "Kritische Infrastrukturen und Cybersecurity",
                  icon: Zap,
                  link: "/branchen/energie",
                  color: "from-yellow-500 to-orange-500",
                  urgency: "Urgent",
                  framework: "NIS2"
                }
              ].map((priority, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  class="group"
                >
                  <Card>
                    <CardContent class="p-8">
                      <div class=>
                        <priority.icon class="h-8 w-8 text-white" ></priority>
                      </div>
                      
                      <h3 class="text-xl font-bold mb-3 text-white">{priority.title}</h3>
                      <p class="text-slate-300 mb-6">{priority.description}</p>
                      
                      <div class="flex items-center gap-4 mb-6">
                        <Badge>
                          <AlertTriangle class="h-3 w-3 mr-1" ></AlertTriangle>
                          {priority.urgency}
                        </Badge>
                        <Badge class="bg-slate-700 text-slate-200">
                          {priority.framework}
                        </Badge>
                      </div>
                      
                      <Button asChild class=>
                        <Link to={priority.link}>
                          Jetzt starten
                          <ArrowRight class="ml-2 h-4 w-4" ></ArrowRight>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-emerald-900/20" ></div>
          
          <div class="container mx-auto max-w-5xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              class="text-center"
            >
              <h2>
                <span class="text-white">Ihre Branche.</span>
                <br />
                <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Unsere Expertise.
                </span>
              </h2>
              
              <p>
                Von der ersten Beratung bis zur erfolgreichen Zertifizierung – wir begleiten Sie mit 
                <span class="font-semibold text-emerald-300"> branchenspezifischer Expertise</span>.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                class="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button>
                    <Building2 class="mr-3 h-6 w-6" ></Building2>
                    Branch-Beratung buchen
                    <ArrowRight class="ml-3 h-6 w-6" ></ArrowRight>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button>
                    <Download class="mr-3 h-6 w-6" ></Download>
                    Branchen-Guide Download
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer ></Footer>
    </div>
    </>`
};