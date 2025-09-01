import React from 'react';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Apple,
  Shield,
  FileCheck,
  Brain,
  Lock,
  Activity,
  Truck,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Settings,
  Database,
  Leaf,
  Package,
  Thermometer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Food: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodService",
    "name": "Lebensmittel Compliance Lösungen",
    "description": "Food Industry Compliance: Rückverfolgbarkeit, HACCP-Integration, Lieferketten-Transparenz",
    "url": "https://marsstein.ai/branchen/lebensmittel"
  };
  const painPoints = [
    {
      icon: Brain,
      title: 'KI-Qualitätskontrolle',
      description: 'EU AI Act Compliance für KI-basierte Lebensmittelsicherheit und Qualitätsprüfung',
      framework: 'EU AI Act',
      impact: 'Hoch',
      example: 'Optische Qualitätsprüfung, Geschmacksanalyse, Haltbarkeitsprognosen'
    },
    {
      icon: Package,
      title: 'Rückverfolgbarkeit-Daten',
      description: 'DSGVO-konforme Verarbeitung von Lebensmittel-Traceability Daten',
      framework: 'DSGVO',
      impact: 'Kritisch',
      example: 'Lieferketten-Tracking, Herkunftsdaten, Allergieninformationen'
    },
    {
      icon: Shield,
      title: 'Food Safety IT-Sicherheit',
      description: 'ISO 27001 Standards für Lebensmittelsicherheit und HACCP-Systeme',
      framework: 'ISO 27001',
      impact: 'Kritisch',
      example: 'Produktionssysteme, Kühlketten, Qualitätsdatenbanken'
    },
    {
      icon: Leaf,
      title: 'Nachhaltigkeits-Dokumentation',
      description: 'Datenschutzkonforme Erfassung von Umwelt- und Nachhaltigkeitsdaten',
      framework: 'DSGVO',
      impact: 'Hoch',
      example: 'CO2-Footprint, Bio-Zertifizierungen, Lieferanten-Audits'
    }
  ];

  const solutions = [
    {
      title: 'DSGVO-Konforme Lebensmitteldaten',
      description: 'Rechtsichere Verarbeitung von Traceability und Produktionsdaten',
      features: [
        'Privacy by Design für Food Supply Chain',
        'Lebensmitteldaten-Minimierung und Anonymisierung',
        'Lieferanten-Datenschutz und Auditierung',
        'Sichere Rückverfolgbarkeit ohne Personenbezug'
      ],
      icon: Lock,
      color: 'from-blue-500 to-indigo-600',
      framework: 'DSGVO'
    },
    {
      title: 'Food Safety AI Compliance',
      description: 'EU AI Act konforme KI-Systeme für Lebensmittelsicherheit',
      features: [
        'Transparente KI für Qualitätskontrolle',
        'Erklärbare Lebensmittelsicherheit-Algorithmen',
        'Bias-freie Produktbewertung',
        'Menschliche Aufsicht bei kritischen Entscheidungen'
      ],
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      framework: 'EU AI Act'
    },
    {
      title: 'Food Production Security',
      description: 'ISO 27001 konforme Sicherheit für Lebensmittelproduktion',
      features: [
        'HACCP-System IT-Sicherheit',
        'Sichere Produktionsdatenerfassung',
        'Incident Response für Lebensmittelsicherheit',
        'Supply Chain Cybersecurity'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      framework: 'ISO 27001'
    }
  ];

  const useCases = [
    {
      title: 'Smart Food Production',
      challenge: 'KI-basierte Qualitätskontrolle mit EU AI Act und HACCP Compliance',
      solution: 'Transparente KI + Lebensmittelsicherheit + IT-Security',
      frameworks: ['EU AI Act', 'ISO 27001'],
      outcome: 'Automatisierte, sichere Lebensmittelproduktion'
    },
    {
      title: 'Farm-to-Fork Traceability',
      challenge: 'Vollständige Rückverfolgbarkeit mit Datenschutz-Compliance',
      solution: 'Privacy by Design + sichere Datenübertragung + Lieferanten-Schutz',
      frameworks: ['DSGVO', 'ISO 27001'],
      outcome: 'Transparente, vertrauensvolle Lieferketten'
    },
    {
      title: 'Nachhaltige Lebensmittel-Platform',
      challenge: 'End-to-End Compliance für nachhaltige Lebensmittelproduktion',
      solution: 'DSGVO-Compliance + KI-Transparenz + sichere Datenverarbeitung',
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001'],
      outcome: 'Vertrauensvolle, nachhaltige Lebensmittelkette'
    }
  ];

  const complianceAreas = [
    { name: 'KI-Qualitätskontrolle', coverage: 94, framework: 'EU AI Act' },
    { name: 'Traceability-Datenschutz', coverage: 98, framework: 'DSGVO' },
    { name: 'Food Safety IT-Security', coverage: 99, framework: 'ISO 27001' },
    { name: 'Nachhaltigkeits-Compliance', coverage: 96, framework: 'DSGVO' }
  ];

  return (
    <>
      <SEOHead
        title="Lebensmittel – HACCP & Rückverfolgbarkeit DSGVO"
        description="Food Industry Compliance: HACCP-Integration, Rückverfolgbarkeit DSGVO, Lebensmittelsicherheit. ✓ Farm-to-Fork ✓ Traceability. Jetzt food-safe!"
        canonical="/branchen/lebensmittel"
        keywords="HACCP Compliance, Lebensmittel DSGVO, Food Traceability, Rückverfolgbarkeit, Lebensmittelsicherheit"
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
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400">
                    <Apple className="h-4 w-4" />
                    <span className="text-sm font-medium">Lebensmittelbranche</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Compliance für die
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block mt-2">
                      Lebensmittelbranche
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie DSGVO, EU AI Act und ISO 27001 für sichere Lebensmittelproduktion
                    und vertrauensvolle Farm-to-Fork Rückverfolgbarkeit.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-konforme Lebensmittel-Rückverfolgbarkeit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>EU AI Act transparente Qualitätskontrolle</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO 27001 Food Safety IT-Sicherheit</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=food">
                      <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 group">
                        <Apple className="mr-2 h-5 w-5" />
                        Food Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <FileCheck className="mr-2 h-5 w-5" />
                      Food Safety Guide
                    </Button>
                  </div>
                </div>

                {/* Food Dashboard */}
                <div className="relative">
                  <Card className="p-6 shadow-2xl border-2 border-green-200 dark:border-green-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Food Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">Food-Safe</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center">
                          <Shield className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-blue-700">DSGVO</p>
                          <p className="text-xs text-blue-600">Trace Ready</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center">
                          <Brain className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-green-700">AI Act</p>
                          <p className="text-xs text-green-600">Quality Ready</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center">
                          <Lock className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-orange-700">ISO 27001</p>
                          <p className="text-xs text-orange-600">HACCP Ready</p>
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-green-500 animate-pulse">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Bio-Ready</span>
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
                  Lebensmittel Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Food Safety und Rückverfolgbarkeit erfordern höchste Compliance-Standards
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
                          <point.icon className="h-6 w-6 text-green-600" />
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
        <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Food Use Cases
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Wie unsere Framework-Expertise in realen Lebensmittel-Szenarien hilft
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zukunftssichere Food Compliance
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Entwickeln Sie vertrauensvolle Lebensmittelketten mit DSGVO, EU AI Act 
                und ISO 27001 Compliance von Anfang an.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?demo=true&industry=food">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-600 hover:bg-gray-100 group"
                  >
                    <Apple className="mr-2 h-5 w-5" />
                    Food Beratung
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

export default Food;