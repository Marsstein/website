import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, Shield, UserCheck, Award, Sparkles, Star,
  ChevronRight, Building2, Users, Zap, Brain, Target,
  TrendingUp, Lock, Globe, Rocket, CheckCircle2,
  HelpCircle, AlertTriangle, FileText, BookOpen, Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExternerDatenschutzbeauftragter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'small' | 'medium' | 'large'>('medium');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Externer Datenschutzbeauftragter",
    "description": "Zertifizierter externer Datenschutzbeauftragter ab 29€/Monat. Flexible Lösungen für kleine und große Unternehmen mit individueller Beratung vom Datenschutz-Experten.",
    "serviceType": "Datenschutzbeauftragter",
    "provider": {
      "@type": "Organization",
      "name": "MARSSTEIN",
      "url": "https://marsstein.ai",
      "logo": "https://marsstein.ai/logo.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Externer DSB für kleine Unternehmen",
        "description": "Für Unternehmen bis 20 Beschäftigte. Inklusive Datenschutz Software, Online Schulungen & Webinare.",
        "price": "29",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "29.00",
          "priceCurrency": "EUR",
          "unitText": "Monat"
        },
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "maxValue": 20,
          "unitText": "Mitarbeiter"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Externer DSB für mittlere Unternehmen",
        "description": "Für Unternehmen bis 50 Mitarbeiter. Inklusive Datenschutzsoftware Premium, Online Schulungen & persönliche Beratung.",
        "price": "95",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "95.00",
          "priceCurrency": "EUR",
          "unitText": "Monat"
        },
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "maxValue": 50,
          "unitText": "Mitarbeiter"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Externer DSB für große Unternehmen",
        "description": "Für Unternehmen ab 50 Beschäftigte. Individuelles Angebot mit zertifizierten DSGVO Experten.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        },
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    }
  };

  const packages = [
    {
      id: 'small',
      name: 'Externer DSB',
      subtitle: 'für kleine Unternehmen',
      price: '29',
      badge: 'STARTER',
      employees: 'Für Unternehmen bis 20 Beschäftigte',
      features: [
        'Datenschutz Software inklusive',
        'Online Schulungen & Webinare',
        'E-Mail Support',
        'Monatlich kündbar'
      ],
      color: 'from-[#474747] to-[#232323]',
      popular: false
    },
    {
      id: 'medium',
      name: 'Externer DSB',
      subtitle: 'für mittlere Unternehmen',
      price: '95',
      badge: 'PROFESSIONAL',
      employees: 'Für Unternehmen bis 50 Mitarbeiter',
      features: [
        'Datenschutzsoftware Premium',
        'Online Schulungen & persönliche Beratung',
        'Beratungskontingent inklusive',
        'Telefon & E-Mail Support'
      ],
      color: 'from-[#e24e1b] to-[#ea580c]',
      popular: true
    },
    {
      id: 'large',
      name: 'Externer DSB',
      subtitle: 'für mittlere - große Unternehmen',
      price: 'Individuell',
      badge: 'ENTERPRISE',
      employees: 'Für Unternehmen ab 50 Beschäftigte',
      features: [
        'Zertifizierte DSGVO Experten',
        'Vollständiges Datenschutzmanagementsystem',
        'Dedizierter Ansprechpartner',
        'Priority Support 24/7'
      ],
      color: 'from-[#003366] to-[#1F1F24]',
      popular: false
    }
  ];

  const advantages = [
    {
      icon: Brain,
      title: 'Kompetent & unabhängig',
      description: 'Aktuelle Gesetzeslage trifft auf jahrelange Praxiserfahrung. Wir agieren als freie, neutrale Instanz für Ihren Datenschutz - ohne Kompromisse, ohne Interessenskonflikte.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      title: 'Perfekt für KMU',
      description: 'Warum €3.000+/Monat für internen DSB ausgeben? Unsere Expertise kostet Sie einen Bruchteil - und Sie erhalten sogar mehr: Software, Schulungen, Updates inklusive.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Maßgeschneidert für Sie',
      description: 'Keine Standard-Lösungen von der Stange. Wir analysieren Ihre Prozesse, verstehen Ihre Branche und liefern Datenschutz, der zu Ihrem Business passt.',
      gradient: 'from-[#e24e1b] to-[#ea580c]'
    },
    {
      icon: Rocket,
      title: 'Fokus aufs Wesentliche',
      description: 'Während wir uns um DSGVO, Audits und Behörden kümmern, können Sie sich auf das konzentrieren, was wirklich zählt: Ihr Business wachsen lassen.',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <SEOHead
        title="Externer Datenschutzbeauftragter ab 29€ | MARSSTEIN"
        description="Zertifizierter externer Datenschutzbeauftragter ab 29€/Monat. Flexible Lösungen für kleine und große Unternehmen. ✓ Individuelle Beratung ✓ Zertifizierte Qualität"
        canonical="/externer-datenschutzbeauftragter"
        keywords="Externer Datenschutzbeauftragter, DSB, DSGVO, Datenschutzbeauftragter, externe Datenschutzberatung"
        structuredData={structuredData}
      />
      <Header />

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
              <Shield className="h-5 w-5 text-[#e24e1b] animate-pulse" />
              <span className="text-sm font-semibold text-[#e24e1b]">Flexible Lösungen für kleine und große Unternehmen</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Externer Datenschutzbeauftragter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              <span className="font-semibold text-[#232323]">Individuelle Beratung vom Datenschutz-Experten.</span>
              <br />
              Zertifizierte Qualität. Ab 29€/Monat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">Zertifizierte Datenschutz-Qualität</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">Monatlich kündbar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-gray-700">Sofort startklar</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-6">
              Warum Sie einen externen DSB brauchen
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Ein externer Datenschutzbeauftragter ist mehr als nur eine gesetzliche Pflicht - er ist Ihr strategischer Partner für rechtssichere Datenverarbeitung. Er agiert <span className="font-semibold text-[#232323]">unabhängig</span>, bewertet <span className="font-semibold text-[#232323]">objektiv</span> und schützt Sie vor teuren Compliance-Verstößen.
              </p>
              <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#e24e1b]/5 to-transparent">
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-[#232323]">Die Rolle:</span> Beratung der Geschäftsleitung, Überwachung der Datenschutzgrundsätze, Durchführung von Schulungen, Vermittlung bei Behördenanfragen.
                    <span className="block mt-4 font-semibold text-[#e24e1b]">Das Ziel: Datenschutz, der funktioniert - ohne Ihr Business auszubremsen.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-4">
              Ihre passende Datenschutz-Lösung
            </h2>
            <p className="text-lg text-gray-600">
              Von Startup bis Enterprise - wir haben das richtige Paket für Sie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white px-4 py-1 border-0 shadow-lg">
                      <Star className="h-4 w-4 mr-1 animate-pulse" />
                      BELIEBT
                    </Badge>
                  </div>
                )}

                <Card className={`relative h-full border-2 transition-all duration-500 overflow-hidden ${
                  pkg.popular
                    ? 'border-[#e24e1b] shadow-2xl scale-105'
                    : 'border-gray-200 hover:border-[#e24e1b]/50 hover:shadow-xl'
                }`}>
                  <CardContent className="p-8">
                    <Badge className={`bg-gradient-to-r ${pkg.color} text-white border-0 mb-4`}>
                      {pkg.badge}
                    </Badge>

                    <h3 className="text-2xl font-bold text-[#232323] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">{pkg.subtitle}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        {pkg.price === 'Individuell' ? (
                          <span className="text-3xl font-bold text-[#232323]">{pkg.price}</span>
                        ) : (
                          <>
                            <span className="text-5xl font-bold bg-gradient-to-r from-[#232323] to-[#e24e1b] bg-clip-text text-transparent">
                              €{pkg.price}
                            </span>
                            <span className="text-gray-600 ml-2 text-lg">/Monat</span>
                          </>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-600">{pkg.employees}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full font-semibold ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl'
                          : 'bg-white border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white'
                      }`}
                      asChild
                    >
                      <Link to="/preise">
                        Paket wählen
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-4">
              Vorteile externer Datenschutzbeauftragter
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              DSGVO wird immer komplexer. Ohne Expertise wird's teuer. Wir haben die Lösung. → <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-[#e24e1b] hover:text-[#ea580c] font-semibold underline">Mehr über Datenschutzbeauftragte erfahren</Link>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${advantage.gradient} rounded-xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                        <advantage.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#232323] mb-3">
                          {advantage.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-4">
              Ihre Datenschutzexperten von MARSSTEIN
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bei der Benennung Ihres externen Datenschutzbeauftragten werden Ihnen qualifizierte Datenschutzberater zur Seite gestellt. → <Link to="/wissen/leitfaden/datenschutzbeauftragter-ausbildung" className="text-[#e24e1b] hover:text-[#ea580c] font-semibold underline">DSB werden: Ausbildung & Karriere</Link>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] flex items-center justify-center text-white text-2xl font-bold">
                      JK
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#232323]">Jonas Krüger</h4>
                      <p className="text-sm text-gray-600">Datenschutzbeauftragter</p>
                    </div>
                  </div>

                  <div className="bg-[#e24e1b]/5 border-l-4 border-[#e24e1b] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic leading-relaxed">
                      "Datenschutz muss nicht kompliziert sein. Unser Ziel ist es, rechtssichere Lösungen zu schaffen, die Ihr Business voranbringen - nicht ausbremsen."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#003366] to-[#1F1F24] flex items-center justify-center text-white text-2xl font-bold">
                      JC
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#232323]">Jayson Chen</h4>
                      <p className="text-sm text-gray-600">Datenschutzbeauftragter</p>
                    </div>
                  </div>

                  <div className="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-r-lg">
                    <p className="text-gray-700 italic leading-relaxed">
                      "DSGVO-Compliance ist kein Nice-to-have - es ist Ihr Schutzschild gegen Bußgelder und Reputationsschäden. Wir machen Sie wasserdicht."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
              Bereit für professionellen Datenschutz?
            </h2>
            <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto">
              Starten Sie noch heute mit Ihrem externen Datenschutzbeauftragten. Ab 29€/Monat. Ohne Risiko. Ohne Kompromisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#e24e1b] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300"
                asChild
              >
                <Link to="/preise">
                  <Rocket className="mr-2 h-5 w-5" />
                  Jetzt Paket wählen
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
                asChild
              >
                <Link to="/contact">
                  Kostenlose Beratung anfragen
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-white/80 text-sm">
              ✓ Keine Einrichtungsgebühr · ✓ Monatlich kündbar · ✓ Sofort startklar
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#232323] mb-4">
              Wichtige Informationen zum externen Datenschutzbeauftragten
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Alles, was Sie über die Bestellung eines externen DSB wissen müssen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-lg p-3">
                      <HelpCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323]">
                      Wer braucht einen externen Datenschutzbeauftragten?
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-[#232323]">Vereinfacht:</span> Jedes Unternehmen in Deutschland mit <span className="font-semibold text-[#e24e1b]">20+ Mitarbeitern</span>, die Zugriff auf personenbezogene Daten haben, benötigt nach EU-DSGVO einen DSB.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Aber: Die Mitarbeiterzahl ist nicht das einzige Kriterium. Auch beim Umgang mit <span className="font-semibold text-[#232323]">sensiblen Kundendaten</span> (z.B. Gesundheitsdaten) wird ein DSB vorgeschrieben - unabhängig von der Unternehmensgröße.
                  </p>
                  <Link
                    to="/wissen/leitfaden/datenschutzbeauftragter#wer-braucht"
                    className="inline-flex items-center gap-2 text-[#e24e1b] hover:text-[#ea580c] font-semibold group"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="underline">Detaillierte Benennungspflicht-Kriterien</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-3">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323]">
                      Was ist wichtig unter der EU-DSGVO?
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Datenschutzrichtlinie erstellen',
                      'Verzeichnis der Verarbeitungstätigkeiten (VVT)',
                      'Auftragsverarbeitungsverträge (AVV) mit Dienstleistern',
                      'IT-Sicherheits-Mindeststandards einhalten',
                      'Mitarbeiter-Schulungen durchführen'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-lg p-3">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#232323]">
                    7 gute Gründe für einen externen Datenschutzbeauftragten
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Reputationsschutz',
                      desc: 'Vermeiden Sie negative Presse und Kundenvertrauensverlust durch Datenschutzskandale.'
                    },
                    {
                      title: 'Behörden-Sicherheit',
                      desc: 'Bei Anfragen der Aufsichtsbehörde punkten Sie sofort mit benanntem DSB.'
                    },
                    {
                      title: 'Bußgeld-Vermeidung',
                      desc: 'Kein DSB = Bußgeld gegen Geschäftsleitung UND Unternehmen. Kann teuer werden.'
                    },
                    {
                      title: 'ISO-Zertifizierung',
                      desc: 'ISO-Audits prüfen regelmäßig, ob Sie einen DSB bestellt haben.'
                    },
                    {
                      title: 'Vertragsanforderungen',
                      desc: 'Partner, Lieferanten & Kunden fordern häufig Nennung des DSB in Verträgen.'
                    },
                    {
                      title: 'Kein Kündigungsschutz',
                      desc: 'Externer DSB = reguläre Kündigung möglich. Interner DSB = besonderer Kündigungsschutz.'
                    },
                    {
                      title: 'Klare Haftung',
                      desc: 'Externer DSB haftet bei Pflichtverletzungen - nicht Ihr interner Mitarbeiter.'
                    }
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-[#e24e1b]/10 rounded-lg p-2 mt-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] flex items-center justify-center text-white text-sm font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#232323] mb-1">{reason.title}</h4>
                        <p className="text-sm text-gray-600">{reason.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323]">
                      Aufgaben des externen DSB
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ein externer Datenschutzbeauftragter wird konsultiert bei:
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      'Einführung kritischer IT-Systeme',
                      'Datenverlust durch Cyberangriffe',
                      'Mitarbeiter-Schulungen zur DSGVO',
                      'Allgemeine Datenschutz-Anfragen',
                      'Strukturierung von Datenschutzthemen'
                    ].map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/wissen/leitfaden/datenschutzbeauftragter#aufgaben"
                    className="inline-flex items-center gap-2 text-[#e24e1b] hover:text-[#ea580c] font-semibold text-sm group"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span className="underline">Vollständige Aufgabenliste ansehen</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-3">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323]">
                      Interessenskonflikte vermeiden
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-[#232323]">Problem bei internem DSB:</span> Ein IT-Manager als DSB? Konflikt zwischen Datenschutz und IT-Effizienz programmiert.
                  </p>
                  <div className="bg-[#e24e1b]/5 border-l-4 border-[#e24e1b] p-4 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#232323]">Lösung:</span> Externer DSB agiert unparteiisch, hat keine beruflichen Abhängigkeiten und meldet Verstöße ohne Angst vor internen Konsequenzen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExternerDatenschutzbeauftragter;
