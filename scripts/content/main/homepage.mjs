export default {
  route: '/',
  title: 'Marsstein - KI-gestützte Compliance Automatisierung',
  description: 'Compliance-Automatisierung mit KI. ISO 27001, DSGVO, NIS2 und mehr in Rekordzeit. Kostenlose Beratung starten.',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              Compliance made simple
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ihre KI-gestützte Compliance-Plattform für ISO 27001, DSGVO, NIS2 und mehr. 
              Erreichen Sie Compliance in Rekordzeit - automatisiert und rechtssicher.
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
                Kostenlose Demo
              </a>
              <a href="/pricing" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A5FF] bg-white rounded-lg hover:bg-gray-100 transition-all">
                Preise ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#0B1D2A] mb-4">
              Compliance-Automatisierung mit KI
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Marsstein macht Compliance einfach. Unsere KI-gestützte Plattform führt Sie in Rekordzeit zur Zertifizierung.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="w-14 h-14 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">KI-gestützt</h3>
              <p class="text-gray-600">
                Künstliche Intelligenz analysiert Ihre Prozesse und erstellt automatisch alle notwendigen Dokumente.
              </p>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="w-14 h-14 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">Schnell</h3>
              <p class="text-gray-600">
                Was normalerweise Monate dauert, schaffen Sie mit Marsstein in wenigen Wochen.
              </p>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="w-14 h-14 bg-[#00A5FF] rounded-lg flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-[#0B1D2A] mb-3">Rechtssicher</h3>
              <p class="text-gray-600">
                Immer auf dem neuesten Stand der Gesetzgebung. Automatische Updates bei Änderungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-[#0B1D2A] mb-4">
              Alle wichtigen Zertifizierungen
            </h2>
            <p class="text-xl text-gray-600">
              Eine Plattform für alle Ihre Compliance-Anforderungen
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="/iso-27001-zertifizierung" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">ISO 27001</h3>
              <p class="text-sm text-gray-600 mt-2">Informationssicherheit</p>
            </a>
            <a href="/dsgvo" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">DSGVO</h3>
              <p class="text-sm text-gray-600 mt-2">Datenschutz</p>
            </a>
            <a href="/nis2" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">NIS2</h3>
              <p class="text-sm text-gray-600 mt-2">Cybersecurity</p>
            </a>
            <a href="/soc2-zertifizierung" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">SOC 2</h3>
              <p class="text-sm text-gray-600 mt-2">Service Organization</p>
            </a>
            <a href="/tisax-compliance" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">TISAX</h3>
              <p class="text-sm text-gray-600 mt-2">Automotive Security</p>
            </a>
            <a href="/eu-ai-act" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">EU AI Act</h3>
              <p class="text-sm text-gray-600 mt-2">KI-Regulierung</p>
            </a>
            <a href="/iso-27017-zertifizierung" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">ISO 27017</h3>
              <p class="text-sm text-gray-600 mt-2">Cloud Security</p>
            </a>
            <a href="/iso-27018-zertifizierung" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <h3 class="font-semibold text-[#0B1D2A]">ISO 27018</h3>
              <p class="text-sm text-gray-600 mt-2">Cloud Privacy</p>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-[#0B1D2A]">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für automatisierte Compliance?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Starten Sie noch heute und erreichen Sie Ihre Zertifizierung in Rekordzeit
          </p>
          <div class="flex gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0B1D2A] bg-white rounded-lg hover:bg-gray-100 transition-all">
              Kostenlose Demo buchen
            </a>
            <a href="/assessment-center" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#0B1D2A] transition-all">
              Assessment starten
            </a>
          </div>
        </div>
      </section>
    </main>
  `
};