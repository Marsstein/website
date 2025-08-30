export default {
  route: '/assessment-center/soc2-readiness-assessment',
  title: 'SOC 2 Readiness Assessment – Zertifizierungsbereitschaft',
  description: 'SOC 2 Readiness Assessment: Prüfen Sie Ihre Bereitschaft für die SOC 2 Zertifizierung. ✓ Trust Services ✓ Gap-Analyse ✓ Audit-Roadmap. Jetzt testen!',
  content: `<>
        
        <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
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
                SOC 2 Readiness wird bewertet...
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre SOC 2 Bereitschaft und erstellen einen detaillierten 
                Readiness-Report mit Audit-Vorbereitung und Kosten-Timeline.
              </p>
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield class="h-4 w-4 animate-pulse" />
                  <span>Security Trust Service bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity class="h-4 w-4 animate-pulse" />
                  <span>Availability Controls prüfen...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 class="h-4 w-4 animate-pulse" />
                  <span>Processing Integrity analysieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock class="h-4 w-4 animate-pulse" />
                  <span>Confidentiality bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <ShieldCheck class="h-4 w-4 animate-pulse" />
                  <span>Audit-Bereitschaft bestimmen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>`
};