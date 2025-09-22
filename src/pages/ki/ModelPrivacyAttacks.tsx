import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Shield,
  ShieldX, 
  AlertTriangle, 
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
  Radio,
  Antenna,
  Radar,
  Satellite,
  CloudLightning,
  Cloud,
  CloudRain,
  Banknote,
  Coins,
  Wallet,
  Receipt,
  Calculator,
  PiggyBank,
  Landmark,
  TrendingDown,
  UserPlus,
  UserMinus,
  Users2,
  Crown,
  Handshake,
  Gavel,
  BookMarked,
  FlaskConical,
  Microscope,
  TestTube,
  Lightning,
  AlertOctagon,
  UserCog,
  Crosshair,
  Skull,
  Bug,
  Biohazard,
  ShieldAlert,
  Siren,
  ShieldQuestion,
  ShieldOff
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AttackSimulation {
  attack: string;
  result: {
    risk: string;
    confidence: number;
    details: string;
    recommendation: string;
  };
  timestamp: string;
  recommendations: string[];
}

const ModelPrivacyAttacks = () => {
  useEffect(() => {
    document.title = 'Model Privacy Attacks & Defense – DSGVO ML-Schutz';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!';
      document.head.appendChild(meta);
    }

    // Viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks';
      document.head.appendChild(link);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Model Privacy Attacks & Defense – DSGVO ML-Schutz' },
      { property: 'og:description', content: 'Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Model Privacy Attacks & Defense – DSGVO ML-Schutz",
      "description": "Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!",
      "author": {
        "@type": "Organization",
        "name": "DataGuard"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dataguard.de/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Wissen",
            "item": "https://dataguard.de/wissen"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "KI-Datenschutz",
            "item": "https://dataguard.de/wissen/ki-datenschutz"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Model Privacy Attacks",
            "item": "https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks"
          }
        ]
      }
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [attackSimulation, setAttackSimulation] = useState<AttackSimulation | null>(null);
  const [defenseScore, setDefenseScore] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'attack-vectors', label: 'Angriffsvektoren', icon: ShieldX },
    { id: 'defense-strategies', label: 'Verteidigungsstrategien', icon: ShieldCheck },
    { id: 'testing-framework', label: 'Testing Framework', icon: TestTube },
    { id: 'implementation', label: 'Implementation', icon: Code },
    { id: 'monitoring', label: 'Monitoring & Detection', icon: Eye }
  ];

  const attackVectors = [
    {
      attack: 'Membership Inference Attack',
      severity: 'Hoch',
      description: 'Bestimmt, ob ein bestimmter Datenpunkt im Trainingsdatensatz enthalten war',
      targetData: ['Medizinische Aufzeichnungen', 'Finanzielle Transaktionen', 'Persönliche Präferenzen', 'Biometrische Daten'],
      attackMethod: [
        'Shadow Model Training mit bekannten Member/Non-Member Daten',
        'Statistical Analysis der Model Confidence Scores',
        'Query-basierte Membership Inference',
        'Model Inversion mit Membership Testing',
        'Threshold-basierte Membership Detection',
        'Ensemble-based Membership Inference'
      ],
      realWorldScenario: {
        scenario: 'Healthcare AI für Krankheitsdiagnose',
        attacker: 'Versicherungsunternehmen oder Arbeitgeber',
        goal: 'Bestimmen, ob bestimmte Personen in medizinischen Studien waren',
        impact: 'Diskriminierung bei Versicherung oder Beschäftigung',
        example: 'Angreifer fragt ML-Modell mit Patientendaten ab und kann durch Confidence-Score-Analyse bestimmen, ob Patient an HIV-Studie teilgenommen hat'
      },
      technicalDetails: {
        prerequisites: ['Query Access zum Target Model', 'Auxiliary Dataset verfügbar', 'Grundwissen über Model Architecture'],
        complexity: 'Mittel',
        detectionDifficulty: 'Schwer',
        scalability: 'Hoch',
        costToAttacker: 'Niedrig'
      },
      gdprImplications: [
        'Verletzung des Rechts auf informationelle Selbstbestimmung',
        'Unzulässige Verarbeitung sensitiver Daten',
        'Verstoß gegen Zweckbindung der Datenverarbeitung',
        'Fehlende Transparenz über Datennutzung'
      ],
      mitigationStrategies: [
        'Differential Privacy Integration',
        'Model Confidence Calibration',
        'Query Budget Limitations',
        'Adversarial Training gegen Membership Inference'
      ],
      icon: UserCheck,
      color: 'from-red-500 to-orange-500'
    },
    {
      attack: 'Model Inversion Attack',
      severity: 'Sehr Hoch',
      description: 'Rekonstruiert sensible Features oder komplette Trainingssamples aus Modellvorhersagen',
      targetData: ['Gesichtsbilder', 'Medizinische Scans', 'Biometrische Templates', 'Persönliche Attribute'],
      attackMethod: [
        'Gradient-based Feature Reconstruction',
        'Generative Model Training für Inversion',
        'Optimization-based Sample Reconstruction',
        'Class-conditional Sample Generation',
        'Multi-task Learning für bessere Inversion',
        'Federated Learning Model Inversion'
      ],
      realWorldScenario: {
        scenario: 'Gesichtserkennung in Smart Building System',
        attacker: 'Malicious Insider oder External Hacker',
        goal: 'Rekonstruktion von Gesichtsbildern der Gebäudenutzer',
        impact: 'Identitätsdiebstahl und Stalking-Risiko',
        example: 'Angreifer nutzt API-Zugang zu Gesichtserkennungsmodell und rekonstruiert hochauflösende Gesichtsbilder von Personen, die das Gebäude betreten haben'
      },
      technicalDetails: {
        prerequisites: ['Model Access (white-box oder extensive black-box)', 'Computing Resources für Optimization', 'Domain Knowledge'],
        complexity: 'Hoch',
        detectionDifficulty: 'Sehr Schwer',
        scalability: 'Mittel',
        costToAttacker: 'Hoch'
      },
      gdprImplications: [
        'Schwere Verletzung der Datensicherheit',
        'Unerlaubte Rekonstruktion biometrischer Daten',
        'Verstoß gegen Art. 32 DSGVO (Technische Sicherheit)',
        'Potentielle Meldepflicht als Data Breach'
      ],
      mitigationStrategies: [
        'Feature Anonymization und Aggregation',
        'Secure Multi-party Computation',
        'Homomorphic Encryption für Inference',
        'Selective Feature Sharing'
      ],
      icon: Eye,
      color: 'from-purple-500 to-red-500'
    },
    {
      attack: 'Property Inference Attack',
      severity: 'Mittel',
      description: 'Ableitung globaler Eigenschaften des Trainingsdatensatzes ohne Zugang zu individuellen Samples',
      targetData: ['Demographische Verteilungen', 'Klassenverhältnisse', 'Datenqualität Metriken', 'Statistical Properties'],
      attackMethod: [
        'Statistical Analysis der Model Outputs',
        'Meta-Learning über Dataset Properties',
        'Activation Pattern Analysis',
        'Transfer Learning-based Property Inference',
        'Ensemble Model Property Extraction',
        'Federated Learning Gradient Analysis'
      ],
      realWorldScenario: {
        scenario: 'HR Recruiting AI mit Bias-sensitive Data',
        attacker: 'Competitor oder Regulatorbehörde',
        goal: 'Bestimmung der demographischen Zusammensetzung der Trainingsdaten',
        impact: 'Aufdeckung von Bias oder Compliance-Verstößen',
        example: 'Angreifer analysiert Hiring-AI und kann bestimmen, dass Trainingsdaten zu 80% männliche Kandidaten enthielten, was AGG-Verstöße aufdeckt'
      },
      technicalDetails: {
        prerequisites: ['Limited Query Access', 'Statistical Analysis Knowledge', 'Multiple Model Queries'],
        complexity: 'Niedrig-Mittel',
        detectionDifficulty: 'Mittel',
        scalability: 'Sehr Hoch',
        costToAttacker: 'Sehr Niedrig'
      },
      gdprImplications: [
        'Indirekte Verletzung der Datenminimierung',
        'Potentielle Aufdeckung von Compliance-Gaps',
        'Risiko für Business Reputation',
        'Regulatory Investigation Trigger'
      ],
      mitigationStrategies: [
        'Output Perturbation Mechanisms',
        'Query Rate Limiting',
        'Federated Learning mit Secure Aggregation',
        'Regular Bias Auditing'
      ],
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      attack: 'Model Extraction Attack',
      severity: 'Hoch',
      description: 'Reverse Engineering eines Machine Learning Models durch strategische Queries',
      targetData: ['Model Architecture', 'Hyperparameter', 'Training Algorithms', 'Feature Engineering'],
      attackMethod: [
        'Active Learning-based Query Selection',
        'Transfer Learning für Model Replication',
        'Gradient-based Model Extraction',
        'Ensemble Distillation Attacks',
        'Adversarial Sample Generation für Extraction',
        'Federated Learning Model Stealing'
      ],
      realWorldScenario: {
        scenario: 'Proprietäres KI-System für Finanz-Trading',
        attacker: 'Konkurrierendes Fintech-Unternehmen',
        goal: 'Kopierung des wertvollen Trading-Algorithmus',
        impact: 'Intellectual Property Theft im Millionenwert',
        example: 'Startup nutzt systematische API-Calls um Trading-KI zu klonen und eigenes konkurrierendes Produkt zu entwickeln'
      },
      technicalDetails: {
        prerequisites: ['API Access', 'ML Expertise', 'Computational Resources', 'Strategic Query Planning'],
        complexity: 'Hoch',
        detectionDifficulty: 'Mittel',
        scalability: 'Niedrig-Mittel',
        costToAttacker: 'Mittel'
      },
      gdprImplications: [
        'Weniger direkte DSGVO-Relevanz',
        'IP-Schutz und Trade Secret Issues',
        'Potentielle Wettbewerbsrechtliche Probleme',
        'Risk für Business Model'
      ],
      mitigationStrategies: [
        'API Rate Limiting und Query Monitoring',
        'Watermarking von ML Models',
        'Adversarial Examples als Honeypots',
        'Legal Protection durch Patents'
      ],
      icon: Download,
      color: 'from-blue-500 to-purple-500'
    },
    {
      attack: 'Poisoning Attack',
      severity: 'Sehr Hoch',
      description: 'Manipulation des Trainingsprozesses durch Einschleusung schädlicher Daten',
      targetData: ['Training Datasets', 'Model Parameters', 'Feature Representations', 'Decision Boundaries'],
      attackMethod: [
        'Clean-label Poisoning für Stealth',
        'Backdoor Attacks mit Trigger Patterns',
        'Adversarial Training Data Injection',
        'Federated Learning Poisoning',
        'Transfer Learning Poisoning',
        'Gradient-based Poisoning Optimization'
      ],
      realWorldScenario: {
        scenario: 'Autonomous Vehicle Vision System',
        attacker: 'Nation-state Actor oder Terrorist',
        goal: 'Einbau von Backdoors für gezielte Angriffe',
        impact: 'Potentielle Lebensgefahr durch manipulierte Verkehrserkennung',
        example: 'Angreifer manipuliert öffentliche Verkehrszeichendatensets so, dass spezielle Sticker auf Stopschildern diese als Vorfahrtschilder klassifizieren lassen'
      },
      technicalDetails: {
        prerequisites: ['Access to Training Pipeline', 'Dataset Manipulation Capability', 'ML Security Knowledge'],
        complexity: 'Sehr Hoch',
        detectionDifficulty: 'Sehr Schwer',
        scalability: 'Niedrig',
        costToAttacker: 'Sehr Hoch'
      },
      gdprImplications: [
        'Severe Data Integrity Violations',
        'Manipulation der Datenverarbeitung',
        'Art. 32 DSGVO Verletzung (Integrität)',
        'Meldepflichtige Sicherheitsverletzung'
      ],
      mitigationStrategies: [
        'Robust Training Algorithms',
        'Data Sanitization und Validation',
        'Anomaly Detection in Training Data',
        'Multi-source Data Verification'
      ],
      icon: Biohazard,
      color: 'from-red-600 to-black'
    }
  ];

  const defenseStrategies = [
    {
      category: 'Differential Privacy',
      description: 'Mathematisch bewiesene Privatheitsgarantien durch kontrollierten Rausch',
      mechanisms: [
        'ε-Differential Privacy für Training',
        'Local Differential Privacy für Input',
        'Smooth Sensitivity Methods',
        'Composition Theorems für Multi-Stage Privacy'
      ],
      implementation: {
        trainingTime: [
          'DP-SGD (Differentially Private Stochastic Gradient Descent)',
          'Private Aggregation of Teacher Ensembles (PATE)',
          'Gaussian Mechanism für Gradient Perturbation',
          'Moments Accountant für Privacy Budget Tracking'
        ],
        inferenceTime: [
          'Output Perturbation mit Calibrated Noise',
          'Private Prediction Mechanisms',
          'Smooth Sensitivity-based Response',
          'Local DP für User Queries'
        ]
      },
      effectiveness: {
        membershipInference: 'Sehr Hoch',
        modelInversion: 'Hoch',
        propertyInference: 'Hoch',
        modelExtraction: 'Mittel',
        poisoning: 'Niedrig'
      },
      tradeoffs: {
        privacy: 'Sehr Hoch',
        utility: 'Mittel-Hoch',
        performance: 'Mittel',
        complexity: 'Hoch',
        computationalCost: 'Mittel'
      },
      practicalConsiderations: [
        'Privacy Budget Management über Model Lifecycle',
        'Utility-Privacy Trade-off Optimization',
        'Hyperparameter Tuning für ε-δ Values',
        'Composition Analysis bei Multiple Releases'
      ],
      icon: Gauge,
      maturity: 'Production Ready'
    },
    {
      category: 'Secure Multi-Party Computation',
      description: 'Sichere Berechnung ohne Preisgabe privater Inputs',
      mechanisms: [
        'Secret Sharing-based ML Training',
        'Homomorphic Encryption für Inference',
        'Garbled Circuits für Model Evaluation',
        'Oblivious Transfer Protocols'
      ],
      implementation: {
        trainingTime: [
          'Distributed Training mit Secret Sharing',
          'Secure Gradient Aggregation',
          'Private Model Parameter Updates',
          'Secure Loss Function Computation'
        ],
        inferenceTime: [
          'Homomorphic Encrypted Prediction',
          'Secure Multi-party Inference',
          'Private Set Intersection für Features',
          'Oblivious Neural Network Evaluation'
        ]
      },
      effectiveness: {
        membershipInference: 'Sehr Hoch',
        modelInversion: 'Sehr Hoch',
        propertyInference: 'Hoch',
        modelExtraction: 'Sehr Hoch',
        poisoning: 'Mittel'
      },
      tradeoffs: {
        privacy: 'Sehr Hoch',
        utility: 'Hoch',
        performance: 'Niedrig',
        complexity: 'Sehr Hoch',
        computationalCost: 'Sehr Hoch'
      },
      practicalConsiderations: [
        'Network Latency Impact auf Performance',
        'Trust Assumptions zwischen Parties',
        'Scalability Challenges bei Large Models',
        'Integration mit Existing ML Pipelines'
      ],
      icon: Network,
      maturity: 'Research/Early Production'
    },
    {
      category: 'Federated Learning',
      description: 'Dezentrales Training ohne zentrale Datensammlung',
      mechanisms: [
        'Client-side Model Updates',
        'Secure Aggregation Protocols',
        'Byzantine-robust Aggregation',
        'Personalized Federated Learning'
      ],
      implementation: {
        trainingTime: [
          'FedAvg Algorithm mit Secure Aggregation',
          'Differential Privacy für Client Updates',
          'Client Selection Strategies',
          'Communication-efficient Updates'
        ],
        inferenceTime: [
          'Local Model Inference',
          'Ensemble Predictions',
          'Personalized Model Adaptation',
          'Collaborative Filtering'
        ]
      },
      effectiveness: {
        membershipInference: 'Hoch',
        modelInversion: 'Hoch',
        propertyInference: 'Mittel',
        modelExtraction: 'Mittel',
        poisoning: 'Niedrig-Mittel'
      },
      tradeoffs: {
        privacy: 'Hoch',
        utility: 'Mittel-Hoch',
        performance: 'Mittel',
        complexity: 'Hoch',
        computationalCost: 'Mittel'
      },
      practicalConsiderations: [
        'Non-IID Data Distribution Challenges',
        'Client Dropout und Reliability',
        'Communication Bandwidth Constraints',
        'Incentive Mechanisms für Participation'
      ],
      icon: GitBranch,
      maturity: 'Production Ready'
    },
    {
      category: 'Adversarial Training',
      description: 'Training gegen spezifische Privacy Attacks',
      mechanisms: [
        'Min-Max Game Setup für Privacy',
        'Adversarial Regularization',
        'Privacy-preserving GANs',
        'Robust Feature Learning'
      ],
      implementation: {
        trainingTime: [
          'Adversarial Loss Integration',
          'Multi-task Learning mit Privacy Objectives',
          'Generator-Discriminator Architecture',
          'Regularization Term Optimization'
        ],
        inferenceTime: [
          'Robust Prediction Mechanisms',
          'Confidence Calibration',
          'Ensemble Voting',
          'Uncertainty Quantification'
        ]
      },
      effectiveness: {
        membershipInference: 'Hoch',
        modelInversion: 'Mittel-Hoch',
        propertyInference: 'Mittel',
        modelExtraction: 'Hoch',
        poisoning: 'Sehr Hoch'
      },
      tradeoffs: {
        privacy: 'Mittel-Hoch',
        utility: 'Hoch',
        performance: 'Hoch',
        complexity: 'Mittel',
        computationalCost: 'Hoch'
      },
      practicalConsiderations: [
        'Attack-specific Defense Design',
        'Generalization zu Unknown Attacks',
        'Computational Overhead während Training',
        'Hyperparameter Sensitivity'
      ],
      icon: Zap,
      maturity: 'Research/Production'
    },
    {
      category: 'Model Obfuscation',
      description: 'Verschleierung der Modellstruktur und -parameter',
      mechanisms: [
        'Neural Network Obfuscation',
        'Knowledge Distillation',
        'Model Compression',
        'Architecture Randomization'
      ],
      implementation: {
        trainingTime: [
          'Teacher-Student Distillation',
          'Noise Injection in Parameters',
          'Pruning und Quantization',
          'Architecture Search Randomization'
        ],
        inferenceTime: [
          'Ensemble Predictions',
          'Output Randomization',
          'Query Response Delays',
          'Fake Response Injection'
        ]
      },
      effectiveness: {
        membershipInference: 'Mittel',
        modelInversion: 'Mittel',
        propertyInference: 'Niedrig',
        modelExtraction: 'Hoch',
        poisoning: 'Niedrig'
      },
      tradeoffs: {
        privacy: 'Mittel',
        utility: 'Mittel-Hoch',
        performance: 'Hoch',
        complexity: 'Niedrig-Mittel',
        computationalCost: 'Niedrig'
      },
      practicalConsiderations: [
        'Security through Obscurity Limitations',
        'Reverse Engineering Resistance',
        'Performance Impact Assessment',
        'Legal IP Protection Compliance'
      ],
      icon: Shuffle,
      maturity: 'Production Ready'
    }
  ];

  const testingFramework = [
    {
      testCategory: 'Membership Inference Testing',
      description: 'Systematische Tests zur Bewertung der Membership Inference Vulnerabilities',
      testMethods: [
        'Shadow Model Attack Simulation',
        'Statistical Inference Testing',
        'Confidence Score Analysis',
        'Threshold-based Membership Detection'
      ],
      implementation: {
        dataRequirements: [
          'Separate Training/Test Split für Shadow Models',
          'Known Member/Non-member Ground Truth',
          'Representative Dataset Distribution',
          'Sufficient Sample Size (>1000 per class)'
        ],
        metrics: [
          'Attack Accuracy (Precision/Recall)',
          'AUC-ROC für Membership Classification',
          'Advantage over Random Guessing',
          'Statistical Significance Tests'
        ],
        tools: [
          'Privacy Meter Framework',
          'TensorFlow Privacy Testing',
          'Custom Attack Implementation',
          'ML Privacy Meter'
        ]
      },
      automationLevel: 'Hoch',
      executionTime: '2-4 Stunden',
      skillLevel: 'Mittel',
      reportingFormat: [
        'Vulnerability Score (0-100)',
        'Attack Success Rate',
        'Confidence Intervals',
        'Remediation Recommendations'
      ],
      icon: UserCheck
    },
    {
      testCategory: 'Model Inversion Testing',
      description: 'Tests zur Bewertung der Feature/Sample Reconstruction Risks',
      testMethods: [
        'Gradient-based Reconstruction',
        'Optimization-based Inversion',
        'GAN-based Sample Generation',
        'Class-conditional Reconstruction'
      ],
      implementation: {
        dataRequirements: [
          'Access to Model Gradients (white-box)',
          'Representative Input Samples',
          'Ground Truth für Reconstruction Quality',
          'Computational Resources für Optimization'
        ],
        metrics: [
          'Reconstruction Quality (SSIM, PSNR)',
          'Semantic Similarity Scores',
          'Identifiability Assessment',
          'Privacy Leakage Quantification'
        ],
        tools: [
          'Deep Leakage from Gradients (DLG)',
          'Inverting Gradients (iDLG)',
          'Custom Inversion Frameworks',
          'FedML Privacy Testing'
        ]
      },
      automationLevel: 'Mittel',
      executionTime: '4-8 Stunden',
      skillLevel: 'Hoch',
      reportingFormat: [
        'Reconstruction Quality Scores',
        'Visual Comparison Results',
        'Identifiability Risk Assessment',
        'Technical Mitigation Recommendations'
      ],
      icon: Eye
    },
    {
      testCategory: 'Property Inference Testing',
      description: 'Bewertung der Risiken für Dataset Property Leakage',
      testMethods: [
        'Statistical Property Inference',
        'Meta-Learning Attacks',
        'Distribution Analysis',
        'Class Balance Inference'
      ],
      implementation: {
        dataRequirements: [
          'Multiple Query Access to Model',
          'Knowledge über Expected Properties',
          'Statistical Analysis Capabilities',
          'Diverse Query Strategies'
        ],
        metrics: [
          'Property Inference Accuracy',
          'Statistical Significance',
          'Information Leakage Quantification',
          'Attack Efficiency Metrics'
        ],
        tools: [
          'Custom Statistical Frameworks',
          'Property Inference Libraries',
          'ML Audit Tools',
          'Privacy Analysis Scripts'
        ]
      },
      automationLevel: 'Hoch',
      executionTime: '1-2 Stunden',
      skillLevel: 'Mittel',
      reportingFormat: [
        'Property Leakage Score',
        'Statistical Confidence',
        'Business Impact Assessment',
        'Compliance Risk Rating'
      ],
      icon: BarChart3
    },
    {
      testCategory: 'Model Extraction Testing',
      description: 'Evaluation der Model Stealing Vulnerabilities',
      testMethods: [
        'Active Learning-based Extraction',
        'Transfer Learning Attacks',
        'Functionally Equivalent Model Creation',
        'API-based Model Cloning'
      ],
      implementation: {
        dataRequirements: [
          'Query Budget für API Calls',
          'Auxiliary Dataset für Training',
          'Computing Resources für Model Training',
          'Architecture Search Capabilities'
        ],
        metrics: [
          'Functional Equivalence Score',
          'Query Efficiency',
          'Model Fidelity Assessment',
          'IP Protection Effectiveness'
        ],
        tools: [
          'Model Extraction Frameworks',
          'Active Learning Libraries',
          'Custom Stealing Implementations',
          'API Monitoring Tools'
        ]
      },
      automationLevel: 'Mittel',
      executionTime: '8-24 Stunden',
      skillLevel: 'Hoch',
      reportingFormat: [
        'Extraction Success Rate',
        'Query Efficiency Analysis',
        'IP Risk Assessment',
        'Legal Protection Recommendations'
      ],
      icon: Download
    }
  ];

  const monitoringFramework = [
    {
      monitoringType: 'Real-time Attack Detection',
      description: 'Kontinuierliche Überwachung für aktive Privacy Attacks',
      detectionMethods: [
        'Query Pattern Anomaly Detection',
        'Statistical Analysis der API Calls',
        'Confidence Score Distribution Monitoring',
        'Adversarial Input Detection'
      ],
      implementation: {
        infrastructure: [
          'Real-time Stream Processing',
          'Anomaly Detection ML Models',
          'API Gateway Integration',
          'Alert Management System'
        ],
        metrics: [
          'False Positive Rate < 5%',
          'Detection Latency < 100ms',
          'Attack Coverage > 90%',
          'System Availability > 99.9%'
        ],
        alerting: [
          'Real-time Slack/Email Notifications',
          'Automatic API Rate Limiting',
          'Security Team Escalation',
          'Incident Response Triggering'
        ]
      },
      businessValue: [
        'Früherkennung von Privacy Breaches',
        'Automatic Threat Response',
        'Compliance Documentation',
        'Customer Trust Protection'
      ],
      icon: Radar
    },
    {
      monitoringType: 'Privacy Drift Detection',
      description: 'Überwachung der Privacy-Eigenschaften über Zeit',
      detectionMethods: [
        'Periodic Privacy Metric Calculation',
        'Model Performance vs Privacy Trade-off Tracking',
        'Training Data Distribution Monitoring',
        'Differential Privacy Budget Tracking'
      ],
      implementation: {
        infrastructure: [
          'Scheduled Privacy Testing',
          'Model Version Comparison',
          'Metric Trend Analysis',
          'Dashboard und Reporting'
        ],
        metrics: [
          'Privacy Score Trends',
          'Attack Success Rate Changes',
          'Model Utility Degradation',
          'Compliance Metric Evolution'
        ],
        alerting: [
          'Weekly Privacy Reports',
          'Threshold-based Warnings',
          'Quarterly Executive Summary',
          'Regulatory Compliance Updates'
        ]
      },
      businessValue: [
        'Proactive Privacy Management',
        'Compliance Kontinuität',
        'Risk Trend Identification',
        'Strategic Decision Support'
      ],
      icon: TrendingUp
    },
    {
      monitoringType: 'Model Integrity Monitoring',
      description: 'Überwachung auf Manipulation und Poisoning Attacks',
      detectionMethods: [
        'Training Data Integrity Checks',
        'Model Parameter Anomaly Detection',
        'Prediction Behavior Analysis',
        'Backdoor Trigger Detection'
      ],
      implementation: {
        infrastructure: [
          'Data Pipeline Monitoring',
          'Model Checksum Verification',
          'Behavioral Testing Framework',
          'Forensic Analysis Tools'
        ],
        metrics: [
          'Data Corruption Detection Rate',
          'Model Behavior Consistency',
          'Trigger Detection Accuracy',
          'Recovery Time Objectives'
        ],
        alerting: [
          'Immediate Security Alerts',
          'Model Rollback Procedures',
          'Incident Investigation',
          'Legal Team Notification'
        ]
      },
      businessValue: [
        'Protection gegen Model Poisoning',
        'Business Continuity Assurance',
        'Legal Liability Reduction',
        'Brand Reputation Protection'
      ],
      icon: ShieldAlert
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
    
    // Update defense score
    const totalDefenseItems = defenseStrategies.length * 4; // Assuming 4 implementation items per strategy
    setDefenseScore((newChecked.size / totalDefenseItems) * 100);
  };

  const simulateAttack = (attackType: string) => {
    // Simulated attack results
    const mockResults = {
      membership_inference: {
        success_rate: Math.random() * 0.4 + 0.6,
        confidence: Math.random() * 0.3 + 0.7,
        vulnerability_level: 'High',
        affected_records: Math.floor(Math.random() * 1000) + 100
      },
      model_inversion: {
        success_rate: Math.random() * 0.3 + 0.4,
        confidence: Math.random() * 0.4 + 0.5,
        vulnerability_level: 'Medium',
        affected_records: Math.floor(Math.random() * 500) + 50
      }
    };
    
    setAttackSimulation({
      attack: attackType,
      result: mockResults[attackType as keyof typeof mockResults] || mockResults.membership_inference,
      timestamp: new Date().toLocaleString(),
      recommendations: [
        'Implement Differential Privacy with ε < 1.0',
        'Add output noise to model predictions',
        'Implement query rate limiting',
        'Regular privacy audits empfohlen'
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" itemScope itemType="https://schema.org/Article">
      <meta itemProp="name" content="Model Privacy Attacks & Defense – DSGVO ML-Schutz" />
      <meta itemProp="description" content="Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!" />
      <meta itemProp="author" content="DataGuard Experts" />
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-orange-900">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 sm:p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl shadow-2xl">
                <ShieldX className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Model Privacy Attacks & Defense
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Umfassender Guide zu Angriffsvektoren auf ML-Modelle und effektive Verteidigungsstrategien: 
              Von Membership Inference bis Model Extraction - Schützen Sie Ihre KI-Systeme proaktiv
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-white border-white/30 bg-white/10 text-xs sm:text-sm">
                <ShieldX className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                5 Attack Vectors
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-white border-white/30 bg-white/10 text-xs sm:text-sm">
                <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                5 Defense Strategies
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5 sm:px-4 sm:py-2 text-white border-white/30 bg-white/10 text-xs sm:text-sm">
                <TestTube className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Testing Framework
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b" aria-label="Inhaltsverzeichnis">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 h-auto p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    id={`tab-${tab.id}`}
                    className="flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-[10px] sm:text-xs font-medium hidden sm:inline">
                      {tab.label}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/wissen" className="hover:text-blue-600">Wissen</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/wissen/ki-datenschutz" className="hover:text-blue-600">KI-Datenschutz</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium">Model Privacy Attacks</li>
          </ol>
        </nav>

        {/* Table of Contents for Mobile */}
        <div className="lg:hidden mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <List className="w-5 h-5" />
                Inhaltsverzeichnis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav aria-label="Inhaltsverzeichnis">
                <ul className="space-y-2">
                  <li>
                    <a href="#overview-section" className="text-blue-600 hover:underline">Überblick</a>
                  </li>
                  <li>
                    <a href="#attack-vectors-section" className="text-blue-600 hover:underline">Angriffsvektoren</a>
                  </li>
                  <li>
                    <a href="#defense-strategies-section" className="text-blue-600 hover:underline">Verteidigungsstrategien</a>
                  </li>
                  <li>
                    <a href="#testing-framework-section" className="text-blue-600 hover:underline">Testing Framework</a>
                  </li>
                  <li>
                    <a href="#implementation-section" className="text-blue-600 hover:underline">Implementation</a>
                  </li>
                  <li>
                    <a href="#monitoring-section" className="text-blue-600 hover:underline">Monitoring & Detection</a>
                  </li>
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-12">
              <h2 id="overview-section" className="text-3xl font-bold mb-4 scroll-mt-24">Model Privacy: Angriffe verstehen, Verteidigung stärken</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Machine Learning Modelle sind anfällig für sophisticated Privacy-Attacks, die sensible 
                Trainingsdaten rekonstruieren oder Membership-Information preisgeben können. Lernen Sie, 
                wie Sie Ihre KI-Systeme effektiv schützen. Ergänzend empfehlen wir unseren Guide zu <Link to="/wissen/ki-datenschutz/privacy-preserving-ai" className="text-blue-600 hover:underline">Privacy-Preserving AI</Link> und <Link to="/wissen/ki-datenschutz/federated-learning" className="text-blue-600 hover:underline">Federated Learning</Link>.
              </p>
            </div>

            {/* Threat Landscape */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Skull className="w-5 h-5 text-red-500" />
                    <span className="text-base sm:text-lg">Membership Inference</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Bestimmung ob spezifische Daten im Training verwendet wurden
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">DSGVO Verletzung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Identitätsrisiko</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-purple-500" />
                    <span className="text-base sm:text-lg">Model Inversion</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Rekonstruktion sensibler Features aus Modellvorhersagen
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">Biometric Leak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">Medical Data</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-orange-500" />
                    <span className="text-base sm:text-lg">Model Extraction</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Reverse Engineering proprietärer ML-Algorithmen
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-green-500" />
                      <span className="text-sm">IP Theft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Economic Loss</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Attack Simulation */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="w-5 h-5" />
                  Interactive Attack Simulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Simulieren Sie Privacy Attacks gegen ein Beispiel-Modell und verstehen Sie die Risiken
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => simulateAttack('membership_inference')}>
                      <UserCheck className="w-4 h-4 mr-2" />
                      Membership Inference Test
                    </Button>
                    <Button onClick={() => simulateAttack('model_inversion')} variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Model Inversion Test
                    </Button>
                  </div>
                  
                  {attackSimulation && (
                    <div className="mt-6 p-4 border rounded-lg bg-red-50">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        Attack Simulation: {attackSimulation.attack}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm font-medium">Success Rate:</span>
                          <div className="flex items-center gap-2">
                            <Progress value={attackSimulation.result.success_rate * 100} className="flex-1" />
                            <span className="text-sm">{(attackSimulation.result.success_rate * 100).toFixed(1)}%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Vulnerability Level:</span>
                          <Badge variant="destructive" className="ml-2">
                            {attackSimulation.result.vulnerability_level}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">Empfohlene Maßnahmen:</span>
                        <ul className="mt-2 space-y-1">
                          {attackSimulation.recommendations.map((rec: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Why This Matters */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  Warum Model Privacy entscheidend ist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Business Impact:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Schutz wertvoller IP und Trainingsdaten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Vertrauensaufbau bei Kunden und Partnern</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Competitive Advantage durch sichere AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Regulatory Compliance (<Link to="/wissen/dsgvo-grundlagen" className="text-blue-600 hover:underline">DSGVO</Link>, <Link to="/wissen/ki-datenschutz/eu-ai-act-compliance" className="text-blue-600 hover:underline">AI Act</Link>)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Risk Scenarios:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Healthcare: Rekonstruktion von Patientendaten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Finance: Trading-Algorithmus Diebstahl</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">HR: Bias-Detection durch Property Inference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Biometrics: Gesichtserkennung Reconstruction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            <Card className="mb-8 bg-gradient-to-br from-gray-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5" />
                  Weiterführende Ressourcen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Verwandte Themen:</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/wissen/ki-datenschutz/privacy-by-design-ai" className="text-blue-600 hover:underline text-sm">Privacy by Design für AI</Link>
                      </li>
                      <li>
                        <Link to="/wissen/ki-datenschutz/differential-privacy" className="text-blue-600 hover:underline text-sm">Differential Privacy Guide</Link>
                      </li>
                      <li>
                        <Link to="/wissen/ki-datenschutz/secure-multi-party-computation" className="text-blue-600 hover:underline text-sm">Secure Multi-Party Computation</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Compliance & Governance:</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/wissen/ki-datenschutz/algorithmic-impact-assessment" className="text-blue-600 hover:underline text-sm">Algorithmic Impact Assessment</Link>
                      </li>
                      <li>
                        <Link to="/wissen/ki-datenschutz/ai-risk-classification" className="text-blue-600 hover:underline text-sm">KI-Risikoklassifizierung</Link>
                      </li>
                      <li>
                        <Link to="/wissen/ki-datenschutz/explainable-ai" className="text-blue-600 hover:underline text-sm">Explainable AI Guide</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Navigation durch diesen Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tabs.slice(1).map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow text-left"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-red-100 rounded-lg">
                            <Icon className="w-5 h-5 text-red-600" />
                          </div>
                          <h4 className="font-semibold">{tab.label}</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {index === 0 && '5 kritische Attack Vectors mit Real-World Scenarios'}
                          {index === 1 && '5 effektive Defense Strategies mit Implementation Guides'}
                          {index === 2 && 'Praktisches Testing Framework für Vulnerability Assessment'}
                          {index === 3 && 'Step-by-Step Implementation Roadmap'}
                          {index === 4 && 'Real-time Monitoring und Attack Detection'}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attack Vectors Tab */}
          <TabsContent value="attack-vectors" className="space-y-6">
            <div className="text-center mb-8">
              <h2 id="attack-vectors-section" className="text-3xl font-bold mb-4 scroll-mt-24">Privacy Attack Vectors</h2>
              <p className="text-lg text-gray-600">
                Detaillierte Analyse der 5 kritischsten Angriffsmethoden auf ML-Modelle
              </p>
            </div>

            <div className="space-y-6">
              {attackVectors.map((attack, index) => {
                const Icon = attack.icon;
                return (
                  <motion.div
                    key={attack.attack}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "p-2 sm:p-3 rounded-xl bg-gradient-to-br text-white",
                              attack.color
                            )}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-xl sm:text-2xl">{attack.attack}</CardTitle>
                                <Badge variant={attack.severity === 'Sehr Hoch' ? 'destructive' : attack.severity === 'Hoch' ? 'default' : 'secondary'}>
                                  {attack.severity} Risk
                                </Badge>
                              </div>
                              <p className="text-gray-600">{attack.description}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(`attack-${index}`)}
                          >
                            <ChevronDown className={cn(
                              "w-4 h-4 transition-transform",
                              expandedSection === `attack-${index}` && "rotate-180"
                            )} />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      {expandedSection === `attack-${index}` && (
                        <CardContent>
                          <Tabs defaultValue="scenario" className="w-full">
                            <TabsList className="grid w-full grid-cols-5">
                              <TabsTrigger value="scenario">Real-World</TabsTrigger>
                              <TabsTrigger value="method">Methodik</TabsTrigger>
                              <TabsTrigger value="technical">Technisch</TabsTrigger>
                              <TabsTrigger value="gdpr">DSGVO Impact</TabsTrigger>
                              <TabsTrigger value="mitigation">Mitigation</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="scenario" className="mt-4">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-semibold mb-3">Real-World Scenario:</h5>
                                <div className="space-y-3">
                                  <div>
                                    <strong>Szenario:</strong> {attack.realWorldScenario.scenario}
                                  </div>
                                  <div>
                                    <strong>Angreifer:</strong> {attack.realWorldScenario.attacker}
                                  </div>
                                  <div>
                                    <strong>Ziel:</strong> {attack.realWorldScenario.goal}
                                  </div>
                                  <div>
                                    <strong>Impact:</strong> {attack.realWorldScenario.impact}
                                  </div>
                                  <div className="mt-3 p-3 bg-red-50 rounded border-l-4 border-red-500">
                                    <strong>Beispiel:</strong> {attack.realWorldScenario.example}
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="method" className="mt-4">
                              <div>
                                <h5 className="font-semibold mb-3">Attack Methoden:</h5>
                                <ul className="space-y-2">
                                  {attack.attackMethod.map((method, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <Code className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{method}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-4">
                                  <h5 className="font-semibold mb-2">Target Data:</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {attack.targetData.map((data, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs">
                                        {data}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="technical" className="mt-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-semibold mb-2">Prerequisites:</h5>
                                  <ul className="space-y-1 text-sm">
                                    {attack.technicalDetails.prerequisites.map((req, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                        {req}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold mb-2">Attack Properties:</h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span>Complexity:</span>
                                      <Badge variant="outline">{attack.technicalDetails.complexity}</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Detection:</span>
                                      <Badge variant="outline">{attack.technicalDetails.detectionDifficulty}</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Scalability:</span>
                                      <Badge variant="outline">{attack.technicalDetails.scalability}</Badge>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Cost:</span>
                                      <Badge variant="outline">{attack.technicalDetails.costToAttacker}</Badge>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="gdpr" className="mt-4">
                              <div className="bg-red-50 p-4 rounded-lg">
                                <h5 className="font-semibold mb-3 text-red-800">DSGVO Implications:</h5>
                                <ul className="space-y-2">
                                  {attack.gdprImplications.map((implication, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-red-700">{implication}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="mitigation" className="mt-4">
                              <div className="bg-green-50 p-4 rounded-lg">
                                <h5 className="font-semibold mb-3 text-green-800">Mitigation Strategies:</h5>
                                <ul className="space-y-2">
                                  {attack.mitigationStrategies.map((strategy, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-green-700">{strategy}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* Defense Strategies Tab */}
          <TabsContent value="defense-strategies" className="space-y-6">
            <div className="text-center mb-8">
              <h2 id="defense-strategies-section" className="text-3xl font-bold mb-4 scroll-mt-24">Defense Strategies</h2>
              <p className="text-lg text-gray-600">
                5 bewährte Verteidigungsstrategien gegen Privacy Attacks
              </p>
            </div>

            <div className="space-y-6">
              {defenseStrategies.map((defense, index) => {
                const Icon = defense.icon;
                return (
                  <Card key={defense.category} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-xl">{defense.category}</CardTitle>
                              <Badge variant="outline">{defense.maturity}</Badge>
                            </div>
                            <p className="text-gray-600">{defense.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(`defense-${index}`)}
                        >
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            expandedSection === `defense-${index}` && "rotate-180"
                          )} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {expandedSection === `defense-${index}` && (
                      <CardContent>
                        <Tabs defaultValue="mechanisms" className="w-full">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="mechanisms">Mechanismen</TabsTrigger>
                            <TabsTrigger value="implementation">Implementation</TabsTrigger>
                            <TabsTrigger value="effectiveness">Effectiveness</TabsTrigger>
                            <TabsTrigger value="considerations">Considerations</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="mechanisms" className="mt-4">
                            <div>
                              <h5 className="font-semibold mb-3">Core Mechanisms:</h5>
                              <ul className="space-y-2">
                                {defense.mechanisms.map((mechanism, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Zap className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{mechanism}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="implementation" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="font-semibold mb-3">Training Time:</h5>
                                <ul className="space-y-2">
                                  {defense.implementation.trainingTime.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <Code className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-semibold mb-3">Inference Time:</h5>
                                <ul className="space-y-2">
                                  {defense.implementation.inferenceTime.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <Activity className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="effectiveness" className="mt-4">
                            <div className="space-y-4">
                              <h5 className="font-semibold">Attack Effectiveness:</h5>
                              {Object.entries(defense.effectiveness).map(([attack, level]) => (
                                <div key={attack} className="flex items-center justify-between">
                                  <span className="text-sm capitalize">{attack.replace(/([A-Z])/g, ' $1')}</span>
                                  <Badge variant={
                                    level === 'Sehr Hoch' ? 'default' :
                                    level === 'Hoch' ? 'secondary' : 
                                    level === 'Mittel' ? 'outline' : 'destructive'
                                  }>
                                    {level}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="considerations" className="mt-4">
                            <div className="space-y-4">
                              <div>
                                <h5 className="font-semibold mb-3">Trade-offs:</h5>
                                <div className="grid grid-cols-2 gap-4">
                                  {Object.entries(defense.tradeoffs).map(([aspect, level]) => (
                                    <div key={aspect} className="flex items-center justify-between">
                                      <span className="text-sm capitalize">{aspect}</span>
                                      <Progress value={
                                        level === 'Sehr Hoch' ? 100 :
                                        level === 'Hoch' ? 80 :
                                        level === 'Mittel-Hoch' ? 70 :
                                        level === 'Mittel' ? 50 :
                                        level === 'Niedrig-Mittel' ? 30 : 20
                                      } className="w-20 h-2" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h5 className="font-semibold mb-3">Practical Considerations:</h5>
                                <ul className="space-y-2">
                                  {defense.practicalConsiderations.map((consideration, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{consideration}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Testing Framework Tab */}
          <TabsContent value="testing-framework" className="space-y-6">
            <div className="text-center mb-8">
              <h2 id="testing-framework-section" className="text-3xl font-bold mb-4 scroll-mt-24">Privacy Testing Framework</h2>
              <p className="text-lg text-gray-600">
                Systematische Tests zur Bewertung von Privacy Vulnerabilities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {testingFramework.map((test, index) => {
                const Icon = test.icon;
                return (
                  <Card key={test.testCategory} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl text-white">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{test.testCategory}</CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline">
                                {test.automationLevel} Automation
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {test.skillLevel} Skill
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{test.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Test Methods:</h4>
                          <ul className="space-y-1">
                            {test.testMethods.slice(0, 2).map((method, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <TestTube className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{method}</span>
                              </li>
                            ))}
                            {test.testMethods.length > 2 && (
                              <li className="text-xs text-gray-500">
                                +{test.testMethods.length - 2} weitere Methods...
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Execution Time:</span>
                            <p className="text-gray-600">{test.executionTime}</p>
                          </div>
                          <div>
                            <span className="font-medium">Automation:</span>
                            <p className="text-gray-600">{test.automationLevel}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Metrics:</h4>
                          <div className="flex flex-wrap gap-1">
                            {test.implementation.metrics.slice(0, 2).map((metric, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {metric}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t">
                          <Button className="w-full" size="sm">
                            <TestTube className="w-4 h-4 mr-2" />
                            Start Test
                          </Button>
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
              <h2 id="implementation-section" className="text-3xl font-bold mb-4 scroll-mt-24">Implementation Roadmap</h2>
              <p className="text-lg text-gray-600">
                Schritt-für-Schritt Anleitung für Model Privacy Protection
              </p>
            </div>

            {/* Defense Score Tracker */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Defense Implementation Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Defense Score</span>
                      <span>{Math.round(defenseScore)}%</span>
                    </div>
                    <Progress value={defenseScore} className="h-3" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className={cn(
                        "text-2xl font-bold",
                        defenseScore >= 80 ? "text-green-600" : 
                        defenseScore >= 60 ? "text-yellow-600" : "text-red-600"
                      )}>
                        {defenseScore >= 80 ? "Strong" : 
                         defenseScore >= 60 ? "Moderate" : "Vulnerable"}
                      </div>
                      <div className="text-sm text-gray-600">Defense Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {checkedItems.size}
                      </div>
                      <div className="text-sm text-gray-600">Implemented</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {defenseStrategies.length * 4 - checkedItems.size}
                      </div>
                      <div className="text-sm text-gray-600">Remaining</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Checklist */}
            <div className="space-y-4">
              {defenseStrategies.map((defense, categoryIndex) => (
                <Card key={defense.category}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <defense.icon className="w-5 h-5" />
                      {defense.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Implementation Tasks:</h4>
                      {defense.implementation.trainingTime.map((task, taskIndex) => {
                        const itemId = `${categoryIndex}-${taskIndex}`;
                        return (
                          <div key={taskIndex} className="flex items-start gap-3">
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
                              {task}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value="monitoring" className="space-y-6">
            <div className="text-center mb-8">
              <h2 id="monitoring-section" className="text-3xl font-bold mb-4 scroll-mt-24">Monitoring & Detection</h2>
              <p className="text-lg text-gray-600">
                Kontinuierliche Überwachung für Privacy Attacks und Model Integrity
              </p>
            </div>

            <div className="space-y-6">
              {monitoringFramework.map((monitoring, index) => {
                const Icon = monitoring.icon;
                return (
                  <Card key={monitoring.monitoringType} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{monitoring.monitoringType}</CardTitle>
                          <p className="text-gray-600 mt-1">{monitoring.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3">Detection Methods:</h4>
                            <ul className="space-y-2">
                              {monitoring.detectionMethods.map((method, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <Radar className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{method}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Key Metrics:</h4>
                            <ul className="space-y-2">
                              {monitoring.implementation.metrics.map((metric, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <BarChart3 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3">Business Value:</h4>
                            <ul className="space-y-2">
                              {monitoring.businessValue.map((value, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Infrastructure:</h4>
                            <ul className="space-y-2">
                              {monitoring.implementation.infrastructure.slice(0, 2).map((infra, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <Server className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{infra}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Next Steps CTA */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Bereit für Model Privacy Protection?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Starten Sie Ihre Model Privacy Initiative mit unseren spezialisierten Tools und Services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-red-600 to-orange-600">
                      <TestTube className="w-4 h-4 mr-2" />
                      Privacy Testing Suite
                    </Button>
                    <Button variant="outline">
                      <Shield className="w-4 h-4 mr-2" />
                      Defense Framework
                    </Button>
                    <Button variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Monitoring Setup
                    </Button>
                    <Button variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Expert Consulting
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ModelPrivacyAttacks;