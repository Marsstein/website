import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield, CheckCircle2, XCircle, AlertTriangle,
  Euro, Clock, Users, Award, Phone, FileText,
  TrendingUp, Target, Brain, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DatenschutzbeauftragterAuswahl = () => {
  const [selectedType, setSelectedType] = useState<'intern' | 'extern-freiberufler' | 'extern-kanzlei' | 'hybrid'>('hybrid');
  const [companySize, setCompanySize] = useState<number>(50);
  const [budget, setBudget] = useState<number>(500);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Datenschutzbeauftragter: Der ultimative Auswahlratgeber 2025",
    "description": "Interner DSB, externer Freiberufler, Kanzlei oder Hybrid-Lösung? Entscheidungshilfe mit Kostenvergleich und Checkliste für deutsche Unternehmen.",
    "author": {
      "@type": "Organization",
      "name": "MARSSTEIN"
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  const dsbTypes = [
    {
      id: 'intern',
      name: 'Interner DSB',
      subtitle: 'Festangestellter Mitarbeiter',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      kostenJahr: '80.000 - 100.000€',
      features: {
        essential: [
          { label: 'Verfügbarkeit', value: 'Vollzeit (8h/Tag)', rating: 5 },
          { label: 'Firmen-Know-how', value: 'Sehr hoch', rating: 5 },
          { label: 'Reaktionszeit', value: 'Sofort', rating: 5 },
          { label: 'Kündigungsschutz', value: 'Ja (§ 38 BDSG)', rating: 3 }
        ],
        kosten: [
          { label: 'Grundgehalt/Jahr', value: '65.000 - 75.000€' },
          { label: 'Arbeitgeberanteil', value: '+ 20% (13.000€)' },
          { label: 'Fortbildung/Jahr', value: '3.000 - 5.000€' },
          { label: 'Tools & Software', value: '2.000 - 5.000€' },
          { label: 'Büroausstattung', value: '1.000 - 2.000€' }
        ],
        vorteile: [
          'Ständige Verfügbarkeit im Unternehmen',
          'Tiefes Verständnis für interne Prozesse',
          'Direkte Ansprechpartner für Mitarbeiter',
          'Schnelle Entscheidungswege'
        ],
        nachteile: [
          'Hohe Fixkosten auch bei geringem Bedarf',
          'Kündigungsschutz erschwert Trennung',
          'Begrenzte Branchenexpertise',
          'Risiko der "Betriebsblindheit"',
          'Schwierig bei Urlaub/Krankheit'
        ],
        geeignetFuer: [
          '500+ Mitarbeiter',
          'Hochsensible Branchen (Gesundheit, Finanzen)',
          'Komplexe IT-Infrastruktur',
          'Viele Standorte mit Koordinationsbedarf'
        ]
      }
    },
    {
      id: 'extern-freiberufler',
      name: 'Externer DSB (Freiberufler)',
      subtitle: 'Einzelperson als Dienstleister',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      kostenJahr: '6.000 - 14.400€',
      features: {
        essential: [
          { label: 'Verfügbarkeit', value: 'Nach Vereinbarung', rating: 3 },
          { label: 'Firmen-Know-how', value: 'Mittel (aufbauend)', rating: 3 },
          { label: 'Reaktionszeit', value: '24-48 Stunden', rating: 3 },
          { label: 'Kündigungsschutz', value: 'Nein', rating: 5 }
        ],
        kosten: [
          { label: 'Monatspauschale', value: '500 - 1.200€' },
          { label: 'Setup-Gebühr (einmalig)', value: '1.000 - 3.000€' },
          { label: 'Zusatzleistungen', value: 'Nach Aufwand' },
          { label: 'Vertragstyp', value: 'Meist Dienstvertrag' }
        ],
        vorteile: [
          'Deutlich günstiger als interner DSB',
          'Flexibel kündbar (meist 3 Monate)',
          'Branchenübergreifende Erfahrung',
          'Keine Personalverwaltung nötig'
        ],
        nachteile: [
          'Begrenzte Verfügbarkeit (Mehrere Kunden)',
          'Längere Reaktionszeiten möglich',
          'Weniger tiefes Firmen-Know-how',
          'Abhängigkeit von einer Person',
          'Keine Haftungsübernahme üblich'
        ],
        geeignetFuer: [
          '20-200 Mitarbeiter',
          'Standard-Datenverarbeitung',
          'Begrenztes Budget',
          'Erste DSB-Erfahrung sammeln'
        ]
      }
    },
    {
      id: 'extern-kanzlei',
      name: 'Externer DSB (Kanzlei)',
      subtitle: 'Datenschutz-Kanzlei mit Team',
      icon: Shield,
      color: 'from-slate-600 to-slate-700',
      kostenJahr: '9.600 - 30.000€',
      features: {
        essential: [
          { label: 'Verfügbarkeit', value: 'Geschäftszeiten', rating: 4 },
          { label: 'Firmen-Know-how', value: 'Mittel-Hoch', rating: 4 },
          { label: 'Reaktionszeit', value: '4-24 Stunden', rating: 4 },
          { label: 'Kündigungsschutz', value: 'Nein', rating: 5 }
        ],
        kosten: [
          { label: 'Monatspauschale', value: '800 - 2.500€' },
          { label: 'Setup-Gebühr', value: '2.000 - 5.000€' },
          { label: 'Haftungsversicherung', value: 'Meist inkl.' },
          { label: 'Vertretungsregelung', value: 'Inkl.' }
        ],
        vorteile: [
          'Team-Backup bei Ausfall',
          'Breite Expertise durch Spezialisierungen',
          'Oft Haftungsübernahme (100k+)',
          'Professionelle Infrastruktur',
          'Juristische Absicherung'
        ],
        nachteile: [
          'Teurer als Freiberufler',
          'Weniger persönlicher Kontakt',
          'Oft an Software-Produkte gebunden',
          'Komplexere Vertragswerke'
        ],
        geeignetFuer: [
          '100-500 Mitarbeiter',
          'Höheres Haftungsrisiko',
          'Regulierte Branchen',
          'Internationale Datenflüsse'
        ]
      }
    },
    {
      id: 'hybrid',
      name: 'Hybrid-Lösung',
      subtitle: 'Software + Externer DSB',
      icon: Zap,
      color: 'from-[#e24e1b] to-[#ea580c]',
      kostenJahr: '2.388 - 5.388€',
      features: {
        essential: [
          { label: 'Verfügbarkeit', value: 'Software 24/7 + DSB-Hotline', rating: 5 },
          { label: 'Firmen-Know-how', value: 'System lernt mit', rating: 4 },
          { label: 'Reaktionszeit', value: 'Software sofort, DSB 4-24h', rating: 5 },
          { label: 'Kündigungsschutz', value: 'Nein (monatlich)', rating: 5 }
        ],
        kosten: [
          { label: 'Monatspauschale', value: '199 - 449€' },
          { label: 'Setup-Gebühr', value: 'Meist keine' },
          { label: 'Software inkl.', value: 'Ja' },
          { label: 'Haftung', value: '100k - 250k' }
        ],
        vorteile: [
          'Beste Kosten-Nutzen-Ratio',
          'Software automatisiert Routine-Aufgaben',
          'DSB für komplexe Fälle verfügbar',
          'Sofortiger Start ohne Setup-Phase',
          'Monatlich kündbar',
          'Compliance-Dashboard in Echtzeit',
          'Skalierbar mit Unternehmenswachstum'
        ],
        nachteile: [
          'Weniger persönlicher Kontakt als interner DSB',
          'Abhängigkeit von Software-Anbieter',
          'Bei sehr spezifischen Fällen ggf. begrenzt'
        ],
        geeignetFuer: [
          'Startups bis KMU (10-500 Mitarbeiter)',
          'Tech-affine Unternehmen',
          'Standard bis mittlere Komplexität',
          'Schneller Compliance-Aufbau'
        ]
      }
    }
  ];

  const selectedDsbType = dsbTypes.find(t => t.id === selectedType);

  const calculateRecommendation = () => {
    if (companySize >= 500) return 'intern';
    if (budget >= 800) return 'extern-kanzlei';
    if (budget >= 500) return 'extern-freiberufler';
    return 'hybrid';
  };

  const recommendation = calculateRecommendation();

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Datenschutzbeauftragter Auswahl: Interner vs. Externer DSB Vergleich 2025"
        description="Interner DSB, externer Freiberufler, Kanzlei oder Hybrid? Kostenvergleich, Entscheidungsbaum und Checkliste für die richtige DSB-Wahl."
        canonical="/ratgeber/datenschutzbeauftragter-auswahl"
        keywords="Datenschutzbeauftragter auswählen, DSB Vergleich, interner externer DSB, DSB Entscheidung, Datenschutz Berater"
        structuredData={structuredData}
      />
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#e24e1b] text-white">
              <Shield className="h-4 w-4 mr-2" />
              Kaufratgeber 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent">
              Datenschutzbeauftragter:<br />Der ultimative Auswahlratgeber
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interner Mitarbeiter, externer Freiberufler, Datenschutzkanzlei oder Hybrid-Lösung?
              Objektiver Vergleich mit Kosten, Vor-/Nachteilen und Entscheidungshilfe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2 border-[#e24e1b]/20 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-[#e24e1b]" />
                  Schnell-Empfehlung: Welcher DSB-Typ passt zu Ihnen?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Anzahl Mitarbeiter
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={companySize}
                      onChange={(e) => setCompanySize(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#e24e1b]"
                    />
                    <div className="text-center mt-2 text-2xl font-bold text-[#e24e1b]">
                      {companySize} Mitarbeiter
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Monatliches Budget
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="2500"
                      step="50"
                      value={budget}
                      onChange={(e) => setBudget(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#e24e1b]"
                    />
                    <div className="text-center mt-2 text-2xl font-bold text-[#e24e1b]">
                      {budget}€ / Monat
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#e24e1b]/20 to-[#ea580c]/20 rounded-lg p-6 border-2 border-[#e24e1b]">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="h-8 w-8 text-[#39B37B]" />
                    <div>
                      <div className="text-sm text-gray-600">Unsere Empfehlung basierend auf Ihren Angaben:</div>
                      <div className="text-2xl font-bold text-[#232323]">
                        {dsbTypes.find(t => t.id === recommendation)?.name}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {recommendation === 'intern' && 'Bei Ihrer Unternehmensgröße lohnt sich ein interner DSB. Lesen Sie unten die Details.'}
                    {recommendation === 'extern-kanzlei' && 'Ihr Budget ermöglicht eine professionelle Datenschutzkanzlei mit Team-Backup.'}
                    {recommendation === 'extern-freiberufler' && 'Ein externer DSB als Freiberufler bietet Ihnen Flexibilität zum guten Preis.'}
                    {recommendation === 'hybrid' && 'Eine Hybrid-Lösung (Software + DSB) bietet Ihnen das beste Preis-Leistungs-Verhältnis.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Die 4 DSB-Modelle im Detail</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {dsbTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id as any)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedType === type.id
                      ? 'bg-gradient-to-r ' + type.color + ' text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <type.icon className="inline h-5 w-5 mr-2" />
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {selectedDsbType && (
            <motion.div
              key={selectedType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <Card className="border-2 border-gray-200 shadow-xl">
                <CardHeader className={`bg-gradient-to-r ${selectedDsbType.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-3xl flex items-center gap-3">
                        <selectedDsbType.icon className="h-8 w-8" />
                        {selectedDsbType.name}
                      </CardTitle>
                      <p className="text-white/90 mt-2">{selectedDsbType.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-90">Kosten/Jahr</div>
                      <div className="text-2xl font-bold">{selectedDsbType.kostenJahr}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-[#39B37B]" />
                        Kernmerkmale
                      </h3>
                      <div className="space-y-3">
                        {selectedDsbType.features.essential.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium text-gray-700">{item.label}</span>
                            <span className="text-[#232323] font-semibold">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Euro className="h-6 w-6 text-[#e24e1b]" />
                        Kostenaufstellung
                      </h3>
                      <div className="space-y-2">
                        {selectedDsbType.features.kosten.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 border-b border-gray-200">
                            <span className="text-sm text-gray-600">{item.label}</span>
                            <span className="text-sm font-semibold text-[#232323]">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#39B37B]">
                        <CheckCircle2 className="h-6 w-6" />
                        Vorteile
                      </h3>
                      <ul className="space-y-2">
                        {selectedDsbType.features.vorteile.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-600">
                        <XCircle className="h-6 w-6" />
                        Nachteile
                      </h3>
                      <ul className="space-y-2">
                        {selectedDsbType.features.nachteile.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Target className="h-6 w-6 text-blue-600" />
                      Ideal geeignet für:
                    </h3>
                    <ul className="space-y-2">
                      {selectedDsbType.features.geeignetFuer.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <Card className="border-2 border-[#e24e1b] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Die MARSSTEIN Hybrid-Lösung: Das Beste aus allen Welten
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-[#e24e1b]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-10 w-10 text-[#e24e1b]" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">KI-Software 24/7</h4>
                    <p className="text-gray-600 text-sm">
                      Automatisiert 80% der Routine-Aufgaben. Sofortige Antworten auf Standard-Fragen.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#e24e1b]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-[#e24e1b]" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Zertifizierter DSB</h4>
                    <p className="text-gray-600 text-sm">
                      Für komplexe Fälle und behördliche Meldungen. Haftung bis 250k€.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#e24e1b]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Euro className="h-10 w-10 text-[#e24e1b]" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Ab 199€/Monat</h4>
                    <p className="text-gray-600 text-sm">
                      97% günstiger als interner DSB. Keine Setup-Gebühren.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-xl mb-4">Was Sie mit MARSSTEIN bekommen:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Alle DSGVO-Pflichtdokumente automatisch generiert',
                      'Live Compliance-Dashboard mit Score',
                      'Zertifizierter externer DSB offiziell benannt',
                      'DSB-Hotline während Geschäftszeiten (Professional) oder 24/7 (Enterprise)',
                      'Haftungsübernahme 100k-250k€',
                      'Automatische Dokumenten-Updates bei Gesetzesänderungen',
                      'Dark Web Monitoring & Security Scans',
                      'Monatlich kündbar, keine Bindung'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl px-8 py-6 text-lg"
                  >
                    <Link to="/externer-datenschutzbeauftragter">
                      <Shield className="h-5 w-5 mr-2" />
                      Jetzt DSB beauftragen
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-600 mt-3">
                    14 Tage kostenlos testen • Keine Kreditkarte nötig • In 3 Minuten startklar
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Häufig gestellte Fragen (FAQ)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Wann ist ein DSB gesetzlich verpflichtend?</h3>
                  <p className="text-gray-700">
                    Nach Art. 37 DSGVO und § 38 BDSG ist ein DSB Pflicht bei: (1) Regelmäßig mehr als 20 Personen mit automatisierter Datenverarbeitung beschäftigt,
                    (2) Kerntätigkeit in umfangreicher Verarbeitung besonderer Kategorien (z.B. Gesundheitsdaten),
                    (3) Datenschutz-Folgenabschätzung erforderlich.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Kann ein externer DSB mehrere Firmen betreuen?</h3>
                  <p className="text-gray-700">
                    Ja, das ist ausdrücklich erlaubt (Art. 37 Abs. 6 DSGVO). Ein externer DSB kann mehrere Unternehmen betreuen,
                    solange keine Interessenkonflikte bestehen und die Verfügbarkeit gewährleistet ist.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Welche Qualifikation muss ein DSB haben?</h3>
                  <p className="text-gray-700">
                    Nach Art. 37 Abs. 5 DSGVO muss der DSB "Fachwissen auf dem Gebiet des Datenschutzes" haben.
                    Empfohlen werden Zertifizierungen wie TÜV, GDDcert oder CIPP/E. Bei MARSSTEIN sind alle DSB entsprechend zertifiziert.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Was kostet es, keinen DSB zu haben (wenn Pflicht besteht)?</h3>
                  <p className="text-gray-700">
                    Das Fehlen eines verpflichtenden DSB kann mit Bußgeldern bis zu 10 Mio. € oder 2% des weltweiten Jahresumsatzes geahndet werden (Art. 83 Abs. 4 DSGVO).
                    Durchschnittliche Bußgelder liegen bei 10.000-50.000€.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatenschutzbeauftragterAuswahl;
