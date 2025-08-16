import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  AlertTriangle,
  Euro,
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
  Target,
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
  FileText,
  UserCheck,
  ShieldCheck,
  BadgeCheck,
  Gavel,
  AlertOctagon,
  XCircle,
  DollarSign,
  Fingerprint,
  Key,
  Database,
  Archive,
  Headphones,
  GitBranch,
  Layers,
  Activity,
  Monitor,
  Workflow,
  UserX,
  Scale,
  Timer,
  Network,
  CloudSecurity,
  Clipboard,
  FileSearch,
  MessageCircle,
  Bell,
  Search,
  BookOpen,
  HardDrive,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhistleblowerSystemTool = () => {
  const [reportProcessed, setReportProcessed] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setReportProcessed((prev) => {
          if (prev >= 94) {
            clearInterval(interval);
            return 94;
          }
          return prev + 1;
        });
      }, 25);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const painPoints = [
    {
      icon: Gavel,
      title: 'EU-Richtlinie verpflichtet ab 50 MA',
      stat: 'Seit Dez 2023',
      description: 'Bußgelder bis 50.000€ möglich',
      severity: 'critical',
      details: 'Unternehmen ab 50 Mitarbeitern müssen sichere, vertrauliche Meldekanäle einrichten'
    },
    {
      icon: UserX,
      title: 'Mangelnde Anonymität gefährdet Melder',
      stat: '78% Angst',
      description: 'vor Vergeltungsmaßnahmen',
      severity: 'high',
      details: 'Hinweisgeber zögern ohne garantierte Anonymität und Schutz vor Identitätspreisgabe'
    },
    {
      icon: Clock,
      title: 'Komplexe Verfahren überlasten Teams',
      stat: '120+ Stunden',
      description: 'für manuelle Fallbearbeitung',
      severity: 'medium',
      details: 'Ohne System werden Meldungen ineffizient bearbeitet und Fristen verpasst'
    },
    {
      icon: AlertOctagon,
      title: 'Haftungsrisiken bei Compliance-Lücken',
      stat: '67% Unternehmen',
      description: 'haben unvollständige Systeme',
      severity: 'critical',
      details: 'Rechtsmängel können zu Bußgeldern und Reputationsschäden führen'
    }
  ];

  const features = [
    {
      icon: Lock,
      title: 'Ende-zu-Ende Verschlüsselung',
      description: 'Sichere, anonyme Kommunikation mit modernster Kryptographie',
      details: ['AES-256 Verschlüsselung', 'Zero-Knowledge Architektur', 'Tor-Integration möglich', 'Sichere Dateienübertragung']
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Meldesystem',
      description: 'Verschiedene Wege für Hinweisgeber - online, telefonisch, per Post',
      details: ['Web-Portal', 'Mobile App', 'Hotline 24/7', 'E-Mail Gateway', 'Postweg']
    },
    {
      icon: Workflow,
      title: 'Intelligentes Case Management',
      description: 'Automatisierte Workflows mit KI-unterstützter Fallbearbeitung',
      details: ['Automatische Kategorisierung', 'Eskalations-Management', 'Fristen-Tracking', 'Status-Updates']
    },
    {
      icon: Eye,
      title: 'Transparente Nachverfolgung',
      description: 'Hinweisgeber können den Bearbeitungsstand verfolgen',
      details: ['Anonymer Case-Tracker', 'Status-Benachrichtigungen', 'Feedback-System', 'Dokumentation']
    },
    {
      icon: ShieldCheck,
      title: 'EU-Richtlinien Compliance',
      description: 'Vollständige Umsetzung aller rechtlichen Anforderungen',
      details: ['EU-Whistleblower-Richtlinie', 'DSGVO-konform', 'Nationale Gesetze', 'Audit-ready']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Detaillierte Auswertungen für Management und Compliance',
      details: ['Compliance-Dashboard', 'Trend-Analysen', 'Anonyme Statistiken', 'Regulatorische Reports']
    }
  ];

  const useCases = [
    {
      title: 'Mittelständisches Unternehmen: 90% weniger Aufwand',
      scenario: 'Maschinenbau-Unternehmen mit 200 Mitarbeitern',
      challenge: 'Keine systematische Erfassung von Compliance-Verstößen',
      solution: 'Implementierung digitales Hinweisgebersystem mit 24/7 Hotline',
      results: [
        { metric: 'Setup-Zeit', before: '6 Monate', after: '2 Wochen', improvement: '-92%' },
        { metric: 'Bearbeitungszeit', before: '45 Tage', after: '7 Tage', improvement: '-84%' },
        { metric: 'Meldungen/Jahr', before: '3', after: '18', improvement: '+500%' },
        { metric: 'Compliance-Score', before: '45%', after: '98%', improvement: '+118%' }
      ],
      icon: Building2,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Großkonzern: Internationale Compliance',
      scenario: 'Automobilzulieferer mit 15.000 Mitarbeitern weltweit',
      challenge: 'Heterogene Systeme in verschiedenen Ländern',
      solution: 'Zentrale Plattform mit lokalen Compliance-Anforderungen',
      results: [
        { metric: 'Länder-Abdeckung', before: '60%', after: '100%', improvement: '+67%' },
        { metric: 'Standardisierung', before: '12 Systeme', after: '1 System', improvement: '-92%' },
        { metric: 'Bearbeitungsqualität', before: '67%', after: '96%', improvement: '+43%' },
        { metric: 'Kosten/Jahr', before: '340k€', after: '89k€', improvement: '-74%' }
      ],
      icon: Globe,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Startup: Skalierbare Compliance',
      scenario: 'FinTech-Startup kurz vor Wachstumsphase',
      challenge: 'Vorbereitung auf 50+ Mitarbeiter und Regulierung',
      solution: 'Frühzeitige Integration zukunftssicherer Compliance-Prozesse',
      results: [
        { metric: 'Time-to-Compliance', before: 'Unbekannt', after: '1 Tag', improvement: '100%' },
        { metric: 'Investor-Confidence', before: '70%', after: '95%', improvement: '+36%' },
        { metric: 'Audit-Bereitschaft', before: '0%', after: '100%', improvement: '∞' },
        { metric: 'Skalierbarkeit', before: 'Limited', after: 'Unlimited', improvement: '∞' }
      ],
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const complianceRequirements = [
    {
      title: 'Meldekanäle einrichten',
      description: 'Mindestens ein sicherer, vertraulicher Meldekanal',
      status: 'compliant',
      details: ['Webportal', 'Telefon-Hotline', 'Postweg', 'Persönliche Meldung']
    },
    {
      title: 'Anonymität gewährleisten',
      description: 'Schutz der Identität des Hinweisgebers',
      status: 'compliant',
      details: ['Anonyme Meldungen', 'Pseudonymisierung', 'Verschlüsselte Kommunikation']
    },
    {
      title: 'Fristgerechte Bearbeitung',
      description: '7 Tage Eingangsbestätigung, 3 Monate Bearbeitung',
      status: 'compliant',
      details: ['Automatische Bestätigung', 'Fristen-Tracking', 'Eskalations-Management']
    },
    {
      title: 'Vertraulichkeit sicherstellen',
      description: 'Schutz vor unbefugter Weitergabe',
      status: 'compliant',
      details: ['Zugriffskontrolle', 'Verschlüsselung', 'Audit-Logs', 'Need-to-know']
    },
    {
      title: 'Dokumentation führen',
      description: 'Nachweis ordnungsgemäßer Bearbeitung',
      status: 'compliant',
      details: ['Vollständige Dokumentation', 'Audit-Trail', 'Compliance-Reports']
    },
    {
      title: 'Schutz vor Vergeltung',
      description: 'Verbot von Benachteiligungen',
      status: 'compliant',
      details: ['Überwachungs-Tools', 'Eskalations-Prozesse', 'Rechtliche Unterstützung']
    }
  ];

  const workflows = [
    {
      step: 1,
      title: 'Meldung eingeht',
      description: 'Hinweisgeber erstellt anonyme Meldung über beliebigen Kanal',
      duration: '< 5 Min',
      icon: MessageSquare
    },
    {
      step: 2,
      title: 'Automatische Verarbeitung',
      description: 'KI kategorisiert Meldung und weist zuständige Person zu',
      duration: '< 1 Min',
      icon: Zap
    },
    {
      step: 3,
      title: 'Eingangsbestätigung',
      description: 'Automatische Bestätigung mit Case-ID für Nachverfolgung',
      duration: 'Sofort',
      icon: CheckCircle2
    },
    {
      step: 4,
      title: 'Fachliche Prüfung',
      description: 'Compliance-Team prüft Sachverhalt und leitet Maßnahmen ein',
      duration: '1-7 Tage',
      icon: Search
    },
    {
      step: 5,
      title: 'Feedback & Abschluss',
      description: 'Hinweisgeber erhält Rückmeldung über Ergebnis',
      duration: '≤ 3 Monate',
      icon: Award
    }
  ];

  const stats = [
    { value: '24/7', label: 'Verfügbar', icon: Headphones }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Header />

      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-100 rounded-full mb-6">
              <MessageSquare className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-800 font-medium">EU-Whistleblower-Richtlinie konform</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hinweisgebersystem
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                der Zukunft
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Sichere, anonyme Meldekanäle für Compliance-Verstöße.
              <br className="hidden md:block" />
              EU-Richtlinien-konform, KI-gestützt, in unter 24 Stunden einsatzbereit.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>System Demo</span>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Compliance-Leitfaden</span>
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
                  <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full opacity-20 blur-3xl"
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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hinweisgeberschutz ist Pflicht
            </h2>
            <p className="text-xl text-gray-600">
              Diese Risiken entstehen ohne professionelles System
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
                <p className="text-gray-600 mb-3">{point.description}</p>
                <p className="text-sm text-gray-500">{point.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              So funktioniert unser System
            </h2>
            <p className="text-xl text-gray-600">
              Von der Meldung bis zum Abschluss – vollautomatisiert und rechtssicher
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-600 hidden md:block" />
            
            <div className="space-y-12">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex-1 max-w-md">
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                            {workflow.step}
                          </div>
                          <workflow.icon className="w-8 h-8 text-emerald-600" />
                        </div>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                          {workflow.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{workflow.title}</h3>
                      <p className="text-gray-600">{workflow.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="flex-1 max-w-md">
                    {/* Spacer for alternating layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Umfassender Hinweisgeberschutz
            </h2>
            <p className="text-xl text-gray-600">
              Alle Features für rechtssichere und vertrauensvolle Meldeverfahren
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-emerald-100 rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Erfolgreiche Implementierungen
            </h2>
            <p className="text-xl text-gray-600">
              Wie verschiedene Unternehmen von unserem System profitieren
            </p>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
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
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Messbare Verbesserungen</h4>
                    <div className="space-y-4">
                      {useCase.results.map((result, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl p-4 bg-white">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-medium">{result.metric}</span>
                            <span className="text-emerald-600 font-bold text-sm">{result.improvement}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-red-600">Vorher: {result.before}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-emerald-600">Nachher: {result.after}</span>
                          </div>
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

      {/* Compliance Requirements */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              EU-Richtlinien vollständig erfüllt
            </h2>
            <p className="text-xl text-gray-600">
              Alle rechtlichen Anforderungen automatisch abgedeckt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{requirement.title}</h3>
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                </div>
                <p className="text-gray-600 mb-4">{requirement.description}</p>
                <div className="space-y-2">
                  {requirement.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-20 px-6 bg-gray-50">
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
                  Compliance-Dashboard
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Behalten Sie den Überblick über alle Meldungen, Fristen und 
                  Compliance-Kennzahlen in einem zentralen Dashboard.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <BarChart3 className="w-6 h-6 text-emerald-500" />
                    <div>
                      <div className="text-white font-semibold">Real-time Analytics</div>
                      <div className="text-gray-400 text-sm">Live-Übersicht aller Meldungen und Trends</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Bell className="w-6 h-6 text-emerald-500" />
                    <div>
                      <div className="text-white font-semibold">Automatische Alerts</div>
                      <div className="text-gray-400 text-sm">Benachrichtigungen bei kritischen Fristen</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FileText className="w-6 h-6 text-emerald-500" />
                    <div>
                      <div className="text-white font-semibold">Compliance-Reports</div>
                      <div className="text-gray-400 text-sm">Automatische Berichte für Audits und Behörden</div>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  className="mt-8 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Monitor className="w-5 h-5" />
                  <span>Dashboard Demo</span>
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
                      stroke="url(#gradient-emerald)"
                      strokeWidth="20"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 140}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 140 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 140 * (1 - reportProcessed / 100) }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient-emerald" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="50%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#047857" />
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
                      {reportProcessed}%
                    </motion.div>
                    <div className="text-gray-400 mt-2">Bearbeitungsrate</div>
                    <div className="text-emerald-400 text-sm mt-1">Ø 7 Tage</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-500">0</div>
                    <div className="text-sm text-gray-400">Datenlecks</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Starten Sie heute mit Hinweisgeberschutz
            </h2>
            <p className="text-xl text-emerald-100 mb-12">
              Erfüllen Sie die EU-Whistleblower-Richtlinie und schaffen Sie 
              Vertrauen bei Ihren Mitarbeitern mit unserem sicheren System.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                <span>Demo anfordern</span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-emerald-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-emerald-600/30 transition-all duration-300 flex items-center space-x-2 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Beratung vereinbaren</span>
              </motion.button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-emerald-100">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>EU-Richtlinien-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5" />
                <span>Ende-zu-Ende verschlüsselt</span>
              </div>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-5 h-5" />
                <span>ISO 27001 zertifiziert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhistleblowerSystemTool;