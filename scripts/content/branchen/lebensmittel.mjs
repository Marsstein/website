export default {
  route: '/branchen/lebensmittel',
  title: 'Lebensmittel – Compliance für Food Supply Chain',
  description: 'Compliance für Lebensmittelindustrie: IFS, BRC, HACCP ✓ Supply Chain Security ✓ Food Defense ✓ Track & Trace',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-20 md:py-28">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div class="container px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/>
                  </svg>
                  <span class="text-sm font-medium">Food Compliance</span>
                </div>
                
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                  Food Supply Chain
                  <span class="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent block mt-2">
                    Security & Compliance
                  </span>
                </h1>
                
                <p class="text-xl text-gray-600 dark:text-gray-300">
                  Digitale Sicherheit für die Lebensmittelindustrie.
                  Von der Produktion bis zum Verbraucher – wir schützen Ihre Food Supply Chain.
                </p>

                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>IFS Food & BRC konforme IT-Systeme</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Food Defense & Cyber Security</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Blockchain-basierte Rückverfolgbarkeit</span>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/contact?branche=lebensmittel" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg hover:opacity-90 group">
                    Food Security Assessment
                    <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Dashboard Preview -->
              <div class="relative">
                <div class="p-6 shadow-2xl border-2 border-orange-200 dark:border-orange-800 rounded-lg bg-white dark:bg-gray-800">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-lg">Food Security Center</h3>
                      <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Certified</span>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 3V18H12V3H9M12 5L16 18V3H12M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                          </svg>
                          <span class="text-2xl font-bold text-orange-700">IFS</span>
                        </div>
                        <p class="text-sm font-medium">Food v7</p>
                      </div>

                      <div class="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-2xl font-bold text-amber-700">100%</span>
                        </div>
                        <p class="text-sm font-medium">Traceability</p>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Supply Chain Security</span>
                          <span class="font-semibold">96%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-orange-600 h-2 rounded-full" style="width: 96%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Food Defense</span>
                          <span class="font-semibold">94%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-orange-600 h-2 rounded-full" style="width: 94%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Challenges Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Compliance-Herausforderungen in der Lebensmittelindustrie
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Transparenz und Sicherheit vom Acker bis zum Teller
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Food Defense & Fraud</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Cyberangriffe auf Lebensmittelproduzenten nehmen zu. Food Defense erfordert Schutz vor absichtlicher Kontamination und Manipulation.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 1V3H15V1H17V3H21C21.5 3 22 3.5 22 4V20C22 20.5 21.5 21 21 21H3C2.5 21 2 20.5 2 20V4C2 3.5 2.5 3 3 3H7V1H9M4 5V19H20V5H4M6 7H8V9H6V7M10 7H18V9H10V7M6 11H8V13H6V11M10 11H18V13H10V11M6 15H8V17H6V15M10 15H18V17H10V15Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Rückverfolgbarkeit</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      EU-Verordnung 178/2002 fordert lückenlose Rückverfolgbarkeit. Bei Rückrufen muss jede Charge sofort identifizierbar sein.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V7L12 12L2 7V17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Supply Chain Complexity</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Globale Lieferketten mit hunderten Lieferanten. Jedes Glied muss auditiert und überwacht werden.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Zertifizierungs-Dschungel</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      IFS, BRC, ISO 22000, FSSC – verschiedene Standards müssen gleichzeitig erfüllt werden. IT-Systeme müssen alle Anforderungen abbilden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Solutions Section -->
      <section class="py-20">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Compliance-Lösungen für die Lebensmittelindustrie
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Digitale Sicherheit für Ihre Food Supply Chain
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-orange-500 to-amber-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 3V18H12V3H9M12 5L16 18V3H12M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Food Standards IT</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    IFS & BRC konforme IT-Systeme
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>IFS Food v7 IT-Requirements</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>BRC Global Standard</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>HACCP Digitalisierung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-blue-500 to-indigo-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 1V3H15V1H17V3H21C21.5 3 22 3.5 22 4V20C22 20.5 21.5 21 21 21H3C2.5 21 2 20.5 2 20V4C2 3.5 2.5 3 3 3H7V1H9M4 5V19H20V5H4M6 7H8V9H6V7M10 7H18V9H10V7"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Track & Trace</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Blockchain-basierte Rückverfolgbarkeit
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>End-to-End Traceability</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Real-time Supply Chain</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Instant Recall Management</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-green-500 to-teal-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Food Defense</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Schutz vor Manipulation und Betrug
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Cyber-Physical Security</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Fraud Detection Systems</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Supply Chain Intelligence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Frameworks Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Relevante Compliance-Frameworks
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Die wichtigsten Standards für die Lebensmittelindustrie
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 mb-4">
                  <svg class="h-8 w-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 3V18H12V3H9M12 5L16 18V3H12M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">IFS Food</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  International Featured Standards
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 mb-4">
                  <svg class="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">BRC</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  British Retail Consortium
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4">
                  <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">ISO 22000</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Food safety management systems
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <svg class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">HACCP</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Hazard Analysis Critical Control Points
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Sichern Sie Ihre Food Supply Chain
            </h2>
            <p class="text-xl mb-8 text-white/90">
              Erfüllen Sie die Food-Compliance-Anforderungen mit unserer digitalen Expertise.
              Von IFS bis Food Defense – wir machen Ihre Lieferkette transparent und sicher.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?branche=lebensmittel" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-orange-600 bg-white rounded-lg hover:bg-gray-100 transition-all">
                Food Security Beratung
                <svg class="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};