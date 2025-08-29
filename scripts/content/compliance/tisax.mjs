export default {
  route: '/tisax-compliance',
  title: 'TISAX – Automotive Security für Zulieferer & OEMs',
  description: 'TISAX-Zertifizierung für die Automobilindustrie: VDA ISA konform werden. ✓ Assessment-Level 2&3 ✓ ENX-Zugang. Jetzt vorbereiten!',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative py-20 md:py-28">
        <div class="absolute inset-0 -z-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div class="container px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400">
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                  <span class="text-sm font-medium">TISAX® Compliance</span>
                </div>
                
                <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                  TISAX® Automotive
                  <span class="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent block mt-2">
                    Security Standard
                  </span>
                </h1>
                
                <p class="text-xl text-gray-600 dark:text-gray-300">
                  Werden Sie Teil der deutschen Automotive-Lieferkette mit TISAX®.
                  VDA ISA 6.0-konforme Informationssicherheit für Automotive-Unternehmen.
                </p>

                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>TISAX® Assessment Level 1-3 Zertifizierung</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>VDA ISA 6.0 konforme Implementierung</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="h-5 w-5 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>ISO/SAE 21434 Vehicle Cybersecurity</span>
                  </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/contact?demo=true&framework=tisax" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-lg hover:opacity-90 group">
                    <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    TISAX® Readiness Assessment
                    <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                  <button class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all group">
                    <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    TISAX® Implementation Guide
                  </button>
                </div>
              </div>

              <!-- TISAX Dashboard -->
              <div class="relative">
                <div class="p-6 shadow-2xl border-2 border-red-200 dark:border-red-800 rounded-lg bg-white dark:bg-gray-800">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h3 class="font-bold text-lg">Automotive Security Center</h3>
                      <span class="bg-red-100 text-red-700 px-2 py-1 rounded text-sm">TISAX® Ready</span>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 7C12 5.9 11.1 5 10 5S8 5.9 8 7 8.9 9 10 9 12 8.1 12 7M10 15C8.9 15 8 14.1 8 13S8.9 11 10 11 12 11.9 12 13 11.1 15 10 15M20 12C20 8.1 18.4 4.6 15.7 2.3L16.5 1.5C16.9 1.1 16.9 .5 16.5 .1S15.5 -.3 15.1 .1L14.1 1.1C12.9 .4 11.5 0 10 0 4.5 0 0 4.5 0 10S4.5 20 10 20 20 15.5 20 10M18 10C18 14.4 14.4 18 10 18S2 14.4 2 10 5.6 2 10 2 18 5.6 18 10Z"/>
                          </svg>
                          <span class="text-2xl font-bold text-red-700">88%</span>
                        </div>
                        <p class="text-sm font-medium">TISAX® Score</p>
                        <div class="w-full bg-red-200 rounded-full h-2 mt-2">
                          <div class="bg-red-600 h-2 rounded-full" style="width: 88%"></div>
                        </div>
                      </div>

                      <div class="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                          <svg class="h-5 w-5 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                          </svg>
                          <span class="text-2xl font-bold text-orange-700">AL3</span>
                        </div>
                        <p class="text-sm font-medium">Assessment Level</p>
                        <div class="flex items-center gap-1 mt-2">
                          <svg class="h-3 w-3 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span class="text-xs text-orange-600">Very High</span>
                        </div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>VDA ISA 6.0 Implementation</span>
                          <div class="flex items-center gap-2">
                            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Core Compliance</span>
                            <span class="font-semibold">94%</span>
                          </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-red-600 h-2 rounded-full" style="width: 94%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Supplier Integration Security</span>
                          <div class="flex items-center gap-2">
                            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Supply Chain</span>
                            <span class="font-semibold">91%</span>
                          </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-red-600 h-2 rounded-full" style="width: 91%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Vehicle Cybersecurity (ISO/SAE 21434)</span>
                          <div class="flex items-center gap-2">
                            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Connected Vehicles</span>
                            <span class="font-semibold">88%</span>
                          </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-red-600 h-2 rounded-full" style="width: 88%"></div>
                        </div>
                      </div>
                      
                      <div class="space-y-2">
                        <div class="flex items-center justify-between text-sm">
                          <span>Data Protection & Confidentiality</span>
                          <div class="flex items-center gap-2">
                            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Information Security</span>
                            <span class="font-semibold">96%</span>
                          </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                          <div class="bg-red-600 h-2 rounded-full" style="width: 96%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500 animate-bounce">
                  <div class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 7C12 5.9 11.1 5 10 5S8 5.9 8 7 8.9 9 10 9 12 8.1 12 7M10 15C8.9 15 8 14.1 8 13S8.9 11 10 11 12 11.9 12 13 11.1 15 10 15M20 12C20 8.1 18.4 4.6 15.7 2.3L16.5 1.5C16.9 1.1 16.9 .5 16.5 .1S15.5 -.3 15.1 .1L14.1 1.1C12.9 .4 11.5 0 10 0 4.5 0 0 4.5 0 10S4.5 20 10 20 20 15.5 20 10M18 10C18 14.4 14.4 18 10 18S2 14.4 2 10 5.6 2 10 2 18 5.6 18 10Z"/>
                    </svg>
                    <span class="text-sm font-medium">Automotive-Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pain Points Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Automotive Security Herausforderungen
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Warum TISAX® für die Automotive-Industrie unverzichtbar geworden ist
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="space-y-4">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      </svg>
                      <div>
                        <h3 class="font-bold">Automotive Supply Chain Security</h3>
                        <span class="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Kritisch</span>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-gray-600 dark:text-gray-400">
                    TISAX®-konforme Sicherheit für die komplexe Automotive-Lieferkette mit hunderten von Zulieferern und Partnern.
                  </p>
                  
                  <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-medium">Beispiele:</span> OEM-Supplier Integration, Tier-1/2/3 Supplier Management, Connected Car Data Protection
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="space-y-4">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 3V18H12V3H9M12 5L16 18V3H12M5 5V18H8V5H5M3 19V21H21V19H3Z"/>
                      </svg>
                      <div>
                        <h3 class="font-bold">Vertrauliche Automotive-Daten</h3>
                        <span class="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Kritisch</span>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-gray-600 dark:text-gray-400">
                    Schutz hochsensibler Fahrzeugdaten, Entwicklungsinformationen und Produktionsgeheimnisse nach VDA ISA Standards.
                  </p>
                  
                  <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-medium">Beispiele:</span> Vehicle Development Data, Production Processes, Autonomous Driving Algorithms, Battery Technology
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="space-y-4">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <div>
                        <h3 class="font-bold">Connected Vehicle Cybersecurity</h3>
                        <span class="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">Hoch</span>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-gray-600 dark:text-gray-400">
                    Cybersecurity für vernetzte Fahrzeuge, V2X-Kommunikation und Over-the-Air-Updates nach ISO/SAE 21434.
                  </p>
                  
                  <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-medium">Beispiele:</span> V2V/V2I Communication, OTA Update Security, In-Vehicle Network Security, Telematics Protection
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="space-y-4">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
                      </svg>
                      <div>
                        <h3 class="font-bold">Automotive Partnership Compliance</h3>
                        <span class="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">Hoch</span>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-gray-600 dark:text-gray-400">
                    TISAX®-Assessment und -Zertifizierung für Geschäftsbeziehungen mit deutschen OEMs und Tier-1-Suppliern.
                  </p>
                  
                  <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-medium">Beispiele:</span> OEM Vendor Assessments, Joint Venture Security, Cross-Border Automotive Partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Assessment Levels Section -->
      <section class="py-20">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                TISAX® Assessment Levels
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Drei Sicherheitsstufen für unterschiedliche Automotive-Anforderungen
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="inline-flex p-3 rounded-xl text-white bg-gradient-to-r from-green-500 to-teal-600">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">AL1</span>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold mb-2">Basic Assessment Level</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Grundlegende Sicherheitsanforderungen für Standard-Geschäftsbeziehungen
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div>
                      <h4 class="font-semibold text-sm mb-2">Anforderungen:</h4>
                      <div class="space-y-1">
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Basic Security Controls</span>
                        </div>
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Standard Risk Assessment</span>
                        </div>
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Basic Documentation</span>
                        </div>
                      </div>
                    </div>

                    <div class="pt-2 border-t">
                      <h4 class="font-semibold text-sm mb-2">Geeignet für:</h4>
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                        Standard Supplier Relationships, Low-Risk Data Processing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="inline-flex p-3 rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-600">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7V17C2 17.55 2.22 18.05 2.59 18.41L12 22L21.41 18.41C21.78 18.05 22 17.55 22 17V7L12 2Z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">AL2</span>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold mb-2">High Assessment Level</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Erhöhte Sicherheitsanforderungen für sensible Automotive-Daten
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div>
                      <h4 class="font-semibold text-sm mb-2">Anforderungen:</h4>
                      <div class="space-y-1">
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Enhanced Security Controls</span>
                        </div>
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Detailed Risk Management</span>
                        </div>
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Comprehensive Documentation</span>
                        </div>
                      </div>
                    </div>

                    <div class="pt-2 border-t">
                      <h4 class="font-semibold text-sm mb-2">Geeignet für:</h4>
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                        Sensitive Data Processing, Tier-1 Suppliers, Development Partnerships
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-2 border-red-500">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="inline-flex p-3 rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded">AL3</span>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold mb-2">Very High Assessment Level</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Höchste Sicherheitsanforderungen für hochvertrauliche Informationen
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div>
                      <h4 class="font-semibold text-sm mb-2">Anforderungen:</h4>
                      <div class="space-y-1">
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Advanced Security Controls</span>
                        </div>
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Continuous Monitoring</span>
                        </div>
                        <div class="flex items-start gap-2 text-xs">
                          <svg class="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span>Maximum Protection</span>
                        </div>
                      </div>
                    </div>

                    <div class="pt-2 border-t">
                      <h4 class="font-semibold text-sm mb-2">Geeignet für:</h4>
                      <p class="text-xs text-gray-600 dark:text-gray-400">
                        Highly Confidential Data, Strategic Partnerships, Future Vehicle Technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TISAX Controls Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                VDA ISA 6.0 Security Controls
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Comprehensive Automotive Security Controls nach TISAX® Standard
              </p>
            </div>

            <div class="space-y-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div class="flex items-center gap-4">
                    <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold">Information Security Management</h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Umfassendes ISMS nach VDA ISA für Automotive-Umgebungen
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Security Policies</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Risk Management</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Incident Management</span>
                  </div>
                  
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span>Implementation</span>
                      <span class="font-semibold">94%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-red-600 h-2 rounded-full" style="width: 94%"></div>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Automotive-spezifisches Informationssicherheits-Management nach VDA ISA 6.0
                    </p>
                  </div>
                  
                  <div>
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div class="flex items-center gap-4">
                    <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 17V15H17V17H12M12 11V9H17V11H12M8 12V15H7V12H8M7.25 8.5L8.75 10L10 8.75L8.5 7.25L7.25 8.5M8.5 15.25L10 13.75L8.75 12.5L7.25 14L8.5 15.25Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold">Supplier Relationship Security</h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Sichere Integration und Management von Automotive-Suppliern
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Supplier Assessment</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Contract Security</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Third-Party Risk</span>
                  </div>
                  
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span>Implementation</span>
                      <span class="font-semibold">91%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-red-600 h-2 rounded-full" style="width: 91%"></div>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Multi-Tier Supplier Security Management und TISAX®-konforme Partnerschaften
                    </p>
                  </div>
                  
                  <div>
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div class="flex items-center gap-4">
                    <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold">Data Protection & Confidentiality</h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Schutz vertraulicher Automotive-Daten und Entwicklungsinformationen
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Data Classification</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Access Controls</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Encryption</span>
                  </div>
                  
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span>Implementation</span>
                      <span class="font-semibold">96%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-red-600 h-2 rounded-full" style="width: 96%"></div>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Höchste Vertraulichkeit für Fahrzeugentwicklung und Produktionsgeheimnisse
                    </p>
                  </div>
                  
                  <div>
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div class="flex items-center gap-4">
                    <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold">Vehicle Cybersecurity</h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Cybersecurity für Connected Vehicles nach ISO/SAE 21434
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">CSMS</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Vehicle Security</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">V2X Protection</span>
                  </div>
                  
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span>Implementation</span>
                      <span class="font-semibold">88%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-red-600 h-2 rounded-full" style="width: 88%"></div>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Umfassende Cybersecurity für vernetzte Fahrzeuge und Automotive-Systeme
                    </p>
                  </div>
                  
                  <div>
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-lg transition-all duration-300">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div class="flex items-center gap-4">
                    <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <svg class="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17,11V3H7V11L3,7V21H21V7L17,11M19,19H5V10.92L7,12.92V5H17V12.92L19,10.92V19Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-lg font-bold">Physical & Environmental Security</h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        Physische Sicherheit für Produktionsstätten und Entwicklungszentren
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Access Control</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Facility Security</span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded">Equipment Protection</span>
                  </div>
                  
                  <div class="space-y-2">
                    <div class="flex items-center justify-between text-sm">
                      <span>Implementation</span>
                      <span class="font-semibold">92%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-red-600 h-2 rounded-full" style="width: 92%"></div>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      Schutz von Produktionsanlagen und sensiblen Automotive-Entwicklungsbereichen
                    </p>
                  </div>
                  
                  <div>
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Active</span>
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
                TISAX® Implementation Solutions
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Strukturierte Umsetzung für erfolgreiche TISAX® Zertifizierung
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-red-500 to-orange-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    </svg>
                  </div>

                  <h3 class="text-xl font-bold">TISAX® Assessment & Certification</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Vollständige TISAX®-Vorbereitung und -Zertifizierung nach VDA ISA 6.0 Standards
                  </p>

                  <div class="space-y-2 pt-2">
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>VDA ISA 6.0 Gap Analysis und Remediation</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>TISAX® Assessment Vorbereitung und Begleitung</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Automotive-spezifische Security Controls</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Supplier Onboarding und Integration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-blue-500 to-indigo-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                  </div>

                  <h3 class="text-xl font-bold">Automotive Cybersecurity Framework</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    ISO/SAE 21434-konforme Cybersecurity für Connected Vehicles und Automotive-Systeme
                  </p>

                  <div class="space-y-2 pt-2">
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Vehicle Cybersecurity Management System (CSMS)</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Cybersecurity Risk Assessment für Fahrzeuge</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Secure Development Lifecycle für Automotive</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Incident Response für Connected Vehicles</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div class="space-y-4">
                  <div class="inline-flex p-3 rounded-xl bg-gradient-to-r text-white from-green-500 to-teal-600">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.3,16.7L11,20.9L7.85,17.8C5.68,18.67 2,19.79 2,19.79C2,19.79 3.77,15.62 4.38,13.84L0.29,9.75L1.71,8.33L5.79,12.4C7.57,11.8 11.76,10.71 11.76,10.71L10,2H14L12.24,10.71C12.24,10.71 16.43,11.8 18.21,12.4L22.29,8.33L23.71,9.75L19.62,13.84C20.23,15.62 22,19.79 22,19.79C22,19.79 18.32,18.67 16.15,17.8L16,18L19,21H13L15.3,16.7M8.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,15A1.5,1.5 0 0,0 10,13.5A1.5,1.5 0 0,0 8.5,12M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12Z"/>
                    </svg>
                  </div>

                  <h3 class="text-xl font-bold">Supply Chain Security Governance</h3>
                  <p class="text-gray-600 dark:text-gray-400">
                    Umfassende Security Governance für die Automotive-Lieferkette
                  </p>

                  <div class="space-y-2 pt-2">
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Multi-Tier Supplier Risk Management</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Automotive Data Protection Framework</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Cross-Border Compliance Management</span>
                    </div>
                    <div class="flex items-start gap-2 text-sm">
                      <svg class="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Continuous Supplier Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section class="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                TISAX® Success Stories
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Erfolgreiche TISAX® Implementierungen in der Automotive-Industrie
              </p>
            </div>

            <div class="space-y-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  <div>
                    <h3 class="text-lg font-bold mb-2 text-red-700">Tier-1 Supplier TISAX® Zertifizierung</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-medium">Challenge:</span> Großer Automobilzulieferer benötigt TISAX® AL3 für OEM-Partnerschaften
                    </p>
                  </div>
                  
                  <div>
                    <p class="text-sm">
                      <span class="font-medium text-red-700">Solution:</span> Comprehensive VDA ISA Implementation + Security Controls + Assessment Preparation
                    </p>
                  </div>
                  
                  <div>
                    <p class="text-sm font-medium text-orange-700">
                      Erfolgreiche TISAX® AL3 Zertifizierung und Zugang zu 5 neuen OEM-Partnerschaften
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded w-fit">9 Monate</span>
                    <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded w-fit">Hoch</span>
                  </div>
                  
                  <div>
                    <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  <div>
                    <h3 class="text-lg font-bold mb-2 text-red-700">Connected Car Platform Security</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-medium">Challenge:</span> Automotive Software-Anbieter entwickelt Connected Car Platform für deutsche OEMs
                    </p>
                  </div>
                  
                  <div>
                    <p class="text-sm">
                      <span class="font-medium text-red-700">Solution:</span> ISO/SAE 21434 CSMS + V2X Security + OTA Security + TISAX® Compliance
                    </p>
                  </div>
                  
                  <div>
                    <p class="text-sm font-medium text-orange-700">
                      Sichere Markteinführung mit 3 deutschen OEMs und 200k Connected Vehicles
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded w-fit">12 Monate</span>
                    <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded w-fit">Hoch</span>
                  </div>
                  
                  <div>
                    <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  <div>
                    <h3 class="text-lg font-bold mb-2 text-red-700">Global Automotive Supplier Integration</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-medium">Challenge:</span> Internationale Expansion eines Automotive-Zulieferers in den deutschen Markt
                    </p>
                  </div>
                  
                  <div>
                    <p class="text-sm">
                      <span class="font-medium text-red-700">Solution:</span> TISAX® Assessment + Cross-Border Data Protection + German Automotive Compliance
                    </p>
                  </div>
                  
                  <div>
                    <p class="text-sm font-medium text-orange-700">
                      Erfolgreiche Integration in deutsche Automotive-Lieferkette mit 40% Umsatzsteigerung
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded w-fit">6 Monate</span>
                    <span class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded w-fit">Mittel</span>
                  </div>
                  
                  <div>
                    <svg class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="py-20 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
        <div class="container px-4">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Business Impact von TISAX®
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Messbare Vorteile für Ihre Automotive-Geschäftsstrategie
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  100%
                </div>
                <div class="font-semibold mb-2">Market Access</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Zugang zum deutschen Automotive-Markt
                </div>
                <div class="text-xs text-red-600 font-medium">
                  der deutschen OEMs erfordern TISAX® für Supplier
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  65%
                </div>
                <div class="font-semibold mb-2">Competitive Advantage</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Wettbewerbsvorsprung durch TISAX® Zertifizierung
                </div>
                <div class="text-xs text-red-600 font-medium">
                  höhere Erfolgsrate bei Automotive-Ausschreibungen
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  80%
                </div>
                <div class="font-semibold mb-2">Risk Reduction</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Drastische Reduktion von Cybersecurity-Risiken
                </div>
                <div class="text-xs text-red-600 font-medium">
                  weniger sicherheitsrelevante Vorfälle in der Supply Chain
                </div>
              </div>

              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  45%
                </div>
                <div class="font-semibold mb-2">Operational Excellence</div>
                <div class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Verbesserte Sicherheitsprozesse und -kultur
                </div>
                <div class="text-xs text-red-600 font-medium">
                  Effizienzsteigerung bei Security Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div class="container px-4">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Ihr Weg in die deutsche Automotive-Lieferkette
            </h2>
            <p class="text-xl mb-8 text-white/90">
              Werden Sie Teil der deutschen Automotive-Industrie mit TISAX® Zertifizierung.
              Unsere Automotive-Security-Experten begleiten Sie zur erfolgreichen VDA ISA 6.0 Compliance.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?demo=true&framework=tisax" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 bg-white rounded-lg hover:bg-gray-100 transition-all group">
                <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                TISAX® Readiness Assessment buchen
                <svg class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </a>
              <button class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 transition-all">
                <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Automotive-Expertenberatung
              </button>
            </div>

            <div class="mt-8 flex items-center justify-center gap-2 text-white/80">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
              </svg>
              <span class="text-sm">
                Professionelle TISAX® Expertise für die Automobilindustrie
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};