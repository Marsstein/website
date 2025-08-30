export default {
  route: '/assessment-center/nis2-compliance-check',
  title: 'NIS2 Compliance Check',
  description: 'NIS2-Richtlinie Compliance prüfen. Betroffenheit und Anforderungen analysieren. Kostenlos.',
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
                NIS2 Compliance wird bewertet...
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre NIS2-Compliance und erstellen einen detaillierten 
                Compliance-Report mit rechtlichen Anforderungen und Umsetzungsplan.
              </p>
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Building2 class="h-4 w-4 animate-pulse" />
                  <span>Anwendungsbereich bestimmen...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield class="h-4 w-4 animate-pulse" />
                  <span>Cybersecurity Governance prüfen...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity class="h-4 w-4 animate-pulse" />
                  <span>Incident Response bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Network class="h-4 w-4 animate-pulse" />
                  <span>Supply Chain Security analysieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Gavel class="h-4 w-4 animate-pulse" />
                  <span>Rechtliche Anforderungen bestimmen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
};