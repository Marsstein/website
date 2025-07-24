import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  Rocket,
  Target,
  ShieldCheck,
  Search,
  Settings,
  Monitor,
  Cloud,
  Server,
  Network,
  CreditCard,
  Heart,
  Briefcase,
  BookOpen,
  UserCheck,
  Eye,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Iso27001Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 97) {
            clearInterval(scoreInterval);
            return 97;
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-[#a1251b]/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a1251b]/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-blue-600/10 text-blue-600 border-blue-600/20 px-4 py-1.5">
              <Shield className="h-3.5 w-3.5 mr-2" />
              ISO 27001:2022 Zertifiziert
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              ISO 27001-Compliance
              <span className="block bg-gradient-to-r from-blue-600 to-[#a1251b] bg-clip-text text-transparent">
                International & Zukunftssicher
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Erreichen Sie den internationalen Gold-Standard für Informationssicherheit. 
              Mit unserer KI-gestützten Lösung reduzieren Sie den Zertifizierungsaufwand um 80% 
              und erschließen globale Märkte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Shield className="mr-2 h-5 w-5" />
                Zertifizierung starten
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <PlayCircle className="mr-2 h-5 w-5" />
                Demo ansehen
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                ISO 27001:2022 konform
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                80% Automatisierung
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                2x schnellere Zertifizierung
              </div>
            </div>
          </div>

          {/* Animated compliance visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-[#a1251b]/10 rounded-3xl blur-3xl" />
            <Card className="relative bg-white/50 backdrop-blur-md border-2 border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  ISO 27001 Readiness Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="rgba(229, 231, 235, 0.3)"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={2 * Math.PI * 88 * (1 - complianceScore / 100)}
                      className="transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#a1251b" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-[#a1251b] bg-clip-text text-transparent">
                      {complianceScore}%
                    </div>
                    <div className="text-sm text-muted-foreground">Bereit für Zertifizierung</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">134</div>
                    <div className="text-xs text-muted-foreground">Kontrollen erfüllt</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-xs text-muted-foreground">Tage bis Audit</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // Benefits Section
  const BenefitsSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-600/10 text-blue-600 border-blue-600/20">
            <Target className="h-3.5 w-3.5 mr-2" />
            Warum ISO 27001?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Der internationale Gold-Standard für Informationssicherheit
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ISO 27001 öffnet Türen zu globalen Märkten, stärkt das Vertrauen Ihrer Kunden 
            und schützt Ihr Unternehmen vor Cyberbedrohungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: 'Globale Markterschließung',
              description: 'Öffnen Sie Türen zu internationalen Märkten und Großkunden, die ISO 27001 als Grundvoraussetzung verlangen.',
              benefits: ['Fortune 500 Zugang', 'EU-Markt Expansion', 'Behörden-Aufträge']
            },
            {
              icon: ShieldCheck,
              title: 'Cyber-Risiko Minimierung',
              description: 'Reduzieren Sie Sicherheitsvorfälle um bis zu 87% durch systematisches Informationssicherheitsmanagement.',
              benefits: ['Frühwarnsystem', 'Incident Response', 'Kontinuierliche Überwachung']
            },
            {
              icon: TrendingUp,
              title: 'Wettbewerbsvorteil',
              description: 'Differenzieren Sie sich von Konkurrenten und gewinnen Sie Aufträge durch nachgewiesene Sicherheitsexzellenz.',
              benefits: ['Ausschreibungsvorteile', 'Premium-Pricing', 'Marktführerposition']
            },
            {
              icon: Euro,
              title: 'ROI & Kosteneinsparung',
              description: 'Reduzieren Sie Cyber-Versicherungsprämien um bis zu 30% und vermeiden Sie teure Sicherheitsvorfälle.',
              benefits: ['Versicherungsrabatte', 'Schadensvermeidung', 'Effizienzsteigerung']
            },
            {
              icon: Users,
              title: 'Stakeholder-Vertrauen',
              description: 'Stärken Sie das Vertrauen von Investoren, Partnern und Kunden durch unabhängig zertifizierte Sicherheit.',
              benefits: ['Investor Relations', 'Partner-Akzeptanz', 'Kundenbindung']
            },
            {
              icon: Settings,
              title: 'Operative Exzellenz',
              description: 'Verbessern Sie Ihre Geschäftsprozesse durch strukturiertes Risikomanagement und klare Verantwortlichkeiten.',
              benefits: ['Prozessoptimierung', 'Klare Rollen', 'Kontinuierliche Verbesserung']
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-[#a1251b] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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

  // Target Industries Section
  const TargetIndustriesSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Building2 className="h-3.5 w-3.5 mr-2" />
            Branchen & Zielgruppen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Wer braucht ISO 27001-Zertifizierung?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ISO 27001 ist für Unternehmen unverzichtbar, bei denen Informationssicherheit geschäftskritisch ist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Cloud,
              title: 'SaaS & Cloud-Anbieter',
              description: 'Für Unternehmen, die Cloud-Lösungen und Software-Services anbieten.',
              details: 'Kunden erwarten höchste Sicherheitsstandards für ihre sensiblen Daten in der Cloud.',
              examples: ['Dropbox', 'Salesforce', 'Microsoft Azure']
            },
            {
              icon: CreditCard,
              title: 'FinTech & Banken',
              description: 'Finanzdienstleister und innovative FinTech-Unternehmen.',
              details: 'Schutz von Finanztransaktionen und Kundendaten ist nicht verhandelbar.',
              examples: ['N26', 'Revolut', 'Deutsche Bank']
            },
            {
              icon: Heart,
              title: 'Gesundheitswesen',
              description: 'Medizintechnik, Pharma und digitale Gesundheitsdienste.',
              details: 'Patientendaten erfordern höchste Sicherheitsstandards und Compliance.',
              examples: ['Doctolib', 'Roche', 'Siemens Healthineers']
            },
            {
              icon: Briefcase,
              title: 'Beratungsdienstleister',
              description: 'Rechts-, Steuer- und Unternehmensberatungen.',
              details: 'Hochsensible Mandantendaten erfordern zertifizierte Sicherheitsmaßnahmen.',
              examples: ['McKinsey', 'PwC', 'Deloitte']
            },
            {
              icon: Network,
              title: 'Outsourcing & Services',
              description: 'IT-Dienstleister und Business Process Outsourcing.',
              details: 'Partner verlangen ISO 27001 für sichere Lieferketten-Integration.',
              examples: ['Accenture', 'IBM Services', 'Capgemini']
            },
            {
              icon: Server,
              title: 'Technologie-Unternehmen',
              description: 'Hardware-Hersteller und Tech-Konzerne.',
              details: 'Internationale Expansion erfordert weltweit anerkannte Sicherheitszertifikate.',
              examples: ['SAP', 'Siemens', 'Bosch']
            }
          ].map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#a1251b]/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#a1251b]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{industry.details}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.examples.map((example, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Process Section
  const ProcessSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Unser Prozess
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            In 6 Monaten zur ISO 27001-Zertifizierung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unser bewährter Prozess führt Sie strukturiert und effizient zur Zertifizierung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Gap-Analyse & Planung',
              description: 'KI-gestützte Bewertung Ihrer aktuellen Sicherheitslandschaft',
              duration: 'Woche 1-2',
              icon: Search
            },
            {
              step: '2',
              title: 'ISMS-Aufbau',
              description: 'Implementierung des Informationssicherheits-Managementsystems',
              duration: 'Woche 3-12',
              icon: Settings
            },
            {
              step: '3',
              title: 'Risikomanagement',
              description: 'Systematische Identifikation und Behandlung von Risiken',
              duration: 'Woche 13-18',
              icon: Shield
            },
            {
              step: '4',
              title: 'Zertifizierungs-Audit',
              description: 'Externe Prüfung und finale ISO 27001-Zertifizierung',
              duration: 'Woche 19-24',
              icon: Award
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
              )}
              <Card className="relative h-full border-2 hover:border-blue-600/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
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
                  <step.icon className="h-8 w-8 text-blue-600 opacity-20" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Kostenlose Gap-Analyse starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300">
            <Star className="h-3.5 w-3.5 mr-2" />
            Kundenstimmen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Marsstein hat unseren ISO 27001-Zertifizierungsprozess um Monate verkürzt. Die KI-gestützte Gap-Analyse war unglaublich präzise.",
              author: "Dr. Sarah Weber",
              role: "CISO",
              company: "CloudTech Solutions",
              avatar: "SW",
              rating: 5
            },
            {
              quote: "Als FinTech-Startup war ISO 27001 Pflicht für unsere Expansion. Marsstein machte es möglich - effizient und kostengünstig.",
              author: "Michael Schmidt",
              role: "Co-Founder & CTO",
              company: "SecurePay GmbH",
              avatar: "MS",
              rating: 5
            },
            {
              quote: "Die Expertise und Begleitung waren erstklassig. Wir haben nicht nur die Zertifizierung erhalten, sondern auch unsere Sicherheit drastisch verbessert.",
              author: "Anna Müller",
              role: "Head of Compliance",
              company: "MedData Systems",
              avatar: "AM",
              rating: 5
            }
          ].map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-600/30" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-[#a1251b] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Euro className="h-3.5 w-3.5 mr-2" />
            Transparente Preise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Investition in Ihre internationale Zukunft
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '4.990',
              description: 'Für kleine Unternehmen und Startups',
              features: [
                'Bis zu 50 Mitarbeiter',
                'Basis-ISMS Implementation',
                'Gap-Analyse & Roadmap',
                'Standard-Dokumentation',
                'E-Mail Support',
                'Self-Service Portal'
              ],
              popular: false
            },
            {
              name: 'Professional',
              price: '9.990',
              description: 'Für wachsende Unternehmen',
              features: [
                'Bis zu 250 Mitarbeiter',
                'Vollständige ISMS-Implementierung',
                'Umfassende Risikobewertung',
                'Maßgeschneiderte Dokumentation',
                'Mitarbeiterschulungen',
                'Dedicated Customer Success Manager',
                'Prioritäts-Support',
                'Audit-Vorbereitung'
              ],
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Individuell',
              description: 'Für Konzerne und komplexe Strukturen',
              features: [
                'Unbegrenzte Mitarbeiter',
                'Multi-Site Implementation',
                'Erweiterte Risikobewertung',
                'Compliance-Dashboard',
                'Kontinuierliche Überwachung',
                'Dedicated Compliance Team',
                '24/7 Premium Support',
                'Custom Integrations',
                'Executive Reporting'
              ],
              popular: false
            }
          ].map((plan, index) => (
            <Card key={index} className={cn(
              "relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl",
              plan.popular ? "border-blue-600 shadow-lg scale-105" : "border-gray-200 hover:border-blue-600/30"
            )}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-[#a1251b] text-white text-center py-2 text-sm font-medium">
                  Beliebteste Wahl
                </div>
              )}
              <CardHeader className={cn("text-center", plan.popular && "pt-16")}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold">
                  {plan.price === 'Individuell' ? (
                    <span className="text-2xl">Auf Anfrage</span>
                  ) : (
                    <>
                      €{plan.price}
                      <span className="text-lg font-normal text-muted-foreground">/einmalig</span>
                    </>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    "w-full",
                    plan.popular 
                      ? "bg-gradient-to-r from-blue-600 to-[#a1251b] hover:from-blue-700 hover:to-[#8a1f17]" 
                      : "bg-[#a1251b] hover:bg-[#8a1f17]"
                  )}
                  size="lg"
                >
                  {plan.price === 'Individuell' ? 'Beratung anfragen' : 'Jetzt starten'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <BookOpen className="h-3.5 w-3.5 mr-2" />
            Häufige Fragen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Alles was Sie über ISO 27001 wissen müssen
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Was ist ISO 27001 und warum ist es wichtig?",
                answer: "ISO 27001 ist der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Er hilft Organisationen dabei, Informationssicherheit systematisch zu managen und kontinuierlich zu verbessern. Die Zertifizierung beweist Kunden und Partnern, dass Ihre Organisation höchste Sicherheitsstandards einhält."
              },
              {
                question: "Wie lange dauert eine ISO 27001-Zertifizierung?",
                answer: "Mit Marsstein verkürzen wir den traditionellen Zertifizierungsprozess erheblich. Während herkömmliche Ansätze 12-18 Monate dauern können, erreichen unsere Kunden die Zertifizierung typischerweise in 6-9 Monaten durch unsere KI-gestützte Automatisierung und strukturierte Herangehensweise."
              },
              {
                question: "Welche Kosten sind mit einer ISO 27001-Zertifizierung verbunden?",
                answer: "Neben unseren Service-Gebühren fallen zusätzliche Kosten für die externe Zertifizierungsstelle an (ca. 8.000-15.000€ je nach Unternehmensgröße) sowie eventuell für Penetrationstests. Wir beraten Sie transparent über alle anfallenden Kosten."
              },
              {
                question: "Ist ein Penetrationstest für ISO 27001 verpflichtend?",
                answer: "Ein Penetrationstest ist nicht explizit vorgeschrieben, wird aber von den meisten Auditoren erwartet, besonders bei IT-lastigen Unternehmen. Wir empfehlen einen professionellen Pentest zur Risikobewertung und können Sie an qualifizierte Partner vermitteln."
              },
              {
                question: "Wie unterscheidet sich ISO 27001 von anderen Compliance-Standards?",
                answer: "ISO 27001 fokussiert speziell auf Informationssicherheit und ist international anerkannt. Im Gegensatz zu DSGVO (datenschutzfokussiert) oder SOC 2 (US-amerikanisch) bietet ISO 27001 einen ganzheitlichen Ansatz für Informationssicherheits-Management und öffnet Türen zu globalen Märkten."
              },
              {
                question: "Was passiert nach der Zertifizierung?",
                answer: "ISO 27001-Zertifikate sind 3 Jahre gültig mit jährlichen Überwachungsaudits. Wir unterstützen Sie kontinuierlich bei der Aufrechterhaltung Ihrer Compliance, Updates bei Änderungen des Standards und der Vorbereitung auf Folgeaudits."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-[#a1251b] to-purple-600 text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge className="bg-white/20 text-white border-white/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Bereit für die internationale Bühne?
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Starten Sie heute Ihre ISO 27001-Zertifizierung
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Schließen Sie sich über 500+ Unternehmen an, die mit Marsstein erfolgreich 
            ISO 27001-zertifiziert wurden und internationale Märkte erobert haben.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              <Shield className="mr-2 h-5 w-5" />
              Kostenlose Beratung buchen
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8">
              <Download className="mr-2 h-5 w-5" />
              ISO 27001 Guide herunterladen
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Unverbindliche Gap-Analyse</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Transparente Preise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <TargetIndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Iso27001Compliance;