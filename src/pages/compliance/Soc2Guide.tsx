import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
// Removed tabs import - using single page navigation
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
  GitBranch,
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
  GitCommit,
  GitMerge,
  Box,
  Boxes,
  Package2,
  Truck,
  Anchor,
  Plane,
  Train,
  Car
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Soc2Guide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedCriteria, setExpandedCriteria] = useState<{[key: string]: boolean}>({});
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: 'ueberblick', title: 'Überblick', icon: Eye, readTime: '10 Min' },
    { id: 'trust-prinzipien', title: 'Trust Services Criteria', icon: Shield, readTime: '20 Min' },
    { id: 'typen', title: 'Type I vs Type II', icon: GitBranch, readTime: '12 Min' },
    { id: 'umfang', title: 'Scope Definition', icon: Target, readTime: '15 Min' },
    { id: 'sicherheit', title: 'Security Criteria', icon: Lock, readTime: '30 Min' },
    { id: 'verfuegbarkeit', title: 'Availability Criteria', icon: Activity, readTime: '18 Min' },
    { id: 'verarbeitung', title: 'Processing Integrity', icon: Cpu, readTime: '18 Min' },
    { id: 'vertraulichkeit', title: 'Confidentiality', icon: Eye, readTime: '15 Min' },
    { id: 'datenschutz', title: 'Privacy Criteria', icon: UserCheck, readTime: '20 Min' },
    { id: 'kontrollen', title: 'Common Controls', icon: Settings, readTime: '35 Min' },
    { id: 'beweise', title: 'Evidence Collection', icon: FileText, readTime: '25 Min' },
    { id: 'audit-prozess', title: 'Audit Process', icon: Search, readTime: '22 Min' },
    { id: 'implementierung', title: 'Implementation Guide', icon: Rocket, readTime: '30 Min' },
    { id: 'ueberwachung', title: 'Continuous Monitoring', icon: Activity, readTime: '18 Min' },
    { id: 'tools', title: 'Tools & Automation', icon: Code, readTime: '15 Min' },
    { id: 'zertifizierung', title: 'Certification Path', icon: Award, readTime: '12 Min' },
    { id: 'vorteile', title: 'Business Benefits', icon: TrendingUp, readTime: '10 Min' },
    { id: 'ressourcen', title: 'Resources & Templates', icon: Download, readTime: '8 Min' }
  ];

  const trustServicesCriteria = [
    {
      category: 'Security (Common Criteria)',
      code: 'CC',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      description: 'The system is protected against unauthorized access, both physical and logical',
      required: true,
      controlCategories: [
        {
          name: 'CC1: Control Environment',
          controls: [
            'CC1.1 - COSO Principle 1: Demonstrates commitment to integrity and ethical values',
            'CC1.2 - COSO Principle 2: Board demonstrates independence and oversight',
            'CC1.3 - COSO Principle 3: Management establishes structures and reporting',
            'CC1.4 - COSO Principle 4: Demonstrates commitment to competence',
            'CC1.5 - COSO Principle 5: Enforces accountability'
          ]
        },
        {
          name: 'CC2: Communication and Information',
          controls: [
            'CC2.1 - COSO Principle 13: Uses relevant, quality information',
            'CC2.2 - COSO Principle 14: Communicates internally',
            'CC2.3 - COSO Principle 15: Communicates externally'
          ]
        },
        {
          name: 'CC3: Risk Assessment',
          controls: [
            'CC3.1 - COSO Principle 6: Specifies suitable objectives',
            'CC3.2 - COSO Principle 7: Identifies and analyzes risk',
            'CC3.3 - COSO Principle 8: Assesses fraud risk',
            'CC3.4 - COSO Principle 9: Identifies significant changes'
          ]
        },
        {
          name: 'CC4: Monitoring Activities',
          controls: [
            'CC4.1 - COSO Principle 16: Conducts ongoing evaluations',
            'CC4.2 - COSO Principle 17: Evaluates and communicates deficiencies'
          ]
        },
        {
          name: 'CC5: Control Activities',
          controls: [
            'CC5.1 - COSO Principle 10: Selects and develops control activities',
            'CC5.2 - COSO Principle 11: Technology general controls',
            'CC5.3 - COSO Principle 12: Deploys through policies and procedures'
          ]
        },
        {
          name: 'CC6: Logical and Physical Access Controls',
          controls: [
            'CC6.1 - Logical access security software and infrastructure',
            'CC6.2 - Prior to issuing system credentials',
            'CC6.3 - Considers network and infrastructure management',
            'CC6.4 - Restricts physical access',
            'CC6.5 - Authenticates individual users',
            'CC6.6 - Prevents or detects unauthorized access',
            'CC6.7 - Restricts data transmission',
            'CC6.8 - Prevents or detects malicious software'
          ]
        },
        {
          name: 'CC7: System Operations',
          controls: [
            'CC7.1 - Detects and monitors capacity demands',
            'CC7.2 - Monitors system components',
            'CC7.3 - Evaluates security events',
            'CC7.4 - Responds to security incidents',
            'CC7.5 - Identifies and manages vulnerabilities'
          ]
        },
        {
          name: 'CC8: Change Management',
          controls: [
            'CC8.1 - Authorizes changes',
            'CC8.2 - Tests system changes',
            'CC8.3 - Prevents unauthorized changes',
            'CC8.4 - Uses configuration management software'
          ]
        },
        {
          name: 'CC9: Risk Mitigation',
          controls: [
            'CC9.1 - Identifies and manages risk',
            'CC9.2 - Assesses vendor and third-party risk'
          ]
        }
      ]
    },
    {
      category: 'Availability',
      code: 'A',
      icon: Activity,
      color: 'from-green-500 to-emerald-600',
      description: 'The system is available for operation and use as committed or agreed',
      required: false,
      controlCategories: [
        {
          name: 'A1: Availability Commitments',
          controls: [
            'A1.1 - Maintains commitments and system requirements',
            'A1.2 - Monitors system availability',
            'A1.3 - Tests recovery plan procedures'
          ]
        }
      ]
    },
    {
      category: 'Processing Integrity',
      code: 'PI',
      icon: Cpu,
      color: 'from-purple-500 to-pink-600',
      description: 'System processing is complete, valid, accurate, timely, and authorized',
      required: false,
      controlCategories: [
        {
          name: 'PI1: Processing Integrity',
          controls: [
            'PI1.1 - Uses defined processing integrity criteria',
            'PI1.2 - Detects and corrects processing errors',
            'PI1.3 - Validates inputs',
            'PI1.4 - Monitors processing',
            'PI1.5 - Implements output controls'
          ]
        }
      ]
    },
    {
      category: 'Confidentiality',
      code: 'C',
      icon: Lock,
      color: 'from-orange-500 to-red-600',
      description: 'Information designated as confidential is protected as committed or agreed',
      required: false,
      controlCategories: [
        {
          name: 'C1: Confidential Information',
          controls: [
            'C1.1 - Identifies and maintains confidential information',
            'C1.2 - Disposes of confidential information'
          ]
        }
      ]
    },
    {
      category: 'Privacy',
      code: 'P',
      icon: UserCheck,
      color: 'from-cyan-500 to-blue-600',
      description: 'Personal information is collected, used, retained, disclosed, and disposed in conformity with commitments',
      required: false,
      controlCategories: [
        {
          name: 'P1-P8: Privacy Criteria',
          controls: [
            'P1.1 - Notice and communication of objectives',
            'P2.1 - Choice and consent',
            'P3.1 - Collection of personal information',
            'P4.1 - Use of personal information',
            'P5.1 - Retention of personal information',
            'P6.1 - Disclosure to third parties',
            'P7.1 - Access to personal information',
            'P8.1 - Quality of personal information'
          ]
        }
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1: Readiness Assessment',
      duration: '2-4 Wochen',
      icon: Search,
      color: 'from-blue-500 to-indigo-600',
      tasks: [
        'Gap-Analyse gegen TSC durchführen',
        'Scope und Systemgrenzen definieren',
        'Stakeholder identifizieren und einbinden',
        'Budget und Ressourcenplanung',
        'Projektteam zusammenstellen',
        'Risk Assessment initialisieren'
      ],
      deliverables: ['Gap Analysis Report', 'Project Charter', 'Scope Statement']
    },
    {
      phase: 'Phase 2: Control Design',
      duration: '4-6 Wochen',
      icon: Settings,
      color: 'from-emerald-500 to-teal-600',
      tasks: [
        'Control Framework entwickeln',
        'Policies und Procedures erstellen',
        'RACI Matrix definieren',
        'Control Testing Procedures entwickeln',
        'Evidence Collection Plan erstellen',
        'Automation Opportunities identifizieren'
      ],
      deliverables: ['Control Matrix', 'Policy Suite', 'Process Documentation']
    },
    {
      phase: 'Phase 3: Implementation',
      duration: '8-12 Wochen',
      icon: Rocket,
      color: 'from-purple-500 to-pink-600',
      tasks: [
        'Controls implementieren',
        'Monitoring-Systeme aufsetzen',
        'Mitarbeiter schulen',
        'Evidence Collection starten',
        'Incident Response etablieren',
        'Change Management Prozess einführen'
      ],
      deliverables: ['Implemented Controls', 'Training Records', 'Monitoring Dashboard']
    },
    {
      phase: 'Phase 4: Testing & Remediation',
      duration: '4-6 Wochen',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-600',
      tasks: [
        'Control Effectiveness Testing',
        'Deficiency Identification',
        'Remediation Planning',
        'Re-testing durchführen',
        'Evidence Review',
        'Management Assertions vorbereiten'
      ],
      deliverables: ['Test Results', 'Remediation Plan', 'Evidence Package']
    },
    {
      phase: 'Phase 5: Audit Preparation',
      duration: '2-3 Wochen',
      icon: FileText,
      color: 'from-cyan-500 to-blue-600',
      tasks: [
        'Auditor Selection und Beauftragung',
        'System Description finalisieren',
        'Evidence Package kompilieren',
        'Walkthrough Sessions planen',
        'Management Representation Letter',
        'Audit Kickoff vorbereiten'
      ],
      deliverables: ['System Description', 'Complete Evidence', 'Audit Schedule']
    },
    {
      phase: 'Phase 6: Audit & Report',
      duration: '6-8 Wochen',
      icon: Award,
      color: 'from-yellow-500 to-orange-600',
      tasks: [
        'Audit Fieldwork Support',
        'Auditor Inquiries beantworten',
        'Additional Evidence bereitstellen',
        'Draft Report Review',
        'Management Response erstellen',
        'Final Report Distribution'
      ],
      deliverables: ['SOC 2 Type II Report', 'Management Letter', 'Improvement Plan']
    }
  ];

  const handleSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleCriteriaExpansion = (criteriaCode: string) => {
    setExpandedCriteria(prev => ({
      ...prev,
      [criteriaCode]: !prev[criteriaCode]
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

  // Initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'ueberblick', title: 'Überblick', icon: Eye, readTime: '10 Min' },
        { id: 'trust-prinzipien', title: 'Trust Services Criteria', icon: Shield, readTime: '20 Min' },
        { id: 'typen', title: 'Type I vs Type II', icon: GitBranch, readTime: '12 Min' },
        { id: 'umfang', title: 'Scope Definition', icon: Target, readTime: '15 Min' },
        { id: 'sicherheit', title: 'Security Criteria', icon: Lock, readTime: '30 Min' },
        { id: 'verfuegbarkeit', title: 'Availability Criteria', icon: Activity, readTime: '18 Min' },
        { id: 'verarbeitung', title: 'Processing Integrity', icon: Cpu, readTime: '18 Min' },
        { id: 'vertraulichkeit', title: 'Confidentiality', icon: Eye, readTime: '15 Min' },
        { id: 'datenschutz', title: 'Privacy Criteria', icon: UserCheck, readTime: '20 Min' },
        { id: 'kontrollen', title: 'Common Controls', icon: Settings, readTime: '35 Min' },
        { id: 'beweise', title: 'Evidence Collection', icon: FileText, readTime: '25 Min' },
        { id: 'audit-prozess', title: 'Audit Process', icon: Search, readTime: '22 Min' },
        { id: 'implementierung', title: 'Implementation Guide', icon: Rocket, readTime: '30 Min' },
        { id: 'ueberwachung', title: 'Continuous Monitoring', icon: Activity, readTime: '18 Min' },
        { id: 'tools', title: 'Tools & Automation', icon: Code, readTime: '15 Min' },
        { id: 'zertifizierung', title: 'Certification Path', icon: Award, readTime: '12 Min' },
        { id: 'vorteile', title: 'Business Benefits', icon: TrendingUp, readTime: '10 Min' },
        { id: 'ressourcen', title: 'Resources & Templates', icon: Download, readTime: '8 Min' }
      ].map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const CounterAnimation = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
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

    return <span ref={ref}>{count}{suffix}</span>;
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
                <Shield className="h-3 w-3 mr-1" />
                SOC 2 Type II Guide
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
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">SOC 2 Type II</h1>
                  <p className="text-xl text-blue-400">Trust Services Criteria</p>
                </div>
              </div>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Der Goldstandard für SaaS-Unternehmen und Service Provider. 
                Demonstrieren Sie die Wirksamkeit Ihrer Sicherheitskontrollen über einen Zeitraum von mindestens 6 Monaten.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-300">
                  <Award className="h-4 w-4 mr-2" />
                  AICPA Standard
                </Badge>
                <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
                  <Globe className="h-4 w-4 mr-2" />
                  USA & International
                </Badge>
                <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300">
                  <Clock className="h-4 w-4 mr-2" />
                  6-12 Monate Audit
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={() => setActiveSection('trust-principles')}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Guide starten
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <Download className="h-4 w-4 mr-2" />
                  PDF herunterladen
                </Button>
                <Button 
                  asChild
                  variant="ghost" 
                  className="text-slate-400 hover:text-slate-200"
                >
                  <a href="/zertifizierung/soc2">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    SOC 2 Produktseite
                  </a>
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
                      <CounterAnimation value={5} />
                    </div>
                    <div className="text-sm text-slate-400">Trust Services Criteria</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      <CounterAnimation value={64} />
                    </div>
                    <div className="text-sm text-slate-400">Control Points</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      <CounterAnimation value={6} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-400">Monate Audit</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      <CounterAnimation value={90} suffix="%" />
                    </div>
                    <div className="text-sm text-slate-400">Enterprise Adoption</div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Overview */}
              <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Was Sie in diesem Guide lernen</h3>
                  <div className="space-y-3">
                    {[
                      'Trust Services Criteria im Detail',
                      'Type I vs Type II Unterschiede',
                      'Common Controls (CC) Implementation',
                      'Evidence Collection Best Practices',
                      'Audit-Prozess und Timeline',
                      'Continuous Monitoring Setup'
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
              {sections.map((item, index) => (
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
                  <item.icon className={cn(
                    "h-4 w-4",
                    activeSection === item.id && "text-red-600 dark:text-red-500"
                  )} />
                  <span className={cn(
                    "text-sm font-medium",
                    activeSection === item.id && "text-red-700 dark:text-red-400"
                  )}>{item.title}</span>
                </button>
              ))}
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
                      Control Matrix Template
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Evidence Checklist
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
                            SOC 2 (Service Organization Control 2) ist ein Prüfungsstandard, der vom American Institute 
                            of CPAs (AICPA) entwickelt wurde. Er bewertet, wie gut ein Service Provider personenbezogene 
                            Daten verwaltet und schützt, basierend auf fünf Trust Services Criteria.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                Was ist SOC 2?
                              </h3>
                              <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Unabhängige Prüfung von Sicherheitskontrollen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Fokus auf Cloud- und SaaS-Anbieter</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Kundenvertrauen durch externe Validierung</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>Jährliche Wiederholung erforderlich</span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                                <Building2 className="h-5 w-5" />
                                Für wen relevant?
                              </h3>
                              <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>SaaS-Unternehmen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Cloud Service Provider</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Managed Service Provider</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                  <span>Data Processing Services</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-4">SOC 2 vs. andere Standards</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="border-b border-slate-600">
                                    <td className="p-3 font-semibold text-white">Aspekt</td>
                                    <td className="p-3 font-semibold text-blue-300 text-center">SOC 2</td>
                                    <td className="p-3 font-semibold text-emerald-300 text-center">ISO 27001</td>
                                    <td className="p-3 font-semibold text-purple-300 text-center">PCI DSS</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Fokus</td>
                                    <td className="p-3 text-center">Service Provider</td>
                                    <td className="p-3 text-center">Alle Organisationen</td>
                                    <td className="p-3 text-center">Zahlungskarten</td>
                                  </tr>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Flexibilität</td>
                                    <td className="p-3 text-center">Hoch (Custom)</td>
                                    <td className="p-3 text-center">Mittel (Framework)</td>
                                    <td className="p-3 text-center">Niedrig (Prescriptive)</td>
                                  </tr>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Audit-Periode</td>
                                    <td className="p-3 text-center">6-12 Monate</td>
                                    <td className="p-3 text-center">Punkt-in-Zeit</td>
                                    <td className="p-3 text-center">Jährlich</td>
                                  </tr>
                                  <tr className="border-b border-slate-700">
                                    <td className="p-3 text-slate-300">Kosten</td>
                                    <td className="p-3 text-center">$30k-100k</td>
                                    <td className="p-3 text-center">$50k-150k</td>
                                    <td className="p-3 text-center">$20k-80k</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Trust Prinzipien Section */}
                <section id="trust-prinzipien" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Trust Services Criteria</h2>
                          <Button
                            onClick={() => handleSectionComplete('trust-principles')}
                            variant={completedSections.includes('trust-principles') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('trust-principles') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-blue-300 mb-3">Die 5 Trust Services Criteria</h3>
                          <p className="text-slate-300 mb-4">
                            SOC 2 basiert auf fünf Trust Services Criteria (TSC), die vom AICPA definiert wurden. 
                            Security ist immer erforderlich, die anderen vier sind optional je nach Service.
                          </p>
                          <div className="grid md:grid-cols-5 gap-4 text-sm">
                            <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                              <div className="font-semibold text-blue-300">Security</div>
                              <Badge className="bg-blue-500/20 text-blue-300 text-xs mt-1">Required</Badge>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Activity className="h-6 w-6 text-green-400 mx-auto mb-2" />
                              <div className="font-semibold text-green-300">Availability</div>
                              <Badge variant="outline" className="text-xs mt-1">Optional</Badge>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Cpu className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                              <div className="font-semibold text-purple-300">Processing</div>
                              <Badge variant="outline" className="text-xs mt-1">Optional</Badge>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                              <Lock className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                              <div className="font-semibold text-orange-300">Confidentiality</div>
                              <Badge variant="outline" className="text-xs mt-1">Optional</Badge>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                              <UserCheck className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                              <div className="font-semibold text-cyan-300">Privacy</div>
                              <Badge variant="outline" className="text-xs mt-1">Optional</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {trustServicesCriteria.map((criteria, index) => {
                            const IconComponent = criteria.icon;
                            const isExpanded = expandedCriteria[criteria.code];
                            
                            return (
                              <motion.div
                                key={criteria.code}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="border border-slate-700 rounded-xl overflow-hidden"
                              >
                                <button
                                  onClick={() => toggleCriteriaExpansion(criteria.code)}
                                  className="w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className={cn(
                                      "p-3 rounded-xl bg-gradient-to-r",
                                      criteria.color
                                    )}>
                                      <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                      <h3 className="text-lg font-bold text-white">{criteria.category}</h3>
                                      <p className="text-slate-400 text-sm">{criteria.description}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    {criteria.required && (
                                      <Badge className="bg-blue-500/20 text-blue-300">Required</Badge>
                                    )}
                                    <Badge variant="outline" className="text-xs">
                                      {criteria.controlCategories.reduce((acc, cat) => acc + cat.controls.length, 0)} Controls
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
                                      {criteria.controlCategories.map((category) => (
                                        <div key={category.name} className="space-y-3">
                                          <h4 className="text-md font-semibold text-white flex items-center gap-2">
                                            <CircleDot className="h-4 w-4 text-blue-400" />
                                            {category.name}
                                          </h4>
                                          <ul className="space-y-2 ml-6">
                                            {category.controls.map((control, idx) => (
                                              <li key={idx} className="flex items-start gap-3 text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span className="text-slate-300">{control}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
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

                {/* Typen Section */}
                <section id="typen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Type I vs Type II</h2>
                          <Button
                            onClick={() => handleSectionComplete('types')}
                            variant={completedSections.includes('types') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('types') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                              <Clock className="h-5 w-5" />
                              SOC 2 Type I
                            </h3>
                            <div className="space-y-4">
                              <p className="text-slate-300">
                                Punkt-in-Zeit-Bewertung der Kontrollengestaltung
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Design der Kontrollen zu einem Stichtag</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Schnellere Durchführung (1-2 Monate)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Kostengünstiger (~$20k-40k)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Keine Aussage über Wirksamkeit</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                              <Activity className="h-5 w-5" />
                              SOC 2 Type II
                            </h3>
                            <div className="space-y-4">
                              <p className="text-slate-300">
                                Bewertung der Kontrollenwirksamkeit über einen Zeitraum
                              </p>
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Operating Effectiveness über 6-12 Monate</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Höheres Kundenvertrauen</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Detaillierte Testergebnisse</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5" />
                                  <span className="text-sm text-slate-300">Höhere Kosten (~$40k-100k)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                          <h3 className="text-xl font-bold text-white mb-6">Entscheidungshilfe: Type I oder Type II?</h3>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                              <div className="p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3">
                                <Rocket className="h-6 w-6 text-white" />
                              </div>
                              <h4 className="font-semibold text-white mb-2">Startups</h4>
                              <p className="text-sm text-slate-400 mb-3">
                                Oft Type I als erster Schritt, dann Upgrade zu Type II
                              </p>
                              <Badge className="bg-blue-500/20 text-blue-300">Type I → Type II</Badge>
                            </div>
                            <div className="text-center">
                              <div className="p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3">
                                <Building2 className="h-6 w-6 text-white" />
                              </div>
                              <h4 className="font-semibold text-white mb-2">Etablierte SaaS</h4>
                              <p className="text-sm text-slate-400 mb-3">
                                Direkt Type II für maximales Kundenvertrauen
                              </p>
                              <Badge className="bg-emerald-500/20 text-emerald-300">Type II</Badge>
                            </div>
                            <div className="text-center">
                              <div className="p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3">
                                <Target className="h-6 w-6 text-white" />
                              </div>
                              <h4 className="font-semibold text-white mb-2">Enterprise Vendors</h4>
                              <p className="text-sm text-slate-400 mb-3">
                                Type II ist oft Mindestanforderung für RFPs
                              </p>
                              <Badge className="bg-purple-500/20 text-purple-300">Type II Required</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Implementierung Section */}
                <section id="implementierung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Implementation Guide</h2>
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

                        <div className="mb-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-indigo-300 mb-4">SOC 2 Implementation Roadmap</h3>
                          <p className="text-slate-300 mb-4">
                            Eine erfolgreiche SOC 2 Type II Implementierung dauert typischerweise 9-12 Monate vom Start bis zum finalen Report.
                          </p>
                          <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-indigo-400">3-4 Monate</div>
                              <div className="text-sm text-slate-400">Preparation & Design</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-purple-400">6-12 Monate</div>
                              <div className="text-sm text-slate-400">Audit Period</div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="text-2xl font-bold text-pink-400">2-3 Monate</div>
                              <div className="text-sm text-slate-400">Report Finalization</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {implementationPhases.map((phase, index) => {
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
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                      <div>
                                        <h5 className="text-sm font-semibold text-slate-300 mb-3">Hauptaufgaben:</h5>
                                        <ul className="space-y-2">
                                          {phase.tasks.map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                              <input 
                                                type="checkbox" 
                                                id={`task-${index}-${idx}`}
                                                checked={checkedItems[`task-${index}-${idx}`] || false}
                                                onChange={() => handleItemCheck(`task-${index}-${idx}`)}
                                                className="mt-1 text-blue-500"
                                              />
                                              <label 
                                                htmlFor={`task-${index}-${idx}`}
                                                className={cn(
                                                  "text-sm text-slate-300 cursor-pointer",
                                                  checkedItems[`task-${index}-${idx}`] && "line-through opacity-60"
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
                                          {phase.deliverables.map((deliverable) => (
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
                              <Lightbulb className="h-5 w-5 text-yellow-400" />
                              Best Practices
                            </h3>
                            <ul className="space-y-3">
                              {[
                                'Early Auditor Engagement - Wählen Sie Ihren Auditor 2-3 Monate vor dem Audit-Start',
                                'Automation First - Automatisieren Sie Evidence Collection wo möglich',
                                'Continuous Monitoring - Implementieren Sie Monitoring vom ersten Tag',
                                'Documentation Culture - Dokumentieren Sie alles von Anfang an',
                                'Regular Internal Reviews - Monatliche interne Control Reviews',
                                'Stakeholder Buy-in - Involvieren Sie alle Teams frühzeitig'
                              ].map((practice, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-300">{practice}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5 text-red-400" />
                              Common Pitfalls
                            </h3>
                            <ul className="space-y-3">
                              {[
                                'Zu später Start - Unterschätzen der Vorbereitungszeit',
                                'Scope Creep - Unkontrollierte Scope-Erweiterung',
                                'Manual Evidence - Zu viel manuelle Evidence Collection',
                                'Fehlende Ownership - Keine klaren Verantwortlichkeiten',
                                'Audit Fatigue - Teams werden müde von ständigen Requests',
                                'Budget-Überschreitung - Versteckte Kosten nicht eingeplant'
                              ].map((pitfall, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-300">{pitfall}</span>
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

                {/* Umfang Section */}
                <section id="umfang" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Scope Definition</h2>
                          <Button
                            onClick={() => handleSectionComplete('scope')}
                            variant={completedSections.includes('scope') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('scope') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Scope Framework */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">SOC 2 Scope Considerations</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-800/50 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Target className="h-5 w-5 text-blue-400" />
                                  System Boundary Definition
                                </h4>
                                <ul className="space-y-3">
                                  {[
                                    'Applications in scope (SaaS platform, APIs, mobile apps)',
                                    'Infrastructure components (cloud services, databases, networks)',
                                    'Third-party services und integrations',
                                    'Data flows und processing activities',
                                    'Geographic locations und data centers',
                                    'Organizational boundaries (subsidiaries, divisions)',
                                    'Time periods für Type II audits (minimum 6 months)'
                                  ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm text-slate-300">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="bg-slate-800/50 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                  <Building2 className="h-5 w-5 text-emerald-400" />
                                  Service Organization Types
                                </h4>
                                <div className="space-y-4">
                                  {[
                                    {
                                      type: 'Type A: Direct Services',
                                      description: 'Services die direkt an User Entities bereitgestellt werden',
                                      examples: ['SaaS Applications', 'Cloud Infrastructure', 'Managed IT Services']
                                    },
                                    {
                                      type: 'Type B: Subservice Organizations',
                                      description: 'Services für andere Service Organizations',
                                      examples: ['Cloud Hosting Provider', 'Payment Processors', 'Identity Providers']
                                    }
                                  ].map((serviceType) => (
                                    <div key={serviceType.type} className="bg-slate-900/50 rounded-lg p-4">
                                      <h5 className="font-semibold text-white mb-2">{serviceType.type}</h5>
                                      <p className="text-sm text-slate-300 mb-2">{serviceType.description}</p>
                                      <div className="flex flex-wrap gap-1">
                                        {serviceType.examples.map((example) => (
                                          <Badge key={example} variant="outline" className="text-xs">
                                            {example}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Scoping Workshop Framework */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Scoping Workshop Methodology</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  phase: 'Discovery Phase',
                                  duration: '2-4 Wochen',
                                  icon: Search,
                                  activities: [
                                    'Current State Assessment',
                                    'Technology Stack Mapping',
                                    'Data Flow Analysis',
                                    'Risk Assessment',
                                    'Stakeholder Interviews',
                                    'Compliance Gap Analysis'
                                  ]
                                },
                                {
                                  phase: 'Analysis Phase',
                                  duration: '1-2 Wochen',
                                  icon: BarChart3,
                                  activities: [
                                    'Trust Services Criteria Mapping',
                                    'Control Objectives Identification',
                                    'Materiality Assessment',
                                    'Complementary User Entity Controls',
                                    'Subservice Organization Analysis',
                                    'Cost-Benefit Analysis'
                                  ]
                                },
                                {
                                  phase: 'Definition Phase',
                                  duration: '1 Woche',
                                  icon: FileText,
                                  activities: [
                                    'Scope Statement Drafting',
                                    'System Description Creation',
                                    'Control Matrix Development',
                                    'Stakeholder Review',
                                    'Auditor Pre-engagement',
                                    'Final Scope Approval'
                                  ]
                                }
                              ].map((phase) => {
                                const IconComponent = phase.icon;
                                return (
                                  <div key={phase.phase} className="bg-slate-900/50 rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-4">
                                      <IconComponent className="h-5 w-5 text-blue-400" />
                                      <div>
                                        <h4 className="font-semibold text-white">{phase.phase}</h4>
                                        <div className="text-xs text-slate-400">{phase.duration}</div>
                                      </div>
                                    </div>
                                    <ul className="space-y-1">
                                      {phase.activities.map((activity, idx) => (
                                        <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                                          <Circle className="h-2 w-2 fill-current" />
                                          {activity}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })
                            }
                            </div>
                          </div>

                          {/* Scoping Decision Matrix */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Scoping Decision Matrix</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="border-b border-slate-600">
                                    <td className="p-3 font-semibold text-white">Component</td>
                                    <td className="p-3 font-semibold text-center text-green-400">Include</td>
                                    <td className="p-3 font-semibold text-center text-yellow-400">Consider</td>
                                    <td className="p-3 font-semibold text-center text-red-400">Exclude</td>
                                    <td className="p-3 font-semibold text-white">Rationale</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    {
                                      component: 'Production Applications',
                                      include: '✓',
                                      consider: '',
                                      exclude: '',
                                      rationale: 'Core service delivery'
                                    },
                                    {
                                      component: 'Development Environment',
                                      include: '',
                                      consider: '△',
                                      exclude: '',
                                      rationale: 'If contains production data'
                                    },
                                    {
                                      component: 'Third-party APIs',
                                      include: '✓',
                                      consider: '',
                                      exclude: '',
                                      rationale: 'Material to service delivery'
                                    },
                                    {
                                      component: 'Internal HR Systems',
                                      include: '',
                                      consider: '',
                                      exclude: '✗',
                                      rationale: 'Not part of customer service'
                                    },
                                    {
                                      component: 'Backup Systems',
                                      include: '✓',
                                      consider: '',
                                      exclude: '',
                                      rationale: 'Critical for availability'
                                    },
                                    {
                                      component: 'Legacy Systems',
                                      include: '',
                                      consider: '△',
                                      exclude: '',
                                      rationale: 'Depends on usage and data'
                                    }
                                  ].map((row) => (
                                    <tr key={row.component} className="border-b border-slate-700">
                                      <td className="p-3 text-slate-300">{row.component}</td>
                                      <td className="p-3 text-center text-green-400">{row.include}</td>
                                      <td className="p-3 text-center text-yellow-400">{row.consider}</td>
                                      <td className="p-3 text-center text-red-400">{row.exclude}</td>
                                      <td className="p-3 text-sm text-slate-400">{row.rationale}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

                {/* Sicherheit Section */}
                <section id="sicherheit" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Security Criteria - Detailed Implementation</h2>
                          <Button
                            onClick={() => handleSectionComplete('security')}
                            variant={completedSections.includes('security') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('security') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* CC6 Detailed Implementation */}
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">CC6 - Logical and Physical Access Controls</h3>
                            <div className="space-y-6">
                              {[
                                {
                                  control: 'CC6.1',
                                  title: 'Logical Access Security Software',
                                  description: 'The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events.',
                                  implementations: [
                                    'Multi-factor authentication für alle privilegierten Accounts',
                                    'Identity and Access Management (IAM) System',
                                    'Single Sign-On (SSO) mit SAML/OIDC',
                                    'Privileged Access Management (PAM)',
                                    'Network segmentation und micro-segmentation',
                                    'VPN für remote access mit certificate-based authentication'
                                  ],
                                  evidence: [
                                    'IAM system configuration screenshots',
                                    'MFA enrollment reports',
                                    'Network architecture diagrams',
                                    'PAM system access logs',
                                    'SSO configuration documentation',
                                    'VPN access policies und logs'
                                  ],
                                  testingProcedures: [
                                    'Review IAM system configuration',
                                    'Test MFA enforcement on sample accounts',
                                    'Validate network segmentation controls',
                                    'Inspect privileged access management logs',
                                    'Verify SSO token validation',
                                    'Test VPN access controls'
                                  ]
                                },
                                {
                                  control: 'CC6.2',
                                  title: 'Prior to Issuing System Credentials',
                                  description: 'Prior to issuing system credentials and granting system access, the entity registers and authorizes new internal and external users.',
                                  implementations: [
                                    'Formal user provisioning workflow',
                                    'Manager approval für access requests',
                                    'Role-based access control (RBAC) matrix',
                                    'Automated provisioning durch HR systems',
                                    'Guest account management procedures',
                                    'Vendor access request und approval process'
                                  ],
                                  evidence: [
                                    'User provisioning workflow documentation',
                                    'Sample access request approvals',
                                    'RBAC matrix und role definitions',
                                    'HR system integration logs',
                                    'Guest account provisioning records',
                                    'Vendor access agreements'
                                  ],
                                  testingProcedures: [
                                    'Review sample user provisioning requests',
                                    'Test manager approval workflow',
                                    'Validate RBAC implementation',
                                    'Inspect automated provisioning logs',
                                    'Review guest account procedures',
                                    'Test vendor access controls'
                                  ]
                                },
                                {
                                  control: 'CC6.3',
                                  title: 'Network and Infrastructure Management',
                                  description: 'The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to network and infrastructure.',
                                  implementations: [
                                    'Network change management process',
                                    'Infrastructure as Code (IaC) practices',
                                    'Change approval board (CAB)',
                                    'Network configuration management database (CMDB)',
                                    'Automated deployment pipelines',
                                    'Network monitoring und alerting'
                                  ],
                                  evidence: [
                                    'Change management policy',
                                    'Infrastructure as Code templates',
                                    'CAB meeting minutes',
                                    'CMDB configuration records',
                                    'Deployment pipeline logs',
                                    'Network monitoring dashboards'
                                  ],
                                  testingProcedures: [
                                    'Review network change procedures',
                                    'Test IaC deployment process',
                                    'Inspect CAB approval records',
                                    'Validate CMDB accuracy',
                                    'Review deployment logs',
                                    'Test network monitoring alerts'
                                  ]
                                }
                              ].map((controlDetail) => (
                                <div key={controlDetail.control} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                  <div className="flex items-center gap-3 mb-4">
                                    <Badge className="bg-blue-500/20 text-blue-300">{controlDetail.control}</Badge>
                                    <h4 className="text-lg font-bold text-white">{controlDetail.title}</h4>
                                  </div>
                                  
                                  <p className="text-slate-300 mb-6 text-sm italic">{controlDetail.description}</p>
                                  
                                  <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                      <h5 className="text-sm font-semibold text-blue-300 mb-3">Implementation Examples:</h5>
                                      <ul className="space-y-2">
                                        {controlDetail.implementations.map((impl, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle className="h-3 w-3 text-blue-400 mt-1 flex-shrink-0" />
                                            <span className="text-xs text-slate-300">{impl}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 className="text-sm font-semibold text-emerald-300 mb-3">Evidence Requirements:</h5>
                                      <ul className="space-y-2">
                                        {controlDetail.evidence.map((evidence, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <FileText className="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" />
                                            <span className="text-xs text-slate-300">{evidence}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h5 className="text-sm font-semibold text-purple-300 mb-3">Testing Procedures:</h5>
                                      <ul className="space-y-2">
                                        {controlDetail.testingProcedures.map((test, idx) => (
                                          <li key={idx} className="flex items-start gap-2">
                                            <Search className="h-3 w-3 text-purple-400 mt-1 flex-shrink-0" />
                                            <span className="text-xs text-slate-300">{test}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CC7 System Operations */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">CC7 - System Operations Detailed Controls</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              {[
                                {
                                  control: 'CC7.1 - Capacity Management',
                                  implementations: [
                                    'Auto-scaling policies in cloud environments',
                                    'Performance monitoring und capacity planning',
                                    'Load testing und stress testing',
                                    'Resource utilization dashboards',
                                    'Capacity thresholds und alerting'
                                  ],
                                  tools: ['CloudWatch', 'Datadog', 'New Relic', 'Kubernetes HPA', 'Terraform']
                                },
                                {
                                  control: 'CC7.2 - System Monitoring',
                                  implementations: [
                                    'Infrastructure monitoring (CPU, memory, disk)',
                                    'Application performance monitoring (APM)',
                                    'Log aggregation und analysis',
                                    'Synthetic monitoring und uptime checks',
                                    'Real user monitoring (RUM)'
                                  ],
                                  tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Splunk', 'PingDOM']
                                },
                                {
                                  control: 'CC7.3 - Security Event Monitoring',
                                  implementations: [
                                    'Security Information Event Management (SIEM)',
                                    'Intrusion Detection Systems (IDS)',
                                    'User Behavior Analytics (UBA)',
                                    'Threat intelligence integration',
                                    'Security orchestration und automated response'
                                  ],
                                  tools: ['Splunk', 'QRadar', 'Sentinel', 'CrowdStrike', 'Phantom']
                                },
                                {
                                  control: 'CC7.4 - Incident Response',
                                  implementations: [
                                    'Incident response playbooks',
                                    'On-call escalation procedures',
                                    'Communication templates',
                                    'Post-incident reviews',
                                    'Lessons learned documentation'
                                  ],
                                  tools: ['PagerDuty', 'ServiceNow', 'Slack', 'JIRA', 'Confluence']
                                }
                              ].map((controlArea) => (
                                <div key={controlArea.control} className="bg-slate-900/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-white mb-3">{controlArea.control}</h4>
                                  <div className="space-y-3">
                                    <div>
                                      <h5 className="text-xs font-semibold text-slate-300 mb-2">Implementations:</h5>
                                      <ul className="space-y-1">
                                        {controlArea.implementations.map((impl, idx) => (
                                          <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                                            <Circle className="h-2 w-2 fill-current" />
                                            {impl}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-semibold text-slate-300 mb-2">Common Tools:</h5>
                                      <div className="flex flex-wrap gap-1">
                                        {controlArea.tools.map((tool) => (
                                          <Badge key={tool} variant="outline" className="text-xs">
                                            {tool}
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

                {/* Beweise Section */}
                <section id="beweise" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Evidence Collection Framework</h2>
                          <Button
                            onClick={() => handleSectionComplete('evidence')}
                            variant={completedSections.includes('evidence') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('evidence') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          {/* Evidence Types Matrix */}
                          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-emerald-300 mb-6">Evidence Types & Collection Methods</h3>
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="border-b border-slate-600">
                                    <td className="p-3 font-semibold text-white">Evidence Type</td>
                                    <td className="p-3 font-semibold text-white">Collection Method</td>
                                    <td className="p-3 font-semibold text-white">Frequency</td>
                                    <td className="p-3 font-semibold text-white">Automation Level</td>
                                    <td className="p-3 font-semibold text-white">Sample Controls</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    {
                                      type: 'System Screenshots',
                                      method: 'Manual capture with metadata',
                                      frequency: 'Quarterly',
                                      automation: 'Low',
                                      controls: 'CC6.1, CC6.2, CC8.1'
                                    },
                                    {
                                      type: 'Configuration Exports',
                                      method: 'API/CLI automation',
                                      frequency: 'Monthly',
                                      automation: 'High',
                                      controls: 'CC6.3, CC8.4, CC7.1'
                                    },
                                    {
                                      type: 'Log Files',
                                      method: 'SIEM/Log aggregation',
                                      frequency: 'Continuous',
                                      automation: 'High',
                                      controls: 'CC7.2, CC7.3, CC6.6'
                                    },
                                    {
                                      type: 'Policy Documents',
                                      method: 'Document management system',
                                      frequency: 'Annual/As changed',
                                      automation: 'Medium',
                                      controls: 'CC1.1, CC2.1, CC5.3'
                                    },
                                    {
                                      type: 'Training Records',
                                      method: 'LMS reporting',
                                      frequency: 'Quarterly',
                                      automation: 'Medium',
                                      controls: 'CC1.4, CC2.2'
                                    },
                                    {
                                      type: 'Vulnerability Scans',
                                      method: 'Automated scanning tools',
                                      frequency: 'Weekly/Monthly',
                                      automation: 'High',
                                      controls: 'CC7.5, CC6.8'
                                    },
                                    {
                                      type: 'Access Reviews',
                                      method: 'IAM system reports',
                                      frequency: 'Quarterly',
                                      automation: 'Medium',
                                      controls: 'CC6.2, CC6.4'
                                    },
                                    {
                                      type: 'Change Tickets',
                                      method: 'ITSM system exports',
                                      frequency: 'Continuous',
                                      automation: 'High',
                                      controls: 'CC8.1, CC8.2'
                                    }
                                  ].map((row) => (
                                    <tr key={row.type} className="border-b border-slate-700">
                                      <td className="p-3 text-slate-300">{row.type}</td>
                                      <td className="p-3 text-slate-300">{row.method}</td>
                                      <td className="p-3 text-slate-300">{row.frequency}</td>
                                      <td className="p-3">
                                        <Badge 
                                          className={cn(
                                            row.automation === 'High' && 'bg-green-500/20 text-green-300',
                                            row.automation === 'Medium' && 'bg-yellow-500/20 text-yellow-300',
                                            row.automation === 'Low' && 'bg-red-500/20 text-red-300'
                                          )}
                                        >
                                          {row.automation}
                                        </Badge>
                                      </td>
                                      <td className="p-3 text-slate-300 text-sm">{row.controls}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Evidence Collection Automation */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Code className="h-5 w-5 text-blue-400" />
                                Automation Tools & Scripts
                              </h3>
                              <div className="space-y-4">
                                {[
                                  {
                                    tool: 'AWS Config',
                                    purpose: 'Infrastructure compliance monitoring',
                                    evidence: 'Configuration snapshots, compliance reports'
                                  },
                                  {
                                    tool: 'Terraform Cloud',
                                    purpose: 'Infrastructure as Code audit trail',
                                    evidence: 'Plan/apply logs, state file changes'
                                  },
                                  {
                                    tool: 'GitHub Actions',
                                    purpose: 'CI/CD pipeline evidence',
                                    evidence: 'Build logs, deployment approvals'
                                  },
                                  {
                                    tool: 'Okta API',
                                    purpose: 'User access und authentication logs',
                                    evidence: 'Login events, MFA usage, access reviews'
                                  },
                                  {
                                    tool: 'Splunk/ELK',
                                    purpose: 'Centralized logging und monitoring',
                                    evidence: 'Security events, system logs, alerts'
                                  }
                                ].map((automation) => (
                                  <div key={automation.tool} className="bg-slate-900/50 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-300 mb-2">{automation.tool}</h4>
                                    <p className="text-sm text-slate-300 mb-2">{automation.purpose}</p>
                                    <p className="text-xs text-slate-400">Evidence: {automation.evidence}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-emerald-400" />
                                Evidence Management Best Practices
                              </h3>
                              <ul className="space-y-3">
                                {[
                                  'Implement centralized evidence repository with version control',
                                  'Establish automated evidence collection workflows',
                                  'Maintain audit trail für alle evidence modifications',
                                  'Use immutable storage für critical evidence',
                                  'Implement role-based access controls für evidence',
                                  'Create standardized naming conventions',
                                  'Establish retention policies aligned with audit requirements',
                                  'Implement evidence integrity verification (checksums)',
                                  'Maintain metadata für searchability und context',
                                  'Regular backup und disaster recovery testing'
                                ].map((practice, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-slate-300">{practice}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Sample Evidence Templates */}
                          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                            <h3 className="text-xl font-bold text-white mb-6">Evidence Templates & Checklists</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  template: 'Access Review Template',
                                  purpose: 'Quarterly user access reviews',
                                  fields: [
                                    'User ID und Name',
                                    'Role assignments',
                                    'Last login date',
                                    'Manager approval',
                                    'Review date',
                                    'Actions taken'
                                  ]
                                },
                                {
                                  template: 'Change Management Record',
                                  purpose: 'System change documentation',
                                  fields: [
                                    'Change ID',
                                    'Requestor und approver',
                                    'Change description',
                                    'Risk assessment',
                                    'Test results',
                                    'Rollback plan'
                                  ]
                                },
                                {
                                  template: 'Incident Response Log',
                                  purpose: 'Security incident tracking',
                                  fields: [
                                    'Incident ID',
                                    'Discovery method',
                                    'Impact assessment',
                                    'Response actions',
                                    'Resolution time',
                                    'Lessons learned'
                                  ]
                                }
                              ].map((template) => (
                                <div key={template.template} className="bg-slate-900/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-white mb-2">{template.template}</h4>
                                  <p className="text-sm text-slate-300 mb-3">{template.purpose}</p>
                                  <ul className="space-y-1">
                                    {template.fields.map((field, idx) => (
                                      <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                                        <Circle className="h-2 w-2 fill-current" />
                                        {field}
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

                {/* Verfügbarkeit Section */}
                <section id="verfuegbarkeit" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Availability Criteria (A1)</h2>
                          <Button
                            onClick={() => handleSectionComplete('availability')}
                            variant={completedSections.includes('availability') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('availability') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-green-300 mb-4">Verfügbarkeits-Anforderungen</h3>
                            <p className="text-slate-300 mb-6">
                              Das System ist für den Betrieb und die Nutzung verfügbar, wie zugesagt oder vereinbart.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-800/50 rounded-lg p-4">
                                <h4 className="font-semibold text-white mb-3">A1.1 - Availability Commitments</h4>
                                <ul className="space-y-2 text-sm text-slate-300">
                                  <li>• System availability commitments dokumentieren</li>
                                  <li>• Service Level Agreements (SLAs) definieren</li>
                                  <li>• Uptime monitoring implementieren</li>
                                  <li>• Performance benchmarks etablieren</li>
                                </ul>
                              </div>
                              <div className="bg-slate-800/50 rounded-lg p-4">
                                <h4 className="font-semibold text-white mb-3">A1.2 - System Monitoring</h4>
                                <ul className="space-y-2 text-sm text-slate-300">
                                  <li>• Kontinuierliche Verfügbarkeitsüberwachung</li>
                                  <li>• Automatische Alerting-Systeme</li>
                                  <li>• Incident Response Procedures</li>
                                  <li>• Capacity Management</li>
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

                {/* Verarbeitung Section */}
                <section id="verarbeitung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Processing Integrity (PI1)</h2>
                          <Button
                            onClick={() => handleSectionComplete('processing')}
                            variant={completedSections.includes('processing') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('processing') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-purple-300 mb-4">Verarbeitungsintegrität</h3>
                            <p className="text-slate-300 mb-6">
                              Die Systemverarbeitung ist vollständig, gültig, genau, zeitgerecht und autorisiert.
                            </p>
                            
                            <div className="space-y-4">
                              {['PI1.1 - Processing Criteria', 'PI1.2 - Error Detection', 'PI1.3 - Input Validation', 'PI1.4 - Processing Monitoring'].map((control, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-white mb-2">{control}</h4>
                                  <p className="text-sm text-slate-300">
                                    {control.includes('PI1.1') && "Definierte Verarbeitungsintegritätskriterien anwenden"}
                                    {control.includes('PI1.2') && "Verarbeitungsfehler erkennen und korrigieren"}
                                    {control.includes('PI1.3') && "Eingaben validieren und autorisieren"}
                                    {control.includes('PI1.4') && "Verarbeitungsaktivitäten überwachen"}
                                  </p>
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

                {/* Vertraulichkeit Section */}
                <section id="vertraulichkeit" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Confidentiality (C1)</h2>
                          <Button
                            onClick={() => handleSectionComplete('confidentiality')}
                            variant={completedSections.includes('confidentiality') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('confidentiality') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Vertraulichkeitsanforderungen</h3>
                            <p className="text-slate-300 mb-6">
                              Als vertraulich bezeichnete Informationen werden wie vereinbart oder zugesagt geschützt.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-slate-800/50 rounded-lg p-4">
                                <h4 className="font-semibold text-white mb-3">C1.1 - Information Classification</h4>
                                <ul className="space-y-2 text-sm text-slate-300">
                                  <li>• Datenklassifizierungsrichtlinien</li>
                                  <li>• Vertraulichkeitskennzeichnung</li>
                                  <li>• Handling Instructions</li>
                                  <li>• Retention Policies</li>
                                </ul>
                              </div>
                              <div className="bg-slate-800/50 rounded-lg p-4">
                                <h4 className="font-semibold text-white mb-3">C1.2 - Access Controls</h4>
                                <ul className="space-y-2 text-sm text-slate-300">
                                  <li>• Role-based Access Control</li>
                                  <li>• Need-to-know Principle</li>
                                  <li>• Encryption at Rest</li>
                                  <li>• Encryption in Transit</li>
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

                {/* Datenschutz Section */}
                <section id="datenschutz" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Privacy Criteria (P1-P8)</h2>
                          <Button
                            onClick={() => handleSectionComplete('privacy')}
                            variant={completedSections.includes('privacy') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('privacy') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-indigo-300 mb-4">Datenschutz-Framework</h3>
                            <p className="text-slate-300 mb-6">
                              Personenbezogene Daten werden im Einklang mit den Datenschutzbestimmungen gesammelt, verwendet, aufbewahrt, offengelegt und entsorgt.
                            </p>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {[
                                { code: 'P1', title: 'Notice & Communication', desc: 'Transparente Datenschutzerklärungen' },
                                { code: 'P2', title: 'Choice & Consent', desc: 'Einwilligung und Wahlmöglichkeiten' },
                                { code: 'P3', title: 'Collection', desc: 'Rechtmäßige Datenerhebung' },
                                { code: 'P4', title: 'Use & Retention', desc: 'Zweckgebundene Nutzung' },
                                { code: 'P5', title: 'Access', desc: 'Betroffenenrechte' },
                                { code: 'P6', title: 'Disclosure', desc: 'Kontrollierte Weitergabe' },
                                { code: 'P7', title: 'Quality', desc: 'Datenqualität & Richtigkeit' },
                                { code: 'P8', title: 'Monitoring', desc: 'Compliance-Überwachung' }
                              ].map((criterion, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-3">
                                  <h4 className="font-semibold text-white text-sm mb-1">{criterion.code} - {criterion.title}</h4>
                                  <p className="text-xs text-slate-300">{criterion.desc}</p>
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

                {/* Kontrollen Section */}
                <section id="kontrollen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Common Controls Framework</h2>
                          <Button
                            onClick={() => handleSectionComplete('controls')}
                            variant={completedSections.includes('controls') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('controls') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-orange-300 mb-4">Gemeinsame Kontrollen (CC1-CC9)</h3>
                            <p className="text-slate-300 mb-6">
                              Diese Kontrollen sind für alle SOC 2 Audits erforderlich und bilden das Fundament der Sicherheitsarchitektur.
                            </p>
                            
                            <div className="space-y-4">
                              {[
                                { id: 'CC1', title: 'Control Environment', desc: 'Governance, Integrität und ethische Werte' },
                                { id: 'CC2', title: 'Communication', desc: 'Interne und externe Kommunikation' },
                                { id: 'CC3', title: 'Risk Assessment', desc: 'Risikobewertung und -management' },
                                { id: 'CC4', title: 'Monitoring', desc: 'Überwachung der Kontrollaktivitäten' },
                                { id: 'CC5', title: 'Control Activities', desc: 'Implementierung von Kontrollen' },
                                { id: 'CC6', title: 'Logical Access', desc: 'Zugriffskontrolle und Authentifizierung' },
                                { id: 'CC7', title: 'System Operations', desc: 'Systembetrieb und Monitoring' },
                                { id: 'CC8', title: 'Change Management', desc: 'Änderungsmanagement' },
                                { id: 'CC9', title: 'Risk Mitigation', desc: 'Risikominderung und Vendor Management' }
                              ].map((control, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h4 className="font-semibold text-white">{control.id} - {control.title}</h4>
                                      <p className="text-sm text-slate-300 mt-1">{control.desc}</p>
                                    </div>
                                    <ChevronRight className="h-5 w-5 text-slate-400" />
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

                {/* Audit-Prozess Section */}
                <section id="audit-prozess" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">SOC 2 Audit Process</h2>
                          <Button
                            onClick={() => handleSectionComplete('audit-process')}
                            variant={completedSections.includes('audit-process') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('audit-process') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-yellow-300 mb-6">Audit-Phasen Übersicht</h3>
                            
                            <div className="space-y-6">
                              {[
                                { phase: '1. Pre-Audit Phase', duration: '2-4 Wochen', tasks: ['Auditor Selection', 'Scope Definition', 'Timeline Planning', 'Contract Negotiation'] },
                                { phase: '2. Planning Phase', duration: '1-2 Wochen', tasks: ['System Understanding', 'Risk Assessment', 'Control Testing Plan', 'Sample Selection'] },
                                { phase: '3. Fieldwork Phase', duration: '3-6 Wochen', tasks: ['Control Testing', 'Evidence Review', 'Interviews', 'Walkthroughs'] },
                                { phase: '4. Reporting Phase', duration: '2-3 Wochen', tasks: ['Draft Report', 'Management Response', 'Final Report', 'Report Distribution'] }
                              ].map((phase, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-white">{phase.phase}</h4>
                                    <Badge variant="outline" className="text-yellow-300 border-yellow-500/30">
                                      {phase.duration}
                                    </Badge>
                                  </div>
                                  <div className="grid md:grid-cols-2 gap-2">
                                    {phase.tasks.map((task, taskIndex) => (
                                      <div key={taskIndex} className="flex items-center text-sm text-slate-300">
                                        <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                                        {task}
                                      </div>
                                    ))}
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

                {/* Überwachung Section */}
                <section id="ueberwachung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Continuous Monitoring</h2>
                          <Button
                            onClick={() => handleSectionComplete('continuous')}
                            variant={completedSections.includes('continuous') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('continuous') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-teal-300 mb-4">Kontinuierliche Überwachung</h3>
                            <p className="text-slate-300 mb-6">
                              Implementierung von kontinuierlichen Monitoring-Prozessen zur Aufrechterhaltung der SOC 2 Compliance.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <h4 className="font-semibold text-white">Monitoring-Bereiche</h4>
                                {['Security Controls', 'Access Management', 'Change Management', 'Incident Response', 'Vendor Management'].map((area, index) => (
                                  <div key={index} className="bg-slate-800/50 rounded-lg p-3">
                                    <div className="flex items-center text-sm text-slate-300">
                                      <Activity className="h-4 w-4 text-teal-400 mr-2" />
                                      {area}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="space-y-4">
                                <h4 className="font-semibold text-white">Automation Tools</h4>
                                {['SIEM Systems', 'GRC Platforms', 'Identity Management', 'Vulnerability Scanners', 'Log Analytics'].map((tool, index) => (
                                  <div key={index} className="bg-slate-800/50 rounded-lg p-3">
                                    <div className="flex items-center text-sm text-slate-300">
                                      <Settings className="h-4 w-4 text-teal-400 mr-2" />
                                      {tool}
                                    </div>
                                  </div>
                                ))}
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

                {/* Tools Section */}
                <section id="tools" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Tools & Automation</h2>
                          <Button
                            onClick={() => handleSectionComplete('tools')}
                            variant={completedSections.includes('tools') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('tools') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-violet-300 mb-6">SOC 2 Automation Stack</h3>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                              {[
                                {
                                  category: 'GRC Platforms',
                                  tools: ['Vanta', 'Drata', 'Strike Graph', 'A-LIGN'],
                                  icon: Shield
                                },
                                {
                                  category: 'Security Tools',
                                  tools: ['Okta', 'AWS CloudTrail', 'Splunk', 'CrowdStrike'],
                                  icon: Lock
                                },
                                {
                                  category: 'Monitoring',
                                  tools: ['DataDog', 'New Relic', 'PagerDuty', 'Prometheus'],
                                  icon: Monitor
                                }
                              ].map((stack, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                                  <div className="flex items-center mb-3">
                                    <stack.icon className="h-5 w-5 text-violet-400 mr-2" />
                                    <h4 className="font-semibold text-white">{stack.category}</h4>
                                  </div>
                                  <div className="space-y-2">
                                    {stack.tools.map((tool, toolIndex) => (
                                      <div key={toolIndex} className="text-sm text-slate-300 flex items-center">
                                        <Zap className="h-3 w-3 text-violet-400 mr-2" />
                                        {tool}
                                      </div>
                                    ))}
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
                          <h2 className="text-3xl font-bold text-white">Certification Path</h2>
                          <Button
                            onClick={() => handleSectionComplete('certification')}
                            variant={completedSections.includes('certification') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('certification') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-amber-300 mb-6">Zertifizierungsweg</h3>
                            
                            <div className="space-y-6">
                              {[
                                { step: 'Type I Readiness', timeline: '3-6 Monate', desc: 'Kontroll-Design und Implementierung' },
                                { step: 'Type I Audit', timeline: '4-6 Wochen', desc: 'Design-Effektivitäts-Assessment' },
                                { step: 'Operating Period', timeline: '6-12 Monate', desc: 'Kontinuierlicher Betrieb der Kontrollen' },
                                { step: 'Type II Audit', timeline: '6-8 Wochen', desc: 'Betriebs-Effektivitäts-Prüfung' },
                                { step: 'Certification', timeline: '2-3 Wochen', desc: 'Finale Berichtserstellung' }
                              ].map((step, index) => (
                                <div key={index} className="flex items-center gap-4">
                                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {index + 1}
                                  </div>
                                  <div className="flex-1 bg-slate-800/50 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                      <h4 className="font-semibold text-white">{step.step}</h4>
                                      <Badge variant="outline" className="text-amber-300 border-amber-500/30">
                                        {step.timeline}
                                      </Badge>
                                    </div>
                                    <p className="text-sm text-slate-300 mt-1">{step.desc}</p>
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

                {/* Vorteile Section */}
                <section id="vorteile" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-3xl font-bold text-white">Business Benefits</h2>
                          <Button
                            onClick={() => handleSectionComplete('benefits')}
                            variant={completedSections.includes('benefits') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('benefits') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-emerald-300 mb-6">ROI und Business Value</h3>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {[
                                { benefit: 'Sales Enablement', impact: '+40% Deal Velocity', desc: 'Schnellere Sales-Zyklen durch vertrauen' },
                                { benefit: 'Risk Reduction', impact: '-75% Security Incidents', desc: 'Proaktive Risikominimierung' },
                                { benefit: 'Competitive Advantage', impact: '95% RFP Requirements', desc: 'Marktvorteile bei Ausschreibungen' },
                                { benefit: 'Operational Excellence', impact: '+60% Process Efficiency', desc: 'Verbesserte interne Prozesse' },
                                { benefit: 'Customer Trust', impact: '+85% Retention Rate', desc: 'Erhöhte Kundenbindung' },
                                { benefit: 'Insurance Benefits', impact: '-30% Premium Costs', desc: 'Reduzierte Versicherungskosten' }
                              ].map((item, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                                  <h4 className="font-semibold text-white mb-2">{item.benefit}</h4>
                                  <div className="text-2xl font-bold text-emerald-400 mb-2">{item.impact}</div>
                                  <p className="text-sm text-slate-300">{item.desc}</p>
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
                          <h2 className="text-3xl font-bold text-white">Resources & Templates</h2>
                          <Button
                            onClick={() => handleSectionComplete('resources')}
                            variant={completedSections.includes('resources') ? 'default' : 'outline'}
                            size="sm"
                          >
                            {completedSections.includes('resources') ? (
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                            ) : (
                              <Circle className="h-4 w-4 mr-2" />
                            )}
                            Als gelesen markieren
                          </Button>
                        </div>

                        <div className="space-y-8">
                          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                            <h3 className="text-2xl font-bold text-blue-300 mb-6">Download-Center</h3>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              {[
                                { title: 'SOC 2 Readiness Checklist', type: 'PDF', desc: 'Vollständige Checkliste für SOC 2 Vorbereitung' },
                                { title: 'Control Matrix Template', type: 'Excel', desc: 'Vorkonfigurierte Kontroll-Matrix' },
                                { title: 'Evidence Collection Guide', type: 'PDF', desc: 'Leitfaden für Evidence-Sammlung' },
                                { title: 'System Description Template', type: 'Word', desc: 'Vorlage für System-Beschreibung' },
                                { title: 'Risk Assessment Framework', type: 'Excel', desc: 'Framework für Risikobewertung' },
                                { title: 'Incident Response Playbook', type: 'PDF', desc: 'Vordefinierte Incident-Prozesse' }
                              ].map((resource, index) => (
                                <div key={index} className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-colors group">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{resource.title}</h4>
                                      <p className="text-sm text-slate-300 mt-1">{resource.desc}</p>
                                      <Badge variant="outline" className="text-blue-300 border-blue-500/30 mt-2">
                                        {resource.type}
                                      </Badge>
                                    </div>
                                    <Download className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Soc2Guide;