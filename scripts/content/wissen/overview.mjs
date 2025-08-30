export default {
  route: '/wissen',
  title: 'Compliance Wissen – DSGVO-Leitfäden & Rechtsprechung 2024',
  description: 'Kostenlose Compliance-Leitfäden für DSGVO, ISO 27001, SOC2 & EU AI Act. ✓ 24+ praxiserprobte Guides ✓ Aktuelle Rechtsprechung ✓ Schritt-für-Schritt Anleitungen.',
  content: `<>
      
      <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
      
      
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style=} />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" />
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
              class="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <BookOpen class="h-5 w-5 text-blue-400 animate-spin-slow" />
              <span class="text-sm font-semibold text-blue-300">Compliance Wissen</span>
              <Brain class="h-5 w-5 text-indigo-400 animate-pulse" />
            </motion.div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
              <motion.span
                initial=}
                animate=}
                transition=}
                class="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                Compliance Wissen für Experten
              </motion.span>
            </h1>
            
            <motion.p 
              initial=}
              animate=}
              transition=}
              class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Praxiserprobte Leitfäden, aktuelle Rechtsprechung und <span class="font-semibold text-blue-300">Schritt-für-Schritt Anleitungen</span> 
              für erfolgreiche Compliance-Implementierung.
            </motion.p>

            <motion.div
              initial=}
              animate=}
              transition=}
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover=} whileTap=}>
                <Button size="lg" class="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <BookOpen class="mr-2 h-5 w-5" />
                  DSGVO-Leitfäden entdecken
                </Button>
              </motion.div>
              <motion.div whileHover=} whileTap=}>
                <Button size="lg" variant="outline" class="border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <Search class="mr-2 h-5 w-5" />
                  Wissen durchsuchen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          
          <motion.div 
            initial=}
            animate=}
            transition=}
            class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
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