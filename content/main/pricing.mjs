export default {
  route: '/pricing',
  title: 'Transparente Preise für jeden Bedarf',
  description: 'Wählen Sie das passende Paket für Ihre Compliance-Anforderungen.                Alle Preise verstehen sich zzgl. MwSt. 30 Tage kostenlos testen.',
  content: `
    <>
      
      
      <div class="min-h-screen bg-gray-50 py-16">
        <div>
          {/* Header */}
          <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              Transparente Preise für jeden Bedarf
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie das passende Paket für Ihre Compliance-Anforderungen. 
              Alle Preise verstehen sich zzgl. MwSt. 30 Tage kostenlos testen.
            </p>
          </div>

          {/* Pricing Cards */}
          <div>
            {plans.map((plan, index) => (
              <div
                key={index}
                class=relative rounded-lg \${
                  plan.highlighted
                    ? 'ring-2 ring-blue-600 shadow-xl'
                    : 'border border-gray-200'
                } bg-white p-8
              >
                
                
                <div class="text-center mb-8">
                  <h2 class="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                  <p class="text-gray-600 mb-4">{plan.description}</p>
                  <div class="text-4xl font-bold text-gray-900">
                    {plan.price}
                    <span class="text-lg text-gray-600 font-normal">{plan.period}</span>
                  </div>
                </div>

                <ul class="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} class="flex items-start">
                      <svg
                        class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span class="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
              Häufig gestellte Fragen
            </h2>
            <div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Kann ich das Paket später wechseln?
                </h3>
                <p class="text-gray-600">
                  Ja, Sie können jederzeit upgraden oder downgraden. Die Abrechnung erfolgt anteilig.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Gibt es eine Mindestlaufzeit?
                </h3>
                <p class="text-gray-600">
                  Nein, alle Pakete sind monatlich kündbar. Bei Jahreszahlung gewähren wir 20% Rabatt.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Sind Schulungen enthalten?
                </h3>
                <p class="text-gray-600">
                  Professional und Enterprise Pakete enthalten Onboarding-Schulungen. Weitere Trainings auf Anfrage.
                </p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">
                  Wie sicher sind meine Daten?
                </h3>
                <p class="text-gray-600">
                  Wir hosten in deutschen Rechenzentren und sind ISO 27001 zertifiziert. Ihre Daten sind sicher.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div class="text-center mt-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              Noch unsicher? Testen Sie kostenlos!
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              30 Tage unverbindlich alle Features testen. Keine Kreditkarte erforderlich.
            </p>
            <Link>
              Kostenlos testen
            </Link>
          </div>
        </div>
      </div>
    </>`
};