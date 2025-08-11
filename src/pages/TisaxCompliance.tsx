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
  Car,
  Truck,
  Factory,
  Network,
  HardDrive,
  Cpu,
  Cog,
  FileX,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TisaxCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(88);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const painPoints = [
    {
      icon: Car,
      title: 'Automotive Supply Chain Security',
      description: 'TISAX®-konforme Sicherheit für die komplexe Automotive-Lieferkette mit hunderten von Zulieferern und Partnern.',
      impact: 'Kritisch',
      example: 'OEM-Supplier Integration, Tier-1/2/3 Supplier Management, Connected Car Data Protection'
    },
    {
      icon: FileX,
      title: 'Vertrauliche Automotive-Daten',
      description: 'Schutz hochsensibler Fahrzeugdaten, Entwicklungsinformationen und Produktionsgeheimnisse nach VDA ISA Standards.',
      impact: 'Kritisch', 
      example: 'Vehicle Development Data, Production Processes, Autonomous Driving Algorithms, Battery Technology'
    },
    {
      icon: Network,
      title: 'Connected Vehicle Cybersecurity',
      description: 'Cybersecurity für vernetzte Fahrzeuge, V2X-Kommunikation und Over-the-Air-Updates nach ISO/SAE 21434.',
      impact: 'Hoch',
      example: 'V2V/V2I Communication, OTA Update Security, In-Vehicle Network Security, Telematics Protection'
    },
    {
      icon: Building2,
      title: 'Automotive Partnership Compliance',
      description: 'TISAX®-Assessment und -Zertifizierung für Geschäftsbeziehungen mit deutschen OEMs und Tier-1-Suppliern.',
      impact: 'Hoch',
      example: 'OEM Vendor Assessments, Joint Venture Security, Cross-Border Automotive Partnerships'
    }
  ];

  const solutions = [
    {
      title: 'TISAX® Assessment & Certification',
      description: 'Vollständige TISAX®-Vorbereitung und -Zertifizierung nach VDA ISA 6.0 Standards',
      features: [
        'VDA ISA 6.0 Gap Analysis und Remediation',
        'TISAX® Assessment Vorbereitung und Begleitung',
        'Automotive-spezifische Security Controls',
        'Supplier Onboarding und Integration'
      ],
      icon: Award,
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Automotive Cybersecurity Framework',
      description: 'ISO/SAE 21434-konforme Cybersecurity für Connected Vehicles und Automotive-Systeme',
      features: [
        'Vehicle Cybersecurity Management System (CSMS)',
        'Cybersecurity Risk Assessment für Fahrzeuge',
        'Secure Development Lifecycle für Automotive',
        'Incident Response für Connected Vehicles'
      ],
      icon: Car,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Supply Chain Security Governance',
      description: 'Umfassende Security Governance für die Automotive-Lieferkette',
      features: [
        'Multi-Tier Supplier Risk Management',
        'Automotive Data Protection Framework',
        'Cross-Border Compliance Management',
        'Continuous Supplier Monitoring'
      ],
      icon: Truck,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const useCases = [
    {
      title: 'Tier-1 Supplier TISAX® Zertifizierung',
      challenge: 'Großer Automobilzulieferer benötigt TISAX® AL3 für OEM-Partnerschaften',
      solution: 'Comprehensive VDA ISA Implementation + Security Controls + Assessment Preparation',
      outcome: 'Erfolgreiche TISAX® AL3 Zertifizierung und Zugang zu 5 neuen OEM-Partnerschaften',
      timeline: '9 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Connected Car Platform Security',
      challenge: 'Automotive Software-Anbieter entwickelt Connected Car Platform für deutsche OEMs',
      solution: 'ISO/SAE 21434 CSMS + V2X Security + OTA Security + TISAX® Compliance',
      outcome: 'Sichere Markteinführung mit 3 deutschen OEMs und 200k Connected Vehicles',
      timeline: '12 Monate', 
      complexity: 'Hoch'
    },
    {
      title: 'Global Automotive Supplier Integration',
      challenge: 'Internationale Expansion eines Automotive-Zulieferers in den deutschen Markt',
      solution: 'TISAX® Assessment + Cross-Border Data Protection + German Automotive Compliance',
      outcome: 'Erfolgreiche Integration in deutsche Automotive-Lieferkette mit 40% Umsatzsteigerung',
      timeline: '6 Monate',
      complexity: 'Mittel'
    }
  ];

  const tisaxControls = [
    {
      name: 'Information Security Management',
      description: 'Umfassendes ISMS nach VDA ISA für Automotive-Umgebungen',
      coverage: 94,
      controls: ['Security Policies', 'Risk Management', 'Incident Management'],
      icon: Shield,
      detail: 'Automotive-spezifisches Informationssicherheits-Management nach VDA ISA 6.0'
    },
    {
      name: 'Supplier Relationship Security',
      description: 'Sichere Integration und Management von Automotive-Suppliern',
      coverage: 91,
      controls: ['Supplier Assessment', 'Contract Security', 'Third-Party Risk'],
      icon: Building2,
      detail: 'Multi-Tier Supplier Security Management und TISAX®-konforme Partnerschaften'
    },
    {
      name: 'Data Protection & Confidentiality',
      description: 'Schutz vertraulicher Automotive-Daten und Entwicklungsinformationen',
      coverage: 96,
      controls: ['Data Classification', 'Access Controls', 'Encryption'],
      icon: Lock,
      detail: 'Höchste Vertraulichkeit für Fahrzeugentwicklung und Produktionsgeheimnisse'
    },
    {
      name: 'Vehicle Cybersecurity',
      description: 'Cybersecurity für Connected Vehicles nach ISO/SAE 21434',
      coverage: 88,
      controls: ['CSMS', 'Vehicle Security', 'V2X Protection'],
      icon: Car,
      detail: 'Umfassende Cybersecurity für vernetzte Fahrzeuge und Automotive-Systeme'
    },
    {
      name: 'Physical & Environmental Security',
      description: 'Physische Sicherheit für Produktionsstätten und Entwicklungszentren',
      coverage: 92,
      controls: ['Access Control', 'Facility Security', 'Equipment Protection'],
      icon: Factory,
      detail: 'Schutz von Produktionsanlagen und sensiblen Automotive-Entwicklungsbereichen'
    }
  ];

  const benefits = [
    {
      title: 'Market Access',
      description: 'Zugang zum deutschen Automotive-Markt',
      metric: '100%',
      detail: 'der deutschen OEMs erfordern TISAX® für Supplier'
    },
    {
      title: 'Competitive Advantage', 
      description: 'Wettbewerbsvorsprung durch TISAX® Zertifizierung',
      metric: '65%',
      detail: 'höhere Erfolgsrate bei Automotive-Ausschreibungen'
    },
    {
      title: 'Risk Reduction',
      description: 'Drastische Reduktion von Cybersecurity-Risiken',
      metric: '80%',
      detail: 'weniger sicherheitsrelevante Vorfälle in der Supply Chain'
    },
    {
      title: 'Operational Excellence',
      description: 'Verbesserte Sicherheitsprozesse und -kultur',
      metric: '45%',
      detail: 'Effizienzsteigerung bei Security Operations'
    }
  ];

  const assessmentLevels = [
    {
      level: 'AL1',
      name: 'Basic Assessment Level',
      description: 'Grundlegende Sicherheitsanforderungen für Standard-Geschäftsbeziehungen',
      requirements: ['Basic Security Controls', 'Standard Risk Assessment', 'Basic Documentation'],
      suitableFor: 'Standard Supplier Relationships, Low-Risk Data Processing',
      icon: Shield
    },
    {
      level: 'AL2', 
      name: 'High Assessment Level',
      description: 'Erhöhte Sicherheitsanforderungen für sensible Automotive-Daten',
      requirements: ['Enhanced Security Controls', 'Detailed Risk Management', 'Comprehensive Documentation'],
      suitableFor: 'Sensitive Data Processing, Tier-1 Suppliers, Development Partnerships',
      icon: ShieldCheck
    },
    {
      level: 'AL3',
      name: 'Very High Assessment Level', 
      description: 'Höchste Sicherheitsanforderungen für hochvertrauliche Informationen',
      requirements: ['Advanced Security Controls', 'Continuous Monitoring', 'Maximum Protection'],
      suitableFor: 'Highly Confidential Data, Strategic Partnerships, Future Vehicle Technology',
      icon: ShieldAlert
    }
  ];

  const complianceAreas = [
    { name: 'VDA ISA 6.0 Implementation', coverage: 94, area: 'Core Compliance' },
    { name: 'Supplier Integration Security', coverage: 91, area: 'Supply Chain' },
    { name: 'Vehicle Cybersecurity (ISO/SAE 21434)', coverage: 88, area: 'Connected Vehicles' },
    { name: 'Data Protection & Confidentiality', coverage: 96, area: 'Information Security' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400">
                    <Car className="h-4 w-4" />
                    <span className="text-sm font-medium">TISAX® Compliance</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    TISAX® Automotive
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent block mt-2">
                      Security Standard
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Werden Sie Teil der deutschen Automotive-Lieferkette mit TISAX®.
                    VDA ISA 6.0-konforme Informationssicherheit für Automotive-Unternehmen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>TISAX® Assessment Level 1-3 Zertifizierung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>VDA ISA 6.0 konforme Implementierung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO/SAE 21434 Vehicle Cybersecurity</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&framework=tisax">
                      <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        TISAX® Readiness Assessment
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      TISAX® Implementation Guide
                    </Button>
                  </div>
                </motion.div>

                {/* TISAX® Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-red-200 dark:border-red-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Automotive Security Center</h3>
                        <Badge className="bg-red-100 text-red-700">TISAX® Ready</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Award className="h-5 w-5 text-red-600" />
                            <span className="text-2xl font-bold text-red-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">TISAX® Score</p>
                          <div className="w-full bg-red-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-red-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Car className="h-5 w-5 text-orange-600" />
                            <span className="text-2xl font-bold text-orange-700">AL3</span>
                          </div>
                          <p className="text-sm font-medium">Assessment Level</p>
                          <div className="flex items-center gap-1 mt-2">
                            <CheckCircle2 className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-orange-600">Very High</span>
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
                                className="bg-red-600 h-2 rounded-full"
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium">Automotive-Ready</span>
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
                  Automotive Security Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Warum TISAX® für die Automotive-Industrie unverzichtbar geworden ist
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
                            <point.icon className="h-6 w-6 text-red-600" />
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

        {/* Assessment Levels Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  TISAX® Assessment Levels
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Drei Sicherheitsstufen für unterschiedliche Automotive-Anforderungen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {assessmentLevels.map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={cn(
                      "p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full",
                      index === 2 ? "border-2 border-red-500 shadow-lg" : ""
                    )}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={cn(
                            "inline-flex p-3 rounded-xl text-white",
                            index === 0 ? "bg-gradient-to-r from-green-500 to-teal-600" :
                            index === 1 ? "bg-gradient-to-r from-orange-500 to-red-600" :
                            "bg-gradient-to-r from-red-600 to-red-700"
                          )}>
                            <level.icon className="h-6 w-6" />
                          </div>
                          <Badge 
                            className={cn(
                              "text-xs font-bold",
                              index === 0 ? "bg-green-100 text-green-700" :
                              index === 1 ? "bg-orange-100 text-orange-700" :
                              "bg-red-100 text-red-700"
                            )}
                          >
                            {level.level}
                          </Badge>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {level.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Anforderungen:</h4>
                            <div className="space-y-1">
                              {level.requirements.map((req, i) => (
                                <div key={i} className="flex items-start gap-2 text-xs">
                                  <CheckCircle2 className="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 border-t">
                            <h4 className="font-semibold text-sm mb-2">Geeignet für:</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {level.suitableFor}
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

        {/* TISAX Controls Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  VDA ISA 6.0 Security Controls
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Comprehensive Automotive Security Controls nach TISAX® Standard
                </p>
              </div>

              <div className="space-y-6">
                {tisaxControls.map((control, index) => (
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
                          <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                            <control.icon className="h-6 w-6 text-red-600" />
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
                            <span>Implementation</span>
                            <span className="font-semibold">{control.coverage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-red-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${control.coverage}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {control.detail}
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
                  TISAX® Implementation Solutions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Strukturierte Umsetzung für erfolgreiche TISAX® Zertifizierung
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
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  TISAX® Success Stories
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Erfolgreiche TISAX® Implementierungen in der Automotive-Industrie
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
                          <h3 className="text-lg font-bold mb-2 text-red-700">{useCase.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Challenge:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm">
                            <span className="font-medium text-red-700">Solution:</span> {useCase.solution}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-orange-700">
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
        <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Business Impact von TISAX®
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Vorteile für Ihre Automotive-Geschäftsstrategie
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
                      <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="font-semibold mb-2">{benefit.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {benefit.description}
                      </div>
                      <div className="text-xs text-red-600 font-medium">
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
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ihr Weg in die deutsche Automotive-Lieferkette
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Werden Sie Teil der deutschen Automotive-Industrie mit TISAX® Zertifizierung.
                  Unsere Automotive-Security-Experten begleiten Sie zur erfolgreichen VDA ISA 6.0 Compliance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&framework=tisax">
                    <Button 
                      size="lg" 
                      className="bg-white text-red-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      TISAX® Readiness Assessment buchen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Automotive-Expertenberatung
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Professionelle TISAX® Expertise für die Automobilindustrie
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

export default TisaxCompliance;