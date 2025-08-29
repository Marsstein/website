export default {
  route: '/branchen/saas-unternehmen',
  title: 'SaaS-Unternehmen – Compliance für Cloud Services',
  description: 'Compliance für SaaS: SOC 2, ISO 27001, DSGVO ✓ Multi-Tenant Security ✓ Cloud Compliance ✓ DevSecOps',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-20 md:py-28">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div class="container px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  <span class="text-sm font-medium">SaaS Compliance</span>
                </div>
                
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                  SaaS Security
                  <span class="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                    & Cloud Compliance
                  </span>
                </h1>
                
                <p class="text-xl text-gray-600 dark:text-gray-300">
                  Enterprise-Grade Security für Ihre SaaS-Plattform.
                  Von SOC 2 bis ISO 27001 – wir machen Ihre Cloud-Services compliant.
                </p>

                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>SOC 2 Type II Zertifizierung</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>ISO 27001 & ISO 27017 Cloud Security</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>DSGVO & Privacy by Design</span>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/contact?branche=saas" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:opacity-90 group">
                    SaaS Security Assessment
                    <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Dashboard Preview -->
              <div class="relative">
                <div class="p-6 shadow-2xl border-2 border-violet-200 dark:border-violet-800 rounded-lg bg-white dark:bg-gray-800">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-lg">SaaS Security Dashboard</h3>
                      <span class="bg-violet-100 text-violet-700 px-2 py-1 rounded text-sm">Enterprise</span>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-4 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/20 dark:to-violet-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-violet-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                          </svg>
                          <span class="text-2xl font-bold text-violet-700">SOC2</span>
                        </div>
                        <p class="text-sm font-medium">Type II</p>
                      </div>

                      <div class="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                          </svg>
                          <span class="text-2xl font-bold text-purple-700">99.99%</span>
                        </div>
                        <p class="text-sm font-medium">Uptime SLA</p>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Security Posture</span>
                          <span class="font-semibold">98%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-violet-600 h-2 rounded-full" style="width: 98%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Compliance Score</span>
                          <span class="font-semibold">96%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-violet-600 h-2 rounded-full" style="width: 96%"></div>
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
                Compliance-Herausforderungen für SaaS-Unternehmen
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Enterprise-Kunden fordern höchste Security Standards
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Enterprise Compliance</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Großkunden verlangen SOC 2, ISO 27001 und branchenspezifische Zertifizierungen. Ohne Compliance kein Enterprise-Deal.
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
                    <h3 class="font-bold text-lg mb-2">Multi-Tenant Security</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Hunderte Kunden auf einer Plattform. Datenisolation, Cross-Tenant-Angriffe und Compliance-Konflikte sind tägliche Herausforderungen.
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
                    <h3 class="font-bold text-lg mb-2">Global Data Privacy</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      DSGVO, CCPA, LGPD – jede Region hat eigene Datenschutzgesetze. Data Residency und Privacy Compliance werden komplex.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="flex items-start gap-4">
                  <div class="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <svg class="h-6 w-6 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">DevSecOps Velocity</h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      Continuous Deployment vs. Security. Schnelle Releases dürfen die Compliance nicht gefährden.
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
                Compliance-Lösungen für SaaS-Unternehmen
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Enterprise-Ready Security für Ihre Cloud-Plattform
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-violet-500 to-purple-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">SOC 2 & ISO 27001</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Enterprise Compliance Zertifizierungen
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>SOC 2 Type II Audit</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>ISO 27001/27017/27018</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Continuous Compliance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-blue-500 to-indigo-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Multi-Tenant Security</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Sichere Mandantentrennung
                  </p>
                  
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Data Isolation</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Zero Trust Architecture</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Tenant Security Monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-green-500 to-teal-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  
                  <h3 class="text-xl font-bold">Privacy & DevSecOps</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Security in der CI/CD Pipeline
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
                      <span>Secure SDLC</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Automated Security Testing</span>
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
                Die wichtigsten Standards für SaaS-Unternehmen
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 mb-4">
                  <svg class="h-8 w-8 text-violet-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">SOC 2</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Service Organization Controls Type II
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
                  Information Security Management
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 mb-4">
                  <svg class="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">ISO 27017</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Cloud Security Controls
                </p>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                <div class="inline-flex p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4">
                  <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">DSGVO/GDPR</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  EU Data Protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Enterprise-Ready Security für Ihre SaaS-Plattform
            </h2>
            <p class="text-xl mb-8 text-white/90">
              Erfüllen Sie die Compliance-Anforderungen Ihrer Enterprise-Kunden.
              Von SOC 2 bis ISO 27001 – wir machen Ihre SaaS-Lösung compliant.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?branche=saas" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-violet-600 bg-white rounded-lg hover:bg-gray-100 transition-all">
                SaaS Compliance Beratung
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