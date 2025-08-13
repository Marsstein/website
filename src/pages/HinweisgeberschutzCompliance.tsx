import React, { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileCheck, 
  Lock, 
  Users, 
  Building2,
  Euro,
  Clock,
  AlertCircle,
  TrendingUp,
  Award,
  Star,
  Zap,
  Database,
  Bot,
  BarChart3,
  Globe,
  ChevronRight,
  PlayCircle,
  Download,
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  XCircle,
  Rocket,
  Eye,
  Server,
  Settings,
  AlertTriangle,
  Activity,
  Cloud,
  UserCheck,
  Monitor,
  Fingerprint,
  Key,
  ShieldCheck,
  Network,
  HardDrive,
  Cpu,
  Cog,
  ShieldAlert,
  Scale,
  Target,
  Timer,
  Briefcase,
  Factory,
  Wifi,
  MessageSquare,
  Gavel,
  Search,
  Archive,
  PhoneCall,
  FileText,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HinweisgeberschutzCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(89);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hinweisgeberschutz Compliance Service",
    "description": "Whistleblower-System nach HinSchG: Digitale Meldestelle mit Vertraulichkeitsschutz",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Whistleblower Protection System",
    "areaServed": "DE"
  };

  const painPoints = [
    {
      icon: Scale,
      title: 'Komplexe rechtliche Anforderungen',
      description: 'Das HinSchG erfordert strukturierte interne Meldestellen mit strikten Vertraulichkeits- und Fristenvorgaben (7/3-Monats-Regel).',
      impact: 'Kritisch',
      example: 'Internal Reporting Systems, Confidentiality Protocols, Investigation Procedures, Documentation Requirements'
    },
    {
      icon: ShieldCheck,
      title: 'Schutz vor Vergeltungsmaßnahmen',
      description: 'Absolute Vertraulichkeit und Schutz der Hinweisgeber vor Repressalien - rechtlich bindend und durchsetzbar.',
      impact: 'Kritisch',
      example: 'Whistleblower Identity Protection, Anti-Retaliation Measures, Anonymous Reporting Channels'
    },
    {
      icon: FileCheck,
      title: 'Sichere Fallbearbeitung',
      description: 'Strukturierte Aufnahme, Bearbeitung und Dokumentation von Hinweisen unter Einhaltung aller Datenschutzbestimmungen.',
      impact: 'Hoch',
      example: 'Case Management Workflows, DSGVO-compliant Processing, Audit Trail Documentation'
    },
    {
      icon: Timer,
      title: 'Strikte Bearbeitungsfristen',
      description: 'Gesetzlich vorgeschriebene Fristen: Eingangsbestätigung binnen 7 Tagen, Abschluss der Nachforschungen binnen 3 Monaten.',
      impact: 'Hoch',
      example: 'Automated Acknowledgments, Deadline Tracking, Progress Monitoring, Status Communication'
    }
  ];

  const solutions = [
    {
      title: 'KI-gestützte Hinweisaufnahme',
      description: 'Intelligente Kategorisierung und Priorisierung eingehender Hinweise mit automatischer Compliance-Prüfung',
      features: [
        'Automated Case Classification & Routing',
        'AI-Powered Risk Assessment',
        'Intelligent Content Analysis',
        'Multi-Channel Input Processing'
      ],
      icon: Bot,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Legal Expert Integration',
      description: 'Direkter Zugang zu spezialisierten Arbeitsrechts- und Compliance-Experten für komplexe Fälle',
      features: [
        'Specialist Legal Advisory',
        'Case-specific Legal Analysis',
        'Retaliation Risk Assessment',
        'Investigation Support & Guidance'
      ],
      icon: Gavel,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Sichere Compliance Platform',
      description: 'End-to-End verschlüsselte Plattform mit vollständiger Anonymität und DSGVO-Compliance',
      features: [
        'End-to-End Encryption',
        'Anonymous Reporting Channels',
        'DSGVO-compliant Data Processing',
        'Secure Case Documentation'
      ],
      icon: Shield,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const useCases = [
    {
      title: 'Großkonzern - Compliance Transformation',
      challenge: 'DAX-Unternehmen benötigt HinSchG-konforme interne Meldestelle für 50.000+ Mitarbeiter',
      solution: 'Multi-Channel Platform + AI Case Management + Legal Expert Support + Anonymous Reporting',
      outcome: 'Vollständige HinSchG-Compliance mit 95% automatisierter Fallbearbeitung',
      timeline: '4 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Mittelständisches Unternehmen - Erste Implementierung',
      challenge: 'Familienunternehmen (500 MA) implementiert erstmals strukturierte Whistleblowing-Prozesse',
      solution: 'Turnkey Solution + Legal Framework Setup + Employee Training + Process Documentation',
      outcome: 'Erfolgreiche Implementierung mit 100% rechtlicher Compliance und Mitarbeiterakzeptanz',
      timeline: '6 Wochen',
      complexity: 'Mittel'
    },
    {
      title: 'Öffentlicher Sektor - Verwaltungsmodernisierung',
      challenge: 'Landesverwaltung modernisiert Hinweisgebersysteme unter strikten Datenschutzvorgaben',
      solution: 'Government-Grade Security + DSGVO Excellence + Multi-Language Support + Accessibility',
      outcome: 'Rechts-sichere Modernisierung mit 40% mehr eingegangenen Hinweisen',
      timeline: '3 Monate',
      complexity: 'Hoch'
    }
  ];

  const hinschgRequirements = [
    {
      name: 'Interne Meldestellen',
      description: 'Einrichtung und Betrieb strukturierter interner Hinweisgebersysteme',
      coverage: 94,
      requirements: ['Secure Reporting Channels', 'Multi-Channel Access', 'Anonymous Options', '24/7 Availability'],
      icon: MessageSquare,
      detail: 'Sichere, vertrauliche und zugängliche Meldekanäle für alle Mitarbeiter und externe Personen'
    },
    {
      name: 'Vertraulichkeit & Anonymität',
      description: 'Absoluter Schutz der Identität von Hinweisgebern und vertrauliche Behandlung',
      coverage: 96,
      requirements: ['Identity Protection', 'Anonymous Processing', 'Access Controls', 'Data Encryption'],
      icon: ShieldCheck,
      detail: 'Technische und organisatorische Maßnahmen zum Schutz der Hinweisgeber-Identität'
    },
    {
      name: 'Fristenmanagement',
      description: 'Einhaltung gesetzlicher Bearbeitungs- und Kommunikationsfristen',
      coverage: 92,
      requirements: ['7-Day Acknowledgment', '3-Month Investigation', 'Progress Updates', 'Final Reports'],
      icon: Timer,
      detail: 'Automatisierte Fristenverfolgung und rechtzeitige Kommunikation mit Hinweisgebern'
    },
    {
      name: 'Fallbearbeitung & Dokumentation',
      description: 'Strukturierte Aufnahme, Untersuchung und Dokumentation von Hinweisen',
      coverage: 90,
      requirements: ['Case Management', 'Investigation Workflows', 'Evidence Documentation', 'Decision Tracking'],
      icon: FileText,
      detail: 'Vollständige Dokumentation aller Bearbeitungsschritte für Compliance-Nachweise'
    },
    {
      name: 'Schutz vor Vergeltung',
      description: 'Wirksame Maßnahmen gegen Benachteiligung und Vergeltungsmaßnahmen',
      coverage: 88,
      requirements: ['Anti-Retaliation Policies', 'Monitoring Systems', 'Support Measures', 'Legal Protection'],
      icon: Shield,
      detail: 'Proaktive Überwachung und Schutzmaßnahmen gegen Repressalien gegenüber Hinweisgebern'
    }
  ];

  const benefits = [
    {
      title: 'Legal Compliance',
      description: 'Vollständige HinSchG-Compliance mit rechtlicher Sicherheit',
      metric: '100%',
      detail: 'Rechtssichere Implementierung aller Gesetzesanforderungen'
    },
    {
      title: 'Process Automation',
      description: 'Automatisierte Fallbearbeitung und Fristenüberwachung',
      metric: '85%',
      detail: 'Reduktion manueller Bearbeitungsaufwände'
    },
    {
      title: 'Risk Mitigation',
      description: 'Früherkennung und Prävention von Compliance-Verstößen',
      metric: '75%',
      detail: 'Reduktion kritischer Compliance-Risiken durch frühzeitige Erkennung'
    },
    {
      title: 'Employee Trust',
      description: 'Erhöhtes Vertrauen durch sichere Meldekanäle',
      metric: '+50%',
      detail: 'Steigerung der Meldungsbereitschaft durch Vertrauensaufbau'
    }
  ];

  const applicationScope = [
    {
      category: 'Unternehmen',
      threshold: '50+ Beschäftigte',
      description: 'Alle Unternehmen mit mindestens 50 Beschäftigten müssen interne Meldestellen einrichten',
      sectors: ['Privatwirtschaft', 'Alle Branchen', 'Konzerne', 'Mittelstand'],
      requirements: 'Interne Meldestelle, Vertraulichkeit, Fristenmanagement',
      icon: Building2,
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Öffentlicher Sektor',
      threshold: 'Alle Behörden',
      description: 'Behörden, Kommunen und öffentliche Einrichtungen unabhängig von der Mitarbeiterzahl',
      sectors: ['Bundesbehörden', 'Landesbehörden', 'Kommunen', 'Öffentliche Unternehmen'],
      requirements: 'Erhöhte Transparenz, Zugänglichkeit, Bürgerschutz',
      icon: Globe,
      color: 'from-green-500 to-green-600'
    }
  ];

  const complianceAreas = [
    { name: 'Internal Reporting System Setup', coverage: 94, area: 'Infrastructure' },
    { name: 'Confidentiality & Anonymity Measures', coverage: 96, area: 'Data Protection' },
    { name: 'Legal Deadline Management', coverage: 92, area: 'Process Management' },
    { name: 'Anti-Retaliation Protection', coverage: 88, area: 'Employee Protection' }
  ];

  return (
    <>
      <SEOHead
        title="Hinweisgeberschutz – Whistleblower-System nach HinSchG"
        description="Hinweisgebersystem rechtssicher umsetzen: ✓ Digitale Meldestelle ✓ 100% anonym ✓ HinSchG-konform. Schützen Sie Whistleblower. Jetzt einrichten!"
        canonical="/hinweisgeberschutzgesetz"
        keywords="Hinweisgeberschutz, HinSchG, Whistleblower System, Hinweisgebersystem, Meldestelle"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-sm font-medium">Hinweisgeberschutzgesetz</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    HinSchG Compliance
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block mt-2">
                      mit KI & Legal Experts
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Implementieren Sie das Hinweisgeberschutzgesetz rechtssicher mit unserer 
                    KI-gestützten SaaS-Lösung und direktem Legal Expert Support.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>KI-automatisierte Hinweisaufnahme & Kategorisierung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>24/7 Legal Expert Support für Arbeitsrecht</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>End-to-End verschlüsselte Whistleblowing-Platform</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/compliance/hinweisgeberschutzgesetz">
                      <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        HinSchG Readiness Check
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      HinSchG Implementation Guide
                    </Button>
                  </div>
                </motion.div>

                {/* HinSchG Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-emerald-200 dark:border-emerald-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Whistleblowing Center</h3>
                        <Badge className="bg-green-100 text-green-700">HinSchG Compliant</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <ShieldCheck className="h-5 w-5 text-emerald-600" />
                            <span className="text-2xl font-bold text-emerald-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">HinSchG Score</p>
                          <div className="w-full bg-emerald-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-emerald-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <MessageSquare className="h-5 w-5 text-teal-600" />
                            <span className="text-2xl font-bold text-teal-700">147</span>
                          </div>
                          <p className="text-sm font-medium">Cases Processed</p>
                          <div className="flex items-center gap-1 mt-2">
                            <CheckCircle2 className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-teal-600">Anonymous</span>
                          </div>
                        </Card>
                      </div>

                      <div className="space-y-3">
                        {complianceAreas.map((area, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>{area.name}</span>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{area.area}</Badge>
                                <span className="font-semibold">{area.coverage}%</span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div 
                                className="bg-emerald-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: isVisible ? `${area.coverage}%` : 0 }}
                                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-emerald-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm font-medium">Secure</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  HinSchG Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Warum das Hinweisgeberschutzgesetz komplexe neue Anforderungen für Unternehmen schafft
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <point.icon className="h-6 w-6 text-emerald-600" />
                            <div>
                              <h3 className="font-bold">{point.title}</h3>
                              <Badge 
                                variant={point.impact === 'Kritisch' ? 'destructive' : point.impact === 'Hoch' ? 'default' : 'secondary'}
                                className="text-xs mt-1"
                              >
                                {point.impact}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400">
                          {point.description}
                        </p>
                        
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Beispiele:</span> {point.example}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Scope Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  HinSchG Anwendungsbereich
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Welche Organisationen sind vom Hinweisgeberschutzgesetz betroffen?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applicationScope.map((scope, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                            scope.color
                          )}>
                            <scope.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{scope.category}</h3>
                            <Badge className="mt-1 bg-emerald-100 text-emerald-700">
                              {scope.threshold}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400">
                          {scope.description}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Betroffene Bereiche:</h4>
                            <div className="flex flex-wrap gap-2">
                              {scope.sectors.map((sector, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {sector}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              <span className="font-semibold">Anforderungen:</span> {scope.requirements}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HinSchG Requirements Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  HinSchG Kernanforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Die fünf zentralen Säulen des Hinweisgeberschutzes
                </p>
              </div>

              <div className="space-y-6">
                {hinschgRequirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                            <requirement.icon className="h-6 w-6 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{requirement.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {requirement.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {requirement.requirements.map((req, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Implementation</span>
                            <span className="font-semibold">{requirement.coverage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-emerald-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${requirement.coverage}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {requirement.detail}
                          </p>
                        </div>
                        
                        <div>
                          <Badge className="bg-green-100 text-green-700">
                            Active
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  KI-gestützte HinSchG SaaS-Lösung
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Innovative Technologie kombiniert mit Arbeitsrechts-Expertise für sichere Compliance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                      <div className="space-y-4">
                        <div className={cn(
                          "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                          solution.color
                        )}>
                          <solution.icon className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-bold">{solution.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {solution.description}
                        </p>

                        <div className="space-y-3 pt-2">
                          {solution.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  HinSchG Success Stories
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Erfolgreiche Implementierungen des Hinweisgeberschutzgesetzes
                </p>
              </div>

              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-emerald-700">{useCase.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Challenge:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm">
                            <span className="font-medium text-emerald-700">Solution:</span> {useCase.solution}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-teal-700">
                            {useCase.outcome}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Badge variant="outline" className="text-xs">
                            {useCase.timeline}
                          </Badge>
                          <Badge 
                            variant={useCase.complexity === 'Hoch' ? 'destructive' : useCase.complexity === 'Mittel' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {useCase.complexity}
                          </Badge>
                        </div>
                        
                        <div>
                          <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Business Impact von HinSchG Compliance
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Vorteile unserer KI-gestützten Whistleblowing-Lösung
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="font-semibold mb-2">{benefit.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {benefit.description}
                      </div>
                      <div className="text-xs text-emerald-600 font-medium">
                        {benefit.detail}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Rechtssichere HinSchG-Implementierung
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Implementieren Sie das Hinweisgeberschutzgesetz mit unserer KI-gestützten SaaS-Lösung 
                  und profitieren Sie von direktem Arbeitsrechts-Expert Support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/compliance/hinweisgeberschutzgesetz">
                    <Button 
                      size="lg" 
                      className="bg-white text-emerald-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      HinSchG Readiness Check buchen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Arbeitsrechts-Expert Beratung
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Über 120 Unternehmen nutzen bereits unsere sichere HinSchG Whistleblowing-Lösung
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default HinweisgeberschutzCompliance;