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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-[#a1251b]/8" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#a1251b]/12 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-[#a1251b]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Urgency + Social Proof Badge */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Badge className="bg-red-100 text-red-700 border-red-200 px-4 py-2 font-semibold">
                <AlertCircle className="h-4 w-4 mr-2" />
                Cyber-Angriffe steigen um 300%
              </Badge>
              <Badge className="bg-blue-600/15 text-blue-700 border-blue-300 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                500+ Unternehmen bereits zertifiziert
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-red-600">Stoppt Cyber-Angriffe</span>
              <span className="block text-gray-900">bevor sie passieren</span>
              <span className="block bg-gradient-to-r from-blue-600 to-[#a1251b] bg-clip-text text-transparent">
                ISO 27001-Zertifizierung
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                <span className="text-red-600 font-bold">93% aller Cyberangriffe</span> hätten mit ISO 27001 verhindert werden können. 
                Schützen Sie Ihr Unternehmen vor <span className="text-red-600 font-bold">Millionenschäden</span> und erschließen Sie 
                <span className="text-blue-600 font-bold"> internationale Märkte</span> mit dem Gold-Standard der Informationssicherheit.
              </p>
              
              {/* Problem Indicators */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-red-800">Ohne ISO 27001 verlieren Sie täglich:</p>
                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                      <li>• Großkunden an zertifizierte Konkurrenten</li>
                      <li>• Vertrauen durch Sicherheitslücken</li>
                      <li>• Zeit mit manuellen Sicherheitsprozessen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17] text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all">
                <Shield className="mr-2 h-6 w-6" />
                Jetzt vor Angriffen schützen
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4">
                <PlayCircle className="mr-2 h-5 w-5" />
                Kostenlose Gap-Analyse
              </Button>
            </div>

            {/* Enhanced Trust indicators with numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-bold text-green-800">80%</div>
                  <div className="text-xs text-green-700">Weniger Aufwand</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-bold text-blue-800">6 Monate</div>
                  <div className="text-xs text-blue-700">Bis Zertifizierung</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <Award className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-bold text-purple-800">99.2%</div>
                  <div className="text-xs text-purple-700">Erfolgsquote</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced compliance visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-[#a1251b]/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-white/80 backdrop-blur-lg border-2 border-white/30 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-xl">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-[#a1251b] flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg">Ihr Unternehmen</div>
                    <div className="text-sm text-muted-foreground">ISO 27001 Readiness</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-52 h-52 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="104"
                      cy="104"
                      r="96"
                      stroke="rgba(229, 231, 235, 0.3)"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="104"
                      cy="104"
                      r="96"
                      stroke="url(#heroGradient)"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 96}`}
                      strokeDashoffset={2 * Math.PI * 96 * (1 - complianceScore / 100)}
                      className="transition-all duration-2000 ease-out"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="50%" stopColor="#a1251b" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-[#a1251b] to-purple-600 bg-clip-text text-transparent">
                      {complianceScore}%
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">Sicherheits-Score</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">134</div>
                    <div className="text-xs text-blue-700 font-medium">Kontrollen</div>
                    <div className="text-xs text-muted-foreground">von 174 erfüllt</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">24</div>
                    <div className="text-xs text-green-700 font-medium">Tage</div>
                    <div className="text-xs text-muted-foreground">bis Audit-Bereitschaft</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm font-semibold">40 kritische Lücken erkannt</span>
                  </div>
                  <p className="text-xs text-red-600 mt-1">Sofortiger Handlungsbedarf für Cyber-Schutz</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // Painpoint Section
  const PainpointSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-red-100 text-red-700 border-red-200 px-4 py-2">
            <AlertCircle className="h-4 w-4 mr-2" />
            Die Realität ohne ISO 27001
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Diese Probleme kosten Sie täglich Geld
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ohne systematisches Informationssicherheitsmanagement verlieren Unternehmen durchschnittlich 
            <span className="font-bold text-red-600"> 4,45 Millionen Euro pro Cyberangriff</span> und 
            <span className="font-bold text-blue-600"> 67% ihrer Großkundenanfragen</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: XCircle,
              title: 'Verlorene Großkunden',
              problem: 'Fortune 500 Unternehmen verlangen ISO 27001-Zertifizierung',
              impact: '€2.3M durchschnittlicher Vertragswert verloren',
              stats: '67% der B2B-Deals scheitern',
              urgency: 'Täglich',
              color: 'red'
            },
            {
              icon: AlertCircle,
              title: 'Cyber-Angriffe',
              problem: 'Durchschnittlich 1.270 Angriffe pro Woche auf deutsche Unternehmen',
              impact: '€4.45M Schaden pro erfolgreichen Angriff',
              stats: '287 Tage bis Entdeckung',
              urgency: 'Kontinuierlich',
              color: 'orange'
            },
            {
              icon: Clock,
              title: 'Manuelle Prozesse',
              problem: 'Sicherheitsteams verbringen 60% ihrer Zeit mit Dokumentation',
              impact: '€180.000 Personalkosten jährlich',
              stats: '40h/Woche Overhead',
              urgency: 'Wöchentlich',
              color: 'yellow'
            },
            {
              icon: Building2,
              title: 'Compliance-Stress',
              problem: 'Audits ohne ISMS dauern 3x länger und kosten mehr',
              impact: '€50.000 zusätzliche Audit-Kosten',
              stats: '89% höhere Durchfallrate',
              urgency: 'Bei jedem Audit',
              color: 'purple'
            },
            {
              icon: TrendingUp,
              title: 'Versicherungskosten',
              problem: 'Cyber-Versicherung ohne ISO 27001 ist 40% teurer',
              impact: '€25.000 jährliche Mehrkosten',
              stats: 'Oft keine Deckung bei Fahrlässigkeit',
              urgency: 'Jährlich',
              color: 'blue'
            },
            {
              icon: Users,
              title: 'Mitarbeiter-Verunsicherung',
              problem: 'Unclear Sicherheitsrichtlinien führen zu Fehlern',
              impact: '23% mehr Sicherheitsvorfälle',
              stats: '€89.000 Schulungsaufwand',
              urgency: 'Monatlich',
              color: 'green'
            }
          ].map((pain, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-2 hover:scale-105`}>
              <CardHeader>
                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br from-${pain.color}-500 to-${pain.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <pain.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-gray-900">{pain.title}</CardTitle>
                  <Badge variant="destructive" className="text-xs px-2 py-1">
                    {pain.urgency}
                  </Badge>
                </div>
                <CardDescription className="text-gray-700 leading-relaxed">
                  {pain.problem}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-4 bg-${pain.color}-50 rounded-lg border border-${pain.color}-200`}>
                  <div className={`text-lg font-bold text-${pain.color}-700 mb-1`}>
                    {pain.impact}
                  </div>
                  <div className={`text-sm text-${pain.color}-600`}>
                    {pain.stats}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-600 to-[#a1251b] rounded-2xl text-white shadow-xl">
            <Shield className="h-8 w-8" />
            <div className="text-left">
              <div className="font-bold text-lg">Mit ISO 27001 gehören diese Probleme der Vergangenheit an</div>
              <div className="text-blue-100 text-sm">Marsstein macht Ihnen den Weg zur Zertifizierung so einfach wie nie</div>
            </div>
            <ArrowRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );

  // ISO 27001 Deep Dive Section
  const Iso27001DeepDiveSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-600/10 text-blue-600 border-blue-600/20">
            <BookOpen className="h-3.5 w-3.5 mr-2" />
            ISO 27001 Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Was bedeutet ISO 27001 wirklich für Ihr Unternehmen?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Verstehen Sie die 174 Sicherheitskontrollen, 14 Kontrollkategorien und wie sie Ihr Business transformieren
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Deep Content */}
          <div className="space-y-8">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Database className="h-6 w-6 text-blue-600" />
                  Die 14 Kontrollkategorien von ISO 27001
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { category: 'A.5 Informationssicherheitsrichtlinien', controls: '2 Kontrollen', critical: true },
                  { category: 'A.6 Organisation der Informationssicherheit', controls: '7 Kontrollen', critical: true },
                  { category: 'A.7 Personalsicherheit', controls: '6 Kontrollen', critical: false },
                  { category: 'A.8 Asset Management', controls: '10 Kontrollen', critical: true },
                  { category: 'A.9 Zugriffskontrolle', controls: '14 Kontrollen', critical: true },
                  { category: 'A.10 Kryptografie', controls: '2 Kontrollen', critical: false },
                  { category: 'A.11 Physische und umgebungsbezogene Sicherheit', controls: '15 Kontrollen', critical: false },
                  { category: 'A.12 Betriebssicherheit', controls: '14 Kontrollen', critical: true },
                  { category: 'A.13 Kommunikationssicherheit', controls: '7 Kontrollen', critical: true },
                  { category: 'A.14 Systembeschaffung, -entwicklung und -wartung', controls: '13 Kontrollen', critical: false }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">{item.category}</div>
                      <div className="text-xs text-gray-600">{item.controls}</div>
                    </div>
                    {item.critical && (
                      <Badge variant="destructive" className="text-xs">
                        Kritisch
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <CheckSquare className="h-6 w-6 text-green-600" />
                  ISMS-Implementierung: Der Marsstein-Vorteil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      phase: 'Kontextanalyse',
                      traditional: '4-6 Wochen manuell',
                      marsstein: '3 Tage KI-gestützt',
                      improvement: '83% Zeitersparnis'
                    },
                    {
                      phase: 'Risikobewertung',
                      traditional: '8-12 Wochen',
                      marsstein: '2 Wochen automatisiert',
                      improvement: '75% Zeitersparnis'
                    },
                    {
                      phase: 'Dokumentation',
                      traditional: '16-20 Wochen',
                      marsstein: '4 Wochen Templates',
                      improvement: '80% Zeitersparnis'
                    },
                    {
                      phase: 'Audit-Vorbereitung',
                      traditional: '6-8 Wochen',
                      marsstein: '1 Woche digital',
                      improvement: '87% Zeitersparnis'
                    }
                  ].map((comparison, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-green-800">{comparison.phase}</h4>
                        <Badge className="bg-green-100 text-green-700">
                          {comparison.improvement}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Traditionell:</div>
                          <div className="font-medium text-red-600">{comparison.traditional}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Mit Marsstein:</div>
                          <div className="font-medium text-green-600">{comparison.marsstein}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Dashboard */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Monitor className="h-6 w-6 text-[#a1251b]" />
                  Live ISO 27001 Kontrollen-Status
                </CardTitle>
                <CardDescription>
                  Echtzeit-Übersicht Ihrer aktuellen Compliance-Situation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Compliance Categories */}
                <div className="space-y-4">
                  {[
                    { name: 'Zugriffskontrolle (A.9)', implemented: 12, total: 14, percentage: 86, status: 'warning' },
                    { name: 'Asset Management (A.8)', implemented: 8, total: 10, percentage: 80, status: 'success' },
                    { name: 'Betriebssicherheit (A.12)', implemented: 9, total: 14, percentage: 64, status: 'danger' },
                    { name: 'Kommunikation (A.13)', implemented: 6, total: 7, percentage: 86, status: 'success' }
                  ].map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{category.name}</span>
                        <span className="text-sm text-gray-600">{category.implemented}/{category.total}</span>
                      </div>
                      <div className="relative">
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${
                              category.status === 'success' ? 'bg-green-500' :
                              category.status === 'warning' ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${category.percentage}%` }}
                          />
                        </div>
                        <div className="absolute right-0 top-0 h-full flex items-center">
                          <span className="text-xs font-semibold text-gray-600 bg-white px-1 rounded">
                            {category.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Critical Actions */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    Sofortiger Handlungsbedarf
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Incident Response Procedures definieren',
                      'Backup & Recovery Testing implementieren',
                      'Vendor Security Assessments durchführen',
                      'Security Awareness Training aktualisieren'
                    ].map((action, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 bg-red-50 rounded-lg border border-red-200">
                        <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-red-800">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#a1251b] hover:bg-[#8a1f17] text-white">
                  <Shield className="mr-2 h-4 w-4" />
                  Kostenlose Gap-Analyse starten
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // Benefits Section (Enhanced)
  const BenefitsSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Target className="h-3.5 w-3.5 mr-2" />
            Die Marsstein-Lösung
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            So lösen wir Ihre ISO 27001-Herausforderungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Während andere Anbieter komplizierte Beratung verkaufen, automatisieren wir 80% des Zertifizierungsprozesses 
            und machen ISO 27001 so einfach wie eine Software-Installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Bot,
              title: 'KI-gestützte Automatisierung',
              description: 'Unsere proprietäre KI analysiert Ihre Infrastruktur und generiert 80% der erforderlichen Dokumentation automatisch.',
              benefits: ['174 Kontrollen automatisch geprüft', 'ISMS-Dokumentation in 3 Tagen', 'Kontinuierliche Compliance-Überwachung'],
              techDetails: 'Machine Learning Algorithmus mit 500.000+ Compliance-Datenpunkten trainiert',
              savings: '€45.000 Beratungskosten gespart'
            },
            {
              icon: ShieldCheck,
              title: 'Integrierte Cyber-Defense',
              description: 'ISO 27001 + proaktive Bedrohungserkennung in einer Plattform. Nicht nur Compliance, sondern echte Sicherheit.',
              benefits: ['Real-time Threat Monitoring', '24/7 SOC Integration', 'Automated Incident Response'],
              techDetails: 'SIEM-Integration mit 14 führenden Security-Tools',
              savings: '€120.000 SOC-Kosten jährlich'
            },
            {
              icon: Globe,
              title: 'Global Market Access',
              description: 'ISO 27001 öffnet Türen zu 67 Ländern und $2.3 Billionen B2B-Markt. Wir machen Sie international wettbewerbsfähig.',
              benefits: ['Fortune 500 Zugang', 'EU-DSGVO Synergie', 'Behörden-Zertifizierung'],
              techDetails: 'Multi-Standard Compliance Dashboard (ISO 27001, SOC 2, GDPR)',
              savings: '€2.3M durchschnittlicher Deal-Value'
            },
            {
              icon: TrendingUp,
              title: 'Business Intelligence Integration',
              description: 'Verwandeln Sie Compliance-Daten in Business-Intelligence. Risikomanagement wird zum Wettbewerbsvorteil.',
              benefits: ['Executive Risk Dashboards', 'Predictive Risk Analytics', 'ROI-Tracking je Kontrolle'],
              techDetails: 'Power BI / Tableau Integration mit Custom APIs',
              savings: '15% bessere Risk-adjusted Returns'
            },
            {
              icon: Users,
              title: 'Zero-Training Onboarding',
              description: 'Ihre Mitarbeiter müssen nichts Neues lernen. Marsstein integriert sich nahtlos in bestehende Workflows.',
              benefits: ['Slack/Teams Integration', 'Single Sign-On (SSO)', 'Intuitive Mobile App'],
              techDetails: 'REST APIs für 200+ Enterprise-Integrationen',
              savings: '€89.000 Schulungskosten vermieden'
            },
            {
              icon: Rocket,
              title: 'Continuous Compliance Engine',
              description: 'ISO 27001 ist kein einmaliges Projekt, sondern ein lebender Prozess. Unsere Engine hält Sie permanent compliant.',
              benefits: ['Auto-Updates bei Standard-Änderungen', 'Continuous Risk Assessment', 'Predictive Audit Readiness'],
              techDetails: 'Event-driven Architecture mit Microservices',
              savings: '€50.000 Re-Audit Kosten alle 3 Jahre'
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#a1251b]/30 hover:scale-105">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#a1251b] to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs font-semibold text-blue-800 mb-1">Tech-Specs:</div>
                  <div className="text-xs text-blue-700">{benefit.techDetails}</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs font-semibold text-green-800 mb-1">Kosteneinsparung:</div>
                  <div className="text-sm font-bold text-green-700">{benefit.savings}</div>
                </div>
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
      <PainpointSection />
      <Iso27001DeepDiveSection />
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