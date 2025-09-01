import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const AcademyPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Marsstein Academy",
    "description": "E-Learning Plattform für Compliance, Datenschutz und Informationssicherheit",
    "url": "https://marsstein.ai/academy",
    "offers": {
      "@type": "EducationalOccupationalProgram",
      "name": "Compliance Zertifizierungsprogramm",
      "programType": "CertificateProgram",
      "provider": {
        "@type": "Organization",
        "name": "Marsstein GmbH"
      }
    }
  };

  const courses = [
    {
      category: 'DSGVO Grundlagen',
      level: 'Einsteiger',
      duration: '4 Stunden',
      modules: [
        'Einführung in die DSGVO',
        'Betroffenenrechte verstehen',
        'Rechtsgrundlagen der Verarbeitung',
        'Dokumentationspflichten'
      ]
    },
    {
      category: 'ISO 27001 Implementierung',
      level: 'Fortgeschritten',
      duration: '8 Stunden',
      modules: [
        'ISMS Grundlagen',
        'Risikoanalyse durchführen',
        'Controls implementieren',
        'Audit-Vorbereitung'
      ]
    },
    {
      category: 'EU AI Act Compliance',
      level: 'Experte',
      duration: '6 Stunden',
      modules: [
        'KI-Risikoklassifizierung',
        'Transparenzpflichten',
        'Technische Dokumentation',
        'Konformitätsbewertung'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Academy – Compliance-Schulungen & Zertifizierungen"
        description="Marsstein Academy: Online-Kurse zu DSGVO, ISO 27001 & EU AI Act. ✓ Zertifikate ✓ Praxisnah ✓ Von Experten. Jetzt weiterbilden!"
        canonical="/academy"
        keywords="Compliance Schulung, DSGVO Kurs, ISO 27001 Training, Datenschutz Weiterbildung"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                Marsstein Academy
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Werden Sie zum Compliance-Experten mit unseren praxisnahen Online-Kursen. 
                Von Grundlagen bis zur Expertenzertifizierung.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Lernmodule</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10.000+</div>
                <div className="text-gray-600">Absolventen</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Erfolgsquote</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Verfügbar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Unsere Kurskategorien
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{course.category}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.level === 'Einsteiger' ? 'bg-green-100 text-green-800' :
                      course.level === 'Fortgeschritten' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Kursdauer: {course.duration}
                  </p>
                  
                  <h4 className="font-medium text-gray-900 mb-2">Kursmodule:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.modules.map((module, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {module}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Kurs starten
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Warum Marsstein Academy?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Praxisnahe Inhalte</h3>
                <p className="text-gray-600">Von Experten entwickelt mit echten Fallbeispielen aus der Praxis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Zertifikate</h3>
                <p className="text-gray-600">Erhalten Sie anerkannte Zertifikate nach erfolgreichem Abschluss</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexibles Lernen</h3>
                <p className="text-gray-600">Lernen Sie in Ihrem eigenen Tempo, wann und wo Sie wollen</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Starten Sie Ihre Compliance-Karriere
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Melden Sie sich jetzt an und erhalten Sie Zugang zu allen Kursen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
              >
                Kostenlos starten
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Beratung anfragen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcademyPage;