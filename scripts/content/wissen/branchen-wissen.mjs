export default {
  route: '/wissen/branchen',
  title: 'Branchenwissen – Compliance-Expertise für alle Branchen',
  description: 'Branchenspezifisches Compliance-Wissen. Sektorspezifische Anforderungen, Best Practices und regulatorische Besonderheiten.',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div class="container px-4 relative z-10">
          <div class="max-w-6xl mx-auto text-center space-y-6">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              <span class="text-white">Branchen</span>
              <br />
              <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Compliance
              </span>
              <br />
              <span class="text-white">Expertise</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Spezialisiertes <span class="font-semibold text-emerald-300">Compliance-Wissen</span> für Ihre Branche.
              Von Healthcare bis FinTech - <span class="font-semibold text-teal-300">praxiserprobte Leitfäden</span> 
              für branchenspezifische Herausforderungen.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/branchen" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:opacity-90">
                <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Branche auswählen
              </a>
              <a href="/wissen" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-300 bg-transparent border-2 border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-400">
                <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                Wissen durchsuchen
              </a>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">15+</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Branchen-Guides</div>
                <div class="text-xs text-slate-400">Spezialisierte Leitfäden</div>
              </div>
            </div>

            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">200+</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Compliance-Tipps</div>
                <div class="text-xs text-slate-400">Praxiserprobte Lösungen</div>
              </div>
            </div>

            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Branchenabdeckung</div>
                <div class="text-xs text-slate-400">Major Industries</div>
              </div>
            </div>

            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div class="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
                  <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div class="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                <div class="text-sm font-semibold text-slate-200 mb-1">Expert Support</div>
                <div class="text-xs text-slate-400">Branchen-Experten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Knowledge Categories -->
      <section class="py-20">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Branchenspezifische Compliance-Leitfäden
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Detaillierte Guides für Ihre spezifischen Herausforderungen
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Healthcare -->
              <a href="/wissen/branchen/healthcare-ai-compliance" class="group block">
                <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-red-500">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 mb-4">
                    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10.5,13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">Healthcare AI Compliance</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    EU AI Act Compliance für medizinische KI-Systeme und Diagnosealgorithmen
                  </p>
                  <div class="flex items-center text-red-600 group-hover:translate-x-2 transition-transform">
                    <span class="font-semibold">Leitfaden lesen</span>
                    <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- FinTech -->
              <a href="/wissen/branchen/fintech-compliance" class="group block">
                <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-blue-500">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 mb-4">
                    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.93.66 1.64 2.08 1.64 1.51 0 2.1-.67 2.1-1.57 0-.87-.57-1.39-1.93-1.78l-1.39-.4c-1.95-.56-2.79-1.57-2.79-3.17 0-1.88 1.44-3.02 3.2-3.35V4h2.67v2.04c1.52.35 2.73 1.43 2.83 3.2h-1.94c-.09-.81-.57-1.46-1.81-1.46-1.23 0-1.87.59-1.87 1.42 0 .75.48 1.24 1.65 1.59l1.29.37c2.23.63 3.08 1.64 3.08 3.35-.01 2.01-1.52 3.13-3.19 3.58z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">FinTech Compliance</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    PSD2, Open Banking und DSGVO-konforme Finanzdatenverarbeitung
                  </p>
                  <div class="flex items-center text-blue-600 group-hover:translate-x-2 transition-transform">
                    <span class="font-semibold">Leitfaden lesen</span>
                    <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- EdTech -->
              <a href="/wissen/branchen/edtech-privacy" class="group block">
                <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-green-500">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
                    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">EdTech & Student Privacy</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    Datenschutz in Bildungstechnologie und Online-Lernplattformen
                  </p>
                  <div class="flex items-center text-green-600 group-hover:translate-x-2 transition-transform">
                    <span class="font-semibold">Leitfaden lesen</span>
                    <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- InsurTech -->
              <a href="/wissen/branchen/insurtech-compliance" class="group block">
                <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-purple-500">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 mb-4">
                    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 3H14V14H10V3M10 21V17H14V21H10M5 3H9V8H5V3M15 3H19V8H15V3M5 10H9V15H5V10M15 15V10H19V15H15M5 17H9V21H5V17M15 17H19V21H15V17Z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">InsurTech Compliance</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    Versicherungsdaten, KI-Risikomodelle und automatisierte Schadensprozesse
                  </p>
                  <div class="flex items-center text-purple-600 group-hover:translate-x-2 transition-transform">
                    <span class="font-semibold">Leitfaden lesen</span>
                    <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- Travel -->
              <a href="/wissen/branchen/travel-compliance" class="group block">
                <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-cyan-500">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">Travel & Hospitality</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    PNR-Daten, Buchungsplattformen und internationale Datentransfers
                  </p>
                  <div class="flex items-center text-cyan-600 group-hover:translate-x-2 transition-transform">
                    <span class="font-semibold">Leitfaden lesen</span>
                    <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>

              <!-- More Industries -->
              <a href="/branchen" class="group block">
                <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-emerald-500">
                  <div class="text-center py-8">
                    <div class="inline-flex p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 mb-4">
                      <svg class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Weitere Branchen</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                      Entdecken Sie Compliance-Lösungen für alle Industrien
                    </p>
                    <div class="flex items-center justify-center text-emerald-600 group-hover:translate-x-2 transition-transform">
                      <span class="font-semibold">Alle Branchen</span>
                      <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14m-7-7l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Topics -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Aktuelle Compliance-Themen
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Die wichtigsten branchenübergreifenden Trends
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl">
                    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold mb-2">KI & Machine Learning Compliance</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                      EU AI Act, algorithmic bias, explainability requirements und automated decision-making unter DSGVO Art. 22
                    </p>
                    <ul class="space-y-2 text-sm">
                      <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>High-Risk AI Classification</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>Conformity Assessment Procedures</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>Technical Documentation Requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold mb-2">Cross-Border Data Transfers</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                      Post-Schrems II Lösungen, neue SCCs, adequacy decisions und Transfer Impact Assessments
                    </p>
                    <ul class="space-y-2 text-sm">
                      <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>New Standard Contractual Clauses</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>Transfer Risk Assessment</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <svg class="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>Supplementary Measures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Bereit für Branchen-Expertise?
            </h2>
            <p class="text-xl mb-8 text-white/90">
              Nutzen Sie unser spezialisiertes Branchen-Wissen 
              für Ihre erfolgreiche Compliance-Strategie.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/branchen" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-600 bg-white rounded-lg hover:bg-gray-100 transition-all">
                <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Alle Branchen-Leitfäden
                <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </a>
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10">
                <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                Branche anfragen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};