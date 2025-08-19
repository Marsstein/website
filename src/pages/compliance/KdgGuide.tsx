import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
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
  Cloud,
  Church,
  Cross,
  Heart,
  Book,
  Crown,
  Landmark,
  HandHeart,
  Home,
  UserPlus,
  MessageSquare,
  BookmarkCheck,
  Fingerprint,
  Key,
  ShieldCheck,
  UserCheck,
  Building,
  Factory,
  Briefcase,
  GraduationCap,
  MapPin,
  Flag,
  Package,
  Layers,
  Grid,
  List,
  Plus,
  X,
  Check,
  Copy,
  Save,
  Trash2,
  FolderOpen,
  File,
  Upload,
  Link as LinkIcon,
  Mail,
  Phone,
  Send,
  Bell,
  Search,
  Filter,
  Navigation,
  Map,
  Megaphone,
  RefreshCw,
  Sparkles,
  Gem,
  Palette,
  Wrench,
  PenTool,
  MousePointer,
  Code2,
  Smartphone,
  Tablet,
  Laptop,
  HardDrive,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Headphones,
  Speaker,
  Mic,
  Camera,
  Image,
  Film,
  Radio,
  Tv,
  Gamepad,
  Joystick,
  Timer,
  Alarm,
  Watch,
  Hourglass,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Wind,
  Droplet,
  Flame,
  Zap as Lightning
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { cn } from '@/lib/utils';

const KdgGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarkedSections, setBookmarkedSections] = useState<string[]>([]);
  const [readingSections, setReadingSections] = useState<Set<string>>(new Set());
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set());
  const [selectedDiocese, setSelectedDiocese] = useState('');
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Auto-detect active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute('data-section');
          if (sectionId) {
            setActiveSection(sectionId);
            setReadingSections(prev => new Set(prev).add(sectionId));
          }
        }
      });

      // Update reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleBookmark = (section: string) => {
    setBookmarkedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'overview', title: 'Übersicht', icon: BookOpen },
    { id: 'history', title: 'Geschichte & Entwicklung', icon: Clock },
    { id: 'requirements', title: 'Zentrale Anforderungen', icon: Target },
    { id: 'comparison', title: 'KDG vs. DSGVO', icon: Scale },
    { id: 'implementation', title: 'Implementierung', icon: Settings },
    { id: 'documentation', title: 'Dokumentation', icon: FileText },
    { id: 'special-cases', title: 'Besondere Fälle', icon: Church },
    { id: 'tools', title: 'Tools & Vorlagen', icon: Wrench },
    { id: 'faq', title: 'Häufige Fragen', icon: HelpCircle },
    { id: 'checklist', title: 'Checkliste', icon: CheckCircle2 },
    { id: 'resources', title: 'Ressourcen', icon: BookOpen }
  ];

  const dioceses = [
    'Erzbistum Berlin', 'Bistum Dresden-Meißen', 'Erzbistum Hamburg', 
    'Bistum Hildesheim', 'Erzbistum Köln', 'Bistum Limburg',
    'Bistum Mainz', 'Erzbistum München und Freising', 'Bistum Osnabrück',
    'Erzbistum Paderborn', 'Bistum Rottenburg-Stuttgart', 'Bistum Trier'
  ];

  const kdgVsDsgvoComparison = [
    {
      aspect: 'Rechtsgrundlage',
      kdg: 'Kirchliches Selbstbestimmungsrecht nach Art. 140 GG i.V.m. Art. 137 WRV',
      dsgvo: 'EU-Verordnung 2016/679',
      difference: 'Verfassungsrechtlich garantierte Autonomie'
    },
    {
      aspect: 'Geltungsbereich',
      kdg: 'Katholische Kirche und ihre Einrichtungen',
      dsgvo: 'Alle Unternehmen und Organisationen in der EU',
      difference: 'Kirchenspezifischer Anwendungsbereich'
    },
    {
      aspect: 'Aufsichtsbehörde',
      kdg: 'Diözesaner Datenschutzbeauftragter',
      dsgvo: 'Staatliche Datenschutzbehörden',
      difference: 'Kircheninterne Aufsicht'
    },
    {
      aspect: 'Beichtgeheimnis',
      kdg: 'Absoluter Schutz nach can. 983 CIC',
      dsgvo: 'Keine explizite Regelung',
      difference: 'Sakramentaler Sonderschutz'
    },
    {
      aspect: 'Bußgelder',
      kdg: 'Bis zu 500.000 EUR',
      dsgvo: 'Bis zu 20 Mio. EUR oder 4% des Jahresumsatzes',
      difference: 'Geringere Maximalhöhe'
    }
  ];

  const implementationPhases = [
    {
      phase: 1,
      title: 'Vorbereitung & Analyse',
      duration: '2-3 Monate',
      tasks: [
        'Bestandsaufnahme aller Datenverarbeitungen',
        'Identifikation sakramentaler Daten',
        'Analyse der Organisationsstruktur',
        'Ressourcenplanung'
      ],
      deliverables: ['IST-Analyse', 'Projektplan', 'Risikoanalyse']
    },
    {
      phase: 2,
      title: 'Konzeption & Planung',
      duration: '3-4 Monate',
      tasks: [
        'Erstellung des Datenschutzkonzepts',
        'Definition von Prozessen',
        'Schulungskonzept entwickeln',
        'Technische Maßnahmen planen'
      ],
      deliverables: ['Datenschutzkonzept', 'Verfahrensverzeichnis', 'Schulungsplan']
    },
    {
      phase: 3,
      title: 'Umsetzung',
      duration: '6-8 Monate',
      tasks: [
        'Implementierung der Prozesse',
        'Durchführung von Schulungen',
        'Technische Umsetzung',
        'Dokumentation erstellen'
      ],
      deliverables: ['Dokumentierte Prozesse', 'Geschulte Mitarbeiter', 'Technische Systeme']
    },
    {
      phase: 4,
      title: 'Prüfung & Optimierung',
      duration: '2-3 Monate',
      tasks: [
        'Interne Audits durchführen',
        'Schwachstellen identifizieren',
        'Prozesse optimieren',
        'Kontinuierliche Verbesserung'
      ],
      deliverables: ['Audit-Berichte', 'Optimierungsplan', 'KVP-System']
    }
  ];

  const specialCases = [
    {
      title: 'Beichtgeheimnis',
      icon: Lock,
      description: 'Absoluter Schutz des sakramentalen Bekenntnisses',
      details: [
        'Unverbrüchliche Geheimhaltungspflicht nach can. 983 CIC',
        'Keine Ausnahmen für staatliche Behörden',
        'Keine digitale Dokumentation erlaubt',
        'Schutz erstreckt sich auf alle Beteiligten'
      ],
      bestPractices: [
        'Keine elektronische Erfassung',
        'Physische Trennung von anderen Daten',
        'Besondere Schulung der Seelsorger',
        'Klare Kommunikation an Gläubige'
      ]
    },
    {
      title: 'Matrikelbücher',
      icon: Book,
      description: 'Dauerhafte Aufbewahrung sakramentaler Register',
      details: [
        'Tauf-, Firm-, Ehe- und Sterberegister',
        'Unbegrenzte Aufbewahrungspflicht',
        'Besondere Sicherheitsanforderungen',
        'Digitalisierung unter strengen Auflagen'
      ],
      bestPractices: [
        'Sichere Verwahrung in Tresoren',
        'Zugriffskontrolle und Protokollierung',
        'Regelmäßige Sicherheitskopien',
        'Verschlüsselte Digitalisierung'
      ]
    },
    {
      title: 'Caritas-Einrichtungen',
      icon: Heart,
      description: 'Datenschutz in karitativen Diensten',
      details: [
        'Besonders sensible Gesundheitsdaten',
        'Soziale Notlagen dokumentieren',
        'Schweigepflicht vs. Dokumentationspflicht',
        'Zusammenarbeit mit staatlichen Stellen'
      ],
      bestPractices: [
        'Strenge Zweckbindung',
        'Minimale Datenweitergabe',
        'Besondere Einwilligungen',
        'Regelmäßige Löschungen'
      ]
    },
    {
      title: 'Kirchliche Schulen',
      icon: GraduationCap,
      description: 'Schülerdaten und Religionsunterricht',
      details: [
        'Minderjährigendatenschutz',
        'Religionszugehörigkeit als sensibles Datum',
        'Elternkommunikation',
        'Leistungsdokumentation'
      ],
      bestPractices: [
        'Elterliche Einwilligungen',
        'Getrennte Systeme für Noten/Religion',
        'Sichere Kommunikationskanäle',
        'Regelmäßige Datenlöschung'
      ]
    }
  ];

  const checklistItems = [
    {
      category: 'Organisatorische Maßnahmen',
      items: [
        { id: 'org1', text: 'Datenschutzbeauftragten bestellt', required: true },
        { id: 'org2', text: 'Datenschutzorganisation aufgebaut', required: true },
        { id: 'org3', text: 'Verantwortlichkeiten definiert', required: true },
        { id: 'org4', text: 'Prozesse dokumentiert', required: true },
        { id: 'org5', text: 'Schulungsplan erstellt', required: true },
        { id: 'org6', text: 'Notfallplan entwickelt', required: false }
      ]
    },
    {
      category: 'Rechtliche Grundlagen',
      items: [
        { id: 'legal1', text: 'Verarbeitungsverzeichnis erstellt', required: true },
        { id: 'legal2', text: 'Rechtsgrundlagen geprüft', required: true },
        { id: 'legal3', text: 'Einwilligungen aktualisiert', required: true },
        { id: 'legal4', text: 'Auftragsverarbeiter geprüft', required: true },
        { id: 'legal5', text: 'Datenschutzerklärungen angepasst', required: true },
        { id: 'legal6', text: 'Löschkonzept implementiert', required: true }
      ]
    },
    {
      category: 'Technische Maßnahmen',
      items: [
        { id: 'tech1', text: 'Zugangskontrollen implementiert', required: true },
        { id: 'tech2', text: 'Verschlüsselung aktiviert', required: true },
        { id: 'tech3', text: 'Backup-Systeme eingerichtet', required: true },
        { id: 'tech4', text: 'Protokollierung aktiviert', required: true },
        { id: 'tech5', text: 'Firewall konfiguriert', required: true },
        { id: 'tech6', text: 'Penetrationstests durchgeführt', required: false }
      ]
    },
    {
      category: 'Sakramentale Besonderheiten',
      items: [
        { id: 'sac1', text: 'Beichtgeheimnis-Prozesse definiert', required: true },
        { id: 'sac2', text: 'Matrikelbuch-Sicherheit gewährleistet', required: true },
        { id: 'sac3', text: 'Sakramentendaten klassifiziert', required: true },
        { id: 'sac4', text: 'Zugriffe streng limitiert', required: true },
        { id: 'sac5', text: 'Physische Sicherheit geprüft', required: true },
        { id: 'sac6', text: 'Archivierungskonzept erstellt', required: true }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Gilt das KDG auch für kleine Pfarrgemeinden?',
      answer: 'Ja, das KDG gilt für alle kirchlichen Stellen unabhängig von ihrer Größe. Allerdings können die Anforderungen je nach Umfang der Datenverarbeitung variieren. Kleine Pfarreien können oft vereinfachte Verfahren nutzen.',
      category: 'Geltungsbereich'
    },
    {
      question: 'Wie wird das Beichtgeheimnis im KDG geschützt?',
      answer: 'Das Beichtgeheimnis genießt absoluten Schutz. Es dürfen keinerlei Aufzeichnungen über Beichtinhalte gemacht werden, weder digital noch analog. Dies gilt auch für statistische Zwecke.',
      category: 'Sakramente'
    },
    {
      question: 'Müssen Ehrenamtliche auch geschult werden?',
      answer: 'Ja, alle Personen, die personenbezogene Daten verarbeiten, müssen geschult werden. Dies gilt auch für Ehrenamtliche. Die Schulungen können jedoch an den Umfang ihrer Tätigkeit angepasst werden.',
      category: 'Schulung'
    },
    {
      question: 'Wie lange müssen Matrikeldaten aufbewahrt werden?',
      answer: 'Matrikeldaten (Taufe, Firmung, Ehe, Tod) müssen dauerhaft aufbewahrt werden. Sie unterliegen keiner Löschfrist, da sie kirchenrechtlich und historisch bedeutsam sind.',
      category: 'Aufbewahrung'
    },
    {
      question: 'Wer ist Aufsichtsbehörde für das KDG?',
      answer: 'Die Aufsicht über die Einhaltung des KDG obliegt dem diözesanen Datenschutzbeauftragten, nicht den staatlichen Datenschutzbehörden. Bei diözesanübergreifenden Fragen ist der Katholische Datenschutzbeauftragte zuständig.',
      category: 'Aufsicht'
    },
    {
      question: 'Können Bußgelder verhängt werden?',
      answer: 'Ja, bei Verstößen gegen das KDG können Bußgelder bis zu 500.000 EUR verhängt werden. Die Höhe richtet sich nach der Schwere des Verstoßes und der Größe der Einrichtung.',
      category: 'Sanktionen'
    }
  ];

  const quizQuestions = [
    {
      question: 'Welche Rechtsgrundlage hat das KDG?',
      options: [
        'EU-Datenschutzgrundverordnung',
        'Kirchliches Selbstbestimmungsrecht',
        'Bundesdatenschutzgesetz',
        'Landesrecht'
      ],
      correct: 1
    },
    {
      question: 'Wie hoch können Bußgelder nach KDG maximal sein?',
      options: [
        '100.000 EUR',
        '500.000 EUR',
        '1 Million EUR',
        '20 Millionen EUR'
      ],
      correct: 1
    },
    {
      question: 'Wer überwacht die Einhaltung des KDG?',
      options: [
        'Bundesdatenschutzbeauftragter',
        'EU-Kommission',
        'Diözesaner Datenschutzbeauftragter',
        'Landesdatenschutzbehörde'
      ],
      correct: 2
    },
    {
      question: 'Wie lange müssen Matrikeldaten aufbewahrt werden?',
      options: [
        '10 Jahre',
        '30 Jahre',
        '70 Jahre',
        'Dauerhaft'
      ],
      correct: 3
    },
    {
      question: 'Gilt das KDG auch für Caritas-Einrichtungen?',
      options: [
        'Nein, nur DSGVO',
        'Ja, vollumfänglich',
        'Nur teilweise',
        'Nur bei kirchlichen Trägern'
      ],
      correct: 1
    }
  ];

  const handleQuizAnswer = (answer: number) => {
    setQuizAnswers({ ...quizAnswers, [currentQuizQuestion]: answer.toString() });
    
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      // Calculate score
      let score = 0;
      Object.entries(quizAnswers).forEach(([questionIndex, answer]) => {
        if (parseInt(answer) === quizQuestions[parseInt(questionIndex)].correct) {
          score++;
        }
      });
      setQuizScore(Math.round((score / quizQuestions.length) * 100));
      setIsQuizActive(false);
    }
  };

  const downloadResources = [
    {
      title: 'KDG Musterdatenschutzerklärung',
      type: 'Word-Vorlage',
      size: '245 KB',
      icon: FileText
    },
    {
      title: 'Verarbeitungsverzeichnis Pfarrei',
      type: 'Excel-Vorlage',
      size: '180 KB',
      icon: Database
    },
    {
      title: 'Schulungspräsentation KDG Basics',
      type: 'PowerPoint',
      size: '3.2 MB',
      icon: BookOpen
    },
    {
      title: 'Checkliste KDG-Audit',
      type: 'PDF',
      size: '420 KB',
      icon: CheckCircle2
    }
  ];

  return (
    <>
      <SEOHead
        title="KDG Leitfaden 2024 | Katholischer Datenschutz komplett erklärt"
        description="Umfassender KDG-Leitfaden für katholische Einrichtungen. ✓ Schritt-für-Schritt Anleitung ✓ Praxisbeispiele ✓ Vorlagen ✓ Checklisten. Jetzt KDG rechtssicher umsetzen!"
        keywords="KDG, Katholischer Datenschutz, KDG Leitfaden, Kirchendatenschutz, KDG Umsetzung, Beichtgeheimnis, Matrikelbücher, Sakramentenschutz"
        canonical="https://datenschutzbeauftragter.nrw/compliance/kdg"
      />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Header />
        
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-700">
          <motion.div 
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-600"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-40 left-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 mb-6">
                <Church className="h-4 w-4" />
                <span className="text-sm font-medium">Katholischer Datenschutz-Leitfaden</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                KDG Compliance Guide 2024
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Der umfassende Leitfaden zum Kirchlichen Datenschutzgesetz für katholische Einrichtungen
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
                <Badge variant="outline" className="px-4 py-2 text-base">
                  <Clock className="h-4 w-4 mr-2" />
                  45 Min. Lesezeit
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  <Calendar className="h-4 w-4 mr-2" />
                  Januar 2024
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  <Shield className="h-4 w-4 mr-2" />
                  Von Experten geprüft
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Landmark className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">27 Bistümer</h3>
                  <p className="text-gray-600 dark:text-gray-400">Für alle deutschen Diözesen</p>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">12.000+ Pfarreien</h3>
                  <p className="text-gray-600 dark:text-gray-400">Praxiserprobte Lösungen</p>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">100% Rechtssicher</h3>
                  <p className="text-gray-600 dark:text-gray-400">KDG-konform garantiert</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-7xl pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <List className="h-5 w-5" />
                  Inhaltsverzeichnis
                </h3>
                
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 group",
                        activeSection === item.id
                          ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                      )}
                    >
                      <item.icon className={cn(
                        "h-4 w-4 transition-transform",
                        activeSection === item.id && "scale-110"
                      )} />
                      <span className="flex-1">{item.title}</span>
                      {readingSections.has(item.id) && (
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                      )}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Lesefortschritt</span>
                        <span className="font-medium">{Math.round(readingProgress)}%</span>
                      </div>
                      <Progress value={readingProgress} className="h-2" />
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.print()}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Als PDF speichern
                    </Button>
                  </div>
                </div>
              </Card>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-12">
              {/* Overview Section */}
              <section data-section="overview" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <BookOpen className="h-8 w-8 text-amber-600" />
                      Übersicht zum KDG
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('overview')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('overview') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-6">
                      Das Gesetz über den Kirchlichen Datenschutz (KDG) ist die datenschutzrechtliche Grundlage 
                      für die Datenverarbeitung in der katholischen Kirche in Deutschland. Es basiert auf dem 
                      verfassungsrechtlich garantierten Selbstbestimmungsrecht der Kirchen und steht gleichrangig 
                      neben der DSGVO.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <Card className="p-6 bg-amber-50 dark:bg-amber-950/20">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-amber-600" />
                          Ziele des KDG
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Schutz personenbezogener Daten in kirchlichen Einrichtungen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Wahrung des Beichtgeheimnisses und sakramentaler Daten</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                            <span>Balance zwischen Transparenz und kirchlicher Autonomie</span>
                          </li>
                        </ul>
                      </Card>

                      <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Users className="h-5 w-5 text-yellow-600" />
                          Betroffene Einrichtungen
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Building2 className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <span>Bistümer und Diözesanverwaltungen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Church className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <span>Pfarreien und Kirchengemeinden</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Heart className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <span>Caritas und kirchliche Sozialeinrichtungen</span>
                          </li>
                        </ul>
                      </Card>
                    </div>

                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl my-8">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-600" />
                        Wichtiger Hinweis
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Das KDG gilt seit dem 24. Mai 2018 und wurde zuletzt 2021 novelliert. 
                        Es ist für alle katholischen Einrichtungen in Deutschland verbindlich und 
                        ersetzt die staatlichen Datenschutzgesetze im kirchlichen Bereich.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* History Section */}
              <section data-section="history" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <Clock className="h-8 w-8 text-amber-600" />
                      Geschichte & Entwicklung
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('history')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('history') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="space-y-8">
                    <div className="relative">
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300 dark:bg-amber-600"></div>
                      
                      {[
                        { year: '2018', title: 'Inkrafttreten des KDG', description: 'Zeitgleich mit der DSGVO tritt das KDG in Kraft' },
                        { year: '2019', title: 'Erste Anpassungen', description: 'Praxiserfahrungen führen zu ersten Klarstellungen' },
                        { year: '2021', title: 'Novellierung', description: 'Umfassende Überarbeitung und Anpassung an neue Anforderungen' },
                        { year: '2023', title: 'Digitalisierung', description: 'Verstärkte Regelungen für digitale Sakramentenverwaltung' },
                        { year: '2024', title: 'Aktuelle Fassung', description: 'Weitere Präzisierungen und Best Practices etabliert' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative flex items-start gap-6 mb-8"
                        >
                          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center z-10">
                            <span className="font-bold text-amber-700 dark:text-amber-400">{item.year}</span>
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </section>

              {/* Requirements Section */}
              <section data-section="requirements" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <Target className="h-8 w-8 text-amber-600" />
                      Zentrale Anforderungen
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('requirements')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('requirements') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <Tabs defaultValue="grundsaetze" className="space-y-6">
                    <TabsList className="grid grid-cols-1 md:grid-cols-4 h-auto">
                      <TabsTrigger value="grundsaetze" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700">
                        <Scale className="h-4 w-4 mr-2" />
                        Grundsätze
                      </TabsTrigger>
                      <TabsTrigger value="rechte" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700">
                        <Users className="h-4 w-4 mr-2" />
                        Betroffenenrechte
                      </TabsTrigger>
                      <TabsTrigger value="pflichten" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700">
                        <FileText className="h-4 w-4 mr-2" />
                        Pflichten
                      </TabsTrigger>
                      <TabsTrigger value="tom" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-700">
                        <Shield className="h-4 w-4 mr-2" />
                        TOM
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="grundsaetze" className="space-y-4">
                      <h3 className="text-xl font-bold mb-4">Datenschutzgrundsätze nach KDG</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { title: 'Rechtmäßigkeit', desc: 'Verarbeitung nur mit Rechtsgrundlage oder Einwilligung' },
                          { title: 'Zweckbindung', desc: 'Daten nur für festgelegte, eindeutige Zwecke' },
                          { title: 'Datenminimierung', desc: 'Auf das notwendige Maß beschränkt' },
                          { title: 'Richtigkeit', desc: 'Daten müssen sachlich richtig und aktuell sein' },
                          { title: 'Speicherbegrenzung', desc: 'Löschung nach Zweckerfüllung' },
                          { title: 'Integrität', desc: 'Schutz vor Verlust und Missbrauch' }
                        ].map((item, index) => (
                          <Card key={index} className="p-4">
                            <h4 className="font-semibold mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="rechte" className="space-y-4">
                      <h3 className="text-xl font-bold mb-4">Betroffenenrechte im kirchlichen Kontext</h3>
                      <div className="space-y-4">
                        {[
                          { right: 'Auskunftsrecht', desc: 'Betroffene können Auskunft über ihre Daten verlangen', special: 'Ausnahme: Beichtgeheimnis' },
                          { right: 'Berichtigungsrecht', desc: 'Korrektur unrichtiger Daten', special: 'Besonders wichtig bei Matrikeldaten' },
                          { right: 'Löschungsrecht', desc: 'Unter bestimmten Voraussetzungen', special: 'Nicht bei Matrikeldaten und kanonischen Pflichten' },
                          { right: 'Widerspruchsrecht', desc: 'Bei berechtigtem Interesse', special: 'Eingeschränkt bei seelsorglichen Aufgaben' }
                        ].map((item, index) => (
                          <Card key={index} className="p-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-lg mb-2">{item.right}</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">{item.desc}</p>
                                <Badge variant="outline" className="text-xs">
                                  <AlertCircle className="h-3 w-3 mr-1" />
                                  {item.special}
                                </Badge>
                              </div>
                              <CheckCircle2 className="h-6 w-6 text-green-600" />
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="pflichten" className="space-y-4">
                      <h3 className="text-xl font-bold mb-4">Pflichten der Verantwortlichen</h3>
                      <div className="space-y-6">
                        <Card className="p-6 bg-amber-50 dark:bg-amber-950/20">
                          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-amber-600" />
                            Dokumentationspflichten
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Verarbeitungsverzeichnis führen
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Datenschutz-Folgenabschätzungen
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Löschkonzept erstellen
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Auftragsverarbeitung dokumentieren
                            </li>
                          </ul>
                        </Card>

                        <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20">
                          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5 text-yellow-600" />
                            Organisatorische Pflichten
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Datenschutzbeauftragten bestellen
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Mitarbeiter schulen
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Meldepflichten beachten
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              Datenschutzkultur etablieren
                            </li>
                          </ul>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="tom" className="space-y-4">
                      <h3 className="text-xl font-bold mb-4">Technische und Organisatorische Maßnahmen</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6">
                          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-blue-600" />
                            Technische Maßnahmen
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <Lock className="h-4 w-4 text-blue-600 mt-1" />
                              <div>
                                <p className="font-medium">Zutrittskontrolle</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Physischer Schutz von Serverräumen</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Key className="h-4 w-4 text-blue-600 mt-1" />
                              <div>
                                <p className="font-medium">Zugangskontrolle</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Benutzerauthentifizierung</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <Database className="h-4 w-4 text-blue-600 mt-1" />
                              <div>
                                <p className="font-medium">Zugriffskontrolle</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Berechtigungskonzepte</p>
                              </div>
                            </li>
                          </ul>
                        </Card>

                        <Card className="p-6">
                          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Settings className="h-5 w-5 text-green-600" />
                            Organisatorische Maßnahmen
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <Users className="h-4 w-4 text-green-600 mt-1" />
                              <div>
                                <p className="font-medium">Personalmaßnahmen</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Verpflichtung auf Datengeheimnis</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <FileText className="h-4 w-4 text-green-600 mt-1" />
                              <div>
                                <p className="font-medium">Verfahrensdokumentation</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Prozesse beschreiben</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-green-600 mt-1" />
                              <div>
                                <p className="font-medium">Notfallmanagement</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Datenpannen-Prozess</p>
                              </div>
                            </li>
                          </ul>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </Card>
              </section>

              {/* Comparison Section */}
              <section data-section="comparison" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <Scale className="h-8 w-8 text-amber-600" />
                      KDG vs. DSGVO
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('comparison')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('comparison') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-amber-200 dark:border-amber-700">
                          <th className="text-left p-4 font-bold">Aspekt</th>
                          <th className="text-left p-4 font-bold text-amber-600">KDG</th>
                          <th className="text-left p-4 font-bold text-blue-600">DSGVO</th>
                          <th className="text-left p-4 font-bold">Unterschied</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kdgVsDsgvoComparison.map((item, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="p-4 font-medium">{item.aspect}</td>
                            <td className="p-4 text-sm">{item.kdg}</td>
                            <td className="p-4 text-sm">{item.dsgvo}</td>
                            <td className="p-4">
                              <Badge variant="outline" className="text-xs">
                                {item.difference}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Info className="h-5 w-5 text-amber-600" />
                      Wichtige Erkenntnis
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Das KDG ist keine bloße Kopie der DSGVO, sondern berücksichtigt die besonderen 
                      Bedürfnisse und verfassungsrechtlichen Grundlagen der katholischen Kirche. 
                      Die kirchliche Selbstverwaltung ermöglicht eigene Datenschutzregelungen, die 
                      jedoch ein gleichwertiges Schutzniveau wie die DSGVO gewährleisten müssen.
                    </p>
                  </div>
                </Card>
              </section>

              {/* Implementation Section */}
              <section data-section="implementation" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <Settings className="h-8 w-8 text-amber-600" />
                      Implementierung
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('implementation')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('implementation') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="space-y-8">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">4-Phasen-Modell zur KDG-Umsetzung</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Die strukturierte Einführung des KDG erfolgt idealerweise in vier aufeinander 
                        aufbauenden Phasen über einen Zeitraum von 12-18 Monaten.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {implementationPhases.map((phase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="p-6 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-6">
                              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                                {phase.phase}
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                  <div>
                                    <h4 className="text-xl font-bold mb-1">{phase.title}</h4>
                                    <Badge variant="outline">
                                      <Clock className="h-3 w-3 mr-1" />
                                      {phase.duration}
                                    </Badge>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <h5 className="font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400">Hauptaufgaben</h5>
                                    <ul className="space-y-1">
                                      {phase.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="flex items-start gap-2 text-sm">
                                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                                          <span>{task}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-semibold mb-2 text-sm text-gray-600 dark:text-gray-400">Ergebnisse</h5>
                                    <ul className="space-y-1">
                                      {phase.deliverables.map((deliverable, delIndex) => (
                                        <li key={delIndex} className="flex items-start gap-2 text-sm">
                                          <FileText className="h-4 w-4 text-amber-600 mt-0.5" />
                                          <span>{deliverable}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                <Progress value={(phase.phase / 4) * 100} className="h-2" />
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    <Card className="p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-amber-600" />
                        Praxis-Tipp
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Beginnen Sie mit einer Pilotpfarrei oder -einrichtung, um Erfahrungen zu sammeln 
                        und das Konzept zu verfeinern, bevor Sie es auf die gesamte Diözese ausrollen.
                      </p>
                    </Card>
                  </div>
                </Card>
              </section>

              {/* Special Cases Section */}
              <section data-section="special-cases" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <Church className="h-8 w-8 text-amber-600" />
                      Besondere Fälle im kirchlichen Datenschutz
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('special-cases')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('special-cases') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {specialCases.map((case_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                                <case_.icon className="h-8 w-8 text-amber-600" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">{case_.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{case_.description}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Info className="h-4 w-4 text-blue-600" />
                                Besonderheiten
                              </h4>
                              <ul className="space-y-2">
                                {case_.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                    <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                Best Practices
                              </h4>
                              <ul className="space-y-2">
                                {case_.bestPractices.map((practice, practiceIndex) => (
                                  <li key={practiceIndex} className="flex items-start gap-2 text-sm">
                                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                                    <span>{practice}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </section>

              {/* Tools Section */}
              <section data-section="tools" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <Wrench className="h-8 w-8 text-amber-600" />
                      Tools & Vorlagen
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('tools')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('tools') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      Nutzen Sie unsere praxiserprobten Vorlagen und Tools für die KDG-Umsetzung 
                      in Ihrer kirchlichen Einrichtung.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {downloadResources.map((resource, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                              <resource.icon className="h-6 w-6 text-amber-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{resource.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {resource.type} • {resource.size}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                      Premium-Paket
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Erhalten Sie Zugang zu über 50 weiteren Vorlagen, interaktiven Checklisten 
                      und unserem KDG-Compliance-Tool mit automatischer Dokumentenerstellung.
                    </p>
                    <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                      <Crown className="h-4 w-4 mr-2" />
                      Premium-Zugang anfordern
                    </Button>
                  </div>
                </Card>
              </section>

              {/* FAQ Section */}
              <section data-section="faq" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <HelpCircle className="h-8 w-8 text-amber-600" />
                      Häufige Fragen
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('faq')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('faq') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <Card 
                        key={index} 
                        className="overflow-hidden hover:shadow-md transition-all duration-300"
                      >
                        <button
                          onClick={() => setExpandedFaqs(prev => {
                            const newSet = new Set(prev);
                            if (newSet.has(index)) {
                              newSet.delete(index);
                            } else {
                              newSet.add(index);
                            }
                            return newSet;
                          })}
                          className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                                  <HelpCircle className="h-5 w-5 text-amber-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg mb-1">{faq.question}</h4>
                                  <Badge variant="outline" className="text-xs">
                                    {faq.category}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <ChevronDown className={cn(
                              "h-5 w-5 text-gray-400 transition-transform",
                              expandedFaqs.has(index) && "transform rotate-180"
                            )} />
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {expandedFaqs.has(index) && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 pt-0">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    ))}
                  </div>
                </Card>
              </section>

              {/* Checklist Section */}
              <section data-section="checklist" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <CheckCircle2 className="h-8 w-8 text-amber-600" />
                      KDG-Umsetzungs-Checkliste
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('checklist')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('checklist') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Überprüfen Sie den Umsetzungsstand Ihrer KDG-Compliance
                      </p>
                      <Badge variant="outline" className="text-sm">
                        <Target className="h-4 w-4 mr-1" />
                        24 Anforderungen
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {checklistItems.map((category, categoryIndex) => (
                      <Card key={categoryIndex} className="p-6">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                          {categoryIndex === 0 && <Building2 className="h-5 w-5 text-amber-600" />}
                          {categoryIndex === 1 && <Gavel className="h-5 w-5 text-amber-600" />}
                          {categoryIndex === 2 && <Shield className="h-5 w-5 text-amber-600" />}
                          {categoryIndex === 3 && <Church className="h-5 w-5 text-amber-600" />}
                          {category.category}
                        </h3>
                        
                        <div className="space-y-3">
                          {category.items.map((item) => (
                            <label 
                              key={item.id} 
                              className="flex items-start gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                            >
                              <input 
                                type="checkbox" 
                                className="mt-1 h-4 w-4 text-amber-600 rounded focus:ring-amber-500"
                              />
                              <div className="flex-1">
                                <span className="font-medium">{item.text}</span>
                                {item.required && (
                                  <Badge variant="outline" className="ml-2 text-xs">
                                    Pflicht
                                  </Badge>
                                )}
                              </div>
                            </label>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Checkliste als PDF exportieren
                    </Button>
                  </div>
                </Card>
              </section>

              {/* Quiz Section */}
              <section className="scroll-mt-24 mb-8">
                <Card className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                      <Brain className="h-8 w-8 text-amber-600" />
                      Testen Sie Ihr KDG-Wissen
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      5 Fragen zum katholischen Datenschutz
                    </p>
                  </div>

                  {!isQuizActive && quizScore === null && (
                    <div className="text-center">
                      <Button 
                        onClick={() => {
                          setIsQuizActive(true);
                          setCurrentQuizQuestion(0);
                          setQuizAnswers({});
                        }}
                        className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Quiz starten
                      </Button>
                    </div>
                  )}

                  {isQuizActive && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">
                          Frage {currentQuizQuestion + 1} von {quizQuestions.length}
                        </Badge>
                        <Progress 
                          value={(currentQuizQuestion / quizQuestions.length) * 100} 
                          className="w-32 h-2"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">
                          {quizQuestions[currentQuizQuestion].question}
                        </h3>
                        
                        <div className="space-y-3">
                          {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="w-full justify-start text-left p-4 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                              onClick={() => handleQuizAnswer(index)}
                            >
                              <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                              {option}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {quizScore !== null && (
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 text-white">
                        <div>
                          <div className="text-4xl font-bold">{quizScore}%</div>
                          <div className="text-sm">Ergebnis</div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {quizScore >= 80 ? 'Hervorragend!' : quizScore >= 60 ? 'Gut gemacht!' : 'Weiter lernen!'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {quizScore >= 80 
                            ? 'Sie kennen sich sehr gut mit dem KDG aus!'
                            : quizScore >= 60 
                            ? 'Sie haben solide Grundkenntnisse im KDG.'
                            : 'Vertiefen Sie Ihr Wissen mit unserem Leitfaden.'}
                        </p>
                      </div>
                      
                      <Button 
                        onClick={() => {
                          setQuizScore(null);
                          setIsQuizActive(false);
                          setCurrentQuizQuestion(0);
                          setQuizAnswers({});
                        }}
                        variant="outline"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Quiz wiederholen
                      </Button>
                    </div>
                  )}
                </Card>
              </section>

              {/* Resources Section */}
              <section data-section="resources" className="scroll-mt-24">
                <Card className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                      <BookOpen className="h-8 w-8 text-amber-600" />
                      Weiterführende Ressourcen
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark('resources')}
                    >
                      <Bookmark className={cn(
                        "h-5 w-5",
                        bookmarkedSections.includes('resources') && "fill-amber-600 text-amber-600"
                      )} />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <LinkIcon className="h-5 w-5 text-amber-600" />
                        Offizielle Quellen
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="flex items-center gap-2 text-amber-600 hover:text-amber-700">
                            <ExternalLink className="h-4 w-4" />
                            Katholischer Datenschutz Deutschland
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 text-amber-600 hover:text-amber-700">
                            <ExternalLink className="h-4 w-4" />
                            KDG Gesetzestext (aktuelle Fassung)
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center gap-2 text-amber-600 hover:text-amber-700">
                            <ExternalLink className="h-4 w-4" />
                            Arbeitshilfen der Deutschen Bischofskonferenz
                          </a>
                        </li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-amber-600" />
                        Schulungen & Seminare
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 text-amber-600 mt-1" />
                          <div>
                            <p className="font-medium">KDG-Grundlagenschulung</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Nächster Termin: 15. März 2024</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 text-amber-600 mt-1" />
                          <div>
                            <p className="font-medium">Datenschutzbeauftragte Zertifizierung</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">5-tägiger Intensivkurs</p>
                          </div>
                        </li>
                      </ul>
                    </Card>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                        <MessageSquare className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">Persönliche Beratung gewünscht?</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Unsere KDG-Experten unterstützen Sie bei der individuellen Umsetzung 
                          in Ihrer kirchlichen Einrichtung.
                        </p>
                        <Link to="/contact?source=kdg-guide">
                          <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
                            <Phone className="h-4 w-4 mr-2" />
                            Beratungsgespräch vereinbaren
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Diocese Selector */}
              <Card className="p-8 mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  Diözesanspezifische Informationen
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Wählen Sie Ihr Bistum:</label>
                    <select 
                      className="w-full p-3 border rounded-lg dark:bg-gray-800"
                      value={selectedDiocese}
                      onChange={(e) => setSelectedDiocese(e.target.value)}
                    >
                      <option value="">Bitte wählen...</option>
                      {dioceses.map((diocese) => (
                        <option key={diocese} value={diocese}>{diocese}</option>
                      ))}
                    </select>
                  </div>
                  
                  {selectedDiocese && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg"
                    >
                      <p className="text-sm">
                        <strong>{selectedDiocese}:</strong> Kontaktieren Sie Ihren diözesanen 
                        Datenschutzbeauftragten für spezifische Richtlinien und Unterstützung.
                      </p>
                    </motion.div>
                  )}
                </div>
              </Card>
            </main>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-3">
          <Button 
            size="sm" 
            variant="outline"
            className="shadow-lg bg-white dark:bg-gray-800"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowLeft className="h-4 w-4 rotate-90" />
          </Button>
          
          <Button 
            size="sm"
            className="shadow-lg bg-gradient-to-r from-amber-600 to-yellow-600 text-white"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default KdgGuide;