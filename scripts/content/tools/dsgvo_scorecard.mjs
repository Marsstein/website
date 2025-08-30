export default {
  route: '/tools/dsgvo-compliance-scorecard',
  title: 'DSGVO Scorecard – Compliance-Status bewerten',
  description: 'DSGVO Compliance Scorecard: Bewerten Sie Ihren Datenschutz-Status interaktiv. Gap-Analyse, Benchmarking, Handlungsempfehlungen. ✓ 15 Min Assessment. Jetzt bewerten!',
  content: `<>
      
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
      
      
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style=} />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      
      <motion.section 
        ref=
        style=}
        class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div class="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial=}
            animate=}
            transition=}
            class="text-center mb-20"
          >
            <motion.div 
              initial=}
              animate=}
              transition=}
              class="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <Trophy class="h-5 w-5 text-purple-400 animate-spin-slow" />
              <span class="text-sm font-semibold text-purple-300">Gamified DSGVO Assessment</span>
              <Gamepad2 class="h-5 w-5 text-pink-400 animate-bounce" />
            </motion.div>
            
            <motion.h1 
              initial=}
              animate=}
              transition=}
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
              initial=}
              animate=}
              transition=}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Interaktives Assessment mit <span class="font-semibold text-purple-300">Gamification-Elementen</span>. 
              Sammeln Sie Badges, vergleichen Sie sich mit der Branche und erhalten Sie konkrete Handlungsempfehlungen.
            </motion.p>

            <motion.div
              initial=}
              animate=}
              transition=}
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover=} whileTap=}>
                <Button 
                  onClick=
                  size="lg" 
                  class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Timer class="mr-2 h-5 w-5" />
                  Assessment starten (15 Min)
                </Button>
              </motion.div>
              <motion.div whileHover=} whileTap=}>
                <Button size="lg" variant="outline" class="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <PlayCircle class="mr-2 h-5 w-5" />
                  Demo ansehen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          
          <motion.div 
            initial=}
            animate=}
            transition=}
            class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            ,
              ,
              ,
              
            ].map((stat, index) => (
              <motion.div
                key=
                initial=}
                animate=}
                transition=}
                class="relative group"
              >
                <div class= rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300\`} />
                <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                  <div class= mb-4\`}>
                    <stat.icon class="h-6 w-6 text-white" />
                  </div>
                  <div class="text-2xl md:text-3xl font-bold text-white mb-1"></div>
                  <div class="text-sm font-semibold text-slate-200 mb-1"></div>
                  <div class="text-xs text-slate-400"></div>
                </div>
              </motion.div>
            )`
};