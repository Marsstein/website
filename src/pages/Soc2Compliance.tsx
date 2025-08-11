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
  FileText,
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
  Cpu,
  Settings,
  AlertTriangle,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Soc2Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(87);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const painPoints = [
    {
      icon: Building2,
      title: 'Kundenvertrauen und Vertragsforderungen',
      description: 'Enterprise-Kunden fordern zunehmend SOC 2 Type II Zertifizierungen als Mindestanforderung für Geschäftsbeziehungen.',
      impact: 'Kritisch',
      example: 'Verlorene Deals aufgrund fehlender SOC 2 Compliance, langwierige Vendor Security Assessments'
    },
    {
      icon: Lock,
      title: 'Komplexe Security Controls Implementation',
      description: 'Die 5 Trust Service Criteria erfordern umfassende Kontrollen über Security, Availability, Processing Integrity, Confidentiality und Privacy.',
      impact: 'Hoch',
      example: 'Unklare Control-Mappings, manuelle Evidenz-Sammlung, inconsistente Policy-Umsetzung'
    },
    {
      icon: FileCheck,
      title: 'Audit-Readiness und Evidenz-Management',
      description: 'Kontinuierliche Dokumentation und Monitoring von Controls für erfolgreiche SOC 2 Type II Audits.',
      impact: 'Hoch',
      example: 'Fehlende Audit-Trails, unvollständige Dokumentation, manuelle Evidenz-Sammlung'
    },
    {
      icon: TrendingUp,
      title: 'Skalierbare Compliance-Prozesse',
      description: 'Wachsende SaaS-Unternehmen müssen Compliance-Prozesse automatisieren und standardisieren.',
      impact: 'Mittel',
      example: 'Manuelle Compliance-Checks, inkonsistente Prozesse across Teams, Scaling-Probleme'
    }
  ];

  const solutions = [
    {
      title: 'SOC 2 Framework Implementation',
      description: 'Strukturierte Umsetzung aller 5 Trust Service Criteria mit branchenspezifischen Best Practices',
      features: [
        'Security Controls Design und Implementation',
        'Availability Monitoring und Incident Response',
        'Processing Integrity für Datenverarbeitung',
        'Confidentiality Controls für sensible Daten',
        'Privacy Controls für personenbezogene Daten'
      ],
      icon: Shield,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Automated Evidence Collection',
      description: 'Kontinuierliche Evidenz-Sammlung und Audit-Trail Generation für SOC 2 Type II Readiness',
      features: [
        'Automatisierte Control Testing',
        'Real-time Compliance Monitoring',
        'Audit-Trail Dokumentation',
        'Exception Management und Remediation'
      ],
      icon: Bot,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Vendor Security Program',
      description: 'Effiziente Bearbeitung von Vendor Security Assessments und Kundenanfragen',
      features: [
        'Standardisierte Security Questionnaire Responses',
        'Trust Center und Public Certifications',
        'Customer Due Diligence Support',
        'Security Posture Communication'
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const useCases = [
    {
      title: 'SaaS-Startup SOC 2 Erstimplementierung',
      challenge: 'Schnelle SOC 2 Type II Zertifizierung für erste Enterprise-Kunden',
      solution: 'Strukturierte 6-Monats-Implementierung mit automatisierter Evidence Collection',
      outcome: 'Erfolgreiche Zertifizierung und 40% kürzere Sales Cycles',
      timeline: '6 Monate',
      complexity: 'Mittel'
    },
    {
      title: 'Scale-up Compliance Automation',
      challenge: 'Manuelle SOC 2 Prozesse skalieren nicht mit Unternehmenswachstum',
      solution: 'Automatisierte Control Monitoring und Self-Service Vendor Assessments',
      outcome: '80% weniger manuelle Arbeit bei Compliance-Teams',
      timeline: '3 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Enterprise Customer Onboarding',
      challenge: 'Komplexe Vendor Security Reviews verzögern Deal-Closures',
      solution: 'Standardisierte Trust Center und proaktive Security Documentation',
      outcome: '60% schnellere Enterprise-Onboardings',
      timeline: '2 Monate',
      complexity: 'Niedrig'
    }
  ];

  const trustCriteria = [
    {
      name: 'Security',
      description: 'Schutz vor unautorisierten Zugriffen auf Systeme und Daten',
      coverage: 95,
      controls: ['Access Controls', 'Network Security', 'Vulnerability Management'],
      icon: Shield
    },
    {
      name: 'Availability',
      description: 'Gewährleistung der Systemverfügbarkeit gemäß SLA-Vereinbarungen',
      coverage: 98,
      controls: ['Backup & Recovery', 'Monitoring', 'Incident Response'],
      icon: Activity
    },
    {
      name: 'Processing Integrity',
      description: 'Vollständige und genaue Systemverarbeitung wie autorisiert',
      coverage: 92,
      controls: ['Data Validation', 'Error Handling', 'System Monitoring'],
      icon: Cpu
    },
    {
      name: 'Confidentiality',
      description: 'Schutz vertraulicher Informationen vor unbefugter Offenlegung',
      coverage: 96,
      controls: ['Data Classification', 'Encryption', 'Access Controls'],
      icon: Eye
    },
    {
      name: 'Privacy',
      description: 'Sammlung, Nutzung und Aufbewahrung personenbezogener Daten',
      coverage: 89,
      controls: ['Privacy Notices', 'Consent Management', 'Data Retention'],
      icon: Users
    }
  ];

  const benefits = [
    {
      title: 'Kundenvertrauen und Umsatzwachstum',
      description: 'SOC 2 Type II als Türöffner für Enterprise-Kunden',
      metric: '+40%',
      detail: 'schnellere Enterprise Sales Cycles'
    },
    {
      title: 'Operational Excellence',
      description: 'Strukturierte Sicherheitsprozesse und Incident Response',
      metric: '99.9%',
      detail: 'System Availability SLA'
    },
    {
      title: 'Compliance Effizienz',
      description: 'Automatisierte Evidence Collection und Audit Readiness',
      metric: '80%',
      detail: 'weniger manuelle Compliance-Arbeit'
    },
    {
      title: 'Risk Management',
      description: 'Proaktive Identifikation und Mitigation von Security Risks',
      metric: '90%',
      detail: 'schnellere Incident Response'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">SOC 2 Compliance</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    SOC 2 Compliance
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                      leicht gemacht
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Gewinnen Sie Kundenvertrauen mit SOC 2 Type II Zertifizierung.
                    Strukturierte Implementation der 5 Trust Service Criteria für SaaS-Unternehmen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>SOC 2 Type II Audit-Readiness in 6 Monaten</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Automatisierte Evidence Collection und Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Enterprise-Ready Security Posture</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&framework=soc2">
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        SOC 2 Readiness Assessment
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      SOC 2 Implementation Guide
                    </Button>
                  </div>
                </motion.div>

                {/* SOC 2 Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-purple-200 dark:border-purple-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">SOC 2 Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">Type II Ready</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Award className="h-5 w-5 text-purple-600" />
                            <span className="text-2xl font-bold text-purple-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">SOC 2 Score</p>
                          <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Shield className="h-5 w-5 text-blue-600" />
                            <span className="text-2xl font-bold text-blue-700">5/5</span>
                          </div>
                          <p className="text-sm font-medium">Trust Criteria</p>
                          <div className="flex items-center gap-1 mt-2">
                            {[1,2,3,4,5].map((i) => (
                              <CheckCircle2 key={i} className="h-3 w-3 text-green-600" />
                            ))}
                          </div>
                        </Card>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Activity className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Automated Control Testing aktiv</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">Live</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileCheck className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">Evidence Collection läuft</span>
                          </div>
                          <span className="text-xs text-gray-500">24/7</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-purple-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Audit-Ready</span>
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
                  SOC 2 Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Warum SOC 2 für SaaS-Unternehmen kritisch, aber komplex ist
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

        {/* Trust Service Criteria Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  SOC 2 Trust Service Criteria
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Comprehensive Coverage aller 5 Trust Service Criteria
                </p>
              </div>

              <div className="space-y-6">
                {trustCriteria.map((criteria, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <criteria.icon className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{criteria.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {criteria.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {criteria.controls.map((control, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {control}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Coverage</span>
                            <span className="font-semibold">{criteria.coverage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${criteria.coverage}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Badge className="bg-green-100 text-green-700">
                            Implemented
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
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  SOC 2 Implementation Lösungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Strukturierte Umsetzung für nachhaltige Compliance
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
                    <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
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

                        <div className="space-y-2 pt-2">
                          {solution.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
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
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  SOC 2 Success Stories
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Typische Anwendungsfälle und Implementierungserfolge
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
                          <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
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
                          <p className="text-sm font-medium text-green-700">
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
        <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Business Impact von SOC 2 Compliance
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Vorteile für Ihr SaaS-Unternehmen
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Starten Sie Ihre SOC 2 Journey heute
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Gewinnen Sie Kundenvertrauen mit professioneller SOC 2 Type II Implementierung.
                  Unsere Experten begleiten Sie von der ersten Planung bis zur erfolgreichen Zertifizierung.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&framework=soc2">
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      SOC 2 Readiness Assessment buchen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Expertenberatung anfordern
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Professionelle SOC 2 Compliance für SaaS-Unternehmen
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

export default Soc2Compliance;