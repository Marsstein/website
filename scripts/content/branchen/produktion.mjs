export default {
  route: '/branchen/produktion',
  title: 'Produktion – Compliance für Industrie 4.0',
  description: 'Compliance für Fertigungsunternehmen: IEC 62443, OT Security, ISO 27001 ✓ Industrie 4.0 ✓ Smart Factory ✓ IIoT Security',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-20 md:py-28">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-slate-500/10 rounded-full blur-3xl animate-pulse" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div class="container px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-950/30 text-slate-700 dark:text-slate-400">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2L2,7L7,9.5V12L12,14.5L17,12V9.5L22,7L12,2M12,4.24L16.14,6.25L12,8.25L7.86,6.25L12,4.24M17,13.75V17.5L12,20L7,17.5V13.75L12,16.25L17,13.75M12,10.5L15,9V11.5L12,13L9,11.5V9L12,10.5M17,9.25V11.25L19,10.25V15.25L17,16.25V18.25L21,16.25V8.25L17,9.25Z"/>
                  </svg>
                  <span class="text-sm font-medium">Manufacturing Compliance</span>
                </div>
                
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                  Industrie 4.0 Security
                  <span class="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent block mt-2">
                    für Smart Factories
                  </span>
                </h1>
                
                <p class="text-xl text-gray-600 dark:text-gray-300">
                  Cybersecurity für die digitale Produktion.
                  Von OT Security bis IIoT – wir schützen Ihre Smart Factory.
                </p>

                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>IEC 62443 OT Security Standard</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Industrial IoT (IIoT) Protection</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Smart Factory Cyber Resilience</span>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/contact?branche=produktion" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-slate-600 to-gray-600 rounded-lg hover:opacity-90 group">
                    OT Security Assessment
                    <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Dashboard Preview -->
              <div class="relative">
                <div class="p-6 shadow-2xl border-2 border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-gray-800">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-lg">Production Security Center</h3>
                      <span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm">Online</span>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,2L2,7L7,9.5V12L12,14.5L17,12V9.5L22,7L12,2M12,4.24L16.14,6.25L12,8.25L7.86,6.25L12,4.24"/>
                          </svg>
                          <span class="text-2xl font-bold text-slate-700">IEC</span>
                        </div>
                        <p class="text-sm font-medium">62443</p>
                      </div>

                      <div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/20 dark:to-gray-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19,16H5A3,3 0 0,1 2,13A3,3 0 0,1 5,10H19A3,3 0 0,1 22,13A3,3 0 0,1 19,16M19,12A1,1 0 0,0 18,13A1,1 0 0,0 19,14A1,1 0 0,0 20,13A1,1 0 0,0 19,12Z"/>
                          </svg>
                          <span class="text-2xl font-bold text-gray-700">99.7%</span>
                        </div>
                        <p class="text-sm font-medium">OEE</p>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>OT/IT Security</span>
                          <span class="font-semibold">96%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-slate-600 h-2 rounded-full" style="width: 96%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>IIoT Protection</span>
                          <span class="font-semibold">94%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-slate-600 h-2 rounded-full" style="width: 94%"></div>
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
                Compliance-Herausforderungen in der Produktion
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Industrie 4.0 erfordert neue Sicherheitskonzepte
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V7L12 12L2 7V17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">OT/IT-Konvergenz</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Operational Technology und IT wachsen zusammen. Legacy-Systeme treffen auf moderne IT – neue Sicherheitslücken entstehen.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Industrial Ransomware</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Produktionsanlagen sind lukrative Ziele für Ransomware. Stillstand kostet Millionen – Erpresser wissen das.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,16H5A3,3 0 0,1 2,13A3,3 0 0,1 5,10H19A3,3 0 0,1 22,13A3,3 0 0,1 19,16M19,12A1,1 0 0,0 18,13A1,1 0 0,0 19,14A1,1 0 0,0 20,13A1,1 0 0,0 19,12Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">IIoT-Komplexität</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Tausende vernetzte Sensoren und Aktoren. Jedes Gerät ist ein potenzielles Einfallstor für Angriffe.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 1V3H15V1H17V3H21C21.5 3 22 3.5 22 4V20C22 20.5 21.5 21 21 21H3C2.5 21 2 20.5 2 20V4C2 3.5 2.5 3 3 3H7V1H9M4 5V19H20V5H4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">24/7 Verfügbarkeit</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Produktion läuft rund um die Uhr. Security-Updates und Patches müssen im laufenden Betrieb eingespielt werden.
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
                Compliance-Lösungen für die Fertigungsindustrie
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Ganzheitliche Security für Ihre Smart Factory
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-slate-500 to-gray-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2L2,7L7,9.5V12L12,14.5L17,12V9.5L22,7L12,2M12,4.24L16.14,6.25L12,8.25L7.86,6.25L12,4.24"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">OT Security</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    IEC 62443 konforme Absicherung
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Zone & Conduit Design</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Industrial Firewall</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>SCADA Hardening</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-blue-500 to-indigo-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,16H5A3,3 0 0,1 2,13A3,3 0 0,1 5,10H19A3,3 0 0,1 22,13A3,3 0 0,1 19,16M19,12A1,1 0 0,0 18,13A1,1 0 0,0 19,14A1,1 0 0,0 20,13A1,1 0 0,0 19,12Z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">IIoT Security</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Sichere Vernetzung in der Smart Factory
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Device Authentication</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Secure Edge Computing</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Anomaly Detection</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-green-500 to-teal-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Cyber Resilience</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Business Continuity für Produktion
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Backup & Recovery</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Incident Response</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Digital Twin Security</span>
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
                Die wichtigsten Standards für die Produktion
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-slate-100 dark:bg-slate-900/30 mb-4">
                  <svg class="h-8 w-8 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2L2,7L7,9.5V12L12,14.5L17,12V9.5L22,7L12,2M12,4.24L16.14,6.25L12,8.25L7.86,6.25L12,4.24"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">IEC 62443</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Industrial automation and control systems
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <svg class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 3V18H12V3H9M12 5L16 18V3H12M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">ISO 27001</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Information security management
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4">
                  <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,16H5A3,3 0 0,1 2,13A3,3 0 0,1 5,10H19A3,3 0 0,1 22,13A3,3 0 0,1 19,16M19,12A1,1 0 0,0 18,13A1,1 0 0,0 19,14A1,1 0 0,0 20,13A1,1 0 0,0 19,12Z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">NIST</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Manufacturing Profile
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-gray-100 dark:bg-gray-900/30 mb-4">
                  <svg class="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">VDA ISA</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Automotive Production Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-slate-600 to-gray-600">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Machen Sie Ihre Produktion cyber-resilient
            </h2>
            <p class="text-xl mb-8 text-white/90">
              Erfüllen Sie die Industrie 4.0 Compliance-Anforderungen mit unserer OT-Expertise.
              Von IEC 62443 bis IIoT Security – wir schützen Ihre Smart Factory.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?branche=produktion" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-600 bg-white rounded-lg hover:bg-gray-100 transition-all">
                OT Security Beratung
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