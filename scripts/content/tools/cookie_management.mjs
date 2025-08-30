export default {
  route: '/tools/cookie-management',
  title: 'Cookie Consent Management Platform',
  description: 'DSGVO-konforme Cookie-Banner. TCF 2.0 kompatibel. A/B-Testing für höhere Akzeptanz.',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6">
              🚀 Compliance-Tools
            </span>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie Consent Management Platform
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              DSGVO-konforme Cookie-Banner. TCF 2.0 kompatibel. A/B-Testing für höhere Akzeptanz.
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
                Tool kostenlos testen
              </a>
              <a href="/tools" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A5FF] bg-white rounded-lg hover:bg-gray-100 transition-all">
                Alle Tools ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Tools Grid -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold text-[#0B1D2A] text-center mb-12">
            Unsere Compliance-Tools im Überblick
          </h2>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Cookie Management Tool -->
            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
              <div class="w-14 h-14 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">Cookie Management</h3>
              <p class="text-gray-600 mb-4">
                DSGVO-konforme Cookie-Banner in 5 Minuten. TCF 2.0 kompatibel mit maximaler Conversion.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">DSGVO & ePrivacy konform</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">A/B Testing integriert</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">30+ CMP Integrationen</span>
                </li>
              </ul>
              <a href="/tools/cookie-management" class="inline-flex items-center text-[#00A5FF] font-semibold hover:text-[#0095e8]">
                Tool nutzen
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            <!-- DSGVO Email Generator -->
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div class="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">DSGVO Email Templates</h3>
              <p class="text-gray-600 mb-4">
                Rechtssichere E-Mail-Vorlagen für alle Datenschutz-Anfragen. In 2 Minuten erstellt.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Betroffenenanfragen</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Löschanträge</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Datenpannen-Meldungen</span>
                </li>
              </ul>
              <a href="/tools/dsgvo-email-template-generator" class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
                Tool nutzen
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            <!-- Compliance AI Assistant -->
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <div class="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">KI Compliance Berater</h3>
              <p class="text-gray-600 mb-4">
                24/7 Compliance-Beratung durch KI. Sofort-Antworten auf alle Ihre Fragen.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">DSGVO, ISO 27001, NIS2</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Immer aktuell</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Maßgeschneiderte Antworten</span>
                </li>
              </ul>
              <a href="/tools/compliance-ai-assistant" class="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
                Tool nutzen
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-[#0B1D2A] text-center mb-12">
              Warum Marsstein Tools?
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Sofort einsatzbereit</h3>
                  <p class="text-gray-600">
                    Keine Installation, keine Einrichtung. Unsere Tools funktionieren direkt im Browser.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">100% rechtssicher</h3>
                  <p class="text-gray-600">
                    Von Datenschutz-Experten entwickelt und ständig aktualisiert.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Kosteneffizient</h3>
                  <p class="text-gray-600">
                    Sparen Sie tausende Euro für Berater und Anwälte mit unseren Tools.
                  </p>
                </div>
              </div>
              
              <div class="flex gap-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">KI-gestützt</h3>
                  <p class="text-gray-600">
                    Modernste KI-Technologie für maximale Effizienz und Genauigkeit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-[#0B1D2A]">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Starten Sie jetzt mit unseren Tools
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Alle Tools 14 Tage kostenlos testen. Keine Kreditkarte erforderlich.
          </p>
          <div class="flex gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0B1D2A] bg-white rounded-lg hover:bg-gray-100 transition-all">
              Kostenlos testen
            </a>
            <a href="/pricing" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0B1D2A] transition-all">
              Preise ansehen
            </a>
          </div>
        </div>
      </section>
    </main>
  `
};