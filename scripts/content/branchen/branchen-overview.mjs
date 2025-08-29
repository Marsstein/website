export default {
  route: '/branchen',
  title: 'Branchen – Compliance-Lösungen für jede Industrie',
  description: 'Branchenspezifische Compliance: Healthcare, FinTech, E-Commerce & mehr. ✓ Maßgeschneidert ✓ Best Practices ✓ Expertenwissen. Jetzt entdecken!',
  content: `
    <main class="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <!-- Animated Background Elements -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <!-- Hero Section -->
      <section class="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div class="container mx-auto max-w-7xl relative z-10">
          <div class="text-center mb-20">
            <div class="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20">
              <svg class="h-5 w-5 text-emerald-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
              </svg>
              <span class="text-sm font-semibold text-emerald-300">Branchenlösungen</span>
              <svg class="h-5 w-5 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
              </svg>
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
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
            </h1>
            
            <p class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Spezialisierte <span class="font-semibold text-emerald-300">Compliance-Strategien</span> für 9 Kernbranchen. 
              Von der Implementierung bis zur Zertifizierung – <span class="font-semibold text-teal-300">branchenspezifisch optimiert</span>.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg">
                <svg class="inline h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
                </svg>
                Branchen entdecken
              </button>
              <button class="border-2 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm rounded-lg">
                <svg class="inline h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M5,3H19C20.11,3 21,3.89 21,5V13.03C20.5,12.23 19.81,11.54 19,11V5H5V19H9.5C9.81,19.75 10.26,20.42 10.81,21H5C3.89,21 3,20.11 3,19V5C3,3.89 3.89,3 5,3M7,7H17V9H7V7M7,11H12.03C11.23,11.5 10.54,12.19 10,13H7V11M7,15H9.17C9.06,15.5 9,16 9,16.5V17H7V15Z"/>
                </svg>
                Case Studies
              </button>
            </div>
          </div>

          <!-- Hero Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">9</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Kernbranchen</div>
                <div class="text-xs text-slate-400">Spezialisierte Lösungen</div>
              </div>
            </div>
            
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 10H7V12H9V10M13 10H11V12H13V10M17 10H15V12H17V10M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V8H19V19Z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">85+</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Compliance Cases</div>
                <div class="text-xs text-slate-400">Erfolgreiche Implementierungen</div>
              </div>
            </div>
            
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.47 2 2 6.47 2 12S6.47 22 12 22C17.53 22 22 17.53 22 12S17.53 2 12 2M11 7H13V13H11V7M11 15H13V17H11V15Z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Erfolgsrate</div>
                <div class="text-xs text-slate-400">Bei Zertifizierungen</div>
              </div>
            </div>
            
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.47 2 2 6.47 2 12S6.47 22 12 22 22 17.5 22 12 17.5 2 12 2M17 15.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59Z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Experten-Support</div>
                <div class="text-xs text-slate-400">Branchenspezifische Beratung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Industries Grid -->
      <section class="py-16 px-4 sm:px-6 lg:px-8">
        <div class="container mx-auto max-w-7xl">
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <!-- Gesundheitswesen -->
            <div class="group relative">
              <div class="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10 bg-gradient-to-r from-red-500 to-pink-600 opacity-0 group-hover:opacity-30"></div>
              
              <div class="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
                <div class="relative p-8 h-full flex flex-col">
                  <!-- Header -->
                  <div class="flex items-start justify-between mb-6">
                    <div class="p-4 rounded-2xl bg-gradient-to-r shadow-lg from-red-500 to-pink-600">
                      <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 8H18V5C18 3.9 17.1 3 16 3H11L9.59 1.59A2 2 0 0 0 8.17 1H4A2 2 0 0 0 2 3V15A2 2 0 0 0 4 17H8V20A2 2 0 0 0 10 22H20A2 2 0 0 0 22 20V10A2 2 0 0 0 20 8M4 3H8.17L9.59 4.41A2 2 0 0 0 11 5H16V8H10A2 2 0 0 0 8 10V15H4M20 20H10V10H20M18 12H12V18H14V15H16V18H18Z"/>
                      </svg>
                    </div>
                    <div class="flex flex-col gap-2 items-end">
                      <span class="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-2 py-1 text-xs rounded border">
                        <svg class="inline h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
                        </svg>
                        Beliebt
                      </span>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="mb-6 flex-grow">
                    <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">Gesundheitswesen</h3>
                    <p class="text-slate-300 mb-6 leading-relaxed">
                      Spezialisierte Compliance-Lösungen für medizinische Einrichtungen, Praxen und MedTech-Unternehmen
                    </p>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                      <div class="text-center">
                        <div class="text-lg font-bold text-emerald-400">12</div>
                        <div class="text-xs text-slate-400">Cases</div>
                      </div>
                      <div class="text-center">
                        <div class="text-lg font-bold text-teal-400">25-40 Min</div>
                        <div class="text-xs text-slate-400">Lesezeit</div>
                      </div>
                      <div class="text-center">
                        <span class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 px-2 py-1 text-xs rounded">
                          Experte
                        </span>
                      </div>
                    </div>

                    <!-- Compliance Score -->
                    <div class="mb-6">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-slate-300">Compliance Score</span>
                        <span class="text-sm font-bold text-emerald-400">95%</span>
                      </div>
                      <div class="w-full bg-slate-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style="width: 95%"></div>
                      </div>
                    </div>

                    <!-- Frameworks -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-slate-300 mb-3">Frameworks:</h4>
                      <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">DSGVO</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">EU AI Act</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">ISO 27001</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">ISO 13485</span>
                      </div>
                    </div>

                    <!-- Key Challenges Preview -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-slate-300 mb-3">Key Challenges:</h4>
                      <div class="space-y-2">
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">Patientendaten Art. 9 DSGVO</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">KI-Diagnosesysteme</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">Medizintechnik-Compliance</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- CTA -->
                  <a href="/branchen/gesundheitswesen" class="w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 from-red-500 to-pink-600 rounded-lg flex items-center justify-center gap-2">
                    <span>Branche erkunden</span>
                    <svg class="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                    <svg class="h-4 w-4 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Finanzdienstleister -->
            <div class="group relative">
              <div class="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-30"></div>
              
              <div class="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div class="relative p-8 h-full flex flex-col">
                  <!-- Header -->
                  <div class="flex items-start justify-between mb-6">
                    <div class="p-4 rounded-2xl bg-gradient-to-r shadow-lg from-blue-500 to-indigo-600">
                      <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
                      </svg>
                    </div>
                    <div class="flex flex-col gap-2 items-end">
                      <span class="bg-blue-500/20 text-blue-300 border-blue-500/30 px-2 py-1 text-xs rounded border">
                        <svg class="inline h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10"/>
                        </svg>
                        Featured
                      </span>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="mb-6 flex-grow">
                    <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">Finanzdienstleister</h3>
                    <p class="text-slate-300 mb-6 leading-relaxed">
                      Umfassende Compliance-Frameworks für Banken, Versicherungen und FinTech-Unternehmen
                    </p>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                      <div class="text-center">
                        <div class="text-lg font-bold text-emerald-400">18</div>
                        <div class="text-xs text-slate-400">Cases</div>
                      </div>
                      <div class="text-center">
                        <div class="text-lg font-bold text-teal-400">30-50 Min</div>
                        <div class="text-xs text-slate-400">Lesezeit</div>
                      </div>
                      <div class="text-center">
                        <span class="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 px-2 py-1 text-xs rounded">
                          Experte
                        </span>
                      </div>
                    </div>

                    <!-- Compliance Score -->
                    <div class="mb-6">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-slate-300">Compliance Score</span>
                        <span class="text-sm font-bold text-emerald-400">98%</span>
                      </div>
                      <div class="w-full bg-slate-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style="width: 98%"></div>
                      </div>
                    </div>

                    <!-- Frameworks -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-slate-300 mb-3">Frameworks:</h4>
                      <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">DSGVO</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">EU AI Act</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">ISO 27001</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">PCI DSS</span>
                      </div>
                    </div>

                    <!-- Key Challenges Preview -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-slate-300 mb-3">Key Challenges:</h4>
                      <div class="space-y-2">
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">PCI DSS Compliance</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">KI-Kreditentscheidungen</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">Open Banking APIs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- CTA -->
                  <a href="/branchen/finanzdienstleister" class="w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center gap-2">
                    <span>Branche erkunden</span>
                    <svg class="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                    <svg class="h-4 w-4 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- E-Commerce -->
            <div class="group relative">
              <div class="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-30"></div>
              
              <div class="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
                <div class="relative p-8 h-full flex flex-col">
                  <!-- Header -->
                  <div class="flex items-start justify-between mb-6">
                    <div class="p-4 rounded-2xl bg-gradient-to-r shadow-lg from-green-500 to-emerald-600">
                      <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="mb-6 flex-grow">
                    <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">E-Commerce</h3>
                    <p class="text-slate-300 mb-6 leading-relaxed">
                      Optimierte Compliance-Strategien für Online-Shops und digitale Marktplätze
                    </p>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                      <div class="text-center">
                        <div class="text-lg font-bold text-emerald-400">15</div>
                        <div class="text-xs text-slate-400">Cases</div>
                      </div>
                      <div class="text-center">
                        <div class="text-lg font-bold text-teal-400">20-35 Min</div>
                        <div class="text-xs text-slate-400">Lesezeit</div>
                      </div>
                      <div class="text-center">
                        <span class="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 px-2 py-1 text-xs rounded">
                          Fortgeschritten
                        </span>
                      </div>
                    </div>

                    <!-- Compliance Score -->
                    <div class="mb-6">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold text-slate-300">Compliance Score</span>
                        <span class="text-sm font-bold text-emerald-400">92%</span>
                      </div>
                      <div class="w-full bg-slate-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style="width: 92%"></div>
                      </div>
                    </div>

                    <!-- Frameworks -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-slate-300 mb-3">Frameworks:</h4>
                      <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">DSGVO</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">EU AI Act</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">PCI DSS</span>
                        <span class="bg-slate-700/50 text-slate-200 border-slate-600 px-2 py-1 text-xs rounded border">ePrivacy</span>
                      </div>
                    </div>

                    <!-- Key Challenges Preview -->
                    <div class="mb-6">
                      <h4 class="text-sm font-semibold text-slate-300 mb-3">Key Challenges:</h4>
                      <div class="space-y-2">
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">Cookie-Compliance</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">Personalisierungsalgorithmen</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <svg class="w-4 h-4 text-orange-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-sm text-slate-300">Cross-Border Data Transfer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- CTA -->
                  <a href="/branchen/e-commerce" class="w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 from-green-500 to-emerald-600 rounded-lg flex items-center justify-center gap-2">
                    <span>Branche erkunden</span>
                    <svg class="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                    <svg class="h-4 w-4 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3M19 19H5V5H12V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Weitere Branchen in ähnlichem Format... -->
            
          </div>
        </div>
      </section>

      <!-- Quick Access Section -->
      <section class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-emerald-900/30 to-slate-800/50"></div>
        
        <div class="container mx-auto max-w-7xl relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Top-Prioritäten
              </span>
            </h2>
            <p class="text-xl md:text-2xl text-slate-300">
              Die kritischsten Compliance-Bereiche für den sofortigen Start
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="group">
              <div class="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300 rounded-lg">
                <div class="p-8">
                  <div class="inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg from-red-500 to-pink-500">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 8H18V5C18 3.9 17.1 3 16 3H11L9.59 1.59A2 2 0 0 0 8.17 1H4A2 2 0 0 0 2 3V15A2 2 0 0 0 4 17H8V20A2 2 0 0 0 10 22H20A2 2 0 0 0 22 20V10A2 2 0 0 0 20 8M4 3H8.17L9.59 4.41A2 2 0 0 0 11 5H16V8H10A2 2 0 0 0 8 10V15H4M20 20H10V10H20M18 12H12V18H14V15H16V18H18Z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold mb-3 text-white">Healthcare DSGVO</h3>
                  <p class="text-slate-300 mb-6">Art. 9 Compliance für sensible Gesundheitsdaten</p>
                  
                  <div class="flex items-center gap-4 mb-6">
                    <span class="bg-red-500/20 text-red-300 border-red-500/30 animate-pulse px-2 py-1 text-xs rounded border">
                      <svg class="inline h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Kritisch
                    </span>
                    <span class="bg-slate-700 text-slate-200 px-2 py-1 text-xs rounded">DSGVO Art. 9</span>
                  </div>
                  
                  <a href="/branchen/gesundheitswesen" class="w-full bg-gradient-to-r text-white from-red-500 to-pink-500 px-4 py-2 rounded-lg flex items-center justify-center">
                    Jetzt starten
                    <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="group">
              <div class="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300 rounded-lg">
                <div class="p-8">
                  <div class="inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg from-blue-500 to-indigo-500">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold mb-3 text-white">Financial AI Act</h3>
                  <p class="text-slate-300 mb-6">Hochrisiko-KI-Systeme in Finanzdienstleistungen</p>
                  
                  <div class="flex items-center gap-4 mb-6">
                    <span class="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-2 py-1 text-xs rounded border">
                      <svg class="inline h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Hoch
                    </span>
                    <span class="bg-slate-700 text-slate-200 px-2 py-1 text-xs rounded">EU AI Act</span>
                  </div>
                  
                  <a href="/branchen/finanzdienstleister" class="w-full bg-gradient-to-r text-white from-blue-500 to-indigo-500 px-4 py-2 rounded-lg flex items-center justify-center">
                    Jetzt starten
                    <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="group">
              <div class="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300 rounded-lg">
                <div class="p-8">
                  <div class="inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg from-yellow-500 to-orange-500">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 20L13 23L16 21L15.03 16.9L11 20M7 7V4L4 7H7M17 7H20L17 4V7M8 11V9H16V11H8M8 15V13H13V15H8M1 9C1 10.19 1.2 11.34 1.56 12.41L9.97 4H12.03L3.72 15.33C5.26 17.45 7.31 19.08 9.7 19.99L11.17 13H12.83L11.36 20C11.57 20 11.78 20 12 20C17.52 20 22 15.52 22 10C22 4.48 17.52 0 12 0C6.48 0 2 4.48 2 10L1 9Z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold mb-3 text-white">Energy NIS2</h3>
                  <p class="text-slate-300 mb-6">Kritische Infrastrukturen und Cybersecurity</p>
                  
                  <div class="flex items-center gap-4 mb-6">
                    <span class="bg-orange-500/20 text-orange-300 border-orange-500/30 px-2 py-1 text-xs rounded border">
                      <svg class="inline h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Urgent
                    </span>
                    <span class="bg-slate-700 text-slate-200 px-2 py-1 text-xs rounded">NIS2</span>
                  </div>
                  
                  <a href="/branchen/energie" class="w-full bg-gradient-to-r text-white from-yellow-500 to-orange-500 px-4 py-2 rounded-lg flex items-center justify-center">
                    Jetzt starten
                    <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-emerald-900/20"></div>
        
        <div class="container mx-auto max-w-5xl relative z-10">
          <div class="text-center">
            <h2 class="text-4xl md:text-6xl font-black mb-6">
              <span class="text-white">Ihre Branche.</span>
              <br />
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Unsere Expertise.
              </span>
            </h2>
            
            <p class="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Von der ersten Beratung bis zur erfolgreichen Zertifizierung – wir begleiten Sie mit 
              <span class="font-semibold text-emerald-300"> branchenspezifischer Expertise</span>.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-lg">
                <svg class="inline mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
                </svg>
                Branch-Beratung buchen
                <svg class="inline ml-3 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </button>
              
              <button class="border-2 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm rounded-lg">
                <svg class="inline mr-3 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17M2 12L12 17L22 12"/>
                </svg>
                Branchen-Guide Download
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};