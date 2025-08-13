import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Euro, 
  Shield, 
  FileText, 
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Clock,
  Star,
  Target,
  Lightbulb,
  Scale,
  Lock,
  Eye,
  Gavel,
  Calendar,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Info,
  HelpCircle,
  Zap,
  Brain,
  Award,
  TrendingUp,
  BarChart3,
  Activity,
  Layers,
  List,
  Plus,
  X,
  MessageSquare,
  Cpu,
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GeldwaeschegesetzGuide = () => {
  const { scrollYProgress } = useScroll();
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Animated Counter Component
  const AnimatedCounter = ({ value, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });

    useEffect(() => {
      if (isInView) {
        const startTime = Date.now();
        const animateCount = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const percentage = progress * progress * (3.0 - 2.0 * progress); // Ease in-out
          
          setCount(Math.floor(percentage * value));
          
          if (percentage < 1) {
            requestAnimationFrame(animateCount);
          }
        };
        requestAnimationFrame(animateCount);
      }
    }, [isInView, value, duration]);

    return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Header />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500 z-50"
        style={{ scaleX }}
      />
      
      <main className="relative">
        {/* Hero Section with Enhanced Animation */}
        <motion.div 
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900" />
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-rose-500/10 rounded-full"
                  style={{
                    width: Math.random() * 300 + 50,
                    height: Math.random() * 300 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          <div className="container px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Enhanced Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500/20 backdrop-blur-sm border border-rose-500/30 text-rose-300 mb-8"
              >
                <Euro className="h-5 w-5" />
                <span className="text-sm font-medium">Geldwäschegesetz Compliance</span>
                <Badge className="bg-rose-500/30 text-rose-200 border-rose-400/30">2024</Badge>
              </motion.div>
              
              {/* Main Title */}
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white">Geldwäschegesetz</span>
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent block mt-2">
                  (GwG) Compliance Guide
                </span>
              </motion.h1>
              
              {/* Enhanced Description */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ihr umfassender Leitfaden zur rechtssicheren Implementierung des deutschen 
                Geldwäschegesetzes und zur Erfüllung aller Anti-Money Laundering (AML) Anforderungen.
              </motion.p>

              {/* Statistics Row */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={15} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-300">Betroffene Branchen</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={5} suffix="M€" />
                  </div>
                  <div className="text-sm text-gray-300">Max. Bußgeld</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-300">Compliance-Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={24} suffix="/7" />
                  </div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/regulierung/geldwaeschegesetz">
                  <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90 group shadow-xl">
                    <BookOpen className="mr-2 h-5 w-5" />
                    GwG Produktseite
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group border-white/20 text-white hover:bg-white/10">
                  <Download className="mr-2 h-5 w-5" />
                  GwG Checkliste herunterladen
                </Button>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="h-8 w-8 text-white/50" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="container px-4 py-20">
          <div className="max-w-6xl mx-auto">

            {/* Quick Overview with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="mb-12 bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Shield className="h-5 w-5 text-rose-400" />
                    GwG Überblick
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div 
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-3xl font-bold text-rose-400 mb-2">
                        <AnimatedCounter value={15} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-300">Betroffene Branchen</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-3xl font-bold text-rose-400 mb-2">
                        <AnimatedCounter value={5} suffix="M€" />
                      </div>
                      <div className="text-sm text-gray-300">Max. Bußgeld</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-3xl font-bold text-rose-400 mb-2">BaFin</div>
                      <div className="text-sm text-gray-300">Aufsichtsbehörde</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-3xl font-bold text-rose-400 mb-2">KYC</div>
                      <div className="text-sm text-gray-300">Know Your Customer</div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interactive Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Die Entwicklung des Geldwäschegesetzes
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-500 to-pink-500"></div>
                
                {/* Timeline Events */}
                {[
                  {
                    year: "1993",
                    title: "Erstes GwG",
                    description: "Umsetzung der ersten EU-Geldwäscherichtlinie in deutsches Recht",
                    icon: Gavel,
                    side: "left"
                  },
                  {
                    year: "2008",
                    title: "Erweiterung des Anwendungsbereichs",
                    description: "Integration weiterer Verpflichteter wie Immobilienmakler und Güterhändler",
                    icon: Building2,
                    side: "right"
                  },
                  {
                    year: "2017",
                    title: "Vierte EU-Geldwäscherichtlinie",
                    description: "Verschärfung der Sorgfaltspflichten und Einführung des Transparenzregisters",
                    icon: Eye,
                    side: "left"
                  },
                  {
                    year: "2020",
                    title: "Fünfte EU-Geldwäscherichtlinie",
                    description: "Erweiterung auf Kryptowährungen und verstärkte Transparenz",
                    icon: Shield,
                    side: "right"
                  },
                  {
                    year: "2024",
                    title: "Aktuelle Anforderungen",
                    description: "Kontinuierliche Anpassung an neue Risiken und Technologien",
                    icon: Zap,
                    side: "left"
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: event.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center mb-12 ${
                      event.side === "right" ? "justify-end" : ""
                    }`}
                  >
                    <div className={`w-5/12 ${event.side === "right" ? "order-2 text-left pl-12" : "text-right pr-12"}`}>
                      <motion.div 
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <event.icon className="h-6 w-6 text-rose-400" />
                          <span className="text-2xl font-bold text-rose-400">{event.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                        <p className="text-sm text-gray-300">{event.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-slate-900"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Requirements - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Kernpflichten des Geldwäschegesetzes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Kundensorgfaltspflichten (KYC)",
                    description: "Identifizierung und Überprüfung der Kundenidentität",
                    features: [
                      "Identitätsprüfung bei Geschäftsbeginn",
                      "Feststellung wirtschaftlich Berechtigter",
                      "Kontinuierliche Überwachung",
                      "Verstärkte Sorgfalt bei PEP"
                    ],
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: AlertTriangle,
                    title: "Verdachtsmeldungen",
                    description: "Meldung verdächtiger Transaktionen an die FIU",
                    features: [
                      "Unverzügliche Meldepflicht",
                      "Tipping-Off-Verbot",
                      "Transaktionsaussetzung möglich",
                      "Dokumentation der Analyse"
                    ],
                    color: "from-orange-500 to-red-500"
                  },
                  {
                    icon: FileText,
                    title: "Aufzeichnungspflichten",
                    description: "Dokumentation und Aufbewahrung für 5 Jahre",
                    features: [
                      "Vollständige Transaktionsdaten",
                      "Kundendokumentation",
                      "Risikoanalysen",
                      "Schulungsnachweise"
                    ],
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Shield,
                    title: "Compliance-Organisation",
                    description: "Aufbau einer robusten Compliance-Struktur",
                    features: [
                      "Geldwäschebeauftragter",
                      "Risikomanagement-System",
                      "Regelmäßige Schulungen",
                      "Interne Kontrollen"
                    ],
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardHeader>
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${requirement.color} mb-4`}>
                          <requirement.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-white">{requirement.title}</CardTitle>
                        <p className="text-gray-300">{requirement.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {requirement.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Affected Industries - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Betroffene Branchen
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Das Geldwäschegesetz betrifft eine Vielzahl von Branchen mit unterschiedlichen 
                Anforderungen und Risikoprofilen. Klicken Sie auf eine Branche für Details.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Banken & Finanzdienstleister",
                    icon: Building,
                    riskLevel: "Sehr hoch",
                    requirements: ["Umfassende KYC-Prozesse", "Transaktionsmonitoring", "Sanktionslistenprüfung"],
                    description: "Vollumfängliche GwG-Pflichten mit strengsten Anforderungen"
                  },
                  {
                    name: "Versicherungen",
                    icon: Shield,
                    riskLevel: "Hoch",
                    requirements: ["Lebensversicherungen prüfen", "Rückversicherung beachten", "Prämienzahlungen überwachen"],
                    description: "Fokus auf Lebensversicherungen und kapitalbildende Produkte"
                  },
                  {
                    name: "Immobilienmakler",
                    icon: Home,
                    riskLevel: "Mittel-Hoch",
                    requirements: ["Käufer/Verkäufer identifizieren", "Bargeldschwelle 10.000€", "Herkunft der Mittel prüfen"],
                    description: "Sorgfaltspflichten bei Kauf- und Mietgeschäften"
                  },
                  {
                    name: "Rechtsanwälte & Notare",
                    icon: Scale,
                    riskLevel: "Mittel",
                    requirements: ["Bei Immobilientransaktionen", "Unternehmensgründungen", "Treuhandgeschäfte"],
                    description: "Spezifische Tätigkeiten unterliegen dem GwG"
                  },
                  {
                    name: "Kryptowährungen",
                    icon: Zap,
                    riskLevel: "Sehr hoch",
                    requirements: ["Wallet-Verifizierung", "Travel Rule beachten", "Cold Wallet Reporting"],
                    description: "Neue, strenge Anforderungen seit 2020"
                  },
                  {
                    name: "Glücksspiel",
                    icon: Activity,
                    riskLevel: "Hoch",
                    requirements: ["Spieleridentifikation", "Einzahlungslimits", "Auffällige Spielmuster"],
                    description: "Online und stationäre Anbieter betroffen"
                  }
                ].map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <industry.icon className="h-8 w-8 text-rose-400" />
                          <Badge 
                            className={`
                              ${industry.riskLevel === "Sehr hoch" ? "bg-red-500/20 text-red-300 border-red-500/30" : ""}
                              ${industry.riskLevel === "Hoch" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : ""}
                              ${industry.riskLevel === "Mittel-Hoch" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" : ""}
                              ${industry.riskLevel === "Mittel" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : ""}
                            `}
                          >
                            {industry.riskLevel}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-lg">{industry.name}</CardTitle>
                        <p className="text-gray-300 text-sm mt-2">{industry.description}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">Hauptanforderungen:</h4>
                        <ul className="space-y-2">
                          {industry.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ChevronRight className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Industries */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Weitere betroffene Branchen:</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Steuerberater', 'Wirtschaftsprüfer', 'Edelmetallhändler', 
                    'Kunsthändler', 'Güterhändler (>10.000€)', 'Factoring-Unternehmen', 
                    'Leasing-Gesellschaften', 'Zahlungsdienstleister', 'E-Geld-Institute',
                    'Kapitalverwaltungsgesellschaften', 'Finanzunternehmen'
                  ].map((industry, index) => (
                    <Badge 
                      key={index} 
                      className="bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20 transition-colors"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Implementation Steps - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Ihr Weg zur GwG-Compliance
              </h2>
              
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-20 left-12 right-12 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hidden lg:block"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {[
                    {
                      step: 1,
                      title: 'Risikoanalyse',
                      icon: Target,
                      description: 'Bewertung Ihrer spezifischen ML/TF-Risiken',
                      tasks: ['Geschäftsmodell analysieren', 'Kundenstruktur bewerten', 'Geografische Risiken'],
                      duration: '2-4 Wochen'
                    },
                    {
                      step: 2,
                      title: 'Organisation',
                      icon: Building2,
                      description: 'Aufbau der Compliance-Struktur',
                      tasks: ['GwB bestellen', 'Verantwortlichkeiten', 'Reporting-Linien'],
                      duration: '3-6 Wochen'
                    },
                    {
                      step: 3,
                      title: 'KYC-Prozesse',
                      icon: Users,
                      description: 'Kundensorgfaltspflichten etablieren',
                      tasks: ['Onboarding-Prozess', 'Dokumentation', 'Risikoklassifizierung'],
                      duration: '4-8 Wochen'
                    },
                    {
                      step: 4,
                      title: 'Monitoring',
                      icon: Activity,
                      description: 'Überwachungssysteme implementieren',
                      tasks: ['Transaction Monitoring', 'Sanktionslisten', 'PEP-Screening'],
                      duration: '6-12 Wochen'
                    },
                    {
                      step: 5,
                      title: 'Schulung',
                      icon: GraduationCap,
                      description: 'Mitarbeiter sensibilisieren',
                      tasks: ['Trainingskonzept', 'Regelmäßige Updates', 'Erfolgskontrolle'],
                      duration: 'Kontinuierlich'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Step Number */}
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                          {item.step}
                        </div>
                      </div>
                      
                      <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                        <CardHeader className="text-center pb-2">
                          <item.icon className="h-8 w-8 text-rose-400 mx-auto mb-3" />
                          <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                          <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            {item.tasks.map((task, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-xs">{task}</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-center pt-2 border-t border-white/10">
                            <span className="text-xs text-gray-400">Dauer: </span>
                            <span className="text-xs text-rose-300 font-semibold">{item.duration}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Risk Analysis Tool */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <BarChart3 className="h-8 w-8 text-rose-400" />
                    GwG-Risikoanalyse Tool
                  </CardTitle>
                  <p className="text-gray-300 mt-2">
                    Bewerten Sie Ihr individuelles Geldwäscherisiko mit unserem interaktiven Tool
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white font-semibold mb-4">Risikofaktoren bewerten:</h3>
                      <div className="space-y-4">
                        {[
                          { name: "Kundenstruktur", level: 65 },
                          { name: "Geografische Reichweite", level: 45 },
                          { name: "Produktkomplexität", level: 80 },
                          { name: "Transaktionsvolumen", level: 55 },
                          { name: "Bargeldintensität", level: 30 }
                        ].map((factor, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-300">{factor.name}</span>
                              <span className="text-sm text-rose-300 font-semibold">{factor.level}%</span>
                            </div>
                            <Progress value={factor.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h3 className="text-white font-semibold mb-4">Ihr Risikoprofil:</h3>
                      <div className="text-center mb-6">
                        <div className="text-5xl font-bold text-orange-400 mb-2">Mittel-Hoch</div>
                        <div className="text-gray-300">Gesamtrisiko-Score: 55/100</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                          <p className="text-sm text-gray-300">
                            Verstärkte Sorgfaltspflichten empfohlen
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                          <p className="text-sm text-gray-300">
                            Fokus auf Transaktionsmonitoring
                          </p>
                        </div>
                      </div>
                      <Button className="w-full mt-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90">
                        Detaillierte Analyse starten
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Case Studies Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Praxisbeispiele & Case Studies
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Lernen Sie aus realen Fällen und Best Practices der GwG-Compliance. 
                Diese Beispiele zeigen typische Herausforderungen und Lösungsansätze.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Fintech-Startup implementiert GwG-Compliance",
                    industry: "Zahlungsdienstleister",
                    challenge: "Ein junges Fintech musste innerhalb von 3 Monaten vollständige GwG-Compliance erreichen, um die BaFin-Lizenz zu erhalten.",
                    solution: [
                      "Implementierung automatisierter KYC-Prozesse mit KI-Unterstützung",
                      "Integration von Sanktionslisten-Screening in Echtzeit",
                      "Aufbau eines risikobasierten Ansatzes für Transaktionsmonitoring",
                      "Schulung aller 50 Mitarbeiter innerhalb von 4 Wochen"
                    ],
                    result: "Erfolgreiche BaFin-Lizenzierung und 95% Automatisierung der Compliance-Prozesse",
                    icon: Zap,
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Immobilienmakler nach GwG-Prüfung",
                    industry: "Immobilien",
                    challenge: "Mittelständischer Immobilienmakler mit 20 Mitarbeitern wurde von der Aufsichtsbehörde geprüft und musste erhebliche Mängel abstellen.",
                    solution: [
                      "Nachholung von über 200 fehlenden Kundenidentifikationen",
                      "Einführung digitaler Dokumentationsprozesse",
                      "Bestellung eines externen Geldwäschebeauftragten",
                      "Implementierung monatlicher Compliance-Reviews"
                    ],
                    result: "Vermeidung eines Bußgelds von 150.000€ und nachhaltige Compliance-Struktur",
                    icon: Home,
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Bank optimiert Verdachtsmeldeprozess",
                    industry: "Kreditinstitut",
                    challenge: "Regionalbank mit hohem Meldeaufkommen suchte nach Effizienzsteigerung bei gleichzeitiger Qualitätsverbesserung der Verdachtsmeldungen.",
                    solution: [
                      "Einführung von Machine Learning für Transaktionsanalyse",
                      "Standardisierung der Meldekriterien und -prozesse",
                      "Aufbau eines spezialisierten 5-köpfigen Compliance-Teams",
                      "Direkte Anbindung an goAML-System der FIU"
                    ],
                    result: "50% Reduktion von False Positives bei 30% höherer Trefferquote",
                    icon: Building,
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Krypto-Börse meistert neue Anforderungen",
                    industry: "Kryptowährungen",
                    challenge: "Deutsche Krypto-Handelsplattform musste sich auf die verschärften Anforderungen der 5. EU-Geldwäscherichtlinie einstellen.",
                    solution: [
                      "Implementierung der Travel Rule für Krypto-Transaktionen",
                      "Entwicklung eines Wallet-Screening-Systems",
                      "Integration von Blockchain-Analyse-Tools",
                      "Aufbau einer 24/7 Transaction Monitoring Unit"
                    ],
                    result: "Erste deutsche Krypto-Börse mit vollständiger GwG-Compliance-Zertifizierung",
                    icon: Zap,
                    color: "from-orange-500 to-red-500"
                  }
                ].map((caseStudy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${caseStudy.color}`}>
                            <caseStudy.icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30">
                            {caseStudy.industry}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-xl mb-3">{caseStudy.title}</CardTitle>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-rose-400 mb-2">Herausforderung:</h4>
                            <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-rose-400 mb-3">Lösungsansatz:</h4>
                            <ul className="space-y-2">
                              {caseStudy.solution.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-300 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="pt-4 border-t border-white/10">
                            <h4 className="text-sm font-semibold text-rose-400 mb-2">Ergebnis:</h4>
                            <p className="text-gray-300 text-sm font-medium">{caseStudy.result}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Best Practices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <Award className="h-6 w-6 text-rose-400" />
                      Best Practices aus der Praxis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Automatisierung first",
                          description: "Setzen Sie von Anfang an auf automatisierte Prozesse für KYC und Transaktionsmonitoring",
                          icon: Brain
                        },
                        {
                          title: "Kontinuierliche Schulung",
                          description: "Etablieren Sie eine Kultur der kontinuierlichen Weiterbildung und Sensibilisierung",
                          icon: GraduationCap
                        },
                        {
                          title: "Dokumentation ist König",
                          description: "Dokumentieren Sie alle Prozesse, Entscheidungen und Maßnahmen lückenlos",
                          icon: FileText
                        },
                        {
                          title: "Risikobasierter Ansatz",
                          description: "Fokussieren Sie Ressourcen auf Hochrisikobereiche und -kunden",
                          icon: Target
                        },
                        {
                          title: "Technologie nutzen",
                          description: "Moderne RegTech-Lösungen können Compliance erheblich vereinfachen",
                          icon: Cpu
                        },
                        {
                          title: "Proaktive Kommunikation",
                          description: "Pflegen Sie einen offenen Dialog mit Aufsichtsbehörden",
                          icon: MessageSquare
                        }
                      ].map((practice, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <practice.icon className="h-8 w-8 text-rose-400 mb-3" />
                          <h4 className="text-white font-semibold mb-2">{practice.title}</h4>
                          <p className="text-gray-300 text-sm">{practice.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Häufig gestellte Fragen zum Geldwäschegesetz
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Finden Sie Antworten auf die wichtigsten Fragen zur GwG-Compliance. 
                Klicken Sie auf eine Frage, um die Antwort zu sehen.
              </p>

              <div className="max-w-4xl mx-auto space-y-4">
                {[
                  {
                    category: "Grundlagen",
                    icon: Info,
                    questions: [
                      {
                        q: "Was ist das Geldwäschegesetz und wen betrifft es?",
                        a: "Das Geldwäschegesetz (GwG) ist die deutsche Umsetzung der EU-Geldwäscherichtlinien. Es verpflichtet bestimmte Unternehmen und Berufsgruppen zur Prävention von Geldwäsche und Terrorismusfinanzierung. Betroffen sind u.a. Banken, Versicherungen, Immobilienmakler, Rechtsanwälte, Notare, Steuerberater und viele weitere Branchen."
                      },
                      {
                        q: "Was sind die Hauptpflichten nach dem GwG?",
                        a: "Die Hauptpflichten umfassen: 1) Kundensorgfaltspflichten (KYC) - Identifizierung und Verifizierung von Kunden, 2) Meldepflichten - Verdachtsmeldungen an die FIU, 3) Aufzeichnungspflichten - Dokumentation für mindestens 5 Jahre, 4) Interne Sicherungsmaßnahmen - Risikomanagement, Schulungen und Bestellung eines Geldwäschebeauftragten."
                      },
                      {
                        q: "Welche Strafen drohen bei Verstößen gegen das GwG?",
                        a: "Bei Verstößen drohen erhebliche Sanktionen: Bußgelder bis zu 5 Millionen Euro oder 10% des Jahresumsatzes (je nachdem, was höher ist), strafrechtliche Verfolgung mit Freiheitsstrafen bis zu 5 Jahren, Veröffentlichung der Verstöße ('Naming & Shaming') und möglicher Entzug der Geschäftserlaubnis."
                      }
                    ]
                  },
                  {
                    category: "Kundensorgfaltspflichten",
                    icon: Users,
                    questions: [
                      {
                        q: "Was bedeutet KYC (Know Your Customer)?",
                        a: "KYC bezeichnet die Pflicht zur Kundenidentifizierung und -verifizierung. Dies umfasst: Feststellung der Identität des Vertragspartners, Klärung ob für einen wirtschaftlich Berechtigten gehandelt wird, Abklärung des Geschäftszwecks und der Art der Geschäftsbeziehung, sowie kontinuierliche Überwachung der Geschäftsbeziehung."
                      },
                      {
                        q: "Wann muss eine verstärkte Sorgfaltspflicht angewendet werden?",
                        a: "Verstärkte Sorgfaltspflichten sind erforderlich bei: Geschäftsbeziehungen mit politisch exponierten Personen (PEP), Transaktionen mit Hochrisikoländern, komplexen oder ungewöhnlich großen Transaktionen, Ferngeschäftsbeziehungen ohne persönlichen Kontakt, und wenn Zweifel an der Richtigkeit der Kundenangaben bestehen."
                      },
                      {
                        q: "Was ist ein wirtschaftlich Berechtigter?",
                        a: "Ein wirtschaftlich Berechtigter ist die natürliche Person, die letztendlich Eigentümer oder Kontrollinhaber des Kunden ist. Bei Unternehmen sind dies Personen mit mehr als 25% der Anteile oder Stimmrechte. Die Identifizierung des wirtschaftlich Berechtigten ist essentieller Bestandteil der Kundensorgfaltspflichten."
                      }
                    ]
                  },
                  {
                    category: "Meldepflichten",
                    icon: AlertTriangle,
                    questions: [
                      {
                        q: "Wann muss eine Verdachtsmeldung abgegeben werden?",
                        a: "Eine Verdachtsmeldung ist erforderlich, wenn Tatsachen vorliegen, die darauf hindeuten, dass: Vermögensgegenstände aus strafbaren Handlungen stammen, eine Geschäftsbeziehung zur Terrorismusfinanzierung genutzt wird, oder der Vertragspartner falsche Angaben über seine Identität gemacht hat. Die Meldung muss unverzüglich an die Financial Intelligence Unit (FIU) erfolgen."
                      },
                      {
                        q: "Was ist das Tipping-Off-Verbot?",
                        a: "Das Tipping-Off-Verbot untersagt es, den Kunden oder Dritte über eine Verdachtsmeldung zu informieren. Dies soll verhindern, dass Verdächtige gewarnt werden und Beweise vernichten. Verstöße gegen das Tipping-Off-Verbot können mit Freiheitsstrafe bis zu einem Jahr oder Geldstrafe geahndet werden."
                      },
                      {
                        q: "Wie läuft das Meldeverfahren ab?",
                        a: "Das Meldeverfahren erfolgt elektronisch über das goAML-System der FIU. Nach Registrierung können Verdachtsmeldungen online übermittelt werden. Die FIU analysiert die Meldung und leitet sie bei Bedarf an die Strafverfolgungsbehörden weiter. Der Meldende erhält eine Eingangsbestätigung mit Aktenzeichen."
                      }
                    ]
                  },
                  {
                    category: "Organisation & Compliance",
                    icon: Building2,
                    questions: [
                      {
                        q: "Wann muss ein Geldwäschebeauftragter bestellt werden?",
                        a: "Ein Geldwäschebeauftragter muss bestellt werden von: Kreditinstituten, Finanzdienstleistungsinstituten, Versicherungsunternehmen, Kapitalverwaltungsgesellschaften, und anderen Verpflichteten, wenn die Art und der Umfang der Geschäftstätigkeit dies erfordern. Der Geldwäschebeauftragte muss der Geschäftsleitung direkt unterstellt sein."
                      },
                      {
                        q: "Welche Aufgaben hat ein Geldwäschebeauftragter?",
                        a: "Der Geldwäschebeauftragte ist zentraler Ansprechpartner für alle GwG-relevanten Themen. Zu seinen Aufgaben gehören: Entwicklung interner Grundsätze und Verfahren, Durchführung von Risikoanalysen, Bearbeitung von Verdachtsfällen und Meldungen, Schulung der Mitarbeiter, sowie Zusammenarbeit mit Behörden."
                      },
                      {
                        q: "Wie oft müssen Mitarbeiterschulungen durchgeführt werden?",
                        a: "Mitarbeiterschulungen müssen regelmäßig, mindestens jedoch jährlich durchgeführt werden. Neue Mitarbeiter müssen vor Aufnahme ihrer Tätigkeit geschult werden. Die Schulungen müssen dokumentiert werden und sollten aktuelle Entwicklungen, Typologien und interne Verfahren abdecken."
                      }
                    ]
                  }
                ].map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-3">
                          <category.icon className="h-6 w-6 text-rose-400" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {category.questions.map((faq, faqIndex) => {
                          const globalIndex = categoryIndex * 10 + faqIndex;
                          const isOpen = openFAQs.includes(globalIndex);
                          
                          return (
                            <motion.div
                              key={faqIndex}
                              className="border border-white/10 rounded-lg overflow-hidden"
                              initial={false}
                            >
                              <button
                                onClick={() => toggleFAQ(globalIndex)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                              >
                                <span className="text-white font-medium pr-4">{faq.q}</span>
                                <motion.div
                                  animate={{ rotate: isOpen ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ChevronDown className="h-5 w-5 text-rose-400 flex-shrink-0" />
                                </motion.div>
                              </button>
                              
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: isOpen ? "auto" : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-4 pt-2">
                                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                                </div>
                              </motion.div>
                            </motion.div>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <Card className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border-rose-500/20 max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <HelpCircle className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Haben Sie weitere Fragen?
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Unsere GwG-Experten stehen Ihnen für eine individuelle Beratung zur Verfügung.
                    </p>
                    <Button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90">
                      Kostenlose Erstberatung vereinbaren
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GeldwaeschegesetzGuide;