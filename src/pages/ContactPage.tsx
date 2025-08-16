import React from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Marsstein GmbH",
      "email": "info@marsstein.com",
      "telephone": "+49-30-12345678",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Friedrichstraße 123",
        "addressLocality": "Berlin",
        "postalCode": "10117",
        "addressCountry": "DE"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Kontakt – Compliance-Experten erreichen"
        description="Kontaktieren Sie Marsstein für Compliance-Beratung. ✓ Kostenlose Erstberatung ✓ 24h Antwortzeit ✓ Experten für DSGVO & ISO 27001."
        canonical="/contact"
        keywords="Compliance Beratung, DSGVO Experten, ISO 27001 Beratung, Kontakt"
      />
      
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F6F8] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#232323] mb-6 animate-fade-in">
              Sprechen Sie mit unseren <span className="text-[#e24e1b]">Experten</span>
            </h1>
            <p className="text-xl text-[#474747] max-w-3xl mx-auto leading-relaxed">
              Wir helfen Ihnen bei allen Fragen rund um Compliance, Datenschutz und Informationssicherheit. 
              <span className="font-semibold">Kostenlose Erstberatung inklusive.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-10 transition-all duration-300 hover:shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-[#232323] mb-8">
                Senden Sie uns eine Nachricht
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#474747] mb-2">
                      Vorname *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#474747] mb-2">
                      Nachname *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#474747] mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#474747] mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-[#474747] mb-2">
                    Thema *
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="dsgvo">DSGVO Compliance</option>
                    <option value="iso27001">ISO 27001 Zertifizierung</option>
                    <option value="ai-act">EU AI Act</option>
                    <option value="demo">Produkt Demo</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#474747] mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e24e1b] focus:border-[#e24e1b] transition-all duration-200 font-inter resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-[#e24e1b] border-gray-300 rounded focus:ring-[#e24e1b] mt-1"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-[#474747]">
                    Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-white bg-[#e24e1b] rounded-lg hover:bg-[#f97316] transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-inter"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-10 mb-8 transition-all duration-300 hover:shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#232323] mb-8">
                  Direkter Kontakt
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="p-3 bg-[#e24e1b]/10 rounded-lg group-hover:bg-[#e24e1b]/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#e24e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#232323] text-lg">E-Mail</h3>
                      <p className="text-[#474747] font-medium">info@marsstein.com</p>
                      <p className="text-sm text-[#474747] opacity-80">Antwort innerhalb von 24 Stunden</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-3 bg-[#e24e1b]/10 rounded-lg group-hover:bg-[#e24e1b]/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#e24e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#232323] text-lg">Telefon</h3>
                      <p className="text-[#474747] font-medium">+49 (0) 30 123 456 78</p>
                      <p className="text-sm text-[#474747] opacity-80">Mo-Fr 9:00-18:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-3 bg-[#e24e1b]/10 rounded-lg group-hover:bg-[#e24e1b]/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#e24e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[#232323] text-lg">Adresse</h3>
                      <p className="text-[#474747] font-medium">
                        Marsstein GmbH<br />
                        Friedrichstraße 123<br />
                        10117 Berlin
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#e24e1b]/10 to-[#f97316]/10 rounded-2xl p-10 border border-[#e24e1b]/20">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#e24e1b] rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#232323] ml-4">
                    Kostenlose Erstberatung
                  </h3>
                </div>
                <p className="text-[#474747] mb-6 text-lg">
                  Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Compliance-Experten.
                </p>
                <ul className="space-y-3 text-[#474747]">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">30 Minuten Expertengespräch</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Individuelle Lösungsvorschläge</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Unverbindlich & kostenlos</span>
                  </li>
                </ul>
                <button className="mt-8 w-full px-6 py-3 bg-[#e24e1b] text-white font-semibold rounded-lg hover:bg-[#f97316] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Termin vereinbaren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ContactPage;