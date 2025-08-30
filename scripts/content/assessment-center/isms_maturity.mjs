export default {
  route: '/assessment-center/isms-maturity-assessment',
  title: 'ISO 27001 Maturity Assessment – ISMS Reifegrad prüfen',
  description: 'ISO 27001 ISMS Maturity Assessment: Bewerten Sie den Reifegrad Ihres Information Security Management Systems. ✓ CMMI-basiert ✓ Benchmarks ✓ Roadmap. Jetzt testen!',
  content: `<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        <div class="pt-24 pb-16">
          <div class="container px-4">
            <div class="max-w-2xl mx-auto text-center">
              <motion.div
                class="mb-8"
                animate=}
                transition=}
              >
                <RefreshCw class="h-16 w-16 text-brand-red mx-auto" />
              </motion.div>
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ISMS Maturity Assessment wird berechnet...
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren den Reifegrad Ihres ISMS und erstellen einen umfassenden 
                Maturity-Report mit Benchmarks und Verbesserungsroadmap.
              </p>
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FileText class="h-4 w-4 animate-pulse" />
                  <span>Prozess-Dokumentation bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield class="h-4 w-4 animate-pulse" />
                  <span>Risikomanagement-Reife analysieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users class="h-4 w-4 animate-pulse" />
                  <span>Sicherheitskultur bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <LineChart class="h-4 w-4 animate-pulse" />
                  <span>Metriken und Analytics prüfen...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Gauge class="h-4 w-4 animate-pulse" />
                  <span>Gesamt-Reifegrad bestimmen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>`
};