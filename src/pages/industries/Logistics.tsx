import React from 'react';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Truck,
  Shield,
  FileCheck,
  Brain,
  Lock,
  Activity,
  Package,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Settings,
  Database,
  MapPin,
  Route,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Logistics: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LogisticsOrganization",
    "name": "Logistik Compliance Lösungen",
    "description": "Transport & Logistik Compliance: GPS-Tracking DSGVO, Supply Chain Security, Fahrerdatenschutz",
    "url": "https://marsstein.com/branchen/logistik"
  };
  const painPoints = [
    {
      icon: Brain,
      title: 'KI-Routenoptimierung',
      description: 'EU AI Act Compliance für KI-basierte Logistikplanung und autonome Fahrzeuge',
      framework: 'EU AI Act',
      impact: 'Hoch',
      example: 'Routenplanung-KI, Laderaum-Optimierung, Predictive Maintenance'
    },
    {
      icon: MapPin,
      title: 'Tracking-Daten Schutz',
      description: 'DSGVO-konforme Verarbeitung von Standort- und Sendungsverfolgungsdaten',
      framework: 'DSGVO',
      impact: 'Kritisch',
      example: 'GPS-Tracking, Lieferstatus, Fahrerprofile'
    },
    {
      icon: Shield,
      title: 'Supply Chain Security',
      description: 'ISO 27001 Standards für sichere Logistik- und Transportsysteme',
      framework: 'ISO 27001',
      impact: 'Kritisch',
      example: 'Flottenmanagement, Lagerverwaltung, Transportdokumentation'
    },
    {
      icon: Package,
      title: 'Sendungsdaten-Management',
      description: 'Datenschutzkonforme Verarbeitung von Paket- und Kundendaten',
      framework: 'DSGVO',
      impact: 'Hoch',
      example: 'Adressdaten, Sendungsinhalte, Zustellbestätigungen'
    }
  ];

  const solutions = [
    {
      title: 'DSGVO-Konforme Logistikdaten',
      description: 'Rechtsichere Verarbeitung von Tracking- und Sendungsdaten',
      features: [
        'Privacy by Design für Logistik-Systeme',
        'GPS-Daten Minimierung und Anonymisierung',
        'Kundendaten-Schutz bei Sendungsverfolgung',
        'Sichere Datenübertragung zwischen Logistikpartnern'
      ],
      icon: Lock,
      color: 'from-blue-500 to-indigo-600',
      framework: 'DSGVO'
    },
    {
      title: 'Smart Logistics AI Compliance',
      description: 'EU AI Act konforme KI-Systeme für intelligente Logistik',
      features: [
        'Transparente KI für Routenoptimierung',
        'Erklärbare Logistik-Entscheidungen',
        'Bias-freie Ressourcenverteilung',
        'Menschliche Aufsicht bei kritischen Transporten'
      ],
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      framework: 'EU AI Act'
    },
    {
      title: 'Logistics Cyber Security',
      description: 'ISO 27001 konforme Sicherheit für Logistikinfrastruktur',
      features: [
        'Sichere Flottenmanagement-Systeme',
        'Supply Chain Cybersecurity',
        'Incident Response für Logistikstörungen',
        'Warehouse Management Security'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      framework: 'ISO 27001'
    }
  ];

  const useCases = [
    {
      title: 'Autonome Logistik-Flotte',
      challenge: 'KI-gesteuerte Fahrzeuge mit EU AI Act und Datenschutz-Compliance',
      solution: 'Transparente KI + GPS-Datenschutz + sichere Fahrzeugkommunikation',
      frameworks: ['EU AI Act', 'DSGVO', 'ISO 27001'],
      outcome: 'Vertrauensvolle autonome Logistik'
    },
    {
      title: 'Global Supply Chain Platform',
      challenge: 'Weltweite Sendungsverfolgung mit Multi-Jurisdictions Compliance',
      solution: 'Privacy by Design + sichere Datenübertragung + Framework-Compliance',
      frameworks: ['DSGVO', 'ISO 27001'],
      outcome: 'Transparente, sichere globale Logistik'
    },
    {
      title: 'Smart Warehouse Automation',
      challenge: 'KI-basierte Lagerverwaltung mit Compliance-Anforderungen',
      solution: 'KI-Transparenz + Datenschutz + Cybersecurity für Lagersysteme',
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001'],
      outcome: 'Intelligente, sichere Lagerautomatisierung'
    }
  ];

  const complianceAreas = [
    { name: 'KI-Routenoptimierung', coverage: 95, framework: 'EU AI Act' },
    { name: 'Tracking-Datenschutz', coverage: 98, framework: 'DSGVO' },
    { name: 'Supply Chain Security', coverage: 99, framework: 'ISO 27001' },
    { name: 'Sendungsdaten-Schutz', coverage: 97, framework: 'DSGVO' }
  ];

  return (
    <>
      <SEOHead
        title="Logistik – GPS-Tracking & Supply Chain DSGVO"
        description="Transport & Logistik Compliance: GPS-Tracking DSGVO, Supply Chain Security, Fahrerdatenschutz. ✓ Sendungsverfolgung ✓ Fleet Management. Jetzt compliant!"
        canonical="/branchen/logistik"
        keywords="Logistik DSGVO, GPS Tracking Datenschutz, Supply Chain Security, Transport Compliance"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400">
                    <Truck className="h-4 w-4" />
                    <span className="text-sm font-medium">Logistikbranche</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Compliance für die
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                      Logistikbranche
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie DSGVO, EU AI Act und ISO 27001 für intelligente Supply Chains
                    und vertrauensvolle Sendungsverfolgung.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-konforme Tracking- und Sendungsdaten-Verarbeitung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>EU AI Act transparente Logistik-KI und Routenoptimierung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO 27001 Supply Chain und Warehouse Security</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=logistics">
                      <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 group">
                        <Truck className="mr-2 h-5 w-5" />
                        Logistics Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <FileCheck className="mr-2 h-5 w-5" />
                      Supply Chain Guide
                    </Button>
                  </div>
                </div>

                {/* Logistics Dashboard */}
                <div className="relative">
                  <Card className="p-6 shadow-2xl border-2 border-indigo-200 dark:border-indigo-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Logistics Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">Route-Ready</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center">
                          <Shield className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-blue-700">DSGVO</p>
                          <p className="text-xs text-blue-600">Track Ready</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center">
                          <Brain className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-green-700">AI Act</p>
                          <p className="text-xs text-green-600">Route Ready</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center">
                          <Lock className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-orange-700">ISO 27001</p>
                          <p className="text-xs text-orange-600">Supply Ready</p>
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-indigo-500 animate-pulse">
                    <div className="flex items-center gap-2">
                      <Route className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium">Smart-Ready</span>
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
                  Logistik Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Smart Logistics und Supply Chain Management erfordern spezialisierte Compliance-Lösungen
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
                          <point.icon className="h-6 w-6 text-indigo-600" />
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
        <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Logistics Use Cases
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Wie unsere Framework-Expertise in realen Logistik-Szenarien hilft
                </p>
              </div>

              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Herausforderung:</span> {useCase.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm">
                          <span className="font-medium text-green-700">Lösung:</span> {useCase.solution}
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zukunftssichere Logistics Compliance
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Entwickeln Sie vertrauensvolle Supply Chains mit DSGVO, EU AI Act 
                und ISO 27001 Compliance von Anfang an.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?demo=true&industry=logistics">
                  <Button 
                    size="lg" 
                    className="bg-white text-indigo-600 hover:bg-gray-100 group"
                  >
                    <Truck className="mr-2 h-5 w-5" />
                    Logistics Beratung
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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

export default Logistics;