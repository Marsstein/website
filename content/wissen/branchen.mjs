export default {
  route: '/wissen/branchen',
  title: 'Branchen',
  description: '{guide.description}',
  content: `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Header ></Header>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-spin-slow" ></div>
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
              class="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
            >
              <Building2 class="h-5 w-5 text-emerald-400 animate-spin-slow" ></Building2>
              <span class="text-sm font-semibold text-emerald-300">Branchen-Wissen</span>
              <Brain class="h-5 w-5 text-teal-400 animate-pulse" ></Brain>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span class="text-white">Branchen</span>
              <br />
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Compliance
              </span>
              <br />
              <span class="text-white">Expertise</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Spezialisiertes <span class="font-semibold text-emerald-300">Compliance-Wissen</span> für Ihre Branche.
              Von Healthcare bis FinTech - <span class="font-semibold text-teal-300">praxiserprobte Leitfäden</span> 
              für branchenspezifische Herausforderungen.
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
                  Branche auswählen
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <Search class="mr-2 h-5 w-5" ></Search>
                  Wissen durchsuchen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '15+', label: 'Branchen-Guides', sublabel: 'Spezialisierte Leitfäden', icon: FileText, color: 'from-emerald-500 to-teal-500' },
              { value: '200+', label: 'Compliance-Tipps', sublabel: 'Praxiserprobte Lösungen', icon: Lightbulb, color: 'from-teal-500 to-cyan-500' },
              { value: '95%', label: 'Branchenabdeckung', sublabel: 'Major Industries', icon: Target, color: 'from-cyan-500 to-blue-500' },
              { value: '24/7', label: 'Expert Support', sublabel: 'Branchen-Experten', icon: Users, color: 'from-blue-500 to-indigo-500' }
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

      {/* Filter Section */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <div class="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div>
              {/* Category Filter */}
              <div>
                <h3 class="text-sm font-semibold text-slate-300 mb-3">Branche</h3>
                <div class="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                     
                      class=
                    >
                      <category.icon class="h-4 w-4" ></category>
                      <span class="text-sm">{category.name}</span>
                      <Badge class="bg-slate-600 text-slate-200 border-0 text-xs">
                        {category.count}
                      </Badge>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Complexity Filter */}
              <div>
                <h3 class="text-sm font-semibold text-slate-300 mb-3">Komplexität</h3>
                <div class="flex flex-wrap gap-2">
                  {complexityLevels.map((level) => (
                    <motion.button
                      key={level.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                     
                      class=
                    >
                      <span class="text-sm">{level.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Grid */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <div>
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
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
                        <guide.icon class="h-8 w-8 text-white" ></guide>
                      </motion.div>
                      <div class="flex flex-col gap-2 items-end">
                        
                        
                      </div>
                    </div>

                    {/* Content */}
                    <div class="mb-6 flex-grow">
                      <h3>{guide.title}</h3>
                      <p class="text-slate-300 mb-6 leading-relaxed">
                        {guide.description}
                      </p>
                      
                      {/* Meta Information */}
                      <div class="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                        <div class="text-center">
                          <div class="text-sm font-bold text-emerald-400">{guide.readTime}</div>
                          <div class="text-xs text-slate-400">Lesezeit</div>
                        </div>
                        <div class="text-center">
                          <Badge class=>
                            {guide.complexity === 'basic' ? 'Grundlagen' :
                             guide.complexity === 'intermediate' ? 'Fortgeschritten' : 'Experte'}
                          </Badge>
                        </div>
                      </div>

                      {/* Frameworks */}
                      <div class="mb-4">
                        <h4 class="text-sm font-semibold text-slate-300 mb-2">Frameworks:</h4>
                        <div class="flex flex-wrap gap-2">
                          {guide.frameworks.map((framework, idx) => (
                            <Badge key={idx} class="bg-slate-700 text-slate-200 border-0 text-xs">
                              {framework}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div class="mb-6">
                        <h4 class="text-sm font-semibold text-slate-300 mb-3">Key Topics:</h4>
                        <div class="space-y-2">
                          {guide.highlights.slice(0, 3).map((highlight, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              class="flex items-center gap-2"
                            >
                              <CheckCircle2 class="w-4 h-4 text-emerald-400 flex-shrink-0" ></CheckCircle2>
                              <span class="text-sm text-slate-300">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div class="mb-6">
                        <div class="flex flex-wrap gap-2">
                          {guide.tags.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} variant="outline" class="text-xs border-slate-600 text-slate-400">
                              {tag}
                            </Badge>
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
                        <Link to={guide.link} class="flex items-center justify-center gap-2">
                          <span>Leitfaden lesen</span>
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
                Branchen-Highlights
              </span>
            </h2>
            <p>
              Die gefragtesten Compliance-Leitfäden für Ihren Sektor
            </p>
          </motion.div>

          <div>
            {[
              {
                title: "Healthcare DSGVO",
                description: "Patientendaten rechtssicher verarbeiten",
                icon: Heart,
                link: "/wissen/branchen/gesundheitswesen-dsgvo",
                color: "from-red-500 to-pink-500",
                complexity: "Expert",
                readTime: "45 Min"
              },
              {
                title: "Healthcare AI Compliance",
                description: "EU AI Act für medizinische KI-Systeme",
                icon: Brain,
                link: "/wissen/branchen/healthcare-ai-compliance",
                color: "from-blue-500 to-purple-500",
                complexity: "Expert",
                readTime: "50 Min"
              },
              {
                title: "EdTech Privacy",
                description: "COPPA & FERPA für Bildungsplattformen",
                icon: GraduationCap,
                link: "/wissen/branchen/edtech-privacy",
                color: "from-green-500 to-teal-500",
                complexity: "Expert",
                readTime: "40 Min"
              },
              {
                title: "FinTech Compliance",
                description: "Payment und Banking-Innovationen absichern",
                icon: CreditCard,
                link: "/wissen/branchen/fintech-compliance",
                color: "from-blue-500 to-indigo-500",
                complexity: "Expert",
                readTime: "60 Min"
              },
              {
                title: "E-Commerce Privacy",
                description: "Online-Shop datenschutzfreundlich gestalten",
                icon: ShoppingCart,
                link: "/wissen/branchen/ecommerce-privacy",
                color: "from-emerald-500 to-teal-500",
                complexity: "Fortgeschritten",
                readTime: "35 Min"
              }
            ].map((highlight, index) => (
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
                      <highlight.icon class="h-8 w-8 text-white" ></highlight>
                    </div>
                    
                    <h3 class="text-xl font-bold mb-3 text-white">{highlight.title}</h3>
                    <p class="text-slate-300 mb-6">{highlight.description}</p>
                    
                    <div class="flex items-center gap-4 mb-6">
                      <Badge class="bg-slate-700 text-slate-200">
                        <Clock class="h-3 w-3 mr-1" ></Clock>
                        {highlight.readTime}
                      </Badge>
                      <Badge class=>
                        {highlight.complexity}
                      </Badge>
                    </div>
                    
                    <Button asChild class=>
                      <Link to={highlight.link}>
                        Jetzt lesen
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
              <span class="text-white">Bereit für</span>
              <br />
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Branchen-Expertise?
              </span>
            </h2>
            
            <p>
              Nutzen Sie unser spezialisiertes <span class="font-semibold text-emerald-300">Branchen-Wissen</span> 
              für Ihre erfolgreiche Compliance-Strategie.
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
                  Alle Branchen-Leitfäden
                  <ArrowRight class="ml-3 h-6 w-6" ></ArrowRight>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <Download class="mr-3 h-6 w-6" ></Download>
                  Branche anfragen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer ></Footer>
    </div>`
};