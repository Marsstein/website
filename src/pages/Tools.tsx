import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Cookie,
  MessageSquare,
  Zap,
  Users,
  Building2,
  Eye,
  Lock,
  Globe,
  Sparkles,
  PlayCircle,
  Download,
  Star,
  Target,
  Rocket,
  Settings,
  BarChart3,
  Clock,
  Award,
  TrendingUp,
  ChevronRight,
  Phone,
  Calendar,
  Mail,
  MousePointer,
  Brain,
  FileCheck,
  Monitor,
  FileText,
  Trophy,
  Layers,
  Code2,
  Database,
  Cpu,
  WifiIcon as Wifi,
  Package,
  GitBranch,
  Terminal,
  Server,
  HardDrive,
  Activity,
  BarChart2,
  PieChart,
  LineChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Timer,
  UserX,
  ShieldAlert,
  AlertOctagon,
  Gauge,
  Gamepad2,
  Crown,
  Gem,
  Medal,
  BadgeCheck,
  RefreshCw,
  Search,
  Filter,
  SortAsc,
  Grid3X3,
  List,
  MoreHorizontal,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Tools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Compliance-Tools Suite",
    "description": "Umfassende Suite von Compliance-Tools: DSGVO-Tools, Cookie-Management, Whistleblower-Systeme",
    "numberOfItems": 12,
    "url": "https://marsstein.ai/tools"
  };

  const categories = [
    { id: 'all', name: 'Alle Tools', icon: Grid3X3, count: 5 },
    { id: 'cookie', name: 'Cookie-Tools', icon: Cookie, count: 1 },
    { id: 'compliance', name: 'Compliance-Tools', icon: Shield, count: 2 },
    { id: 'innovation', name: 'KI-Tools', icon: Zap, count: 1 },
    { id: 'communication', name: 'Kommunikations-Tools', icon: MessageSquare, count: 1 }
  ];

  const complexityLevels = [
    { id: 'all', name: 'Alle Level', color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100' },
    { id: 'basic', name: 'Einfach', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100' },
    { id: 'intermediate', name: 'Mittel', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100' },
    { id: 'expert', name: 'Experte', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100' }
  ];

  const tools = [
    {
      id: 'cookie-management-tool',
      icon: Cookie,
      title: 'Cookie Management Tool',
      subtitle: 'Schluss mit Cookie-Chaos',
      description: 'Ihre Website sammelt Cookies, aber Ihr Banner ist rechtlich unsicher? Unser Tool löst das DSGVO-Problem in 5 Minuten - ohne teure Anwälte.',
      challenges: ['Rechtsunsichere Cookie-Banner kosten Geld', 'Nutzer klicken Banner weg = weniger Conversions', 'Anwalt für Cookie-Policy kostet 3.000€+'],
      benefits: ['Rechtssicheres Banner in 5 Min', 'Mehr Consent = mehr Daten = mehr Umsatz', 'Keine Anwaltskosten mehr'],
      frameworkFocus: 'DSGVO + ePrivacy',
      category: 'cookie',
      status: 'live',
      popularity: 95,
      complexity: 'intermediate',
      color: 'from-orange-500 to-red-600',
      link: '/tools/cookie-management-tool',
      stats: 'Sofort einsetzbar',
      setupTime: '5 Min',
      roi: 'Anwaltskosten sparen'
    },
    {
      id: 'whistleblower-system-tool',
      icon: MessageSquare,
      title: 'Hinweisgebersystem Tool',
      subtitle: 'EU-Pflicht? Kein Problem!',
      description: 'Ab 50 Mitarbeitern brauchen Sie ein Hinweisgebersystem. Bußgelder bis 100.000€ drohen. Unser Tool macht Sie in 24h compliant.',
      challenges: ['Bußgeld bis 100.000€ bei fehlender Umsetzung', 'Komplizierte EU-Vorgaben verstehen', 'Whistleblower-Anonymität sicherstellen'],
      benefits: ['Bußgeld-Risiko eliminiert', 'EU-Vorgaben automatisch erfüllt', 'Totale Anonymität garantiert'],
      frameworkFocus: 'EU-Whistleblower-Richtlinie',
      category: 'communication',
      status: 'live',
      popularity: 88,
      complexity: 'expert',
      color: 'from-emerald-500 to-teal-600',
      link: '/tools/whistleblower-system-tool',
      stats: 'Bußgeld-sicher',
      setupTime: '24h',
      roi: 'Bußgeld vermeiden'
    },
    {
      id: 'dsgvo-email-template-generator',
      icon: FileText,
      title: 'DSGVO Email Template Generator',
      subtitle: 'Nie wieder rechtsunsichere Emails',
      description: 'Jede Email an Kunden kann eine DSGVO-Falle sein. Falsche Datenschutz-Texte = Abmahnungen. Unser Generator produziert sichere Templates in 2 Minuten.',
      challenges: ['Abmahnungen wegen falscher Email-Texte', 'Jede Email-Kampagne rechtlich prüfen lassen', 'Templates für jeden Fall selbst schreiben'],
      benefits: ['Abmahn-sicher emailen', 'Keine Anwalts-Checks mehr nötig', 'Templates für alle Fälle fertig'],
      frameworkFocus: 'DSGVO + Email-Marketing',
      category: 'communication',
      status: 'beta',
      popularity: 92,
      complexity: 'basic',
      color: 'from-blue-500 to-indigo-600',
      link: '/tools/dsgvo-email-template-generator',
      stats: 'Beta-Zugang',
      setupTime: '2 Min',
      roi: 'Abmahnungen vermeiden'
    },
    {
      id: 'dsgvo-compliance-scorecard',
      icon: Trophy,
      title: 'DSGVO Compliance Check',
      subtitle: 'Wo stehen Sie wirklich?',
      description: 'Sie wissen nicht, ob Ihr Datenschutz ausreicht? Behörden-Prüfungen können teuer werden. Checken Sie Ihren Status in 15 Minuten - kostenlos.',
      challenges: ['Keine Ahnung vom eigenen Compliance-Status', 'Behörden-Prüfung kann jederzeit kommen', 'Branche ist schon weiter als Sie'],
      benefits: ['Schwachstellen sofort erkannt', 'Prüfungs-bereit in Rekordzeit', 'Konkurrenz-Vergleich inklusive'],
      frameworkFocus: 'DSGVO Check',
      category: 'compliance',
      status: 'live',
      popularity: 87,
      complexity: 'intermediate',
      color: 'from-purple-500 to-pink-600',
      link: '/tools/dsgvo-compliance-scorecard',
      stats: 'Sofort-Check',
      setupTime: '15 Min',
      roi: 'Prüfungs-sicher'
    },
    {
      id: 'compliance-ai-assistant',
      icon: Brain,
      title: 'KI Compliance Berater',
      subtitle: 'Ihr 24/7 Rechts-Experte',
      description: 'Compliance-Fragen zur Unzeit? Anwalt nicht erreichbar? Stundensatz zu hoch? Unser KI-Berater gibt Ihnen sofort Antworten - rund um die Uhr.',
      challenges: ['Anwalt kostet 300€/h für einfache Fragen', 'Compliance-Fragen kommen immer zur Unzeit', 'Team hat keine Rechts-Expertise'],
      benefits: ['Sofort-Antworten statt teure Anwalt-Termine', 'Nachts, Wochenende - immer verfügbar', 'Team wird zum Compliance-Experten'],
      frameworkFocus: 'KI Rechtsberatung',
      category: 'innovation',
      status: 'coming_soon',
      popularity: 96,
      complexity: 'intermediate',
      color: 'from-blue-500 to-indigo-600',
      link: '/tools/compliance-ai-assistant',
      stats: 'KI-Powered',
      setupTime: '30s',
      roi: 'Anwaltskosten sparen'
    }
  ];

  const filteredTools = tools.filter(tool => {
    const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
    const complexityMatch = selectedComplexity === 'all' || tool.complexity === selectedComplexity;
    return categoryMatch && complexityMatch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">Live</Badge>;
      case 'beta':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">Beta</Badge>;
      case 'coming_soon':
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">Bald verfügbar</Badge>;
      default:
        return null;
    }
  };

  const getComplexityBadge = (complexity: string) => {
    const level = complexityLevels.find(l => l.id === complexity);
    return level ? <Badge className={level.color}>{level.name}</Badge> : null;
  };

  return (
    <>
      <SEOHead
        title="Tools – Compliance-Werkzeuge & Automatisierung"
        description="Compliance-Tools Suite: DSGVO-Check, Cookie-Scanner, Whistleblower-System, KI-Assistent. ✓ Automatisierung ✓ Rechtssicher ✓ Enterprise-ready. Jetzt testen!"
        canonical="/tools"
        keywords="Compliance Tools, DSGVO Tools, Cookie Scanner, Whistleblower System, Compliance Automatisierung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl animate-spin-slow" />
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Sparkles className="h-5 w-5 text-blue-400 animate-spin-slow" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Compliance Tools</span>
              <Sparkles className="h-5 w-5 text-emerald-400 animate-spin-slow" style={{ animationDelay: '1s' }} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Compliance
              </span>
              <br />
              <span className="text-white">leicht</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                gemacht
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Intelligente Tools, die Ihre Compliance-Herausforderungen lösen und aus komplexen Anforderungen
              <span className="font-semibold text-emerald-400"> einfache Lösungen</span> machen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Rocket className="mr-2 h-5 w-5" />
                Tools entdecken
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald-400/30 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-400/5 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <PlayCircle className="mr-2 h-5 w-5" />
                Demo ansehen
              </Button>
            </motion.div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: 'DSGVO-konform', label: 'Vollständige Compliance', icon: Shield, color: 'from-emerald-500 to-teal-500' },
              { value: 'Schnell', label: 'Setup in Minuten', icon: Clock, color: 'from-amber-500 to-orange-500' },
              { value: 'Aktuell', label: 'Immer auf dem neuesten Stand', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
              { value: 'Experten-Tools', label: 'Von Datenschutz-Profis', icon: Users, color: 'from-blue-500 to-cyan-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/20 hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/20">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Category Filter */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-emerald-400" />
                  Kategorien
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 border",
                        selectedCategory === category.id
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                          : "bg-slate-700/40 text-slate-300 border-slate-600/40 hover:border-emerald-500/30 hover:text-emerald-400"
                      )}
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                      <Badge className="bg-slate-600/50 text-slate-300 text-xs">
                        {category.count}
                      </Badge>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Complexity Filter */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-emerald-400" />
                  Komplexität
                </h3>
                <div className="flex flex-wrap gap-3">
                  {complexityLevels.map((level) => (
                    <motion.button
                      key={level.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedComplexity(level.id)}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all duration-300 border",
                        selectedComplexity === level.id
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                          : "bg-slate-700/40 text-slate-300 border-slate-600/40 hover:border-emerald-500/30 hover:text-emerald-400"
                      )}
                    >
                      {level.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${selectedCategory}-${selectedComplexity}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                    `bg-gradient-to-r ${tool.color}`,
                    "opacity-0 group-hover:opacity-20"
                  )} />
                  
                  <Card className="relative overflow-hidden border-2 border-slate-700/40 transition-all duration-500 hover:shadow-2xl h-full backdrop-blur-sm bg-slate-800/60 group-hover:border-emerald-500/30">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={cn(
                            "p-4 rounded-2xl bg-gradient-to-br shadow-lg",
                            tool.color
                          )}
                        >
                          <tool.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="flex flex-col gap-2 items-end">
                          {getStatusBadge(tool.status)}
                          {getComplexityBadge(tool.complexity)}
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-500 fill-current" />
                            <span className="text-sm font-medium text-slate-300">{tool.popularity}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-6 flex-grow">
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">{tool.title}</h3>
                        <p className="text-slate-400 mb-3 font-medium">{tool.subtitle}</p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/20">
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-400">{tool.setupTime}</div>
                          <div className="text-xs text-slate-400">Setup</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-400">{tool.roi}</div>
                          <div className="text-xs text-slate-400">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">{tool.popularity}%</div>
                          <div className="text-xs text-slate-400">Beliebt</div>
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-6">
                        <div className="space-y-2">
                          {tool.benefits.slice(0, 3).map((benefit, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                              <span className="text-sm font-medium text-slate-300">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto"
                      >
                        <Button asChild className={cn(
                          "w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300",
                          tool.color
                        )}>
                          <Link to={tool.link} className="flex items-center justify-center gap-2">
                            <span>Tool nutzen</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            <ExternalLink className="h-4 w-4 opacity-60" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-teal-500/5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
            >
              <Rocket className="h-5 w-5 text-emerald-400" />
              <span className="font-semibold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Starten Sie jetzt durch</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Bereit für</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                smarte Tools?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Machen Sie den ersten Schritt in eine Zukunft, in der 
              <span className="font-semibold text-emerald-400">Tools Ihre Probleme lösen</span> statt neue zu schaffen.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <Calendar className="mr-3 h-6 w-6" />
                  Kostenlose Demo buchen
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-emerald-400/30 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-400/5 px-10 py-4 text-lg font-bold backdrop-blur-sm">
                  <Phone className="mr-3 h-6 w-6" />
                  Sofort anrufen
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-slate-400 mb-4">Tools, die echte Probleme lösen</p>
              <div className="flex justify-center items-center gap-8 opacity-40">
                <Building2 className="h-8 w-8 text-slate-400" />
                <Users className="h-8 w-8 text-slate-400" />
                <Shield className="h-8 w-8 text-slate-400" />
                <Award className="h-8 w-8 text-slate-400" />
                <Trophy className="h-8 w-8 text-slate-400" />
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

export default Tools;