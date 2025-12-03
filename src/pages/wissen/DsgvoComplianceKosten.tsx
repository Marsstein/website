import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Calculator,
  Euro,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  Building2,
  FileText,
  Target,
  Zap,
  ArrowRight,
  Sparkles,
  Rocket,
  HelpCircle,
  ChevronDown
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

const DsgvoComplianceKosten: React.FC = () => {
  const [selectedCompanySize, setSelectedCompanySize] = useState<string>('medium');

  const costBreakdown = {
    small: {
      label: '1-10 Mitarbeiter',
      initial: {
        dsb: { min: 3000, max: 8000, label: 'Externer DSB (Setup)' },
        documentation: { min: 2000, max: 5000, label: 'Dokumentation & VVT' },
        tom: { min: 1500, max: 3000, label: 'TOM Implementation' },
        training: { min: 500, max: 1500, label: 'Mitarbeiterschulung' },
        tools: { min: 1000, max: 2500, label: 'Software & Tools' }
      },
      annual: {
        dsb: { min: 2400, max: 6000, label: 'Externer DSB (jährlich)' },
        maintenance: { min: 1000, max: 2000, label: 'Pflege & Updates' },
        training: { min: 500, max: 1000, label: 'Jährliche Schulungen' },
        tools: { min: 1200, max: 3000, label: 'Software-Lizenzen' }
      }
    },
    medium: {
      label: '11-50 Mitarbeiter',
      initial: {
        dsb: { min: 8000, max: 15000, label: 'Externer DSB (Setup)' },
        documentation: { min: 5000, max: 10000, label: 'Dokumentation & VVT' },
        tom: { min: 3000, max: 8000, label: 'TOM Implementation' },
        training: { min: 1500, max: 3000, label: 'Mitarbeiterschulung' },
        tools: { min: 2500, max: 5000, label: 'Software & Tools' },
        consulting: { min: 3000, max: 7000, label: 'Beratung & Gap-Analyse' }
      },
      annual: {
        dsb: { min: 6000, max: 12000, label: 'Externer DSB (jährlich)' },
        maintenance: { min: 2000, max: 5000, label: 'Pflege & Updates' },
        training: { min: 1000, max: 2500, label: 'Jährliche Schulungen' },
        tools: { min: 3000, max: 6000, label: 'Software-Lizenzen' },
        audits: { min: 2000, max: 5000, label: 'Compliance Audits' }
      }
    },
    large: {
      label: '50+ Mitarbeiter',
      initial: {
        dsb: { min: 40000, max: 80000, label: 'Interner DSB (Gehalt Jahr 1)' },
        documentation: { min: 10000, max: 20000, label: 'Dokumentation & VVT' },
        tom: { min: 8000, max: 20000, label: 'TOM Implementation' },
        training: { min: 3000, max: 8000, label: 'Mitarbeiterschulung' },
        tools: { min: 5000, max: 15000, label: 'Enterprise Software' },
        consulting: { min: 10000, max: 25000, label: 'Externe Beratung' }
      },
      annual: {
        dsb: { min: 50000, max: 90000, label: 'Interner DSB (Jahresgehalt)' },
        maintenance: { min: 5000, max: 15000, label: 'Pflege & Updates' },
        training: { min: 3000, max: 8000, label: 'Jährliche Schulungen' },
        tools: { min: 6000, max: 18000, label: 'Software-Lizenzen' },
        audits: { min: 5000, max: 15000, label: 'Compliance Audits' },
        legal: { min: 5000, max: 20000, label: 'Rechtliche Prüfungen' }
      }
    }
  };

  const hiddenCosts = [
    {
      title: 'Opportunitätskosten',
      description: 'Zeit, die Geschäftsführung und Mitarbeiter für DSGVO aufwenden statt für Kerngeschäft',
      impact: 'Hoch',
      annualCost: '5.000 - 25.000€',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Dokumentationspflege',
      description: 'Kontinuierliche Aktualisierung bei jedem Prozess- oder Tool-Wechsel',
      impact: 'Mittel',
      annualCost: '2.000 - 8.000€',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Anfragen-Management',
      description: 'Bearbeitung von Auskunfts-, Lösch- und Widerspruchsanfragen',
      impact: 'Variabel',
      annualCost: '1.000 - 10.000€',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Vendor Management',
      description: 'AVV-Prüfung, Überwachung und Dokumentation aller Auftragsverarbeiter',
      impact: 'Mittel',
      annualCost: '1.500 - 6.000€',
      icon: Building2,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const savingStrategies = [
    {
      strategy: 'KI-gestützte Compliance-Software',
      saving: 'Bis zu 70% weniger Kosten',
      description: 'Automatisierte Dokumentation, intelligente Prozesse und KI-Assistenz für DSBs',
      difficulty: 'Sehr einfach',
      isMarsstein: true
    },
    {
      strategy: 'Hybrid-Modell statt interner DSB',
      saving: '30.000 - 60.000€/Jahr',
      description: 'Externer DSB mit internem Koordinator kombinieren statt Vollzeit-DSB',
      difficulty: 'Einfach',
      isMarsstein: false
    },
    {
      strategy: 'Standard-Templates nutzen',
      saving: '5.000 - 15.000€ einmalig',
      description: 'Bewährte Vorlagen statt alles von Grund auf neu zu erstellen',
      difficulty: 'Sehr einfach',
      isMarsstein: false
    },
    {
      strategy: 'Schulungen digital statt Präsenz',
      saving: '2.000 - 8.000€/Jahr',
      description: 'E-Learning-Plattformen statt teurer Präsenzschulungen',
      difficulty: 'Einfach',
      isMarsstein: false
    }
  ];

  const calculateTotal = (category: 'initial' | 'annual') => {
    const costs = costBreakdown[selectedCompanySize as keyof typeof costBreakdown][category];
    const min = Object.values(costs).reduce((sum, item) => sum + item.min, 0);
    const max = Object.values(costs).reduce((sum, item) => sum + item.max, 0);
    return { min, max };
  };

  const companySizes = [
    { id: 'small', label: '1-10 MA', employees: '1-10' },
    { id: 'medium', label: '11-50 MA', employees: '11-50' },
    { id: 'large', label: '50+ MA', employees: '50+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead
        title="DSGVO-Compliance Kosten 2025: Software vs. DSB - Vollständiger Kostenvergleich"
        description="DSGVO-Kosten im Vergleich: Compliance-Software (ab 200€/Monat) vs. ext. DSB (2.400-90.000€/Jahr). Inkl. ROPA, DSFA & Betroffenenanfragen-Module."
        canonical="/wissen/kosten/dsgvo-compliance-kosten"
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
              <BreadcrumbPage>DSGVO Compliance Kosten</BreadcrumbPage>
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Euro className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Kostenübersicht</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">Was kostet</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                DSGVO-Compliance?
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transparente Übersicht aller <Link to="/dsgvo" className="text-blue-400 hover:text-blue-300 underline font-semibold">DSGVO-Compliance</Link> Kosten - von Initial-Setup über laufende Ausgaben bis zu versteckten Kostenfallen.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 backdrop-blur-sm border-2 border-orange-500/40 rounded-2xl px-8 py-6 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-orange-400" />
                <span className="font-bold text-orange-300 text-lg">Hinweis: Mit unserer Software sparen Sie bis zu 70% dieser Kosten</span>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 font-bold shadow-lg whitespace-nowrap"
                asChild
              >
                <Link to="/dsgvo-compliance-software">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Wählen Sie Ihre Unternehmensgröße:</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {companySizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedCompanySize(size.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCompanySize === size.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                      : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                  }`}
                >
                  <div className="text-lg">{size.label}</div>
                  <div className="text-xs opacity-80">{size.employees} Mitarbeiter</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-blue-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Initial-Setup</h3>
                    <p className="text-sm text-slate-400">Einmalige Kosten im ersten Jahr</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {Object.entries(costBreakdown[selectedCompanySize as keyof typeof costBreakdown].initial).map(([key, item]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-white font-semibold">{item.min.toLocaleString()}€ - {item.max.toLocaleString()}€</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Gesamt (Initial)</span>
                    <span className="text-2xl font-black text-blue-400">
                      {calculateTotal('initial').min.toLocaleString()}€ - {calculateTotal('initial').max.toLocaleString()}€
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Laufende Kosten</h3>
                    <p className="text-sm text-slate-400">Jährliche Kosten ab Jahr 2</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {Object.entries(costBreakdown[selectedCompanySize as keyof typeof costBreakdown].annual).map(([key, item]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-white font-semibold">{item.min.toLocaleString()}€ - {item.max.toLocaleString()}€</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">Gesamt (Jährlich)</span>
                    <span className="text-2xl font-black text-purple-400">
                      {calculateTotal('annual').min.toLocaleString()}€ - {calculateTotal('annual').max.toLocaleString()}€
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              <AlertTriangle className="inline-block mr-3 text-orange-400" />
              Versteckte Kosten
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Diese Kosten werden oft übersehen, machen aber 20-40% der Gesamtkosten aus:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {hiddenCosts.map((cost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${cost.color} rounded-xl`}>
                          <cost.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-white">{cost.title}</h4>
                            <Badge variant="outline" className="border-orange-500/50 text-orange-300">
                              {cost.impact}
                            </Badge>
                          </div>
                          <p className="text-slate-300 text-sm mb-3">{cost.description}</p>
                          <div className="text-orange-400 font-bold">{cost.annualCost}</div>
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
              <Target className="inline-block mr-3 text-green-400" />
              4 Wege, Kosten drastisch zu senken
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              So sparen Sie bis zu 70% der DSGVO-Kosten ohne Compliance-Risiko:
            </p>

            <div className="space-y-4">
              {savingStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className={`border ${strategy.isMarsstein ? 'border-2 border-blue-500/50 bg-gradient-to-r from-blue-900/40 to-indigo-900/40' : 'border-slate-700/50 bg-slate-800/40'} backdrop-blur-sm hover:border-green-500/50 transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-grow">
                          <div className={`p-2 ${strategy.isMarsstein ? 'bg-blue-500/20' : 'bg-green-500/20'} rounded-lg`}>
                            {strategy.isMarsstein ? (
                              <Sparkles className="h-6 w-6 text-blue-400" />
                            ) : (
                              <CheckCircle2 className="h-6 w-6 text-green-400" />
                            )}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-lg font-bold text-white">{strategy.strategy}</h4>
                              {strategy.isMarsstein && (
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 text-xs">
                                  Empfohlen
                                </Badge>
                              )}
                            </div>
                            <p className="text-slate-300 text-sm">{strategy.description}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className={`${strategy.isMarsstein ? 'text-blue-400' : 'text-green-400'} font-black text-xl mb-1`}>{strategy.saving}</div>
                          <Badge variant="outline" className="border-green-500/50 text-green-300 text-xs">
                            {strategy.difficulty}
                          </Badge>
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
            <h2 className="text-4xl font-black text-white mb-6">
              <Calculator className="inline-block mr-3 text-blue-400" />
              Was kostet DSGVO-Compliance-Software?
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Moderne <Link to="/dsgvo-compliance-software" className="text-blue-400 hover:text-blue-300 underline font-semibold">DSGVO-Compliance-Software mit ROPA-, DSFA- und Betroffenenanfragen-Modulen</Link> kostet zwischen <strong className="text-blue-400">200€ und 2.000€ pro Monat</strong>, abhängig von Unternehmensgröße und Funktionsumfang. Für große Unternehmen mit Multi-Entity-Support können die Kosten auf 3.000-5.000€/Monat steigen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-400" />
                      KMU (1-50 Mitarbeiter)
                    </h3>
                    <div className="space-y-3 text-slate-300">
                      <div className="flex justify-between">
                        <span>Basis-Software (ROPA/VVT)</span>
                        <span className="text-white font-semibold">200-500€/Monat</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+ DSFA-Modul</span>
                        <span className="text-white font-semibold">+100-200€/Monat</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+ Betroffenenanfragen-Tool</span>
                        <span className="text-white font-semibold">+50-150€/Monat</span>
                      </div>
                      <div className="pt-3 border-t border-slate-700 flex justify-between">
                        <span className="font-bold text-white">Gesamt</span>
                        <span className="text-blue-400 font-black">350-850€/Monat</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-purple-400" />
                      Große Unternehmen (50+ MA)
                    </h3>
                    <div className="space-y-3 text-slate-300">
                      <div className="flex justify-between">
                        <span>Enterprise-Software (alle Module)</span>
                        <span className="text-white font-semibold">1.500-3.000€/Monat</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+ Multi-Entity-Support</span>
                        <span className="text-white font-semibold">+500-1.000€/Monat</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+ KI-VO-Compliance (EU AI Act)</span>
                        <span className="text-white font-semibold">+300-1.000€/Monat</span>
                      </div>
                      <div className="pt-3 border-t border-slate-700 flex justify-between">
                        <span className="font-bold text-white">Gesamt</span>
                        <span className="text-purple-400 font-black">2.300-5.000€/Monat</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed">
                <strong className="text-white">Kostenvergleich:</strong> Ein <Link to="/wissen/datenschutzbeauftragter-kosten" className="text-blue-400 hover:text-blue-300 underline">externer Datenschutzbeauftragter</Link> kostet 2.400-12.000€/Jahr für kleine Unternehmen und 50.000-90.000€/Jahr als interner DSB bei großen Unternehmen. DSGVO-Compliance-Lösungen sind oft günstiger und bieten 24/7 Verfügbarkeit, automatische Updates bei Gesetzesänderungen und vollständige Dokumentation aller Prozesse. Nutzen Sie unseren <Link to="/assessment-center/dsgvo-kosten-rechner" className="text-blue-400 hover:text-blue-300 underline">DSGVO-Kostenrechner</Link> für eine individuelle Kalkulation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="border-2 border-orange-500/30 bg-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
              <CardContent className="p-12 relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-bold">Smarte Lösung</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Die günstigere Alternative: KI-gestützte Compliance
                </h3>

                <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                  Statt <span className="text-orange-600 font-bold">10.000 - 46.000€ Initial-Kosten</span> und{' '}
                  <span className="text-orange-600 font-bold">5.000 - 38.000€ jährlich</span>:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                    <Zap className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-4xl font-black text-orange-600 mb-2">70%</div>
                    <div className="text-gray-700 font-semibold text-sm">weniger Kosten</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-4xl font-black text-orange-600 mb-2">24h</div>
                    <div className="text-gray-700 font-semibold text-sm">Setup-Zeit</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                    <CheckCircle2 className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-4xl font-black text-orange-600 mb-2">100%</div>
                    <div className="text-gray-700 font-semibold text-sm">DSGVO-konform</div>
                  </div>
                </div>

                <p className="text-gray-600 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                  Unsere KI-gestützte Software automatisiert 80% der Routine-Arbeit: VVT-Erstellung, TOM-Dokumentation,
                  automatische Updates bei Gesetzesänderungen. DSBs sparen Zeit, Unternehmen sparen Geld.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-bold shadow-xl"
                    asChild
                  >
                    <Link to="/dsgvo-compliance-software">
                      <Rocket className="mr-2 h-5 w-5" />
                      Compliance-Software kostenlos testen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-orange-500 bg-white hover:bg-orange-50 text-orange-600 px-8 py-6 text-lg font-semibold"
                    asChild
                  >
                    <Link to="/assessment-center/dsgvo-kosten-rechner">
                      <Calculator className="mr-2 h-5 w-5" />
                      Kostenrechner
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Keine Kreditkarte
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Early Bird Preis
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Jederzeit kündbar
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-4xl font-black text-white mb-4 text-center">
              <HelpCircle className="inline-block mr-3 text-green-400" />
              Häufig gestellte Fragen
            </h2>
            <p className="text-slate-300 mb-8 text-lg text-center">
              Die wichtigsten Fragen zu DSGVO-Compliance-Kosten beantwortet
            </p>

            <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-slate-700">
                    <AccordionTrigger className="text-lg font-semibold text-white hover:text-blue-400 py-4">
                      Was kostet DSGVO-Compliance-Software für KMU?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">
                      Für kleine und mittlere Unternehmen (1-50 Mitarbeiter) liegen die Kosten für DSGVO-Compliance-Software zwischen <strong className="text-white">200€ und 850€ pro Monat</strong>. Eine Basis-Lösung mit ROPA/VVT-Modul kostet ca. 200-500€/Monat. Mit zusätzlichen Modulen für DSFA (Datenschutz-Folgenabschätzung) und Betroffenenanfragen-Management erhöhen sich die Kosten auf 350-850€/Monat. Im Jahresvergleich sind das 2.400-10.200€, deutlich günstiger als ein externer DSB (6.000-15.000€/Jahr).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-b border-slate-700">
                    <AccordionTrigger className="text-lg font-semibold text-white hover:text-blue-400 py-4">
                      Lohnt sich Compliance-Software für Unternehmen mit 50+ Mitarbeitern?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">
                      Ja, absolut. Große Unternehmen zahlen für einen internen Datenschutzbeauftragten <strong className="text-white">50.000-90.000€ Jahresgehalt</strong> plus Nebenkosten. Enterprise-Compliance-Software kostet dagegen 2.300-5.000€/Monat (27.600-60.000€/Jahr) und bietet zusätzlich automatisierte Dokumentation, Multi-Entity-Support, 24/7-Verfügbarkeit und automatische Updates bei Gesetzesänderungen. Viele Unternehmen kombinieren beide Ansätze: interner DSB + Software für maximale Effizienz.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-b border-slate-700">
                    <AccordionTrigger className="text-lg font-semibold text-white hover:text-blue-400 py-4">
                      Welche Module brauche ich: ROPA, DSFA, Betroffenenanfragen?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">
                      <strong className="text-white">ROPA/VVT (Verzeichnis der Verarbeitungstätigkeiten)</strong> ist gesetzlich verpflichtend für alle Unternehmen mit mehr als 250 Mitarbeitern oder risikoreichen Verarbeitungen - daher absolute Pflicht. <strong className="text-white">DSFA-Module</strong> benötigen Sie, wenn Sie Hochrisiko-Verarbeitungen durchführen (z.B. umfangreiche Profiling, biometrische Daten, Gesundheitsdaten). Mehr dazu in unserem <Link to="/guides/datenschutz-folgenabschaetzung-dsfa" className="text-blue-400 hover:text-blue-300 underline">DSFA-Leitfaden</Link>. <strong className="text-white">Betroffenenanfragen-Tools</strong> werden spätestens dann wichtig, wenn Sie mehr als 5-10 Auskunftsanfragen pro Monat erhalten - sie sparen enorm Zeit bei der Bearbeitung von <Link to="/guides/betroffenenrechte-dsgvo" className="text-blue-400 hover:text-blue-300 underline">Art. 15-20 DSGVO Anfragen</Link>.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-b border-slate-700">
                    <AccordionTrigger className="text-lg font-semibold text-white hover:text-blue-400 py-4">
                      DSGVO-Tools vs. externer Datenschutzbeauftragter - was ist günstiger?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">
                      Für die meisten KMU ist <strong className="text-white">Software deutlich günstiger</strong>: DSGVO-Software kostet 2.400-10.200€/Jahr, ein externer DSB dagegen 6.000-15.000€/Jahr. Noch größer wird der Unterschied bei großen Unternehmen: Software kostet 27.600-60.000€/Jahr, ein interner DSB 70.000-110.000€/Jahr (inkl. Lohnnebenkosten). <strong className="text-white">Optimal ist oft eine Hybrid-Lösung</strong>: Software für die tägliche Dokumentation + externer DSB für strategische Beratung (z.B. 4-6 Stunden/Monat statt Vollzeit).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-b border-slate-700">
                    <AccordionTrigger className="text-lg font-semibold text-white hover:text-blue-400 py-4">
                      Was kosten DSGVO- + KI-VO-Compliance-Tools für große Unternehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">
                      Die Kombination aus <strong className="text-white">DSGVO- und <Link to="/eu-ai-act" className="text-blue-400 hover:text-blue-300 underline">KI-Verordnung (EU AI Act)</Link> Compliance</strong> kostet für große Unternehmen zwischen <strong className="text-white">2.600€ und 6.000€ pro Monat</strong> (31.200-72.000€/Jahr). Die Basis-DSGVO-Compliance für Enterprise liegt bei 2.300-5.000€/Monat, das KI-VO-Modul (für Risikobewertung von KI-Systemen, Dokumentation, Conformity Assessment) kostet zusätzlich 300-1.000€/Monat. Multi-Entity-Support für internationale Konzerne kann weitere 500-1.000€/Monat kosten.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-b-0 border-slate-700">
                    <AccordionTrigger className="text-lg font-semibold text-white hover:text-blue-400 py-4">
                      Was sind die größten versteckten Kosten bei DSGVO-Compliance?
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4">
                      Die <strong className="text-white">4 größten versteckten Kostentreiber</strong> sind: <strong className="text-white">1. Opportunitätskosten</strong> (5.000-25.000€/Jahr) - Zeit, die Geschäftsführung und Mitarbeiter für DSGVO aufwenden statt für ihr Kerngeschäft. <strong className="text-white">2. Kontinuierliche Dokumentationspflege</strong> (2.000-8.000€/Jahr) - bei jedem Tool-Wechsel, neuen Prozess oder Mitarbeiterwechsel muss alles aktualisiert werden. <strong className="text-white">3. Betroffenenanfragen-Management</strong> (1.000-10.000€/Jahr) - manuelle Bearbeitung von Auskunfts- und Löschanfragen bindet enorme Ressourcen. <strong className="text-white">4. Vendor Management</strong> (1.500-6.000€/Jahr) - Prüfung und Überwachung aller Auftragsverarbeiter inkl. AVV-Dokumentation.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DsgvoComplianceKosten;
