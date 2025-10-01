import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  UserCheck,
  Euro,
  Clock,
  Building2,
  AlertCircle,
  CheckCircle2,
  TrendingDown,
  Shield,
  Calculator,
  ArrowRight,
  Briefcase,
  Award,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

const ExternerDsbKosten: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('freelancer');

  const pricingModels = {
    freelancer: {
      label: 'Freiberuflicher DSB',
      monthlyRange: '400 - 1.200€',
      annualRange: '4.800 - 14.400€',
      setupFee: '1.000 - 3.000€',
      hourlyRate: '80 - 150€',
      included: [
        'Monatliche Sprechstunde (2-4h)',
        'E-Mail & Telefon-Support',
        'Jährliches Compliance-Audit',
        'Behördenkontakt bei Bedarf',
        'Basis-Dokumentation'
      ],
      notIncluded: [
        'Dokumentenerstellung',
        'Mitarbeiterschulungen',
        'DSFA-Durchführung',
        '24/7 Notfall-Support'
      ],
      bestFor: '1-20 Mitarbeiter, geringe Verarbeitungskomplexität',
      color: 'from-blue-500 to-indigo-500'
    },
    agency: {
      label: 'Datenschutz-Kanzlei',
      monthlyRange: '800 - 2.500€',
      annualRange: '9.600 - 30.000€',
      setupFee: '3.000 - 8.000€',
      hourlyRate: '120 - 250€',
      included: [
        'Dedizierter Ansprechpartner',
        'Unlimitierter E-Mail-Support',
        'Quartalsweise Audits',
        'Behördenvertretung',
        'Umfangreiche Dokumentation',
        'Jährliche Schulungen',
        'Juristische Absicherung'
      ],
      notIncluded: [
        'Individuelle Software-Entwicklung',
        'Vor-Ort Präsenz (meist Aufpreis)'
      ],
      bestFor: '20-200 Mitarbeiter, mittlere bis hohe Komplexität',
      color: 'from-purple-500 to-pink-500'
    },
    hybrid: {
      label: 'Hybrid-Lösung (wie MARSSTEIN)',
      monthlyRange: '299 - 899€',
      annualRange: '3.588 - 10.788€',
      setupFee: '0 - 1.500€',
      hourlyRate: 'Inklusive im Paket',
      included: [
        'Software-Plattform inklusive',
        'Zertifizierter DSB als Ansprechpartner',
        'Automatisierte Dokumentation',
        'Compliance-Monitoring 24/7',
        'Templates & Vorlagen',
        'E-Learning für Mitarbeiter',
        'Quartalsweise Reviews',
        'Behördenvertretung'
      ],
      notIncluded: [
        'Wöchentliche Vor-Ort Präsenz',
        'Individuelle Softwareentwicklung'
      ],
      bestFor: 'Alle Unternehmensgrößen, die Effizienz & Expertise kombinieren wollen',
      color: 'from-green-500 to-teal-500'
    }
  };

  const costFactors = [
    {
      factor: 'Unternehmensgröße',
      impact: 'Hoch',
      description: 'Mehr Mitarbeiter = mehr Schulungsaufwand, mehr Prozesse zu dokumentieren',
      range: '+20-50% pro 50 Mitarbeiter',
      icon: Users,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      factor: 'Branche & Datenvolumen',
      impact: 'Sehr hoch',
      description: 'Gesundheit, Finanz oder Versicherung erfordern spezialisierte DSB-Expertise',
      range: '+30-100% bei sensiblen Daten',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      factor: 'Verarbeitungskomplexität',
      impact: 'Hoch',
      description: 'Viele Tools, internationale Datenflüsse, KI-Systeme erhöhen Aufwand',
      range: '+25-80% bei hoher Komplexität',
      icon: Building2,
      color: 'from-orange-500 to-red-500'
    },
    {
      factor: 'Standort des DSB',
      impact: 'Mittel',
      description: 'Großstadt-DSB verlangen höhere Stundensätze als ländliche Regionen',
      range: '±15-30% je nach Region',
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      factor: 'Zertifizierungen',
      impact: 'Mittel',
      description: 'TÜV-zertifizierte DSB oder Fachanwälte kosten mehr, bieten aber mehr Sicherheit',
      range: '+20-40% für Spezialisten',
      icon: Award,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const hiddenCosts = [
    {
      item: 'Zusätzliche Beratungsstunden',
      cost: '1.200 - 6.000€/Jahr',
      description: 'Über das monatliche Kontingent hinaus'
    },
    {
      item: 'DSFA-Durchführung',
      cost: '800 - 3.000€ pro DSFA',
      description: 'Bei Hochrisiko-Verarbeitungen (meist extra)'
    },
    {
      item: 'Vor-Ort Termine',
      cost: '500 - 1.500€ pro Tag',
      description: 'Reisekosten & Tagessatz für physische Präsenz'
    },
    {
      item: 'Notfall-Support außerhalb Bürozeiten',
      cost: '150 - 300€/Stunde',
      description: 'Bei Data Breaches am Wochenende'
    },
    {
      item: 'Dokumentenerstellung',
      cost: '500 - 2.500€ pro Dokument',
      description: 'AVV, Datenschutzerklärungen, Richtlinien'
    },
    {
      item: 'Software-Tools separat',
      cost: '100 - 500€/Monat',
      description: 'Viele DSB verlangen separate Tool-Lizenzen'
    }
  ];

  const comparison = [
    {
      aspect: 'Jahreskosten (50 MA)',
      freelancer: '8.000 - 14.000€',
      agency: '15.000 - 30.000€',
      hybrid: '5.000 - 11.000€'
    },
    {
      aspect: 'Setup-Dauer',
      freelancer: '2-4 Wochen',
      agency: '4-8 Wochen',
      hybrid: '1-2 Wochen'
    },
    {
      aspect: 'Verfügbarkeit',
      freelancer: 'Bürozeiten',
      agency: 'Erweitert',
      hybrid: '24/7 (Software)'
    },
    {
      aspect: 'Skalierbarkeit',
      freelancer: 'Begrenzt',
      agency: 'Gut',
      hybrid: 'Exzellent'
    },
    {
      aspect: 'Software inklusive',
      freelancer: 'Nein',
      agency: 'Selten',
      hybrid: 'Ja'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead
        title="Externer Datenschutzbeauftragter Kosten 2025 - Preise & Vergleich"
        description="Externer DSB Kosten: 400-2.500€/Monat (4.800-30.000€/Jahr) je nach Modell. Freelancer vs. Kanzlei vs. Hybrid-Lösung im Detail verglichen."
        canonical="/wissen/kosten/externer-datenschutzbeauftragter-kosten"
        keywords="Externer DSB Kosten, Datenschutzbeauftragter Preis, DSB monatlich, externer Datenschutz Kosten, DSB Stundensatz"
      />
      <Header />

      <div className="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen">Wissen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Externer DSB Kosten</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <UserCheck className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">DSB Kosten 2025</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">Externer DSB:</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Was kostet das?
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Vollständiger Preisvergleich: Freelancer, Kanzlei oder Hybrid-Lösung - mit allen versteckten Kosten.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Wählen Sie ein Modell:</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {Object.entries(pricingModels).map(([key, model]) => (
                <button
                  key={key}
                  onClick={() => setSelectedModel(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedModel === key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                      : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                  }`}
                >
                  <div className="text-lg">{model.label}</div>
                  <div className="text-xs opacity-80">{model.monthlyRange}/Monat</div>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="border-2 border-purple-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${pricingModels[selectedModel as keyof typeof pricingModels].color} rounded-xl`}>
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white">{pricingModels[selectedModel as keyof typeof pricingModels].label}</h2>
                    <p className="text-slate-400">Detaillierte Kostenaufschlüsselung</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <div className="text-sm text-slate-400 mb-2">Monatlich</div>
                    <div className="text-2xl font-black text-white">{pricingModels[selectedModel as keyof typeof pricingModels].monthlyRange}</div>
                  </div>
                  <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <div className="text-sm text-slate-400 mb-2">Jährlich</div>
                    <div className="text-2xl font-black text-purple-400">{pricingModels[selectedModel as keyof typeof pricingModels].annualRange}</div>
                  </div>
                  <div className="p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <div className="text-sm text-slate-400 mb-2">Setup-Gebühr</div>
                    <div className="text-2xl font-black text-white">{pricingModels[selectedModel as keyof typeof pricingModels].setupFee}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                      Im Preis enthalten
                    </h4>
                    <ul className="space-y-3">
                      {pricingModels[selectedModel as keyof typeof pricingModels].included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-orange-400" />
                      Meist nicht enthalten
                    </h4>
                    <ul className="space-y-3">
                      {pricingModels[selectedModel as keyof typeof pricingModels].notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-400">
                          <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Optimal für:</h4>
                      <p className="text-slate-300">{pricingModels[selectedModel as keyof typeof pricingModels].bestFor}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              <TrendingDown className="inline-block mr-3 text-blue-400" />
              5 Faktoren, die den Preis beeinflussen
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Diese Variablen bestimmen die Kosten Ihres externen DSB:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {costFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${factor.color} rounded-xl flex-shrink-0`}>
                          <factor.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-white">{factor.factor}</h4>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                              {factor.impact}
                            </Badge>
                          </div>
                          <p className="text-slate-300 text-sm mb-3">{factor.description}</p>
                          <div className="text-purple-400 font-bold text-sm">{factor.range}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              <AlertCircle className="inline-block mr-3 text-orange-400" />
              Versteckte Zusatzkosten
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Diese Kosten kommen oft überraschend und können 30-50% aufschlagen:
            </p>

            <div className="space-y-4">
              {hiddenCosts.map((cost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-grow">
                          <h4 className="text-lg font-bold text-white mb-1">{cost.item}</h4>
                          <p className="text-slate-400 text-sm">{cost.description}</p>
                        </div>
                        <div className="text-orange-400 font-black text-xl flex-shrink-0">{cost.cost}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8">Direktvergleich der Modelle</h2>

            <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left p-4 text-slate-300 font-semibold">Aspekt</th>
                        <th className="text-left p-4 text-blue-300 font-semibold">Freelancer</th>
                        <th className="text-left p-4 text-purple-300 font-semibold">Kanzlei</th>
                        <th className="text-left p-4 text-green-300 font-semibold">Hybrid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, index) => (
                        <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                          <td className="p-4 text-white font-semibold">{row.aspect}</td>
                          <td className="p-4 text-slate-300">{row.freelancer}</td>
                          <td className="p-4 text-slate-300">{row.agency}</td>
                          <td className="p-4 text-slate-300">{row.hybrid}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-slate-800/60 to-purple-900/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <Calculator className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-4">
                  Finden Sie Ihr optimales DSB-Modell
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Nutzen Sie unseren interaktiven Auswahlratgeber und vergleichen Sie alle Optionen basierend auf Ihrer Situation.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold" asChild>
                  <Link to="/ratgeber/datenschutzbeauftragter-auswahl">
                    <UserCheck className="mr-2 h-5 w-5" />
                    Zum DSB-Auswahlratgeber
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ExternerDsbKosten;
