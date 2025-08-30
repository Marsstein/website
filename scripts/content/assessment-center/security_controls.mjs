export default {
  route: '/assessment-center/security-controls-audit',
  title: 'Security Controls Audit',
  description: 'IT-Sicherheitskontrollen prüfen. Schwachstellen identifizieren. Mit Priorisierung.',
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
                Security Controls Audit wird durchgeführt...
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre Sicherheitskontrollen und erstellen einen detaillierten 
                Audit-Report mit kritischen Findings und Remediation-Plan.
              </p>
              <div class="space-y-4">
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock class="h-4 w-4 animate-pulse" />
                  <span>Zugriffskontrolle auditieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Network class="h-4 w-4 animate-pulse" />
                  <span>Netzwerksicherheit prüfen...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Server class="h-4 w-4 animate-pulse" />
                  <span>Systemhärtung bewerten...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity class="h-4 w-4 animate-pulse" />
                  <span>Incident Response analysieren...</span>
                </div>
                <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <AlertOctagon class="h-4 w-4 animate-pulse" />
                  <span>Kritische Findings identifizieren...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
};