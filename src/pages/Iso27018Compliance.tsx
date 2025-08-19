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
  Server,
  Settings,
  AlertTriangle,
  Activity,
  Cloud,
  UserCheck,
  Monitor,
  Fingerprint,
  Key,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Iso27018Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(95);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ISO 27018 Privacy Zertifizierung",
    "description": "ISO 27018 für Cloud-Datenschutz: Privacy Controls für personenbezogene Daten in der Cloud",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Cloud Privacy Certification",
    "areaServed": "DE"
  };

  const painPoints = [
    {
      icon: Database,
      title: 'PII-Schutz in Public Cloud Services',
      description: 'Personenbezogene Daten (PII) in öffentlichen Cloud-Umgebungen DSGVO-konform und nach ISO 27018 Standard schützen.',
      impact: 'Kritisch',
      example: 'Customer Data in SaaS, Employee Records in HR Cloud, Patient Data in Health Cloud'
    },
    {
      icon: UserCheck,
      title: 'Cloud Processor Accountability',
      description: 'Nachweis der Verantwortlichkeit und Compliance von Cloud-Service-Providern als Auftragsverarbeiter.',
      impact: 'Kritisch',
      example: 'Data Processing Agreements, Subprocessor Management, Audit Rights Implementation'
    },
    {
      icon: Globe,
      title: 'Cross-Border Data Transfer Compliance',
      description: 'Internationale Datenübertragungen in Cloud-Umgebungen unter Einhaltung verschiedener Datenschutzgesetze.',
      impact: 'Hoch',
      example: 'EU-US Data Transfers, Data Localization Requirements, Regional Privacy Laws'
    },
    {
      icon: Eye,
      title: 'Transparenz und Data Subject Rights',
      description: 'Vollständige Transparenz über Datenverarbeitung und Umsetzung von Betroffenenrechten in Cloud-Services.',
      impact: 'Hoch',
      example: 'Data Subject Access Requests, Right to Erasure, Data Portability in Cloud'
    }
  ];

  const solutions = [
    {
      title: 'PII Protection Framework',
      description: 'Umfassender Schutz personenbezogener Daten in Cloud-Umgebungen nach ISO 27018',
      features: [
        'Cloud PII Classification und Inventory',
        'Purpose-Bound Data Processing Controls',
        'Automated PII Discovery und Monitoring',
        'Cloud Data Minimization Strategies'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cloud Privacy Governance',
      description: 'Strukturierte Privacy-Governance für Cloud-Service-Provider und -Nutzer',
      features: [
        'Data Processing Agreement Management',
        'Subprocessor Compliance Monitoring',
        'Privacy Impact Assessment Automation',
        'Consent Management in Cloud Services'
      ],
      icon: FileCheck,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Transparent Cloud Operations',
      description: 'Vollständige Transparenz und Kontrolle über Datenverarbeitung in der Cloud',
      features: [
        'Data Processing Transparency Dashboard',
        'Automated Data Subject Rights Fulfillment',
        'Cloud Data Lineage Tracking',
        'Privacy-by-Design Cloud Architecture'
      ],
      icon: Eye,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const useCases = [
    {
      title: 'SaaS Provider ISO 27018 Certification',
      challenge: 'SaaS-Anbieter benötigt ISO 27018 Zertifizierung für Enterprise-Kunden in der EU',
      solution: 'Comprehensive PII Protection + Privacy Governance + Transparency Controls',
      outcome: 'Erfolgreiche ISO 27018 Zertifizierung und 60% Umsatzsteigerung in EU-Markt',
      timeline: '8 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Global Cloud Migration mit PII-Schutz',
      challenge: 'Internationale Konzern-Migration zu Multi-Cloud mit strikten Datenschutzanforderungen',
      solution: 'Cross-Border Compliance Framework + Data Residency Controls + PII Governance',
      outcome: 'DSGVO-konforme Global Cloud mit 99.95% Data Protection Compliance',
      timeline: '12 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Healthcare Cloud Privacy Compliance',
      challenge: 'Gesundheitsdatenverarbeitung in der Cloud unter DSGVO und spezifischen Health Regulations',
      solution: 'Healthcare PII Protection + Medical Data Governance + Patient Rights Management',
      outcome: 'Vollständige Compliance mit 40% Effizienzsteigerung bei Patientenanfragen',
      timeline: '6 Monate',
      complexity: 'Mittel'
    }
  ];

  const privacyControls = [
    {
      name: 'PII Identification & Classification',
      description: 'Systematische Identifikation und Klassifikation personenbezogener Daten',
      coverage: 98,
      controls: ['Data Discovery', 'PII Classification', 'Sensitive Data Tagging'],
      icon: Database,
      detail: 'Automatisierte Erkennung und Kategorisierung aller PII-Datentypen in Cloud-Umgebungen'
    },
    {
      name: 'Consent & Purpose Management',
      description: 'Verwaltung von Einwilligungen und zweckgebundener Datenverarbeitung',
      coverage: 95,
      controls: ['Consent Capture', 'Purpose Binding', 'Consent Withdrawal'],
      icon: UserCheck,
      detail: 'Granulare Kontrolle über Einwilligungen und deren Durchsetzung in Cloud-Services'
    },
    {
      name: 'Data Subject Rights Implementation',
      description: 'Umsetzung aller Betroffenenrechte in Cloud-Umgebungen',
      coverage: 92,
      controls: ['Access Rights', 'Rectification', 'Erasure', 'Portability'],
      icon: Users,
      detail: 'Automatisierte Bearbeitung von Auskunfts-, Berichtigungs- und Löschungsanfragen'
    },
    {
      name: 'Cross-Border Transfer Controls',
      description: 'Sichere internationale Datenübertragungen mit Rechtssicherheit',
      coverage: 94,
      controls: ['Transfer Impact Assessment', 'Adequacy Decisions', 'SCCs'],
      icon: Globe,
      detail: 'Compliance mit verschiedenen Datenschutzgesetzen bei internationalen Transfers'
    },
    {
      name: 'Processor Accountability',
      description: 'Nachweis der Verantwortlichkeit und Compliance von Auftragsverarbeitern',
      coverage: 96,
      controls: ['DPA Management', 'Subprocessor Oversight', 'Audit Rights'],
      icon: ShieldCheck,
      detail: 'Umfassende Dokumentation und Überwachung der Datenverarbeitung durch Dritte'
    }
  ];

  const benefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Vollständige DSGVO und internationale Datenschutz-Compliance',
      metric: '100%',
      detail: 'DSGVO Article 28 Compliance für Cloud Processors'
    },
    {
      title: 'Risk Mitigation',
      description: 'Drastische Reduktion von Datenschutz- und Compliance-Risiken',
      metric: '90%',
      detail: 'weniger datenschutzrelevante Sicherheitsvorfälle'
    },
    {
      title: 'Operational Efficiency',
      description: 'Automatisierte Privacy-Prozesse und Betroffenenrechte',
      metric: '70%',
      detail: 'schnellere Bearbeitung von Data Subject Requests'
    },
    {
      title: 'Market Access',
      description: 'Erschließung neuer Märkte durch Privacy-Compliance',
      metric: '+65%',
      detail: 'Umsatzsteigerung durch Enterprise-Kunden-Akquisition'
    }
  ];

  const complianceAreas = [
    { name: 'PII Protection Controls', coverage: 98, area: 'Data Protection' },
    { name: 'Consent Management', coverage: 95, area: 'Privacy Rights' },
    { name: 'Cross-Border Transfers', coverage: 94, area: 'International Compliance' },
    { name: 'Processor Accountability', coverage: 96, area: 'Third-Party Risk' }
  ];

  return (
    <>
      <SEOHead
        title="ISO 27018 – Cloud-Datenschutz für personenbezogene Daten"
        description="ISO 27018 Privacy-Zertifizierung: PII-Schutz in der Cloud nach DSGVO. ✓ Public Cloud Privacy ✓ Compliance. Jetzt zertifizieren!"
        canonical="/iso-27018"
        keywords="ISO 27018, Cloud Privacy, Cloud Datenschutz, PII Protection, ISO 27018 Zertifizierung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">ISO 27018 Compliance</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    ISO 27018 Cloud Privacy
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block mt-2">
                      Protection
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Schützen Sie personenbezogene Daten in der Cloud mit ISO 27018. 
                    DSGVO-konforme Cloud-Privacy-Governance für Public Cloud Services.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO 27018 PII Protection Framework</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO Article 28 Cloud Processor Compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Automated Data Subject Rights Management</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&framework=iso27018">
                      <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Cloud Privacy Assessment
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      ISO 27018 Implementation Guide
                    </Button>
                  </div>
                </motion.div>

                {/* ISO 27018 Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-green-200 dark:border-green-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Cloud Privacy Center</h3>
                        <Badge className="bg-green-100 text-green-700">ISO 27018 Certified</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Shield className="h-5 w-5 text-green-600" />
                            <span className="text-2xl font-bold text-green-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">Privacy Score</p>
                          <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-green-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Database className="h-5 w-5 text-emerald-600" />
                            <span className="text-2xl font-bold text-emerald-700">12.3M</span>
                          </div>
                          <p className="text-sm font-medium">PII Records Protected</p>
                          <div className="flex items-center gap-1 mt-2">
                            <CheckCircle2 className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-emerald-600">DSGVO Compliant</span>
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
                                className="bg-green-600 h-2 rounded-full"
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-green-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Privacy-Ready</span>
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
                  Cloud Privacy Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Warum personenbezogener Datenschutz in Cloud-Umgebungen spezielle Aufmerksamkeit erfordert
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
                            <point.icon className="h-6 w-6 text-green-600" />
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

        {/* Privacy Controls Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ISO 27018 Privacy Controls
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Comprehensive PII Protection Controls für Cloud-Umgebungen
                </p>
              </div>

              <div className="space-y-8">
                {privacyControls.map((control, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8 hover:shadow-xl transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                              <control.icon className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{control.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {control.description}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {control.detail}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {control.controls.map((controlItem, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {controlItem}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Implementation</span>
                            <span className="font-semibold text-green-600">{control.coverage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <motion.div 
                              className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${control.coverage}%` }}
                              transition={{ duration: 1.2, delay: 0.3 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Badge className="bg-green-100 text-green-700 text-sm px-4 py-2">
                            <CheckCircle2 className="h-4 w-4 mr-2" />
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
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Cloud Privacy Implementation
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Strukturierte Umsetzung für DSGVO-konforme Cloud-Services
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
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Cloud Privacy Success Stories
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
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-green-700">{useCase.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Challenge:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm">
                            <span className="font-medium text-green-700">Solution:</span> {useCase.solution}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-emerald-700">
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
                        
                        <div className="text-center">
                          <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
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
        <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Business Impact von ISO 27018
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Vorteile für Ihre Cloud-Privacy-Governance
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
                      <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="font-semibold mb-2">{benefit.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {benefit.description}
                      </div>
                      <div className="text-xs text-green-600 font-medium">
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  DSGVO-konforme Cloud-Privacy mit ISO 27018
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Schützen Sie personenbezogene Daten in Public Cloud Services nach höchsten Standards.
                  Unsere Privacy-Experten implementieren ISO 27018 für vollständige DSGVO-Compliance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&framework=iso27018">
                    <Button 
                      size="lg" 
                      className="bg-white text-green-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Cloud Privacy Assessment buchen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Privacy-Expertenberatung anfordern
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Professionelle ISO 27018 Privacy-Expertise für Cloud-Service-Provider
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

export default Iso27018Compliance;