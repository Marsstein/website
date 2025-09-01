import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building2, 
  ArrowLeft,
  Download,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Globe,
  Shield,
  FileText,
  ExternalLink,
  Target,
  Lightbulb,
  Star,
  Calendar,
  Award,
  TrendingUp,
  Lock,
  Eye,
  Settings,
  Zap,
  Brain,
  Search,
  Filter,
  Copy,
  Share2,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Flag,
  Info,
  HelpCircle,
  ArrowRight,
  Euro,
  Activity,
  Database,
  MessageCircle,
  BarChart3,
  PieChart,
  Code,
  Smartphone,
  Monitor,
  Tablet,
  X,
  Check,
  Edit3,
  Save,
  Plus,
  Trash2,
  Scale,
  Gavel,
  UserCheck,
  UserX,
  ShieldCheck,
  ShieldX,
  Server,
  Wifi,
  WifiOff,
  MapPin,
  Users,
  ShoppingCart,
  Package,
  CreditCard,
  Mail,
  Bell,
  MousePointer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const AmazonLuxembourgCase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copySuccess, setCopySuccess] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const violationBreakdown = [
    {
      article: "Art. 6 DSGVO",
      violation: "Fehlende Rechtsgrundlage für Werbung",
      amount: "€290 Millionen",
      percentage: 38.9,
      description: "Personalisierte Werbung ohne gültige Einwilligung oder berechtigtes Interesse",
      examples: [
        "Targeted Advertising ohne Consent",
        "Cross-Device Tracking für Werbezwecke",
        "Profiling für Produktempfehlungen",
        "Behavioral Advertising auf Basis von Kaufhistorie"
      ]
    },
    {
      article: "Art. 5 DSGVO",
      violation: "Verstoß gegen Grundsätze der Datenverarbeitung",
      amount: "€185 Millionen",
      percentage: 24.8,
      description: "Mangelnde Transparenz und übermäßige Datensammlung",
      examples: [
        "Intransparente Datenverarbeitungszwecke",
        "Sammlung nicht erforderlicher Daten",
        "Fehlende Datenminimierung",
        "Unklare Aufbewahrungsfristen"
      ]
    },
    {
      article: "Art. 12-14 DSGVO",
      violation: "Unzureichende Informationspflichten",
      amount: "€150 Millionen",
      percentage: 20.1,
      description: "Mangelhafte Aufklärung der Betroffenen über Datenverarbeitung",
      examples: [
        "Unverständliche Datenschutzerklärungen",
        "Versteckte Informationen über Tracking",
        "Fehlende Details zu Verarbeitungszwecken",
        "Unklare Widerspruchsmöglichkeiten"
      ]
    },
    {
      article: "Art. 25 DSGVO",
      violation: "Privacy by Design Verstöße",
      amount: "€121 Millionen",
      percentage: 16.2,
      description: "Mangelhafte Implementierung datenschutzfreundlicher Voreinstellungen",
      examples: [
        "Tracking-Standards aktiviert",
        "Opt-out statt Opt-in Design",
        "Dark Patterns in der Nutzeroberfläche",
        "Komplizierte Datenschutz-Einstellungen"
      ]
    }
  ];

  const advertisingAnalysis = [
    {
      category: "Personalisierte Werbung",
      icon: Target,
      color: "from-red-500 to-orange-500",
      currentPractice: [
        "Automatische Profilierung basierend auf Kaufverhalten",
        "Cross-Platform Tracking ohne explizite Einwilligung",
        "Verwendung von Third-Party Daten für Targeting",
        "Algorithmic Decision Making für Ad Delivery"
      ],
      requiredChanges: [
        "Explizite Einwilligung für jede Form von Targeting",
        "Granulare Kontrolle über Werbeeinstellungen",
        "Opt-in für Cross-Device Tracking",
        "Transparente Algorithmus-Erklärungen"
      ],
      complianceLevel: "KRITISCH"
    },
    {
      category: "Datensammlung für Marketing",
      icon: Database,
      color: "from-blue-500 to-indigo-500",
      currentPractice: [
        "Umfangreiche Sammlung von Verhaltensdaten",
        "Speicherung detaillierter Shopping-Patterns",
        "Analyse von Browsing-Verhalten",
        "Verknüpfung verschiedener Nutzerkonten"
      ],
      requiredChanges: [
        "Datenminimierung auf erforderliche Parameter",
        "Separate Einwilligung für verschiedene Zwecke",
        "Regelmäßige Löschung nicht mehr benötigter Daten",
        "Isolierte Verarbeitung verschiedener Services"
      ],
      complianceLevel: "HOCH"
    },
    {
      category: "Consent Management",
      icon: UserCheck,
      color: "from-purple-500 to-pink-500",
      currentPractice: [
        "Komplexe und unübersichtliche Einstellungen",
        "Standard-Aktivierung von Marketing-Features",
        "Erschwerte Widerrufsmöglichkeiten",
        "Versteckte Opt-out Optionen"
      ],
      requiredChanges: [
        "Einfache und zugängliche Consent-Verwaltung",
        "Privacy-friendly Defaults",
        "Ein-Klick Widerruf aller Einwilligungen",
        "Proaktive Consent-Auffrischung"
      ],
      complianceLevel: "HOCH"
    },
    {
      category: "Transparenz & Information",
      icon: Eye,
      color: "from-emerald-500 to-teal-500",
      currentPractice: [
        "Technische und schwer verständliche Datenschutztexte",
        "Versteckte Informationen über Datennutzung",
        "Unklare Zweckbindung der Datenverarbeitung",
        "Fehlende Informationen über Algorithmen"
      ],
      requiredChanges: [
        "Verständliche Erklärungen in einfacher Sprache",
        "Dashboard mit aktueller Datennutzung",
        "Detaillierte Zweckbeschreibungen",
        "Transparenz über Entscheidungsalgorithmen"
      ],
      complianceLevel: "MITTEL"
    }
  ];

  const industryImpacts = [
    {
      sector: "E-Commerce Plattformen",
      icon: ShoppingCart,
      challenges: [
        "Personalisierte Produktempfehlungen rechtlich absichern",
        "Cross-Selling und Up-Selling DSGVO-konform gestalten",
        "Behavioral Analytics für UX-Optimierung",
        "Dynamic Pricing und Personalisierung"
      ],
      solutions: [
        "Explizite Einwilligung für Recommendation Engines",
        "Transparente Preisgestaltung ohne Diskriminierung",
        "Anonymisierte A/B Tests und UX Analytics",
        "Pseudonymisierte Conversion-Optimierung"
      ],
      complianceActions: [
        "Consent Management für alle Marketing-Features",
        "Regular Audits der Recommendation Algorithms",
        "Implementierung von Privacy-by-Design",
        "Customer Data Platform DSGVO-Compliance"
      ]
    },
    {
      sector: "Digital Marketing Agencies",
      icon: MessageCircle,
      challenges: [
        "Cross-Client Data Sharing und Insights",
        "Attribution Modeling und Customer Journey",
        "Programmatic Advertising und Real-Time Bidding",
        "Performance Marketing ohne Tracking"
      ],
      solutions: [
        "Isolated Data Processing per Client",
        "First-Party Data Strategies entwickeln",
        "Contextual Advertising statt Behavioral",
        "Privacy-Preserving Attribution Models"
      ],
      complianceActions: [
        "Data Processing Agreements mit allen Clients",
        "Consent Management Platform Integration",
        "Regular Training für Marketing Teams",
        "Legal Review aller Campaign Setups"
      ]
    },
    {
      sector: "AdTech & MarTech",
      icon: Target,
      challenges: [
        "Real-Time Bidding ohne Third-Party Cookies",
        "Cross-Device Identity Resolution",
        "Audience Segmentation und Profiling",
        "Attribution ohne umfassendes Tracking"
      ],
      solutions: [
        "Privacy-Preserving Technologies (Differential Privacy)",
        "Cohort-based Targeting statt Individual Profiling",
        "Contextual Signals für Ad Targeting",
        "Statistical Attribution Models"
      ],
      complianceActions: [
        "Complete Platform Architecture Review",
        "Implementation von Privacy-Enhancing Technologies",
        "Transparency Reports für Data Usage",
        "Regular Compliance Audits und Zertifizierungen"
      ]
    }
  ];

  const complianceFramework = [
    {
      phase: "Immediate Response (0-30 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      legalActions: [
        "Rechtsberatung für ähnliche Compliance-Risiken",
        "Internal Investigation der eigenen Werbepraktiken",
        "Risk Assessment für alle Marketing-Aktivitäten",
        "Stakeholder Communication über potentielle Auswirkungen"
      ],
      technicalActions: [
        "Audit aller Targeting und Profiling-Systeme",
        "Review der Consent Management Implementation",
        "Analysis der Data Collection und Processing",
        "Documentation aller Advertising-Datenflüsse"
      ]
    },
    {
      phase: "Compliance Implementation (1-6 Monate)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      legalActions: [
        "Update aller Datenschutzerklärungen",
        "Revision der Terms of Service",
        "New Consent Mechanisms für Marketing",
        "Legal Basis Review für alle Processing Activities"
      ],
      technicalActions: [
        "Implementation granularer Consent Controls",
        "Rebuild von Recommendation Engines",
        "Privacy-by-Design für neue Features",
        "Data Minimization in bestehenden Systemen"
      ]
    },
    {
      phase: "Long-term Strategy (6-24 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      legalActions: [
        "Continuous Compliance Monitoring",
        "Regular Legal Reviews und Updates",
        "Industry Best Practice Benchmarking",
        "Regulatory Relationship Management"
      ],
      technicalActions: [
        "Advanced Privacy-Enhancing Technologies",
        "Machine Learning für Privacy-Preserving Analytics",
        "Zero-Party Data Strategies",
        "Federated Learning für Insights ohne Data Sharing"
      ]
    }
  ];

  const technicalSolutions = `// Privacy-First E-Commerce Analytics
// 1. Consent-Aware Tracking

class PrivacyFirstAnalytics {
  constructor() {
    this.consentManager = new ConsentManager();
    this.analytics = new AnalyticsEngine();
  }
  
  // Granular consent checking
  canTrack(purpose) {
    return this.consentManager.hasConsent(purpose);
  }
  
  // Product recommendations with privacy
  getRecommendations(userId, consentLevel) {
    if (consentLevel === 'full') {
      return this.analytics.personalizedRecommendations(userId);
    } else if (consentLevel === 'contextual') {
      return this.analytics.contextualRecommendations();
    } else {
      return this.analytics.popularProducts();
    }
  }
  
  // Privacy-preserving conversion tracking
  trackConversion(eventData) {
    if (this.canTrack('analytics')) {
      // Full tracking with user consent
      this.analytics.trackEvent(eventData);
    } else {
      // Aggregated tracking only
      this.analytics.trackAggregated({
        type: eventData.type,
        value: eventData.value,
        timestamp: eventData.timestamp
        // No user identification
      });
    }
  }
}

// 2. GDPR-Compliant Marketing Automation

class ComplianceFirstMarketing {
  constructor() {
    this.segments = new SegmentEngine();
    this.campaigns = new CampaignManager();
  }
  
  // Cohort-based targeting (no individual profiling)
  createCohorts(criteria) {
    return this.segments.createAnonymousCohorts({
      minCohortSize: 1000, // k-anonymity
      criteria: criteria,
      retentionPeriod: '6months'
    });
  }
  
  // Contextual advertising
  getContextualAds(pageContext, userPreferences = null) {
    const baseAds = this.campaigns.getContextualMatch(pageContext);
    
    if (userPreferences && this.hasMarketingConsent()) {
      return this.campaigns.personalizeAds(baseAds, userPreferences);
    }
    
    return baseAds;
  }
  
  // Privacy-preserving A/B testing
  runPrivateABTest(testConfig) {
    return {
      assignment: this.getRandomAssignment(),
      // No user tracking, statistical inference only
      results: this.analytics.statisticalInference(testConfig)
    };
  }
}

// 3. Enhanced Consent Management

class GDPRConsentManager {
  constructor() {
    this.purposes = [
      'essential',
      'analytics', 
      'marketing',
      'personalization'
    ];
  }
  
  // Granular consent collection
  requestConsent(purposes) {
    return this.showConsentDialog({
      purposes: purposes,
      design: 'privacy-friendly', // No dark patterns
      defaultState: 'denied', // Privacy by default
      easyWithdraw: true
    });
  }
  
  // Consent refresh mechanism
  checkConsentExpiry() {
    const consents = this.getAllConsents();
    const expiredConsents = consents.filter(
      consent => consent.timestamp < Date.now() - (6 * 30 * 24 * 60 * 60 * 1000)
    );
    
    if (expiredConsents.length > 0) {
      this.requestConsentRefresh(expiredConsents);
    }
  }
  
  // Consent dashboard for users
  renderConsentDashboard() {
    return {
      currentConsents: this.getAllConsents(),
      dataUsage: this.getDataUsageReport(),
      withdrawOptions: this.getWithdrawOptions(),
      downloadData: this.getDataExportOptions()
    };
  }
}`;

  const timeline = [
    {
      date: "30. Juli 2021",
      event: "CNPD verhängt Rekord-Bußgeld",
      description: "€746 Millionen gegen Amazon wegen DSGVO-Verstößen",
      type: "critical"
    },
    {
      date: "August 2021",
      event: "Amazon kündigt Berufung an",
      description: "Rechtsmittel gegen die Entscheidung eingelegt",
      type: "response"
    },
    {
      date: "September 2021",
      event: "Branchenweite Unsicherheit",
      description: "Andere E-Commerce Unternehmen überprüfen ihre Praktiken",
      type: "impact"
    },
    {
      date: "2022",
      event: "Verstärkte Kontrollen",
      description: "EU-Behörden fokussieren auf Advertising Compliance",
      type: "enforcement"
    },
    {
      date: "2023-2024",
      event: "Neue Standards etabliert",
      description: "Branchenweite Anpassung der Marketing Praktiken",
      type: "ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOHead
        title="Amazon Luxemburg 2021 – CNPD Bußgeld-Entscheidung 746M€"
        description="Amazon Luxemburg 2021 CNPD-Bußgeld: Datenverarbeitungs-Verletzungen, E-Commerce Compliance, DSGVO-Enforcement. ✓ Fine Analysis ✓ Compliance Lessons ✓ Enforcement Trends."
        canonical="/wissen/rechtsprechung/amazon-luxemburg-2021"
        keywords="Amazon, Luxemburg, CNPD, Bußgeld, DSGVO, E-Commerce, Compliance, Datenverarbeitung, 746 Millionen"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Amazon Luxemburg 2021 – CNPD Bußgeld-Entscheidung 746M€",
          "description": "Analyse des €746 Millionen DSGVO-Bußgelds gegen Amazon durch die luxemburgische CNPD",
          "author": {
            "@type": "Organization",
            "name": "Marsstein"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Marsstein",
            "logo": {
              "@type": "ImageObject",
              "url": "https://marsstein.ai/logo.png"
            }
          },
          "datePublished": "2021-07-30",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.ai/wissen/rechtsprechung/amazon-luxemburg-2021"
          }
        }}
      />
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button asChild variant="outline" className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10">
              <Link to="/wissen/rechtsprechung" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Rechtsprechung
              </Link>
            </Button>
          </motion.div>

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
              className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/10 backdrop-blur-sm rounded-full mb-8 border border-indigo-500/20"
            >
              <Building2 className="h-5 w-5 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-300">E-Commerce Compliance</span>
              <Euro className="h-5 w-5 text-yellow-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Amazon</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Luxembourg
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                €746 Millionen
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Das zweitgrößte DSGVO-Bußgeld der Geschichte für 
              <span className="font-semibold text-indigo-300"> rechtswidrige Werbepraktiken</span> und dessen 
              Auswirkungen auf E-Commerce
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2">
                <Euro className="h-4 w-4 mr-2" />
                €746 Mio. Bußgeld
              </Badge>
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                30. Juli 2021
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                CNPD Luxembourg
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Table of Contents */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 id="inhaltsverzeichnis" className="text-3xl font-bold text-white mb-6" style={{ scrollMarginTop: '100px' }}>Inhaltsverzeichnis</h2>
            <nav aria-label="Inhaltsverzeichnis" className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <a href="#bussgeld-uebersicht" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-indigo-400 font-medium">1.</span> Bußgeld-Übersicht
                  </a>
                  <a href="#violation-analysis" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-indigo-400 font-medium">2.</span> Verletzungsanalyse
                  </a>
                  <a href="#compliance-solutions" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-indigo-400 font-medium">3.</span> Compliance-Lösungen
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#ecommerce-impact" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-indigo-400 font-medium">4.</span> E-Commerce Impact
                  </a>
                  <a href="#branchen-guidance" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-indigo-400 font-medium">5.</span> Branchen-Guidance
                  </a>
                  <a href="#enforcement-trends" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-indigo-400 font-medium">6.</span> Enforcement-Trends
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl gap-2 md:gap-0">
                <TabsTrigger value="overview" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Überblick</span>
                  <span className="md:hidden">Info</span>
                </TabsTrigger>
                <TabsTrigger value="violations" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Verstöße</span>
                  <span className="md:hidden">Fälle</span>
                </TabsTrigger>
                <TabsTrigger value="advertising" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Werbepraktiken</span>
                  <span className="md:hidden">Ads</span>
                </TabsTrigger>
                <TabsTrigger value="industry" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Branchenimpact</span>
                  <span className="md:hidden">Sektor</span>
                </TabsTrigger>
                <TabsTrigger value="compliance" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Compliance</span>
                  <span className="md:hidden">Guide</span>
                </TabsTrigger>
                <TabsTrigger value="technical" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Lösungen</span>
                  <span className="md:hidden">Tech</span>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-indigo-500/30">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h3 id="bussgeld-uebersicht" className="text-2xl font-bold text-white mb-6" style={{ scrollMarginTop: '100px' }}>Verfahrensübersicht</h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Am 30. Juli 2021 verhängte die luxemburgische Datenschutzbehörde (CNPD) 
                            ein Bußgeld von 746 Millionen Euro gegen Amazon Europe Core S.à r.l. 
                            Das war zu diesem Zeitpunkt das höchste DSGVO-Bußgeld der Geschichte.
                          </p>
                          <p>
                            Der Hauptvorwurf bezog sich auf rechtswidrige Verarbeitung personenbezogener 
                            Daten für Werbezwecke ohne angemessene Rechtsgrundlage. Amazon sammelte und 
                            nutzte umfangreiche Nutzerdaten für personalisierte Werbung und 
                            Produktempfehlungen ohne ausreichende Einwilligung.
                          </p>
                          <p>
                            Diese Entscheidung setzte neue Standards für E-Commerce Unternehmen und 
                            führte zu einer branchenweiten Überprüfung von Advertising-Praktiken 
                            und Consent-Management-Systemen.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Verfahren Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Behörde:</span>
                              <span className="text-white font-semibold">CNPD Luxembourg</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Datum:</span>
                              <span className="text-white font-semibold">30.07.2021</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Betroffenes Unternehmen:</span>
                              <span className="text-white font-semibold">Amazon Europe</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Bußgeld:</span>
                              <span className="text-yellow-300 font-semibold">€746 Millionen</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Hauptvorwurf:</span>
                              <span className="text-red-300 font-semibold">Illegale Werbung</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Entscheidung herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Timeline */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-indigo-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Verfahrens-Timeline</h3>
                    <div className="space-y-6">
                      {timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="flex gap-6 relative"
                        >
                          {index < timeline.length - 1 && (
                            <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-indigo-500 to-transparent" />
                          )}
                          <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                            event.type === 'critical' ? 'bg-red-500' :
                            event.type === 'response' ? 'bg-blue-500' :
                            event.type === 'impact' ? 'bg-orange-500' :
                            event.type === 'enforcement' ? 'bg-purple-500' :
                            'bg-green-500'
                          )}>
                            <Clock className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/50 rounded-lg p-6">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-slate-600 text-slate-200">{event.date}</Badge>
                                <h4 className="text-lg font-bold text-white">{event.event}</h4>
                              </div>
                              <p className="text-slate-300">{event.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Violations Tab */}
            <TabsContent value="violations" className="space-y-8" id="violation-analysis">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-indigo-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                      Bußgeld-Aufschlüsselung: €746 Millionen
                    </h3>
                    <div className="space-y-6">
                      {violationBreakdown.map((violation, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="bg-slate-700/50 rounded-lg p-6"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className="bg-indigo-500/20 text-indigo-300 text-xs">
                                  {violation.article}
                                </Badge>
                                <h4 className="text-lg font-bold text-white">{violation.violation}</h4>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">{violation.description}</p>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-2xl font-bold text-yellow-400">{violation.amount}</div>
                              <div className="text-sm text-slate-400">{violation.percentage}% der Gesamtsumme</div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-orange-300 mb-2">Konkrete Beispiele:</h5>
                            <div className="grid md:grid-cols-2 gap-2">
                              {violation.examples.map((example, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="w-full bg-slate-600 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                              style={{ width: `${violation.percentage}%` }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Advertising Practices Tab */}
            <TabsContent value="advertising" className="space-y-8" id="compliance-solutions">
              <div className="grid md:grid-cols-2 gap-8">
                {advertisingAnalysis.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                            practice.color
                          )}>
                            <practice.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{practice.category}</h3>
                            <Badge className={cn(
                              "text-xs mt-1",
                              practice.complianceLevel === 'KRITISCH' ? 'bg-red-500/20 text-red-300' :
                              practice.complianceLevel === 'HOCH' ? 'bg-orange-500/20 text-orange-300' :
                              'bg-yellow-500/20 text-yellow-300'
                            )}>
                              Risiko: {practice.complianceLevel}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold text-red-300 mb-3 flex items-center gap-2">
                              <X className="h-4 w-4" />
                              Problematische Praxis
                            </h4>
                            <div className="space-y-2">
                              {practice.currentPractice.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg">
                                  <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-green-300 mb-3 flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4" />
                              DSGVO-konforme Lösung
                            </h4>
                            <div className="space-y-2">
                              {practice.requiredChanges.map((change, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{change}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Industry Impact Tab */}
            <TabsContent value="industry" className="space-y-8" id="ecommerce-impact">
              <div className="space-y-8">
                {industryImpacts.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                            <industry.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{industry.sector}</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-orange-300 mb-4">Herausforderungen:</h4>
                            <div className="space-y-3">
                              {industry.challenges.map((challenge, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg">
                                  <AlertTriangle className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-green-300 mb-4">Lösungsansätze:</h4>
                            <div className="space-y-3">
                              {industry.solutions.map((solution, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{solution}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-blue-300 mb-4">Compliance-Maßnahmen:</h4>
                            <div className="space-y-3">
                              {industry.complianceActions.map((action, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg">
                                  <Shield className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Compliance Tab */}
            <TabsContent value="compliance" className="space-y-8" id="branchen-guidance">
              <div className="space-y-8">
                {complianceFramework.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                            phase.color
                          )}>
                            {phase.urgency}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                              <Scale className="h-5 w-5" />
                              Rechtliche Maßnahmen
                            </h4>
                            <div className="space-y-3">
                              {phase.legalActions.map((action, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg">
                                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              Technische Maßnahmen
                            </h4>
                            <div className="space-y-3">
                              {phase.technicalActions.map((action, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg">
                                  <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Technical Solutions Tab */}
            <TabsContent value="technical" className="space-y-8" id="enforcement-trends">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-indigo-500/30">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-slate-700">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          DSGVO-konforme E-Commerce Implementation
                        </h3>
                        <Button
                          size="sm"
                          onClick={() => handleCopy(technicalSolutions, 'ecommerce')}
                          className="bg-indigo-500 hover:bg-indigo-600"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          {copySuccess === 'ecommerce' ? 'Kopiert!' : 'Kopieren'}
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                        <code className="text-slate-300 text-sm">
                          {technicalSolutions}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-indigo-900/30 to-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                E-Commerce Compliance optimieren
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Vermeiden Sie ähnliche Bußgelder durch proaktive Advertising-Compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Audit",
                description: "Umfassende Prüfung Ihrer Marketing- und Werbepraktiken",
                icon: Search,
                link: "/services/ecommerce-audit",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Consent Management",
                description: "Rechtssichere Einwilligungslösungen für Marketing",
                icon: UserCheck,
                link: "/services/consent-management",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Advertising Compliance",
                description: "DSGVO-konforme Werbestrategien und Implementierung",
                icon: Target,
                link: "/services/advertising-compliance",
                color: "from-orange-500 to-red-500"
              }
            ].map((cta, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
                      cta.color
                    )}>
                      <cta.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {cta.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{cta.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      cta.color
                    )}>
                      <Link to={cta.link} className="flex items-center justify-center gap-2">
                        <span>Jetzt prüfen</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AmazonLuxembourgCase;