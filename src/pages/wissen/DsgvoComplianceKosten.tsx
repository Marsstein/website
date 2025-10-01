import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calculator,
  Euro,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  Building2,
  Shield,
  FileText,
  Target,
  Zap,
  ArrowRight
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
      strategy: 'Hybrid-Modell statt interner DSB',
      saving: '30.000 - 60.000€/Jahr',
      description: 'Externer DSB mit internem Koordinator kombinieren statt Vollzeit-DSB',
      difficulty: 'Einfach'
    },
    {
      strategy: 'Compliance-Software statt manuelle Prozesse',
      saving: '10.000 - 30.000€/Jahr',
      description: 'Automatisierte Dokumentation und Prozess-Management reduziert Zeitaufwand drastisch',
      difficulty: 'Einfach'
    },
    {
      strategy: 'Standard-Templates nutzen',
      saving: '5.000 - 15.000€ einmalig',
      description: 'Bewährte Vorlagen statt alles von Grund auf neu zu erstellen',
      difficulty: 'Sehr einfach'
    },
    {
      strategy: 'Schulungen digital statt Präsenz',
      saving: '2.000 - 8.000€/Jahr',
      description: 'E-Learning-Plattformen statt teurer Präsenzschulungen',
      difficulty: 'Einfach'
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
        title="DSGVO Compliance Kosten 2025 - Was kostet Datenschutz wirklich?"
        description="DSGVO Kosten transparent: Initial-Setup 8.000-46.000€, jährlich 5.100-38.000€ je nach Unternehmensgröße. Inkl. versteckter Kosten & Spar-Strategien."
        canonical="/wissen/kosten/dsgvo-compliance-kosten"
        keywords="DSGVO Kosten, Datenschutz Kosten, DSB Kosten, Compliance Kosten, DSGVO Budget, Datenschutzbeauftragter Kosten"
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

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transparente Übersicht aller Kosten - von Initial-Setup über laufende Ausgaben bis zu versteckten Kostenfallen.
            </p>
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
              4 Wege, Kosten zu senken
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              So sparen Sie bis zu 50% der DSGVO-Kosten ohne Compliance-Risiko:
            </p>

            <div className="space-y-4">
              {savingStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-grow">
                          <div className="p-2 bg-green-500/20 rounded-lg">
                            <CheckCircle2 className="h-6 w-6 text-green-400" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-lg font-bold text-white mb-1">{strategy.strategy}</h4>
                            <p className="text-slate-300 text-sm">{strategy.description}</p>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-green-400 font-black text-xl mb-1">{strategy.saving}</div>
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
            className="text-center"
          >
            <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/60 to-blue-900/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <Calculator className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-4">
                  Berechnen Sie Ihre individuellen Kosten
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Nutzen Sie unseren interaktiven Kostenrechner für eine präzise Kalkulation basierend auf Ihrer Unternehmenssituation.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold" asChild>
                  <Link to="/assessment-center/dsgvo-kosten-rechner">
                    <Calculator className="mr-2 h-5 w-5" />
                    Zum Kostenrechner
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

export default DsgvoComplianceKosten;
