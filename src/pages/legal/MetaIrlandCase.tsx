import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Scale, 
  ArrowLeft,
  Download,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Globe,
  Shield,
  Users,
  Building2,
  FileText,
  ExternalLink,
  Target,
  Lightbulb,
  Star,
  Calendar,
  Award,
  TrendingUp,
  Lock,
  Eye,
  Settings,
  Zap,
  Brain,
  Search,
  Filter,
  Copy,
  Share2,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Flag,
  Info,
  HelpCircle,
  ArrowRight,
  Euro,
  Activity,
  Database,
  MessageCircle,
  BarChart3,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MetaIrlandCase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copySuccess, setCopySuccess] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const fineBreakdown = [
    {
      violation: "Unerlaubte Datenverarbeitung für Werbezwecke",
      amount: "€390 Millionen",
      percentage: 32.5,
      description: "Verarbeitung personenbezogener Daten ohne gültige Rechtsgrundlage",
      severity: "KRITISCH"
    },
    {
      violation: "Mangelnde Transparenz bei Datenverarbeitung",
      amount: "€310 Millionen", 
      percentage: 25.8,
      description: "Unzureichende Information über Verarbeitungszwecke",
      severity: "HOCH"
    },
    {
      violation: "Verletzung der Betroffenenrechte",
      amount: "€180 Millionen",
      percentage: 15.0,
      description: "Erschwerter Zugang zu Daten und Widerspruchsrechten",
      severity: "HOCH"
    },
    {
      violation: "Unzureichende Datenschutz-Folgenabschätzung",
      amount: "€120 Millionen",
      percentage: 10.0,
      description: "Fehlende DSFA für risikoreiche Verarbeitungen",
      severity: "MITTEL"
    },
    {
      violation: "Sonstige Verstöße",
      amount: "€200 Millionen",
      percentage: 16.7,
      description: "Weitere technische und organisatorische Mängel",
      severity: "MITTEL"
    }
  ];

  const keyChanges = [
    {
      area: "Einwilligungsmanagement",
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500",
      changes: [
        "Granulare Einwilligungsoptionen erforderlich",
        "Opt-out muss so einfach sein wie Opt-in",
        "Separate Einwilligung für jeden Verarbeitungszweck",
        "Regelmäßige Bestätigung der Einwilligung"
      ]
    },
    {
      area: "Transparenz und Information",
      icon: Eye,
      color: "from-blue-500 to-indigo-500", 
      changes: [
        "Klarere Datenschutzerklärungen in einfacher Sprache",
        "Detaillierte Informationen über Datenverwendung",
        "Einfach zugängliche Privatsphäre-Einstellungen",
        "Proaktive Benachrichtigung bei Änderungen"
      ]
    },
    {
      area: "Datenminimierung",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      changes: [
        "Beschränkung auf notwendige Daten",
        "Automatische Löschung nach Zweckerfüllung",
        "Weniger invasive Tracking-Methoden",
        "Opt-in für erweiterte Datensammlung"
      ]
    },
    {
      area: "Betroffenenrechte",
      icon: Users,
      color: "from-orange-500 to-red-500",
      changes: [
        "Vereinfachte Datenauskunft und -übertragung",
        "Effektivere Löschungsverfahren",
        "Verbesserte Widerspruchsmöglichkeiten",
        "Schnellere Bearbeitung von Anfragen"
      ]
    }
  ];

  const businessImpact = [
    {
      category: "Social Media Marketing",
      icon: MessageCircle,
      urgency: "HOCH",
      impacts: [
        "Überprüfung aller Facebook/Instagram Kampagnen",
        "Neue Einwilligungsverfahren für Pixel-Tracking",
        "Alternative Tracking-Methoden implementieren",
        "Compliance für Custom Audiences sicherstellen"
      ]
    },
    {
      category: "Datenanalyse & Insights",
      icon: BarChart3,
      urgency: "HOCH",
      impacts: [
        "First-Party Data Strategien verstärken",
        "Consent Management Plattformen einführen",
        "Anonymisierung und Pseudonymisierung",
        "Privacy-konforme Analytics Tools"
      ]
    },
    {
      category: "Kundenkommunikation",
      icon: Users,
      urgency: "MITTEL",
      impacts: [
        "Transparentere Datenschutzkommunikation",
        "Vereinfachte Privatsphäre-Einstellungen",
        "Proaktive Kundeninformation über Datennutzung",
        "Verbesserte Beschwerdemechanismen"
      ]
    },
    {
      category: "Technische Infrastruktur",
      icon: Settings,
      urgency: "HOCH",
      impacts: [
        "Consent Management Systeme upgraden",
        "Datenminimierung in bestehenden Systemen",
        "Automatisierte Löschprozesse implementieren",
        "Privacy-by-Design für neue Features"
      ]
    }
  ];

  const complianceSteps = [
    {
      phase: "Sofortige Maßnahmen (0-30 Tage)",
      priority: "KRITISCH",
      color: "from-red-500 to-pink-500",
      steps: [
        "Audit aller Social Media Datenverarbeitungen",
        "Überprüfung bestehender Einwilligungen",
        "Risikobewertung für ähnliche Verstöße",
        "Schulung der Marketing- und Legal-Teams"
      ]
    },
    {
      phase: "Kurzzeitmaßnahmen (1-3 Monate)",
      priority: "HOCH", 
      color: "from-orange-500 to-red-500",
      steps: [
        "Implementierung granularer Consent-Mechanismen",
        "Überarbeitung der Datenschutzerklärungen",
        "Verbesserung der Betroffenenrechte-Verfahren",
        "First-Party Data Strategie entwickeln"
      ]
    },
    {
      phase: "Mittelfristige Strategie (3-12 Monate)",
      priority: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      steps: [
        "Privacy-by-Design in alle Prozesse integrieren",
        "Kontinuierliches Compliance Monitoring",
        "Mitarbeiterschulungen und Zertifizierungen",
        "Regelmäßige Audits und Bewertungen"
      ]
    }
  ];

  const industryLessons = [
    {
      industry: "E-Commerce",
      lessons: [
        "Produkt-Tracking ohne explizite Einwilligung überdenken",
        "Personalisierte Werbung rechtssicher gestalten",
        "Customer Journey Analytics DSGVO-konform ausrichten"
      ]
    },
    {
      industry: "SaaS/Tech",
      lessons: [
        "User Onboarding mit Privacy-first Ansatz",
        "Feature-Tracking nur mit Nutzereinwilligung", 
        "Third-Party Integrationen sorgfältig prüfen"
      ]
    },
    {
      industry: "Medien/Publishing",
      lessons: [
        "Reichweitenmessung ohne invasives Tracking",
        "Programmatic Advertising überdenken",
        "Newsletter-Marketing compliance optimieren"
      ]
    },
    {
      industry: "Healthcare/Fintech",
      lessons: [
        "Besonders strenge Anforderungen bei sensiblen Daten",
        "Proaktive Compliance-Strategien implementieren",
        "Regelmäßige Rechtsprechungs-Updates verfolgen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button asChild variant="outline" className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10">
              <Link to="/wissen/rechtsprechung" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Rechtsprechung
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20"
            >
              <Euro className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">€1.2 Milliarden Strafe</span>
              <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Meta</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Ireland
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                DPC Case 2024
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Die bisher höchste DSGVO-Strafe gegen 
              <span className="font-semibold text-orange-300"> Meta Ireland Limited</span> und ihre 
              Auswirkungen auf Social Media Marketing
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2">
                <Euro className="h-4 w-4 mr-2" />
                €1.2 Mrd. Strafe
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Mai 2024
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Building2 className="h-4 w-4 mr-2" />
                Irish DPC
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <TabsList className="grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Überblick
                </TabsTrigger>
                <TabsTrigger value="fine" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Bußgeld-Aufschlüsselung
                </TabsTrigger>
                <TabsTrigger value="changes" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Änderungen
                </TabsTrigger>
                <TabsTrigger value="business" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Business Impact
                </TabsTrigger>
                <TabsTrigger value="lessons" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Branchenlearnings
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-orange-500/30">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6">Verfahrensübersicht</h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Im Mai 2024 verhängte die irische Datenschutzkommission (DPC) eine Rekordstrafe 
                            von 1.2 Milliarden Euro gegen Meta Ireland Limited wegen schwerwiegender 
                            DSGVO-Verstöße bei der Verarbeitung von Nutzerdaten auf Facebook und Instagram.
                          </p>
                          <p>
                            Das Verfahren konzentrierte sich auf die unrechtmäßige Verarbeitung personenbezogener 
                            Daten für Werbezwecke ohne angemessene Rechtsgrundlage und mangelnde Transparenz 
                            bei den Verarbeitungszwecken.
                          </p>
                          <p>
                            Diese Entscheidung setzt neue Standards für Social Media Plattformen und hat 
                            weitreichende Auswirkungen auf das gesamte Digital Marketing Ökosystem.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Verfahren Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Behörde:</span>
                              <span className="text-white font-semibold">Irish DPC</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Datum:</span>
                              <span className="text-white font-semibold">Mai 2024</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Betroffene:</span>
                              <span className="text-white font-semibold">Meta Ireland Ltd.</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Bußgeld:</span>
                              <span className="text-white font-semibold">€1.2 Mrd.</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status:</span>
                              <span className="text-white font-semibold">Rechtskräftig</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Entscheidung herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Fine Breakdown Tab */}
            <TabsContent value="fine" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-orange-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                      Bußgeld-Aufschlüsselung: €1.2 Milliarden
                    </h3>
                    <div className="space-y-6">
                      {fineBreakdown.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="bg-slate-700/50 rounded-lg p-6"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-lg font-bold text-white">{item.violation}</h4>
                                <Badge className={cn(
                                  "text-xs",
                                  item.severity === 'KRITISCH' ? 'bg-red-500/20 text-red-300' :
                                  item.severity === 'HOCH' ? 'bg-orange-500/20 text-orange-300' :
                                  'bg-yellow-500/20 text-yellow-300'
                                )}>
                                  {item.severity}
                                </Badge>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-2xl font-bold text-orange-400">{item.amount}</div>
                              <div className="text-sm text-slate-400">{item.percentage}% der Gesamtsumme</div>
                            </div>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Key Changes Tab */}
            <TabsContent value="changes" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {keyChanges.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                            area.color
                          )}>
                            <area.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{area.area}</h3>
                        </div>
                        <div className="space-y-3">
                          {area.changes.map((change, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{change}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Business Impact Tab */}
            <TabsContent value="business" className="space-y-8">
              <div className="space-y-8">
                {businessImpact.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                            <category.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                          <Badge className={cn(
                            "px-3 py-1",
                            category.urgency === 'HOCH' ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          )}>
                            {category.urgency}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {category.impacts.map((impact, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{impact}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Compliance Action Plan */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Compliance Action Plan</h3>
                <div className="space-y-8">
                  {complianceSteps.map((phase, index) => (
                    <Card key={index} className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                            phase.color
                          )}>
                            {phase.priority}
                          </div>
                          <h4 className="text-2xl font-bold text-white">{phase.phase}</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.steps.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Industry Lessons Tab */}
            <TabsContent value="lessons" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-orange-500/30 mb-8">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Branchenspezifische Learnings
                    </h3>
                    <p className="text-slate-300 text-center mb-8">
                      Das Meta Ireland Urteil hat weitreichende Auswirkungen auf verschiedene Industrien. 
                      Hier sind die wichtigsten Erkenntnisse für Ihr Geschäftsfeld:
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {industryLessons.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{industry.industry}</h3>
                        </div>
                        <div className="space-y-3">
                          {industry.lessons.map((lesson, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Lightbulb className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{lesson}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-orange-900/30 to-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Ihre nächsten Schritte
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Vermeiden Sie ähnliche Bußgelder durch proaktive Compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Compliance Audit",
                description: "Sofortige Bewertung Ihrer aktuellen Social Media Praktiken",
                icon: Search,
                link: "/services/compliance-audit",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "DSGVO Action Plan",
                description: "Schritt-für-Schritt Plan zur Risikominimierung",
                icon: Target,
                link: "/wissen/leitfaden/dsgvo-action-plan",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Legal Updates",
                description: "Bleiben Sie über neue Rechtsprechung auf dem Laufenden",
                icon: Bell,
                link: "/wissen/rechtsprechung",
                color: "from-orange-500 to-red-500"
              }
            ].map((cta, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
                      cta.color
                    )}>
                      <cta.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {cta.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{cta.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      cta.color
                    )}>
                      <Link to={cta.link} className="flex items-center justify-center gap-2">
                        <span>Jetzt starten</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetaIrlandCase;