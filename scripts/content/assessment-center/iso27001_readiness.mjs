export default {
  route: '/assessment-center/iso27001-readiness-check',
  title: 'ISO 27001 Readiness Check',
  description: 'ISO 27001 Zertifizierungsreife prüfen. Gap-Analyse in 20 Minuten. Mit Maßnahmenplan.',
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
                ISO 27001 Readiness wird bewertet...
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre ISMS-Vorbereitung und erstellen einen detaillierten 
                Readiness-Report mit spezifischer Roadmap zur Zertifizierung.
              </p>
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FileText class="h-4 w-4 animate-pulse" />
                  <span>ISMS-Politik bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield class="h-4 w-4 animate-pulse" />
                  <span>Risikobeurteilung analysieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Database class="h-4 w-4 animate-pulse" />
                  <span>Asset Management prüfen...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock class="h-4 w-4 animate-pulse" />
                  <span>Zugriffskontrolle bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Gauge class="h-4 w-4 animate-pulse" />
                  <span>Zertifizierungs-Readiness bestimmen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
};