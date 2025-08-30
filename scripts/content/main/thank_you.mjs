export default {
  route: '/thank-you',
  title: 'Vielen Dank - Marsstein',
  description: 'Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden.',
  content: `
    <main class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              Vielen Dank - Marsstein
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden.
            </p>
            <div class="flex gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
                Jetzt starten
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
};