export default {
  route: '/assessment-center',
  title: 'Compliance Assessment Center',
  description: 'Kostenlose Compliance-Assessments. DSGVO, ISO 27001, NIS2 Readiness prüfen. In 15 Minuten zum Ergebnis.',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              Compliance Assessment Center
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Kostenlose Compliance-Assessments. DSGVO, ISO 27001, NIS2 Readiness prüfen. In 15 Minuten zum Ergebnis.
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
                Jetzt starten
              </a>
              <a href="/demo" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A5FF] bg-white rounded-lg hover:bg-gray-100 transition-all">
                Demo ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-[#0B1D2A] mb-6">
              Ihre Compliance-Lösung mit KI
            </h2>
            <p class="text-gray-600 mb-8">
              Marsstein bietet Ihnen eine umfassende Lösung für Compliance Assessment Center. 
              Mit unserer KI-gestützten Plattform erreichen Sie Compliance in Rekordzeit.
            </p>
            
            <!-- Features Grid -->
            <div class="grid md:grid-cols-3 gap-8 mt-12">
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="w-12 h-12 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">KI-gestützt</h3>
                <p class="text-gray-600">Automatisierte Compliance-Prozesse mit künstlicher Intelligenz</p>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="w-12 h-12 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Schnell</h3>
                <p class="text-gray-600">Erreichen Sie Compliance in Rekordzeit</p>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <div class="w-12 h-12 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-[#0B1D2A] mb-2">Sicher</h3>
                <p class="text-gray-600">Höchste Sicherheitsstandards und Datenschutz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-[#0B1D2A]">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für Compliance Assessment Center?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute mit Ihrer Compliance-Transformation
          </p>
          <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0B1D2A] bg-white rounded-lg hover:bg-gray-100 transition-all">
            Kostenlose Beratung
          </a>
        </div>
      </section>
    </main>
  `
};