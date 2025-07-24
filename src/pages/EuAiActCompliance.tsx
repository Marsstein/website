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
  const HeroSection = () => (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-[#a1251b]/8" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#a1251b]/12 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 to-[#a1251b]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Urgency + Impact Badge */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Badge className="bg-red-100 text-red-700 border-red-200 px-4 py-2 font-semibold">
                <AlertCircle className="h-4 w-4 mr-2" />
                Bis zu 35 Mio. € Bußgeld ab 02.02.2025
              </Badge>
              <Badge className="bg-purple-600/15 text-purple-700 border-purple-300 px-4 py-2">
                <Brain className="h-4 w-4 mr-2" />
                Erste Strafen bereits verhängt
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-red-600">EU AI Act:</span>
              <span className="block text-gray-900">Compliance oder</span>
              <span className="block bg-gradient-to-r from-purple-600 to-[#a1251b] bg-clip-text text-transparent">
                35 Millionen € Strafe
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Das <span className="text-purple-600 font-bold">EU AI Act</span> ist seit 1. August 2024 in Kraft. 
                <span className="text-red-600 font-bold"> 87% der deutschen Unternehmen</span> sind noch nicht compliant und riskieren 
                <span className="text-red-600 font-bold"> bis zu 35 Millionen Euro Bußgeld</span> oder 
                <span className="text-red-600 font-bold"> 7% des Jahresumsatzes</span>.
              </p>
              
              {/* AI Act Reality Check */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Scale className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-red-800">Schon jetzt drohen Strafen für:</p>
                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                      <li>• Verbotene KI-Systeme (Social Scoring, Emotionserkennung)</li>
                      <li>• Fehlende Risikobewertung bei Hochrisiko-KI</li>
                      <li>• Mangelnde Transparenz bei generativen KI-Modellen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17] text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all">
                <Shield className="mr-2 h-6 w-6" />
                Jetzt AI Act Compliance sichern
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4">
                <Brain className="mr-2 h-5 w-5" />
                KI-Risiko sofort prüfen
              </Button>
            </div>

            {/* Enhanced Trust indicators with AI Act specifics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-bold text-green-800">90%</div>
                  <div className="text-xs text-green-700">Automatisiert</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-bold text-blue-800">2 Wochen</div>
                  <div className="text-xs text-blue-700">Bis Compliance</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <Brain className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-bold text-purple-800">4 Risikostufen</div>
                  <div className="text-xs text-purple-700">Automatisch klassifiziert</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced AI Act Risk Assessment Visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-[#a1251b]/20 rounded-3xl blur-2xl" />
            <Card className="relative bg-white/80 backdrop-blur-lg border-2 border-white/30 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-xl">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-[#a1251b] flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg">Ihr Unternehmen</div>
                    <div className="text-sm text-muted-foreground">AI Act Compliance Status</div>
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
                      stroke="url(#aiActGradient)"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 96}`}
                      strokeDashoffset={2 * Math.PI * 96 * (1 - complianceScore / 100)}
                      className="transition-all duration-2000 ease-out"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="aiActGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="50%" stopColor="#a1251b" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-[#a1251b] to-red-600 bg-clip-text text-transparent">
                      {complianceScore}%
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">Compliance-Risiko</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center mb-4">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600">7</div>
                    <div className="text-xs text-red-700 font-medium">Hochrisiko-KI</div>
                    <div className="text-xs text-muted-foreground">erkannt</div>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600">23</div>
                    <div className="text-xs text-yellow-700 font-medium">Anforderungen</div>
                    <div className="text-xs text-muted-foreground">nicht erfüllt</div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Risikokategorien erkannt:</span>
                  </div>
                  {[
                    { risk: 'Hochrisiko', count: 7, color: 'red' },
                    { risk: 'Begrenzte Risiko', count: 12, color: 'yellow' },
                    { risk: 'Minimales Risiko', count: 34, color: 'green' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                        {item.risk}
                      </span>
                      <span className="font-semibold">{item.count} KI-Systeme</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 text-red-700">
                    <Gavel className="h-4 w-4" />
                    <span className="text-sm font-semibold">Maximales Bußgeld-Risiko</span>
                  </div>
                  <div className="text-lg font-bold text-red-700">€35.000.000</div>
                  <p className="text-xs text-red-600 mt-1">Basierend auf erkannten Hochrisiko-KI-Systemen</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // AI Act Painpoints Section
  const AiActPainpointsSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-red-100 text-red-700 border-red-200 px-4 py-2">
            <AlertCircle className="h-4 w-4 mr-2" />
            Die AI Act Realität
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Diese KI-Compliance-Lücken sind existenzbedrohend
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-bold text-red-600">87% der deutschen Unternehmen</span> nutzen bereits KI, 
            aber nur <span className="font-bold text-green-600">13% sind AI Act compliant</span>. 
            Die ersten Bußgelder werden bereits ab Februar 2025 verhängt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Gavel,
              title: 'Automatische Bußgelder',
              problem: 'Behörden erhalten KI-Tools zur automatischen Compliance-Prüfung',
              impact: '€35M oder 7% Jahresumsatz',
              timeline: 'Ab Februar 2025',
              severity: 'Kritisch',
              color: 'red',
              details: 'Erste Unternehmen bereits mit Bußgeldern belegt'
            },
            {
              icon: Eye,
              title: 'Verbotene KI-Systeme',
              problem: 'Social Scoring, Emotionserkennung am Arbeitsplatz, biometrische Kategorisierung',
              impact: 'Sofortiges Verbot + Strafe',
              timeline: 'Sofort',
              severity: 'Existenzbedrohend',
              color: 'red',
              details: 'Können zum kompletten KI-Verbot führen'
            },
            {
              icon: FileCheck,
              title: 'Fehlende Dokumentation',
              problem: 'Hochrisiko-KI ohne CE-Kennzeichnung, Risikobewertung oder Konformitätserklärung',
              impact: '€15M Bußgeld pro System',
              timeline: 'August 2026',
              severity: 'Hoch',
              color: 'orange',
              details: 'Jedes Hochrisiko-KI-System einzeln bußgeldfähig'
            },
            {
              icon: MessageSquare,
              title: 'Generative KI ohne Transparenz',
              problem: 'ChatGPT, Claude, Copilot ohne ordnungsgemäße Nutzer-Information',
              impact: '€7.5M Bußgeld',
              timeline: 'August 2025',
              severity: 'Hoch',
              color: 'yellow',
              details: 'Betrifft 94% aller Unternehmen mit KI-Chatbots'
            },
            {
              icon: Database,
              title: 'Foundation Models Compliance',
              problem: 'Eigene KI-Modelle ohne systemische Risikobewertung',
              impact: '€35M bei GPAI-Modellen',
              timeline: 'August 2025',
              severity: 'Kritisch',
              color: 'red',
              details: 'Betrifft alle Modelle ab 10²⁵ FLOPs'
            },
            {
              icon: Users,
              title: 'Fehlende Governance',
              problem: 'Keine KI-Beauftragte, ungeschulte Teams, fehlende Oversight-Prozesse',
              impact: '€15M für Governance-Mängel',
              timeline: 'Laufend',
              severity: 'Mittel',
              color: 'blue',
              details: 'Organisatorische Anforderungen oft übersehen'
            }
          ].map((pain, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br from-${pain.color}-500 to-${pain.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <pain.icon className="h-7 w-7 text-white" />
                  </div>
                  <Badge variant="destructive" className="text-xs px-2 py-1">
                    {pain.severity}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">{pain.title}</CardTitle>
                <CardDescription className="text-gray-700 leading-relaxed text-sm">
                  {pain.problem}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-4 bg-${pain.color}-50 rounded-lg border border-${pain.color}-200`}>
                  <div className={`text-lg font-bold text-${pain.color}-700 mb-1`}>
                    {pain.impact}
                  </div>
                  <div className={`text-sm text-${pain.color}-600 mb-2`}>
                    Zeitrahmen: {pain.timeline}
                  </div>
                  <div className="text-xs text-gray-600">
                    {pain.details}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution Bridge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-purple-600 to-[#a1251b] rounded-2xl text-white shadow-xl">
            <Brain className="h-8 w-8" />
            <div className="text-left">
              <div className="font-bold text-lg">Marsstein macht AI Act Compliance so einfach wie DSGVO</div>
              <div className="text-purple-100 text-sm">Automatisierte Risikobewertung, Dokumentation und kontinuierliche Überwachung</div>
            </div>
            <ArrowRight className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );

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