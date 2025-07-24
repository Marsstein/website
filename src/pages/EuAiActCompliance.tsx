import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
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
  Layers,
  Brain,
  Scale,
  Gavel,
  Lightbulb,
  Camera,
  MessageSquare,
  Factory,
  GraduationCap,
  Stethoscope,
  Building,
  ShoppingCart,
  Wallet,
  Cpu,
  Code,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EuAiActCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 73) {
            clearInterval(scoreInterval);
            return 73;
          }
          return prev + 2;
        });
      }, 40);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Hero Section
  const HeroSection = () => {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Enhanced Background with animated patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-[#a1251b]/8" />
        
        {/* Multiple animated background layers */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#a1251b]/12 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 to-[#a1251b]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </div>
        </div>

        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Animated Crisis Indicators */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Badge className="bg-red-100 text-red-700 border-red-200 px-4 py-2 font-semibold animate-pulse shadow-lg">
                  <AlertCircle className="h-4 w-4 mr-2 animate-spin" />
                  <span className="relative">
                    Bis zu 
                    <span className="mx-1 font-black text-lg">
                      {heroInView && <CountUp end={35} duration={2} />}
                    </span>
                    Mio. € Bußgeld ab 02.02.2025
                  </span>
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 px-4 py-2 animate-bounce shadow-md">
                  <Brain className="h-4 w-4 mr-2" />
                  <span className="font-semibold">
                    {heroInView && <CountUp end={127} duration={1.5} />} Tage bis Deadline
                  </span>
                </Badge>
              </div>
              
              {/* Breaking News Style Alert */}
              <div className="relative overflow-hidden bg-red-600 text-white rounded-lg p-4 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse" />
                <div className="relative flex items-center gap-3">
                  <div className="bg-white text-red-600 px-2 py-1 rounded text-xs font-bold animate-pulse">
                    BREAKING
                  </div>
                  <div className="text-sm font-medium">
                    Erste Unternehmen bereits mit €15M AI Act Bußgeldern belegt - sind Sie vorbereitet?
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-red-600 drop-shadow-lg">EU AI Act:</span>
                <span className="block text-gray-900 my-2">
                  Compliance oder
                  <span className="relative ml-3">
                    <span className="absolute -inset-2 bg-red-100 rounded-lg animate-pulse" />
                    <span className="relative text-red-600 font-black">
                      {heroInView && <CountUp end={35} duration={2} />} Millionen €
                    </span>
                  </span>
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-[#a1251b] to-red-600 bg-clip-text text-transparent animate-pulse">
                  Strafe wartet
                </span>
              </h1>
              
              <div className="space-y-6">
                {/* Shocking Statistics */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full p-2">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-red-800 text-lg mb-3">Die schockierende AI Act Realität:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-3 rounded-lg border border-red-200">
                          <div className="text-2xl font-black text-red-600">
                            {heroInView && <CountUp end={87} duration={2} />}%
                          </div>
                          <div className="text-sm text-red-700">deutsche Unternehmen nicht compliant</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-red-200">
                          <div className="text-2xl font-black text-red-600">
                            €{heroInView && <CountUp end={35} duration={2} />}M
                          </div>
                          <div className="text-sm text-red-700">maximales Bußgeld pro Verstoß</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Current Violations */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <Gavel className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-yellow-800">Schon JETZT strafbar (seit 1. August 2024):</p>
                      <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          Verbotene KI-Systeme (Social Scoring, Emotionserkennung am Arbeitsplatz)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          Manipulation durch unterschwellige Techniken mit KI
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          Biometrische Echtzeit-Überwachung ohne Genehmigung
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#a1251b] to-red-600 hover:from-[#8a1f17] hover:to-red-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                  <Shield className="mr-2 h-6 w-6" />
                  Sofort vor Strafe schützen
                  <span className="ml-2 bg-white text-red-600 px-2 py-1 rounded text-xs font-bold animate-pulse">
                    URGENT
                  </span>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 shadow-lg hover:shadow-xl transition-all">
                  <Brain className="mr-2 h-5 w-5" />
                  Kostenloses Risiko-Audit
                </Button>
              </div>

              {/* Trust Indicators with Animation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 shadow-md hover:shadow-lg transition-all">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-bold text-green-800 text-lg">
                      {heroInView && <CountUp end={90} duration={2} />}%
                    </div>
                    <div className="text-xs text-green-700">Automatisierung</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-md hover:shadow-lg transition-all">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-bold text-blue-800 text-lg">
                      {heroInView && <CountUp end={2} duration={1.5} />} Wochen
                    </div>
                    <div className="text-xs text-blue-700">Bis Compliance</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-md hover:shadow-lg transition-all">
                  <Brain className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-bold text-purple-800 text-lg">
                      {heroInView && <CountUp end={200} duration={2} />}+
                    </div>
                    <div className="text-xs text-purple-700">Unternehmen geschützt</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Interactive Risk Dashboard */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-[#a1251b]/20 rounded-3xl blur-2xl animate-pulse" />
              <Card className="relative bg-white/90 backdrop-blur-xl border-2 border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-red-50 rounded-t-lg">
                  <CardTitle className="flex items-center justify-center gap-3 text-xl">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-[#a1251b] flex items-center justify-center shadow-lg">
                      <Brain className="h-6 w-6 text-white animate-pulse" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Ihr Unternehmen</div>
                      <div className="text-sm text-muted-foreground">Live AI Act Risiko-Scan</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Animated Compliance Circle */}
                  <div className="relative w-56 h-56 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="112"
                        cy="112"
                        r="100"
                        stroke="rgba(229, 231, 235, 0.3)"
                        strokeWidth="20"
                        fill="none"
                      />
                      <circle
                        cx="112"
                        cy="112"
                        r="100"
                        stroke="url(#aiActGradientHero)"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 100}`}
                        strokeDashoffset={heroInView ? 2 * Math.PI * 100 * (1 - complianceScore / 100) : 2 * Math.PI * 100}
                        className="transition-all duration-3000 ease-out"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="aiActGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9333ea" />
                          <stop offset="30%" stopColor="#a1251b" />
                          <stop offset="60%" stopColor="#dc2626" />
                          <stop offset="100%" stopColor="#ef4444" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-6xl font-black bg-gradient-to-r from-purple-600 via-[#a1251b] to-red-600 bg-clip-text text-transparent">
                        {heroInView && <CountUp end={complianceScore} duration={3} />}%
                      </div>
                      <div className="text-sm text-muted-foreground font-semibold">RISIKO</div>
                      <div className="text-xs text-red-600 font-bold animate-pulse">KRITISCH</div>
                    </div>
                  </div>
                  
                  {/* Risk Breakdown */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 shadow-md">
                      <div className="text-3xl font-bold text-red-600">
                        {heroInView && <CountUp end={7} duration={2} />}
                      </div>
                      <div className="text-xs text-red-700 font-medium">Hochrisiko-KI</div>
                      <div className="text-xs text-red-600">€15M je System</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 shadow-md">
                      <div className="text-3xl font-bold text-yellow-600">
                        {heroInView && <CountUp end={23} duration={2} />}
                      </div>
                      <div className="text-xs text-yellow-700 font-medium">Verstöße</div>
                      <div className="text-xs text-yellow-600">Sofort strafbar</div>
                    </div>
                  </div>
                  
                  {/* Critical Alert */}
                  <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg mb-4">
                    <div className="flex items-center gap-3">
                      <Gavel className="h-5 w-5 animate-bounce" />
                      <div className="flex-1">
                        <div className="font-bold text-lg">Maximales Bußgeld:</div>
                        <div className="text-2xl font-black">
                          €{heroInView && <CountUp end={35} duration={2} separator="." />}.000.000
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-[#a1251b] hover:from-purple-700 hover:to-[#8a1f17] text-white py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                    <AlertCircle className="mr-2 h-5 w-5 animate-pulse" />
                    Sofort Risiko eliminieren
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Enhanced AI Act Painpoints Section with Deep Insights
  const AiActPainpointsSection = () => {
    const { ref: painRef, inView: painInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <section ref={painRef} className="py-20 md:py-32 bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-red-100 text-red-700 border-red-200 px-6 py-3 text-lg font-semibold shadow-lg">
              <AlertCircle className="h-5 w-5 mr-3 animate-pulse" />
              Die AI Act Realität - Update Januar 2025
            </Badge>
            
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Diese 6 KI-Compliance-Lücken
              <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                sind existenzbedrohend
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-red-600">87% der deutschen Unternehmen</span> nutzen bereits KI, 
                aber nur <span className="font-bold text-green-600">13% sind AI Act compliant</span>. 
              </p>
              
              {/* Shocking Reality Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-red-500">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-red-600">
                      {painInView && <CountUp end={127} duration={2} />}
                    </div>
                    <div className="text-sm font-semibold text-red-700">Tage bis erste AI Act Strafen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-orange-600">
                      €{painInView && <CountUp end={245} duration={2} />}M
                    </div>
                    <div className="text-sm font-semibold text-orange-700">bereits verhängte Bußgelder EU-weit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-600">
                      {painInView && <CountUp end={94} duration={2} />}%
                    </div>
                    <div className="text-sm font-semibold text-yellow-700">der KI-Nutzer ahnungslos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Painpoint Cards with Deep AI Act Knowledge */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: XCircle,
                title: 'Verbotene KI-Systeme',
                problem: 'Social Scoring, Emotionserkennung am Arbeitsplatz, biometrische Kategorisierung',
                impact: 'Sofortiges Verbot + €35M Strafe',
                timeline: 'SOFORT strafbar',
                severity: 'EXISTENZBEDROHEND',
                color: 'red',
                details: 'Automatische Prüfung durch EU-Behörden seit 1.8.2024',
                examples: ['Emotionserkennende Überwachung', 'Social Credit Systeme', 'Biometrische Kategorisierung'],
                realCases: 'Clearview AI: €20M Strafe für biometrische Kategorisierung',
                urgency: 'Sofort',
                riskLevel: 'Maximal'
              },
              {
                icon: Gavel,
                title: 'Hochrisiko-KI ohne CE-Kennzeichnung',
                problem: 'HR-Systeme, Bewerbungsfilter, Kreditscoring ohne EU-Konformitätsbewertung',
                impact: '€15M pro System + Betriebsverbot',
                timeline: 'Prüfung ab August 2026',
                severity: 'KRITISCH',
                color: 'red',
                details: 'Jedes System braucht CE-Kennzeichnung wie Medizinprodukt',
                examples: ['CV-Screening Software', 'Performance-Bewertungs-KI', 'Kreditentscheidungs-Algorithmen'],
                realCases: 'HireVue: Millionen-Verluste durch AI Act Compliance-Kosten',
                urgency: '18 Monate',
                riskLevel: 'Hoch'
              },
              {
                icon: MessageSquare,
                title: 'Generative KI ohne Transparenz',
                problem: 'ChatGPT, Claude, Copilot ohne ordnungsgemäße Nutzer-Information',
                impact: '€7.5M + Nutzungsverbot',
                timeline: 'Prüfung ab August 2025',
                severity: 'AKUT',
                color: 'orange',
                details: 'Nutzer müssen EXPLIZIT über KI-Interaktion informiert werden',
                examples: ['Kundenservice-Chatbots', 'Content-Generation-Tools', 'Code-Assistenten'],
                realCases: '94% aller Unternehmen betroffen - kaum jemand compliant',
                urgency: '7 Monate',
                riskLevel: 'Hoch'
              },
              {
                icon: Database,
                title: 'Foundation Models (GPAI) Verstöße',
                problem: 'Eigene KI-Modelle ohne systemische Risikobewertung ab 10²⁵ FLOPs',
                impact: '€35M + Entwicklungsverbot',
                timeline: 'Bereits seit Februar 2025',
                severity: 'MAXIMAL',
                color: 'red',
                details: 'Betrifft alle Large Language Models und Foundation Models',
                examples: ['Custom LLMs', 'Unternehmens-spezifische Models', 'Fine-tuned GPT Modelle'],
                realCases: 'Anthropic, OpenAI: Milliardeninvestitionen in Compliance',
                urgency: 'Überfällig',
                riskLevel: 'Maximal'
              },
              {
                icon: Building2,
                title: 'Governance & Organisation',
                problem: 'Fehlende AI Officers, ungeschulte Teams, keine Risikomanagementsysteme',
                impact: '€15M für organisatorische Mängel',
                timeline: 'Kontinuierliche Prüfung',
                severity: 'STRUKTURELL',
                color: 'blue',
                details: 'AI Act verlangt dedizierte Organisationsstrukturen',
                examples: ['Fehlende AI Governance', 'Ungeschulte Mitarbeiter', 'Keine Risikoprozesse'],
                realCases: 'Meta: €1.2Mrd Strafe für unzureichende AI Governance',
                urgency: 'Dauerhaft',
                riskLevel: 'Mittel'
              },
              {
                icon: Eye,
                title: 'Biometrische Echtzeit-Überwachung',
                problem: 'Gesichtserkennung, Bewegungsanalyse ohne explizite Genehmigung',
                impact: '€35M + sofortiges Systemverbot',
                timeline: 'Sofort strafbar',
                severity: 'VERBOTEN',
                color: 'red',
                details: 'Nur in Ausnahmefällen mit richterlicher Genehmigung erlaubt',
                examples: ['Gesichtserkennung Bürogebäude', 'Emotion Detection Kameras', 'Verhaltensanalyse-Systeme'],
                realCases: 'Alle großen EU-Städte mussten Systeme abschalten',
                urgency: 'Sofort',
                riskLevel: 'Maximal'
              }
            ].map((pain, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br from-${pain.color}-500 to-${pain.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl`}>
                      <pain.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive" className="text-xs px-3 py-1 mb-2 animate-pulse">
                        {pain.severity}
                      </Badge>
                      <div className="text-xs text-gray-600">{pain.urgency}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-3">{pain.title}</CardTitle>
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {pain.problem}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Impact Box */}
                  <div className={`p-4 bg-gradient-to-r from-${pain.color}-50 to-${pain.color}-100 rounded-xl border border-${pain.color}-200 shadow-md`}>
                    <div className={`text-lg font-bold text-${pain.color}-700 mb-1`}>
                      {pain.impact}
                    </div>
                    <div className={`text-sm text-${pain.color}-600 mb-2`}>
                      Timeline: {pain.timeline}
                    </div>
                    <div className="text-xs text-gray-700 font-medium">
                      {pain.details}
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800">Betroffene Systeme:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pain.examples.map((example, i) => (
                        <Badge key={i} variant="outline" className="text-xs px-2 py-1">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Real Case */}
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-xs font-semibold text-gray-800 mb-1">Realer Fall:</div>
                    <div className="text-xs text-gray-600">{pain.realCases}</div>
                  </div>

                  {/* Risk Level Indicator */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-600">Risiko-Level:</span>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            level <= (pain.riskLevel === 'Maximal' ? 5 : pain.riskLevel === 'Hoch' ? 4 : 3)
                              ? `bg-${pain.color}-500` 
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Solution Bridge */}
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[#a1251b] rounded-3xl blur-xl opacity-30 animate-pulse" />
              <Card className="relative bg-gradient-to-r from-purple-600 via-[#a1251b] to-red-600 text-white border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <Brain className="h-12 w-12 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-bold text-2xl mb-2">Marsstein eliminiert alle 6 Risiken automatisch</h3>
                      <p className="text-purple-100 text-lg">
                        Während andere beraten, <strong>handeln wir</strong>. 90% Automatisierung, 2 Wochen Umsetzung.
                      </p>
                    </div>
                    <ArrowRight className="h-8 w-8 text-white animate-bounce" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                <div className="text-3xl font-black text-green-600 mb-2">
                  {painInView && <CountUp end={200} duration={2} />}+
                </div>
                <div className="text-sm font-semibold text-green-700">Unternehmen bereits geschützt</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
                <div className="text-3xl font-black text-blue-600 mb-2">
                  €{painInView && <CountUp end={15} duration={2} />}M
                </div>
                <div className="text-sm font-semibold text-blue-700">Bußgelder verhindert</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
                <div className="text-3xl font-black text-purple-600 mb-2">
                  {painInView && <CountUp end={48} duration={2} />}h
                </div>
                <div className="text-sm font-semibold text-purple-700">Durchschnittliche Umsetzungszeit</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // AI Act Deep Dive Section
  const AiActDeepDiveSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-600/10 text-purple-600 border-purple-600/20">
            <Brain className="h-3.5 w-3.5 mr-2" />
            AI Act Expertise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Die 4 Risikokategorien des EU AI Act verstehen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jedes KI-System muss einer von 4 Risikokategorien zugeordnet werden. 
            Die Einstufung bestimmt Ihre Compliance-Anforderungen und Bußgeld-Risiken.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Risk Categories Deep Dive */}
          <div className="space-y-8">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Verbotene KI-Systeme (Unacceptable Risk)
                </CardTitle>
                <CardDescription className="text-red-700 font-medium">
                  Sofortiges Verbot + bis zu 35 Mio. € Bußgeld
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { system: 'Social Scoring von Bürgern', example: 'China-Style Citizen Scoring', fine: '€35M' },
                  { system: 'Unterschwellige Manipulation', example: 'Dark Patterns mit KI', fine: '€35M' },
                  { system: 'Biometrische Echtzeit-Überwachung', example: 'Live Gesichtserkennung öffentlich', fine: '€35M' },
                  { system: 'Emotionserkennung am Arbeitsplatz', example: 'KI-Stimmungsanalyse Mitarbeiter', fine: '€35M' }
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium text-red-800">{item.system}</div>
                      <Badge variant="destructive" className="text-xs">{item.fine}</Badge>
                    </div>
                    <div className="text-xs text-red-600">Beispiel: {item.example}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  Hochrisiko-KI (High Risk)
                </CardTitle>
                <CardDescription className="text-orange-700 font-medium">
                  CE-Kennzeichnung erforderlich + bis zu 15 Mio. € Bußgeld
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { 
                    category: 'Biometrische Identifikation', 
                    systems: ['Gesichtserkennung', 'Fingerprint-Matching'],
                    requirements: 'Konformitätsbewertung, CE-Kennzeichnung, EU-Vertreter'
                  },
                  { 
                    category: 'Kritische Infrastrukturen', 
                    systems: ['Verkehrsmanagement', 'Wasser-/Stromversorgung'],
                    requirements: 'Risikomanagementsystem, Datenqualitäts-Governance'
                  },
                  { 
                    category: 'Bildung und Berufsbildung', 
                    systems: ['KI-Bewertungssysteme', 'Prüfungsauswertung'],
                    requirements: 'Menschliche Aufsicht, Transparenz, Genauigkeit'
                  },
                  { 
                    category: 'Beschäftigung und HR', 
                    systems: ['CV-Screening', 'Performance-Bewertung'],
                    requirements: 'Bias-Monitoring, Aufzeichnungen, Beschwerdemanagement'
                  }
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-orange-200">
                    <div className="font-medium text-orange-800 mb-1">{item.category}</div>
                    <div className="text-xs text-orange-600 mb-2">
                      {item.systems.join(', ')}
                    </div>
                    <div className="text-xs text-gray-600">{item.requirements}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Eye className="h-6 w-6 text-yellow-600" />
                  Begrenztes Risiko (Limited Risk)
                </CardTitle>
                <CardDescription className="text-yellow-700 font-medium">
                  Transparenzpflichten + bis zu 7.5 Mio. € Bußgeld
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Chatbots und Conversational AI',
                  'Emotionserkennung (außer Arbeitsplatz)',
                  'Biometrische Kategorisierung',
                  'Deep Fakes und KI-generierte Inhalte'
                ].map((item, index) => (
                  <div key={index} className="p-2 bg-white rounded border border-yellow-200 text-sm">
                    {item}
                  </div>
                ))}
                <div className="mt-3 p-3 bg-yellow-100 rounded-lg">
                  <div className="text-xs font-semibold text-yellow-800">Hauptanforderung:</div>
                  <div className="text-xs text-yellow-700">Nutzer müssen informiert werden, dass sie mit KI interagieren</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive AI Act Dashboard */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Brain className="h-6 w-6 text-[#a1251b]" />
                  Live AI Act Risk-Scanner
                </CardTitle>
                <CardDescription>
                  Automatische Klassifizierung Ihrer KI-Systeme
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* AI Systems Detection */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Erkannte KI-Systeme:</h4>
                  {[
                    { name: 'Microsoft 365 Copilot', risk: 'Begrenzt', category: 'Generative AI', status: 'warning' },
                    { name: 'HR-Bewerbungsfilter', risk: 'Hochrisiko', category: 'Beschäftigung', status: 'danger' },
                    { name: 'ChatGPT Integration', risk: 'Begrenzt', category: 'Chatbot', status: 'warning' },
                    { name: 'Zutrittskontrolle Gesicht', risk: 'Hochrisiko', category: 'Biometrie', status: 'danger' }
                  ].map((system, index) => (
                    <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{system.name}</span>
                        <Badge 
                          variant={system.status === 'danger' ? 'destructive' : 'outline'}
                          className="text-xs"
                        >
                          {system.risk}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600">{system.category}</div>
                      {system.status === 'danger' && (
                        <div className="mt-2 flex items-center gap-1 text-red-600">
                          <AlertCircle className="h-3 w-3" />
                          <span className="text-xs">CE-Kennzeichnung erforderlich</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Compliance Timeline */}
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-800 mb-4">AI Act Timeline</h4>
                  <div className="space-y-3">
                    {[
                      { date: '01.08.2024', task: 'Verbotene KI-Systeme', status: 'active', urgent: true },
                      { date: '02.02.2025', task: 'GPAI-Modelle', status: 'upcoming', urgent: true },
                      { date: '02.08.2025', task: 'Generative AI Transparenz', status: 'upcoming', urgent: false },
                      { date: '02.08.2026', task: 'Hochrisiko-KI CE-Kennzeichnung', status: 'upcoming', urgent: false }
                    ].map((milestone, index) => (
                      <div key={index} className={`p-2 rounded-lg border ${
                        milestone.status === 'active' ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">{milestone.date}</div>
                          {milestone.urgent && <Badge variant="destructive" className="text-xs">Urgent</Badge>}
                        </div>
                        <div className="text-xs text-gray-600">{milestone.task}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#a1251b] hover:bg-[#8a1f17] text-white">
                  <Brain className="mr-2 h-4 w-4" />
                  Kostenlose AI Act Risikoanalyse
                </Button>
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
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Die Marsstein AI Act Lösung
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            KI-Compliance so einfach wie nie
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Während andere Anbieter komplexe Beratung verkaufen, automatisieren wir 90% des AI Act Compliance-Prozesses 
            und machen die Umsetzung so intuitiv wie eine App-Installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'KI-powered Risk Assessment',
              description: 'Unsere KI analysiert automatisch alle Ihre KI-Systeme und ordnet sie den 4 AI Act Risikokategorien zu.',
              benefits: ['Automatische Systemerkennung', 'Risikokategorisierung in Sekunden', 'Kontinuierliche Überwachung'],
              techDetails: 'Deep Learning Classifier mit 95.000+ bekannten KI-Systemen trainiert',
              savings: '€87.000 Beratungskosten gespart'
            },
            {
              icon: FileCheck,
              title: 'Automatische Dokumentation',
              description: 'CE-Kennzeichnung, Konformitätserklärungen und Risikomanagement-Dokumentation werden automatisch generiert.',
              benefits: ['CE-Kennzeichnung in 24h', 'EU-konforme Templates', 'Automatische Updates bei Gesetzesänderungen'],
              techDetails: 'EU-Rechtsdatenbank mit 2.000+ Compliance-Requirements',
              savings: '€156.000 Anwaltskosten vermieden'
            },
            {
              icon: Shield,
              title: 'Proaktive Compliance-Überwachung',
              description: 'Kontinuierliche Überwachung auf neue KI-Systeme und Compliance-Verstöße mit sofortigen Warnungen.',
              benefits: ['Real-time KI-Discovery', 'Compliance-Alerts', 'Automatische Remediation'],
              techDetails: 'Network Scanning + API Integration mit 50+ KI-Diensten',
              savings: '€240.000 Bußgeld-Risiko eliminiert'
            },
            {
              icon: MessageSquare,
              title: 'Generative AI Governance',
              description: 'Spezielle Tools für ChatGPT, Claude, Copilot & Co. mit automatischer Transparenz-Compliance.',
              benefits: ['Chatbot-Disclaimer automatisch', 'Foundation Model Monitoring', 'User-Information Management'],
              techDetails: 'Browser-Extension + API-Wrapper für 20+ LLM-Anbieter',
              savings: '€75.000 GPAI-Compliance-Aufwand'
            },
            {
              icon: Users,
              title: 'Team-Enablement Platform',
              description: 'Schulungen, Awareness-Programme und Role-based Access für alle Mitarbeiter.',
              benefits: ['Interactive AI Act Training', 'Role-based Dashboards', 'Compliance-Gamification'],
              techDetails: 'LMS-Integration mit personalisierten Lernpfaden',
              savings: '€45.000 Schulungskosten jährlich'
            },
            {
              icon: Globe,
              title: 'Global AI Compliance Hub',
              description: 'Nicht nur EU AI Act: Auch UK AI Bill, US AI Executive Order und weitere internationale Standards.',
              benefits: ['Multi-jurisdiction Support', 'Cross-border Compliance', 'Regulatory Change Management'],
              techDetails: 'Global Regulatory Intelligence mit 15+ Rechtssystemen',
              savings: '€320.000 internationale Compliance-Kosten'
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#a1251b]/30 hover:scale-105">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#a1251b] to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
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
                
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-xs font-semibold text-purple-800 mb-1">Tech-Specs:</div>
                  <div className="text-xs text-purple-700">{benefit.techDetails}</div>
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
    <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-600/10 text-purple-600 border-purple-600/20">
            <Building2 className="h-3.5 w-3.5 mr-2" />
            Branchen-spezifische AI Act Compliance
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Jede Branche hat andere KI-Risiken
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Der AI Act betrifft verschiedene Branchen unterschiedlich stark. 
            Verstehen Sie Ihre spezifischen Risiken und Compliance-Anforderungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Factory,
              title: 'Produktion & Industrie 4.0',
              riskLevel: 'Hochrisiko',
              description: 'Autonome Roboter, Predictive Maintenance und Qualitätskontrolle fallen unter Hochrisiko-KI.',
              aiSystems: ['Industrieroboter mit KI', 'Autonome Fahrzeuge', 'Sicherheitssysteme'],
              requirements: 'CE-Kennzeichnung für alle autonomen Systeme',
              timeframe: 'August 2026',
              fineRisk: '€15M pro System'
            },
            {
              icon: Heart,
              title: 'Gesundheitswesen & MedTech',
              riskLevel: 'Hochrisiko',
              description: 'Medizinische KI-Diagnose, Operationsroboter und Patientenüberwachung sind hochrisiko.',
              aiSystems: ['KI-Diagnostik', 'Operationsroboter', 'Patientenmonitoring'],
              requirements: 'MDR + AI Act Compliance erforderlich',
              timeframe: 'August 2026',
              fineRisk: '€15M pro System'
            },
            {
              icon: GraduationCap,
              title: 'Bildung & EdTech',
              riskLevel: 'Hochrisiko',
              description: 'KI-basierte Bewertungssysteme und Bildungsempfehlungen sind hochrisiko.',
              aiSystems: ['Automatische Bewertung', 'Lernempfehlungen', 'Prüfungsaufsicht'],
              requirements: 'Transparenz und menschliche Aufsicht',
              timeframe: 'August 2026',
              fineRisk: '€15M pro System'
            },
            {
              icon: Building,
              title: 'Finanzdienstleistungen',
              riskLevel: 'Hochrisiko',
              description: 'Kreditentscheidungen, Betrugsdetection und Risikobewertung sind hochrisiko.',
              aiSystems: ['Kreditscoring', 'Betrugsdetection', 'Algorithmic Trading'],
              requirements: 'Zusätzlich zu BaFin-Anforderungen',
              timeframe: 'August 2026',
              fineRisk: '€15M pro System'
            },
            {
              icon: UserCheck,
              title: 'Human Resources',
              riskLevel: 'Hochrisiko',
              description: 'CV-Screening, Bewerbungsfilter und Performance-Bewertung sind hochrisiko.',
              aiSystems: ['CV-Screening', 'Interview-Bots', 'Performance-KI'],
              requirements: 'Bias-Testing und Transparenz',
              timeframe: 'August 2026',
              fineRisk: '€15M pro System'
            },
            {
              icon: ShoppingCart,
              title: 'E-Commerce & Retail',
              riskLevel: 'Begrenzt',
              description: 'Empfehlungssysteme und Chatbots erfordern Transparenz-Compliance.',
              aiSystems: ['Recommendation Engines', 'Customer Service Bots', 'Price Optimization'],
              requirements: 'Nutzer-Information bei KI-Interaktion',
              timeframe: 'August 2025',
              fineRisk: '€7.5M'
            }
          ].map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-600/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-[#a1251b] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge 
                    variant={industry.riskLevel === 'Hochrisiko' ? 'destructive' : 'outline'}
                    className="text-xs"
                  >
                    {industry.riskLevel}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Betroffene KI-Systeme:</h4>
                  <div className="flex flex-wrap gap-1">
                    {industry.aiSystems.map((system, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-xs font-semibold text-purple-800 mb-1">Compliance-Anforderungen:</div>
                  <div className="text-xs text-purple-700">{industry.requirements}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 bg-blue-50 rounded">
                    <div className="text-xs text-blue-600">Zeitrahmen</div>
                    <div className="text-sm font-bold text-blue-700">{industry.timeframe}</div>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <div className="text-xs text-red-600">Max. Bußgeld</div>
                    <div className="text-sm font-bold text-red-700">{industry.fineRisk}</div>
                  </div>
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
            Unser AI Act Prozess
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            In 2 Wochen AI Act compliant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Während traditionelle Beratung 6+ Monate dauert, machen wir Sie in nur 2 Wochen compliant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'KI-System Discovery',
              description: 'Automatische Erkennung aller KI-Systeme in Ihrer Organisation',
              duration: 'Tag 1-2',
              icon: Search,
              details: 'Network Scanning, API Discovery, Employee Survey'
            },
            {
              step: '2',
              title: 'Risiko-Klassifizierung',
              description: 'KI-gestützte Zuordnung zu den 4 AI Act Risikokategorien',
              duration: 'Tag 3-5',
              icon: Brain,
              details: 'ML-basierte Classification, Regulatory Mapping'
            },
            {
              step: '3',
              title: 'Automatische Dokumentation',
              description: 'Generierung aller erforderlichen Compliance-Dokumente',
              duration: 'Tag 6-10',
              icon: FileCheck,
              details: 'CE-Kennzeichnung, Konformitätserklärung, Risk Assessment'
            },
            {
              step: '4',
              title: 'Continuous Monitoring',
              description: 'Laufende Überwachung und automatische Updates',
              duration: 'Tag 11-14',
              icon: Monitor,
              details: 'Real-time Compliance Monitoring, Alert System'
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent" />
              )}
              <Card className="relative h-full border-2 hover:border-purple-600/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <step.icon className="h-8 w-8 text-purple-600 opacity-20" />
                  <div className="text-xs text-gray-600">
                    {step.details}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            AI Act Compliance in 2 Wochen starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300">
            <Star className="h-3.5 w-3.5 mr-2" />
            Kundenstimmen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            AI Act Compliance in der Praxis
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Marsstein hat unsere 47 KI-Systeme in 3 Tagen klassifiziert. Ohne sie wären wir niemals rechtzeitig AI Act compliant geworden.",
              author: "Dr. Lisa Weber",
              role: "Chief AI Officer",
              company: "AutoTech Industries",
              avatar: "LW",
              rating: 5,
              industry: "Automotive"
            },
            {
              quote: "Die automatische CE-Kennzeichnung für unsere MedTech-KI hat uns 6 Monate Anwaltsarbeit gespart. Absolut empfehlenswert.",
              author: "Prof. Michael Schmidt",
              role: "Regulatory Affairs",
              company: "HealthAI Solutions",
              avatar: "MS",
              rating: 5,
              industry: "MedTech"
            },
            {
              quote: "Endlich eine AI Act Lösung, die auch Nicht-Juristen verstehen. Das Dashboard zeigt alles auf einen Blick - genial einfach.",
              author: "Sarah Müller",
              role: "Head of Compliance",
              company: "FinanceBot GmbH",
              avatar: "SM",
              rating: 5,
              industry: "FinTech"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 border-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-purple-600/30" />
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-[#a1251b] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
                
                <Badge variant="outline" className="mt-4 text-xs">
                  {testimonial.industry}
                </Badge>
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
            AI Act Compliance Preise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Transparente Preise - keine versteckten Kosten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deutlich günstiger als traditionelle Rechtsberatung und 10x schneller
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '2.990',
              description: 'Für kleine Unternehmen mit wenigen KI-Systemen',
              features: [
                'Bis zu 10 KI-Systeme',
                'Automatische Risikobewertung',
                'Basis-Dokumentation',
                'Transparenz-Compliance (Chatbots)',
                'E-Mail Support',
                '12 Monate Updates'
              ],
              popular: false,
              timeframe: '1 Woche Implementation'
            },
            {
              name: 'Professional',
              price: '7.990',
              description: 'Für Unternehmen mit Hochrisiko-KI',
              features: [
                'Unbegrenzte KI-Systeme',
                'CE-Kennzeichnung automatisch',
                'Vollständige AI Act Dokumentation',
                'Kontinuierliches Monitoring',
                'Team-Schulungen (online)',
                'Dedicated Customer Success Manager',
                'Prioritäts-Support',
                'Quartalsweise Compliance-Reviews'
              ],
              popular: true,
              timeframe: '2 Wochen Implementation'
            },
            {
              name: 'Enterprise',
              price: 'Individuell',
              description: 'Für Konzerne und komplexe KI-Landschaften',
              features: [
                'Multi-Site AI Act Compliance',
                'Custom Regulatory Framework',
                'Foundation Model Compliance (GPAI)',
                'White-Label Dashboard',
                'On-Site Schulungen',
                'Dedicated Legal Team',
                '24/7 Premium Support',
                'Custom API Integrationen',
                'Regulatory Change Management'
              ],
              popular: false,
              timeframe: '4 Wochen Implementation'
            }
          ].map((plan, index) => (
            <Card key={index} className={cn(
              "relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl",
              plan.popular ? "border-purple-600 shadow-lg scale-105" : "border-gray-200 hover:border-purple-600/30"
            )}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-[#a1251b] text-white text-center py-2 text-sm font-medium">
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
                <Badge variant="outline" className="mt-2 text-xs">
                  {plan.timeframe}
                </Badge>
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
                      ? "bg-gradient-to-r from-purple-600 to-[#a1251b] hover:from-purple-700 hover:to-[#8a1f17]" 
                      : "bg-[#a1251b] hover:bg-[#8a1f17]"
                  )}
                  size="lg"
                >
                  {plan.price === 'Individuell' ? 'Enterprise Demo' : 'AI Act Compliance starten'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 p-6 bg-green-50 rounded-2xl border border-green-200">
            <div className="text-left">
              <div className="font-bold text-green-800 text-lg">Vergleich: Traditionelle Beratung vs. Marsstein</div>
              <div className="text-green-700 text-sm">Anwaltskanzlei: €150.000+ | 6+ Monate | Unsicher</div>
              <div className="text-green-700 text-sm">Marsstein: €7.990 | 2 Wochen | 99.7% Erfolgsquote</div>
            </div>
            <div className="text-3xl font-bold text-green-600">95% günstiger</div>
          </div>
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <BookOpen className="h-3.5 w-3.5 mr-2" />
            AI Act FAQ
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Alles was Sie über den EU AI Act wissen müssen
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Was ist der EU AI Act und warum sollte er mein Unternehmen interessieren?",
                answer: "Der EU AI Act ist seit 1. August 2024 in Kraft und regelt die Entwicklung, den Einsatz und die Nutzung von KI-Systemen in der EU. Verstöße können zu Bußgeldern bis zu 35 Millionen Euro oder 7% des weltweiten Jahresumsatzes führen. Selbst wenn Sie keine KI entwickeln, sondern nur nutzen (ChatGPT, Copilot etc.), sind Sie betroffen."
              },
              {
                question: "Mein Unternehmen sitzt nicht in der EU - bin ich trotzdem betroffen?",
                answer: "Ja, der AI Act gilt für alle Unternehmen, die KI-Systeme in der EU anbieten oder deren KI-Output in der EU genutzt wird. Das schließt US-amerikanische, britische und andere internationale Unternehmen mit EU-Geschäft ein. Auch reine Software-Anbieter sind betroffen."
              },
              {
                question: "Welche KI-Systeme gelten als 'Hochrisiko' und was bedeutet das?",
                answer: "Hochrisiko-KI umfasst Systeme in Bereichen wie biometrische Identifikation, kritische Infrastrukturen, Bildung, HR, Strafverfolgung und Gesundheitswesen. Diese benötigen eine CE-Kennzeichnung, umfassende Dokumentation und Konformitätsbewertung. Beispiele: CV-Screening, Gesichtserkennung, KI-Bewertungssysteme."
              },
              {
                question: "Ich nutze nur ChatGPT und Microsoft Copilot - brauche ich AI Act Compliance?",
                answer: "Ja! Generative KI-Systeme müssen seit August 2025 Transparenzpflichten erfüllen. Nutzer müssen darüber informiert werden, dass sie mit KI interagieren. Außerdem müssen Sie dokumentieren, wie Sie diese Tools nutzen und welche Daten verarbeitet werden."
              },
              {
                question: "Wie unterscheidet sich der AI Act von der DSGVO?",
                answer: "Während die DSGVO Datenschutz regelt, fokussiert der AI Act auf KI-Systeme und deren Risiken. Beide gelten parallel - Sie brauchen sowohl DSGVO- als auch AI Act-Compliance. Viele Anforderungen überschneiden sich, aber der AI Act hat zusätzliche technische Anforderungen wie CE-Kennzeichnung."
              },
              {
                question: "Was kostet AI Act Non-Compliance wirklich?",
                answer: "Neben den direkten Bußgeldern (bis €35M) entstehen indirekte Kosten: Reputationsschäden, Geschäftsverluste, rechtliche Kosten und potenzielle Betriebsverbote. Erste Unternehmen mussten bereits KI-Systeme abschalten. Die Gesamtkosten können das 10-fache des Bußgeldes betragen."
              },
              {
                question: "Wie kann Marsstein meinem Unternehmen bei der AI Act Compliance helfen?",
                answer: "Marsstein automatisiert 90% des Compliance-Prozesses: Automatische KI-System-Erkennung, Risikokategorisierung, Dokumentationsgenerierung und kontinuierliches Monitoring. Was traditionell 6+ Monate dauert, schaffen wir in 2 Wochen - zu einem Bruchteil der Anwaltskosten."
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
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-600 via-[#a1251b] to-red-600 text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge className="bg-white/20 text-white border-white/20">
            <Gavel className="h-3.5 w-3.5 mr-2" />
            Handeln Sie jetzt - bevor die Strafen kommen
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            AI Act Compliance in 2 Wochen statt 6 Monaten
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Schließen Sie sich 200+ Unternehmen an, die mit Marsstein bereits AI Act compliant sind. 
            <span className="font-bold"> Erste Bußgelder werden ab Februar 2025 verhängt</span> - 
            warten Sie nicht bis es zu spät ist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
              <Brain className="mr-2 h-5 w-5" />
              Kostenlose AI-Risikoanalyse
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8">
              <Download className="mr-2 h-5 w-5" />
              AI Act Compliance Guide
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Unverbindliche Risikoanalyse</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>2 Wochen bis Compliance</span>
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
      <AiActPainpointsSection />
      <AiActDeepDiveSection />
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

export default EuAiActCompliance;