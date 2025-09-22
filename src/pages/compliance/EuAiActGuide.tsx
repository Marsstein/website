import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
  Timer,
  Rocket,
  CircleDot,
  Circle,
  DollarSign,
  Percent,
  Hash,
  Key,
  Unlock,
  ShieldCheck,
  ShieldOff,
  ShieldAlert,
  UserCheck,
  UserX,
  UserPlus,
  GitBranch,
  GitCommit,
  GitMerge,
  Box,
  Boxes,
  Package2,
  Truck,
  Anchor,
  Plane,
  Train,
  Car,
  Bot,
  Sparkles,
  BrainCircuit,
  Microscope,
  Fingerprint,
  ScanFace,
  AlertOctagon,
  Gauge,
  Megaphone,
  BadgeCheck,
  ClipboardCheck,
  FileSearch,
  ScrollText,
  Stamp,
  ShieldQuestion,
  UserCog,
  Wrench,
  Cog,
  BrainCog,
  Cpu as CpuIcon,
  CircuitBoard,
  Zap as ZapIcon,
  Binary,
  GitFork,
  Workflow,
  TestTube2,
  FlaskConical,
  Beaker,
  Atom,
  Dna,
  Stethoscope,
  Siren,
  RadioActive,
  Flame,
  Snowflake,
  ThermometerSnowflake,
  Waves,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Tornado,
  Rainbow,
  Sparkle,
  Stars,
  Orbit,
  Satellite,
  RocketIcon,
  Telescope,
  Microscope as MicroscopeIcon,
  PetriDish,
  TestTube,
  Dna as DnaIcon,
  Pill,
  Syringe,
  HeartPulse,
  BrainIcon,
  Fingerprint as FingerprintIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const EuAiActGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState('ueberblick');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedRiskLevel, setExpandedRiskLevel] = useState<{[key: string]: boolean}>({});
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: 'ueberblick', title: 'Überblick', icon: Eye, readTime: '12 Min' },
    { id: 'anwendungsbereich', title: 'Anwendungsbereich', icon: Target, readTime: '15 Min' },
    { id: 'risikostufen', title: 'Risikostufen', icon: Gauge, readTime: '25 Min' },
    { id: 'verbotene-praktiken', title: 'Verbotene Praktiken', icon: ShieldOff, readTime: '18 Min' },
    { id: 'hochrisiko-ki', title: 'Hochrisiko-KI', icon: AlertTriangle, readTime: '30 Min' },
    { id: 'general-purpose-ai', title: 'General Purpose AI', icon: BrainCircuit, readTime: '20 Min' },
    { id: 'anforderungen', title: 'Anforderungen', icon: ClipboardCheck, readTime: '35 Min' },
    { id: 'konformitaet', title: 'Konformitätsbewertung', icon: BadgeCheck, readTime: '25 Min' },
    { id: 'transparenz', title: 'Transparenzpflichten', icon: Eye, readTime: '20 Min' },
    { id: 'governance', title: 'AI Governance', icon: Building2, readTime: '22 Min' },
    { id: 'dokumentation', title: 'Dokumentation', icon: FileText, readTime: '18 Min' },
    { id: 'zeitplan', title: 'Zeitplan', icon: Calendar, readTime: '15 Min' },
    { id: 'bussgelder', title: 'Bußgelder', icon: Gavel, readTime: '12 Min' },
    { id: 'implementierung', title: 'Implementierung', icon: Rocket, readTime: '30 Min' },
    { id: 'technische-standards', title: 'Technische Standards', icon: Wrench, readTime: '25 Min' },
    { id: 'innovation', title: 'Innovation & Sandboxes', icon: Sparkles, readTime: '18 Min' },
    { id: 'zertifizierung', title: 'Zertifizierung', icon: Award, readTime: '20 Min' },
    { id: 'ressourcen', title: 'Ressourcen', icon: Download, readTime: '10 Min' }
  ];

  const riskCategories = [
    {
      level: 'Minimal Risk',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600',
      description: 'Geringe oder keine Risiken für Grundrechte',
      requirements: 'Minimale Anforderungen',
      examples: [
        'AI-gestützte Videospiele',
        'Spam-Filter',
        'AI-generierte Kunstwerke',
        'Inventory Management Systeme',
        'Predictive Maintenance'
      ],
      obligations: [
        'Freiwillige Verhaltenskodizes',
        'Keine spezifischen rechtlichen Anforderungen',
        'Best Practices empfohlen',
        'Transparenz bei Interaktion'
      ]
    },
    {
      level: 'Limited Risk',
      icon: Info,
      color: 'from-yellow-500 to-orange-600',
      description: 'Systeme mit spezifischen Transparenzpflichten',
      requirements: 'Transparenzpflichten',
      examples: [
        'Chatbots und virtuelle Assistenten',
        'Emotion Recognition Systems',
        'Biometrische Kategorisierungssysteme',
        'Deepfakes (Audio/Video)',
        'AI-generierte Inhalte'
      ],
      obligations: [
        'Nutzer informieren, dass sie mit KI interagieren',
        'Kennzeichnung von KI-generierten Inhalten',
        'Opt-out Möglichkeiten bereitstellen',
        'Klare Erkennbarkeit von Deepfakes',
        'Emotionserkennung offenlegen'
      ]
    },
    {
      level: 'High Risk',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-600',
      description: 'Erhebliche Risiken für Gesundheit, Sicherheit oder Grundrechte',
      requirements: 'Umfassende Compliance-Anforderungen',
      examples: [
        'Biometrische Identifikation',
        'Kritische Infrastrukturen',
        'Bildung und Berufsausbildung',
        'Beschäftigung und Arbeitnehmerverwaltung',
        'Zugang zu wesentlichen Dienstleistungen',
        'Strafverfolgung',
        'Migration und Grenzkontrollen',
        'Rechtspflege'
      ],
      obligations: [
        'Risikomanagementsystem',
        'Datenqualität und -governance',
        'Technische Dokumentation',
        'Aufzeichnungspflichten (Logging)',
        'Transparenz und Nutzerinformation',
        'Menschliche Aufsicht',
        'Genauigkeit, Robustheit und Cybersicherheit',
        'Konformitätsbewertung',
        'CE-Kennzeichnung'
      ]
    },
    {
      level: 'Unacceptable Risk',
      icon: ShieldOff,
      color: 'from-red-500 to-pink-600',
      description: 'Verbotene AI-Praktiken',
      requirements: 'Vollständiges Verbot',
      examples: [
        'Social Scoring durch Behörden',
        'Unterschwellige Manipulation',
        'Ausnutzung von Schwächen vulnerabler Gruppen',
        'Biometrische Echtzeit-Fernidentifizierung im öffentlichen Raum',
        'Predictive Policing basierend auf Profiling',
        'Emotionserkennung am Arbeitsplatz/Bildung',
        'Ungezielte Scraping für Gesichtsdatenbanken',
        'AI-basierte Ableitung sensibler Merkmale'
      ],
      obligations: [
        'Sofortige Einstellung',
        'Keine Entwicklung oder Vermarktung',
        'Ausnahmen nur für Strafverfolgung unter strengen Bedingungen',
        'Hohe Strafen bei Verstößen (bis 35 Mio € oder 7% Umsatz)'
      ]
    }
  ];

  const complianceTimeline = [
    {
      date: '2. August 2024',
      milestone: 'Inkrafttreten',
      description: 'EU AI Act tritt offiziell in Kraft',
      status: 'completed',
      requirements: []
    },
    {
      date: '2. Februar 2025',
      milestone: 'Verbotene Praktiken',
      description: 'Verbot unannehmbarer KI-Praktiken wird wirksam',
      status: 'upcoming',
      requirements: [
        'Einstellung verbotener AI-Systeme',
        'Compliance-Check bestehender Systeme',
        'Dokumentation der Einstellung'
      ]
    },
    {
      date: '2. August 2025',
      milestone: 'General Purpose AI',
      description: 'Pflichten für GPAI-Modelle treten in Kraft',
      status: 'upcoming',
      requirements: [
        'Technische Dokumentation',
        'Urheberrechts-Compliance',
        'Modell-Evaluierung',
        'Systemische Risiken (>10^25 FLOPS)'
      ]
    },
    {
      date: '2. August 2026',
      milestone: 'Annex III Hochrisiko-KI',
      description: 'Anforderungen für bestehende Hochrisiko-KI-Systeme',
      status: 'upcoming',
      requirements: [
        'Konformitätsbewertung',
        'CE-Kennzeichnung',
        'Registrierung in EU-Datenbank',
        'Benannte Stellen einbeziehen'
      ]
    },
    {
      date: '2. August 2027',
      milestone: 'Vollständige Anwendung',
      description: 'Alle Bestimmungen des AI Act gelten',
      status: 'upcoming',
      requirements: [
        'Volle Compliance für alle AI-Systeme',
        'Marktüberwachung aktiv',
        'Alle Durchführungsrechtsakte anwendbar'
      ]
    },
    {
      date: '2. August 2030',
      milestone: 'Erste Überprüfung',
      description: 'Kommission überprüft und bewertet AI Act',
      status: 'future',
      requirements: [
        'Evaluierungsbericht',
        'Mögliche Gesetzesanpassungen',
        'Neue technische Standards'
      ]
    }
  ];

  const implementationSteps = [
    {
      phase: 'Phase 1: AI Inventory & Gap Analysis',
      duration: '2-3 Monate',
      icon: Search,
      color: 'from-blue-500 to-indigo-600',
      tasks: [
        'Bestandsaufnahme aller AI-Systeme im Unternehmen',
        'Klassifizierung nach Risikostufen',
        'Use Case Dokumentation',
        'Gap-Analyse gegen AI Act Anforderungen',
        'Risikobewertung durchführen',
        'Compliance-Roadmap erstellen'
      ],
      deliverables: ['AI System Inventory', 'Risk Classification Report', 'Gap Analysis', 'Compliance Roadmap']
    },
    {
      phase: 'Phase 2: Governance & Organisation',
      duration: '2-4 Monate',
      icon: Building2,
      color: 'from-emerald-500 to-teal-600',
      tasks: [
        'AI Governance Board etablieren',
        'Verantwortlichkeiten definieren (RACI)',
        'AI Ethics Committee gründen',
        'Policies und Procedures entwickeln',
        'Training Programme aufsetzen',
        'Incident Response Plan erstellen'
      ],
      deliverables: ['AI Governance Framework', 'Policy Suite', 'Training Materials', 'Org Chart']
    },
    {
      phase: 'Phase 3: Technical Implementation',
      duration: '6-9 Monate',
      icon: Code,
      color: 'from-purple-500 to-pink-600',
      tasks: [
        'Risikomanagementsystem implementieren',
        'Data Governance Framework',
        'Logging und Monitoring aufsetzen',
        'Human Oversight Mechanismen',
        'Bias Detection und Mitigation',
        'Security und Robustness Testing'
      ],
      deliverables: ['Technical Documentation', 'Risk Management System', 'Monitoring Dashboard']
    },
    {
      phase: 'Phase 4: Documentation & Testing',
      duration: '3-4 Monate',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      tasks: [
        'Technische Dokumentation vervollständigen',
        'Conformity Assessment vorbereiten',
        'Testing und Validierung',
        'Audit Trail etablieren',
        'Transparency Reports erstellen',
        'User Information Materials'
      ],
      deliverables: ['Complete Documentation Set', 'Test Reports', 'Audit Trails', 'User Guides']
    },
    {
      phase: 'Phase 5: Certification & Go-Live',
      duration: '2-3 Monate',
      icon: Award,
      color: 'from-cyan-500 to-blue-600',
      tasks: [
        'Notified Body Engagement',
        'Conformity Assessment durchführen',
        'CE Marking Prozess',
        'EU Database Registration',
        'Market Surveillance Vorbereitung',
        'Continuous Monitoring Setup'
      ],
      deliverables: ['CE Certificate', 'EU Database Entry', 'Surveillance Plan', 'Compliance Dashboard']
    }
  ];

  const handleSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleRiskLevel = (level: string) => {
    setExpandedRiskLevel(prev => ({
      ...prev,
      [level]: !prev[level]
    }));
  };

  const handleItemCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setReadingProgress(Math.min(progress, 100));
      }

      // Track active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));
      
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle initial hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);

  const CounterAnimation = ({ value, suffix = '', prefix = '', duration = 2000 }: { value: number; suffix?: string; prefix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const startValue = 0;
        const endValue = value;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isInView, value, duration]);

    return <span ref={ref}>{prefix}{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Fixed Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                <BrainCircuit className="h-3 w-3 mr-1" />
                EU AI Act Guide
              </Badge>
              <div className="text-sm text-slate-400">
                Abschnitt {sections.findIndex(s => s.id === activeSection) + 1} von {sections.length}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">{Math.round(readingProgress)}% gelesen</span>
              <Button
                onClick={() => setBookmarked(!bookmarked)}
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-yellow-400"
              >
                <Bookmark className={cn("h-4 w-4", bookmarked && "fill-current text-yellow-400")} />
              </Button>
            </div>
          </div>
          <Progress value={readingProgress} className="h-1" />
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('/placeholder-1920x1080.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="relative container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                  <BrainCircuit className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">EU AI Act</h1>
                  <p className="text-xl text-blue-400">Regulation (EU) 2024/1689</p>
                </div>
              </div>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Die weltweit erste umfassende KI-Regulierung. Risikobasierter Ansatz zum Schutz 
                von Grundrechten bei gleichzeitiger Förderung von Innovation und Vertrauen in KI-Systeme.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-300">
                  <Flag className="h-4 w-4 mr-2" />
                  EU-Verordnung
                </Badge>
                <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  In Kraft seit 2.8.2024
                </Badge>
                <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300">
                  <Building2 className="h-4 w-4 mr-2" />
                  Alle KI-Anbieter & -Nutzer
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={() => setActiveSection('risk-levels')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Guide starten
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Download className="h-4 w-4 mr-2" />
                  PDF herunterladen
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      <CounterAnimation value={4} />
                    </div>
                    <div className="text-sm text-slate-400">Risikostufen</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      <CounterAnimation value={113} />
                    </div>
                    <div className="text-sm text-slate-400">Artikel</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      <CounterAnimation value={35} prefix="€" suffix="M" />
                    </div>
                    <div className="text-sm text-slate-400">Max. Bußgeld</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      <CounterAnimation value={7} suffix="%" />
                    </div>
                    <div className="text-sm text-slate-400">vom Jahresumsatz</div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Overview */}
              <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                  <div className="space-y-3">
                    {[
                      'Risikobasierter Ansatz und Klassifizierung',
                      'Verbotene KI-Praktiken verstehen',
                      'Anforderungen für Hochrisiko-KI',
                      'General Purpose AI Regelungen',
                      'Konformitätsbewertung und CE-Kennzeichnung',
                      'Implementierungs-Roadmap und Timeline'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              {sections.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setActiveSection(item.id);
                    }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
                      activeSection === item.id
                        ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800"
                        : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
                      "border",
                      activeSection === item.id
                        ? "border-red-200 dark:border-red-800"
                        : "border-transparent hover:border-red-200 dark:hover:border-red-800"
                    )}
                  >
                    <IconComponent className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-red-600 dark:text-red-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-red-700 dark:text-red-400"
                    )}>{item.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-6">
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Inhaltsverzeichnis</h3>
                  <div className="space-y-2">
                    {sections.map((section, index) => {
                      const IconComponent = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            scrollToSection(section.id);
                            setActiveSection(section.id);
                          }}
                          className={cn(
                            "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                            activeSection === section.id
                              ? "bg-blue-500/20 border border-blue-500/50 text-blue-300"
                              : "border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="h-4 w-4" />
                            <div className="text-left">
                              <div className="text-sm font-medium">{section.title}</div>
                              <div className="text-xs opacity-70">{section.readTime}</div>
                            </div>
                          </div>
                          {completedSections.includes(section.id) && (
                            <CheckCircle2 className="h-4 w-4 text-green-400" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Schnellaktionen</h3>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Risk Assessment Template
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Compliance Checklist
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Share2 className="h-4 w-4 mr-2" />
                      Guide teilen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div ref={contentRef} className="space-y-20">
                
                {/* Überblick Section */}
                <section id="ueberblick" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Überblick</h2>
                          <Button
                            onClick={() => handleSectionComplete('ueberblick')}
                            variant={completedSections.includes('ueberblick') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('ueberblick') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>
                        
                        <div className="prose prose-invert prose-slate max-w-none">
                          <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            Die Verordnung (EU) 2024/1689 über künstliche Intelligenz (AI Act) ist die weltweit 
                            erste umfassende horizontale Regulierung für KI-Systeme. Sie verfolgt einen risikobasierten 
                            Ansatz und zielt darauf ab, ein Gleichgewicht zwischen dem Schutz der Grundrechte und der 
                            Förderung von Innovation zu schaffen.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                Hauptziele
                              </h3>
                              <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Schutz von Grundrechten und Sicherheit</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Rechtssicherheit für KI-Entwickler</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Förderung von vertrauenswürdiger KI</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Harmonisierung des EU-Binnenmarkts</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                                <Building2 className="h-5 w-5" />
                                Geltungsbereich
                              </h3>
                              <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Anbieter von KI-Systemen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Betreiber/Nutzer von KI</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Importeure und Händler</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Drittländer mit EU-Auswirkung</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4">Kernprinzipien des AI Act</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="text-center">
                                <div className="p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3">
                                  <Gauge className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Risikobasiert</h4>
                                <p className="text-sm text-slate-400">Anforderungen proportional zum Risiko</p>
                              </div>
                              <div className="text-center">
                                <div className="p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3">
                                  <Users className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Human-Centric</h4>
                                <p className="text-sm text-slate-400">Mensch im Mittelpunkt der KI-Nutzung</p>
                              </div>
                              <div className="text-center">
                                <div className="p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3">
                                  <Globe className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Technologieneutral</h4>
                                <p className="text-sm text-slate-400">Anwendbar auf alle KI-Technologien</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Risikostufen Section */}
                <section id="risikostufen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Risikostufen</h2>
                          <Button
                            onClick={() => handleSectionComplete('risikostufen')}
                            variant={completedSections.includes('risikostufen') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('risikostufen') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-blue-300 mb-3">Risikobasierter Ansatz</h3>
                          <p className="text-slate-300 mb-4">
                            Der EU AI Act klassifiziert KI-Systeme in vier Risikostufen. Je höher das Risiko 
                            für Grundrechte und Sicherheit, desto strenger die Anforderungen. Diese Pyramide 
                            zeigt die Verteilung und jeweiligen Compliance-Anforderungen.
                          </p>
                          <div className="relative h-64 flex items-end justify-center">
                            <svg className="w-full h-full" viewBox="0 0 400 200">
                              {/* Pyramid */}
                              <path d="M200 20 L320 180 L80 180 Z" fill="url(#pyramidGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                              
                              {/* Risk Levels */}
                              <line x1="120" y1="60" x2="280" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                              <line x1="140" y1="100" x2="260" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                              <line x1="160" y1="140" x2="240" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                              
                              {/* Labels */}
                              <text x="200" y="45" textAnchor="middle" fill="#ef4444" className="text-xs font-semibold">Verboten</text>
                              <text x="200" y="85" textAnchor="middle" fill="#f97316" className="text-xs font-semibold">Hochrisiko</text>
                              <text x="200" y="125" textAnchor="middle" fill="#eab308" className="text-xs font-semibold">Begrenzt</text>
                              <text x="200" y="165" textAnchor="middle" fill="#22c55e" className="text-xs font-semibold">Minimal</text>
                              
                              {/* Gradient Definition */}
                              <defs>
                                <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
                                  <stop offset="33%" stopColor="#f97316" stopOpacity="0.6"/>
                                  <stop offset="66%" stopColor="#eab308" stopOpacity="0.4"/>
                                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2"/>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {riskCategories.map((category, index) => {
                            const IconComponent = category.icon;
                            const isExpanded = expandedRiskLevel[category.level];
                            
                            return (
                              <motion.div
                                key={category.level}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="border border-slate-700 rounded-xl overflow-hidden"
                              >
                                <button
                                  onClick={() => toggleRiskLevel(category.level)}
                                  className="w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className={cn(
                                      "p-3 rounded-xl bg-gradient-to-r",
                                      category.color
                                    )}>
                                      <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                      <h3 className="text-lg font-bold text-white">{category.level}</h3>
                                      <p className="text-slate-400 text-sm">{category.description}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <Badge variant="outline" className="text-xs">
                                      {category.requirements}
                                    </Badge>
                                    <ChevronDown className={cn(
                                      "h-5 w-5 text-slate-400 transition-transform duration-200",
                                      isExpanded && "rotate-180"
                                    )} />
                                  </div>
                                </button>
                                
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t border-slate-700 bg-slate-900/50"
                                  >
                                    <div className="p-6 space-y-6">
                                      <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="text-md font-semibold text-white mb-3 flex items-center gap-2">
                                            <Package className="h-4 w-4 text-blue-400" />
                                            Beispiele
                                          </h4>
                                          <ul className="space-y-2">
                                            {category.examples.map((example, idx) => (
                                              <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CircleDot className="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" />
                                                <span className="text-slate-300">{example}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h4 className="text-md font-semibold text-white mb-3 flex items-center gap-2">
                                            <ClipboardCheck className="h-4 w-4 text-emerald-400" />
                                            Anforderungen
                                          </h4>
                                          <ul className="space-y-2">
                                            {category.obligations.map((obligation, idx) => (
                                              <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" />
                                                <span className="text-slate-300">{obligation}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* High Risk Section */}
                <section id="hochrisiko-ki" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Hochrisiko-KI-Systeme</h2>
                          <Button
                            onClick={() => handleSectionComplete('hochrisiko-ki')}
                            variant={completedSections.includes('hochrisiko-ki') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('hochrisiko-ki') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* High Risk Categories */}
                          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-orange-300 mb-6">Annex III - Hochrisiko-Bereiche</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              {[
                                {
                                  category: 'Biometrische Systeme',
                                  icon: Fingerprint,
                                  examples: [
                                    'Fernbiometrische Identifikation',
                                    'Emotionserkennung am Arbeitsplatz',
                                    'Biometrische Kategorisierung'
                                  ]
                                },
                                {
                                  category: 'Kritische Infrastruktur',
                                  icon: Server,
                                  examples: [
                                    'Verkehrssteuerung',
                                    'Wasser- und Stromversorgung',
                                    'Digitale Infrastruktur'
                                  ]
                                },
                                {
                                  category: 'Bildung & Ausbildung',
                                  icon: GraduationCap,
                                  examples: [
                                    'Zulassung zu Bildungseinrichtungen',
                                    'Bewertung von Prüfungen',
                                    'Lernfortschrittsüberwachung'
                                  ]
                                },
                                {
                                  category: 'Beschäftigung',
                                  icon: Briefcase,
                                  examples: [
                                    'Recruiting und Auswahl',
                                    'Leistungsbewertung',
                                    'Kündigungsentscheidungen'
                                  ]
                                },
                                {
                                  category: 'Wesentliche Dienste',
                                  icon: Heart,
                                  examples: [
                                    'Sozialleistungen',
                                    'Notfalldienste',
                                    'Kreditwürdigkeit'
                                  ]
                                },
                                {
                                  category: 'Rechtsdurchsetzung',
                                  icon: Gavel,
                                  examples: [
                                    'Risikoanalyse Straftaten',
                                    'Polygraph-ähnliche Tools',
                                    'Beweisbewertung'
                                  ]
                                }
                              ].map((area) => {
                                const IconComponent = area.icon;
                                return (
                                  <div key={area.category} className="bg-slate-800/50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                      <div className="p-2 bg-orange-500 rounded-lg">
                                        <IconComponent className="h-5 w-5 text-white" />
                                      </div>
                                      <h4 className="font-semibold text-white">{area.category}</h4>
                                    </div>
                                    <ul className="space-y-2">
                                      {area.examples.map((example, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                          <AlertTriangle className="h-3 w-3 text-orange-400 mt-1" />
                                          <span className="text-slate-300">{example}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Requirements for High Risk */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-blue-400" />
                                Technische Anforderungen
                              </h3>
                              <ul className="space-y-3">
                                {[
                                  'Risikomanagementsystem etablieren',
                                  'Datenqualität und -governance sicherstellen',
                                  'Technische Dokumentation erstellen',
                                  'Automatische Aufzeichnung (Logging)',
                                  'Transparenz für Nutzer gewährleisten',
                                  'Menschliche Aufsicht ermöglichen',
                                  'Genauigkeit, Robustheit, Cybersicherheit'
                                ].map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5" />
                                    <span className="text-sm text-slate-300">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-emerald-400" />
                                Compliance-Prozess
                              </h3>
                              <ul className="space-y-3">
                                {[
                                  'Konformitätsbewertung durchführen',
                                  'EU-Konformitätserklärung erstellen',
                                  'CE-Kennzeichnung anbringen',
                                  'Registrierung in EU-Datenbank',
                                  'Post-Market Monitoring',
                                  'Schwerwiegende Vorfälle melden',
                                  'Dokumentation 10 Jahre aufbewahren'
                                ].map((proc, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5" />
                                    <span className="text-sm text-slate-300">{proc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Compliance Timeline Section */}
                <section id="zeitplan" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Compliance Timeline</h2>
                          <Button
                            onClick={() => handleSectionComplete('zeitplan')}
                            variant={completedSections.includes('zeitplan') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('zeitplan') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-blue-300 mb-3">Stufenweise Einführung</h3>
                          <p className="text-slate-300">
                            Der EU AI Act wird schrittweise über mehrere Jahre eingeführt. Die Timeline zeigt die wichtigsten 
                            Meilensteine und wann welche Anforderungen in Kraft treten.
                          </p>
                        </div>

                        <div className="space-y-6">
                          {complianceTimeline.map((milestone, index) => (
                            <motion.div
                              key={milestone.date}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className={cn(
                                "relative bg-slate-800/50 rounded-xl p-6 border-2",
                                milestone.status === 'completed' && "border-green-500/50",
                                milestone.status === 'upcoming' && "border-blue-500/50",
                                milestone.status === 'future' && "border-slate-700"
                              )}
                            >
                              <div className="flex items-start gap-4">
                                <div className={cn(
                                  "w-4 h-4 rounded-full mt-2",
                                  milestone.status === 'completed' && "bg-green-500",
                                  milestone.status === 'upcoming' && "bg-blue-500 animate-pulse",
                                  milestone.status === 'future' && "bg-slate-600"
                                )} />
                                
                                <div className="flex-1">
                                  <div className="flex items-center gap-4 mb-3">
                                    <h4 className="text-lg font-bold text-white">{milestone.milestone}</h4>
                                    <Badge variant={milestone.status === 'completed' ? 'default' : 'outline'} className="text-xs">
                                      {milestone.date}
                                    </Badge>
                                  </div>
                                  
                                  <p className="text-slate-300 mb-4">{milestone.description}</p>
                                  
                                  {milestone.requirements.length > 0 && (
                                    <div className="bg-slate-900/50 rounded-lg p-4">
                                      <h5 className="text-sm font-semibold text-slate-300 mb-2">Wichtige Anforderungen:</h5>
                                      <ul className="space-y-1">
                                        {milestone.requirements.map((req, idx) => (
                                          <li key={idx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className="h-3 w-3 text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-400">{req}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {index < complianceTimeline.length - 1 && (
                                <div className="absolute -bottom-6 left-6 w-0.5 h-6 bg-slate-600" />
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Implementation Section */}
                <section id="implementierung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Implementierungs-Roadmap</h2>
                          <Button
                            onClick={() => handleSectionComplete('implementierung')}
                            variant={completedSections.includes('implementierung') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('implementierung') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-purple-300 mb-4">EU AI Act Compliance Journey</h3>
                          <p className="text-slate-300 mb-4">
                            Eine strukturierte Herangehensweise ist entscheidend für erfolgreiche AI Act Compliance. 
                            Diese Roadmap führt Sie durch alle notwendigen Schritte von der ersten Bestandsaufnahme bis zur Zertifizierung.
                          </p>
                          <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-purple-400">12-18 Monate</div>
                              <div className="text-sm text-slate-400">Typische Implementierungsdauer</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-pink-400">5 Phasen</div>
                              <div className="text-sm text-slate-400">Strukturierter Ansatz</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-indigo-400">€200k-500k</div>
                              <div className="text-sm text-slate-400">Typische Kosten (High-Risk)</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {implementationSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                              <motion.div
                                key={step.phase}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                              >
                                <div className="flex items-start gap-4">
                                  <div className={cn(
                                    "p-3 rounded-xl bg-gradient-to-r flex-shrink-0",
                                    step.color
                                  )}>
                                    <IconComponent className="h-6 w-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                      <h4 className="text-lg font-bold text-white">{step.phase}</h4>
                                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                      <div>
                                        <h5 className="text-sm font-semibold text-slate-300 mb-3">Hauptaufgaben:</h5>
                                        <ul className="space-y-2">
                                          {step.tasks.map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                              <input 
                                                type="checkbox" 
                                                id={`impl-task-${index}-${idx}`}
                                                checked={checkedItems[`impl-task-${index}-${idx}`] || false}
                                                onChange={() => handleItemCheck(`impl-task-${index}-${idx}`)}
                                                className="mt-1 text-blue-500"
                                              />
                                              <label 
                                                htmlFor={`impl-task-${index}-${idx}`}
                                                className={cn(
                                                  "text-sm text-slate-300 cursor-pointer",
                                                  checkedItems[`impl-task-${index}-${idx}`] && "line-through opacity-60"
                                                )}
                                              >
                                                {task}
                                              </label>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div>
                                        <h5 className="text-sm font-semibold text-slate-300 mb-3">Deliverables:</h5>
                                        <div className="flex flex-wrap gap-2">
                                          {step.deliverables.map((deliverable) => (
                                            <Badge key={deliverable} variant="outline" className="text-xs">
                                              {deliverable}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-6">
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                              <Sparkles className="h-5 w-5 text-yellow-400" />
                              Success Factors
                            </h3>
                            <ul className="space-y-3">
                              {[
                                'Executive Sponsorship und Budget-Commitment',
                                'Cross-funktionales AI Governance Board',
                                'Frühzeitige Einbindung von Legal & Compliance',
                                'Pragmatischer, risikobasierter Ansatz',
                                'Automatisierung wo möglich',
                                'Kontinuierliche Schulung aller Stakeholder',
                                'Enge Zusammenarbeit mit Notified Bodies'
                              ].map((factor, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-300">{factor}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                              <AlertOctagon className="h-5 w-5 text-red-400" />
                              Typische Herausforderungen
                            </h3>
                            <ul className="space-y-3">
                              {[
                                'Unklarheit bei Risiko-Klassifizierung',
                                'Fehlende harmonisierte Standards',
                                'Begrenzte Verfügbarkeit von Notified Bodies',
                                'Komplexität bei GPAI-Modellen',
                                'Dokumentationsaufwand unterschätzt',
                                'Supply Chain Transparency',
                                'Technische Schulden in Legacy-Systemen'
                              ].map((challenge, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-300">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Verbotene Praktiken Section */}
                <section id="verbotene-praktiken" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Verbotene KI-Praktiken</h2>
                          <Button
                            onClick={() => handleSectionComplete('verbotene-praktiken')}
                            variant={completedSections.includes('verbotene-praktiken') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('verbotene-praktiken') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Article 5 Prohibited Practices */}
                          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">Artikel 5 - Verbotene KI-Praktiken</h3>
                            <div className="space-y-6">
                              {[
                                {
                                  article: '5(1)(a)',
                                  title: 'Unterschwellige Techniken',
                                  description: 'KI-Systeme, die unterschwellige Techniken jenseits des Bewusstseins einer Person einsetzen oder diese täuschen',
                                  purpose: 'mit dem Ziel oder der Wirkung, das Verhalten einer Person erheblich zu beeinträchtigen',
                                  examples: [
                                    'Unterschwellige Werbung in Apps oder Websites',
                                    'Voice assistants die unbewusst Kaufverhalten beeinflussen',
                                    'Gaming Apps mit versteckten Manipulationstechniken',
                                    'Social Media Algorithmen die suchterzeugende Patterns nutzen',
                                    'Dark Patterns in User Interfaces'
                                  ],
                                  legalConsequences: [
                                    'Bis zu 35 Mio. EUR oder 7% des weltweiten Jahresumsatzes',
                                    'Sofortige Einstellung der Praktiken erforderlich',
                                    'Mögliche strafrechtliche Konsequenzen',
                                    'Reputationsschäden und Kundenvertrauen'
                                  ],
                                  complianceActions: [
                                    'Audit aller User Interface Designs',
                                    'Review von Algorithmus-Designs',
                                    'Ethik Board für UX Decisions',
                                    'User consent und Transparency',
                                    'Regular ethical impact assessments'
                                  ]
                                },
                                {
                                  article: '5(1)(b)',
                                  title: 'Ausnutzung von Schwächen',
                                  description: 'KI-Systeme, die Schwächen einer bestimmten Gruppe von Personen aufgrund ihres Alters, ihrer Behinderung oder ihrer besonderen sozialen oder wirtschaftlichen Lage ausnutzen',
                                  purpose: 'um das Verhalten einer Person aus dieser Gruppe erheblich zu beeinträchtigen',
                                  examples: [
                                    'Predatory lending algorithms targeting vulnerable populations',
                                    'Gaming apps specifically designed for children addiction',
                                    'Insurance pricing algorithms discriminating against disabled',
                                    'Credit scoring that penalizes low-income individuals',
                                    'Educational apps exploiting children\'s psychological vulnerabilities'
                                  ],
                                  legalConsequences: [
                                    'Bis zu 35 Mio. EUR oder 7% des weltweiten Jahresumsatzes',
                                    'Zivilrechtliche Schadenersatzansprüche',
                                    'Aufsichtsbehördliche Maßnahmen',
                                    'Mögliche class-action lawsuits'
                                  ],
                                  complianceActions: [
                                    'Vulnerability Impact Assessments',
                                    'Special protection measures for vulnerable groups',
                                    'Enhanced consent mechanisms',
                                    'Regular algorithmic audits for bias',
                                    'Stakeholder engagement with advocacy groups'
                                  ]
                                },
                                {
                                  article: '5(1)(c)',
                                  title: 'Social Scoring',
                                  description: 'KI-Systeme zur Bewertung oder Klassifizierung der Vertrauenswürdigkeit natürlicher Personen über einen bestimmten Zeitraum hinweg',
                                  purpose: 'aufgrund ihres sozialen Verhaltens oder bekannter, abgeleiteter oder vorhergesagter persönlicher oder Persönlichkeitsmerkmale',
                                  examples: [
                                    'Umfassende Social Credit Systeme durch Behörden',
                                    'Employee scoring based on social media activity',
                                    'Tenant screening using social behavior data',
                                    'Insurance premiums based on lifestyle scoring',
                                    'Dating app algorithms creating social hierarchy'
                                  ],
                                  legalConsequences: [
                                    'Vollständiges Verbot für öffentliche Behörden',
                                    'Strenge Beschränkungen für private Anbieter',
                                    'Bis zu 35 Mio. EUR Bußgeld',
                                    'Aufsichtsbehördliche Durchsetzung'
                                  ],
                                  complianceActions: [
                                    'Review aller scoring algorithms',
                                    'Eliminate broad social scoring systems',
                                    'Implement purpose limitation principles',
                                    'Ensure transparent scoring criteria',
                                    'Provide individual appeal mechanisms'
                                  ]
                                },
                                {
                                  article: '5(1)(d)',
                                  title: 'Biometrische Echtzeit-Fernidentifizierung',
                                  description: 'Biometrische Echtzeit-Fernidentifizierungssysteme in öffentlich zugänglichen Räumen zu Strafverfolgungszwecken',
                                  purpose: 'es sei denn, sie werden für spezifische Strafverfolgungszwecke unter strengen Bedingungen verwendet',
                                  examples: [
                                    'Gesichtserkennung in öffentlichen Räumen ohne Verdacht',
                                    'Massenüberwachung durch biometrische Systeme',
                                    'Real-time identification ohne richterliche Anordnung',
                                    'Predictive policing mit biometrischer Identifikation',
                                    'Automated border control ohne menschliche Aufsicht'
                                  ],
                                  legalConsequences: [
                                    'Verbot außerhalb spezifischer Ausnahmen',
                                    'Strenge gerichtliche Kontrolle erforderlich',
                                    'Hohe Bußgelder bei Verstößen',
                                    'Datenschutzrechtliche Konsequenzen'
                                  ],
                                  complianceActions: [
                                    'Audit existing biometric systems',
                                    'Implement strict access controls',
                                    'Establish judicial oversight mechanisms',
                                    'Document legitimate law enforcement purposes',
                                    'Implement privacy by design'
                                  ]
                                }
                              ].map((prohibition) => (
                                <div key={prohibition.article} className="bg-slate-800/50 rounded-xl p-6 border-2 border-red-500/30">
                                  <div className="flex items-center gap-3 mb-4">
                                    <Badge className="bg-red-500/20 text-red-300 border-red-500/50">Art. {prohibition.article}</Badge>
                                    <h4 className="text-lg font-bold text-white">{prohibition.title}</h4>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <p className="text-slate-300 mb-2 text-sm italic">"{prohibition.description} {prohibition.purpose}"</p>
                                  </div>
                                  
                                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div>
                                      <h5 className="text-sm font-semibold text-red-300 mb-3 flex items-center gap-2">
                                        <AlertOctagon className="h-4 w-4" />
                                        Beispiele
                                      </h5>
                                      <ul className="space-y-2">
                                        {prohibition.examples.map((example, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <ShieldOff className="h-3 w-3 text-red-400 mt-1 flex-shrink-0" />
                                            <span className="text-xs text-slate-300">{example}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 className="text-sm font-semibold text-orange-300 mb-3 flex items-center gap-2">
                                        <Gavel className="h-4 w-4" />
                                        Rechtliche Konsequenzen
                                      </h5>
                                      <ul className="space-y-2">
                                        {prohibition.legalConsequences.map((consequence, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <AlertTriangle className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                                            <span className="text-xs text-slate-300">{consequence}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 className="text-sm font-semibold text-green-300 mb-3 flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        Compliance Maßnahmen
                                      </h5>
                                      <ul className="space-y-2">
                                        {prohibition.complianceActions.map((action, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                                            <span className="text-xs text-slate-300">{action}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Enforcement Mechanisms */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Durchsetzungsmechanismen</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                  <Building2 className="h-5 w-5 text-blue-400" />
                                  Aufsichtsbehörden
                                </h4>
                                <ul className="space-y-2 text-sm">
                                  <li className="text-slate-300">• Nationale AI-Behörden</li>
                                  <li className="text-slate-300">• Marktüberwachungsbehörden</li>
                                  <li className="text-slate-300">• Datenschutzbehörden</li>
                                  <li className="text-slate-300">• Europäisches AI Board</li>
                                </ul>
                              </div>
                              
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                  <Search className="h-5 w-5 text-emerald-400" />
                                  Überwachungsmaßnahmen
                                </h4>
                                <ul className="space-y-2 text-sm">
                                  <li className="text-slate-300">• Regelmäßige Inspektionen</li>
                                  <li className="text-slate-300">• Technische Tests</li>
                                  <li className="text-slate-300">• Dokumentenprüfungen</li>
                                  <li className="text-slate-300">• Whistleblower-Programme</li>
                                </ul>
                              </div>
                              
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                  <Gavel className="h-5 w-5 text-purple-400" />
                                  Sanktionsmaßnahmen
                                </h4>
                                <ul className="space-y-2 text-sm">
                                  <li className="text-slate-300">• Verwarnungen</li>
                                  <li className="text-slate-300">• Anordnungen zur Einstellung</li>
                                  <li className="text-slate-300">• Marktverbot</li>
                                  <li className="text-slate-300">• Bußgelder bis 35 Mio. €</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* General Purpose AI Section */}
                <section id="general-purpose" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">General Purpose AI Models (GPAI)</h2>
                          <Button
                            onClick={() => handleSectionComplete('general-purpose-ai')}
                            variant={completedSections.includes('general-purpose-ai') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('general-purpose-ai') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* GPAI Definition and Scope */}
                          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-purple-300 mb-6">GPAI Model Definition & Kategorien</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-800/50 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <BrainCircuit className="h-5 w-5 text-purple-400" />
                                  Standard GPAI Models
                                </h4>
                                <div className="space-y-4">
                                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                                    <h5 className="font-semibold text-purple-300 mb-2">Definition (Art. 3 Nr. 44a)</h5>
                                    <p className="text-sm text-slate-300 mb-3">
                                      KI-Modell, das mit einer erheblichen Menge von Multimodal-Daten mittels 
                                      selbstüberwachten, unüberwachten oder verstärkenden Lernverfahren trainiert wurde 
                                      und eine Vielzahl charakteristischer Aufgaben erfüllen kann.
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-semibold text-white mb-2">Anforderungen:</h5>
                                    <ul className="space-y-2">
                                      {[
                                        'Technische Dokumentation bereitstellen',
                                        'Informationen über Training und Testing',
                                        'Urheberrechts-Compliance dokumentieren',
                                        'Öffentliche Zusammenfassung verfügbar machen',
                                        'Policy gegen missbräuchliche Nutzung',
                                        'Robustheit und Cybersicherheit gewährleisten'
                                      ].map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <CheckCircle className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                                          <span className="text-xs text-slate-300">{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bg-slate-800/50 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Zap className="h-5 w-5 text-orange-400" />
                                  Systemic Risk GPAI (&gt;10²⁵ FLOPS)
                                </h4>
                                <div className="space-y-4">
                                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                                    <h5 className="font-semibold text-orange-300 mb-2">Schwellenwert</h5>
                                    <p className="text-sm text-slate-300 mb-3">
                                      Modelle mit mehr als 10²⁵ FLOPS (Floating Point Operations) für das Training 
                                      gelten als systemische Risiko-Modelle.
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-semibold text-white mb-2">Zusätzliche Anforderungen:</h5>
                                    <ul className="space-y-2">
                                      {[
                                        'Model evaluation gemäß EU Codes of Practice',
                                        'Adversarial testing durchführen',
                                        'Systemic risk assessment',
                                        'Red teaming exercises',
                                        'Incident reporting an AI Office',
                                        'Cybersecurity measures dokumentieren',
                                        'Access restrictions implementieren',
                                        'Energy consumption reporting'
                                      ].map((req, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <AlertTriangle className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                                          <span className="text-xs text-slate-300">{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* FLOPS Calculation Framework */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">FLOPS Calculation & Model Assessment</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">FLOPS Berechnung</h4>
                                <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                                  <div className="text-sm text-slate-300 mb-2">Formel:</div>
                                  <div className="bg-slate-800 rounded p-3 font-mono text-blue-300 text-sm">
                                    FLOPS = 6 × N × D
                                  </div>
                                  <div className="text-xs text-slate-400 mt-2">
                                    N = Anzahl Parameter<br/>
                                    D = Anzahl Training Tokens
                                  </div>
                                </div>
                                
                                <div className="space-y-3">
                                  <h5 className="font-semibold text-slate-300">Beispiele bekannter Modelle:</h5>
                                  {[
                                    { model: 'GPT-3', params: '175B', flops: '~3.1 × 10²³', risk: 'Standard' },
                                    { model: 'GPT-4', params: '~1.7T', flops: '~2.4 × 10²⁵', risk: 'Systemic' },
                                    { model: 'PaLM', params: '540B', flops: '~2.5 × 10²⁴', risk: 'Standard' },
                                    { model: 'Claude-3', params: 'Unknown', flops: 'Estimated >10²⁵', risk: 'Likely Systemic' }
                                  ].map((example) => (
                                    <div key={example.model} className="bg-slate-800/30 rounded p-3">
                                      <div className="flex justify-between items-center">
                                        <span className="font-medium text-white">{example.model}</span>
                                        <Badge className={cn(
                                          example.risk === 'Systemic' && 'bg-orange-500/20 text-orange-300',
                                          example.risk.includes('Systemic') && 'bg-orange-500/20 text-orange-300',
                                          example.risk === 'Standard' && 'bg-blue-500/20 text-blue-300'
                                        )}>
                                          {example.risk}
                                        </Badge>
                                      </div>
                                      <div className="text-xs text-slate-400">
                                        {example.params} params • {example.flops} FLOPS
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Assessment Framework</h4>
                                <div className="space-y-4">
                                  {[
                                    {
                                      category: 'Technical Documentation',
                                      items: [
                                        'Model architecture details',
                                        'Training methodologies',
                                        'Dataset information',
                                        'Performance benchmarks',
                                        'Limitation documentation'
                                      ]
                                    },
                                    {
                                      category: 'Risk Assessment',
                                      items: [
                                        'Systemic risk evaluation',
                                        'Dual-use potential analysis',
                                        'Societal impact assessment',
                                        'Bias und fairness testing',
                                        'Environmental impact'
                                      ]
                                    },
                                    {
                                      category: 'Governance Measures',
                                      items: [
                                        'Access control mechanisms',
                                        'Usage monitoring systems',
                                        'Incident response procedures',
                                        'Model update protocols',
                                        'Stakeholder engagement'
                                      ]
                                    }
                                  ].map((framework) => (
                                    <div key={framework.category} className="bg-slate-900/50 rounded-lg p-4">
                                      <h5 className="font-semibold text-white mb-3">{framework.category}</h5>
                                      <ul className="space-y-1">
                                        {framework.items.map((item, idx) => (
                                          <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                                            <Circle className="h-2 w-2 fill-current" />
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Downstream Provider Obligations */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Downstream Provider Verpflichtungen</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  role: 'Model Provider',
                                  icon: BrainCircuit,
                                  responsibilities: [
                                    'Technical documentation maintenance',
                                    'Copyright compliance verification',
                                    'Model evaluation und testing',
                                    'Incident reporting to authorities',
                                    'Cybersecurity measures implementation'
                                  ]
                                },
                                {
                                  role: 'Application Developer',
                                  icon: Code,
                                  responsibilities: [
                                    'GPAI model capabilities assessment',
                                    'Application-specific risk evaluation',
                                    'User safety measures implementation',
                                    'Misuse prevention mechanisms',
                                    'Transparency und user information'
                                  ]
                                },
                                {
                                  role: 'Deployer/User',
                                  icon: Users,
                                  responsibilities: [
                                    'Use case appropriateness evaluation',
                                    'Human oversight implementation',
                                    'Output monitoring und quality control',
                                    'Incident detection und response',
                                    'End-user protection measures'
                                  ]
                                }
                              ].map((stakeholder) => {
                                const IconComponent = stakeholder.icon;
                                return (
                                  <div key={stakeholder.role} className="bg-slate-900/50 rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-4">
                                      <IconComponent className="h-5 w-5 text-blue-400" />
                                      <h4 className="font-semibold text-white">{stakeholder.role}</h4>
                                    </div>
                                    <ul className="space-y-2">
                                      {stakeholder.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <CheckCircle className="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" />
                                          <span className="text-xs text-slate-300">{resp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })
                            }
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Anwendungsbereich Section */}
                <section id="anwendungsbereich" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Anwendungsbereich</h2>
                          <Button
                            onClick={() => handleSectionComplete('anwendungsbereich')}
                            variant={completedSections.includes('anwendungsbereich') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('anwendungsbereich') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Materieller Anwendungsbereich */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">Materieller Anwendungsbereich</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">KI-Systeme (Art. 3 Nr. 1)</h4>
                                <div className="space-y-3">
                                  <div className="bg-slate-900/50 rounded-lg p-4">
                                    <p className="text-slate-300 text-sm">
                                      "Ein maschinenbasiertes System, das für explizite oder implizite Ziele 
                                      entwickelt wurde und das aus den erhaltenen Eingaben ableitet, wie es Ausgaben 
                                      wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen generiert, die 
                                      physische oder virtuelle Umgebungen beeinflussen können."
                                    </p>
                                  </div>
                                  <ul className="space-y-2">
                                    {[
                                      'Machine Learning Systeme',
                                      'Logic- und knowledge-based Ansätze',
                                      'Statistische Ansätze',
                                      'Bayesian estimation',
                                      'Search und optimization Methoden'
                                    ].map((item, idx) => (
                                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                        <CheckCircle className="h-3 w-3 text-blue-400" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Ausnahmen</h4>
                                <div className="space-y-3">
                                  <ul className="space-y-2">
                                    {[
                                      'KI für ausschließlich militärische Zwecke',
                                      'KI für nationale Sicherheit',
                                      'KI nur für Forschung und Entwicklung',
                                      'KI nur für persönliche, nicht-berufliche Zwecke',
                                      'Open Source Software (mit Einschränkungen)'
                                    ].map((item, idx) => (
                                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                        <X className="h-3 w-3 text-red-400" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Räumlicher Anwendungsbereich */}
                          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-emerald-300 mb-6">Räumlicher Anwendungsbereich</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-emerald-300 mb-3">Anbieter in der EU</h4>
                                <p className="text-sm text-slate-300">
                                  Alle Anbieter mit Sitz in der EU, unabhängig davon, 
                                  wo das KI-System eingesetzt wird.
                                </p>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-emerald-300 mb-3">Verwendung in der EU</h4>
                                <p className="text-sm text-slate-300">
                                  KI-Systeme von Drittlandanbietern, die in der EU 
                                  verwendet werden.
                                </p>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-emerald-300 mb-3">Output in der EU</h4>
                                <p className="text-sm text-slate-300">
                                  KI-Systeme, deren Output in der EU verwendet wird, 
                                  auch wenn das System selbst außerhalb betrieben wird.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Akteure im AI Act */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Betroffene Akteure</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              {[
                                {
                                  role: 'Anbieter (Provider)',
                                  definition: 'Natürliche oder juristische Person, die ein KI-System entwickelt oder entwickeln lässt',
                                  responsibilities: [
                                    'CE-Kennzeichnung',
                                    'Konformitätsbewertung',
                                    'Technische Dokumentation',
                                    'Post-Market-Monitoring'
                                  ]
                                },
                                {
                                  role: 'Betreiber (Deployer)',
                                  definition: 'Person, die ein KI-System unter ihrer Autorität verwendet',
                                  responsibilities: [
                                    'Zweckbestimmung beachten',
                                    'Menschliche Aufsicht',
                                    'Eingabedaten überwachen',
                                    'Incident Reporting'
                                  ]
                                },
                                {
                                  role: 'Importeur',
                                  definition: 'Person mit Sitz in der EU, die KI-System aus Drittland in Verkehr bringt',
                                  responsibilities: [
                                    'Konformitätsprüfung',
                                    'CE-Kennzeichnung verifizieren',
                                    'Technische Dokumentation prüfen',
                                    'Marktüberwachung unterstützen'
                                  ]
                                },
                                {
                                  role: 'Händler (Distributor)',
                                  definition: 'Person in der Lieferkette, die KI-System verfügbar macht',
                                  responsibilities: [
                                    'Konformität überprüfen',
                                    'Lagerungsbedingungen einhalten',
                                    'Behörden informieren',
                                    'Zusammenarbeit mit Marktüberwachung'
                                  ]
                                }
                              ].map((actor, idx) => (
                                <div key={idx} className="bg-slate-900/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-blue-300 mb-2">{actor.role}</h4>
                                  <p className="text-sm text-slate-300 mb-3">{actor.definition}</p>
                                  <ul className="space-y-1">
                                    {actor.responsibilities.map((resp, ridx) => (
                                      <li key={ridx} className="text-xs text-slate-400 flex items-center gap-2">
                                        <CheckCircle className="h-2 w-2 text-emerald-400" />
                                        {resp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Anforderungen Section */}
                <section id="anforderungen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Anforderungen</h2>
                          <Button
                            onClick={() => handleSectionComplete('anforderungen')}
                            variant={completedSections.includes('anforderungen') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('anforderungen') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Hochrisiko-Anforderungen */}
                          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-red-300 mb-6">Anforderungen für Hochrisiko-KI-Systeme</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              {[
                                {
                                  requirement: 'Risikomanagementsystem',
                                  article: 'Art. 9',
                                  description: 'Kontinuierlicher Prozess zur Identifikation, Analyse und Bewertung von Risiken',
                                  details: [
                                    'Risiko-Identifikation und -Analyse',
                                    'Risikobewertung und -bewältigung',
                                    'Dokumentation aller Risikomanagement-Aktivitäten',
                                    'Regelmäßige Überprüfung und Aktualisierung'
                                  ]
                                },
                                {
                                  requirement: 'Datenqualität und -governance',
                                  article: 'Art. 10',
                                  description: 'Sicherstellung hoher Datenqualität für Training, Validierung und Test',
                                  details: [
                                    'Relevante, repräsentative und fehlerfrei Daten',
                                    'Angemessene statistische Eigenschaften',
                                    'Bias-Minimierung',
                                    'Datenqualitätskontrolle'
                                  ]
                                },
                                {
                                  requirement: 'Technische Dokumentation',
                                  article: 'Art. 11',
                                  description: 'Umfassende Dokumentation des KI-Systems und seiner Eigenschaften',
                                  details: [
                                    'Allgemeine Beschreibung des KI-Systems',
                                    'Detaillierte Entwicklungsdokumentation',
                                    'Risikomanagement-Dokumentation',
                                    'Konformitätsbewertungsverfahren'
                                  ]
                                },
                                {
                                  requirement: 'Automatische Protokollierung',
                                  article: 'Art. 12',
                                  description: 'Automatische Aufzeichnung von Ereignissen während des Betriebs',
                                  details: [
                                    'Funktionsdauer und -häufigkeit',
                                    'Eingabedaten und deren Referenz',
                                    'Zeitstempel aller Aktivitäten',
                                    'Systemleistung und -verhalten'
                                  ]
                                },
                                {
                                  requirement: 'Transparenz und Information',
                                  article: 'Art. 13',
                                  description: 'Klare und verständliche Informationen für Betreiber',
                                  details: [
                                    'Zweckbestimmung und Verwendungszweck',
                                    'Genauigkeitsgrad und Robustheit',
                                    'Bekannte Einschränkungen',
                                    'Erwartete Systemlebensdauer'
                                  ]
                                },
                                {
                                  requirement: 'Menschliche Aufsicht',
                                  article: 'Art. 14',
                                  description: 'Sicherstellung angemessener menschlicher Kontrolle',
                                  details: [
                                    'Human-in-the-loop Design',
                                    'Human-on-the-loop Überwachung',
                                    'Human-in-command Kontrolle',
                                    'Interpretierbare Outputs'
                                  ]
                                }
                              ].map((req, idx) => (
                                <div key={idx} className="bg-slate-900/50 rounded-lg p-4">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs">{req.article}</Badge>
                                    <h4 className="font-semibold text-white">{req.requirement}</h4>
                                  </div>
                                  <p className="text-sm text-slate-300 mb-3">{req.description}</p>
                                  <ul className="space-y-1">
                                    {req.details.map((detail, didx) => (
                                      <li key={didx} className="text-xs text-slate-400 flex items-start gap-2">
                                        <CheckCircle className="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" />
                                        {detail}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Genauigkeits- und Robustheitsanforderungen */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">Genauigkeit, Robustheit und Cybersicherheit</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-300 mb-3">Genauigkeit</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Angemessenes Genauigkeitsniveau',
                                    'Konsistente Leistung',
                                    'Messbare Metriken',
                                    'Benchmark-Vergleiche'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Target className="h-3 w-3 text-blue-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-emerald-300 mb-3">Robustheit</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Resilienz gegen Fehler',
                                    'Umgang mit Anomalien',
                                    'Stabile Performance',
                                    'Graceful Degradation'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Shield className="h-3 w-3 text-emerald-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-red-300 mb-3">Cybersicherheit</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Schutz vor Angriffen',
                                    'Sichere Datenübertragung',
                                    'Zugriffskontrollen',
                                    'Incident Response'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Lock className="h-3 w-3 text-red-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Konformitätsbewertung Section */}
                <section id="konformitaet" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Konformitätsbewertung</h2>
                          <Button
                            onClick={() => handleSectionComplete('konformitaet')}
                            variant={completedSections.includes('konformitaet') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('konformitaet') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Konformitätsbewertungsverfahren Übersicht */}
                          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-purple-300 mb-6">Konformitätsbewertungsverfahren</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-purple-300 mb-3">Internes Qualitätsmanagement (Anhang VI)</h4>
                                <div className="space-y-3">
                                  <div className="text-sm text-slate-300">
                                    <p className="mb-2"><strong>Anwendbar für:</strong> Die meisten Hochrisiko-KI-Systeme</p>
                                    <p className="mb-3"><strong>Ausnahmen:</strong> Biometrische Identifikationssysteme</p>
                                  </div>
                                  <ul className="space-y-2">
                                    {[
                                      'Qualitätsmanagementsystem implementieren',
                                      'Technische Dokumentation erstellen',
                                      'Automatische Protokollierung einrichten',
                                      'EU-Konformitätserklärung ausstellen',
                                      'CE-Kennzeichnung anbringen',
                                      'Post-Market-Monitoring durchführen'
                                    ].map((item, idx) => (
                                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                                        <CheckCircle className="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-pink-300 mb-3">Beteiligung Notifizierter Stellen (Anhang VII)</h4>
                                <div className="space-y-3">
                                  <div className="text-sm text-slate-300">
                                    <p className="mb-2"><strong>Anwendbar für:</strong> Biometrische Identifikationssysteme</p>
                                    <p className="mb-3"><strong>Zusätzlich zu:</strong> Internem Qualitätsmanagement</p>
                                  </div>
                                  <ul className="space-y-2">
                                    {[
                                      'Technische Dokumentation prüfen lassen',
                                      'Qualitätsmanagementsystem bewerten',
                                      'Konformitätszertifikat erhalten',
                                      'Jährliche Überwachung durchführen',
                                      'Änderungen melden und bewerten lassen'
                                    ].map((item, idx) => (
                                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                                        <CheckCircle className="h-2 w-2 text-pink-400 mt-1 flex-shrink-0" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* CE-Kennzeichnung */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">CE-Kennzeichnung</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-300 mb-3">Anbringung</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Sichtbar, lesbar und dauerhaft',
                                    'Auf dem KI-System oder Verpackung',
                                    'Mindesthöhe 5 mm',
                                    'Bei digitalen Systemen: elektronisch'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <CheckCircle className="h-3 w-3 text-blue-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-cyan-300 mb-3">Bedeutung</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Konformität mit AI Act',
                                    'Freier Verkehr in der EU',
                                    'Herstellerverantwortung',
                                    'Marktüberwachung ermöglichen'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Award className="h-3 w-3 text-cyan-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-emerald-300 mb-3">Dokumentation</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'EU-Konformitätserklärung',
                                    'Technische Dokumentation',
                                    'Qualitätsmanagement-Unterlagen',
                                    '10 Jahre aufbewahren'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <FileText className="h-3 w-3 text-emerald-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Notifizierte Stellen */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Notifizierte Stellen</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Rolle und Aufgaben</h4>
                                <div className="space-y-3">
                                  <div className="bg-slate-900/50 rounded-lg p-3">
                                    <h5 className="font-semibold text-blue-300 mb-2">Bewertungsaufgaben</h5>
                                    <ul className="space-y-1 text-sm">
                                      {[
                                        'Technische Dokumentation prüfen',
                                        'Qualitätsmanagementsystem bewerten',
                                        'Konformitätszertifikate ausstellen',
                                        'Überwachungsaudits durchführen'
                                      ].map((task, idx) => (
                                        <li key={idx} className="text-slate-300 flex items-center gap-2">
                                          <CheckCircle className="h-2 w-2 text-blue-400" />
                                          {task}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="bg-slate-900/50 rounded-lg p-3">
                                    <h5 className="font-semibold text-emerald-300 mb-2">Qualifikationen</h5>
                                    <ul className="space-y-1 text-sm">
                                      {[
                                        'Fachkompetenz in KI-Technologien',
                                        'Unabhängigkeit und Unparteilichkeit',
                                        'Akkreditierung nach ISO/IEC 17065',
                                        'Regelmäßige Schulungen'
                                      ].map((qual, idx) => (
                                        <li key={idx} className="text-slate-300 flex items-center gap-2">
                                          <Award className="h-2 w-2 text-emerald-400" />
                                          {qual}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Verfahren</h4>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                                    <div>
                                      <p className="font-semibold text-white text-sm">Antragstellung</p>
                                      <p className="text-xs text-slate-400">Vollständige Unterlagen einreichen</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                                    <div>
                                      <p className="font-semibold text-white text-sm">Bewertung</p>
                                      <p className="text-xs text-slate-400">Technische Prüfung und Audit</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                                    <div>
                                      <p className="font-semibold text-white text-sm">Zertifizierung</p>
                                      <p className="text-xs text-slate-400">Konformitätszertifikat ausstellen</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                                    <div>
                                      <p className="font-semibold text-white text-sm">Überwachung</p>
                                      <p className="text-xs text-slate-400">Jährliche Surveillance-Audits</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Transparenzpflichten Section */}
                <section id="transparenz" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Transparenzpflichten</h2>
                          <Button
                            onClick={() => handleSectionComplete('transparenz')}
                            variant={completedSections.includes('transparenz') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('transparenz') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* KI-Systeme mit begrenztem Risiko */}
                          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-yellow-300 mb-6">Limited Risk AI-Systeme (Art. 50)</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-yellow-300 mb-3">Betroffene Systeme</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Chatbots und virtuelle Assistenten',
                                    'Emotionserkennungssysteme',
                                    'Biometrische Kategorisierungssysteme',
                                    'KI-Systeme zur Inhaltsgenerierung (Deepfakes)',
                                    'KI-Systeme zur Bilderkennung'
                                  ].map((system, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Eye className="h-3 w-3 text-yellow-400" />
                                      {system}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-orange-300 mb-3">Transparenzpflichten</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Nutzer über KI-Interaktion informieren',
                                    'Klare und verständliche Informationen',
                                    'Rechtzeitige Information vor Nutzung',
                                    'KI-generierte Inhalte kennzeichnen',
                                    'Opt-out Möglichkeiten bereitstellen'
                                  ].map((obligation, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Info className="h-3 w-3 text-orange-400" />
                                      {obligation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Deepfakes und synthetische Inhalte */}
                          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-red-300 mb-6">Deepfakes & Synthetische Inhalte</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-red-300 mb-3">Audio-Deepfakes</h4>
                                <div className="space-y-2">
                                  <p className="text-sm text-slate-300 mb-3">
                                    KI-generierte oder manipulierte Audioinhalte müssen eindeutig als solche gekennzeichnet werden.
                                  </p>
                                  <ul className="space-y-1 text-xs">
                                    {[
                                      'Maschinenlesbare Kennzeichnung',
                                      'Menschenlesbare Warnung',
                                      'Metadaten-Einbettung',
                                      'Watermarking-Technologien'
                                    ].map((req, idx) => (
                                      <li key={idx} className="text-slate-400 flex items-center gap-2">
                                        <CheckCircle className="h-2 w-2 text-red-400" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-pink-300 mb-3">Video-Deepfakes</h4>
                                <div className="space-y-2">
                                  <p className="text-sm text-slate-300 mb-3">
                                    Manipulierte oder synthetische Videoinhalte erfordern besondere Kennzeichnung.
                                  </p>
                                  <ul className="space-y-1 text-xs">
                                    {[
                                      'Visuelle Kennzeichnung im Video',
                                      'Blockchain-basierte Verifikation',
                                      'Digitale Signaturen',
                                      'Provenance-Tracking'
                                    ].map((req, idx) => (
                                      <li key={idx} className="text-slate-400 flex items-center gap-2">
                                        <CheckCircle className="h-2 w-2 text-pink-400" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-purple-300 mb-3">Text-Generierung</h4>
                                <div className="space-y-2">
                                  <p className="text-sm text-slate-300 mb-3">
                                    KI-generierte Texte und Artikel müssen als maschinell erstellt erkennbar sein.
                                  </p>
                                  <ul className="space-y-1 text-xs">
                                    {[
                                      'Disclaimer am Textanfang',
                                      'Strukturierte Daten-Markup',
                                      'API-Header für KI-Inhalte',
                                      'Publishing-Standards einhalten'
                                    ].map((req, idx) => (
                                      <li key={idx} className="text-slate-400 flex items-center gap-2">
                                        <CheckCircle className="h-2 w-2 text-purple-400" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Best Practices für Transparenz */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Best Practices für Transparenz</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Nutzerinformation</h4>
                                <div className="space-y-3">
                                  {[
                                    {
                                      practice: 'Proaktive Offenlegung',
                                      description: 'Nutzer vor der ersten Interaktion über KI-Einsatz informieren',
                                      implementation: 'Pop-up, Banner oder Disclaimer verwenden'
                                    },
                                    {
                                      practice: 'Verständliche Sprache',
                                      description: 'Technische Details in einfache Sprache übersetzen',
                                      implementation: 'Laienverständliche Erklärungen und Beispiele'
                                    },
                                    {
                                      practice: 'Granulare Kontrolle',
                                      description: 'Nutzer können spezifische KI-Features deaktivieren',
                                      implementation: 'Detaillierte Einstellungsoptionen anbieten'
                                    }
                                  ].map((practice, idx) => (
                                    <div key={idx} className="bg-slate-900/50 rounded-lg p-3">
                                      <h5 className="font-semibold text-blue-300 text-sm mb-1">{practice.practice}</h5>
                                      <p className="text-xs text-slate-300 mb-2">{practice.description}</p>
                                      <p className="text-xs text-slate-400 italic">{practice.implementation}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Technische Umsetzung</h4>
                                <div className="space-y-3">
                                  {[
                                    {
                                      tech: 'Maschinenlesbare Labels',
                                      description: 'Strukturierte Metadaten für automatische Erkennung',
                                      examples: 'JSON-LD, RDFa, Dublin Core'
                                    },
                                    {
                                      tech: 'Digital Watermarking',
                                      description: 'Unsichtbare Kennzeichnung in Medieninhalten',
                                      examples: 'C2PA, Project Origin, Content Authenticity'
                                    },
                                    {
                                      tech: 'Provenance Tracking',
                                      description: 'Nachverfolgung der Entstehungsgeschichte',
                                      examples: 'Blockchain, Hash-Chains, Digital Certificates'
                                    }
                                  ].map((tech, idx) => (
                                    <div key={idx} className="bg-slate-900/50 rounded-lg p-3">
                                      <h5 className="font-semibold text-emerald-300 text-sm mb-1">{tech.tech}</h5>
                                      <p className="text-xs text-slate-300 mb-2">{tech.description}</p>
                                      <p className="text-xs text-slate-400 italic">{tech.examples}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Technical Standards Section */}
                <section id="technische-standards" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Technische Standards & Normen</h2>
                          <Button
                            onClick={() => handleSectionComplete('technische-standards')}
                            variant={completedSections.includes('technische-standards') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('technische-standards') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* ISO/IEC Standards */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">Harmonisierte Normen für AI Act</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              {[
                                {
                                  standard: 'ISO/IEC 23053:2022',
                                  title: 'Framework for AI systems using ML',
                                  scope: 'Allgemeiner Rahmen für KI-Systeme',
                                  relevance: 'Grundlage für alle AI Act Compliance',
                                  status: 'Published',
                                  keyAspects: [
                                    'AI system lifecycle management',
                                    'Risk management frameworks',
                                    'Quality assurance processes',
                                    'Documentation requirements',
                                    'Stakeholder identification'
                                  ]
                                },
                                {
                                  standard: 'ISO/IEC 23894:2023',
                                  title: 'AI risk management',
                                  scope: 'Spezifische Risikomanagement-Prozesse',
                                  relevance: 'Hochrisiko-KI Compliance',
                                  status: 'Published',
                                  keyAspects: [
                                    'Risk identification methodologies',
                                    'Risk assessment procedures',
                                    'Risk mitigation strategies',
                                    'Continuous monitoring',
                                    'Risk communication'
                                  ]
                                },
                                {
                                  standard: 'ISO/IEC 25059:2023',
                                  title: 'AI system quality measurement',
                                  scope: 'Qualitätsmessung und -bewertung',
                                  relevance: 'Performance und Robustheit',
                                  status: 'Published',
                                  keyAspects: [
                                    'Quality characteristics definition',
                                    'Measurement frameworks',
                                    'Evaluation methodologies',
                                    'Performance benchmarking',
                                    'Quality reporting'
                                  ]
                                },
                                {
                                  standard: 'ISO/IEC 23090-24:2024',
                                  title: 'AI fairness and bias assessment',
                                  scope: 'Fairness und Bias-Bewertung',
                                  relevance: 'Non-discrimination requirements',
                                  status: 'Draft',
                                  keyAspects: [
                                    'Bias detection methods',
                                    'Fairness metrics definition',
                                    'Assessment procedures',
                                    'Mitigation strategies',
                                    'Monitoring frameworks'
                                  ]
                                }
                              ].map((standard) => (
                                <div key={standard.standard} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                  <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-lg font-bold text-white">{standard.standard}</h4>
                                    <Badge className={cn(
                                      standard.status === 'Published' && 'bg-green-500/20 text-green-300',
                                      standard.status === 'Draft' && 'bg-yellow-500/20 text-yellow-300'
                                    )}>
                                      {standard.status}
                                    </Badge>
                                  </div>
                                  
                                  <h5 className="font-semibold text-blue-300 mb-2">{standard.title}</h5>
                                  <p className="text-sm text-slate-300 mb-3">{standard.scope}</p>
                                  <p className="text-xs text-slate-400 mb-4">Relevanz: {standard.relevance}</p>
                                  
                                  <div>
                                    <h6 className="text-sm font-semibold text-slate-300 mb-2">Kernaspekte:</h6>
                                    <ul className="space-y-1">
                                      {standard.keyAspects.map((aspect, idx) => (
                                        <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                                          <Circle className="h-2 w-2 fill-current" />
                                          {aspect}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technical Implementation Guidelines */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Technical Implementation Guidelines</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  category: 'Data Governance',
                                  icon: Database,
                                  standards: ['ISO/IEC 25012', 'ISO 8000', 'FAIR Principles'],
                                  requirements: [
                                    'Data quality management systems',
                                    'Data lineage and provenance tracking',
                                    'Bias detection in training data',
                                    'Data minimization principles',
                                    'Privacy-preserving techniques'
                                  ]
                                },
                                {
                                  category: 'Model Development',
                                  icon: BrainCog,
                                  standards: ['MLOps Standards', 'IEEE 2857', 'ISO/IEC 25010'],
                                  requirements: [
                                    'Reproducible training processes',
                                    'Version control for models',
                                    'Automated testing pipelines',
                                    'Performance monitoring',
                                    'Model validation frameworks'
                                  ]
                                },
                                {
                                  category: 'Deployment & Operations',
                                  icon: Server,
                                  standards: ['ISO/IEC 27001', 'NIST AI RMF', 'ISO 9001'],
                                  requirements: [
                                    'Secure deployment practices',
                                    'Runtime monitoring systems',
                                    'Incident response procedures',
                                    'Change management processes',
                                    'Business continuity planning'
                                  ]
                                }
                              ].map((guideline) => {
                                const IconComponent = guideline.icon;
                                return (
                                  <div key={guideline.category} className="bg-slate-900/50 rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-4">
                                      <IconComponent className="h-5 w-5 text-blue-400" />
                                      <h4 className="font-semibold text-white">{guideline.category}</h4>
                                    </div>
                                    
                                    <div className="mb-4">
                                      <h5 className="text-sm font-semibold text-slate-300 mb-2">Applicable Standards:</h5>
                                      <div className="flex flex-wrap gap-1">
                                        {guideline.standards.map((standard) => (
                                          <Badge key={standard} variant="outline" className="text-xs">
                                            {standard}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h5 className="text-sm font-semibold text-slate-300 mb-2">Key Requirements:</h5>
                                      <ul className="space-y-1">
                                        {guideline.requirements.map((req, idx) => (
                                          <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                                            <Circle className="h-2 w-2 fill-current" />
                                            {req}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                );
                              })
                            }
                            </div>
                          </div>

                          {/* Conformity Assessment Procedures */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Konformitätsbewertungsverfahren</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Internal Quality Management (Annex VI)</h4>
                                <div className="space-y-4">
                                  <div className="bg-slate-900/50 rounded-lg p-4">
                                    <h5 className="font-semibold text-emerald-300 mb-2">Applicability</h5>
                                    <p className="text-sm text-slate-300">For high-risk AI systems listed in Annex III, except biometric systems</p>
                                  </div>
                                  
                                  <div className="bg-slate-900/50 rounded-lg p-4">
                                    <h5 className="font-semibold text-blue-300 mb-2">Requirements</h5>
                                    <ul className="space-y-1 text-sm">
                                      {[
                                        'Quality management system implementation',
                                        'Technical documentation preparation',
                                        'Automatic logging system setup',
                                        'EU conformity declaration',
                                        'CE marking application',
                                        'Post-market monitoring system'
                                      ].map((req, idx) => (
                                        <li key={idx} className="text-slate-300 flex items-center gap-2">
                                          <CheckCircle className="h-3 w-3 text-emerald-400" />
                                          {req}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Notified Body Assessment (Annex VII)</h4>
                                <div className="space-y-4">
                                  <div className="bg-slate-900/50 rounded-lg p-4">
                                    <h5 className="font-semibold text-orange-300 mb-2">Applicability</h5>
                                    <p className="text-sm text-slate-300">For biometric identification and categorization systems</p>
                                  </div>
                                  
                                  <div className="bg-slate-900/50 rounded-lg p-4">
                                    <h5 className="font-semibold text-purple-300 mb-2">Process</h5>
                                    <ul className="space-y-1 text-sm">
                                      {[
                                        'Technical documentation submission',
                                        'Quality management system audit',
                                        'Design examination by notified body',
                                        'Testing and validation procedures',
                                        'EU type examination certificate',
                                        'Annual surveillance audits'
                                      ].map((step, idx) => (
                                        <li key={idx} className="text-slate-300 flex items-center gap-2">
                                          <AlertTriangle className="h-3 w-3 text-purple-400" />
                                          {step}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* AI Governance Section */}
                <section id="governance" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">AI Governance</h2>
                          <Button
                            onClick={() => handleSectionComplete('governance')}
                            variant={completedSections.includes('governance') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('governance') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Governance Framework */}
                          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-indigo-300 mb-6">AI Governance Framework</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-indigo-300 mb-3">Strategische Ebene</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'AI-Strategie und -Vision',
                                    'Board-Level Oversight',
                                    'Risikotoleranz definieren',
                                    'Ethische Leitlinien',
                                    'Business Impact Assessment'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Target className="h-3 w-3 text-indigo-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-purple-300 mb-3">Operative Ebene</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'AI-Governance-Komitee',
                                    'Cross-funktionale Teams',
                                    'Prozesse und Verfahren',
                                    'KPI-Monitoring',
                                    'Incident Management'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Settings className="h-3 w-3 text-purple-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-pink-300 mb-3">Technische Ebene</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'MLOps und DevOps',
                                    'Model Lifecycle Management',
                                    'Continuous Monitoring',
                                    'Automated Testing',
                                    'Version Control'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <Code className="h-3 w-3 text-pink-400" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Rollen und Verantwortlichkeiten */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Rollen und Verantwortlichkeiten</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              {[
                                {
                                  role: 'Chief AI Officer (CAIO)',
                                  responsibilities: [
                                    'AI-Strategie entwickeln und umsetzen',
                                    'Risikomanagement überwachen',
                                    'Compliance sicherstellen',
                                    'Stakeholder-Management'
                                  ],
                                  skills: ['Technische Expertise', 'Business Acumen', 'Regulatory Knowledge']
                                },
                                {
                                  role: 'AI Ethics Officer',
                                  responsibilities: [
                                    'Ethische Richtlinien entwickeln',
                                    'Bias Detection und Mitigation',
                                    'Fairness Assessments',
                                    'Stakeholder Engagement'
                                  ],
                                  skills: ['Ethik und Philosophie', 'AI Fairness', 'Kommunikation']
                                },
                                {
                                  role: 'AI Risk Manager',
                                  responsibilities: [
                                    'Risikoidentifikation und -bewertung',
                                    'Mitigation Strategies',
                                    'Incident Response',
                                    'Regulatory Reporting'
                                  ],
                                  skills: ['Risk Management', 'Regulatory Compliance', 'Data Analysis']
                                },
                                {
                                  role: 'AI Compliance Manager',
                                  responsibilities: [
                                    'Regulatory Mapping',
                                    'Audit Coordination',
                                    'Documentation Management',
                                    'Training und Awareness'
                                  ],
                                  skills: ['Legal Expertise', 'Process Management', 'Audit Skills']
                                }
                              ].map((role, idx) => (
                                <div key={idx} className="bg-slate-900/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-blue-300 mb-3">{role.role}</h4>
                                  <div className="space-y-3">
                                    <div>
                                      <h5 className="font-semibold text-white text-sm mb-2">Verantwortlichkeiten</h5>
                                      <ul className="space-y-1">
                                        {role.responsibilities.map((resp, ridx) => (
                                          <li key={ridx} className="text-xs text-slate-300 flex items-start gap-2">
                                            <CheckCircle className="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" />
                                            {resp}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 className="font-semibold text-white text-sm mb-2">Schlüssel-Skills</h5>
                                      <div className="flex flex-wrap gap-1">
                                        {role.skills.map((skill, sidx) => (
                                          <Badge key={sidx} variant="outline" className="text-xs px-2 py-1">
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Dokumentation Section */}
                <section id="dokumentation" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Dokumentation</h2>
                          <Button
                            onClick={() => handleSectionComplete('dokumentation')}
                            variant={completedSections.includes('dokumentation') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('dokumentation') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Technische Dokumentation nach Anhang IV */}
                          <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-green-300 mb-6">Technische Dokumentation (Anhang IV)</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-green-300 mb-3">Allgemeine Informationen</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Name und Kontaktdaten des Anbieters',
                                    'Name und Kontaktdaten des Bevollmächtigten',
                                    'Beschreibung des KI-Systems',
                                    'Zweckbestimmung des Systems',
                                    'EU-Konformitätserklärung'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                                      <FileText className="h-3 w-3 text-green-400 mt-1 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-teal-300 mb-3">Technische Spezifikationen</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Detaillierte Beschreibung der Systemarchitektur',
                                    'Entwicklungsmethodik und -verfahren',
                                    'Verwendete Algorithmen und Techniken',
                                    'Datenquellen und Trainingsverfahren',
                                    'Systemintegration und Schnittstellen'
                                  ].map((item, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                                      <Database className="h-3 w-3 text-teal-400 mt-1 flex-shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Dokumentations-Templates */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Dokumentations-Templates</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  template: 'System Overview Document',
                                  description: 'Comprehensive overview of the AI system',
                                  sections: [
                                    'Executive Summary',
                                    'System Architecture',
                                    'Key Components',
                                    'Performance Metrics',
                                    'Risk Assessment'
                                  ]
                                },
                                {
                                  template: 'Data Management Plan',
                                  description: 'Documentation of data handling procedures',
                                  sections: [
                                    'Data Sources',
                                    'Data Quality Measures',
                                    'Privacy Protection',
                                    'Bias Mitigation',
                                    'Data Lifecycle'
                                  ]
                                },
                                {
                                  template: 'Risk Management Report',
                                  description: 'Comprehensive risk analysis and mitigation',
                                  sections: [
                                    'Risk Identification',
                                    'Risk Assessment',
                                    'Mitigation Strategies',
                                    'Monitoring Plan',
                                    'Incident Response'
                                  ]
                                }
                              ].map((template, idx) => (
                                <div key={idx} className="bg-slate-900/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-blue-300 mb-2">{template.template}</h4>
                                  <p className="text-sm text-slate-300 mb-3">{template.description}</p>
                                  <ul className="space-y-1">
                                    {template.sections.map((section, sidx) => (
                                      <li key={sidx} className="text-xs text-slate-400 flex items-center gap-2">
                                        <CheckCircle className="h-2 w-2 text-emerald-400" />
                                        {section}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Bußgelder Section */}
                <section id="bussgelder" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Bußgelder</h2>
                          <Button
                            onClick={() => handleSectionComplete('bussgelder')}
                            variant={completedSections.includes('bussgelder') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('bussgelder') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Bußgeld-Kategorien */}
                          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-red-300 mb-6">Bußgeld-Kategorien nach Art. 99</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-red-300 mb-3">Höchste Stufe</h4>
                                <div className="text-center mb-4">
                                  <div className="text-2xl font-bold text-red-400">€35 Mio</div>
                                  <div className="text-sm text-slate-300">oder 7% des Jahresumsatzes</div>
                                </div>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Verbotene KI-Praktiken (Art. 5)',
                                    'Nichteinhaltung Datenqualität',
                                    'Mangelhafte menschliche Aufsicht'
                                  ].map((violation, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                                      <AlertTriangle className="h-3 w-3 text-red-400 mt-1 flex-shrink-0" />
                                      {violation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-orange-300 mb-3">Mittlere Stufe</h4>
                                <div className="text-center mb-4">
                                  <div className="text-2xl font-bold text-orange-400">€15 Mio</div>
                                  <div className="text-sm text-slate-300">oder 3% des Jahresumsatzes</div>
                                </div>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Verstöße gegen Hochrisiko-Anforderungen',
                                    'Mangelhafte CE-Kennzeichnung',
                                    'Unzureichende Dokumentation'
                                  ].map((violation, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                                      <AlertCircle className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                                      {violation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-yellow-300 mb-3">Niedrigste Stufe</h4>
                                <div className="text-center mb-4">
                                  <div className="text-2xl font-bold text-yellow-400">€7,5 Mio</div>
                                  <div className="text-sm text-slate-300">oder 1,5% des Jahresumsatzes</div>
                                </div>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Verstöße gegen Transparenzpflichten',
                                    'Unzureichende Kennzeichnung',
                                    'Mangelhafte Kooperation'
                                  ].map((violation, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                                      <Info className="h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" />
                                      {violation}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Enforcement und Marktüberwachung */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Enforcement und Marktüberwachung</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Zuständige Behörden</h4>
                                <div className="space-y-3">
                                  {[
                                    {
                                      authority: 'Nationale Marktüberwachungsbehörden',
                                      responsibilities: [
                                        'Marktüberwachung und Kontrollen',
                                        'Bußgeldverfahren einleiten',
                                        'Produktrückrufe anordnen',
                                        'Verkaufsverbote verhängen'
                                      ]
                                    },
                                    {
                                      authority: 'Europäisches AI Office',
                                      responsibilities: [
                                        'Koordination zwischen Mitgliedstaaten',
                                        'Harmonisierte Standards',
                                        'Guidance Documents',
                                        'Internationale Kooperation'
                                      ]
                                    }
                                  ].map((auth, idx) => (
                                    <div key={idx} className="bg-slate-900/50 rounded-lg p-3">
                                      <h5 className="font-semibold text-blue-300 text-sm mb-2">{auth.authority}</h5>
                                      <ul className="space-y-1">
                                        {auth.responsibilities.map((resp, ridx) => (
                                          <li key={ridx} className="text-xs text-slate-400 flex items-start gap-2">
                                            <CheckCircle className="h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" />
                                            {resp}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Compliance-Maßnahmen</h4>
                                <div className="space-y-3">
                                  {[
                                    {
                                      measure: 'Proaktive Compliance',
                                      description: 'Vorbeugende Maßnahmen implementieren',
                                      actions: ['Regular Compliance Audits', 'Staff Training', 'Process Documentation']
                                    },
                                    {
                                      measure: 'Incident Response',
                                      description: 'Schnelle Reaktion auf Compliance-Verstöße',
                                      actions: ['Sofortige Korrekturmaßnahmen', 'Behörden informieren', 'Root Cause Analysis']
                                    },
                                    {
                                      measure: 'Legal Defense',
                                      description: 'Vorbereitung auf Enforcement-Verfahren',
                                      actions: ['Legal Counsel', 'Evidence Preservation', 'Mitigation Strategies']
                                    }
                                  ].map((measure, idx) => (
                                    <div key={idx} className="bg-slate-900/50 rounded-lg p-3">
                                      <h5 className="font-semibold text-emerald-300 text-sm mb-1">{measure.measure}</h5>
                                      <p className="text-xs text-slate-300 mb-2">{measure.description}</p>
                                      <ul className="space-y-1">
                                        {measure.actions.map((action, aidx) => (
                                          <li key={aidx} className="text-xs text-slate-400 flex items-center gap-2">
                                            <CheckCircle className="h-2 w-2 text-emerald-400" />
                                            {action}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Innovation & Sandboxes Section */}
                <section id="innovation" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Innovation & Sandboxes</h2>
                          <Button
                            onClick={() => handleSectionComplete('innovation')}
                            variant={completedSections.includes('innovation') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('innovation') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* AI Regulatory Sandboxes */}
                          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-cyan-300 mb-6">AI Regulatory Sandboxes (Art. 57)</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-cyan-300 mb-3">Zweck und Vorteile</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Kontrollierte Testumgebung für innovative KI',
                                    'Reduzierte regulatorische Unsicherheit',
                                    'Enge Zusammenarbeit mit Aufsichtsbehörden',
                                    'Proof-of-Concept für neue KI-Anwendungen',
                                    'Learning und Best Practice Development'
                                  ].map((benefit, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                                      <Lightbulb className="h-3 w-3 text-cyan-400 mt-1 flex-shrink-0" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-300 mb-3">Teilnahme-Voraussetzungen</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'Innovative KI-Systeme entwickeln',
                                    'Hohe Komplexität oder Neuartigkeit',
                                    'Potenzial für Marktreife',
                                    'Bereitschaft zur Kooperation',
                                    'Ausreichende Ressourcen für Tests'
                                  ].map((requirement, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                                      <CheckCircle className="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" />
                                      {requirement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Innovation Support Measures */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Unterstützungsmaßnahmen für Innovation</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  measure: 'Codes of Practice',
                                  description: 'Freiwillige Verhaltenskodizes für innovative Ansätze',
                                  features: [
                                    'Industry-led Standards',
                                    'Best Practice Sharing',
                                    'Continuous Improvement',
                                    'Market Recognition'
                                  ]
                                },
                                {
                                  measure: 'Testing Framework',
                                  description: 'Strukturierte Testverfahren für neue KI-Systeme',
                                  features: [
                                    'Standardized Benchmarks',
                                    'Safety Testing Protocols',
                                    'Performance Metrics',
                                    'Risk Assessment Tools'
                                  ]
                                },
                                {
                                  measure: 'Innovation Hubs',
                                  description: 'Zentren für KI-Innovation und Compliance',
                                  features: [
                                    'Expert Consultation',
                                    'Regulatory Guidance',
                                    'Technology Transfer',
                                    'Startup Support'
                                  ]
                                }
                              ].map((measure, idx) => (
                                <div key={idx} className="bg-slate-900/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-emerald-300 mb-2">{measure.measure}</h4>
                                  <p className="text-sm text-slate-300 mb-3">{measure.description}</p>
                                  <ul className="space-y-1">
                                    {measure.features.map((feature, fidx) => (
                                      <li key={fidx} className="text-xs text-slate-400 flex items-center gap-2">
                                        <Sparkles className="h-2 w-2 text-emerald-400" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Zertifizierung Section */}
                <section id="zertifizierung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Zertifizierung</h2>
                          <Button
                            onClick={() => handleSectionComplete('zertifizierung')}
                            variant={completedSections.includes('zertifizierung') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('zertifizierung') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Zertifizierungsprozess */}
                          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-purple-300 mb-6">Zertifizierungsprozess</h3>
                            <div className="space-y-4">
                              {[
                                {
                                  step: 1,
                                  title: 'Vorbereitung',
                                  description: 'Vollständige Dokumentation und interne Audits',
                                  duration: '2-4 Wochen',
                                  activities: ['Gap Analysis', 'Dokumentation vervollständigen', 'Interne Reviews', 'Team Training']
                                },
                                {
                                  step: 2,
                                  title: 'Antragstellung',
                                  description: 'Formale Einreichung bei notifizierter Stelle',
                                  duration: '1-2 Wochen',
                                  activities: ['Notified Body auswählen', 'Antragsformulare', 'Unterlagen einreichen', 'Erstbewertung']
                                },
                                {
                                  step: 3,
                                  title: 'Assessment',
                                  description: 'Technische Prüfung und Audit vor Ort',
                                  duration: '4-8 Wochen',
                                  activities: ['Dokumentenprüfung', 'Site Audit', 'Technical Testing', 'Compliance Verification']
                                },
                                {
                                  step: 4,
                                  title: 'Zertifikat',
                                  description: 'Ausstellung des Konformitätszertifikats',
                                  duration: '1-2 Wochen',
                                  activities: ['Final Report', 'Certificate Issuance', 'CE Marking', 'Market Entry']
                                }
                              ].map((step, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                                    {step.step}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                      <h4 className="font-semibold text-white">{step.title}</h4>
                                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                                    </div>
                                    <p className="text-sm text-slate-300 mb-3">{step.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                      {step.activities.map((activity, aidx) => (
                                        <Badge key={aidx} variant="secondary" className="text-xs px-2 py-1">
                                          {activity}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Zertifizierungs-Optionen */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Zertifizierungs-Optionen</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">AI Act Compliance Zertifizierung</h4>
                                <div className="space-y-3">
                                  {[
                                    {
                                      type: 'Hochrisiko-System Zertifizierung',
                                      scope: 'Vollständige AI Act Compliance für Hochrisiko-KI',
                                      standards: ['AI Act Art. 8-15', 'Anhang III/IV', 'ISO/IEC 23053'],
                                      validity: '3 Jahre'
                                    },
                                    {
                                      type: 'General Purpose AI Zertifizierung',
                                      scope: 'Spezielle Anforderungen für Foundation Models',
                                      standards: ['AI Act Art. 51', 'Systemic Risk Assessment', 'Safety Measures'],
                                      validity: '2 Jahre'
                                    }
                                  ].map((cert, idx) => (
                                    <div key={idx} className="bg-slate-900/50 rounded-lg p-3">
                                      <div className="flex items-center justify-between mb-2">
                                        <h5 className="font-semibold text-blue-300 text-sm">{cert.type}</h5>
                                        <span className="text-xs text-slate-400">{cert.validity}</span>
                                      </div>
                                      <p className="text-xs text-slate-300 mb-2">{cert.scope}</p>
                                      <div className="flex flex-wrap gap-1">
                                        {cert.standards.map((standard, sidx) => (
                                          <Badge key={sidx} variant="outline" className="text-xs">
                                            {standard}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4">Zusätzliche Zertifizierungen</h4>
                                <div className="space-y-3">
                                  {[
                                    {
                                      cert: 'ISO/IEC 27001',
                                      purpose: 'Information Security Management',
                                      benefit: 'Credibility für Cybersecurity-Maßnahmen'
                                    },
                                    {
                                      cert: 'ISO/IEC 23053',
                                      purpose: 'AI Systems Framework',
                                      benefit: 'Internationale AI-Standards Compliance'
                                    },
                                    {
                                      cert: 'SOC 2 Type II',
                                      purpose: 'Service Organization Controls',
                                      benefit: 'Vertrauen bei B2B-Kunden'
                                    },
                                    {
                                      cert: 'GDPR Compliance',
                                      purpose: 'Data Protection Compliance',
                                      benefit: 'EU-weite Datenschutz-Compliance'
                                    }
                                  ].map((cert, idx) => (
                                    <div key={idx} className="bg-slate-900/50 rounded-lg p-3">
                                      <h5 className="font-semibold text-emerald-300 text-sm mb-1">{cert.cert}</h5>
                                      <p className="text-xs text-slate-300 mb-1">{cert.purpose}</p>
                                      <p className="text-xs text-slate-400 italic">{cert.benefit}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Ressourcen Section */}
                <section id="ressourcen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Ressourcen</h2>
                          <Button
                            onClick={() => handleSectionComplete('ressourcen')}
                            variant={completedSections.includes('ressourcen') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('ressourcen') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Offizielle Ressourcen */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">Offizielle Ressourcen</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-blue-300 mb-3">EU-Quellen</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'EU AI Act (Regulation 2024/1689)',
                                    'AI Office (European Commission)',
                                    'ENISA AI Guidelines',
                                    'European AI Alliance',
                                    'AI Standardization Roadmap'
                                  ].map((resource, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <ExternalLink className="h-3 w-3 text-blue-400" />
                                      {resource}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="bg-slate-900/50 rounded-lg p-4">
                                <h4 className="font-semibold text-indigo-300 mb-3">Standards & Guidelines</h4>
                                <ul className="space-y-2 text-sm">
                                  {[
                                    'ISO/IEC 23053:2022 (AI Framework)',
                                    'ISO/IEC 23894:2023 (Risk Management)',
                                    'CEN-CENELEC Standards',
                                    'IEEE AI Ethics Standards',
                                    'NIST AI Risk Management Framework'
                                  ].map((standard, idx) => (
                                    <li key={idx} className="text-slate-300 flex items-center gap-2">
                                      <FileText className="h-3 w-3 text-indigo-400" />
                                      {standard}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Tools & Templates */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Tools & Templates</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  category: 'Assessment Tools',
                                  tools: [
                                    'AI Act Self-Assessment',
                                    'Risk Classification Tool',
                                    'Compliance Checklist',
                                    'Gap Analysis Template'
                                  ]
                                },
                                {
                                  category: 'Documentation Templates',
                                  tools: [
                                    'Technical Documentation',
                                    'Risk Management Plan',
                                    'Data Management Plan',
                                    'EU Declaration of Conformity'
                                  ]
                                },
                                {
                                  category: 'Implementation Guides',
                                  tools: [
                                    'Hochrisiko Implementation',
                                    'Transparency Requirements',
                                    'CE Marking Guide',
                                    'Audit Preparation Checklist'
                                  ]
                                }
                              ].map((category, idx) => (
                                <div key={idx} className="bg-slate-900/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-emerald-300 mb-3">{category.category}</h4>
                                  <ul className="space-y-2">
                                    {category.tools.map((tool, tidx) => (
                                      <li key={tidx} className="text-sm text-slate-300 flex items-center gap-2">
                                        <Download className="h-3 w-3 text-emerald-400" />
                                        {tool}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EuAiActGuide;