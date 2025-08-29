export default {
  route: '/branchen/energie',
  title: 'Energie – Compliance für kritische Infrastrukturen',
  description: 'Compliance für Energieversorger: KRITIS, ISO 27019, IT-SiG 2.0 ✓ Smart Grid Security ✓ OT-Sicherheit ✓ Netzschutz',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-20 md:py-28">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div class="container px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
                  </svg>
                  <span class="text-sm font-medium">Energie Compliance</span>
                </div>
                
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                  KRITIS Compliance
                  <span class="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent block mt-2">
                    für Energieversorger
                  </span>
                </h1>
                
                <p class="text-xl text-gray-600 dark:text-gray-300">
                  Sicherheit für kritische Energieinfrastrukturen.
                  Von Smart Grids bis Kraftwerke – wir schützen die Energieversorgung von morgen.
                </p>

                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>KRITIS & IT-SiG 2.0 konform</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>ISO 27019 für Energieversorgung</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>OT Security für Leittechnik</span>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/contact?branche=energie" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg hover:opacity-90 group">
                    KRITIS Compliance Check
                    <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Dashboard Preview -->
              <div class="relative">
                <div class="p-6 shadow-2xl border-2 border-yellow-200 dark:border-yellow-800 rounded-lg bg-white dark:bg-gray-800">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-lg">Energy Security Center</h3>
                      <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">KRITIS</span>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
                          </svg>
                          <span class="text-2xl font-bold text-yellow-700">99.9%</span>
                        </div>
                        <p class="text-sm font-medium">Grid Uptime</p>
                      </div>

                      <div class="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span class="text-2xl font-bold text-orange-700">A+</span>
                        </div>
                        <p class="text-sm font-medium">Security Score</p>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>OT Security</span>
                          <span class="font-semibold">96%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-yellow-600 h-2 rounded-full" style="width: 96%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>KRITIS Compliance</span>
                          <span class="font-semibold">94%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-yellow-600 h-2 rounded-full" style="width: 94%"></div>
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
                Compliance-Herausforderungen in der Energiebranche
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Kritische Infrastrukturen erfordern höchste Sicherheitsstandards
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Smart Grid Security</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Intelligente Stromnetze sind verwundbar für Cyberangriffe. Millionen von Smart Metern und IoT-Geräten müssen geschützt werden.
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
                    <h3 class="font-bold text-lg mb-2">OT/IT-Konvergenz</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Die Verschmelzung von Operational Technology (OT) und IT erhöht die Angriffsfläche. Legacy-Systeme treffen auf moderne Netzwerke.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">KRITIS-Regulierung</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      IT-SiG 2.0 und KRITIS-Verordnung stellen hohe Anforderungen. Meldepflichten, Nachweise und regelmäßige Audits sind obligatorisch.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 1V3H15V1H17V3H21C21.5 3 22 3.5 22 4V20C22 20.5 21.5 21 21 21H3C2.5 21 2 20.5 2 20V4C2 3.5 2.5 3 3 3H7V1H9M4 5V19H20V5H4M6 7H8V9H6V7M10 7H18V9H10V7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">24/7 Verfügbarkeit</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Energieversorgung darf niemals ausfallen. Security-Updates und Wartung müssen im laufenden Betrieb erfolgen.
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
                Compliance-Lösungen für Energieversorger
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Ganzheitliche Sicherheit für kritische Infrastrukturen
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-yellow-500 to-orange-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">KRITIS Compliance</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Vollständige Umsetzung der KRITIS-Anforderungen
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>IT-SiG 2.0 Implementation</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>BSI-Meldungen & Nachweise</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Prüfungsvorbereitung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-blue-500 to-indigo-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V7L12 12L2 7V17Z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">OT Security</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Absicherung von Leittechnik und Industriesteuerung
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>SCADA Security Hardening</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Network Segmentation</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Industrial Firewall Management</span>
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
                  
                  <h3 class="text-xl font-bold">Smart Grid Security</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Sichere Digitalisierung der Energienetze
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Smart Meter Security</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>IoT Device Management</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Grid Monitoring & Response</span>
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
                Die wichtigsten Standards für die Energiebranche
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 mb-4">
                  <svg class="h-8 w-8 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">IT-SiG 2.0</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  IT-Sicherheitsgesetz für KRITIS
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 mb-4">
                  <svg class="h-8 w-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 3V18H12V3H9M12 5L16 18V3H12M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">ISO 27019</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Informationssicherheit für Energieversorger
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <svg class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V7L12 12L2 7V17Z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">IEC 62443</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Industrial Automation and Control Systems
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4">
                  <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">BSI Standards</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  BSI-Standards 200-x für KRITIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Sichern Sie Ihre kritische Infrastruktur
            </h2>
            <p class="text-xl mb-8 text-white/90">
              Erfüllen Sie die KRITIS-Anforderungen mit unserer Expertise.
              Von IT-SiG 2.0 bis OT Security – wir machen Ihre Energieversorgung cybersicher.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?branche=energie" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-yellow-600 bg-white rounded-lg hover:bg-gray-100 transition-all">
                KRITIS-Beratung anfordern
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