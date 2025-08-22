import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Scale, 
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
  Send,
  Phone,
  Video,
  Key,
  FileShield,
  Smartphone,
  Code,
  Layers,
  Bell,
  Monitor
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const WhatsAppIrelandCase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copySuccess, setCopySuccess] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    // Scroll margins for sticky header offset
    const style = document.createElement('style');
    style.textContent = `
      h2, h3, h4 { scroll-margin-top: 96px; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

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
      violation: "Mangelnde Transparenz bei Datenverarbeitung",
      amount: "€90 Millionen",
      percentage: 40,
      description: "Unklare Informationen über Verarbeitungszwecke und Datennutzung",
      severity: "KRITISCH",
      articles: ["Art. 12 DSGVO", "Art. 13 DSGVO"]
    },
    {
      violation: "Unzureichende Datenschutzerklärung",
      amount: "€67.5 Millionen", 
      percentage: 30,
      description: "Fehlende und unverständliche Informationen für Betroffene",
      severity: "HOCH",
      articles: ["Art. 14 DSGVO", "Art. 12 DSGVO"]
    },
    {
      violation: "Verletzung der Informationspflichten",
      amount: "€45 Millionen",
      percentage: 20,
      description: "Mangelhafte Aufklärung über Betroffenenrechte",
      severity: "HOCH",
      articles: ["Art. 13 DSGVO", "Art. 14 DSGVO"]
    },
    {
      violation: "Unklare Rechtsgrundlagen-Kommunikation",
      amount: "€22.5 Millionen",
      percentage: 10,
      description: "Fehlende Klarstellung der rechtlichen Basis für Datenverarbeitung",
      severity: "MITTEL",
      articles: ["Art. 6 DSGVO", "Art. 12 DSGVO"]
    }
  ];

  const transparencyRequirements = [
    {
      area: "Informationspflichten",
      icon: Info,
      color: "from-emerald-500 to-teal-500",
      requirements: [
        "Klare Identität des Verantwortlichen (Art. 13 Abs. 1 lit. a)",
        "Kontaktdaten des Datenschutzbeauftragten (Art. 13 Abs. 1 lit. b)",
        "Zwecke und Rechtsgrundlagen der Verarbeitung (Art. 13 Abs. 1 lit. c)",
        "Kategorien personenbezogener Daten (Art. 14 Abs. 1 lit. d)"
      ]
    },
    {
      area: "Verständlichkeit",
      icon: Eye,
      color: "from-teal-500 to-cyan-500", 
      requirements: [
        "Präzise, transparente und verständliche Sprache (Art. 12 Abs. 1)",
        "Leicht zugängliche Informationen (Art. 12 Abs. 1)",
        "Angemessene Darstellung für Zielgruppe",
        "Strukturierte und übersichtliche Präsentation"
      ]
    },
    {
      area: "Betroffenenrechte",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      requirements: [
        "Recht auf Auskunft (Art. 15 DSGVO)",
        "Recht auf Berichtigung (Art. 16 DSGVO)",
        "Recht auf Löschung (Art. 17 DSGVO)",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)"
      ]
    },
    {
      area: "Messaging-spezifische Anforderungen",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-500",
      requirements: [
        "Aufklärung über End-to-End-Verschlüsselung",
        "Transparenz bei Metadaten-Verarbeitung",
        "Klarstellung zu Backup- und Sync-Funktionen",
        "Information über Gruppenchat-Datenverarbeitung"
      ]
    }
  ];

  const messagingCompliance = [
    {
      category: "Messaging Apps",
      icon: Smartphone,
      urgency: "KRITISCH",
      impacts: [
        "Transparenz-Dashboard für Nutzer implementieren",
        "Klare Aufklärung über Metadaten-Sammlung",
        "Granulare Einstellungen für Datenverarbeitung",
        "Verständliche Erklärung der Verschlüsselung"
      ]
    },
    {
      category: "Kommunikationsplattformen",
      icon: MessageCircle,
      urgency: "HOCH",
      impacts: [
        "Detaillierte Datenschutzerklärungen erstellen",
        "Benutzerfreundliche Privacy Center einrichten",
        "Proaktive Kommunikation bei Änderungen",
        "Einfache Opt-out Mechanismen implementieren"
      ]
    },
    {
      category: "Business Communications",
      icon: Building2,
      urgency: "HOCH",
      impacts: [
        "B2B Messaging DSGVO-konform gestalten",
        "Kundenkommunikation rechtssicher aufsetzen",
        "CRM-Integration datenschutzkonform konfigurieren",
        "Marketing-Nachrichten compliance-konform senden"
      ]
    },
    {
      category: "Video & Voice Calls",
      icon: Video,
      urgency: "MITTEL",
      impacts: [
        "Aufzeichnungs-Features transparent kommunizieren",
        "Teilnehmer-Daten minimieren und schützen",
        "Anruf-Metadaten DSGVO-konform verarbeiten",
        "Cloud-Speicherung rechtssicher gestalten"
      ]
    }
  ];

  const implementationSteps = [
    {
      phase: "Sofortmaßnahmen (0-30 Tage)",
      priority: "KRITISCH",
      color: "from-red-500 to-pink-500",
      steps: [
        "Audit der aktuellen Datenschutzerklärung durchführen",
        "Transparenz-Gaps in Messaging-Features identifizieren",
        "Rechtliche Risikobewertung für ähnliche Verstöße",
        "Nutzer-Informationen auf Verständlichkeit prüfen"
      ]
    },
    {
      phase: "Kurzzeitmaßnahmen (1-3 Monate)",
      priority: "HOCH", 
      color: "from-orange-500 to-red-500",
      steps: [
        "Überarbeitung aller Datenschutz-Texte",
        "Implementation von Privacy Dashboards",
        "Benutzerfreundliche Einstellungen entwickeln",
        "Compliance-konforme Messaging-Features umsetzen"
      ]
    },
    {
      phase: "Langfristige Strategie (3-12 Monate)",
      priority: "MITTEL",
      color: "from-emerald-500 to-teal-500",
      steps: [
        "Privacy-by-Design in alle Messaging-Features",
        "Kontinuierliches Transparenz-Monitoring",
        "Nutzer-Feedback zur Verständlichkeit sammeln",
        "Regelmäßige Compliance-Audits etablieren"
      ]
    }
  ];

  const codeExamples = [
    {
      title: "DSGVO-konforme Einwilligungsabfrage",
      language: "TypeScript",
      code: `// Granulare Einwilligung für Messaging-Features
interface ConsentRequest {
  messageData: boolean;
  metadata: boolean;
  analytics: boolean;
  backup: boolean;
}

const requestMessagingConsent = async (): Promise<ConsentRequest> => {
  return await showConsentDialog({
    title: "Messaging-Datenverarbeitung",
    sections: [
      {
        type: "messageData",
        title: "Nachrichten-Inhalte",
        description: "Zur Übermittlung und Anzeige Ihrer Nachrichten",
        required: true,
        legalBasis: "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)"
      },
      {
        type: "metadata", 
        title: "Nachrichten-Metadaten",
        description: "Zeitstempel, Empfänger, Zustellstatus",
        required: false,
        legalBasis: "Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)"
      }
    ]
  });
};`
    },
    {
      title: "Transparenz-Dashboard Component",
      language: "React",
      code: `const PrivacyDashboard: React.FC = () => {
  const [dataUsage, setDataUsage] = useState<DataUsageInfo>();
  
  return (
    <div className="privacy-dashboard">
      <section className="data-collection">
        <h3>Welche Daten sammeln wir?</h3>
        <ul>
          <li>✓ Nachrichten-Inhalte (Ende-zu-Ende verschlüsselt)</li>
          <li>✓ Metadaten (Zeitstempel, Empfänger)</li>
          <li>✗ Standortdaten (deaktiviert)</li>
        </ul>
      </section>
      
      <section className="data-rights">
        <h3>Ihre Rechte</h3>
        <Button onClick={exportData}>Daten herunterladen</Button>
        <Button onClick={deleteAccount}>Account löschen</Button>
        <Button onClick={manageConsent}>Einstellungen ändern</Button>
      </section>
    </div>
  );
};`
    },
    {
      title: "DSGVO-konforme Datenminimierung",
      language: "TypeScript", 
      code: `class MessagingDataProcessor {
  // Automatische Löschung nach DSGVO-Prinzipien
  async processMessage(message: Message) {
    // Nur notwendige Metadaten speichern
    const minimalMetadata = {
      timestamp: message.timestamp,
      messageId: message.id,
      // Sender/Empfänger nur wenn rechtlich erforderlich
      ...(this.isGroupChat(message) && { 
        participants: message.participants 
      })
    };
    
    // Automatische Löschung nach Zweckerfüllung
    this.scheduleDataDeletion(minimalMetadata, {
      retention: "30_DAYS",
      reason: "MESSAGE_DELIVERY_COMPLETED"
    });
  }
  
  // Transparente Datenverarbeitung
  async getDataProcessingInfo(userId: string) {
    return {
      collectedData: await this.getUserDataCategories(userId),
      purposes: this.getProcessingPurposes(),
      legalBasis: this.getLegalBasisPerPurpose(),
      retentionPeriods: this.getRetentionSchedule(),
      thirdParties: this.getThirdPartyProcessors()
    };
  }
}`
    }
  ];

  const industryGuidelines = [
    {
      industry: "Messaging Apps",
      guidelines: [
        "End-to-End-Verschlüsselung transparent kommunizieren",
        "Metadaten-Verarbeitung detailliert erklären",
        "Backup- und Sync-Funktionen klar beschreiben",
        "Gruppenchat-Datenschutz verständlich darstellen"
      ]
    },
    {
      industry: "Business Communication",
      guidelines: [
        "B2B-Messaging rechtssicher implementieren",
        "Kundenkommunikation DSGVO-konform gestalten", 
        "CRM-Integration datenschutzkonform konfigurieren",
        "Marketing-Automation compliance-ready aufsetzen"
      ]
    },
    {
      industry: "Social Platforms",
      guidelines: [
        "Direct Messages transparent verarbeiten",
        "Story/Status-Features datenschutzkonform entwickeln",
        "Freundschafts-/Kontakt-Daten minimieren",
        "Content-Moderation rechtssicher gestalten"
      ]
    },
    {
      industry: "Enterprise Solutions",
      guidelines: [
        "Workplace-Kommunikation DSGVO-ready implementieren",
        "Team-Messaging rechtssicher aufsetzen",
        "File-Sharing datenschutzkonform gestalten",
        "Admin-Controls für Compliance bereitstellen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Helmet>
        <title>WhatsApp Irland DSGVO Bußgeld €225 Mio – Messaging Compliance</title>
        <meta 
          name="description" 
          content="WhatsApp Ireland €225 Mio Bußgeld wegen Transparenz-Verstößen. Messaging-Apps DSGVO-konform gestalten & Compliance umsetzen." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="WhatsApp Irland DSGVO Bußgeld €225 Mio – Messaging Compliance" />
        <meta property="og:description" content="WhatsApp Ireland €225 Mio Bußgeld wegen Transparenz-Verstößen. Messaging-Apps DSGVO-konform gestalten & Compliance umsetzen." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://marsjonas.de/wissen/rechtsprechung/whatsapp-irland-2021" />
      </Helmet>
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-spin-slow" />
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
            <Button asChild variant="outline" className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10">
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
            >
              <Euro className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">€225 Millionen Bußgeld</span>
              <MessageSquare className="h-5 w-5 text-teal-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">WhatsApp Ireland</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                €225 Mio Bußgeld
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
                Messaging Compliance
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              €225 Millionen Bußgeld gegen 
              <span className="font-semibold text-emerald-300"> WhatsApp Ireland</span> wegen 
              Transparenz-Verstößen und ihre Auswirkungen auf Messaging-Compliance
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2">
                <Euro className="h-4 w-4 mr-2" />
                €225 Mio. Strafe
              </Badge>
              <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                2. September 2021
              </Badge>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
                <Building2 className="h-4 w-4 mr-2" />
                Irish DPC
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Eye className="h-4 w-4 mr-2" />
                Transparenz-Verstöße
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
              <TabsList className="grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl">
                <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                  Überblick
                </TabsTrigger>
                <TabsTrigger value="violations" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                  Verstöße
                </TabsTrigger>
                <TabsTrigger value="transparency" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                  Transparenz
                </TabsTrigger>
                <TabsTrigger value="messaging" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                  Messaging-Compliance
                </TabsTrigger>
                <TabsTrigger value="implementation" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                  Implementation
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Table of Contents */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30 mb-8">
                  <CardContent className="p-6">
                    <nav aria-label="Inhaltsverzeichnis">
                      <h2 id="inhaltsverzeichnis" className="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
                      <ul className="space-y-2 text-slate-300">
                        <li><a href="#whatsapp-verfahren" className="text-emerald-400 hover:text-emerald-300 transition-colors">1. Das WhatsApp Ireland Verfahren</a></li>
                        <li><a href="#zentrale-erkenntnisse" className="text-emerald-400 hover:text-emerald-300 transition-colors">2. Zentrale Erkenntnisse</a></li>
                        <li><a href="#verstoesse-details" className="text-emerald-400 hover:text-emerald-300 transition-colors">3. Verstöße-Details</a></li>
                        <li><a href="#transparenz-anforderungen" className="text-emerald-400 hover:text-emerald-300 transition-colors">4. Transparenz-Anforderungen</a></li>
                        <li><a href="#messaging-compliance" className="text-emerald-400 hover:text-emerald-300 transition-colors">5. Messaging-Compliance</a></li>
                        <li><a href="#implementation" className="text-emerald-400 hover:text-emerald-300 transition-colors">6. Implementation</a></li>
                      </ul>
                    </nav>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h2 id="whatsapp-verfahren" className="text-2xl font-bold text-white mb-6">Das WhatsApp Ireland Verfahren</h2>
                        <div className="space-y-4 text-slate-300 leading-relaxed">
                          <p>
                            Am 2. September 2021 verhängte die irische Datenschutzkommission (DPC) eine 
                            Geldbuße von 225 Millionen Euro gegen WhatsApp Ireland Limited wegen 
                            schwerwiegender Verstöße gegen die Transparenz-Anforderungen der DSGVO.
                          </p>
                          <p>
                            Das Verfahren konzentrierte sich auf die mangelnde Transparenz bei der 
                            Datenverarbeitung, insbesondere auf die unzureichende Information der Nutzer 
                            über die Verarbeitungszwecke, Rechtsgrundlagen und Betroffenenrechte gemäß 
                            den Artikeln 12-14 DSGVO. Ähnlich wie bei <Link to="/wissen/rechtsprechung/planet49-cookie" className="text-emerald-400 hover:text-emerald-300">Cookie-Consent-Verstößen</Link> 
                            zeigt sich auch hier die Bedeutung klarer Nutzerinformation.
                          </p>
                          <p>
                            Diese Entscheidung markiert einen Wendepunkt für Messaging-Apps und 
                            Kommunikationsplattformen und etabliert neue Standards für die 
                            Transparenz-Kommunikation in der Branche. Weitere relevante Urteile finden Sie in unserer 
                            <Link to="/wissen/rechtsprechung" className="text-emerald-400 hover:text-emerald-300">Rechtsprechungs-Übersicht</Link>.
                          </p>
                          <p>
                            Die DPC bemängelte insbesondere die Komplexität und Unverständlichkeit 
                            der Datenschutzerklärung sowie die fehlende Klarheit über die verschiedenen 
                            Verarbeitungszwecke und deren rechtliche Grundlagen.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Verfahren Details</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Behörde:</span>
                              <span className="text-white font-semibold">Irish DPC</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Datum:</span>
                              <span className="text-white font-semibold">2. September 2021</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Betroffene:</span>
                              <span className="text-white font-semibold">WhatsApp Ireland Ltd.</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Bußgeld:</span>
                              <span className="text-white font-semibold">€225 Mio.</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Schwerpunkt:</span>
                              <span className="text-white font-semibold">Transparenz</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Status:</span>
                              <span className="text-white font-semibold">Rechtskräftig</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-white mb-4">Betroffene DSGVO-Artikel</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              <span className="text-slate-300">Art. 12 - Transparente Information</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              <span className="text-slate-300">Art. 13 - Informationspflichten</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              <span className="text-slate-300">Art. 14 - Informationen bei Dritterhebung</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                            <Download className="h-4 w-4 mr-2" />
                            Entscheidung herunterladen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Insights */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-8">
                    <h2 id="zentrale-erkenntnisse" className="text-2xl font-bold text-white mb-8 text-center">
                      Zentrale Erkenntnisse des Falls
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: Eye,
                          title: "Transparenz-Revolution",
                          description: "Neue Standards für verständliche Datenschutzkommunikation in Messaging-Apps",
                          color: "from-emerald-500 to-teal-500"
                        },
                        {
                          icon: Users,
                          title: "Nutzer-Empowerment",
                          description: "Stärkung der Betroffenenrechte durch bessere Information und Kontrolle",
                          color: "from-teal-500 to-cyan-500"
                        },
                        {
                          icon: Shield,
                          title: "Industry Impact",
                          description: "Weitreichende Auswirkungen auf das gesamte Messaging- und Communication-Ökosystem",
                          color: "from-cyan-500 to-blue-500"
                        }
                      ].map((insight, index) => (
                        <div key={index} className="text-center">
                          <div className={cn(
                            "inline-flex p-4 rounded-full bg-gradient-to-r mb-4",
                            insight.color
                          )}>
                            <insight.icon className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-3">{insight.title}</h4>
                          <p className="text-slate-300 text-sm">{insight.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Violations Tab */}
            <TabsContent value="violations" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30">
                  <CardContent className="p-8">
                    <h2 id="verstoesse-details" className="text-2xl font-bold text-white mb-8 text-center">
                      Verstöße-Aufschlüsselung: €225 Millionen
                    </h2>
                    <div className="space-y-6">
                      {violationBreakdown.map((item, index) => (
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
                                <h4 className="text-lg font-bold text-white">{item.violation}</h4>
                                <Badge className={cn(
                                  "text-xs",
                                  item.severity === 'KRITISCH' ? 'bg-red-500/20 text-red-300' :
                                  item.severity === 'HOCH' ? 'bg-orange-500/20 text-orange-300' :
                                  'bg-yellow-500/20 text-yellow-300'
                                )}>
                                  {item.severity}
                                </Badge>
                              </div>
                              <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                              <div className="flex gap-2">
                                {item.articles.map((article, idx) => (
                                  <Badge key={idx} className="bg-emerald-500/20 text-emerald-300 text-xs">
                                    {article}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="text-2xl font-bold text-emerald-400">{item.amount}</div>
                              <div className="text-sm text-slate-400">{item.percentage}% der Gesamtsumme</div>
                            </div>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What went wrong */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Was ist schiefgelaufen?</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-400 mb-4">Hauptkritikpunkte der DPC:</h4>
                        <div className="space-y-3">
                          {[
                            "Unklare und komplexe Datenschutzerklärung",
                            "Fehlende Transparenz über Verarbeitungszwecke",
                            "Unzureichende Information über Betroffenenrechte",
                            "Mangelnde Klarheit bei Rechtsgrundlagen",
                            "Schwer verständliche Sprache für Durchschnittsnutzer"
                          ].map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-400 mb-4">Besondere Messaging-Probleme:</h4>
                        <div className="space-y-3">
                          {[
                            "Unklare Kommunikation über Metadaten-Sammlung",
                            "Fehlende Transparenz bei Business-Features",
                            "Unverständliche Erklärung der Verschlüsselung",
                            "Mangelnde Information über Gruppenchat-Datenverarbeitung",
                            "Komplizierte Opt-out Mechanismen"
                          ].map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <MessageSquare className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Transparency Requirements Tab */}
            <TabsContent value="transparency" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30 mb-8">
                  <CardContent className="p-8">
                    <h2 id="transparenz-anforderungen" className="text-2xl font-bold text-white mb-6 text-center">
                      DSGVO Transparenz-Anforderungen für Messaging-Apps
                    </h2>
                    <p className="text-slate-300 text-center mb-8">
                      Die Artikel 12-14 DSGVO definieren klare Anforderungen an die Transparenz der Datenverarbeitung. 
                      Hier sind die wichtigsten Compliance-Bereiche für Messaging-Plattformen:
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {transparencyRequirements.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                            area.color
                          )}>
                            <area.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{area.area}</h3>
                        </div>
                        <div className="space-y-3">
                          {area.requirements.map((requirement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Code Examples */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">DSGVO-konforme Code-Beispiele</h3>
                <div className="space-y-8">
                  {codeExamples.map((example, index) => (
                    <Card key={index} className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-xl font-bold text-white">{example.title}</h4>
                          <div className="flex items-center gap-3">
                            <Badge className="bg-emerald-500/20 text-emerald-300">
                              {example.language}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCopy(example.code, example.title)}
                              className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                            >
                              <Copy className="h-4 w-4" />
                              {copySuccess === example.title ? 'Kopiert!' : 'Kopieren'}
                            </Button>
                          </div>
                        </div>
                        <pre className="bg-slate-900/80 rounded-lg p-6 overflow-x-auto text-sm">
                          <code className="text-slate-300">{example.code}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Messaging Compliance Tab */}
            <TabsContent value="messaging" className="space-y-8">
              <h2 id="messaging-compliance" className="text-3xl font-bold text-white mb-8 text-center">
                Messaging-Compliance nach WhatsApp Ireland
              </h2>
              <div className="space-y-8">
                {messagingCompliance.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                            <category.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                          <Badge className={cn(
                            "px-3 py-1",
                            category.urgency === 'KRITISCH' ? 'bg-red-500/20 text-red-300' :
                            category.urgency === 'HOCH' ? 'bg-orange-500/20 text-orange-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          )}>
                            {category.urgency}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {category.impacts.map((impact, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{impact}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Industry Guidelines */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Branchenspezifische Compliance-Leitfäden</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {industryGuidelines.map((industry, index) => (
                    <Card key={index} className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{industry.industry}</h3>
                        </div>
                        <div className="space-y-3">
                          {industry.guidelines.map((guideline, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Lightbulb className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{guideline}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation" className="space-y-8">
              {/* Implementation Steps */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 id="implementation" className="text-3xl font-bold text-white mb-8 text-center">Messaging-Compliance Implementation Roadmap</h2>
                <div className="space-y-8">
                  {implementationSteps.map((phase, index) => (
                    <Card key={index} className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                            phase.color
                          )}>
                            {phase.priority}
                          </div>
                          <h4 className="text-2xl font-bold text-white">{phase.phase}</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.steps.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{step}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Best Practices */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-emerald-500/30">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Best Practices für Messaging-Transparenz
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: Eye,
                          title: "Privacy by Design",
                          practices: [
                            "Transparenz von Anfang an mitdenken",
                            "Nutzer-zentrierte Datenschutz-UX",
                            "Proaktive Kommunikation implementieren"
                          ]
                        },
                        {
                          icon: Users,
                          title: "User Empowerment",
                          practices: [
                            "Granulare Privatsphäre-Einstellungen",
                            "Einfache Datenexport-Funktionen",
                            "Verständliche Recht-Ausübung"
                          ]
                        },
                        {
                          icon: Shield,
                          title: "Continuous Compliance",
                          practices: [
                            "Regelmäßige Transparenz-Audits",
                            "Nutzer-Feedback Integration",
                            "Rechtsprechungs-Monitoring"
                          ]
                        }
                      ].map((practice, index) => (
                        <div key={index} className="text-center">
                          <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4">
                            <practice.icon className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-4">{practice.title}</h4>
                          <div className="space-y-2">
                            {practice.practices.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300 text-sm text-left">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-emerald-900/30 to-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Messaging-Compliance Services
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Vermeiden Sie teure Transparenz-Verstöße mit unseren spezialisierten Services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Messaging Audit",
                description: "Umfassende Prüfung Ihrer Messaging-App auf Transparenz-Compliance",
                icon: Search,
                link: "/services/messaging-audit",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Transparenz-Optimierung",
                description: "Entwicklung DSGVO-konformer Datenschutzkommunikation für Messaging-Plattformen",
                icon: Eye,
                link: "/services/transparency-optimization",
                color: "from-teal-500 to-cyan-500"
              },
              {
                title: "Compliance Monitoring",
                description: "Kontinuierliche Überwachung und Updates für Messaging-Compliance",
                icon: Monitor,
                link: "/services/compliance-monitoring",
                color: "from-cyan-500 to-blue-500"
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
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
                      cta.color
                    )}>
                      <cta.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {cta.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{cta.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      cta.color
                    )}>
                      <Link to={cta.link} className="flex items-center justify-center gap-2">
                        <span>Mehr erfahren</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Brauchen Sie sofortige Hilfe bei Messaging-Compliance?
                </h3>
                <p className="text-slate-300 mb-6">
                  Unsere Experten unterstützen Sie bei der DSGVO-konformen Gestaltung Ihrer Messaging-Plattform
                </p>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Kostenlose Beratung anfordern
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppIrelandCase;