import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  AlertTriangle,
  Shield,
  Users,
  Scale,
  Lock,
  Eye,
  Database,
  Globe,
  Activity,
  Search,
  Target,
  Brain,
  Settings,
  Phone,
  Bell,
  Zap,
  Timer,
  Circle,
  CheckCircle,
  FileText,
  Download,
  Upload,
  Edit3,
  Copy,
  Star,
  RefreshCw,
  UserCheck,
  ShieldCheck,
  BookOpen,
  Calendar,
  Building2,
  Briefcase,
  AlertOctagon,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Newspaper,
  Radio,
  Tv,
  Wifi,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Hash,
  AtSign,
  Send,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Heart,
  Repeat2,
  Bookmark,
  ExternalLink,
  Mic,
  Camera,
  Video,
  Image,
  Megaphone,
  Flag,
  AlertCircle,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MediaCrisisGuide: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState('all');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [sentimentScore, setSentimentScore] = useState(0);
  const [responsesSent, setResponsesSent] = useState(0);
  const [monitoringActive, setMonitoringActive] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const crisisPhases = [
    {
      id: 0,
      title: "Crisis Detection & Assessment",
      timeframe: "0-30 Minuten",
      priority: "KRITISCH",
      icon: AlertCircle,
      color: "from-red-500 to-orange-500",
      description: "Erkennung der medialen Krise und erste Bewertung der Situation",
      keyActions: [
        "Social Media Monitoring aktivieren",
        "Sentiment-Analyse durchführen",
        "Reichweite und Virality bewerten",
        "Key Influencer identifizieren",
        "Krisentyp klassifizieren"
      ],
      monitoringMetrics: {
        volume: "Anzahl der Erwähnungen pro Stunde",
        sentiment: "Positiv/Neutral/Negativ Verhältnis",
        reach: "Potentielle Reichweite in Millionen",
        velocity: "Verbreitungsgeschwindigkeit",
        influencers: "Top 10 Accounts nach Reichweite"
      },
      escalationTriggers: [
        {
          metric: "Erwähnungen/Stunde",
          threshold: ">1000",
          action: "Crisis Team aktivieren"
        },
        {
          metric: "Negative Sentiment",
          threshold: ">70%",
          action: "CEO einbeziehen"
        },
        {
          metric: "Mainstream Media",
          threshold: "Aufgegriffen",
          action: "PR-Agentur aktivieren"
        }
      ]
    },
    {
      id: 1,
      title: "Holding Statement & First Response",
      timeframe: "30 Min - 2 Stunden",
      priority: "KRITISCH",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      description: "Erste offizielle Reaktion und Kommunikation nach außen",
      responseStrategy: {
        timing: {
          social: "Innerhalb 1 Stunde",
          media: "Innerhalb 2 Stunden",
          stakeholder: "Innerhalb 3 Stunden"
        },
        tone: {
          empathetic: "Verständnis zeigen",
          factual: "Sachlich bleiben",
          accountable: "Verantwortung übernehmen",
          actionOriented: "Lösungen aufzeigen"
        },
        channels: [
          {
            platform: "Twitter/X",
            format: "Thread mit 3-5 Tweets",
            frequency: "Alle 2-3 Stunden"
          },
          {
            platform: "LinkedIn",
            format: "Offizielles Statement",
            frequency: "1x täglich Update"
          },
          {
            platform: "Website",
            format: "Dedicated Crisis Page",
            frequency: "Real-time Updates"
          },
          {
            platform: "Email",
            format: "Stakeholder Updates",
            frequency: "2x täglich"
          }
        ]
      },
      holdingStatements: [
        {
          scenario: "Datenschutzverletzung",
          template: "Wir sind uns der Berichte über [INCIDENT] bewusst und nehmen diese sehr ernst. Unser Team untersucht die Situation umfassend. Die Sicherheit unserer Kunden hat oberste Priorität. Updates folgen."
        },
        {
          scenario: "Systemausfall",
          template: "Wir arbeiten mit Hochdruck an der Lösung der aktuellen [SERVICE]-Probleme. Unsere Teams sind vollständig mobilisiert. Wir entschuldigen uns für die Unannehmlichkeiten. Status: [LINK]"
        },
        {
          scenario: "Compliance-Verstoß",
          template: "Wir haben Kenntnis von den Vorwürfen bezüglich [ISSUE]. Wir kooperieren vollständig mit den Behörden und führen eine interne Untersuchung durch. Weitere Informationen folgen."
        }
      ]
    },
    {
      id: 2,
      title: "Multi-Channel Response Management",
      timeframe: "2-12 Stunden",
      priority: "HOCH",
      icon: Globe,
      color: "from-yellow-500 to-orange-500",
      description: "Koordinierte Kommunikation über alle Kanäle hinweg",
      channelStrategies: {
        socialMedia: {
          platforms: ["Twitter/X", "LinkedIn", "Facebook", "Instagram"],
          tactics: [
            "Proaktive Antworten auf Mentions",
            "Community Management verstärken",
            "Influencer Outreach",
            "Hashtag-Monitoring",
            "Visual Content Creation"
          ],
          donts: [
            "Automatische Antworten",
            "Löschen von kritischen Kommentaren",
            "Aggressive Verteidigung",
            "Ignorieren von Fragen"
          ]
        },
        traditionalMedia: {
          channels: ["TV", "Radio", "Print", "Online News"],
          approach: [
            "Pressemitteilung vorbereiten",
            "Spokesperson briefen",
            "Interview-Anfragen priorisieren",
            "Fact Sheet erstellen",
            "B-Roll Material bereitstellen"
          ],
          keyMessages: [
            "Hauptbotschaft (30 Sekunden)",
            "Supporting Points (3-5)",
            "Proof Points",
            "Call to Action"
          ]
        },
        internal: {
          audiences: ["Mitarbeiter", "Management", "Investoren"],
          channels: [
            "All-Hands Meeting",
            "Intranet Updates",
            "Manager Briefings",
            "Q&A Sessions"
          ],
          frequency: "Minimum 2x täglich"
        }
      },
      responseMetrics: {
        responseTime: "Durchschnittliche Antwortzeit",
        coverage: "% der Anfragen beantwortet",
        sentiment: "Sentiment-Shift nach Response",
        engagement: "Positive Interaktionen",
        reach: "Erreichte Personen"
      }
    },
    {
      id: 3,
      title: "Stakeholder Management & Coordination",
      timeframe: "Ongoing",
      priority: "HOCH",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Gezielte Kommunikation mit Schlüssel-Stakeholdern",
      stakeholderMatrix: [
        {
          group: "Kunden",
          priority: "KRITISCH",
          channels: ["Email", "In-App", "Support"],
          messaging: "Persönlich, lösungsorientiert",
          frequency: "Stündlich bei aktiver Krise"
        },
        {
          group: "Mitarbeiter",
          priority: "KRITISCH",
          channels: ["Intranet", "Slack", "Email"],
          messaging: "Transparent, unterstützend",
          frequency: "2x täglich minimum"
        },
        {
          group: "Investoren",
          priority: "HOCH",
          channels: ["Direct Call", "Email", "IR Portal"],
          messaging: "Faktisch, zukunftsorientiert",
          frequency: "Täglich während Krise"
        },
        {
          group: "Partner",
          priority: "HOCH",
          channels: ["Email", "Portal", "Account Manager"],
          messaging: "Kooperativ, lösungsorientiert",
          frequency: "Täglich Updates"
        },
        {
          group: "Regulatoren",
          priority: "HOCH",
          channels: ["Offizielle Kanäle", "Direct Contact"],
          messaging: "Formal, compliant",
          frequency: "Nach Anforderung"
        }
      ],
      coordinationTools: {
        warRoom: {
          physical: "Dedizierter Krisenraum",
          virtual: "24/7 Video-Bridge",
          participants: "Core Crisis Team",
          cadence: "Alle 2 Stunden"
        },
        documentation: {
          decisionLog: "Alle Entscheidungen dokumentieren",
          approvalMatrix: "Clear Sign-off Prozess",
          versionControl: "Single Source of Truth",
          audit: "Compliance Trail"
        }
      }
    },
    {
      id: 4,
      title: "Media Monitoring & Sentiment Analysis",
      timeframe: "Kontinuierlich",
      priority: "MITTEL",
      icon: Activity,
      color: "from-indigo-500 to-purple-500",
      description: "Echtzeit-Überwachung und Analyse der Medienlandschaft",
      monitoringDashboard: {
        realTime: [
          "Social Media Mentions",
          "News Coverage",
          "Sentiment Trends",
          "Geographic Spread",
          "Influencer Activity"
        ],
        analytics: [
          {
            metric: "Share of Voice",
            calculation: "% der Diskussion über uns",
            target: "Reduzierung auf <30%"
          },
          {
            metric: "Message Penetration",
            calculation: "% mit unseren Key Messages",
            target: "Erhöhung auf >50%"
          },
          {
            metric: "Crisis Lifecycle",
            calculation: "Phase der Krise",
            target: "De-escalation erreichen"
          }
        ],
        alerts: [
          "Neue Influencer involviert",
          "Mainstream Media Pickup",
          "Sentiment Shift >10%",
          "Legal Threats erwähnt",
          "Boycott Calls"
        ]
      },
      sentimentCategories: {
        supportive: {
          indicators: ["Verständnis", "Unterstützung", "Positive Lösungen"],
          response: "Verstärken und danken"
        },
        neutral: {
          indicators: ["Faktische Fragen", "Information seeking"],
          response: "Informieren und aufklären"
        },
        critical: {
          indicators: ["Beschwerden", "Enttäuschung", "Forderungen"],
          response: "Empathie und Lösungen"
        },
        hostile: {
          indicators: ["Beleidigungen", "Drohungen", "Falschinformationen"],
          response: "Professionell, ggf. eskalieren"
        }
      }
    },
    {
      id: 5,
      title: "Recovery & Reputation Rebuild",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Strategische Maßnahmen zur Wiederherstellung der Reputation",
      recoveryStrategy: {
        immediate: [
          "Success Stories kommunizieren",
          "Positive Customer Testimonials",
          "Transparenz-Initiative starten",
          "Community Engagement verstärken",
          "Thought Leadership Content"
        ],
        shortTerm: [
          "Media Tour mit Leadership",
          "Podcast Appearances",
          "Industry Event Speaking",
          "Partnership Announcements",
          "Product Improvements"
        ],
        longTerm: [
          "Brand Campaign Launch",
          "CSR Initiatives",
          "Industry Awards",
          "Research Publications",
          "Documentary/Behind-the-scenes"
        ]
      },
      kpis: [
        {
          metric: "Brand Sentiment Score",
          baseline: "Pre-Crisis Level",
          target: "+10% über Baseline",
          timeline: "6 Monate"
        },
        {
          metric: "Media Coverage Tone",
          baseline: "% Positive Coverage",
          target: ">70% positiv",
          timeline: "3 Monate"
        },
        {
          metric: "Customer Trust Index",
          baseline: "Survey Score",
          target: "Baseline wiederherstellen",
          timeline: "12 Monate"
        }
      ],
      lessonsLearned: {
        process: [
          "Crisis Response Zeit analysieren",
          "Kommunikations-Effektivität bewerten",
          "Stakeholder Feedback sammeln",
          "Media Coverage Review",
          "Social Media Performance"
        ],
        improvements: [
          "Playbook Updates",
          "Training Programme",
          "Tool Enhancements",
          "Relationship Building",
          "Monitoring Upgrades"
        ]
      }
    }
  ];

  const socialChannels = [
    { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'text-blue-400' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'text-blue-500' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { id: 'news', name: 'News Media', icon: Newspaper, color: 'text-gray-400' }
  ];

  const sampleResponses = {
    twitter: [
      {
        type: "Acknowledgment",
        text: "We're aware of the concerns raised about [issue]. Your trust is paramount to us, and we're investigating thoroughly. Updates to follow. 🧵",
        tone: "Professional, Empathetic"
      },
      {
        type: "Update",
        text: "UPDATE: We've identified the root cause and are implementing fixes. Expected resolution: [time]. We appreciate your patience during this time.",
        tone: "Informative, Solution-focused"
      },
      {
        type: "Apology",
        text: "We sincerely apologize for [issue] and the impact on our community. We take full responsibility and are taking these steps: [link]",
        tone: "Accountable, Action-oriented"
      }
    ],
    media: [
      {
        type: "Press Statement",
        text: "[Company] is committed to addressing the recent [issue]. We have initiated a comprehensive review and are working with [stakeholders] to ensure [outcome]. Our priority remains [value proposition].",
        tone: "Formal, Corporate"
      }
    ]
  };

  useEffect(() => {
    if (monitoringActive) {
      const interval = setInterval(() => {
        setSentimentScore(prev => Math.min(100, prev + Math.random() * 5));
        setResponsesSent(prev => prev + Math.floor(Math.random() * 3));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [monitoringActive]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'KRITISCH': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      case 'HOCH': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'MITTEL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'WICHTIG': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const getSentimentColor = (score: number) => {
    if (score < 30) return 'text-red-500';
    if (score < 70) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Fixed Monitoring Bar */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <MessageSquare className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-slate-300">Media Crisis Response Center</span>
              <Badge className={cn(
                "text-xs",
                monitoringActive 
                  ? "bg-green-500/20 text-green-300 border-green-500/30 animate-pulse" 
                  : "bg-gray-500/20 text-gray-300 border-gray-500/30"
              )}>
                {monitoringActive ? 'Monitoring Active' : 'Monitoring Paused'}
              </Badge>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Sentiment:</span>
                <span className={cn("text-sm font-semibold", getSentimentColor(sentimentScore))}>
                  {sentimentScore.toFixed(0)}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Responses:</span>
                <span className="text-sm font-semibold text-slate-300">{responsesSent}</span>
              </div>
              <Button
                size="sm"
                onClick={() => setMonitoringActive(!monitoringActive)}
                variant={monitoringActive ? "destructive" : "default"}
              >
                {monitoringActive ? <X className="h-4 w-4" /> : <Wifi className="h-4 w-4" />}
                {monitoringActive ? 'Stop' : 'Start'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y }}
        className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <MessageSquare className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Crisis Communication</span>
              <Globe className="h-5 w-5 text-pink-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Media</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Crisis
              </span>
              <br />
              <span className="text-white">Management</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              <span className="font-semibold text-purple-300">Professionelle Krisenkommunikation</span> für 
              Social Media, Presse und alle Stakeholder-Gruppen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold">
                <Megaphone className="mr-2 h-5 w-5" />
                Crisis Response aktivieren
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Response Templates
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Real-time Dashboard */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Activity className="h-6 w-6 text-purple-400" />
              Real-time Crisis Dashboard
            </h3>
            
            <div className="grid lg:grid-cols-4 gap-6 mb-6">
              {[
                {
                  label: "Mentions/Hour",
                  value: "2,847",
                  trend: "+23%",
                  icon: Hash,
                  color: "text-red-400"
                },
                {
                  label: "Sentiment Score",
                  value: `${sentimentScore.toFixed(0)}%`,
                  trend: "+5%",
                  icon: Heart,
                  color: getSentimentColor(sentimentScore)
                },
                {
                  label: "Response Rate",
                  value: "87%",
                  trend: "+12%",
                  icon: MessageCircle,
                  color: "text-green-400"
                },
                {
                  label: "Media Pickups",
                  value: "34",
                  trend: "+8",
                  icon: Newspaper,
                  color: "text-yellow-400"
                }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className={cn("h-6 w-6", metric.color)} />
                    <Badge className={cn(
                      "text-xs",
                      metric.trend.startsWith('+') 
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                    )}>
                      {metric.trend}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Channel Activity */}
            <div className="grid lg:grid-cols-5 gap-4">
              {socialChannels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-all duration-300",
                    selectedChannel === channel.id
                      ? "bg-slate-700/60 border-purple-500/50"
                      : "bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50"
                  )}
                >
                  <channel.icon className={cn("h-6 w-6 mb-2", channel.color)} />
                  <p className="text-sm font-semibold text-white">{channel.name}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {Math.floor(Math.random() * 1000)} active
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crisis Response Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="0" value={currentPhase.toString()} onValueChange={(v) => setCurrentPhase(parseInt(v))}>
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8 bg-slate-800/60 p-1 rounded-xl">
              {crisisPhases.map((phase) => (
                <TabsTrigger
                  key={phase.id}
                  value={phase.id.toString()}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500"
                >
                  <phase.icon className="h-4 w-4 mr-2" />
                  <span className="hidden lg:inline">Phase {phase.id + 1}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {crisisPhases.map((phase) => (
              <TabsContent key={phase.id} value={phase.id.toString()} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Phase Header */}
                  <Card className="border-2 border-slate-700/50 bg-slate-800/80 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className={cn(
                            "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                            phase.color
                          )}
                        >
                          <phase.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                            <Badge className={getPriorityColor(phase.priority)}>
                              {phase.priority}
                            </Badge>
                          </div>
                          <p className="text-slate-300 mb-2">{phase.description}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {phase.timeframe}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Phase-specific content */}
                      {phase.id === 0 && (
                        <div className="space-y-6">
                          {/* Key Actions */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Zap className="h-5 w-5 text-yellow-400" />
                              Sofortmaßnahmen
                            </h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {phase.keyActions.map((action, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                                  <span className="text-sm text-slate-300">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Escalation Triggers */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <AlertOctagon className="h-5 w-5 text-red-400" />
                              Eskalations-Trigger
                            </h4>
                            <div className="space-y-3">
                              {phase.escalationTriggers.map((trigger, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                  <div>
                                    <p className="font-semibold text-white">{trigger.metric}</p>
                                    <p className="text-sm text-red-300">Schwellwert: {trigger.threshold}</p>
                                  </div>
                                  <div className="text-right">
                                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                                      {trigger.action}
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {phase.id === 1 && (
                        <div className="space-y-6">
                          {/* Response Templates */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <FileText className="h-5 w-5 text-blue-400" />
                              Response Templates
                            </h4>
                            <div className="space-y-4">
                              {phase.holdingStatements.map((statement, idx) => (
                                <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h5 className="font-semibold text-white">{statement.scenario}</h5>
                                    <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(statement.template)}>
                                      <Copy className="h-4 w-4" />
                                    </Button>
                                  </div>
                                  <p className="text-sm text-slate-300 italic">{statement.template}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Channel Strategy */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Globe className="h-5 w-5 text-purple-400" />
                              Kanal-Strategie
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {phase.responseStrategy.channels.map((channel, idx) => (
                                <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                                  <h5 className="font-semibold text-white mb-2">{channel.platform}</h5>
                                  <p className="text-sm text-slate-300 mb-1">Format: {channel.format}</p>
                                  <p className="text-xs text-slate-400">Frequenz: {channel.frequency}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {phase.id === 2 && phase.channelStrategies && (
                        <div className="space-y-6">
                          {/* Social Media Strategy */}
                          <div>
                            <Button
                              onClick={() => toggleSection('social-strategy')}
                              variant="ghost"
                              className="w-full justify-between p-0 h-auto hover:bg-transparent mb-4"
                            >
                              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                <Share2 className="h-5 w-5 text-pink-400" />
                                Social Media Strategie
                              </h4>
                              {expandedSections.includes('social-strategy') ? (
                                <ChevronDown className="h-5 w-5 text-slate-400" />
                              ) : (
                                <ChevronRight className="h-5 w-5 text-slate-400" />
                              )}
                            </Button>
                            
                            <AnimatePresence>
                              {expandedSections.includes('social-strategy') && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="space-y-4"
                                >
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                                      <h5 className="font-semibold text-green-300 mb-3">Tactics</h5>
                                      {phase.channelStrategies.socialMedia.tactics.map((tactic, idx) => (
                                        <div key={idx} className="flex items-start gap-2 mb-2">
                                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                          <span className="text-sm text-slate-300">{tactic}</span>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                                      <h5 className="font-semibold text-red-300 mb-3">Don'ts</h5>
                                      {phase.channelStrategies.socialMedia.donts.map((dont, idx) => (
                                        <div key={idx} className="flex items-start gap-2 mb-2">
                                          <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                                          <span className="text-sm text-slate-300">{dont}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Response Metrics */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <BarChart3 className="h-5 w-5 text-green-400" />
                              Response Metriken
                            </h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              {Object.entries(phase.responseMetrics).map(([key, value]) => (
                                <div key={key} className="bg-slate-700/50 rounded-xl p-4 text-center">
                                  <p className="text-sm font-semibold text-white capitalize mb-1">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </p>
                                  <p className="text-xs text-slate-400">{value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {phase.id === 3 && phase.stakeholderMatrix && (
                        <div className="space-y-6">
                          {/* Stakeholder Matrix */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Users className="h-5 w-5 text-blue-400" />
                              Stakeholder Kommunikation
                            </h4>
                            <div className="space-y-4">
                              {phase.stakeholderMatrix.map((stakeholder, idx) => (
                                <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h5 className="font-semibold text-white">{stakeholder.group}</h5>
                                    <Badge className={cn(
                                      "text-xs",
                                      stakeholder.priority === 'KRITISCH' 
                                        ? "bg-red-500/20 text-red-300 border-red-500/30"
                                        : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                    )}>
                                      {stakeholder.priority}
                                    </Badge>
                                  </div>
                                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                                    <div>
                                      <p className="text-slate-400 mb-1">Kanäle:</p>
                                      <p className="text-slate-300">{stakeholder.channels.join(', ')}</p>
                                    </div>
                                    <div>
                                      <p className="text-slate-400 mb-1">Messaging:</p>
                                      <p className="text-slate-300">{stakeholder.messaging}</p>
                                    </div>
                                    <div>
                                      <p className="text-slate-400 mb-1">Frequenz:</p>
                                      <p className="text-slate-300">{stakeholder.frequency}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Coordination Tools */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Settings className="h-5 w-5 text-purple-400" />
                              Koordinations-Tools
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-slate-700/50 rounded-xl p-4">
                                <h5 className="font-semibold text-white mb-3">War Room Setup</h5>
                                {Object.entries(phase.coordinationTools.warRoom).map(([key, value]) => (
                                  <div key={key} className="mb-2">
                                    <p className="text-sm text-slate-400 capitalize">{key}:</p>
                                    <p className="text-sm text-slate-300">{value}</p>
                                  </div>
                                ))}
                              </div>
                              <div className="bg-slate-700/50 rounded-xl p-4">
                                <h5 className="font-semibold text-white mb-3">Documentation</h5>
                                {Object.entries(phase.coordinationTools.documentation).map(([key, value]) => (
                                  <div key={key} className="mb-2">
                                    <p className="text-sm text-slate-400 capitalize">{key}:</p>
                                    <p className="text-sm text-slate-300">{value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {phase.id === 4 && phase.monitoringDashboard && (
                        <div className="space-y-6">
                          {/* Real-time Monitoring */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Activity className="h-5 w-5 text-green-400" />
                              Real-time Monitoring
                            </h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {phase.monitoringDashboard.realTime.map((metric, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                                  <Activity className="h-4 w-4 text-green-400" />
                                  <span className="text-sm text-slate-300">{metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Sentiment Categories */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Heart className="h-5 w-5 text-pink-400" />
                              Sentiment Response Guide
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {Object.entries(phase.sentimentCategories).map(([category, data]) => (
                                <div key={category} className={cn(
                                  "rounded-xl p-4 border",
                                  category === 'supportive' ? "bg-green-500/10 border-green-500/30" :
                                  category === 'neutral' ? "bg-blue-500/10 border-blue-500/30" :
                                  category === 'critical' ? "bg-yellow-500/10 border-yellow-500/30" :
                                  "bg-red-500/10 border-red-500/30"
                                )}>
                                  <h5 className="font-semibold text-white capitalize mb-2">{category}</h5>
                                  <p className="text-xs text-slate-400 mb-2">
                                    Indicators: {data.indicators.join(', ')}
                                  </p>
                                  <p className="text-sm text-slate-300">
                                    Response: {data.response}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {phase.id === 5 && phase.recoveryStrategy && (
                        <div className="space-y-6">
                          {/* Recovery Timeline */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-green-400" />
                              Recovery Strategie
                            </h4>
                            <div className="space-y-4">
                              {Object.entries(phase.recoveryStrategy).map(([timing, actions]) => (
                                <div key={timing} className="bg-slate-700/50 rounded-xl p-4">
                                  <h5 className="font-semibold text-white mb-3 capitalize">
                                    {timing === 'immediate' ? 'Sofort (0-7 Tage)' :
                                     timing === 'shortTerm' ? 'Kurzfristig (1-4 Wochen)' : 
                                     'Langfristig (1-6 Monate)'}
                                  </h5>
                                  <div className="grid md:grid-cols-2 gap-2">
                                    {actions.map((action, idx) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-300">{action}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* KPIs */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <Target className="h-5 w-5 text-purple-400" />
                              Recovery KPIs
                            </h4>
                            <div className="grid lg:grid-cols-3 gap-4">
                              {phase.kpis.map((kpi, idx) => (
                                <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                                  <h5 className="font-semibold text-white mb-2">{kpi.metric}</h5>
                                  <div className="space-y-1 text-sm">
                                    <p className="text-slate-400">Baseline: {kpi.baseline}</p>
                                    <p className="text-green-400">Target: {kpi.target}</p>
                                    <p className="text-slate-400">Timeline: {kpi.timeline}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Sample Responses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Response Templates
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Getestete Vorlagen für verschiedene Krisensituationen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Twitter Templates */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Twitter className="h-5 w-5 text-blue-400" />
                Twitter/X Templates
              </h3>
              <div className="space-y-4">
                {sampleResponses.twitter.map((template, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                        {template.type}
                      </Badge>
                      <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(template.text)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{template.text}</p>
                    <p className="text-xs text-slate-500">Tone: {template.tone}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Media Statement */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-gray-400" />
                Media Statements
              </h3>
              <div className="space-y-4">
                {sampleResponses.media.map((template, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30 text-xs">
                        {template.type}
                      </Badge>
                      <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(template.text)}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{template.text}</p>
                    <p className="text-xs text-slate-500">Tone: {template.tone}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Crisis Tools
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Werkzeuge für effektive Krisenkommunikation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                title: "Response Generator",
                description: "KI-gestützte Response-Erstellung",
                icon: Brain,
                action: "Generator starten",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Sentiment Analyzer",
                description: "Echtzeit Stimmungsanalyse",
                icon: Heart,
                action: "Analyse starten",
                color: "from-pink-500 to-red-500"
              },
              {
                title: "Channel Dashboard",
                description: "Multi-Channel Monitoring",
                icon: Activity,
                action: "Dashboard öffnen",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Crisis Playbook",
                description: "Schritt-für-Schritt Anleitungen",
                icon: BookOpen,
                action: "Playbook laden",
                color: "from-orange-500 to-yellow-500"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-2xl bg-gradient-to-r mb-4 shadow-lg",
                      tool.color
                    )}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-white">{tool.title}</h3>
                    <p className="text-sm text-slate-300 mb-4">{tool.description}</p>
                    
                    <Button className={cn(
                      "w-full bg-gradient-to-r text-white text-sm",
                      tool.color
                    )}>
                      {tool.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Link to="/wissen/krisenmanagement/compliance-audit-emergency">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Compliance Audit Emergency
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Link to="/wissen/krisenmanagement/vendor-data-breach">
                Vendor Data Breach Response
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaCrisisGuide;