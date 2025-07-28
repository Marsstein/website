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
  Edit3,
  Copy,
  Send,
  MessageCircle,
  BookOpen,
  Palette,
  Languages,
  Briefcase,
  Layers,
  RefreshCw,
  GitMerge,
  Database,
  Code,
  Terminal,
  Cpu,
  Wifi,
  Package,
  Folder,
  FolderOpen,
  File,
  PenTool,
  Type,
  Hash,
  AtSign,
  Link2,
  ExternalLink,
  Inbox,
  Archive,
  Trash2,
  Save,
  Plus,
  Minus,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  MoreVertical,
  MoreHorizontal,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Map,
  Crosshair,
  Cast,
  Airplay,
  Tv,
  Radio,
  Film,
  Video,
  Image,
  Camera,
  Aperture,
  Feather,
  Pen,
  Tool,
  Wrench,
  Hammer,
  Scissors,
  Ruler,
  Eraser,
  Paintbrush,
  Pipette,
  Sliders,
  Filter,
  Crop,
  Move,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  Check,
  X,
  HelpCircle,
  Menu,
  Grid,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  Columns,
  SquareStack,
  Layers3,
  Package2,
  Box,
  Archive as ArchiveIcon,
  Inbox as InboxIcon,
  Component,
  Puzzle,
  Plug,
  Plug2,
  Unplug,
  Cookie,
  Timer,
  Workflow,
  Network,
  Server,
  CloudLightning,
  MousePointer2,
  CreditCard,
  MousePointer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CookieManagementToolProduct = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Cookie Categories for ticker
  const cookieCategories = [
    { name: 'Notwendige Cookies', icon: Shield, type: 'Essential' },
    { name: 'Analyse & Statistik', icon: BarChart3, type: 'Analytics' },
    { name: 'Marketing & Werbung', icon: Target, type: 'Marketing' },
    { name: 'Personalisierung', icon: UserCheck, type: 'Preferences' },
    { name: 'Social Media', icon: Share2, type: 'Social' },
    { name: 'Performance', icon: Zap, type: 'Performance' }
  ];

  // Key Benefits
  const keyBenefits = [
    {
      icon: TrendingUp,
      title: 'Höhere Akzeptanz',
      description: 'Intelligente Banner-Optimierung steigert Ihre Consent-Raten',
      benefit: 'Durchschnittlich +40% mehr Zustimmungen',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Schneller Setup',
      description: 'Von null auf DSGVO-konform in unter 5 Minuten',
      benefit: 'Ein JavaScript-Snippet genügt',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Rechtssicherheit',
      description: 'Entwickelt von Datenschutz-Experten, kontinuierlich aktualisiert',
      benefit: 'IAB TCF 2.2 zertifiziert',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  // Features with real depth
  const features = [
    {
      id: 'scanner',
      icon: Brain,
      title: 'KI Cookie-Scanner',
      subtitle: 'Automatische Erkennung aller Cookies',
      description: 'Deep-Learning-Algorithmen scannen Ihre Website und kategorisieren automatisch alle Cookies nach DSGVO-Standards.',
      capabilities: [
        { name: 'Cookie-Erkennung', value: '99.9%', icon: Target },
        { name: 'Scan-Geschwindigkeit', value: '<60s', icon: Zap },
        { name: 'Kategorisierung', value: 'Automatisch', icon: Brain },
        { name: 'Vendor-Zuordnung', value: '2000+', icon: Database }
      ],
      benefits: [
        'Findet auch versteckte Third-Party Cookies',
        'Erkennt dynamisch nachgeladene Scripts',
        'Kategorisiert nach IAB-Standards',
        'Kontinuierliches Monitoring'
      ]
    },
    {
      id: 'optimization',
      icon: MousePointer2,
      title: 'Consent-Optimierung',
      subtitle: 'A/B-Testing für maximale Akzeptanz',
      description: 'Machine Learning optimiert kontinuierlich Design, Text und Timing Ihrer Cookie-Banner für höchste Akzeptanzraten.',
      capabilities: [
        { name: 'A/B Tests', value: 'Unlimited', icon: Layers },
        { name: 'Varianten', value: '50+', icon: Palette },
        { name: 'ML-Modell', value: 'Real-time', icon: Brain },
        { name: 'Uplift', value: '+40%', icon: TrendingUp }
      ],
      benefits: [
        'Automatische Design-Optimierung',
        'Personalisierte User Experience',
        'Mobile-optimierte Varianten',
        'Geografische Anpassungen'
      ]
    },
    {
      id: 'analytics',
      icon: BarChart4,
      title: 'Advanced Analytics',
      subtitle: 'Detaillierte Einblicke in Nutzerverhalten',
      description: 'Verstehen Sie genau, wie Nutzer mit Ihren Cookie-Bannern interagieren und optimieren Sie basierend auf Daten.',
      capabilities: [
        { name: 'Metriken', value: '25+', icon: PieChart },
        { name: 'Dashboards', value: 'Custom', icon: Layout },
        { name: 'Export', value: 'API & CSV', icon: Download },
        { name: 'Retention', value: '2 Jahre', icon: Archive }
      ],
      benefits: [
        'Consent-Rate nach Gerät & Region',
        'Bounce-Rate-Analyse',
        'Revenue-Impact-Tracking',
        'Compliance-Score-Monitoring'
      ]
    },
    {
      id: 'compliance',
      icon: Shield,
      title: 'Auto-Compliance',
      subtitle: 'Immer auf dem neuesten Stand',
      description: 'Unser Legal-Team überwacht Rechtsänderungen und aktualisiert Ihr Setup automatisch - Sie müssen nichts tun.',
      capabilities: [
        { name: 'Updates', value: '24/7', icon: RefreshCw },
        { name: 'Jurisdiktionen', value: 'EU+UK+CH', icon: Globe },
        { name: 'Audit-Log', value: 'Vollständig', icon: FileCheck },
        { name: 'Zertifikate', value: 'Auto-Renewal', icon: Award }
      ],
      benefits: [
        'Automatische Gesetzesanpassungen',
        'Proaktive Benachrichtigungen',
        'Rechtssichere Dokumentation',
        'Haftungsübernahme inklusive'
      ]
    }
  ];

  // Technical Architecture
  const technicalDetails = [
    {
      category: 'Performance',
      icon: Zap,
      specs: [
        'Bundle Size: 18KB (gzipped)',
        'Load Time: <100ms',
        'Zero render-blocking',
        'CDN mit 99.99% Uptime'
      ]
    },
    {
      category: 'Sicherheit',
      icon: Lock,
      specs: [
        'End-to-End Verschlüsselung',
        'ISO 27001 & SOC2 zertifiziert',
        'DSGVO-konforme Server (EU)',
        'Zero-Knowledge Architecture'
      ]
    },
    {
      category: 'Integration',
      icon: Plug,
      specs: [
        'One-line JavaScript',
        'Native SDKs (React, Vue, Angular)',
        'Server-side Rendering Support',
        'Tag Manager kompatibel'
      ]
    },
    {
      category: 'Standards',
      icon: Award,
      specs: [
        'IAB TCF 2.2 zertifiziert',
        'Google Consent Mode v2',
        'Facebook Limited Data Use',
        'Apple ATT kompatibel'
      ]
    }
  ];

  // Use Cases
  const useCases = [
    {
      industry: 'E-Commerce',
      icon: ShoppingCart,
      challenge: 'Conversion-Verluste durch aggressive Cookie-Banner',
      solution: 'Optimierte Banner steigern Consent UND Conversion',
      results: [
        '+35% Consent-Rate',
        '+12% Checkout-Conversion',
        '-67% Bounce-Rate'
      ]
    },
    {
      industry: 'SaaS & B2B',
      icon: Cloud,
      challenge: 'Komplexe Tracking-Anforderungen für Lead-Scoring',
      solution: 'Granulare Consent-Optionen ohne Friction',
      results: [
        '94% B2B Consent',
        'Vollständiges Lead-Tracking',
        'Enterprise-ready Compliance'
      ]
    },
    {
      industry: 'Publisher & Media',
      icon: Newspaper,
      challenge: 'Werbeeinnahmen vs. Datenschutz balancieren',
      solution: 'Smart Consent maximiert Ad-Revenue',
      results: [
        '+52% Ad-Consent',
        'TCF 2.2 für Programmatic',
        'Reader-Revenue Protection'
      ]
    },
    {
      industry: 'Finance & Insurance',
      icon: Building2,
      challenge: 'Strenge Compliance-Anforderungen',
      solution: 'Enterprise-Grade Security & Compliance',
      results: [
        'BaFin-konform',
        'Audit-ready Dokumentation',
        'Multi-tenant Architecture'
      ]
    }
  ];

  // Comparison with competitors
  const comparisonFeatures = [
    { feature: 'Setup-Zeit', us: '< 5 Min', others: '2-3 Stunden' },
    { feature: 'Cookie-Scanner', us: 'KI-automatisch', others: 'Manuell' },
    { feature: 'Consent-Optimierung', us: 'ML-basiert', others: 'Statisch' },
    { feature: 'Rechts-Updates', us: 'Automatisch', others: 'Manuell' },
    { feature: 'Performance Impact', us: '< 100ms', others: '300-500ms' },
    { feature: 'Preis-Leistung', us: 'Ab 29€/Monat', others: 'Ab 99€/Monat' }
  ];

  // Interactive Demo States
  const [demoState, setDemoState] = useState({
    cookiesFound: 0,
    categorized: 0,
    consentRate: 0,
    scanning: false
  });

  const startDemo = () => {
    setDemoState({ ...demoState, scanning: true });
    
    // Simulate scanning
    let cookies = 0;
    const scanInterval = setInterval(() => {
      cookies += Math.floor(Math.random() * 5) + 3;
      if (cookies >= 47) {
        cookies = 47;
        clearInterval(scanInterval);
        
        // Start categorizing
        let categorized = 0;
        const catInterval = setInterval(() => {
          categorized += 5;
          if (categorized >= 47) {
            categorized = 47;
            clearInterval(catInterval);
            
            // Show consent rate
            let consent = 0;
            const consentInterval = setInterval(() => {
              consent += 2;
              if (consent >= 73) {
                consent = 73;
                clearInterval(consentInterval);
              }
              setDemoState(prev => ({ ...prev, consentRate: consent }));
            }, 30);
          }
          setDemoState(prev => ({ ...prev, categorized }));
        }, 50);
      }
      setDemoState(prev => ({ ...prev, cookiesFound: cookies }));
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Dark themed like the new pages */}
      <motion.section
        ref={heroRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20" />
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Cookie className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">DSGVO-Cookie-Management der nächsten Generation</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Cookie-Banner die</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                konvertieren
              </span>
              <br />
              <span className="text-white">statt nerven</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              KI-optimierte Cookie-Banner mit nachweislich höheren Akzeptanzraten. 
              DSGVO-konform, blitzschnell implementiert, kontinuierlich optimiert.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="mr-2 h-5 w-5" />
                14 Tage kostenlos testen
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl"
                onClick={() => setIsPlaying(true)}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Demo ansehen (2 Min)
              </Button>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  &lt;100ms
                </div>
                <div className="text-sm text-gray-400">Ladezeit</div>
                <div className="mt-2 flex items-center text-green-400 text-xs">
                  <Zap className="h-3 w-3 mr-1" />
                  Zero Impact
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  KI
                </div>
                <div className="text-sm text-gray-400">Cookie-Scanner</div>
                <div className="mt-2 flex items-center text-blue-400 text-xs">
                  <Brain className="h-3 w-3 mr-1" />
                  Auto-Kategorisierung
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  TCF 2.2
                </div>
                <div className="text-sm text-gray-400">Zertifiziert</div>
                <div className="mt-2 flex items-center text-purple-400 text-xs">
                  <Award className="h-3 w-3 mr-1" />
                  IAB Standard
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Compliance</div>
                <div className="mt-2 flex items-center text-yellow-400 text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  Auto-Updates
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Cookie Categories Ticker */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-12 animate-scroll-x">
            {[...cookieCategories, ...cookieCategories].map((category, index) => (
              <div key={index} className="flex items-center gap-3 text-sm whitespace-nowrap">
                <category.icon className="h-4 w-4 text-orange-400" />
                <span className="font-medium text-white">{category.name}</span>
                <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                  {category.type}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              So funktioniert's
            </h2>
            <p className="text-xl text-gray-300">
              Von der Installation bis zur Optimierung in 3 Schritten
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Script einbinden</h3>
                <p className="text-gray-400 mb-4">
                  Ein Zeile JavaScript oder unser Plugin installieren
                </p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-green-400">
                  &lt;script src="https://cdn.cookietool.de/v2.js"&gt;&lt;/script&gt;
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">KI scannt Cookies</h3>
                <p className="text-gray-400 mb-4">
                  Automatische Erkennung und Kategorisierung
                </p>
                <Button
                  onClick={startDemo}
                  disabled={demoState.scanning}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  {demoState.scanning ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Scanning...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-4 w-4" />
                      Demo starten
                    </>
                  )}
                </Button>
                {demoState.cookiesFound > 0 && (
                  <div className="mt-4 space-y-2">
                    <div className="text-sm text-gray-400">
                      Cookies gefunden: <span className="text-white font-bold">{demoState.cookiesFound}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Kategorisiert: <span className="text-white font-bold">{demoState.categorized}</span>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fertig & Optimiert</h3>
                <p className="text-gray-400 mb-4">
                  ML optimiert kontinuierlich Ihre Consent-Rate
                </p>
                {demoState.consentRate > 0 && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-400">
                      {demoState.consentRate}%
                    </div>
                    <div className="text-sm text-gray-400">Consent-Rate</div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Features im Detail
            </h2>
            <p className="text-xl text-muted-foreground">
              Alles was Sie für erfolgreiches Cookie-Management brauchen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature Selector */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={cn(
                      "cursor-pointer transition-all duration-300",
                      selectedFeature === index
                        ? "ring-2 ring-orange-500 shadow-xl"
                        : "hover:shadow-lg"
                    )}
                    onClick={() => setSelectedFeature(index)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              {feature.subtitle}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={cn(
                          "h-5 w-5 transition-transform",
                          selectedFeature === index && "rotate-90"
                        )} />
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Feature Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {features[selectedFeature].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {features[selectedFeature].description}
                </p>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {features[selectedFeature].capabilities.map((cap, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                      <div className="flex items-center justify-between mb-2">
                        <cap.icon className="h-5 w-5 text-orange-600" />
                        <span className="text-2xl font-bold">{cap.value}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{cap.name}</div>
                    </div>
                  ))}
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  <h4 className="font-semibold mb-2">Ihre Vorteile:</h4>
                  {features[selectedFeature].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Der Marsstein Vorteil
            </h2>
            <p className="text-xl text-muted-foreground">
              Warum führende Unternehmen auf unser Cookie-Tool setzen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20",
                  "bg-gradient-to-br",
                  benefit.color
                )} />
                
                <div className="relative z-10">
                  <div className={cn(
                    "inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br",
                    benefit.color
                  )}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {benefit.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className={cn(
                      "bg-gradient-to-r bg-clip-text text-transparent",
                      benefit.color
                    )}>
                      {benefit.benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Für jede Branche die richtige Lösung
            </h2>
            <p className="text-xl text-muted-foreground">
              Branchenspezifische Optimierungen für maximalen Erfolg
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-xl">
                    <useCase.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{useCase.industry}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {useCase.challenge}
                    </p>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Lösung:</strong> {useCase.solution}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Ergebnisse
                  </h4>
                  {useCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-ready Technologie
            </h2>
            <p className="text-xl text-gray-300">
              Höchste Standards für Performance, Sicherheit und Compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <detail.icon className="h-6 w-6 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">{detail.category}</h3>
                </div>
                <div className="space-y-2">
                  {detail.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Der Vergleich macht sicher
            </h2>
            <p className="text-xl text-muted-foreground">
              Marsstein Cookie-Tool vs. Standard-Lösungen
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-orange-600">Marsstein</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-400">Andere</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-2 text-green-600 font-medium">
                        <CheckCircle className="h-5 w-5" />
                        {item.us}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">
                      {item.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für Cookie-Banner die konvertieren?
            </h2>
            <p className="text-xl text-orange-100 mb-12">
              Steigern Sie Ihre Consent-Rate und bleiben Sie dabei 100% DSGVO-konform.
              Keine Kreditkarte erforderlich. Setup in unter 5 Minuten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="mr-2 h-5 w-5" />
                14 Tage kostenlos testen
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Demo vereinbaren
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5" />
                <span>DSGVO-Haftungsübernahme</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Setup in 5 Minuten</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Award className="h-5 w-5" />
                <span>IAB TCF 2.2 zertifiziert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Fix for missing icons
const ShoppingCart = Package;
const Cloud = CloudLightning;
const Newspaper = FileText;

export default CookieManagementToolProduct;