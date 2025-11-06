import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  Star,
  Download,
  BookOpen,
  Target,
  AlertTriangle,
  Lightbulb,
  FileText,
  Users,
  Scale,
  Lock,
  Eye,
  Gavel,
  Euro,
  Calendar,
  ChevronRight,
  ChevronDown,
  Share2,
  Bookmark,
  ExternalLink,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Settings,
  Database,
  Building2,
  Globe,
  Code,
  Server,
  Cloud,
  Network,
  Cpu,
  Monitor,
  Wifi,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Building,
  Factory,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Flag,
  Home,
  Package,
  ShoppingCart,
  Layers,
  Grid,
  List,
  Plus,
  Minus,
  X,
  Check,
  Edit3,
  Copy,
  Save,
  Trash2,
  FolderOpen,
  File,
  Image,
  Video,
  Music,
  Upload,
  Link as LinkIcon,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Bell,
  Search,
  Filter,
  SortAsc,
  Route,
  Navigation,
  Compass,
  Map,
  Printer,
  Smartphone,
  Tablet,
  Laptop,
  TreePine,
  Flower,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Wind,
  Waves,
  Mountain,
  Car,
  Truck,
  Bus,
  Plane,
  Train,
  Ship,
  Bike,
  Rocket,
  Satellite,
  Radio,
  Tv,
  Camera,
  Mic,
  Headphones,
  Speaker,
  GameController,
  Joystick,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Pentagon,
  Diamond,
  Octagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Spade,
  Club,
  DollarSign,
  PoundSterling,
  Yen,
  RussianRuble,
  IndianRupee,
  Bitcoin,
  Ethereum,
  Zap as ZapIcon,
  Battery,
  BatteryLow,
  Plug,
  Power,
  PowerOff,
  Volume,
  VolumeOff,
  Volume1,
  Volume2,
  VolumeX,
  Vibrate,
  VibrateOff,
  Repeat,
  Repeat1,
  RepeatOnce,
  Shuffle,
  SkipBack,
  SkipForward,
  StepBack,
  StepForward,
  FastForward,
  Rewind,
  PlayCircle,
  PauseCircle,
  StopCircle,
  Record,
  Square as SquareIcon,
  Timer,
  Stopwatch,
  AlarmClock,
  Clock1,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12
} from 'lucide-react';

const Nis2Guide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const containerRef = useRef(null);

  const sections = [
    { id: 'overview', title: 'Überblick', icon: Eye, readTime: '8 Min' },
    { id: 'history', title: 'Geschichte & Entwicklung', icon: Calendar, readTime: '12 Min' },
    { id: 'scope', title: 'Anwendungsbereich', icon: Target, readTime: '15 Min' },
    { id: 'essential-entities', title: 'Wesentliche Einrichtungen', icon: Building, readTime: '18 Min' },
    { id: 'important-entities', title: 'Wichtige Einrichtungen', icon: Building2, readTime: '16 Min' },
    { id: 'cybersecurity-measures', title: 'Cybersicherheitsmaßnahmen', icon: Shield, readTime: '25 Min' },
    { id: 'risk-management', title: 'Risikomanagement', icon: AlertTriangle, readTime: '20 Min' },
    { id: 'incident-reporting', title: 'Meldepflichten', icon: Bell, readTime: '22 Min' },
    { id: 'governance', title: 'Governance & Leadership', icon: Users, readTime: '18 Min' },
    { id: 'supply-chain', title: 'Lieferkettenmanagement', icon: Network, readTime: '20 Min' },
    { id: 'business-continuity', title: 'Business Continuity', icon: RotateCcw, readTime: '16 Min' },
    { id: 'encryption', title: 'Verschlüsselung', icon: Lock, readTime: '14 Min' },
    { id: 'vulnerability-management', title: 'Vulnerability Management', icon: Search, readTime: '18 Min' },
    { id: 'penetration-testing', title: 'Penetrationstests', icon: Target, readTime: '15 Min' },
    { id: 'compliance-timeline', title: 'Compliance Timeline', icon: Clock, readTime: '12 Min' },
    { id: 'implementation', title: 'Umsetzungsroadmap', icon: Route, readTime: '30 Min' },
    { id: 'enforcement', title: 'Durchsetzung & Sanktionen', icon: Gavel, readTime: '14 Min' },
    { id: 'best-practices', title: 'Best Practices', icon: Award, readTime: '20 Min' }
  ];

  const nis2Sectors = [
    {
      category: 'Energie',
      icon: Zap,
      sectors: [
        'Elektrizität',
        'Fernwärme',
        'Erdöl',
        'Erdgas',
        'Wasserstoff'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Hoch'
    },
    {
      category: 'Verkehr',
      icon: Car,
      sectors: [
        'Luftfahrt',
        'Schienenverkehr',
        'Schifffahrt',
        'Straßenverkehr'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Hoch'
    },
    {
      category: 'Bankwesen',
      icon: Building,
      sectors: [
        'Kreditinstitute',
        'Finanzmarktinfrastrukturen'
      ],
      threshold: 'Alle regulierten Einrichtungen',
      criticality: 'Sehr hoch'
    },
    {
      category: 'Finanzmarktinfrastrukturen',
      icon: TrendingUp,
      sectors: [
        'Betreiber von Handelsplätzen',
        'Zentrale Gegenparteien'
      ],
      threshold: 'Alle regulierten Einrichtungen',
      criticality: 'Sehr hoch'
    },
    {
      category: 'Gesundheitswesen',
      icon: Heart,
      sectors: [
        'Gesundheitsdienstleister',
        'EU-Referenzlabore'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Sehr hoch'
    },
    {
      category: 'Trinkwasser',
      icon: Waves,
      sectors: [
        'Lieferanten',
        'Vertreiber'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Hoch'
    },
    {
      category: 'Abwasser',
      icon: Factory,
      sectors: [
        'Abwasserentsorgungsunternehmen'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Mittel'
    },
    {
      category: 'Digitale Infrastruktur',
      icon: Server,
      sectors: [
        'IXP (Internet Exchange Points)',
        'DNS-Diensteanbieter',
        'TLD-Namensregister',
        'Cloud-Computing-Dienste',
        'Rechenzentren'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Sehr hoch'
    },
    {
      category: 'ICT-Dienstmanagement',
      icon: Network,
      sectors: [
        'Verwaltete IT-Dienste',
        'Verwaltete Sicherheitsdienste'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Hoch'
    },
    {
      category: 'Elektronische Kommunikation',
      icon: Radio,
      sectors: [
        'Öffentliche elektronische Kommunikationsdienste',
        'Öffentliche Kommunikationsnetze'
      ],
      threshold: 'Alle Anbieter',
      criticality: 'Sehr hoch'
    },
    {
      category: 'Weltraum',
      icon: Satellite,
      sectors: [
        'Betreiber von Bodeninfrastrukturen'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Hoch'
    },
    {
      category: 'Öffentliche Verwaltung',
      icon: Building2,
      sectors: [
        'Zentrale Regierungsebene',
        'Regionale Verwaltungsebene'
      ],
      threshold: 'Alle öffentlichen Stellen',
      criticality: 'Sehr hoch'
    },
    {
      category: 'Lebensmittel',
      icon: Package,
      sectors: [
        'Lebensmittelhersteller',
        'Verarbeitung und Herstellung',
        'Vertrieb'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Mittel'
    },
    {
      category: 'Verarbeitendes Gewerbe',
      icon: Settings,
      sectors: [
        'Herstellung von Medizinprodukten',
        'Computern und elektronischen Erzeugnissen',
        'Kraftfahrzeugen',
        'Maschinen und Ausrüstungen',
        'Chemischen Erzeugnissen'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Mittel'
    },
    {
      category: 'Digitale Anbieter',
      icon: Globe,
      sectors: [
        'Online-Marktplätze',
        'Online-Suchmaschinen',
        'Soziale Netzwerke'
      ],
      threshold: '45+ Mio. aktive Nutzer pro Monat in der EU',
      criticality: 'Hoch'
    },
    {
      category: 'Postdienste',
      icon: Mail,
      sectors: [
        'Postdiensteanbieter'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Mittel'
    },
    {
      category: 'Abfallwirtschaft',
      icon: Trash2,
      sectors: [
        'Abfallbewirtschaftungsunternehmen'
      ],
      threshold: '250+ Mitarbeiter oder 50 Mio. € Umsatz',
      criticality: 'Mittel'
    }
  ];

  const cybersecurityMeasures = [
    {
      category: 'Technische Maßnahmen',
      icon: Settings,
      measures: [
        {
          title: 'Asset Management',
          description: 'Vollständige Inventarisierung aller IT-Assets',
          implementation: 'Automatisierte Discovery-Tools, CMDB-Integration',
          evidence: 'Asset-Register, Inventarisierungsberichte'
        },
        {
          title: 'Netzwerksegmentierung',
          description: 'Logische Trennung kritischer Systeme',
          implementation: 'VLAN-Konfiguration, Mikrosegmentierung',
          evidence: 'Netzwerkdiagramme, Firewall-Regeln'
        },
        {
          title: 'Verschlüsselung',
          description: 'Ende-zu-Ende-Verschlüsselung für Daten in Ruhe und Transit',
          implementation: 'AES-256, TLS 1.3, Zertifikatsverwaltung',
          evidence: 'Verschlüsselungsrichtlinien, Schlüsselmanagement'
        },
        {
          title: 'Multi-Faktor-Authentifizierung',
          description: 'Obligatorisch für alle privilegierten Zugriffe',
          implementation: 'Hardware-Token, biometrische Verfahren',
          evidence: 'MFA-Konfiguration, Authentifizierungslogs'
        }
      ]
    },
    {
      category: 'Organisatorische Maßnahmen',
      icon: Users,
      measures: [
        {
          title: 'Incident Response Plan',
          description: 'Strukturierte Verfahren für Cybersicherheitsvorfälle',
          implementation: 'NIST-Framework, 24/7-SOC, Eskalationsverfahren',
          evidence: 'IRP-Dokumentation, Incident-Logs, Übungsberichte'
        },
        {
          title: 'Security Awareness Training',
          description: 'Regelmäßige Schulungen für alle Mitarbeiter',
          implementation: 'Phishing-Simulationen, E-Learning-Module',
          evidence: 'Schulungsnachweise, Awareness-Tests'
        },
        {
          title: 'Privileged Access Management',
          description: 'Kontrolle und Überwachung privilegierter Zugriffe',
          implementation: 'Just-in-Time-Access, Session Recording',
          evidence: 'PAM-Logs, Zugriffsprotokolle'
        },
        {
          title: 'Backup & Recovery',
          description: 'Regelmäßige Backups mit Wiederherstellungstests',
          implementation: '3-2-1-Regel, Air-Gapped Backups',
          evidence: 'Backup-Logs, Recovery-Tests'
        }
      ]
    },
    {
      category: 'Physische Maßnahmen',
      icon: Lock,
      measures: [
        {
          title: 'Zutrittskontrolle',
          description: 'Kontrolle des physischen Zugangs zu kritischen Bereichen',
          implementation: 'Biometrische Scanner, Mantrap-Systeme',
          evidence: 'Zutrittsprotokoll, Besucherlogs'
        },
        {
          title: 'Überwachung',
          description: '24/7-Videoüberwachung kritischer Infrastrukturen',
          implementation: 'IP-Kameras, Motion Detection, Alarmsysteme',
          evidence: 'Überwachungsaufzeichnungen, Alarmprotokolle'
        },
        {
          title: 'Umgebungsschutz',
          description: 'Schutz vor Umwelteinflüssen und Naturkatastrophen',
          implementation: 'Brandschutz, Klimaüberwachung, USV-Systeme',
          evidence: 'Umweltmonitoring, Wartungsprotokolle'
        }
      ]
    }
  ];

  const incidentTypes = [
    {
      type: 'Erheblich',
      description: 'Sofortige Meldung binnen 24 Stunden',
      criteria: [
        'Erhebliche operative Störungen',
        'Verlust der Integrität, Verfügbarkeit oder Vertraulichkeit',
        'Erheblicher materieller Schaden',
        'Beeinträchtigung der öffentlichen Sicherheit'
      ],
      reportingFlow: [
        'Erkennung des Vorfalls',
        'Erste Bewertung (< 4 Stunden)',
        'Meldung an CSIRT (< 24 Stunden)',
        'Vorläufiger Bericht (< 72 Stunden)',
        'Abschlussbericht (< 1 Monat)'
      ],
      icon: AlertTriangle,
      urgency: 'Kritisch'
    },
    {
      type: 'Nicht erheblich',
      description: 'Interne Dokumentation ausreichend',
      criteria: [
        'Geringe operative Auswirkungen',
        'Keine Beeinträchtigung der Dienstverfügbarkeit',
        'Minimaler oder kein materieller Schaden',
        'Keine Auswirkungen auf andere Einrichtungen'
      ],
      reportingFlow: [
        'Dokumentation im internen System',
        'Kategorisierung und Bewertung',
        'Trend-Analyse für präventive Maßnahmen'
      ],
      icon: Info,
      urgency: 'Niedrig'
    }
  ];

  const complianceTimeline = [
    {
      date: '16. Januar 2023',
      milestone: 'NIS2-Richtlinie in Kraft getreten',
      description: 'Veröffentlichung im EU-Amtsblatt',
      status: 'completed',
      icon: Gavel
    },
    {
      date: '17. Oktober 2024',
      milestone: 'Umsetzungsfrist für Mitgliedstaaten',
      description: 'Nationale Gesetze müssen verabschiedet sein',
      status: 'completed',
      icon: Scale
    },
    {
      date: '18. Oktober 2024',
      milestone: 'Anwendungsbeginn',
      description: 'NIS2-Verpflichtungen werden wirksam',
      status: 'current',
      icon: Play
    },
    {
      date: '17. April 2025',
      milestone: 'Erste Compliance-Bewertungen',
      description: 'Aufsichtsbehörden beginnen mit Prüfungen',
      status: 'upcoming',
      icon: Search
    },
    {
      date: '17. Oktober 2025',
      milestone: 'Vollständige Durchsetzung',
      description: 'Alle Sanktionsmöglichkeiten aktiviert',
      status: 'upcoming',
      icon: AlertTriangle
    }
  ];

  const implementationPhases = [
    {
      phase: 1,
      title: 'Bewertung & Klassifizierung',
      duration: '2-3 Monate',
      tasks: [
        'Anwendbarkeit von NIS2 prüfen',
        'Klassifizierung als wesentliche oder wichtige Einrichtung',
        'Gap-Analyse der aktuellen Cybersicherheitsmaßnahmen',
        'Risikobewertung der kritischen Assets',
        'Compliance-Roadmap entwickeln'
      ],
      deliverables: [
        'NIS2-Anwendbarkeitsbericht',
        'Asset-Inventar',
        'Gap-Analyse-Bericht',
        'Risikobewertung',
        'Umsetzungsplan'
      ],
      icon: Target,
      color: 'blue'
    },
    {
      phase: 2,
      title: 'Governance & Organisation',
      duration: '1-2 Monate',
      tasks: [
        'CISO-Rolle definieren und besetzen',
        'Cybersicherheitskomitee einrichten',
        'Richtlinien und Verfahren entwickeln',
        'Berichtswege und Verantwortlichkeiten festlegen',
        'Schulungsprogramm initiieren'
      ],
      deliverables: [
        'Organisationsstruktur',
        'Rollenbeschreibungen',
        'Cybersicherheitsrichtlinien',
        'Schulungskonzept',
        'Governance-Framework'
      ],
      icon: Users,
      color: 'green'
    },
    {
      phase: 3,
      title: 'Technische Implementierung',
      duration: '6-9 Monate',
      tasks: [
        'Netzwerksegmentierung implementieren',
        'Monitoring und Detection einrichten',
        'Verschlüsselung ausrollen',
        'Multi-Faktor-Authentifizierung einführen',
        'Backup- und Recovery-Systeme optimieren'
      ],
      deliverables: [
        'Segmentierte Netzwerkarchitektur',
        'SOC/SIEM-System',
        'Verschlüsselungsinfrastruktur',
        'MFA-Lösung',
        'Backup-Strategie'
      ],
      icon: Settings,
      color: 'orange'
    },
    {
      phase: 4,
      title: 'Incident Response',
      duration: '2-3 Monate',
      tasks: [
        'Incident Response Plan entwickeln',
        'CSIRT aufbauen und schulen',
        'Meldeverfahren etablieren',
        'Kommunikationspläne erstellen',
        'Übungen und Tests durchführen'
      ],
      deliverables: [
        'Incident Response Plan',
        'CSIRT-Handbuch',
        'Meldevorlagen',
        'Kommunikationsmatrix',
        'Übungsberichte'
      ],
      icon: AlertTriangle,
      color: 'red'
    },
    {
      phase: 5,
      title: 'Supply Chain Security',
      duration: '3-4 Monate',
      tasks: [
        'Lieferantenbewertung durchführen',
        'Vertragsklauseln anpassen',
        'Third-Party Risk Management einführen',
        'Monitoring der Lieferkette implementieren',
        'Kontinuierliche Bewertung etablieren'
      ],
      deliverables: [
        'Supplier Security Assessment',
        'Vertragsvorlagen',
        'TPRM-Framework',
        'Supply Chain Monitoring',
        'Bewertungszyklen'
      ],
      icon: Network,
      color: 'purple'
    },
    {
      phase: 6,
      title: 'Kontinuierliche Verbesserung',
      duration: 'Laufend',
      tasks: [
        'Regelmäßige Penetrationstests',
        'Vulnerability Management',
        'Compliance-Monitoring',
        'Schulungen und Awareness',
        'Aktualisierung der Maßnahmen'
      ],
      deliverables: [
        'Penetrationstest-Berichte',
        'Vulnerability Scans',
        'Compliance-Dashboard',
        'Schulungsnachweise',
        'Verbesserungsmaßnahmen'
      ],
      icon: TrendingUp,
      color: 'teal'
    }
  ];

  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CounterAnimation = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(value);
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isInView, value, duration]);

    return <span ref={elementRef}>{count}</span>;
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX }}
      />

      {/* Floating Sidebar Toggle */}
      <Button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-40 lg:hidden bg-blue-600 hover:bg-blue-700"
        size="sm"
      >
        <List className="h-4 w-4" />
      </Button>

      {/* Sidebar */}
      <motion.div
        className={`fixed left-0 top-16 h-screen w-80 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700 z-30 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">NIS2-Leitfaden</h2>
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <section.icon className="h-4 w-4" />
                  <div className="flex-1">
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs opacity-70">{section.readTime}</div>
                  </div>
                  {activeSection === section.id && (
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {/* Progress */}
          <div className="mt-6 p-4 bg-slate-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Lesefortschritt</span>
              <span className="text-sm text-blue-400">{Math.round(readingProgress)}%</span>
            </div>
            <Progress value={readingProgress} className="h-2" />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:ml-80">
        <div className="container mx-auto px-6 py-8" ref={containerRef}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            data-section="overview"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">NIS2-Richtlinie 2022/2555</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                NIS2
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Compliance Leitfaden</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Umfassender Leitfaden zur Network and Information Security Directive 2 - 
              Von der Anwendbarkeit bis zur vollständigen Compliance-Implementierung
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-blue-600/20 text-blue-400 px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Gültig ab 18.10.2024
              </Badge>
              <Badge className="bg-purple-600/20 text-purple-400 px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                17 Sektoren
              </Badge>
              <Badge className="bg-green-600/20 text-green-400 px-4 py-2">
                <Euro className="h-4 w-4 mr-2" />
                Bis zu 2% des Jahresumsatzes
              </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  <CounterAnimation value="27" />
                </div>
                <div className="text-gray-300">EU-Mitgliedstaaten</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  <CounterAnimation value="160000" />+
                </div>
                <div className="text-gray-300">Betroffene Unternehmen</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">
                  <CounterAnimation value="24" />h
                </div>
                <div className="text-gray-300">Meldefrist</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  <CounterAnimation value="10" />M€
                </div>
                <div className="text-gray-300">Max. Geldbuße</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="overview"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Überblick</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Was ist NIS2?</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Die NIS2-Richtlinie (Network and Information Security Directive 2) ist eine 
                      EU-Verordnung, die am 16. Januar 2023 in Kraft getreten ist. Sie ersetzt die 
                      ursprüngliche NIS-Richtlinie und erweitert den Anwendungsbereich erheblich.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Hauptziele:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Erhöhung der Cybersicherheit in kritischen Sektoren
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Harmonisierung der Cybersicherheitsanforderungen in der EU
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Verbesserung der Incident-Response-Kapazitäten
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Stärkung der grenzüberschreitenden Zusammenarbeit
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Wichtige Änderungen zu NIS1</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">Erweitert</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Anwendungsbereich von 7 auf 17 Sektoren erweitert
                        </p>
                      </div>
                      
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-orange-400" />
                          <span className="font-semibold text-orange-400">Verschärft</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Härtere Sanktionen: bis zu 10 Mio. € oder 2% des Jahresumsatzes
                        </p>
                      </div>
                      
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Beschleunigt</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Meldefrist für erhebliche Vorfälle: 24 Stunden (statt 72h)
                        </p>
                      </div>
                      
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">Konkretisiert</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Persönliche Haftung der Geschäftsführung
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="history"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Geschichte & Entwicklung</h2>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                  
                  <div className="space-y-8">
                    <div className="relative flex items-start gap-6">
                      <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                      <div className="ml-16">
                        <div className="text-purple-400 font-semibold mb-2">2016</div>
                        <h3 className="text-xl font-bold text-white mb-2">NIS1-Richtlinie verabschiedet</h3>
                        <p className="text-gray-300">
                          Die ursprüngliche Network and Information Security Directive tritt in Kraft. 
                          Abdeckung von 7 Sektoren mit grundlegenden Cybersicherheitsanforderungen.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-6">
                      <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                      <div className="ml-16">
                        <div className="text-blue-400 font-semibold mb-2">2020</div>
                        <h3 className="text-xl font-bold text-white mb-2">EU Cybersicherheitsstrategie</h3>
                        <p className="text-gray-300">
                          Veröffentlichung der neuen EU-Cybersicherheitsstrategie mit Fokus auf 
                          Resilienz und strategische Autonomie. Ankündigung der NIS2-Revision.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-6">
                      <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900"></div>
                      <div className="ml-16">
                        <div className="text-green-400 font-semibold mb-2">Dezember 2020</div>
                        <h3 className="text-xl font-bold text-white mb-2">NIS2-Vorschlag der Kommission</h3>
                        <p className="text-gray-300">
                          Die Europäische Kommission veröffentlicht den Vorschlag für eine 
                          überarbeitete NIS-Richtlinie mit erweiterten Anforderungen.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-6">
                      <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900"></div>
                      <div className="ml-16">
                        <div className="text-orange-400 font-semibold mb-2">2021-2022</div>
                        <h3 className="text-xl font-bold text-white mb-2">Verhandlungen & Trilog</h3>
                        <p className="text-gray-300">
                          Intensive Verhandlungen zwischen Europäischem Parlament, Rat und Kommission. 
                          Finalisierung der endgültigen Fassung der NIS2-Richtlinie.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-6">
                      <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-slate-900"></div>
                      <div className="ml-16">
                        <div className="text-red-400 font-semibold mb-2">16. Januar 2023</div>
                        <h3 className="text-xl font-bold text-white mb-2">NIS2 tritt in Kraft</h3>
                        <p className="text-gray-300">
                          Offizielle Veröffentlichung im EU-Amtsblatt. Start der 21-monatigen 
                          Umsetzungsfrist für die Mitgliedstaaten.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start gap-6">
                      <div className="absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                      <div className="ml-16">
                        <div className="text-cyan-400 font-semibold mb-2">17. Oktober 2024</div>
                        <h3 className="text-xl font-bold text-white mb-2">Anwendungsbeginn</h3>
                        <p className="text-gray-300">
                          NIS2-Verpflichtungen werden in allen EU-Mitgliedstaaten wirksam. 
                          Beginn der Enforcement-Phase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Scope Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="scope"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Anwendungsbereich</h2>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">17 Betroffene Sektoren</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nis2Sectors.map((sector, index) => (
                      <motion.div
                        key={sector.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-slate-700/50 rounded-lg p-6 border border-slate-600 hover:border-blue-500/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-blue-600/20 rounded-lg">
                            <sector.icon className="h-5 w-5 text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-white">{sector.category}</h4>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          {sector.sectors.map((subsector) => (
                            <div key={subsector} className="text-sm text-gray-300 bg-slate-800/50 px-3 py-2 rounded">
                              {subsector}
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="text-xs text-gray-400">Schwellenwert:</span>
                          </div>
                          <div className="text-sm text-white font-medium">{sector.threshold}</div>
                          
                          <div className="flex items-center gap-2 mt-3">
                            <AlertTriangle className="h-4 w-4 text-orange-400" />
                            <span className="text-xs text-gray-400">Kritikalität:</span>
                            <Badge className={`text-xs ${
                              sector.criticality === 'Sehr hoch' ? 'bg-red-500/20 text-red-300' :
                              sector.criticality === 'Hoch' ? 'bg-orange-500/20 text-orange-300' :
                              'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {sector.criticality}
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Größenschwellen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-400 mb-2">Allgemeine Schwelle</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• 250+ Mitarbeiter ODER</li>
                        <li>• 50 Mio. € Jahresumsatz</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-400 mb-2">Besondere Regelungen</h4>
                      <ul className="space-y-1 text-gray-300">
                        <li>• Digitale Dienste: 45 Mio. aktive Nutzer/Monat</li>
                        <li>• Öffentliche Verwaltung: Alle Ebenen</li>
                        <li>• Banken: Alle regulierten Institute</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Essential Entities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="essential-entities"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <Building className="h-6 w-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Wesentliche Einrichtungen</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Definition & Kriterien</h3>
                    <p className="text-gray-300 mb-6">
                      Wesentliche Einrichtungen sind Organisationen in kritischen Sektoren, 
                      deren Störung erhebliche Auswirkungen auf die Wirtschaft oder Gesellschaft hätte.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="font-semibold text-red-400">Hohe Kritikalität</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Störungen können schwerwiegende grenzüberschreitende Auswirkungen haben
                        </p>
                      </div>
                      
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="h-4 w-4 text-orange-400" />
                          <span className="font-semibold text-orange-400">Strengere Aufsicht</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Unterliegen verstärkter behördlicher Überwachung und Kontrolle
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Betroffene Sektoren</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Energie', icon: Zap, color: 'text-yellow-400' },
                        { name: 'Verkehr', icon: Car, color: 'text-blue-400' },
                        { name: 'Bankwesen', icon: Building, color: 'text-green-400' },
                        { name: 'Finanzmarktinfrastrukturen', icon: TrendingUp, color: 'text-purple-400' },
                        { name: 'Gesundheitswesen', icon: Heart, color: 'text-red-400' },
                        { name: 'Trinkwasser', icon: Waves, color: 'text-cyan-400' },
                        { name: 'Abwasser', icon: Factory, color: 'text-gray-400' },
                        { name: 'Digitale Infrastruktur', icon: Server, color: 'text-indigo-400' },
                        { name: 'Elektronische Kommunikation', icon: Radio, color: 'text-pink-400' },
                        { name: 'Weltraum', icon: Satellite, color: 'text-orange-400' },
                        { name: 'Öffentliche Verwaltung', icon: Building2, color: 'text-emerald-400' }
                      ].map((sector) => (
                        <div key={sector.name} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                          <sector.icon className={`h-5 w-5 ${sector.color}`} />
                          <span className="text-white font-medium">{sector.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Zusätzliche Verpflichtungen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="p-3 bg-red-600/20 rounded-lg w-fit mx-auto mb-3">
                        <FileText className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Erweiterte Berichtspflichten</h4>
                      <p className="text-gray-300 text-sm">
                        Detailliertere Incident-Reports und regelmäßige Compliance-Berichte
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-3 bg-orange-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Search className="h-6 w-6 text-orange-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Regelmäßige Audits</h4>
                      <p className="text-gray-300 text-sm">
                        Mindestens alle 2 Jahre umfassende Cybersicherheits-Audits
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-3 bg-yellow-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Award className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Zertifizierungen</h4>
                      <p className="text-gray-300 text-sm">
                        Nachweis anerkannter Cybersicherheits-Zertifizierungen empfohlen
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Important Entities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="important-entities"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <Building2 className="h-6 w-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Wichtige Einrichtungen</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Definition & Abgrenzung</h3>
                    <p className="text-gray-300 mb-6">
                      Wichtige Einrichtungen sind Unternehmen, die nicht als wesentlich eingestuft werden, 
                      aber dennoch kritische Dienste erbringen und den Größenschwellen unterliegen.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="h-4 w-4 text-orange-400" />
                          <span className="font-semibold text-orange-400">Moderate Aufsicht</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Weniger intensive behördliche Überwachung als wesentliche Einrichtungen
                        </p>
                      </div>
                      
                      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Selbstdeklaration</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Unternehmen müssen selbst prüfen, ob sie unter NIS2 fallen
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Zusätzliche Sektoren</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'ICT-Dienstmanagement', icon: Network, color: 'text-blue-400' },
                        { name: 'Lebensmittel', icon: Package, color: 'text-green-400' },
                        { name: 'Verarbeitendes Gewerbe', icon: Settings, color: 'text-gray-400' },
                        { name: 'Digitale Anbieter', icon: Globe, color: 'text-purple-400' },
                        { name: 'Postdienste', icon: Mail, color: 'text-yellow-400' },
                        { name: 'Abfallwirtschaft', icon: Trash2, color: 'text-orange-400' }
                      ].map((sector) => (
                        <div key={sector.name} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                          <sector.icon className={`h-5 w-5 ${sector.color}`} />
                          <span className="text-white font-medium">{sector.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-lg p-6 border border-orange-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">Unterschiede zu wesentlichen Einrichtungen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-5 w-5 text-orange-400" />
                        <h4 className="font-medium text-white">Aufsichtsfrequenz</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Weniger häufige behördliche Kontrollen und Prüfungen
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Euro className="h-5 w-5 text-orange-400" />
                        <h4 className="font-medium text-white">Sanktionen</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Gleiche Höchststrafen, aber geringere Wahrscheinlichkeit von Prüfungen
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="h-5 w-5 text-orange-400" />
                        <h4 className="font-medium text-white">Berichtspflichten</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Gleiche Incident-Reporting-Anforderungen wie wesentliche Einrichtungen
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cybersecurity Measures Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="cybersecurity-measures"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cybersicherheitsmaßnahmen</h2>
                </div>
                
                <div className="space-y-8">
                  {cybersecurityMeasures.map((category, categoryIndex) => (
                    <div key={category.category} className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-600/20 rounded-lg">
                          <category.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.measures.map((measure, measureIndex) => (
                          <motion.div
                            key={measure.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (categoryIndex * 4 + measureIndex) * 0.1 }}
                            className="bg-slate-800/50 rounded-lg p-6 border border-slate-600"
                          >
                            <h4 className="text-lg font-semibold text-white mb-3">{measure.title}</h4>
                            <p className="text-gray-300 mb-4 text-sm">{measure.description}</p>
                            
                            <div className="space-y-3">
                              <div>
                                <span className="text-xs text-blue-400 font-medium">UMSETZUNG:</span>
                                <p className="text-gray-300 text-sm mt-1">{measure.implementation}</p>
                              </div>
                              
                              <div>
                                <span className="text-xs text-green-400 font-medium">NACHWEIS:</span>
                                <p className="text-gray-300 text-sm mt-1">{measure.evidence}</p>
                              </div>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-slate-600">
                              <button
                                onClick={() => toggleTaskCompletion(`${category.category}-${measure.title}`)}
                                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                {completedTasks.has(`${category.category}-${measure.title}`) ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                                ) : (
                                  <Circle className="h-4 w-4" />
                                )}
                                Als implementiert markieren
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="risk-management"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Risikomanagement</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Risikobewertungsansatz</h3>
                    <p className="text-gray-300 mb-6">
                      NIS2 verlangt einen systematischen Ansatz zur Identifikation, Bewertung und 
                      Behandlung von Cybersicherheitsrisiken basierend auf dem aktuellen Bedrohungsumfeld.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-400 mb-2">1. Identifikation</h4>
                        <p className="text-gray-300 text-sm">
                          Erkennung aller relevanten Cyber-Bedrohungen und Schwachstellen
                        </p>
                      </div>
                      
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-400 mb-2">2. Bewertung</h4>
                        <p className="text-gray-300 text-sm">
                          Analyse der Eintrittswahrscheinlichkeit und Auswirkungen
                        </p>
                      </div>
                      
                      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-400 mb-2">3. Behandlung</h4>
                        <p className="text-gray-300 text-sm">
                          Implementierung angemessener Schutzmaßnahmen
                        </p>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-400 mb-2">4. Überwachung</h4>
                        <p className="text-gray-300 text-sm">
                          Kontinuierliche Überprüfung und Anpassung der Maßnahmen
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Risikokategorien</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-4 w-4 text-yellow-400" />
                          <span className="font-semibold text-yellow-400">Operationelle Risiken</span>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Ausfall kritischer IT-Systeme</li>
                          <li>• Datenverlust oder -korruption</li>
                          <li>• Unterbrechung der Geschäftsprozesse</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Menschliche Risiken</span>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Social Engineering</li>
                          <li>• Insider-Bedrohungen</li>
                          <li>• Unbeabsichtigte Fehler</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Network className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">Technische Risiken</span>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Malware und Ransomware</li>
                          <li>• Netzwerkeinbrüche</li>
                          <li>• Zero-Day-Exploits</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">Lieferkettenrisiken</span>
                        </div>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Kompromittierte Zulieferer</li>
                          <li>• Software Supply Chain Attacks</li>
                          <li>• Hardware-Manipulation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Risikomatrix & Bewertung</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Wahrscheinlichkeit</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 bg-green-900/20 rounded">
                          <div className="w-4 h-4 bg-green-500 rounded"></div>
                          <span className="text-green-400 font-medium">Niedrig (1-2)</span>
                          <span className="text-gray-400 text-sm">Sehr unwahrscheinlich</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-yellow-900/20 rounded">
                          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                          <span className="text-yellow-400 font-medium">Mittel (3)</span>
                          <span className="text-gray-400 text-sm">Möglich</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-red-900/20 rounded">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <span className="text-red-400 font-medium">Hoch (4-5)</span>
                          <span className="text-gray-400 text-sm">Sehr wahrscheinlich</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Auswirkung</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 bg-green-900/20 rounded">
                          <div className="w-4 h-4 bg-green-500 rounded"></div>
                          <span className="text-green-400 font-medium">Gering (1-2)</span>
                          <span className="text-gray-400 text-sm">Minimale Auswirkung</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-yellow-900/20 rounded">
                          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                          <span className="text-yellow-400 font-medium">Moderat (3)</span>
                          <span className="text-gray-400 text-sm">Erhebliche Auswirkung</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-red-900/20 rounded">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <span className="text-red-400 font-medium">Schwerwiegend (4-5)</span>
                          <span className="text-gray-400 text-sm">Kritische Auswirkung</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Incident Reporting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="incident-reporting"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <Bell className="h-6 w-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Meldepflichten</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {incidentTypes.map((incidentType, index) => (
                    <motion.div
                      key={incidentType.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${
                          incidentType.urgency === 'Kritisch' ? 'bg-red-600/20' : 'bg-blue-600/20'
                        }`}>
                          <incidentType.icon className={`h-5 w-5 ${
                            incidentType.urgency === 'Kritisch' ? 'text-red-400' : 'text-blue-400'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{incidentType.type} Vorfälle</h3>
                          <Badge className={`mt-1 ${
                            incidentType.urgency === 'Kritisch' 
                              ? 'bg-red-500/20 text-red-300' 
                              : 'bg-blue-500/20 text-blue-300'
                          }`}>
                            {incidentType.urgency}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{incidentType.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Kriterien:</h4>
                          <ul className="space-y-1">
                            {incidentType.criteria.map((criterion, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                {criterion}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">Meldeprozess:</h4>
                          <ol className="space-y-2">
                            {incidentType.reportingFlow.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5 flex-shrink-0">
                                  {idx + 1}
                                </div>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 border border-orange-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">24-Stunden-Meldefrist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="p-3 bg-red-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Clock className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Sofortmeldung</h4>
                      <p className="text-gray-300 text-sm">
                        Erste Meldung binnen 24 Stunden nach Erkennung
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-3 bg-orange-600/20 rounded-lg w-fit mx-auto mb-3">
                        <FileText className="h-6 w-6 text-orange-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Zwischenbericht</h4>
                      <p className="text-gray-300 text-sm">
                        Detaillierter Bericht binnen 72 Stunden
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="p-3 bg-yellow-600/20 rounded-lg w-fit mx-auto mb-3">
                        <Award className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Abschlussbericht</h4>
                      <p className="text-gray-300 text-sm">
                        Finaler Bericht binnen 1 Monat
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Compliance Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="compliance-timeline"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Compliance Timeline</h2>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-red-500"></div>
                  
                  <div className="space-y-8">
                    {complianceTimeline.map((milestone, index) => (
                      <motion.div
                        key={milestone.date}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex items-start gap-6"
                      >
                        <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-slate-900 ${
                          milestone.status === 'completed' ? 'bg-green-500' :
                          milestone.status === 'current' ? 'bg-blue-500' :
                          'bg-gray-500'
                        }`}></div>
                        
                        <div className="ml-16 bg-slate-700/30 rounded-lg p-6 flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <milestone.icon className={`h-5 w-5 ${
                              milestone.status === 'completed' ? 'text-green-400' :
                              milestone.status === 'current' ? 'text-blue-400' :
                              'text-gray-400'
                            }`} />
                            <Badge className={`${
                              milestone.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                              milestone.status === 'current' ? 'bg-blue-500/20 text-blue-300' :
                              'bg-gray-500/20 text-gray-300'
                            }`}>
                              {milestone.date}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{milestone.milestone}</h3>
                          <p className="text-gray-300">{milestone.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Implementation Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="implementation"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Route className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Umsetzungsroadmap</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {implementationPhases.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-slate-700/30 rounded-lg p-6 border border-slate-600 hover:border-${phase.color}-500/50 transition-colors`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 bg-${phase.color}-600/20 rounded-lg`}>
                          <phase.icon className={`h-5 w-5 text-${phase.color}-400`} />
                        </div>
                        <div>
                          <Badge className={`bg-${phase.color}-500/20 text-${phase.color}-300 mb-2`}>
                            Phase {phase.phase}
                          </Badge>
                          <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                          <p className="text-gray-400 text-sm">{phase.duration}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-white mb-2">Aufgaben:</h4>
                          <ul className="space-y-1">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-2">Ergebnisse:</h4>
                          <ul className="space-y-1">
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <li key={delIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Governance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="governance"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Governance & Leadership</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Führungsverantwortung</h3>
                    <p className="text-gray-300 mb-6">
                      NIS2 betont die persönliche Verantwortung der Geschäftsführung für 
                      Cybersicherheit und verlangt eine "Tone from the Top"-Kultur.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-400 mb-2">Persönliche Haftung</h4>
                        <p className="text-gray-300 text-sm">
                          Geschäftsführer können persönlich für Compliance-Verstöße haftbar gemacht werden
                        </p>
                      </div>
                      
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Aufsichtspflicht</h4>
                        <p className="text-gray-300 text-sm">
                          Aktive Überwachung und Steuerung der Cybersicherheitsmaßnahmen
                        </p>
                      </div>
                      
                      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-400 mb-2">Schulungspflicht</h4>
                        <p className="text-gray-300 text-sm">
                          Regelmäßige Cybersicherheitsschulungen für die Führungsebene
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Organisationsstruktur</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="font-semibold text-yellow-400">CISO/Chief Security Officer</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Verantwortlich für strategische Cybersicherheit und Compliance
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Security Committee</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Interdisziplinäres Gremium für Cybersicherheitsentscheidungen
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">Security Champions</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Dezentrale Sicherheitsverantwortliche in allen Geschäftsbereichen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-purple-300">Hinweis:</strong> Viele Unternehmen integrieren ihren <strong>Datenschutzbeauftragten (DSB)</strong> in die NIS2-Governance-Struktur, da sich Datenschutz und Informationssicherheit stark überschneiden. → <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-purple-400 hover:text-purple-300 font-semibold underline">Mehr über DSB-Rolle in IT-Sicherheit</Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Supply Chain Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="supply-chain"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Network className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Lieferkettenmanagement</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Supply Chain Security</h3>
                    <p className="text-gray-300 mb-6">
                      NIS2 verlangt umfassende Bewertung und Überwachung der 
                      Cybersicherheitsrisiken in der gesamten Lieferkette.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-400 mb-2">Vendor Assessment</h4>
                        <p className="text-gray-300 text-sm">
                          Systematische Bewertung der Cybersicherheitsreife aller Zulieferer
                        </p>
                      </div>
                      
                      <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-400 mb-2">Vertragsklauseln</h4>
                        <p className="text-gray-300 text-sm">
                          Cybersicherheitsanforderungen in allen Lieferantenverträgen
                        </p>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-400 mb-2">Kontinuierliches Monitoring</h4>
                        <p className="text-gray-300 text-sm">
                          Laufende Überwachung der Sicherheitslage bei kritischen Lieferanten
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Kritische Lieferanten</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Server className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">IT-Dienstleister</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Cloud-Provider, Managed Services, Software-Anbieter
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-red-400" />
                          <span className="font-semibold text-red-400">Kritische Infrastruktur</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Energieversorger, Telekommunikation, Logistikpartner
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="h-4 w-4 text-orange-400" />
                          <span className="font-semibold text-orange-400">Technologie-Lieferanten</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Hardware-Hersteller, Software-Entwickler, OEM-Partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Business Continuity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="business-continuity"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-600/20 rounded-lg">
                    <RotateCcw className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Business Continuity</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Disaster Recovery</h3>
                    <p className="text-gray-300 mb-6">
                      Strukturierte Pläne zur schnellen Wiederherstellung kritischer 
                      Geschäftsprozesse nach Cybersicherheitsvorfällen.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-400 mb-2">RTO (Recovery Time Objective)</h4>
                        <p className="text-gray-300 text-sm">
                          Maximale akzeptable Ausfallzeit für kritische Systeme
                        </p>
                      </div>
                      
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-400 mb-2">RPO (Recovery Point Objective)</h4>
                        <p className="text-gray-300 text-sm">
                          Maximaler akzeptabler Datenverlust bei System-Recovery
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Backup-Strategien</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">3-2-1 Regel</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          3 Kopien, 2 verschiedene Medien, 1 Offsite-Backup
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Cloud className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">Air-Gapped Backups</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Physisch getrennte Backups gegen Ransomware-Angriffe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Encryption Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="encryption"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-600/20 rounded-lg">
                    <Lock className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Verschlüsselung</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Verschlüsselungsstandards</h3>
                    <p className="text-gray-300 mb-6">
                      NIS2 verlangt starke Verschlüsselung für alle sensiblen Daten 
                      sowohl in Ruhe als auch bei der Übertragung.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-400 mb-2">Data at Rest</h4>
                        <p className="text-gray-300 text-sm">
                          AES-256 Verschlüsselung für gespeicherte Daten und Datenbanken
                        </p>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-400 mb-2">Data in Transit</h4>
                        <p className="text-gray-300 text-sm">
                          TLS 1.3 für alle Datenübertragungen und API-Kommunikation
                        </p>
                      </div>
                      
                      <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-400 mb-2">Key Management</h4>
                        <p className="text-gray-300 text-sm">
                          Hardware Security Modules (HSM) für Schlüsselverwaltung
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Implementierung</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="h-4 w-4 text-orange-400" />
                          <span className="font-semibold text-orange-400">End-to-End Encryption</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Vollständige Verschlüsselung vom Sender zum Empfänger
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-red-400" />
                          <span className="font-semibold text-red-400">Zero-Knowledge Architecture</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Service-Provider haben keinen Zugriff auf Kundendaten
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-yellow-400" />
                          <span className="font-semibold text-yellow-400">Quantum-Safe Cryptography</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Vorbereitung auf Post-Quantum-Kryptographie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vulnerability Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="vulnerability-management"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-600/20 rounded-lg">
                    <Search className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Vulnerability Management</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Schwachstellenmanagement</h3>
                    <p className="text-gray-300 mb-6">
                      Systematische Identifikation, Bewertung und Behebung von 
                      Sicherheitslücken in der gesamten IT-Infrastruktur.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-400 mb-2">Kritisch (CVSS 9.0-10.0)</h4>
                        <p className="text-gray-300 text-sm">
                          Sofortige Behebung binnen 24 Stunden
                        </p>
                      </div>
                      
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Hoch (CVSS 7.0-8.9)</h4>
                        <p className="text-gray-300 text-sm">
                          Patches binnen 72 Stunden implementieren
                        </p>
                      </div>
                      
                      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-400 mb-2">Mittel (CVSS 4.0-6.9)</h4>
                        <p className="text-gray-300 text-sm">
                          Reguläre Patch-Zyklen (14 Tage)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Automatisierung</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Automated Scanning</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Kontinuierliche Vulnerability Scans aller Systeme
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">Risk Scoring</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Automatische Risikobewertung und Priorisierung
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">Patch Management</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Automatisierte Patch-Deployment mit Rollback-Funktionen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Penetration Testing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="penetration-testing"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <Target className="h-6 w-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Penetrationstests</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Pentest-Strategie</h3>
                    <p className="text-gray-300 mb-6">
                      Regelmäßige Penetrationstests zur Bewertung der praktischen 
                      Wirksamkeit implementierter Sicherheitsmaßnahmen.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-400 mb-2">Black Box Testing</h4>
                        <p className="text-gray-300 text-sm">
                          Externe Sicht ohne Vorwissen über interne Systeme
                        </p>
                      </div>
                      
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-400 mb-2">White Box Testing</h4>
                        <p className="text-gray-300 text-sm">
                          Vollständiger Zugang zu Systemdokumentation und Code
                        </p>
                      </div>
                      
                      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-400 mb-2">Red Team Exercises</h4>
                        <p className="text-gray-300 text-sm">
                          Realistische Angriffssimulationen über längere Zeiträume
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Test-Bereiche</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Network className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Netzwerk-Penetration</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Externe und interne Netzwerk-Infrastruktur
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">Web Application Testing</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          OWASP Top 10 und branchenspezifische Schwachstellen
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">Social Engineering</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Phishing-Kampagnen und Mitarbeiter-Awareness-Tests
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enforcement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="enforcement"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <Gavel className="h-6 w-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Durchsetzung & Sanktionen</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Sanktionsmöglichkeiten</h3>
                    <p className="text-gray-300 mb-6">
                      NIS2 sieht erheblich härtere Sanktionen vor als die ursprüngliche 
                      NIS-Richtlinie, einschließlich persönlicher Haftung der Führungskräfte.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-400 mb-2">Geldstrafen</h4>
                        <p className="text-gray-300 text-sm">
                          Bis zu 10 Mio. € oder 2% des weltweiten Jahresumsatzes
                        </p>
                      </div>
                      
                      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Betriebsverbote</h4>
                        <p className="text-gray-300 text-sm">
                          Temporäre oder dauerhafte Untersagung des Geschäftsbetriebs
                        </p>
                      </div>
                      
                      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-400 mb-2">Persönliche Haftung</h4>
                        <p className="text-gray-300 text-sm">
                          Führungskräfte können persönlich zur Verantwortung gezogen werden
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Aufsichtsbehörden</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Nationale Behörden</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          BSI, BNetzA und andere sektorspezifische Aufsichtsbehörden
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">EU-Koordination</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          ENISA koordiniert grenzüberschreitende Durchsetzung
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Search className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">Prüfungsbefugnisse</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Umfassende Audit- und Untersuchungsrechte der Behörden
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Best Practices Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="best-practices"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-600/20 rounded-lg">
                    <Award className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Best Practices</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-400" />
                        Proaktive Sicherheit
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige Threat Intelligence Updates
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Automatisierte Vulnerability Scans
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Zero Trust Architecture
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Continuous Security Monitoring
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-purple-400" />
                        Organisatorische Exzellenz
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Security Champions Programm
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige Tabletop-Übungen
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Cross-funktionale Security Teams
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Kontinuierliche Schulungen
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                        Compliance Excellence
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Automatisierte Compliance-Berichte
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Dashboard für Führungskräfte
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Proaktive Kommunikation mit Behörden
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Kontinuierliche Verbesserung
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Network className="h-5 w-5 text-orange-400" />
                        Technologische Innovation
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          KI-basierte Bedrohungserkennung
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Cloud-native Security Tools
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          DevSecOps Integration
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          API Security Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Nis2Guide;