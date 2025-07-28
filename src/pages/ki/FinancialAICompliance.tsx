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
  TrendingUp,
  DollarSign, 
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
  AlertTriangle,
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
  Building,
  TrendingDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const FinancialAICompliance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [complianceScore, setComplianceScore] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'regulatory-landscape', label: 'Regulatorik', icon: Scale },
    { id: 'algorithmic-trading', label: 'Algorithmic Trading', icon: TrendingUp },
    { id: 'risk-management', label: 'Risk Management', icon: AlertTriangle },
    { id: 'compliance-framework', label: 'Compliance Framework', icon: CheckSquare },
    { id: 'implementation', label: 'Implementation', icon: Code }
  ];

  const regulatoryFramework = [
    {
      regulation: 'MiFID II (2014/65/EU)',
      scope: 'EU-weite Finanzmarktregulierung',
      relevance: 'Algorithmic Trading, Best Execution, Market Making',
      keyRequirements: [
        'Algorithm Definition und Dokumentation',
        'Risk Controls und Circuit Breakers',
        'Market Making Obligations',
        'Best Execution Requirements',
        'Real-time Monitoring und Reporting',
        'Business Continuity Planning'
      ],
      aiSpecificRules: [
        'Algorithmus muss klar definiert und dokumentiert sein',
        'Kontinuierliche Überwachung erforderlich',
        'Kill Switches und Risk Limits mandatory',
        'Human Oversight bei kritischen Entscheidungen',
        'Backtesting und Stress Testing',
        'Regelmäßige Algorithm Reviews'
      ],
      penalties: 'Bis zu 5 Mio. € oder 10% des Jahresumsatzes',
      implementations: 'Seit 2018 voll wirksam',
      icon: Scale,
      color: 'from-blue-500 to-cyan-500',
      complexity: 'Hoch'
    },
    {
      regulation: 'Basel III/IV Framework',
      scope: 'Internationale Bankenregulierung',
      relevance: 'Credit Risk, Operational Risk, Model Risk Management',
      keyRequirements: [
        'Model Risk Management (SR 11-7)',
        'Model Validation und Governance',
        'Stress Testing Requirements',
        'Capital Adequacy Assessment',
        'Liquidity Risk Management',
        'Operational Risk Framework'
      ],
      aiSpecificRules: [
        'ML Models gelten als High-Risk Models',
        'Independent Model Validation erforderlich',
        'Model Interpretability Requirements',
        'Continuous Model Monitoring',
        'Model Performance Backtesting',
        'Documentation Standards für AI Models'
      ],
      penalties: 'Regulatory Sanctions, Capital Add-ons',
      implementations: 'Schrittweise bis 2028',
      icon: Building,
      color: 'from-green-500 to-teal-500',
      complexity: 'Sehr Hoch'
    },
    {
      regulation: 'PCI DSS (Payment Card Industry)',
      scope: 'Zahlungskartenindustrie',
      relevance: 'Fraud Detection, Payment Processing, Data Security',
      keyRequirements: [
        'Secure Network Architecture',
        'Cardholder Data Protection',
        'Vulnerability Management',
        'Access Control Measures',
        'Network Monitoring',
        'Information Security Policy'
      ],
      aiSpecificRules: [
        'AI Models dürfen keine Cardholder Data leaken',
        'Encryption von ML Training Data',
        'Secure AI Model Deployment',
        'AI System Access Controls',
        'Model Inference Logging',
        'AI Incident Response Procedures'
      ],
      penalties: 'Fines bis zu $500k per Incident',
      implementations: 'Version 4.0 seit 2022',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-500',
      complexity: 'Mittel'
    },
    {
      regulation: 'GDPR/DSGVO Art. 22',
      scope: 'EU Datenschutzgrundverordnung',
      relevance: 'Automated Decision Making, Profiling, Credit Scoring',
      keyRequirements: [
        'Recht auf menschliche Intervention',
        'Aussagekräftige Informationen über Logik',
        'Recht auf Erklärung',
        'Recht auf Widerspruch',
        'Angemessene Schutzmaßnahmen',
        'Regelmäßige Überprüfung'
      ],
      aiSpecificRules: [
        'Explainable AI für automatisierte Entscheidungen',
        'Human-in-the-Loop bei rechtlichen Auswirkungen',
        'Privacy by Design für AI Systems',
        'Data Minimization für Training Data',
        'Right to Rectification für AI Decisions',
        'Impact Assessments für High-Risk AI'
      ],
      penalties: 'Bis zu 20 Mio. € oder 4% des Jahresumsatzes',
      implementations: 'Seit 2018 voll wirksam',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      complexity: 'Hoch'
    }
  ];

  const algorithmicTradingRequirements = [
    {
      category: 'Algorithm Definition & Documentation',
      description: 'Vollständige Beschreibung und Dokumentation der Trading-Algorithmen',
      requirements: [
        'Algorithmus-Logik und Entscheidungsparameter',
        'Risk Parameters und Limits',
        'Market Data Dependencies',
        'Execution Logic und Order Types',
        'Performance Metrics und KPIs',
        'Version Control und Change Management'
      ],
      aiSpecificConsiderations: [
        'Model Architecture Documentation',
        'Training Data Specifications',
        'Feature Engineering Documentation',
        'Model Performance Metrics',
        'Hyperparameter Documentation',
        'Model Interpretability Methods'
      ],
      implementationSteps: [
        'Technical Documentation erstellen',
        'Business Logic dokumentieren',
        'Risk Framework definieren',
        'Testing Procedures etablieren',
        'Change Management Prozesse',
        'Regulatory Reporting Setup'
      ],
      toolsAndTechnologies: [
        'Algorithm Documentation Platforms',
        'Version Control Systems (Git)',
        'Model Registry Solutions',
        'API Documentation Tools',
        'Compliance Management Systems',
        'Audit Trail Technologies'
      ],
      commonChallenges: [
        'Black Box Models erklärbar machen',
        'Dynamic Model Updates dokumentieren',
        'Real-time Documentation Updates',
        'Technical vs. Business Documentation',
        'Multi-jurisdictional Requirements',
        'Legacy System Integration'
      ],
      icon: FileText
    },
    {
      category: 'Risk Controls & Circuit Breakers',
      description: 'Technische Sicherungsmaßnahmen zur Risikobegrenzung',
      requirements: [
        'Pre-trade Risk Controls',
        'Real-time Position Monitoring',
        'Automatic Kill Switches',
        'Price und Volume Limits',
        'Market Impact Controls',
        'Latency Monitoring'
      ],
      aiSpecificConsiderations: [
        'Model Drift Detection',
        'Anomaly Detection Systems',
        'Confidence Thresholds',
        'Model Performance Monitoring',
        'Data Quality Checks',
        'Adversarial Attack Detection'
      ],
      implementationSteps: [
        'Risk Framework Design',
        'Technical Infrastructure Setup',
        'Monitoring Systems Implementation',
        'Alert und Escalation Procedures',
        'Testing und Validation',
        'Incident Response Planning'
      ],
      toolsAndTechnologies: [
        'Real-time Risk Engines',
        'Market Data Platforms',
        'Alert Management Systems',
        'Circuit Breaker Technologies',
        'Performance Monitoring Tools',
        'Incident Management Platforms'
      ],
      commonChallenges: [
        'Latency vs. Risk Control Trade-offs',
        'False Positive Management',
        'Market Regime Changes',
        'Cross-Asset Risk Aggregation',
        'Real-time Model Validation',
        'Regulatory Reporting Speed'
      ],
      icon: AlertTriangle
    },
    {
      category: 'Market Making & Liquidity Provision',
      description: 'Pflichten für algorithmische Market Making Aktivitäten',
      requirements: [
        'Kontinuierliche Quote-Bereitstellung',
        'Maximum Spread Requirements',
        'Minimum Quote Size',
        'Quote Response Time',
        'Market Stress Procedures',
        'Withdrawal Notifications'
      ],
      aiSpecificConsiderations: [
        'Dynamic Spread Optimization',
        'Inventory Risk Management',
        'Market Microstructure Learning',
        'Adverse Selection Detection',
        'Quote Skewing Algorithms',
        'Liquidity Prediction Models'
      ],
      implementationSteps: [
        'Market Making Strategy Definition',
        'Infrastructure Setup',
        'Risk Management Integration',
        'Regulatory Compliance Checks',
        'Performance Monitoring',
        'Stress Testing Implementation'
      ],
      toolsAndTechnologies: [
        'Market Making Platforms',
        'Order Management Systems',
        'Risk Management Solutions',
        'Market Data Analytics',
        'Latency Monitoring Tools',
        'Regulatory Reporting Systems'
      ],
      commonChallenges: [
        'Profitability vs. Obligations Balance',
        'Market Volatility Management',
        'Technology Infrastructure Costs',
        'Regulatory Changes Adaptation',
        'Cross-Market Coordination',
        'Inventory Risk Optimization'
      ],
      icon: TrendingUp
    },
    {
      category: 'Best Execution & Transaction Reporting',
      description: 'Bestmögliche Ausführung und Transparenz-Anforderungen',
      requirements: [
        'Best Execution Policy',
        'Transaction Cost Analysis',
        'Venue Selection Criteria',
        'Execution Quality Reports',
        'Post-Trade Transparency',
        'Client Reporting'
      ],
      aiSpecificConsiderations: [
        'AI-driven Venue Selection',
        'Dynamic Execution Strategies',
        'Transaction Cost Prediction',
        'Market Impact Optimization',
        'Execution Quality Metrics',
        'Algorithmic Performance Analysis'
      ],
      implementationSteps: [
        'Best Execution Framework',
        'TCA System Implementation',
        'Reporting Infrastructure',
        'Quality Assurance Processes',
        'Client Communication Setup',
        'Continuous Improvement Loop'
      ],
      toolsAndTechnologies: [
        'Transaction Cost Analysis Tools',
        'Execution Management Systems',
        'Market Data Platforms',
        'Reporting und Analytics Tools',
        'Performance Attribution Systems',
        'Client Portal Solutions'
      ],
      commonChallenges: [
        'Multi-dimensional Optimization',
        'Real-time Decision Making',
        'Data Quality und Availability',
        'Client Expectation Management',
        'Regulatory Interpretation',
        'Technology Integration Complexity'
      ],
      icon: Target
    }
  ];

  const riskManagementFramework = [
    {
      riskType: 'Model Risk',
      definition: 'Risiko von finanziellen Verlusten durch fehlerhafte oder unpassende Modelle',
      specificToAI: [
        'Overfitting und Generalization Gaps',
        'Data Drift und Concept Drift',
        'Adversarial Attacks auf Models',
        'Black Box Interpretability Issues',
        'Training Data Bias',
        'Model Performance Degradation'
      ],
      mitigationStrategies: [
        'Independent Model Validation',
        'Continuous Model Monitoring',
        'A/B Testing für Model Updates',
        'Shadow Mode Deployment',
        'Model Ensemble Approaches',
        'Regular Model Retraining'
      ],
      governanceRequirements: [
        'Model Risk Committee',
        'Model Inventory Management',
        'Model Documentation Standards',
        'Model Approval Processes',
        'Performance Monitoring KPIs',
        'Model Retirement Procedures'
      ],
      regulatoryGuidance: [
        'Basel III Model Risk Management',
        'SR 11-7 (US Federal Reserve)',
        'EBA Guidelines on Internal Models',
        'BCBS Principles for Sound Stress Testing'
      ],
      icon: Brain,
      severity: 'High',
      frequency: 'Medium'
    },
    {
      riskType: 'Operational Risk',
      definition: 'Risiko von Verlusten durch unzureichende oder versagende interne Prozesse',
      specificToAI: [
        'Algorithm Failure oder Malfunctions',
        'Data Pipeline Failures',
        'Model Deployment Errors',
        'Infrastructure Outages',
        'Cybersecurity Vulnerabilities',
        'Human Error in AI Operations'
      ],
      mitigationStrategies: [
        'Robust Testing und Quality Assurance',
        'Redundant System Architecture',
        'Real-time Monitoring und Alerting',
        'Business Continuity Planning',
        'Incident Response Procedures',
        'Regular Disaster Recovery Testing'
      ],
      governanceRequirements: [
        'Operational Risk Framework',
        'Technology Risk Management',
        'Business Continuity Planning',
        'Incident Management Processes',
        'Change Management Controls',
        'Third-Party Risk Management'
      ],
      regulatoryGuidance: [
        'Basel III Operational Risk Framework',
        'EBA Guidelines on ICT Risk Management',
        'PCI DSS for Payment Systems',
        'ISO 31000 Risk Management'
      ],
      icon: Settings,
      severity: 'High',
      frequency: 'High'
    },
    {
      riskType: 'Market Risk',
      definition: 'Risiko von Verlusten durch ungünstige Marktpreisbewegungen',
      specificToAI: [
        'Model-based Trading Losses',
        'Market Regime Change Impacts',
        'Liquidity Risk in AI Trading',
        'Concentration Risk durch AI Bias',
        'Flash Crashes durch Algorithmic Trading',
        'Cross-Asset Correlation Breakdown'
      ],
      mitigationStrategies: [
        'Dynamic Risk Limits',
        'Stress Testing und Scenario Analysis',
        'Diversification Strategies',
        'Hedging Mechanisms',
        'Real-time P&L Monitoring',
        'Circuit Breakers und Kill Switches'
      ],
      governanceRequirements: [
        'Market Risk Committee',
        'Risk Limit Framework',
        'Value-at-Risk Models',
        'Stress Testing Programs',
        'Risk Reporting Standards',
        'Portfolio Management Controls'
      ],
      regulatoryGuidance: [
        'Basel III Market Risk Framework',
        'FRTB (Fundamental Review of Trading Book)',
        'MiFID II Risk Management',
        'IOSCO Principles for Financial Benchmarks'
      ],
      icon: TrendingDown,
      severity: 'Very High',
      frequency: 'High'
    },
    {
      riskType: 'Compliance Risk',
      definition: 'Risiko von regulatorischen Sanktionen durch Nichteinhaltung von Vorschriften',
      specificToAI: [
        'Algorithmic Trading Compliance Failures',
        'Data Privacy Violations',
        'Discriminatory AI Decisions',
        'Inadequate Model Documentation',
        'Missing Human Oversight',
        'Regulatory Reporting Errors'
      ],
      mitigationStrategies: [
        'Comprehensive Compliance Framework',
        'Regular Regulatory Training',
        'Automated Compliance Monitoring',
        'Legal Review Processes',
        'Regulatory Change Management',
        'External Compliance Audits'
      ],
      governanceRequirements: [
        'Compliance Committee',
        'Regulatory Risk Assessment',
        'Compliance Monitoring Program',
        'Policy Management Framework',
        'Training und Awareness Programs',
        'Incident Reporting Procedures'
      ],
      regulatoryGuidance: [
        'MiFID II Compliance Requirements',
        'GDPR/DSGVO Art. 22',
        'PCI DSS Compliance Standards',
        'Basel III Compliance Framework'
      ],
      icon: Scale,
      severity: 'Very High',
      frequency: 'Medium'
    }
  ];

  const complianceChecklist = [
    {
      category: 'Regulatory Documentation',
      items: [
        'Algorithm-Definition vollständig dokumentiert',
        'Risk Management Framework implementiert',
        'Compliance Policies aktualisiert und genehmigt',
        'Model Validation Procedures etabliert',
        'Regulatory Reporting Processes eingerichtet',
        'Business Continuity Plan erstellt und getestet',
        'Data Protection Impact Assessment durchgeführt',
        'Third-Party Risk Assessments abgeschlossen'
      ],
      weight: 30
    },
    {
      category: 'Technical Implementation',
      items: [
        'Pre-trade Risk Controls implementiert',
        'Real-time Monitoring System operativ',
        'Circuit Breakers und Kill Switches getestet',
        'Model Performance Monitoring eingerichtet',
        'Data Quality Checks automatisiert',
        'Backup und Recovery Systeme validiert',
        'Security Controls implementiert und getestet',
        'API und Interface Documentation aktuell'
      ],
      weight: 25
    },
    {
      category: 'Governance & Oversight',
      items: [
        'Risk Committee etabliert und aktiv',
        'Model Approval Prozesse definiert',
        'Human Oversight Procedures implementiert',
        'Change Management Framework operativ',
        'Incident Response Procedures getestet',
        'Regular Model Reviews geplant',
        'Compliance Training durchgeführt',
        'External Audit Schedule definiert'
      ],
      weight: 20
    },
    {
      category: 'Testing & Validation',
      items: [
        'Backtesting Framework implementiert',
        'Stress Testing Scenarios definiert',
        'Model Validation completed',
        'Penetration Testing durchgeführt',
        'User Acceptance Testing abgeschlossen',
        'Performance Testing validiert',
        'Disaster Recovery Testing erfolgreich',
        'Regulatory Sandbox Testing (falls anwendbar)'
      ],
      weight: 15
    },
    {
      category: 'Reporting & Monitoring',
      items: [
        'Daily Risk Reports automatisiert',
        'Regulatory Reporting Templates erstellt',
        'Real-time Dashboard operativ',
        'Exception Reporting eingerichtet',
        'Performance Analytics verfügbar',
        'Audit Trail Logging aktiviert',
        'Client Reporting Capabilities getestet',
        'Management Information System operativ'
      ],
      weight: 10
    }
  ];

  const practicalImplementationGuide = [
    {
      phase: 'Assessment & Planning',
      duration: '4-6 Wochen',
      description: 'Umfassende Analyse der aktuellen Situation und Compliance-Gaps',
      keyActivities: [
        'Regulatory Landscape Analysis',
        'Current State Assessment',
        'Gap Analysis durchführen',
        'Risk Assessment und Impact Analysis',
        'Implementation Roadmap erstellen',
        'Budget und Resource Planning'
      ],
      deliverables: [
        'Compliance Gap Assessment Report',
        'Regulatory Requirements Matrix',
        'Risk Assessment Documentation',
        'Implementation Roadmap',
        'Resource und Budget Plan',
        'Executive Summary für Management'
      ],
      stakeholders: [
        'Compliance Officer',
        'Risk Manager',
        'Technology Lead',
        'Legal Counsel',
        'Business Unit Heads',
        'External Consultants'
      ],
      successCriteria: [
        'Vollständige Gap Identifikation',
        'Klare Implementation Priorities',
        'Management Buy-in erhalten',
        'Realistic Timeline definiert'
      ],
      icon: Search
    },
    {
      phase: 'Framework Design',
      duration: '6-8 Wochen',
      description: 'Design der Compliance- und Risk Management Frameworks',
      keyActivities: [
        'Governance Structure Definition',
        'Policy und Procedure Development',
        'Technical Architecture Design',
        'Control Framework Implementation',
        'Monitoring Framework Setup',
        'Reporting Framework Design'
      ],
      deliverables: [
        'Governance Charter',
        'Policy und Procedure Documents',
        'Technical Architecture Blueprint',
        'Control Matrix',
        'Monitoring Framework Specification',
        'Reporting Templates'
      ],
      stakeholders: [
        'Risk Committee',
        'Technology Architecture Team',
        'Legal und Compliance',
        'Business Process Owners',
        'External Advisors'
      ],
      successCriteria: [
        'Comprehensive Framework Design',
        'Regulatory Approval (falls erforderlich)',
        'Technical Feasibility confirmed',
        'Stakeholder Alignment achieved'
      ],
      icon: Layers
    },
    {
      phase: 'Technical Implementation',
      duration: '12-16 Wochen',
      description: 'Technische Umsetzung der Compliance-Infrastruktur',
      keyActivities: [
        'Risk Control Systems Development',
        'Monitoring Infrastructure Setup',
        'Reporting System Implementation',
        'Integration Testing',
        'Security Implementation',
        'Performance Optimization'
      ],
      deliverables: [
        'Production-ready Systems',
        'Integration Test Results',
        'Security Assessment Report',
        'Performance Benchmarks',
        'User Documentation',
        'Operational Procedures'
      ],
      stakeholders: [
        'Development Team',
        'Infrastructure Team',
        'Security Team',
        'QA Team',
        'Business Users',
        'External Vendors'
      ],
      successCriteria: [
        'All Systems operational',
        'Performance requirements met',
        'Security requirements satisfied',
        'Integration tests passed'
      ],
      icon: Code
    },
    {
      phase: 'Testing & Validation',
      duration: '4-6 Wochen',
      description: 'Umfassende Tests und Validierung aller Systeme',
      keyActivities: [
        'End-to-End Testing',
        'Stress Testing durchführen',
        'Regulatory Compliance Testing',
        'User Acceptance Testing',
        'Disaster Recovery Testing',
        'Performance Validation'
      ],
      deliverables: [
        'Test Execution Reports',
        'Validation Certificates',
        'Performance Test Results',
        'Compliance Verification',
        'User Acceptance Sign-off',
        'Go-Live Readiness Assessment'
      ],
      stakeholders: [
        'QA Team',
        'Business Users',
        'Compliance Team',
        'Risk Management',
        'External Auditors',
        'Regulatory Contacts'
      ],
      successCriteria: [
        'All tests passed successfully',
        'Regulatory requirements validated',
        'User acceptance achieved',
        'Go-live approval received'
      ],
      icon: CheckSquare
    },
    {
      phase: 'Go-Live & Monitoring',
      duration: 'Ongoing',
      description: 'Produktive Einführung und kontinuierliche Überwachung',
      keyActivities: [
        'Production Deployment',
        'Real-time Monitoring Setup',
        'Incident Response Procedures',
        'Performance Monitoring',
        'Continuous Improvement',
        'Regular Compliance Reviews'
      ],
      deliverables: [
        'Production System',
        'Monitoring Dashboard',
        'Incident Response Plan',
        'Performance Reports',
        'Compliance Status Reports',
        'Improvement Recommendations'
      ],
      stakeholders: [
        'Operations Team',
        'Risk Management',
        'Compliance Officer',
        'Business Management',
        'External Auditors',
        'Regulatory Bodies'
      ],
      successCriteria: [
        'Stable production operation',
        'Compliance objectives met',
        'No regulatory issues',
        'Continuous improvement achieved'
      ],
      icon: Activity
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
    
    // Calculate compliance score
    const totalItems = complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
    const weightedScore = complianceChecklist.reduce((acc, cat) => {
      const categoryChecked = cat.items.filter((_, idx) => 
        newChecked.has(`${complianceChecklist.indexOf(cat)}-${idx}`)
      ).length;
      return acc + (categoryChecked / cat.items.length) * cat.weight;
    }, 0);
    
    setComplianceScore(weightedScore);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30" />
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
              <div className="p-4 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl shadow-2xl">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              Financial AI & Algorithmic Trading Rules
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Navigieren Sie sicher durch die komplexe Regulatorik von KI im Finanzsektor: 
              MiFID II, Basel III, PCI DSS und DSGVO-konforme Algorithmic Trading Systeme
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Scale className="w-4 h-4 mr-2" />
                4 Regulatory Frameworks
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <TrendingUp className="w-4 h-4 mr-2" />
                Algorithmic Trading
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <CheckSquare className="w-4 h-4 mr-2" />
                Compliance Framework
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
              <h2 className="text-3xl font-bold mb-4">Financial AI Regulatory Landscape</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Der Finanzsektor unterliegt strengen regulatorischen Anforderungen, die sich mit dem Einsatz 
                von KI und algorithmischen Trading-Systemen deutlich verschärfen. Diese Seite hilft Ihnen dabei, 
                compliant und erfolgreich zu bleiben.
              </p>
            </div>

            {/* Key Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Regulatory Complexity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Multiple überlappende Regulierungen mit spezifischen AI-Anforderungen 
                    erfordern koordinierte Compliance-Strategien.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">MiFID II & Algorithmic Trading</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Basel III/IV Model Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-purple-500" />
                      <span className="text-sm">GDPR Article 22</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    Technical Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Real-time Monitoring, Circuit Breakers und explainable AI sind 
                    technische Mindestanforderungen für Financial AI.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">Real-time Risk Controls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm">Model Interpretability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Continuous Monitoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="w-5 h-5 text-blue-500" />
                    Business Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Non-Compliance kann zu erheblichen Strafen und operationellen 
                    Einschränkungen führen.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      <span className="text-sm">Bis zu 10% Jahresumsatz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Licensing Restrictions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-red-500" />
                      <span className="text-sm">Reputation Damage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why This Matters */}
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  Warum Financial AI Compliance kritisch ist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Business Opportunities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Competitive Advantage durch konforme AI-Innovation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Früher Markteintritt in regulierten AI-Bereichen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Vertrauen von Kunden und Regulatoren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Reduced regulatory scrutiny</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Risk Mitigation:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Vermeidung von Multi-Millionen-Euro Strafen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Schutz vor License Revocation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Operational Risk Reduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Legal Liability Protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Navigation */}
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
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <h4 className="font-semibold">{tab.label}</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {index === 0 && 'Überblick über MiFID II, Basel III, PCI DSS und GDPR'}
                          {index === 1 && 'Spezifische Anforderungen für Algorithmic Trading'}
                          {index === 2 && 'Model Risk und Operational Risk Management'}
                          {index === 3 && 'Praktisches Compliance Framework'}
                          {index === 4 && '5-Phasen Implementation Roadmap'}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Regulatory Landscape Tab */}
          <TabsContent value="regulatory-landscape" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Regulatory Landscape</h2>
              <p className="text-lg text-gray-600">
                Die vier wichtigsten Regulierungsrahmen für Financial AI
              </p>
            </div>

            <div className="space-y-6">
              {regulatoryFramework.map((regulation, index) => {
                const Icon = regulation.icon;
                return (
                  <motion.div
                    key={regulation.regulation}
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
                              regulation.color
                            )}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-2xl">{regulation.regulation}</CardTitle>
                                <Badge variant="outline">Komplexität: {regulation.complexity}</Badge>
                              </div>
                              <p className="text-gray-600 mb-1">{regulation.scope}</p>
                              <p className="text-sm text-gray-500">{regulation.relevance}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(`reg-${index}`)}
                          >
                            <ChevronDown className={cn(
                              "w-4 h-4 transition-transform",
                              expandedSection === `reg-${index}` && "rotate-180"
                            )} />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      {expandedSection === `reg-${index}` && (
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <FileText className="w-4 h-4" />
                                  Allgemeine Anforderungen
                                </h4>
                                <ul className="space-y-2">
                                  {regulation.keyRequirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <CheckCircle2 className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="p-4 bg-red-50 rounded-lg">
                                <h4 className="font-semibold mb-2 text-red-800">Penalties</h4>
                                <p className="text-sm text-red-700">{regulation.penalties}</p>
                                <div className="mt-2">
                                  <Badge variant="outline" className="text-red-600 border-red-300">
                                    {regulation.implementations}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Brain className="w-4 h-4 text-purple-500" />
                                AI-Spezifische Regeln
                              </h4>
                              <ul className="space-y-2">
                                {regulation.aiSpecificRules.map((rule, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Sparkles className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{rule}</span>
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

          {/* Algorithmic Trading Tab */}
          <TabsContent value="algorithmic-trading" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Algorithmic Trading Requirements</h2>
              <p className="text-lg text-gray-600">
                Spezifische Compliance-Anforderungen für algorithmische Trading-Systeme
              </p>
            </div>

            <div className="space-y-6">
              {algorithmicTradingRequirements.map((requirement, index) => {
                const Icon = requirement.icon;
                return (
                  <Card key={requirement.category} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{requirement.category}</CardTitle>
                            <p className="text-gray-600">{requirement.description}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(`trading-${index}`)}
                        >
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            expandedSection === `trading-${index}` && "rotate-180"
                          )} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {expandedSection === `trading-${index}` && (
                      <CardContent>
                        <Tabs defaultValue="requirements" className="w-full">
                          <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="requirements">Requirements</TabsTrigger>
                            <TabsTrigger value="ai-considerations">AI-Specific</TabsTrigger>
                            <TabsTrigger value="implementation">Implementation</TabsTrigger>
                            <TabsTrigger value="tools">Tools</TabsTrigger>
                            <TabsTrigger value="challenges">Challenges</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="requirements" className="mt-4">
                            <ul className="space-y-2">
                              {requirement.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                          
                          <TabsContent value="ai-considerations" className="mt-4">
                            <ul className="space-y-2">
                              {requirement.aiSpecificConsiderations.map((consideration, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <Brain className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{consideration}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                          
                          <TabsContent value="implementation" className="mt-4">
                            <ol className="space-y-2">
                              {requirement.implementationSteps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm">
                                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
                                    {idx + 1}
                                  </span>
                                  <span className="text-gray-700">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </TabsContent>
                          
                          <TabsContent value="tools" className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {requirement.toolsAndTechnologies.map((tool, idx) => (
                                <Badge key={idx} variant="outline" className="justify-start p-2">
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="challenges" className="mt-4">
                            <ul className="space-y-2">
                              {requirement.commonChallenges.map((challenge, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Risk Management Tab */}
          <TabsContent value="risk-management" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Risk Management Framework</h2>
              <p className="text-lg text-gray-600">
                Umfassendes Risikomanagement für Financial AI Systeme
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {riskManagementFramework.map((risk, index) => {
                const Icon = risk.icon;
                return (
                  <Card key={risk.riskType} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl text-white">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{risk.riskType}</CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge variant={risk.severity === 'Very High' ? 'destructive' : risk.severity === 'High' ? 'default' : 'secondary'}>
                                {risk.severity}
                              </Badge>
                              <Badge variant="outline">
                                {risk.frequency} Frequency
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{risk.definition}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">AI-Spezifische Risiken:</h4>
                          <ul className="space-y-1">
                            {risk.specificToAI.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                            {risk.specificToAI.length > 3 && (
                              <li className="text-xs text-gray-500">
                                +{risk.specificToAI.length - 3} weitere...
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Mitigation Strategies:</h4>
                          <ul className="space-y-1">
                            {risk.mitigationStrategies.slice(0, 3).map((strategy, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <Shield className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{strategy}</span>
                              </li>
                            ))}
                            {risk.mitigationStrategies.length > 3 && (
                              <li className="text-xs text-gray-500">
                                +{risk.mitigationStrategies.length - 3} weitere...
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Regulatory Guidance:</h4>
                          <div className="flex flex-wrap gap-1">
                            {risk.regulatoryGuidance.map((guidance, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {guidance}
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

          {/* Compliance Framework Tab */}
          <TabsContent value="compliance-framework" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Compliance Framework</h2>
              <p className="text-lg text-gray-600">
                Überprüfen Sie Ihre Compliance-Readiness
              </p>
            </div>

            {/* Compliance Score */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Compliance Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Gesamt-Compliance</span>
                      <span>{Math.round(complianceScore)}%</span>
                    </div>
                    <Progress value={complianceScore} className="h-3" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className={cn(
                        "text-2xl font-bold",
                        complianceScore >= 80 ? "text-green-600" : 
                        complianceScore >= 60 ? "text-yellow-600" : "text-red-600"
                      )}>
                        {complianceScore >= 80 ? "Excellent" : 
                         complianceScore >= 60 ? "Good" : "Needs Work"}
                      </div>
                      <div className="text-sm text-gray-600">Status</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {checkedItems.size}
                      </div>
                      <div className="text-sm text-gray-600">Items Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0) - checkedItems.size}
                      </div>
                      <div className="text-sm text-gray-600">Remaining</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Checklist */}
            <div className="space-y-4">
              {complianceChecklist.map((category, categoryIndex) => (
                <Card key={category.category}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <Badge variant="outline">
                        Weight: {category.weight}%
                      </Badge>
                    </div>
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
          </TabsContent>

          {/* Implementation Tab */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
              <p className="text-lg text-gray-600">
                5-Phasen Ansatz für erfolgreiche Financial AI Compliance
              </p>
            </div>

            <div className="space-y-6">
              {practicalImplementationGuide.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={phase.phase} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white">
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
                          onClick={() => toggleExpanded(`impl-${index}`)}
                        >
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            expandedSection === `impl-${index}` && "rotate-180"
                          )} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {expandedSection === `impl-${index}` && (
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-3">Key Activities:</h4>
                              <ul className="space-y-2">
                                {phase.keyActivities.map((activity, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Stakeholders:</h4>
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
                              <h4 className="font-semibold mb-3">Deliverables:</h4>
                              <ul className="space-y-2">
                                {phase.deliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <FileCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Success Criteria:</h4>
                              <ul className="space-y-2">
                                {phase.successCriteria.map((criteria, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Target className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{criteria}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Next Steps CTA */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Bereit für den Start?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Beginnen Sie Ihre Financial AI Compliance Journey mit unseren praktischen Tools und Templates.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600">
                      <Download className="w-4 h-4 mr-2" />
                      Compliance Assessment
                    </Button>
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Implementation Templates
                    </Button>
                    <Button variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Expert Beratung
                    </Button>
                    <Button variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Workshop buchen
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

export default FinancialAICompliance;