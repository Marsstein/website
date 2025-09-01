import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  ArrowLeft,
  Download,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Globe,
  Shield,
  Building2,
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
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const GoogleAnalyticsAustriaCase: React.FC = () => {
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

  const keyFindings = [
    {
      title: "Unzulässige Drittlandübertragung",
      description: "Übertragung von IP-Adressen und anderen Daten in die USA ohne angemessene Garantien",
      impact: "KRITISCH",
      details: "Verstoß gegen Art. 44 DSGVO - Allgemeine Grundsätze für Übermittlungen",
      technicalIssue: "Google Analytics sendet Daten automatisch an US-Server"
    },
    {
      title: "Unzureichende IP-Anonymisierung",
      description: "IP-Anonymisierung erfolgt erst auf Google-Servern in den USA",
      impact: "HOCH",
      details: "Vollständige IP-Adresse wird zunächst ungeschützt übertragen",
      technicalIssue: "Anonymisierung findet nach dem Drittlandtransfer statt"
    },
    {
      title: "Fehlende Zusatzmaßnahmen",
      description: "Keine ergänzenden technischen Schutzmaßnahmen implementiert",
      impact: "HOCH",
      details: "Standardvertragsklauseln allein reichen nicht aus",
      technicalIssue: "Keine End-to-End Verschlüsselung oder Pseudonymisierung"
    },
    {
      title: "Rechtsgrundlage unzureichend",
      description: "Berechtiges Interesse als Rechtsgrundlage für Analytics fragwürdig",
      impact: "MITTEL",
      details: "Interessenabwägung fällt zugunsten der Betroffenen aus",
      technicalIssue: "Tracking ohne explizite Einwilligung problematisch"
    }
  ];

  const technicalAnalysis = [
    {
      aspect: "Datenfluss",
      icon: Globe,
      color: "from-red-500 to-orange-500",
      current: [
        "Browser → Google Analytics Collect Server (USA)",
        "Vollständige IP-Adresse wird übertragen",
        "User-Agent und weitere Browser-Daten",
        "Zeitstempel und Session-Informationen"
      ],
      compliant: [
        "Browser → EU-basierter Proxy-Server",
        "IP-Anonymisierung vor Übertragung",
        "Datenminimierung auf erforderliche Parameter",
        "Verschlüsselung aller übertragenen Daten"
      ]
    },
    {
      aspect: "Datenspeicherung",
      icon: Server,
      color: "from-blue-500 to-indigo-500",
      current: [
        "Primäre Speicherung in US-Rechenzentren",
        "Backup-Systeme global verteilt",
        "Lange Aufbewahrungszeiten (26 Monate Standard)",
        "Zugriff durch US-Behörden möglich"
      ],
      compliant: [
        "Exklusive Speicherung in EU-Rechenzentren",
        "Geografische Datenlokalisierung",
        "Verkürzte Aufbewahrungszeiten",
        "Rechtssichere Zugriffskontrolle"
      ]
    },
    {
      aspect: "Verarbeitung",
      icon: Activity,
      color: "from-purple-500 to-pink-500",
      current: [
        "Automatisierte Profilerstellung",
        "Cross-Device Tracking",
        "Aggregation mit anderen Google-Diensten",
        "Machine Learning auf Nutzerdaten"
      ],
      compliant: [
        "Anonymisierte Aggregatdaten",
        "Opt-in für erweiterte Features",
        "Isolierte Verarbeitung ohne Verknüpfung",
        "Transparente Algorithmen"
      ]
    }
  ];

  const alternatives = [
    {
      name: "Matomo (On-Premise)",
      type: "Self-Hosted",
      privacy: "HOCH",
      features: "VOLLSTÄNDIG",
      complexity: "HOCH",
      cost: "NIEDRIG",
      description: "Vollständig selbst gehostete Analytics-Lösung mit kompletter Datenkontrolle",
      pros: [
        "100% Datenkontrolle",
        "DSGVO-compliant by design",
        "Keine Drittlandübertragungen",
        "Umfangreiche Features"
      ],
      cons: [
        "Hoher Wartungsaufwand",
        "Technisches Know-how erforderlich",
        "Keine automatischen Updates",
        "Server-Infrastruktur notwendig"
      ],
      implementation: [
        "Server-Installation und Konfiguration",
        "SSL-Zertifikat einrichten",
        "Tracking-Code implementieren",
        "Datenschutzerklärung anpassen"
      ]
    },
    {
      name: "Plausible Analytics",
      type: "EU-SaaS",
      privacy: "HOCH",
      features: "MITTEL",
      complexity: "NIEDRIG",
      cost: "MITTEL",
      description: "Einfache, datenschutzfreundliche Analytics ohne Cookies",
      pros: [
        "EU-basierte Server",
        "Keine Cookies erforderlich",
        "Einfache Implementierung",
        "Transparente Datenschutzpraktiken"
      ],
      cons: [
        "Begrenzte Funktionen im Vergleich zu GA",
        "Kostenpflichtig ab bestimmtem Traffic",
        "Weniger detaillierte Berichte",
        "Keine Integration mit Google-Ecosystem"
      ],
      implementation: [
        "Account bei EU-Anbieter erstellen",
        "Tracking-Script einbinden",
        "Goals und Events konfigurieren",
        "Dashboard-Zugriffe verwalten"
      ]
    },
    {
      name: "Google Analytics 4 (EU-Setup)",
      type: "Modifiziert",
      privacy: "MITTEL",
      features: "VOLLSTÄNDIG",
      complexity: "HOCH",
      cost: "NIEDRIG",
      description: "GA4 mit zusätzlichen Datenschutzmaßnahmen und EU-Lokalisierung",
      pros: [
        "Bekannte Benutzeroberfläche",
        "Vollständiger Funktionsumfang",
        "Kostenlos verfügbar",
        "Integration mit Google Ads"
      ],
      cons: [
        "Weiterhin rechtliche Unsicherheit",
        "Komplexe Compliance-Maßnahmen",
        "Abhängigkeit von Google-Updates",
        "Nicht vollständig DSGVO-konform"
      ],
      implementation: [
        "Server-side Tracking implementieren",
        "Consent Management optimieren",
        "IP-Anonymisierung konfigurieren",
        "Data Retention verkürzen"
      ]
    }
  ];

  const implementationGuide = [
    {
      phase: "Sofort-Maßnahmen (0-7 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      tasks: [
        "Google Analytics vorübergehend deaktivieren",
        "Rechtliche Risikobewertung durchführen",
        "Stakeholder über Situation informieren",
        "Alternative Analytics-Lösung evaluieren",
        "Budget für Migration genehmigen lassen"
      ]
    },
    {
      phase: "Migration (1-4 Wochen)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      tasks: [
        "DSGVO-konforme Analytics-Lösung auswählen",
        "Historische Daten exportieren und archivieren",
        "Neue Tracking-Implementierung entwickeln",
        "Datenschutzerklärung aktualisieren",
        "Team-Schulungen für neue Tools durchführen"
      ]
    },
    {
      phase: "Optimierung (1-3 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      tasks: [
        "Tracking-Performance optimieren",
        "Custom Dashboards erstellen",
        "Reporting-Prozesse anpassen",
        "Compliance-Monitoring einrichten",
        "Dokumentation und Prozesse finalisieren"
      ]
    }
  ];

  const euDecisions = [
    {
      country: "Österreich",
      date: "22. Dez 2021",
      authority: "Österreichische DSB",
      decision: "Google Analytics DSGVO-widrig",
      status: "Endgültig",
      impact: "Grundsatzentscheidung für EU"
    },
    {
      country: "Frankreich",
      date: "10. Feb 2022",
      authority: "CNIL",
      decision: "GA verstößt gegen DSGVO",
      status: "Bestätigt",
      impact: "Verschärfte Durchsetzung"
    },
    {
      country: "Italien",
      date: "23. Jun 2022",
      authority: "Garante",
      decision: "Unzulässige Drittlandübertragung",
      status: "Rechtskräftig",
      impact: "EU-weiter Trend"
    },
    {
      country: "Dänemark",
      date: "20. Jul 2022",
      authority: "Datatilsynet",
      decision: "GA4 ebenfalls betroffen",
      status: "Bestätigt",
      impact: "Auch neue Version problematisch"
    },
    {
      country: "Niederlande",
      date: "5. Sep 2022",
      authority: "AP",
      decision: "Behördliche Warnung ausgesprochen",
      status: "Ongoing",
      impact: "Verschärfte Kontrollen"
    }
  ];

  const serverSideSetup = `// Server-Side Google Analytics 4 Setup
// 1. Google Tag Manager Server Container

// gtag-config.js
const gtag_config = {
  // Erweiterte Anonymisierung
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false,
  
  // EU-spezifische Einstellungen
  server_container_url: 'https://eu-gtm.yourdomain.com',
  transport_url: 'https://eu-analytics.yourdomain.com',
  
  // Datenminimierung
  custom_map: {
    'custom_parameter_1': 'anonymized_user_id'
  },
  
  // Consent Mode
  ads_data_redaction: true,
  url_passthrough: false
};

// 2. Server-Side Tagging Implementation
const serverConfig = {
  // EU-Server Konfiguration
  region: 'europe-west1',
  data_residency: 'EU',
  
  // Datenverarbeitung
  ip_anonymization: 'before_processing',
  user_data_encryption: true,
  
  // Compliance Features
  data_retention: '14_months',
  automatic_deletion: true,
  
  // Monitoring
  compliance_logging: true,
  audit_trail: true
};

// 3. Client-Side Implementation mit Consent
function initAnalytics(hasConsent) {
  if (hasConsent) {
    gtag('config', 'GA_MEASUREMENT_ID', gtag_config);
    
    // Consent Mode V2
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied'
    });
  } else {
    // Cookieless Tracking
    gtag('config', 'GA_MEASUREMENT_ID', {
      'client_storage': 'none',
      'anonymize_ip': true,
      'allow_google_signals': false
    });
  }
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <SEOHead
        title="Google Analytics Austria DSB – US-Tool-Verbot Entscheidung"
        description="Google Analytics Austria DSB-Entscheidung: US-Tool-Verbot, Schrems II Auswirkungen, Analytics-Alternativen. ✓ Regulatory Decision ✓ Tool Assessment ✓ Compliance Strategy."
        canonical="/wissen/rechtsprechung/google-analytics-austria"
        keywords="Google Analytics, Austria, DSB, Datenschutzbehörde, US-Tools, Schrems II, Analytics-Alternativen, DSGVO"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Google Analytics Austria DSB – US-Tool-Verbot Entscheidung",
          "description": "Österreichische Datenschutzbehörde verbietet Google Analytics wegen unzulässiger Datenübermittlung in die USA",
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
          "datePublished": "2022-01-13",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.ai/wissen/rechtsprechung/google-analytics-austria"
          }
        }}
      />
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow" />
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
            <Button asChild variant="outline" className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10">
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20"
            >
              <BarChart3 className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">Analytics Compliance</span>
              <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Google</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Analytics
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                Austria DSB
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Die wegweisende Entscheidung der österreichischen Datenschutzbehörde gegen 
              <span className="font-semibold text-orange-300"> Google Analytics</span> und ihre EU-weiten Auswirkungen
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2">
                <X className="h-4 w-4 mr-2" />
                DSGVO-widrig
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                22. Dez 2021
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Österreich DSB
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
                  <a href="#entscheidungsuebersicht" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-orange-400 font-medium">1.</span> Entscheidungsübersicht
                  </a>
                  <a href="#kernurteile" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-orange-400 font-medium">2.</span> Kernurteile & Begründung
                  </a>
                  <a href="#technische-analyse" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-orange-400 font-medium">3.</span> Technische Analyse
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#alternativen" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-orange-400 font-medium">4.</span> Analytics-Alternativen
                  </a>
                  <a href="#compliance" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-orange-400 font-medium">5.</span> Compliance-Umsetzung
                  </a>
                  <a href="#eu-auswirkungen" className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                    <span className="text-orange-400 font-medium">6.</span> EU-weite Auswirkungen
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
                <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Überblick</span>
                  <span className="md:hidden">Info</span>
                </TabsTrigger>
                <TabsTrigger value="findings" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Kernurteile</span>
                  <span className="md:hidden">Urteil</span>
                </TabsTrigger>
                <TabsTrigger value="technical" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Technische Analyse</span>
                  <span className="md:hidden">Tech</span>
                </TabsTrigger>
                <TabsTrigger value="alternatives" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Alternativen</span>
                  <span className="md:hidden">Alt.</span>
                </TabsTrigger>
                <TabsTrigger value="implementation" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">Umsetzung</span>
                  <span className="md:hidden">Guide</span>
                </TabsTrigger>
                <TabsTrigger value="eu-impact" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm">
                  <span className="hidden md:inline">EU-Auswirkungen</span>
                  <span className="md:hidden">EU</span>
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
                <Card className="bg-slate-800/80 backdrop-blur-sm border-orange-500/30">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h3 id="entscheidungsuebersicht" className="text-2xl font-bold text-white mb-6" style={{ scrollMarginTop: '100px' }}>Entscheidungsübersicht</h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Am 22. Dezember 2021 entschied die österreichische Datenschutzbehörde (DSB) 
                            in einem wegweisenden Verfahren, dass die Nutzung von Google Analytics 
                            gegen die DSGVO verstößt.
                          </p>
                          <p>
                            Die Entscheidung basiert auf der Übertragung personenbezogener Daten 
                            (IP-Adressen) in die USA ohne angemessene Schutzmaßnahmen. Trotz 
                            Standardvertragsklauseln bietet Google Analytics kein ausreichendes 
                            Schutzniveau für EU-Bürger.
                          </p>
                          <p>
                            Diese Entscheidung löste eine Kettenreaktion in der gesamten EU aus 
                            und führte zu ähnlichen Urteilen in Frankreich, Italien und anderen 
                            Mitgliedstaaten.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Verfahren Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Aktenzeichen:</span>
                              <span className="text-white font-semibold">DSB-D155.027</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Datum:</span>
                              <span className="text-white font-semibold">22.12.2021</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Behörde:</span>
                              <span className="text-white font-semibold">Österreichische DSB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Betroffenes Tool:</span>
                              <span className="text-white font-semibold">Google Analytics</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status:</span>
                              <span className="text-red-300 font-semibold">DSGVO-widrig</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Entscheidung herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Key Findings Tab */}
            <TabsContent value="findings" className="space-y-8" id="kernurteile">
              <div className="grid gap-6">
                {keyFindings.map((finding, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold",
                            finding.impact === 'KRITISCH' ? 'bg-red-500/20 text-red-300' :
                            finding.impact === 'HOCH' ? 'bg-orange-500/20 text-orange-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          )}>
                            {finding.impact}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{finding.title}</h3>
                            <p className="text-slate-300 mb-3">{finding.description}</p>
                            <p className="text-sm text-slate-400 mb-2">{finding.details}</p>
                            <div className="flex items-center gap-2">
                              <Settings className="h-4 w-4 text-orange-400" />
                              <span className="text-sm text-orange-300">{finding.technicalIssue}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Technical Analysis Tab */}
            <TabsContent value="technical" className="space-y-8" id="technische-analyse">
              <div className="space-y-8">
                {technicalAnalysis.map((analysis, index) => (
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
                            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                            analysis.color
                          )}>
                            <analysis.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{analysis.aspect}</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-red-300 mb-4 flex items-center gap-2">
                              <X className="h-5 w-5" />
                              Aktueller Status (Problematisch)
                            </h4>
                            <div className="space-y-3">
                              {analysis.current.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg">
                                  <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-green-300 mb-4 flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5" />
                              DSGVO-konforme Alternative
                            </h4>
                            <div className="space-y-3">
                              {analysis.compliant.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{item}</span>
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

            {/* Alternatives Tab */}
            <TabsContent value="alternatives" className="space-y-8" id="alternativen">
              <div className="grid gap-8">
                {alternatives.map((alternative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{alternative.name}</h3>
                            <p className="text-slate-300">{alternative.description}</p>
                          </div>
                          <Badge className="bg-blue-500/20 text-blue-300">{alternative.type}</Badge>
                        </div>
                        
                        {/* Bewertungsmatrix */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                            <div className="text-sm text-slate-400 mb-1">Privacy</div>
                            <div className={cn(
                              "text-lg font-bold",
                              alternative.privacy === 'HOCH' ? 'text-green-400' :
                              alternative.privacy === 'MITTEL' ? 'text-yellow-400' :
                              'text-red-400'
                            )}>
                              {alternative.privacy}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                            <div className="text-sm text-slate-400 mb-1">Features</div>
                            <div className={cn(
                              "text-lg font-bold",
                              alternative.features === 'VOLLSTÄNDIG' ? 'text-green-400' :
                              alternative.features === 'MITTEL' ? 'text-yellow-400' :
                              'text-red-400'
                            )}>
                              {alternative.features}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                            <div className="text-sm text-slate-400 mb-1">Komplexität</div>
                            <div className={cn(
                              "text-lg font-bold",
                              alternative.complexity === 'NIEDRIG' ? 'text-green-400' :
                              alternative.complexity === 'MITTEL' ? 'text-yellow-400' :
                              'text-red-400'
                            )}>
                              {alternative.complexity}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                            <div className="text-sm text-slate-400 mb-1">Kosten</div>
                            <div className={cn(
                              "text-lg font-bold",
                              alternative.cost === 'NIEDRIG' ? 'text-green-400' :
                              alternative.cost === 'MITTEL' ? 'text-yellow-400' :
                              'text-red-400'
                            )}>
                              {alternative.cost}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-green-300 mb-3">Vorteile:</h4>
                            <div className="space-y-2">
                              {alternative.pros.map((pro, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{pro}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-orange-300 mb-3">Nachteile:</h4>
                            <div className="space-y-2">
                              {alternative.cons.map((con, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm">{con}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-blue-300 mb-3">Umsetzung:</h4>
                            <div className="space-y-2">
                              {alternative.implementation.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center mt-0.5">
                                    {idx + 1}
                                  </span>
                                  <span className="text-slate-300 text-sm">{step}</span>
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

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-8" id="compliance">
              <div className="space-y-8">
                {implementationGuide.map((phase, index) => (
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
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.tasks.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Server-Side Code Example */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-orange-500/30">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-slate-700">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          Server-Side Analytics Setup (Compliance-optimiert)
                        </h3>
                        <Button
                          size="sm"
                          onClick={() => handleCopy(serverSideSetup, 'serverside')}
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          {copySuccess === 'serverside' ? 'Kopiert!' : 'Kopieren'}
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                        <code className="text-slate-300 text-sm">
                          {serverSideSetup}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* EU Impact Tab */}
            <TabsContent value="eu-impact" className="space-y-8" id="eu-auswirkungen">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-orange-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      EU-weite Auswirkungen der österreichischen Entscheidung
                    </h3>
                    <p className="text-slate-300 text-center">
                      Ähnliche Entscheidungen in allen EU-Mitgliedstaaten schaffen einheitliche Rechtssicherheit
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid gap-6">
                {euDecisions.map((decision, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">EU</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{decision.country}</h3>
                          </div>
                          <Badge className={cn(
                            "text-xs",
                            decision.status === 'Endgültig' || decision.status === 'Rechtskräftig' || decision.status === 'Bestätigt'
                              ? 'bg-red-500/20 text-red-300' 
                              : 'bg-yellow-500/20 text-yellow-300'
                          )}>
                            {decision.status}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm text-slate-400 mb-1">Datum</div>
                            <div className="text-white font-semibold">{decision.date}</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-400 mb-1">Behörde</div>
                            <div className="text-white font-semibold">{decision.authority}</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-400 mb-1">Auswirkung</div>
                            <div className="text-orange-300 font-semibold">{decision.impact}</div>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-slate-700/30 rounded-lg">
                          <div className="text-sm text-slate-400 mb-1">Entscheidung</div>
                          <div className="text-slate-300">{decision.decision}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-orange-900/30 to-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Analytics Migration starten
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Wechseln Sie zu DSGVO-konformen Analytics-Lösungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Analytics Audit",
                description: "Bewertung Ihrer aktuellen Analytics-Implementierung",
                icon: Search,
                link: "/services/analytics-audit",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Migration Service",
                description: "Professionelle Migration zu DSGVO-konformen Tools",
                icon: ArrowRight,
                link: "/services/analytics-migration",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Compliance Monitoring",
                description: "Kontinuierliche Überwachung Ihrer Analytics-Compliance",
                icon: Shield,
                link: "/services/compliance-monitoring",
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
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
                      cta.color
                    )}>
                      <cta.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {cta.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{cta.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      cta.color
                    )}>
                      <Link to={cta.link} className="flex items-center justify-center gap-2">
                        <span>Jetzt starten</span>
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

export default GoogleAnalyticsAustriaCase;