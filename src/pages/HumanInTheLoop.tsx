import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Brain,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Target,
  Award,
  TrendingUp,
  Zap,
  FileCheck,
  UserCheck,
  Briefcase,
  Heart,
  Scale,
  Code,
  ShoppingCart,
  Factory,
  Globe,
  CheckCircle,
  Calendar,
  Eye,
  MessageSquare,
  AlertCircle,
  HelpCircle,
  Play,
  DollarSign,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TracingBeam } from '@/components/ui/tracing-beam';

const HumanInTheLoop = () => {

  const comparisonData = [
    {
      feature: 'Generierungszeit',
      ai: '2-5 Minuten',
      aiHuman: '24-48 Stunden',
      aiIcon: Zap,
      humanIcon: Clock
    },
    {
      feature: 'Genauigkeit',
      ai: '95%',
      aiHuman: '99.9%',
      aiIcon: Target,
      humanIcon: Award
    },
    {
      feature: 'Branchen-Spezifik',
      ai: 'Allgemein',
      aiHuman: 'Hochspezialisiert',
      aiIcon: Globe,
      humanIcon: Briefcase
    },
    {
      feature: 'Rechtssicherheit',
      ai: 'Gut',
      aiHuman: 'Audit-Level',
      aiIcon: CheckCircle,
      humanIcon: Shield
    },
    {
      feature: 'Komplexe Edge Cases',
      ai: 'Limitiert',
      aiHuman: 'Expertenwissen',
      aiIcon: Brain,
      humanIcon: Users
    },
    {
      feature: 'Kosten',
      ai: '€€',
      aiHuman: '€€€',
      aiIcon: TrendingUp,
      humanIcon: TrendingUp
    }
  ];

  const useCases = [
    {
      title: 'Hochrisiko-Branchen',
      description: 'Medizin, Pharma, Finanzen - wo jeder Fehler schwerwiegende Konsequenzen hat',
      icon: Heart,
      industries: ['Healthcare', 'FinTech', 'Insurance'],
      value: 'Maximale Rechtssicherheit'
    },
    {
      title: 'Internationale Datentransfers',
      description: 'Komplexe SCC-Verträge, Binding Corporate Rules, TIA-Assessments',
      icon: Globe,
      industries: ['Multinationale Konzerne', 'Cloud-Anbieter'],
      value: 'Grenzüberschreitende Expertise'
    },
    {
      title: 'Audit-Vorbereitung',
      description: 'Behördenprüfung, Zertifizierung oder Investor Due Diligence',
      icon: FileCheck,
      industries: ['Alle Branchen'],
      value: 'Prüfungssichere Dokumentation'
    },
    {
      title: 'Neuartige KI-Systeme',
      description: 'EU AI Act Compliance für innovative Machine Learning Anwendungen',
      icon: Brain,
      industries: ['AI/ML Startups', 'Tech-Unternehmen'],
      value: 'Cutting-Edge Compliance'
    },
    {
      title: 'M&A Transaktionen',
      description: 'Datenschutz-Prüfung bei Unternehmenskäufen und -fusionen',
      icon: Briefcase,
      industries: ['Private Equity', 'Corporates'],
      value: 'Deal-Sicherheit'
    },
    {
      title: 'Kritische Infrastruktur',
      description: 'NIS2, KRITIS, besondere regulatorische Anforderungen',
      icon: Shield,
      industries: ['Energie', 'Telekom', 'Verkehr'],
      value: 'Sector-spezifische Compliance'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Start: KI-Generierung',
      subtitle: 'Schneller Entwurf',
      description: 'Ihre Anforderungen werden in ein strukturiertes DSGVO-Dokument übersetzt.',
      icon: Brain,
      duration: '2-5 Min',
      accuracy: '95%',
      status: 'KI-generiert',
      stage: 'Entwurf'
    },
    {
      number: '02',
      title: 'Matching: Experte finden',
      subtitle: 'Intelligente Zuweisung',
      description: 'Algorithmus analysiert Branche, Komplexität und regulatorische Anforderungen.',
      icon: Target,
      duration: '< 2 Std',
      accuracy: '95%',
      status: 'In Prüfung',
      stage: 'Matching'
    },
    {
      number: '03',
      title: 'Review: Experten-Validierung',
      subtitle: 'Menschliche Expertise',
      description: 'Zertifizierter Experte prüft, optimiert und verfeinert das Dokument.',
      icon: UserCheck,
      duration: '24-48 Std',
      accuracy: '99.5%',
      status: 'Wird geprüft',
      stage: 'Validierung'
    },
    {
      number: '04',
      title: 'Ergebnis: Audit-ready',
      subtitle: 'Maximale Rechtssicherheit',
      description: 'Optimiertes Dokument mit Experten-Feedback und Umsetzungsempfehlungen.',
      icon: Award,
      duration: 'Sofort',
      accuracy: '99.9%',
      status: 'Abgeschlossen',
      stage: 'Fertig'
    }
  ];

  const metrics = [
    { value: '50+', label: 'Zertifizierte Experten', icon: Users },
    { value: '15+', label: 'Branchen-Spezialisierungen', icon: Briefcase },
    { value: '99.9%', label: 'Qualitätsgarantie', icon: Award },
    { value: '24-48h', label: 'Durchschn. Review-Zeit', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Human-in-the-Loop DSGVO Review | KI + Experten-Validierung | Marsstein"
        description="KI-Effizienz trifft menschliche Expertise: Ihre DSGVO-Dokumente automatisiert erstellt und von zertifizierten Datenschutzexperten geprüft. 50+ Spezialisten aus 15+ Branchen."
        canonical="https://marsstein.ai/human-in-the-loop"
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 md:py-32">
          <div className="container px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-[#e24e1b] text-white border-0 px-4 py-2 text-sm">
                  <Sparkles className="h-4 w-4 mr-2 inline" />
                  Das Beste aus beiden Welten
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold text-[#232323] dark:text-white mb-6 tracking-tight">
                  KI-Effizienz +<br />
                  <span className="text-[#e24e1b]">
                    Menschliche Expertise
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-[#474747] dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Ihre DSGVO-Dokumente in Minuten KI-generiert, dann von branchenspezifischen Experten validiert.
                  Von 95% auf 99.9% Genauigkeit in 24-48 Stunden.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link to="/contact">
                    <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-8">
                      Experten-Review aktivieren
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="#how-it-works">
                    <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white">
                      Wie es funktioniert
                      <Eye className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                    >
                      <metric.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] -z-0" />
        </section>

        <section id="how-it-works" className="py-20 md:py-32 bg-background">
          <div className="container px-4">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-[#e24e1b] text-white border-0 px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2 inline" />
                  Der Prozess
                </Badge>
                <h2 className="text-4xl md:text-6xl font-bold text-[#232323] dark:text-white mb-6 tracking-tight">
                  Wie funktioniert<br />
                  <span className="text-[#e24e1b]">
                    Human-in-the-Loop?
                  </span>
                </h2>
                <p className="text-xl text-[#474747] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Vier Schritte von KI-Geschwindigkeit zu Experten-Qualität.<br />
                  Von 95% zu 99.9% Genauigkeit in 48 Stunden.
                </p>
              </motion.div>
            </div>

            <TracingBeam className="px-6">
              <div className="max-w-4xl mx-auto antialiased pt-4 relative">
                {processSteps.map((step, index) => (
                  <div key={`step-${index}`} className="mb-24">
                    {/* Header with Stage Indicator */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#e24e1b] text-white text-2xl font-bold shadow-lg shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-[#232323] dark:text-white">{step.title}</h3>
                          <Badge className="bg-[#F5F6F8] dark:bg-gray-800 text-[#474747] dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                            {step.stage}
                          </Badge>
                        </div>
                        <p className="text-lg text-[#e24e1b] font-semibold mb-2">{step.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm text-[#474747] dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{step.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            <span>Genauigkeit: {step.accuracy}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-[#474747] dark:text-gray-300 leading-relaxed mb-6 pl-26">
                      {step.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="pl-26 mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border-2 border-[#e24e1b]">
                        <div className="h-2 w-2 rounded-full bg-[#e24e1b] animate-pulse"></div>
                        <span className="text-sm font-semibold text-[#232323] dark:text-white">Status: {step.status}</span>
                      </div>
                    </div>

                    {/* Step-specific Content */}
                    <div className="pl-26">
                      {index === 0 && (
                        <Card className="bg-[#F5F6F8] dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
                          <CardContent className="p-6">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="text-center">
                                <Brain className="h-8 w-8 text-[#e24e1b] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#232323] dark:text-white mb-1">95%</div>
                                <div className="text-sm text-[#474747] dark:text-gray-400">Basis-Genauigkeit</div>
                              </div>
                              <div className="text-center">
                                <Zap className="h-8 w-8 text-[#e24e1b] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#232323] dark:text-white mb-1">2-5min</div>
                                <div className="text-sm text-[#474747] dark:text-gray-400">Blitzschnell</div>
                              </div>
                              <div className="text-center">
                                <Sparkles className="h-8 w-8 text-[#e24e1b] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-[#232323] dark:text-white mb-1">100%</div>
                                <div className="text-sm text-[#474747] dark:text-gray-400">Automatisiert</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {index === 1 && (
                        <Card className="bg-[#F5F6F8] dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
                          <CardContent className="p-6">
                            <h4 className="font-bold text-[#232323] dark:text-white mb-4">Matching-Kriterien:</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-[#e24e1b] text-white text-sm py-2 px-4">Branche</Badge>
                              <Badge className="bg-[#003366] text-white text-sm py-2 px-4">Regulatorik</Badge>
                              <Badge className="bg-[#f97316] text-white text-sm py-2 px-4">Komplexität</Badge>
                              <Badge className="bg-[#ea580c] text-white text-sm py-2 px-4">Spezialisierung</Badge>
                              <Badge className="bg-[#e24e1b] text-white text-sm py-2 px-4">Zertifizierung</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {index === 2 && (
                        <Card className="bg-[#F5F6F8] dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
                          <CardContent className="p-6">
                            <h4 className="font-bold text-[#232323] dark:text-white mb-4">Was der Experte prüft:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e24e1b] rounded-lg shrink-0">
                                  <CheckCircle2 className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-semibold text-[#232323] dark:text-white mb-1">Rechtsprüfung</div>
                                  <div className="text-sm text-[#474747] dark:text-gray-400">DSGVO-Konformität validiert</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e24e1b] rounded-lg shrink-0">
                                  <CheckCircle2 className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-semibold text-[#232323] dark:text-white mb-1">Optimierung</div>
                                  <div className="text-sm text-[#474747] dark:text-gray-400">Best Practices integriert</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e24e1b] rounded-lg shrink-0">
                                  <CheckCircle2 className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-semibold text-[#232323] dark:text-white mb-1">Branchenwissen</div>
                                  <div className="text-sm text-[#474747] dark:text-gray-400">Spezialisierte Anpassungen</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-[#e24e1b] rounded-lg shrink-0">
                                  <CheckCircle2 className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-semibold text-[#232323] dark:text-white mb-1">Validierung</div>
                                  <div className="text-sm text-[#474747] dark:text-gray-400">Audit-ready gemacht</div>
                                </div>
                              </div>
                            </div>
                            {/* Progress Bar */}
                            <div className="mt-6">
                              <div className="flex justify-between text-sm text-[#474747] dark:text-gray-400 mb-2">
                                <span>Genauigkeit steigt</span>
                                <span className="font-bold text-[#e24e1b]">95% → 99.5%</span>
                              </div>
                              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-[#e24e1b] rounded-full" style={{ width: '99.5%' }}></div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {index === 3 && (
                        <Card className="bg-[#e24e1b] text-white border-0 shadow-lg">
                          <CardContent className="p-6">
                            <h4 className="font-bold text-white mb-4 text-lg">Finale Transformation abgeschlossen:</h4>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                                <Award className="h-8 w-8 mx-auto mb-2" />
                                <div className="text-3xl font-bold mb-1">99.9%</div>
                                <div className="text-sm opacity-90">Genauigkeit</div>
                              </div>
                              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                                <Clock className="h-8 w-8 mx-auto mb-2" />
                                <div className="text-3xl font-bold mb-1">48h</div>
                                <div className="text-sm opacity-90">Gesamt-Zeit</div>
                              </div>
                              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-lg">
                                <Shield className="h-8 w-8 mx-auto mb-2" />
                                <div className="text-3xl font-bold mb-1">100%</div>
                                <div className="text-sm opacity-90">Rechtssicher</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TracingBeam>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <Card className="max-w-4xl mx-auto bg-[#F5F6F8] dark:bg-gray-800 border-2 border-[#e24e1b]">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-[#232323] dark:text-white mb-2">
                        Das Ergebnis?
                      </h3>
                      <p className="text-[#474747] dark:text-gray-300">
                        KI-Geschwindigkeit + Experten-Qualität = Maximale Rechtssicherheit in Rekordzeit
                      </p>
                    </div>
                    <Link to="/contact">
                      <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-8 whitespace-nowrap">
                        Jetzt starten
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[#F5F6F8] dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-[#e24e1b] text-white border-0 px-4 py-2">
                <Users className="h-4 w-4 mr-2 inline" />
                Smart Expert Matching
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-[#232323] dark:text-white mb-6 tracking-tight">
                Spezialisierte Experten<br />
                <span className="text-[#e24e1b]">
                  für jede Branche
                </span>
              </h2>
              <p className="text-xl text-[#474747] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Unser Matching-Algorithmus findet automatisch den perfekten Datenschutzexperten
                mit der passenden Zertifizierung und Branchenerfahrung für Ihr Dokument.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                      <div>
                        <h3 className="text-3xl font-bold text-[#232323] dark:text-white mb-4">
                          Branchen-Expertise trifft Compliance
                        </h3>
                        <p className="text-lg text-[#474747] dark:text-gray-300 mb-6">
                          Alle Experten verfügen über CIPP/E, CIPM oder vergleichbare Zertifizierungen
                          sowie tiefgreifende Erfahrung in ihrer jeweiligen Branche.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-[#e24e1b] text-[#e24e1b]">CIPP/E</Badge>
                          <Badge variant="outline" className="border-[#e24e1b] text-[#e24e1b]">CIPM</Badge>
                          <Badge variant="outline" className="border-[#e24e1b] text-[#e24e1b]">GDD</Badge>
                          <Badge variant="outline" className="border-[#e24e1b] text-[#e24e1b]">ISO 27001</Badge>
                          <Badge variant="outline" className="border-[#e24e1b] text-[#e24e1b]">CDPO</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="p-4 bg-[#e24e1b] rounded-lg text-white text-center"
                        >
                          <Target className="h-8 w-8 mx-auto mb-2" />
                          <div className="font-bold text-sm">Smart Matching</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="p-4 bg-[#003366] rounded-lg text-white text-center"
                        >
                          <Shield className="h-8 w-8 mx-auto mb-2" />
                          <div className="font-bold text-sm">Audit-Ready</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="p-4 bg-[#f97316] rounded-lg text-white text-center"
                        >
                          <Award className="h-8 w-8 mx-auto mb-2" />
                          <div className="font-bold text-sm">Zertifiziert</div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="p-4 bg-[#ea580c] rounded-lg text-white text-center"
                        >
                          <Briefcase className="h-8 w-8 mx-auto mb-2" />
                          <div className="font-bold text-sm">Branchenkenntnis</div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="flex items-start gap-3 p-4 bg-[#F5F6F8] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-[#232323] dark:text-white text-sm">Healthcare & MedTech</div>
                          <div className="text-xs text-[#474747] dark:text-gray-400">DSGVO + MDR, MDCG</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F5F6F8] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-[#232323] dark:text-white text-sm">FinTech & Banking</div>
                          <div className="text-xs text-[#474747] dark:text-gray-400">BaFin, PSD2, MiFID II</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F5F6F8] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-[#232323] dark:text-white text-sm">E-Commerce & Retail</div>
                          <div className="text-xs text-[#474747] dark:text-gray-400">Tracking, Marketing</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F5F6F8] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-[#232323] dark:text-white text-sm">SaaS & Cloud</div>
                          <div className="text-xs text-[#474747] dark:text-gray-400">AWS, Azure, Transfers</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F5F6F8] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-[#232323] dark:text-white text-sm">Manufacturing & IoT</div>
                          <div className="text-xs text-[#474747] dark:text-gray-400">Industrie 4.0, KRITIS</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#F5F6F8] dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-[#232323] dark:text-white text-sm">Legal & Consulting</div>
                          <div className="text-xs text-[#474747] dark:text-gray-400">Rechtsanwälte, IT-Recht</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-[#474747] dark:text-gray-400 mb-6">
                        Sie möchten mehr über unsere Experten erfahren? Entdecken Sie alle Profile und Spezialisierungen.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/datenschutzexperten">
                          <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-8 shadow-lg">
                            Experten-Pool kennenlernen
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        <Link to="/contact">
                          <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white">
                            <Users className="mr-2 h-5 w-5" />
                            Experten-Review anfragen
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-[#e24e1b] text-white border-0 px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2 inline" />
                ROI-Analyse
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-[#232323] dark:text-white mb-6 tracking-tight">
                Der Qualitätssprung<br />
                <span className="text-[#e24e1b]">auf einen Blick</span>
              </h2>
              <p className="text-xl text-[#474747] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Vergleich: KI allein vs. KI + Experten-Validierung
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Comparison Header */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-[#F5F6F8] dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600">
                    <CardContent className="p-6 text-center">
                      <Brain className="h-12 w-12 text-[#003366] mx-auto mb-3" />
                      <h3 className="text-2xl font-bold text-[#232323] dark:text-white mb-2">Nur KI</h3>
                      <p className="text-sm text-[#474747] dark:text-gray-400">Schnell & Automatisiert</p>
                      <div className="mt-4 text-3xl font-bold text-[#e24e1b]">95%</div>
                      <div className="text-sm text-[#474747] dark:text-gray-400">Genauigkeit</div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-[#e24e1b] text-white border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Brain className="h-10 w-10" />
                        <span className="text-2xl font-bold">+</span>
                        <Users className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">KI + Experte</h3>
                      <p className="text-sm opacity-90">Validiert & Audit-ready</p>
                      <div className="mt-4 text-3xl font-bold">99.9%</div>
                      <div className="text-sm opacity-90">Genauigkeit</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Comparison Table */}
              <div className="space-y-4 mb-8">
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-[#e24e1b] dark:hover:border-[#e24e1b] transition-all hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-3 gap-6 items-center">
                          <div className="font-bold text-[#232323] dark:text-white flex items-center gap-2">
                            {row.feature}
                          </div>
                          <div className="text-center">
                            <div className="inline-flex items-center gap-2 text-[#474747] dark:text-gray-300">
                              <row.aiIcon className="h-5 w-5 text-[#003366]" />
                              <span>{row.ai}</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="inline-flex items-center gap-2 text-[#e24e1b] font-semibold">
                              <row.humanIcon className="h-5 w-5" />
                              <span>{row.aiHuman}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* ROI Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-[#F5F6F8] dark:bg-gray-800 border-2 border-[#e24e1b]">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-[#e24e1b] rounded-lg shrink-0">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#232323] dark:text-white mb-2">
                          Die Investition lohnt sich
                        </h3>
                        <p className="text-[#474747] dark:text-gray-300">
                          Human-in-the-Loop kostet 2-3x mehr als reine KI, bietet aber:
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-lg font-bold text-[#232323] dark:text-white">70-80% günstiger</div>
                          <div className="text-sm text-[#474747] dark:text-gray-400">als manuelle Anwalts-Erstellung</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-lg font-bold text-[#232323] dark:text-white">95% schneller</div>
                          <div className="text-sm text-[#474747] dark:text-gray-400">48h statt 2-3 Wochen</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-lg font-bold text-[#232323] dark:text-white">99.9% Genauigkeit</div>
                          <div className="text-sm text-[#474747] dark:text-gray-400">Bußgeldrisiko minimiert</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border-2 border-[#e24e1b]">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-[#474747] dark:text-gray-300">
                          <strong className="text-[#232323] dark:text-white">Kosten-Beispiel:</strong> Ein DSGVO-Audit kostet Sie €10.000-50.000.
                          Ein einziger Compliance-Fehler kann zu Bußgeldern von bis zu <strong className="text-[#e24e1b]">4% des Jahresumsatzes</strong> führen.
                          HITL-Review ist eine Versicherung, die sich selbst bezahlt.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 border-0">
                Use Cases
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Wann ist Human-in-the-Loop unverzichtbar?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Diese Szenarien erfordern mehr als nur KI-Unterstützung
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#e24e1b] dark:hover:border-[#f97316] group relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#e24e1b]/5 dark:bg-[#e24e1b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative">
                      <motion.div
                        className="p-3 bg-[#e24e1b] rounded-lg w-fit mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <useCase.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl mb-3 group-hover:text-[#e24e1b] dark:group-hover:text-[#f97316] transition-colors">
                        {useCase.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 relative">
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-muted-foreground mb-2">Typische Branchen:</div>
                          <div className="flex flex-wrap gap-1">
                            {useCase.industries.map((industry, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs group-hover:border-[#e24e1b] dark:group-hover:border-[#f97316] transition-colors">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="pt-3 border-t">
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
                            <Award className="h-4 w-4" />
                            <span className="text-sm font-semibold">{useCase.value}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0">
                Entscheidungshilfe
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Brauchen Sie Human-in-the-Loop?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nicht jedes Dokument benötigt Experten-Review. Hier ist unsere Empfehlung:
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full border-2 border-[#39B37B] dark:border-[#39B37B] bg-[#F5F6F8] dark:bg-gray-800 hover:shadow-xl transition-all group relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#39B37B]/5 dark:bg-[#39B37B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="p-3 bg-[#39B37B] rounded-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <CheckCircle className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-2xl">Nur KI reicht aus</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Standard-Anforderungen</div>
                          <p className="text-sm text-muted-foreground">Klassische Website, Newsletter, Standard-CRM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Niedrige Risiko-Branchen</div>
                          <p className="text-sm text-muted-foreground">B2B-SaaS ohne sensible Daten, E-Commerce</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Interne Dokumentation</div>
                          <p className="text-sm text-muted-foreground">Prozessbeschreibungen, interne Richtlinien</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Schnelle Iteration</div>
                          <p className="text-sm text-muted-foreground">MVP-Phase, Testing, häufige Änderungen</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full border-2 border-[#e24e1b] dark:border-[#f97316] bg-[#F5F6F8] dark:bg-gray-800 hover:shadow-xl transition-all group relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#e24e1b]/5 dark:bg-[#e24e1b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="p-3 bg-[#e24e1b] rounded-lg"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Shield className="h-6 w-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-2xl">HITL empfohlen</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 relative">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Hochrisiko-Branchen</div>
                          <p className="text-sm text-muted-foreground">Healthcare, FinTech, Pharma, Legal, Insurance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Audit & Zertifizierung</div>
                          <p className="text-sm text-muted-foreground">ISO 27001, Behördenprüfung, Due Diligence</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Komplexe Verarbeitung</div>
                          <p className="text-sm text-muted-foreground">KI-Systeme, internationale Transfers, besondere Kategorien</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-foreground mb-1">Rechtliche Konsequenzen</div>
                          <p className="text-sm text-muted-foreground">KRITIS, NIS2, hohe Bußgeldrisiken</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="mt-8 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Unsicher?</h3>
                        <p className="text-muted-foreground mb-4">
                          Sie können jederzeit mit KI starten und später auf Human-in-the-Loop upgraden.
                          Oder kontaktieren Sie uns für eine kostenlose Einschätzung.
                        </p>
                        <Link to="/contact">
                          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
                            Kostenlose Beratung anfragen
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#e24e1b] text-white border-0">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Alles, was Sie über Human-in-the-Loop wissen müssen
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-[#e24e1b] mt-1 flex-shrink-0" />
                      <span className="text-left">Wie aktiviere ich Human-in-the-Loop für mein Dokument?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pl-8">
                    Bei der Dokumentenerstellung können Sie „Experten-Review" als Option auswählen.
                    Das KI-generierte Dokument wird dann automatisch an den passenden Experten weitergeleitet.
                    Sie erhalten eine Benachrichtigung, sobald das Review abgeschlossen ist (24-48h).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-[#e24e1b] mt-1 flex-shrink-0" />
                      <span className="text-left">Was passiert während der 24-48 Stunden Review-Zeit?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pl-8">
                    Der zugeordnete Experte prüft Ihr Dokument auf rechtliche Korrektheit, Vollständigkeit und branchenspezifische Besonderheiten.
                    Er optimiert Formulierungen, fügt fehlende Aspekte hinzu und validiert alle regulatorischen Anforderungen.
                    Sie können das KI-Dokument in der Zwischenzeit bereits einsehen und erhalten dann die optimierte Version.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-[#e24e1b] mt-1 flex-shrink-0" />
                      <span className="text-left">Wie viel kostet Human-in-the-Loop im Vergleich zu reiner KI?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pl-8">
                    Human-in-the-Loop kostet etwa 2-3x mehr als die reine KI-Generierung, ist aber immer noch 70-80% günstiger als eine vollständig manuelle Erstellung durch Anwälte oder Datenschutzberater.
                    Die genauen Preise hängen von der Dokumentenkomplexität ab. Kontaktieren Sie uns für ein individuelles Angebot.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-[#e24e1b] mt-1 flex-shrink-0" />
                      <span className="text-left">Kann ich später von KI auf HITL upgraden?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pl-8">
                    Ja, absolut. Sie können jederzeit ein bereits KI-generiertes Dokument zur Experten-Review einreichen.
                    Das ist besonders sinnvoll, wenn sich Ihre Compliance-Anforderungen ändern oder Sie eine Zertifizierung anstreben.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-[#e24e1b] mt-1 flex-shrink-0" />
                      <span className="text-left">Wie wird der richtige Experte für mein Dokument ausgewählt?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pl-8">
                    Unser Smart Matching Algorithmus analysiert: (1) Ihre Branche und Geschäftsmodell,
                    (2) die Art des Dokuments und regulatorischen Kontext, (3) geografische Anforderungen,
                    (4) Komplexität und Spezialisierung. Basierend darauf wird automatisch der Experte mit der passenden Zertifizierung und Erfahrung zugewiesen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-[#e24e1b] mt-1 flex-shrink-0" />
                      <span className="text-left">Kann ich direkt mit dem Experten kommunizieren?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pl-8">
                    Ja, bei komplexen Fällen können Sie über unsere Plattform Rückfragen an den Experten stellen.
                    Bei Bedarf kann auch ein Beratungsgespräch (Video/Telefon) vereinbart werden – dies ist optional und wird separat abgerechnet.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-[#e24e1b] text-white border-0 px-4 py-2">
                <Target className="h-4 w-4 mr-2 inline" />
                Nächste Schritte
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-[#232323] dark:text-white mb-6 tracking-tight">
                Bereit loszulegen?<br />
                <span className="text-[#e24e1b]">
                  Wählen Sie Ihren Weg
                </span>
              </h2>
              <p className="text-xl text-[#474747] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie alle Möglichkeiten, wie Marsstein Ihre Compliance-Prozesse transformieren kann
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full bg-[#F5F6F8] dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#e24e1b] dark:hover:border-[#e24e1b] transition-all hover:shadow-xl group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="p-4 bg-[#e24e1b] rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#232323] dark:text-white mb-3">
                      Kostenlose Demo
                    </h3>
                    <p className="text-[#474747] dark:text-gray-300 mb-6 flex-grow">
                      Erleben Sie Human-in-the-Loop live in Aktion. 30 Minuten persönliche Demo mit unserem Team.
                    </p>
                    <Link to="/contact" className="mt-auto">
                      <Button variant="outline" className="w-full border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white">
                        Demo buchen
                        <Calendar className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full bg-[#F5F6F8] dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#e24e1b] dark:hover:border-[#e24e1b] transition-all hover:shadow-xl group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="p-4 bg-[#003366] rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#232323] dark:text-white mb-3">
                      Alle Features
                    </h3>
                    <p className="text-[#474747] dark:text-gray-300 mb-6 flex-grow">
                      Von KI-Dokumenten über HITL bis zu Compliance-Assessments – entdecken Sie die volle Plattform.
                    </p>
                    <Link to="/" className="mt-auto">
                      <Button variant="outline" className="w-full border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white dark:border-[#e24e1b] dark:text-[#e24e1b] dark:hover:bg-[#e24e1b]">
                        Features ansehen
                        <Eye className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full bg-[#F5F6F8] dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#e24e1b] dark:hover:border-[#e24e1b] transition-all hover:shadow-xl group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="p-4 bg-[#39B37B] rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#232323] dark:text-white mb-3">
                      Pricing & Pakete
                    </h3>
                    <p className="text-[#474747] dark:text-gray-300 mb-6 flex-grow">
                      Transparente Preise für jede Unternehmensgröße. Von Startup bis Enterprise.
                    </p>
                    <Link to="/pricing" className="mt-auto">
                      <Button variant="outline" className="w-full border-2 border-[#39B37B] text-[#39B37B] hover:bg-[#39B37B] hover:text-white">
                        Preise ansehen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full bg-[#F5F6F8] dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#e24e1b] dark:hover:border-[#e24e1b] transition-all hover:shadow-xl group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="p-4 bg-[#f97316] rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#232323] dark:text-white mb-3">
                      Experten-Pool
                    </h3>
                    <p className="text-[#474747] dark:text-gray-300 mb-6 flex-grow">
                      Lernen Sie unsere 50+ zertifizierten Datenschutzexperten aus 15+ Branchen kennen.
                    </p>
                    <Link to="/datenschutzexperten" className="mt-auto">
                      <Button variant="outline" className="w-full border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white">
                        Experten kennenlernen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-[#e24e1b] text-white relative overflow-hidden">
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="h-12 w-12 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Bereit für maximale Compliance-Qualität?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Nutzen Sie die Effizienz von KI kombiniert mit der Expertise zertifizierter Datenschutzexperten.
                  Starten Sie noch heute mit Human-in-the-Loop.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link to="/contact">
                    <Button size="lg" className="bg-[#232323] text-white hover:bg-[#474747] px-8 shadow-xl">
                      Experten-Review anfragen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/datenschutzexperten">
                    <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-[#F5F6F8] border-0 transition-colors">
                      <Users className="mr-2 h-5 w-5" />
                      Experten entdecken
                    </Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <MessageSquare className="h-8 w-8 mx-auto mb-3" />
                    <div className="text-sm text-white/90">Persönliche Beratung</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <Shield className="h-8 w-8 mx-auto mb-3" />
                    <div className="text-sm text-white/90">Maximale Rechtssicherheit</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <Award className="h-8 w-8 mx-auto mb-3" />
                    <div className="text-sm text-white/90">Zertifizierte Experten</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/5 -z-0" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HumanInTheLoop;
