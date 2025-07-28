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
  Network,
  GitBranch, 
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
  RefreshCw,
  Upload,
  HardDrive,
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
  Shuffle,
  Repeat,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Gauge,
  AlertTriangle,
  Radio,
  Antenna,
  Radar,
  Satellite,
  CloudLightning,
  Cloud,
  CloudRain
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const FederatedLearningGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [simulationStep, setSimulationStep] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'federated-learning', label: 'Federated Learning', icon: Network },
    { id: 'differential-privacy', label: 'Differential Privacy', icon: Lock },
    { id: 'architecture', label: 'Architektur', icon: Layers },
    { id: 'implementation', label: 'Implementation', icon: Code },
    { id: 'use-cases', label: 'Use Cases', icon: Bot }
  ];

  const federatedLearningTypes = [
    {
      type: 'Horizontal Federated Learning',
      description: 'Gleiche Features, unterschiedliche Nutzer/Samples',
      scenario: 'Mehrere Organisationen mit ähnlichen Datenstrukturen',
      examples: [
        'Banken mit Kreditdaten',
        'Krankenhäuser mit Patientendaten',
        'Mobile Apps mit Nutzerdaten'
      ],
      advantages: [
        'Einfache Implementierung',
        'Effiziente Kommunikation',
        'Direkte Modell-Aggregation'
      ],
      challenges: [
        'Homogene Datenverteilung erforderlich',
        'Feature Alignment nötig',
        'Privacy Leakage durch Updates'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      complexity: 'Niedrig'
    },
    {
      type: 'Vertical Federated Learning',
      description: 'Gleiche Nutzer, unterschiedliche Features',
      scenario: 'Organisationen mit überlappenden Nutzerbasen',
      examples: [
        'Bank + E-Commerce (gleiche Kunden)',
        'Telco + Streaming Service',
        'Healthcare + Insurance'
      ],
      advantages: [
        'Reichere Feature-Sets',
        'Bessere Modellqualität',
        'Starke Privacy-Guarantien'
      ],
      challenges: [
        'Komplexe User-ID Alignment',
        'Private Set Intersection nötig',
        'Höhere Kommunikationskosten'
      ],
      icon: Layers,
      color: 'from-green-500 to-teal-500',
      complexity: 'Hoch'
    },
    {
      type: 'Federated Transfer Learning',
      description: 'Unterschiedliche Features und Nutzer',
      scenario: 'Organisationen mit verwandten aber verschiedenen Domänen',
      examples: [
        'Computer Vision über Branchen',
        'NLP für verschiedene Sprachen',
        'IoT Sensor Data Fusion'
      ],
      advantages: [
        'Maximale Flexibilität',
        'Domain Adaptation möglich',
        'Weniger Daten-Alignment nötig'
      ],
      challenges: [
        'Komplexe Modellarchitektur',
        'Transfer Learning Expertise nötig',
        'Schwierige Konvergenz'
      ],
      icon: GitBranch,
      color: 'from-purple-500 to-pink-500',
      complexity: 'Sehr Hoch'
    }
  ];

  const differentialPrivacyMechanisms = [
    {
      mechanism: 'Global Differential Privacy',
      description: 'Zentrale DP-Garantien durch Server-seitige Noise Addition',
      implementation: [
        'Server sammelt Updates',
        'Noise wird zentral hinzugefügt',
        'Aggregation mit DP-Garantien',
        'Globales Modell wird verteilt'
      ],
      advantages: [
        'Einfache Implementation',
        'Starke theoretische Garantien',
        'Zentrale Privacy Budget Kontrolle'
      ],
      disadvantages: [
        'Server sieht rohe Updates',
        'Einzelne Updates nicht geschützt',
        'Vertrauen in Server erforderlich'
      ],
      epsilonRange: '0.1 - 10',
      useCases: ['Statistische Queries', 'Model Training', 'Federated Analytics'],
      icon: Globe,
      privacyLevel: 'Mittel'
    },
    {
      mechanism: 'Local Differential Privacy',
      description: 'Client-seitige DP vor jeder Datenübertragung',
      implementation: [
        'Clients fügen lokalen Noise hinzu',
        'Nur verrauschte Daten verlassen Client',
        'Server aggregiert verrauschte Updates',
        'Starke lokale Privacy-Garantien'
      ],
      advantages: [
        'Stärkste Privacy-Garantien',
        'Kein Vertrauen in Server nötig',
        'Schutz vor Server Compromise'
      ],
      disadvantages: [
        'Höhere Noise Levels',
        'Schlechtere Model Utility',
        'Komplexere Client Logic'
      ],
      epsilonRange: '0.01 - 1',
      useCases: ['Sensitive Health Data', 'Financial Records', 'Personal Behavior'],
      icon: Smartphone,
      privacyLevel: 'Sehr Hoch'
    },
    {
      mechanism: 'Shuffle Differential Privacy',
      description: 'Hybrid-Ansatz mit anonymer Shuffle-Phase',
      implementation: [
        'Clients erzeugen multiple Nachrichten',
        'Shuffle-Server mischt anonym',
        'Analytics-Server erhält gemischte Daten',
        'Amplified Privacy durch Anonymität'
      ],
      advantages: [
        'Bessere Utility als LDP',
        'Starke Privacy-Garantien',
        'Privacy Amplification'
      ],
      disadvantages: [
        'Zusätzliche Infrastruktur nötig',
        'Timing Attack Vulnerabilities',
        'Komplexere Protokolle'
      ],
      epsilonRange: '0.1 - 5',
      useCases: ['Large Scale Analytics', 'Population Statistics', 'Trend Analysis'],
      icon: Shuffle,
      privacyLevel: 'Hoch'
    }
  ];

  const architectureComponents = [
    {
      component: 'Federation Server',
      responsibilities: [
        'Koordination der Teilnehmer',
        'Modell-Aggregation',
        'Privacy Budget Management',
        'Convergence Monitoring'
      ],
      technologies: ['TensorFlow Federated', 'FedML', 'PySyft Server'],
      scalability: 'Horizontal Scaling möglich',
      security: ['Secure Aggregation', 'Byzantine Fault Tolerance', 'Authentication'],
      icon: Server
    },
    {
      component: 'Client Participants',
      responsibilities: [
        'Lokales Model Training',
        'Gradient/Update Berechnung',
        'Differential Privacy Application',
        'Local Data Management'
      ],
      technologies: ['TensorFlow Lite', 'PyTorch Mobile', 'Edge Computing'],
      scalability: 'Tausende von Clients',
      security: ['Secure Enclaves', 'Local DP', 'Update Encryption'],
      icon: Smartphone
    },
    {
      component: 'Aggregation Layer',
      responsibilities: [
        'Sichere Update-Sammlung',
        'Privacy-Preserving Aggregation',
        'Byzantine Robustness',
        'Fairness Enforcement'
      ],
      technologies: ['Secure Multi-Party Computation', 'Homomorphic Encryption'],
      scalability: 'Adapter an Teilnehmerzahl',
      security: ['Cryptographic Protocols', 'Zero-Knowledge Proofs'],
      icon: Layers
    },
    {
      component: 'Privacy Engine',
      responsibilities: [
        'Differential Privacy Mechanisms',
        'Privacy Budget Tracking',
        'Noise Calibration',
        'Privacy Loss Accounting'
      ],
      technologies: ['Google DP Library', 'OpenDP', 'TensorFlow Privacy'],
      scalability: 'Per-Client und Global',
      security: ['Formal Privacy Guarantees', 'Audit Trails'],
      icon: Lock
    }
  ];

  const implementationFrameworks = [
    {
      framework: 'TensorFlow Federated (TFF)',
      vendor: 'Google',
      language: 'Python',
      features: [
        'High-level Federated Learning APIs',
        'Differential Privacy Integration',
        'Simulation Environment',
        'Production Deployment Support'
      ],
      advantages: [
        'Starke Community',
        'Umfassende Dokumentation',
        'Google Cloud Integration',
        'Research-grade Features'
      ],
      limitations: [
        'Steile Lernkurve',
        'TensorFlow Dependency',
        'Begrenzte Mobile Support'
      ],
      bestFor: ['Forschung', 'Prototyping', 'Google Cloud Deployments'],
      maturity: 'Production Ready',
      license: 'Apache 2.0',
      icon: Brain
    },
    {
      framework: 'FedML',
      vendor: 'FedML Inc',
      language: 'Python',
      features: [
        'Cross-Platform Support',
        'MLOps Integration',
        'Auto-ML Capabilities',
        'Edge Computing Optimization'
      ],
      advantages: [
        'Benutzerfreundliche APIs',
        'Multi-Backend Support',
        'Mobile-First Design',
        'Commercial Support'
      ],
      limitations: [
        'Kleinere Community',
        'Weniger Research Features',
        'Kommerzielle Lizenz für Production'
      ],
      bestFor: ['Production', 'Mobile Apps', 'IoT Deployments'],
      maturity: 'Production Ready',
      license: 'Apache 2.0 / Commercial',
      icon: Smartphone
    },
    {
      framework: 'PySyft',
      vendor: 'OpenMined',
      language: 'Python',
      features: [
        'Privacy-First Design',
        'Multi-Party Computation',
        'Homomorphic Encryption',
        'Blockchain Integration'
      ],
      advantages: [
        'Starker Privacy-Fokus',
        'Vielfältige PETs',
        'Open Source Community',
        'Flexible Architectures'
      ],
      limitations: [
        'Alpha/Beta Status',
        'Komplexe Setup',
        'Performance Overhead'
      ],
      bestFor: ['Research', 'Privacy-Critical Apps', 'Experimentation'],
      maturity: 'Alpha/Beta',
      license: 'Apache 2.0',
      icon: Shield
    },
    {
      framework: 'FATE',
      vendor: 'WeBank',
      language: 'Python',
      features: [
        'Industrial-Grade Platform',
        'Financial Services Focus',
        'Heterogeneous Learning',
        'Compliance Features'
      ],
      advantages: [
        'Production-bewährt',
        'Financial Industry Expertise',
        'Regulatory Compliance',
        'Enterprise Features'
      ],
      limitations: [
        'Weniger Dokumentation',
        'Banking Domain Bias',
        'Komplexe Architektur'
      ],
      bestFor: ['Financial Services', 'Enterprise', 'Regulated Industries'],
      maturity: 'Production Ready',
      license: 'Apache 2.0',
      icon: Building2
    }
  ];

  const practicalUseCases = [
    {
      title: 'Healthcare: COVID-19 Research Collaboration',
      industry: 'Healthcare',
      participants: '50+ Krankenhäuser weltweit',
      challenge: 'Entwicklung besserer COVID-19 Vorhersagemodelle ohne Patientendaten-Sharing',
      solution: {
        type: 'Horizontal Federated Learning',
        privacy: 'Differential Privacy (ε=1.0)',
        aggregation: 'FedAvg with Secure Aggregation',
        technology: 'TensorFlow Federated'
      },
      results: {
        modelAccuracy: '15% Verbesserung vs. lokale Modelle',
        privacyGarantees: 'Formale DP-Garantien mit ε=1.0',
        dataProtection: '100% - keine Rohdaten verlassen Krankenhäuser',
        deploymentTime: '3 Monate vom Konzept bis Production'
      },
      challenges: [
        'Heterogene IT-Infrastrukturen',
        'Verschiedene EHR-Systeme',
        'Regulatorische Compliance (HIPAA, DSGVO)',
        'Qualitätssicherung der lokalen Daten'
      ],
      outcomes: [
        'Bessere Früherkennung von schweren Verläufen',
        'Reduzierte Hospitalisierungsraten',
        'Neue Insights durch größere Datengrundlage',
        'Etablierung nachhaltiger Forschungskollaboration'
      ],
      icon: Heart,
      roi: 'Very High',
      complexity: 'High'
    },
    {
      title: 'Banking: Cross-Border Fraud Detection',
      industry: 'Financial Services',
      participants: '12 europäische Banken',
      challenge: 'Grenzüberschreitende Betrugserkennung ohne Kundendaten-Austausch',
      solution: {
        type: 'Vertical Federated Learning',
        privacy: 'Secure Multi-Party Computation + DP',
        aggregation: 'Private Set Intersection + Secure Aggregation',
        technology: 'Custom FATE Implementation'
      },
      results: {
        modelAccuracy: '40% weniger False Positives',
        privacyGarantees: 'Cryptographic guarantees + DP (ε=0.5)',
        dataProtection: '100% - nur verschlüsselte Updates',
        deploymentTime: '8 Monate inklusive Regulatory Approval'
      },
      challenges: [
        'Komplexe Regulatory Landscape',
        'Private Set Intersection at Scale',
        'Real-time Performance Requirements',
        'Inter-bank Coordination'
      ],
      outcomes: [
        'Deutlich verbesserte Betrugserkennung',
        'Reduzierte False Positive Rates',
        'Schnellere Cross-Border Investigations',
        'Neue Betrugsmuster identifiziert'
      ],
      icon: CreditCard,
      roi: 'Very High',
      complexity: 'Very High'
    },
    {
      title: 'Automotive: Autonomous Driving Improvement',
      industry: 'Automotive',
      participants: '5 OEMs + Tier 1 Suppliers',
      challenge: 'Verbesserung autonomer Fahrfunktionen ohne Sharing von Fahrzeugdaten',
      solution: {
        type: 'Horizontal FL + Transfer Learning',
        privacy: 'Local Differential Privacy (ε=0.8)',
        aggregation: 'FedAvg with Model Compression',
        technology: 'Custom Edge Computing Solution'
      },
      results: {
        modelAccuracy: '25% Verbesserung in Edge Cases',
        privacyGarantees: 'Local DP mit ε=0.8 per Vehicle',
        dataProtection: 'Vollständige Lokalisierung der Sensordaten',
        deploymentTime: '12 Monate für Production Rollout'
      },
      challenges: [
        'Edge Computing Constraints',
        'Heterogene Fahrzeugflotten',
        'Real-time Processing Requirements',
        'Over-the-Air Update Management'
      ],
      outcomes: [
        'Signifikant bessere Performance in Edge Cases',
        'Reduzierte Entwicklungszeiten',
        'Branchenweite Sicherheitsverbesserungen',
        'Neue Standards für Datenkooperation'
      ],
      icon: Car,
      roi: 'High',
      complexity: 'High'
    }
  ];

  const simulationSteps = [
    {
      step: 'Initialization',
      description: 'Globales Modell wird initialisiert und an alle Clients verteilt',
      participants: ['Federation Server'],
      action: 'Model Distribution',
      privacy: 'N/A'
    },
    {
      step: 'Local Training',
      description: 'Jeder Client trainiert das Modell auf seinen lokalen Daten',
      participants: ['Client 1', 'Client 2', 'Client 3', '...'],
      action: 'Local SGD Training',
      privacy: 'Local Data stays on Device'
    },
    {
      step: 'Privacy Application',
      description: 'Differential Privacy wird auf die lokalen Updates angewendet',
      participants: ['All Clients'],
      action: 'Add Calibrated Noise',
      privacy: 'DP with ε=1.0'
    },
    {
      step: 'Secure Aggregation',
      description: 'Updates werden sicher aggregiert ohne Preisgabe einzelner Updates',
      participants: ['Federation Server'],
      action: 'Cryptographic Aggregation',
      privacy: 'Individual Updates Protected'
    },
    {
      step: 'Model Update',
      description: 'Neues globales Modell wird berechnet und verteilt',
      participants: ['Federation Server'],
      action: 'FedAvg Algorithm',
      privacy: 'Only Aggregate Visible'
    },
    {
      step: 'Convergence Check',
      description: 'Prüfung ob weitere Runden nötig sind',
      participants: ['Federation Server'],
      action: 'Evaluate Convergence',
      privacy: 'Aggregate Metrics Only'
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
  };

  const nextSimulationStep = () => {
    setSimulationStep((prev) => (prev + 1) % simulationSteps.length);
  };

  const resetSimulation = () => {
    setSimulationStep(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl">
                <Network className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Federated Learning & Differential Privacy
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dezentrales maschinelles Lernen mit mathematischen Privatheitsgarantien: 
              Ihr umfassender Guide für sichere und skalierbare KI-Kollaboration
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <GitBranch className="w-4 h-4 mr-2" />
                3 FL Paradigmen
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Lock className="w-4 h-4 mr-2" />
                Differential Privacy
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Code className="w-4 h-4 mr-2" />
                4 Production Frameworks
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
              <h2 className="text-3xl font-bold mb-4">Federated Learning & Differential Privacy</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Die Kombination von Federated Learning und Differential Privacy ermöglicht es, 
                KI-Modelle zu trainieren ohne dabei sensible Daten zu zentralisieren oder die 
                Privatsphäre zu kompromittieren.
              </p>
            </div>

            {/* Key Concepts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="w-6 h-6 text-purple-500" />
                    Federated Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Dezentrales maschinelles Lernen, bei dem Modelle lokal trainiert und 
                    nur die Updates (nicht die Daten) geteilt werden.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Daten bleiben lokal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Skalierbare Kooperation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Bessere Modelle durch mehr Daten</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-6 h-6 text-blue-500" />
                    Differential Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Mathematisch bewiesene Privatheitsgarantien durch kontrollierten 
                    Rausch in den geteilten Modell-Updates.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Formale Privacy-Garantien</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Quantifizierbare Privacy Loss</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Schutz vor Inference Attacks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Combined Benefits */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-500" />
                  Die Synergie: FL + DP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="p-3 bg-white rounded-lg shadow-sm w-fit mx-auto mb-3">
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Maximaler Datenschutz</h4>
                    <p className="text-sm text-gray-600">
                      Doppelter Schutz durch Lokalisierung + mathematische Privatheit
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 bg-white rounded-lg shadow-sm w-fit mx-auto mb-3">
                      <Scale className="w-8 h-8 text-blue-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                    <p className="text-sm text-gray-600">
                      Erfüllung strengster Datenschutzanforderungen (DSGVO, HIPAA)
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 bg-white rounded-lg shadow-sm w-fit mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-purple-500" />
                    </div>
                    <h4 className="font-semibold mb-2">Business Value</h4>
                    <p className="text-sm text-gray-600">
                      Sichere Datenkooperation ermöglicht bessere AI-Modelle
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Simulation Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Federated Learning Simulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-4">
                    Schritt {simulationStep + 1} von {simulationSteps.length}: {simulationSteps[simulationStep].description}
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Button onClick={nextSimulationStep} className="bg-gradient-to-r from-purple-600 to-blue-600">
                      <Play className="w-4 h-4 mr-2" />
                      Nächster Schritt
                    </Button>
                    <Button variant="outline" onClick={resetSimulation}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Aktion</h4>
                      <p className="text-sm text-gray-600">{simulationSteps[simulationStep].action}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Teilnehmer</h4>
                      <p className="text-sm text-gray-600">{simulationSteps[simulationStep].participants.join(', ')}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Privacy</h4>
                      <p className="text-sm text-gray-600">{simulationSteps[simulationStep].privacy}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Federated Learning Tab */}
          <TabsContent value="federated-learning" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Federated Learning Paradigmen</h2>
              <p className="text-lg text-gray-600">
                Drei Hauptansätze für dezentrales maschinelles Lernen
              </p>
            </div>

            <div className="space-y-6">
              {federatedLearningTypes.map((flType, index) => {
                const Icon = flType.icon;
                return (
                  <motion.div
                    key={flType.type}
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
                              flType.color
                            )}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-xl">{flType.type}</CardTitle>
                                <Badge variant="outline">Komplexität: {flType.complexity}</Badge>
                              </div>
                              <p className="text-gray-600">{flType.description}</p>
                              <p className="text-sm text-gray-500 mt-1">{flType.scenario}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(`fl-${index}`)}
                          >
                            <ChevronDown className={cn(
                              "w-4 h-4 transition-transform",
                              expandedSection === `fl-${index}` && "rotate-180"
                            )} />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      {expandedSection === `fl-${index}` && (
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Beispiele
                              </h4>
                              <ul className="space-y-2">
                                {flType.examples.map((example, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <ThumbsUp className="w-4 h-4 text-green-500" />
                                Vorteile
                              </h4>
                              <ul className="space-y-2">
                                {flType.advantages.map((advantage, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{advantage}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-500" />
                                Herausforderungen
                              </h4>
                              <ul className="space-y-2">
                                {flType.challenges.map((challenge, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <X className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{challenge}</span>
                                  </li>
                                ))}
                              </ul>
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

          {/* Differential Privacy Tab */}
          <TabsContent value="differential-privacy" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Differential Privacy Mechanismen</h2>
              <p className="text-lg text-gray-600">
                Mathematische Privatheitsgarantien für Federated Learning
              </p>
            </div>

            <div className="space-y-6">
              {differentialPrivacyMechanisms.map((mechanism, index) => {
                const Icon = mechanism.icon;
                return (
                  <Card key={mechanism.mechanism} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <Icon className="w-8 h-8 text-blue-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-xl">{mechanism.mechanism}</CardTitle>
                              <Badge variant={
                                mechanism.privacyLevel === 'Sehr Hoch' ? 'default' :
                                mechanism.privacyLevel === 'Hoch' ? 'secondary' : 'outline'
                              }>
                                {mechanism.privacyLevel} Privacy
                              </Badge>
                            </div>
                            <p className="text-gray-600">{mechanism.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(`dp-${index}`)}
                        >
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            expandedSection === `dp-${index}` && "rotate-180"
                          )} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {expandedSection === `dp-${index}` && (
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-3">Implementation:</h4>
                              <ol className="space-y-2">
                                {mechanism.implementation.map((step, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-sm">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
                                      {idx + 1}
                                    </span>
                                    <span className="text-gray-700">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Epsilon Range:</h4>
                              <Badge variant="outline" className="text-sm">
                                ε = {mechanism.epsilonRange}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                                <ThumbsUp className="w-4 h-4" />
                                Vorteile
                              </h4>
                              <ul className="space-y-1">
                                {mechanism.advantages.map((advantage, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{advantage}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2 text-orange-700">
                                <ThumbsDown className="w-4 h-4" />
                                Nachteile
                              </h4>
                              <ul className="space-y-1">
                                {mechanism.disadvantages.map((disadvantage, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <X className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{disadvantage}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Typische Use Cases:</h4>
                              <div className="flex flex-wrap gap-2">
                                {mechanism.useCases.map((useCase, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {useCase}
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

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">FL+DP System Architektur</h2>
              <p className="text-lg text-gray-600">
                Komponenten einer produktionstauglichen FL+DP Lösung
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {architectureComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <Card key={component.component} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl">{component.component}</CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Verantwortlichkeiten:</h4>
                          <ul className="space-y-1">
                            {component.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Technologien:</h4>
                          <div className="flex flex-wrap gap-1">
                            {component.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Skalierbarkeit:</h4>
                          <p className="text-xs text-gray-600">{component.scalability}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Security Features:</h4>
                          <div className="flex flex-wrap gap-1">
                            {component.security.map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Implementation Tab */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Implementation Frameworks</h2>
              <p className="text-lg text-gray-600">
                Production-ready Frameworks für FL+DP Deployment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {implementationFrameworks.map((framework, index) => {
                const Icon = framework.icon;
                return (
                  <Card key={framework.framework} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{framework.framework}</CardTitle>
                            <p className="text-sm text-gray-600">{framework.vendor} • {framework.language}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={framework.maturity === 'Production Ready' ? 'default' : 'secondary'}>
                            {framework.maturity}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {framework.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-green-700">Vorteile:</h4>
                            <ul className="space-y-1">
                              {framework.advantages.slice(0, 2).map((advantage, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs">
                                  <Plus className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{advantage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-orange-700">Limitationen:</h4>
                            <ul className="space-y-1">
                              {framework.limitations.slice(0, 2).map((limitation, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs">
                                  <Minus className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Best For:</h4>
                          <div className="flex flex-wrap gap-1">
                            {framework.bestFor.map((use, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {use}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-2 border-t">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">License:</span>
                            <Badge variant="secondary" className="text-xs">{framework.license}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Production Use Cases</h2>
              <p className="text-lg text-gray-600">
                Erfolgreiche FL+DP Implementierungen in der Praxis
              </p>
            </div>

            <div className="space-y-8">
              {practicalUseCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <Card key={useCase.title} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                              <Badge variant="outline">{useCase.industry}</Badge>
                            </div>
                            <p className="text-gray-600 mb-1">{useCase.participants}</p>
                            <p className="text-sm text-gray-700">{useCase.challenge}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={cn(
                            useCase.roi === 'Very High' ? 'bg-green-500' : 'bg-blue-500'
                          )}>
                            ROI: {useCase.roi}
                          </Badge>
                          <Badge variant="outline" className="ml-2">
                            {useCase.complexity} Complexity
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Technical Solution
                          </h4>
                          <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                            <div>
                              <span className="font-medium text-sm">Type:</span>
                              <p className="text-sm text-gray-700">{useCase.solution.type}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Privacy:</span>
                              <p className="text-sm text-gray-700">{useCase.solution.privacy}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Aggregation:</span>
                              <p className="text-sm text-gray-700">{useCase.solution.aggregation}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Technology:</span>
                              <p className="text-sm text-gray-700">{useCase.solution.technology}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Results
                          </h4>
                          <div className="space-y-3 bg-green-50 p-4 rounded-lg">
                            <div>
                              <span className="font-medium text-sm">Model Accuracy:</span>
                              <p className="text-sm text-gray-700">{useCase.results.modelAccuracy}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Privacy Guarantees:</span>
                              <p className="text-sm text-gray-700">{useCase.results.privacyGarantees}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Data Protection:</span>
                              <p className="text-sm text-gray-700">{useCase.results.dataProtection}</p>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Deployment Time:</span>
                              <p className="text-sm text-gray-700">{useCase.results.deploymentTime}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Challenges
                          </h4>
                          <ul className="space-y-2">
                            {useCase.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <X className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-green-500" />
                            Outcomes
                          </h4>
                          <ul className="space-y-2">
                            {useCase.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default FederatedLearningGuide;