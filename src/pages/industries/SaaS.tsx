import React from 'react';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Cloud,
  Shield,
  FileCheck,
  Brain,
  Lock,
  Database,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Settings,
  Code,
  AlertTriangle,
  Server,
  Key,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const SaaS: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SaaS Compliance Lösungen",
    "description": "Compliance für SaaS-Unternehmen: Multi-Tenant DSGVO, SOC 2, EU AI Act für Enterprise-Ready",
    "applicationCategory": "Business Software",
    "operatingSystem": "Web-based",
    "url": "https://marsstein.ai/branchen/saas-unternehmen"
  };
  const painPoints = [
    {
      icon: Database,
      title: 'Multi-Tenant Datenschutz',
      description: 'DSGVO-konforme Datentrennung zwischen SaaS-Mandanten und Kunden',
      framework: 'DSGVO',
      impact: 'Kritisch',
      example: 'Tenant-Isolation, Cross-Tenant Data Leaks, Shared Database Security'
    },
    {
      icon: Brain,
      title: 'KI-Features Compliance',
      description: 'EU AI Act Compliance für ML/AI-Features in SaaS-Produkten',
      framework: 'EU AI Act',
      impact: 'Hoch',
      example: 'Recommendation Engines, Chatbots, Predictive Analytics'
    },
    {
      icon: Shield,
      title: 'Cloud-Sicherheit & SOC 2',
      description: 'ISO 27001 und SOC 2 Type II für Enterprise-Kunden-Anforderungen',
      framework: 'ISO 27001',
      impact: 'Kritisch',
      example: 'Infrastructure Security, API Security, Vendor Assessments'
    },
    {
      icon: Globe,
      title: 'Global SaaS Compliance',
      description: 'Multi-Region Compliance für internationale SaaS-Expansion',
      framework: 'DSGVO',
      impact: 'Hoch',
      example: 'Data Residency, Cross-Border Transfers, Regional Privacy Laws'
    }
  ];

  const solutions = [
    {
      title: 'DSGVO-Konforme SaaS-Architektur',
      description: 'Privacy by Design für Multi-Tenant SaaS-Anwendungen',
      features: [
        'Multi-Tenant Data Segregation nach DSGVO',
        'Privacy by Design für SaaS-Entwicklung',
        'Automated Data Subject Rights (DSR)',
        'Cross-Border Data Transfer Compliance'
      ],
      icon: Lock,
      color: 'from-blue-500 to-indigo-600',
      framework: 'DSGVO'
    },
    {
      title: 'SaaS AI Compliance',
      description: 'EU AI Act konforme KI-Integration in SaaS-Produkten',
      features: [
        'AI Risk Assessment für SaaS-Features',
        'Transparente ML-Algorithmen für Kunden',
        'Bias-Monitoring in SaaS-AI',
        'Customer AI Explainability Dashboards'
      ],
      icon: Brain,
      color: 'from-green-500 to-teal-600',
      framework: 'EU AI Act'
    },
    {
      title: 'Enterprise SaaS Security',
      description: 'ISO 27001 und SOC 2 Type II für SaaS-Infrastruktur',
      features: [
        'SOC 2 Type II Audit-Readiness',
        'Enterprise-Grade API Security',
        'Cloud Infrastructure Hardening',
        'Continuous Security Monitoring'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      framework: 'ISO 27001'
    }
  ];

  const useCases = [
    {
      title: 'SaaS-Startup Enterprise-Readiness',
      challenge: 'Schnelle Enterprise-Compliance für erste F500-Kunden',
      solution: 'SOC 2 Type II + Multi-Tenant DSGVO + API Security',
      frameworks: ['DSGVO', 'ISO 27001'],
      outcome: 'Enterprise-Sales in 6 Monaten statt 18 Monaten'
    },
    {
      title: 'AI-SaaS EU-Expansion',
      challenge: 'ML-basiertes SaaS-Produkt EU AI Act konform machen',
      solution: 'AI Risk Assessment + Transparenz + DSGVO-Integration',
      frameworks: ['EU AI Act', 'DSGVO'],
      outcome: 'Erfolgreiche EU-Markteinführung ohne Compliance-Barrieren'
    },
    {
      title: 'Global SaaS Platform',
      challenge: 'Multi-Region SaaS mit verschiedenen Privacy-Anforderungen',
      solution: 'Data Residency + Cross-Border Compliance + Automated DSR',
      frameworks: ['DSGVO', 'ISO 27001'],
      outcome: 'Seamless globale Expansion mit lokaler Compliance'
    }
  ];

  const complianceAreas = [
    { name: 'Multi-Tenant Security', coverage: 98, framework: 'DSGVO' },
    { name: 'AI-Features Compliance', coverage: 94, framework: 'EU AI Act' },
    { name: 'Enterprise Security (SOC 2)', coverage: 99, framework: 'ISO 27001' },
    { name: 'API & Cloud Security', coverage: 96, framework: 'ISO 27001' }
  ];

  return (
    <>
      <SEOHead
        title="SaaS-Unternehmen – Multi-Tenant DSGVO & SOC 2"
        description="SaaS Compliance: Multi-Tenant DSGVO, SOC 2 Type II, EU AI Act für Enterprise SaaS. ✓ API-Security ✓ Global Compliance. Jetzt Enterprise-ready werden!"
        canonical="/branchen/saas-unternehmen"
        keywords="SaaS Compliance, Multi-Tenant DSGVO, SOC 2 Type II, Enterprise SaaS, SaaS Security"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400">
                    <Cloud className="h-4 w-4" />
                    <span className="text-sm font-medium">SaaS-Unternehmen</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Compliance für
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent block mt-2">
                      SaaS-Unternehmen
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie DSGVO, EU AI Act und ISO 27001 für skalierbare 
                    Multi-Tenant SaaS-Anwendungen und Enterprise-Readiness.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-konforme Multi-Tenant Architektur</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>EU AI Act transparente SaaS-KI Features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>SOC 2 Type II Enterprise-Security</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=saas">
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 group">
                        <Cloud className="mr-2 h-5 w-5" />
                        SaaS Demo
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <FileCheck className="mr-2 h-5 w-5" />
                      SaaS Compliance Guide
                    </Button>
                  </div>
                </div>

                {/* SaaS Dashboard */}
                <div className="relative">
                  <Card className="p-6 shadow-2xl border-2 border-purple-200 dark:border-purple-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">SaaS Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">Enterprise-Ready</Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Card className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center">
                          <Shield className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-blue-700">DSGVO</p>
                          <p className="text-xs text-blue-600">Multi-Tenant</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center">
                          <Brain className="h-5 w-5 text-green-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-green-700">AI Act</p>
                          <p className="text-xs text-green-600">SaaS Ready</p>
                        </Card>

                        <Card className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center">
                          <Lock className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-orange-700">SOC 2</p>
                          <p className="text-xs text-orange-600">Type II</p>
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-purple-500 animate-pulse">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">API-Ready</span>
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
                  SaaS Compliance Herausforderungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Multi-Tenant Architekturen und Enterprise-Kunden erfordern spezialisierte Compliance
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
                          <point.icon className="h-6 w-6 text-purple-600" />
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
        <section className="py-20 bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-950/20 dark:to-cyan-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  SaaS Use Cases
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Wie unsere Framework-Expertise in realen SaaS-Szenarien hilft
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zukunftssichere SaaS Compliance
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Entwickeln Sie Enterprise-Ready SaaS-Produkte mit DSGVO, EU AI Act 
                und SOC 2 Compliance von Anfang an.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?demo=true&industry=saas">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-gray-100 group"
                  >
                    <Cloud className="mr-2 h-5 w-5" />
                    SaaS Beratung
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

export default SaaS;