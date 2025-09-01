import React from 'react';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Building2,
  Shield,
  FileCheck,
  Scale,
  Lock,
  TrendingUp,
  DollarSign,
  Brain,
  CheckCircle,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Database,
  BarChart3,
  CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const FinancialServices: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Finanzdienstleister Compliance Lösungen",
    "description": "Compliance für Banken, Versicherungen und FinTechs: MaRisk, BAIT, PSD2",
    "serviceType": "Financial Compliance Solutions",
    "url": "https://marsstein.ai/branchen/finanzdienstleister"
  };

  const painPoints = [
    {
      icon: Lock,
      title: 'Kundendaten-Schutz',
      description: 'DSGVO erfordert besonderen Schutz für Finanzdaten und Transaktionshistorien',
      framework: 'DSGVO',
      impact: 'Kritisch',
      example: 'Kontodaten, Kredithistorie, Versicherungsverträge'
    },
    {
      icon: Brain,
      title: 'KI-Kreditentscheidungen',
      description: 'EU AI Act reguliert algorithmische Entscheidungen in der Kreditvergabe',
      framework: 'EU AI Act',
      impact: 'Kritisch',
      example: 'Credit Scoring, Fraud Detection, Robo-Advisory'
    },
    {
      icon: Shield,
      title: 'Cyber-Resilienz',
      description: 'ISO 27001 und NIS2 fordern robuste IT-Sicherheitsarchitekturen',
      framework: 'ISO 27001',
      impact: 'Hoch',
      example: 'Banking-Systeme, Payment-Infrastruktur, Cloud-Services'
    }
  ];

  const solutions = [
    {
      title: 'Finanzdata-Governance',
      description: 'DSGVO-konforme Verarbeitung von Finanz- und Kundendaten',
      features: [
        'Rechtmäßige Verarbeitungsgrundlagen für Finanzdaten',
        'Kundenrechte-Management (Portabilität, Löschung)',
        'Sichere Datenübertragung zwischen Instituten',
        'Compliance bei grenzüberschreitenden Transaktionen'
      ],
      icon: Lock,
      color: 'from-blue-500 to-indigo-600',
      framework: 'DSGVO'
    },
    {
      title: 'Transparente KI-Finanzdienstleistungen',
      description: 'EU AI Act konforme Algorithmen für Finanzentscheidungen',
      features: [
        'Erklärbare KI für Kreditentscheidungen',
        'Bias-freie Algorithmus-Entwicklung',
        'Menschliche Aufsicht bei automatisierten Entscheidungen',
        'Transparenz gegenüber Kunden bei KI-Nutzung'
      ],
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      framework: 'EU AI Act'
    },
    {
      title: 'Financial Cyber Security',
      description: 'ISO 27001 konforme Sicherheit für Finanzinfrastruktur',
      features: [
        'Incident Response für Cyberattacken',
        'Sichere API-Entwicklung für FinTech',
        'Multi-Faktor-Authentifizierung',
        'Kontinuierliches Security Monitoring'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      framework: 'ISO 27001'
    }
  ];

  const useCases = [
    {
      title: 'Digital Banking Platform',
      challenge: 'Neue Banking-App mit KI-Features und DSGVO-Compliance',
      solution: 'Privacy by Design + transparente KI + sichere Architektur',
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001'],
      outcome: 'Vertrauensvolle digitale Bankenerfahrung'
    },
    {
      title: 'Insurance Tech Innovation',
      challenge: 'KI-basierte Schadensbewertung mit Datenschutz-Anforderungen',
      solution: 'Algorithmus-Transparenz + DSGVO-konforme Datenverarbeitung',
      frameworks: ['DSGVO', 'EU AI Act'],
      outcome: 'Effiziente, faire Schadensprozesse'
    },
    {
      title: 'FinTech Payment Security',
      challenge: 'Sichere Payment-Infrastruktur für europäische Expansion',
      solution: 'ISO 27001 Sicherheitsstandards + DSGVO-Compliance',
      frameworks: ['DSGVO', 'ISO 27001'],
      outcome: 'Skalierbare, sichere Zahlungslösungen'
    }
  ];

  return (
    <>
      <SEOHead
        title="Finanzdienstleister – BaFin & DSGVO Compliance"
        description="FinTech Compliance: MaRisk, BAIT, PSD2 & DSGVO für Banken und Versicherungen. ✓ BaFin-konform ✓ Expertenwissen. Jetzt beraten lassen!"
        canonical="/branchen/finanzdienstleister"
        keywords="FinTech Compliance, BaFin Anforderungen, MaRisk, BAIT, PSD2 Compliance, Banken DSGVO"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Finanzdienstleister</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Compliance für
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                      Finanzdienstleister
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie DSGVO, EU AI Act und ISO 27001 für vertrauensvolle, 
                    innovative Finanzdienstleistungen in der digitalen Ära.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-konforme Verarbeitung von Finanzdaten</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Transparente KI für Kreditentscheidungen (EU AI Act)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ISO 27001 Cyber-Sicherheit für Finanzinfrastruktur</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=financial">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 group">
                        <Building2 className="mr-2 h-5 w-5" />
                        FinTech Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <FileCheck className="mr-2 h-5 w-5" />
                      Financial Compliance Guide
                    </Button>
                  </div>
                </div>

                {/* Financial Dashboard */}
                <div className="relative">
                  <Card className="p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Financial Compliance Hub</h3>
                        <Badge className="bg-green-100 text-green-700">Secure</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center">
                          <Shield className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-blue-700">DSGVO</p>
                          <p className="text-xs text-blue-600">Konform</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center">
                          <Brain className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-green-700">AI Act</p>
                          <p className="text-xs text-green-600">Transparent</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center">
                          <Lock className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-orange-700">ISO 27001</p>
                          <p className="text-xs text-orange-600">Certified</p>
                        </Card>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Scale className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">KI-Kreditprüfung konform</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">EU AI Act</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Payment Security aktiv</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">ISO 27001</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500 animate-pulse">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Trust-Ready</span>
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
                  FinTech Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Komplexe Regulierung erfordert spezialisierte Compliance-Expertise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {painPoints.map((point, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <point.icon className="h-6 w-6 text-blue-600" />
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
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  FinTech Use Cases
                </h2>
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zukunftssichere FinTech Compliance
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Entwickeln Sie vertrauensvolle Finanzprodukte mit DSGVO, EU AI Act 
                und ISO 27001 Compliance von Anfang an.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?demo=true&industry=financial">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 group"
                  >
                    <Building2 className="mr-2 h-5 w-5" />
                    FinTech Beratung
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

export default FinancialServices;