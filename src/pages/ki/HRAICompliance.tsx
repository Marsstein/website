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
  Users,
  Briefcase, 
  Shield, 
  FileText, 
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
  TrendingUp as Growth,
  Zap as Lightning,
  ShieldX,
  AlertOctagon,
  UserCog,
  Calendar as CalendarIcon,
  Clock3,
  Timer as TimerIcon,
  Hourglass,
  StopCircle,
  PlayCircle,
  PauseCircle,
  SkipForward as Skip,
  Rewind as Back,
  RotateCcw as Reset,
  RotateCw as Refresh,
  Repeat as Loop
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const HRAICompliance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [biasTestResults, setBiasTestResults] = useState<any[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'legal-framework', label: 'Rechtslage', icon: Scale },
    { id: 'bias-discrimination', label: 'Bias & Diskriminierung', icon: Users },
    { id: 'transparency', label: 'Transparenz & Erklärbarkeit', icon: Eye },
    { id: 'implementation', label: 'Praktische Umsetzung', icon: Code },
    { id: 'compliance-tools', label: 'Tools & Tests', icon: Wrench }
  ];

  const legalFramework = [
    {
      law: 'EU AI Act (2024)',
      scope: 'EU-weite KI-Regulierung',
      relevanceToHR: 'High-Risk AI Systems in Employment',
      keyProvisions: [
        'HR AI als High-Risk System klassifiziert',
        'Conformity Assessment vor Deployment',
        'Menschliche Aufsicht zwingend erforderlich',
        'Transparenz und Dokumentationspflichten',
        'Kontinuierliches Monitoring und Testing',
        'CE-Kennzeichnung für HR AI Systeme'
      ],
      hrSpecificRequirements: [
        'Bias Testing für geschützte Merkmale',
        'Erklärbarkeit von Personalentscheidungen',
        'Human-in-the-Loop bei finalen Entscheidungen',
        'Regelmäßige Fairness-Audits',
        'Dokumentation von Training Data',
        'Impact Assessment für Grundrechte'
      ],
      penalties: 'Bis zu 35 Mio. € oder 7% des weltweiten Jahresumsatzes',
      effectiveDate: 'Stufenweise ab Februar 2025, voll wirksam ab 2027',
      icon: Scale,
      color: 'from-blue-500 to-purple-500'
    },
    {
      law: 'Allgemeines Gleichbehandlungsgesetz (AGG)',
      scope: 'Deutsches Antidiskriminierungsrecht',
      relevanceToHR: 'Verbot der Diskriminierung in allen HR-Prozessen',
      keyProvisions: [
        'Schutz vor Diskriminierung nach 8 Merkmalen',
        'Objektive Rechtfertigung bei mittelbarer Diskriminierung',
        'Beweislasterleichterung für Betroffene',
        'Beschwerderecht und Entschädigungsansprüche',
        'Maßregelungsverbot für Beschwerdeführer',
        'Positive Maßnahmen zur Förderung erlaubt'
      ],
      hrSpecificRequirements: [
        'AI darf nicht systematisch benachteiligen',
        'Stellenausschreibungen müssen diskriminierungsfrei sein',
        'Algorithmic Fairness über geschützte Gruppen',
        'Transparenz bei automatisierten Entscheidungen',
        'Beschwerdemechanismen für AI-Entscheidungen',
        'Schulungen zu unbewussten Vorurteilen'
      ],
      penalties: 'Entschädigung bis zu 3 Monatsgehältern',
      effectiveDate: 'Seit 2006 in Kraft',
      icon: Users,
      color: 'from-green-500 to-teal-500'
    },
    {
      law: 'DSGVO Artikel 22',
      scope: 'Automatisierte Entscheidungsfindung',
      relevanceToHR: 'Schutz vor vollautomatisierten HR-Entscheidungen',
      keyProvisions: [
        'Grundsätzliches Verbot automatisierter Entscheidungen',
        'Ausnahmen bei Vertragserfüllung oder Einwilligung',
        'Recht auf menschliche Intervention',
        'Recht auf Erklärung der Entscheidungslogik',
        'Recht auf Anfechtung der Entscheidung',
        'Angemessene Schutzmaßnahmen erforderlich'
      ],
      hrSpecificRequirements: [
        'Human Review bei allen finalen HR-Entscheidungen',
        'Explainable AI für Bewerbungsentscheidungen',
        'Opt-out Möglichkeit für Bewerber',
        'Dokumentation der Entscheidungslogik',
        'Data Protection Impact Assessment',
        'Privacy by Design Implementation'
      ],
      penalties: 'Bis zu 20 Mio. € oder 4% des Jahresumsatzes',
      effectiveDate: 'Seit Mai 2018 in Kraft',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      law: 'Betriebsverfassungsgesetz (BetrVG)',
      scope: 'Mitbestimmungsrechte des Betriebsrats',
      relevanceToHR: 'Mitbestimmung bei technischen Überwachungseinrichtungen',
      keyProvisions: [
        '§ 87 Abs. 1 Nr. 6 - Mitbestimmung bei Überwachung',
        '§ 94 - Mitbestimmung bei Personalfragebögen',
        '§ 95 - Mitbestimmung bei Auswahlrichtlinien',
        'Informations- und Beratungsrechte',
        'Zustimmungsverweigerung bei Rechtsverstößen',
        'Initiativrecht bei Datenschutz'
      ],
      hrSpecificRequirements: [
        'Betriebsvereinbarung für HR AI erforderlich',
        'Transparenz über AI-Funktionsweise',
        'Schulung der Betriebsratsmitglieder',
        'Regelmäßige Überprüfung der AI-Systeme',
        'Beschwerdemöglichkeiten etablieren',
        'Datenschutz-Folgenabschätzung gemeinsam'
      ],
      penalties: 'Bußgeld bis zu 10.000 €, Unterlassungsansprüche',
      effectiveDate: 'Kontinuierlich weiterentwickelt seit 1972',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const biasTestingFramework = [
    {
      biasType: 'Statistical Parity',
      description: 'Gleiche Positivraten über alle geschützten Gruppen',
      calculation: 'P(Ŷ=1|A=a) = P(Ŷ=1|A=b) für alle Gruppen a,b',
      whenToUse: [
        'Stellenausschreibungen und Rekrutierung',
        'Leistungsbeurteilungen',
        'Beförderungsentscheidungen',
        'Gehaltserhöhungen'
      ],
      limitations: [
        'Ignoriert legitime Gruppenunterschiede',
        'Kann zu reverse discrimination führen',
        'Schwierig bei multiplen geschützten Merkmalen'
      ],
      practicalExample: {
        scenario: 'Bewerbungsscreening für Software-Engineer Position',
        data: 'Männliche Bewerber: 60% positive Rate, Weibliche Bewerber: 45% positive Rate',
        assessment: 'Statistical Parity verletzt - Differenz von 15 Prozentpunkten',
        action: 'Überprüfung der Feature-Gewichtung und Trainings-Daten erforderlich'
      },
      implementationSteps: [
        'Geschützte Gruppen definieren',
        'Positivraten pro Gruppe berechnen',
        'Statistische Signifikanz testen',
        'Acceptable Threshold definieren (z.B. 80%-Regel)',
        'Monitoring Dashboard einrichten'
      ],
      icon: BarChart3,
      complexity: 'Niedrig'
    },
    {
      biasType: 'Equalized Odds',
      description: 'Gleiche True Positive und False Positive Raten über Gruppen',
      calculation: 'P(Ŷ=1|Y=y,A=a) = P(Ŷ=1|Y=y,A=b) für y ∈ {0,1}',
      whenToUse: [
        'Performance-basierte Entscheidungen',
        'Talentidentifikation',
        'Succession Planning',
        'Training und Development Auswahl'
      ],
      limitations: [
        'Benötigt Ground Truth Labels',
        'Komplexer zu interpretieren',
        'Kann bei kleinen Gruppen instabil sein'
      ],
      practicalExample: {
        scenario: 'High-Potential Identifikation für Leadership Program',
        data: 'TPR: Männer 85%, Frauen 72% | FPR: Männer 12%, Frauen 18%',
        assessment: 'Equalized Odds verletzt - unterschiedliche Fehlerraten',
        action: 'Kalibrierung des Models für fairere Vorhersagen nötig'
      },
      implementationSteps: [
        'Performance Ground Truth etablieren',
        'Confusion Matrix pro Gruppe erstellen',
        'TPR und FPR Differenzen messen',
        'Post-Processing Kalibrierung anwenden',
        'Kontinuierliches A/B Testing'
      ],
      icon: Target,
      complexity: 'Mittel'
    },
    {
      biasType: 'Individual Fairness',
      description: 'Ähnliche Individuen erhalten ähnliche Behandlung',
      calculation: 'd(x₁,x₂) ≤ δ ⟹ |f(x₁) - f(x₂)| ≤ ε',
      whenToUse: [
        'Gehalts- und Vergütungsentscheidungen',
        'Individuelle Leistungsbewertungen',
        'Karriereempfehlungen',
        'Personalisierte Benefits'
      ],
      limitations: [
        'Definition von "Ähnlichkeit" schwierig',
        'Rechenintensiv für große Datensätze',
        'Subjektive Similarity Metrics'
      ],
      practicalExample: {
        scenario: 'Gehaltsempfehlung für gleichwertige Positionen',
        data: 'Zwei ähnliche Profile: 85k€ vs 92k€ Empfehlung ohne erkennbaren Unterschied',
        assessment: 'Individual Fairness verletzt - unerklärliche Gehaltsdifferenz',
        action: 'Similarity-basierte Constraints im Model implementieren'
      },
      implementationSteps: [
        'Relevante Similarity Metrics definieren',
        'Pairwise Comparisons durchführen',
        'Fairness Constraints in Training integrieren',
        'Explanation-based Validation',
        'Manual Review für Edge Cases'
      ],
      icon: Users2,
      complexity: 'Hoch'
    },
    {
      biasType: 'Counterfactual Fairness',
      description: 'Entscheidung bleibt gleich in kontrafaktischen Welten',
      calculation: 'P(Ŷₐ₌ₐ = y | X = x, A = a) = P(Ŷₐ₌ₐ\' = y | X = x, A = a)',
      whenToUse: [
        'Komplexe Karriereentscheidungen',
        'Langfristige Development Planning',
        'Executive Assessments',
        'Critical Role Assignments'
      ],
      limitations: [
        'Kausale Modelle erforderlich',
        'Sehr rechenintensiv',
        'Schwierige Validierung in der Praxis'
      ],
      practicalExample: {
        scenario: 'Leadership Assessment für C-Level Position',
        data: 'Kandidat X würde bei anderem Geschlecht andere Bewertung erhalten',
        assessment: 'Counterfactual Fairness verletzt durch unbewusste Bias',
        action: 'Strukturierte Interviews und kausales Reasoning implementieren'
      },
      implementationSteps: [
        'Kausales Graph-Modell entwickeln',
        'Counterfactual Inference implementieren',
        'Domain Expert Validation',
        'Sensitivity Analysis durchführen',
        'Continuous Model Updates'
      ],
      icon: Brain,
      complexity: 'Sehr Hoch'
    }
  ];

  const transparencyRequirements = [
    {
      requirement: 'Algorithmische Transparenz',
      description: 'Offenlegung der grundlegenden Funktionsweise des AI-Systems',
      legalBasis: ['EU AI Act Art. 13', 'DSGVO Art. 12-14'],
      targetAudience: 'Bewerber, Mitarbeiter, Betriebsrat, Aufsichtsbehörden',
      contentRequirements: [
        'Zweck und Einsatzbereich der AI',
        'Arten der verarbeiteten Daten',
        'Entscheidungslogik in verständlicher Sprache',
        'Mögliche Auswirkungen auf Betroffene',
        'Menschliche Überprüfungsmöglichkeiten',
        'Kontaktdaten für Rückfragen'
      ],
      implementationMethods: [
        'Klare Datenschutzerklärungen',
        'AI-Info-Seiten auf Karriere-Website',
        'Informationsbroschüren für Bewerber',
        'Schulungsmaterialien für HR-Teams',
        'FAQ-Sektion zu AI-Nutzung',
        'Video-Erklärungen des Systems'
      ],
      challenges: [
        'Balance zwischen Transparenz und IP-Schutz',
        'Verständliche Sprache für Laien',
        'Regelmäßige Aktualisierung bei Model-Updates',
        'Mehrsprachige Aufbereitung'
      ],
      bestPractices: [
        'User-friendly Plain Language verwenden',
        'Visualisierungen und Infografiken nutzen',
        'Regelmäßige Feedback-Schleifen mit Nutzern',
        'Proaktive Kommunikation bei Änderungen'
      ],
      icon: Globe
    },
    {
      requirement: 'Individuelle Erklärbarkeit',
      description: 'Personalisierte Erklärungen für spezifische AI-Entscheidungen',
      legalBasis: ['DSGVO Art. 22', 'EU AI Act Art. 86'],
      targetAudience: 'Individuelle Bewerber und Mitarbeiter',
      contentRequirements: [
        'Welche Daten zur Entscheidung führten',
        'Gewichtung verschiedener Faktoren',
        'Verbesserungsmöglichkeiten aufzeigen',
        'Alternative Szenarien erläutern',
        'Einspruchsmöglichkeiten erklären',
        'Zeitrahmen für Überprüfungen'
      ],
      implementationMethods: [
        'LIME/SHAP für lokale Erklärungen',
        'Natural Language Explanation Generation',
        'Interactive Dashboards für Betroffene',
        'Personalisierte PDF-Reports',
        'Chatbot für Nachfragen',
        'One-on-One Erklärungsgespräche'
      ],
      challenges: [
        'Technische Komplexität der Erklärungen',
        'Automatisierung vs. menschliche Expertise',
        'Skalierung für große Bewerberzahlen',
        'Konsistenz der Erklärungen'
      ],
      bestPractices: [
        'Kontrastive Erklärungen ("Was wäre wenn...")',
        'Visuelle und numerische Darstellung kombinieren',
        'Actionable Insights für Verbesserungen',
        'Multiple Explanation Levels anbieten'
      ],
      icon: Eye
    },
    {
      requirement: 'Prozess-Transparenz',
      description: 'Offenlegung der HR-Prozesse mit AI-Unterstützung',
      legalBasis: ['BetrVG § 87', 'EU AI Act Art. 13'],
      targetAudience: 'Betriebsrat, HR-Teams, Management',
      contentRequirements: [
        'Workflow-Diagramme mit AI-Integration',
        'Entscheidungspunkte und Verantwortlichkeiten',
        'Escalation-Prozesse bei AI-Fehlern',
        'Quality Assurance Maßnahmen',
        'Regular Review und Update Zyklen',
        'Incident Response Procedures'
      ],
      implementationMethods: [
        'Detaillierte Prozessdokumentation',
        'Interaktive Workflow-Visualisierungen',
        'Regular Stakeholder Briefings',
        'Quarterly Process Reviews',
        'Change Management Protokolle',
        'Audit Trail Dokumentation'
      ],
      challenges: [
        'Komplexität der AI-integrierten Prozesse',
        'Change Management bei Updates',
        'Stakeholder Alignment',
        'Compliance Nachweise führen'
      ],
      bestPractices: [
        'Version Control für Prozessdokumentation',
        'Regular Training für alle Stakeholder',
        'Clear Escalation Paths definieren',
        'Continuous Process Improvement'
      ],
      icon: Layers
    },
    {
      requirement: 'Datentransparenz',
      description: 'Aufklärung über verwendete Daten und deren Herkunft',
      legalBasis: ['DSGVO Art. 13-14', 'EU AI Act Art. 10'],
      targetAudience: 'Alle Betroffenen, Datenschutzbehörden',
      contentRequirements: [
        'Datenquellen und Herkunft',
        'Datenarten und -kategorien',
        'Speicherdauer und Löschfristen',
        'Datenqualität und Aktualität',
        'Third-Party Datennutzung',
        'Betroffenenrechte und deren Ausübung'
      ],
      implementationMethods: [
        'Umfassende Privacy Notices',
        'Data Lineage Dokumentation',
        'Self-Service Data Access Portals',
        'Regular Data Quality Reports',
        'Automated Data Retention Policies',
        'User-friendly Data Dashboards'
      ],
      challenges: [
        'Komplexe Datenlandschaften dokumentieren',
        'Dynamic Data Sources verwalten',
        'Third-Party Data Compliance',
        'Technical vs. User-friendly Documentation'
      ],
      bestPractices: [
        'Automated Data Discovery Tools nutzen',
        'Plain Language Privacy Policies',
        'Interactive Data Mapping Visualizations',
        'Regular Data Audits durchführen'
      ],
      icon: Database
    }
  ];

  const practicalImplementationGuide = [
    {
      phase: 'Legal & Regulatory Assessment',
      duration: '2-3 Wochen',
      description: 'Umfassende Bewertung der rechtlichen Anforderungen und Compliance-Gaps',
      keyDeliverables: [
        'Legal Requirements Matrix',
        'Compliance Gap Analysis',
        'Risk Assessment Report',
        'Regulatory Roadmap'
      ],
      activities: [
        'Juristische Beratung zu EU AI Act und AGG',
        'Betriebsrat Early Engagement',
        'Data Protection Impact Assessment Scoping',
        'International Compliance Requirements Review',
        'Industry Best Practices Research',
        'Executive Briefing und Approval'
      ],
      stakeholders: [
        'Legal Counsel',
        'Data Protection Officer',
        'Betriebsrat',
        'HR Leadership',
        'Compliance Team',
        'External Legal Advisors'
      ],
      riskMitigation: [
        'Early Stakeholder Involvement',
        'Conservative Interpretation of unclear Regulations',
        'Regular Legal Updates Integration',
        'Documentation of all Decisions'
      ],
      success_criteria: [
        'Complete Legal Requirements understood',
        'Stakeholder Alignment achieved',
        'Clear Implementation Path defined',
        'Budget und Resources approved'
      ],
      icon: Scale
    },
    {
      phase: 'AI System Audit & Documentation',
      duration: '3-4 Wochen',
      description: 'Detaillierte Analyse bestehender oder geplanter HR AI Systeme',
      keyDeliverables: [
        'AI System Inventory',
        'Technical Documentation',
        'Data Flow Mapping',
        'Bias Assessment Report'
      ],
      activities: [
        'Current State AI System Analysis',
        'Data Sources und Quality Assessment',
        'Model Architecture Documentation',
        'Training Data Bias Analysis',
        'Performance Metrics Evaluation',
        'Explainability Gap Analysis'
      ],
      stakeholders: [
        'Data Scientists',
        'ML Engineers',
        'HR Analytics Team',
        'IT Architecture',
        'Data Engineering',
        'External AI Auditors'
      ],
      riskMitigation: [
        'Independent Third-Party Validation',
        'Comprehensive Testing auf Multiple Datasets',
        'Cross-functional Review Prozess',
        'Version Control für alle Artefakte'
      ],
      success_criteria: [
        'Complete System Documentation',
        'Bias Testing completed',
        'Technical Debt identified',
        'Remediation Plan created'
      ],
      icon: Brain
    },
    {
      phase: 'Fairness & Bias Remediation',
      duration: '4-6 Wochen',
      description: 'Implementation von Fairness-Mechanismen und Bias-Reduktion',
      keyDeliverables: [
        'Bias-Free Model Versions',
        'Fairness Testing Framework',
        'Monitoring Dashboard',
        'Validation Reports'
      ],
      activities: [
        'Pre-Processing Data Cleaning',
        'In-Processing Fairness Constraints',
        'Post-Processing Calibration',
        'Comprehensive Bias Testing',
        'Model Performance Validation',
        'A/B Testing Setup'
      ],
      stakeholders: [
        'ML Engineering Team',
        'Data Scientists',
        'HR Subject Matter Experts',
        'Diversity & Inclusion Team',
        'Quality Assurance',
        'External Fairness Experts'
      ],
      riskMitigation: [
        'Multiple Fairness Metrics parallel testen',
        'Conservative Bias Thresholds setzen',
        'Human Validation für Edge Cases',
        'Rollback Strategy für Production'
      ],
      success_criteria: [
        'All Bias Tests passed',
        'Model Performance maintained',
        'Stakeholder Validation completed',
        'Production Deployment ready'
      ],
      icon: Users
    },
    {
      phase: 'Transparency & Explainability Implementation',
      duration: '3-5 Wochen',
      description: 'Entwicklung von Erklärbarkeits- und Transparenz-Features',
      keyDeliverables: [
        'Explanation Engine',
        'User-Facing Transparency Tools',
        'Documentation Portal',
        'Training Materials'
      ],
      activities: [
        'Explainable AI Models Development',
        'Natural Language Explanation Generation',
        'User Interface Design für Explanations',
        'Automated Documentation Generation',
        'Multi-Language Support Implementation',
        'User Acceptance Testing'
      ],
      stakeholders: [
        'UX/UI Design Team',
        'Frontend Developers',
        'Technical Writers',
        'HR Communications',
        'Training Team',
        'End User Representatives'
      ],
      riskMitigation: [
        'User-Centric Design Approach',
        'Multiple Explanation Formats',
        'Accessibility Compliance',
        'Performance Impact Monitoring'
      ],
      success_criteria: [
        'User-friendly Explanations available',
        'All Transparency Requirements met',
        'Training Materials completed',
        'User Acceptance achieved'
      ],
      icon: Eye
    },
    {
      phase: 'Governance & Monitoring Setup',
      duration: '2-3 Wochen',
      description: 'Etablierung von Governance-Strukturen und kontinuierlichem Monitoring',
      keyDeliverables: [
        'AI Governance Framework',
        'Monitoring und Alerting System',
        'Incident Response Procedures',
        'Compliance Dashboards'
      ],
      activities: [
        'AI Ethics Committee Establishment',
        'Regular Review Prozesse Definition',
        'Automated Monitoring Implementation',
        'Incident Response Playbooks',
        'Compliance Reporting Automation',
        'Continuous Improvement Framework'
      ],
      stakeholders: [
        'Executive Leadership',
        'AI Ethics Committee',
        'Operations Team',
        'Risk Management',
        'Internal Audit',
        'External Advisors'
      ],
      riskMitigation: [
        'Clear Escalation Procedures',
        'Regular Governance Reviews',
        'External Validation Processes',
        'Comprehensive Audit Trails'
      ],
      success_criteria: [
        'Governance Framework operational',
        'All Monitoring Systems active',
        'Incident Response tested',
        'Compliance Reporting automated'
      ],
      icon: Settings
    }
  ];

  const complianceTools = [
    {
      tool: 'Bias Detection & Testing Suite',
      description: 'Umfassende Sammlung von Bias-Tests und Fairness-Metriken',
      features: [
        'Statistical Parity Testing',
        'Equalized Odds Analysis',
        'Individual Fairness Validation',
        'Intersectional Bias Detection',
        'Automated Report Generation',
        'Trend Analysis über Zeit'
      ],
      useCases: [
        'Pre-Deployment Model Validation',
        'Regular Production Monitoring',
        'Regulatory Compliance Reporting',
        'A/B Testing von Model Versionen'
      ],
      technicalRequirements: [
        'Python 3.8+',
        'Pandas, NumPy, Scikit-learn',
        'Model-agnostic APIs',
        'Data Export Capabilities'
      ],
      outputs: [
        'Detailed Bias Reports (PDF)',
        'Interactive Dashboards',
        'API für Real-time Monitoring',
        'Regulatory Compliance Certificates'
      ],
      icon: TestTube,
      complexity: 'Mittel',
      license: 'Enterprise License'
    },
    {
      tool: 'Explainable AI Engine',
      description: 'Generate automatic explanations für HR AI decisions',
      features: [
        'LIME/SHAP Integration',
        'Natural Language Generation',
        'Visual Explanation Dashboards',
        'Kontrastive Explanations',
        'Multi-Language Support',
        'API für Integration'
      ],
      useCases: [
        'Individual Decision Explanations',
        'Candidate Feedback Generation',
        'HR Team Training',
        'Regulatory Documentation'
      ],
      technicalRequirements: [
        'Model Access via API',
        'Feature Metadata',
        'Performance Monitoring',
        'User Authentication'
      ],
      outputs: [
        'Personalized Explanation Reports',
        'Interactive Web Interface',
        'Email Notifications',
        'Explanation Quality Metrics'
      ],
      icon: Brain,
      complexity: 'Hoch',
      license: 'SaaS Subscription'
    },
    {
      tool: 'Compliance Documentation Generator',
      description: 'Automatische Generierung von Compliance-Dokumentation',
      features: [
        'Template-based Document Generation',
        'Regulatory Mapping',
        'Version Control Integration',
        'Multi-stakeholder Reviews',
        'Automated Updates',
        'Approval Workflows'
      ],
      useCases: [
        'EU AI Act Compliance Documentation',
        'DPIA Documentation',
        'Betriebsvereinbarung Templates',
        'Audit Trail Generation'
      ],
      technicalRequirements: [
        'Document Management System',
        'Template Engine',
        'Integration with HR Systems',
        'Digital Signature Support'
      ],
      outputs: [
        'Ready-to-use Compliance Documents',
        'Legal Review Checklists',
        'Stakeholder Communication Plans',
        'Audit Documentation'
      ],
      icon: FileText,
      complexity: 'Niedrig',
      license: 'Open Source + Premium Support'
    },
    {
      tool: 'HR AI Monitoring Dashboard',
      description: 'Real-time Monitoring und Alerting für HR AI Systems',
      features: [
        'Real-time Performance Metrics',
        'Bias Drift Detection',
        'Data Quality Monitoring',
        'Custom Alert Configuration',
        'Stakeholder Notifications',
        'Historical Trend Analysis'
      ],
      useCases: [
        'Continuous Model Monitoring',
        'Early Warning für Bias',
        'Performance Degradation Detection',
        'Regulatory Reporting'
      ],
      technicalRequirements: [
        'Model Inference Logs',
        'Database Access',
        'API für External Integrations',
        'Email/Slack Notifications'
      ],
      outputs: [
        'Real-time Dashboards',
        'Automated Alert Emails',
        'Weekly Performance Reports',
        'Compliance Status Updates'
      ],
      icon: Monitor,
      complexity: 'Mittel',
      license: 'Enterprise SaaS'
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

  const runBiasTest = (testType: string) => {
    // Simulated bias test results
    const mockResults = {
      'statistical_parity': {
        score: Math.random() * 0.4 + 0.6, // 0.6-1.0
        groups: ['Male', 'Female', 'Non-binary'],
        details: 'Statistical parity check across gender groups'
      },
      'equalized_odds': {
        score: Math.random() * 0.3 + 0.7, // 0.7-1.0
        groups: ['Age <30', 'Age 30-50', 'Age >50'],
        details: 'Equal TPR/FPR across age groups'
      }
    };
    
    setBiasTestResults(prev => [...prev, {
      id: Date.now(),
      test: testType,
      result: mockResults[testType as keyof typeof mockResults] || mockResults.statistical_parity,
      timestamp: new Date().toLocaleString()
    }]);
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
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              HR AI & Bewerbermanagement Compliance
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Rechtskonforme Implementierung von KI in HR-Prozessen: EU AI Act, AGG, DSGVO und 
              BetrVG-konforme Algorithmen für Recruiting, Performance Management und Personalentscheidungen
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Scale className="w-4 h-4 mr-2" />
                4 Legal Frameworks
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Users className="w-4 h-4 mr-2" />
                Bias Testing Tools
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Eye className="w-4 h-4 mr-2" />
                Explainable AI
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
              <h2 className="text-3xl font-bold mb-4">HR AI Compliance Landscape</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Die Verwendung von KI in HR-Prozessen unterliegt strengen rechtlichen Anforderungen. 
                Diese Seite führt Sie durch die komplexe Regulatorik und zeigt praktische Lösungsansätze 
                für compliance-konforme HR AI Systeme.
              </p>
            </div>

            {/* Key Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Diskriminierung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    AGG und EU AI Act verbieten systematische Benachteiligung geschützter Gruppen
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">8 geschützte Merkmale</Badge>
                    <Badge variant="outline" className="text-xs">Beweislasterleichterung</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Eye className="w-5 h-5 text-blue-500" />
                    Transparenz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    DSGVO Art. 22 und EU AI Act fordern Erklärbarkeit automatisierter Entscheidungen
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Explainable AI</Badge>
                    <Badge variant="outline" className="text-xs">Right to Explanation</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Handshake className="w-5 h-5 text-green-500" />
                    Mitbestimmung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    BetrVG § 87 gibt Betriebsräten Mitbestimmungsrechte bei HR AI Systemen
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Betriebsvereinbarung</Badge>
                    <Badge variant="outline" className="text-xs">Schulungspflicht</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <UserCheck className="w-5 h-5 text-purple-500" />
                    Human Oversight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">
                    EU AI Act und DSGVO erfordern menschliche Aufsicht bei kritischen HR-Entscheidungen
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Human-in-the-Loop</Badge>
                    <Badge variant="outline" className="text-xs">Right to Review</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why HR AI Compliance Matters */}
            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Warum HR AI Compliance entscheidend ist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Business Benefits:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Verbesserung der Hiring-Qualität durch faire Algorithmen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Employer Branding durch verantwortungsvolle AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Erhöhte Diversität und Inklusion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Reduzierte Time-to-Hire bei besseren Ergebnissen</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Compliance Risks:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">AGG-Verstöße: Entschädigung bis 3 Monatsgehälter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">EU AI Act: Strafen bis 35 Mio. € oder 7% Umsatz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">DSGVO Art. 22: Bis 20 Mio. € oder 4% Umsatz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Reputationsschäden und Talentabwanderung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Ihr Weg zur HR AI Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Scale className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">1. Legal Assessment</h4>
                    <p className="text-sm text-gray-600">
                      Verstehen Sie die rechtlichen Anforderungen für Ihren spezifischen Use Case
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => setActiveTab('legal-framework')}
                    >
                      Rechtslage erkunden
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">2. Bias Testing</h4>
                    <p className="text-sm text-gray-600">
                      Implementieren Sie umfassende Bias-Tests für faire AI-Entscheidungen
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => setActiveTab('bias-discrimination')}
                    >
                      Bias Tests starten
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Code className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">3. Implementation</h4>
                    <p className="text-sm text-gray-600">
                      Setzen Sie compliance-konforme HR AI Systeme mit unseren Tools um
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => setActiveTab('implementation')}
                    >
                      Umsetzung planen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Legal Framework Tab */}
          <TabsContent value="legal-framework" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Legal Framework für HR AI</h2>
              <p className="text-lg text-gray-600">
                Die vier wichtigsten Rechtsrahmen für KI im Personalwesen
              </p>
            </div>

            <div className="space-y-6">
              {legalFramework.map((law, index) => {
                const Icon = law.icon;
                return (
                  <motion.div
                    key={law.law}
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
                              law.color
                            )}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl mb-1">{law.law}</CardTitle>
                              <p className="text-gray-600 mb-1">{law.scope}</p>
                              <p className="text-sm text-gray-500">{law.relevanceToHR}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(`law-${index}`)}
                          >
                            <ChevronDown className={cn(
                              "w-4 h-4 transition-transform",
                              expandedSection === `law-${index}` && "rotate-180"
                            )} />
                          </Button>
                        </div>
                      </CardHeader>
                      
                      {expandedSection === `law-${index}` && (
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-3">Allgemeine Bestimmungen:</h4>
                                <ul className="space-y-2">
                                  {law.keyProvisions.map((provision, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <CheckCircle2 className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{provision}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="p-4 bg-red-50 rounded-lg">
                                <h4 className="font-semibold mb-2 text-red-800">Sanktionen</h4>
                                <p className="text-sm text-red-700 mb-2">{law.penalties}</p>
                                <Badge variant="outline" className="text-red-600 border-red-300">
                                  {law.effectiveDate}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-purple-500" />
                                HR-Spezifische Anforderungen
                              </h4>
                              <ul className="space-y-2">
                                {law.hrSpecificRequirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Users className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{req}</span>
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

          {/* Bias & Discrimination Tab */}
          <TabsContent value="bias-discrimination" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Bias Detection & Fairness Testing</h2>
              <p className="text-lg text-gray-600">
                Umfassende Methoden zur Erkennung und Vermeidung von Diskriminierung in HR AI
              </p>
            </div>

            {/* Interactive Bias Testing */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="w-5 h-5" />
                  Interactive Bias Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Testen Sie verschiedene Fairness-Metriken für Ihr HR AI System
                  </p>
                  <div className="flex gap-4">
                    <Button onClick={() => runBiasTest('statistical_parity')}>
                      Statistical Parity Test
                    </Button>
                    <Button onClick={() => runBiasTest('equalized_odds')} variant="outline">
                      Equalized Odds Test
                    </Button>
                  </div>
                  
                  {biasTestResults.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Test Results:</h4>
                      <div className="space-y-3">
                        {biasTestResults.map((result) => (
                          <div key={result.id} className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{result.test}</span>
                              <Badge variant={result.result.score > 0.8 ? 'default' : 'destructive'}>
                                Score: {(result.result.score * 100).toFixed(1)}%
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{result.result.details}</p>
                            <p className="text-xs text-gray-500 mt-1">{result.timestamp}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Bias Testing Framework */}
            <div className="space-y-6">
              {biasTestingFramework.map((bias, index) => {
                const Icon = bias.icon;
                return (
                  <Card key={bias.biasType} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-xl">{bias.biasType}</CardTitle>
                              <Badge variant="outline">Komplexität: {bias.complexity}</Badge>
                            </div>
                            <p className="text-gray-600">{bias.description}</p>
                            <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 block">
                              {bias.calculation}
                            </code>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(`bias-${index}`)}
                        >
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            expandedSection === `bias-${index}` && "rotate-180"
                          )} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {expandedSection === `bias-${index}` && (
                      <CardContent>
                        <Tabs defaultValue="use-cases" className="w-full">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
                            <TabsTrigger value="example">Beispiel</TabsTrigger>
                            <TabsTrigger value="implementation">Implementation</TabsTrigger>
                            <TabsTrigger value="limitations">Limitationen</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="use-cases" className="mt-4">
                            <ul className="space-y-2">
                              {bias.whenToUse.map((useCase, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{useCase}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                          
                          <TabsContent value="example" className="mt-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h5 className="font-semibold mb-2">Praxisbeispiel:</h5>
                              <p className="text-sm mb-2"><strong>Szenario:</strong> {bias.practicalExample.scenario}</p>
                              <p className="text-sm mb-2"><strong>Daten:</strong> {bias.practicalExample.data}</p>
                              <p className="text-sm mb-2"><strong>Assessment:</strong> {bias.practicalExample.assessment}</p>
                              <p className="text-sm"><strong>Maßnahme:</strong> {bias.practicalExample.action}</p>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="implementation" className="mt-4">
                            <ol className="space-y-2">
                              {bias.implementationSteps.map((step, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm">
                                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
                                    {idx + 1}
                                  </span>
                                  <span className="text-gray-700">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </TabsContent>
                          
                          <TabsContent value="limitations" className="mt-4">
                            <ul className="space-y-2">
                              {bias.limitations.map((limitation, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{limitation}</span>
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

          {/* Transparency & Explainability Tab */}
          <TabsContent value="transparency" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Transparenz & Erklärbarkeit</h2>
              <p className="text-lg text-gray-600">
                Erfüllung der Transparenzpflichten nach DSGVO und EU AI Act
              </p>
            </div>

            <div className="space-y-6">
              {transparencyRequirements.map((requirement, index) => {
                const Icon = requirement.icon;
                return (
                  <Card key={requirement.requirement} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl text-white">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{requirement.requirement}</CardTitle>
                            <p className="text-gray-600 mb-2">{requirement.description}</p>
                            <div className="flex gap-2">
                              {requirement.legalBasis.map((basis, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {basis}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(`transparency-${index}`)}
                        >
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            expandedSection === `transparency-${index}` && "rotate-180"
                          )} />
                        </Button>
                      </div>
                    </CardHeader>
                    
                    {expandedSection === `transparency-${index}` && (
                      <CardContent>
                        <Tabs defaultValue="content" className="w-full">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="content">Inhalte</TabsTrigger>
                            <TabsTrigger value="methods">Methoden</TabsTrigger>
                            <TabsTrigger value="challenges">Herausforderungen</TabsTrigger>
                            <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="content" className="mt-4">
                            <div>
                              <h4 className="font-semibold mb-3">Zielgruppe: {requirement.targetAudience}</h4>
                              <ul className="space-y-2">
                                {requirement.contentRequirements.map((content, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{content}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="methods" className="mt-4">
                            <ul className="space-y-2">
                              {requirement.implementationMethods.map((method, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <Wrench className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{method}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                          
                          <TabsContent value="challenges" className="mt-4">
                            <ul className="space-y-2">
                              {requirement.challenges.map((challenge, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </TabsContent>
                          
                          <TabsContent value="best-practices" className="mt-4">
                            <ul className="space-y-2">
                              {requirement.bestPractices.map((practice, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{practice}</span>
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

          {/* Implementation Tab */}
          <TabsContent value="implementation" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Praktische Umsetzung</h2>
              <p className="text-lg text-gray-600">
                5-Phasen Roadmap für compliance-konforme HR AI Implementation
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
                          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl text-white">
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
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                              <ul className="space-y-2">
                                {phase.keyDeliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <FileCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Activities:</h4>
                              <ul className="space-y-2">
                                {phase.activities.slice(0, 3).map((activity, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{activity}</span>
                                  </li>
                                ))}
                                {phase.activities.length > 3 && (
                                  <li className="text-sm text-gray-500">
                                    +{phase.activities.length - 3} weitere Activities...
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
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
                            
                            <div>
                              <h4 className="font-semibold mb-3">Success Criteria:</h4>
                              <ul className="space-y-2">
                                {phase.success_criteria.map((criteria, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Target className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{criteria}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Risk Mitigation:</h4>
                              <ul className="space-y-2">
                                {phase.riskMitigation.slice(0, 2).map((risk, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm">
                                    <Shield className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{risk}</span>
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
          </TabsContent>

          {/* Compliance Tools Tab */}
          <TabsContent value="compliance-tools" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Compliance Tools & Tests</h2>
              <p className="text-lg text-gray-600">
                Praktische Tools für HR AI Compliance Testing und Monitoring
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {complianceTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card key={tool.tool} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{tool.tool}</CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline">
                                {tool.complexity}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {tool.license}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {tool.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                            {tool.features.length > 3 && (
                              <li className="text-xs text-gray-500">
                                +{tool.features.length - 3} weitere Features...
                              </li>
                            )}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Use Cases:</h4>
                          <div className="flex flex-wrap gap-1">
                            {tool.useCases.map((useCase, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {useCase}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Outputs:</h4>
                          <ul className="space-y-1">
                            {tool.outputs.slice(0, 2).map((output, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <FileText className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{output}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-3 border-t">
                          <Button className="w-full" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Tool Request
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Next Steps */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Bereit für HR AI Compliance?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Starten Sie Ihre HR AI Compliance Journey mit unseren spezialisierten Tools und Services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      <Download className="w-4 h-4 mr-2" />
                      Bias Testing Suite
                    </Button>
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Compliance Templates
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

export default HRAICompliance;