import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Cookie, 
  ArrowLeft,
  Download,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Globe,
  Shield,
  Users,
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
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CookieLawGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [cookieExample, setCookieExample] = useState('essential');
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

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Erforderliche Cookies',
      description: 'Technisch notwendige Cookies für Website-Funktionalität',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      consent: 'Keine Einwilligung erforderlich',
      examples: [
        'Session-IDs',
        'CSRF-Tokens',
        'Login-Status',
        'Warenkorb-Inhalt',
        'Language Preferences'
      ],
      legalBasis: 'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)',
      retention: 'Session oder bis zu 1 Jahr',
      thirdParty: false
    },
    {
      id: 'functional',
      name: 'Funktionale Cookies',
      description: 'Cookies für erweiterte Website-Funktionen und Personalisierung',
      icon: Settings,
      color: 'from-blue-500 to-indigo-500',
      consent: 'Einwilligung erforderlich',
      examples: [
        'Benutzereinstellungen',
        'Theme-Präferenzen',
        'Gespeicherte Formulardaten',
        'Chat-Funktionen',
        'Video-Player Einstellungen'
      ],
      legalBasis: 'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)',
      retention: '6 Monate bis 2 Jahre',
      thirdParty: false
    },
    {
      id: 'analytics',
      name: 'Analyse Cookies',
      description: 'Cookies zur Analyse des Nutzerverhaltens und Website-Performance',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      consent: 'Einwilligung erforderlich',
      examples: [
        'Google Analytics',
        'Matomo Tracking',
        'Heatmap-Tools',
        'A/B Testing',
        'Performance Monitoring'
      ],
      legalBasis: 'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)',
      retention: '13-26 Monate',
      thirdParty: true
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Cookies für Werbung, Tracking und personalisierte Inhalte',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      consent: 'Einwilligung erforderlich',
      examples: [
        'Facebook Pixel',
        'Google Ads',
        'Retargeting Pixel',
        'Social Media Buttons',
        'Newsletter Tracking'
      ],
      legalBasis: 'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)',
      retention: '90 Tage bis 2 Jahre',
      thirdParty: true
    }
  ];

  const recentRulings = [
    {
      date: '2024',
      court: 'EuGH',
      case: 'Real Cookie Banner',
      ruling: 'Voreingestellte Häkchen bei nicht-essentiellen Cookies sind unzulässig',
      impact: 'HOCH',
      fineAmount: null,
      implications: [
        'Opt-in muss aktiv erfolgen',
        'Keine vorausgewählten Checkboxen',
        'Ablehnung muss so einfach sein wie Zustimmung',
        'Granulare Auswahl erforderlich'
      ]
    },
    {
      date: '2023',
      court: 'BGH',
      case: 'Cookie-Banner Urteil',
      ruling: 'Cookie-Banner müssen alle Optionen gleichwertig darstellen',
      impact: 'HOCH',
      fineAmount: null,
      implications: [
        'Gleiche Sichtbarkeit für Akzeptieren/Ablehnen',
        'Keine irreführenden Designs',
        'Klare Kategorisierung erforderlich',
        'Einfache Widerrufsmöglichkeit'
      ]
    },
    {
      date: '2023',
      court: 'DSK',
      case: 'E-Privacy Orientierungshilfe',
      ruling: 'Neue Leitlinien für Cookie-Einwilligungen',
      impact: 'MITTEL',
      fineAmount: null,
      implications: [
        'Spezifische Anforderungen an Consent Manager',
        'Dokumentationspflichten verschärft',
        'Cookie-Scanning obligatorisch',
        'Regelmäßige Aktualisierung erforderlich'
      ]
    },
    {
      date: '2022',
      court: 'CNIL',
      case: 'Google/Facebook Strafe',
      ruling: '€210 Mio. Strafe wegen Cookie-Verstößen',
      impact: 'KRITISCH',
      fineAmount: '€210 Millionen',
      implications: [
        'Massive Strafen für Cookie-Verstöße möglich',
        'Internationale Verfolgung von Verstößen',
        'Consent-Management wird prioritär geprüft',
        'Dark Patterns führen zu hohen Strafen'
      ]
    }
  ];

  const implementationSteps = [
    {
      phase: 'Vorbereitung & Analyse',
      duration: '1-2 Wochen',
      priority: 'HOCH',
      color: 'from-blue-500 to-indigo-500',
      tasks: [
        'Cookie-Audit der bestehenden Website durchführen',
        'Kategorisierung aller eingesetzten Cookies',
        'Rechtliche Grundlagen für jeden Cookie prüfen',
        'Drittanbieter-Services und deren Cookies identifizieren',
        'Datenflüsse dokumentieren'
      ]
    },
    {
      phase: 'Consent Management System',
      duration: '2-3 Wochen',
      priority: 'KRITISCH',
      color: 'from-purple-500 to-pink-500',
      tasks: [
        'CMP-Anbieter auswählen (OneTrust, Cookiebot, etc.)',
        'Cookie-Banner rechtssicher konfigurieren',
        'Granulare Einwilligungsoptionen implementieren',
        'Widerrufsmöglichkeiten einrichten',
        'Mobile Optimierung sicherstellen'
      ]
    },
    {
      phase: 'Technische Implementierung',
      duration: '1-2 Wochen',
      priority: 'HOCH',
      color: 'from-emerald-500 to-teal-500',
      tasks: [
        'Cookie-Scripts in CMP integrieren',
        'Tracking nur nach Einwilligung aktivieren',
        'Fallback-Lösungen für abgelehnte Cookies',
        'Performance-Optimierung durchführen',
        'Cross-Browser Kompatibilität testen'
      ]
    },
    {
      phase: 'Dokumentation & Compliance',
      duration: '1 Woche',
      priority: 'MITTEL',
      color: 'from-orange-500 to-red-500',
      tasks: [
        'Cookie-Policy aktualisieren',
        'Datenschutzerklärung anpassen',
        'Verarbeitungsverzeichnis erweitern',
        'Schulungsunterlagen für Teams erstellen',
        'Compliance-Monitoring einrichten'
      ]
    },
    {
      phase: 'Testing & Launch',
      duration: '1 Woche',
      priority: 'KRITISCH',
      color: 'from-red-500 to-pink-500',
      tasks: [
        'Umfassendes Testing auf allen Devices',
        'User Experience Optimierung',
        'Legal Review der finalen Implementierung',
        'Soft Launch mit ausgewählten Nutzern',
        'Full Rollout nach erfolgreichen Tests'
      ]
    }
  ];

  const codeExamples = {
    essential: {
      title: 'Erforderliche Cookies - Implementierung',
      code: `<!-- Session Cookie (Server-side) -->
<?php
// Sichere Session-Konfiguration
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);
ini_set('session.cookie_samesite', 'Strict');
session_start();
?>

<!-- JavaScript für lokale Einstellungen -->
<script>
// Sichere localStorage Alternative
function setSecureSetting(key, value) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('essential_' + key, value);
  }
}

// CSRF Token handling
function getCSRFToken() {
  let token = document.querySelector('meta[name="csrf-token"]');
  return token ? token.getAttribute('content') : null;
}
</script>`
    },
    functional: {
      title: 'Funktionale Cookies - Mit Einwilligung',
      code: `<!-- Consent-abhängige Funktionen -->
<script>
function initFunctionalFeatures() {
  // Prüfe Einwilligung
  if (hasConsent('functional')) {
    // Theme Preference
    applyUserTheme();
    
    // Saved Form Data
    restoreFormData();
    
    // Chat Widget
    initChatWidget();
  }
}

function hasConsent(category) {
  // Integration mit Consent Management Platform
  return window.CookieConsent && 
         window.CookieConsent.hasConsent(category);
}

// Event Listener für Consent Changes
document.addEventListener('cookie_consent_update', function(e) {
  if (e.detail.functional) {
    initFunctionalFeatures();
  } else {
    removeFunctionalCookies();
  }
});
</script>`
    },
    analytics: {
      title: 'Analytics Cookies - Google Analytics 4',
      code: `<!-- GA4 mit Consent Management -->
<script>
function initAnalytics() {
  if (hasConsent('analytics')) {
    // GA4 Configuration
    gtag('config', 'GA_MEASUREMENT_ID', {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=Strict;Secure',
      'cookie_expires': 63072000, // 2 Jahre
    });
    
    // Consent Mode V2
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  } else {
    // Analytics ohne Cookies
    gtag('config', 'GA_MEASUREMENT_ID', {
      'client_storage': 'none',
      'anonymize_ip': true
    });
  }
}

// Consent Default
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
});
</script>`
    },
    marketing: {
      title: 'Marketing Cookies - Facebook Pixel',
      code: `<!-- Facebook Pixel mit Consent -->
<script>
function initMarketingPixels() {
  if (hasConsent('marketing')) {
    // Facebook Pixel Standard
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
    
    // Retargeting Pixel
    initRetargetingPixel();
  }
}

function removeMarketingCookies() {
  // Alle Marketing Cookies löschen
  document.cookie.split(";").forEach(function(c) { 
    if (c.trim().startsWith('_fb') || 
        c.trim().startsWith('_gcl')) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, 
        "=;expires=" + new Date().toUTCString() + ";path=/");
    }
  });
}
</script>`
    }
  };

  const bestPractices = [
    {
      category: 'Banner Design',
      icon: Monitor,
      practices: [
        'Akzeptieren und Ablehnen gleich prominent darstellen',
        'Keine irreführenden Farben oder Buttons',
        'Mobile-first Design für alle Geräte',
        'Barrierefreie Bedienung sicherstellen',
        'Layer-by-layer Information bereitstellen'
      ]
    },
    {
      category: 'Consent Management',
      icon: Settings,
      practices: [
        'Granulare Kontrolle über Cookie-Kategorien',
        'Einfache Widerrufsmöglichkeit',
        'Consent-Historie dokumentieren',
        'Regelmäßige Re-Consent Mechanismen',
        'Cross-Device Consent Synchronisation'
      ]
    },
    {
      category: 'Performance',
      icon: Zap,
      practices: [
        'Asynchrones Laden von Tracking-Scripts',
        'Minimale Auswirkung auf Page Speed',
        'Fallback für geblockte Cookies',
        'Efficient Cookie Storage Management',
        'Reduced Third-Party Dependencies'
      ]
    },
    {
      category: 'Dokumentation',
      icon: FileText,
      practices: [
        'Vollständige Cookie-Dokumentation',
        'Regelmäßige Cookie-Audits',
        'Versionierung der Cookie-Policy',
        'Compliance Monitoring Dashboard',
        'Audit Trail für alle Änderungen'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" />
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
            <Button asChild variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Cookie className="h-5 w-5 text-blue-400 animate-bounce" />
              <span className="text-sm font-semibold text-blue-300">Cookie Law Guide</span>
              <Shield className="h-5 w-5 text-green-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Cookie</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Rechtsprechung
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                & Compliance
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Umfassender Leitfaden zur aktuellen Cookie-Rechtsprechung und 
              <span className="font-semibold text-blue-300"> rechtssicheren Implementierung</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Aktuelle Rechtsprechung
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                Code-Beispiele
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                <Target className="h-4 w-4 mr-2" />
                Best Practices
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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
              <TabsList className="grid w-full grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger value="overview" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Überblick
                </TabsTrigger>
                <TabsTrigger value="categories" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Cookie-Arten
                </TabsTrigger>
                <TabsTrigger value="rulings" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Rechtsprechung
                </TabsTrigger>
                <TabsTrigger value="implementation" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Umsetzung
                </TabsTrigger>
                <TabsTrigger value="code" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Code-Beispiele
                </TabsTrigger>
                <TabsTrigger value="best-practices" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  Best Practices
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
                <Card className="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6">Cookie-Rechtsprechung Überblick</h3>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Die Cookie-Rechtsprechung hat sich in den letzten Jahren dramatisch entwickelt. 
                            Von der ursprünglich lockeren Handhabung hin zu strengen Einwilligungsanforderungen 
                            und hohen Bußgeldern für Verstöße.
                          </p>
                          <p>
                            Aktuelle Urteile vom EuGH, BGH und nationalen Datenschutzbehörden haben klare 
                            Standards gesetzt: Echte Einwilligung, granulare Kontrolle und transparente 
                            Information sind nicht mehr optional.
                          </p>
                          <p>
                            Dieser Leitfaden bietet Ihnen eine umfassende Übersicht über die aktuelle 
                            Rechtslage, praktische Implementierungshilfen und bewährte Methoden für 
                            Cookie-Compliance.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Wichtige Fakten</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Letzte Updates:</span>
                              <span className="text-white font-semibold">2024</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Höchste Strafe:</span>
                              <span className="text-white font-semibold">€210 Mio.</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Betroffene Sites:</span>
                              <span className="text-white font-semibold">95%+</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Compliance Rate:</span>
                              <span className="text-white font-semibold">~30%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Compliance Checkliste
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Cookie Categories Tab */}
            <TabsContent value="categories" className="space-y-8">
              <div className="grid gap-8">
                {cookieCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className={cn(
                            "p-4 rounded-2xl bg-gradient-to-r shadow-lg flex-shrink-0",
                            category.color
                          )}>
                            <category.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                              <Badge className={cn(
                                "text-xs",
                                category.consent === 'Keine Einwilligung erforderlich' 
                                  ? 'bg-green-500/20 text-green-300' 
                                  : 'bg-orange-500/20 text-orange-300'
                              )}>
                                {category.consent}
                              </Badge>
                            </div>
                            <p className="text-slate-300 mb-6">{category.description}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">Beispiele:</h4>
                                <div className="space-y-2">
                                  {category.examples.map((example, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                      <span className="text-slate-300 text-sm">{example}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <span className="text-slate-400 text-sm">Rechtsgrundlage:</span>
                                  <p className="text-white font-semibold">{category.legalBasis}</p>
                                </div>
                                <div>
                                  <span className="text-slate-400 text-sm">Speicherdauer:</span>
                                  <p className="text-white font-semibold">{category.retention}</p>
                                </div>
                                <div>
                                  <span className="text-slate-400 text-sm">Drittanbieter:</span>
                                  <p className={cn(
                                    "font-semibold",
                                    category.thirdParty ? 'text-orange-300' : 'text-green-300'
                                  )}>
                                    {category.thirdParty ? 'Ja' : 'Nein'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Recent Rulings Tab */}
            <TabsContent value="rulings" className="space-y-8">
              <div className="space-y-6">
                {recentRulings.map((ruling, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <Badge className="bg-blue-500/20 text-blue-300">{ruling.date}</Badge>
                            <Badge className="bg-purple-500/20 text-purple-300">{ruling.court}</Badge>
                            <Badge className={cn(
                              "text-xs",
                              ruling.impact === 'KRITISCH' ? 'bg-red-500/20 text-red-300' :
                              ruling.impact === 'HOCH' ? 'bg-orange-500/20 text-orange-300' :
                              'bg-yellow-500/20 text-yellow-300'
                            )}>
                              {ruling.impact}
                            </Badge>
                          </div>
                          {ruling.fineAmount && (
                            <div className="text-right">
                              <div className="text-sm text-slate-400">Strafe</div>
                              <div className="text-xl font-bold text-red-400">{ruling.fineAmount}</div>
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{ruling.case}</h3>
                        <p className="text-slate-300 mb-6">{ruling.ruling}</p>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Praktische Auswirkungen:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {ruling.implications.map((implication, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300 text-sm">{implication}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Cookie Compliance Roadmap
                    </h3>
                    <p className="text-slate-300 text-center">
                      Schritt-für-Schritt Plan zur rechtssicheren Cookie-Implementierung
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="space-y-8">
                {implementationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="text-2xl font-bold text-blue-400">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                            step.color
                          )}>
                            {step.priority}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{step.phase}</h3>
                          <Badge className="bg-slate-600 text-slate-200 ml-auto">
                            {step.duration}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          {step.tasks.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Code Examples Tab */}
            <TabsContent value="code" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex justify-center">
                  <div className="flex bg-slate-800/60 backdrop-blur-sm rounded-xl p-2">
                    {Object.entries(codeExamples).map(([key, example]) => (
                      <button
                        key={key}
                        onClick={() => setCookieExample(key)}
                        className={cn(
                          "px-4 py-2 rounded-lg font-semibold transition-all duration-300",
                          cookieExample === key
                            ? "bg-blue-500 text-white"
                            : "text-slate-300 hover:text-blue-300"
                        )}
                      >
                        {cookieCategories.find(c => c.id === key)?.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-blue-500/30">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-slate-700">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          {codeExamples[cookieExample as keyof typeof codeExamples].title}
                        </h3>
                        <Button
                          size="sm"
                          onClick={() => handleCopy(
                            codeExamples[cookieExample as keyof typeof codeExamples].code,
                            cookieExample
                          )}
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          {copySuccess === cookieExample ? 'Kopiert!' : 'Kopieren'}
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                        <code className="text-slate-300 text-sm">
                          {codeExamples[cookieExample as keyof typeof codeExamples].code}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Best Practices Tab */}
            <TabsContent value="best-practices" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {bestPractices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                            <practice.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{practice.category}</h3>
                        </div>
                        <div className="space-y-3">
                          {practice.practices.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{item}</span>
                            </div>
                          ))}
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

      {/* Tools and Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Tools & Ressourcen
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Praktische Hilfsmittel für Ihre Cookie-Compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cookie Scanner",
                description: "Automatische Analyse aller Cookies auf Ihrer Website",
                icon: Search,
                link: "/tools/cookie-scanner",
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "CMP Vergleich", 
                description: "Detaillierter Vergleich von Consent Management Plattformen",
                icon: BarChart3,
                link: "/tools/cmp-comparison",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Compliance Checker",
                description: "Prüfung Ihrer Cookie-Implementierung auf Rechtssicherheit",
                icon: Shield,
                link: "/tools/compliance-checker",
                color: "from-orange-500 to-red-500"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
                      tool.color
                    )}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{tool.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      tool.color
                    )}>
                      <Link to={tool.link} className="flex items-center justify-center gap-2">
                        <span>Tool öffnen</span>
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

export default CookieLawGuide;