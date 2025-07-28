import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Cookie,
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
  Brain,
  Code,
  Smartphone,
  Monitor,
  Layers,
  GitBranch,
  Database,
  FileText,
  Percent,
  Activity,
  MousePointer,
  Fingerprint,
  UserCheck,
  ShieldCheck,
  BadgeCheck,
  Gavel,
  AlertOctagon,
  TrendingDown,
  XCircle,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieManagementTool = () => {
  const [consentRate, setConsentRate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const interval = setInterval(() => {
        setConsentRate((prev) => {
          if (prev >= 73) {
            clearInterval(interval);
            return 73;
          }
          return prev + 1;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const painPoints = [
    {
      icon: Euro,
      title: 'DSGVO-Bußgelder vermeiden',
      stat: 'bis zu 20 Mio. €',
      description: 'oder 4% des Jahresumsatzes',
      severity: 'critical',
      details: 'Fehlende oder unvollständige Cookie-Einwilligungen können zu existenzbedrohenden Strafen führen'
    },
    {
      icon: TrendingDown,
      title: 'Conversion-Verluste minimieren',
      stat: '-47% Traffic',
      description: 'durch schlechte Cookie-Banner',
      severity: 'high',
      details: 'Störende oder komplizierte Cookie-Banner vergraulen Besucher und reduzieren Conversions massiv'
    },
    {
      icon: Clock,
      title: 'Implementierungsaufwand reduzieren',
      stat: '200+ Stunden',
      description: 'für manuelle Implementierung',
      severity: 'medium',
      details: 'Technische Umsetzung, Rechtsberatung und laufende Updates verschlingen wertvolle Ressourcen'
    },
    {
      icon: AlertOctagon,
      title: 'Rechtsunsicherheit eliminieren',
      stat: '89% Unternehmen',
      description: 'sind nicht vollständig compliant',
      severity: 'critical',
      details: 'Sich ändernde Rechtslage und komplexe Anforderungen überfordern viele Unternehmen'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'KI-gestützte Cookie-Erkennung',
      description: 'Automatische Kategorisierung aller Cookies auf Ihrer Website',
      details: ['Scanning aller Subdomains', 'Kategorisierung nach DSGVO', 'Echtzeit-Updates', 'Vendor-Mapping']
    },
    {
      icon: MousePointer,
      title: 'Smart Consent Management',
      description: 'Granulare Einwilligungsverwaltung mit höchsten Consent-Raten',
      details: ['Granulare Kategorien', 'IAB TCF 2.2 Standard', 'Google Consent Mode v2', 'Custom Templates']
    },
    {
      icon: Code,
      title: 'One-Click Integration',
      description: 'Plug-and-Play für alle gängigen CMS und Frameworks',
      details: ['WordPress Plugin', 'JavaScript SDK', 'React/Vue Components', 'API-Integration']
    },
    {
      icon: ShieldCheck,
      title: 'Rechtssichere Templates',
      description: 'Von Anwälten geprüfte Banner-Texte in 25+ Sprachen',
      details: ['DSGVO-konform', 'ePrivacy-Richtlinie', 'Länderspezifisch', 'Automatische Updates']
    },
    {
      icon: BarChart3,
      title: 'Compliance Analytics',
      description: 'Detaillierte Insights zu Consent-Raten und Compliance-Status',
      details: ['Real-time Dashboard', 'Consent-Rate Tracking', 'A/B-Testing', 'Audit-Reports']
    },
    {
      icon: Globe,
      title: 'Multi-Domain Support',
      description: 'Zentrale Verwaltung für alle Ihre Websites und Domains',
      details: ['Cross-Domain Sync', 'Bulk-Management', 'White-Label Option', 'Multi-Tenant Architecture']
    }
  ];

  const useCases = [
    {
      title: 'E-Commerce: 35% höhere Consent-Raten',
      scenario: 'Online-Shop mit 2 Mio. monatlichen Besuchern',
      challenge: 'Standard Cookie-Banner mit nur 38% Akzeptanzrate',
      solution: 'Smart Banner mit A/B-Testing und optimierter UX',
      results: [
        { metric: 'Consent-Rate', before: '38%', after: '73%', improvement: '+92%' },
        { metric: 'Bounce-Rate', before: '67%', after: '52%', improvement: '-22%' },
        { metric: 'Conversion-Rate', before: '2.1%', after: '2.8%', improvement: '+33%' },
        { metric: 'Setup-Zeit', before: '3 Wochen', after: '15 Min', improvement: '-99%' }
      ],
      icon: Building2,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'SaaS-Plattform: Compliance-Automatisierung',
      scenario: 'B2B-Software mit internationalen Kunden',
      challenge: 'Komplexe Compliance-Anforderungen in verschiedenen Ländern',
      solution: 'Automatische Geo-Lokalisierung und länderspezifische Banner',
      results: [
        { metric: 'Compliance-Score', before: '67%', after: '99%', improvement: '+48%' },
        { metric: 'Legal-Aufwand', before: '40h/Monat', after: '2h/Monat', improvement: '-95%' },
        { metric: 'Audit-Bereitschaft', before: '3 Tage', after: 'Sofort', improvement: '100%' },
        { metric: 'Bußgeld-Risiko', before: 'Hoch', after: 'Minimal', improvement: '-90%' }
      ],
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Medien-Website: Performance-Optimierung',
      scenario: 'News-Portal mit hoher Werbe-Dichte',
      challenge: 'Cookie-Banner verlangsamte Ladezeiten um 2,3 Sekunden',
      solution: 'Asynchrone Lazy-Loading und CDN-Optimierung',
      results: [
        { metric: 'Ladezeit', before: '4.8s', after: '2.1s', improvement: '-56%' },
        { metric: 'Core Web Vitals', before: 'Rot', after: 'Grün', improvement: '100%' },
        { metric: 'Ad-Revenue', before: '-23%', after: '+12%', improvement: '+45%' },
        { metric: 'SEO-Ranking', before: 'Position 15', after: 'Position 8', improvement: '+87%' }
      ],
      icon: Globe,
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const technologies = [
    {
      category: 'Frontend Frameworks',
      items: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js'],
      icon: Code
    },
    {
      category: 'CMS Systeme',
      items: ['WordPress', 'Drupal', 'Joomla', 'TYPO3', 'Shopify', 'Magento'],
      icon: Layers
    },
    {
      category: 'E-Commerce',
      items: ['WooCommerce', 'Shopware', 'PrestaShop', 'OpenCart', 'BigCommerce', 'Salesforce'],
      icon: Building2
    },
    {
      category: 'Tag Manager',
      items: ['Google Tag Manager', 'Adobe Launch', 'Tealium', 'Segment', 'Matomo', 'Custom Scripts'],
      icon: Settings
    }
  ];

  const complianceFeatures = [
    {
      title: 'DSGVO Art. 7 Compliance',
      description: 'Freiwillige, eindeutige und informierte Einwilligung',
      status: 'compliant',
      details: ['Klare Sprache', 'Granulare Kontrolle', 'Widerrufsmöglichkeit', 'Dokumentation']
    },
    {
      title: 'ePrivacy Directive',
      description: 'Strikte Cookie-Richtlinien für EU-Länder',
      status: 'compliant',
      details: ['Opt-in vor Cookie-Setzung', 'Funktionale Cookie-Ausnahmen', 'Transparente Information']
    },
    {
      title: 'IAB Transparency Framework',
      description: 'Standardisierte Einwilligungsverwaltung für Werbung',
      status: 'compliant',
      details: ['TCF 2.2 zertifiziert', 'Vendor-Listen Integration', 'Global Privacy Platform']
    },
    {
      title: 'Google Consent Mode v2',
      description: 'Optimierte Datenerfassung bei verweigerten Cookies',
      status: 'compliant',
      details: ['Advanced Implementation', 'Analytics Modeling', 'Conversion Tracking']
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Websites', icon: Globe },
    { value: '99.8%', label: 'Uptime', icon: Shield },
    { value: '< 100ms', label: 'Load Time', icon: Zap },
    { value: '24/7', label: 'Support', icon: Settings }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '29€',
      period: '/Monat',
      description: 'Für kleine Websites bis 10.000 Besucher/Monat',
      features: [
        'Cookie-Scanner & Banner',
        'DSGVO-konforme Templates',
        'Basic Analytics',
        'E-Mail Support',
        '1 Domain'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '99€',
      period: '/Monat',
      description: 'Für wachsende Unternehmen bis 100.000 Besucher/Monat',
      features: [
        'Alle Starter Features',
        'A/B-Testing',
        'Multi-Domain Support (5)',
        'Advanced Analytics',
        'Custom Branding',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Für große Unternehmen mit individuellen Anforderungen',
      features: [
        'Alle Business Features',
        'Unlimited Domains',
        'White-Label Lösung',
        'SLA Garantie',
        'Dedicated Account Manager',
        'Custom Integrations'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Header />

      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10" />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-100 rounded-full mb-6">
              <Cookie className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 font-medium">DSGVO-konformes Cookie Management</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Cookie-Banner
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                neu gedacht
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Rechtssichere Cookie-Verwaltung mit höchsten Consent-Raten.
              <br className="hidden md:block" />
              KI-gestützt, DSGVO-konform, in unter 5 Minuten implementiert.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Cookie-Audit (kostenlos)</span>
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
                  <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-3xl"
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
              Cookie-Compliance ist komplex
            </h2>
            <p className="text-xl text-gray-600">
              Diese Herausforderungen kennen Sie sicher auch
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

      {/* Solution Features */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Die smarteste Cookie-Lösung
            </h2>
            <p className="text-xl text-gray-600">
              KI-gestützt, rechtssicher und conversion-optimiert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-orange-100 rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-orange-600" />
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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Messbare Erfolge unserer Kunden
            </h2>
            <p className="text-xl text-gray-600">
              Wie Unternehmen ihre Cookie-Compliance optimiert haben
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
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Vorher vs. Nachher</h4>
                    <div className="space-y-4">
                      {useCase.results.map((result, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 font-medium">{result.metric}</span>
                            <span className="text-green-600 font-bold text-sm">{result.improvement}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-red-600">Vorher: {result.before}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-green-600">Nachher: {result.after}</span>
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

      {/* Compliance Dashboard */}
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
                  Live Consent-Rate Dashboard
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Verfolgen Sie in Echtzeit, wie sich Ihre Cookie-Banner-Optimierungen 
                  auf die Consent-Raten auswirken.
                </p>
                
                <div className="space-y-6">
                  {complianceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{feature.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {feature.details.map((detail, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="mt-8 px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Live Dashboard öffnen</span>
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
                      stroke="url(#gradient-orange)"
                      strokeWidth="20"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 140}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 140 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 140 * (1 - consentRate / 100) }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#dc2626" />
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
                      {consentRate}%
                    </motion.div>
                    <div className="text-gray-400 mt-2">Consent-Rate</div>
                    <div className="text-green-400 text-sm mt-1">+35% vs. Standard</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-500">2.1s</div>
                    <div className="text-sm text-gray-400">Ladezeit</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-500">99.8%</div>
                    <div className="text-sm text-gray-400">Compliance</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-500">47</div>
                    <div className="text-sm text-gray-400">A/B-Tests</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-500">25</div>
                    <div className="text-sm text-gray-400">Sprachen</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Integriert in Minuten
            </h2>
            <p className="text-xl text-gray-600">
              Kompatibel mit allen gängigen Technologien und Plattformen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex p-3 bg-orange-100 rounded-full mb-4">
                  <tech.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transparent & Fair
            </h2>
            <p className="text-xl text-gray-600">
              Preise, die mit Ihrem Erfolg skalieren
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl relative ${
                  plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.name === 'Enterprise' ? 'Kontakt aufnehmen' : 'Jetzt starten'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bereit für rechtssichere Cookies?
            </h2>
            <p className="text-xl text-orange-100 mb-12">
              Starten Sie noch heute mit unserem Cookie Management Tool und erhöhen Sie 
              Ihre Consent-Raten um bis zu 73%.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                <span>Kostenlos testen (14 Tage)</span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-orange-600/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-orange-600/30 transition-all duration-300 flex items-center space-x-2 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Demo vereinbaren</span>
              </motion.button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-orange-100">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>5 Min Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>IAB TCF 2.2</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookieManagementTool;