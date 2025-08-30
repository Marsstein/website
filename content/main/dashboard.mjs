export default {
  route: '/dashboard',
  title: 'Compliance Dashboard',
  description: 'Compliance Dashboard - Compliance-Automatisierung mit KI. Marsstein GmbH.',
  content: `
    <>
      <SEOHead>
      
      <div class="min-h-screen bg-gray-50">
        {/* Header */}
        <header class="bg-white shadow-sm">
          <div>
            <div class="flex justify-between items-center">
              <h1 class="text-2xl font-bold text-gray-900">Compliance Dashboard</h1>
              <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-600">Letztes Update: vor 5 Minuten</span>
                <button>
                  Bericht erstellen
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* KPI Cards */}
          <div>
            <div class="bg-white rounded-lg shadow-sm p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-600">Compliance Score</h3>
                <span class="text-green-600 text-sm font-medium">+5%</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">92%</div>
              <div class="mt-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-600">Offene Aufgaben</h3>
                <span class="text-red-600 text-sm font-medium">3 kritisch</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">24</div>
              <p class="text-sm text-gray-500 mt-1">12 diese Woche fällig</p>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-600">Aktive Risiken</h3>
                <span class="text-yellow-600 text-sm font-medium">Mittel</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">7</div>
              <p class="text-sm text-gray-500 mt-1">2 neue diese Woche</p>
            </div>

            <div class="bg-white rounded-lg shadow-sm p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium text-gray-600">Audits</h3>
                <span class="text-blue-600 text-sm font-medium">Geplant</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">3</div>
              <p class="text-sm text-gray-500 mt-1">Nächstes in 14 Tagen</p>
            </div>
          </div>

          {/* Charts and Tables */}
          <div>
            {/* Compliance Trend */}
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Compliance-Trend</h2>
              <div class="h-64 flex items-center justify-center bg-gray-50 rounded">
                <p class="text-gray-500">Chart: Compliance Score über Zeit</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h2 class="text-lg font-semibold text-gray-900 mb-4">Letzte Aktivitäten</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">DSGVO-Audit abgeschlossen</p>
                    <p class="text-sm text-gray-500">vor 2 Stunden</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">Neue Richtlinie veröffentlicht</p>
                    <p class="text-sm text-gray-500">vor 5 Stunden</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">Risikobewertung aktualisiert</p>
                    <p class="text-sm text-gray-500">gestern</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">Kritisches Update erforderlich</p>
                    <p class="text-sm text-gray-500">vor 2 Tagen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Table */}
          <div class="mt-8 bg-white rounded-lg shadow-sm">
            <div class="px-6 py-4 border-b border-gray-200">
              <h2 class="text-lg font-semibold text-gray-900">Anstehende Aufgaben</h2>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aufgabe
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategorie
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priorität
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fällig
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">
                      Datenschutzerklärung aktualisieren
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">DSGVO</td>
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        Hoch
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">Morgen</td>
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        In Arbeit
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">
                      ISO 27001 Kontrollen überprüfen
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">ISO 27001</td>
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Mittel
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">In 3 Tagen</td>
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        Geplant
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">
                      KI-Risikoanalyse durchführen
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">EU AI Act</td>
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Niedrig
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">Nächste Woche</td>
                    <td class="px-6 py-4">
                      <span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        Offen
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>`
};