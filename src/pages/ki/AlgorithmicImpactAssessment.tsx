import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3,
  AlertTriangle, 
  Shield, 
  FileText, 
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Activity,
  Brain,
  Lock,
  Database,
  Eye,
  UserCheck,
  Clipboard,
  FileCheck,
  Zap,
  Settings,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Target,
  Lightbulb,
  Smartphone,
  Wifi,
  Server,
  Code,
  Award,
  Scale,
  Fingerprint,
  Key,
  Monitor,
  Tablet,
  Headphones,
  Mail,
  Phone,
  Search,
  Package,
  Truck,
  AlertCircle,
  Cookie,
  MousePointer,
  BarChart,
  MessageSquare,
  Layers,
  GitBranch,
  RefreshCw,
  Upload,
  HardDrive,
  Network,
  Cpu,
  MemoryStick,
  Webhook,
  Terminal,
  Boxes,
  Construction,
  Wrench,
  Bot,
  CircuitBoard,
  Sparkles,
  Ban,
  CheckSquare,
  X,
  ChevronDown,
  ExternalLink,
  Timer,
  PieChart,
  LineChart,
  ShieldCheck,
  FileX,
  UserX,
  Square,
  ThumbsUp,
  ThumbsDown,
  Plus,
  Minus,
  Play,
  Pause,
  RotateCcw,
  Save,
  Edit3,
  Trash2,
  Copy,
  HelpCircle,
  Info,
  Filter,
  SortAsc,
  List,
  Grid,
  ChevronRight,
  ChevronUp,
  Link as LinkIcon,
  Hash,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  ShoppingCart,
  CreditCard,
  Home,
  Car,
  Plane,
  Camera,
  Music,
  Video,
  Image,
  Mic,
  Speaker,
  Volume2,
  VolumeX,
  Rss,
  Bookmark,
  Flag,
  Share,
  Print,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors,
  PenTool,
  Brush,
  Eraser,
  Palette,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List as ListIcon,
  Indent,
  Outdent,
  Quote,
  Code2,
  Terminal as TerminalIcon,
  GitCommit,
  GitMerge,
  GitPullRequest,
  GitBranch as GitBranchIcon,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  FilePlus,
  FileQuestion,
  FileWarning,
  FileX as FileXIcon,
  Paperclip,
  Link2,
  ExternalLink as ExternalLinkIcon,
  Archive,
  Trash,
  TrashIcon,
  Delete,
  Backspace,
  Enter,
  Space,
  Tab,
  Shift,
  Command,
  Option,
  Control,
  Escape,
  CapsLock,
  ScrollLock,
  NumLock,
  Insert,
  Home as HomeIcon,
  End,
  PageUp,
  PageDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  MousePointer as MousePointerIcon,
  Move,
  Grab,
  Hand,
  Crosshair,
  Cursor,
  PointerIcon,
  Select,
  Lasso,
  Wand,
  Wand2,
  Magic,
  Sparkle,
  Star as StarIcon,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Umbrella,
  Tornado,
  Hurricane,
  Thermometer,
  Droplets,
  Wind,
  Gauge as GaugeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const AlgorithmicImpactAssessment = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [assessmentProgress, setAssessmentProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'methodology', label: 'Methodik', icon: BarChart3 },
    { id: 'framework', label: 'Assessment Framework', icon: Layers },
    { id: 'tools', label: 'Tools & Templates', icon: Wrench },
    { id: 'examples', label: 'Praxisbeispiele', icon: Bot },
    { id: 'compliance', label: 'Compliance Check', icon: CheckSquare }
  ];

  const assessmentPhases = [
    {
      phase: 'Scoping & Preparation',
      duration: '1-2 Wochen',
      description: 'Definition des Bewertungsumfangs und Vorbereitung',
      objectives: [
        'System und Anwendungsbereich definieren',
        'Stakeholder identifizieren',
        'Datenquellen und -typen erfassen',
        'Rechtliche Grundlagen analysieren'
      ],
      deliverables: [
        'Scoping Document',
        'Stakeholder Map',
        'Data Inventory',
        'Legal Baseline'
      ],
      icon: Search,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      phase: 'Impact Analysis',
      duration: '2-3 Wochen',
      description: 'Systematische Bewertung der algorithmischen Auswirkungen',
      objectives: [
        'Betroffene Grundrechte identifizieren',
        'Fairness und Diskriminierungsrisiken bewerten',
        'Transparenz und Erklärbarkeit prüfen',
        'Autonomie und menschliche Kontrolle analysieren'
      ],
      deliverables: [
        'Rights Impact Matrix',
        'Fairness Assessment',
        'Transparency Report',
        'Human Agency Analysis'
      ],
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: 'Risk Assessment',
      duration: '1-2 Wochen',
      description: 'Quantifizierung und Priorisierung identifizierter Risiken',
      objectives: [
        'Wahrscheinlichkeit von Schäden bewerten',
        'Schwere potentieller Auswirkungen einschätzen',
        'Vulnerable Gruppen identifizieren',
        'Risikomatrix erstellen'
      ],
      deliverables: [
        'Risk Register',
        'Vulnerability Analysis',
        'Risk Matrix',
        'Priority Rankings'
      ],
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500'
    },
    {
      phase: 'Mitigation Planning',
      duration: '2-4 Wochen',
      description: 'Entwicklung von Schutzmaßnahmen und Kontrollen',
      objectives: [
        'Technische Schutzmaßnahmen definieren',
        'Organisatorische Kontrollen etablieren',
        'Monitoring und Audit-Prozesse entwerfen',
        'Incident Response Pläne entwickeln'
      ],
      deliverables: [
        'Mitigation Strategy',
        'Control Framework',
        'Monitoring Plan',
        'Response Procedures'
      ],
      icon: Shield,
      color: 'from-green-500 to-teal-500'
    },
    {
      phase: 'Implementation & Monitoring',
      duration: 'Ongoing',
      description: 'Umsetzung der Maßnahmen und kontinuierliche Überwachung',
      objectives: [
        'Schutzmaßnahmen implementieren',
        'Monitoring-Systeme einrichten',
        'Regular Reviews durchführen',
        'Stakeholder Communication'
      ],
      deliverables: [
        'Implementation Plan',
        'Monitoring Dashboard',
        'Review Schedule',
        'Communication Plan'
      ],
      icon: Activity,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const assessmentFramework = [
    {
      dimension: 'Grundrechte-Impact',
      description: 'Bewertung der Auswirkungen auf fundamentale Rechte',
      criteria: [
        'Recht auf Privatsphäre und Datenschutz',
        'Recht auf Nicht-Diskriminierung',
        'Recht auf faire Verfahren',
        'Meinungsfreiheit und Information',
        'Versammlungsfreiheit',
        'Recht auf Arbeit und faire Beschäftigung'
      ],
      assessmentMethod: 'Qualitative Bewertung mit Stakeholder-Input',
      scale: 'Niedrig → Mittel → Hoch → Sehr Hoch',
      icon: Scale,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      dimension: 'Fairness & Bias',
      description: 'Analyse von Verzerrungen und Diskriminierungspotential',
      criteria: [
        'Statistische Parität',
        'Gleichheit der Chancen',
        'Kalibrierung zwischen Gruppen',
        'Individuelle Fairness',
        'Kontextuelle Fairness',
        'Dynamische Fairness über Zeit'
      ],
      assessmentMethod: 'Quantitative Metriken + qualitative Analyse',
      scale: 'Bias-frei → Gering → Moderat → Signifikant',
      icon: Users,
      color: 'bg-green-50 border-green-200'
    },
    {
      dimension: 'Transparenz & Erklärbarkeit',
      description: 'Bewertung der Nachvollziehbarkeit und Transparenz',
      criteria: [
        'Algorithmische Transparenz',
        'Entscheidungsbegründungen',
        'Datennutzung und -quellen',
        'Modellerklärungen',
        'Prozess-Transparenz',
        'Kommunikation an Betroffene'
      ],
      assessmentMethod: 'Technische Tests + User Experience Bewertung',
      scale: 'Transparent → Teilweise → Undurchsichtig → Black Box',
      icon: Eye,
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      dimension: 'Menschliche Kontrolle',
      description: 'Grad der menschlichen Aufsicht und Interventionsmöglichkeiten',
      criteria: [
        'Meaningful Human Control',
        'Human-in-the-Loop Integration',
        'Override-Mechanismen',
        'Eskalationsverfahren',
        'Qualifikation der Entscheider',
        'Verantwortungsverteilung'
      ],
      assessmentMethod: 'Prozessanalyse + Stakeholder-Interviews',
      scale: 'Vollautomatisch → Unterstützt → Überwacht → Kontrolliert',
      icon: UserCheck,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      dimension: 'Robustheit & Sicherheit',
      description: 'Widerstandsfähigkeit gegen Manipulationen und Ausfälle',
      criteria: [
        'Adversariale Robustheit',
        'Datenqualität und -integrität',
        'Modellstabilität',
        'Cybersecurity-Maßnahmen',
        'Fail-Safe Mechanismen',
        'Recovery-Prozesse'
      ],
      assessmentMethod: 'Technische Tests + Penetration Testing',
      scale: 'Robust → Stabil → Anfällig → Kritisch',
      icon: Shield,
      color: 'bg-red-50 border-red-200'
    },
    {
      dimension: 'Proportionalität',
      description: 'Verhältnismäßigkeit zwischen Nutzen und Risiken',
      criteria: [
        'Zweck-Mittel-Verhältnis',
        'Geeignetheit der Maßnahme',
        'Erforderlichkeit des Systems',
        'Angemessenheit der Eingriffe',
        'Alternative Lösungsansätze',
        'Kosten-Nutzen-Verhältnis'
      ],
      assessmentMethod: 'Multi-Kriterien-Analyse',
      scale: 'Verhältnismäßig → Grenzwertig → Unverhältnismäßig',
      icon: Scale,
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  const practicalExamples = [
    {
      title: 'HR Recruiting-KI Assessment',
      sector: 'Human Resources',
      system: 'Automatisierte Bewerbungsvorauswahl',
      keyFindings: [
        'Erhöhtes Bias-Risiko bei unterrepräsentierten Gruppen',
        'Limitierte Transparenz der Auswahlkriterien',
        'Fehlende menschliche Überprüfung bei Ablehnungen'
      ],
      mitigations: [
        'Bias-Detection Algorithmen implementiert',
        'Explainable AI Features hinzugefügt',
        'Mandatory Human Review für finale Entscheidungen'
      ],
      outcome: 'Risiko von Hoch auf Mittel reduziert',
      icon: Users,
      riskLevel: 'Mittel',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Kredit-Scoring Assessment',
      sector: 'Financial Services',
      system: 'Automatisierte Kreditwürdigkeitsprüfung',
      keyFindings: [
        'Potentielle sozioökonomische Diskriminierung',
        'Intransparente Scoring-Faktoren',
        'Hohe Auswirkung auf Lebensqualität'
      ],
      mitigations: [
        'Fairness-Constraints in Modelltraining',
        'Detaillierte Scorekarten für Antragsteller',
        'Beschwerdemechanismus etabliert'
      ],
      outcome: 'Compliance mit regulatorischen Anforderungen',
      icon: CreditCard,
      riskLevel: 'Hoch',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Healthcare Diagnostic AI',
      sector: 'Healthcare',
      system: 'KI-unterstützte Diagnosestellung',
      keyFindings: [
        'Kritische Auswirkungen auf Patientengesundheit',
        'Bias in Trainingsdaten verschiedener Populationen',
        'Bedarf an medizinischer Supervision'
      ],
      mitigations: [
        'Diverse Trainingsdaten integriert',
        'Uncertainty Quantification implementiert',
        'Ärztliche Endkontrolle verpflichtend'
      ],
      outcome: 'Erfolgreiche Zulassung als Medizinprodukt',
      icon: Heart,
      riskLevel: 'Sehr Hoch',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Smart City Traffic Management',
      sector: 'Public Services',
      system: 'Verkehrssteuerung und -überwachung',
      keyFindings: [
        'Überwachung öffentlicher Räume',
        'Potentielle Bewegungsprofile',
        'Auswirkungen auf Mobilitätsrechte'
      ],
      mitigations: [
        'Privacy-by-Design Prinzipien',
        'Anonymisierung von Bewegungsdaten',
        'Transparente Datennutzungsrichtlinien'
      ],
      outcome: 'Öffentliche Akzeptanz durch Transparenz',
      icon: Car,
      riskLevel: 'Mittel',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const complianceChecklist = [
    {
      category: 'Legal Compliance',
      items: [
        'DSGVO Artikel 35 Datenschutz-Folgenabschätzung durchgeführt',
        'EU AI Act Risikoklassifizierung dokumentiert',
        'Nationale Gesetze und Regelungen berücksichtigt',
        'Branchenspezifische Regulierungen eingehalten',
        'Internationale Standards (ISO/IEC) angewendet'
      ]
    },
    {
      category: 'Technical Assessment',
      items: [
        'Bias-Testing mit repräsentativen Datensätzen',
        'Robustheit gegen adversarielle Angriffe geprüft',
        'Explainability Features implementiert',
        'Performance Monitoring eingerichtet',
        'Fail-Safe Mechanismen getestet'
      ]
    },
    {
      category: 'Stakeholder Engagement',
      items: [
        'Betroffene Gruppen konsultiert',
        'Expertenreviews durchgeführt',
        'Öffentliche Konsultation (falls erforderlich)',
        'Interne Stakeholder-Workshops',
        'Continuous Feedback Mechanismen'
      ]
    },
    {
      category: 'Documentation',
      items: [
        'Assessment Report erstellt',
        'Risk Register dokumentiert',
        'Mitigation Plan ausgearbeitet',
        'Monitoring Procedures definiert',
        'Review Schedule etabliert'
      ]
    },
    {
      category: 'Governance',
      items: [
        'Verantwortlichkeiten klar definiert',
        'Approval Processes etabliert',
        'Incident Response Procedures',
        'Regular Review Cycles',
        'Audit Trail Mechanisms'
      ]
    }
  ];

  const toggleExpanded = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleChecked = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
    
    // Update progress
    const totalItems = complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
    setAssessmentProgress((newChecked.size / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl">
                <BarChart3 className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Algorithmic Impact Assessment
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Systematische Bewertung der Auswirkungen algorithmischer Systeme auf Grundrechte, 
              Fairness und gesellschaftliche Teilhabe nach EU AI Act und DSGVO
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Sparkles className="w-4 h-4 mr-2" />
                DSGVO Art. 35 Ready
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Shield className="w-4 h-4 mr-2" />
                6 Assessment Dimensionen
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <BarChart3 className="w-4 h-4 mr-2" />
                Praxis-Templates
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 h-auto p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium hidden sm:inline">
                      {tab.label}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Algorithmic Impact Assessment (AIA)</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ein systematischer Ansatz zur Bewertung der gesellschaftlichen und individuellen 
                Auswirkungen algorithmischer Entscheidungssysteme.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Risikomanagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Frühzeitige Identifikation und Minderung von Risiken für 
                    Grundrechte und gesellschaftliche Teilhabe.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-green-500" />
                    Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Erfüllung rechtlicher Anforderungen nach EU AI Act, 
                    DSGVO und branchenspezifischen Regelungen.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    Stakeholder Trust
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Aufbau von Vertrauen durch Transparenz und 
                    verantwortungsvolle KI-Entwicklung.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* When to conduct AIA */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Wann ist ein AIA erforderlich?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Rechtliche Verpflichtungen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">High-Risk AI Systeme nach EU AI Act</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">DSGVO Art. 35 Datenschutz-Folgenabschätzung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Branchenspezifische Regulierungen</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Best Practice Empfehlungen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Automatisierte Entscheidungen mit hohem Impact</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">KI-Systeme mit Bias-Potential</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Public Sector AI Deployments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Methodology Tab */}
          <TabsContent value="methodology" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">5-Phasen Methodik</h2>
              <p className="text-lg text-gray-600">
                Strukturierter Ansatz für umfassende Impact Assessments
              </p>
            </div>

            <div className="space-y-6">
              {assessmentPhases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "p-3 rounded-xl bg-gradient-to-br text-white",
                              phase.color
                            )}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline">Phase {index + 1}</Badge>
                                <Badge variant="secondary">{phase.duration}</Badge>
                              </div>
                              <CardTitle className="text-xl">{phase.phase}</CardTitle>
                              <p className="text-gray-600 mt-1">{phase.description}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(`phase-${index}`)}
                          >
                            <ChevronDown className={cn(
                              "w-4 h-4 transition-transform",
                              expandedSection === `phase-${index}` && "rotate-180"
                            )} />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      {expandedSection === `phase-${index}` && (
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Ziele
                              </h4>
                              <ul className="space-y-2">
                                {phase.objectives.map((objective, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Deliverables
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {phase.deliverables.map((deliverable, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {deliverable}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* Framework Tab */}
          <TabsContent value="framework" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Assessment Framework</h2>
              <p className="text-lg text-gray-600">
                6 Schlüsseldimensionen für umfassende Impact Bewertung
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {assessmentFramework.map((dimension, index) => {
                const Icon = dimension.icon;
                return (
                  <Card key={dimension.dimension} className={cn("h-full", dimension.color)}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <Badge variant="outline">
                          {index + 1}/6
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl mb-2">{dimension.dimension}</CardTitle>
                      <p className="text-gray-600 text-sm">{dimension.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Bewertungskriterien:</h4>
                          <ul className="space-y-1">
                            {dimension.criteria.slice(0, 3).map((criterion, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                                <span className="text-gray-600">{criterion}</span>
                              </li>
                            ))}
                            {dimension.criteria.length > 3 && (
                              <li className="text-xs text-gray-500">
                                +{dimension.criteria.length - 3} weitere...
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs font-medium text-gray-700">Methodik:</span>
                            <p className="text-xs text-gray-600">{dimension.assessmentMethod}</p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-gray-700">Bewertungsskala:</span>
                            <p className="text-xs text-gray-600">{dimension.scale}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Tools & Templates Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Tools & Templates</h2>
              <p className="text-lg text-gray-600">
                Praktische Hilfsmittel für Ihr Assessment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'AIA Questionnaire',
                  description: 'Strukturierter Fragebogen für systematische Bewertung',
                  type: 'Excel Template',
                  icon: Clipboard,
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Risk Assessment Matrix',
                  description: 'Quantitative Risikobewertung und Priorisierung',
                  type: 'Excel Template',
                  icon: BarChart3,
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Stakeholder Mapping',
                  description: 'Identifikation und Analyse relevanter Stakeholder',
                  type: 'Visio Template',
                  icon: Users,
                  color: 'from-green-500 to-teal-500'
                },
                {
                  title: 'Bias Testing Framework',
                  description: 'Strukturierte Tests für Fairness und Diskriminierung',
                  type: 'Python Toolkit',
                  icon: Code,
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Legal Compliance Checker',
                  description: 'Automatisierte Prüfung rechtlicher Anforderungen',
                  type: 'Web Tool',
                  icon: Scale,
                  color: 'from-indigo-500 to-blue-500'
                },
                {
                  title: 'Impact Report Generator',
                  description: 'Automatische Generierung strukturierter Reports',
                  type: 'Word Template',
                  icon: FileText,
                  color: 'from-yellow-500 to-orange-500'
                }
              ].map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card key={tool.title} className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className={cn(
                        "p-3 rounded-xl bg-gradient-to-br text-white w-fit mb-3",
                        tool.color
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{tool.type}</Badge>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Interactive Demo */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Interactive Assessment Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Testen Sie unser Assessment-Framework mit einem interaktiven Demo-System.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Play className="w-4 h-4 mr-2" />
                  Demo starten
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Praxisbeispiele</h2>
              <p className="text-lg text-gray-600">
                Reale Assessment-Fallstudien aus verschiedenen Branchen
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {practicalExamples.map((example, index) => {
                const Icon = example.icon;
                return (
                  <Card key={example.title} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "p-3 rounded-xl bg-gradient-to-br text-white",
                          example.color
                        )}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">
                            {example.sector}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <GaugeIcon className="w-3 h-3" />
                            <span className="text-xs font-medium">{example.riskLevel}</span>
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl mb-2">{example.title}</CardTitle>
                      <p className="text-sm text-gray-600 mb-4">{example.system}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Hauptbefunde
                          </h4>
                          <ul className="space-y-1">
                            {example.keyFindings.map((finding, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                                <span className="text-gray-700">{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            Maßnahmen
                          </h4>
                          <ul className="space-y-1">
                            {example.mitigations.map((mitigation, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{mitigation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-2 border-t">
                          <div className="flex items-center gap-2">
                            <ThumbsUp className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-blue-700">{example.outcome}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Compliance Check Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Compliance Checklist</h2>
              <p className="text-lg text-gray-600">
                Überprüfen Sie die Vollständigkeit Ihres Assessments
              </p>
            </div>

            {/* Progress Overview */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Assessment Fortschritt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Gesamt-Compliance</span>
                      <span>{Math.round(assessmentProgress)}%</span>
                    </div>
                    <Progress value={assessmentProgress} className="h-3" />
                  </div>
                  <div className="text-sm text-gray-600">
                    {checkedItems.size} von {complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0)} Punkten abgeschlossen
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist Categories */}
            <div className="space-y-4">
              {complianceChecklist.map((category, categoryIndex) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => {
                        const itemId = `${categoryIndex}-${itemIndex}`;
                        return (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <button
                              onClick={() => toggleChecked(itemId)}
                              className="flex-shrink-0 mt-0.5"
                            >
                              {checkedItems.has(itemId) ? (
                                <CheckSquare className="w-5 h-5 text-green-500" />
                              ) : (
                                <Square className="w-5 h-5 text-gray-400" />
                              )}
                            </button>
                            <span className={cn(
                              "text-sm",
                              checkedItems.has(itemId) ? "line-through text-gray-500" : "text-gray-700"
                            )}>
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Export Options */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Assessment Report Export
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Exportieren Sie Ihr vollständiges Assessment als strukturierten Report.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF Report
                  </Button>
                  <Button variant="outline">
                    <Code className="w-4 h-4 mr-2" />
                    JSON Export
                  </Button>
                  <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Speichern
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AlgorithmicImpactAssessment;