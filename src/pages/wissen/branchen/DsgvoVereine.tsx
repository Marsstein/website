import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Clock, 
  Download,
  FileText,
  Scale,
  Lock,
  Calendar,
  Camera,
  Mail,
  CreditCard,
  Award,
  UserCheck,
  Archive,
  Settings,
  MessageSquare,
  Heart,
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
  ArrowRight,
  X,
  ExternalLink,
  Gavel,
  Timer,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  Network,
  FileX,
  UserX,
  Ban,
  Code,
  Clipboard,
  Phone,
  Trophy,
  Server,
  Cookie,
  FileCheck,
  Eye,
  Monitor,
  Wifi
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const DsgvoVereine: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedScenarios, setExpandedScenarios] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'mitgliederdaten', label: 'Mitgliederdaten', icon: Users },
    { id: 'veranstaltungen', label: 'Veranstaltungen', icon: Calendar },
    { id: 'kommunikation', label: 'Kommunikation', icon: Mail },
    { id: 'finanzen', label: 'Finanzen', icon: Euro },
    { id: 'umsetzung', label: 'Umsetzung', icon: Settings },
    { id: 'checkliste', label: 'Checkliste', icon: CheckSquare },
    { id: 'ressourcen', label: 'Ressourcen', icon: BookOpen }
  ];

  // Zusätzliche Unternavigation für detaillierte Abschnitte
  const subNavigationItems = {
    mitgliederdaten: [
      { id: 'mitgliederdaten-rechtsgrundlagen', label: 'Rechtsgrundlagen' },
      { id: 'mitgliederdaten-erhebung', label: 'Datenerhebung' },
      { id: 'mitgliederdaten-sicherheit', label: 'Datensicherheit' },
      { id: 'mitgliederdaten-loeschung', label: 'Löschkonzept' }
    ],
    veranstaltungen: [
      { id: 'veranstaltungen-fotos', label: 'Fotografie & Bildrechte' },
      { id: 'veranstaltungen-anmeldung', label: 'Anmeldemanagement' },
      { id: 'veranstaltungen-gaestelisten', label: 'Gästelisten' },
      { id: 'veranstaltungen-livestream', label: 'Live-Streaming' }
    ],
    kommunikation: [
      { id: 'kommunikation-newsletter', label: 'Newsletter & E-Mail' },
      { id: 'kommunikation-messenger', label: 'Messenger-Dienste' },
      { id: 'kommunikation-website', label: 'Website & Social Media' },
      { id: 'kommunikation-mitgliederzeitung', label: 'Vereinszeitung' }
    ],
    finanzen: [
      { id: 'finanzen-beitraege', label: 'Mitgliedsbeiträge' },
      { id: 'finanzen-spenden', label: 'Spendenverwaltung' },
      { id: 'finanzen-buchhaltung', label: 'Digitale Buchhaltung' },
      { id: 'finanzen-pruefung', label: 'Kassenprüfung' }
    ]
  };

  const complianceStats = [
    { label: 'Betroffene Vereine', value: '600.000+', trend: 'in Deutschland', icon: Users },
    { label: 'Durchschn. Bußgeld', value: '12.500€', trend: 'bei Verstößen', icon: Euro },
    { label: 'Umsetzungszeit', value: '3-6', trend: 'Monate', icon: Clock },
    { label: 'Compliance Rate', value: '68%', trend: '+15% seit 2023', icon: TrendingUp },
    { label: 'Mitgliederdaten', value: '100%', trend: 'Schutzbedarf', icon: Shield },
    { label: 'Audit Readiness', value: '85%', trend: 'mit unserer Lösung', icon: CheckCircle }
  ];

  const scenarioTemplates = {
    memberRegistration: `// Mitgliederregistrierung DSGVO-konform
const memberRegistration = {
  // Einwilligungserklärung
  consent: {
    dataProcessing: "Ich willige ein, dass meine Daten...",
    newsletter: "Ich möchte den Newsletter erhalten",
    photos: "Ich erlaube Fotos bei Veranstaltungen"
  },
  
  // Nur notwendige Daten erheben
  requiredData: {
    name: true,
    email: true,
    phone: false, // optional
    birthdate: true // für Jugendschutz
  },
  
  // Speicherdauer definieren
  retention: {
    activeMember: "Dauer der Mitgliedschaft",
    inactiveMember: "10 Jahre nach Austritt",
    newsletter: "Bis zum Widerruf"
  }
};`,
    
    eventPhotography: `// Fotografie bei Vereinsveranstaltungen
const eventPhotoPolicy = {
  // Vor der Veranstaltung
  beforeEvent: {
    information: "Hinweis auf Fotoaufnahmen",
    optOut: "Widerspruchsmöglichkeit anbieten",
    badges: "Keine-Fotos-Buttons bereitstellen"
  },
  
  // Während der Veranstaltung
  duringEvent: {
    photographer: "Erkennbar machen",
    respect: "Keine-Fotos-Zonen einrichten",
    focus: "Übersichtsaufnahmen bevorzugen"
  },
  
  // Nach der Veranstaltung
  afterEvent: {
    review: "Bilder vor Veröffentlichung prüfen",
    consent: "Bei Porträts Einwilligung einholen",
    deletion: "Löschfristen beachten"
  }
};`,

    volunteerManagement: `// Ehrenamtlichen-Verwaltung
const volunteerDataHandling = {
  // Datenerhebung
  collection: {
    purpose: "Nur für Vereinszwecke",
    necessity: "Datensparsamkeit beachten",
    transparency: "Klare Information über Nutzung"
  },
  
  // Zugriffskontrolle
  access: {
    needToKnow: "Nur relevante Personen",
    roles: "Klare Rechtevergabe",
    documentation: "Zugriffe protokollieren"
  },
  
  // Schulung
  training: {
    basics: "DSGVO-Grundlagen vermitteln",
    practice: "Praktische Beispiele zeigen",
    updates: "Regelmäßige Auffrischung"
  }
};`
  };

  const checklistCategories = [
    {
      title: 'Rechtliche Grundlagen',
      items: [
        { id: 'rl1', text: 'Datenschutzbeauftragten bestellen (bei Bedarf)', required: false },
        { id: 'rl2', text: 'Verzeichnis von Verarbeitungstätigkeiten erstellen', required: true },
        { id: 'rl3', text: 'Datenschutzerklärung für Website erstellen', required: true },
        { id: 'rl4', text: 'Impressum aktualisieren', required: true },
        { id: 'rl5', text: 'Auftragsverarbeitungsverträge abschließen', required: true }
      ]
    },
    {
      title: 'Mitgliederverwaltung',
      items: [
        { id: 'mv1', text: 'Einwilligungserklärungen einholen', required: true },
        { id: 'mv2', text: 'Mitgliederdatenbank sichern', required: true },
        { id: 'mv3', text: 'Löschkonzept entwickeln', required: true },
        { id: 'mv4', text: 'Auskunftsverfahren etablieren', required: true },
        { id: 'mv5', text: 'Datenportabilität gewährleisten', required: false }
      ]
    },
    {
      title: 'Kommunikation',
      items: [
        { id: 'ko1', text: 'Newsletter-Anmeldung Double-Opt-In', required: true },
        { id: 'ko2', text: 'Abmeldemöglichkeit in jedem Newsletter', required: true },
        { id: 'ko3', text: 'WhatsApp-Gruppen prüfen', required: false },
        { id: 'ko4', text: 'E-Mail-Verteiler verschlüsseln', required: false },
        { id: 'ko5', text: 'Social Media Richtlinien erstellen', required: false }
      ]
    },
    {
      title: 'Veranstaltungen',
      items: [
        { id: 've1', text: 'Fotohinweise bei Events aushängen', required: true },
        { id: 've2', text: 'Einwilligung für Bildaufnahmen', required: true },
        { id: 've3', text: 'Teilnehmerlisten sicher verwahren', required: true },
        { id: 've4', text: 'Anmeldeformulare DSGVO-konform', required: true },
        { id: 've5', text: 'Gästelisten nach Event löschen', required: true }
      ]
    },
    {
      title: 'Technische Maßnahmen',
      items: [
        { id: 'tm1', text: 'Sichere Passwörter einführen', required: true },
        { id: 'tm2', text: 'Regelmäßige Backups durchführen', required: true },
        { id: 'tm3', text: 'Verschlüsselung aktivieren', required: true },
        { id: 'tm4', text: 'Zugriffsrechte dokumentieren', required: true },
        { id: 'tm5', text: 'Alte Daten sicher löschen', required: true }
      ]
    }
  ];

  const praxisScenarios = [
    {
      id: 'new-member',
      title: 'Neue Mitgliederaufnahme',
      icon: UserPlus,
      challenge: 'Ein neues Mitglied möchte dem Sportverein beitreten. Welche Daten dürfen Sie erheben?',
      solution: {
        steps: [
          {
            title: 'Datensparsamkeit beachten',
            description: 'Nur Daten erheben, die für die Mitgliedschaft notwendig sind',
            details: [
              'Name und Anschrift für Vereinsregister',
              'Geburtsdatum für Altersgruppen',
              'E-Mail für Vereinskommunikation',
              'Bankverbindung nur bei SEPA-Mandat'
            ]
          },
          {
            title: 'Transparente Information',
            description: 'Mitglied über Datenverarbeitung informieren',
            details: [
              'Zweck der Datenerhebung erklären',
              'Speicherdauer nennen',
              'Betroffenenrechte aufzeigen',
              'Kontaktdaten des Vorstands angeben'
            ]
          },
          {
            title: 'Einwilligungen einholen',
            description: 'Separate Einwilligungen für freiwillige Datennutzung',
            details: [
              'Newsletter-Versand',
              'Fotos bei Veranstaltungen',
              'Ergebnislisten im Internet',
              'Weitergabe an Verbände'
            ]
          }
        ]
      },
      risk: 'Mittel',
      legalBasis: 'Art. 6 Abs. 1 lit. b DSGVO (Vertrag)'
    },
    {
      id: 'event-photos',
      title: 'Vereinsfest mit Fotograf',
      icon: Camera,
      challenge: 'Bei Ihrem Sommerfest möchten Sie Fotos für die Vereinswebsite und Social Media machen.',
      solution: {
        steps: [
          {
            title: 'Vorab informieren',
            description: 'Alle Teilnehmer rechtzeitig über Fotoaufnahmen informieren',
            details: [
              'In der Einladung auf Fotos hinweisen',
              'Zweck der Aufnahmen nennen',
              'Widerspruchsmöglichkeit einräumen',
              'Alternative anbieten (z.B. Buttons)'
            ]
          },
          {
            title: 'Am Veranstaltungstag',
            description: 'Sichtbare Hinweise und Rücksichtnahme',
            details: [
              'Hinweisschilder am Eingang',
              'Fotograf kennzeichnen',
              'Foto-freie Zonen einrichten',
              'Keine heimlichen Aufnahmen'
            ]
          },
          {
            title: 'Nach der Veranstaltung',
            description: 'Verantwortungsvoller Umgang mit Bildern',
            details: [
              'Bilder vor Veröffentlichung prüfen',
              'Keine peinlichen Situationen zeigen',
              'Bei Kindern besondere Vorsicht',
              'Löschfristen beachten'
            ]
          }
        ]
      },
      risk: 'Hoch',
      legalBasis: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) oder lit. a (Einwilligung)'
    },
    {
      id: 'whatsapp-group',
      title: 'WhatsApp-Gruppe für Teams',
      icon: MessageSquare,
      challenge: 'Die Jugendmannschaft möchte eine WhatsApp-Gruppe für Training und Spieltermine.',
      solution: {
        steps: [
          {
            title: 'Problematik erkennen',
            description: 'WhatsApp und Datenschutz im Verein',
            details: [
              'Kontaktdaten werden an Meta übertragen',
              'Keine Kontrolle über Datenverarbeitung',
              'Besondere Schutzpflicht bei Minderjährigen',
              'Haftungsrisiko für Verein'
            ]
          },
          {
            title: 'Alternativen prüfen',
            description: 'Datenschutzfreundliche Kommunikationswege',
            details: [
              'Signal oder Threema als Alternative',
              'Vereinseigene App oder Portal',
              'E-Mail-Verteiler mit BCC',
              'SMS-Verteiler für wichtige Infos'
            ]
          },
          {
            title: 'Falls WhatsApp unvermeidbar',
            description: 'Risiken minimieren',
            details: [
              'Nur auf freiwilliger Basis',
              'Keine offiziellen Vereinsinfos',
              'Alternative Kommunikation anbieten',
              'Elterneinwilligung bei Minderjährigen'
            ]
          }
        ]
      },
      risk: 'Sehr hoch',
      legalBasis: 'Problematisch - Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) schwer umsetzbar'
    }
  ];

  // Handle initial load with hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100;
          const targetPosition = element.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          setActiveSection(hash);
        }
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => 
        document.getElementById(item.id)
      ).filter(Boolean);
      
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const scrollToSection = (sectionId: string) => {
    // Update URL with hash for SEO
    if (window.location.hash !== `#${sectionId}`) {
      window.location.hash = sectionId;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const targetPosition = section.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
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
      <Header />
      
      {/* Hero Section mit Parallax */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20 py-20 md:py-28 overflow-hidden">
        {/* Animierte Hintergrund-Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="container px-4"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-2 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                <Users className="h-4 w-4 mr-2" />
                DSGVO für Vereine & Verbände
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Datenschutz im Verein
              </span>
              <br />
              <span className="text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl">
                DSGVO-konform & rechtssicher
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Schützen Sie Mitgliederdaten, Fotos und Kommunikation in Ihrem Verein rechtskonform. 
              Praxisnahe Lösungen für Sport-, Kultur- und gemeinnützige Vereine.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg">
                <Shield className="mr-2 h-5 w-5" />
                Kostenlose Vereins-Beratung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-950">
                <Download className="mr-2 h-5 w-5" />
                DSGVO-Leitfaden herunterladen
              </Button>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 left-20 opacity-20"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Users className="h-24 w-24 text-emerald-600" />
            </motion.div>
            
            <motion.div
              className="absolute bottom-20 right-20 opacity-20"
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Shield className="h-32 w-32 text-teal-600" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container px-4 py-3">
          <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all",
                  activeSection === item.id
                    ? "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-300"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Overview Section */}
          <section id="ueberblick" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">DSGVO im Vereinsleben</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Ob Sportverein, Kulturverein oder gemeinnützige Organisation – die DSGVO betrifft jeden Verein, 
                der personenbezogene Daten verarbeitet. Wir zeigen Ihnen, wie Sie Datenschutz praktikabel umsetzen.
              </p>
              
              {/* Ausführliche Einführung */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Scale className="h-5 w-5 text-emerald-600" />
                    Rechtliche Grundlagen für Vereine
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seit dem 25. Mai 2018 gilt die DSGVO auch für alle eingetragenen und nicht eingetragenen Vereine 
                    in Deutschland. Als Verantwortlicher im Sinne der DSGVO muss jeder Verein, der personenbezogene 
                    Daten verarbeitet, die gesetzlichen Anforderungen erfüllen – unabhängig von der Vereinsgröße.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span>Keine Ausnahme für kleine oder gemeinnützige Vereine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span>Besondere Sorgfaltspflicht bei Minderjährigen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span>Haftung des Vorstands bei Verstößen</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Häufige Datenschutz-Fallen
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Viele Vereine unterschätzen die Tragweite der DSGVO. Bereits kleine Nachlässigkeiten können 
                    zu empfindlichen Bußgeldern führen. Die häufigsten Fehlerquellen haben wir für Sie identifiziert.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                      <span>WhatsApp-Gruppen für Vereinskommunikation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                      <span>Unverschlüsselte E-Mail-Verteiler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                      <span>Fehlende Einwilligungen für Fotos</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Zusätzliche Informationsboxen */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      💡 Wussten Sie schon?
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Auch Vereine mit weniger als 20 Mitgliedern müssen ein Verzeichnis von 
                      Verarbeitungstätigkeiten führen, wenn sie regelmäßig personenbezogene Daten verarbeiten.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                      ⚠️ Achtung Haftung
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Der Vorstand haftet persönlich für Datenschutzverstöße, wenn er seine Sorgfaltspflicht 
                      verletzt. Eine D&O-Versicherung schützt nur bedingt.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                      ✅ Unser Versprechen
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mit unserer Vereinslösung erfüllen Sie alle DSGVO-Anforderungen rechtssicher 
                      und ehrenamtsfreundlich – garantiert!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Compliance Dashboard */}
            <Card className="p-6 shadow-2xl border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-white to-emerald-50/20 dark:from-gray-900 dark:to-emerald-950/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity className="h-6 w-6 text-emerald-600" />
                Vereine & DSGVO Compliance Dashboard
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {complianceStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="h-8 w-8 text-emerald-600 mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    <div className="text-2xl font-bold text-emerald-600">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{stat.trend}</div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Key Challenges */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: 'Mitgliederdaten',
                  description: 'Von der Anmeldung bis zum Austritt – alle Daten rechtssicher verwalten',
                  color: 'text-orange-600'
                },
                {
                  icon: Camera,
                  title: 'Veranstaltungsfotos',
                  description: 'Fotos bei Vereinsfesten und Wettkämpfen DSGVO-konform handhaben',
                  color: 'text-emerald-600'
                },
                {
                  icon: Mail,
                  title: 'Kommunikation',
                  description: 'Newsletter, WhatsApp-Gruppen und E-Mails datenschutzgerecht nutzen',
                  color: 'text-teal-600'
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <challenge.icon className={`h-12 w-12 ${challenge.color} mb-4`} />
                      <CardTitle>{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">{challenge.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Member Data Management */}
          <section id="mitgliederdaten" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Users className="h-8 w-8 text-emerald-600" />
                Mitgliederdatenverwaltung
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Die Verwaltung von Mitgliederdaten ist das Herzstück jedes Vereins. 
                Lernen Sie, wie Sie diese Daten rechtskonform erheben, speichern und nutzen.
              </p>
              
              {/* Detaillierte Unterabschnitte */}
              <div className="mb-12 space-y-8">
                {/* Rechtliche Grundlagen */}
                <div id="mitgliederdaten-rechtsgrundlagen" className="scroll-mt-24">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Gavel className="h-6 w-6 text-emerald-600" />
                    Rechtsgrundlagen der Datenverarbeitung
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Art. 6 Abs. 1 lit. b DSGVO - Vertragserfüllung</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Die primäre Rechtsgrundlage für die Verarbeitung von Mitgliederdaten ist die 
                          Erfüllung des Mitgliedschaftsvertrags.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                            <span>Name und Anschrift für Mitgliederverwaltung</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                            <span>Geburtsdatum für Altersklassen und Jugendschutz</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                            <span>Bankdaten für Beitragszahlung (bei SEPA-Mandat)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Art. 6 Abs. 1 lit. f DSGVO - Berechtigte Interessen</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Für erweiterte Datenverarbeitungen können berechtigte Interessen des Vereins 
                          als Rechtsgrundlage dienen.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                            <span>Vereinschronik und Jubiläen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                            <span>Kontaktdaten für Vereinskommunikation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                            <span>Leistungsdaten im Sport (mit Einschränkungen)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Datenerhebung */}
                <div id="mitgliederdaten-erhebung" className="scroll-mt-24">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <UserPlus className="h-6 w-6 text-emerald-600" />
                    Datenerhebung bei Vereinseintritt
                  </h3>
                  <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4">Prinzip der Datensparsamkeit</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Erheben Sie nur Daten, die Sie wirklich benötigen. Jedes zusätzliche Datenfeld muss 
                        gerechtfertigt werden können.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                          <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">
                            ✅ Pflichtangaben
                          </h5>
                          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                            <li>• Vor- und Nachname</li>
                            <li>• Anschrift</li>
                            <li>• Geburtsdatum</li>
                            <li>• E-Mail-Adresse</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                          <h5 className="font-medium text-amber-700 dark:text-amber-300 mb-2">
                            ⚠️ Optionale Angaben
                          </h5>
                          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                            <li>• Telefonnummer</li>
                            <li>• Beruf</li>
                            <li>• Hobbys/Interessen</li>
                            <li>• Foto</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                          <h5 className="font-medium text-red-700 dark:text-red-300 mb-2">
                            ❌ Unzulässig
                          </h5>
                          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                            <li>• Gesundheitsdaten*</li>
                            <li>• Politische Meinung</li>
                            <li>• Religion</li>
                            <li>• Sexuelle Orientierung</li>
                          </ul>
                          <p className="text-xs mt-2">*außer mit expliziter Einwilligung</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Speicherung und Sicherheit */}
                <div id="mitgliederdaten-sicherheit" className="scroll-mt-24">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-emerald-600" />
                    Sichere Datenspeicherung
                  </h3>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Technische und organisatorische Maßnahmen (TOM)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Server className="h-5 w-5 text-emerald-600" />
                              Technische Maßnahmen
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Verschlüsselte Speicherung aller Mitgliederdaten</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Regelmäßige Backups mit Verschlüsselung</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Firewall und Virenschutz</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Sichere Passwortrichtlinien</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Briefcase className="h-5 w-5 text-emerald-600" />
                              Organisatorische Maßnahmen
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <UserCheck className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Berechtigungskonzept mit Rollen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <UserCheck className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Vertraulichkeitsverpflichtungen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <UserCheck className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Schulung der Vorstandsmitglieder</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <UserCheck className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Dokumentierte Prozesse</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Löschkonzept */}
                <div id="mitgliederdaten-loeschung" className="scroll-mt-24">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <FileX className="h-6 w-6 text-emerald-600" />
                    Löschkonzept und Aufbewahrungsfristen
                  </h3>
                  <Card className="border-2 border-red-200 dark:border-red-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                        Pflicht zur Datenlöschung nach Art. 17 DSGVO
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                          <p className="text-sm font-medium text-red-700 dark:text-red-300 mb-2">
                            ⚠️ Wichtig: Vereine müssen ein dokumentiertes Löschkonzept vorweisen können!
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Bei Datenschutzprüfungen ist das Löschkonzept eines der ersten Dokumente, 
                            die angefordert werden. Fehlt es, drohen empfindliche Bußgelder.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <Clock className="h-5 w-5 text-emerald-600" />
                              Gesetzliche Aufbewahrungsfristen
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <span className="font-medium">Buchführungsunterlagen:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">10 Jahre</span>
                              </div>
                              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <span className="font-medium">Handelsbriefe:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">6 Jahre</span>
                              </div>
                              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <span className="font-medium">Arbeitsrechtliche Unterlagen:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">3 Jahre</span>
                              </div>
                              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                <span className="font-medium">Versicherungsunterlagen:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">5 Jahre</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <Timer className="h-5 w-5 text-emerald-600" />
                              Vereinsspezifische Löschfristen
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                                <span className="font-medium">Mitgliederdaten (aktiv):</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">Dauer der Mitgliedschaft</span>
                              </div>
                              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                                <span className="font-medium">Ehemalige Mitglieder:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">3 Jahre nach Austritt*</span>
                              </div>
                              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                                <span className="font-medium">Newsletter-Abonnenten:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">Sofort nach Abmeldung</span>
                              </div>
                              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                                <span className="font-medium">Veranstaltungsteilnehmer:</span>
                                <span className="text-gray-600 dark:text-gray-400 ml-2">6 Monate nach Event</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <h4 className="font-semibold mb-3">Praktische Umsetzung des Löschkonzepts</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                              <Database className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                              <p className="text-sm font-medium">Automatisierung</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                Löschfristen in der Vereinssoftware hinterlegen
                              </p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                              <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                              <p className="text-sm font-medium">Regelmäßige Prüfung</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                Quartalsweise Löschläufe durchführen
                              </p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                              <FileCheck className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                              <p className="text-sm font-medium">Dokumentation</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                Löschvorgänge protokollieren
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                            💡 Praxis-Tipp: Ausnahmen beachten
                          </h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Vereinschronik: Historisch bedeutsame Daten dürfen länger aufbewahrt werden</li>
                            <li>• Ehrenmitglieder: Besondere Regelungen in der Satzung beachten</li>
                            <li>• Rechtsstreitigkeiten: Daten bis zum Abschluss aufbewahren</li>
                            <li>• Jubiläen: Frühzeitig Einwilligungen für längere Speicherung einholen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Praxis Scenarios */}
            <div className="space-y-6">
              {praxisScenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-emerald-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <scenario.icon className="h-8 w-8 text-emerald-600" />
                          <div>
                            <CardTitle className="text-xl">{scenario.title}</CardTitle>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {scenario.challenge}
                            </p>
                          </div>
                        </div>
                        <Badge 
                          variant={scenario.risk === 'Sehr hoch' ? 'destructive' : scenario.risk === 'Hoch' ? 'default' : 'secondary'}
                        >
                          {scenario.risk} Risiko
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Rechtsgrundlage: {scenario.legalBasis}
                          </p>
                        </div>
                        
                        <button
                          onClick={() => toggleScenario(scenario.id)}
                          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          {expandedScenarios.includes(scenario.id) ? (
                            <>
                              <ChevronDown className="h-4 w-4" />
                              Lösung ausblenden
                            </>
                          ) : (
                            <>
                              <ChevronRight className="h-4 w-4" />
                              Lösung anzeigen
                            </>
                          )}
                        </button>
                        
                        {expandedScenarios.includes(scenario.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-4 mt-4"
                          >
                            {scenario.solution.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="border-l-2 border-emerald-200 pl-4">
                                <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                                  {stepIndex + 1}. {step.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                  {step.description}
                                </p>
                                <ul className="space-y-1">
                                  {step.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Code Examples */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Implementierungsbeispiele
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(scenarioTemplates).map(([key, code], index) => (
                    <div key={key} className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400">
                        {key === 'memberRegistration' && 'Mitgliederregistrierung'}
                        {key === 'eventPhotography' && 'Veranstaltungsfotografie'}
                        {key === 'volunteerManagement' && 'Ehrenamtsverwaltung'}
                      </h4>
                      <pre className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-gray-300">{code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Events Section */}
          <section id="veranstaltungen" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Calendar className="h-8 w-8 text-emerald-600" />
                Veranstaltungen & Datenschutz
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Vereinsfeste, Wettkämpfe, Versammlungen – bei jeder Veranstaltung fallen personenbezogene Daten an. 
                So gehen Sie damit richtig um.
              </p>
              
              {/* Inhaltsübersicht */}
              <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Auf dieser Seite:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {subNavigationItems.veranstaltungen.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-6 w-6 text-orange-600" />
                    Fotoaufnahmen bei Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Vorab-Information ist Pflicht!</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Informieren Sie alle Teilnehmer bereits in der Einladung über geplante Fotoaufnahmen.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Hinweisschilder aufstellen</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          "Bei dieser Veranstaltung werden Fotos gemacht..."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Widerspruchsmöglichkeit</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Buttons oder Bändchen für Personen, die nicht fotografiert werden möchten
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <UserCheck className="h-5 w-5 text-teal-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Besondere Vorsicht bei Kindern</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Elterneinwilligung für Einzelaufnahmen erforderlich
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clipboard className="h-6 w-6 text-teal-600" />
                    Teilnehmerverwaltung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Datensparsamkeit beachten</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Erheben Sie nur Daten, die Sie wirklich für die Veranstaltung benötigen.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-teal-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Anmeldeformulare</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Klare Zweckbindung und Löschfristen angeben
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Sichere Aufbewahrung</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Teilnehmerlisten nicht offen herumliegen lassen
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Timer className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Rechtzeitige Löschung</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Nach der Veranstaltung Daten zeitnah löschen
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Detaillierte Unterabschnitte für Veranstaltungen */}
            <div className="space-y-12 mt-12">
              {/* Fotografie & Bildrechte */}
              <div id="veranstaltungen-fotos" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Camera className="h-6 w-6 text-emerald-600" />
                  Fotografie & Bildrechte im Detail
                </h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rechtliche Grundlagen der Vereinsfotografie</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Kunsturhebergesetz (KUG)</h4>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>§ 22 KUG: Bilder dürfen nur mit Einwilligung verbreitet werden</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>§ 23 KUG: Ausnahmen für Versammlungen und öffentliche Veranstaltungen</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                              <span>DSGVO hat Vorrang bei digitaler Speicherung und Verarbeitung</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">DSGVO-Anforderungen</h4>
                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>Rechtsgrundlage: Berechtigtes Interesse oder Einwilligung</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>Informationspflicht nach Art. 13/14 DSGVO</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>Löschpflicht nach Zweckerreichung</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 mt-4">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                          💡 Praxis-Empfehlung: Dreistufiges Vorgehen
                        </h4>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-blue-700 dark:text-blue-300">1.</span>
                            <span>Vorab-Information in der Einladung mit Widerspruchsmöglichkeit</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-blue-700 dark:text-blue-300">2.</span>
                            <span>Sichtbare Hinweise am Veranstaltungsort und Erkennbarkeit des Fotografen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-medium text-blue-700 dark:text-blue-300">3.</span>
                            <span>Nachträgliche Löschmöglichkeit auf Anfrage gewährleisten</span>
                          </li>
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Spezialfälle in der Vereinspraxis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Users className="h-5 w-5 text-emerald-600" />
                            Mannschaftsfotos
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Einwilligung aller Abgebildeten erforderlich. Bei Minderjährigen: 
                            Elterneinwilligung. Muster-Einwilligung in Mitgliedsantrag integrieren.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-emerald-600" />
                            Siegerehrungen
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Berechtigtes Interesse oft gegeben. Trotzdem: Information vorab und 
                            Widerspruchsmöglichkeit einräumen.
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Heart className="h-5 w-5 text-emerald-600" />
                            Soziale Medien
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Separate Einwilligung für Social Media erforderlich. Reichweite und 
                            Plattformen konkret benennen.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Anmeldemanagement */}
              <div id="veranstaltungen-anmeldung" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Clipboard className="h-6 w-6 text-emerald-600" />
                  Anmeldemanagement für Events
                </h3>
                <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Online-Anmeldesysteme datenschutzkonform gestalten</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                            <h5 className="font-medium text-teal-700 dark:text-teal-300 mb-2">
                              Datenminimierung
                            </h5>
                            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                              <li>• Name und E-Mail reichen meist</li>
                              <li>• Geburtsdatum nur bei Altersklassen</li>
                              <li>• Ernährung nur bei Verpflegung</li>
                              <li>• Keine unnötigen Felder</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                            <h5 className="font-medium text-teal-700 dark:text-teal-300 mb-2">
                              Transparenz
                            </h5>
                            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                              <li>• Zweck der Datenerhebung</li>
                              <li>• Speicherdauer angeben</li>
                              <li>• Weitergabe an Dritte?</li>
                              <li>• Betroffenenrechte nennen</li>
                            </ul>
                          </div>
                          <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                            <h5 className="font-medium text-teal-700 dark:text-teal-300 mb-2">
                              Sicherheit
                            </h5>
                            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                              <li>• SSL-verschlüsselte Formulare</li>
                              <li>• Sichere Datenbank</li>
                              <li>• Zugriffsberechtigungen</li>
                              <li>• Backup-Konzept</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-3">Besondere Herausforderungen</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Minderjährige Teilnehmer</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Ab 16 Jahren können Jugendliche selbst einwilligen. Darunter: Elterneinwilligung erforderlich.
                                Bei gemischten Veranstaltungen: Altersabfrage einbauen.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Globe className="h-5 w-5 text-teal-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Externe Teilnehmer</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Nicht-Mitglieder haben die gleichen Rechte. Separate Datenschutzinformation bereitstellen.
                                Keine automatische Aufnahme in Vereinsverteiler!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Gästelisten */}
              <div id="veranstaltungen-gaestelisten" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-emerald-600" />
                  Gästelisten und Teilnehmerverwaltung
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Papierbasierte Listen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Lock className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Sichere Aufbewahrung</span>
                            <p className="text-gray-600 dark:text-gray-400">
                              Listen nicht offen auslegen, sondern sicher verwahren
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Eye className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Einsichtnahme begrenzen</span>
                            <p className="text-gray-600 dark:text-gray-400">
                              Teilnehmer dürfen nicht alle Daten anderer sehen
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Timer className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Zeitnahe Vernichtung</span>
                            <p className="text-gray-600 dark:text-gray-400">
                              Nach der Veranstaltung datenschutzgerecht entsorgen
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Digitale Systeme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <Database className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Automatische Löschung</span>
                            <p className="text-gray-600 dark:text-gray-400">
                              Löschfristen im System hinterlegen (z.B. 30 Tage)
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Key className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Berechtigungskonzept</span>
                            <p className="text-gray-600 dark:text-gray-400">
                              Nur Veranstaltungsleitung hat Vollzugriff
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileCheck className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Export-Funktionen</span>
                            <p className="text-gray-600 dark:text-gray-400">
                              Datenportabilität für Betroffene gewährleisten
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Live-Streaming */}
              <div id="veranstaltungen-livestream" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-emerald-600" />
                  Live-Streaming und Online-Events
                </h3>
                <Card className="border-2 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle>Besondere Anforderungen bei digitalen Veranstaltungen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4">
                      <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
                        Live-Streams und Videokonferenzen sind datenschutzrechtlich besonders sensibel, 
                        da die Aufnahmen potenziell weltweit abrufbar und dauerhaft speicherbar sind.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Vor dem Stream</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Wifi className="h-4 w-4 text-purple-500 mt-0.5" />
                            <span>Plattform auf DSGVO-Konformität prüfen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <UserCheck className="h-4 w-4 text-purple-500 mt-0.5" />
                            <span>Teilnehmer über Aufzeichnung informieren</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Settings className="h-4 w-4 text-purple-500 mt-0.5" />
                            <span>Opt-out Möglichkeiten schaffen</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Während des Streams</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Camera className="h-4 w-4 text-purple-500 mt-0.5" />
                            <span>Kamera-aus Option respektieren</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <MessageSquare className="h-4 w-4 text-purple-500 mt-0.5" />
                            <span>Chat-Moderation sicherstellen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-purple-500 mt-0.5" />
                            <span>Keine ungefragten Bildschirmfreigaben</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Empfohlene Streaming-Plattformen für Vereine</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-900 rounded">
                          <span className="font-medium">BigBlueButton</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Open Source</p>
                        </div>
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-900 rounded">
                          <span className="font-medium">Jitsi Meet</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">DSGVO-konform</p>
                        </div>
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-900 rounded">
                          <span className="font-medium">Zoom</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Mit AV-Vertrag</p>
                        </div>
                        <div className="text-center p-2 bg-gray-50 dark:bg-gray-900 rounded">
                          <span className="font-medium">MS Teams</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Für Vereine</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Communication Section */}
          <section id="kommunikation" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Mail className="h-8 w-8 text-emerald-600" />
                Vereinskommunikation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Newsletter, E-Mails, WhatsApp – moderne Vereinskommunikation braucht klare Datenschutzregeln.
              </p>
              
              {/* Inhaltsübersicht */}
              <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">In diesem Abschnitt:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {subNavigationItems.kommunikation.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Newsletter & E-Mails',
                  icon: Mail,
                  items: [
                    'Double-Opt-In für Newsletter-Anmeldung',
                    'Abmeldelink in jeder Mail',
                    'BCC bei Sammel-Mails verwenden',
                    'Keine unnötigen Daten im Verteiler'
                  ],
                  warning: 'Versand ohne Einwilligung kann teuer werden!'
                },
                {
                  title: 'Messenger & Soziale Medien',
                  icon: MessageSquare,
                  items: [
                    'WhatsApp problematisch wegen Kontaktabgleich',
                    'Signal oder Threema als Alternative',
                    'Keine offiziellen Infos über private Messenger',
                    'Social Media Guidelines erstellen'
                  ],
                  warning: 'WhatsApp-Gruppen sind datenschutzrechtlich heikel!'
                },
                {
                  title: 'Vereinswebsite',
                  icon: Globe,
                  items: [
                    'Datenschutzerklärung aktuell halten',
                    'Cookie-Banner korrekt einsetzen',
                    'SSL-Verschlüsselung aktivieren',
                    'Kontaktformulare absichern'
                  ],
                  warning: 'Fehlende Datenschutzerklärung = Abmahngefahr!'
                }
              ].map((comm, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <comm.icon className="h-10 w-10 text-emerald-600 mb-3" />
                      <CardTitle>{comm.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {comm.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-3">
                        <p className="text-sm font-medium text-red-700 dark:text-red-400">
                          <AlertTriangle className="h-4 w-4 inline mr-1" />
                          {comm.warning}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Detaillierte Unterabschnitte für Kommunikation */}
            <div className="space-y-12 mt-12">
              {/* Newsletter & E-Mail */}
              <div id="kommunikation-newsletter" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Mail className="h-6 w-6 text-emerald-600" />
                  Newsletter & E-Mail-Kommunikation im Detail
                </h3>
                <div className="space-y-6">
                  <Card className="border-2 border-emerald-200 dark:border-emerald-800">
                    <CardHeader>
                      <CardTitle>Double-Opt-In Verfahren richtig umsetzen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4">
                          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                            Das Double-Opt-In-Verfahren ist rechtlich nicht zwingend, aber der sicherste Weg 
                            zur Nachweisbarkeit der Einwilligung.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">So funktioniert's:</h4>
                            <ol className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <span className="font-medium text-emerald-600">1.</span>
                                <div>
                                  <span className="font-medium">Anmeldung</span>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Interessent trägt E-Mail-Adresse ein
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-medium text-emerald-600">2.</span>
                                <div>
                                  <span className="font-medium">Bestätigungsmail</span>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Automatische Mail mit Bestätigungslink
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-medium text-emerald-600">3.</span>
                                <div>
                                  <span className="font-medium">Aktivierung</span>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Erst nach Klick auf Link aktiv
                                  </p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="font-medium text-emerald-600">4.</span>
                                <div>
                                  <span className="font-medium">Dokumentation</span>
                                  <p className="text-gray-600 dark:text-gray-400">
                                    Zeitpunkt und IP-Adresse speichern
                                  </p>
                                </div>
                              </li>
                            </ol>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Wichtige Details:</h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Bestätigungsmail darf keine Werbung enthalten</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Link sollte nach 48-72h verfallen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Klare Betreffzeile: "Bitte bestätigen Sie..."</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                                <span>Speicherung der Einwilligung nachweisbar</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                            ⚠️ Achtung bei Bestandskontakten
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Altmitglieder, die vor der DSGVO Newsletter erhielten, brauchen keine neue Einwilligung, 
                            wenn die Verarbeitung auf Basis der Mitgliedschaft (Vertrag) erfolgt. Bei reinen 
                            Werbe-Newslettern ist jedoch eine neue Einwilligung erforderlich!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>E-Mail-Verteiler DSGVO-konform nutzen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            ✅ Richtig: BCC nutzen
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Bei Sammel-Mails alle Empfänger ins BCC-Feld. So bleiben 
                            E-Mail-Adressen für andere unsichtbar.
                          </p>
                        </div>
                        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                            ❌ Falsch: CC-Feld
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Niemals alle Empfänger ins CC-Feld! Das ist eine 
                            Datenschutzverletzung mit Bußgeldrisiko.
                          </p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                            💡 Besser: Newsletter-Tool
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Professionelle Tools bieten Personalisierung, 
                            Abmelde-Links und Statistiken.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Messenger-Dienste */}
              <div id="kommunikation-messenger" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-emerald-600" />
                  Messenger-Dienste und DSGVO
                </h3>
                <Card className="border-2 border-orange-200 dark:border-orange-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-6 w-6 text-orange-600" />
                      WhatsApp im Verein - Ein Datenschutz-Dilemma
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                          Das Hauptproblem:
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          WhatsApp gleicht das komplette Adressbuch mit Meta-Servern ab. Dabei werden auch 
                          Kontaktdaten von Personen übertragen, die WhatsApp gar nicht nutzen oder dem nicht 
                          zugestimmt haben. Dies verstößt gegen die DSGVO.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Risiken für Vereine:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <X className="h-4 w-4 text-red-500 mt-0.5" />
                              <span>Unerlaubte Datenweitergabe an Meta (USA)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <X className="h-4 w-4 text-red-500 mt-0.5" />
                              <span>Keine Kontrolle über Datenverarbeitung</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <X className="h-4 w-4 text-red-500 mt-0.5" />
                              <span>Haftung des Vorstands möglich</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <X className="h-4 w-4 text-red-500 mt-0.5" />
                              <span>Bußgelder bis 20 Mio. € möglich</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Rechtskonforme Alternativen:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span><strong>Signal:</strong> Open Source, verschlüsselt</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span><strong>Threema:</strong> Schweizer Datenschutz</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span><strong>Element:</strong> Dezentral, selbst hostbar</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span><strong>Telegram:</strong> Mit Einschränkungen</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-3">Wenn WhatsApp unvermeidbar scheint:</h4>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                          <p className="text-sm font-medium mb-2">Risikominimierung (ersetzt keine rechtliche Beratung!):</p>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>• Nur auf ausdrücklich freiwilliger Basis</li>
                            <li>• Keine offiziellen Vereinsinformationen</li>
                            <li>• Alternative Kommunikationswege anbieten</li>
                            <li>• Bei Minderjährigen: Elterneinwilligung</li>
                            <li>• Klare Trennung: privat vs. Verein</li>
                            <li>• Dokumentation der Freiwilligkeit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Website & Social Media */}
              <div id="kommunikation-website" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-emerald-600" />
                  Website & Social Media
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Vereinswebsite DSGVO-konform</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <h4 className="font-semibold">Pflichtangaben:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <FileText className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <div>
                                <span className="font-medium">Datenschutzerklärung</span>
                                <p className="text-gray-600 dark:text-gray-400">
                                  Umfassend, verständlich, leicht auffindbar
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <div>
                                <span className="font-medium">SSL-Verschlüsselung</span>
                                <p className="text-gray-600 dark:text-gray-400">
                                  HTTPS ist Pflicht bei Kontaktformularen
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Cookie className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <div>
                                <span className="font-medium">Cookie-Banner</span>
                                <p className="text-gray-600 dark:text-gray-400">
                                  Bei nicht-essentiellen Cookies erforderlich
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                            Tools & Plugins prüfen:
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Google Analytics nur mit Anonymisierung</li>
                            <li>• Facebook Pixel braucht Einwilligung</li>
                            <li>• YouTube-Videos im erweiterten Modus</li>
                            <li>• Google Maps Alternative erwägen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Social Media Präsenz</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <h4 className="font-semibold">Datenschutz beachten bei:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Camera className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <div>
                                <span className="font-medium">Fotos von Mitgliedern</span>
                                <p className="text-gray-600 dark:text-gray-400">
                                  Separate Einwilligung für Social Media nötig
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Users className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <div>
                                <span className="font-medium">Namensnennung</span>
                                <p className="text-gray-600 dark:text-gray-400">
                                  Nur mit ausdrücklicher Zustimmung
                                </p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Heart className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <div>
                                <span className="font-medium">Minderjährige</span>
                                <p className="text-gray-600 dark:text-gray-400">
                                  Besondere Vorsicht, Elterneinwilligung
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4">
                          <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                            Best Practices:
                          </h4>
                          <ul className="text-sm space-y-1">
                            <li>• Social Media Guidelines erstellen</li>
                            <li>• Verantwortliche Person benennen</li>
                            <li>• Keine Echtzeit-Updates von Events</li>
                            <li>• Kommentare moderieren</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Mitgliederzeitung */}
              <div id="kommunikation-mitgliederzeitung" className="scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-emerald-600" />
                  Vereinszeitung und Mitgliederpublikationen
                </h3>
                <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Rechtliche Grundlagen für Vereinspublikationen</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Die Vereinszeitung ist oft ein wichtiges Kommunikationsmittel. Auch hier gelten 
                          strenge Datenschutzregeln, besonders bei personenbezogenen Inhalten.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                          <h5 className="font-medium mb-3">Erlaubt ohne Einwilligung:</h5>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>Berichte über Vereinsaktivitäten</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>Termine und Ankündigungen</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>Allgemeine Vereinsinformationen</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                              <span>Funktionsträger mit Funktion</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                          <h5 className="font-medium mb-3">Einwilligung erforderlich:</h5>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                              <span>Fotos von Mitgliedern</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                              <span>Private Jubiläen (Geburtstage)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                              <span>Persönliche Geschichten</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                              <span>Kontaktdaten von Mitgliedern</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-3">Digitale vs. Gedruckte Ausgabe</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h5 className="font-medium mb-1">📰 Gedruckte Version</h5>
                            <p className="text-gray-600 dark:text-gray-400">
                              Begrenzter Empfängerkreis, schwerer nachträglich zu ändern, 
                              aber geringeres Verbreitungsrisiko.
                            </p>
                          </div>
                          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h5 className="font-medium mb-1">💻 Digitale Version</h5>
                            <p className="text-gray-600 dark:text-gray-400">
                              Weltweite Verbreitung möglich, höhere Anforderungen an Einwilligungen, 
                              aber nachträgliche Korrekturen möglich.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Financial Data Section */}
          <section id="finanzen" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Euro className="h-8 w-8 text-emerald-600" />
                Finanzdaten im Verein
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Mitgliedsbeiträge, Spenden, Zuschüsse – auch Finanzdaten unterliegen dem Datenschutz.
              </p>
            </motion.div>

            <Card className="border-2 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CreditCard className="h-6 w-6 text-emerald-600" />
                      Beitragsverwaltung
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <h4 className="font-medium mb-2">SEPA-Lastschrift</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Mandat sicher aufbewahren</li>
                          <li>• Vorabankündigung beachten</li>
                          <li>• Löschung nach Vereinsaustritt + 10 Jahre</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Mahnwesen</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Sensible Kommunikation</li>
                          <li>• Keine öffentlichen Listen</li>
                          <li>• Diskretion wahren</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <HandshakeIcon className="h-6 w-6 text-emerald-600" />
                      Spenden & Zuschüsse
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Spenderverwaltung</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Einwilligung für Veröffentlichung</li>
                          <li>• Spendenbescheinigungen sicher</li>
                          <li>• Anonyme Spenden respektieren</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Fördermittel</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Nachweispflichten beachten</li>
                          <li>• Verwendungsnachweise archivieren</li>
                          <li>• Prüfrechte berücksichtigen</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Section */}
          <section id="umsetzung" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Settings className="h-8 w-8 text-emerald-600" />
                Praktische Umsetzung
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Schritt für Schritt zur DSGVO-Compliance in Ihrem Verein.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Bestandsaufnahme',
                  icon: FileSearch,
                  tasks: [
                    'Welche Daten werden erhoben?',
                    'Wo werden sie gespeichert?',
                    'Wer hat Zugriff?',
                    'Wie lange werden sie aufbewahrt?'
                  ]
                },
                {
                  step: '2',
                  title: 'Dokumentation',
                  icon: FileText,
                  tasks: [
                    'Verarbeitungsverzeichnis erstellen',
                    'Datenschutzerklärung formulieren',
                    'Prozesse dokumentieren',
                    'Verantwortlichkeiten festlegen'
                  ]
                },
                {
                  step: '3',
                  title: 'Technische Maßnahmen',
                  icon: Shield,
                  tasks: [
                    'Passwortrichtlinien einführen',
                    'Backups implementieren',
                    'Verschlüsselung aktivieren',
                    'Zugriffsrechte vergeben'
                  ]
                },
                {
                  step: '4',
                  title: 'Schulung & Kontrolle',
                  icon: UserCheck,
                  tasks: [
                    'Vorstand schulen',
                    'Ehrenamtliche informieren',
                    'Regelmäßige Überprüfung',
                    'Prozesse optimieren'
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-100 dark:bg-emerald-950/30 rounded-bl-full flex items-start justify-end p-2">
                      <span className="text-2xl font-bold text-emerald-600">{phase.step}</span>
                    </div>
                    <CardHeader>
                      <phase.icon className="h-10 w-10 text-emerald-600 mb-3" />
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Interactive Checklist */}
          <section id="checkliste" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <CheckSquare className="h-8 w-8 text-emerald-600" />
                DSGVO-Checkliste für Vereine
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Prüfen Sie, ob Ihr Verein alle wichtigen Datenschutzanforderungen erfüllt.
              </p>
            </motion.div>

            {/* Progress Overview */}
            <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Ihr Fortschritt</h3>
                <span className="text-3xl font-bold text-emerald-600">{calculateProgress()}%</span>
              </div>
              <Progress value={calculateProgress()} className="h-3 mb-4" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {completedItems.length} von {checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0)} Aufgaben erledigt
              </p>
            </Card>

            {/* Checklist Categories */}
            <div className="space-y-6">
              {checklistCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item) => (
                          <div
                            key={item.id}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all",
                              completedItems.includes(item.id)
                                ? "bg-emerald-50 dark:bg-emerald-950/30"
                                : "bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                            )}
                            onClick={() => toggleChecklistItem(item.id)}
                          >
                            {completedItems.includes(item.id) ? (
                              <CheckSquare className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                            ) : (
                              <Square className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            )}
                            <span className={cn(
                              "flex-1",
                              completedItems.includes(item.id) && "line-through text-gray-500"
                            )}>
                              {item.text}
                            </span>
                            {item.required && (
                              <Badge variant="outline" className="text-xs">
                                Pflicht
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section id="ressourcen" className="space-y-8 scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-emerald-600" />
                Hilfreiche Ressourcen
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Vorlagen, Muster und weiterführende Informationen für Ihren Verein.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Muster-Datenschutzerklärung',
                  description: 'Anpassbare Vorlage für Vereinswebsites',
                  icon: FileText,
                  badge: 'Download',
                  color: 'emerald'
                },
                {
                  title: 'Einwilligungsformulare',
                  description: 'Vorlagen für Mitglieder und Veranstaltungen',
                  icon: Clipboard,
                  badge: 'Download',
                  color: 'teal'
                },
                {
                  title: 'Verarbeitungsverzeichnis',
                  description: 'Excel-Vorlage nach Art. 30 DSGVO',
                  icon: Database,
                  badge: 'Download',
                  color: 'cyan'
                },
                {
                  title: 'Schulungsmaterial',
                  description: 'Präsentation für Vorstand und Ehrenamtliche',
                  icon: Target,
                  badge: 'PDF',
                  color: 'emerald'
                },
                {
                  title: 'Leitfaden Vereinsfotografie',
                  description: 'Rechtssichere Fotos bei Events',
                  icon: Camera,
                  badge: 'Guide',
                  color: 'teal'
                },
                {
                  title: 'DSGVO-Notfallplan',
                  description: 'Was tun bei Datenpannen?',
                  icon: AlertTriangle,
                  badge: 'Wichtig',
                  color: 'orange'
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={cn(
                    "h-full hover:shadow-lg transition-all cursor-pointer group",
                    `hover:border-${resource.color}-400`
                  )}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <resource.icon className={`h-10 w-10 text-${resource.color}-600 mb-3`} />
                        <Badge variant="secondary">{resource.badge}</Badge>
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center text-emerald-600 group-hover:text-emerald-700">
                        <span className="text-sm font-medium">Herunterladen</span>
                        <Download className="h-4 w-4 ml-2 group-hover:translate-y-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-8">
            <Card className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
                >
                  <HeartHandshake className="h-12 w-12" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Machen Sie Ihren Verein DSGVO-fit!
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Wir unterstützen Vereine mit maßgeschneiderten Datenschutzlösungen. 
                  Ehrenamtsfreundlich, praxisnah und bezahlbar.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-emerald-700 hover:bg-gray-100"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Kostenlose Vereinsberatung
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white/10"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    DSGVO-Paket für Vereine
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm opacity-80">
                    Spezialkonditionen für gemeinnützige Vereine • Keine versteckten Kosten • Persönliche Betreuung
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DsgvoVereine;