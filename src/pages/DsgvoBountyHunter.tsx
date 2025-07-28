import React, { useState, useEffect, useRef } from 'react';
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
  Search,
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
  Crosshair,
  Coins,
  Sword,
  Bug,
  Gift,
  Swords
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DsgvoBountyHunter = () => {
  const [bountiesFound, setBountiesFound] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [activeHunters, setActiveHunters] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isHeroInView) {
      const timer = setTimeout(() => {
        const interval1 = setInterval(() => {
          setBountiesFound((prev) => {
            if (prev >= 1247) {
              clearInterval(interval1);
              return 1247;
            }
            return prev + 23;
          });
        }, 30);

        const interval2 = setInterval(() => {
          setTotalEarnings((prev) => {
            if (prev >= 847500) {
              clearInterval(interval2);
              return 847500;
            }
            return prev + 15000;
          });
        }, 30);

        const interval3 = setInterval(() => {
          setActiveHunters((prev) => {
            if (prev >= 3842) {
              clearInterval(interval3);
              return 3842;
            }
            return prev + 67;
          });
        }, 30);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHeroInView]);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Top Bounty Hunters
  const topHunters = [
    { rank: 1, name: "DataShield", avatar: "🛡️", findings: 89, earnings: "€45,320", badge: "Legendary", trend: "up" },
    { rank: 2, name: "PrivacyNinja", avatar: "🥷", findings: 76, earnings: "€38,900", badge: "Master", trend: "up" },
    { rank: 3, name: "ComplianceKing", avatar: "👑", findings: 64, earnings: "€32,100", badge: "Expert", trend: "down" },
    { rank: 4, name: "BugHunter42", avatar: "🐛", findings: 58, earnings: "€28,450", badge: "Expert", trend: "up" },
    { rank: 5, name: "SecurityFalcon", avatar: "🦅", findings: 52, earnings: "€24,200", badge: "Professional", trend: "same" }
  ];

  // Active Bounties
  const activeBounties = [
    {
      id: 1,
      company: "TechCorp GmbH",
      issue: "Unverschlüsselte Kundendaten-API",
      severity: "critical",
      bounty: "€5,000 - €15,000",
      category: "Data Leak",
      huntersActive: 23,
      timeLeft: "48h",
      logo: "🏢"
    },
    {
      id: 2,
      company: "E-Shop24",
      issue: "Fehlende Cookie-Consent Implementation",
      severity: "high",
      bounty: "€2,000 - €8,000",
      category: "Cookie Compliance",
      huntersActive: 15,
      timeLeft: "3d",
      logo: "🛒"
    },
    {
      id: 3,
      company: "FinanceApp AG",
      issue: "Mangelhafte Löschkonzepte",
      severity: "medium",
      bounty: "€1,000 - €5,000",
      category: "Data Retention",
      huntersActive: 8,
      timeLeft: "5d",
      logo: "💰"
    },
    {
      id: 4,
      company: "HealthTech Solutions",
      issue: "Unsichere Datenübertragung USA",
      severity: "critical",
      bounty: "€8,000 - €20,000",
      category: "International Transfer",
      huntersActive: 31,
      timeLeft: "24h",
      logo: "🏥"
    }
  ];

  // Bounty Categories
  const bountyCategories = [
    { icon: Bug, name: "Data Leaks", count: 342, avgBounty: "€3,500" },
    { icon: Lock, name: "Cookie Violations", count: 289, avgBounty: "€2,200" },
    { icon: Shield, name: "Security Issues", count: 456, avgBounty: "€4,800" },
    { icon: FileText, name: "Documentation", count: 178, avgBounty: "€1,500" },
    { icon: Users, name: "User Rights", count: 234, avgBounty: "€2,800" },
    { icon: Globe, name: "International", count: 167, avgBounty: "€5,200" }
  ];

  // Success Stories
  const successStories = [
    {
      hunter: "DataShield",
      company: "Major Bank",
      finding: "SQL Injection in Kundenportal",
      bounty: "€25,000",
      impact: "500K+ Kundendaten geschützt"
    },
    {
      hunter: "PrivacyNinja",
      company: "Social Platform",
      finding: "Unverschlüsselte Backups",
      bounty: "€18,000",
      impact: "2M User-Profile gesichert"
    },
    {
      hunter: "ComplianceKing",
      company: "E-Commerce Giant",
      finding: "GDPR Consent Bypass",
      bounty: "€15,000",
      impact: "€20M Strafe verhindert"
    }
  ];

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getBadgeStyle = (badge) => {
    switch(badge) {
      case 'Legendary': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'Master': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'Expert': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Professional': return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-indigo-900/40" />
          <motion.div
            className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Crosshair className="w-6 h-6 text-purple-400" />
              <span className="text-purple-100 font-medium">Community-Driven Compliance</span>
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400/30">
                DISRUPTION
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              DSGVO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Bounty Hunter
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Die weltweit erste Plattform für DSGVO Bug Bounties. 
              <br className="hidden md:block" />
              Finden Sie Compliance-Lücken. Verdienen Sie Geld. Schützen Sie Daten.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg group"
              >
                <Crosshair className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Start Hunting (Kostenlos)
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
              >
                <Building2 className="w-6 h-6 mr-3" />
                Für Unternehmen
              </Button>
            </motion.div>
            
            {/* Live Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{bountiesFound.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Bounties gefunden</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Coins className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">€{totalEarnings.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Ausgezahlt</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{activeHunters.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Active Hunters</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              So funktioniert's
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              In 3 Schritten zum Bounty Hunter
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Keine Vorkenntnisse nötig. Unser AI-Assistant hilft beim Finden von Compliance-Lücken.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="relative p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-6xl font-bold text-purple-500/30 absolute top-4 right-4">01</div>
              <Search className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Hunt & Discover</h3>
              <p className="text-gray-400 mb-4">
                Nutzen Sie unsere AI-Tools oder manuelle Checks um DSGVO-Verstöße zu finden.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Automatisierte Scanner
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Compliance Checklisten
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  AI-gestützte Analyse
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="relative p-8 bg-gradient-to-br from-pink-900/50 to-indigo-900/50 rounded-2xl border border-pink-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-6xl font-bold text-pink-500/30 absolute top-4 right-4">02</div>
              <FileCheck className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Report & Verify</h3>
              <p className="text-gray-400 mb-4">
                Reichen Sie Ihre Findings ein. Unser Team verifiziert binnen 24h.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Strukturierte Templates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Schnelle Verifikation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Feedback & Support
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="relative p-8 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl border border-indigo-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-6xl font-bold text-indigo-500/30 absolute top-4 right-4">03</div>
              <Coins className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Earn & Level Up</h3>
              <p className="text-gray-400 mb-4">
                Erhalten Sie Ihre Bounty und steigen Sie im Ranking auf.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Sofort-Auszahlung
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Reputation Points
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Exclusive Badges
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active Bounties */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-red-100 text-red-700 px-4 py-2">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Live Bounties
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aktive Bounty Programme
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diese Unternehmen suchen aktiv nach DSGVO-Schwachstellen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {activeBounties.map((bounty, index) => (
              <motion.div
                key={bounty.id}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{bounty.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{bounty.company}</h3>
                      <p className="text-gray-400">{bounty.issue}</p>
                    </div>
                  </div>
                  <Badge className={cn("px-3 py-1", getSeverityColor(bounty.severity))}>
                    {bounty.severity.toUpperCase()}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Bounty Range</div>
                    <div className="font-bold text-green-400">{bounty.bounty}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Category</div>
                    <div className="font-medium text-white">{bounty.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Time Left</div>
                    <div className="font-medium text-orange-400">{bounty.timeLeft}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{bounty.huntersActive} Hunters aktiv</span>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Crosshair className="w-4 h-4 mr-2" />
                    Hunt starten
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Alle {activeBounties.length * 3}+ Bounties anzeigen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-20 px-6 bg-black/40">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 px-4 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              Hall of Fame
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Top Bounty Hunters
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Die erfolgreichsten DSGVO-Jäger der Community
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Leaderboard Table */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Crown className="w-8 h-8 text-yellow-400" />
                Global Rankings
              </h3>
              
              <div className="space-y-4">
                {topHunters.map((hunter, index) => (
                  <motion.div
                    key={hunter.rank}
                    className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "text-2xl font-bold w-8 text-center",
                        hunter.rank === 1 && "text-yellow-400",
                        hunter.rank === 2 && "text-gray-400",
                        hunter.rank === 3 && "text-orange-400",
                        hunter.rank > 3 && "text-gray-500"
                      )}>
                        {hunter.rank}
                      </div>
                      <div className="text-3xl">{hunter.avatar}</div>
                      <div>
                        <div className="font-bold text-white">{hunter.name}</div>
                        <div className="text-sm text-gray-400">{hunter.findings} Findings</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-400">{hunter.earnings}</div>
                      <Badge className={cn("text-xs", getBadgeStyle(hunter.badge))}>
                        {hunter.badge}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats & Categories */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Bounty Kategorien</h3>
                <div className="grid grid-cols-2 gap-4">
                  {bountyCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-gray-900/50 rounded-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <category.icon className="w-6 h-6 text-purple-400 mb-2" />
                      <div className="font-medium text-white">{category.name}</div>
                      <div className="text-sm text-gray-400">{category.count} Bounties</div>
                      <div className="text-sm text-green-400">Ø {category.avgBounty}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ihre Chance!</h3>
                <p className="text-gray-300 mb-6">
                  Werden Sie Teil der Elite. Durchschnittliche Hunters verdienen €2,800 pro Monat.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <Rocket className="w-5 h-5 mr-2" />
                  Jetzt Hunter werden
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/30 to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Echte Erfolge, echtes Geld
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diese kritischen Findings haben Millionen-Strafen verhindert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Verified
                  </Badge>
                  <div className="text-2xl font-bold text-green-400">{story.bounty}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{story.finding}</h3>
                <p className="text-gray-400 mb-4">bei {story.company}</p>
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {story.hunter[0]}
                      </div>
                      <span className="text-sm text-gray-300">{story.hunter}</span>
                    </div>
                    <div className="text-sm text-gray-500">{story.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2">
              <Building2 className="w-4 h-4 mr-2" />
              Für Unternehmen
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Schützen Sie Ihr Unternehmen proaktiv
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Lassen Sie die Community Ihre DSGVO-Lücken finden, bevor es die Behörden tun
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Shield className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Proaktiver Schutz</h3>
                <p className="text-gray-400">
                  Finden Sie Compliance-Lücken bevor sie zu teuren Strafen führen. 
                  Durchschnittlich 47 kritische Findings pro Unternehmen.
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <DollarSign className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Kosteneffizient</h3>
                <p className="text-gray-400">
                  80% günstiger als traditionelle Audits. Zahlen Sie nur für verifizierte Findings. 
                  Durchschnittlich €25k vs. €150k für Full Audit.
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Users className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Community Power</h3>
                <p className="text-gray-400">
                  3,800+ spezialisierte Hunters prüfen kontinuierlich. 
                  24/7 Coverage, verschiedene Perspektiven, schnelle Ergebnisse.
                </p>
              </motion.div>
            </div>

            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Enterprise Bounty Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Dedizierter Program Manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Private oder Public Bounties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Volle Kontrolle über Scope & Budget</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Compliance Reports & Zertifikate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Integration in bestehende Prozesse</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-purple-500/30">
                  <div className="text-3xl font-bold text-white mb-2">
                    Ab €2,999/Monat
                  </div>
                  <p className="text-gray-400 mb-6">
                    + Bounty Auszahlungen. Keine versteckten Kosten.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Building2 className="w-5 h-5 mr-2" />
                    Enterprise Demo buchen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Hunt?
            </h2>
            <p className="text-xl text-purple-100 mb-12">
              Werden Sie Teil der Revolution. Verdienen Sie Geld mit dem Schutz von Daten. 
              Keine Vorkenntnisse nötig - unsere AI hilft Ihnen beim Start.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Button
                size="lg"
                className="px-8 py-6 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
              >
                <Crosshair className="w-6 h-6 mr-3" />
                Kostenlos registrieren
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-purple-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-purple-600/30 transition-all duration-300 border-white/30 text-lg"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Live Demo ansehen
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-purple-100">
              <div className="flex flex-col items-center space-y-2">
                <Trophy className="w-8 h-8" />
                <span className="text-sm">€847k+ ausgezahlt</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="w-8 h-8" />
                <span className="text-sm">3,842 Active Hunters</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Shield className="w-8 h-8" />
                <span className="text-sm">1,247 Bugs gefunden</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Building2 className="w-8 h-8" />
                <span className="text-sm">287 Unternehmen</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DsgvoBountyHunter;