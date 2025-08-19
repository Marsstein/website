import React from 'react';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Factory,
  Shield,
  Cpu,
  Truck,
  Globe,
  Lock,
  Settings,
  Wifi,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  AlertTriangle,
  Database,
  Network,
  Cog,
  Brain,
  Users,
  Bot,
  Server,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Manufacturing: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingOrganization",
    "name": "Produktion Compliance Lösungen",
    "description": "Industrie 4.0 Compliance: IoT-Sicherheit, OT-Security, Smart Factory DSGVO für Manufacturing",
    "url": "https://marsstein.com/branchen/produktion"
  };
  const painPoints = [
    {
      icon: Database,
      title: 'Produktionsdaten-Schutz',
      description: 'DSGVO-konforme Verarbeitung von Maschinendaten und Mitarbeiterinformationen',
      framework: 'DSGVO',
      impact: 'Kritisch',
      example: 'Produktionslogdaten, Mitarbeiter-Tracking, Qualitätsdaten'
    },
    {
      icon: Brain,
      title: 'KI-gestützte Produktionsoptimierung',
      description: 'EU AI Act Compliance für ML-Algorithmen in der Fertigungssteuerung',
      framework: 'EU AI Act',
      impact: 'Hoch',
      example: 'Predictive Maintenance, Quality Control AI, Production Scheduling'
    },
    {
      icon: Shield,
      title: 'OT/IT Security Integration',
      description: 'ISO 27001 für Operational Technology und kritische Infrastrukturen',
      framework: 'ISO 27001',
      impact: 'Kritisch',
      example: 'Industrial Control Systems, SCADA Networks, Manufacturing Execution Systems'
    },
    {
      icon: Truck,
      title: 'Supply Chain Compliance',
      description: 'DSGVO-konforme Lieferantendaten und Cross-Border Manufacturing',
      framework: 'DSGVO',
      impact: 'Hoch',
      example: 'Supplier Data Processing, International Production Data, Vendor Management'
    }
  ];

  const solutions = [
    {
      title: 'DSGVO Manufacturing Data Protection',
      description: 'Privacy by Design für Produktionsdaten und Mitarbeiterinformationen',
      features: [
        'Manufacturing Data Minimization',
        'Employee Privacy in Smart Factories',
        'Cross-Border Production Data Transfers',
        'Automated Data Subject Rights für Mitarbeiter'
      ],
      icon: Lock,
      color: 'from-blue-500 to-indigo-600',
      framework: 'DSGVO'
    },
    {
      title: 'Manufacturing AI Compliance',
      description: 'EU AI Act konforme KI-Systeme in der Produktion',
      features: [
        'AI Risk Assessment für Production AI',
        'Transparent ML-Algorithmen für Quality Control',
        'Bias-Monitoring in Manufacturing AI',
        'Human Oversight für kritische Produktionsentscheidungen'
      ],
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      framework: 'EU AI Act'
    },
    {
      title: 'Industrial Security Management',
      description: 'ISO 27001 für OT/IT-Integration und Cyber-Physical Systems',
      features: [
        'OT/IT Security Architecture',
        'Industrial Control Systems Security',
        'Supply Chain Security Management',
        'Manufacturing Incident Response'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      framework: 'ISO 27001'
    }
  ];

  const useCases = [
    {
      title: 'Smart Factory DSGVO-Implementierung',
      challenge: 'Mitarbeiterdaten und Produktionsdaten DSGVO-konform verarbeiten',
      solution: 'Privacy by Design + Employee Consent Management + Data Minimization',
      frameworks: ['DSGVO', 'ISO 27001'],
      outcome: 'Datenschutz-konforme Smart Factory ohne Produktivitätsverlust'
    },
    {
      title: 'AI-Powered Quality Control',
      challenge: 'Maschinelles Lernen für Qualitätskontrolle EU AI Act konform',
      solution: 'AI Risk Assessment + Explainable AI + Human-in-the-Loop',
      frameworks: ['EU AI Act', 'ISO 27001'],
      outcome: '30% weniger Qualitätsfehler bei voller AI Act Compliance'
    },
    {
      title: 'Global Manufacturing Security',
      challenge: 'Multi-Site Produktion mit einheitlicher Security Governance',
      solution: 'ISO 27001 ISMS + OT Security + Cross-Border Data Protection',
      frameworks: ['ISO 27001', 'DSGVO'],
      outcome: 'Globale Produktionssicherheit mit lokaler Compliance'
    }
  ];

  const complianceAreas = [
    { name: 'Manufacturing Data Protection', coverage: 96, framework: 'DSGVO' },
    { name: 'Production AI Systems', coverage: 92, framework: 'EU AI Act' },
    { name: 'OT/IT Security Integration', coverage: 98, framework: 'ISO 27001' },
    { name: 'Supply Chain Security', coverage: 94, framework: 'ISO 27001' }
  ];


  return (
    <>
      <SEOHead
        title="Produktion – Industrie 4.0 & IoT-Sicherheit"
        description="Manufacturing Compliance: Industrie 4.0, IoT-Sicherheit, Smart Factory DSGVO, OT-Security. ✓ Produktionsschutz ✓ Supply Chain Security. Jetzt beraten lassen!"
        canonical="/branchen/produktion"
        keywords="Industrie 4.0 Compliance, Manufacturing DSGVO, IoT Sicherheit, OT Security, Smart Factory"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400">
                    <Factory className="h-4 w-4" />
                    <span className="text-sm font-medium">Produktion</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Compliance für
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block mt-2">
                      Produzierende Unternehmen
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie DSGVO, EU AI Act und ISO 27001 für Smart Factories,
                    KI-gestützte Produktionsoptimierung und sichere OT/IT-Integration.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-konforme Smart Factory Datenverarbeitung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>EU AI Act transparente Produktions-KI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO 27001 OT/IT Security Integration</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=manufacturing">
                      <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:opacity-90 group">
                        <Factory className="mr-2 h-5 w-5" />
                        Industrie Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Shield className="mr-2 h-5 w-5" />
                      OT Security Guide
                    </Button>
                  </div>
                </div>

                {/* Manufacturing Dashboard */}
                <div className="relative">
                  <Card className="p-6 shadow-2xl border-2 border-orange-200 dark:border-orange-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Production Security Center</h3>
                        <Badge className="bg-green-100 text-green-700">Secure</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center">
                          <Shield className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-blue-700">DSGVO</p>
                          <p className="text-xs text-blue-600">Factory Data</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center">
                          <Brain className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-green-700">AI Act</p>
                          <p className="text-xs text-green-600">Production AI</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center">
                          <Lock className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-orange-700">ISO 27001</p>
                          <p className="text-xs text-orange-600">OT Security</p>
                        </Card>
                      </div>

                      <div className="space-y-3">
                        {complianceAreas.map((area, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>{area.name}</span>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{area.framework}</Badge>
                                <span className="font-semibold">{area.coverage}%</span>
                              </div>
                            </div>
                            <Progress value={area.coverage} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-orange-500 animate-pulse">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">Compliant</span>
                    </div>
                  </div>
                </div>
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
                  Manufacturing Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Smart Factories und Industrie 4.0 erfordern spezialisierte Compliance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <point.icon className="h-6 w-6 text-orange-600" />
                          <div>
                            <h3 className="font-bold">{point.title}</h3>
                            <Badge className="text-xs mt-1">{point.framework}</Badge>
                          </div>
                        </div>
                        <Badge 
                          variant={point.impact === 'Kritisch' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {point.impact}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400">
                        {point.description}
                      </p>
                      
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Anwendungen:</span> {point.example}
                        </p>
                      </div>
                    </div>
                  </Card>
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
                  Framework-spezialisierte Lösungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Spezialisierte Compliance-Tools für jedes der drei Hauptframeworks
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={cn(
                          "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                          solution.color
                        )}>
                          <solution.icon className="h-6 w-6" />
                        </div>
                        <Badge className="bg-gray-100 text-gray-700 text-xs">
                          {solution.framework}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold">{solution.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {solution.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        {solution.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Manufacturing Use Cases
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Wie unsere Framework-Expertise in realen Produktionsszenarien hilft
                </p>
              </div>

              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Challenge:</span> {useCase.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm">
                          <span className="font-medium text-green-700">Solution:</span> {useCase.solution}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {useCase.frameworks.map((framework, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {framework}
                          </Badge>
                        ))}
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-blue-700">
                          {useCase.outcome}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sichern Sie Ihre Smart Factory
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Implementieren Sie DSGVO, EU AI Act und ISO 27001 für zukunftssichere
                Smart Factories mit KI-gestützter Produktion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?demo=true&industry=manufacturing">
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-gray-100 group"
                  >
                    <Factory className="mr-2 h-5 w-5" />
                    Production Security Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  IEC 62443 Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Manufacturing;