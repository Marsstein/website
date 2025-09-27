import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Marsstein Compliance Platform",
    "description": "Compliance Management Software für DSGVO, ISO 27001 und EU AI Act",
    "brand": {
      "@type": "Brand",
      "name": "Marsstein"
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: '99€',
      period: '/Monat',
      description: 'Perfekt für kleine Unternehmen',
      features: [
        'DSGVO Basis-Compliance',
        'Bis zu 5 Nutzer',
        'Cookie Management Tool',
        'E-Mail Support',
        'Basis-Vorlagen'
      ],
      cta: 'Jetzt starten',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '299€',
      period: '/Monat',
      description: 'Für wachsende Unternehmen',
      features: [
        'Alles aus Starter',
        'Bis zu 25 Nutzer',
        'ISO 27001 Module',
        'Whistleblower System',
        'Priority Support',
        'API-Zugang',
        'Custom Branding'
      ],
      cta: 'Jetzt starten',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Maßgeschneiderte Lösungen',
      features: [
        'Alles aus Professional',
        'Unbegrenzte Nutzer',
        'EU AI Act Compliance',
        'Dedizierter Account Manager',
        'SLA Garantie',
        'On-Premise Option',
        'Custom Integrationen'
      ],
      cta: 'Kontakt aufnehmen',
      highlighted: false
    }
  ];

  return (
    <>
      <SEOHead
        title="Preise & Pakete – Compliance Software"
        description="Transparente Preise für Marsstein Compliance Software. Wählen Sie das passende Paket für Ihre Compliance-Anforderungen. Jetzt 30 Tage kostenlos testen!"
        canonical="/pricing"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#232323] mb-4">
              Transparente Preise für jeden Bedarf
            </h1>
            <p className="text-xl text-[#474747] max-w-3xl mx-auto">
              Wählen Sie das passende Paket für Ihre Compliance-Anforderungen. 
              Alle Preise verstehen sich zzgl. MwSt. 30 Tage kostenlos testen.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg ${
                  plan.highlighted
                    ? 'ring-2 ring-[#e24e1b] shadow-xl bg-white'
                    : 'border border-gray-200 bg-[#F5F6F8]'
                } p-8 transition-all hover:shadow-lg`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#e24e1b] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Beliebt
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-[#232323] mb-2">{plan.name}</h2>
                  <p className="text-[#474747] mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-[#232323]">
                    {plan.price}
                    <span className="text-lg text-[#474747] font-normal">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#39B37B] mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#474747]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all ${
                    plan.highlighted
                      ? 'bg-[#e24e1b] text-white hover:bg-[#ea580c] shadow-md hover:shadow-lg'
                      : 'bg-transparent border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-[#F5F6F8] rounded-lg p-8">
            <h2 className="text-4xl font-semibold text-[#232323] mb-6 text-center">
              Häufig gestellte Fragen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#232323] mb-2">
                  Kann ich das Paket später wechseln?
                </h3>
                <p className="text-[#474747]">
                  Ja, Sie können jederzeit upgraden oder downgraden. Die Abrechnung erfolgt anteilig.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#232323] mb-2">
                  Gibt es eine Mindestlaufzeit?
                </h3>
                <p className="text-[#474747]">
                  Nein, alle Pakete sind monatlich kündbar. Bei Jahreszahlung gewähren wir 20% Rabatt.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#232323] mb-2">
                  Sind Schulungen enthalten?
                </h3>
                <p className="text-[#474747]">
                  Professional und Enterprise Pakete enthalten Onboarding-Schulungen. Weitere Trainings auf Anfrage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#232323] mb-2">
                  Wie sicher sind meine Daten?
                </h3>
                <p className="text-[#474747]">
                  Wir hosten in deutschen Rechenzentren und sind ISO 27001 zertifiziert. Ihre Daten sind sicher.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-semibold text-[#232323] mb-4">
              Noch unsicher? Testen Sie kostenlos!
            </h2>
            <p className="text-lg text-[#474747] mb-8">
              30 Tage unverbindlich alle Features testen. Keine Kreditkarte erforderlich.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#e24e1b] rounded-lg hover:bg-[#ea580c] shadow-lg hover:shadow-xl transition-all"
            >
              Kostenlos testen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;