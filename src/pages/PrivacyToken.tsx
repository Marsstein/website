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
  Coins,
  Wallet,
  CreditCard,
  RefreshCw,
  Repeat,
  TrendingUp as TrendUp,
  Gift,
  Hash,
  Link2,
  Key,
  Banknote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PrivacyToken = () => {
  const [tokenPrice, setTokenPrice] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isHeroInView) {
      const timer = setTimeout(() => {
        const interval1 = setInterval(() => {
          setTokenPrice((prev) => {
            if (prev >= 1.47) {
              clearInterval(interval1);
              return 1.47;
            }
            return prev + 0.03;
          });
        }, 30);

        const interval2 = setInterval(() => {
          setTotalSupply((prev) => {
            if (prev >= 10000000) {
              clearInterval(interval2);
              return 10000000;
            }
            return prev + 200000;
          });
        }, 30);

        const interval3 = setInterval(() => {
          setActiveUsers((prev) => {
            if (prev >= 47842) {
              clearInterval(interval3);
              return 47842;
            }
            return prev + 950;
          });
        }, 30);

        const interval4 = setInterval(() => {
          setTransactions((prev) => {
            if (prev >= 2847329) {
              clearInterval(interval4);
              return 2847329;
            }
            return prev + 56000;
          });
        }, 30);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHeroInView]);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Token Economics
  const tokenomics = [
    { allocation: "User Rewards", percentage: 40, amount: "4,000,000 PRVT", color: "from-purple-500 to-pink-500" },
    { allocation: "Company Treasury", percentage: 20, amount: "2,000,000 PRVT", color: "from-blue-500 to-cyan-500" },
    { allocation: "Development Fund", percentage: 15, amount: "1,500,000 PRVT", color: "from-green-500 to-emerald-500" },
    { allocation: "Liquidity Pool", percentage: 15, amount: "1,500,000 PRVT", color: "from-orange-500 to-red-500" },
    { allocation: "Team & Advisors", percentage: 10, amount: "1,000,000 PRVT", color: "from-indigo-500 to-purple-500" }
  ];

  // Use Cases
  const useCases = [
    {
      icon: Gift,
      title: "Daten monetarisieren",
      description: "Nutzer erhalten PRVT Token für die Freigabe ihrer Daten",
      example: "Social Media Profil = 50 PRVT/Monat",
      value: "€73.50"
    },
    {
      icon: Building2,
      title: "Daten einkaufen",
      description: "Unternehmen kaufen anonymisierte Datensätze mit PRVT",
      example: "1000 User Insights = 5000 PRVT",
      value: "€7,350"
    },
    {
      icon: Shield,
      title: "Premium Privacy Features",
      description: "Erweiterte Datenschutz-Tools mit PRVT freischalten",
      example: "Zero-Knowledge Vault = 100 PRVT/Jahr",
      value: "€147"
    },
    {
      icon: Repeat,
      title: "Data Marketplace",
      description: "Peer-to-peer Datenhandel mit Smart Contracts",
      example: "Gesundheitsdaten = 200 PRVT/Dataset",
      value: "€294"
    }
  ];

  // Live Transactions
  const liveTransactions = [
    { type: "earn", user: "User****42", action: "Social Media Data", amount: "+50 PRVT", time: "vor 2 Min" },
    { type: "spend", company: "MarketResearch Inc.", action: "1000 User Profiles", amount: "-5000 PRVT", time: "vor 5 Min" },
    { type: "earn", user: "User****89", action: "Location Data", amount: "+30 PRVT", time: "vor 7 Min" },
    { type: "transfer", from: "User****12", to: "User****67", amount: "120 PRVT", time: "vor 9 Min" },
    { type: "earn", user: "User****33", action: "Shopping Behavior", amount: "+75 PRVT", time: "vor 12 Min" }
  ];

  // Token Benefits
  const tokenBenefits = [
    {
      icon: Wallet,
      title: "Digitale Geldbörse",
      description: "Sichere Wallet für PRVT Token mit 2FA und Biometrie"
    },
    {
      icon: RefreshCw,
      title: "Instant Exchange",
      description: "Tauschen Sie PRVT gegen EUR, USD oder andere Kryptos"
    },
    {
      icon: BarChart3,
      title: "Staking Rewards",
      description: "Bis zu 12% APY durch Token Staking"
    },
    {
      icon: Users,
      title: "Governance Rights",
      description: "Mitbestimmung bei Plattform-Entscheidungen"
    }
  ];

  // Company Benefits
  const companyBenefits = [
    {
      stat: "73%",
      label: "Kostenreduktion",
      description: "im Vergleich zu traditionellen Datenquellen"
    },
    {
      stat: "100%",
      label: "DSGVO-konform",
      description: "durch transparente Einwilligungen"
    },
    {
      stat: "10x",
      label: "Bessere Datenqualität",
      description: "durch direkte User-Verifizierung"
    },
    {
      stat: "24/7",
      label: "Echtzeit-Zugang",
      description: "zu frischen, relevanten Daten"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40" />
          <motion.div
            className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full opacity-20 blur-3xl"
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
          {/* Blockchain Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
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
              <Coins className="w-6 h-6 text-indigo-400" />
              <span className="text-indigo-100 font-medium">Blockchain-based Privacy Economy</span>
              <Badge className="bg-indigo-500/20 text-indigo-200 border-indigo-400/30">
                WEB3
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Privacy
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Token (PRVT)
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Die erste faire Datenwirtschaft. Nutzer verdienen Token für ihre Daten. 
              <br className="hidden md:block" />
              Unternehmen kaufen Daten transparent. Blockchain garantiert Fairness.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg group"
              >
                <Wallet className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                Wallet erstellen
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 text-lg"
              >
                <FileText className="w-6 h-6 mr-3" />
                Whitepaper lesen
              </Button>
            </motion.div>
            
            {/* Live Token Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Coins className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">€{tokenPrice.toFixed(2)}</div>
                <div className="text-sm text-gray-400">PRVT Preis</div>
                <div className="text-xs text-green-400 mt-1">+12.4% (24h)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Hash className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{(totalSupply / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-gray-400">Total Supply</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{(activeUsers / 1000).toFixed(1)}k</div>
                <div className="text-sm text-gray-400">Token Holders</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Activity className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{(transactions / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-gray-400">Transaktionen</div>
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
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              So funktioniert's
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Die neue Datenwirtschaft
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fair, transparent, blockchain-basiert. Nutzer und Unternehmen profitieren gleichermaßen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* For Users */}
            <motion.div
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl border border-purple-500/30 p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Für Nutzer</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Daten freigeben</h4>
                    <p className="text-gray-400">Wählen Sie, welche Daten Sie teilen möchten</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Token verdienen</h4>
                    <p className="text-gray-400">Erhalten Sie PRVT Token für jede Datenfreigabe</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Kontrolle behalten</h4>
                    <p className="text-gray-400">Widerrufen Sie Zugriff jederzeit, behalten Sie Ihre Token</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-purple-900/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Durchschnittlicher Verdienst</span>
                  <span className="text-2xl font-bold text-green-400">€89/Monat</span>
                </div>
                <Progress value={73} className="h-2" />
              </div>
            </motion.div>

            {/* For Companies */}
            <motion.div
              className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-3xl border border-indigo-500/30 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-indigo-400" />
                <h3 className="text-2xl font-bold text-white">Für Unternehmen</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Token kaufen</h4>
                    <p className="text-gray-400">Erwerben Sie PRVT Token über Exchange</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Daten anfordern</h4>
                    <p className="text-gray-400">Spezifizieren Sie Ihre Datenanforderungen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Insights erhalten</h4>
                    <p className="text-gray-400">Anonymisierte, DSGVO-konforme Daten in Echtzeit</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-indigo-900/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">ROI gegenüber Traditional Data</span>
                  <span className="text-2xl font-bold text-green-400">+247%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-purple-900/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2">
              <Gift className="w-4 h-4 mr-2" />
              Use Cases
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Token in Aktion
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reale Anwendungsfälle für PRVT Token in der Datenwirtschaft
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Wert</div>
                    <div className="text-2xl font-bold text-green-400">{useCase.value}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <div className="text-sm text-purple-300 mb-1">Beispiel:</div>
                  <div className="text-white font-medium">{useCase.example}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Transactions */}
      <section className="py-20 px-6 bg-black/40">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 px-4 py-2">
              <Activity className="w-4 h-4 mr-2" />
              Live Activity
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Echtzeit Token-Transaktionen
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sehen Sie die Privacy Economy in Aktion
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Transaction Feed */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-green-400" />
                Live Feed
              </h3>
              
              <div className="space-y-4">
                {liveTransactions.map((tx, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      {tx.type === 'earn' && <ArrowDown className="w-5 h-5 text-green-400" />}
                      {tx.type === 'spend' && <ArrowUp className="w-5 h-5 text-red-400" />}
                      {tx.type === 'transfer' && <RefreshCw className="w-5 h-5 text-blue-400" />}
                      <div>
                        <div className="font-medium text-white">
                          {tx.user || tx.company || `${tx.from} → ${tx.to}`}
                        </div>
                        <div className="text-sm text-gray-400">{tx.action}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={cn(
                        "font-bold",
                        tx.amount.startsWith('+') ? "text-green-400" : 
                        tx.amount.startsWith('-') ? "text-red-400" : "text-blue-400"
                      )}>
                        {tx.amount}
                      </div>
                      <div className="text-xs text-gray-500">{tx.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <Link2 className="w-4 h-4 mr-2" />
                Blockchain Explorer öffnen
              </Button>
            </div>

            {/* Token Stats */}
            <div className="space-y-8">
              {/* Price Chart Mock */}
              <Card className="bg-gray-800/50 border-gray-700 p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <LineChart className="w-5 h-5 text-purple-400" />
                      PRVT/EUR Chart
                    </span>
                    <Badge className="bg-green-500/20 text-green-400">
                      +12.4%
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {[40, 55, 45, 60, 58, 73, 68, 82, 78, 85, 92, 87].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-gray-500">
                    <span>1h</span>
                    <span>24h</span>
                    <span>7d</span>
                    <span>1m</span>
                  </div>
                </CardContent>
              </Card>

              {/* Market Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-800/50 border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Banknote className="w-6 h-6 text-green-400" />
                    <TrendUp className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">€14.7M</div>
                  <div className="text-sm text-gray-400">Market Cap</div>
                </Card>
                
                <Card className="bg-gray-800/50 border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-6 h-6 text-purple-400" />
                    <span className="text-xs text-gray-500">24h</span>
                  </div>
                  <div className="text-2xl font-bold text-white">€2.3M</div>
                  <div className="text-sm text-gray-400">Volume</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/30 to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              <PieChart className="w-4 h-4 mr-2" />
              Tokenomics
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Token-Verteilung
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              10 Millionen PRVT Token - Fair verteilt für nachhaltiges Wachstum
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pie Chart Visual */}
            <motion.div
              className="relative h-96 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-3xl" />
              </div>
              
              {/* Donut Chart Mock */}
              <svg className="w-80 h-80 transform -rotate-90">
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#gradient1)"
                  strokeWidth="40"
                  fill="transparent"
                  strokeDasharray="351.86 527.79"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#gradient2)"
                  strokeWidth="40"
                  fill="transparent"
                  strokeDasharray="175.93 703.72"
                  strokeDashoffset="-351.86"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#gradient3)"
                  strokeWidth="40"
                  fill="transparent"
                  strokeDasharray="131.95 747.7"
                  strokeDashoffset="-527.79"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#gradient4)"
                  strokeWidth="40"
                  fill="transparent"
                  strokeDasharray="131.95 747.7"
                  strokeDashoffset="-659.74"
                />
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="url(#gradient5)"
                  strokeWidth="40"
                  fill="transparent"
                  strokeDasharray="87.96 791.68"
                  strokeDashoffset="-791.68"
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                  <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">10M</div>
                  <div className="text-gray-400">PRVT</div>
                </div>
              </div>
            </motion.div>

            {/* Distribution Details */}
            <div className="space-y-4">
              {tokenomics.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-6 bg-gray-800/50 rounded-xl border border-gray-700"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("w-4 h-4 rounded-full bg-gradient-to-r", item.color)} />
                    <div>
                      <div className="font-bold text-white">{item.allocation}</div>
                      <div className="text-sm text-gray-400">{item.amount}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">{item.percentage}%</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Warum PRVT Token?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tokenBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Company Benefits */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-3xl border border-indigo-500/30 p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Für Unternehmen: Die Vorteile auf einen Blick
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {companyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                    {benefit.stat}
                  </div>
                  <div className="text-lg font-medium text-white mb-2">{benefit.label}</div>
                  <div className="text-sm text-gray-400">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Werden Sie Teil der Privacy Revolution
            </h2>
            <p className="text-xl text-purple-100 mb-12">
              Die Zukunft der Datenwirtschaft ist fair, transparent und dezentral. 
              Starten Sie heute und verdienen Sie mit Ihren Daten.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Button
                size="lg"
                className="px-8 py-6 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 text-lg"
              >
                <Wallet className="w-6 h-6 mr-3" />
                Wallet erstellen
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 bg-purple-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-purple-600/30 transition-all duration-300 border-white/30 text-lg"
              >
                <Building2 className="w-6 h-6 mr-3" />
                Enterprise Contact
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-purple-100">
              <div className="flex flex-col items-center space-y-2">
                <Coins className="w-8 h-8" />
                <span className="text-sm">€1.47 PRVT</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="w-8 h-8" />
                <span className="text-sm">47k+ Holders</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Shield className="w-8 h-8" />
                <span className="text-sm">100% DSGVO</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Activity className="w-8 h-8" />
                <span className="text-sm">2.8M+ Transactions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyToken;