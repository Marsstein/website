import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Trophy,
  AlertTriangle,
  Target,
  Clock,
  Users,
  Building2,
  Eye,
  Lock,
  Globe,
  Sparkles,
  PlayCircle,
  Download,
  Star,
  Rocket,
  Settings,
  BarChart3,
  Zap,
  Award,
  TrendingUp,
  ChevronRight,
  Phone,
  Calendar,
  Mail,
  Brain,
  Database,
  FileText,
  UserCheck,
  ShieldCheck,
  BadgeCheck,
  Gavel,
  AlertOctagon,
  TrendingDown,
  XCircle,
  DollarSign,
  Medal,
  Gamepad2,
  Crown,
  Gauge,
  Gem,
  PieChart,
  BarChart4,
  LineChart,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowUp,
  ArrowDown,
  Scale,
  Euro,
  Percent,
  FileCheck,
  Activity,
  RefreshCw,
  Share2,
  MessageSquare,
  Layers,
  Code,
  Terminal,
  Package,
  Wifi,
  Server,
  HardDrive,
  Cpu,
  Monitor,
  MousePointer,
  Edit3,
  Copy,
  Save,
  Trash2,
  FolderOpen,
  File,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid,
  List,
  MoreHorizontal,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle as Alert,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  ExternalLink,
  Flame,
  Lightbulb,
  Timer,
  Fingerprint,
  ShieldAlert,
  UserX,
  GitBranch,
  TrendingUpIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DsgvoComplianceScorecard: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DSGVO Compliance Scorecard",
    "description": "Interaktive DSGVO-Compliance Bewertung mit Gap-Analyse und Handlungsempfehlungen",
    "applicationCategory": "Assessment Tool",
    "url": "https://marsstein.ai/tools/dsgvo-compliance-scorecard"
  };

  const [isAssessing, setIsAssessing] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Assessment Questions (sample for demo)
  const assessmentQuestions = [
    {
      id: 1,
      category: 'Rechtsgrundlagen',
      question: 'Haben Sie eine rechtssichere Rechtsgrundlage für alle Datenverarbeitungen?',
      options: [
        { text: 'Ja, vollständig dokumentiert', points: 10 },
        { text: 'Teilweise dokumentiert', points: 6 },
        { text: 'Nein, nicht dokumentiert', points: 0 }
      ],
      explanation: 'Art. 6 DSGVO fordert eine Rechtsgrundlage für jede Verarbeitung personenbezogener Daten.'
    },
    {
      id: 2,
      category: 'Betroffenenrechte',
      question: 'Können Sie Betroffenenrechte (Auskunft, Löschung, etc.) zeitgerecht erfüllen?',
      options: [
        { text: 'Ja, automatisierte Prozesse vorhanden', points: 10 },
        { text: 'Manuell möglich, aber zeitaufwändig', points: 6 },
        { text: 'Schwierig umsetzbar', points: 0 }
      ],
      explanation: 'Art. 15-22 DSGVO gewähren Betroffenen umfassende Rechte.'
    },
    {
      id: 3,
      category: 'Technische Maßnahmen',
      question: 'Sind Ihre IT-Systeme durch angemessene technische Maßnahmen geschützt?',
      options: [
        { text: 'Umfassende Sicherheitsmaßnahmen implementiert', points: 10 },
        { text: 'Grundlegende Sicherheit vorhanden', points: 6 },
        { text: 'Sicherheitsmaßnahmen unzureichend', points: 0 }
      ],
      explanation: 'Art. 32 DSGVO fordert angemessene technische und organisatorische Maßnahmen.'
    }
  ];

  // Compliance Levels with achievements
  const complianceLevels = [
    {
      level: 1,
      name: 'DSGVO Novice',
      range: '0-25%',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-900/20 to-red-800/30 dark:from-red-950/40 dark:to-red-900/60',
      badge: '🚨',
      description: 'Grundlegende DSGVO-Kenntnisse erforderlich',
      risks: ['Hohe Bußgeldrisiken', 'Rechtsunsicherheit', 'Reputationsschäden'],
      actions: ['Datenschutzbeauftragten bestellen', 'Verarbeitungsverzeichnis erstellen', 'Rechtliche Beratung einholen']
    },
    {
      level: 2,
      name: 'Compliance Apprentice',
      range: '26-50%',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-800/30 dark:from-orange-950/40 dark:to-red-900/60',
      badge: '⚠️',
      description: 'Erste Schritte unternommen, aber noch Lücken',
      risks: ['Mittlere Bußgeldrisiken', 'Einzelne Schwachstellen', 'Verbesserungsbedarf'],
      actions: ['TOM implementieren', 'Mitarbeiterschulungen', 'Prozesse dokumentieren']
    },
    {
      level: 3,
      name: 'Privacy Professional',
      range: '51-75%',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-900/20 to-orange-800/30 dark:from-yellow-950/40 dark:to-orange-900/60',
      badge: '🎯',
      description: 'Solide Basis mit Optimierungspotential',
      risks: ['Geringe Risiken', 'Einzelne Nachbesserungen', 'Monitoring erforderlich'],
      actions: ['Regelmäßige Audits', 'Kontinuierliche Schulungen', 'Prozessoptimierung']
    },
    {
      level: 4,
      name: 'DSGVO Expert',
      range: '76-90%',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-indigo-800/30 dark:from-blue-950/40 dark:to-indigo-900/60',
      badge: '🏆',
      description: 'Überdurchschnittliche Compliance',
      risks: ['Minimale Risiken', 'Vereinzelte Anpassungen', 'Vorbildcharakter'],
      actions: ['Best Practice Sharing', 'Innovation fördern', 'Benchmarking']
    },
    {
      level: 5,
      name: 'Privacy Champion',
      range: '91-100%',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/30 dark:from-green-950/40 dark:to-emerald-900/60',
      badge: '👑',
      description: 'Exzellente Datenschutz-Governance',
      risks: ['Vernachlässigbare Risiken', 'Branchenführer', 'Compliance Excellence'],
      actions: ['Thought Leadership', 'Mentoring anderer', 'Innovation vorantreiben']
    }
  ];

  // Interactive Assessment Demo
  const [demoScore, setDemoScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startAssessment = () => {
    setIsAssessing(true);
    setCurrentQuestion(0);
    setDemoScore(0);
    setShowResults(false);
  };

  const answerQuestion = (points: number) => {
    const newScore = demoScore + points;
    setDemoScore(newScore);
    
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getComplianceLevel = (score: number) => {
    const percentage = (score / 30) * 100; // Max 30 points from demo questions
    if (percentage >= 91) return complianceLevels[4];
    if (percentage >= 76) return complianceLevels[3];
    if (percentage >= 51) return complianceLevels[2];
    if (percentage >= 26) return complianceLevels[1];
    return complianceLevels[0];
  };

  // Industry Benchmarks (realistic ranges)
  const industryBenchmarks = [
    { industry: 'Finanzdienstleistungen', averageScore: '78-85%', icon: Building2, trend: 'up', color: 'from-green-500 to-emerald-500' },
    { industry: 'Gesundheitswesen', averageScore: '71-79%', icon: Shield, trend: 'up', color: 'from-blue-500 to-cyan-500' },
    { industry: 'E-Commerce', averageScore: '65-73%', icon: Globe, trend: 'stable', color: 'from-purple-500 to-pink-500' },
    { industry: 'SaaS & Tech', averageScore: '69-76%', icon: Code, trend: 'up', color: 'from-indigo-500 to-purple-500' },
    { industry: 'Manufacturing', averageScore: '58-67%', icon: Settings, trend: 'down', color: 'from-orange-500 to-red-500' },
    { industry: 'Bildung', averageScore: '62-71%', icon: GraduationCap, trend: 'stable', color: 'from-teal-500 to-green-500' }
  ];

  return (
    <>
      <SEOHead
        title="DSGVO Scorecard – Compliance-Status bewerten"
        description="DSGVO Compliance Scorecard: Bewerten Sie Ihren Datenschutz-Status interaktiv. Gap-Analyse, Benchmarking, Handlungsempfehlungen. ✓ 15 Min Assessment. Jetzt bewerten!"
        canonical="/tools/dsgvo-compliance-scorecard"
        keywords="DSGVO Scorecard, Compliance Assessment, DSGVO Bewertung, Gap-Analyse, Datenschutz Status"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
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
              <Trophy className="h-5 w-5 text-purple-400 animate-spin-slow" />
              <span className="text-sm font-semibold text-purple-300">Gamified DSGVO Assessment</span>
              <Gamepad2 className="h-5 w-5 text-pink-400 animate-bounce" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Ihr</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                DSGVO Score
              </span>
              <br />
              <span className="text-white">in</span>{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                15 Minuten
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Interaktives Assessment mit <span className="font-semibold text-purple-300">Gamification-Elementen</span>. 
              Sammeln Sie Badges, vergleichen Sie sich mit der Branche und erhalten Sie konkrete Handlungsempfehlungen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={startAssessment}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Timer className="mr-2 h-5 w-5" />
                  Assessment starten (15 Min)
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Demo ansehen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '15 Min', label: 'Assessment-Dauer', sublabel: 'Schnell & effizient', icon: Clock, color: 'from-blue-500 to-cyan-500' },
              { value: '36', label: 'Compliance-Fragen', sublabel: 'Wissenschaftlich fundiert', icon: FileCheck, color: 'from-purple-500 to-pink-500' },
              { value: '5', label: 'Compliance-Level', sublabel: 'Mit Badges & Rewards', icon: Trophy, color: 'from-emerald-500 to-teal-500' },
              { value: '6', label: 'Branchen-Vergleich', sublabel: 'Industry Benchmarks', icon: BarChart3, color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Assessment Demo */}
      {isAssessing && (
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-purple-500/30 bg-slate-800/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-4 text-white">
                  Live Assessment Demo
                </CardTitle>
                <p className="text-slate-300">
                  Erleben Sie unser interaktives DSGVO-Assessment
                </p>
                <Progress value={(currentQuestion / assessmentQuestions.length) * 100} className="mt-4" />
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                        Frage {currentQuestion + 1} von {assessmentQuestions.length}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {assessmentQuestions[currentQuestion]?.category}
                      </h3>
                      <p className="text-lg text-slate-300">
                        {assessmentQuestions[currentQuestion]?.question}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {assessmentQuestions[currentQuestion]?.options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => answerQuestion(option.points)}
                          className="w-full p-4 text-left border-2 border-slate-600 rounded-xl hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200 text-white"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option.text}</span>
                            <Badge variant="secondary" className="bg-slate-700 text-slate-200">{option.points} Punkte</Badge>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-8">
                      <div className="text-6xl mb-4">
                        {getComplianceLevel(demoScore).badge}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {getComplianceLevel(demoScore).name}
                      </h3>
                      <p className="text-lg text-slate-300 mb-4">
                        Score: {demoScore}/30 Punkte ({Math.round((demoScore / 30) * 100)}%)
                      </p>
                      <Badge className={`bg-gradient-to-r ${getComplianceLevel(demoScore).color} text-white`}>
                        Level {getComplianceLevel(demoScore).level}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4 text-left max-w-md mx-auto">
                      <div>
                        <h4 className="font-semibold mb-2 text-white">Empfohlene Maßnahmen:</h4>
                        <ul className="space-y-1">
                          {getComplianceLevel(demoScore).actions.map((action, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => setIsAssessing(false)}
                      className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                    >
                      Vollständiges Assessment starten
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.section>
      )}

      {/* Key Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ihre Vorteile</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                auf einen Blick
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Warum unser Compliance Scorecard einzigartig ist
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Präzise Bewertung",
                description: "Detaillierte Analyse aller DSGVO-Anforderungen mit klaren Handlungsempfehlungen",
                subtitle: "Wissenschaftlich fundiert",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-slate-800/60"
              },
              {
                icon: Gamepad2,
                title: "Gamified Experience",
                description: "Spielerische Compliance-Bewertung mit Badges, Level und Fortschritts-Tracking",
                subtitle: "Motivierend & interaktiv",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-slate-800/60"
              },
              {
                icon: BarChart3,
                title: "Benchmarking",
                description: "Vergleichen Sie Ihre Compliance mit Branchenstandards und Best Practices",
                subtitle: "Marktvergleich inklusive",
                color: "from-emerald-500 to-teal-500",
                bgColor: "bg-slate-800/60"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredFeature(feature.title)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${feature.color}`,
                  hoveredFeature === feature.title ? "opacity-30" : "opacity-0"
                )} />
                
                <Card className={cn(
                  "relative h-full p-8 rounded-3xl backdrop-blur-sm border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl",
                  feature.bgColor
                )}>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                      feature.color
                    )}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <Badge className={cn(
                    "bg-gradient-to-r text-white border-0",
                    feature.color
                  )}>
                    {feature.subtitle}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
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
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                Branchenvergleich
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Sehen Sie, wie Ihre Branche bei der DSGVO-Compliance abschneidet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryBenchmarks.map((benchmark, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full p-6 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r",
                      benchmark.color
                    )}>
                      <benchmark.icon className="h-6 w-6 text-white" />
                    </div>
                    {benchmark.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-400" />}
                    {benchmark.trend === 'down' && <TrendingDown className="h-5 w-5 text-red-400" />}
                    {benchmark.trend === 'stable' && <ArrowRight className="h-5 w-5 text-slate-400" />}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-white">{benchmark.industry}</h3>
                  <div className="text-2xl font-bold text-white mb-1">{benchmark.averageScore}</div>
                  <div className="text-sm text-slate-400">Durchschnittlicher Compliance-Score</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Levels */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Compliance Level &</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                Badges
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Erreichen Sie das nächste Level und sammeln Sie Achievements
            </p>
          </motion.div>

          <div className="space-y-6">
            {complianceLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className={cn(
                  "p-8 border-2 transition-all duration-500 group-hover:shadow-2xl backdrop-blur-sm border-slate-700/50",
                  level.bgColor
                )}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{level.badge}</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-white">
                          Level {level.level}
                        </h3>
                        <p className="text-lg font-semibold text-slate-200">{level.name}</p>
                        <Badge className="mt-2 bg-slate-700 text-slate-200">{level.range}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <p className="text-slate-300 mb-4">{level.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-red-400 mb-2">Hauptrisiken:</h4>
                          <ul className="space-y-1">
                            {level.risks.map((risk, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-300">{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-green-400 mb-2">Empfohlene Maßnahmen:</h4>
                          <ul className="space-y-1">
                            {level.actions.map((action, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-300">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <Trophy className="h-5 w-5 text-purple-400" />
              <span className="font-semibold text-purple-300">Bereit für Ihr DSGVO-Assessment?</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Bereit für Ihr</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                DSGVO-Assessment?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ermitteln Sie Ihren Compliance-Score, sammeln Sie Badges und erhalten Sie 
              <span className="font-semibold text-purple-300"> konkrete Handlungsempfehlungen</span> für bessere DSGVO-Compliance.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={startAssessment}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Timer className="mr-3 h-6 w-6" />
                  Assessment starten (15 Min)
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm">
                  <Calendar className="mr-3 h-6 w-6" />
                  Demo vereinbaren
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex justify-center items-center gap-8 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-purple-400" />
                <span>Gamified Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-pink-400" />
                <span>Branchenvergleich</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-indigo-400" />
                <span>Wissenschaftlich fundiert</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default DsgvoComplianceScorecard;