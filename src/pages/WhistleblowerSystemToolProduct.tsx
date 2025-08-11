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
  Briefcase,
  Server,
  Cpu,
  CloudLightning,
  LineChart,
  PieChart,
  BarChart4,
  PhoneCall,
  Smartphone,
  Laptop,
  TabletSmartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhistleblowerSystemToolProduct = () => {
  const [caseResolutionRate, setCaseResolutionRate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setCaseResolutionRate((prev) => {
          if (prev >= 94) {
            clearInterval(interval);
            return 94;
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

  const benefits = [
    {
      icon: Gavel,
      title: 'EU-Richtlinien-konform',
      description: 'Erfüllt alle Anforderungen der EU-Whistleblower-Richtlinie',
      stat: '100% Compliance'
    },
    {
      icon: Timer,
      title: '< 24h Einsatzbereit',
      description: 'Von der Bestellung bis zum ersten Meldekanal',
      stat: 'Plug-and-Play'
    },
    {
      icon: Lock,
      title: 'Ende-zu-Ende verschlüsselt',
      description: 'Höchste Sicherheitsstandards für Anonymität',
      stat: 'Zero-Knowledge'
    },
    {
      icon: Euro,
      title: '90% Kosteneinsparung',
      description: 'vs. interne Entwicklung und Rechtsberatung',
      stat: 'ROI in 30 Tagen'
    }
  ];

  const technicalSpecs = [
    {
      category: 'Sicherheit',
      specs: [
        { label: 'Verschlüsselung', value: 'AES-256 Ende-zu-Ende', icon: Lock },
        { label: 'Anonymisierung', value: 'Zero-Knowledge Architektur', icon: Eye },
        { label: 'ISO Zertifizierung', value: '27001, 27017, 27018', icon: BadgeCheck },
        { label: 'Hosting', value: 'EU-DSGVO konforme Rechenzentren', icon: Server }
      ]
    },
    {
      category: 'Performance',
      specs: [
        { label: 'Verfügbarkeit', value: '99.9% SLA Garantie', icon: Zap },
        { label: 'Response Time', value: '< 200ms global', icon: Clock },
        { label: 'Skalierung', value: 'Auto-Scaling unbegrenzt', icon: TrendingUp },
        { label: 'Backup', value: '3x täglich, 7 Jahre Aufbewahrung', icon: HardDrive }
      ]
    },
    {
      category: 'Compliance',
      specs: [
        { label: 'EU-Richtlinie', value: '2019/1937 vollständig erfüllt', icon: Gavel },
        { label: 'DSGVO', value: 'Art. 6, 7, 32 compliance', icon: ShieldCheck },
        { label: 'Dokumentation', value: 'Vollständiger Audit-Trail', icon: FileText },
        { label: 'Fristen', value: 'Automatisches Fristenmanagement', icon: Calendar }
      ]
    },
    {
      category: 'Integration',
      specs: [
        { label: 'API', value: 'REST API v2.0', icon: Network },
        { label: 'SSO', value: 'SAML, OAuth 2.0, OIDC', icon: Key },
        { label: 'Webhooks', value: 'Real-time Benachrichtigungen', icon: Bell },
        { label: 'Export', value: 'PDF, Excel, JSON, XML', icon: Download }
      ]
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: 'Multi-Channel Meldesystem',
      description: 'Verschiedene Wege für Hinweisgeber - maximale Zugänglichkeit',
      details: [
        'Webportal mit intuitiver Benutzerführung',
        'Mobile App für iOS und Android',
        '24/7 Telefon-Hotline mit Live-Agenten',
        'E-Mail-Gateway mit Verschlüsselung',
        'Briefkasten für analoge Meldungen'
      ],
      highlight: '5 Meldekanäle'
    },
    {
      icon: Lock,
      title: 'Maximale Anonymität',
      description: 'Schutz der Identität mit modernster Kryptographie',
      details: [
        'Tor-Integration für IP-Anonymisierung',
        'Zero-Knowledge Verschlüsselung',
        'Pseudonyme Kommunikation möglich',
        'Sichere Dateiübertragung bis 100MB',
        'Automatische Metadaten-Entfernung'
      ],
      highlight: 'NSA-sicher'
    },
    {
      icon: Workflow,
      title: 'Intelligentes Case Management',
      description: 'KI-gestützte Workflows für effiziente Bearbeitung',
      details: [
        'Automatische Kategorisierung von Meldungen',
        'Smart-Routing an zuständige Personen',
        'Eskalations-Management mit Fristen',
        'Statusverfolgung für Hinweisgeber',
        'Vollständige Dokumentation aller Schritte'
      ],
      highlight: '7 Tage Ø Bearbeitung'
    },
    {
      icon: BarChart3,
      title: 'Compliance Analytics',
      description: 'Detaillierte Auswertungen für Management und Behörden',
      details: [
        'Real-time Compliance-Dashboard',
        'Trend-Analysen und Muster-Erkennung',
        'Anonymisierte Berichterstattung',
        'Regulatorische Reports auf Knopfdruck',
        'KPI-Tracking und Benchmarking'
      ],
      highlight: 'Audit-ready'
    }
  ];


  const testimonials = [];

  const complianceFeatures = [
    {
      title: 'Sichere Meldekanäle',
      description: 'Mindestens ein Kanal muss verfügbar sein',
      status: 'compliant',
      details: ['Webportal 24/7', 'Telefon-Hotline', 'E-Mail verschlüsselt', 'Mobile App', 'Postweg']
    },
    {
      title: 'Anonymität gewährleisten',
      description: 'Schutz der Identität des Hinweisgebers',
      status: 'compliant',
      details: ['Anonyme Meldungen', 'Pseudonymisierung', 'IP-Anonymisierung', 'Metadaten-Schutz']
    },
    {
      title: 'Fristgerechte Bearbeitung',
      description: '7 Tage Bestätigung, 3 Monate Bearbeitung',
      status: 'compliant',
      details: ['Auto-Bestätigung', 'Fristen-Tracking', 'Eskalation', 'Status-Updates']
    },
    {
      title: 'Vertraulichkeit sicherstellen',
      description: 'Need-to-know Prinzip und Zugriffskontrollen',
      status: 'compliant',
      details: ['Rollenbasierte Zugriffe', 'Audit-Logs', 'Verschlüsselung', 'Datenschutz']
    },
    {
      title: 'Dokumentation führen',
      description: 'Nachweis ordnungsgemäßer Bearbeitung',
      status: 'compliant',
      details: ['Vollständiger Audit-Trail', 'Compliance-Reports', 'Behörden-Export']
    },
    {
      title: 'Schutz vor Vergeltung',
      description: 'Verbot von Benachteiligungen überwachen',
      status: 'compliant',
      details: ['Monitoring-Tools', 'Eskalation', 'Legal Support', 'Beweissicherung']
    }
  ];

  const faqs = [
    {
      question: 'Wie schnell ist das Hinweisgebersystem einsatzbereit?',
      answer: 'Das System ist innerhalb von 24 Stunden vollständig konfiguriert und einsatzbereit. Wir übernehmen die komplette Einrichtung und Schulung Ihrer Mitarbeiter. Die meisten Kunden können bereits am nächsten Tag erste Meldungen entgegennehmen.'
    },
    {
      question: 'Ist das System wirklich EU-Richtlinien-konform?',
      answer: 'Ja, unser System erfüllt 100% der EU-Whistleblower-Richtlinie 2019/1937. Es wurde von spezialisierten Compliance-Anwälten entwickelt und wird regelmäßig auf Rechtskonformität geprüft. Wir übernehmen die rechtliche Haftung für die Compliance.'
    },
    {
      question: 'Wie wird die Anonymität der Hinweisgeber geschützt?',
      answer: 'Wir verwenden Zero-Knowledge-Verschlüsselung und können technisch nicht auf die Identität der Hinweisgeber zugreifen. Optional ist Tor-Integration verfügbar. Selbst wir als Anbieter können Hinweisgeber nicht identifizieren - maximaler Schutz durch Design.'
    },
    {
      question: 'Welche Meldekanäle werden unterstützt?',
      answer: 'Das System bietet 5 verschiedene Meldekanäle: Webportal, mobile App, 24/7-Telefon-Hotline, verschlüsselte E-Mail und traditioneller Postweg. Alle Kanäle sind vollständig in das Case-Management integriert.'
    },
    {
      question: 'Wie funktioniert die automatische Fallbearbeitung?',
      answer: 'KI kategorisiert eingehende Meldungen automatisch und weist sie den zuständigen Personen zu. Fristen werden automatisch überwacht, Eskalationen ausgelöst und Status-Updates an Hinweisgeber versandt. Der gesamte Prozess ist auditierbar dokumentiert.'
    },
    {
      question: 'Wie schnell ist die Implementierung?',
      answer: 'Die Implementierung dauert typischerweise 1-2 Wochen. Wir garantieren die erfolgreiche Einrichtung und Compliance-Konformität Ihres Systems.'
    }
  ];

  const integrations = [
    { name: 'Microsoft Teams', logo: '💼', category: 'Communication' },
    { name: 'Slack', logo: '💬', category: 'Communication' },
    { name: 'SAP SuccessFactors', logo: '📊', category: 'HR' },
    { name: 'Workday', logo: '🏢', category: 'HR' },
    { name: 'Azure AD', logo: '🔵', category: 'Identity' },
    { name: 'Okta', logo: '🆔', category: 'Identity' },
    { name: 'ServiceNow', logo: '🛠️', category: 'ITSM' },
    { name: 'Jira', logo: '🎯', category: 'Project Management' },
    { name: 'Salesforce', logo: '☁️', category: 'CRM' },
    { name: 'Zapier', logo: '⚡', category: 'Automation' },
    { name: 'Power BI', logo: '📈', category: 'Analytics' },
    { name: 'Tableau', logo: '📊', category: 'Analytics' }
  ];

  const channels = [
    {
      icon: Monitor,
      name: 'Webportal',
      description: 'Responsive Web-Interface',
      features: ['24/7 verfügbar', 'Multi-Sprachen', 'Datei-Upload bis 100MB', 'Anonymer Chat']
    },
    {
      icon: Smartphone,
      name: 'Mobile App',
      description: 'iOS & Android Apps',
      features: ['Offline-Modus', 'Push-Benachrichtigungen', 'Biometrische Sicherheit', 'Voice-to-Text']
    },
    {
      icon: PhoneCall,
      name: '24/7 Hotline',
      description: 'Telefon-Support',
      features: ['Mehrsprachig', 'Live-Agenten', 'Aufzeichnung optional', 'Sofort-Weiterleitung']
    },
    {
      icon: Mail,
      name: 'E-Mail Gateway',
      description: 'Verschlüsselte E-Mails',
      features: ['PGP-Verschlüsselung', 'Auto-Anonymisierung', 'Spam-Schutz', 'Delivery-Bestätigung']
    }
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                <Gavel className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-800 font-medium text-sm">EU-Richtlinien-konform seit Dez 2023</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hinweisgebersystem
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  das schützt
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Das sicherste Hinweisgebersystem Europas. Ende-zu-Ende verschlüsselt, 
                EU-Richtlinien-konform, in unter 24 Stunden einsatzbereit.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <benefit.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">{benefit.title}</div>
                    <div className="text-xs text-gray-500">{benefit.stat}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Jetzt starten</span>
                </motion.button>
                
                <motion.button 
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Demo buchen</span>
                </motion.button>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                ✓ Keine Kreditkarte erforderlich • ✓ EU-Haftungsübernahme • ✓ 24h Setup-Garantie
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Case Resolution Rate</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-500">Live</span>
                  </div>
                </div>
                
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="128"
                      cy="128"
                      r="100"
                      stroke="#f3f4f6"
                      strokeWidth="16"
                      fill="none"
                    />
                    <motion.circle
                      cx="128"
                      cy="128"
                      r="100"
                      stroke="url(#gradient-emerald)"
                      strokeWidth="16"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 100}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 100 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 100 * (1 - caseResolutionRate / 100) }}
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
                      className="text-4xl font-bold text-gray-900"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                      transition={{ delay: 0.5 }}
                    >
                      {caseResolutionRate}%
                    </motion.div>
                    <div className="text-sm text-gray-500">Erfolgsrate</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-emerald-600">7 Tage</div>
                    <div className="text-xs text-gray-500">Ø Bearbeitung</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">99.9%</div>
                    <div className="text-xs text-gray-500">Uptime</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">2,000+</div>
                    <div className="text-xs text-gray-500">Unternehmen</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Channels Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vier sichere Meldekanäle
            </h2>
            <p className="text-xl text-gray-600">
              Hinweisgeber können den für sie passenden Kanal wählen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-emerald-100 rounded-xl mb-4 w-fit">
                  <channel.icon className="w-8 h-8 text-emerald-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.name}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                
                <div className="space-y-2">
                  {channel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Funktionen
            </h2>
            <p className="text-xl text-gray-600">
              Alles was Sie für professionellen Hinweisgeberschutz benötigen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <feature.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                      {feature.highlight}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
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
              100% EU-Richtlinien-konform
            </h2>
            <p className="text-xl text-gray-600">
              Alle Anforderungen der EU-Whistleblower-Richtlinie erfüllt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((requirement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-green-200"
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

      {/* Technical Specifications */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technische Spezifikationen
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-Grade Security und Performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <spec.icon className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{spec.label}</div>
                        <div className="text-sm text-gray-600">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Results */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bewährte Ergebnisse
            </h2>
            <p className="text-xl text-gray-600">
              Echte Verbesserungen bei echten Unternehmen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-emerald-100 rounded-full">
                    <testimonial.avatar className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.company}</h3>
                    <p className="text-gray-600">{testimonial.industry} • {testimonial.size}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="space-y-4">
                  {testimonial.results.map((result, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">{result.metric}</span>
                        <span className="text-emerald-600 font-bold">{result.improvement}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-red-600">Vorher: {result.before}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <span className="text-emerald-600">Nachher: {result.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nahtlose Integrationen
            </h2>
            <p className="text-xl text-gray-600">
              Funktioniert mit allen Enterprise-Tools, die Sie bereits nutzen
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{integration.logo}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{integration.name}</h3>
                <p className="text-xs text-gray-500">{integration.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Häufige Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Alles was Sie über unser Hinweisgebersystem wissen müssen
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Starten Sie heute mit professionellem Hinweisgeberschutz
            </h2>
            <p className="text-xl text-emerald-100 mb-12">
              Erfüllen Sie die EU-Richtlinien und schaffen Sie Vertrauen mit einem professionellen System - in unter 24 Stunden.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <motion.button
                className="px-12 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-6 h-6" />
                <span>Jetzt starten</span>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-emerald-100">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>30 Tage Geld-zurück-Garantie</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24h Setup-Garantie</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Award className="w-5 h-5" />
                <span>EU-Haftungsübernahme</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhistleblowerSystemToolProduct;