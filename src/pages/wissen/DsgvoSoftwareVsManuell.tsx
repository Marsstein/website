import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MonitorCheck,
  FileText,
  Clock,
  Euro,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Zap,
  Users,
  Shield,
  ArrowRight,
  Target
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

const DsgvoSoftwareVsManuell: React.FC = () => {
  const comparisonAspects = [
    {
      aspect: 'Zeitaufwand',
      manual: {
        value: '15-40 Std/Monat',
        rating: 1,
        details: 'Excel-Pflege, Word-Dokumente aktualisieren, E-Mail-Kommunikation'
      },
      software: {
        value: '2-8 Std/Monat',
        rating: 5,
        details: 'Automatisierte Updates, Templates, Workflow-Management'
      },
      savingPotential: '80-90% Zeitersparnis'
    },
    {
      aspect: 'Dokumentationspflege',
      manual: {
        value: 'Fehleranfällig',
        rating: 2,
        details: 'Veraltete Dokumente, keine Versionierung, manuelle Synchronisation'
      },
      software: {
        value: 'Automatisiert',
        rating: 5,
        details: 'Versionskontrolle, Auto-Updates, zentrale Quelle'
      },
      savingPotential: '90% weniger Fehler'
    },
    {
      aspect: 'Kosten (50 MA)',
      manual: {
        value: '15.000-30.000€/Jahr',
        rating: 2,
        details: 'Arbeitszeitkosten (20h/Monat à 60€) + DSB-Kosten'
      },
      software: {
        value: '5.000-12.000€/Jahr',
        rating: 4,
        details: 'Software-Lizenz + reduzierte DSB-Kosten'
      },
      savingPotential: '50-70% Kostenersparnis'
    },
    {
      aspect: 'Compliance-Sicherheit',
      manual: {
        value: 'Mittel-Gering',
        rating: 2,
        details: 'Menschliche Fehler, veraltete Templates, Lücken'
      },
      software: {
        value: 'Hoch',
        rating: 5,
        details: 'Automatische Compliance-Checks, Reminder, Audit-Trail'
      },
      savingPotential: '95% weniger Compliance-Lücken'
    },
    {
      aspect: 'Skalierbarkeit',
      manual: {
        value: 'Begrenzt',
        rating: 1,
        details: 'Aufwand steigt linear mit Unternehmensgröße'
      },
      software: {
        value: 'Exzellent',
        rating: 5,
        details: 'Aufwand bleibt konstant, egal wie viele Prozesse/MA'
      },
      savingPotential: 'Unbegrenzt skalierbar'
    },
    {
      aspect: 'Betroffenenanfragen',
      manual: {
        value: '8-20 Std/Anfrage',
        rating: 1,
        details: 'Manuelle Suche in Excel/Word, E-Mail-Ketten'
      },
      software: {
        value: '1-3 Std/Anfrage',
        rating: 5,
        details: 'Zentrale Datenbank, automatische Exports'
      },
      savingPotential: '85% schneller'
    },
    {
      aspect: 'Audit-Readiness',
      manual: {
        value: '5-10 Tage Vorbereitung',
        rating: 2,
        details: 'Dokumente zusammensuchen, aktualisieren, formatieren'
      },
      software: {
        value: '1-2 Std Vorbereitung',
        rating: 5,
        details: 'Ein Klick → kompletter Audit-Report'
      },
      savingPotential: '95% schnellere Audit-Prep'
    },
    {
      aspect: 'Reportings',
      manual: {
        value: 'Aufwändig',
        rating: 2,
        details: 'Manuelle Aggregation, PowerPoint-Erstellung'
      },
      software: {
        value: 'Automatisch',
        rating: 5,
        details: 'Real-time Dashboards, automatische Reports'
      },
      savingPotential: '100% automatisiert'
    }
  ];

  const hiddenManualCosts = [
    {
      category: 'Arbeitszeitkosten',
      monthly: '1.200 - 2.400€',
      annual: '14.400 - 28.800€',
      calculation: '20-40 Std/Monat à 60€ Stundensatz',
      icon: Clock
    },
    {
      category: 'Opportunitätskosten',
      monthly: '1.000 - 2.000€',
      annual: '12.000 - 24.000€',
      calculation: 'Zeit, die für Revenue-Generating Activities fehlt',
      icon: TrendingUp
    },
    {
      category: 'Fehlerkosten',
      monthly: '500 - 2.000€',
      annual: '6.000 - 24.000€',
      calculation: 'Nacharbeit bei Fehlern, Compliance-Lücken',
      icon: AlertTriangle
    },
    {
      category: 'Externe DSB-Mehrkosten',
      monthly: '200 - 800€',
      annual: '2.400 - 9.600€',
      calculation: 'DSB braucht mehr Stunden bei manuellen Prozessen',
      icon: Users
    }
  ];

  const whenManualMakesSense = [
    {
      scenario: 'Sehr kleine Unternehmen (1-5 MA)',
      reason: 'Wenige Prozesse, geringe Datenverarbeitung',
      threshold: 'Unter 10 Verarbeitungstätigkeiten',
      recommendation: 'Manuelle Lösung OK, aber prüfen ob Tool-Kosten dennoch günstiger'
    },
    {
      scenario: 'Keine Budget-Freigabe möglich',
      reason: 'Kurzfristig keine Investition möglich',
      threshold: 'Übergangsphase max. 6-12 Monate',
      recommendation: 'Manuelle Überbrückung, dann auf Software migrieren'
    },
    {
      scenario: 'Sehr spezielle Branche',
      reason: 'Keine passende DSGVO-Software verfügbar',
      threshold: 'Hochspezialisierte Nische',
      recommendation: 'Custom-Lösung oder Hybrid mit Standard-Software'
    }
  ];

  const migrationSteps = [
    {
      step: 'Bestandsaufnahme',
      duration: '1-2 Tage',
      tasks: ['Alle Excel/Word-Dokumente sammeln', 'Prozesse dokumentieren', 'Datenquellen identifizieren']
    },
    {
      step: 'Tool-Auswahl',
      duration: '1-2 Wochen',
      tasks: ['Anforderungen definieren', '3-5 Tools vergleichen', 'Testaccounts einrichten']
    },
    {
      step: 'Daten-Migration',
      duration: '1-3 Wochen',
      tasks: ['Daten aus Excel/Word übertragen', 'Workflows konfigurieren', 'Integrationen einrichten']
    },
    {
      step: 'Team-Onboarding',
      duration: '1 Woche',
      tasks: ['Schulungen durchführen', 'Best Practices etablieren', 'Support-Prozess aufsetzen']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead
        title="DSGVO Software vs. Manuelle Compliance - Was ist besser?"
        description="DSGVO-Software spart 80-90% Zeit und 50-70% Kosten vs. manuelle Excel/Word-Lösung. Detaillierter Vergleich: Zeitaufwand, Fehlerquote, Skalierbarkeit."
        canonical="/wissen/dsgvo-software-vs-manuell"
        keywords="DSGVO Software, Compliance Software, manuelle DSGVO, Excel Datenschutz, DSGVO Tool Vergleich"
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
              <BreadcrumbPage>Software vs. Manuelle Compliance</BreadcrumbPage>
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
              <MonitorCheck className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Ansatz-Vergleich</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">Software vs.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Manuelle Compliance
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Objektiver Vergleich: DSGVO-Software vs. Excel/Word-Lösung. Mit echten Zahlen zu Zeitaufwand, Kosten und Fehlerquoten.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 border-red-500/30 bg-slate-800/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <div className="text-2xl font-black text-white mb-2">15-40 Std/Monat</div>
                  <div className="text-sm text-slate-400">Manuelle Pflege (Excel/Word)</div>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-500/30 bg-slate-800/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-black text-white mb-2">2-8 Std/Monat</div>
                  <div className="text-sm text-slate-400">Mit DSGVO-Software</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              8-Punkte-Vergleich
            </h2>

            <div className="space-y-6">
              {comparisonAspects.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{item.aspect}</h3>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                          {item.savingPotential}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-slate-400">Manuelle Lösung</h4>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <div
                                  key={star}
                                  className={`w-3 h-3 rounded-full ${
                                    star <= item.manual.rating ? 'bg-red-400' : 'bg-slate-700'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-2xl font-black text-white mb-2">{item.manual.value}</div>
                          <p className="text-slate-400 text-xs">{item.manual.details}</p>
                        </div>

                        <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-slate-400">DSGVO-Software</h4>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <div
                                  key={star}
                                  className={`w-3 h-3 rounded-full ${
                                    star <= item.software.rating ? 'bg-green-400' : 'bg-slate-700'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="text-2xl font-black text-white mb-2">{item.software.value}</div>
                          <p className="text-slate-400 text-xs">{item.software.details}</p>
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
              <AlertTriangle className="inline-block mr-3 text-orange-400" />
              Versteckte Kosten manueller Compliance
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Die wahren Kosten manueller Prozesse werden oft unterschätzt:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {hiddenManualCosts.map((cost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex-shrink-0">
                          <cost.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-bold text-white mb-2">{cost.category}</h4>
                          <div className="flex items-center gap-3 mb-2">
                            <div>
                              <div className="text-2xl font-black text-orange-400">{cost.annual}</div>
                              <div className="text-xs text-slate-400">pro Jahr</div>
                            </div>
                            <div className="text-slate-600">|</div>
                            <div>
                              <div className="text-lg font-bold text-slate-300">{cost.monthly}</div>
                              <div className="text-xs text-slate-400">pro Monat</div>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm">{cost.calculation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="border-2 border-orange-500/30 bg-gradient-to-br from-slate-800/60 to-orange-900/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Euro className="h-12 w-12 text-orange-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Gesamtkosten manuelle Compliance:</h4>
                    <div className="text-5xl font-black text-orange-400 mb-4">34.800 - 86.400€/Jahr</div>
                    <p className="text-slate-300 text-lg">
                      vs. <strong className="text-green-400">5.000-12.000€/Jahr</strong> mit Software-Lösung
                      = <strong className="text-white">Einsparung von 22.800-74.400€/Jahr</strong>
                    </p>
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
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              Wann macht manuelle Lösung Sinn?
            </h2>

            <div className="space-y-6">
              {whenManualMakesSense.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div className="flex-grow">
                          <h4 className="text-lg font-bold text-white mb-2">{item.scenario}</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <div className="text-sm text-slate-400 mb-1">Grund:</div>
                              <div className="text-slate-300">{item.reason}</div>
                            </div>
                            <div>
                              <div className="text-sm text-slate-400 mb-1">Schwellenwert:</div>
                              <div className="text-slate-300">{item.threshold}</div>
                            </div>
                            <div>
                              <div className="text-sm text-slate-400 mb-1">Empfehlung:</div>
                              <div className="text-blue-300">{item.recommendation}</div>
                            </div>
                          </div>
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
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              Migration von manuell zu Software
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {migrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{step.step}</h4>
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {step.duration}
                          </Badge>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {step.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
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
                <Target className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-4">
                  Finden Sie die richtige DSGVO-Software
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Nutzen Sie unseren interaktiven Auswahlratgeber mit 15 Kriterien, um die optimale DSGVO-Software für Ihre Anforderungen zu finden.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold" asChild>
                  <Link to="/ratgeber/dsgvo-software-auswahlkriterien">
                    <Shield className="mr-2 h-5 w-5" />
                    Zum Software-Auswahlratgeber
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

export default DsgvoSoftwareVsManuell;
