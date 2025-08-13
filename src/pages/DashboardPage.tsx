import React from 'react';
import SEOHead from '../components/SEOHead';

const DashboardPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Marsstein Compliance Dashboard",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "Compliance Management Dashboard für DSGVO, ISO 27001 und EU AI Act"
  };

  return (
    <>
      <SEOHead
        title="Dashboard – Ihr Compliance-Cockpit in Echtzeit"
        description="Marsstein Dashboard: Alle Compliance-KPIs im Blick. ✓ Echtzeit-Monitoring ✓ Automatische Reports ✓ Risiko-Tracking. Jetzt einloggen!"
        canonical="/dashboard"
        keywords="Compliance Dashboard, DSGVO Monitoring, ISO 27001 Dashboard, Compliance KPIs"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Compliance Dashboard</h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Letztes Update: vor 5 Minuten</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Bericht erstellen
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Compliance Score</h3>
                <span className="text-green-600 text-sm font-medium">+5%</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">92%</div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Offene Aufgaben</h3>
                <span className="text-red-600 text-sm font-medium">3 kritisch</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">24</div>
              <p className="text-sm text-gray-500 mt-1">12 diese Woche fällig</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Aktive Risiken</h3>
                <span className="text-yellow-600 text-sm font-medium">Mittel</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">7</div>
              <p className="text-sm text-gray-500 mt-1">2 neue diese Woche</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Audits</h3>
                <span className="text-blue-600 text-sm font-medium">Geplant</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <p className="text-sm text-gray-500 mt-1">Nächstes in 14 Tagen</p>
            </div>
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Compliance Trend */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Compliance-Trend</h2>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                <p className="text-gray-500">Chart: Compliance Score über Zeit</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Letzte Aktivitäten</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">DSGVO-Audit abgeschlossen</p>
                    <p className="text-sm text-gray-500">vor 2 Stunden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Neue Richtlinie veröffentlicht</p>
                    <p className="text-sm text-gray-500">vor 5 Stunden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Risikobewertung aktualisiert</p>
                    <p className="text-sm text-gray-500">gestern</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Kritisches Update erforderlich</p>
                    <p className="text-sm text-gray-500">vor 2 Tagen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Table */}
          <div className="mt-8 bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Anstehende Aufgaben</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aufgabe
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kategorie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priorität
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fällig
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Datenschutzerklärung aktualisieren
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">DSGVO</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                        Hoch
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Morgen</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        In Arbeit
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      ISO 27001 Kontrollen überprüfen
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">ISO 27001</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                        Mittel
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">In 3 Tagen</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        Geplant
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      KI-Risikoanalyse durchführen
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">EU AI Act</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        Niedrig
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Nächste Woche</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
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
    </>
  );
};

export default DashboardPage;