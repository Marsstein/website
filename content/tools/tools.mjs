export default {
  route: '/tools',
  title: 'Tools',
  description: '{tool.description}',
  content: `
    <>
      <SEOHead>
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header ></Header>
      
      {/* Animated Background Elements */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse" ></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} ></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl animate-spin-slow" ></div>
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
              class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Sparkles class="h-5 w-5 text-blue-400 animate-spin-slow" ></Sparkles>
              <span class="text-sm font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Compliance Tools</span>
              <Sparkles class="h-5 w-5 text-emerald-400 animate-spin-slow" style={{ animationDelay: '1s' }} ></Sparkles>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span class="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Compliance
              </span>
              <br />
              <span class="text-white">leicht</span>
              <br />
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                gemacht
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Intelligente Tools, die Ihre Compliance-Herausforderungen lösen und aus komplexen Anforderungen
              <span class="font-semibold text-emerald-400"> einfache Lösungen</span> machen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button>
                <Rocket class="mr-2 h-5 w-5" ></Rocket>
                Tools entdecken
              </Button>
              <Button>
                <PlayCircle class="mr-2 h-5 w-5" ></PlayCircle>
                Demo ansehen
              </Button>
            </motion.div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: 'DSGVO-konform', label: 'Vollständige Compliance', icon: Shield, color: 'from-emerald-500 to-teal-500' },
              { value: 'Schnell', label: 'Setup in Minuten', icon: Clock, color: 'from-amber-500 to-orange-500' },
              { value: 'Aktuell', label: 'Immer auf dem neuesten Stand', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
              { value: 'Experten-Tools', label: 'Von Datenschutz-Profis', icon: Users, color: 'from-blue-500 to-cyan-500' }
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
                  <div class="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <div class="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/20">
            <div>
              {/* Category Filter */}
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Filter class="h-5 w-5 text-emerald-400" ></Filter>
                  Kategorien
                </h3>
                <div class="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                     
                      class=
                    >
                      <category.icon class="h-4 w-4" ></category>
                      <span>{category.name}</span>
                      <Badge class="bg-slate-600/50 text-slate-300 text-xs">
                        {category.count}
                      </Badge>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Complexity Filter */}
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BarChart3 class="h-5 w-5 text-emerald-400" ></BarChart3>
                  Komplexität
                </h3>
                <div class="flex flex-wrap gap-3">
                  {complexityLevels.map((level) => (
                    <motion.button
                      key={level.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                     
                      class=
                    >
                      {level.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section>
        <div class="container mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key=\${selectedCategory}-\${selectedComplexity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              class="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  class="group relative"
                >
                  {/* Glow Effect */}
                  <div>
                  
                  <Card>
                    <CardContent class="p-8 h-full flex flex-col">
                      {/* Header */}
                      <div class="flex items-start justify-between mb-6">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          class=
                        >
                          <tool.icon class="h-8 w-8 text-white" ></tool>
                        </motion.div>
                        <div class="flex flex-col gap-2 items-end">
                          
                          
                          <div class="flex items-center gap-1">
                            <Star class="h-4 w-4 text-amber-500 fill-current" ></Star>
                            <span class="text-sm font-medium text-slate-300">{tool.popularity}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div class="mb-6 flex-grow">
                        <h3>{tool.title}</h3>
                        <p class="text-slate-400 mb-3 font-medium">{tool.subtitle}</p>
                        <p class="text-sm text-slate-300 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      {/* Quick Stats */}
                      <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/20">
                        <div class="text-center">
                          <div class="text-lg font-bold text-emerald-400">{tool.setupTime}</div>
                          <div class="text-xs text-slate-400">Setup</div>
                        </div>
                        <div class="text-center">
                          <div class="text-lg font-bold text-blue-400">{tool.roi}</div>
                          <div class="text-xs text-slate-400">ROI</div>
                        </div>
                        <div class="text-center">
                          <div class="text-lg font-bold text-purple-400">{tool.popularity}%</div>
                          <div class="text-xs text-slate-400">Beliebt</div>
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div class="mb-6">
                        <div class="space-y-2">
                          {tool.benefits.slice(0, 3).map((benefit, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              class="flex items-center gap-3"
                            >
                              <CheckCircle2 class="w-5 h-5 text-emerald-400 flex-shrink-0" ></CheckCircle2>
                              <span class="text-sm font-medium text-slate-300">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        class="mt-auto"
                      >
                        <Button>
                          <Link to={tool.link} class="flex items-center justify-center gap-2">
                            <span>Tool nutzen</span>
                            <ArrowRight>
                            <ExternalLink class="h-4 w-4 opacity-60" ></ExternalLink>
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        {/* Animated Background */}
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-teal-500/5" ></div>
        <div class="absolute inset-0">
          <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" ></div>
          <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} ></div>
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
              class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
            >
              <Rocket class="h-5 w-5 text-emerald-400" ></Rocket>
              <span class="font-semibold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Starten Sie jetzt durch</span>
            </motion.div>
            
            <h2>
              <span class="text-white">Bereit für</span>
              <br />
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                smarte Tools?
              </span>
            </h2>
            
            <p>
              Machen Sie den ersten Schritt in eine Zukunft, in der 
              <span class="font-semibold text-emerald-400">Tools Ihre Probleme lösen</span> statt neue zu schaffen.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              class="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <Calendar class="mr-3 h-6 w-6" ></Calendar>
                  Kostenlose Demo buchen
                  <ArrowRight class="ml-3 h-6 w-6" ></ArrowRight>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>
                  <Phone class="mr-3 h-6 w-6" ></Phone>
                  Sofort anrufen
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              class="mt-12 text-center"
            >
              <p class="text-sm text-slate-400 mb-4">Tools, die echte Probleme lösen</p>
              <div class="flex justify-center items-center gap-8 opacity-40">
                <Building2 class="h-8 w-8 text-slate-400" ></Building2>
                <Users class="h-8 w-8 text-slate-400" ></Users>
                <Shield class="h-8 w-8 text-slate-400" ></Shield>
                <Award class="h-8 w-8 text-slate-400" ></Award>
                <Trophy class="h-8 w-8 text-slate-400" ></Trophy>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer ></Footer>
    </div>
    </>`
};