import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DsgvoComplianceDashboard } from '@/components/DsgvoComplianceDashboard';
import { cn } from '@/lib/utils';
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
  FileText,
  Bot,
  BarChart3,
  Globe,
  Quote,
  ChevronRight,
  PlayCircle,
  Download,
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  XCircle,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DsgvoCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 99) {
            clearInterval(scoreInterval);
            return 99;
          }
          return prev + 3;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Hero Section
  const HeroSection = () => (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a1251b]/5 via-transparent to-purple-600/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#a1251b]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20 px-4 py-1.5">
              <Shield className="h-3.5 w-3.5 mr-2" />
              DSGVO-Konform seit 2018
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              DSGVO-Compliance
              <span className="block bg-gradient-to-r from-[#a1251b] to-purple-600 bg-clip-text text-transparent">
                Automatisiert & Rechtssicher
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schützen Sie Ihr Unternehmen vor Bußgeldern bis zu 20 Mio. € oder 4% des Jahresumsatzes. 
              Mit unserer KI-gestützten Lösung erreichen Sie 100% DSGVO-Konformität in wenigen Wochen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17] text-white px-8">
                Kostenlose Demo starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-[#a1251b]" />
                Video ansehen (2 Min)
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm">30 Tage kostenlos testen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm">Keine Kreditkarte erforderlich</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-2 border-[#a1251b]/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Ihr DSGVO-Compliance Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative h-48 flex items-center justify-center">
                  <div className="text-7xl font-bold text-[#a1251b]">
                    {complianceScore}%
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-48 h-48 transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 88}`}
                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - complianceScore / 100)}`}
                        className="text-[#a1251b] transition-all duration-1000 ease-out"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Datenschutzerklärung
                    </span>
                    <Badge className="bg-green-600">Konform</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Verarbeitungsverzeichnis
                    </span>
                    <Badge className="bg-green-600">Aktuell</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      TOM-Dokumentation
                    </span>
                    <Badge className="bg-yellow-600">In Prüfung</Badge>
                  </div>
                </div>

                <Button className="w-full bg-[#a1251b] hover:bg-[#8a1f17]">
                  Vollständige Analyse starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // Trust Indicators Section
  const TrustSection = () => (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            Vertraut von über 500+ Unternehmen in Deutschland
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {['SAP', 'Mercedes-Benz', 'Siemens', 'Volkswagen', 'Deutsche Bank', 'Lufthansa'].map((company) => (
            <div key={company} className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">{company}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '99,9%', label: 'DSGVO-Konformität', icon: Shield },
            { number: '< 4 Wochen', label: 'Implementierung', icon: Clock },
            { number: '0 €', label: 'Bußgelder seit 2018', icon: Euro },
            { number: '24/7', label: 'Experten-Support', icon: Users }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 border-[#a1251b]/20">
              <stat.icon className="h-8 w-8 text-[#a1251b] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#a1251b] mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Benefits Section
  const BenefitsSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            Ihre Vorteile
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Warum Marsstein für DSGVO-Compliance?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reduzieren Sie Risiken, sparen Sie Zeit und schaffen Sie Vertrauen bei Ihren Kunden
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Rechtssicherheit garantiert',
              description: 'Von Datenschutzexperten entwickelt und von Anwälten geprüft. Immer auf dem neuesten Stand der Gesetzgebung.',
              benefits: ['Automatische Updates', 'Rechtsgutachten inklusive', 'Haftungsübernahme']
            },
            {
              icon: Clock,
              title: '90% Zeitersparnis',
              description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf Ihr Kerngeschäft.',
              benefits: ['KI-gestützte Dokumentation', 'Vorlagen & Workflows', 'One-Click Reports']
            },
            {
              icon: Euro,
              title: 'Bußgeld-Vermeidung',
              description: 'Schützen Sie sich vor Strafen bis zu 20 Mio. € oder 4% des Jahresumsatzes.',
              benefits: ['Frühwarnsystem', 'Audit-Trail', 'Behörden-konform']
            },
            {
              icon: Bot,
              title: 'KI-Assistent 24/7',
              description: 'Ihr persönlicher DSGVO-Experte beantwortet alle Fragen sofort und präzise.',
              benefits: ['Multilingual', 'Rechtsberatung', 'Instant-Antworten']
            },
            {
              icon: Database,
              title: 'Zentrale Datenverwaltung',
              description: 'Alle Dokumente, Prozesse und Nachweise an einem sicheren Ort.',
              benefits: ['Ende-zu-Ende verschlüsselt', 'Cloud-Backup', 'Versionierung']
            },
            {
              icon: BarChart3,
              title: 'Transparentes Reporting',
              description: 'Beweisen Sie Compliance gegenüber Auditoren und Behörden mit einem Klick.',
              benefits: ['Export-Funktionen', 'Dashboards', 'Audit-Reports']
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#a1251b]/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Features Showcase Section
  const FeaturesShowcase = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 to-gray-950">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Zap className="h-3.5 w-3.5 mr-2" />
            Funktionen im Detail
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Alles was Sie für DSGVO-Compliance brauchen
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {[
              {
                icon: FileCheck,
                title: 'Automatisches Verarbeitungsverzeichnis',
                description: 'Erstellen und pflegen Sie Ihr Verzeichnis von Verarbeitungstätigkeiten mit KI-Unterstützung.',
                status: 'Live'
              },
              {
                icon: Shield,
                title: 'TOM-Generator',
                description: 'Technische und organisatorische Maßnahmen automatisch dokumentiert und immer aktuell.',
                status: 'Live'
              },
              {
                icon: Users,
                title: 'Betroffenenanfragen-Management',
                description: 'Bearbeiten Sie Auskunfts-, Lösch- und Korrekturanfragen DSGVO-konform in Minuten.',
                status: 'Live'
              },
              {
                icon: FileText,
                title: 'Datenschutzerklärung-Generator',
                description: 'Rechtssichere Datenschutzerklärungen für Website, App und Offline-Prozesse.',
                status: 'Beta'
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#a1251b]/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-[#a1251b]/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-[#a1251b]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <Badge variant={feature.status === 'Live' ? 'default' : 'secondary'} className="text-xs">
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Dashboard Component */}
          <div className="lg:sticky lg:top-24">
            <DsgvoComplianceDashboard />
          </div>
        </div>
      </div>
    </section>
  );

  // How It Works Section
  const HowItWorksSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            So funktioniert's
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            In 4 Wochen zu 100% DSGVO-Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unser bewährter Prozess führt Sie Schritt für Schritt zur vollständigen Compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Analyse & Audit',
              description: 'KI-gestützte Analyse Ihrer aktuellen Datenschutz-Situation',
              duration: 'Tag 1-3',
              icon: BarChart3
            },
            {
              step: '2',
              title: 'Dokumentation',
              description: 'Automatische Erstellung aller erforderlichen Dokumente',
              duration: 'Woche 1-2',
              icon: FileText
            },
            {
              step: '3',
              title: 'Implementierung',
              description: 'Integration der Prozesse in Ihren Arbeitsalltag',
              duration: 'Woche 2-3',
              icon: Zap
            },
            {
              step: '4',
              title: 'Zertifizierung',
              description: 'Finale Prüfung und DSGVO-Zertifikat',
              duration: 'Woche 4',
              icon: Award
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#a1251b] to-transparent" />
              )}
              <Card className="relative h-full border-2 hover:border-[#a1251b]/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#a1251b] text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <step.icon className="h-8 w-8 text-[#a1251b] opacity-20" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17]">
            Jetzt starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );

  // Pricing/CTA Section
  const PricingSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 to-gray-950">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Euro className="h-3.5 w-3.5 mr-2" />
            Investition in Ihre Sicherheit
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Transparente Preise, keine versteckten Kosten
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '299',
              description: 'Für kleine Unternehmen und Startups',
              features: [
                'Bis zu 50 Mitarbeiter',
                'Basis-Dokumentation',
                'E-Mail Support',
                'Monatliche Updates',
                'Standard-Vorlagen'
              ],
              popular: false
            },
            {
              name: 'Professional',
              price: '599',
              description: 'Für wachsende Unternehmen',
              features: [
                'Bis zu 250 Mitarbeiter',
                'Vollständige Dokumentation',
                'Priority Support 24/7',
                'Wöchentliche Updates',
                'Anpassbare Vorlagen',
                'KI-Assistent',
                'API-Zugang'
              ],
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              description: 'Für Großunternehmen',
              features: [
                'Unbegrenzte Mitarbeiter',
                'White-Label Option',
                'Dedizierter Account Manager',
                'Tägliche Updates',
                'Custom Entwicklung',
                'On-Premise Option',
                'SLA-Garantien'
              ],
              popular: false
            }
          ].map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "relative border-2 transition-all duration-300",
                plan.popular ? "border-[#a1251b] shadow-2xl scale-105" : "hover:border-gray-300"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#a1251b] text-white px-4 py-1">
                    Beliebteste Wahl
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-3xl font-bold">Individuell</div>
                  ) : (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-2xl text-muted-foreground">€/Monat</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    "w-full",
                    plan.popular ? "bg-[#a1251b] hover:bg-[#8a1f17]" : "bg-gray-900 hover:bg-gray-800"
                  )}
                >
                  {plan.price === 'Custom' ? 'Kontakt aufnehmen' : 'Kostenlos testen'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground">
            Alle Preise verstehen sich zzgl. MwSt. • Keine Einrichtungsgebühr • Jederzeit kündbar
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm">30 Tage Geld-zurück-Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-green-600" />
              <span className="text-sm">Sichere Zahlung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <Star className="h-3.5 w-3.5 mr-2" />
            Kundenstimmen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Über 500 Unternehmen vertrauen auf Marsstein für ihre DSGVO-Compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Marsstein hat unseren Compliance-Prozess revolutioniert. Was früher Wochen dauerte, erledigen wir jetzt in Stunden.",
              author: "Dr. Sarah Weber",
              role: "Datenschutzbeauftragte",
              company: "TechCorp GmbH",
              rating: 5,
              avatar: "SW"
            },
            {
              quote: "Die KI-gestützte Analyse hat Lücken aufgedeckt, die wir nie gefunden hätten. Die Experten-Beratung war Gold wert.",
              author: "Michael Schmidt",
              role: "Geschäftsführer",
              company: "E-Commerce Solutions AG",
              rating: 5,
              avatar: "MS"
            },
            {
              quote: "Endlich eine Lösung, die wirklich funktioniert! Der Support ist erstklassig und die Dokumentation immer aktuell.",
              author: "Anna Müller",
              role: "Compliance Manager",
              company: "FinTech Innovations",
              rating: 5,
              avatar: "AM"
            },
            {
              quote: "Das Preis-Leistungs-Verhältnis ist unschlagbar. Wir haben bereits zwei Audits ohne Beanstandungen bestanden.",
              author: "Thomas Fischer",
              role: "IT-Leiter",
              company: "Logistik Plus GmbH",
              rating: 5,
              avatar: "TF"
            },
            {
              quote: "Die automatischen Updates bei Gesetzesänderungen sind unbezahlbar. Wir sind immer auf dem neuesten Stand.",
              author: "Lisa Chen",
              role: "Legal Counsel",
              company: "Global Trade Solutions",
              rating: 5,
              avatar: "LC"
            },
            {
              quote: "Von der Implementierung bis zum Support - alles läuft reibungslos. Absolute Empfehlung!",
              author: "Robert Wagner",
              role: "CEO",
              company: "Digital Marketing Pro",
              rating: 5,
              avatar: "RW"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#a1251b]/20 absolute top-4 right-4" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="h-12 w-12 rounded-full bg-[#a1251b] text-white flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
            <HelpCircle className="h-3.5 w-3.5 mr-2" />
            Häufige Fragen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Fragen zu DSGVO-Compliance?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Wie schnell kann ich mit Marsstein DSGVO-konform werden?",
                answer: "Die meisten Unternehmen erreichen mit Marsstein innerhalb von 4 Wochen vollständige DSGVO-Compliance. Der genaue Zeitrahmen hängt von der Größe und Komplexität Ihres Unternehmens ab. Unsere KI-gestützte Analyse identifiziert sofort die wichtigsten Handlungsfelder, sodass Sie bereits ab Tag 1 Fortschritte machen."
              },
              {
                question: "Was passiert, wenn sich die DSGVO-Gesetze ändern?",
                answer: "Unser Team von Datenschutzexperten überwacht kontinuierlich alle Gesetzesänderungen. Sobald sich etwas ändert, werden Ihre Dokumente und Prozesse automatisch aktualisiert. Sie erhalten eine Benachrichtigung über die Änderungen und welche Maßnahmen erforderlich sind. So bleiben Sie immer compliant ohne zusätzlichen Aufwand."
              },
              {
                question: "Ist meine Unternehmensdaten bei Marsstein sicher?",
                answer: "Absolut. Wir verwenden Ende-zu-Ende-Verschlüsselung nach Militärstandard und speichern alle Daten in ISO 27001 zertifizierten Rechenzentren in Deutschland. Wir sind selbst DSGVO-konform und werden regelmäßig von unabhängigen Auditoren geprüft. Ihre Daten verlassen niemals die EU."
              },
              {
                question: "Kann ich Marsstein auch für internationale Compliance nutzen?",
                answer: "Ja! Während unser Fokus auf der DSGVO liegt, unterstützt Marsstein auch internationale Datenschutzgesetze wie CCPA (Kalifornien), LGPD (Brasilien) und weitere. Unsere Enterprise-Lösung kann an spezifische Anforderungen verschiedener Jurisdiktionen angepasst werden."
              },
              {
                question: "Was ist, wenn ich bereits einen Datenschutzbeauftragten habe?",
                answer: "Marsstein ist das perfekte Tool für Datenschutzbeauftragte! Es automatisiert zeitaufwändige Aufgaben, erstellt Reports auf Knopfdruck und hält alle Dokumentationen aktuell. Viele DSBs nutzen Marsstein, um ihre Effizienz zu steigern und sich auf strategische Aufgaben zu konzentrieren."
              },
              {
                question: "Gibt es eine Mindestvertragslaufzeit?",
                answer: "Nein, alle unsere Pläne sind monatlich kündbar. Wir glauben an die Qualität unserer Lösung und möchten, dass Sie aus Überzeugung bei uns bleiben, nicht aus vertraglichen Zwängen. Sie können jederzeit upgraden, downgraden oder kündigen."
              },
              {
                question: "Wie funktioniert der kostenlose Test?",
                answer: "Sie erhalten 30 Tage vollen Zugang zu allen Features des Professional-Plans - keine Kreditkarte erforderlich. Ein Onboarding-Spezialist hilft Ihnen bei der Einrichtung und Sie können sofort mit der Compliance-Analyse beginnen. Nach 30 Tagen entscheiden Sie, ob Sie weitermachen möchten."
              },
              {
                question: "Bieten Sie auch Schulungen für meine Mitarbeiter an?",
                answer: "Ja! Jeder Plan beinhaltet Zugang zu unserer DSGVO-Academy mit Video-Kursen, Webinaren und Zertifizierungen. Für Enterprise-Kunden bieten wir auch maßgeschneiderte Vor-Ort-Schulungen an. Alle Inhalte sind praxisnah und werden regelmäßig aktualisiert."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-gray-900 px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:text-[#a1251b]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Noch Fragen? Wir sind für Sie da!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="group">
              <Phone className="mr-2 h-4 w-4 group-hover:text-[#a1251b]" />
              +49 30 12345678
            </Button>
            <Button variant="outline" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:text-[#a1251b]" />
              compliance@marsstein.de
            </Button>
            <Button variant="outline" className="group">
              <Calendar className="mr-2 h-4 w-4 group-hover:text-[#a1251b]" />
              Demo buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  // Final CTA Section
  const FinalCTASection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <Card className="relative overflow-hidden border-2 border-[#a1251b]/20 bg-gradient-to-br from-[#a1251b]/5 to-purple-600/5">
          <div className="absolute inset-0 bg-grid-black/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <CardContent className="relative z-10 p-12 md:p-20 text-center space-y-8">
            <Badge className="bg-[#a1251b] text-white px-6 py-2 text-base">
              <Sparkles className="h-4 w-4 mr-2" />
              Limitiertes Angebot: 50% Rabatt für die ersten 3 Monate
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Schützen Sie Ihr Unternehmen
              <span className="block text-[#a1251b]">noch heute</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jeden Tag ohne vollständige DSGVO-Compliance ist ein Risiko. 
              Starten Sie jetzt und schlafen Sie ruhiger.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17] text-white px-10 py-6 text-lg">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg group">
                <Phone className="mr-2 h-5 w-5 group-hover:text-[#a1251b]" />
                Experten-Beratung
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
              {[
                { icon: CheckCircle2, text: '30 Tage kostenlos testen' },
                { icon: XCircle, text: 'Keine Kreditkarte erforderlich' },
                { icon: Users, text: 'Persönlicher Onboarding-Support' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <item.icon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  // Add missing import
  const HelpCircle = AlertCircle;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <TrustSection />
        <BenefitsSection />
        <FeaturesShowcase />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default DsgvoCompliance;