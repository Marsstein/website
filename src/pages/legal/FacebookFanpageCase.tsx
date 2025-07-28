import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  ArrowLeft,
  Download,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Globe,
  Shield,
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
  PieChart,
  Code,
  Smartphone,
  Monitor,
  Tablet,
  X,
  Check,
  Edit3,
  Save,
  Plus,
  Trash2,
  Scale,
  Gavel,
  UserCheck,
  UserX,
  ShieldCheck,
  ShieldX,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const FacebookFanpageCase: React.FC = () => {
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

  const keyFindings = [
    {
      title: "Joint Controller Status",
      description: "Fanpage-Betreiber sind gemeinsam mit Facebook für die Datenverarbeitung verantwortlich",
      impact: "KRITISCH",
      details: "Auch ohne direkten Zugriff auf die Verarbeitungsvorgänge besteht Mitverantwortung",
      legalBasis: "Art. 26 DSGVO - Gemeinsame Verantwortlichkeit"
    },
    {
      title: "Behördliche Durchsetzung",
      description: "Datenschutzbehörden können direkt gegen Fanpage-Betreiber vorgehen",
      impact: "HOCH",
      details: "Keine Notwendigkeit, zuerst Facebook zu kontaktieren",
      legalBasis: "Art. 58 DSGVO - Befugnisse der Aufsichtsbehörden"
    },
    {
      title: "Page Insights Verantwortung",
      description: "Nutzung von Facebook Page Insights begründet Mitverantwortlichkeit",
      impact: "HOCH",
      details: "Statistiken werden durch Cookie-Verarbeitung generiert",
      legalBasis: "Art. 6 DSGVO - Rechtmäßigkeit der Verarbeitung"
    },
    {
      title: "Joint Controller Agreement",
      description: "Schriftliche Vereinbarung zwischen Fanpage-Betreiber und Facebook erforderlich",
      impact: "MITTEL",
      details: "Aufgabenverteilung und Verantwortlichkeiten müssen klar definiert sein",
      legalBasis: "Art. 26 Abs. 1 DSGVO"
    }
  ];

  const practicalImpacts = [
    {
      category: "Rechtliche Verantwortung",
      icon: Scale,
      color: "from-red-500 to-orange-500",
      risks: [
        "Direkte Haftung für DSGVO-Verstöße",
        "Bußgelder bis 4% des Jahresumsatzes",
        "Abmahnungen und Schadensersatzforderungen",
        "Behördliche Anordnungen zur Fanpage-Stilllegung"
      ],
      mitigations: [
        "Joint Controller Agreement abschließen",
        "Datenschutzerklärung für Fanpage erstellen",
        "Privacy Policy regelmäßig aktualisieren",
        "Rechtsberatung für Social Media einholen"
      ]
    },
    {
      category: "Operative Auswirkungen",
      icon: Settings,
      color: "from-blue-500 to-indigo-500",
      risks: [
        "Komplexere Datenschutz-Compliance",
        "Zusätzliche Dokumentationspflichten",
        "Erschwerte Nutzung von Page Insights",
        "Aufwand für Betroffenenanfragen"
      ],
      mitigations: [
        "Klare Social Media Guidelines",
        "Schulung der Community Manager",
        "Dokumentation aller Verarbeitungen",
        "Alternative Analytics-Tools evaluieren"
      ]
    },
    {
      category: "Marketing & Communication",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-500",
      risks: [
        "Eingeschränkte Nutzung von Targeting",
        "Reduzierte Reichweiten-Analyse",
        "Komplexere Consent-Mechanismen",
        "Möglicher Verzicht auf Fanpages"
      ],
      mitigations: [
        "Transparente Kommunikation mit Followern",
        "First-Party Data Strategien entwickeln",
        "Multi-Channel Ansatz implementieren",
        "Owned Media Kanäle stärken"
      ]
    },
    {
      category: "Compliance Management",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      risks: [
        "Unklare Verantwortungsverteilung",
        "Schwierige Betroffenenrechte-Erfüllung",
        "Komplexe Datenschutz-Folgenabschätzung",
        "Internationale Compliance-Herausforderungen"
      ],
      mitigations: [
        "Klare Prozesse für Betroffenenanfragen",
        "Regelmäßige Compliance-Audits",
        "Data Protection Impact Assessments",
        "Kontinuierliche Rechtsprechungsbeobachtung"
      ]
    }
  ];

  const complianceSteps = [
    {
      phase: "Sofortmaßnahmen (0-30 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      tasks: [
        "Bestandsaufnahme aller Facebook-Fanpages",
        "Aktueller Status des Joint Controller Agreements prüfen",
        "Bestehende Datenschutzerklärungen auf Fanpage-Bezug überprüfen",
        "Page Insights Nutzung dokumentieren",
        "Rechtliche Risikobewertung durchführen",
        "Notfallplan für Behördenanfragen erstellen"
      ]
    },
    {
      phase: "Kurzzeitmaßnahmen (1-3 Monate)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      tasks: [
        "Joint Controller Agreement mit Meta aktualisieren",
        "Fanpage-spezifische Datenschutzerklärung erstellen",
        "Prozesse für Betroffenenanfragen implementieren",
        "Community Management Guidelines anpassen",
        "Mitarbeiterschulungen für Social Media Compliance",
        "Alternative Analytics-Tools evaluieren"
      ]
    },
    {
      phase: "Mittelfristige Strategie (3-12 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      tasks: [
        "Kontinuierliches Monitoring der Rechtsprechung",
        "Regelmäßige Compliance-Audits einführen",
        "First-Party Data Strategien entwickeln",
        "Owned Media Kanäle aufbauen",
        "Social Media Governance Framework implementieren",
        "Notfallpläne für Plattform-Änderungen"
      ]
    }
  ];

  const jcaRequirements = [
    {
      section: "Zwecke und Mittel",
      icon: Target,
      requirements: [
        "Klar definierte Verarbeitungszwecke für Page Insights",
        "Bestimmung der Verarbeitungsmittel und -methoden",
        "Abgrenzung zwischen Facebook und Fanpage-Betreiber",
        "Dokumentation der technischen Verarbeitungsvorgänge"
      ]
    },
    {
      section: "Verantwortlichkeiten",
      icon: Users,
      requirements: [
        "Aufgabenverteilung zwischen den Verantwortlichen",
        "Federführung bei Betroffenenanfragen definieren",
        "Meldepflichten bei Data Breaches festlegen",
        "Zuständigkeiten für Compliance-Monitoring"
      ]
    },
    {
      section: "Betroffenenrechte",
      icon: UserCheck,
      requirements: [
        "Verfahren für Auskunftsersuchen etablieren",
        "Löschungsverfahren und -zuständigkeiten",
        "Widerspruchsrechte und deren Umsetzung",
        "Datenportabilität und Übertragungsverfahren"
      ]
    },
    {
      section: "Transparenz",
      icon: Eye,
      requirements: [
        "Information der Betroffenen über Joint Controllership",
        "Kontaktdaten beider Verantwortlicher bereitstellen",
        "Wesentliche Inhalte der Vereinbarung veröffentlichen",
        "Verständliche Datenschutzinformationen"
      ]
    }
  ];

  const industryImpacts = [
    {
      sector: "E-Commerce",
      icon: Building2,
      challenges: [
        "Produktwerbung über Fanpages rechtlich absichern",
        "Customer Service über Facebook Messenger",
        "Retargeting-Kampagnen compliance-konform gestalten",
        "Social Commerce Features rechtssicher nutzen"
      ],
      solutions: [
        "Separate Consent-Mechanismen für verschiedene Zwecke",
        "Klare Trennung zwischen organischen und bezahlten Inhalten",
        "Alternative Kundenservice-Kanäle aufbauen",
        "First-Party Data für Personalisierung nutzen"
      ]
    },
    {
      sector: "B2B Services",
      icon: UserCheck,
      challenges: [
        "Lead-Generierung über Facebook Forms",
        "Professional Networking und Business Development",
        "Veranstaltungsmarketing und Event-Promotion",
        "Thought Leadership Content und Reichweite"
      ],
      solutions: [
        "LinkedIn als Alternative für B2B Networking",
        "Eigene Landing Pages für Lead-Generierung",
        "Email-Marketing für direkte Kommunikation",
        "Corporate Blog für Content Marketing"
      ]
    },
    {
      sector: "Non-Profit",
      icon: Heart,
      challenges: [
        "Spendenwerbung und Fundraising-Kampagnen",
        "Freiwilligen-Rekrutierung über Social Media",
        "Awareness-Kampagnen für gesellschaftliche Themen",
        "Community Building und Engagement"
      ],
      solutions: [
        "Transparente Kommunikation über Datennutzung",
        "Opt-in Mechanismen für Spender-Kommunikation",
        "Multi-Channel Fundraising-Strategien",
        "Fokus auf organische Reichweite und Engagement"
      ]
    },
    {
      sector: "Healthcare",
      icon: ShieldCheck,
      challenges: [
        "Besonders sensible Daten und strenge Compliance",
        "Patientenaufklärung und Gesundheitsinformationen",
        "Medizinische Werbung und Arzneimittel-Marketing",
        "Vertrauen und Reputation in sensiblen Bereichen"
      ],
      solutions: [
        "Minimale Datenverarbeitung auf Social Media",
        "Eigene Plattformen für Patientenkommunikation",
        "Strikte Trennung von Marketing und medizinischer Beratung",
        "Regelmäßige Compliance-Audits und Schulungen"
      ]
    }
  ];

  const timeline = [
    {
      date: "5. Juni 2018",
      event: "EuGH Urteil Fanpage",
      description: "Grundsatzentscheidung zur gemeinsamen Verantwortlichkeit",
      type: "critical"
    },
    {
      date: "September 2018",
      event: "Facebook aktualisiert Page Terms",
      description: "Erste Anpassungen der Nutzungsbedingungen",
      type: "important"
    },
    {
      date: "Mai 2019",
      event: "Joint Controller Addendum",
      description: "Facebook veröffentlicht Standard-JCA für Fanpages",
      type: "update"
    },
    {
      date: "2020-2021",
      event: "Erste Bußgelder",
      description: "Behörden verhängen Strafen gegen Fanpage-Betreiber",
      type: "enforcement"
    },
    {
      date: "2022-2024",
      event: "Verschärfte Durchsetzung",
      description: "Verstärkte Kontrollen und höhere Bußgelder",
      type: "ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" />
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
            <Button asChild variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Joint Controller</span>
              <Scale className="h-5 w-5 text-purple-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Facebook</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Fanpage
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                EuGH C-210/16
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Das grundlegende Urteil zur 
              <span className="font-semibold text-blue-300"> gemeinsamen Verantwortlichkeit</span> von 
              Fanpage-Betreibern und Facebook
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Joint Controller
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                5. Juni 2018
              </Badge>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                <Gavel className="h-4 w-4 mr-2" />
                EuGH
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
              <TabsList className="grid w-full grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Überblick
                </TabsTrigger>
                <TabsTrigger value="findings" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Kernurteile
                </TabsTrigger>
                <TabsTrigger value="impact" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Auswirkungen
                </TabsTrigger>
                <TabsTrigger value="compliance" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Compliance
                </TabsTrigger>
                <TabsTrigger value="jca" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  JCA Details
                </TabsTrigger>
                <TabsTrigger value="industry" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Branchen
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
                <Card className="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6">Urteilsübersicht</h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Am 5. Juni 2018 entschied der Europäische Gerichtshof in der Rechtssache 
                            C-210/16 (Wirtschaftsakademie Schleswig-Holstein), dass Betreiber von 
                            Facebook-Fanpages gemeinsam mit Facebook Ireland für die Verarbeitung 
                            personenbezogener Daten verantwortlich sind.
                          </p>
                          <p>
                            Diese Grundsatzentscheidung revolutionierte die rechtliche Bewertung von 
                            Social Media Marketing und etablierte das Konzept der "gemeinsamen 
                            Verantwortlichkeit" auch bei begrenzten Einflussmöglichkeiten.
                          </p>
                          <p>
                            Das Urteil hat weitreichende Konsequenzen für alle Unternehmen und 
                            Organisationen, die Facebook-Fanpages betreiben oder andere Social Media 
                            Plattformen für Marketingzwecke nutzen.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Verfahren Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Aktenzeichen:</span>
                              <span className="text-white font-semibold">C-210/16</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Datum:</span>
                              <span className="text-white font-semibold">5. Juni 2018</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Gericht:</span>
                              <span className="text-white font-semibold">EuGH</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Kläger:</span>
                              <span className="text-white font-semibold">ULD Schleswig-Holstein</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Beklagte:</span>
                              <span className="text-white font-semibold">Wirtschaftsakademie</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Volltext herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Timeline */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Entwicklung Timeline</h3>
                    <div className="space-y-6">
                      {timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="flex gap-6 relative"
                        >
                          {index < timeline.length - 1 && (
                            <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent" />
                          )}
                          <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                            event.type === 'critical' ? 'bg-red-500' :
                            event.type === 'important' ? 'bg-orange-500' :
                            event.type === 'update' ? 'bg-blue-500' :
                            event.type === 'enforcement' ? 'bg-purple-500' :
                            'bg-green-500'
                          )}>
                            <Clock className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/50 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-slate-600 text-slate-200">{event.date}</Badge>
                                <h4 className="text-lg font-bold text-white">{event.event}</h4>
                              </div>
                              <p className="text-slate-300">{event.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Key Findings Tab */}
            <TabsContent value="findings" className="space-y-8">
              <div className="grid gap-6">
                {keyFindings.map((finding, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold",
                            finding.impact === 'KRITISCH' ? 'bg-red-500/20 text-red-300' :
                            finding.impact === 'HOCH' ? 'bg-orange-500/20 text-orange-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          )}>
                            {finding.impact}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{finding.title}</h3>
                            <p className="text-slate-300 mb-3">{finding.description}</p>
                            <p className="text-sm text-slate-400 mb-2">{finding.details}</p>
                            <Badge className="bg-blue-500/20 text-blue-300 text-xs">
                              {finding.legalBasis}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Practical Impact Tab */}
            <TabsContent value="impact" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {practicalImpacts.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                            impact.color
                          )}>
                            <impact.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{impact.category}</h3>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold text-red-300 mb-3">Risiken:</h4>
                            <div className="space-y-2">
                              {impact.risks.map((risk, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{risk}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-green-300 mb-3">Lösungsansätze:</h4>
                            <div className="space-y-2">
                              {impact.mitigations.map((mitigation, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{mitigation}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Compliance Tab */}
            <TabsContent value="compliance" className="space-y-8">
              <div className="space-y-8">
                {complianceSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                            step.color
                          )}>
                            {step.urgency}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{step.phase}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {step.tasks.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* JCA Details Tab */}
            <TabsContent value="jca" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Joint Controller Agreement Anforderungen
                    </h3>
                    <p className="text-slate-300 text-center">
                      Wesentliche Elemente für rechtssichere Joint Controller Agreements nach Art. 26 DSGVO
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {jcaRequirements.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                            <section.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{section.section}</h3>
                        </div>
                        <div className="space-y-3">
                          {section.requirements.map((requirement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Industry Impact Tab */}
            <TabsContent value="industry" className="space-y-8">
              <div className="space-y-8">
                {industryImpacts.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                            <industry.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{industry.sector}</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-orange-300 mb-4">Herausforderungen:</h4>
                            <div className="space-y-3">
                              {industry.challenges.map((challenge, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg">
                                  <AlertTriangle className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-green-300 mb-4">Lösungsansätze:</h4>
                            <div className="space-y-3">
                              {industry.solutions.map((solution, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{solution}</span>
                                </div>
                              ))}
                            </div>
                          </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ihre nächsten Schritte
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Sichern Sie Ihre Social Media Aktivitäten rechtlich ab
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fanpage Compliance Audit",
                description: "Umfassende Prüfung Ihrer Facebook-Aktivitäten",
                icon: Search,
                link: "/services/fanpage-audit",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "JCA Template",
                description: "Vorlage für Joint Controller Agreements",
                icon: FileText,
                link: "/resources/jca-template",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Social Media Guidelines",
                description: "Rechtssichere Richtlinien für Ihr Team",
                icon: Users,
                link: "/resources/social-media-guidelines",
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
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
                      cta.color
                    )}>
                      <cta.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {cta.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{cta.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      cta.color
                    )}>
                      <Link to={cta.link} className="flex items-center justify-center gap-2">
                        <span>Jetzt nutzen</span>
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

export default FacebookFanpageCase;