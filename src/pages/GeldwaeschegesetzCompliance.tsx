import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  Bot,
  BarChart3,
  Globe,
  ChevronRight,
  PlayCircle,
  Download,
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  XCircle,
  Rocket,
  Eye,
  Server,
  Settings,
  AlertTriangle,
  Activity,
  Cloud,
  UserCheck,
  Monitor,
  Fingerprint,
  Key,
  ShieldCheck,
  Network,
  HardDrive,
  Cpu,
  Cog,
  ShieldAlert,
  Scale,
  Target,
  Timer,
  Briefcase,
  Factory,
  Wifi,
  MessageSquare,
  UserShield,
  Gavel,
  Search,
  Archive,
  PhoneCall,
  FileText,
  Headphones,
  CreditCard,
  UserX,
  Banknote,
  GitBranch,
  Brain,
  Percent,
  FileSearch,
  AlertOctagon,
  Workflow,
  UserPlus,
  DollarSign,
  BookOpen,
  Layers,
  BadgeCheck,
  PiggyBank,
  Landmark,
  TrendingDown,
  HandCoins
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GeldwaeschegesetzCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setComplianceScore((prev) => {
          if (prev >= 87) {
            clearInterval(interval);
            return 87;
          }
          return prev + 1;
        });
      }, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Geldwäschegesetz Compliance Service",
    "description": "GwG-Compliance automatisiert: KYC, Risikomanagement und Verdachtsmeldungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Anti-Money Laundering Compliance",
    "areaServed": "DE"
  };

  const features = [
    {
      icon: UserCheck,
      title: 'KYC-Automatisierung',
      description: 'KI-gestützte Identitätsprüfung in Echtzeit'
    },
    {
      icon: AlertOctagon,
      title: 'Risikobewertung',
      description: 'Automatische Risikoklassifizierung mit ML'
    },
    {
      icon: FileSearch,
      title: 'Transaction Monitoring',
      description: 'Echtzeit-Überwachung verdächtiger Transaktionen'
    },
    {
      icon: Bot,
      title: 'SAR-Generierung',
      description: 'Automatisierte Verdachtsmeldungen'
    }
  ];

  const painPoints = [
    {
      icon: HandCoins,
      title: 'Millionen-Bußgelder vermeiden',
      stat: 'bis zu 5 Mio. €',
      description: 'oder 10% des Jahresumsatzes',
      severity: 'critical'
    },
    {
      icon: UserX,
      title: 'Kundenverlust durch manuelle Prozesse',
      stat: '23% Abbruchrate',
      description: 'bei langwierigen KYC-Verfahren',
      severity: 'high'
    },
    {
      icon: Clock,
      title: 'Zeitintensive Compliance-Prüfungen',
      stat: '40+ Stunden/Woche',
      description: 'für manuelle Transaktionsüberwachung',
      severity: 'medium'
    },
    {
      icon: AlertTriangle,
      title: 'Reputationsschäden',
      stat: '67% Kundenverlust',
      description: 'nach Geldwäsche-Skandalen',
      severity: 'critical'
    }
  ];

  const requirements = [
    {
      id: 1,
      title: 'Sorgfaltspflichten',
      items: [
        'Kundenidentifizierung (KYC)',
        'Wirtschaftlich Berechtigte ermitteln',
        'Geschäftszweck dokumentieren',
        'Laufende Überwachung'
      ],
      coverage: 95,
      icon: UserCheck
    },
    {
      id: 2,
      title: 'Risikomanagement',
      items: [
        'Risikobewertung erstellen',
        'Angemessene Sicherungsmaßnahmen',
        'Risikoorientierte Überwachung',
        'Regelmäßige Aktualisierung'
      ],
      coverage: 92,
      icon: ShieldAlert
    },
    {
      id: 3,
      title: 'Verdachtsmeldungen',
      items: [
        'Unverzügliche Meldepflicht',
        'Dokumentation verdächtiger Transaktionen',
        'Keine Informationsweitergabe',
        'Schutz vor Haftung'
      ],
      coverage: 88,
      icon: AlertOctagon
    },
    {
      id: 4,
      title: 'Organisation & Schulung',
      items: [
        'Geldwäschebeauftragter',
        'Regelmäßige Mitarbeiterschulungen',
        'Interne Sicherungsmaßnahmen',
        'Dokumentationspflichten'
      ],
      coverage: 90,
      icon: Briefcase
    }
  ];

  const verpflichtete = [
    {
      category: 'Finanzsektor',
      entities: ['Banken', 'Versicherungen', 'Zahlungsdienstleister', 'Krypto-Verwahrstellen'],
      riskLevel: 'high',
      icon: Landmark
    },
    {
      category: 'Immobiliensektor',
      entities: ['Makler', 'Verwalter', 'Bauträger', 'Immobilienfinanzierer'],
      riskLevel: 'medium',
      icon: Building2
    },
    {
      category: 'Rechts- & Steuerberatung',
      entities: ['Rechtsanwälte', 'Notare', 'Steuerberater', 'Wirtschaftsprüfer'],
      riskLevel: 'medium',
      icon: Scale
    },
    {
      category: 'Handel & Dienstleistung',
      entities: ['Güterhändler (>10.000€ bar)', 'Kunsthändler', 'Glücksspielanbieter', 'Factoring-Unternehmen'],
      riskLevel: 'varies',
      icon: Briefcase
    }
  ];

  const useCases = [
    {
      title: 'FinTech-Startup: 95% schnellere KYC-Prozesse',
      scenario: 'Digitale Bank mit 50.000+ Neukunden/Monat',
      challenge: 'Manuelle Identitätsprüfung dauerte 2-3 Tage',
      solution: 'KI-basierte Dokumentenverifikation in Echtzeit',
      results: [
        { metric: 'Onboarding-Zeit', value: '3 Minuten', change: '-95%' },
        { metric: 'Betrugsfälle', value: '-78%', change: 'reduction' },
        { metric: 'Compliance-Kosten', value: '-65%', change: 'savings' }
      ],
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Immobilienmakler: Automatisierte Risikobewertung',
      scenario: 'Luxusimmobilien-Vermittlung mit internationalen Kunden',
      challenge: 'Komplexe Eigentümerstrukturen und PEP-Prüfungen',
      solution: 'Automatische Sanktionslisten-Abgleiche und UBO-Ermittlung',
      results: [
        { metric: 'Prüfungsdauer', value: '30 Min', change: '-90%' },
        { metric: 'False Positives', value: '-82%', change: 'reduction' },
        { metric: 'Audit-Bereitschaft', value: '100%', change: 'compliant' }
      ],
      icon: Building2,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Krypto-Exchange: Echtzeit Transaction Monitoring',
      scenario: '10+ Millionen Transaktionen täglich',
      challenge: 'Erkennung von Mixing-Services und verdächtigen Mustern',
      solution: 'ML-basierte Mustererkennung und Blockchain-Analyse',
      results: [
        { metric: 'Erkennungsrate', value: '99.2%', change: '+45%' },
        { metric: 'SAR-Qualität', value: '+89%', change: 'improvement' },
        { metric: 'Regulatorische Strafen', value: '0€', change: 'avoided' }
      ],
      icon: GitBranch,
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const solutions = [
    {
      title: 'KI-gestützte Identitätsprüfung',
      description: 'Biometrische Verifikation und Dokumentenprüfung in Sekunden',
      features: [
        'Liveness-Detection',
        'OCR-Dokumentenextraktion',
        'Sanktionslisten-Abgleich',
        'PEP-Screening'
      ],
      icon: Fingerprint,
      color: 'blue'
    },
    {
      title: 'Intelligentes Transaction Monitoring',
      description: 'Machine Learning erkennt verdächtige Muster in Echtzeit',
      features: [
        'Anomalie-Erkennung',
        'Netzwerk-Analyse',
        'Risiko-Scoring',
        'Automatische Alerts'
      ],
      icon: Brain,
      color: 'purple'
    },
    {
      title: 'Automatisierte Verdachtsmeldungen',
      description: 'SAR-Generierung mit vorausgefüllten Formularen',
      features: [
        'BaFin-konforme Templates',
        'Automatische Dokumentation',
        'Verschlüsselte Übermittlung',
        'Audit-Trail'
      ],
      icon: FileCheck,
      color: 'green'
    },
    {
      title: 'Compliance-Management-Dashboard',
      description: 'Zentrale Übersicht über alle GwG-relevanten Prozesse',
      features: [
        'Risiko-Heatmaps',
        'Compliance-Score',
        'Schulungsverwaltung',
        'Reporting-Tools'
      ],
      icon: BarChart3,
      color: 'orange'
    }
  ];

  const stats = [
    { value: '98%', label: 'Automatisierungsgrad', icon: Bot },
    { value: '<5 Min', label: 'KYC-Prozess', icon: Timer },
    { value: '0', label: 'Compliance-Verstöße', icon: Shield },
    { value: '24/7', label: 'Monitoring', icon: Eye }
  ];

  const benefits = [
    {
      title: 'Kosten senken',
      items: ['80% weniger manuelle Prüfungen', 'Keine Bußgelder', 'Effizientere Prozesse'],
      value: '-75%',
      icon: TrendingDown
    },
    {
      title: 'Risiken minimieren',
      items: ['Lückenlose Dokumentation', 'Automatische Warnungen', 'Präventive Maßnahmen'],
      value: '99.9%',
      icon: ShieldCheck
    },
    {
      title: 'Kunden begeistern',
      items: ['Schnelles Onboarding', 'Weniger Rückfragen', 'Digitale Prozesse'],
      value: '+92%',
      icon: Star
    },
    {
      title: 'Wachstum fördern',
      items: ['Skalierbare Compliance', 'Neue Märkte erschließen', 'Wettbewerbsvorteil'],
      value: '+45%',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-marsstein to-red-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MarsStein Compliance</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors">Lösungen</Link>
              <Link to="/regulations" className="text-gray-600 hover:text-gray-900 transition-colors">Regulierungen</Link>
              <Link to="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">Ressourcen</Link>
              <Link to="/demo" className="px-6 py-2 bg-gradient-to-r from-marsstein to-red-600 text-white rounded-full hover:shadow-lg transition-all duration-300">
                Demo anfordern
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-red-100 rounded-full mb-6">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-800 font-medium">BaFin verschärft Kontrollen ab 2025</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Geldwäschegesetz-
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Compliance
              </span>
              <br />
              <span className="text-4xl md:text-5xl">mit KI automatisiert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Schützen Sie Ihr Unternehmen vor Millionen-Bußgeldern mit unserer 
              <br className="hidden md:block" />
              KI-gestützten GwG-Compliance-Plattform. Von KYC bis SAR – alles automatisiert.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-marsstein to-red-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>Kostenlose Demo</span>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>GwG-Leitfaden 2025</span>
              </motion.button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 text-marsstein mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Die Kosten der Nicht-Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Geldwäscheverstöße können existenzbedrohend sein
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-xl border-2 ${
                  point.severity === 'critical' 
                    ? 'border-red-200 hover:border-red-400' 
                    : point.severity === 'high' 
                    ? 'border-orange-200 hover:border-orange-400'
                    : 'border-yellow-200 hover:border-yellow-400'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex p-3 rounded-full mb-4 ${
                  point.severity === 'critical' 
                    ? 'bg-red-100' 
                    : point.severity === 'high' 
                    ? 'bg-orange-100'
                    : 'bg-yellow-100'
                }`}>
                  <point.icon className={`w-8 h-8 ${
                    point.severity === 'critical' 
                      ? 'text-red-600' 
                      : point.severity === 'high' 
                      ? 'text-orange-600'
                      : 'text-yellow-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                <div className={`text-3xl font-bold mb-2 ${
                  point.severity === 'critical' 
                    ? 'text-red-600' 
                    : point.severity === 'high' 
                    ? 'text-orange-600'
                    : 'text-yellow-600'
                }`}>
                  {point.stat}
                </div>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verpflichtete Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sind Sie GwG-verpflichtet?
            </h2>
            <p className="text-xl text-gray-600">
              Diese Branchen und Unternehmen müssen das Geldwäschegesetz beachten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verpflichtete.map((group, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <group.icon className="w-12 h-12 text-marsstein" />
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    group.riskLevel === 'high' 
                      ? 'bg-red-100 text-red-700'
                      : group.riskLevel === 'medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {group.riskLevel === 'high' ? 'Hohes Risiko' : group.riskLevel === 'medium' ? 'Mittleres Risiko' : 'Variiert'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{group.category}</h3>
                <ul className="space-y-2">
                  {group.entities.map((entity, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{entity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section with Progress */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              GwG-Anforderungen im Überblick
            </h2>
            <p className="text-xl text-gray-600">
              Diese Pflichten müssen Sie erfüllen – wir automatisieren sie für Sie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.id}
                className="bg-white rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                      <req.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{req.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                      {req.coverage}%
                    </div>
                    <div className="text-sm text-gray-500">Abdeckung</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {req.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${req.coverage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Erfolgsgeschichten unserer Kunden
            </h2>
            <p className="text-xl text-gray-600">
              So profitieren Unternehmen von automatisierter GwG-Compliance
            </p>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} mb-6`}>
                      <useCase.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-sm font-semibold text-gray-500 uppercase">Szenario</span>
                        <p className="text-gray-700 mt-1">{useCase.scenario}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500 uppercase">Herausforderung</span>
                        <p className="text-gray-700 mt-1">{useCase.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500 uppercase">Lösung</span>
                        <p className="text-gray-700 mt-1">{useCase.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Ergebnisse</h4>
                    <div className="space-y-4">
                      {useCase.results.map((result, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <span className="text-gray-700 font-medium">{result.metric}</span>
                          <span className={`text-2xl font-bold ${
                            result.change === 'reduction' || result.change === 'savings' 
                              ? 'text-green-600' 
                              : result.change === 'improvement' || result.change === 'compliant'
                              ? 'text-blue-600'
                              : result.change.startsWith('-') 
                              ? 'text-green-600'
                              : 'text-purple-600'
                          }`}>
                            {result.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unsere GwG-Compliance-Lösungen
            </h2>
            <p className="text-xl text-gray-600">
              Modernste Technologie trifft auf Compliance-Expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  solution.color === 'blue' ? 'bg-blue-100' :
                  solution.color === 'purple' ? 'bg-purple-100' :
                  solution.color === 'green' ? 'bg-green-100' :
                  'bg-orange-100'
                }`}>
                  <solution.icon className={`w-8 h-8 ${
                    solution.color === 'blue' ? 'text-blue-600' :
                    solution.color === 'purple' ? 'text-purple-600' :
                    solution.color === 'green' ? 'text-green-600' :
                    'text-orange-600'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        solution.color === 'blue' ? 'bg-blue-500' :
                        solution.color === 'purple' ? 'bg-purple-500' :
                        solution.color === 'green' ? 'bg-green-500' :
                        'bg-orange-500'
                      }`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="mt-6 flex items-center space-x-2 text-marsstein font-semibold hover:text-red-700 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Score Dashboard */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ihr GwG-Compliance-Score
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Erhalten Sie in Echtzeit einen Überblick über Ihren Compliance-Status 
                  und identifizieren Sie Verbesserungspotenziale.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <span className="text-gray-300">Vollständig erfüllt</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                    <span className="text-gray-300">Teilweise erfüllt</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <span className="text-gray-300">Handlungsbedarf</span>
                  </div>
                </div>
                
                <motion.button
                  className="mt-8 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Compliance-Check starten</span>
                </motion.button>
              </div>
              
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="160"
                      cy="160"
                      r="140"
                      stroke="#374151"
                      strokeWidth="20"
                      fill="none"
                    />
                    <motion.circle
                      cx="160"
                      cy="160"
                      r="140"
                      stroke="url(#gradient)"
                      strokeWidth="20"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 140}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 140 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 140 * (1 - complianceScore / 100) }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                      className="text-6xl font-bold text-white"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                      transition={{ delay: 0.5 }}
                    >
                      {complianceScore}%
                    </motion.div>
                    <div className="text-gray-400 mt-2">Compliance-Score</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-500">95%</div>
                    <div className="text-sm text-gray-400">KYC-Prozesse</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-500">88%</div>
                    <div className="text-sm text-gray-400">Risikobewertung</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-500">92%</div>
                    <div className="text-sm text-gray-400">Monitoring</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-500">79%</div>
                    <div className="text-sm text-gray-400">Schulungen</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ihr Nutzen mit MarsStein
            </h2>
            <p className="text-xl text-gray-600">
              Messbare Ergebnisse für Ihr Unternehmen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <benefit.icon className="w-12 h-12 text-marsstein" />
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marsstein to-red-600">
                    {benefit.value}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für automatisierte GwG-Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Schützen Sie Ihr Unternehmen vor Millionen-Bußgeldern und starten Sie noch heute 
              mit unserer KI-gestützten Compliance-Lösung.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-marsstein to-red-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Beratungstermin vereinbaren</span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>+49 30 12345678</span>
              </motion.button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>BaFin-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5" />
                <span>ISO 27001 zertifiziert</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-5 h-5" />
                <span>GDPR-compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GeldwaeschegesetzCompliance;