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
  Gauge,
  Wrench,
  Cog,
  CircuitBoard,
  Binary,
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
  Fingerprint as FingerprintIcon,
  FileSearch,
  ClipboardCheck,
  BadgeCheck,
  ScrollText,
  Stamp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const TisaxGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedLevel, setExpandedLevel] = useState<{[key: string]: boolean}>({});
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: 'overview', title: 'Überblick', icon: Eye, readTime: '10 Min' },
    { id: 'vda-ism', title: 'VDA ISM Standard', icon: FileText, readTime: '15 Min' },
    { id: 'assessment-levels', title: 'Assessment Level', icon: Gauge, readTime: '20 Min' },
    { id: 'control-objectives', title: 'Control Objectives', icon: Target, readTime: '35 Min' },
    { id: 'protection-needs', title: 'Protection Needs', icon: Shield, readTime: '18 Min' },
    { id: 'assessment-process', title: 'Assessment Prozess', icon: ClipboardCheck, readTime: '25 Min' },
    { id: 'automotive-specifics', title: 'Automotive Spezifika', icon: Car, readTime: '30 Min' },
    { id: 'implementation', title: 'Implementierung', icon: Rocket, readTime: '40 Min' },
    { id: 'evidence-collection', title: 'Evidence Collection', icon: FileSearch, readTime: '22 Min' },
    { id: 'participant-types', title: 'Teilnehmertypen', icon: Users, readTime: '15 Min' },
    { id: 'exchange-portal', title: 'Exchange Portal', icon: Network, readTime: '12 Min' },
    { id: 'certification', title: 'Zertifizierung', icon: BadgeCheck, readTime: '18 Min' },
    { id: 'continuous-improvement', title: 'Kontinuierliche Verbesserung', icon: TrendingUp, readTime: '15 Min' },
    { id: 'integration', title: 'Integration Standards', icon: GitMerge, readTime: '20 Min' },
    { id: 'supply-chain', title: 'Supply Chain Security', icon: Truck, readTime: '25 Min' },
    { id: 'industry-practices', title: 'Industry Best Practices', icon: Factory, readTime: '22 Min' },
    { id: 'tools-automation', title: 'Tools & Automation', icon: Wrench, readTime: '18 Min' },
    { id: 'resources', title: 'Ressourcen', icon: Download, readTime: '8 Min' }
  ];

  const assessmentLevels = [
    {
      level: 'AL1',
      title: 'Prototype Protection',
      description: 'Schutz für Prototypdaten und vertrauliche Informationen mit geringem Schutzbedarf',
      color: 'from-green-500 to-emerald-600',
      icon: TestTube2,
      characteristics: [
        'Niedrigste Sicherheitsanforderungen',
        'Basisschutz für Prototypentwicklung',
        'Vertrauliche Informationen mit geringem Impact',
        'Standard IT-Sicherheitsmaßnahmen ausreichend'
      ],
      typicalUseCase: [
        'Frühe Konzeptentwicklung',
        'Marktforschung und Trends',
        'Allgemeine Designstudien',
        'Proof-of-Concept Projekte'
      ],
      controlObjectives: 45,
      implementationEffort: 'Niedrig (2-4 Monate)',
      costs: '€15.000 - €30.000'
    },
    {
      level: 'AL2',
      title: 'Development Protection',
      description: 'Schutz für Entwicklungsdaten und sensible Geschäftsinformationen',
      color: 'from-yellow-500 to-orange-600',
      icon: Cog,
      characteristics: [
        'Erhöhte Sicherheitsanforderungen',
        'Schutz für Entwicklungsprojekte',
        'Sensible Geschäftsinformationen',
        'Erweiterte Zugangskontrollen erforderlich'
      ],
      typicalUseCase: [
        'Produktentwicklung',
        'Engineering-Daten',
        'Geschäftspartnerschaften',
        'Lieferantenbeziehungen'
      ],
      controlObjectives: 67,
      implementationEffort: 'Mittel (4-8 Monate)',
      costs: '€30.000 - €75.000'
    },
    {
      level: 'AL3',
      title: 'High Protection',
      description: 'Höchster Schutz für kritische und hochsensible Informationen',
      color: 'from-red-500 to-pink-600',
      icon: ShieldAlert,
      characteristics: [
        'Höchste Sicherheitsanforderungen',
        'Kritische Geschäftsinformationen',
        'Strenge Zugangskontrollen',
        'Umfassende Monitoring-Anforderungen'
      ],
      typicalUseCase: [
        'Geheime Entwicklungsprojekte',
        'M&A-Transaktionen',
        'Strategische Partnerschaften',
        'Top-Secret Fahrzeugprojekte'
      ],
      controlObjectives: 103,
      implementationEffort: 'Hoch (8-18 Monate)',
      costs: '€75.000 - €200.000'
    }
  ];

  const controlObjectiveGroups = [
    {
      group: 'Information Security Management',
      code: 'ISM',
      icon: Building2,
      color: 'from-blue-500 to-indigo-600',
      description: 'Aufbau und Betrieb eines Informationssicherheits-Managementsystems',
      objectives: [
        {
          id: 'ISM1',
          title: 'Information Security Policy',
          description: 'Eine Informationssicherheitspolitik soll definiert, dokumentiert, implementiert und kommuniziert werden',
          requirements: [
            'Schriftliche Informationssicherheitspolitik',
            'Management-Genehmigung und -Commitment',
            'Regelmäßige Überprüfung und Aktualisierung',
            'Kommunikation an alle Mitarbeiter',
            'Integration in Geschäftsprozesse'
          ],
          evidence: [
            'Informationssicherheitspolitik-Dokument',
            'Management-Approval-Dokumente',
            'Kommunikationsnachweis',
            'Schulungsunterlagen',
            'Review-Protokolle'
          ],
          automotiveSpecific: [
            'Automotive-spezifische Risiken berücksichtigen',
            'Lieferkettenintegration',
            'OEM-spezifische Anforderungen',
            'Fahrzeugdatenklassifizierung'
          ]
        },
        {
          id: 'ISM2',
          title: 'Organization of Information Security',
          description: 'Rollen und Verantwortlichkeiten für Informationssicherheit definieren',
          requirements: [
            'CISO oder äquivalente Rolle definiert',
            'Informationssicherheitsorganisation etabliert',
            'Verantwortlichkeiten klar zugewiesen',
            'Reporting-Strukturen definiert',
            'Kontakte zu Sicherheitsbehörden'
          ],
          evidence: [
            'Organisationsstruktur',
            'Rollenbeschreibungen',
            'RACI-Matrix',
            'Kontaktlisten',
            'Eskalationsverfahren'
          ],
          automotiveSpecific: [
            'Automotive CISO Netzwerk Teilnahme',
            'OEM Security Officer Kontakte',
            'VDA Working Groups Mitgliedschaft',
            'Industry threat intelligence sharing'
          ]
        }
      ]
    },
    {
      group: 'Human Resource Security',
      code: 'HRS',
      icon: Users,
      color: 'from-emerald-500 to-teal-600',
      description: 'Sicherstellung vertrauenswürdiger Mitarbeiter und sicherer Arbeitsumgebung',
      objectives: [
        {
          id: 'HRS1',
          title: 'Prior to Employment',
          description: 'Sicherheitsüberprüfungen vor der Beschäftigung durchführen',
          requirements: [
            'Background-Checks je nach Position',
            'Vertragsklauseln zur Informationssicherheit',
            'Vertraulichkeitsvereinbarungen',
            'Sicherheitsclearance-Verfahren',
            'Referenzprüfungen'
          ],
          evidence: [
            'Background-Check-Verfahren',
            'Arbeitsverträge mit Sicherheitsklauseln',
            'NDAs und Vertraulichkeitsvereinbarungen',
            'Clearance-Dokumentation',
            'Referenz-Validierungen'
          ],
          automotiveSpecific: [
            'Automotive industry background checks',
            'OEM-spezifische Clearance-Anforderungen',
            'Competitor employment restrictions',
            'IP protection agreements'
          ]
        }
      ]
    },
    {
      group: 'Asset Management',
      code: 'ASM',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      description: 'Identifikation, Klassifizierung und Schutz von Informationswerten',
      objectives: [
        {
          id: 'ASM1',
          title: 'Asset Responsibility',
          description: 'Verantwortlichkeiten für Assets definieren und Asset-Inventar pflegen',
          requirements: [
            'Asset-Inventar erstellen und pflegen',
            'Asset-Owner definieren',
            'Klassifizierungsschema implementieren',
            'Lifecycle-Management',
            'Disposal-Verfahren'
          ],
          evidence: [
            'Asset-Register',
            'Klassifizierungsrichtlinien',
            'Asset-Owner-Listen',
            'Lifecycle-Dokumentation',
            'Disposal-Nachweise'
          ],
          automotiveSpecific: [
            'Vehicle project data classification',
            'CAD/CAM file management',
            'Simulation data protection',
            'Test data categorization'
          ]
        }
      ]
    },
    {
      group: 'Access Control',
      code: 'ACC',
      icon: Lock,
      color: 'from-orange-500 to-red-600',
      description: 'Kontrolle des Zugangs zu Informationen und IT-Systemen',
      objectives: [
        {
          id: 'ACC1',
          title: 'Access Control Policy',
          description: 'Zugangsrichtlinien definieren und implementieren',
          requirements: [
            'Zugangsrichtlinien dokumentiert',
            'Role-based Access Control (RBAC)',
            'Least Privilege Prinzip',
            'Regular Access Reviews',
            'Privileged Account Management'
          ],
          evidence: [
            'Access Control Policy',
            'RBAC-Matrix',
            'Access Review Reports',
            'PAM-System-Konfiguration',
            'Audit-Logs'
          ],
          automotiveSpecific: [
            'Project-based access controls',
            'OEM data access restrictions',
            'Supplier access management',
            'Vehicle testing data access'
          ]
        }
      ]
    }
  ];

  const participantTypes = [
    {
      type: 'Information Provider',
      description: 'Organisationen, die sensible Informationen zur Verfügung stellen',
      icon: Upload,
      color: 'from-blue-500 to-indigo-600',
      responsibilities: [
        'Definition der Schutzbedarfe für bereitgestellte Informationen',
        'Festlegung der erforderlichen Assessment Level',
        'Monitoring der Information Recipients',
        'Incident Response bei Sicherheitsverletzungen',
        'Regelmäßige Überprüfung der Schutzmaßnahmen'
      ],
      examples: [
        'OEMs (BMW, Mercedes, Audi, VW)',
        'Tier-1 Suppliers mit kritischen Daten',
        'Engineering Service Provider',
        'Research & Development Centers'
      ],
      tisaxRequirements: [
        'Mindestens eigenes TISAX Assessment durchgeführt',
        'Berechtigung zur Definition von Protection Needs',
        'Zugang zum TISAX Exchange Portal',
        'Incident Reporting Capabilities'
      ]
    },
    {
      type: 'Information Recipient',
      description: 'Organisationen, die sensible Informationen erhalten und verarbeiten',
      icon: Download,
      color: 'from-emerald-500 to-teal-600',
      responsibilities: [
        'Nachweis angemessener Sicherheitsmaßnahmen',
        'Durchführung TISAX Assessment entsprechend Anforderungen',
        'Implementierung erforderlicher Schutzmaßnahmen',
        'Incident Reporting bei Sicherheitsvorfällen',
        'Compliance mit Information Provider Anforderungen'
      ],
      examples: [
        'Tier-1, Tier-2, Tier-3 Suppliers',
        'Engineering Dienstleister',
        'Software Development Companies',
        'Testing und Validation Services'
      ],
      tisaxRequirements: [
        'TISAX Assessment entsprechend gefordertem Level',
        'Nachweis der Implementierung',
        'Kontinuierliche Überwachung',
        'Incident Response Fähigkeiten'
      ]
    },
    {
      type: 'Service Provider',
      description: 'Organisationen, die IT-Services oder Business-Services anbieten',
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      responsibilities: [
        'Service-spezifische Sicherheitsmaßnahmen',
        'Multi-Client Umgebungen sicher betreiben',
        'SLA-konforme Sicherheitsstandards',
        'Regular Security Assessments',
        'Transparente Sicherheitsdokumentation'
      ],
      examples: [
        'Cloud Service Provider',
        'Managed IT Services',
        'Software-as-a-Service Anbieter',
        'Hosting und Colocation Provider'
      ],
      tisaxRequirements: [
        'Service-spezifische Assessment Scope',
        'Multi-tenancy Sicherheitsnachweis',
        'SLA Security Requirements',
        'Incident Management Prozesse'
      ]
    }
  ];

  const implementationFramework = [
    {
      phase: 'Phase 1: Readiness Assessment',
      duration: '4-6 Wochen',
      icon: Search,
      color: 'from-blue-500 to-indigo-600',
      objectives: [
        'Bestimmung des erforderlichen Assessment Levels',
        'Gap-Analyse gegen VDA ISM Standard',
        'Ressourcenplanung und Budgetierung',
        'Stakeholder Alignment',
        'Projektteam Aufbau'
      ],
      deliverables: [
        'TISAX Readiness Report',
        'Gap Analysis Document',
        'Implementation Roadmap',
        'Resource Allocation Plan',
        'Project Charter'
      ],
      automotiveConsiderations: [
        'OEM-spezifische Anforderungen identifizieren',
        'Automotive supply chain Positionen bewerten',
        'Fahrzeugprojekt-Datenkategorien definieren',
        'Branchenspezifische Threats analysieren'
      ]
    },
    {
      phase: 'Phase 2: Policy & Governance',
      duration: '6-8 Wochen',
      icon: FileText,
      color: 'from-emerald-500 to-teal-600',
      objectives: [
        'Information Security Policy entwickeln',
        'Governance-Strukturen etablieren',
        'Rollen und Verantwortlichkeiten definieren',
        'Risk Management Framework',
        'Compliance Framework aufbauen'
      ],
      deliverables: [
        'Information Security Policy',
        'Governance Charter',
        'RACI Matrix',
        'Risk Management Procedures',
        'Compliance Monitoring Framework'
      ],
      automotiveConsiderations: [
        'Automotive-spezifische Policy-Elemente',
        'OEM Governance Requirements',
        'Supply Chain Risk Management',
        'Automotive Incident Response'
      ]
    },
    {
      phase: 'Phase 3: Technical Implementation',
      duration: '12-20 Wochen',
      icon: Wrench,
      color: 'from-purple-500 to-pink-600',
      objectives: [
        'Technical Controls implementieren',
        'Access Control Systeme aufbauen',
        'Monitoring und Logging etablieren',
        'Encryption und Data Protection',
        'Network Security Controls'
      ],
      deliverables: [
        'Implemented Technical Controls',
        'Access Control System',
        'SIEM/Monitoring Solution',
        'Encryption Infrastructure',
        'Network Security Architecture'
      ],
      automotiveConsiderations: [
        'CAD/CAM System Security',
        'Vehicle Testing Environment Protection',
        'OEM Network Integration',
        'Automotive-specific Encryption'
      ]
    },
    {
      phase: 'Phase 4: Process Integration',
      duration: '8-12 Wochen',
      icon: Workflow,
      color: 'from-orange-500 to-red-600',
      objectives: [
        'Business Process Integration',
        'Training und Awareness',
        'Incident Response Procedures',
        'Business Continuity Planning',
        'Supplier Integration'
      ],
      deliverables: [
        'Integrated Security Processes',
        'Training Materials',
        'Incident Response Plan',
        'Business Continuity Plan',
        'Supplier Security Requirements'
      ],
      automotiveConsiderations: [
        'Automotive Development Process Integration',
        'OEM-specific Training Requirements',
        'Automotive Supply Chain Incidents',
        'Vehicle Program Continuity'
      ]
    },
    {
      phase: 'Phase 5: Assessment Preparation',
      duration: '4-6 Wochen',
      icon: ClipboardCheck,
      color: 'from-cyan-500 to-blue-600',
      objectives: [
        'Assessment Scope definieren',
        'Evidence Collection',
        'Internal Pre-Assessment',
        'Assessor Selection',
        'Assessment Scheduling'
      ],
      deliverables: [
        'Assessment Scope Document',
        'Evidence Portfolio',
        'Pre-Assessment Report',
        'Assessor Contract',
        'Assessment Schedule'
      ],
      automotiveConsiderations: [
        'Automotive-qualified Assessors',
        'OEM Recognition Requirements',
        'Industry-specific Evidence',
        'Automotive Assessment Scope'
      ]
    },
    {
      phase: 'Phase 6: TISAX Assessment',
      duration: '2-4 Wochen',
      icon: BadgeCheck,
      color: 'from-yellow-500 to-orange-600',
      objectives: [
        'Onsite Assessment durchführen',
        'Evidence Review',
        'Control Testing',
        'Gap Remediation',
        'Assessment Finalization'
      ],
      deliverables: [
        'Assessment Report',
        'TISAX Label',
        'Gap Remediation Plan',
        'Certification Documentation',
        'Exchange Portal Registration'
      ],
      automotiveConsiderations: [
        'Automotive-specific Assessment Criteria',
        'OEM Validation Processes',
        'Industry Benchmark Comparison',
        'Automotive Label Validity'
      ]
    }
  ];

  const handleSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleLevelExpansion = (level: string) => {
    setExpandedLevel(prev => ({
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

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
                <Car className="h-3 w-3 mr-1" />
                TISAX Guide
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
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div className="relative container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">TISAX</h1>
                  <p className="text-xl text-blue-400">Trusted Information Security Assessment eXchange</p>
                </div>
              </div>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Der Standard für Informationssicherheit in der Automobilindustrie. 
                Basierend auf VDA ISM und ISO 27001 - entwickelt für die spezifischen 
                Anforderungen der automotive supply chain.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-300">
                  <Factory className="h-4 w-4 mr-2" />
                  VDA Standard
                </Badge>
                <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  <Globe className="h-4 w-4 mr-2" />
                  Global anerkannt
                </Badge>
                <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300">
                  <Truck className="h-4 w-4 mr-2" />
                  Supply Chain fokussiert
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={() => setActiveSection('assessment-levels')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Guide starten
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Download className="h-4 w-4 mr-2" />
                  VDA ISM Framework
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
                      <CounterAnimation value={3} />
                    </div>
                    <div className="text-sm text-slate-400">Assessment Level</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      <CounterAnimation value={103} />
                    </div>
                    <div className="text-sm text-slate-400">Control Objectives</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      <CounterAnimation value={2500} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-400">Teilnehmer</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      <CounterAnimation value={3} />
                    </div>
                    <div className="text-sm text-slate-400">Jahre Gültigkeit</div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Overview */}
              <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                  <div className="space-y-3">
                    {[
                      'VDA ISM Standard und Assessment Level',
                      'Automotive-spezifische Control Objectives',
                      'TISAX Assessment Prozess im Detail',
                      'Supply Chain Security Requirements',
                      'Exchange Portal und Teilnehmertypen',
                      'Implementation Roadmap für automotive industry'
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
                          onClick={() => setActiveSection(section.id)}
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
                      VDA ISM Catalogue
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      TISAX Handbook
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
            <div ref={contentRef}>
              <Tabs value={activeSection} onValueChange={setActiveSection}>
                <TabsList className="hidden" />
                
                {/* Overview Section */}
                <TabsContent value="overview" className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">TISAX Überblick</h2>
                          <Button
                            onClick={() => handleSectionComplete('overview')}
                            variant={completedSections.includes('overview') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('overview') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>
                        
                        <div className="prose prose-invert prose-slate max-w-none">
                          <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            TISAX (Trusted Information Security Assessment eXchange) ist der führende Standard 
                            für Informationssicherheit in der Automobilindustrie. Entwickelt vom VDA 
                            (Verband der Automobilindustrie) zur Harmonisierung von Sicherheitsanforderungen 
                            in der automotive supply chain.
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
                                  <span>Harmonisierung der Sicherheitsanforderungen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Reduktion von Assessment-Redundanzen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Vertrauen in der automotive supply chain</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Schutz kritischer Fahrzeugdaten</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                                <Building2 className="h-5 w-5" />
                                Teilnehmer
                              </h3>
                              <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>OEMs (BMW, Mercedes, Audi, VW, etc.)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Tier-1, Tier-2, Tier-3 Suppliers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Engineering Service Provider</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>IT Service Provider</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4">TISAX vs. andere Standards</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="border-b border-slate-600">
                                    <td className="p-3 font-semibold text-white">Aspekt</td>
                                    <td className="p-3 font-semibold text-blue-300 text-center">TISAX</td>
                                    <td className="p-3 font-semibold text-emerald-300 text-center">ISO 27001</td>
                                    <td className="p-3 font-semibold text-purple-300 text-center">SOC 2</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Branchenfokus</td>
                                    <td className="p-3 text-center">Automotive</td>
                                    <td className="p-3 text-center">Universal</td>
                                    <td className="p-3 text-center">SaaS/Cloud</td>
                                  </tr>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Assessment Level</td>
                                    <td className="p-3 text-center">3 Level (AL1-AL3)</td>
                                    <td className="p-3 text-center">Binary</td>
                                    <td className="p-3 text-center">Type I/II</td>
                                  </tr>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Gültigkeit</td>
                                    <td className="p-3 text-center">3 Jahre</td>
                                    <td className="p-3 text-center">3 Jahre</td>
                                    <td className="p-3 text-center">1 Jahr</td>
                                  </tr>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Exchange Portal</td>
                                    <td className="p-3 text-center">✓</td>
                                    <td className="p-3 text-center">✗</td>
                                    <td className="p-3 text-center">✗</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Assessment Levels Section */}
                <TabsContent value="assessment-levels" className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Assessment Level</h2>
                          <Button
                            onClick={() => handleSectionComplete('assessment-levels')}
                            variant={completedSections.includes('assessment-levels') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('assessment-levels') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-blue-300 mb-3">TISAX Assessment Level Konzept</h3>
                          <p className="text-slate-300 mb-4">
                            TISAX verwendet drei Assessment Level (AL1, AL2, AL3), die unterschiedliche 
                            Schutzbedarfe und Sicherheitsanforderungen abbilden. Jedes Level baut auf dem 
                            vorherigen auf und erhöht die Anforderungen entsprechend dem Schutzbedarf der Daten.
                          </p>
                          <div className="relative h-48 flex items-end justify-center">
                            <svg className="w-full h-full" viewBox="0 0 400 150">
                              {/* Pyramid for AL levels */}
                              <path d="M200 30 L300 130 L100 130 Z" fill="url(#alPyramidGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                              
                              {/* Level separators */}
                              <line x1="133" y1="90" x2="267" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                              <line x1="166" y1="110" x2="234" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                              
                              {/* Labels */}
                              <text x="200" y="70" textAnchor="middle" fill="#ef4444" className="text-sm font-semibold">AL3</text>
                              <text x="200" y="105" textAnchor="middle" fill="#f97316" className="text-sm font-semibold">AL2</text>
                              <text x="200" y="125" textAnchor="middle" fill="#22c55e" className="text-sm font-semibold">AL1</text>
                              
                              {/* Control count labels */}
                              <text x="320" y="70" fill="#ef4444" className="text-xs">103 Controls</text>
                              <text x="320" y="105" fill="#f97316" className="text-xs">67 Controls</text>
                              <text x="320" y="125" fill="#22c55e" className="text-xs">45 Controls</text>
                              
                              {/* Gradient Definition */}
                              <defs>
                                <linearGradient id="alPyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6"/>
                                  <stop offset="50%" stopColor="#f97316" stopOpacity="0.4"/>
                                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2"/>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {assessmentLevels.map((level, index) => {
                            const IconComponent = level.icon;
                            const isExpanded = expandedLevel[level.level];
                            
                            return (
                              <motion.div
                                key={level.level}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border border-slate-700 rounded-xl overflow-hidden"
                              >
                                <button
                                  onClick={() => toggleLevelExpansion(level.level)}
                                  className="w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className={cn(
                                      "p-3 rounded-xl bg-gradient-to-r",
                                      level.color
                                    )}>
                                      <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                      <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-lg font-bold text-white">{level.level}</h3>
                                        <Badge variant="outline" className="text-xs">
                                          {level.controlObjectives} Controls
                                        </Badge>
                                      </div>
                                      <h4 className="text-md font-semibold text-blue-300">{level.title}</h4>
                                      <p className="text-slate-400 text-sm">{level.description}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <Badge className="bg-emerald-500/20 text-emerald-300 text-xs">
                                      {level.costs}
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
                                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div>
                                          <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-blue-400" />
                                            Charakteristika
                                          </h5>
                                          <ul className="space-y-2">
                                            {level.characteristics.map((char, idx) => (
                                              <li key={idx} className="flex items-start gap-2">
                                                <Circle className="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" />
                                                <span className="text-xs text-slate-300">{char}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <Car className="h-4 w-4 text-emerald-400" />
                                            Typische Use Cases
                                          </h5>
                                          <ul className="space-y-2">
                                            {level.typicalUseCase.map((useCase, idx) => (
                                              <li key={idx} className="flex items-start gap-2">
                                                <Circle className="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" />
                                                <span className="text-xs text-slate-300">{useCase}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-purple-400" />
                                            Implementation
                                          </h5>
                                          <div className="space-y-2 text-xs">
                                            <div className="bg-slate-800/50 rounded p-2">
                                              <div className="text-white font-medium">Aufwand:</div>
                                              <div className="text-slate-300">{level.implementationEffort}</div>
                                            </div>
                                            <div className="bg-slate-800/50 rounded p-2">
                                              <div className="text-white font-medium">Kosten:</div>
                                              <div className="text-slate-300">{level.costs}</div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div>
                                          <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                            <Target className="h-4 w-4 text-orange-400" />
                                            Controls
                                          </h5>
                                          <div className="bg-slate-800/50 rounded p-3">
                                            <div className="text-center">
                                              <div className="text-2xl font-bold text-orange-400">{level.controlObjectives}</div>
                                              <div className="text-xs text-slate-400">Control Objectives</div>
                                            </div>
                                          </div>
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
                </TabsContent>

                {/* Control Objectives Section */}
                <TabsContent value="control-objectives" className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Control Objectives - VDA ISM Framework</h2>
                          <Button
                            onClick={() => handleSectionComplete('control-objectives')}
                            variant={completedSections.includes('control-objectives') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('control-objectives') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Control Framework Overview */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">VDA ISM Control Framework Structure</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-800/50 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-white mb-4">Basiert auf bewährten Standards</h4>
                                <ul className="space-y-3">
                                  {[
                                    'ISO/IEC 27001:2013 als Grundlage',
                                    'Automotive-spezifische Erweiterungen',
                                    'VDA-spezifische Anforderungen',
                                    'Supply Chain Security Focus',
                                    'OEM-Supplier Relationship Management'
                                  ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm text-slate-300">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="bg-slate-800/50 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-white mb-4">Control-Gruppen Übersicht</h4>
                                <div className="space-y-3">
                                  {[
                                    { name: 'Information Security Management', count: '12 Controls' },
                                    { name: 'Human Resource Security', count: '8 Controls' },
                                    { name: 'Asset Management', count: '9 Controls' },
                                    { name: 'Access Control', count: '18 Controls' },
                                    { name: 'Cryptography', count: '2 Controls' },
                                    { name: 'Physical Security', count: '15 Controls' },
                                    { name: 'Operations Security', count: '21 Controls' },
                                    { name: 'Communications Security', count: '7 Controls' },
                                    { name: 'Acquisition & Development', count: '11 Controls' }
                                  ].map((group) => (
                                    <div key={group.name} className="flex justify-between items-center bg-slate-900/50 rounded p-2">
                                      <span className="text-sm text-slate-300">{group.name}</span>
                                      <Badge variant="outline" className="text-xs">{group.count}</Badge>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Detailed Control Groups */}
                          <div className="space-y-6">
                            {controlObjectiveGroups.map((group, index) => {
                              const IconComponent = group.icon;
                              const isExpanded = expandedLevel[group.code];
                              
                              return (
                                <motion.div
                                  key={group.code}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.05 }}
                                  className="border border-slate-700 rounded-xl overflow-hidden"
                                >
                                  <button
                                    onClick={() => toggleLevelExpansion(group.code)}
                                    className="w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className={cn(
                                        "p-3 rounded-xl bg-gradient-to-r",
                                        group.color
                                      )}>
                                        <IconComponent className="h-6 w-6 text-white" />
                                      </div>
                                      <div className="text-left">
                                        <h3 className="text-lg font-bold text-white">{group.group}</h3>
                                        <p className="text-slate-400 text-sm">{group.description}</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <Badge variant="outline" className="text-xs">
                                        {group.objectives.length} Objectives
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
                                        {group.objectives.map((objective) => (
                                          <div key={objective.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                            <div className="flex items-center gap-3 mb-4">
                                              <Badge className="bg-blue-500/20 text-blue-300">{objective.id}</Badge>
                                              <h4 className="text-lg font-bold text-white">{objective.title}</h4>
                                            </div>
                                            
                                            <p className="text-slate-300 mb-6 text-sm italic">{objective.description}</p>
                                            
                                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                              <div>
                                                <h5 className="text-sm font-semibold text-blue-300 mb-3">Requirements:</h5>
                                                <ul className="space-y-2">
                                                  {objective.requirements.map((req, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                      <CheckCircle className="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" />
                                                      <span className="text-xs text-slate-300">{req}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                              
                                              <div>
                                                <h5 className="text-sm font-semibold text-emerald-300 mb-3">Evidence:</h5>
                                                <ul className="space-y-2">
                                                  {objective.evidence.map((evidence, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                      <FileText className="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" />
                                                      <span className="text-xs text-slate-300">{evidence}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                              
                                              <div>
                                                <h5 className="text-sm font-semibold text-orange-300 mb-3">Automotive Specific:</h5>
                                                <ul className="space-y-2">
                                                  {objective.automotiveSpecific.map((specific, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                      <Car className="h-3 w-3 text-orange-400 mt-1 flex-shrink-0" />
                                                      <span className="text-xs text-slate-300">{specific}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Implementation Section */}
                <TabsContent value="implementation" className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">TISAX Implementation Roadmap</h2>
                          <Button
                            onClick={() => handleSectionComplete('implementation')}
                            variant={completedSections.includes('implementation') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('implementation') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Implementation Overview */}
                          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">Automotive-Specific Implementation Approach</h3>
                            <p className="text-slate-300 mb-4">
                              TISAX Implementation erfordert ein tiefes Verständnis der automotive supply chain, 
                              OEM-spezifischer Anforderungen und der besonderen Herausforderungen der Fahrzeugentwicklung.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                              <div className="bg-slate-800/50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-purple-400">6-18 Monate</div>
                                <div className="text-sm text-slate-400">Typische Implementierungsdauer</div>
                              </div>
                              <div className="bg-slate-800/50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-pink-400">6 Phasen</div>
                                <div className="text-sm text-slate-400">Strukturierter Ansatz</div>
                              </div>
                              <div className="bg-slate-800/50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-indigo-400">€15k-200k</div>
                                <div className="text-sm text-slate-400">Investment je nach AL</div>
                              </div>
                            </div>
                          </div>

                          {/* Implementation Phases */}
                          <div className="space-y-6">
                            {implementationFramework.map((phase, index) => {
                              const IconComponent = phase.icon;
                              return (
                                <motion.div
                                  key={phase.phase}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                                >
                                  <div className="flex items-start gap-4">
                                    <div className={cn(
                                      "p-3 rounded-xl bg-gradient-to-r flex-shrink-0",
                                      phase.color
                                    )}>
                                      <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-4 mb-4">
                                        <h4 className="text-lg font-bold text-white">{phase.phase}</h4>
                                        <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                                      </div>
                                      
                                      <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                          <h5 className="text-sm font-semibold text-slate-300 mb-3">Objectives:</h5>
                                          <ul className="space-y-2">
                                            {phase.objectives.map((objective, idx) => (
                                              <li key={idx} className="flex items-start gap-2">
                                                <input 
                                                  type="checkbox" 
                                                  id={`objective-${index}-${idx}`}
                                                  checked={checkedItems[`objective-${index}-${idx}`] || false}
                                                  onChange={() => handleItemCheck(`objective-${index}-${idx}`)}
                                                  className="mt-1 text-blue-500"
                                                />
                                                <label 
                                                  htmlFor={`objective-${index}-${idx}`}
                                                  className={cn(
                                                    "text-sm text-slate-300 cursor-pointer",
                                                    checkedItems[`objective-${index}-${idx}`] && "line-through opacity-60"
                                                  )}
                                                >
                                                  {objective}
                                                </label>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        
                                        <div>
                                          <h5 className="text-sm font-semibold text-slate-300 mb-3">Deliverables:</h5>
                                          <div className="flex flex-wrap gap-2">
                                            {phase.deliverables.map((deliverable) => (
                                              <Badge key={deliverable} variant="outline" className="text-xs">
                                                {deliverable}
                                              </Badge>
                                            ))}
                                          </div>
                                        </div>
                                        
                                        <div>
                                          <h5 className="text-sm font-semibold text-slate-300 mb-3">Automotive Considerations:</h5>
                                          <ul className="space-y-1">
                                            {phase.automotiveConsiderations.map((consideration, idx) => (
                                              <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                                                <Car className="h-3 w-3 text-blue-400" />
                                                {consideration}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Add more comprehensive sections following the same pattern... */}
                
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TisaxGuide;