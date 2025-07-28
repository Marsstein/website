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
  Cloud, 
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
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Iso27017Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(91);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const painPoints = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Security Governance',
      description: 'Einheitliche Sicherheitsstandards über verschiedene Cloud-Provider hinweg implementieren und überwachen.',
      impact: 'Kritisch',
      example: 'AWS, Azure, GCP Security Posture Management, Cross-Cloud Policy Enforcement'
    },
    {
      icon: Database,
      title: 'Cloud Data Protection & Residency',
      description: 'Datenschutz und -souveränität in hybriden und Multi-Cloud-Umgebungen gewährleisten.',
      impact: 'Kritisch',
      example: 'Data Sovereignty, Cross-Border Cloud Transfers, Cloud Encryption Management'
    },
    {
      icon: Users,
      title: 'Cloud Identity & Access Management',
      description: 'Sichere Identitäts- und Zugriffsverwaltung für Cloud-Services und geteilte Verantwortungsmodelle.',
      impact: 'Hoch',
      example: 'Multi-Cloud SSO, Privileged Access Management, Cloud Service Accounts'
    },
    {
      icon: AlertTriangle,
      title: 'Cloud Vendor Risk Management',
      description: 'Bewertung und Management von Sicherheitsrisiken bei Cloud-Service-Providern.',
      impact: 'Hoch',
      example: 'Vendor Security Assessments, SLA Compliance Monitoring, Exit Strategy Planning'
    }
  ];

  const solutions = [
    {
      title: 'Cloud Security Architecture',
      description: 'Umfassende Cloud-Sicherheitsarchitektur nach ISO 27017 Best Practices',
      features: [
        'Multi-Cloud Security Framework Design',
        'Cloud-Native Security Controls Implementation',
        'Shared Responsibility Model Governance',
        'Cloud Security Posture Management (CSPM)'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Automated Cloud Compliance',
      description: 'Kontinuierliche Überwachung und Compliance-Validierung in Cloud-Umgebungen',
      features: [
        'Real-time Cloud Security Monitoring',
        'Automated Compliance Reporting',
        'Cloud Configuration Drift Detection',
        'Policy-as-Code Implementation'
      ],
      icon: Bot,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Cloud Risk & Governance',
      description: 'Strategisches Cloud-Risk-Management und Governance-Framework',
      features: [
        'Cloud Risk Assessment Methodologies',
        'Vendor Management Program',
        'Cloud Security Incident Response',
        'Multi-Cloud Governance Framework'
      ],
      icon: Shield,
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Cloud Migration',
      challenge: 'Sichere Migration kritischer Workloads in Multi-Cloud-Umgebung',
      solution: 'ISO 27017 Migration Framework + Cloud Security Assessment + Risk Management',
      outcome: 'Erfolgreiche Migration mit 99.9% Uptime und vollständiger Compliance',
      timeline: '6 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'FinTech Cloud-First Strategy',
      challenge: 'Regulatorische Compliance bei vollständiger Cloud-Transformation',
      solution: 'Cloud-Native Security Architecture + Automated Compliance + Data Residency',
      outcome: '40% Kostenreduktion bei erhöhter Sicherheit und Compliance',
      timeline: '9 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Global SaaS Platform Security',
      challenge: 'Multi-Region Cloud Security für internationale SaaS-Plattform',
      solution: 'Global Cloud Security Framework + Regional Compliance + Vendor Management',
      outcome: 'Globale Expansion in 15 Länder mit einheitlicher Security Governance',
      timeline: '4 Monate',
      complexity: 'Mittel'
    }
  ];

  const cloudControls = [
    {
      name: 'Cloud Architecture Security',
      description: 'Sichere Design-Prinzipien für Cloud-Infrastrukturen',
      coverage: 94,
      controls: ['Secure Cloud Design', 'Network Segmentation', 'Data Flow Controls'],
      icon: Cloud
    },
    {
      name: 'Identity & Access Management',
      description: 'Cloud-spezifische IAM-Controls und Privileged Access',
      coverage: 97,
      controls: ['Multi-Cloud SSO', 'PAM', 'Service Account Management'],
      icon: Users
    },
    {
      name: 'Data Protection in Cloud',
      description: 'Verschlüsselung und Datenschutz in Cloud-Umgebungen',
      coverage: 93,
      controls: ['Encryption at Rest/Transit', 'Key Management', 'Data Residency'],
      icon: Lock
    },
    {
      name: 'Cloud Operations Security',
      description: 'Sichere Cloud-Operations und Monitoring',
      coverage: 91,
      controls: ['Security Monitoring', 'Incident Response', 'Vulnerability Management'],
      icon: Activity
    },
    {
      name: 'Vendor & Supplier Management',
      description: 'Cloud-Provider-Risikomanagement und Vertragsgestaltung',
      coverage: 89,
      controls: ['Vendor Assessments', 'SLA Monitoring', 'Exit Strategies'],
      icon: Building2
    }
  ];

  const benefits = [
    {
      title: 'Cloud Security Excellence',
      description: 'Branchenführende Cloud-Sicherheitsstandards',
      metric: '99.9%',
      detail: 'Cloud Service Availability mit Security'
    },
    {
      title: 'Compliance Automatisierung',
      description: 'Kontinuierliche Compliance-Überwachung',
      metric: '75%',
      detail: 'weniger manuelle Compliance-Audits'
    },
    {
      title: 'Multi-Cloud Effizienz',
      description: 'Optimierte Multi-Cloud-Operations',
      metric: '50%',
      detail: 'schnellere Cloud-Service-Onboardings'
    },
    {
      title: 'Risk Mitigation',
      description: 'Proaktives Cloud-Risikomanagement',
      metric: '85%',
      detail: 'Reduktion cloud-spezifischer Sicherheitsvorfälle'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">
                    <Cloud className="h-4 w-4" />
                    <span className="text-sm font-medium">ISO 27017 Compliance</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    ISO 27017 Cloud Security
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-2">
                      Compliance
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Sichere Cloud-Transformation mit ISO 27017. 
                    Implementieren Sie Cloud-spezifische Sicherheitskontrollen für Multi-Cloud-Umgebungen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO 27017 Cloud Security Framework</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Multi-Cloud Security Governance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Automated Cloud Compliance Monitoring</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&framework=iso27017">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Cloud Security Assessment
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      ISO 27017 Implementation Guide
                    </Button>
                  </div>
                </motion.div>

                {/* ISO 27017 Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Cloud Security Center</h3>
                        <Badge className="bg-green-100 text-green-700">ISO 27017 Compliant</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Cloud className="h-5 w-5 text-blue-600" />
                            <span className="text-2xl font-bold text-blue-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">Cloud Security Score</p>
                          <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Shield className="h-5 w-5 text-cyan-600" />
                            <span className="text-2xl font-bold text-cyan-700">5/5</span>
                          </div>
                          <p className="text-sm font-medium">Control Domains</p>
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
                            <span className="text-sm">Multi-Cloud Monitoring aktiv</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">24/7</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileCheck className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">Cloud Compliance Check läuft</span>
                          </div>
                          <span className="text-xs text-gray-500">Live</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Cloud-Ready</span>
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
                  Cloud Security Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Warum Cloud-spezifische Sicherheitsstandards kritisch für moderne Unternehmen sind
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
                            <point.icon className="h-6 w-6 text-blue-600" />
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

        {/* Cloud Controls Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ISO 27017 Cloud Security Controls
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Comprehensive Coverage aller cloud-spezifischen Sicherheitskontrollen
                </p>
              </div>

              <div className="space-y-6">
                {cloudControls.map((control, index) => (
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
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <control.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{control.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {control.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {control.controls.map((controlItem, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {controlItem}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Coverage</span>
                            <span className="font-semibold">{control.coverage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${control.coverage}%` }}
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
                  Cloud Security Implementation
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Strukturierte Umsetzung für sichere Cloud-Transformation
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
                  Cloud Security Success Stories
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
                            <span className="font-medium text-blue-700">Solution:</span> {useCase.solution}
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
        <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Business Impact von ISO 27017
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Vorteile für Ihre Cloud-Transformation
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
                      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="font-semibold mb-2">{benefit.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {benefit.description}
                      </div>
                      <div className="text-xs text-blue-600 font-medium">
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Sichere Cloud-Transformation mit ISO 27017
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Implementieren Sie cloud-spezifische Sicherheitsstandards für Multi-Cloud-Umgebungen.
                  Unsere Experten begleiten Sie zur ISO 27017-konformen Cloud-Architektur.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&framework=iso27017">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Cloud Security Assessment buchen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Cloud-Expertenberatung anfordern
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Über 150 Unternehmen vertrauen bereits auf unsere ISO 27017 Cloud Security Expertise
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

export default Iso27017Compliance;