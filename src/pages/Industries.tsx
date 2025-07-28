import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart,
  Building2,
  ShoppingCart,
  Cloud,
  Factory,
  Car,
  Zap,
  Apple,
  Truck,
  ArrowRight,
  Shield,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Users,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Industries: React.FC = () => {
  const industries = [
    {
      id: 'gesundheitswesen',
      icon: Heart,
      title: 'Gesundheitswesen',
      description: 'DSGVO, EU AI Act und ISO 27001 Compliance für Kliniken, Praxen und MedTech-Unternehmen',
      challenges: ['Sensible Gesundheitsdaten', 'KI-Diagnosesysteme', 'Medizinprodukte-Sicherheit'],
      benefits: ['DSGVO Art. 9 konform', 'EU AI Act ready', 'Zertifizierte Sicherheit'],
      frameworkFocus: 'DSGVO + EU AI Act',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-900',
      link: '/branchen/gesundheitswesen'
    },
    {
      id: 'finanzdienstleister',
      icon: Building2,
      title: 'Finanzdienstleister',
      description: 'Robuste Compliance-Frameworks für Banken, Versicherungen und FinTech-Startups',
      challenges: ['Kundendaten-Schutz', 'KI-Kreditentscheidungen', 'IT-Sicherheitsrisiken'],
      benefits: ['DSGVO-Konformität', 'KI-Transparenz', 'Cyber-Resilienz'],
      frameworkFocus: 'Alle drei Frameworks',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-900',
      link: '/branchen/finanzdienstleister'
    },
    {
      id: 'e-commerce',
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Dateneffizienz und KI-Compliance für Online-Shops und digitale Marktplätze',
      challenges: ['Cookie-Compliance', 'Empfehlungsalgorithmen', 'Kundendaten-Sicherheit'],
      benefits: ['Smart Consent', 'Transparente KI', 'Sichere Infrastruktur'],
      frameworkFocus: 'DSGVO + EU AI Act',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-900',
      link: '/branchen/e-commerce'
    },
    {
      id: 'saas-unternehmen',
      icon: Cloud,
      title: 'SaaS-Unternehmen',
      description: 'Skalierbare Compliance-Infrastruktur für Software-as-a-Service Anbieter',
      challenges: ['Multi-Tenant Datenschutz', 'KI-Features Compliance', 'Cloud-Sicherheit'],
      benefits: ['Privacy by Design', 'KI-Dokumentation', 'Sichere Architektur'],
      frameworkFocus: 'Alle drei Frameworks',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-900',
      link: '/branchen/saas-unternehmen'
    },
    {
      id: 'produktion',
      icon: Factory,
      title: 'Produktion',
      description: 'Industrie 4.0 Compliance für smarte Fertigung und vernetzte Produktionsanlagen',
      challenges: ['Maschinendaten-Schutz', 'Predictive AI Systeme', 'OT-Cybersecurity'],
      benefits: ['Daten-Governance', 'KI-Transparenz', 'Sichere Vernetzung'],
      frameworkFocus: 'DSGVO + ISO 27001',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-900',
      link: '/branchen/produktion'
    },
    {
      id: 'automotive',
      icon: Car,
      title: 'Automotive',
      description: 'Connected Cars und autonome Fahrzeuge mit EU AI Act und Cybersecurity Compliance',
      challenges: ['Autonome Fahrsysteme', 'Connected Car Daten', 'Automotive Cybersecurity'],
      benefits: ['EU AI Act konform', 'DSGVO Privacy Ready', 'UN-R155 Cybersecurity'],
      frameworkFocus: 'EU AI Act + ISO 27001',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-900',
      link: '/branchen/automotive'
    },
    {
      id: 'energie',
      icon: Zap,
      title: 'Energiebranche',
      description: 'Smart Grid Compliance und kritische Infrastruktur-Sicherheit für Energieversorger',
      challenges: ['Smart Grid KI-Systeme', 'Energiedaten-Verarbeitung', 'Infrastruktur-Sicherheit'],
      benefits: ['Smart Grid AI Ready', 'Smart Meter DSGVO', 'NIS2 konform'],
      frameworkFocus: 'Alle drei Frameworks',
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      borderColor: 'border-yellow-200 dark:border-yellow-900',
      link: '/branchen/energie'
    },
    {
      id: 'lebensmittel',
      icon: Apple,
      title: 'Lebensmittelbranche',
      description: 'Food Safety Compliance und Farm-to-Fork Rückverfolgbarkeit mit KI-Qualitätskontrolle',
      challenges: ['KI-Qualitätskontrolle', 'Rückverfolgbarkeit-Daten', 'Food Safety IT-Sicherheit'],
      benefits: ['Food Safety AI Ready', 'Traceability DSGVO', 'HACCP IT-Security'],
      frameworkFocus: 'EU AI Act + DSGVO',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-900',
      link: '/branchen/lebensmittel'
    },
    {
      id: 'logistik',
      icon: Truck,
      title: 'Logistikbranche',
      description: 'Smart Logistics und Supply Chain Compliance für intelligente Transportlösungen',
      challenges: ['KI-Routenoptimierung', 'Tracking-Daten Schutz', 'Supply Chain Security'],
      benefits: ['Smart Route AI Ready', 'Tracking DSGVO', 'Supply Chain Security'],
      frameworkFocus: 'Alle drei Frameworks',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      borderColor: 'border-indigo-200 dark:border-indigo-900',
      link: '/branchen/logistik'
    }
  ];

  const stats = [
    { value: '3', label: 'Compliance-Frameworks', icon: Shield },
    { value: '9', label: 'Kernbranchen', icon: TrendingUp },
    { value: '99.9%', label: 'Framework-Abdeckung', icon: FileCheck },
    { value: '24/7', label: 'Experten-Support', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Branchenlösungen</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Maßgeschneiderte Compliance für
                <span className="bg-gradient-to-r from-brand-red to-purple-600 bg-clip-text text-transparent block mt-2">
                  Ihre Branche
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Jede Branche hat spezifische Compliance-Anforderungen. Marsstein bietet 
                spezialisierte Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact?demo=true">
                  <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white group">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Branchenlösung anfragen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  Case Studies ansehen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-gray-200 dark:border-gray-800">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 md:py-28">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Wählen Sie Ihre Branche
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Entdecken Sie spezifische Compliance-Lösungen für Ihren Sektor
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => (
                  <Card
                    key={industry.id}
                    className={cn(
                      "group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2",
                      "border-2",
                      industry.borderColor,
                      "animate-fade-in opacity-0"
                    )}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "p-3 rounded-xl",
                          industry.bgColor
                        )}>
                          <industry.icon className={cn(
                            "h-6 w-6",
                            `bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`
                          )} />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {industry.frameworkFocus}
                        </Badge>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {industry.description}
                      </p>

                      {/* Challenges */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-500 mb-2">
                          Typische Herausforderungen:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {industry.challenges.map((challenge, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {challenge}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2 mb-6">
                        {industry.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link to={industry.link}>
                        <Button 
                          className={cn(
                            "w-full group/btn bg-gradient-to-r text-white",
                            industry.color
                          )}
                        >
                          Mehr erfahren
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      {/* Hover gradient */}
                      <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10 rounded-lg",
                        `bg-gradient-to-br ${industry.color}`
                      )} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-red/5 to-purple-600/5">
          <div className="container px-4">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-white dark:bg-gray-900 shadow-xl">
              <div className="space-y-6">
                <div className="inline-flex p-4 bg-brand-red/10 rounded-full">
                  <Shield className="h-8 w-8 text-brand-red" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  Branchenübergreifende Compliance
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Unsere drei Kern-Frameworks (DSGVO, EU AI Act, ISO 27001) sind flexibel 
                  und können für jede Branche angepasst werden. Sprechen Sie uns an!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white">
                      Framework-Beratung
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;