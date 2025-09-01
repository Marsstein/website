import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marsstein",
    "url": "https://marsstein.ai",
    "logo": "https://marsstein.ai/logo.png",
    "description": "Compliance-Plattform für DSGVO, ISO 27001, EU AI Act und mehr",
    "sameAs": [
      "https://www.linkedin.com/company/marsstein",
      "https://twitter.com/marsstein"
    ]
  };

  return (
    <>
      <SEOHead
        title="Compliance Software & Beratung für DSGVO, ISO 27001"
        description="Marsstein Compliance Platform: KI-gestützte Lösungen für DSGVO, ISO 27001 & EU AI Act. ✓ Automatisiert ✓ Rechtssicher. Jetzt starten!"
        canonical="/"
        keywords="Compliance Software, DSGVO, ISO 27001, EU AI Act, Datenschutz, Compliance Management"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Compliance einfach gemacht
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Die All-in-One Compliance-Plattform für DSGVO, ISO 27001, EU AI Act und mehr. 
                Automatisieren Sie Ihre Compliance-Prozesse mit KI-Unterstützung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Jetzt starten
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Demo anfragen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Unsere Compliance-Lösungen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'DSGVO Compliance',
                  description: 'Vollständige DSGVO-Konformität mit automatisierten Prozessen und Vorlagen.',
                  link: '/dsgvo'
                },
                {
                  title: 'ISO 27001 Zertifizierung',
                  description: 'Schritt-für-Schritt zur ISO 27001 Zertifizierung mit unserem ISMS-Tool.',
                  link: '/iso-27001'
                },
                {
                  title: 'EU AI Act Ready',
                  description: 'KI-Compliance nach EU AI Act mit Risikoanalyse und Dokumentation.',
                  link: '/eu-ai-act'
                },
                {
                  title: 'Cookie Management',
                  description: 'DSGVO-konforme Cookie-Banner und Consent-Management.',
                  link: '/tools/cookie-management'
                },
                {
                  title: 'Whistleblower System',
                  description: 'Sicheres Hinweisgebersystem nach HinSchG.',
                  link: '/tools/whistleblower-system'
                },
                {
                  title: 'Compliance AI Assistant',
                  description: 'KI-gestützter Assistent für alle Compliance-Fragen.',
                  link: '/tools/compliance-ai-assistant'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link
                    to={feature.link}
                    className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Mehr erfahren →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bereit für automatisierte Compliance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Starten Sie noch heute mit unserer Compliance-Plattform und sparen Sie Zeit und Ressourcen.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Kostenlos testen
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;