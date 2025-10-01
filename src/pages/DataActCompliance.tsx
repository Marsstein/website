import React, { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  Database,
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
  Bot,
  BarChart3,
  Globe,
  PlayCircle,
  Download,
  Phone,
  Calendar,
  Rocket,
  Server,
  Settings,
  AlertTriangle,
  Activity,
  Cloud,
  Shield,
  Network,
  RefreshCw,
  FileText,
  Share2,
  Scale,
  Target,
  Factory
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataActCompliance = () => {
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
    "name": "EU Data Act Compliance Service",
    "description": "EU Data Act: Datenzugang und Datenaustausch für Connected Products und Cloud-Services",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Data Access Compliance",
    "areaServed": "EU"
  };

  const painPoints = [
    {
      icon: Database,
      title: 'Datenzugangsrechte für IoT-Geräte',
      description: 'Nutzer erhalten das Recht auf Zugang zu Daten, die von Connected Products generiert werden. Daten müssen kostenlos, in Echtzeit und in maschinenlesbarem Format bereitgestellt werden.',
      impact: 'Kritisch',
      example: 'Smart Home Devices, Industrial IoT, Connected Vehicles, Wearables, Smart Meters'
    },
    {
      icon: Cloud,
      title: 'Cloud-Switching & Portabilität',
      description: 'Cloud-Anbieter müssen Datentransfer innerhalb von 30 Tagen ermöglichen. Ab 2027 sind Wechselgebühren vollständig verboten.',
      impact: 'Kritisch',
      example: 'Multi-Cloud Strategy, Data Portability APIs, Vendor Lock-in Prevention, Exit Management'
    },
    {
      icon: Scale,
      title: 'B2B Datenteilung nach FRAND',
      description: 'Datenzugang zwischen Unternehmen muss fair, angemessen und nicht-diskriminierend (FRAND) sein. Für KMUs gelten Kostenobergrenzen.',
      impact: 'Hoch',
      example: 'Data Sharing Agreements, FRAND Pricing Models, SME Cost Caps, B2B Data Markets'
    },
    {
      icon: AlertTriangle,
      title: 'Notfall-Datenzugang für Behörden',
      description: 'Bei öffentlichen Notfällen (Pandemien, Naturkatastrophen) können Behörden Datenzugang anfordern. Anfragen müssen verhältnismäßig und zeitlich begrenzt sein.',
      impact: 'Hoch',
      example: 'Public Emergency Response, Pandemic Data Sharing, Natural Disaster Analytics, Critical Infrastructure'
    }
  ];

  const solutions = [
    {
      title: 'KI-gestützte Data Access Compliance',
      description: 'Automatisierung der Datenzugangsrechte und Compliance für Connected Products',
      features: [
        'Automated Data Access APIs',
        'Real-time Data Provisioning',
        'Machine-readable Data Formats',
        'User Consent Management'
      ],
      icon: Bot,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Cloud Switching Framework',
      description: 'Nahtlose Cloud-Portabilität und Vendor-unabhängige Datenmigration',
      features: [
        'Multi-Cloud Data Migration',
        '30-Day Switching Compliance',
        'Cost-Free Portability (2027+)',
        'Automated Exit Management'
      ],
      icon: Cloud,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'B2B Data Sharing Governance',
      description: 'FRAND-konforme Datenteilung zwischen Unternehmen mit Legal-Support',
      features: [
        'FRAND Pricing Models',
        'Data Sharing Contracts',
        'Trade Secret Protection',
        'SME Cost Cap Implementation'
      ],
      icon: Scale,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const useCases = [
    {
      title: 'Industrial IoT Manufacturer',
      challenge: 'Maschinenbauer muss Produktionsdaten von Connected Machines für Kunden bereitstellen',
      solution: 'Data Access APIs + Real-time Provisioning + FRAND B2B Contracts + Trade Secret Protection',
      outcome: 'Compliance mit 500+ Connected Machines und neue Daten-Geschäftsmodelle',
      timeline: '8 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Cloud Service Provider',
      challenge: 'Cloud-Provider muss Cloud-Switching innerhalb 30 Tage ermöglichen und Gebühren abschaffen',
      solution: 'Cloud Portability Framework + Automated Data Migration + Exit Management + Cost-Free Switch (2027)',
      outcome: 'Vollständige Data Act Compliance und erhöhte Kundenzufriedenheit',
      timeline: '6 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Smart Home Platform',
      challenge: 'Smart-Home-Anbieter muss Nutzern Zugang zu Gerätedaten gewähren und Drittanbieter-Sharing ermöglichen',
      solution: 'User Data Access Portal + Third-Party API Integration + Consent Management + Real-time Data Streaming',
      outcome: 'Erfolgreiche Marktexpansion mit 100k+ Nutzer und API-Ökosystem',
      timeline: '5 Monate',
      complexity: 'Mittel'
    }
  ];

  const dataActRequirements = [
    {
      name: 'User Data Access Rights',
      description: 'Nutzer erhalten Zugang zu Daten von Connected Products',
      coverage: 92,
      requirements: ['Real-time Access', 'Machine-readable Format', 'Free of Charge', 'Third-Party Sharing'],
      icon: Database,
      detail: 'Umfassende Datenzugangsrechte für Endnutzer von IoT-Geräten'
    },
    {
      name: 'B2B Data Sharing',
      description: 'Faire und angemessene Datenteilung zwischen Unternehmen',
      coverage: 88,
      requirements: ['FRAND Terms', 'SME Cost Caps', 'Trade Secret Protection', 'Data Quality Standards'],
      icon: Building2,
      detail: 'FRAND-konforme B2B-Datenmärkte mit KMU-Schutz'
    },
    {
      name: 'Cloud Switching Rights',
      description: 'Recht auf einfachen Wechsel zwischen Cloud-Anbietern',
      coverage: 90,
      requirements: ['30-Day Migration', 'No Switching Fees (2027)', 'Data Portability', 'Interoperability'],
      icon: Cloud,
      detail: 'Nahtlose Cloud-Portabilität ohne Vendor Lock-in'
    },
    {
      name: 'Public Emergency Access',
      description: 'Datenzugang für Behörden bei öffentlichen Notfällen',
      coverage: 85,
      requirements: ['Proportionality', 'Time-Limited', 'Legal Basis', 'Data Security'],
      icon: AlertTriangle,
      detail: 'Strukturierte Notfall-Datenteilung mit rechtlichen Schutzmaßnahmen'
    },
    {
      name: 'IoT & Connected Products',
      description: 'Data Act-Compliance für vernetzte Geräte und Produkte',
      coverage: 94,
      requirements: ['Design for Data Access', 'API Interfaces', 'Data Documentation', 'Security Controls'],
      icon: Network,
      detail: 'Connected Product Design mit eingebautem Datenzugang'
    }
  ];

  const benefits = [
    {
      title: 'Market Opportunity',
      description: 'Neue Geschäftsmodelle durch Datenmärkte',
      metric: '100+',
      detail: 'Mrd. € potentieller EU-Datenmarkt bis 2028'
    },
    {
      title: 'Innovation Boost',
      description: 'Beschleunigte Innovation durch Datenzugang',
      metric: '60%',
      detail: 'schnellere Produktentwicklung durch Data Sharing'
    },
    {
      title: 'Vendor Independence',
      description: 'Reduktion von Vendor Lock-in Risiken',
      metric: '80%',
      detail: 'weniger Cloud-Migration-Hürden'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Vermeidung von Sanktionen und Bußgeldern',
      metric: '5M€',
      detail: 'oder 4% Jahresumsatz maximale Strafe'
    }
  ];

  const affectedSectors = [
    {
      sector: 'Connected Devices & IoT',
      description: 'Hersteller vernetzter Geräte und IoT-Produkte',
      examples: ['Smart Home', 'Wearables', 'Industrial IoT', 'Connected Vehicles', 'Smart Meters'],
      impact: 'Kritisch',
      icon: Network,
      color: 'from-blue-500 to-blue-600'
    },
    {
      sector: 'Cloud Service Provider',
      description: 'Anbieter von Cloud-Computing und Datenverarbeitungsdiensten',
      examples: ['IaaS', 'PaaS', 'SaaS', 'Data Processing Services', 'Storage Providers'],
      impact: 'Kritisch',
      icon: Cloud,
      color: 'from-green-500 to-green-600'
    },
    {
      sector: 'Manufacturing & Industry 4.0',
      description: 'Produzierende Unternehmen mit Connected Machines',
      examples: ['Smart Factories', 'Industrial Equipment', 'Production Lines', 'Supply Chain Systems'],
      impact: 'Hoch',
      icon: Factory,
      color: 'from-orange-500 to-orange-600'
    },
    {
      sector: 'Healthcare & MedTech',
      description: 'Medizinische Geräte und Gesundheits-IT-Systeme',
      examples: ['Medical Devices', 'Health Monitoring', 'Telemedicine', 'Patient Data Systems'],
      impact: 'Hoch',
      icon: Activity,
      color: 'from-red-500 to-red-600'
    }
  ];

  const timeline = [
    {
      date: '11. Januar 2024',
      milestone: 'Data Act in Kraft getreten',
      status: 'completed',
      description: 'Verordnung wurde im EU-Amtsblatt veröffentlicht'
    },
    {
      date: '12. September 2025',
      milestone: 'Data Act Anwendungsbeginn',
      status: 'completed',
      description: 'Kernbestimmungen werden anwendbar'
    },
    {
      date: '12. September 2026',
      milestone: 'Cloud Interoperability Standards',
      status: 'upcoming',
      description: 'Erweiterte Interoperabilitätsanforderungen für Cloud-Services'
    },
    {
      date: '12. September 2027',
      milestone: 'Vollständige Cloud Portabilität',
      status: 'upcoming',
      description: 'Wechselgebühren für Cloud-Services vollständig verboten'
    }
  ];

  const complianceAreas = [
    { name: 'User Data Access Implementation', coverage: 92, area: 'Data Rights' },
    { name: 'Cloud Switching & Portability', coverage: 90, area: 'Cloud Services' },
    { name: 'B2B Data Sharing (FRAND)', coverage: 88, area: 'Business Relations' },
    { name: 'IoT Device Design for Data Access', coverage: 94, area: 'Product Design' }
  ];

  return (
    <>
      <SEOHead
        title="EU Data Act – Datenzugang & Cloud-Switching Compliance"
        description="EU Data Act 2025: Datenzugangsrechte für IoT, Cloud-Switching & B2B Data Sharing. ✓ Connected Products ✓ FRAND. Jetzt compliant werden!"
        canonical="/eu-data-act"
        keywords="EU Data Act, Datenzugang, Cloud Switching, Connected Products, IoT Data Sharing, FRAND"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />

      <main className="overflow-hidden">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">
                    <Database className="h-4 w-4" />
                    <span className="text-sm font-medium">EU Data Act</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    EU Data Act
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                      Compliance
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie den EU Data Act mit KI-gestützter Compliance-Lösung.
                    Datenzugang, Cloud-Switching und B2B Data Sharing rechtskonform umsetzen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Connected Product Data Access APIs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Cloud Switching & Portability Framework</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>FRAND B2B Data Sharing Compliance</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&regulation=data-act">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Data Act Readiness Check
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      Data Act Implementation Guide
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Data Act Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">Active seit Sept 2025</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Database className="h-5 w-5 text-blue-600" />
                            <span className="text-2xl font-bold text-blue-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">Data Act Score</p>
                          <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                            <motion.div
                              className="bg-blue-600 h-2 rounded-full"
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
                          <p className="text-sm font-medium">Data Monitoring</p>
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
                                className="bg-blue-600 h-2 rounded-full"
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">EU-Ready</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Data Act Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Warum der EU Data Act fundamentale Auswirkungen auf die digitale Wirtschaft hat
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

        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Betroffene Sektoren
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Welche Branchen und Unternehmen vom Data Act betroffen sind
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {affectedSectors.map((sector, index) => (
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
                            sector.color
                          )}>
                            <sector.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{sector.sector}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {sector.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Betroffene Bereiche:</h4>
                            <div className="flex flex-wrap gap-2">
                              {sector.examples.map((example, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {example}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <span className="text-sm font-medium">Impact Level:</span>
                            <Badge variant={sector.impact === 'Kritisch' ? 'destructive' : 'default'}>
                              {sector.impact}
                            </Badge>
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

        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Data Act Kernanforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Die fünf zentralen Säulen der Data Act Compliance
                </p>
              </div>

              <div className="space-y-6">
                {dataActRequirements.map((requirement, index) => (
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
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <requirement.icon className="h-6 w-6 text-blue-600" />
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
                              className="bg-blue-600 h-2 rounded-full"
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

        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  KI-gestützte Data Act Lösung
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Innovative Technologie für nachhaltige Data Act Compliance
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

        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Data Act Timeline
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Wichtige Meilensteine und Fristen für die Implementierung
                </p>
              </div>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-6">
                        <div className={cn(
                          "flex-shrink-0 w-32 text-center p-4 rounded-lg",
                          item.status === 'completed' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'
                        )}>
                          <div className={cn(
                            "text-sm font-semibold",
                            item.status === 'completed' ? 'text-green-700 dark:text-green-400' : 'text-blue-700 dark:text-blue-400'
                          )}>
                            {item.date}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold">{item.milestone}</h3>
                            <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                              {item.status === 'completed' ? 'Abgeschlossen' : 'Anstehend'}
                            </Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                        {item.status === 'completed' ? (
                          <CheckCircle2 className="h-8 w-8 text-green-600 flex-shrink-0" />
                        ) : (
                          <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Data Act Success Stories
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Erfolgreiche Data Act Implementierungen in verschiedenen Sektoren
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
                          <h3 className="text-lg font-bold mb-2 text-blue-700">{useCase.title}</h3>
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

        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Business Impact von Data Act Compliance
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Vorteile unserer KI-gestützten Data Act Lösung
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

        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Bereit für den Data Act? Jetzt starten!
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Implementieren Sie den EU Data Act mit unserer KI-gestützten SaaS-Lösung
                  und profitieren Sie von direktem Legal Expert Support. Anwendbar seit September 2025.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&regulation=data-act">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Data Act Readiness Assessment buchen
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
                    Pioniere nutzen bereits unsere KI-gestützte Data Act Compliance-Lösung
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

export default DataActCompliance;
