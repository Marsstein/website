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
  ShieldCheck,
  Lock, 
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
  BarChart3,
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
  Shuffle,
  Repeat,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  VolumeIcon,
  SpeakerIcon,
  MicIcon,
  CameraIcon,
  VideoIcon,
  ImageIcon,
  FileIcon,
  FolderIcon,
  ArchiveIcon,
  Trash,
  Gauge,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PrivacyPreservingAI = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [implementationProgress, setImplementationProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'technologies', label: 'Technologien', icon: ShieldCheck },
    { id: 'implementation', label: 'Implementation', icon: Code },
    { id: 'frameworks', label: 'Frameworks', icon: Layers },
    { id: 'use-cases', label: 'Use Cases', icon: Bot },
    { id: 'compliance', label: 'Compliance', icon: CheckSquare }
  ];

  const privacyTechnologies = [
    {
      name: 'Differential Privacy',
      category: 'Mathematische Privatheit',
      description: 'Mathematisch bewiesene Privatheitsgarantien durch kontrollierten Rausch',
      mechanisms: [
        'Laplace Mechanism',
        'Gaussian Mechanism', 
        'Exponential Mechanism',
        'Composition Theorems'
      ],
      useCases: [
        'Statistische Auswertungen',
        'Modelltraining mit Privatheit',
        'Syndatische Datengenerierung',
        'Query-Response Systeme'
      ],
      advantages: [
        'Mathematische Garantien',
        'Quantifizierbare Privacy Loss',
        'Kompositionsfähigkeit',
        'Robustheit gegen Angriffe'
      ],
      challenges: [
        'Utility-Privacy Trade-off',
        'Parameter-Tuning komplex',
        'Erklärbarkeit schwierig',
        'Skalierungsprobleme'
      ],
      maturityLevel: 'Production Ready',
      icon: Gauge,
      color: 'from-blue-500 to-cyan-500',
      compliance: ['DSGVO Art. 25', 'EU AI Act', 'CCPA']
    },
    {
      name: 'Homomorphic Encryption',
      category: 'Verschlüsselung',
      description: 'Berechnungen auf verschlüsselten Daten ohne Entschlüsselung',
      mechanisms: [
        'Partially Homomorphic (PHE)',
        'Somewhat Homomorphic (SHE)',
        'Fully Homomorphic (FHE)',
        'Leveled FHE'
      ],
      useCases: [
        'Sichere Cloud-Computing',
        'Private Set Intersection',
        'Sichere Multi-Party Computation',
        'Encrypted Search'
      ],
      advantages: [
        'Daten bleiben verschlüsselt',
        'Starke Sicherheitsgarantien',
        'Flexible Berechnungen',
        'Vertrauenslose Umgebungen'
      ],
      challenges: [
        'Hohe Rechenkosten',
        'Komplexe Implementation',
        'Begrenzte Operationen',
        'Noise Management'
      ],
      maturityLevel: 'Research/Early Production',
      icon: Lock,
      color: 'from-purple-500 to-pink-500',
      compliance: ['DSGVO Art. 32', 'ISO 27001', 'FIPS 140-2']
    },
    {
      name: 'Secure Multi-Party Computation',
      category: 'Verteilte Berechnung',
      description: 'Gemeinsame Berechnungen ohne Preisgabe privater Inputs',
      mechanisms: [
        'Secret Sharing',
        'Garbled Circuits',
        'Oblivious Transfer',
        'Zero-Knowledge Proofs'
      ],
      useCases: [
        'Federated Learning',
        'Private Benchmarking',
        'Sichere Auktionen',
        'Joint Data Analysis'
      ],
      advantages: [
        'Keine zentrale Vertrauensinstanz',
        'Mathematische Sicherheit',
        'Flexible Protokolle',
        'Skalierbare Lösungen'
      ],
      challenges: [
        'Kommunikationsoverhead',
        'Komplexe Koordination',
        'Semi-honest Assumptions',
        'Fault Tolerance'
      ],
      maturityLevel: 'Production Ready',
      icon: Network,
      color: 'from-green-500 to-teal-500',
      compliance: ['GDPR Art. 28', 'EU AI Act', 'SOC 2']
    },
    {
      name: 'Federated Learning',
      category: 'Dezentrales Lernen',
      description: 'Modelltraining ohne zentrale Datensammlung',
      mechanisms: [
        'Horizontal Federation',
        'Vertical Federation',
        'Federated Transfer Learning',
        'Secure Aggregation'
      ],
      useCases: [
        'Mobile Keyboard Prediction',
        'Healthcare Collaboration',
        'Financial Risk Modeling',
        'Cross-Silo Analytics'
      ],
      advantages: [
        'Daten bleiben lokal',
        'Reduzierte Datenübertragung',
        'Personalisierte Modelle',
        'Regulatory Compliance'
      ],
      challenges: [
        'Non-IID Daten',
        'Communication Bottlenecks',
        'Model Poisoning',
        'Convergence Issues'
      ],
      maturityLevel: 'Production Ready',
      icon: GitBranch,
      color: 'from-orange-500 to-red-500',
      compliance: ['DSGVO Art. 5', 'HIPAA', 'PCI DSS']
    },
    {
      name: 'Synthetic Data Generation',
      category: 'Datenersatz',
      description: 'Künstlich generierte Daten mit statistischen Eigenschaften der Originaldaten',
      mechanisms: [
        'Generative Adversarial Networks',
        'Variational Autoencoders',
        'Bayesian Networks',
        'Diffusion Models'
      ],
      useCases: [
        'ML Model Training',
        'Testing und Development',
        'Data Sharing',
        'Augmentation'
      ],
      advantages: [
        'Keine echten Personendaten',
        'Unbegrenzte Verfügbarkeit',
        'Bias Reduction möglich',
        'Flexible Generierung'
      ],
      challenges: [
        'Utility Preservation',
        'Membership Inference',
        'Mode Collapse',
        'Evaluation Schwierigkeiten'
      ],
      maturityLevel: 'Production Ready',
      icon: Sparkles,
      color: 'from-indigo-500 to-purple-500',
      compliance: ['DSGVO Art. 6', 'EU AI Act', 'Medical Device Regulation']
    },
    {
      name: 'Zero-Knowledge Proofs',
      category: 'Kryptographische Beweise',
      description: 'Nachweis von Wissen ohne Preisgabe der Information selbst',
      mechanisms: [
        'zk-SNARKs',
        'zk-STARKs',
        'Bulletproofs',
        'Interactive Proofs'
      ],
      useCases: [
        'Identity Verification',
        'Compliance Nachweise',
        'Private Credentials',
        'Blockchain Privacy'
      ],
      advantages: [
        'Vollständige Privatheit',
        'Verifizierbare Nachweise',
        'Skalierbare Verification',
        'Composability'
      ],
      challenges: [
        'Setup Komplexität',
        'Trusted Setup Requirements',
        'Proof Generation Costs',
        'Limited Expressiveness'
      ],
      maturityLevel: 'Research/Early Production',
      icon: Eye,
      color: 'from-yellow-500 to-orange-500',
      compliance: ['eIDAS', 'GDPR Art. 12', 'Know Your Customer']
    }
  ];

  const implementationGuide = [
    {
      phase: 'Assessment & Planning',
      duration: '2-4 Wochen',
      description: 'Analyse der Anforderungen und Technologieauswahl',
      tasks: [
        'Privacy Requirements Analysis',
        'Threat Modeling durchführen',
        'Technologie-Evaluation',
        'ROI und Feasibility Assessment',
        'Roadmap und Budget Planning'
      ],
      deliverables: [
        'Privacy Requirements Document',
        'Technology Assessment Report',
        'Implementation Roadmap',
        'Budget und Resource Plan'
      ],
      tools: [
        'LINDDUN Methodology',
        'Privacy Impact Assessment Tools',
        'Technology Comparison Matrix',
        'Cost-Benefit Analysis Templates'
      ],
      icon: Search,
      stakeholders: ['Privacy Officer', 'Security Team', 'ML Engineers', 'Legal']
    },
    {
      phase: 'Proof of Concept',
      duration: '4-8 Wochen', 
      description: 'Prototypische Implementation der gewählten Technologie',
      tasks: [
        'Development Environment Setup',
        'Core Algorithm Implementation',
        'Initial Testing mit Testdaten',
        'Performance Benchmarking',
        'Privacy Metrics Validation'
      ],
      deliverables: [
        'Working Prototype',
        'Performance Benchmarks',
        'Privacy Analysis Report',
        'Technical Documentation'
      ],
      tools: [
        'PySyft Framework',
        'TensorFlow Privacy',
        'Microsoft SEAL',
        'OpenMined Tools'
      ],
      icon: Code,
      stakeholders: ['ML Engineers', 'Security Researchers', 'Data Scientists']
    },
    {
      phase: 'Security & Privacy Validation',
      duration: '3-6 Wochen',
      description: 'Umfassende Sicherheits- und Privatheitsvalidierung',
      tasks: [
        'Security Penetration Testing',
        'Privacy Attack Simulation',
        'Formal Verification (falls möglich)',
        'Compliance Gap Analysis',
        'Third-party Security Audit'
      ],
      deliverables: [
        'Security Assessment Report',
        'Privacy Analysis Results',
        'Compliance Certification',
        'Audit Findings und Recommendations'
      ],
      tools: [
        'Privacy Meter',
        'ML Privacy Meter',
        'Adversarial Testing Frameworks',
        'Formal Verification Tools'
      ],
      icon: Shield,
      stakeholders: ['Security Auditors', 'Privacy Experts', 'Compliance Team']
    },
    {
      phase: 'Production Implementation',
      duration: '8-16 Wochen',
      description: 'Vollständige Integration in Produktionsumgebung',
      tasks: [
        'Scalable Architecture Design',
        'Production-grade Implementation',
        'Monitoring und Logging Setup',
        'Deployment Pipeline Integration',
        'User Training und Documentation'
      ],
      deliverables: [
        'Production System',
        'Monitoring Dashboard',
        'Deployment Documentation',
        'User Training Materials'
      ],
      tools: [
        'Kubernetes Deployment',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Monitoring Solutions'
      ],
      icon: Zap,
      stakeholders: ['DevOps Team', 'ML Engineers', 'Product Teams']
    },
    {
      phase: 'Monitoring & Optimization',
      duration: 'Ongoing',
      description: 'Kontinuierliche Überwachung und Verbesserung',
      tasks: [
        'Privacy Metrics Monitoring',
        'Performance Optimization',
        'Regular Security Reviews',
        'Compliance Monitoring',
        'Technology Updates und Patches'
      ],
      deliverables: [
        'Monitoring Reports',
        'Optimization Recommendations',
        'Compliance Status Updates',
        'Technology Roadmap Updates'
      ],
      tools: [
        'Privacy Monitoring Tools',
        'Performance Analytics',
        'Compliance Dashboards',
        'Automated Testing Suites'
      ],
      icon: Activity,
      stakeholders: ['Operations Team', 'Privacy Officer', 'Security Team']
    }
  ];

  const practicalUseCases = [
    {
      title: 'Healthcare Data Collaboration',
      industry: 'Healthcare',
      challenge: 'Krankenhaus-übergreifende KI-Modelle ohne Patientendaten-Sharing',
      solution: 'Federated Learning mit Differential Privacy',
      technologies: ['Federated Learning', 'Differential Privacy', 'Secure Aggregation'],
      benefits: [
        'HIPAA/DSGVO konforme Zusammenarbeit',
        'Bessere Modellqualität durch mehr Daten',
        'Lokale Datenkontrolle bleibt erhalten',
        'Reduzierte Regulatory Risks'
      ],
      challenges: [
        'Heterogene IT-Infrastrukturen',
        'Verschiedene Datenformate',
        'Unterschiedliche Compliance-Anforderungen'
      ],
      outcome: '15% bessere Diagnosegenauigkeit bei vollem Datenschutz',
      icon: Heart,
      roi: 'High',
      timeframe: '6-12 Monate'
    },
    {
      title: 'Financial Fraud Detection',
      industry: 'Financial Services',
      challenge: 'Bank-übergreifende Betrugserkennung ohne Kundendaten-Austausch',
      solution: 'Secure Multi-Party Computation für gemeinsame Risikomodelle',
      technologies: ['Secure Multi-Party Computation', 'Zero-Knowledge Proofs', 'Homomorphic Encryption'],
      benefits: [
        'Verbesserte Betrugserkennung',
        'Keine Preisgabe von Kundendaten',
        'Regulatory Compliance',
        'Branchenweite Collaboration'
      ],
      challenges: [
        'Hohe Rechenkosten',
        'Komplexe Koordination zwischen Banken',
        'Regulatory Approval Prozesse'
      ],
      outcome: '40% Reduktion von False Positives bei 25% besserer Detection Rate',
      icon: CreditCard,
      roi: 'Very High',
      timeframe: '12-18 Monate'
    },
    {
      title: 'Smart City Analytics',
      industry: 'Public Sector',
      challenge: 'Bürger-freundliche Datenanalyse für Stadtplanung',
      solution: 'Differential Privacy für aggregierte Statistiken',
      technologies: ['Differential Privacy', 'Synthetic Data Generation', 'Local Differential Privacy'],
      benefits: [
        'Transparente Datennutzung',
        'Bürgerdaten bleiben privat',
        'Bessere Stadtplanung durch Datenanalyse',
        'Öffentliches Vertrauen'
      ],
      challenges: [
        'Balancing Utility vs Privacy',
        'Öffentliche Akzeptanz',
        'Legacy System Integration'
      ],
      outcome: 'Öffentliche Akzeptanz von 85% für datenbasierte Stadtplanung',
      icon: Building2,
      roi: 'Medium',
      timeframe: '6-9 Monate'
    },
    {
      title: 'Automotive Data Sharing',
      industry: 'Automotive',
      challenge: 'Fahrzeugdaten für autonomes Fahren ohne Privacy-Verletzung',
      solution: 'Federated Learning mit Edge Computing',
      technologies: ['Federated Learning', 'Edge Computing', 'Differential Privacy'],
      benefits: [
        'Bessere autonome Fahrfunktionen',
        'Lokale Datenverarbeitung',
        'Reduzierte Datenübertragung',
        'Privacy-by-Design'
      ],
      challenges: [
        'Edge Computing Constraints',
        'Heterogene Fahrzeugflotten',
        'Real-time Requirements'
      ],
      outcome: '30% Verbesserung der Fahrfunktionen bei vollständiger Lokalisierung',
      icon: Car,
      roi: 'High',
      timeframe: '9-15 Monate'
    }
  ];

  const complianceFramework = [
    {
      regulation: 'DSGVO/GDPR',
      relevantArticles: ['Art. 5 (Datenminimierung)', 'Art. 25 (Privacy by Design)', 'Art. 32 (Sicherheit)'],
      requirements: [
        'Datenminimierung implementieren',
        'Privacy by Design Principles',
        'Angemessene technische Maßnahmen',
        'Nachweis der Compliance'
      ],
      ppaiSolutions: [
        'Differential Privacy für Minimierung',
        'PETs als Privacy by Design',
        'Verschlüsselung und Secure Computation',
        'Auditable Privacy Mechanisms'
      ],
      complianceLevel: 'Full Compliance'
    },
    {
      regulation: 'EU AI Act',
      relevantArticles: ['Art. 10 (Datenqualität)', 'Art. 15 (Genauigkeit)', 'Art. 9 (Risikomanagement)'],
      requirements: [
        'Robuste Datenverarbeitung',
        'Bias Detection und Mitigation',
        'Kontinuierliches Risikomanagement',
        'Transparenz über Systemfunktionen'
      ],
      ppaiSolutions: [
        'Privacy-Preserving Data Quality Checks',
        'Federated Bias Testing',
        'Private Risk Assessment',
        'Explainable Privacy Mechanisms'
      ],
      complianceLevel: 'Enables Compliance'
    },
    {
      regulation: 'CCPA/CPRA',
      relevantArticles: ['Sec. 1798.100 (Consumer Rights)', 'Sec. 1798.130 (Business Obligations)'],
      requirements: [
        'Transparenz über Datenverarbeitung',
        'Consumer Choice und Control',
        'Secure Data Processing',
        'Right to Delete'
      ],
      ppaiSolutions: [
        'Private Analytics mit Transparency',
        'User-controlled Privacy Parameters',
        'Secure Multi-Party Computation',
        'Cryptographic Deletion'
      ],
      complianceLevel: 'Enhanced Compliance'
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
    const totalTasks = implementationGuide.reduce((acc, phase) => acc + phase.tasks.length, 0);
    setImplementationProgress((newChecked.size / totalTasks) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-teal-900">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-2xl">
                <ShieldCheck className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy-Preserving AI Technologien
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Moderne Technologien für datenschutzfreundliche KI-Entwicklung: Von Differential Privacy 
              bis Homomorphic Encryption - Ihr Guide für sichere und compliant AI-Systeme
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Lock className="w-4 h-4 mr-2" />
                6 Core Technologies
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Shield className="w-4 h-4 mr-2" />
                Production Ready
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Code className="w-4 h-4 mr-2" />
                Implementation Guides
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
              <h2 className="text-3xl font-bold mb-4">Privacy-Preserving AI (PPAI)</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Technologien und Methoden, die es ermöglichen, KI-Systeme zu entwickeln und zu betreiben, 
                ohne dabei die Privatsphäre der zugrundeliegenden Daten zu kompromittieren.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    Datenschutz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mathematisch bewiesene Privatheitsgarantien bei vollem 
                    Funktionsumfang der KI-Anwendungen.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-blue-500" />
                    Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Erfüllung von DSGVO, EU AI Act und anderen Datenschutz-
                    regulierungen durch technische Maßnahmen.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="w-5 h-5 text-purple-500" />
                    Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sichere Datenkooperation zwischen Organisationen ohne 
                    Preisgabe sensibler Informationen.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technology Landscape */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  PPAI Technology Landscape
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {privacyTechnologies.map((tech, index) => (
                    <div key={tech.name} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className={cn(
                          "p-2 rounded-lg bg-gradient-to-br",
                          tech.color
                        )}>
                          <tech.icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {tech.maturityLevel}
                        </Badge>
                      </div>
                      <h4 className="font-semibold mb-1">{tech.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{tech.category}</p>
                      <p className="text-sm text-gray-700">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* When to use PPAI */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Wann sollten Sie PPAI einsetzen?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Starke Indikatoren:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Sensible Personendaten (Gesundheit, Finanzen)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Multi-Party Datenkooperation erforderlich</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Strenge Regulatory Requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Öffentlicher Sektor / kritische Infrastruktur</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-700">Zu berücksichtigen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Erhöhte Komplexität in Development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Performance Trade-offs möglich</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Höhere Implementierungskosten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Spezialisierte Expertise erforderlich</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technologies Tab */}
          <TabsContent value="technologies" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Core PPAI Technologies</h2>
              <p className="text-lg text-gray-600">
                Detaillierte Übersicht der wichtigsten Privacy-Preserving AI Technologien
              </p>
            </div>

            <div className="space-y-6">
              {privacyTechnologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "p-3 rounded-xl bg-gradient-to-br text-white",
                              tech.color
                            )}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-2xl">{tech.name}</CardTitle>
                                <Badge variant="outline">{tech.maturityLevel}</Badge>
                              </div>
                              <p className="text-gray-600">{tech.description}</p>
                              <Badge className="mt-2">{tech.category}</Badge>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(`tech-${index}`)}
                          >
                            <ChevronDown className={cn(
                              "w-4 h-4 transition-transform",
                              expandedSection === `tech-${index}` && "rotate-180"
                            )} />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      {expandedSection === `tech-${index}` && (
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <Settings className="w-4 h-4" />
                                  Mechanismen
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {tech.mechanisms.map((mechanism, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      {mechanism}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <Target className="w-4 h-4" />
                                  Use Cases
                                </h4>
                                <ul className="space-y-1">
                                  {tech.useCases.map((useCase, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                      {useCase}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <Scale className="w-4 h-4" />
                                  Compliance
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {tech.compliance.map((comp, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {comp}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <ThumbsUp className="w-4 h-4 text-green-500" />
                                  Vorteile
                                </h4>
                                <ul className="space-y-1">
                                  {tech.advantages.map((advantage, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{advantage}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                                  Herausforderungen
                                </h4>
                                <ul className="space-y-1">
                                  {tech.challenges.map((challenge, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <X className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{challenge}</span>
                                    </li>
                                  ))}
                                </ul>
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

          {/* Implementation Tab */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
              <p className="text-lg text-gray-600">
                5-Phasen Ansatz für erfolgreiche PPAI Implementation
              </p>
            </div>

            {/* Progress Tracking */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Implementation Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Gesamt-Fortschritt</span>
                      <span>{Math.round(implementationProgress)}%</span>
                    </div>
                    <Progress value={implementationProgress} className="h-3" />
                  </div>
                  <div className="text-sm text-gray-600">
                    {checkedItems.size} von {implementationGuide.reduce((acc, phase) => acc + phase.tasks.length, 0)} Tasks abgeschlossen
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {implementationGuide.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={phase.phase} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <Icon className="w-8 h-8 text-blue-600" />
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
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <CheckSquare className="w-4 h-4" />
                                Tasks
                              </h4>
                              <div className="space-y-2">
                                {phase.tasks.map((task, taskIndex) => {
                                  const taskId = `${index}-${taskIndex}`;
                                  return (
                                    <div key={taskIndex} className="flex items-start gap-3">
                                      <button
                                        onClick={() => toggleChecked(taskId)}
                                        className="flex-shrink-0 mt-0.5"
                                      >
                                        {checkedItems.has(taskId) ? (
                                          <CheckSquare className="w-4 h-4 text-green-500" />
                                        ) : (
                                          <Square className="w-4 h-4 text-gray-400" />
                                        )}
                                      </button>
                                      <span className={cn(
                                        "text-sm",
                                        checkedItems.has(taskId) ? "line-through text-gray-500" : "text-gray-700"
                                      )}>
                                        {task}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Stakeholders
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {phase.stakeholders.map((stakeholder, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {stakeholder}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Deliverables
                              </h4>
                              <ul className="space-y-1">
                                {phase.deliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <FileCheck className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Wrench className="w-4 h-4" />
                                Tools
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {phase.tools.map((tool, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Real-World Use Cases</h2>
              <p className="text-lg text-gray-600">
                Erfolgreiche PPAI Implementierungen aus verschiedenen Branchen
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {practicalUseCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={useCase.title} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-2">
                            {useCase.industry}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant={useCase.roi === 'Very High' ? 'default' : useCase.roi === 'High' ? 'secondary' : 'outline'}>
                              ROI: {useCase.roi}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                      <p className="text-sm text-gray-600 mb-4">
                        <strong>Challenge:</strong> {useCase.challenge}
                      </p>
                      <p className="text-sm text-gray-700 mb-4">
                        <strong>Solution:</strong> {useCase.solution}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Technologien
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {useCase.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <ThumbsUp className="w-4 h-4 text-green-500" />
                            Benefits
                          </h4>
                          <ul className="space-y-1">
                            {useCase.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-2 border-t">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Timeline:</span>
                            <span className="font-medium">{useCase.timeframe}</span>
                          </div>
                          <div className="mt-2 p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-green-600" />
                              <span className="text-sm font-medium text-green-800">Outcome:</span>
                            </div>
                            <p className="text-sm text-green-700 mt-1">{useCase.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Regulatory Compliance</h2>
              <p className="text-lg text-gray-600">
                Wie PPAI bei der Erfüllung regulatorischer Anforderungen hilft
              </p>
            </div>

            <div className="space-y-6">
              {complianceFramework.map((regulation, index) => (
                <Card key={regulation.regulation} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{regulation.regulation}</CardTitle>
                        <Badge className={cn(
                          regulation.complianceLevel === 'Full Compliance' ? 'bg-green-500' :
                          regulation.complianceLevel === 'Enhanced Compliance' ? 'bg-blue-500' : 'bg-orange-500'
                        )}>
                          {regulation.complianceLevel}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(`compliance-${index}`)}
                      >
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          expandedSection === `compliance-${index}` && "rotate-180"
                        )} />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {expandedSection === `compliance-${index}` && (
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Relevante Artikel:</h4>
                          <div className="space-y-2 mb-4">
                            {regulation.relevantArticles.map((article, idx) => (
                              <Badge key={idx} variant="outline" className="mr-2 mb-2">
                                {article}
                              </Badge>
                            ))}
                          </div>
                          
                          <h4 className="font-semibold mb-3">Anforderungen:</h4>
                          <ul className="space-y-2">
                            {regulation.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">PPAI Lösungsansätze:</h4>
                          <ul className="space-y-2">
                            {regulation.ppaiSolutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Next Steps */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Nächste Schritte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Bereit für den Einstieg in Privacy-Preserving AI? Hier sind Ihre nächsten Schritte:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      <Download className="w-4 h-4 mr-2" />
                      PPAI Assessment Tool
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Implementation Guide
                    </Button>
                    <Button variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Expert Consultation
                    </Button>
                    <Button variant="outline">
                      <Code className="w-4 h-4 mr-2" />
                      Technical Workshop
                    </Button>
                  </div>
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

export default PrivacyPreservingAI;