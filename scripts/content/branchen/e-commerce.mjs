export default {
  route: '/branchen/e-commerce',
  title: 'E-Commerce – Compliance für digitalen Handel',
  description: 'Compliance für E-Commerce: PCI DSS, DSGVO, eIDAS ✓ Payment Security ✓ Kundendatenschutz ✓ Plattform-Sicherheit',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-20 md:py-28">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div class="container px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                  <span class="text-sm font-medium">E-Commerce Compliance</span>
                </div>
                
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                  E-Commerce Security
                  <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                    für digitale Marktplätze
                  </span>
                </h1>
                
                <p class="text-xl text-gray-600 dark:text-gray-300">
                  Compliance und Sicherheit für Ihren Online-Handel.
                  Von Payment Security bis Datenschutz – wir schützen Ihr digitales Business.
                </p>

                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>PCI DSS Level 1 Compliance für Zahlungssicherheit</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>DSGVO-konforme Kundenbeziehungen</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Marketplace Security & Fraud Prevention</span>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/contact?branche=e-commerce" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 group">
                    E-Commerce Security Check
                    <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Dashboard Preview -->
              <div class="relative">
                <div class="p-6 shadow-2xl border-2 border-purple-200 dark:border-purple-800 rounded-lg bg-white dark:bg-gray-800">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-lg">E-Commerce Security Center</h3>
                      <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Live</span>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                          </svg>
                          <span class="text-2xl font-bold text-purple-700">PCI</span>
                        </div>
                        <p class="text-sm font-medium">DSS Compliant</p>
                      </div>

                      <div class="p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                          </svg>
                          <span class="text-2xl font-bold text-pink-700">A+</span>
                        </div>
                        <p class="text-sm font-medium">Security Score</p>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Payment Security</span>
                          <span class="font-semibold">98%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-purple-600 h-2 rounded-full" style="width: 98%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Data Protection</span>
                          <span class="font-semibold">95%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-purple-600 h-2 rounded-full" style="width: 95%"></div>
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
                Compliance-Herausforderungen im E-Commerce
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Digitaler Handel erfordert spezielle Sicherheitsmaßnahmen
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Payment Card Security</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Millionen von Kreditkartentransaktionen erfordern höchste Sicherheitsstandards. PCI DSS Compliance ist Pflicht für jeden Online-Händler.
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
                    <h3 class="font-bold text-lg mb-2">Fraud & Cyber-Attacken</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      E-Commerce-Plattformen sind bevorzugte Ziele für Cyberkriminelle. Account Takeover, Payment Fraud und DDoS-Attacken bedrohen das Geschäft.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Datenschutz & DSGVO</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Kundendaten müssen DSGVO-konform verarbeitet werden. Cookie-Management, Einwilligungen und Auskunftsrechte erfordern durchdachte Prozesse.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Identitätsmanagement</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Sichere Kundenidentifikation, Strong Customer Authentication (SCA) und eIDAS-Compliance für vertrauenswürdige Transaktionen.
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
                Compliance-Lösungen für E-Commerce
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Umfassende Sicherheit für Ihren Online-Handel
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-purple-500 to-pink-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Payment Security</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    PCI DSS Compliance und sichere Zahlungsabwicklung
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>PCI DSS Level 1 Zertifizierung</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Tokenization & Encryption</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Fraud Detection & Prevention</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-blue-500 to-indigo-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Data Protection</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    DSGVO-konforme Kundendatenverwaltung
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Privacy by Design</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Cookie Compliance Management</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Automated Data Rights</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-green-500 to-teal-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Identity & Access</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Sichere Kundenidentifikation und Zugangskontrolle
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Strong Customer Authentication</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>eIDAS Compliance</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Account Security Monitoring</span>
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
                Die wichtigsten Standards für E-Commerce
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 mb-4">
                  <svg class="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">PCI DSS</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Payment Card Industry Data Security Standard
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <svg class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">DSGVO</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Datenschutz-Grundverordnung für Kundendaten
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-pink-100 dark:bg-pink-900/30 mb-4">
                  <svg class="h-8 w-8 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">eIDAS</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Electronic Identification and Trust Services
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4">
                  <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 3V18H12V3H9M12 5L16 18V3H12M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">ISO 27001</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Information Security Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Sicherer E-Commerce beginnt hier
            </h2>
            <p class="text-xl mb-8 text-white/90">
              Schützen Sie Ihr digitales Geschäft mit unserer E-Commerce Compliance-Expertise.
              Von Payment Security bis Datenschutz – wir machen Ihren Online-Shop sicher.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?branche=e-commerce" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-lg hover:bg-gray-100 transition-all">
                Security Assessment starten
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