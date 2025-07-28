import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Heart,
  Shield,
  FileCheck,
  Brain,
  Lock,
  Activity,
  Stethoscope,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Database,
  Zap,
  Eye,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Healthcare: React.FC = () => {
  const painPoints = [
    {
      icon: Lock,
      title: 'Sensible Gesundheitsdaten',
      description: 'DSGVO Art. 9 erfordert besonderen Schutz für Gesundheitsdaten',
      framework: 'DSGVO',
      impact: 'Kritisch',
      example: 'Patientenakten, Diagnosen, Behandlungsdaten'
    },
    {
      icon: Brain,
      title: 'KI-Diagnosesysteme',
      description: 'EU AI Act klassifiziert medizinische KI als Hochrisiko-Anwendung',
      framework: 'EU AI Act',
      impact: 'Kritisch',
      example: 'Radiologie-KI, Diagnose-Assistenten, Behandlungsempfehlungen'
    },
    {
      icon: Shield,
      title: 'IT-Sicherheit in Kliniken',
      description: 'ISO 27001 Standards für kritische Gesundheitsinfrastruktur',
      framework: 'ISO 27001',
      impact: 'Hoch',
      example: 'Krankenhausinformationssysteme, Medizingeräte-Vernetzung'
    },
    {
      icon: UserCheck,
      title: 'Einwilligungsmanagement',
      description: 'Komplexe Consent-Prozesse für Behandlung und Forschung',
      framework: 'DSGVO',
      impact: 'Hoch',
      example: 'Behandlungseinwilligung, Forschungsteilnahme, Datenübertragung'
    }
  ];

  const solutions = [
    {
      title: 'DSGVO-konforme Datenverarbeitung',
      description: 'Sichere Verarbeitung sensibler Gesundheitsdaten nach höchsten Standards',
      features: [
        'Art. 9 DSGVO Compliance für Gesundheitsdaten',
        'Pseudonymisierung und Anonymisierung',
        'Rechtmäßige Verarbeitungsgrundlagen',
        'Patientenrechte-Management (Auskunft, Löschung, Portabilität)'
      ],
      icon: Lock,
      color: 'from-blue-500 to-purple-600',
      framework: 'DSGVO'
    },
    {
      title: 'KI-Systeme Compliance',
      description: 'EU AI Act konforme Entwicklung und Betrieb medizinischer KI',
      features: [
        'Risikoklassifizierung von KI-Systemen',
        'Transparenz und Erklärbarkeit medizinischer KI',
        'Bias-Monitoring und Fairness-Tests',
        'Kontinuierliche Überwachung im Betrieb'
      ],
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      framework: 'EU AI Act'
    },
    {
      title: 'Informationssicherheit',
      description: 'ISO 27001 konforme Sicherheitsarchitektur für Gesundheitseinrichtungen',
      features: [
        'Sicherheitsrichtlinien für Gesundheitswesen',
        'Incident Response für Cyberattacken',
        'Sichere Vernetzung von Medizingeräten',
        'Backup und Business Continuity'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      framework: 'ISO 27001'
    }
  ];

  const useCases = [
    {
      title: 'Krankenhaus-Digitalisierung',
      challenge: 'Digitale Patientenakte mit KI-Unterstützung einführen',
      solution: 'DSGVO-konforme Datenhaltung + EU AI Act konforme Diagnose-KI',
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001'],
      outcome: 'Sichere, intelligente Patientenversorgung'
    },
    {
      title: 'Telemedizin-Plattform',
      challenge: 'Fernbehandlung mit Videosprechstunde und KI-Triage',
      solution: 'Ende-zu-Ende Verschlüsselung + transparente KI-Algorithmen',
      frameworks: ['DSGVO', 'EU AI Act'],
      outcome: 'Vertrauensvolle digitale Gesundheitsversorgung'
    },
    {
      title: 'Medizinische Forschung',
      challenge: 'Big Data Analysen mit Patientendaten für Forschungszwecke',
      solution: 'Anonymisierung + Einwilligungsmanagement + sichere Datenräume',
      frameworks: ['DSGVO', 'ISO 27001'],
      outcome: 'Ethische, datenschutzkonforme Forschung'
    }
  ];

  const complianceAreas = [
    { name: 'Patientendatenschutz', coverage: 98, framework: 'DSGVO' },
    { name: 'KI-Transparenz', coverage: 95, framework: 'EU AI Act' },
    { name: 'IT-Sicherheit', coverage: 97, framework: 'ISO 27001' },
    { name: 'Einwilligungsmanagement', coverage: 96, framework: 'DSGVO' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">Gesundheitswesen</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Compliance für das
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                      Gesundheitswesen
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Navigieren Sie sicher durch DSGVO, EU AI Act und ISO 27001 – 
                    für vertrauensvolle digitale Gesundheitsversorgung.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO Art. 9 konforme Verarbeitung von Gesundheitsdaten</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>EU AI Act Compliance für medizinische KI-Systeme</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO 27001 Sicherheitsstandards für Gesundheitseinrichtungen</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=healthcare">
                      <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group">
                        <Stethoscope className="mr-2 h-5 w-5" />
                        Healthcare Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <FileCheck className="mr-2 h-5 w-5" />
                      Framework-Guide downloaden
                    </Button>
                  </div>
                </div>

                {/* Compliance Dashboard */}
                <div className="relative">
                  <Card className="p-6 shadow-2xl border-2 border-red-200 dark:border-red-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Healthcare Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">Konform</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center">
                          <Shield className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-blue-700">DSGVO</p>
                          <p className="text-xs text-blue-600">Art. 9 konform</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center">
                          <Brain className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-green-700">AI Act</p>
                          <p className="text-xs text-green-600">High-Risk Ready</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center">
                          <Lock className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-orange-700">ISO 27001</p>
                          <p className="text-xs text-orange-600">Zertifiziert</p>
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium">Patient-Safe</span>
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
                  Healthcare Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Spezifische Anforderungen im Gesundheitswesen erfordern maßgeschneiderte Lösungen
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
                          <point.icon className="h-6 w-6 text-red-600" />
                          <div>
                            <h3 className="font-bold">{point.title}</h3>
                            <Badge 
                              variant={point.impact === 'Kritisch' ? 'destructive' : 'default'}
                              className="text-xs mt-1"
                            >
                              {point.framework}
                            </Badge>
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
                          <span className="font-medium">Beispiele:</span> {point.example}
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
                  Framework-basierte Lösungen
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
        <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Praxis-Anwendungsfälle
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Wie unsere Framework-Expertise in realen Szenarien hilft
                </p>
              </div>

              <div className="space-y-8">
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
        <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Starten Sie Ihre Healthcare Compliance Journey
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Vereinbaren Sie ein Beratungsgespräch und erfahren Sie, wie DSGVO, 
                EU AI Act und ISO 27001 in Ihrem Gesundheitssystem umgesetzt werden können.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?demo=true&industry=healthcare">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-gray-100 group"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Framework-Beratung buchen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <FileCheck className="mr-2 h-5 w-5" />
                  Healthcare Compliance Guide
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">
                  Gesetzeskonforme digitale Transformation im Gesundheitswesen
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Healthcare;