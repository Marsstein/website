import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Building2,
  Heart,
  Scale,
  Cpu,
  Code,
  ShoppingCart,
  GraduationCap,
  Factory,
  Network,
  Globe,
  CheckCircle,
  X,
  Calendar,
  BarChart3,
  Eye,
  MessageSquare,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const HumanInTheLoop = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    { id: 'all', label: 'Alle Branchen', icon: Globe },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'fintech', label: 'FinTech', icon: TrendingUp },
    { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart },
    { id: 'saas', label: 'SaaS/Tech', icon: Code },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'legal', label: 'Legal/Consulting', icon: Scale },
  ];

  const experts = [
    {
      name: 'Dr. Sarah Weber',
      specialization: 'Healthcare & MedTech DSGVO',
      industries: ['healthcare'],
      certifications: ['CIPP/E', 'GDD', 'ISO 27001 Lead Auditor'],
      experience: '12+ Jahre',
      casesReviewed: 450,
      languages: ['DE', 'EN'],
      avatar: '👩‍⚕️'
    },
    {
      name: 'Maximilian Schmidt',
      specialization: 'FinTech & Banking Compliance',
      industries: ['fintech'],
      certifications: ['CIPP/E', 'CIPM', 'BaFin-zertifiziert'],
      experience: '10+ Jahre',
      casesReviewed: 380,
      languages: ['DE', 'EN', 'FR'],
      avatar: '👨‍💼'
    },
    {
      name: 'Laura Hoffmann',
      specialization: 'E-Commerce & Retail',
      industries: ['ecommerce'],
      certifications: ['CIPP/E', 'GDD', 'Google Analytics Certified'],
      experience: '8+ Jahre',
      casesReviewed: 520,
      languages: ['DE', 'EN'],
      avatar: '👩‍💻'
    },
    {
      name: 'Thomas Becker',
      specialization: 'SaaS & Cloud Platforms',
      industries: ['saas'],
      certifications: ['CIPP/E', 'CIPT', 'AWS Security'],
      experience: '11+ Jahre',
      casesReviewed: 410,
      languages: ['DE', 'EN'],
      avatar: '👨‍💻'
    },
    {
      name: 'Prof. Dr. Anna Müller',
      specialization: 'Manufacturing & IoT',
      industries: ['manufacturing'],
      certifications: ['CIPP/E', 'ISO 27001', 'IEC 62443'],
      experience: '15+ Jahre',
      casesReviewed: 290,
      languages: ['DE', 'EN', 'IT'],
      avatar: '👩‍🏫'
    },
    {
      name: 'Dr. Johannes Lehmann',
      specialization: 'Legal Tech & Rechtsberatung',
      industries: ['legal'],
      certifications: ['Rechtsanwalt', 'CIPP/E', 'FAS IT-Recht'],
      experience: '14+ Jahre',
      casesReviewed: 340,
      languages: ['DE', 'EN'],
      avatar: '⚖️'
    },
  ];

  const filteredExperts = selectedIndustry === 'all'
    ? experts
    : experts.filter(expert => expert.industries.includes(selectedIndustry));

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
      title: 'KI erstellt Dokument',
      description: 'Unsere KI analysiert Ihre Anforderungen und generiert ein maßgeschneidertes DSGVO-Dokument basierend auf Best Practices.',
      icon: Brain,
      duration: '2-5 Min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Smart Expert Matching',
      description: 'Intelligenter Algorithmus ordnet den perfekten Experten zu - basierend auf Branche, Komplexität und Spezialisierung.',
      icon: Target,
      duration: '< 2 Std',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Experten-Review',
      description: 'Zertifizierter Datenschutzexperte prüft, optimiert und validiert das Dokument mit Branchen-Know-how.',
      icon: UserCheck,
      duration: '24-48 Std',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Finales Dokument',
      description: 'Sie erhalten das optimierte, rechtsichere Dokument inklusive Experten-Feedback und Umsetzungsempfehlungen.',
      icon: Award,
      duration: 'Sofort',
      color: 'from-orange-500 to-red-500'
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
        keywords="Human-in-the-Loop, DSGVO Experten, Datenschutz Review, KI DSGVO, Expert Validation, Compliance Audit, CIPP/E Zertifizierung"
        canonical="https://marsstein.com/human-in-the-loop"
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 md:py-32">
          <div className="container px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 text-sm">
                  <Sparkles className="h-4 w-4 mr-2 inline" />
                  Das Beste aus beiden Welten
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                  KI-Effizienz +<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Menschliche Expertise
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Ihre DSGVO-Dokumente: Automatisiert erstellt, von Experten geprüft.
                  Maximale Rechtssicherheit durch intelligentes Human-in-the-Loop System.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-8">
                      Experten-Review aktivieren
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="#how-it-works">
                    <Button size="lg" variant="outline">
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
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0">
                Der Prozess
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Wie funktioniert Human-in-the-Loop?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Von KI-Generierung bis Experten-Validierung - Ihr Weg zu maximaler Compliance-Qualität
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="relative h-full border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group hover:shadow-lg">
                    <div className={cn(
                      "absolute -top-4 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-gradient-to-br",
                      step.color
                    )}>
                      {step.number}
                    </div>

                    <CardContent className="pt-12 pb-6 px-6">
                      <div className={cn(
                        "inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br",
                        step.color
                      )}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <ArrowRight className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-0">
                Unser Experten-Pool
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Der richtige Experte für Ihre Branche
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Nicht irgendein Datenschutzexperte - der PERFEKTE Experte für Ihre spezifischen Anforderungen
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {industries.map((industry) => (
                  <Button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    variant={selectedIndustry === industry.id ? 'default' : 'outline'}
                    className={cn(
                      "transition-all",
                      selectedIndustry === industry.id && "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    )}
                  >
                    <industry.icon className="h-4 w-4 mr-2" />
                    {industry.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredExperts.map((expert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{expert.avatar}</div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{expert.name}</CardTitle>
                          <p className="text-sm text-muted-foreground font-medium mb-3">
                            {expert.specialization}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {expert.certifications.map((cert, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Erfahrung</div>
                          <div className="text-sm font-semibold text-foreground">{expert.experience}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Reviews</div>
                          <div className="text-sm font-semibold text-foreground">{expert.casesReviewed}+</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Sprachen</div>
                          <div className="flex gap-1">
                            {expert.languages.map((lang, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs px-1.5 py-0">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-end">
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-0 text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verfügbar
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Und viele weitere Experten aus verschiedenen Spezialisierungen
              </p>
              <Link to="/datenschutzexperten">
                <Button variant="outline" size="lg">
                  Alle Experten kennenlernen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-background">
          <div className="container px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 border-0">
                ROI-Analyse
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                KI vs. KI + Human-in-the-Loop
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Der Qualitätsunterschied auf einen Blick
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div></div>
                  <div className="text-center">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0 mb-2">
                      <Brain className="h-3 w-3 mr-1" />
                      Nur KI
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-2">
                      <Sparkles className="h-3 w-3 mr-1" />
                      KI + Human
                    </Badge>
                  </div>
                </div>

                {comparisonData.map((row, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="font-semibold text-foreground">{row.feature}</div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 text-muted-foreground">
                            <row.aiIcon className="h-4 w-4" />
                            <span>{row.ai}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                            <row.humanIcon className="h-4 w-4" />
                            <span>{row.aiHuman}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-600 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Unser ROI-Versprechen
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Human-in-the-Loop kostet 2-3x mehr als reine KI, aber spart Ihnen:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">80% Zeitersparnis vs. manuelle Erstellung</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">Vermeidung kostspieliger Compliance-Fehler</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">Reduziertes Audit-Risiko</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-red-200 dark:hover:border-red-800 group">
                    <CardHeader>
                      <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                        <useCase.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-3">{useCase.title}</CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-muted-foreground mb-2">Typische Branchen:</div>
                          <div className="flex flex-wrap gap-1">
                            {useCase.industries.map((industry, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="pt-3 border-t">
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
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

        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
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
                <p className="text-xl mb-8 text-blue-100">
                  Nutzen Sie die Effizienz von KI kombiniert mit der Expertise zertifizierter Datenschutzexperten.
                  Starten Sie noch heute mit Human-in-the-Loop.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                      Experten-Review anfragen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      <Calendar className="mr-2 h-5 w-5" />
                      Beratungsgespräch buchen
                    </Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <MessageSquare className="h-8 w-8 mx-auto mb-3" />
                    <div className="text-sm text-blue-100">Persönliche Beratung</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <Shield className="h-8 w-8 mx-auto mb-3" />
                    <div className="text-sm text-blue-100">Maximale Rechtssicherheit</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <Award className="h-8 w-8 mx-auto mb-3" />
                    <div className="text-sm text-blue-100">Zertifizierte Experten</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HumanInTheLoop;
