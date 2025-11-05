import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, Shield, Star, ChevronRight, Building2, MapPin, Phone,
  Rocket, CheckCircle2, Clock, TrendingDown, Users, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExternerDatenschutzbeauftragterMuenchen: React.FC = () => {
  const localBenefits = [
    {
      icon: MapPin,
      title: 'Bayern-Expertise',
      description: 'Kenntnis der BayLDA und typischer Compliance-Anforderungen in der Region München'
    },
    {
      icon: Users,
      title: 'Branchenkenntnis',
      description: 'Spezialisierung auf Münchener Wirtschaftszweige: IT & Software, Finanzdienstleister, Automotive'
    },
    {
      icon: Clock,
      title: 'Schnelle Reaktionszeiten',
      description: 'Support innerhalb von 24h per E-Mail, Telefon oder Video-Call - flexible digitale Beratung'
    },
    {
      icon: Award,
      title: 'Deutschlandweite Erfahrung',
      description: 'Erfolgreiche DSGVO-Umsetzungen bei KMUs in München, Bayern und ganz Deutschland'
    }
  ];

  const faqs = [
    {
      question: "Warum einen externen Datenschutzbeauftragten in München?",
      answer: "Als Münchener Unternehmen profitieren Sie von regionaler Nähe bei gleichzeitig niedrigeren Kosten (ab 29€/Monat) im Vergleich zu einem internen DSB. Wir kennen die lokalen Gegebenheiten und typischen Branchen in München."
    },
    {
      question: "Wie läuft die Beratung für Unternehmen in München ab?",
      answer: "Wir arbeiten primär digital via E-Mail, Telefon und Video-Call - schnell, flexibel und kostensparend für Sie. So können wir innerhalb von 24h reagieren und Sie optimal unterstützen, ohne Anfahrtskosten zu berechnen."
    },
    {
      question: "Welche Branchen in München betreuen Sie?",
      answer: "Wir haben Expertise in typischen Münchener Wirtschaftszweigen: IT & Software, Finanzdienstleister, Automotive, Maschinenbau, Versicherungen, Medizintechnik."
    },
    {
      question: "Was kostet ein externer DSB in München?",
      answer: "Ab 29€/Monat für kleine Unternehmen (bis 20 MA), 95€/Monat für mittlere Unternehmen (bis 50 MA). Alle Leistungen inklusive - keine regionalen Aufschläge für München."
    },
    {
      question: "Wie schnell können Sie in München starten?",
      answer: "Sofort nach Vertragsabschluss erhalten Sie Zugang zur Software. Ein erstes Beratungsgespräch per Telefon oder Video-Call ist innerhalb von 24h möglich."
    },
    {
      question: "Kennen Sie die Datenschutz-Anforderungen in Bayern?",
      answer: "Ja, wir kennen die Besonderheiten der BayLDA und haben bereits zahlreiche Unternehmen in der Region München erfolgreich DSGVO-konform aufgestellt."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "MARSSTEIN - Externer Datenschutzbeauftragter München",
        "description": "Externer Datenschutzbeauftragter für Unternehmen in München. Zertifizierte DSGVO-Expertise ab 29€/Monat. Flexible digitale Beratung mit 24h Support-Reaktionszeit.",
        "url": "https://marsstein.ai/externer-datenschutzbeauftragter-muenchen",
        "telephone": "+49-XXX-XXXXXXX",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "München",
          "addressRegion": "Bayern",
          "addressCountry": "DE"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "München",
            "containedIn": {
              "@type": "State",
              "name": "Bayern"
            }
          }
        ],
        "serviceType": "Datenschutzbeauftragter",
        "provider": {
          "@type": "Organization",
          "name": "MARSSTEIN",
          "url": "https://marsstein.ai"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Externer Datenschutzbeauftragter Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Externer DSB für kleine Unternehmen München",
                "description": "Datenschutzbeauftragter für Unternehmen bis 20 Mitarbeiter in München"
              },
              "price": "29",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "areaServed": {
                "@type": "City",
                "name": "München"
              }
            }
          ]
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "48.1351",
          "longitude": "11.5820"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://marsstein.ai/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Externer Datenschutzbeauftragter",
            "item": "https://marsstein.ai/externer-datenschutzbeauftragter"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "München",
            "item": "https://marsstein.ai/externer-datenschutzbeauftragter-muenchen"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <SEOHead
        title="Externer Datenschutzbeauftragter München 2025 | Ab 29€/Monat"
        description="Externer Datenschutzbeauftragter in München gesucht? ✓ Zertifizierte DSGVO-Experten ✓ Digitale Beratung mit 24h Support ✓ Ab 29€/Monat ✓ Für Unternehmen in München & Umgebung"
        canonical="/externer-datenschutzbeauftragter-muenchen"
        structuredData={structuredData}
      />
      <Header />
      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-[#e24e1b] transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/externer-datenschutzbeauftragter"
              className="text-gray-600 hover:text-[#e24e1b] transition-colors"
            >
              Externer Datenschutzbeauftragter
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">München</span>
          </nav>
        </div>
      </section>


      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-sm rounded-full mb-8 border border-[#e24e1b]/20"
            >
              <MapPin className="h-5 w-5 text-[#e24e1b]" />
              <span className="text-sm font-semibold text-[#e24e1b]">Ihr Datenschutzbeauftragter in München</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Externer Datenschutzbeauftragter München
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              <span className="font-semibold text-[#232323]">Zertifizierte DSGVO-Expertise für Unternehmen in München.</span>
              <br />
              Flexible digitale Beratung. Ab 29€/Monat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm mb-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">24h Support-Reaktionszeit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">Digitale Beratung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">Monatlich kündbar</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold text-lg px-8 py-6"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Kostenlose Beratung München
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <Link to="/preise">
                  Preise ansehen
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">
              Ihr Datenschutzbeauftragter für München & Region
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Warum Unternehmen in München und Nürnberg, Ulm auf unsere Expertise vertrauen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {localBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3 w-fit mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#232323] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">
              Transparente Preise für Münchener Unternehmen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Keine versteckten Kosten. Keine regionalen Aufschläge. Fair und transparent.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <Badge className="bg-gradient-to-r from-gray-700 to-gray-800 text-white border-0 mb-4">
                    STARTER
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">
                    Kleine Unternehmen
                  </h3>
                  <p className="text-gray-600 mb-6">Bis 20 Mitarbeiter</p>
                  <div className="mb-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-[#232323] to-[#e24e1b] bg-clip-text text-transparent">
                      €29
                    </div>
                    <p className="text-gray-600">/Monat</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Datenschutz Software inklusive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Online Schulungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">E-Mail Support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Telefonische Beratung möglich</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white px-4 py-1 border-0 shadow-lg">
                  <Star className="h-4 w-4 mr-1" />
                  BELIEBT IN MÜNCHEN
                </Badge>
              </div>
              <Card className="h-full border-2 border-[#e24e1b] shadow-2xl scale-105">
                <CardContent className="p-8">
                  <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white border-0 mb-4">
                    PROFESSIONAL
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">
                    Mittlere Unternehmen
                  </h3>
                  <p className="text-gray-600 mb-6">Bis 50 Mitarbeiter</p>
                  <div className="mb-6">
                    <div className="text-5xl font-bold bg-gradient-to-r from-[#232323] to-[#e24e1b] bg-clip-text text-transparent">
                      €95
                    </div>
                    <p className="text-gray-600">/Monat</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Datenschutzsoftware Premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Persönliche Beratung digital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Beratungskontingent inklusive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Priority Support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <Badge className="bg-gradient-to-r from-blue-900 to-gray-900 text-white border-0 mb-4">
                    ENTERPRISE
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#232323] mb-2">
                    Große Unternehmen
                  </h3>
                  <p className="text-gray-600 mb-6">Ab 50 Mitarbeiter</p>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-[#232323]">
                      Individuell
                    </div>
                    <p className="text-gray-600">Maßgeschneidert</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Zertifizierte DSGVO Experten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Vollständiges DSMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Dedizierter Ansprechpartner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">Priority Support 24/7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold text-lg px-12 py-6"
              asChild
            >
              <Link to="/contact">
                Jetzt Angebot anfragen
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-gray-600">
              Kostenlose Erstberatung • Unverbindlich • Keine Anfahrtskosten
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="border-2 border-[#39B37B]/20 bg-gradient-to-br from-[#39B37B]/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#39B37B] to-[#2d9461] rounded-lg p-3">
                    <TrendingDown className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#232323] mb-2">Keine versteckten Kosten für München</h3>
                    <p className="text-gray-700">
                      Anders als viele regionale Anbieter berechnen wir <span className="font-bold text-[#39B37B]">keine Anfahrtspauschalen oder regionalen Aufschläge</span> für München und Umgebung.
                      Alle Preise gelten deutschlandweit - durch unsere digitale Beratung sparen Sie zusätzlich Zeit und Kosten.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">
              Typische Branchen in München, die wir betreuen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Spezialisierte DSGVO-Lösungen für die wichtigsten Wirtschaftszweige der Region
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Building2, title: 'IT & Software', desc: 'Softwareentwicklung, Cloud-Services, IT-Consulting' },
              { icon: Rocket, title: 'Finanzdienstleister', desc: 'Banken, Versicherungen, Fintech' },
              { icon: Users, title: 'Automotive', desc: 'Fahrzeugbau, Zulieferer, E-Mobilität' },
              { icon: Building2, title: 'Maschinenbau', desc: 'Produktionsanlagen, Automatisierung, Robotik' },
              { icon: CheckCircle2, title: 'Versicherungen', desc: 'Versicherungsverträge, Schadensabwicklung, Kundenservice' },
              { icon: Award, title: 'Medizintechnik', desc: 'Medizingeräte, Forschung, Diagnostik' }
            ].map((branch, index) => (
              <motion.div
                key={branch.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                {(() => {
                  const industryUrlMap: Record<string, string> = {
                    'Gesundheitswesen': '/branchen/gesundheitswesen',
                    'Finanzdienstleister': '/branchen/finanzdienstleister',
                    'Versicherungen': '/branchen/finanzdienstleister',
                    'Handel & E-Commerce': '/branchen/e-commerce',
                    'IT-Dienstleister': '/branchen/saas-unternehmen',
                    'IT & Software': '/branchen/saas-unternehmen',
                    'IT & Technologie': '/branchen/saas-unternehmen',
                    'IT & Start-ups': '/branchen/saas-unternehmen',
                    'IT & Telekommunikation': '/branchen/saas-unternehmen',
                    'IT & Fintech': '/branchen/saas-unternehmen',
                    'Produktionsbetriebe': '/branchen/produktion',
                    'Maschinenbau': '/branchen/produktion',
                    'Industrieproduktion': '/branchen/produktion',
                    'Automotive': '/branchen/automotive',
                    'Windenergie & Technik': '/branchen/energie',
                    'Energiewirtschaft': '/branchen/energie',
                    'Erneuerbare Energien': '/branchen/energie',
                    'Energie & Umwelt': '/branchen/energie',
                    'Logistik & Transport': '/branchen/logistik',
                    'Hafen & Logistik': '/branchen/logistik',
                    'Pharma & Biotechnologie': '/wissen/branchen/pharma-compliance',
                    'Chemie & Pharma': '/wissen/branchen/pharma-compliance'
                  };
                  const branchUrl = industryUrlMap[branch.title];

                  const cardContent = (
                    <Card className={`h-full border-2 ${branchUrl ? 'border-[#e24e1b]/30 hover:border-[#e24e1b] cursor-pointer hover:shadow-lg' : 'border-gray-200 hover:border-[#e24e1b]/50'} transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-xl p-3 w-fit mb-4">
                          <branch.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-[#232323] mb-2">
                          {branch.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {branch.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );

                  return branchUrl ? (
                    <Link to={branchUrl} className="block">
                      {cardContent}
                    </Link>
                  ) : cardContent;
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-4">
              Häufige Fragen von Unternehmen in München
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-base font-bold text-[#232323] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold"
              asChild
            >
              <Link to="/contact">
                Kostenlose Beratung für München anfragen
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#232323] mb-4">
              Auch verfügbar in Ihrer Nähe
            </h3>
            <p className="text-gray-600 mb-8">
              Externer Datenschutzbeauftragter auch in diesen Städten
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/externer-datenschutzbeauftragter-nuernberg"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-[#e24e1b] hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:text-[#e24e1b]"
              >
                Nürnberg
              </Link>
              <Link
                to="/externer-datenschutzbeauftragter-ulm"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-[#e24e1b] hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:text-[#e24e1b]"
              >
                Ulm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#e24e1b] via-[#ea580c] to-[#e24e1b]">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Bereit für DSGVO-Compliance in München?
            </h2>
            <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto">
              Starten Sie noch heute mit Ihrem externen Datenschutzbeauftragten in München. Ab 29€/Monat. Digitale Beratung mit 24h Support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#e24e1b] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-2xl"
                asChild
              >
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt Beratung München anfragen
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
                asChild
              >
                <Link to="/externer-datenschutzbeauftragter">
                  Mehr zum externen DSB
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-white/80 text-sm">
              ✓ Digitale Beratung · ✓ Monatlich kündbar · ✓ 24h Support-Reaktionszeit
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExternerDatenschutzbeauftragterMuenchen;
