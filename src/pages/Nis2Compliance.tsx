import React, { useEffect, useState } from 'react';
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
  Wifi
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Nis2Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(92);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const painPoints = [
    {
      icon: Target,
      title: 'Erweiterte Berichtspflichten',
      description: 'NIS2 erweitert die Meldepflichten erheblich - Cybersicherheitsvorfälle müssen binnen 24h initial und binnen 72h detailliert gemeldet werden.',
      impact: 'Kritisch',
      example: 'Incident Detection, Automated Reporting, Stakeholder Communication, Regulatory Notifications'
    },
    {
      icon: Scale,
      title: 'Drastisch erhöhte Bußgelder',
      description: 'Sanktionen bis zu 10 Mio. € oder 2% des weltweiten Jahresumsatzes - deutlich höher als unter der ursprünglichen NIS-Richtlinie.',
      impact: 'Kritisch',
      example: 'Compliance Violations, Risk Assessment Failures, Inadequate Security Measures'
    },
    {
      icon: Building2,
      title: 'Erweiterte Sektorabdeckung',
      description: 'NIS2 erfasst deutlich mehr Unternehmen: Energie, Verkehr, Banken, Gesundheit, digitale Infrastruktur, öffentliche Verwaltung und mehr.',
      impact: 'Hoch',
      example: 'Critical Infrastructure, Essential Services, Important Entities, Digital Service Providers'
    },
    {
      icon: ShieldAlert,
      title: 'Supply Chain Cybersecurity',
      description: 'Neue Anforderungen an das Cybersicherheits-Risikomanagement der gesamten Lieferkette und Drittanbieter.',
      impact: 'Hoch',
      example: 'Vendor Risk Assessment, Third-Party Security, Supply Chain Mapping, Contractor Compliance'
    }
  ];

  const solutions = [
    {
      title: 'KI-gestützte NIS2 Compliance',
      description: 'Intelligente Automatisierung für kontinuierliche NIS2-Compliance und Risikomanagement',
      features: [
        'Automated Incident Detection & Reporting',
        'AI-Powered Risk Assessment',
        'Intelligent Compliance Monitoring',
        'Predictive Threat Analysis'
      ],
      icon: Bot,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Legal Expert Integration',
      description: 'Direkter Zugang zu spezialisierten NIS2-Rechtsexperten und Compliance-Beratern',
      features: [
        'NIS2 Legal Advisory Services',
        'Regulatory Change Management',
        'Incident Response Legal Support',
        'Compliance Documentation Review'
      ],
      icon: Scale,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Real-time Compliance Dashboard',
      description: 'Umfassendes Echtzeit-Monitoring für alle NIS2-Anforderungen und Compliance-Status',
      features: [
        'Live Compliance Status Tracking',
        'Automated Regulatory Reporting',
        'Risk Heatmap Visualization',
        'Executive Compliance Summaries'
      ],
      icon: Monitor,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const useCases = [
    {
      title: 'Kritische Infrastruktur - Energieversorger',
      challenge: 'Großer Energieversorger muss NIS2-Compliance bis Oktober 2024 implementieren',
      solution: 'AI-Powered Risk Management + Legal Expert Support + Automated Incident Reporting',
      outcome: 'Vollständige NIS2-Compliance mit 90% Automatisierung der Berichtsprozesse',
      timeline: '6 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Digitaler Dienstleister - Cloud Provider',
      challenge: 'Cloud-Service-Provider fällt unter neue NIS2-Kategorisierung als "Important Entity"',
      solution: 'Supply Chain Risk Management + Continuous Monitoring + Legal Compliance Framework',
      outcome: 'Erfolgreiche Registrierung und laufende Compliance mit 24/7 Monitoring',
      timeline: '4 Monate',
      complexity: 'Mittel'
    },
    {
      title: 'Gesundheitswesen - Krankenhaus-Kette',
      challenge: 'Private Krankenhaus-Kette benötigt NIS2-Compliance für kritische Gesundheitsdienste',
      solution: 'Healthcare-Specific Risk Assessment + Incident Response + Regulatory Reporting',
      outcome: 'KRITIS-konforme Cybersecurity mit automatisierter NIS2-Berichterstattung',
      timeline: '8 Monate',
      complexity: 'Hoch'
    }
  ];

  const nis2Requirements = [
    {
      name: 'Cybersicherheits-Risikomanagement',
      description: 'Umfassende Cybersicherheitsmaßnahmen und Risikomanagement-Verfahren',
      coverage: 95,
      requirements: ['Risk Assessment', 'Security Policies', 'Business Continuity', 'Crisis Management'],
      icon: Shield,
      detail: 'Systematische Identifikation, Bewertung und Behandlung von Cybersicherheitsrisiken'
    },
    {
      name: 'Incident Response & Reporting',
      description: 'Strukturierte Behandlung und Meldung von Cybersicherheitsvorfällen',
      coverage: 92,
      requirements: ['24h Initial Report', '72h Detailed Report', 'Impact Assessment', 'Stakeholder Communication'],
      icon: AlertTriangle,
      detail: 'Schnelle Erkennung, Bewertung und Meldung von Cybersicherheitsvorfällen'
    },
    {
      name: 'Supply Chain Security',
      description: 'Cybersicherheit der Lieferkette und Risikobewertung von Drittanbietern',
      coverage: 88,
      requirements: ['Vendor Risk Assessment', 'Third-Party Security', 'Contract Security', 'Continuous Monitoring'],
      icon: Network,
      detail: 'Umfassende Sicherheitsbewertung und -überwachung der gesamten Lieferkette'
    },
    {
      name: 'Governance & Oversight',
      description: 'Unternehmensführung und Aufsicht über Cybersicherheitsmaßnahmen',
      coverage: 94,
      requirements: ['Management Accountability', 'Security Training', 'Regular Audits', 'Continuous Improvement'],
      icon: Users,
      detail: 'Klare Verantwortlichkeiten und Governance-Strukturen für Cybersicherheit'
    },
    {
      name: 'Technical Security Measures',
      description: 'Technische Cybersicherheitsmaßnahmen und Schutzkontrollen',
      coverage: 90,
      requirements: ['Access Controls', 'Encryption', 'Network Security', 'Endpoint Protection'],
      icon: Lock,
      detail: 'Implementierung und Wartung technischer Sicherheitsmaßnahmen'
    }
  ];

  const benefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Vollständige NIS2-Compliance mit rechtlicher Sicherheit',
      metric: '100%',
      detail: 'NIS2-konforme Implementierung aller Anforderungen'
    },
    {
      title: 'Automated Reporting',
      description: 'Automatisierte Incident-Meldungen und Compliance-Reports',
      metric: '90%',
      detail: 'Reduktion manueller Berichterstattungsaufwände'
    },
    {
      title: 'Risk Reduction',
      description: 'Drastische Reduktion von Cybersecurity-Risiken',
      metric: '85%',
      detail: 'weniger kritische Sicherheitsvorfälle durch Prävention'
    },
    {
      title: 'Cost Savings',
      description: 'Kostenersparnis durch effiziente Compliance-Prozesse',
      metric: '60%',
      detail: 'Reduktion von Compliance-Kosten durch Automatisierung'
    }
  ];

  const entityTypes = [
    {
      type: 'Essential Entities',
      description: 'Kritische Einrichtungen mit höchsten Sicherheitsanforderungen',
      sectors: ['Energie', 'Verkehr', 'Banken', 'Finanzmarktinfrastrukturen', 'Gesundheitswesen', 'Trinkwasser', 'Abwasser', 'Digitale Infrastruktur', 'ICT Service Management', 'Weltraum'],
      requirements: 'Strengste Cybersicherheitsanforderungen und Aufsicht',
      icon: ShieldAlert,
      color: 'from-red-500 to-red-600'
    },
    {
      type: 'Important Entities',
      description: 'Wichtige Einrichtungen mit erheblichen Sicherheitsanforderungen',
      sectors: ['Post und Kurierdienste', 'Abfallwirtschaft', 'Chemische Industrie', 'Lebensmittelproduktion', 'Verarbeitendes Gewerbe', 'Digitale Anbieter', 'Forschungseinrichtungen'],
      requirements: 'Signifikante Cybersicherheitsmaßnahmen und Berichtspflichten',
      icon: Shield,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const complianceAreas = [
    { name: 'Risk Management Implementation', coverage: 95, area: 'Governance' },
    { name: 'Incident Response Procedures', coverage: 92, area: 'Operations' },
    { name: 'Supply Chain Security', coverage: 88, area: 'Third-Party Risk' },
    { name: 'Technical Security Controls', coverage: 90, area: 'Technology' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400">
                    <ShieldAlert className="h-4 w-4" />
                    <span className="text-sm font-medium">NIS2-Richtlinie</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    NIS2 Compliance
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                      mit KI & Legal Experts
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie die neue EU NIS2-Richtlinie mit unserer KI-gestützten SaaS-Lösung 
                    und direktem Zugang zu spezialisierten Rechtsexperten.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>KI-automatisierte Incident Detection & Reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>24/7 Legal Expert Support für NIS2-Compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Real-time Compliance Dashboard & Monitoring</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&regulation=nis2">
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        NIS2 Readiness Assessment
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      NIS2 Implementation Guide
                    </Button>
                  </div>
                </motion.div>

                {/* NIS2 Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-purple-200 dark:border-purple-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">NIS2 Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">Ready for Oct 2024</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <ShieldAlert className="h-5 w-5 text-purple-600" />
                            <span className="text-2xl font-bold text-purple-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">NIS2 Score</p>
                          <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Bot className="h-5 w-5 text-indigo-600" />
                            <span className="text-2xl font-bold text-indigo-700">24/7</span>
                          </div>
                          <p className="text-sm font-medium">AI Monitoring</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Activity className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-indigo-600">Active</span>
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
                                className="bg-purple-600 h-2 rounded-full"
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-purple-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">AI-Powered</span>
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
                  NIS2 Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Warum die neue NIS2-Richtlinie erhebliche Auswirkungen auf Unternehmen hat
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
                            <point.icon className="h-6 w-6 text-purple-600" />
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

        {/* Entity Types Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  NIS2 Anwendungsbereich
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Welche Unternehmen sind von der NIS2-Richtlinie betroffen?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {entityTypes.map((entity, index) => (
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
                            entity.color
                          )}>
                            <entity.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{entity.type}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {entity.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Betroffene Sektoren:</h4>
                            <div className="flex flex-wrap gap-2">
                              {entity.sectors.map((sector, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {sector}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {entity.requirements}
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

        {/* NIS2 Requirements Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  NIS2 Kernanforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Die fünf zentralen Säulen der NIS2-Compliance
                </p>
              </div>

              <div className="space-y-6">
                {nis2Requirements.map((requirement, index) => (
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
                          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <requirement.icon className="h-6 w-6 text-purple-600" />
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
                              className="bg-purple-600 h-2 rounded-full"
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
                  KI-gestützte NIS2 SaaS-Lösung
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Innovative Technologie kombiniert mit Rechtsexpertise für nachhaltige Compliance
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
                  NIS2 Success Stories
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Erfolgreiche NIS2-Implementierungen in verschiedenen Sektoren
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
                          <h3 className="text-lg font-bold mb-2 text-purple-700">{useCase.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Challenge:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm">
                            <span className="font-medium text-purple-700">Solution:</span> {useCase.solution}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-indigo-700">
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
        <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Business Impact von NIS2 Compliance
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Vorteile unserer KI-gestützten NIS2-Lösung
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
                      <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="font-semibold mb-2">{benefit.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {benefit.description}
                      </div>
                      <div className="text-xs text-purple-600 font-medium">
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Bereit für NIS2? Jetzt starten!
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Implementieren Sie die NIS2-Richtlinie mit unserer KI-gestützten SaaS-Lösung 
                  und profitieren Sie von direktem Legal Expert Support. Deadline: Oktober 2024.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&regulation=nis2">
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      NIS2 Readiness Assessment buchen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Legal Expert Beratung
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Über 50 Unternehmen nutzen bereits unsere KI-gestützte NIS2 Compliance-Lösung
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nis2Compliance;