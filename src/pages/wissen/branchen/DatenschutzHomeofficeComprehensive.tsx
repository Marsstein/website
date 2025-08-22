import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Home, 
  Clock, 
  Download,
  FileText,
  Scale,
  Lock,
  Wifi,
  Camera,
  Mail,
  Monitor,
  Award,
  UserCheck,
  Archive,
  Settings,
  MessageSquare,
  Laptop,
  HandshakeIcon,
  Globe,
  ShieldCheck,
  Activity,
  Briefcase,
  Euro,
  ChevronRight,
  ChevronDown,
  CheckSquare,
  Square,
  TrendingUp,
  UserPlus,
  FileSearch,
  Database,
  Key,
  AlertCircle,
  BookOpen,
  Zap,
  Target,
  HeartHandshake,
  Phone,
  Eye,
  Server,
  Smartphone,
  Cloud,
  HardDrive,
  Router,
  LockKeyhole,
  Users,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const DatenschutzHomeofficeComprehensive: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedScenarios, setExpandedScenarios] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'rechtslage', label: 'Rechtslage', icon: Scale },
    { id: 'technische-sicherheit', label: 'Technische Sicherheit', icon: Lock },
    { id: 'arbeitsplatz', label: 'Arbeitsplatz', icon: Monitor },
    { id: 'kommunikation', label: 'Kommunikation', icon: Mail },
    { id: 'umsetzung', label: 'Umsetzung', icon: Settings },
    { id: 'checkliste', label: 'Checkliste', icon: CheckSquare },
    { id: 'ressourcen', label: 'Ressourcen', icon: BookOpen }
  ];

  const complianceStats = [
    { label: 'Homeoffice-Plätze', value: '25%', trend: 'der Arbeitsplätze' },
    { label: 'Datenpannen', value: '43%', trend: 'durch Remote Work' },
    { label: 'Bußgeldrisiko', value: '20M€', trend: 'max. Strafe' }
  ];

  const scenarioTemplates = {
    homeOfficeSetup: `
// Homeoffice Arbeitsplatz DSGVO-konform einrichten
const homeOfficeSetup = {
  // Physische Sicherheit
  physicalSecurity: {
    workspace: "Separater, abschließbarer Bereich",
    screenPrivacy: "Blickschutzfilter bei geteilten Räumen",
    storage: "Verschließbarer Schrank für Dokumente",
    visitors: "Keine Einsichtnahme Dritter möglich"
  },
  
  // Technische Ausstattung
  technicalSetup: {
    laptop: "Vollverschlüsselung aktiviert",
    vpn: "Sichere VPN-Verbindung zum Unternehmen",
    firewall: "Router-Firewall konfiguriert",
    backups: "Automatisierte, verschlüsselte Backups"
  },
  
  // Datenschutz-Grundsätze
  dataProtection: {
    needToKnow: "Nur notwendige Daten im Homeoffice",
    minimization: "Regelmäßiges Löschen temporärer Dateien",
    transparency: "Mitarbeiter über Pflichten informiert"
  }
};`,
    
    videoConferencing: `
// Videokonferenzen datenschutzkonform durchführen
const videoConferencingPolicy = {
  // Plattform-Auswahl
  platformSelection: {
    dsgvoCompliance: "Europäische Anbieter bevorzugen",
    dataProcessingAgreement: "AVV mit Anbieter abschließen",
    serverLocation: "Datenverarbeitung in EU",
    encryption: "Ende-zu-Ende Verschlüsselung"
  },
  
  // Meeting-Durchführung
  meetingConduct: {
    recordingConsent: "Explizite Einwilligung für Aufzeichnungen",
    participantInfo: "Datenschutzhinweis vor Meeting",
    screenSharing: "Sensible Daten ausblenden",
    chatProtocol: "Chat-Verlauf kontrollieren"
  },
  
  // Nachbereitung
  postMeeting: {
    dataRetention: "Aufzeichnungen zeitnah löschen",
    chatCleanup: "Chat-Inhalte bereinigen",
    participantData: "Teilnehmerdaten minimieren",
    documentation: "Nur notwendige Protokolle speichern"
  }
};`,

    cloudStorageManagement: `
// Cloud-Speicher sicher für Homeoffice nutzen
const cloudStoragePolicy = {
  // Anbieter-Bewertung
  providerAssessment: {
    certification: "ISO 27001 und weitere Zertifikate",
    dataLocation: "Datenverarbeitung innerhalb EU/EWR",
    transparency: "Klare Datenschutzerklärung",
    contractual: "Auftragsverarbeitungsvertrag erforderlich"
  },
  
  // Technische Konfiguration
  technicalConfig: {
    encryption: "Daten verschlüsselt übertragen und speichern",
    accessControl: "Benutzerrechte granular verwalten",
    twoFactor: "Zwei-Faktor-Authentifizierung aktivieren",
    monitoring: "Zugriffe protokollieren und überwachen"
  },
  
  // Nutzungsrichtlinien
  usageGuidelines: {
    dataClassification: "Nur genehmigte Datentypen in Cloud",
    sharing: "Externe Freigaben kontrollieren",
    localBackup: "Wichtige Daten zusätzlich lokal sichern",
    regularReview: "Gespeicherte Daten regelmäßig prüfen"
  }
};`
  };

  const checklistCategories = [
    {
      title: 'Rechtliche Grundlagen',
      items: [
        { id: 'rl1', text: 'Homeoffice-Vereinbarung mit Datenschutzklauseln', required: true },
        { id: 'rl2', text: 'Verarbeitungsverzeichnis um Homeoffice erweitern', required: true },
        { id: 'rl3', text: 'Auftragsverarbeitungsverträge für Cloud-Dienste', required: true },
        { id: 'rl4', text: 'DSFA für Homeoffice-Tätigkeiten durchführen', required: false },
        { id: 'rl5', text: 'Betriebsvereinbarung anpassen', required: false }
      ]
    },
    {
      title: 'Technische Sicherheit',
      items: [
        { id: 'ts1', text: 'Vollverschlüsselung aller Endgeräte', required: true },
        { id: 'ts2', text: 'VPN-Zugang für alle Homeoffice-Mitarbeiter', required: true },
        { id: 'ts3', text: 'Sichere WLAN-Konfiguration prüfen', required: true },
        { id: 'ts4', text: 'Automatische Updates aktivieren', required: true },
        { id: 'ts5', text: 'Backup-Strategie für Homeoffice-Daten', required: true }
      ]
    },
    {
      title: 'Arbeitsplatz-Sicherheit',
      items: [
        { id: 'as1', text: 'Arbeitsplatz vor Einblicken Dritter schützen', required: true },
        { id: 'as2', text: 'Bildschirmsperre bei Abwesenheit', required: true },
        { id: 'as3', text: 'Sichere Aufbewahrung von Dokumenten', required: true },
        { id: 'as4', text: 'Clean Desk Policy umsetzen', required: true },
        { id: 'as5', text: 'Besuchsregelungen definieren', required: false }
      ]
    },
    {
      title: 'Kommunikation & Tools',
      items: [
        { id: 'kt1', text: 'Genehmigte Kommunikationstools definieren', required: true },
        { id: 'kt2', text: 'Videokonferenz-Richtlinien erstellen', required: true },
        { id: 'kt3', text: 'Cloud-Storage-Nutzung regeln', required: true },
        { id: 'kt4', text: 'Private Gerätenutzung (BYOD) regeln', required: false },
        { id: 'kt5', text: 'Incident-Response-Plan für Homeoffice', required: true }
      ]
    },
    {
      title: 'Schulung & Kontrolle',
      items: [
        { id: 'sk1', text: 'Homeoffice-Datenschutz-Schulung durchführen', required: true },
        { id: 'sk2', text: 'Regelmäßige Sicherheitschecks etablieren', required: true },
        { id: 'sk3', text: 'Meldepflichten bei Datenpannen kommunizieren', required: true },
        { id: 'sk4', text: 'Datenschutz-Awareness kontinuierlich fördern', required: false },
        { id: 'sk5', text: 'Homeoffice-Audits durchführen', required: false }
      ]
    }
  ];

  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Update URL with hash
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset for sticky navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleScenario = (id: string) => {
    setExpandedScenarios(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const toggleChecklistItem = (itemId: string) => {
    setCompletedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const calculateProgress = () => {
    const totalItems = checklistCategories.reduce(
      (sum, category) => sum + category.items.length, 
      0
    );
    return Math.round((completedItems.length / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Helmet>
        <title>Datenschutz Homeoffice – DSGVO-konforme Remote Work Lösungen</title>
        <meta name="description" content="DSGVO-konformes Homeoffice: Sichere Remote-Arbeit mit Datenschutz-Compliance. Technische & organisatorische Maßnahmen. Jetzt informieren!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Datenschutz Homeoffice – DSGVO-konforme Remote Work Lösungen" />
        <meta property="og:description" content="DSGVO-konformes Homeoffice: Sichere Remote-Arbeit mit Datenschutz-Compliance. Technische & organisatorische Maßnahmen. Jetzt informieren!" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://marsstein.de/wissen/branchen/datenschutz-homeoffice" />
        <link rel="canonical" href="https://marsstein.de/wissen/branchen/datenschutz-homeoffice" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Datenschutz Homeoffice – DSGVO-konforme Remote Work Lösungen",
            "description": "DSGVO-konformes Homeoffice: Sichere Remote-Arbeit mit Datenschutz-Compliance. Technische & organisatorische Maßnahmen",
            "author": {
              "@type": "Organization",
              "name": "Marsstein"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Marsstein"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-12-01"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Wissen",
                "item": "https://marsstein.de/wissen"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Branchen",
                "item": "https://marsstein.de/wissen/branchen"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Datenschutz Homeoffice",
                "item": "https://marsstein.de/wissen/branchen/datenschutz-homeoffice"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 py-20 md:py-28 overflow-hidden">
        {/* Animierte Hintergrund-Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="container px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                <Home className="h-4 w-4 mr-2" />
                Datenschutz im Homeoffice
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DSGVO-konformes
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Homeoffice
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sicheres Remote-Arbeiten ohne Datenschutz-Risiken. Schützen Sie Ihr Unternehmen 
              und Ihre Mitarbeiter vor Bußgeldern und Datenpannen im Homeoffice.
            </motion.p>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Remote Work Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>DSGVO-Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Praxiserprobte Lösungen</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Laptop className="h-5 w-5 mr-2" />
                Homeoffice-Beratung starten
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/30"
              >
                <Download className="h-5 w-5 mr-2" />
                Homeoffice-Leitfaden herunterladen
              </Button>
            </motion.div>
          </div>

          {/* Compliance Dashboard */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white">
                  Homeoffice-Datenschutz: Aktuelle Herausforderungen
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {complianceStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {stat.trend}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm" aria-label="Inhaltsverzeichnis">
        <div className="container px-4">
          <div className="flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  activeSection === item.id
                    ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Überblick Section */}
            <section id="ueberblick" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Homeoffice & DSGVO - Die neue Realität
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Home className="h-6 w-6 text-blue-600" />
                        Warum Homeoffice-Datenschutz kritisch ist
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Erweiterte Angriffsfläche</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Heimnetzwerke sind oft weniger sicher als Firmen-IT
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Eye className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Fehlende physische Kontrolle</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Bildschirme können von Familienmitgliedern eingesehen werden
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Cloud className="h-5 w-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Unkontrollierte Cloud-Nutzung</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Private Tools werden ohne Freigabe verwendet
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Smartphone className="h-5 w-5 text-indigo-600 mt-0.5" />
                          <div>
                            <p className="font-medium">BYOD-Herausforderungen</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Private Geräte vermischen Berufs- und Privatleben
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-indigo-600" />
                        DSGVO-Anforderungen im Homeoffice
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
                        <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                          Art. 32 DSGVO - Sicherheit der Verarbeitung
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Angemessene technische und organisatorische Maßnahmen auch im Homeoffice
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                          Art. 5 DSGVO - Grundsätze
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Datenschutz durch Technik und datenschutzfreundliche Voreinstellungen
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Art. 33/34 DSGVO - Meldepflichten
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Datenpannen müssen auch aus dem Homeoffice gemeldet werden
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Rechtslage Section */}
            <section id="rechtslage" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Rechtliche Grundlagen & Verantwortlichkeiten
                </h2>

                <div className="grid lg:grid-cols-3 gap-6">
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Scale className="h-6 w-6 text-blue-600" />
                        Arbeitgeberpflichten im Homeoffice
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-blue-600" />
                            Homeoffice-Vereinbarung
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Datenschutzbestimmungen explizit aufführen</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Technische Mindestanforderungen definieren</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Kontrollrechte des Arbeitgebers regeln</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Meldepflichten bei Sicherheitsvorfällen</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            Haftungsrisiken minimieren
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Trotz Homeoffice bleibt der Arbeitgeber für Datenschutzkonformität verantwortlich. 
                            Klare Regelungen und Schulungen sind essentiell.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-indigo-600" />
                            Mitarbeiterverantwortung
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                              <h5 className="font-medium mb-2">Technische Pflichten</h5>
                              <ul className="space-y-1">
                                <li>• VPN-Nutzung obligatorisch</li>
                                <li>• Bildschirmsperre aktivieren</li>
                                <li>• Updates zeitnah installieren</li>
                                <li>• Sichere Passwörter verwenden</li>
                              </ul>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                              <h5 className="font-medium mb-2">Organisatorische Pflichten</h5>
                              <ul className="space-y-1">
                                <li>• Clean Desk Policy beachten</li>
                                <li>• Vertraulichkeit wahren</li>
                                <li>• Vorfälle melden</li>
                                <li>• Schulungen absolvieren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Euro className="h-6 w-6 text-red-600" />
                        Bußgeldrisiken
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                          <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                            Bis zu 20 Mio. €
                          </h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            oder 4% des weltweiten Jahresumsatzes
                          </p>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                          <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                            Häufige Verstöße
                          </h5>
                          <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                            <li>• Unzureichende TOMs</li>
                            <li>• Fehlende Schulungen</li>
                            <li>• Mangelhafte Kontrollen</li>
                            <li>• Verspätete Meldungen</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                            Schadensersatz
                          </h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Zusätzlich zu Bußgeldern bei materiellen oder immateriellen Schäden
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Technische Sicherheit Section */}
            <section id="technische-sicherheit" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Technische Sicherheitsmaßnahmen
                </h2>

                <Card className="border-2 border-blue-200 dark:border-blue-800">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                    <CardTitle className="flex items-center gap-3">
                      <Lock className="h-6 w-6 text-blue-600" />
                      Homeoffice-Setup sicher konfigurieren
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div 
                      className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg cursor-pointer"
                      onClick={() => toggleScenario('homeOfficeSetup')}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                          Praxis-Guide: Sicherer Homeoffice-Arbeitsplatz
                        </h4>
                        {expandedScenarios.includes('homeOfficeSetup') ? (
                          <ChevronDown className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      {expandedScenarios.includes('homeOfficeSetup') && (
                        <div className="mt-4">
                          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm">
                              <code>{scenarioTemplates.homeOfficeSetup}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <HardDrive className="h-5 w-5 text-blue-600" />
                          Gerätesicherheit
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <LockKeyhole className="h-4 w-4 text-blue-600 mt-0.5" />
                            <span>Vollverschlüsselung aktivieren</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                            <span>Firewall konfigurieren</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Key className="h-4 w-4 text-blue-600 mt-0.5" />
                            <span>Starke Authentifizierung</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Router className="h-5 w-5 text-indigo-600" />
                          Netzwerksicherheit
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Wifi className="h-4 w-4 text-indigo-600 mt-0.5" />
                            <span>VPN-Verbindung obligatorisch</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Lock className="h-4 w-4 text-indigo-600 mt-0.5" />
                            <span>WLAN WPA3-Verschlüsselung</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Server className="h-4 w-4 text-indigo-600 mt-0.5" />
                            <span>Router-Firmware aktuell halten</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Cloud className="h-5 w-5 text-purple-600" />
                          Cloud & Backup
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-purple-600 mt-0.5" />
                            <span>Genehmigte Cloud-Dienste nutzen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Archive className="h-4 w-4 text-purple-600 mt-0.5" />
                            <span>Automatische Backups</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Key className="h-4 w-4 text-purple-600 mt-0.5" />
                            <span>Zwei-Faktor-Authentifizierung</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Kritische Sicherheitslücken vermeiden
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium mb-1">Häufige Fehler</h5>
                          <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                            <li>• Veraltete Software/Betriebssysteme</li>
                            <li>• Schwache Router-Passwörter</li>
                            <li>• Unverschlüsselte USB-Sticks</li>
                            <li>• Fehlende Bildschirmsperre</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">Sofortmaßnahmen</h5>
                          <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                            <li>• Alle Geräte auf neuesten Stand</li>
                            <li>• Passwort-Manager verwenden</li>
                            <li>• Regelmäßige Sicherheitschecks</li>
                            <li>• Backup-Strategie testen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Arbeitsplatz Section */}
            <section id="arbeitsplatz" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Physische Arbeitsplatzsicherheit
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Eye className="h-6 w-6 text-blue-600" />
                        Sichtschutz & Privatsphäre
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Clean Screen Policy</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Monitor className="h-4 w-4 text-blue-600" />
                            <span>Bildschirm von öffentlichen Bereichen abwenden</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-blue-600" />
                            <span>Sichtschutzfolie bei geteilten Räumen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Lock className="h-4 w-4 text-blue-600" />
                            <span>Automatische Bildschirmsperre nach 5 Min.</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Home className="h-4 w-4 text-blue-600" />
                            <span>Separaten Arbeitsbereich einrichten</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Besucherregelungen</h4>
                        <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-yellow-600" />
                              <span>Familie/WG über Vertraulichkeit informieren</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-yellow-600" />
                              <span>Arbeitszeiten klar kommunizieren</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-yellow-600" />
                              <span>Unterlagen vor Fremdzugriff schützen</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-indigo-600" />
                        Dokumentensicherheit
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Clean Desk Policy</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Archive className="h-4 w-4 text-indigo-600 mt-0.5" />
                            <span>Papierunterlagen verschlossen aufbewahren</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <FileText className="h-4 w-4 text-indigo-600 mt-0.5" />
                            <span>Arbeitsplatz nach Feierabend aufräumen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Lock className="h-4 w-4 text-indigo-600 mt-0.5" />
                            <span>Vertrauliche Dokumente sofort wegschließen</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Sichere Entsorgung</h4>
                        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3">
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <FileSearch className="h-4 w-4 text-red-600" />
                              <span>Datenschutz-konforme Vernichtung</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <HardDrive className="h-4 w-4 text-red-600" />
                              <span>Sichere Löschung digitaler Daten</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600" />
                              <span>Keine sensiblen Daten in Hausmüll</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Kommunikation Section */}
            <section id="kommunikation" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Sichere Kommunikation & Collaboration
                </h2>

                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Camera className="h-6 w-6 text-blue-600" />
                        Videokonferenzen & Meetings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg cursor-pointer"
                        onClick={() => toggleScenario('videoConferencing')}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                            Best Practice: Sichere Videokonferenzen
                          </h4>
                          {expandedScenarios.includes('videoConferencing') ? (
                            <ChevronDown className="h-5 w-5 text-blue-600" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                        {expandedScenarios.includes('videoConferencing') && (
                          <div className="mt-4">
                            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                              <pre className="text-sm">
                                <code>{scenarioTemplates.videoConferencing}</code>
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Sichere Meeting-Plattformen</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Microsoft Teams (Business/Enterprise)</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Zoom (mit BAA und EU-Rechenzentren)</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Cisco Webex (DSGVO-konform konfiguriert)</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                          <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                            Aufzeichnungen mit Bedacht
                          </h5>
                          <p className="text-xs text-gray-700 dark:text-gray-300">
                            Meeting-Aufzeichnungen nur mit expliziter Einwilligung aller Teilnehmer. 
                            Automatische Transkription kritisch prüfen.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Cloud className="h-6 w-6 text-indigo-600" />
                        Cloud-Services & File Sharing
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg cursor-pointer"
                        onClick={() => toggleScenario('cloudStorageManagement')}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">
                            Anleitung: Sichere Cloud-Nutzung
                          </h4>
                          {expandedScenarios.includes('cloudStorageManagement') ? (
                            <ChevronDown className="h-5 w-5 text-indigo-600" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-indigo-600" />
                          )}
                        </div>
                        {expandedScenarios.includes('cloudStorageManagement') && (
                          <div className="mt-4">
                            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                              <pre className="text-sm">
                                <code>{scenarioTemplates.cloudStorageManagement}</code>
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Genehmigte Cloud-Services</h4>
                          <div className="space-y-2">
                            <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                              <h5 className="font-medium text-green-800 dark:text-green-200 mb-1">Enterprise-Lösungen</h5>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                Microsoft 365, Google Workspace mit BAA
                              </p>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Deutsche Anbieter</h5>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                IONOS, Nextcloud, ownCloud
                              </p>
                            </div>
                            <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                              <h5 className="font-medium text-red-800 dark:text-red-200 mb-1">Nicht empfohlen</h5>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                Consumer-Versionen ohne AVV
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                      Messenger & Instant Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                          Empfohlene Tools
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Microsoft Teams Chat</li>
                          <li>• Slack Enterprise Grid</li>
                          <li>• Threema Work</li>
                          <li>• Signal (Gruppen begrenzt)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                          Mit Vorsicht
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• WhatsApp Business (AVV)</li>
                          <li>• Telegram (nur verschlüsselt)</li>
                          <li>• Discord (Firmen-Account)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                          Zu vermeiden
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Private WhatsApp</li>
                          <li>• WeChat</li>
                          <li>• Unverschlüsselte SMS</li>
                          <li>• Persönliche Social Media</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Umsetzung Section */}
            <section id="umsetzung" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Schritt-für-Schritt Umsetzung
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="border-t-4 border-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-bold text-sm">
                          1
                        </span>
                        Planung
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Woche 1-2
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Homeoffice-Policy entwickeln</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Stakeholder einbeziehen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Ziele und KPIs definieren</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-indigo-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full font-bold text-sm">
                          2
                        </span>
                        Infrastruktur
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Woche 3-6
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Router className="h-4 w-4 text-indigo-600 mt-0.5" />
                          <span>VPN-Infrastruktur ausbauen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Cloud className="h-4 w-4 text-indigo-600 mt-0.5" />
                          <span>Cloud-Services evaluieren</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-indigo-600 mt-0.5" />
                          <span>Security-Tools implementieren</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full font-bold text-sm">
                          3
                        </span>
                        Schulung
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Woche 7-8
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <BookOpen className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span>Mitarbeiterschulungen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span>Zertifizierungen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span>Leitfäden verteilen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full font-bold text-sm">
                          4
                        </span>
                        Monitoring
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Laufend
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Activity className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Kontinuierliche Überwachung</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>KPI-Tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Settings className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Kontinuierliche Verbesserung</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      Change Management für Homeoffice-Datenschutz
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Erfolgsfaktoren</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-blue-600" />
                            <span>Top-Management Support sichern</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-blue-600" />
                            <span>Transparente Kommunikation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-blue-600" />
                            <span>Positive Anreizsysteme schaffen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-blue-600" />
                            <span>Kontinuierliche Weiterbildung</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Widerstand überwinden</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-purple-600" />
                            <span>Vorteile klar kommunizieren</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <HeartHandshake className="h-4 w-4 text-purple-600" />
                            <span>Mitarbeiter in Planung einbeziehen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Settings className="h-4 w-4 text-purple-600" />
                            <span>Schrittweise Implementierung</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-purple-600" />
                            <span>Support-Hotline einrichten</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Interaktive Checkliste */}
            <section id="checkliste" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Homeoffice-Datenschutz Checkliste
                </h2>

                <Card className="border-2 border-blue-200 dark:border-blue-800">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <CheckSquare className="h-6 w-6 text-blue-600" />
                        Umsetzungsfortschritt verfolgen
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {calculateProgress()}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          abgeschlossen
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Progress 
                      value={calculateProgress()} 
                      className="mb-8 h-3"
                    />

                    <div className="space-y-6">
                      {checklistCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                            {category.title}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {category.items.map((item) => (
                              <div
                                key={item.id}
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all",
                                  completedItems.includes(item.id)
                                    ? "bg-blue-50 dark:bg-blue-950/30"
                                    : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                                )}
                                onClick={() => toggleChecklistItem(item.id)}
                              >
                                {completedItems.includes(item.id) ? (
                                  <CheckSquare className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                ) : (
                                  <Square className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                                <span className={cn(
                                  "text-sm",
                                  completedItems.includes(item.id) && "line-through text-gray-500"
                                )}>
                                  {item.text}
                                  {item.required && (
                                    <span className="text-red-500 ml-1">*</span>
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Hinweis:</strong> Mit <span className="text-red-500">*</span> markierte Punkte sind 
                        gesetzlich verpflichtend und sollten priorisiert werden.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Ressourcen Section */}
            <section id="ressourcen" className="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Ressourcen & Tools
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                        Vorlagen & Dokumente
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Homeoffice-Vereinbarung DSGVO
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Technische Sicherheitsrichtlinie
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Mitarbeiter-Leitfaden
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Incident Response Plan
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <Zap className="h-6 w-6 text-indigo-600" />
                        Security Tools
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30">
                            <Shield className="h-4 w-4 mr-2" />
                            VPN-Konfigurationshilfe
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30">
                            <Lock className="h-4 w-4 mr-2" />
                            Verschlüsselungs-Guide
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30">
                            <Eye className="h-4 w-4 mr-2" />
                            Monitoring-Setup
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30">
                            <Archive className="h-4 w-4 mr-2" />
                            Backup-Strategien
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <BookOpen className="h-6 w-6 text-purple-600" />
                        Weiterführende Links
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li>
                          <Link 
                            to="/wissen/branchen/datenschutz-betriebsrat"
                            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            <HandshakeIcon className="h-4 w-4" />
                            Datenschutz für Betriebsräte
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/wissen/it-sicherheit/verschluesselung"
                            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            <Lock className="h-4 w-4" />
                            Verschlüsselung & sichere Kommunikation
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/wissen/compliance/audit-management"
                            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            <Award className="h-4 w-4" />
                            DSGVO-Audit Management
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/wissen/recht/beschaeftigtendatenschutz"
                            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                          >
                            <Users className="h-4 w-4" />
                            Beschäftigtendatenschutz
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Notfall-Box */}
                <Card className="mt-8 border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-800 dark:text-red-200">
                      <AlertCircle className="h-6 w-6" />
                      Notfall: Homeoffice-Sicherheitsvorfall
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">1</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Isolation</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Betroffenes Gerät vom Netz trennen
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">2</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Meldung</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          IT-Security sofort informieren
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">3</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Dokumentation</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Vorfall detailliert protokollieren
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">4</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Recovery</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Nur nach Freigabe weiterarbeiten
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>24/7 Notfall-Hotline:</strong> Bei kritischen Vorfällen sofortige Eskalation an den DSB und das Management erforderlich.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 dark:from-blue-950 dark:via-indigo-900 dark:to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Laptop className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sicheres Homeoffice beginnt jetzt!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schützen Sie Ihr Unternehmen vor Datenschutzverletzungen im Homeoffice. 
              Wir unterstützen Sie bei der DSGVO-konformen Umsetzung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Homeoffice-Beratung starten
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
              >
                <Download className="h-5 w-5 mr-2" />
                Kompletten Leitfaden herunterladen
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="h-10 w-10 text-blue-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  100% DSGVO-konform
                </h3>
                <p className="text-blue-100 text-sm">
                  Rechtssichere Homeoffice-Lösungen ohne Compliance-Risiken
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="h-10 w-10 text-indigo-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Schnelle Umsetzung
                </h3>
                <p className="text-indigo-100 text-sm">
                  In wenigen Wochen zum sicheren Homeoffice-Setup
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-10 w-10 text-purple-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Expertenwissen
                </h3>
                <p className="text-purple-100 text-sm">
                  Von zertifizierten Datenschutzbeauftragten entwickelt
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatenschutzHomeofficeComprehensive;