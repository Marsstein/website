import React, { useState, useRef, useEffect } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const SchremsIICase: React.FC = () => {
  // Add scroll offset for sticky header
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      h2[id], h3[id] { 
        scroll-margin-top: 96px; 
      }
      @media (max-width: 768px) {
        h2[id], h3[id] { 
          scroll-margin-top: 80px; 
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
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
      title: "Privacy Shield ungültig",
      description: "Das EU-US Privacy Shield Framework wurde für ungültig erklärt",
      impact: "KRITISCH",
      details: "Sofortiger Stopp aller Datenübertragungen in die USA unter Privacy Shield"
    },
    {
      title: "Standardvertragsklauseln weiterhin gültig",
      description: "SCCs können weiterhin verwendet werden, aber mit zusätzlichen Garantien",
      impact: "HOCH",
      details: "Case-by-case Bewertung des Schutzniveaus im Drittland erforderlich"
    },
    {
      title: "Zusätzliche Schutzmaßnahmen erforderlich",
      description: "Ergänzende Maßnahmen bei unzureichendem Schutzniveau",
      impact: "HOCH",
      details: "Technische und organisatorische Maßnahmen zur Kompensation"
    },
    {
      title: "Kontinuierliche Überwachung",
      description: "Laufende Bewertung der Rechtslage in Drittländern",
      impact: "MITTEL",
      details: "Regelmäßige Neubewertung der Übertragungsgrundlagen"
    }
  ];

  const practicalImpacts = [
    {
      category: "Cloud Services",
      icon: Globe,
      color: "from-blue-500 to-indigo-500",
      impacts: [
        "Bewertung US-amerikanischer Cloud-Anbieter",
        "Implementierung zusätzlicher Verschlüsselung",
        "Geografische Datenlokalisierung prüfen",
        "Alternative EU-Anbieter evaluieren"
      ]
    },
    {
      category: "Marketing Tools",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      impacts: [
        "Google Analytics konfigurieren oder ersetzen",
        "Social Media Plugins überprüfen",
        "Newsletter-Tools auf EU-Server migrieren",
        "Tracking-Pixel und Cookies anpassen"
      ]
    },
    {
      category: "Business Operations",
      icon: Building2,
      color: "from-emerald-500 to-teal-500",
      impacts: [
        "Internationale Geschäftstätigkeiten bewerten",
        "Personalverwaltung in Drittländern",
        "Kundensupport-Systeme prüfen",
        "Backup-Strategien überdenken"
      ]
    },
    {
      category: "Compliance Management",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      impacts: [
        "Transfer Impact Assessments durchführen",
        "Neue Verträge mit Drittland-Anbietern",
        "Datenschutzerklärungen aktualisieren",
        "Mitarbeiterschulungen erweitern"
      ]
    }
  ];

  const actionItems = [
    {
      phase: "Sofortmaßnahmen (0-30 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      tasks: [
        "Inventar aller US-Datenübertragungen erstellen",
        "Privacy Shield Vereinbarungen identifizieren",
        "Kritische Systeme auf EU-Server migrieren",
        "Rechtliche Bewertung durch Experten einholen"
      ]
    },
    {
      phase: "Mittelfristige Maßnahmen (1-3 Monate)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      tasks: [
        "Transfer Impact Assessments für alle Drittland-Übertragungen",
        "Neue Standardvertragsklauseln implementieren",
        "Zusätzliche technische Schutzmaßnahmen einführen",
        "Alternative Anbieter evaluieren und migrieren"
      ]
    },
    {
      phase: "Langfristige Strategie (3-12 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      tasks: [
        "Kontinuierliches Monitoring der Rechtslage",
        "Regelmäßige Bewertung der Schutzmaßnahmen",
        "Schulungsprogramme für Mitarbeiter",
        "Governance-Strukturen für internationale Transfers"
      ]
    }
  ];

  const timeline = [
    {
      date: "16. Juli 2020",
      event: "EuGH Urteil Schrems II",
      description: "Privacy Shield wird für ungültig erklärt",
      type: "critical"
    },
    {
      date: "August 2020",
      event: "Erste Behörden-Stellungnahmen",
      description: "Nationale Datenschutzbehörden reagieren",
      type: "important"
    },
    {
      date: "November 2020",
      event: "EDSA Empfehlungen 01/2020",
      description: "Leitlinien für ergänzende Maßnahmen",
      type: "guidance"
    },
    {
      date: "Juni 2021",
      event: "Neue Standardvertragsklauseln",
      description: "EU-Kommission verabschiedet neue SCCs",
      type: "update"
    },
    {
      date: "2021-2024",
      event: "Kontinuierliche Entwicklung",
      description: "Weitere Urteile und Leitlinien",
      type: "ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead
        title="Schrems II – Internationale Datentransfers nach EuGH"
        description="Schrems II Urteil: Privacy Shield ungültig, SCC-Anforderungen, US-Datentransfers, TIA-Bewertung. ✓ Legal Analysis ✓ Compliance Impact ✓ Practical Guidance."
        canonicalUrl="https://marsstein.ai/wissen/rechtsprechung/schrems-ii"
        ogImage="https://marsstein.ai/images/schrems-ii-urteil.jpg"
      />
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" />
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
            <Button asChild variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <Scale className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Landmark Case</span>
              <Star className="h-5 w-5 text-pink-400 animate-pulse" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                <span className="text-white">Schrems</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  II
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                  EuGH C-311/18
                </span>
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Das wegweisende Urteil zu internationalen Datentransfers und die 
              <span className="font-semibold text-purple-300"> Ungültigkeit des Privacy Shield</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Kritisches Urteil
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                16. Juli 2020
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                EU-weit bindend
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Table of Contents */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <nav aria-label="Inhaltsverzeichnis" className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 lg:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#overview" className="text-purple-300 hover:text-purple-400 transition-colors">1. Überblick</a></li>
              <li><a href="#findings" className="text-purple-300 hover:text-purple-400 transition-colors">2. Kernurteile</a></li>
              <li><a href="#impact" className="text-purple-300 hover:text-purple-400 transition-colors">3. Praktische Auswirkungen</a></li>
              <li><a href="#actions" className="text-purple-300 hover:text-purple-400 transition-colors">4. Maßnahmenplan</a></li>
              <li><a href="#timeline" className="text-purple-300 hover:text-purple-400 transition-colors">5. Timeline</a></li>
              <li><a href="#resources" className="text-purple-300 hover:text-purple-400 transition-colors">6. Verwandte Ressourcen</a></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="content">
        <div className="container mx-auto max-w-7xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <TabsList className="grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Überblick
                </TabsTrigger>
                <TabsTrigger value="findings" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Kernurteile
                </TabsTrigger>
                <TabsTrigger value="impact" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Auswirkungen
                </TabsTrigger>
                <TabsTrigger value="actions" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Maßnahmen
                </TabsTrigger>
                <TabsTrigger value="timeline" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  Timeline
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8" id="overview">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-purple-500/30">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-6">Urteilsübersicht</h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Am 16. Juli 2020 fällte der Europäische Gerichtshof (EuGH) ein wegweisendes Urteil 
                            in der Rechtssache C-311/18 (Data Protection Commissioner gegen Facebook Ireland Limited 
                            und Maximilian Schrems), bekannt als "Schrems II".
                          </p>
                          <p>
                            Das Gericht erklärte das EU-US Privacy Shield Framework für ungültig und bestätigte 
                            gleichzeitig die Gültigkeit der Standardvertragsklauseln (SCCs) unter bestimmten 
                            Bedingungen.
                          </p>
                          <p>
                            Diese Entscheidung hatte massive Auswirkungen auf internationale Datentransfers und 
                            zwang Unternehmen weltweit zur Überprüfung ihrer <Link to="/services/compliance-management" className="text-purple-300 hover:text-purple-400 underline">Compliance-Strategien</Link>.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-white mb-4">Fakten</h3>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Aktenzeichen:</span>
                              <span className="text-white font-semibold">C-311/18</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Datum:</span>
                              <span className="text-white font-semibold">16.07.2020</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Gericht:</span>
                              <span className="text-white font-semibold">EuGH</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Kläger:</span>
                              <span className="text-white font-semibold">M. Schrems</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Beklagte:</span>
                              <span className="text-white font-semibold">Facebook Ireland</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Volltext herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Key Findings Tab */}
            <TabsContent value="findings" className="space-y-8" id="findings">
              <div className="grid gap-6">
                {keyFindings.map((finding, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-colors">
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
                            <p className="text-sm text-slate-400">{finding.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Practical Impact Tab */}
            <TabsContent value="impact" className="space-y-8" id="impact">
              <div className="grid md:grid-cols-2 gap-8">
                {practicalImpacts.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                            category.color
                          )}>
                            <category.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{category.category}</h3>
                        </div>
                        <div className="space-y-3">
                          {category.impacts.map((impact, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{impact}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Action Items Tab */}
            <TabsContent value="actions" className="space-y-8" id="actions">
              <div className="space-y-8">
                {actionItems.map((phase, index) => (
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
                            phase.color
                          )}>
                            {phase.urgency}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.tasks.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
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

            {/* Timeline Tab */}
            <TabsContent value="timeline" className="space-y-8" id="timeline">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-purple-500/30">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Schrems II Timeline</h2>
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
                            <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent" />
                          )}
                          <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                            event.type === 'critical' ? 'bg-red-500' :
                            event.type === 'important' ? 'bg-orange-500' :
                            event.type === 'guidance' ? 'bg-blue-500' :
                            event.type === 'update' ? 'bg-green-500' :
                            'bg-purple-500'
                          )}>
                            <Clock className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/50 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-slate-600 text-slate-200">{event.date}</Badge>
                                <h3 className="text-lg font-bold text-white">{event.event}</h3>
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
          </Tabs>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" id="resources">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Verwandte Ressourcen
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Weitere wichtige Urteile und praktische Leitfäden
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transfer Impact Assessment",
                description: "Praktischer Leitfaden zur Bewertung von Drittlandtransfers",
                icon: Target,
                link: "/wissen/leitfaden/transfer-impact-assessment",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Neue SCCs 2021",
                description: "Implementierung der neuen Standardvertragsklauseln",
                icon: FileText,
                link: "/wissen/rechtsprechung/neue-sccs-2021",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Meta Ireland 2024",
                description: "Aktuelles Urteil zu Datentransfers in sozialen Medien",
                icon: Scale,
                link: "/wissen/rechtsprechung/meta-irland-2024",
                color: "from-orange-500 to-red-500"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
                      resource.color
                    )}>
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{resource.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      resource.color
                    )}>
                      <Link to={resource.link} className="flex items-center justify-center gap-2">
                        <span>Mehr erfahren</span>
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

export default SchremsIICase;